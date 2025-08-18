import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node", // fine for Hono
    include: ["tests/**/*.test.ts"],
  },
});
