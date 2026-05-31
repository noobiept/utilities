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

/**
 * Resolves with the value of `promise` if it settles before `ms` elapses,
 * otherwise rejects with a `TimeoutError`.
 */
export function withTimeout<T>(
    promise: PromiseLike<T>,
    ms: number,
    message?: string
): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const id = setTimeout(() => {
            reject(new TimeoutError(message));
        }, ms);

        Promise.resolve(promise).then(
            (value) => {
                clearTimeout(id);
                resolve(value);
            },
            (err) => {
                clearTimeout(id);
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
    /** Total milliseconds before giving up and rejecting with a `TimeoutError`. */
    timeout: number;
}

/**
 * Calls `check` repeatedly until it returns a truthy value (which is then returned),
 * or until `timeout` is exceeded (rejects with `TimeoutError`).
 */
export async function pollUntil<T>(
    check: () =>
        | Promise<T | false | null | undefined>
        | T
        | false
        | null
        | undefined,
    options: PollOptions
): Promise<T> {
    const { interval, timeout } = options;
    const deadline = Date.now() + timeout;

    while (true) {
        const result = await check();
        if (result) {
            return result as T;
        }
        if (Date.now() >= deadline) {
            throw new TimeoutError("pollUntil timed out");
        }
        await sleep(interval);
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
        lastCallTime = Date.now();
        fn(...args);
    };

    const throttled = ((...args: Args) => {
        const now = Date.now();
        const elapsed = now - lastCallTime;

        if (elapsed >= ms) {
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
