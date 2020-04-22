import {
    range,
    getRandomFloat,
    getRandomInt,
    getSeveralRandomInts,
    numberOfDigits,
    round,
} from "../source/utilities";

describe("getRandomFloat", () => {
    test("Test with valid arguments.", () => {
        let ok;

        // inclusive limits
        let result = getRandomFloat(2, 2);
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

    test("If 'min' is higher than 'max', then it will be set to the same value of 'max'.", () => {
        // will set min: 5, max: 5, so the result will always be that value
        const result = getRandomFloat(10, 5);
        expect(result).toBe(5);
    });
});

describe("getRandomInt", () => {
    test("Test with valid arguments.", () => {
        // inclusive limits
        let result = getRandomInt(4, 4);
        expect(result).toBe(4);

        // a value between -4 and 4
        result = getRandomInt(-4, 4);
        let within = result >= -4 && result <= 4;

        expect(within).toBe(true);

        // zero in one of the range limits
        result = getRandomInt(0, 2);
        within = result >= 0 && result <= 2;

        expect(within).toBe(true);
    });

    test("If 'min' is higher than 'max', then it will be set to the same value of 'max'.", () => {
        // will set min: 5, max: 5, so the result will always be that value
        const result = getRandomInt(10, 5);
        expect(result).toBe(5);
    });
});

describe("getSeveralRandomInts", () => {
    test("Test with valid arguments.", () => {
        let ok;
        let result = getSeveralRandomInts(1, 1, 1);

        // range of 1 with 1 random integer needed
        expect(result).toStrictEqual([1]);

        // a range of 2, with 2 required integers
        result = getSeveralRandomInts(1, 2, 2);
        const range = [1, 2];

        ok = true;

        if (result.length === range.length) {
            for (let a = 0; a < range.length; a++) {
                if (result.indexOf(range[a]) < 0) {
                    ok = false;
                    break;
                }
            }
        } else {
            ok = false;
        }

        expect(ok).toBe(true);

        // a range bigger than the number of required integers
        result = getSeveralRandomInts(-4, 4, 4);
        ok = true;

        if (result.length === 4) {
            for (let a = 0; a < result.length; a++) {
                const value = result[a];

                if (value < -4 || value > 4) {
                    ok = false;
                    break;
                }
            }
        } else {
            ok = false;
        }

        expect(ok).toBe(true);

        // a zero in the range limits
        result = getSeveralRandomInts(0, 0, 1);
        ok = result[0] === 0;

        expect(ok).toBe(true);
    });

    test("Should include at least once each possible value, if the 'howMany' is higher than the range.", () => {
        const result = getSeveralRandomInts(-5, 5, 20);

        expect(result.length).toBe(20);

        range(-5, 5).forEach((value) => {
            expect(result.includes(value)).toBeTruthy();
        });
    });

    test("If 'min' is higher than 'max', then it will be set to the same value of 'max'.", () => {
        // will set min: 5, max: 5, so the result will always be that value
        const result = getSeveralRandomInts(10, 5, 1);
        expect(result[0]).toBe(5);
    });

    test("Should always return one result at least, even if 'howMany' has a value of <1.", () => {
        const result = getSeveralRandomInts(5, 5, -10);
        expect(result[0]).toBe(5);
    });
});

describe("numberOfDigits", () => {
    test("Test with valid arguments.", () => {
        let result = numberOfDigits(4);
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

describe("round", () => {
    test("Test with valid arguments.", () => {
        let result = round(4.22, 1);
        expect(result).toBe(4.2);

        result = round(4.25, 1);
        expect(result).toBe(4.3);

        result = round(-4.5, 0);
        expect(result).toBe(-4);
    });

    test("The minimum decimal case is 0.", () => {
        const result = round(2.123, -1);
        expect(result).toBe(2);
    });
});

describe("range", () => {
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
