import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import jest from "eslint-plugin-jest";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    {
        ignores: ["**/node_modules/**", "dev/build/**", "source/**/*.test.js"],
    },
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node, ...globals.jest },
        },
    },
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    jest.configs["flat/recommended"],
    {
        rules: {
            "@typescript-eslint/ban-ts-ignore": "off",
            "@typescript-eslint/camelcase": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "jest/no-done-callback": "off",
        },
    },
];
