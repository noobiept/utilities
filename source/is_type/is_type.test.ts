import {
    isArray,
    isBoolean,
    isFunction,
    isInteger,
    isNumber,
    isString,
} from "./is_type";

describe("isArray", () => {
    test("Test type.", () => {
        const values = [
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
            const result = isArray(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isBoolean", () => {
    test("Test type", () => {
        const values = [
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

        for (let a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = isBoolean(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isFunction", () => {
    test("Test type", () => {
        const values = [
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

        for (let a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = isFunction(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isInteger", () => {
    test("Test type", () => {
        const values = [
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

        for (let a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = isInteger(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isNumber", () => {
    test("Test type", () => {
        const values = [
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

        for (let a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = isNumber(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});

describe("isString", () => {
    test("Test type", () => {
        const values = [
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

        for (let a = 0; a < values.length; a++) {
            const valueInfo = values[a];
            const result = isString(valueInfo.value);

            expect(result).toBe(valueInfo.expect);
        }
    });
});
