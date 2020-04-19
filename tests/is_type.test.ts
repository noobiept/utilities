import * as Utilities from "../source/utilities";

describe("isArray", () => {
    test("Test type.", () => {
        var values = [
            { value: 1, expect: false },
            { value: 1.2, expect: false },
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
            { value: [], expect: true },
        ];

        for (let a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = Utilities.isArray(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isBoolean", () => {
    test("Test type", () => {
        var values = [
            { value: 1, expect: false },
            { value: 1.2, expect: false },
            { value: NaN, expect: false },
            { value: Infinity, expect: false },
            { value: "1.3", expect: false },
            { value: "a", expect: false },
            { value: "", expect: false },
            { value: undefined, expect: false },
            { value: null, expect: false },
            { value: true, expect: true },
            { value: {}, expect: false },
            { value: function () {}, expect: false },
            { value: [], expect: false },
        ];

        for (var a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = Utilities.isBoolean(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isFunction", () => {
    test("Test type", () => {
        var values = [
            { value: 1, expect: false },
            { value: 1.2, expect: false },
            { value: NaN, expect: false },
            { value: Infinity, expect: false },
            { value: "1.3", expect: false },
            { value: "a", expect: false },
            { value: "", expect: false },
            { value: undefined, expect: false },
            { value: null, expect: false },
            { value: true, expect: false },
            { value: {}, expect: false },
            { value: function () {}, expect: true },
            { value: [], expect: false },
        ];

        for (var a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = Utilities.isFunction(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isInteger", () => {
    test("Test type", () => {
        var values = [
            { value: 1, expect: true },
            { value: 1.2, expect: false },
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
            const result = Utilities.isInteger(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isNumber", () => {
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
});

describe("isString", () => {
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
            { value: function () {}, expect: false },
            { value: [], expect: false },
        ];

        for (var a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = Utilities.isString(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});
