// eslint.config.js (ESLint 9+ Flat Config)
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["*.js", "scripts.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        window: true,
        document: true,
        console: true,
        setTimeout: true,
        module: true,
        require: true
      }
    },
    rules: {
      // Add custom rules if needed
    }
  },
  {
    files: ["__test__/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        require: true,
        module: true,
        test: true,
        expect: true,
        describe: true,
        it: true,
        console: true
      }
    }
  }
];
