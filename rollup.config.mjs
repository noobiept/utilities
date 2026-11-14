import { cpSync, globSync, readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import terser from "@rollup/plugin-terser";

/**
 * Write a CommonJS copy (`.d.cts`) of each type declaration in the `dir` folder, for the `require` condition of the package exports.
 * The `.d.ts` files are ES modules (since the package is `"type": "module"`), which a CommonJS project can't `require` with `"module": "node16"`.
 */
function cjsTypes(dir) {
    return {
        name: "cjs-types",
        closeBundle() {
            for (const file of globSync(`${dir}/**/*.d.ts`)) {
                // the relative imports point to the '.cjs' files instead, which resolve to their '.d.cts' declarations
                const content = readFileSync(file, "utf8").replace(
                    /((?:from\s*|import\(\s*)["']\.{1,2}\/[^"']*)\.js(["'])/g,
                    "$1.cjs$2"
                );
                writeFileSync(file.replace(/\.d\.ts$/, ".d.cts"), content);
            }
        },
    };
}

/**
 * Copy the stylesheets to the `dest` folder, next to the bundle (so they can be imported from the package).
 */
export function copyCss(dest) {
    return {
        name: "copy-css",
        writeBundle() {
            for (const file of globSync("source/**/*.css")) {
                cpSync(file, `${dest}/${basename(file)}`);
            }
        },
    };
}

export default {
    input: "temp/index.js",
    output: [
        {
            file: "build/utilities.cjs",
            format: "cjs",
        },
        {
            file: "build/utilities.iife.js",
            format: "iife",
            name: "Utilities",
        },
        {
            file: "build/utilities.mjs",
            format: "esm",
        },
    ],
    plugins: [terser(), copyCss("build"), cjsTypes("build")],
};
