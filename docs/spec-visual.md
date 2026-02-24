# Visual System Specification

## Overview

This document defines the visual design system for the portfolio, establishing a cohesive color palette and typography hierarchy that reflects **technical authority**, **clarity**, and **professionalism**.

The system is built on these core principles:
- Minimal and structured aesthetic
- Reading-first design (long-form content priority)
- Dark-first but neutral tones
- No flashy gradients or startup-style visuals
- Strong contrast and accessibility (WCAG AA)
- Code blocks must remain highly readable
- Avoid decorative typography
- Prioritize clarity over visual effects

---

## Color Palette

### Semantic Categories

| Category | Purpose | Light Mode | Dark Mode |
|----------|---------|------------|-----------|
| **Background Primary** | Main page background | `#FFFFFF` | `#0A0A0B` |
| **Background Secondary** | Cards, sections, code blocks | `#F4F4F5` | `#18181B` |
| **Background Tertiary** | Hover states, subtle accents | `#E4E4E7` | `#27272A` |
| **Border** | Dividers, input outlines | `#D4D4D8` | `#3F3F46` |
| **Text Primary** | Headings, body copy | `#18181B` | `#FAFAFA` |
| **Text Secondary** | Muted text, captions | `#52525B` | `#A1A1AA` |
| **Text Tertiary** | Disabled, placeholder | `#A1A1AA` | `#71717A` |
| **Accent Primary** | Links, interactive elements | `#0D9488` (Teal-600) | `#2DD4BF` (Teal-400) |
| **Accent Hover** | Interactive hover states | `#0F766E` (Teal-700) | `#5EEAD4` (Teal-300) |
| **Code Background** | Inline code, code blocks | `#F4F4F5` | `#27272A` |
| **Success** | Success states | `#16A34A` | `#4ADE80` |
| **Warning** | Warning states | `#CA8A04` | `#FACC15` |
| **Error** | Error states | `#DC2626` | `#F87171` |

### Design Tokens (CSS Variables)

```css
:root {
  /* Background */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F4F4F5;
  --color-bg-tertiary: #E4E4E7;
  
  /* Border */
  --color-border: #D4D4D8;
  --color-border-subtle: #E4E4E7;
  
  /* Text */
  --color-text-primary: #18181B;
  --color-text-secondary: #52525B;
  --color-text-tertiary: #A1A1AA;
  
  /* Accent */
  --color-accent: #0D9488;
  --color-accent-hover: #0F766E;
  
  /* Code */
  --color-code-bg: #F4F4F5;
  --color-code-text: #18181B;
  
  /* Semantic */
  --color-success: #16A34A;
  --color-warning: #CA8A04;
  --color-error: #DC2626;
}

.dark {
  /* Background */
  --color-bg-primary: #0A0A0B;
  --color-bg-secondary: #18181B;
  --color-bg-tertiary: #27272A;
  
  /* Border */
  --color-border: #3F3F46;
  --color-border-subtle: #27272A;
  
  /* Text */
  --color-text-primary: #FAFAFA;
  --color-text-secondary: #A1A1AA;
  --color-text-tertiary: #71717A;
  
  /* Accent */
  --color-accent: #2DD4BF;
  --color-accent-hover: #5EEAD4;
  
  /* Code */
  --color-code-bg: #27272A;
  --color-code-text: #FAFAFA;
  
  /* Semantic */
  --color-success: #4ADE80;
  --color-warning: #FACC15;
  --color-error: #F87171;
}
```

### Accent Color Rationale

The **Teal** accent color (`#0D9488` / `#2DD4BF`) was chosen because:
- Conveys technical competence and precision
- Associated with DevOps, cloud infrastructure, and modern tooling
- Provides excellent contrast in both light and dark modes
- Less aggressive than pure blue, more distinctive than green
- Works well with neutral backgrounds

---

## Typography System

### Font Families

