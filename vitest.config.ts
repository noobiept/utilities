import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        include: ["source/**/*.test.ts"],
        clearMocks: true,
        coverage: {
            enabled: true,
            exclude: ["**/node_modules/**", "**/mocks/**"],
            thresholds: {
                statements: 90,
                branches: 90,
                functions: 90,
                lines: 90,
            },
        },
    },
});
