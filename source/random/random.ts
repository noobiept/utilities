import { shuffle } from "../array/array";

// ---------- Random Utilities ---------- //

/**
 * Returns a random element from the given array, or `undefined` if the array is empty.
 */
export function pickOne<T>(array: readonly T[]): T | undefined {
    if (array.length === 0) {
        return undefined;
    }

    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

/**
 * Returns `n` random elements from the array, without replacement.
 * If `n` is greater than the array length, all elements are returned in random order.
 * If `n` is less than 1, an empty array is returned.
 */
export function pickN<T>(array: readonly T[], n: number): T[] {
    if (n < 1 || array.length === 0) {
        return [];
    }

    const copy = array.slice();
    shuffle(copy);

    if (n >= copy.length) {
        return copy;
    }

    return copy.slice(0, n);
}

/**
 * Returns a random item picked according to the given weights.
 * `items` and `weights` are matched by index — higher weight means more likely.
 *
 * Negative weights are treated as 0. If the lengths differ, the shorter one wins.
 * Returns `undefined` if there's nothing to pick from or the total weight is 0.
 */
export function weightedPick<T>(
    items: readonly T[],
    weights: readonly number[]
): T | undefined {
    const length = Math.min(items.length, weights.length);

    if (length === 0) {
        return undefined;
    }

    let total = 0;
    for (let i = 0; i < length; i++) {
        if (weights[i] > 0) {
            total += weights[i];
        }
    }

    if (total === 0) {
        return undefined;
    }

    let roll = Math.random() * total;
    for (let i = 0; i < length; i++) {
        if (weights[i] > 0) {
            roll -= weights[i];
            if (roll < 0) {
                return items[i];
            }
        }
    }

    return undefined;
}

/**
 * Seeded random number generator, returns an object with the same shape as the
 * stand-alone helpers but with reproducible output for a given `seed`.
 *
 * Uses mulberry32 internally — fast, small, and good enough for games, tests, and
 * procedural generation. Not suitable for cryptography.
 */
export function seededRandom(seed: number) {
    const next = mulberry32(seed);

    function float(min: number, max: number) {
        if (min > max) {
            min = max;
        }
        return next() * (max - min) + min;
    }

    function int(min: number, max: number) {
        if (min > max) {
            min = max;
        }
        return Math.floor(next() * (max - min + 1)) + min;
    }

    function pickOne<T>(array: readonly T[]): T | undefined {
        if (array.length === 0) {
            return undefined;
        }
        return array[Math.floor(next() * array.length)];
    }

    function shuffleInPlace<T>(array: T[]): T[] {
        let currentIndex = array.length;
        while (currentIndex !== 0) {
            const randomIndex = Math.floor(next() * currentIndex);
            currentIndex--;

            const temp = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array;
    }

    function pickN<T>(array: readonly T[], n: number): T[] {
        if (n < 1 || array.length === 0) {
            return [];
        }

        const copy = array.slice();
        shuffleInPlace(copy);

        if (n >= copy.length) {
            return copy;
        }
        return copy.slice(0, n);
    }

    function weightedPick<T>(
        items: readonly T[],
        weights: readonly number[]
    ): T | undefined {
        const length = Math.min(items.length, weights.length);

        if (length === 0) {
            return undefined;
        }

        let total = 0;
        for (let i = 0; i < length; i++) {
            if (weights[i] > 0) {
                total += weights[i];
            }
        }

        if (total === 0) {
            return undefined;
        }

        let roll = next() * total;
        for (let i = 0; i < length; i++) {
            if (weights[i] > 0) {
                roll -= weights[i];
                if (roll < 0) {
                    return items[i];
                }
            }
        }

        return undefined;
    }

    return {
        next,
        float,
        int,
        pickOne,
        pickN,
        weightedPick,
        shuffle: shuffleInPlace,
    };
}

export type SeededRandom = ReturnType<typeof seededRandom>;

// mulberry32 — public-domain seeded PRNG, ~10 lines, returns floats in [0, 1).
function mulberry32(seed: number) {
    let a = seed >>> 0;
    return function () {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
