module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
