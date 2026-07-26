# Project Rules

## Non-Goals are locked (PRD §2) — flag, don't silently build
- No online payment / checkout — WhatsApp conversation *is* the checkout, by design
- No Bead Jewelry, Diwali Candles, or Gifts categories (Crochet only for V1)
- No user accounts, wishlists, or order history
- No custom domain — free-tier hosting URL is fine
- No automated inventory/stock tracking
- No multi-language (Hindi) support in V1

If a request would build any of these, say so explicitly rather than implementing it — these are deliberate scope cuts that keep a 6-week solo build achievable, not oversights.

## Images
- Always through Sanity CDN + Next.js `<Image>` (`next.config.ts` already whitelists `cdn.sanity.io` via `remotePatterns`) — never a raw `<img>`, never bypassing the CDN. Image weight is the PRD's named mobile-performance risk (§5, §8).

## WhatsApp integration
- `wa.me` deep links only, per PRD §5 — not the WhatsApp Cloud API (that's V2 parking lot, avoids business-account setup overhead for V1).
- Pre-filled message must reference the actual product, not a generic greeting (see [F03](../../specs/features/F03-whatsapp-cta.md)).

## Mobile-first
- Every UI change must work cleanly at 360px width (PRD §4, §3 — visitors are mostly on mid-range Android, 3G/4G).

## Pricing
- `price` is optional in the schema — render "Enquire for price" when blank, never force a price to display.

## Performance budget (PRD §8)
- Lighthouse mobile ≥85, page weight <1MB per product page. Flag any change that risks this (large unoptimized image, new heavy client-side dependency, blocking third-party script) before merging.

## Design tokens
- Use the tokens in [design/design-tokens.md](../../design/design-tokens.md) rather than hardcoding colors/spacing — they're placeholders now but centralizing them means a brand update later is a token swap, not a re-skin.
