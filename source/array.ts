import { isArray } from "./is_type";

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
