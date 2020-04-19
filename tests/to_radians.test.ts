import { toRadians } from "../source/utilities";

describe("toRadians", () => {
    test("Test with valid arguments.", () => {
        var result = toRadians(0);
        expect(result).toBe(0);

        result = toRadians(90);
        expect(result).toBe(Math.PI / 2);

        result = toRadians(270);
        expect(result).toBe((3 / 2) * Math.PI);
    });
});
