import { calculateDistance } from "../source/utilities";

describe("calculateDistance", () => {
    test("Test with valid arguments.", () => {
        var result = calculateDistance(0, 0, 4, 0);
        expect(result).toBe(4);

        result = calculateDistance(0, 0, 4, 10);
        expect(result).toBe(Math.sqrt(4 * 4 + 10 * 10));

        result = calculateDistance(0, 0, -4, -5);
        expect(result).toBe(Math.sqrt(4 * 4 + 5 * 5));
    });
});
