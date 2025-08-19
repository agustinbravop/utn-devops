import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  js.configs.recommended, // base rules for JS
  ...tseslint.configs.recommended, // TS support
  globalIgnores(["dist/**", "coverage/**"]),
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
    },
  },
]);
