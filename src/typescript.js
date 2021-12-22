module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript'
	],
	rules: {
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off'
	},
	settings: {
		'import/resolver': {
			typescript: {}
		}
	}
}
