# eslint-config

Personal ESLint configuration of @iambrennanwalsh.

## Usage

1. Install the `@iambrennanwalsh/eslint-config` package using `npm` or `yarn`.

**Note**: Until [this ongoing issue with ESLint](https://github.com/eslint/eslint/issues/3458") is fixed, you must also install `@rushstack/eslint-patch`.

```sh
npm install @iambrennanwalsh/eslint-config @rushstack/eslint-patch
// or
yarn add @iambrennanwalsh/eslint-config @rushstack/eslint-patch
```

2. Create an ESLint config file (`.eslintrc`) with the root of your project.

```js
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "root": true,
  "extends": [
    `@iambrennanwalsh`
  ]
}
```

3. Extend additional config files. If extending the Prettier config, be sure it comes very last within your `extends` array.

- TypeScript: `@iambrennanwalsh/eslint-config/src/typescript`
- React: `@iambrennanwalsh/eslint-config/src/react`
- Jest: `@iambrennanwalsh/eslint-config/src/jest`
- Webpack: `@iambrennanwalsh/eslint-config/src/webpack`
- Prettier: `@iambrennanwalsh/eslint-config/src/prettier`