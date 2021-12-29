module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended'
	],
	rules: {
		'react/prop-types': 'off',
		'react/display-name': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
