module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "simple-import-sort", "unused-imports", "es"],

  // applies to everything
  extends: ["plugin:prettier/recommended"],
  rules: {
    "import/no-unresolved": "off",
    "unused-imports/no-unused-imports-ts": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-empty-function": "off",
    "prefer-rest-params": "off",
    "prefer-spread": "off",
  },

  // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:es/restrict-to-es5",
        "plugin:es/no-new-in-es2017",
      ],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "import/no-unresolved": "off",
        "unused-imports/no-unused-imports-ts": "warn",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-empty-function": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",

        "es/no-nullish-coalescing-operators": "off", // this converts fine by tsc
        "es/no-arrow-functions": "off", // allow arrow functions
        "es/no-block-scoped-functions": "off", // allow blocks
        "es/no-block-scoped-variables": "off", // allow blocks
        "es/no-classes": "off", // allow classes
        "es/no-default-parameters": "off", // this converts fine by tsc, so disable it here
        "es/no-modules": "off", // allow using export as they convert fine by tsc
        "es/no-object-super": "off", // allow classes and super()
        "es/no-template-literals": "off", // allow string templates as they convert fine by tsc
        "es/no-rest-parameters": "warn",
        "es/no-spread-elements": "warn", // if enabled this automatically converts to concat()
        "es/no-computed-properties": "error",
        "es/no-destructuring": "error",
        "es/no-generators": "error",
        "es/no-object-assign": "error",
        "es/no-math-log10": "error",
        "es/no-array-from": "error",
      },

      parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
};
