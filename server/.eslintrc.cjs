module.exports = {
  extends: ['@innovixx/eslint-config/configs/base', '@innovixx/eslint-config/configs/typescript'],
  ignorePatterns: ['databases'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
