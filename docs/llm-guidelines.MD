# LLM Engineering Guidelines

## Purpose

This document defines mandatory rules that any Large Language Model (LLM) must follow when generating, modifying, or refactoring code in this project.

The objective is to preserve:

* Architectural integrity
* Clean Code principles
* Domain boundaries
* Type safety
* Long-term maintainability

The LLM must prioritize correctness and structure over verbosity or creativity.

---

# 1. Architectural Principles

## 1.1 Respect Domain Boundaries

Code must follow the existing domain-oriented structure:

```
src/
  domains/
    navigation/
    blog/
    seo/
```

Rules:

* Do not mix responsibilities across domains.
* Do not introduce cross-domain coupling.
* Do not create generic "utils" for domain-specific logic.

Each domain must remain cohesive and self-contained.

---

## 1.2 Single Source of Truth

* Configuration values must not be duplicated.
* Types must be derived from configuration objects when possible (`as const`).
* Never hardcode category strings or route paths in multiple locations.

Violations of DRY are not acceptable.

---

## 1.3 Avoid Premature Abstraction

* Do not introduce layers, patterns, or abstractions unless duplication or complexity justifies them.
* Prefer clarity over cleverness.
* Avoid speculative architecture.

---

# 2. Clean Code Rules

## 2.1 Naming

* Use clear, intention-revealing names.
* Avoid abbreviations unless universally recognized.
* Prefer `path` over `link`, `categorySlug` over `cat`, etc.

---

## 2.2 Functions

* Functions must have a single responsibility.
* Avoid functions longer than necessary.
* Avoid nested logic when guard clauses improve clarity.

---

## 2.3 Components

* Components must not mix layout, business logic, and configuration.
* Extract logic when a component becomes difficult to reason about.

---

## 2.4 Comments

* Comments must explain *why*, not *what*.
* Do not add redundant comments that restate obvious code.

---

# 3. Type Safety Requirements

* Always prefer explicit typing over implicit `any`.
* Derive union types from configuration objects when possible.
* Never suppress TypeScript errors without justification.
* The build must fail on invalid schema values.

---

# 4. Content & Schema Rules

* Categories must come exclusively from `BLOG_CATEGORIES`.
* Authors (if introduced) must follow a centralized definition.
* JSON-LD must use absolute URLs.
* Structured data must reference `Person`, not `Organization`.

Fail-fast validation is preferred over runtime fallback behavior.

---

# 5. SEO & Structured Data Constraints

When generating structured data:

* Respect E-E-A-T principles.
* Always link content to a valid `Person` author.
* Use accurate publication and modification dates.
* Do not fabricate credentials or metadata.

All dynamic values must be explicitly requested before generation.

---

# 6. Refactoring Rules

When refactoring:

1. Preserve behavior.
2. Avoid broad, sweeping rewrites.
3. Prefer incremental changes.
4. Ensure build stability after each change.

Refactors must improve clarity or remove duplication.

---

# 7. CI Compatibility

Generated code must:

* Compile successfully
* Pass type checking
* Not introduce lint violations
* Respect existing path aliases

If uncertain, prefer conservative implementation.

---

# 8. What the LLM Must Avoid

* Introducing unused abstractions
* Adding dependencies without justification
* Duplicating constants
* Mixing concerns across domains
* Generating speculative features
* Over-engineering simple logic

---

# 9. Guiding Philosophy

This project values:

* Structural clarity over novelty
* Explicit contracts over implicit assumptions
* Incremental evolution over radical redesign
* Engineering discipline over automation speed

The LLM must act as a disciplined senior engineer, not a code generator.

---

# 10. Alignment with ARCHITECTURE.md

This document must be interpreted together with `ARCHITECTURE.md`.

## 10.1 Architectural Supremacy Rule

If a conflict exists between a generated solution and `ARCHITECTURE.md`, the architecture document prevails.

The LLM must:

* Read architectural constraints before generating structural changes
* Preserve declared domain boundaries
* Respect defined layering decisions
* Avoid introducing alternative structural paradigms

---

## 10.2 Domain-Centric Enforcement

If `ARCHITECTURE.md` defines domains such as:

* `navigation`
* `blog`
* `seo`

Then the LLM must:

* Place new logic inside the correct domain
* Avoid shared mutable state across domains
* Prevent leakage of SEO logic into UI layers
* Prevent routing logic from depending on presentation components

Architecture defines *where logic belongs*.
This guideline defines *how that logic must be written*.

---

## 10.3 Structural Evolution Policy

When modifying structure:

1. Confirm the change is consistent with `ARCHITECTURE.md`.
2. Prefer extending existing modules over creating parallel systems.
3. Avoid introducing new root-level folders without explicit architectural intent.

No structural change should be "convenience-driven".
It must be architecture-driven.

---

## 10.4 Consistency Between Strategy and Implementation

`ARCHITECTURE.md` defines strategic intent.
`LLM_GUIDELINES.md` defines tactical discipline.

Together they ensure:

* Predictable code evolution
* Stable domain modeling
* Long-term maintainability
* Reduced architectural drift

The LLM must operate as a guardian of both documents simultaneously.