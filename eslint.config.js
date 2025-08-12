import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import angularPlugin from "@angular-eslint/eslint-plugin";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:@angular-eslint/recommended"),
  {
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": tsPlugin,
      "@angular-eslint": angularPlugin,
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      // other rules...
    },
  },
];
