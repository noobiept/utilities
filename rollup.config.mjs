import { cpSync, globSync } from "node:fs";
import { basename } from "node:path";
import terser from "@rollup/plugin-terser";

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
    plugins: [terser(), copyCss("build")],
};
