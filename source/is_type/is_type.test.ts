import { describe, test, expect } from "vitest";
import {
    isArray,
    isBoolean,
    isFunction,
    isInteger,
    isNumber,
    isString,
} from "./is_type";

describe("isArray", () => {
    test("type.", () => {
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
            { value: new Int8Array(2), expect: false },
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
    test("type", () => {
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
            { value: false, expect: true },
            { value: new Boolean(true), expect: false },
            { value: new Boolean(false), expect: false },
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
    test("type", () => {
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
            { value: () => {}, expect: true },
            { value: async function () {}, expect: true },
            { value: async () => {}, expect: true },
            { value: function* () {}, expect: true },
            { value: async function* () {}, expect: true },
            { value: class {}, expect: true },
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
    test("type", () => {
        const values = [
            { value: 1, expect: true },
            { value: 0, expect: true },
            { value: -5, expect: true },
            { value: Number.MAX_SAFE_INTEGER, expect: true },
            { value: 1.2, expect: false },
            { value: -5.5, expect: false },
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
    test("type", () => {
        const values = [
            { value: 1, expect: true },
            { value: 0, expect: true },
            { value: -5.5, expect: true },
            { value: -0, expect: true },
            { value: 1.2, expect: true },
            { value: new Number(5), expect: false },
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
    test("type", () => {
        const values = [
            { value: 1, expect: false },
            { value: 1.2, expect: false },
            { value: NaN, expect: false },
            { value: Infinity, expect: false },
            { value: "1.3", expect: true },
            { value: "a", expect: true },
            { value: "", expect: true },
            { value: new String("a"), expect: false },
            { value: new String(""), expect: false },
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
