# F05 — Mobile Performance Pass

## Status
Not started (structural groundwork done: `next/image` + Sanity CDN `remotePatterns` already configured)

## Overview
The PRD frames this as a hard technical success metric, not a nice-to-have — most visitors arrive via a shared link on a mid-range Android device, possibly on 3G/4G.

## Acceptance Criteria
- [ ] Lighthouse mobile performance score ≥85
- [ ] Page weight per product page <1MB with optimized images
- [ ] All images served through Sanity CDN via Next.js `<Image>` — never a raw `<img>`, never bypassing the CDN
- [ ] Load-tested behavior on throttled 3G/4G, not just fast wifi

## Edge Cases
- Hero/detail images need correct `sizes`/responsive `srcset` tuning, not just default Next.js image behavior, to hit the <1MB budget
- Any future added dependency (analytics script, font, etc.) should be checked against this budget before merging — see [REVIEW.md](../../REVIEW.md)

## PRD Reference
§4 Must Have (mobile-first layout), §6 (photography standard affects this), §8 Technical success metric
