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
 */
export function getSeveralRandomInts(
    min: number,
    max: number,
    howMany: number
): number[] {
    if (min > max) {
        min = max;
    }

    if (howMany < 1) {
        howMany = 1;
    }

    const picked = [];
    let count = 0;
    let notPickedYet = range(min, max);

    while (count < howMany) {
        const randomPosition = getRandomInt(0, notPickedYet.length - 1);
        const selected = notPickedYet.splice(randomPosition, 1)[0];

        picked.push(selected);
        count++;

        // we've picked all the available numbers, so reset the 'not picked' list so we can keep selecting numbers until we reach the 'howMany' value
        if (notPickedYet.length === 0) {
            notPickedYet = range(min, max);
        }
    }

    return picked;
}

/**
 * Returns the number of digits in a number.
 * It doesn't consider the minus signal, nor the dot (in floats) as a digit.
 */
export function numberOfDigits(theNumber: number) {
    if (theNumber < 0) {
        theNumber *= -1;
    }

    const numberString = theNumber.toString().replace(".", "");

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

/**
 * Create an array with all the numbers in-between the 'start' and 'end' (inclusive).
 */
export function range(start: number, end: number) {
    const list = [];

    for (let a = start; a <= end; a++) {
        list.push(a);
    }

    return list;
}
