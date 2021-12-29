module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
	},
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
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				project: "./tsconfig.json",
			},
		},
	},
}
