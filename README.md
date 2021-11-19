# @iambrennanwalsh/eslint-config

My personal eslint configuration.

## Installation

1. Use the [NPM](https://npmjs.com) or [Yarn](https://yarnpkg.com/) package managers to install the `@iambrennanwalsh/eslint-config` and `@rushstack/eslint-patch` packages. 

**Note**: Until [this ongoing issue with ESLint](https://github.com/eslint/eslint/issues/3458") is fixed, you must also install `@rushstack/eslint-patch`.

```bash
npm install @iambrennanwalsh/eslint-config @rushstack/eslint-patch
// or
yarn add @iambrennanwalsh/eslint-config @rushstack/eslint-patch
```

2. Create an ESLint configuration file (`.eslintrc`) within the root of your project with the following content.

```js
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "root": true,
  "extends": [
    `@iambrennanwalsh`
  ]
}
```

3. Extend any optional configuration files. If extending the Prettier configuration, be sure it comes very last within your `extends` array.

**TypeScript**: `@iambrennanwalsh/eslint-config/src/typescript`

**React**: `@iambrennanwalsh/eslint-config/src/react`

**Jest**: `@iambrennanwalsh/eslint-config/src/jest`

**Webpack**: `@iambrennanwalsh/eslint-config/src/webpack`

**Prettier**: `@iambrennanwalsh/eslint-config/src/prettier`
