module.exports = {
  extends: [
    '@innovixx/eslint-config/configs/base',
    '@innovixx/eslint-config/configs/react',
    '@innovixx/eslint-config/configs/typescript',
  ],
  ignorePatterns: ['src/graphql/generated/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
