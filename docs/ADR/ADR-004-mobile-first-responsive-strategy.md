# ADR-004: Mobile-First Responsive Strategy

## Date
2026-07-26

## Status
Accepted

## Context
PRD treats mobile as the primary context, not a secondary one: the browsing-customer persona (§3) is "on mobile, likely on a mid-range Android device, possibly on 3G/4G," arriving via a shared link — not a desktop search visitor. §4 sets a hard 360px-width floor as a launch blocker, and §8 sets a Lighthouse **mobile** performance score of ≥85 as a named technical success metric, with no equivalent desktop metric. While reviewing the initial design-direction preview, the question came up directly: does prioritizing mobile responsiveness change the component approach already underway (Button, Badge, PageShell)?

## Decision
Mobile-first, content-driven responsive strategy:

1. **Baseline at 360px, not "desktop-first, shrink it."** Every component is designed and built for the 360px floor first; larger viewports are progressive enhancement via Tailwind's default `sm:`/`md:`/`lg:` (min-width) prefixes — never `max-width` overrides that assume desktop is the default.
2. **Container queries for the catalog grid**, not just viewport media queries. The product grid's column count responds to its own container's width (`@container`, native in Tailwind v4), not the raw viewport — keeps the grid correct without new breakpoint logic if the layout context around it ever changes.
3. **Fluid spacing/type via `clamp()`** wherever a value would otherwise need several separate stepped values (e.g. a hero heading) — avoids the "looks designed at 375px and 1440px, awkward in between" gap.
4. **Touch targets ≥44×44px** on every interactive element (buttons, filter chips) — already true of the Button component's current padding; stays explicit as new components are added, since there's no desktop-only admin UI to fall back to laxer sizing on.
5. **Concrete grid starting point** for the catalog (F01), to be validated once real photography exists: 2 columns at the 360px baseline, 3 at tablet (`md:`, 768px+), 4 at desktop (`lg:`, 1024px+).
6. **Explicit image dimensions always** (Next.js `<Image>` with real `width`/`height`, or `fill` + `sizes`) — zero layout shift (CLS) is a design constraint here, not just a performance nice-to-have, since product photography is the heaviest and most shift-prone element on every page.

## Options Considered

### Option A: Mobile-first, container-query-first (Chosen)
- Pros: matches the PRD's own stated priority exactly; Tailwind's utilities are mobile-first by default, so this adds no new tooling; container queries mean the grid doesn't need special-casing later if its layout context changes.
- Cons: slightly more upfront thought than "add breakpoints later" — mitigated by locking the approach now, before F01's real grid is built, instead of retrofitting it.

### Option B: Desktop-first with mobile overrides
- Pros: none specific to this project — the traditional approach, not a fit for a mobile-primary audience.
- Cons: directly contradicts PRD §3/§8; tends to produce mobile experiences that feel like "the desktop site, shrunk," the exact failure mode being avoided here.

### Option C: Separate mobile/desktop component trees or a dedicated "mobile site"
- Pros: none proportionate to this project's size.
- Cons: real engineering overhead for a solo 6-week build with no evidence desktop traffic matters much here; the PRD never asks for divergent mobile/desktop experiences, only one responsive one.

## Consequences
- Positive: no rework needed on Button/Badge/PageShell already built — unprefixed Tailwind utilities are mobile-first by construction already.
- Negative / trade-offs: the 2/3/4-column grid plan is a starting hypothesis, not yet tested against real product photography — expect to revisit once real images are entered and F01 is viewed on actual devices, not just a resized browser window.
- Testing implication: verification must include dragging the viewport through the full range (not just checking 360/768/1024px in isolation), plus common real device widths (360, 390, 412, 768, 1024) before F01/F05 are considered done.

## References
- PRD §3 (persona), §4 (360px floor), §8 (Lighthouse mobile ≥85)
- [specs/features/F01-catalog-grid.md](../../specs/features/F01-catalog-grid.md), [F05-mobile-performance.md](../../specs/features/F05-mobile-performance.md)
