import { getRandomFloat } from "../source/utilities";

describe("getRandomFloat", () => {
    test("Test with valid arguments.", () => {
        var ok;

        // inclusive limits
        var result = getRandomFloat(2, 2);
        expect(result).toBe(2);

        // a random value between the limits
        result = getRandomFloat(-4.44, 4.44);
        ok = result >= -4.44 && result <= 4.44;
        expect(ok).toBe(true);

        // zero in one of the range limits
        result = getRandomFloat(0, 4.123);
        ok = result >= 0 && result <= 4.123;

        expect(ok).toBe(true);
    });
});
