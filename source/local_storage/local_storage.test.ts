import { describe, test, expect } from "vitest";
import { getObject, saveObject } from "./local_storage";

describe("Local Storage", () => {
    test("Trying to get a key that doesn't exist should return null.", () => {
        const value = getObject("doesn't exist");
        expect(value).toBeFalsy();
    });

    test("Corrupted data (invalid json) should return null instead of throwing.", () => {
        const key = "corrupted";
        localStorage.setItem(key, "{ not valid json");

        expect(getObject(key)).toBeNull();
    });

    test("with valid arguments.", () => {
        const key = "test";
        const testValues = [4, "hi there", { one: 2, three: [4, 5] }];

        testValues.forEach((value) => {
            saveObject(key, value);
            const returnedValue = getObject(key);

            expect(returnedValue).toStrictEqual(value);
        });
    });
});
