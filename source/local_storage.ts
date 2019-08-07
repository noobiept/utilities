import { isString } from "./is_type";

/**
 * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
 *
 * Throws an `Error` exception if:
 * - `key` is not a string.
 * - `key` wasn't found.
 */
export function getObject(key: string) {
    if (!isString(key)) {
        throw new Error(
            "Utilities.getObject() -> Invalid 'key' argument. Not a string."
        );
    }

    var value = localStorage.getItem(key);

    return value && JSON.parse(value);
}

/**
 * Saves in the `localStorage` a json string representation of the `value`.
 *
 * Throws an `Error` exception if:
 * - `key` is not a `string`.
 */
export function saveObject(key: string, value: any) {
    if (!isString(key)) {
        throw new Error(
            "Utilities.saveObject() -> Invalid 'key' argument. Not a string."
        );
    }

    localStorage.setItem(key, JSON.stringify(value));
}
