import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API
import { BLOG_CATEGORIES, type CategorySlug } from './domains/blog/categories';

// Valid category keys derived from domain (Single Source of Truth)
const validCategories = Object.keys(BLOG_CATEGORIES) as [CategorySlug, ...CategorySlug[]];

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    id: z
      .string()
      .describe('Discussion ID from GitHub Discussions (required for Giscus comments)')
      .refine((val) => {
        // Pattern: slug-hash (e.g., welcome-to-my-blog-a3f91c)
        // slug: lowercase letters, numbers, and hyphens
        // hash: exactly 6 lowercase letters or numbers
        const pattern = /^[a-z0-9]+(-[a-z0-9]+)*-[a-z0-9]{6}$/;
        return pattern.test(val);
      }, 'ID must be in format: {slug}-{hash} (e.g., welcome-to-my-blog-a3f91c)'),
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