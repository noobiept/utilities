// ---------- Async / Control Flow Utilities ---------- //

/**
 * Error thrown by `withTimeout`, `pollUntil`, and other helpers when a deadline is missed.
 */
export class TimeoutError extends Error {
    constructor(message = "Operation timed out") {
        super(message);
        this.name = "TimeoutError";
    }
}

/**
 * Returns a promise that resolves after `ms` milliseconds.
 */
export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// `setTimeout` runs a longer delay (about 24.8 days) after just 1ms
const MAX_DELAY = 2 ** 31 - 1;

/**
 * Like `setTimeout`, but it also works with delays longer than `MAX_DELAY` (an `Infinity` delay never runs).
 * Returns a function that cancels it.
 */
function longTimeout(callback: () => void, ms: number): () => void {
    let id: ReturnType<typeof setTimeout> | undefined;

    const schedule = (remaining: number) => {
        if (remaining === Infinity) {
            return;
        }

        if (remaining > MAX_DELAY) {
            id = setTimeout(() => schedule(remaining - MAX_DELAY), MAX_DELAY);
        } else {
            id = setTimeout(callback, remaining);
        }
    };
    schedule(ms);

    return () => clearTimeout(id);
}

/**
 * Resolves with the value of `promise` if it settles before `ms` elapses,
 * otherwise rejects with a `TimeoutError`. An `Infinity` timeout never rejects.
 */
export function withTimeout<T>(
    promise: PromiseLike<T>,
    ms: number,
    message?: string
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const cancel = longTimeout(() => {
            reject(new TimeoutError(message));
        }, ms);

        Promise.resolve(promise).then(
            (value) => {
                cancel();
                resolve(value);
            },
            (err) => {
                cancel();
                reject(err);
            }
        );
    });
}

export interface Deferred<T> {
    promise: Promise<T>;
    resolve: (value: T | PromiseLike<T>) => void;
    reject: (reason?: unknown) => void;
}

/**
 * Returns an externally-controllable promise — the resolve/reject functions
 * are exposed alongside the promise itself.
 */
export function deferred<T = void>(): Deferred<T> {
    let resolve!: Deferred<T>["resolve"];
    let reject!: Deferred<T>["reject"];

    const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
    });

    return { promise, resolve, reject };
}

export interface RetryOptions {
    /** Total number of attempts (including the first one). Must be >= 1. */
    attempts: number;
    /** Milliseconds to wait between attempts. Defaults to 0 (immediate retry). */
    delay?: number;
    /** Multiplier applied to `delay` after each failed attempt. Defaults to 1 (constant delay). */
    backoff?: number;
    /** Called with the error and the (1-indexed) attempt number after each failure. */
    onError?: (error: unknown, attempt: number) => void;
}

/**
 * Runs `fn`, retrying on rejection up to `attempts` times. Returns the first
 * successful result. If every attempt fails, the last error is re-thrown.
 */
export async function retry<T>(
    fn: () => Promise<T> | T,
    options: RetryOptions
): Promise<T> {
    const { attempts, delay = 0, backoff = 1, onError } = options;
    if (attempts < 1) {
        throw new RangeError("retry: 'attempts' must be >= 1.");
    }
    let currentDelay = delay;
    let lastError: unknown;

    for (let i = 1; i <= attempts; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            onError?.(err, i);

            if (i >= attempts) {
                break;
            }
            if (currentDelay > 0) {
                await sleep(currentDelay);
            }
            currentDelay *= backoff;
        }
    }

    throw lastError;
}

export interface PollOptions {
    /** Milliseconds between checks. */
    interval: number;
    /** Total milliseconds before giving up and rejecting with a `TimeoutError` (including a check that is still running). Use `Infinity` to never give up. */
    timeout: number;
}

/**
 * Calls `check` repeatedly until it returns a truthy value (which is then returned),
 * or until `timeout` is exceeded (rejects with `TimeoutError`).
 */
export async function pollUntil<T>(
    check: () =>
        Promise<T | false | null | undefined> | T | false | null | undefined,
    options: PollOptions
): Promise<T> {
    const { interval, timeout } = options;
    // 'performance.now()' instead of 'Date.now()', so a change to the system clock doesn't move the deadline
    const deadline = performance.now() + timeout;

    while (true) {
        // a check that never settles (a hung request, for example) still times out
        const result = await withTimeout(
            Promise.resolve(check()),
            deadline - performance.now(),
            "pollUntil timed out"
        );
        if (result) {
            return result as T;
        }

        // don't sleep past the deadline, nor start a check after it (it would have no time left, so its result would be thrown away)
        const remaining = deadline - performance.now();
        if (remaining > 0) {
            await sleep(Math.min(interval, remaining));
        }
        if (performance.now() >= deadline) {
            throw new TimeoutError("pollUntil timed out");
        }
    }
}

export interface Debounced<Args extends unknown[]> {
    (...args: Args): void;
    /** Cancel any pending call without invoking `fn`. */
    cancel(): void;
    /** Invoke any pending call immediately. */
    flush(): void;
}

/**
 * Returns a wrapper that delays calling `fn` until `ms` milliseconds have passed
 * since the last invocation. Subsequent calls within that window reset the timer.
 */
export function debounce<Args extends unknown[]>(
    fn: (...args: Args) => void,
    ms: number
): Debounced<Args> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let pendingArgs: Args | undefined;

    const debounced = ((...args: Args) => {
        pendingArgs = args;
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = undefined;
            const a = pendingArgs!;
            pendingArgs = undefined;
            fn(...a);
        }, ms);
    }) as Debounced<Args>;

    debounced.cancel = () => {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
        pendingArgs = undefined;
    };

    debounced.flush = () => {
        if (timer !== undefined && pendingArgs !== undefined) {
            clearTimeout(timer);
            timer = undefined;
            const a = pendingArgs;
            pendingArgs = undefined;
            fn(...a);
        }
    };

    return debounced;
}

export interface Throttled<Args extends unknown[]> {
    (...args: Args): void;
    /** Cancel any pending trailing call and reset the throttle window. */
    cancel(): void;
}

/**
 * Returns a wrapper that calls `fn` at most once per `ms` milliseconds.
 * The first call within an idle window runs immediately (leading edge);
 * additional calls within the window schedule a single trailing call with the latest arguments.
 */
export function throttle<Args extends unknown[]>(
    fn: (...args: Args) => void,
    ms: number
): Throttled<Args> {
    let lastCallTime = -Infinity;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let trailingArgs: Args | undefined;

    const invoke = (args: Args) => {
        lastCallTime = performance.now();
        fn(...args);
    };

    const throttled = ((...args: Args) => {
        // 'performance.now()' instead of 'Date.now()', so a change to the system clock doesn't stop or rush the calls
        const now = performance.now();
        const elapsed = now - lastCallTime;

        if (elapsed >= ms) {
            // the trailing call can still be pending if its timer is late (a busy event loop), it's outdated now
            if (timer !== undefined) {
                clearTimeout(timer);
                timer = undefined;
                trailingArgs = undefined;
            }

            invoke(args);
            return;
        }

        trailingArgs = args;
        if (timer === undefined) {
            timer = setTimeout(() => {
                timer = undefined;
                const a = trailingArgs!;
                trailingArgs = undefined;
                invoke(a);
            }, ms - elapsed);
        }
    }) as Throttled<Args>;

    throttled.cancel = () => {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
        trailingArgs = undefined;
        lastCallTime = -Infinity;
    };

    return throttled;
}
