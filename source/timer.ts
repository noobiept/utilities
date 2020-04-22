import { timeToString } from "./time_to_string";
import { isNumber, isFunction } from "./is_type";

/**
 * Count-up or count-down timer. Can optionally update an html element.
 */
export class Timer {
    private is_active = false;
    private start_value = 0;
    private count_down = false;
    private time_count = 0;
    private interval = 1000;

    // these can have the 'undefined' value (which means they aren't set)
    private end_value?: number;
    private end_callback?: () => any;
    private tick_callback?: () => any;
    private interval_f?: number;
    private html_element?: HTMLElement;

    constructor(htmlElement?: HTMLElement) {
        this.html_element = htmlElement;
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
    start(args?: {
        startValue?: number;
        endValue?: number;
        onEnd?: () => void;
        onTick?: () => void;
        countDown?: boolean;
        interval?: number;
    }) {
        if (typeof args === "undefined") {
            args = {};
        }

        if (!isNumber(args.startValue)) {
            args.startValue = 0;
        }

        if (!isNumber(args.endValue)) {
            args.endValue = undefined;
        }

        if (!isFunction(args.onEnd)) {
            args.onEnd = undefined;
        }

        if (!isFunction(args.onTick)) {
            args.onTick = undefined;
        }

        if (args.countDown !== true) {
            args.countDown = false;
        }

        if (!isNumber(args.interval)) {
            args.interval = 1000;
        }

        if (this.is_active) {
            this.stop();
        }

        this.count_down = args.countDown;
        this.time_count = args.startValue;
        this.start_value = args.startValue;
        this.end_value = args.endValue;
        this.interval = args.interval;
        this.end_callback = args.onEnd;
        this.tick_callback = args.onTick;

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
        this.interval_f = window.setInterval(() => {
            // update the counter
            if (this.count_down) {
                this.time_count -= interval;
            } else {
                this.time_count += interval;
            }

            // update the html element with the current time
            this.updateHtmlElement();

            // call the tick callback if there's one
            if (this.tick_callback !== undefined) {
                this.tick_callback();
            }

            // if there's an end value defined, check if we reached it
            if (this.end_value !== undefined) {
                let ended = false;

                if (this.count_down) {
                    if (this.time_count <= this.end_value) {
                        ended = true;
                    }
                } else {
                    if (this.time_count >= this.end_value) {
                        ended = true;
                    }
                }

                if (ended) {
                    this.stop();

                    if (this.end_callback !== undefined) {
                        this.end_callback();
                    }
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

    /**
     * Updates the associated html element (if was given) with the current time value.
     */
    updateHtmlElement() {
        if (this.html_element) {
            this.html_element.innerHTML = this.getTimeString();
        }
    }

    /**
     * Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.
     *
     * @param time In milliseconds.
     */
    add(time: number) {
        this.time_count += time;
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
