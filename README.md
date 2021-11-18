# @iambrennanwalsh/eslint-config

My personal eslint configuration.

## Installation

1. Use the [NPM](https://npmjs.com) or [Yarn](https://yarnpkg.com/) package managers to install the `@iambrennanwalsh/eslint-config` package.

```bash
npm install @iambrennanwalsh/eslint-config
// or
yarn add @iambrennanwalsh/eslint-config
```

2. Create an ESLint configuration file (`.eslintrc`) within the root of your project with the following content. Extend `@iambrennanwalsh/eslint-config` if using Babel, or `@iambrennanwalsh/eslint-config/typescript` if using TypeScript.

```js
// See https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "root": true,
  "extends": [
    `@iambrennanwalsh/eslint-config` // If using Babel.
    `@iambrennanwalsh/eslint-config/typescript` // If using TypeScript.
  ]
}
```

3. Thats all. Easy!

---

## Configurations

The following configurations are provided by this package.

**Babel**: `@iambrennanwalsh/eslint-config`

- @babel/eslint-parser
- eslint-import-resolver-webpack
- eslint-plugin-import
- eslint-plugin-react  
- eslint-plugin-react-hooks  
- eslint-plugin-jsx-a11y
- eslint-plugin-jest
- eslint-plugin-testing-library
- eslint-plugin-prettier

**TypeScript**: `@iambrennanwalsh/eslint-config/typescript`

- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- eslint-import-resolver-typescript
- eslint-plugin-react  
- eslint-plugin-react-hooks  
- eslint-plugin-jsx-a11y
- eslint-plugin-jest
- eslint-plugin-testing-library
- eslint-plugin-import
- eslint-plugin-prettier