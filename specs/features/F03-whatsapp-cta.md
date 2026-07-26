# F03 — WhatsApp CTA

## Status
Not started

## Overview
The one job the whole site exists to do: turn a browsing visitor into a WhatsApp conversation with intent already attached. A `wa.me` deep link, not the WhatsApp Cloud API (see [ADR-001](../../docs/ADR/ADR-001-embedded-sanity-studio.md) sibling decisions and PRD §5 — Cloud API is explicitly V2, avoids business-account setup overhead for V1).

## Acceptance Criteria
- [ ] Present on every catalog grid card and on the product detail page
- [ ] Pre-filled message includes the product name (e.g. "Hi! I'm interested in the Sunflower Rakhi") — not a generic "hi, what do you sell?"
- [ ] Uses a single configured WhatsApp number, defined once (env var or CMS singleton), not hardcoded per component
- [ ] Tap target sized appropriately for mobile (WCAG-ish minimum ~44px)
- [ ] Product name is URL-encoded correctly in the `wa.me` link

## Edge Cases
- Product name containing special characters (emoji, quotes) — must not break the URL
- Visitor without WhatsApp installed — `wa.me` already handles this by falling back to WhatsApp Web, no extra handling needed

## PRD Reference
§4 Must Have (WhatsApp CTA), §5 (`wa.me` deep link decision, open question #3 on which number to use)
