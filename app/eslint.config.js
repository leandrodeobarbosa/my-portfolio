import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
	{ ignores: ['.astro/**', 'dist/**', 'node_modules/**'] },
	{
		files: ['**/*.{js,ts}'],

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module'
		},

		plugins: {
			'@typescript-eslint': tsPlugin
		},

		rules: {
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn'
		}
	}
];
