import { describe, test, expect } from "vitest";
import {
    slugify,
    truncate,
    capitalize,
    escapeHtml,
    escapeRegExp,
    randomString,
    template,
} from "./string";

describe("slugify", () => {
    test("lowercases and joins words with hyphens.", () => {
        expect(slugify("Hello World")).toBe("hello-world");
    });

    test("collapses runs of non-alphanumerics into a single hyphen.", () => {
        expect(slugify("foo --- bar___baz")).toBe("foo-bar-baz");
    });

    test("trims leading and trailing separators.", () => {
        expect(slugify("---hello---")).toBe("hello");
        expect(slugify("  spaced  ")).toBe("spaced");
    });

    test("strips diacritics.", () => {
        expect(slugify("Olá Mundo")).toBe("ola-mundo");
        expect(slugify("naïve café")).toBe("naive-cafe");
    });

    test("returns an empty string for input with no alphanumerics.", () => {
        expect(slugify("---")).toBe("");
        expect(slugify("")).toBe("");
    });
});

describe("truncate", () => {
    test("returns the input unchanged when it already fits.", () => {
        expect(truncate("hello", 10)).toBe("hello");
        expect(truncate("hello", 5)).toBe("hello");
    });

    test("appends ellipsis within the length budget.", () => {
        expect(truncate("hello world", 8)).toBe("hello...");
        expect(truncate("hello world", 8).length).toBe(8);
    });

    test("supports a custom ellipsis.", () => {
        expect(truncate("hello world", 7, "…")).toBe("hello …");
    });

    test("returns a slice of the ellipsis when the length is too small for the full ellipsis.", () => {
        expect(truncate("hello world", 2)).toBe("..");
        expect(truncate("hello world", 0)).toBe("");
    });

    test("returns an empty string for negative lengths.", () => {
        expect(truncate("hello world", -1)).toBe("");
        expect(truncate("hello world", -5)).toBe("");
    });
});

describe("capitalize", () => {
    test("uppercases the first character.", () => {
        expect(capitalize("hello")).toBe("Hello");
        expect(capitalize("h")).toBe("H");
    });

    test("leaves the rest of the string untouched.", () => {
        expect(capitalize("hELLO")).toBe("HELLO");
        expect(capitalize("Already")).toBe("Already");
    });

    test("returns an empty string unchanged.", () => {
        expect(capitalize("")).toBe("");
    });
});

describe("escapeHtml", () => {
    test("escapes the five HTML metacharacters.", () => {
        expect(escapeHtml('<div class="x">a & b\'s</div>')).toBe(
            "&lt;div class=&quot;x&quot;&gt;a &amp; b&#39;s&lt;/div&gt;"
        );
    });

    test("escapes ampersands before other characters (no double-encoding).", () => {
        expect(escapeHtml("&lt;")).toBe("&amp;lt;");
    });

    test("leaves safe characters alone.", () => {
        expect(escapeHtml("hello world 123")).toBe("hello world 123");
    });
});

describe("escapeRegExp", () => {
    test("escapes regex metacharacters.", () => {
        expect(escapeRegExp("a.b*c+d?")).toBe("a\\.b\\*c\\+d\\?");
    });

    test("produces a string that matches the original literally inside a RegExp.", () => {
        const input = "1+1=2 (probably)";
        const regex = new RegExp(escapeRegExp(input));

        expect(regex.test(input)).toBe(true);
        expect(regex.test("1 1=2 (probably)")).toBe(false);
    });
});

describe("randomString", () => {
    test("returns a string of the requested length.", () => {
        expect(randomString(10).length).toBe(10);
        expect(randomString(1).length).toBe(1);
    });

    test("only uses characters from the alphabet.", () => {
        const alphabet = "ab";
        const result = randomString(50, alphabet);
        for (const ch of result) {
            expect(alphabet.includes(ch)).toBe(true);
        }
    });

    test("returns an empty string for invalid inputs.", () => {
        expect(randomString(0)).toBe("");
        expect(randomString(-5)).toBe("");
        expect(randomString(5, "")).toBe("");
    });
});

describe("template", () => {
    test("replaces placeholders with values from vars.", () => {
        expect(template("Hello, {{name}}!", { name: "World" })).toBe(
            "Hello, World!"
        );
    });

    test("tolerates whitespace inside the braces.", () => {
        expect(
            template("{{ greeting }}, {{name}}", { greeting: "Hi", name: "X" })
        ).toBe("Hi, X");
    });

    test("replaces missing keys with an empty string.", () => {
        expect(template("Hello, {{name}}!", {})).toBe("Hello, !");
    });

    test("stringifies non-string values.", () => {
        expect(template("count={{n}} ok={{ok}}", { n: 42, ok: true })).toBe(
            "count=42 ok=true"
        );
    });

    test("leaves text outside placeholders untouched.", () => {
        expect(template("no placeholders here", { name: "X" })).toBe(
            "no placeholders here"
        );
    });

    test("does not resolve inherited object properties.", () => {
        // keys like 'constructor'/'toString' must be treated as missing, not
        // pulled from Object.prototype.
        expect(template("[{{constructor}}|{{toString}}]", {})).toBe("[|]");
    });
});
