# F04 — Sanity CMS Schema

## Status
Implemented (schema + embedded Studio live) — pending: wife's unassisted content-entry dry run (PRD §8 Product success metric)

## Overview
Product/category/subcategory schemas that let the content owner (non-technical) add, edit, and remove products herself, with no code changes.

## Acceptance Criteria
- [x] `product`, `category`, `subcategory` schemas defined in `packages/sanity-schema`
- [x] Product fields: name, slug, images (min 1), price (optional — blank means "Enquire for price"), description, category ref, subcategory ref, `isNew` flag, `publishedAt`
- [x] Studio reachable at `/studio`, restricted to invited Sanity project members
- [ ] Wife successfully adds a product end-to-end without dev help (first-week dry run, PRD §8)

## Edge Cases
- Price left blank → front end must render "Enquire for price", not `₹undefined` or a blank
- Product without a subcategory — schema marks `subcategory` required, so Studio should block save rather than allow an orphaned product

## PRD Reference
§4 Must Have (CMS schema), §5 Data model, §8 Product success metric
