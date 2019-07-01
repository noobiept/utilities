import { terser } from "rollup-plugin-terser";

module.exports = {
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
    plugins: [terser()],
};
