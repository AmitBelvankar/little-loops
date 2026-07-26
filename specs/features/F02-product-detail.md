# F02 — Product Detail Page

## Status
Not started

## Overview
A dedicated, shareable page per product — reachable from the catalog grid and directly via a shared link (Instagram bio, WhatsApp forward).

## Acceptance Criteria
- [ ] One route per product (`/products/[slug]`)
- [ ] OG metadata (title, description, image) set from the product's own data, since sharing is a discovery channel per the PRD
- [ ] WhatsApp CTA present and pre-filled (see F03)
- [ ] All images, description, price/"Enquire for price" rendered
- [ ] Clean, usable layout at 360px width

## Edge Cases
- Slug doesn't resolve to a published product — return a proper 404, not a crash
- Product has no description — layout should degrade gracefully, not leave an obvious empty gap

## PRD Reference
§4 Must Have (product detail page, OG metadata)
