import { getSeveralRandomInts, range } from "../source/utilities";

describe("getSeveralRandomInts", () => {
    test("Test with valid arguments.", () => {
        var ok;
        var result = getSeveralRandomInts(1, 1, 1);

        // range of 1 with 1 random integer needed
        expect(result).toStrictEqual([1]);

        // a range of 2, with 2 required integers
        result = getSeveralRandomInts(1, 2, 2);
        var range = [1, 2];

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
                var value = result[a];

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
});
