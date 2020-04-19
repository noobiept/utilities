import { toDegrees } from "../source/utilities";

describe("toDegrees", () => {
    test("Test with valid arguments.", () => {
        var result = toDegrees(0);
        expect(result).toBe(0);

        result = toDegrees(Math.PI / 2);
        expect(result).toBe(90);

        result = toDegrees((3 / 2) * Math.PI);
        expect(result).toBe(270);
    });
});
