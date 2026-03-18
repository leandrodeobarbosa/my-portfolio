/**
 * Domínio: Blog
 * Responsabilidade: Taxonomia de categorias do blog
 *
 * Single Source of Truth (architecture.md §2)
 * Tipos derivados de configuration (llm-guidelines.md §3)
 */

export const BLOG_CATEGORIES = {
	editorial: {
		slug: 'editorial' as const,
		label: 'Editorial',
		description:
			'Artigos de opinião, reflexões e análises sobre tecnologia, desenvolvimento de software e carreira. Compartilho minha visão e experiências sobre o universo tech.',
		icon: `<svg xmlns='http://www.w3.org/2000/svg' class='w-7 h-7' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'/><path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'/></svg>`,
	},
	tutoriais: {
		slug: 'tutoriais' as const,
		label: 'Tutoriais',
		description:
			'Guias práticos e passo a passo sobre ferramentas, tecnologias e técnicas de desenvolvimento. Aprenda com exemplos reais e aplicados.',
		icon: `<svg xmlns='http://www.w3.org/2000/svg' class='w-7 h-7' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'/><path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'/></svg>`,
	},
} as const;

// Tipo derivado automaticamente (não manual) - llm-guidelines.md §3
export type CategorySlug = keyof typeof BLOG_CATEGORIES;
export type Category = (typeof BLOG_CATEGORIES)[CategorySlug];

// Fallback icon for unknown categories
export const DEFAULT_CATEGORY_ICON = `<svg xmlns='http://www.w3.org/2000/svg' class='w-7 h-7' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/><polyline points='14 2 14 8 20 8'/></svg>`;
