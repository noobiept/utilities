import * as Utilities from "../source/utilities";

test("Test type", () => {
    var values = [
        { value: 1, expect: true },
        { value: 1.2, expect: true },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: false },
        { value: "a", expect: false },
        { value: "", expect: false },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function () {}, expect: false },
        { value: [], expect: false },
    ];

    for (var a = 0; a < values.length; a++) {
        const valueInfo = values[a];
        const result = Utilities.isNumber(valueInfo.value);

        expect(result).toBe(valueInfo.expect);
    }
});
