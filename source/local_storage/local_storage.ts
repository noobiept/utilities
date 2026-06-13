/**
 * Returns an object that was obtained by parsing (with json) some data that was saved on `localStorage`.
 * Returns `null` if the key doesn't exist, or if the saved data isn't valid json.
 */
export function getObject(key: string) {
    const value = localStorage.getItem(key);

    if (value === null) {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

/**
 * Saves in the `localStorage` a json string representation of the `value`.
 */
export function saveObject(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}