| Element | Font Family | Weight | Use Case |
|---------|-------------|--------|----------|
| **Headings** | `"IBM Plex Sans", system-ui, sans-serif` | 600, 700 | Page titles, section headings |
| **Body** | `"IBM Plex Sans", system-ui, sans-serif` | 400, 500 | Paragraphs, lists, UI text |
| **Code** | `"IBM Plex Mono", "JetBrains Mono", monospace` | 400 | Code blocks, inline code, technical content |

### Type Scale

| Token | Size | Line Height | Letter Spacing | Use |
|-------|------|-------------|----------------|-----|
| `text-xs` | 0.75rem (12px) | 1.5 | 0.02em | Captions, metadata |
| `text-sm` | 0.875rem (14px) | 1.5 | 0.01em | Secondary text, small UI |
| `text-base` | 1rem (16px) | 1.75 | 0 | Body text, paragraphs |
| `text-lg` | 1.125rem (18px) | 1.75 | 0 | Lead paragraphs, large body |
| `text-xl` | 1.25rem (20px) | 1.5 | -0.01em | H4 headings |
| `text-2xl` | 1.5rem (24px) | 1.4 | -0.02em | H3 headings |
| `text-3xl` | 1.875rem (30px) | 1.3 | -0.02em | H2 headings |
| `text-4xl` | 2.25rem (36px) | 1.2 | -0.03em | H1 headings, hero |
| `text-5xl` | 3rem (48px) | 1.1 | -0.03em | Page titles (rare) |

### Typography Usage

```css
/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: -0.02em;
}

/* Body */
p {
  font-family: "IBM Plex Sans", system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: var(--color-text-primary);
}

/* Links */
a {
  color: var(--color-accent);
  text-decoration: none;
  transition: color 150ms ease;
}

a:hover {
  color: var(--color-accent-hover);
  text-decoration: underline;
}

/* Code */
code, pre {
  font-family: "IBM Plex Mono", "JetBrains Mono", monospace;
  font-size: 0.875rem;
}

code {
  background: var(--color-code-bg);
  color: var(--color-code-text);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
}

pre {
  background: var(--color-code-bg);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
```

---

## Spacing System

Based on a 4px baseline grid:

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 0.25rem (4px) | Tight spacing, inline elements |
| `space-2` | 0.5rem (8px) | Component internal padding |
| `space-3` | 0.75rem (12px) | List items, small gaps |
| `space-4` | 1rem (16px) | Standard spacing |
| `space-6` | 1.5rem (24px) | Section padding |
| `space-8` | 2rem (32px) | Component gaps |
| `space-12` | 3rem (48px) | Section margins |
| `space-16` | 4rem (64px) | Large section gaps |

---

## Component Guidelines

### Buttons

- **Primary**: Accent background, white text
- **Secondary**: Transparent with border, text color
- **States**: Hover (darken 10%), Focus (2px outline offset), Disabled (50% opacity)

### Cards

- Background: `--color-bg-secondary`
- Border: 1px solid `--color-border-subtle`
- Border radius: 0.5rem (8px)
- Padding: 1.5rem
- Hover: Subtle border color change

### Code Blocks

- Background: `--color-code-bg`
- Border: 1px solid `--color-border-subtle`
- Border radius: 0.5rem
- Line numbers: Optional, `--color-text-tertiary`
- Syntax highlighting: Use theme-appropriate colors

---

## Accessibility Requirements

1. **Contrast Ratios**: Minimum 4.5:1 for body text, 3:1 for large text
2. **Focus States**: Visible 2px outline on all interactive elements
3. **Motion**: Respect `prefers-reduced-motion`
4. **Dark Mode**: Must maintain WCAG AA contrast in both modes
5. **Font Sizes**: Minimum 16px for body text

---

## Implementation Notes

- Load fonts via Google Fonts or self-hosted for performance
- Use CSS custom properties for theming
- Test with actual color blindness simulations
- Validate contrast using automated tools (axe, lighthouse)
