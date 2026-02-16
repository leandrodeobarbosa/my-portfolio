import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Fedora Sway',
    description: 'A customized Fedora Linux rice with Sway window manager',
    demoLink: '#',
    tags: ['Linux', 'Rice'],
    techIcons: ['fedora', 'bash', 'githubactions']
  },
  {
    name: 'My Portfolio Blog',
    description: 'Personal portfolio and blog built with Astro, featuring posts, projects, and about pages. Styled with Tailwind CSS.',
    demoLink: '#',
    tags: ['Portfolio', 'Blog'],
    techIcons: ['docker', 'typescript', 'astro', 'tailwind', 'html', 'css']
  },
  {
    name: 'Container Orchestration',
    description: 'Kubernetes cluster setup and management for production workloads with auto-scaling and monitoring.',
    demoLink: '#',
    tags: ['DevOps', 'Orchestration'],
    techIcons: ['kubernetes', 'docker', 'prometheus', 'grafana']
  },
  {
    name: 'Infrastructure as Code',
    description: 'Terraform configurations for managing cloud infrastructure across multiple providers.',
    demoLink: '#',
    tags: ['DevOps', 'IaC'],
    techIcons: ['terraform', 'docker', 'githubactions']
  },
  {
    name: 'CI/CD Pipeline',
    description: 'Automated build, test, and deployment pipelines using GitHub Actions.',
    demoLink: '#',
    tags: ['DevOps', 'CI/CD'],
    techIcons: ['githubactions', 'docker', 'kubernetes']
  },
  {
    name: 'Monitoring Stack',
    description: 'Prometheus and Grafana setup for comprehensive system monitoring and alerting.',
    demoLink: '#',
    tags: ['DevOps', 'Monitoring'],
    techIcons: ['prometheus', 'grafana', 'docker']
  },
  {
    name: 'AWS Cloud Infrastructure',
    description: 'AWS cloud infrastructure management with EC2, S3, RDS, and serverless architectures.',
    demoLink: '#',
    tags: ['Cloud', 'DevOps'],
    techIcons: ['aws', 'terraform', 'docker']
  },
  {
    name: 'OCI Cloud Infrastructure',
    description: 'Oracle Cloud Infrastructure setup with compute, storage, and networking resources.',
    demoLink: '#',
    tags: ['Cloud', 'DevOps'],
    techIcons: ['oci', 'terraform', 'docker']
  },
  {
    name: 'Caesar Cipher',
    description: 'A classic cryptographic algorithm implementation in JavaScript using functional programming paradigm',
    demoLink: '#',
    tags: ['Cryptography', 'Algorithm'],
    techIcons: ['javascript']
  },
  {
    name: 'Devaradise.com',
    description: 'A blog that sharing web development resources and tutorials',
    demoLink: 'https://devaradise.com',
    tags: ['Blog']
  },
  {
    name: 'Sellercraft App',
    description: 'An Ecommerce omnichannel platform in Southeast Asia',
    demoLink: 'https://sellercraft.co',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['ECommerce', 'Saas']
  },
  {
    name: 'Gaji.id App',
    description: 'Payroll and HR Management Information System',
    demoLink: 'https://sellercraft.co',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['HRIS', 'Saas']
  },
  {
    ...(await getRepositoryDetails('devaradise/paradise-ui')),
    name: 'Paradise UI',
    demoLink: 'https://paradise-ui.com',
    postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
    tags: ['React', 'UI Library']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/react-lab')),
    name: 'React Lab',
    demoLink: 'https://devaradise.com/lab/react/',
    tags: ['React']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/pokemon-catcher')),
    name: 'Pokemon Catcher',
    demoLink: 'https://pokemon-catcher-18636.web.app/',
    tags: ['Hobby']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/movie-nominations')),
    name: 'Movie Nominations',
    demoLink: 'https://movie-nominations-c21c3.web.app/',
    tags: ['Hobby']
  },
  {
    ...(await getRepositoryDetails('syakirurahman/organization-tree')),
    name: 'Organization tree',
    demoLink: 'https://organization-tree-2a446.web.app/',
    tags: ['Hobby']
  }
]
