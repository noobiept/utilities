/**
 * Random collection of utilities functions/classes.
 */

// ---------- Array Utilities ---------- //

/**
 * Shuffle an array.
 */
export function shuffle(array: any[]) {
    if (!isArray(array)) {
        throw new Error(
            "Utilities.shuffle() -> Invalid 'array' argument. Not an array."
        );
    }

    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // while there's still elements to shuffle
    while (currentIndex !== 0) {
        // pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// ---------- Collision Detection ---------- //

/**
 * Detects collision between 2 boxes.
 */
export function boxBoxCollision(
    oneX: number,
    oneY: number,
    oneWidth: number,
    oneHeight: number,
    twoX: number,
    twoY: number,
    twoWidth: number,
    twoHeight: number
) {
    return !(
        oneY + oneHeight < twoY ||
        oneY > twoY + twoHeight ||
        oneX > twoX + twoWidth ||
        oneX + oneWidth < twoX
    );
}

/**
 * Detects collision between two circles.
 */
export function circleCircleCollision(
    x1: number,
    y1: number,
    radius1: number,
    x2: number,
    y2: number,
    radius2: number
) {
    var distX = x1 - x2;
    var distY = y1 - y2;

    if (
        Math.pow(distX, 2) + Math.pow(distY, 2) <=
        Math.pow(radius1 + radius2, 2)
    ) {
        return true;
    }

    return false;
}

/**
 * Detects collision between a circle and a point.
 */
export function circlePointCollision(
    circleX: number,
    circleY: number,
    circleRadius: number,
    pointX: number,
    pointY: number
) {
    var distanceX = circleX - pointX;
    var distanceY = circleY - pointY;

    // pythagoras
    var squareDistance = distanceX * distanceX + distanceY * distanceY;

    if (squareDistance <= circleRadius * circleRadius) {
        return true;
    }

    return false;
}

/**
 * Detects collision between a point and a box.
 */
export function pointBoxCollision(
    pointX: number,
    pointY: number,
    boxX: number,
    boxY: number,
    boxWidth: number,
    boxHeight: number
) {
    if (
        pointX < boxX ||
        pointX > boxX + boxWidth ||
        pointY < boxY ||
        pointY > boxY + boxHeight
    ) {
        return false;
    }

    return true;
}

// ---------- Events ---------- //

/**
 * Numeric code of each key.
 */
export var KEY_CODE = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    end: 35,
    home: 36,
    leftArrow: 37,
    upArrow: 38,
    rightArrow: 39,
    downArrow: 40,
    del: 46,

    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,

    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,

    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
};

/**
 * Numeric code of each mouse button.
 */
export var MOUSE_CODE = {
    left: 0,
    middle: 1,
    right: 2,
};

// ---------- Local Storage ---------- //

/**
 * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
 *
 * Throws an `Error` exception if:
 * - `key` is not a string.
 * - `key` wasn't found.
 */
export function getObject(key: string) {
    if (!isString(key)) {
        throw new Error(
            "Utilities.getObject() -> Invalid 'key' argument. Not a string."
        );
    }

    var value = localStorage.getItem(key);

    return value && JSON.parse(value);
}

/**
 * Saves in the `localStorage` a json string representation of the `value`.
 *
 * Throws an `Error` exception if:
 * - `key` is not a `string`.
 */
export function saveObject(key: string, value: any) {
    if (!isString(key)) {
        throw new Error(
            "Utilities.saveObject() -> Invalid 'key' argument. Not a string."
        );
    }

    localStorage.setItem(key, JSON.stringify(value));
}

// ---------- Is Type ---------- //

/**
 * @return If it is an array or not.
 */
export function isArray(element: any) {
    return Object.prototype.toString.call(element) === "[object Array]";
}

/**
 * @return If it is a boolean.
 */
export function isBoolean(element: any): element is boolean {
    return (
        element === true ||
        element === false ||
        Object.prototype.toString.call(element) === "[object Boolean]"
    );
}

/**
 * @return If it is a function.
 */
export function isFunction(element: any) {
    return (
        typeof element === "function" &&
        Object.prototype.toString.call(element) === "[object Function]"
    );
}

/**
 * @return If it is an integer.
 */
export function isInteger(value: any): value is number {
    return isNumber(value) && value % 1 === 0;
}

/**
 * @return If it is a number.
 */
export function isNumber(element: any): element is number {
    return (
        typeof element === "number" &&
        !isNaN(parseFloat(<any>element)) &&
        isFinite(element)
    );
}

/**
 * @return If it is a string.
 */
export function isString(element: any): element is string {
    return typeof element === "string" || element instanceof String;
}

// ---------- Number Utilities ---------- //

/**
 * Returns a random float number between `min` and `max` (inclusive).
 *
 * Throws an `Error` exception if:
 * - either `min` or `max` is not a `number`.
 * - the minimum value is bigger than the maximum.
 */
export function getRandomFloat(min: number, max: number) {
    if (!isNumber(min) || !isNumber(max) || min > max) {
        throw new Error(
            "Utilities.getRandomFloat() -> Invalid arguments. Either 'min'/'max' are not numbers, or 'min' > 'max'."
        );
    }

    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer number between `min` and `max` (inclusive).
 *
 * Throws an `Error` exception if:
 * - `min` or `max` isn't an integer.
 * - the minimum value is bigger than the maximum.
 */
export function getRandomInt(min: number, max: number) {
    if (!isInteger(min) || !isInteger(max) || min > max) {
        throw new Error(
            "Utilities.getRandomInt() -> Invalid arguments. Either 'min'/'max' are not integers, or 'min > 'max'."
        );
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns several different random integers, in the range between `min` and `max` (inclusive).
 *
 * Throws an Error exception if:
 * - `min`, `max` or `howMany` isn't an integer.
 * - the minimum value is bigger than the maximum.
 * - the range is less than the number of integers required.
 */
export function getSeveralRandomInts(
    min: number,
    max: number,
    howMany: number
): number[] {
    if (
        !isInteger(min) ||
        !isInteger(max) ||
        !isInteger(howMany) ||
        min > max ||
        max - min < howMany - 1
    ) {
        throw new Error(
            "Utilities.getSeveralRandomInts() -> Invalid arguments."
        );
    }

    let count = 0;
    const numbers: { [key: string]: number } = {};

    while (count < howMany) {
        var randomNumber = getRandomInt(min, max);

        if (typeof numbers[randomNumber] === "undefined") {
            numbers[randomNumber] = randomNumber;
            count++;
        }
    }

    return Object.values(numbers);
}

/**
 * Returns the number of digits in a number.
 * It doesn't consider the minus signal, nor the dot (in floats) as a digit.
 *
 * Throws an `Error` exception if:
 * - the argument is not a number.
 */
export function numberOfDigits(theNumber: number) {
    if (!isNumber(theNumber)) {
        throw new Error(
            "Utilities.numberOfDigits() -> Invalid 'theNumber' argument. Not a number."
        );
    }

    if (theNumber < 0) {
        theNumber *= -1;
    }

    var numberString = theNumber.toString().replace(".", "");

    return numberString.length;
}

/**
 * Rounds a number to a specified decimal case.
 *
 * Throws an `Error` exception if:
 * - `num` isn't a number.
 * - `dec` isn't an integer.
 * - `dec` is less than 0.
 */
export function round(num: number, dec: number) {
    if (!isNumber(num) || !isInteger(dec) || dec < 0) {
        throw new Error("Utilities.round() -> Invalid arguments.");
    }

    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

// ---------- Object Utilities ---------- //

/**
 * Returns a deep clone/copy of the object.
 */
export function deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Enum - A way to associate a string name to a number.
 *
 * @param values The `enum` names. Each name will have an associated number.
 * @param start Starting number for the first name. The number is incremented by one for the next name.
 */
export function createEnum(values: string[], start?: number) {
    if (!isArray(values)) {
        throw new Error(
            "Utilities.createEnum() -> Invalid 'values' argument. Needs to be an array of strings."
        );
    }

    if (!isNumber(start)) {
        start = 0;
    }

    var obj: { [key: string]: string | number } = {};
    var length = values.length;

    for (var a = 0; a < length; a++) {
        let name = values[a];

        obj[start!] = name;
        obj[name] = start!;

        start = start! + 1;
    }

    return obj;
}

// ---------- Time Utilities ---------- //

export interface TimeToStringArgs {
    time: number;
    units?: number;
    format?: "daytime" | "string";
}

/**
 * Converts a time (in milliseconds) to a string (with the number of days/hours...).
 * The units available are: day/hour/minute/second.
 *
 * There's 2 possible display formats.
 * daytime:
 *     `dd hh:mm:ss` (where d=day, h=hour, m=minute, s=second)
 * string:
 *     `(d) days (h) hours (m) minutes (s) seconds`
 *
 * The number of `units` can limit the number of units shown in the string format (days/hours, or hours/minutes or minutes/seconds, and not days/hours/minutes for example (for a `units` with value 2)).
 *
 * Defaults:
 *     units: 2
 *     format: string
 *
 * Throws an `Error` exception if:
 * - the `time` argument isn't a number.
 */
export function timeToString(args: TimeToStringArgs) {
    let { time, units, format } = args;

    // check if we got the required argument
    if (!isNumber(time)) {
        throw new Error(
            "Utilities.timeToString() -> Invalid 'time' argument. Not a number."
        );
    }

    // setup the default values if not provided
    if (!isNumber(units)) {
        units = 2;
    }

    if (format !== "daytime") {
        format = "string";
    }

    // :: convert to days/hours :: //

    //in milliseconds
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    let minutesLeft = 0;
    let hoursLeft = 0;
    let daysLeft = 0;
    let secondsLeft = 0;

    //count the days
    while (time >= day) {
        daysLeft++;
        time -= day;
    }

    //count the hours
    while (time >= hour) {
        hoursLeft++;
        time -= hour;
    }

    //count the minutes
    while (time >= minute) {
        minutesLeft++;
        time -= minute;
    }

    //and the seconds
    secondsLeft = round(time / second, 2);

    // :: construct the string :: //
    let date = "";

    if (format === "daytime") {
        if (daysLeft > 0) {
            date += `${daysLeft} `;
        }

        date += `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
    } else {
        const theDate = [
            { name: "day", time: daysLeft },
            { name: "hour", time: hoursLeft },
            { name: "minute", time: minutesLeft },
            { name: "second", time: secondsLeft },
        ];

        const constructDate = function(dateTmp: string, numberOf: number) {
            // day to days, hour to hours...
            if (numberOf !== 1) {
                dateTmp += "s";
            }

            return numberOf + " " + dateTmp;
        };

        for (let i = 0; i < theDate.length; i++) {
            // reached the limit of the units
            if (units === 0) {
                break;
            }

            let component = theDate[i];

            // only show when there's something relevant to be shown
            // (for example: 0 days 2 hours 2 minutes... no point showing the days part)
            if (component.time !== 0) {
                // add spacing between the units apart from the first one
                if (date !== "") {
                    date += " ";
                }

                date += constructDate(component.name, component.time);
                units--;
            }
        }

        if (date === "") {
            date = "0 seconds";
        }
    }

    return date;
}

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
        // either don't receive an argument, or if given needs to be an HTMLElement
        if (
            typeof htmlElement !== "undefined" &&
            !(htmlElement instanceof HTMLElement)
        ) {
            throw new Error(
                "Utilities.Timer() -> Invalid 'htmlElement' argument. Not an HTML element."
            );
        }

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
                var ended = false;

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

// ---------- Trigonometry ---------- //

/**
 * Returns the angle between 2 points in radians.
 * Positive in clockwise direction.
 *
 * Throws an `Error` exception if:
 * - any of the arguments isn't a number.
 */
export function calculateAngle(aX: number, aY: number, bX: number, bY: number) {
    if (!isNumber(aX) || !isNumber(aY) || !isNumber(bX) || !isNumber(bY)) {
        throw new Error(
            "Utilities.calculateAngle() -> Invalid arguments. Needs to be a number."
        );
    }

    // make a triangle from the position the objectA is in, relative to the objectB position
    var triangleOppositeSide = aY - bY;
    var triangleAdjacentSide = bX - aX;

    // find the angle, given the two sides (of a right triangle)
    return Math.atan2(triangleOppositeSide, triangleAdjacentSide);
}

/**
 * Distance between 2 points.
 *
 * Throws an `Error` exception if:
 * - any of the arguments isn't a number.
 */
export function calculateDistance(
    aX: number,
    aY: number,
    bX: number,
    bY: number
) {
    if (!isNumber(aX) || !isNumber(aY) || !isNumber(bX) || !isNumber(bY)) {
        throw new Error(
            "Utilities.calculateDistance() -> Invalid arguments. Needs to be a number."
        );
    }

    var opposite = bY - aY;
    var adjacent = bX - aX;

    return Math.sqrt(Math.pow(opposite, 2) + Math.pow(adjacent, 2));
}

/**
 * Converts a number in `radians` to `degrees` and returns it.
 *
 * Throws an `Error` exception if:
 * - the argument isn't a number.
 */
export function toDegrees(radians: number) {
    if (!isNumber(radians)) {
        throw new Error(
            "Utilities.toDegrees() -> Invalid 'radians' argument. Not a number."
        );
    }

    return (radians * 180) / Math.PI;
}

/**
 * Converts a number in `degrees` to `radians` and returns it.
 *
 * Throws an `Error` exception if:
 * - the argument isn't a number.
 */
export function toRadians(degrees: number) {
    if (!isNumber(degrees)) {
        throw new Error(
            "Utilities.toRadians() -> Invalid 'degrees' argument. Not a number."
        );
    }

    return (degrees * Math.PI) / 180;
}
