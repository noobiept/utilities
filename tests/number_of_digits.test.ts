import { numberOfDigits } from "../source/utilities";

describe("numberOfDigits", () => {
    test("Test with valid arguments.", () => {
        var result = numberOfDigits(4);
        expect(result).toBe(1);

        result = numberOfDigits(12);
        expect(result).toBe(2);

        result = numberOfDigits(-12);
        expect(result).toBe(2);

        result = numberOfDigits(12.11);
        expect(result).toBe(4);

        result = numberOfDigits(-12.34);
        expect(result).toBe(4);
    });
});
