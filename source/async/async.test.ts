import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import {
    sleep,
    withTimeout,
    deferred,
    retry,
    pollUntil,
    debounce,
    throttle,
    TimeoutError,
} from "./async";

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
});

describe("sleep", () => {
    test("resolves after the given delay.", async () => {
        const promise = sleep(100);
        let resolved = false;
        promise.then(() => {
            resolved = true;
        });

        await vi.advanceTimersByTimeAsync(50);
        expect(resolved).toBe(false);

        await vi.advanceTimersByTimeAsync(50);
        expect(resolved).toBe(true);
    });
});

describe("withTimeout", () => {
    test("resolves with the inner value when it settles in time.", async () => {
        const inner = sleep(50).then(() => "ok");
        const wrapped = withTimeout(inner, 100);

        await vi.advanceTimersByTimeAsync(50);
        await expect(wrapped).resolves.toBe("ok");
    });

    test("rejects with TimeoutError when the inner promise is too slow.", async () => {
        const inner = sleep(200).then(() => "late");
        const wrapped = withTimeout(inner, 100);

        const rejection = expect(wrapped).rejects.toBeInstanceOf(TimeoutError);
        await vi.advanceTimersByTimeAsync(100);
        await rejection;
    });

    test("propagates the inner promise's rejection if it loses the race.", async () => {
        const inner = sleep(50).then(() => {
            throw new Error("inner failure");
        });
        const wrapped = withTimeout(inner, 100);

        const rejection = expect(wrapped).rejects.toThrow("inner failure");
        await vi.advanceTimersByTimeAsync(50);
        await rejection;
    });
});

describe("deferred", () => {
    test("exposes resolve so external code can settle the promise.", async () => {
        const d = deferred<number>();
        d.resolve(42);
        await expect(d.promise).resolves.toBe(42);
    });

    test("exposes reject so external code can fail the promise.", async () => {
        const d = deferred<number>();
        d.reject(new Error("nope"));
        await expect(d.promise).rejects.toThrow("nope");
    });
});

describe("retry", () => {
    test("returns the first successful result.", async () => {
        let calls = 0;
        const fn = vi.fn(async () => {
            calls++;
            if (calls < 3) throw new Error("fail");
            return "success";
        });

        const promise = retry(fn, { attempts: 5, delay: 10 });
        await vi.advanceTimersByTimeAsync(20);

        await expect(promise).resolves.toBe("success");
        expect(fn).toHaveBeenCalledTimes(3);
    });

    test("rejects with a RangeError when 'attempts' is less than 1.", async () => {
        const fn = vi.fn();
        await expect(retry(fn, { attempts: 0 })).rejects.toBeInstanceOf(
            RangeError
        );
        expect(fn).not.toHaveBeenCalled();
    });

    test("re-throws the last error after exhausting attempts.", async () => {
        const fn = vi.fn(async () => {
            throw new Error("always fails");
        });

        const promise = retry(fn, { attempts: 3, delay: 5 });
        const rejection = expect(promise).rejects.toThrow("always fails");
        await vi.advanceTimersByTimeAsync(15);
        await rejection;

        expect(fn).toHaveBeenCalledTimes(3);
    });

    test("calls onError after each failed attempt.", async () => {
        const onError = vi.fn();
        const fn = vi.fn(async () => {
            throw new Error("boom");
        });

        const promise = retry(fn, { attempts: 2, onError });
        const rejection = expect(promise).rejects.toThrow("boom");
        await vi.advanceTimersByTimeAsync(0);
        await rejection;

        expect(onError).toHaveBeenCalledTimes(2);
        expect(onError).toHaveBeenNthCalledWith(1, expect.any(Error), 1);
        expect(onError).toHaveBeenNthCalledWith(2, expect.any(Error), 2);
    });

    test("applies exponential backoff when 'backoff' > 1.", async () => {
        const timestamps: number[] = [];
        const start = Date.now();
        const fn = vi.fn(async () => {
            timestamps.push(Date.now() - start);
            throw new Error("nope");
        });

        const promise = retry(fn, {
            attempts: 3,
            delay: 100,
            backoff: 2,
        });
        const rejection = expect(promise).rejects.toThrow("nope");

        // attempt 1 at t=0, wait 100 → attempt 2 at t=100, wait 200 → attempt 3 at t=300
        await vi.advanceTimersByTimeAsync(300);
        await rejection;

        expect(timestamps).toStrictEqual([0, 100, 300]);
    });
});

