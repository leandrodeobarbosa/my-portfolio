# Domain Architecture V2 - Implementation Report

## Overview

This document describes the implementation of the Domain Architecture V2 refactoring, which establishes Single Source of Truth for blog categories and navigation routes.

## What Was Implemented

### New Files

| File | Purpose |
|------|---------|
| [`src/domains/blog/categories.ts`](../../src/domains/blog/categories.ts) | Single Source of Truth for blog categories |
| [`src/domains/navigation/routes.ts`](../../src/domains/navigation/routes.ts) | Single Source of Truth for navigation routes |

### Modified Files

| File | Changes |
|------|---------|
| [`src/content.config.ts`](../../src/content.config.ts) | Added fail-fast validation using domain types |
| [`src/layouts/components/Header.astro`](../../src/layouts/components/Header.astro) | Refactored to use domain data |
| [`src/pages/posts/[category]/index.astro`](../../src/pages/posts/%5Bcategory%5D/index.astro) | Refactored to use domain data |

---

## Architecture Compliance

### Conforms to [`architecture.md`](architecture.md)

| Section | Requirement | Status |
|---------|-------------|--------|
| **2.1** High Cohesion | Isolated domains | ✅ |
| **2.2** Single Source of Truth | `NAV_ROUTES`, `BLOG_CATEGORIES` defined once | ✅ |
| **2.2** Derived Types | Types generated from config | ✅ |
| **2.3** Fail-Fast | Build fails on invalid values | ✅ |

### Conforms to [`llm-guidelines.MD`](llm-guidelines.MD)

| Rule | Requirement | Status |
|------|-------------|--------|
| **1.1** Domain Boundaries | No responsibility mixing | ✅ |
| **1.2** Single Source of Truth | No duplication | ✅ |
| **1.2** Derived Types | `as const` for types | ✅ |
| **2.1** Naming | Clear names | ✅ |
| **2.3** Components | No layout/logic mixing | ✅ |
| **3** Type Safety | No implicit `any` | ✅ |
| **4** Schema Rules | Categories from `BLOG_CATEGORIES` only | ✅ |
| **10.1** Architectural Supremacy | Architecture prevails | ✅ |
| **10.2** Domain-Centric | Logic in correct domain | ✅ |

---

## Implementation Details

### Domain: Blog

**File:** [`src/domains/blog/categories.ts`](../../src/domains/blog/categories.ts)

```typescript
export const BLOG_CATEGORIES = {
    editorial: {
        slug: 'editorial' as const,
        label: 'Editorial',
        description: '...',
        icon: '...',
    },
    tutoriais: {
        slug: 'tutoriais' as const,
        label: 'Tutoriais',
        description: '...',
        icon: '...',
    },
} as const;

// Derived types
export type CategorySlug = keyof typeof BLOG_CATEGORIES;
export type Category = (typeof BLOG_CATEGORIES)[CategorySlug];
```

### Domain: Navigation

**File:** [`src/domains/navigation/routes.ts`](../../src/domains/navigation/routes.ts)

```typescript
export const NAV_ROUTES = [
    { path: '/', label: 'início' },
    { path: '/projects/', label: 'projetos' },
    { path: '/posts/', label: 'posts' },
    { path: '/about/', label: 'sobre' },
] as const;

// Derived types
export type NavRoute = (typeof NAV_ROUTES)[number];
export type NavPath = NavRoute['path'];
```

### Fail-Fast Validation

**File:** [`src/content.config.ts`](../../src/content.config.ts)

```typescript
import { BLOG_CATEGORIES, type CategorySlug } from './domains/blog/categories';

// Valid category keys derived from domain (Single Source of Truth)
const validCategories = Object.keys(BLOG_CATEGORIES) as [CategorySlug, ...CategorySlug[]];

// Schema with fail-fast validation
category: z.enum(validCategories).optional(),
```

---

## Benefits

1. **Compile-time safety** - Invalid categories cause build failure
2. **Autocomplete support** - IDE suggestions from derived types
3. **No duplication** - Data defined once, used everywhere
4. **Type consistency** - Types automatically stay in sync
5. **Maintainability** - Changes only in one place

---

## Migration Pattern

This refactoring follows the pattern established by the architecture documents:

1. Identify duplicated data (categories, routes)
2. Create domain file with `as const`
3. Derive types from configuration
4. Update consumers to import from domain
5. Add fail-fast validation where applicable

---

## Future Considerations

- Consider extracting UI-specific transformations (like `~/` prefix) into domain helpers
- Monitor for additional duplicated data that could be centralized
- Evaluate if other domains (SEO) need similar treatment
