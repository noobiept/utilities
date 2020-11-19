import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

module.exports = {
    input: "source/utilities.ts",
    output: [
        {
            dir: "dev/build/",
            format: "esm",
        },
    ],
    plugins: [
        typescript({ tsconfig: "./dev/tsconfig.dev.json" }),
        copy({
            targets: [{ src: "source/dialog.css", dest: "dev/build/" }],
        }),
    ],
};
