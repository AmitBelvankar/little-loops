# F01 — Catalog Grid

## Status
Implemented and verified with real data (Taxi Rakhi product, Rakhi-2026 subcategory)

## Overview
The landing view of the site: a grid of all published Crochet products, filterable by subcategory, mobile-first.

## Acceptance Criteria
- [x] Grid renders every published `product` document (unpublished/draft excluded via `defined(publishedAt)`)
- [x] Filtering by subcategory updates the grid without a full page reload (searchParams + soft Link navigation)
- [x] Each card shows: image, name, price (or "Enquire for price" if blank), "New" badge if `isNew`
- [x] Clean, usable layout at 360px width — verified 2-column grid, zero horizontal overflow
- [x] Default sort: most-recent-first (`publishedAt` desc)

## Edge Cases
- [x] Subcategory with zero products — verified: renders EmptyState, not a broken grid
- [ ] Product missing an image — schema requires `min(1)` image, so this shouldn't occur; not explicitly tested
- [ ] Very long product names — not yet tested against real long names

## PRD Reference
§4 Must Have (catalog grid), §4 Should Have ("New Arrivals" badge)
