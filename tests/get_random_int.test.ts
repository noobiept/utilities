import { getRandomInt } from "../source/utilities";

describe("getRandomInt", () => {
    test("Test with valid arguments.", () => {
        // inclusive limits
        var result = getRandomInt(4, 4);
        expect(result).toBe(4);

        // a value between -4 and 4
        result = getRandomInt(-4, 4);
        var within = result >= -4 && result <= 4;

        expect(within).toBe(true);

        // zero in one of the range limits
        result = getRandomInt(0, 2);
        within = result >= 0 && result <= 2;

        expect(within).toBe(true);
    });
});
