import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API
import { BLOG_CATEGORIES, type CategorySlug } from './domains/blog/categories';

// Valid category keys derived from domain (Single Source of Truth)
const validCategories = Object.keys(BLOG_CATEGORIES) as [CategorySlug, ...CategorySlug[]];

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    id: z.string().describe('Discussion ID from GitHub Discussions (required for Giscus comments)'),
    title: z.string(),
    slug: z.string().optional(),
    seoTitle: z.string().optional(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    // Fail-fast validation: build fails if category is not in BLOG_CATEGORIES
    category: z.enum(validCategories).optional(),
    coverImage: image().optional()
  })
});

export const collections = { blog };