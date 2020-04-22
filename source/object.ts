import { isNumber } from "./is_type";

/**
 * Returns a deep clone/copy of the object.
 */
export function deepClone(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Enum - A way to associate a string name to a number.
 *
 * @param values The `enum` names. Each name will have an associated number.
 * @param start Starting number for the first name. The number is incremented by one for the next name.
 */
export function createEnum(values: string[], start?: number) {
    if (!isNumber(start)) {
        start = 0;
    }

    const obj: { [key: string]: string | number } = {};
    const length = values.length;

    for (let a = 0; a < length; a++) {
        const name = values[a];

        obj[start!] = name;
        obj[name] = start!;

        start = start! + 1;
    }

    return obj;
}
