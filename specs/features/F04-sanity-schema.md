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
- [x] Price left blank → front end renders "Enquire for price" — verified: GROQ returns `null` (not `undefined`) for a projected-but-absent field, and `formatPrice()` checks for exactly that
- [x] Product without a subcategory — `subcategory` field has `validation: rule.required()` in the schema (packages/sanity-schema/src/schemaTypes/product.ts:51), confirmed present

## PRD Reference
§4 Must Have (CMS schema), §5 Data model, §8 Product success metric
