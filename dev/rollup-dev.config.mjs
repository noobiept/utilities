import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
    input: "source/index.ts",
    output: [
        {
            dir: "dev/build/",
            format: "esm",
        },
    ],
    plugins: [
        typescript({ tsconfig: "./dev/tsconfig.dev.json" }),
        copy({
            targets: [{ src: "source/**/*.css", dest: "dev/build/" }],
        }),
    ],
};
