import copy from "rollup-plugin-copy";

module.exports = {
    input: "source/utilities.js",
    output: [
        {
            file: "dev/build/utilities.esm.js",
            format: "esm",
        },
    ],
    plugins: [
        copy({
            targets: [{ src: "source/dialog.css", dest: "dev/build/" }],
        }),
    ],
};
