import { isArray, isString, isNumber } from "./is_type";

/**
 * Random collection of utilities functions/classes.
 */

// export all the functions/classes/etc from the main entry point (this file)
export * from "./time_to_string";
export * from "./timer";
export * from "./timeout";
export * from "./is_type";
export * from "./number";

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
