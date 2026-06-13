import {
    timeToString,
    TimeToStringArgs,
} from "../time_to_string/time_to_string";
import { isNumber, isFunction } from "../is_type/is_type";

export type UpdateFormat =
    | Omit<TimeToStringArgs, "time">
    | ((timer: Timer) => string);

export type UpdateElement = {
    element: HTMLElement;
    format?: UpdateFormat;
};

export interface TimerArgs {
    updateElement?: UpdateElement;
}

export interface TimerStartArgs {
    startValue?: number;
    endValue?: number;
    onEnd?: () => void;
    onTick?: () => void;
    countDown?: boolean;
    interval?: number;
}

/**
 * Count-up or count-down timer. Can optionally update an html element.
 */
export class Timer {
    private is_active = false;
    private start_value = 0;
    private count_down = false;
    private time_count = 0;
    private interval = 1000;
    private tick_base = 0; // 'time_count' value when the timer was last resumed
    private resumed_at = 0; // monotonic timestamp of the last resume

    private end_value?: number;
    private end_callback?: () => any;
    private tick_callback?: () => any;
    private interval_f?: number;
    private element?: HTMLElement;
    private update_html?: (timer: Timer) => string;

    constructor(args?: TimerArgs) {
        const updateElement = args?.updateElement;

        if (updateElement) {
            this.element = updateElement.element;
            this.setUpdateFormat(updateElement.format);
        }

        this.updateHtmlElement();
    }

    /**
     * Start counting.
     * If no endValue is given, it never stops counting.
     *
     * `startValue` and `endValue` are in milliseconds.
     *
     * `onEnd` is called when the timer ends (only if an `endValue` was provided).
     * `onTick` is called every second.
     * `countDown` if it counts up or down (default is count up).
     * `interval` time in between each tick (default is 1000 milliseconds).
     */
    start(args: TimerStartArgs = {}) {
        // setup the default values (without mutating the caller's 'args' object)
        const startValue = isNumber(args.startValue) ? args.startValue : 0;
        const endValue = isNumber(args.endValue) ? args.endValue : undefined;
        const onEnd = isFunction(args.onEnd) ? args.onEnd : undefined;
        const onTick = isFunction(args.onTick) ? args.onTick : undefined;
        const countDown = args.countDown === true;
        const interval = isNumber(args.interval) ? args.interval : 1000;

        if (this.is_active) {
            this.stop();
        }

        this.count_down = countDown;
        this.time_count = startValue;
        this.start_value = startValue;
        this.end_value = endValue;
        this.interval = interval;
        this.end_callback = onEnd;
        this.tick_callback = onTick;

        this.updateHtmlElement();
        this.resume();
    }

    /**
     * Resumes the timer with the same settings/values that were set before it was stopped.
     */
    resume() {
        if (this.is_active) {
            return;
        }

        const interval = this.interval;

        this.is_active = true;
        this.tick_base = this.time_count;
        this.resumed_at = performance.now();

        this.interval_f = window.setInterval(() => {
            // count the ticks from a monotonic clock, so the counter doesn't drift away from elapsed time (intervals aren't exact, and browsers throttle timers on background tabs)
            const elapsed = performance.now() - this.resumed_at;
            const total = Math.round(elapsed / interval) * interval;
            const nextTimeCount = this.count_down
                ? this.tick_base - total
                : this.tick_base + total;
            const endValue = this.end_value;
            const crossedEnd =
                endValue !== undefined &&
                (this.count_down
                    ? this.time_count > endValue && nextTimeCount <= endValue
                    : this.time_count < endValue && nextTimeCount >= endValue);
            const ended =
                endValue !== undefined &&
                (this.count_down
                    ? nextTimeCount <= endValue
                    : nextTimeCount >= endValue);

            this.time_count = crossedEnd ? endValue : nextTimeCount;

            // update the html element with the current time
            this.updateHtmlElement();

            // call the tick callback if there's one
            if (this.tick_callback !== undefined) {
                this.tick_callback();
            }

            // if there's an end value defined, check if we reached it
            if (ended) {
                this.stop();

                if (this.end_callback !== undefined) {
                    this.end_callback();
                }
            }
        }, interval);
    }

    /**
     * Stop counting.
     */
    stop() {
        if (this.interval_f) {
            window.clearInterval(this.interval_f);
            this.interval_f = undefined;
        }

        this.is_active = false;
    }

    /**
     * Stops and resets the count.
     */
    reset() {
        this.stop();

        this.time_count = this.start_value;
        this.updateHtmlElement();
    }

    /**
     * Restart the timer.
     */
    restart() {
        this.reset();
        this.start({
            startValue: this.start_value,
            endValue: this.end_value,
            onEnd: this.end_callback,
            onTick: this.tick_callback,
            countDown: this.count_down,
            interval: this.interval,
        });
    }

    setUpdateFormat(format?: UpdateFormat) {
        if (isFunction(format)) {
            this.update_html = format;
        } else {
            this.update_html = (timer: Timer) => {
                return timeToString({
                    time: timer.time_count,
                    ...format,
                });
            };
        }
    }

    /**
     * Updates the associated html element (if was given) with the current time value.
     */
    updateHtmlElement() {
        if (this.element && this.update_html) {
            this.element.textContent = this.update_html(this);
        }
    }

    /**
     * Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.
     *
     * @param time In milliseconds.
     */
    add(time: number) {
        this.time_count += time;
        this.tick_base += time; // keep the active tick computation in sync
    }

    /**
     * Returns a string with the time passed so far.
     */
    getTimeString() {
        return timeToString({ time: this.time_count });
    }

    /**
     * Returns the time it has passed so far, in seconds.
     */
    getTimeSeconds() {
        return this.time_count / 1000;
    }

    /**
     * Returns the time it has passed so far, in milliseconds.
     */
    getTimeMilliseconds() {
        return this.time_count;
    }

    /**
     * Returns whether the timer is currently active or not.
     */
    isActive() {
        return this.is_active;
    }
}
