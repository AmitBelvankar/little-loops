# ADR-001: Embedded Sanity Studio (not standalone)

## Date
2026-07-26

## Status
Accepted

## Context
The content owner (non-technical) needs an editing UI for products, per PRD §4 Must Have ("Sanity CMS product schema wife can use unassisted"). Sanity's Studio can either be embedded inside the Next.js app at a route (`/studio`) or run as a standalone app deployed separately (e.g. to Sanity's free hosted `*.sanity.studio`). This decision shapes the monorepo layout — a standalone Studio would mean an `apps/studio` package and a second deploy target.

## Decision
Embed Sanity Studio inside `apps/web` at `/studio`, using `next-sanity`'s `NextStudio` component. One app, one Vercel deployment, one URL.

## Options Considered

### Option A: Embedded in Next.js app (Chosen)
- Pros: single deploy target on Vercel free tier (matches PRD §5 — "no separate infra... needed at this scale"); one URL for the whole project; simplest for a solo build against a hard deadline; Studio route is code-split, so it doesn't bloat the public catalog's bundle.
- Cons: Studio's dependencies (`sanity`, `@sanity/vision`) live in the same `package.json` as the public site — slightly larger `node_modules`, no real runtime cost.

### Option B: Standalone Studio app
- Pros: cleaner separation between "public site" and "admin tool"; Studio could be deployed to Sanity's own free hosted studio, entirely decoupled from Vercel.
- Cons: second deploy target and second URL to manage — direct friction against a 6-week solo timeline; would need an `apps/studio` package with its own build/deploy pipeline for no concrete benefit at this scale.

## Consequences
- Positive: matches the "no separate infra" constraint exactly; wife only ever needs one bookmark (the same domain, `/studio` path).
- Negative / trade-offs: Studio access control relies entirely on Sanity's own project members/roles (invite her as Editor from sanity.io/manage) — there's no separate app-level auth layer, which is fine at this scale but worth remembering if the CMS ever needs finer-grained permissions.
- This choice directly caused the Next.js version constraint in [ADR-002](ADR-002-nextjs-15-pin.md) — `next-sanity`'s embedded Studio only supports Next 14/15, not 16.

## References
- PRD §4 Must Have, §5 Technical Constraints
- [apps/web/sanity.config.ts](../../apps/web/sanity.config.ts), [apps/web/src/app/studio/[[...tool]]](../../apps/web/src/app/studio/[[...tool]])
