import { round } from "../source/utilities";

describe("round", () => {
    test("Test with valid arguments.", () => {
        var result = round(4.22, 1);
        expect(result).toBe(4.2);

        result = round(4.25, 1);
        expect(result).toBe(4.3);

        result = round(-4.5, 0);
        expect(result).toBe(-4);
    });
});
