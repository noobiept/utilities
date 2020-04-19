/**
 * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
 */
export function getObject(key: string) {
    const value = localStorage.getItem(key);

    return value && JSON.parse(value);
}

/**
 * Saves in the `localStorage` a json string representation of the `value`.
 */
export function saveObject(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}
