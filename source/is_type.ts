/**
 * @return If it is an array or not.
 */
export function isArray(element: any) {
    return Object.prototype.toString.call(element) === "[object Array]";
}

/**
 * @return If it is a boolean.
 */
export function isBoolean(element: any): element is boolean {
    return (
        element === true ||
        element === false ||
        Object.prototype.toString.call(element) === "[object Boolean]"
    );
}

/**
 * @return If it is a function.
 */
export function isFunction(element: any) {
    return (
        typeof element === "function" &&
        Object.prototype.toString.call(element) === "[object Function]"
    );
}

/**
 * @return If it is an integer.
 */
export function isInteger(value: any): value is number {
    return isNumber(value) && value % 1 === 0;
}

/**
 * @return If it is a number.
 */
export function isNumber(element: any): element is number {
    return (
        typeof element === "number" &&
        !isNaN(parseFloat(<any>element)) &&
        isFinite(element)
    );
}

/**
 * @return If it is a string.
 */
export function isString(element: any): element is string {
    return typeof element === "string" || element instanceof String;
}
