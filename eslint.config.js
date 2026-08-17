const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  {
    ignores: [
      'node_modules/**',
      '*.config.ts',
      'eslint.config.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
);
