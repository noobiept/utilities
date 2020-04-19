import { getSeveralRandomInts } from "../source/utilities";

describe("getSeveralRandomInts", () => {
    test("Validate arguments.", () => {
        // max less than min
        expect(function () {
            getSeveralRandomInts(3, 2, 5);
        }).toThrow();

        // try to get more integers than the range of values provided
        expect(function () {
            getSeveralRandomInts(1, 2, 3);
        }).toThrow();
    });

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
});
