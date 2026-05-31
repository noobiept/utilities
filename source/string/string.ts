// ---------- String Utilities ---------- //

/**
 * Converts a string to a URL-friendly slug.
 * Lowercases, strips diacritics, collapses non-alphanumerics into single hyphens, and trims edges.
 */
export function slugify(str: string): string {
    return str
        .normalize("NFKD")
        .replace(/\p{M}/gu, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/**
 * Truncates `str` so the result is at most `length` characters long.
 * The ellipsis (default `"..."`) is included in the length budget. If the input
 * already fits, it's returned unchanged.
 */
export function truncate(
    str: string,
    length: number,
    ellipsis = "..."
): string {
    if (str.length <= length) {
        return str;
    }
    if (length <= ellipsis.length) {
        return ellipsis.slice(0, Math.max(0, length));
    }
    return str.slice(0, length - ellipsis.length) + ellipsis;
}

/**
 * Uppercases the first character of the string. The rest is left untouched.
 */
export function capitalize(str: string): string {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Escapes the five HTML metacharacters (`& < > " '`) so the result is safe to
 * interpolate into HTML text content or attribute values.
 */
export function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Escapes regex metacharacters so the string can be used as a literal inside a `RegExp`.
 */
export function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const DEFAULT_ALPHABET =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Generates a random string of `length` characters drawn uniformly from `alphabet`.
 * Defaults to URL-safe alphanumerics. Returns an empty string if `length < 1` or
 * the alphabet is empty.
 */
export function randomString(
    length: number,
    alphabet = DEFAULT_ALPHABET
): string {
    if (length < 1 || alphabet.length === 0) {
        return "";
    }

    let result = "";
    for (let i = 0; i < length; i++) {
        result += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return result;
}

/**
 * Interpolates `{{name}}` placeholders in `str` using values from `vars`.
 * Whitespace inside the braces is tolerated (`{{ name }}` works too).
 * Missing keys are replaced with an empty string.
 */
export function template(
    str: string,
    vars: Record<string, string | number | boolean>
): string {
    return str.replace(/\{\{\s*([\w$]+)\s*\}\}/g, (_, key) => {
        const value = Object.prototype.hasOwnProperty.call(vars, key)
            ? vars[key]
            : undefined;
        return value !== undefined ? String(value) : "";
    });
}
