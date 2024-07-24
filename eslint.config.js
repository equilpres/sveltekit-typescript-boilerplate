import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {Array<import('eslint').Linter.FlatConfig>} */
export default [
	eslint.configs.recommended, //
	...tseslint.configs.strict,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	{
		files: ['**/*.{ts,svelte}'],
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'error',
		},
	},
	{
		ignores: ['.svelte-kit', 'build'],
	},
];
