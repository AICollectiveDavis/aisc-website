# Codebase Refactor — Design Spec

**Date:** 2026-04-29  
**Branch:** develop  
**Scope:** Full structural refactor — no visual changes

---

## Problem

The codebase started with a components-first intent but drifted during rapid development. Pages ended up with all logic hardcoded inline, leaving five components (`about.tsx`, `testimonials.tsx`, `cta.tsx`, `particle-animation.tsx`, `typing-effect.tsx`) completely unused. Shared code (hooks, data, `CountUp`) was duplicated across files. The result violates DRY, SRP, and YAGNI, and makes the codebase hard to maintain or extend.

---

## Goals

- Eliminate all duplication (hooks, components, data, inline SVG)
- Make the dead components the source of truth; replace inline code in pages with them
- Extract shared data to `lib/data/`; extract shared hooks to `hooks/`
- Fix all known bugs uncovered during the audit
- Apply relevant React/Next.js best practices (passive listeners, no inline components, dynamic imports for heavy components, eliminate scroll-triggered re-renders)
- No visual regressions — the rendered output must stay identical

---

## Target File Structure

```
hooks/
  use-scroll-reveal.ts

lib/
  data/
    stats.ts
    testimonials.ts
    initiatives.ts
    companies.ts

components/
  count-up.tsx           ← canonical, merges both existing copies
  hero.tsx               ← extracted from app/page.tsx
  about.tsx              ← revived to match current home "About Us" section
  testimonials.tsx       ← revived to match current home testimonial cards
  cta.tsx                ← revived, accepts props for reuse across pages
  companies.tsx          ← keeps WhereWeveGone, data moved to lib/data/companies.ts
  footer.tsx             ← FooterLink sub-component extracted inline
  navigation.tsx         ← bug fix: Button>Link asChild
  particle-animation.tsx ← unchanged; consumed via next/dynamic at call site
  typing-effect.tsx      ← unchanged; no longer dead

app/
  page.tsx               ← slim orchestrator: Hero, AboutSection, WhereWeveGone, InitiativesPreview, Testimonials, CTASection
  about/page.tsx         ← slim: photo collage, Mission, Values, CTASection; nested div bug fixed
  initiatives/page.tsx   ← keeps InitiativeCard; scrollY state → CSS var; <a> → <Link>
  teams/page.tsx         ← untouched (WIP placeholder)
  join/page.tsx          ← untouched (WIP placeholder)
```

---

## Shared Hook

**`hooks/use-scroll-reveal.ts`**

```ts
export function useScrollReveal(threshold = 0.1): { ref: RefObject<HTMLDivElement>, isVisible: boolean }
```

- Extracted verbatim from `app/page.tsx` and `app/about/page.tsx` (identical implementations)
- Replaces both copies; both files import from here

---

## Shared Data Files

| File | Contents | Consumers |
|------|----------|-----------|
| `lib/data/stats.ts` | 4 stat objects `{ value, suffix, label, icon }` | `components/about.tsx` |
| `lib/data/testimonials.ts` | 2 testimonial objects `{ quote, name, role, year, accent }` | `components/testimonials.tsx` |
| `lib/data/initiatives.ts` | 3 initiative objects `{ id, title, subtitle, description, details, image, accent }` | `components/about.tsx` (preview), `app/initiatives/page.tsx` |
| `lib/data/companies.ts` | 24 company objects `{ name, logo }` | `components/companies.tsx` |

---

## Component Contracts

### `components/count-up.tsx`
```ts
interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}
export function CountUp({ end, suffix, duration, className }: CountUpProps)
```
- Uses `requestAnimationFrame` (smoother than `setInterval`)
- Integrates `useScrollReveal` so animation only starts when element enters viewport
- Merges the best of both existing implementations

---

### `components/hero.tsx`
```ts
export function Hero()
```
- Self-contained; no props
- Extracts the entire hero section (text, blobs, buttons) out of `app/page.tsx`
- Static blob JSX hoisted outside component per `rendering-hoist-jsx` rule

---

### `components/about.tsx`
```ts
export function AboutSection()
```
- No props; imports stats from `lib/data/stats.ts`
- Renders the two-column "About Us + Stats Grid" section
- Matches current inline implementation in `app/page.tsx` exactly

---

### `components/testimonials.tsx`
```ts
export function Testimonials()
```
- No props; imports testimonials from `lib/data/testimonials.ts`
- Renders the two-card testimonial section
- Matches current inline implementation in `app/page.tsx` exactly

---

### `components/cta.tsx`
```ts
interface CTASectionProps {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}
export function CTASection(props: CTASectionProps)
```
- Parameterized so it can serve both the home page CTA and the about page CTA
- Replaces two nearly identical inline CTA blocks

---

### `components/companies.tsx`
- `WhereWeveGone` export unchanged
- `techCompanies` array moved to `lib/data/companies.ts`; imported here

---

### `components/footer.tsx`
```ts
// Internal sub-component, not exported
function FooterLink({ href, children }: { href: string; children: ReactNode })
```
- Eliminates 4 identical inline SVG arrow blocks in the Quick Links list
- `Footer` default export unchanged

---

## Bug Fixes

| Location | Bug | Fix |
|----------|-----|-----|
| `components/navigation.tsx:218` | Desktop `<Button><Link>` missing `asChild` — renders nested `<a>` inside `<button>` | Add `asChild` prop; move `href` to `Button` |
| `app/about/page.tsx:62-63` | Nested duplicate `<div className="container ...">` | Remove inner duplicate |
| `app/initiatives/page.tsx` | `scrollY` useState causes re-render on every scroll tick | Replace with `useEffect` writing to a CSS custom property on a ref'd element |
| `app/initiatives/page.tsx` bottom CTA | Raw `<a href>` instead of Next.js `<Link>` | Replace with `<Link>` |

---

## React Best-Practice Fixes

| Rule | Location | Change |
|------|----------|--------|
| `rerender-no-inline-components` | `CountUp` defined at module level in `app/page.tsx` | Move to `components/count-up.tsx` |
| `rendering-hoist-jsx` | Static blob divs in Hero | Hoist to module-level constant |
| `bundle-dynamic-imports` | `particle-animation.tsx` is a heavy canvas component | Wrap call site with `next/dynamic({ ssr: false })` |
| `rerender-use-ref-transient-values` | `scrollY` in `initiatives/page.tsx` | CSS custom property approach eliminates per-scroll re-render |

---

## Implementation Order

1. Create `hooks/use-scroll-reveal.ts`
2. Create `lib/data/` files (stats, testimonials, initiatives, companies)
3. Create `components/count-up.tsx`
4. Revive `components/hero.tsx`
5. Revive `components/about.tsx`
6. Revive `components/testimonials.tsx`
7. Revive `components/cta.tsx`
8. Update `components/companies.tsx` (move data)
9. Update `components/footer.tsx` (FooterLink)
10. Fix `components/navigation.tsx` (asChild bug)
11. Slim down `app/page.tsx` (replace inline sections with components)
12. Fix `app/about/page.tsx` (nested div + import CTASection)
13. Fix `app/initiatives/page.tsx` (scrollY, Link)
14. Delete stale unused code confirmed gone

---

## Success Criteria

- Zero visual regressions across all pages
- No file imports `useScrollReveal` or `CountUp` from within a page file
- No data arrays defined inline in page or component files
- All five formerly-dead components are imported and rendered
- TypeScript build passes (`next build`)
- No nested `<a>` inside `<button>` elements in the DOM
