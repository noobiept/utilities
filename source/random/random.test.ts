import { describe, test, expect } from "vitest";
import { pickOne, pickN, weightedPick, seededRandom } from "./random";

describe("pickOne", () => {
    test("returns an element from the array.", () => {
        const array = [1, 2, 3, 4];
        const result = pickOne(array);
        expect(array.includes(result!)).toBe(true);
    });

    test("returns undefined for an empty array.", () => {
        expect(pickOne([])).toBeUndefined();
    });

    test("returns the only element when the array has length 1.", () => {
        expect(pickOne(["only"])).toBe("only");
    });
});

describe("pickN", () => {
    test("returns 'n' distinct elements from the array.", () => {
        const array = [1, 2, 3, 4, 5];
        const result = pickN(array, 3);

        expect(result.length).toBe(3);
        // all picked elements come from the source array
        result.forEach((value) => expect(array.includes(value)).toBe(true));
        // no duplicates
        expect(new Set(result).size).toBe(result.length);
    });

    test("returns all elements (shuffled) when 'n' is greater than the array length.", () => {
        const array = [1, 2, 3];
        const result = pickN(array, 10);

        expect(result.length).toBe(3);
        expect(result.slice().sort()).toStrictEqual([1, 2, 3]);
    });

    test("returns an empty array when 'n' is less than 1.", () => {
        expect(pickN([1, 2, 3], 0)).toStrictEqual([]);
        expect(pickN([1, 2, 3], -5)).toStrictEqual([]);
    });

    test("returns an empty array when the source array is empty.", () => {
        expect(pickN([], 3)).toStrictEqual([]);
    });

    test("does not mutate the source array.", () => {
        const array = [1, 2, 3, 4, 5];
        const snapshot = array.slice();
        pickN(array, 2);
        expect(array).toStrictEqual(snapshot);
    });
});

describe("weightedPick", () => {
    test("only returns items whose weight is positive.", () => {
        const items = ["a", "b", "c"];
        const weights = [0, 1, 0];

        for (let i = 0; i < 50; i++) {
            expect(weightedPick(items, weights)).toBe("b");
        }
    });

    test("favours higher-weighted items over many samples.", () => {
        const items = ["rare", "common"];
        const weights = [1, 99];
        const counts: Record<string, number> = { rare: 0, common: 0 };

        for (let i = 0; i < 2000; i++) {
            counts[weightedPick(items, weights)!]++;
        }

        expect(counts.common).toBeGreaterThan(counts.rare);
    });

    test("returns undefined when both inputs are empty.", () => {
        expect(weightedPick([], [])).toBeUndefined();
    });

    test("returns undefined when the total weight is 0.", () => {
        expect(weightedPick(["a", "b"], [0, 0])).toBeUndefined();
        expect(weightedPick(["a", "b"], [-1, -2])).toBeUndefined();
    });

    test("treats negative weights as 0.", () => {
        const items = ["a", "b"];
        const weights = [-100, 1];

        for (let i = 0; i < 50; i++) {
            expect(weightedPick(items, weights)).toBe("b");
        }
    });

    test("falls back to the shorter length when item/weight counts differ.", () => {
        // weight for 'c' is ignored because items[] is shorter
        expect(weightedPick(["a", "b"], [0, 1, 100])).toBe("b");
    });
});

describe("seededRandom", () => {
    test("produces the same sequence for the same seed.", () => {
        const a = seededRandom(42);
        const b = seededRandom(42);

        for (let i = 0; i < 10; i++) {
            expect(a.next()).toBe(b.next());
        }
    });

    test("produces different sequences for different seeds.", () => {
        const a = seededRandom(1);
        const b = seededRandom(2);

        // can't guarantee all values differ, but the first one should be plenty
        expect(a.next()).not.toBe(b.next());
    });

    test("next() returns floats in [0, 1).", () => {
        const rng = seededRandom(123);
        for (let i = 0; i < 100; i++) {
            const value = rng.next();
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThan(1);
        }
    });

    test("int() respects inclusive bounds.", () => {
        const rng = seededRandom(7);
        for (let i = 0; i < 100; i++) {
            const value = rng.int(-3, 3);
            expect(value).toBeGreaterThanOrEqual(-3);
            expect(value).toBeLessThanOrEqual(3);
            expect(Number.isInteger(value)).toBe(true);
        }
    });

    test("int() clamps 'min' to 'max' when min > max (matches existing helpers).", () => {
        const rng = seededRandom(7);
        expect(rng.int(10, 5)).toBe(5);
    });

    test("float() returns values in the half-open range [min, max).", () => {
        const rng = seededRandom(7);
        for (let i = 0; i < 100; i++) {
            const value = rng.float(-2.5, 2.5);
            expect(value).toBeGreaterThanOrEqual(-2.5);
            expect(value).toBeLessThan(2.5);
        }
    });

    test("pickOne() returns elements from the array (or undefined when empty).", () => {
        const rng = seededRandom(99);
        const array = [10, 20, 30];

        for (let i = 0; i < 20; i++) {
            expect(array.includes(rng.pickOne(array)!)).toBe(true);
        }

        expect(rng.pickOne([])).toBeUndefined();
    });

    test("pickN() returns 'n' distinct elements without replacement.", () => {
        const rng = seededRandom(99);
        const array = [1, 2, 3, 4, 5];
        const result = rng.pickN(array, 3);

        expect(result.length).toBe(3);
        expect(new Set(result).size).toBe(3);
    });

    test("shuffle() preserves the elements but reorders them deterministically.", () => {
        const a = seededRandom(2026).shuffle([1, 2, 3, 4, 5]);
        const b = seededRandom(2026).shuffle([1, 2, 3, 4, 5]);

        expect(a).toStrictEqual(b);
        expect(a.slice().sort()).toStrictEqual([1, 2, 3, 4, 5]);
    });

    test("float() clamps 'min' to 'max' when min > max.", () => {
        const rng = seededRandom(7);
        expect(rng.float(10, 5)).toBe(5);
    });

    test("pickN() returns all elements when 'n' is greater than the array length.", () => {
        const rng = seededRandom(7);
        const result = rng.pickN([1, 2, 3], 10);

        expect(result.length).toBe(3);
        expect(result.slice().sort()).toStrictEqual([1, 2, 3]);
    });

    test("pickN() returns an empty array for invalid inputs.", () => {
        const rng = seededRandom(7);
        expect(rng.pickN([], 3)).toStrictEqual([]);
        expect(rng.pickN([1, 2, 3], 0)).toStrictEqual([]);
    });

    test("weightedPick() returns undefined when inputs are empty or all weights are 0.", () => {
        const rng = seededRandom(7);
        expect(rng.weightedPick([], [])).toBeUndefined();
        expect(rng.weightedPick(["a", "b"], [0, 0])).toBeUndefined();
    });

    test("weightedPick() is reproducible across two generators with the same seed.", () => {
        const items = ["a", "b", "c"];
        const weights = [1, 2, 3];

        const a = seededRandom(55);
        const b = seededRandom(55);

        for (let i = 0; i < 20; i++) {
            expect(a.weightedPick(items, weights)).toBe(
                b.weightedPick(items, weights)
            );
        }
    });
});
