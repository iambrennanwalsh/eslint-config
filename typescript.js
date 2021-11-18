module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		browser: true,
		node: true,
		'jest/globals': true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:jest/recommended',
		'plugin:testing-library/react',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended'
	],
	rules: {
		'@typescript-eslint/no-var-requires': 'off'
	},
	settings: {
		'import/resolver': {
			typescript: {}
		},
		react: {
			version: 'detect'
		}
	}
}
