/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xl: '1024px'
			}
		},
		extend: {
			colors: {
				// Background colors
				bg: {
					primary: 'var(--color-bg-primary)',
					secondary: 'var(--color-bg-secondary)',
					tertiary: 'var(--color-bg-tertiary)'
				},
				// Border colors
				border: {
					DEFAULT: 'var(--color-border)',
					subtle: 'var(--color-border-subtle)'
				},
				// Text colors
				text: {
					primary: 'var(--color-text-primary)',
					secondary: 'var(--color-text-secondary)',
					tertiary: 'var(--color-text-tertiary)'
				},
				// Accent colors
				accent: {
					DEFAULT: 'var(--color-accent)',
					hover: 'var(--color-accent-hover)'
				},
				// Code colors
				code: {
					bg: 'var(--color-code-bg)',
					text: 'var(--color-code-text)'
				},
				// Semantic colors
				success: 'var(--color-success)',
				warning: 'var(--color-warning)',
				error: 'var(--color-error)'
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', '"IBM Plex Mono"', 'monospace']
			},
			fontSize: {
				xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
				sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				base: ['1rem', { lineHeight: '1.75', letterSpacing: '0' }],
				lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '0' }],
				xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }]
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%',
						color: 'var(--color-text-primary)',
						a: {
							color: 'var(--color-accent)',
							'&:hover': {
								color: 'var(--color-accent-hover)'
							}
						},
						h1: {
							color: 'var(--color-text-primary)',
							fontWeight: '600',
							letterSpacing: '-0.03em'
						},
						h2: {
							color: 'var(--color-text-primary)',
							fontWeight: '600',
							letterSpacing: '-0.02em'
						},
						h3: {
							color: 'var(--color-text-primary)',
							fontWeight: '600',
							letterSpacing: '-0.02em'
						},
						h4: {
							color: 'var(--color-text-primary)',
							fontWeight: '600',
							letterSpacing: '-0.01em'
						},
						strong: {
							color: 'var(--color-text-primary)',
							fontWeight: '600'
						},
						code: {
							color: 'var(--color-code-text)',
							backgroundColor: 'var(--color-code-bg)',
							padding: '0.125rem 0.375rem',
							borderRadius: '0.25rem',
							fontWeight: '400'
						},
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						},
						pre: {
							backgroundColor: 'var(--color-code-bg)',
							border: '1px solid var(--color-border-subtle)',
							borderRadius: '0.5rem'
						},
						blockquote: {
							borderLeftColor: 'var(--color-accent)',
							color: 'var(--color-text-secondary)'
						},
						hr: {
							borderColor: 'var(--color-border-subtle)'
						},
						'ul > li::marker': {
							color: 'var(--color-text-tertiary)'
						},
						'ol > li::marker': {
							color: 'var(--color-text-tertiary)'
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
