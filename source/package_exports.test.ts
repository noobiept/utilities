import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, test, expect } from "vitest";

// The `exports` field is an allowlist: once it's defined, ONLY the subpaths
// listed there are importable by consumers — anything else fails to resolve
// with ERR_PACKAGE_PATH_NOT_EXPORTED. Dropping an entry is a silent, packaging
// level regression that no source/e2e test would catch (it's how
// `@drk4/utilities/dialog.css` was unreachable before v7.0.0). This guards the
// documented public subpaths.
const pkg = JSON.parse(
    readFileSync(resolve(process.cwd(), "package.json"), "utf8")
);

describe("package exports", () => {
    test("exposes the main entry point with every condition", () => {
        // each one has its own types, a CommonJS project can't use the ES module declarations (regression: TS1479 with "module": "node16")
        expect(pkg.exports["."]).toStrictEqual({
            import: {
                types: "./build/index.d.ts",
                default: "./build/utilities.mjs",
            },
            require: {
                types: "./build/index.d.cts",
                default: "./build/utilities.cjs",
            },
        });
    });

    test("exposes the dialog stylesheet (regression: ERR_PACKAGE_PATH_NOT_EXPORTED)", () => {
        expect(pkg.exports["./dialog.css"]).toBe("./build/dialog.css");
    });

    test("exposes package.json", () => {
        expect(pkg.exports["./package.json"]).toBe("./package.json");
    });
});
