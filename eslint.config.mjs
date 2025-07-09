import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import noInlineStyles from "eslint-plugin-no-inline-styles";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": ["warn", { allowExpressions: false }],
      "@typescript-eslint/explicit-module-boundary-types": "warn",
      "@typescript-eslint/typedef": [
        "warn",
        {
          "variableDeclaration": true,
          "arrayDestructuring": false,
          "objectDestructuring": false,
          "parameter": false,
          "propertyDeclaration": false,
          "memberVariableDeclaration": false
        }
      ],
      "@typescript-eslint/naming-convention": [
        "warn",
        { "selector": "variableLike", "format": ["camelCase", "PascalCase"] },
        {
          "selector": "variable",
          "modifiers": ["const"],
          "format": ["camelCase", "PascalCase", "UPPER_CASE"]
        },
        { "selector": "typeLike", "format": ["PascalCase"] }
      ]
    }
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "no-inline-styles": noInlineStyles },
    rules: {
      "curly": ["error", "all"],
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "no-inline-styles/no-inline-styles": "warn",
      "react/jsx-pascal-case": "error"
    }
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5", extends: ["json/recommended"] },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);