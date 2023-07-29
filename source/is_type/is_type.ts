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
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(element: any): element is Function {
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
        !isNaN(parseFloat(element as any)) &&
        isFinite(element)
    );
}

/**
 * @return If it is a string.
 */
export function isString(element: any): element is string {
    return typeof element === "string" || element instanceof String;
}
