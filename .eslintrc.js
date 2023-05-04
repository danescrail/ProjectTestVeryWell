module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": 'off',
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/no-misused-promises": 'warn',
    "@typescript-eslint/naming-convention": 'off',
    "indent": ["error", 4],
    "@typescript-eslint/quotes": "off",
    "no-unused-vars": "warn",
    "react/react-in-jsx-scope": "off",
    "eol-last": "off",
    'no-underscore-dangle': 'off',
  },
  globals: {
    '__IS_DEV__': true,
  }
}
