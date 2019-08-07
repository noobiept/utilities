import { isNumber, isInteger } from "./is_type";

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
