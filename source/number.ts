// ---------- Number Utilities ---------- //

/**
 * Returns a random float number between `min` and `max` (inclusive).
 */
export function getRandomFloat(min: number, max: number) {
    if (min > max) {
        min = max;
    }

    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer number between `min` and `max` (inclusive).
 */
export function getRandomInt(min: number, max: number) {
    if (min > max) {
        min = max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns several different random integers, in the range between `min` and `max` (inclusive).
 *
 * Throws an Error exception if:
 * - the minimum value is bigger than the maximum.
 * - the range is less than the number of integers required.
 */
export function getSeveralRandomInts(
    min: number,
    max: number,
    howMany: number
): number[] {
    if (min > max || max - min < howMany - 1) {
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
 */
export function numberOfDigits(theNumber: number) {
    if (theNumber < 0) {
        theNumber *= -1;
    }

    var numberString = theNumber.toString().replace(".", "");

    return numberString.length;
}

/**
 * Rounds a number to a specified decimal case.
 */
export function round(num: number, dec: number) {
    if (dec < 0) {
        dec = 0;
    }

    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}
