/**
 * Shuffle an array.
 */
export function shuffle(array: any[]) {
    let currentIndex = array.length;

    // while there's still elements to shuffle
    while (currentIndex !== 0) {
        // pick a remaining element
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap it with the current element
        const temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
