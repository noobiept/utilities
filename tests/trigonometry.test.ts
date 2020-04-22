import {
    calculateAngle,
    calculateDistance,
    toDegrees,
    toRadians,
} from "../source/utilities";

describe("calculateAngle", () => {
    test("Test with valid arguments.", () => {
        let result = calculateAngle(0, 0, 4, 0);
        expect(result).toBe(0);

        result = calculateAngle(0, 0, 0, 4);
        expect(result).toBe(-Math.PI / 2);

        result = calculateAngle(0, 0, -4, 0);
        expect(result).toBe(Math.PI);

        result = calculateAngle(0, 0, 0, -4);
        expect(result).toBe(Math.PI / 2);
    });
});

describe("calculateDistance", () => {
    test("Test with valid arguments.", () => {
        let result = calculateDistance(0, 0, 4, 0);
        expect(result).toBe(4);

        result = calculateDistance(0, 0, 4, 10);
        expect(result).toBe(Math.sqrt(4 * 4 + 10 * 10));

        result = calculateDistance(0, 0, -4, -5);
        expect(result).toBe(Math.sqrt(4 * 4 + 5 * 5));
    });
});

describe("toDegrees", () => {
    test("Test with valid arguments.", () => {
        let result = toDegrees(0);
        expect(result).toBe(0);

        result = toDegrees(Math.PI / 2);
        expect(result).toBe(90);

        result = toDegrees((3 / 2) * Math.PI);
        expect(result).toBe(270);
    });
});

describe("toRadians", () => {
    test("Test with valid arguments.", () => {
        let result = toRadians(0);
        expect(result).toBe(0);

        result = toRadians(90);
        expect(result).toBe(Math.PI / 2);

        result = toRadians(270);
        expect(result).toBe((3 / 2) * Math.PI);
    });
});
