# AGENTS.md

## Repository Scope
This repository contains:
- an Astro website
- TypeScript application code
- Tailwind CSS styling
- MDX content
- Terraform infrastructure code
- GitHub Actions CI/CD workflows

## Working Principles
- Prefer small, incremental changes over broad refactors.
- Prefer minimal diffs.
- Preserve the current architecture unless a task explicitly requires architectural changes.
- Reuse existing components, utilities, tokens, and conventions whenever possible.
- Choose the simplest solution with the lowest maintenance cost.
- Avoid unrelated cleanup unless it is directly necessary for the task.

## Architecture Rules
- Preserve the static-first approach.
- Prefer Astro-native features before considering additional libraries.
- Keep client-side JavaScript minimal.
- Introduce interactivity only when it is clearly needed.
- Do not introduce React, Vue, or other client-heavy frameworks unless explicitly requested.
- Prefer semantic HTML and straightforward component structure.
- Keep content, presentation, and infrastructure concerns clearly separated.

## Frontend and UI Rules
- Use a mobile-first approach.
- Ensure layouts remain usable at small viewport widths before optimizing for larger screens.
- Preserve readability, spacing, and clear hierarchy across breakpoints.
- Keep navigation and primary actions obvious on desktop and mobile.
- Avoid overflow issues, cramped layouts, and unstable spacing.
- Preserve the current visual identity unless a redesign is explicitly requested.
- Reuse Tailwind utilities, design tokens, and existing styling patterns.

## Performance Rules
Prioritize:
- LCP improvements
- CLS reduction
- INP responsiveness
- bundle size reduction
- image optimization
- font rendering stability
- predictable layout behavior across breakpoints

When making changes:
- avoid unnecessary hydration
- avoid heavy client-side logic for simple UI problems
- prefer CSS over JavaScript for layout and simple interaction when feasible
- use Astro-native asset optimization when appropriate
- ensure media dimensions are defined when possible
- lazy-load non-critical assets
- avoid adding dependencies for problems that can be solved with existing platform or framework capabilities

## Accessibility Rules
- Prefer semantic elements before adding ARIA.
- Add ARIA only when necessary.
- Preserve keyboard accessibility.
- Preserve visible focus states.
- Do not rely only on hover for important interactions.
- Keep touch targets reasonably sized on mobile.

## TypeScript and Code Quality
- Preserve strict typing.
- Avoid `any` unless there is a strong and explicit reason.
- Keep components and functions focused and easy to review.
- Avoid premature abstractions.
- Prefer clarity over cleverness.

## Content and MDX
- Preserve the current content structure unless explicitly asked to reorganize it.
- Keep content changes scoped to the task.
- Do not rewrite tone, messaging, or project descriptions unless explicitly requested.

## Infrastructure Boundaries
- Treat Terraform and AWS infrastructure as out of scope for website-only tasks.
- Do not modify Terraform unless the task explicitly involves infrastructure.
- Do not add, remove, or alter AWS resources unless explicitly requested.
- Do not change S3, CloudFront, Route53, ACM, or edge behavior unless explicitly requested.

## CI/CD Boundaries
- Do not modify GitHub Actions workflows unless the task explicitly involves CI/CD.
- Prefer fixing issues in application code rather than introducing pipeline workarounds.

## Dependency Policy
- Prefer built-in Astro, TypeScript, browser, and CSS capabilities.
- Avoid adding new dependencies unless clearly justified.
- Do not introduce large UI, animation, or state-management libraries for simple requirements.

## Change Review Expectations
When proposing or implementing changes:
- explain why the change improves performance, usability, accessibility, or maintainability
- mention trade-offs when relevant
- keep the implementation simple
- avoid unrelated file changes
- keep diffs easy to review

## Safe Defaults for Ambiguous Tasks
If a request is ambiguous, prefer the safest interpretation:
- preserve the current architecture
- avoid infrastructure and CI/CD changes
- avoid new dependencies
- make the smallest reasonable improvement
- optimize for maintainability and performance
