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
			'Plataforma Interna de Desenvolvedor (IDP) focada em self-service para provisionamento de infraestrutura e entrega de aplicações.',
		demoLink: '/projetos/flowdx-platform',
		tags: [],
		status: 'WIP'
	},
	{
		name: 'FlowDX App',
		description: 'Workload de referência da FlowDX Platform, com deploy em produção, infraestrutura como código e entrega automatizada.',
		demoLink: '#',
		tags: ['Node.js', 'TypeScript', 'Astro'],
		status: 'Production'
	},
	{
		name: 'Fedora Sway',
		description: 'A customized Fedora Linux rice with Sway window manager',
		demoLink: '#',
		tags: ['Linux', 'Rice'],
		techIcons: ['fedora', 'bash', 'githubactions']
	},
	{
		name: 'Container Orchestration',
		description: 'Kubernetes cluster setup and management for production workloads with auto-scaling and monitoring.',
		demoLink: '#',
		tags: ['DevOps', 'Orchestration'],
		techIcons: ['kubernetes', 'docker', 'prometheus', 'grafana']
	}
];
