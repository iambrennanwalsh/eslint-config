module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "array-callback-return": "warn",
    "no-await-in-loop": "warn",
    "no-constant-binary-expression": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "warn",
    "no-new-native-nonconstructor": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "warn",
    "no-template-curly-in-string": "warn",
  },
};
