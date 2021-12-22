module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:import/recommended'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'import/no-duplicates': 'off'
	}
}
