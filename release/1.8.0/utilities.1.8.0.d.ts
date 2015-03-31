/**
 * Random collection of utilities functions/classes.
 */
declare module Utilities {
    /**
     * Shuffle an array.
     */
    function shuffle(array: any[]): any[];
    /**
     * Detects collision between 2 boxes.
     */
    function boxBoxCollision(oneX: number, oneY: number, oneWidth: number, oneHeight: number, twoX: number, twoY: number, twoWidth: number, twoHeight: number): boolean;
    /**
     * Detects collision between two circles.
     */
    function circleCircleCollision(x1: number, y1: number, radius1: number, x2: number, y2: number, radius2: number): boolean;
    /**
     * Detects collision between a circle and a point.
     */
    function circlePointCollision(circleX: number, circleY: number, circleRadius: number, pointX: number, pointY: number): boolean;
    /**
     * Detects collision between a point and a box.
     */
    function pointBoxCollision(pointX: number, pointY: number, boxX: number, boxY: number, boxWidth: number, boxHeight: number): boolean;
    /**
     * Numeric code of each key.
     */
    var KEY_CODE: {
        "0": number;
        "1": number;
        "2": number;
        "3": number;
        "4": number;
        "5": number;
        "6": number;
        "7": number;
        "8": number;
        "9": number;
        backspace: number;
        tab: number;
        enter: number;
        esc: number;
        space: number;
        end: number;
        home: number;
        leftArrow: number;
        upArrow: number;
        rightArrow: number;
        downArrow: number;
        del: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
        o: number;
        p: number;
        q: number;
        r: number;
        s: number;
        t: number;
        u: number;
        v: number;
        w: number;
        x: number;
        y: number;
        z: number;
        f1: number;
        f2: number;
        f3: number;
        f4: number;
        f5: number;
        f6: number;
        f7: number;
        f8: number;
        f9: number;
        f10: number;
        f11: number;
        f12: number;
    };
    /**
     * Numeric code of each mouse button.
     */
    var MOUSE_CODE: {
        left: number;
        middle: number;
        right: number;
    };
    /**
     * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
     *
     * Throws an `Error` exception if:
     * - `key` is not a string.
     * - `key` wasn't found.
     */
    function getObject(key: string): any;
    /**
     * Saves in the `localStorage` a json string representation of the `value`.
     *
     * Throws an `Error` exception if:
     * - `key` is not a `string`.
     */
    function saveObject(key: string, value: any): void;
    /**
     * @return If it is an array or not.
     */
    function isArray(element: any): boolean;
    /**
     * @return If it is a boolean.
     */
    function isBoolean(element: any): boolean;
    /**
     * @return If it is a function.
     */
    function isFunction(element: any): boolean;
    /**
     * @return If it is an integer.
     */
    function isInteger(value: any): boolean;
    /**
     * @return If it is a number.
     */
    function isNumber(element: any): boolean;
    /**
     * @return If it is a string.
     */
    function isString(element: any): boolean;
    /**
     * Returns a random float number between `min` and `max` (inclusive).
     *
     * Throws an `Error` exception if:
     * - either `min` or `max` is not a `number`.
     * - the minimum value is bigger than the maximum.
     */
    function getRandomFloat(min: number, max: number): number;
    /**
     * Returns a random integer number between `min` and `max` (inclusive).
     *
     * Throws an `Error` exception if:
     * - `min` or `max` isn't an integer.
     * - the minimum value is bigger than the maximum.
     */
    function getRandomInt(min: number, max: number): number;
    /**
     * Returns several different random integers, in the range between `min` and `max` (inclusive).
     *
     * Throws an Error exception if:
     * - `min`, `max` or `howMany` isn't an integer.
     * - the minimum value is bigger than the maximum.
     * - the range is less than the number of integers required.
     */
    function getSeveralRandomInts(min: number, max: number, howMany: number): number[];
    /**
     * Returns the number of digits in a number.
     * It doesn't consider the minus signal, nor the dot (in floats) as a digit.
     *
     * Throws an `Error` exception if:
     * - the argument is not a number.
     */
    function numberOfDigits(theNumber: number): number;
    /**
     * Rounds a number to a specified decimal case.
     *
     * Throws an `Error` exception if:
     * - `num` isn't a number.
     * - `dec` isn't an integer.
     * - `dec` is less than 0.
     */
    function round(num: number, dec: number): number;
    /**
     * Returns a deep clone/copy of the object.
     */
    function deepClone(obj: any): any;
    /**
     * Enum - A way to associate a string name to a number.
     *
     * @param values The `enum` names. Each name will have an associated number.
     * @param start Starting number for the first name. The number is incremented by one for the next name.
     */
    function createEnum(values: string[], start?: number): {};
    /**
     * Used for `class` inheritance (search for parasitic combination inheritance).
     */
    function inheritPrototype(derivedClass: Function, baseClass: Function): void;
    /**
     * Converts a time (in milliseconds) to a string (with the number of days/hours...).
     *
     * The number of units to be shown can be set (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `totalUnits` of 2)).
     *
     * The units available are: day/hour/minute/second.
     *
     * Throws an `Error` exception if:
     * - the `dateMilliseconds` argument isn't a number.
     */
    function timeToString(dateMilliseconds: number, totalUnits?: number): string;
    /**
     * Call a function after a certain time has passed. Uses the `window.setTimeout()`.
     */
    class Timeout {
        is_active: boolean;
        id: number;
        constructor();
        /**
         * Starts the timeout. If there was an active timeout already, that one is canceled.
         *
         * Throws an `Error` exception if:
         * - `functionToCall` isn't a function.
         * - `interval` isn't a number.
         */
        start(functionToCall: Function, interval: number): void;
        /**
         * Cancels the timeout.
         */
        clear(): void;
    }
    /**
     * Count-up or count-down timer. Updates directly to the html element.
     */
    class Timer {
        is_active: boolean;
        start_value: number;
        end_value: number;
        end_callback: () => any;
        tick_callback: () => any;
        count_down: boolean;
        time_count: number;
        interval_f: number;
        html_element: HTMLElement;
        constructor(htmlElement: HTMLElement);
        /**
         * Start counting.
         * If no endValue is given, it never stops counting.
         *
         * `startValue` and `endValue` are in milliseconds.
         *
         * `endCallback` is called when the timer ends (only if an `endValue` was provided).
         *
         * `tickCallback` is called every second.
         */
        start(args?: {
            startValue?: number;
            endValue?: number;
            endCallback?: () => any;
            tickCallback?: () => any;
            countDown?: boolean;
        }): void;
        /**
         * Resumes the timer with the same settings/values that were set before it was stopped.
         */
        resume(): void;
        /**
         * Stop counting.
         */
        stop(): void;
        /**
         * Stops and resets the count.
         */
        reset(): void;
        /**
         * Restart the timer.
         */
        restart(): void;
        /**
         * Adds time to the current value in the timer. So for example, if the timer is right now at 4 seconds, and we add 1000 (1 second), it jumps to 5 seconds.
         *
         * @param time In milliseconds.
         */
        add(time: number): void;
        /**
         * Returns a string with the time passed so far.
         */
        getTimeString(): string;
        /**
         * Returns the time it has passed so far, in seconds.
         */
        getTimeSeconds(): number;
        /**
         * Returns the time it has passed so far, in milliseconds.
         */
        getTimeMilliseconds(): number;
    }
    /**
     * Returns the angle between 2 points in radians.
     * Positive in clockwise direction.
     *
     * Throws an `Error` exception if:
     * - any of the arguments isn't a number.
     */
    function calculateAngle(aX: number, aY: number, bX: number, bY: number): number;
    /**
     * Distance between 2 points.
     *
     * Throws an `Error` exception if:
     * - any of the arguments isn't a number.
     */
    function calculateDistance(aX: number, aY: number, bX: number, bY: number): number;
    /**
     * Converts a number in `radians` to `degrees` and returns it.
     *
     * Throws an `Error` exception if:
     * - the argument isn't a number.
     */
    function toDegrees(radians: number): number;
    /**
     * Converts a number in `degrees` to `radians` and returns it.
     *
     * Throws an `Error` exception if:
     * - the argument isn't a number.
     */
    function toRadians(degrees: number): number;
}
