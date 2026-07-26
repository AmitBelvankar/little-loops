# F01 — Catalog Grid

## Status
Not started

## Overview
The landing view of the site: a grid of all published Crochet products, filterable by subcategory, mobile-first.

## Acceptance Criteria
- [ ] Grid renders every published `product` document (unpublished/draft excluded)
- [ ] Filtering by subcategory updates the grid without a full page reload
- [ ] Each card shows: image, name, price (or "Enquire for price" if blank), "New" badge if `isNew`
- [ ] Clean, usable layout at 360px width
- [ ] Default sort: most-recent-first (`publishedAt` desc)

## Edge Cases
- Subcategory with zero products — show an empty state, not a broken grid
- Product missing an image — schema requires `min(1)` image, so this shouldn't occur; if it does, don't crash the grid
- Very long product names — must not break card layout at 360px

## PRD Reference
§4 Must Have (catalog grid), §4 Should Have ("New Arrivals" badge)
