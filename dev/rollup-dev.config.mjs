import typescript from "@rollup/plugin-typescript";
import { copyCss } from "../rollup.config.mjs";

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
        copyCss("dev/build"),
    ],
};
