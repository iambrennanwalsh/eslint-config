module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:import/recommended']
}
