import { calculateAngle } from "../source/utilities";

describe("calculateAngle", () => {
    test("Test with valid arguments.", () => {
        var result = calculateAngle(0, 0, 4, 0);
        expect(result).toBe(0);

        result = calculateAngle(0, 0, 0, 4);
        expect(result).toBe(-Math.PI / 2);

        result = calculateAngle(0, 0, -4, 0);
        expect(result).toBe(Math.PI);

        result = calculateAngle(0, 0, 0, -4);
        expect(result).toBe(Math.PI / 2);
    });
});
