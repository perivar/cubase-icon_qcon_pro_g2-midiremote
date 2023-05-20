module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort', 'unused-imports', 'es5'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports-ts': 'warn',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-empty-function': 'off',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',

        'es5/no-es6-methods': 'error',
        'es5/no-es6-static-methods': 'warn',
        'es5/no-arrow-functions': 'off', // allow arrow functions
        'es5/no-binary-and-octal-literals': 'error',
        'es5/no-block-scoping': 'off', // allow blocks
        'es5/no-classes': 'off', // allow classes
        'es5/no-computed-properties': 'error',
        'es5/no-default-parameters': 'warn',
        'es5/no-destructuring': 'warn',
        'es5/no-exponentiation-operator': 'error',
        'es5/no-for-of': 'error',
        'es5/no-generators': 'error',
        'es5/no-modules': 'off', // allow using export
        'es5/no-object-super': 'off', // allow classes and super()
        'es5/no-rest-parameters': 'warn',
        'es5/no-shorthand-properties': 'warn',
        'es5/no-spread': 'warn',
        'es5/no-template-literals': 'off', // allow string templates
        'es5/no-typeof-symbol': 'error',
        'es5/no-unicode-code-point-escape': 'error',
        'es5/no-unicode-regex': 'error',
    },
};