describe("pollUntil", () => {
    test("returns the first truthy value.", async () => {
        let counter = 0;
        const check = vi.fn(() => {
            counter++;
            return counter >= 3 ? `got-${counter}` : undefined;
        });

        const promise = pollUntil(check, { interval: 10, timeout: 1000 });
        await vi.advanceTimersByTimeAsync(30);

        await expect(promise).resolves.toBe("got-3");
    });

    test("rejects with TimeoutError when the check never succeeds.", async () => {
        const check = vi.fn(() => false);

        const promise = pollUntil(check, { interval: 10, timeout: 50 });
        const rejection = expect(promise).rejects.toBeInstanceOf(TimeoutError);
        await vi.advanceTimersByTimeAsync(100);
        await rejection;
    });
});

describe("debounce", () => {
    test("only calls fn once after the wait period, with the last arguments.", () => {
        const fn = vi.fn();
        const d = debounce(fn, 100);

        d("a");
        d("b");
        d("c");
        expect(fn).not.toHaveBeenCalled();

        vi.advanceTimersByTime(99);
        expect(fn).not.toHaveBeenCalled();

        vi.advanceTimersByTime(1);
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith("c");
    });

    test("cancel() prevents the pending call.", () => {
        const fn = vi.fn();
        const d = debounce(fn, 100);

        d("x");
        d.cancel();
        vi.advanceTimersByTime(200);

        expect(fn).not.toHaveBeenCalled();
    });

    test("flush() invokes the pending call immediately.", () => {
        const fn = vi.fn();
        const d = debounce(fn, 100);

        d("x");
        d.flush();

        expect(fn).toHaveBeenCalledWith("x");

        // and there should be no further call after the original delay
        vi.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalledTimes(1);
    });

    test("flush() is a no-op when there's nothing pending.", () => {
        const fn = vi.fn();
        const d = debounce(fn, 100);

        d.flush();
        expect(fn).not.toHaveBeenCalled();
    });
});

describe("throttle", () => {
    test("calls fn immediately on the leading edge.", () => {
        const fn = vi.fn();
        const t = throttle(fn, 100);

        t("a");
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenLastCalledWith("a");
    });

    test("suppresses calls within the throttle window and schedules a trailing call with the latest args.", () => {
        const fn = vi.fn();
        const t = throttle(fn, 100);

        t("a");
        t("b");
        t("c");

        // only the leading edge so far
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenLastCalledWith("a");

        // trailing call fires at the end of the window
        vi.advanceTimersByTime(100);
        expect(fn).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenLastCalledWith("c");
    });

    test("cancel() drops the pending trailing call.", () => {
        const fn = vi.fn();
        const t = throttle(fn, 100);

        t("a");
        t("b");
        t.cancel();

        vi.advanceTimersByTime(200);
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenLastCalledWith("a");
    });
});

describe("TimeoutError", () => {
    test("has the right name and instanceof.", () => {
        const err = new TimeoutError("custom");
        expect(err).toBeInstanceOf(Error);
        expect(err).toBeInstanceOf(TimeoutError);
        expect(err.name).toBe("TimeoutError");
        expect(err.message).toBe("custom");
    });

    test("uses a default message when none is provided.", () => {
        const err = new TimeoutError();
        expect(err.message).toBe("Operation timed out");
    });
});
