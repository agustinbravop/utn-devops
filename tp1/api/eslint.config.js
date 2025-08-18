import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended, // base rules for JS
  ...tseslint.configs.recommended, // TS support
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
    },
  },
];
