# Architecture Overview

## 1. Project Vision

This project is a static personal technical blog and portfolio built with Astro, designed to serve as:

* A strategic career asset
* A demonstration of DevOps maturity
* A structured repository of ideas
* A technically sound, maintainable system

The architecture intentionally balances:

* Simplicity (SSG, minimal runtime logic)
* Strong type contracts
* Domain-oriented structure
* Infrastructure-as-Code mindset
* SEO and semantic rigor

Over-engineering is explicitly avoided.

---

# 2. Architectural Principles

The project follows these principles:

## High Cohesion, Low Coupling

Code is organized by domain:

```
src/
  domains/
    navigation/
    blog/
    portfolio/
    seo/
```

Each domain owns its responsibility:

* `navigation` → site routes and menu structure
* `blog` → content taxonomy and schema contracts
* `portfolio` → projects configuration and type contracts
* `seo` → metadata and structured data

No domain leaks internal implementation details into another.

---

## Single Source of Truth

Configuration objects such as:

* `NAV_ROUTES`
* `BLOG_CATEGORIES`
* `PROJECTS`

are defined once and derived into types using `as const`.

Types are generated from the configuration itself to prevent divergence.

Example:

```ts
export type CategorySlug = keyof typeof BLOG_CATEGORIES;
```

This ensures:

* Compile-time safety
* Autocomplete support
* Build-time failure for invalid values

---

## Fail-Fast Validation

Content collections use schema validation (Zod via Astro Content Collections).

Invalid categories or malformed metadata cause the build to fail.

The system prefers early failure over silent runtime inconsistencies.

---

# 3. Content Architecture

## Static Site Generation (SSG)

The site is fully statically generated.

Benefits:

* Excellent TTFB
* Minimal attack surface
* No runtime backend
* CDN-friendly deployment

The blog is content-driven and validated at build time.

---

## Blog Domain

The blog domain contains:

* Category definitions
* Schema validation
* Type contracts

Categories are centrally defined and enforced via schema validation.

This prevents taxonomy drift over time.

---

## Portfolio Domain

The portfolio domain contains:

* Project definitions
* Type contracts
* Tech stack metadata

Projects are centrally defined and used across:

* Home page (featured projects)
* Projects index page (all projects)
* Project cards and lists

This prevents duplication of project data across components.

---

# 4. SEO Strategy

SEO is implemented with semantic rigor and structured data.

## Structured Data (JSON-LD)

A reusable `StructuredData.astro` component injects JSON-LD dynamically depending on page type:

* Home → WebSite + Person
* About → Person
* Blog Post → BlogPosting + Person (author/publisher)
* Projects → CreativeWork (if applicable)

Key characteristics:

* Uses absolute URLs
* Avoids `Organization` schema (personal brand focus)
* References the individual as author and publisher
* Designed to support E-E-A-T principles

## E-E-A-T Considerations

The structured data emphasizes:

* Clear authorship (Person schema)
* Professional identity consistency
* Accurate publication dates
* Explicit linkage between author and content

The goal is to reinforce:

* Experience
* Expertise
* Authoritativeness
* Trustworthiness

Structured data is treated as part of the system architecture, not an afterthought.

---

# 5. Infrastructure Philosophy

The deployment model is designed to demonstrate DevOps maturity.

Planned infrastructure stack:

* AWS S3 (static hosting)
* CloudFront (CDN + HTTPS)
* AWS Certificate Manager (SSL)
* Terraform (Infrastructure as Code)
* GitHub Actions (CI/CD)

Infrastructure decisions prioritize:

* Reproducibility
* Declarative configuration
* Security (least privilege IAM)
* Automated validation

The portfolio doubles as a real-world infrastructure demonstration.

---

# 6. CI/CD Strategy

CI enforces architectural integrity by running:

* Dependency installation
* Build validation
* Type checking
* Linting (if configured)

Invalid schema, broken imports, or type mismatches fail the pipeline.

The system is designed to be self-validating.

---

# 7. Evolution Guidelines

This project intentionally avoids premature abstraction.

Architecture evolves only when:

* Real complexity emerges
* Duplication becomes harmful
* Domain boundaries require refinement

The system favors clarity over cleverness.

---

# 8. What This Architecture Demonstrates

This project is not merely a blog.

It demonstrates:

* Domain-oriented thinking
* Type-driven design
* Validation-first content architecture
* SEO as a structural concern
* Infrastructure as Code mindset
* Incremental, safe refactoring discipline

The objective is not visual complexity.
The objective is structural clarity.
