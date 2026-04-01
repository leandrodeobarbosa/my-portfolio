/**
 * Domínio: Navegação
 * Responsabilidade: Rotas principais do site
 *
 * Single Source of Truth (architecture.md §2)
 * Tipos derivados via as const (llm-guidelines.md §3)
 */

export const NAV_ROUTES = [
	{ path: '/', label: 'início' },
	{ path: '/projetos/', label: 'projetos' },
	{ path: '/sobre/', label: 'sobre' }
] as const;

export type NavRoute = (typeof NAV_ROUTES)[number];
export type NavPath = NavRoute['path'];
