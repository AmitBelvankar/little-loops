# F02 — Product Detail Page

## Status
Implemented and verified with real data

## Overview
A dedicated, shareable page per product — reachable from the catalog grid and directly via a shared link (Instagram bio, WhatsApp forward).

## Acceptance Criteria
- [x] One route per product (`/products/[slug]`)
- [x] OG metadata (title, description, image) set from the product's own data — verified page `<title>` reflects product name
- [x] WhatsApp CTA present and pre-filled (see F03)
- [x] All images, description, price/"Enquire for price" rendered
- [x] Clean, usable layout at 360px width (shares grid/container infra verified in F01)
- [x] Tap-to-switch image gallery (not a carousel) for products with multiple photos

## Edge Cases
- [x] Slug doesn't resolve to a published product — verified: returns HTTP 404 with custom not-found page, no crash
- [x] Product has no description — conditionally rendered, no empty gap left

## PRD Reference
§4 Must Have (product detail page, OG metadata)
