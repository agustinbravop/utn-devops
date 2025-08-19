import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8", // or "istanbul" if you prefer
      reporter: ["text", "lcov"],
      reportsDirectory: "coverage",
    },
  },
});
