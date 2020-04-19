import { range } from "../source/utilities";

describe("range()", () => {
    test("Should create a list with the numbers in-between the given arguments.", () => {
        const result = range(0, 10);

        expect(result.length).toBe(11);
        result.map((value, index) => {
            expect(value).toBe(index);
        });
    });

    test("Should work with negative start number.", () => {
        const result = range(-5, 10);

        expect(result.length).toBe(16);
        result.map((value, index) => {
            expect(value).toBe(index - 5);
        });
    });

    test("The limits are inclusive, so we should always get something.", () => {
        const result = range(5, 5);

        expect(result.length).toBe(1);
        expect(result[0]).toBe(5);
    });

    test("Should return an empty list if 'start' is higher than 'end'.", () => {
        const result = range(10, 5);
        expect(result.length).toBe(0);
    });
});
