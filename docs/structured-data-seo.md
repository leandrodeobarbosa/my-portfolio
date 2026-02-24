You are tasked with implementing professional SEO Structured Data (JSON-LD) for a personal technical blog and portfolio built with Astro. Before generating any code, you must ask the user for the exact values for every dynamic field required.

Your process should be:

1. Ask for site-wide values:
   - Full name of the person
   - Professional job title
   - Short description of the person
   - URL of the website (or placeholder if not live)
   - URL of profile image
   - Social profiles (LinkedIn, GitHub, etc.)

2. Ask for page-specific values:
   - Home page title and description (if different from site-wide)
   - About page title and description
   - Projects page title and description
   - Blog post: title, description, slug, publication date, last modified date, image URL

3. Only after collecting **all values**, generate a reusable Astro component `StructuredData.astro` that:
   - Injects JSON-LD based on page type (Home, About, Blog Post, Projects)
   - References the person as author/publisher where appropriate
   - Uses absolute URLs
   - Supports dynamic props for posts (title, description, image, slug, pubDate)
   - Avoids `Organization` schema
   - Is semantically strong and SEO-optimized, supporting E-E-A-T

4. Do **not** generate any JSON-LD until all information is collected. Ask the user one field at a time, confirming values before proceeding.
