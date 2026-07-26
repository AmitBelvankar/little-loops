# F03 — WhatsApp CTA

## Status
Code complete and verified; blocked only on PRD §9 open question #3 (which WhatsApp number to use — not a code gap)

## Overview
The one job the whole site exists to do: turn a browsing visitor into a WhatsApp conversation with intent already attached. A `wa.me` deep link, not the WhatsApp Cloud API (see [ADR-001](../../docs/ADR/ADR-001-embedded-sanity-studio.md) sibling decisions and PRD §5 — Cloud API is explicitly V2, avoids business-account setup overhead for V1).

## Acceptance Criteria
- [x] Present on every catalog grid card and on the product detail page
- [x] Pre-filled message includes the product name (e.g. "Hi! I'm interested in the Taxi Rakhi") — verified against real product
- [x] Uses a single configured WhatsApp number, defined once (`NEXT_PUBLIC_WHATSAPP_NUMBER` env var), not hardcoded per component — **number itself not yet set**, see below
- [x] Tap target sized appropriately for mobile (Button component: `px-5 py-3`, well over 44px)
- [x] Product name is URL-encoded correctly in the `wa.me` link (`encodeURIComponent`)

## Edge Cases
- [x] Product name containing special characters — handled via `encodeURIComponent`, not manual escaping
- [x] Visitor without WhatsApp installed — `wa.me` handles this natively, no extra code needed
- [ ] **Open: real WhatsApp number not yet configured.** Currently falls back to a number-less `wa.me/?text=...` link, which still opens WhatsApp but doesn't pre-select a recipient. Needs an answer to PRD §9 Q3 (personal number vs. new WhatsApp Business number) before launch.

## PRD Reference
§4 Must Have (WhatsApp CTA), §5 (`wa.me` deep link decision, open question #3 on which number to use)
