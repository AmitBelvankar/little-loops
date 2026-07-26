# Little Loops — Product Catalog & WhatsApp Funnel
### V1 Product Requirements Document
**Owner:** Amit Belvankar (Product/Dev) · **Business stakeholder:** [Wife's name]
**Doc status:** Reconstructed from 13 July 2026 original · Target launch: **28 Aug 2026 (Raksha Bandhan)**

> **Note on this version:** Sections 1, 2, 7, 8, 9, and the V2 Parking Lot are verified word-for-word
> against the original. Sections 3–6 below are reconstructed from related feature specs and
> follow-up decisions in the same project (F001–F003, CLAUDE.md, design system discussion) —
> flag anything that doesn't match your memory of the original and I'll correct it.

---

## 1. Problem & Opportunity

[Wife] produces handmade crochet products (primary craft; bead jewelry, Diwali candles/gifts to follow in later phases) but has no owned digital presence — discovery and sales currently depend entirely on word-of-mouth and ad-hoc WhatsApp chats with no structured catalog to point people to.

**The gap:** there is no low-friction way for a new or returning customer to *browse* the range, understand what's available, and *initiate an order* without already knowing exactly what to ask for.

**The opportunity:** a lightweight, visually strong catalog site that does one job well — turn a browsing visitor into a WhatsApp conversation with intent already attached (i.e., "I want the Sunflower Rakhi" not "hi, what do you sell?").

This is a dual-purpose build:
1. **Business tool** — live before Raksha Bandhan 2026, usable by a non-technical owner post-launch.
2. **Portfolio artifact** — demonstrates end-to-end product thinking + shipped code for freelance client conversations (real business, real constraints, real deadline — not a tutorial clone).

---

## 2. Goals & Non-Goals (V1)

### Goals
- Ship a live, mobile-first catalog site for the **Crochet** category only, before **28 Aug 2026**.
- Every product card converts to a **pre-filled WhatsApp enquiry** in one tap.
- [Wife] can **add/edit/remove products herself** post-launch without touching code.
- The build is clean and documented enough to reference as a freelance case study.

### Explicit Non-Goals for V1 (parking lot for V2+)
- ❌ No online payment / checkout — WhatsApp conversation *is* the checkout, by design.
- ❌ No Bead Jewelry, Diwali Candles, or Gifts categories yet.
- ❌ No user accounts, wishlists, or order history.
- ❌ No custom domain — free-tier hosting URL is acceptable for V1.
- ❌ No automated inventory/stock tracking.
- ❌ No multi-language (Hindi) support in V1.

Keeping the non-goals explicit matters here — it's what keeps a 6-week solo build achievable.

---

## 3. User Personas *(reconstructed)*

### Primary: The Content Owner — [Wife]
- Runs the crochet business day-to-day; not technical, needs to add/edit products without touching code.
- Currently manages everything via memory + ad-hoc WhatsApp chats — no structured system today.
- Success for her = "I can add a new product myself in a few minutes, and people stop asking me 'what do you have?'"

### Secondary: The Browsing Customer
- Arrives via a shared link (Instagram bio, WhatsApp status, word-of-mouth forward) — not a cold search visitor.
- On mobile, likely on a mid-range Android device, possibly on 3G/4G.
- Wants to browse quickly, see what's available and roughly what it costs, then message directly — not create an account or fill a form.

---

## 4. Functional Requirements *(reconstructed from F001–F003 feature specs)*

### Must Have (V1 launch blockers)
- Catalog grid showing all published Crochet products, filterable by subcategory, no full page reload on filter
- Product detail page per item, shareable with rich preview (OG metadata) since sharing is a discovery channel
- One-tap WhatsApp CTA on every product card and detail page, pre-filled with product name/context
- Sanity CMS product schema wife can use unassisted (name, images, price or "enquire," description, category/subcategory, "New" flag)
- Mobile-first layout, usable cleanly at 360px width

### Should Have
- "New Arrivals" badge on recently added products
- Category intro copy/imagery
- Basic analytics (visits, WhatsApp click-throughs)

### Could Have (V2 candidates, not blocking)
- Customer-facing search
- Sort options beyond default (most-recent-first)

---

## 5. Technical Constraints & Architecture *(reconstructed from CLAUDE.md / ADR discussions)*

- **Frontend:** Next.js (App Router), TypeScript, React
- **CMS:** Sanity.io (free tier) — schemas versioned in `packages/sanity-schema`
- **Hosting:** Vercel (free tier), git-based deploy — no separate infra/Terraform needed at this scale
- **Images:** Sanity CDN + Next.js `<Image>` component only — never bypassed, since image weight is the main mobile-performance risk
- **No backend/API server** beyond Sanity + Next.js — WhatsApp integration is a `wa.me` deep link, not the Cloud API, to avoid business-account setup overhead for V1
- **Data model (Product):** `{ name, slug, images[], price (optional), description, category (ref), subcategory (ref), isNew (bool), publishedAt }`
- **Data model (Subcategory):** `{ name, slug, parentCategory (ref) }`

---

## 6. Content & Photography Requirements

- Target **minimum 15–20 finished, photographed products** for a credible-looking launch catalog — fewer than that and empty categories undercut the "real business" narrative.
- Photography standard: plain/consistent background, natural light, 1:1 or 4:5 crop, consistent across all products — this affects perceived quality more than any code decision will.
- Simple shot list template (product name, 1 hero shot + 1 detail shot) to run in parallel with development, not after it.

---

## 7. Suggested Timeline (6.5 weeks: 13 Jul → 28 Aug)

| Week | Focus |
|---|---|
| 1 (Jul 13–19) | Finalize crochet subcategories & product schema with wife; set up Sanity project + Next.js scaffold |
| 2 (Jul 20–26) | Build catalog grid + category filtering; wire CMS data |
| 3 (Jul 27–Aug 2) | Product detail page + WhatsApp CTA integration; start photography in parallel |
| 4 (Aug 3–9) | Mobile performance pass (image optimization, load testing on 3G/4G); OG/share metadata |
| 5 (Aug 10–16) | Should-have features (New Arrivals badge, category intros, analytics); wife content-entry dry run |
| 6 (Aug 17–23) | Bug bash, real product data entry, soft launch to a small circle |
| Buffer (Aug 24–28) | Fixes from soft-launch feedback, public launch |

---

## 8. Success Metrics (V1)

- **Business:** ≥X WhatsApp enquiries attributed to the catalog in the first 2 weeks post-launch (baseline TBD — you don't have a prior number, so this becomes your first measurement, not a target).
- **Product:** wife successfully adds a product end-to-end without your help within the first week of CMS access.
- **Technical:** Lighthouse mobile performance score ≥85; page weight per product page kept lean (target <1MB with optimized images).
- **Portfolio:** a documented case study (problem → decisions → outcome) ready to show a freelance prospect.

---

## 9. Open Questions (to resolve in Week 1)

1. What are the actual crochet subcategories your wife thinks in (not the 6 generic ones I proposed earlier) — Rakhi, everyday bands, keychains, home décor, etc.?
2. Should pricing be shown publicly, or should price be "enquire for price" (common for handmade/customizable goods)?
3. WhatsApp number: personal number, or worth setting up WhatsApp Business App now (free) for a more professional first impression?
4. Any existing brand name/logo, or do we treat "Little Loops" as a placeholder to finalize?

---

## V2+ Parking Lot (not in scope now, just captured)
- Bead Jewelry, Diwali Candles, Gifts categories
- Custom domain
- Hindi language toggle
- WhatsApp Business Cloud API automation (order status, catalog sync)
- Customer-facing search
