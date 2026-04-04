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
		name: 'Fedora Sway',
		description: 'A customized Fedora Linux rice with Sway window manager',
		demoLink: '#',
		tags: ['Linux', 'Rice'],
		techIcons: []
	},
	{
		name: 'Container Orchestration',
		description: 'Kubernetes cluster setup and management for production workloads with auto-scaling and monitoring.',
		demoLink: '#',
		tags: ['DevOps', 'Orchestration'],
		techIcons: []
	}
];
