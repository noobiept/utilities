import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

export default {
    input: "source/index.js",
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
    plugins: [
        terser(),
        copy({
            targets: [{ src: "source/**/*.css", dest: "build/" }],
        }),
    ],
};
