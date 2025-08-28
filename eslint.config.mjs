import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  { files: ["**/*.{js,mjs,cj  s}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },

  {
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
  eslintConfigPrettier,
]);
	