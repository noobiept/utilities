import terser from "@rollup/plugin-terser";
import copy from "rollup-plugin-copy";

export default {
    input: "source/utilities.js",
    output: [
        {
            file: "build/utilities.cjs.js",
            format: "cjs",
        },
        {
            file: "build/utilities.iife.js",
            format: "iife",
            name: "Utilities",
        },
        {
            file: "build/utilities.esm.js",
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
