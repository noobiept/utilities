import { shuffle } from "./array";

describe("shuffle", () => {
    test("with valid arguments.", () => {
        const test = [1, 2, 3, 4];
        const length = test.length;

        shuffle(test);

        // should still have the same length
        expect(test.length).toBe(length);

        // see if the same values are still there (just on different order)
        expect(test.indexOf(1) >= 0).toBe(true);
        expect(test.indexOf(2) >= 0).toBe(true);
        expect(test.indexOf(3) >= 0).toBe(true);
        expect(test.indexOf(4) >= 0).toBe(true);
    });
});
