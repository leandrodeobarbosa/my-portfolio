# FlowDX Platform Architecture

## Overview
This document describes the current architecture of FlowDX Platform, including its reference workload, AWS infrastructure, CI/CD workflows, and the evolutionary path toward a self-service internal developer platform.

## Core Stack
- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content**: MDX
- **Infrastructure**: Terraform (AWS)
- **CI/CD**: GitHub Actions

## Rendering Strategy
- **Static-First**: Routes are pre-rendered whenever possible.
- **Minimal Client-Side JavaScript**: Components are rendered to static HTML by default. Client-side JavaScript is introduced only when interaction explicitly requires it.
- **View Transitions**: Astro view transitions may be used selectively to improve navigation feel while preserving the static-first model.

## Styling and Design System
- **Utility-First**: Styling is implemented with Tailwind CSS.
- **Design Tokens**: Tokens are centralized in `tailwind.config.mjs` and backed by CSS variables defined in `src/styles/main.css`.
- **Theming**: The visual system is dark-mode centric, with a documentation-inspired and industrial aesthetic.
- **Typography**: Typography prioritizes fast rendering, low layout instability, and system-font fallbacks when appropriate.

## Content Structure
- **MDX Integration**: Content is authored in MDX, allowing Astro components to be embedded in markdown-based pages.
- **Metadata Management**: Constants and site-wide strings are centralized in `src/consts.ts`.

## Domain Organization
- **Decoupled Data**: Business data and presentation concerns are separated through domain-oriented modules in `src/domains/`.
- **Domain Areas**:
  - `portfolio`: Project data and metadata.
  - `navigation`: Header, footer, and navigation structure.

## Performance Philosophy
- **Minimal Payload**: Browser-side JavaScript and CSS should remain lean.
- **Optimized Assets**: Images should use Astro-native optimization pipelines when appropriate.
- **Low Latency Delivery**: Content is delivered globally through Amazon CloudFront.
- **Stable Rendering**: Layout decisions should favor low cumulative layout shift and predictable rendering across breakpoints.

## Infrastructure Overview
- **Storage**: AWS S3 is used for static asset hosting.
- **CDN**: AWS CloudFront provides edge caching and TLS termination.
- **DNS**: DNS is managed with AWS Route53.
- **Certificate Management**: TLS certificates are managed through AWS Certificate Manager (ACM).
- **Edge Logic**: CloudFront Functions may be used for request normalization and security-related headers.

## CI/CD Overview
- **Pipeline Orchestration**: GitHub Actions is the CI/CD platform.
- **Automated Validation**: Pull requests trigger linting, type-checking, and production build validation.
- **Infrastructure as Code**: Infrastructure changes are managed through automated `terraform plan` on pull requests and `terraform apply` on merges to the main branch.
- **State Management**: Terraform state is stored in a remote backend, with drift detection monitored through scheduled automation.

## Directory Conventions
- `/app/src/components`: Reusable UI components.
- `/app/src/layouts`: Shared page layouts and metadata handling.
- `/app/src/pages`: Route entry points.
- `/app/src/domains`: Domain data and domain-specific logic.
- `/infra/live`: Terraform root modules and environment configuration.
- `/.github/workflows`: CI/CD workflow definitions.

## Architectural Boundaries
- Frontend concerns should remain isolated from infrastructure concerns.
- Interactivity should be introduced selectively, not as a default pattern.
- Infrastructure changes should be managed through Terraform rather than manual cloud-console updates.

## Non-Goals
- This project is not intended to become a client-heavy SPA.
- UI complexity should remain low unless a feature clearly requires more interactivity.
- Infrastructure should remain simple, maintainable, and cost-conscious.

## Key Engineering Principles
- **Type Safety**: TypeScript should be used consistently across application code and data structures.
- **Automation**: Infrastructure, validation, and deployment should be managed through code.
- **Static-First**: Interactivity should be added surgically, never globally.
- **Separation of Concerns**: Content, presentation, and infrastructure should remain clearly separated.
