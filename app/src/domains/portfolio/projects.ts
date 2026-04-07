/**
 * Portfolio Domain - Projects Configuration
 * Single Source of Truth for project data
 */

export interface Project {
	name: string;
	demoLink: string;
	tags: string[];
	description: string;
	postLink?: string;
	demoLinkRel?: string;
	techIcons?: string[];
	status?: string;
	badge?: {
		label: string;
		imageUrl: string;
		link: string;
	};
	[key: string]: any;
}

export const PROJECTS: Project[] = [
	{
		name: 'FlowDX Platform',
		description:
			'Plataforma Interna de Desenvolvedor (IDP) em evolução, construída sobre uma base real em AWS com Terraform e CI/CD, com foco em evoluir para um modelo de self-service para provisionamento de infraestrutura e entrega de aplicações.',
		demoLink: '/projetos/flowdx-platform',
		tags: [],
		status: 'WIP'
	},
	{
		name: 'fedora-workstation-as-code',
		description:
			'Provisionamento automatizado de ambiente Linux focado em infraestrutura como código (IaC) para o desktop. Utiliza uma abordagem de dotfiles versionados e scripts de automação para garantir um ambiente de desenvolvimento reprodutível, otimizado para performance com Sway WM e Wayland.',
		demoLink: 'https://github.com/leandrodeobarbosa/fedora-workstation-as-code',
		tags: [],
		techIcons: []
	}
];
