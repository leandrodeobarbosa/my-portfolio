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

## Platform Refactor Rules
For platform, Terraform, and CI/CD refactor tasks:
- Prefer small, reversible changes with explicit checkpoints.
- Do not combine Terraform modularization, CI/CD contract changes, multi-environment expansion, and production DNS changes in a single step unless explicitly requested.
- Treat production as stability-first.
- Prefer reducing coupling, disclosure, and structural debt before adding new environments.
- Preserve current production behavior unless the task explicitly requires behavioral change.
- Keep diffs minimal and easy to review.

## Terraform Safety Rules
- Never modify production DNS / Hosted Zone ownership unless the task explicitly requires that exact migration.
- Treat Route53 records and Hosted Zone data related to leandrodeobarbosa.dev as high-risk resources.
- Prefer conservative handling for production DNS until explicit migration work is requested.
- Do not introduce destructive changes to imported production resources without clearly calling out the risk first.
- Prefer modularization by architectural component rather than by raw AWS service file split.
- Keep live environment entrypoints thin and move complexity into modules.
- Reduce unnecessary outputs.
- Mark outputs as sensitive when appropriate.
- Do not expose resource identifiers, ARNs, or internal topology unless required for the task.

## Workflow Contract Rules
- Keep GitHub Actions workflow contracts minimal.
- Remove unused TF_VAR_* values when confirmed unnecessary.
- Prefer GitHub Environment vars for non-sensitive configuration.
- Prefer GitHub Environment secrets for sensitive configuration.
- Do not log sensitive values.
- Prefer separate validation workflows instead of expanding deploy workflows.
- Do not add apply behavior to test-only workflows.

## Repository Automation Boundaries
- Do not access GitHub, GitHub APIs, repository settings, or GitHub Environments.
- Do not trigger, invoke, or execute GitHub Actions workflows.
- Do not assume permission to create or modify repository variables, secrets, or environments.
- If a workflow or Terraform refactor requires a new GitHub Environment variable or secret, stop and explicitly ask the user to create it manually.
- When such a manual step is required, provide:
  - the exact name to create
  - whether it should be a variable or a secret
  - which environment(s) it belongs to
  - a short justification
- Continue only with local code changes that are safe without remote GitHub changes.

## Refactor Execution Style
When working on refactors:
- first analyze the current state
- then propose the smallest safe next step
- then implement only that step
- then run the minimum relevant local validation
- then summarize what changed, what remains, and any required manual GitHub-side actions
