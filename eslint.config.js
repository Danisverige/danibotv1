// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: true,
        document: true,
        console: true,
        module: true,
        require: true,
        setTimeout: true  // Added to fix the 'setTimeout' is not defined error
      }
    },
    rules: {
      // Add your custom ESLint rules here if needed
    }
  },
  {
    files: ["__test__/**/*.js"],
    languageOptions: {
      globals: {
        test: true,
        expect: true,
        describe: true,
        it: true
      }
    }
  }
];
