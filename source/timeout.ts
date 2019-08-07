import { isFunction, isNumber } from "./is_type";

/**
 * Call a function after a certain time has passed. Uses the `window.setTimeout()`.
 */
export class Timeout {
    private is_active: boolean;
    private id: number;

    constructor() {
        this.is_active = false;
        this.id = -1;
    }

    /**
     * Starts the timeout. If there was an active timeout already, that one is canceled.
     *
     * Throws an `Error` exception if:
     * - `functionToCall` isn't a function.
     * - `interval` isn't a number.
     */
    start(functionToCall: Function, interval: number) {
        if (!isFunction(functionToCall) || !isNumber(interval)) {
            throw new Error("Utilities.Timeout.start() -> Invalid arguments.");
        }

        if (this.is_active) {
            this.clear();
        }

        this.is_active = true;
        this.id = window.setTimeout(() => {
            this.is_active = false;

            functionToCall();
        }, interval);
    }

    /**
     * Cancels the timeout.
     */
    clear() {
        window.clearTimeout(this.id);
        this.is_active = false;
    }

    /**
     * Returns whether the timeout is active or not.
     */
    isActive() {
        return this.is_active;
    }
}
