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
	techIcons: string[];
	badge?: {
		label: string;
		imageUrl: string;
		link: string;
	};
	[key: string]: any;
}

export const PROJECTS: Project[] = [
	{
		name: 'devexor app',
		description:
			'Cloud Native Portfolio com arquitetura em AWS, provisionado via Terraform e pipelines CI/CD com foco em práticas de Platform Engineering.',
		demoLink: '#',
		tags: ['Portfolio', 'Cloud'],
		techIcons: ['aws', 'terraform', 'githubactions', 'typescript', 'astro'],
		badge: {
			label: 'CD - Application',
			imageUrl: 'https://github.com/leandrodeobarbosa/my-portfolio/actions/workflows/cd-app.yml/badge.svg',
			link: 'https://github.com/leandrodeobarbosa/my-portfolio/actions/workflows/cd-app.yml'
		}
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
