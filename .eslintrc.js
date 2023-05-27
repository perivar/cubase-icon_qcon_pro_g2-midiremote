module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: "latest", // Use the latest ecmascript standard
    sourceType: "module", // Allows using import/export statements

    // tsconfigRootDir: __dirname,
    // project: ["./tsconfig.json"],
  },

  env: {
    node: true, // Enables Node.js global variables and Node.js scoping.
  },

  plugins: ["import", "simple-import-sort", "unused-imports"],

  // applies to everything
  extends: ["plugin:prettier/recommended"],
  rules: {
    "import/no-unresolved": "off",
    "unused-imports/no-unused-imports-ts": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },

  // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
  overrides: [
    {
      files: "src/**/*.+(ts|tsx)",

      parser: "@typescript-eslint/parser",

      parserOptions: {
        ecmaVersion: 5,
        tsconfigRootDir: __dirname,
        project: ["./tsconfig-es5.json"],
      },

      plugins: ["@typescript-eslint", "import", "simple-import-sort", "unused-imports", "es"],

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:es/restrict-to-es5",
      ],
      rules: {
        "import/no-unresolved": "off",
        "unused-imports/no-unused-imports-ts": "warn",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-empty-function": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",

        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",

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
    },
  ],
};
