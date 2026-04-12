import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
	site: 'https://leandrodeobarbosa.dev',
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp'
		}
	},
	integrations: [mdx(), sitemap(), tailwind()],
	prefetch: true,
	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'localhost:4321'
				}
			]
		]
	}
});
