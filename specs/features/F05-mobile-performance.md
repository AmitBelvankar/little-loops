# F05 — Mobile Performance Pass

## Status
Verified against a real production build (`next build` + `next start`) with one real product; full Lighthouse mobile score still needs the actual Vercel deployment (see below)

## Overview
The PRD frames this as a hard technical success metric, not a nice-to-have — most visitors arrive via a shared link on a mid-range Android device, possibly on 3G/4G.

## Acceptance Criteria
- [ ] **Lighthouse mobile performance score ≥85** — not measured yet. Requires either Chrome DevTools or `npx lighthouse` against the real Vercel deployment; a local dev-sandbox measurement wouldn't reflect real network/CDN conditions, so deliberately not faked here. Re-run once more real products are entered.
- [x] Page weight per product page <1MB with optimized images — measured **~188 KB** total transfer for `/products/taxi-rakhi` against a production build (`next start`), including one real Sanity image. Well under budget; even 2 images/product (per PRD §6 shot list) stays far under 1MB.
- [x] All images served through Sanity CDN via Next.js `<Image>` — confirmed zero raw `<img>` tags in `apps/web/src` (grep), and the network trace shows requests routed through `/_next/image` against `cdn.sanity.io`.
- [ ] Load-tested behavior on throttled 3G/4G — not yet tested; do this against the real deployment alongside the Lighthouse run.

## Edge Cases
- [x] Hero/detail images use `next/image` with `fill` + `sizes` tuned per breakpoint (card grid vs. detail gallery) rather than one-size-fits-all
- [ ] Any future added dependency (analytics script, font, etc.) should be checked against this budget before merging — see [REVIEW.md](../../REVIEW.md)

## Build-time fix along the way
`next build`'s internal ESLint step failed to resolve `eslint-plugin-react-hooks` and `@next/eslint-plugin-next` — both are declared as *dependencies of* `eslint-config-next` rather than expected peers, and pnpm's strict `node_modules` isolation doesn't hoist them to where Next's build-time lint step looks. Fixed by adding both as explicit `devDependencies` in `apps/web/package.json`.

## PRD Reference
§4 Must Have (mobile-first layout), §6 (photography standard affects this), §8 Technical success metric
