# Code Review Checklist

Review changes against these, in order of severity.

## CRITICAL — block merge
- Any Non-Goal from PRD §2 built without explicit sign-off (checkout, accounts, custom domain, stock tracking, multi-language)
- Image rendered without going through Next.js `<Image>` + Sanity CDN
- WhatsApp CTA missing or broken (no pre-filled product context) on a card or detail page
- WhatsApp Cloud API used instead of `wa.me` deep links

## WARNING — should fix before merge
- Change likely to regress the Lighthouse mobile ≥85 / <1MB-per-page budget (PRD §8)
- Layout breaks or degrades below 360px width, or uses `max-width` desktop-first overrides instead of mobile-first (ADR-004)
- Product image missing explicit dimensions (`width`/`height` or `fill`+`sizes`), risking layout shift
- Interactive element with a touch target below 44×44px
- Product detail page missing OG metadata
- Subcategory filter causing a full page reload instead of client-side filtering
- Hardcoded color/spacing value instead of a token from `design/design-tokens.md`

## NIT — optional
- Inconsistent naming vs. existing schema field names
- Missing "New" badge test for a recently-published product

## Output format
CRITICAL (must fix) / WARNING (should fix) / NIT (optional), with specific file:line references.
