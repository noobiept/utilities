import * as Utilities from "../source/utilities";

test("Test type", () => {
    var values = [
        { value: 1, expect: false },
        { value: 1.2, expect: false },
        { value: NaN, expect: false },
        { value: Infinity, expect: false },
        { value: "1.3", expect: true },
        { value: "a", expect: true },
        { value: "", expect: true },
        { value: undefined, expect: false },
        { value: null, expect: false },
        { value: true, expect: false },
        { value: {}, expect: false },
        { value: function() {}, expect: false },
        { value: [], expect: false },
    ];

    for (var a = 0; a < values.length; a++) {
        const valueInfo = values[a];
        const result = Utilities.isString(valueInfo.value);

        expect(result).toBe(valueInfo.expect);
    }
});
