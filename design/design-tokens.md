# Little Loops — Design Tokens (Placeholder)

> **Status: placeholder.** These values are a reasonable starting point, not a final brand decision.
> PRD §9 open question #4 asks whether "Little Loops" is the final name or a stand-in — swap these
> once brand/logo is settled. Structure (using tokens instead of hardcoded values) matters more
> right now than the exact values.

## Color

| Token | Value | Use |
|---|---|---|
| `background` | `#FAF7F2` (warm cream) | Page background |
| `foreground` | `#2B2420` (warm charcoal) | Body text — softer than pure black, fits a handmade-goods feel |
| `accent` | `#C1622D` (terracotta) | "New" badges, nav highlights, subcategory active state |
| `accent-muted` | `#E8D5C4` | Accent-tinted backgrounds (badges, hover states) |
| `whatsapp-cta` | `#25D366` (WhatsApp brand green) | **Only** the WhatsApp CTA button — deliberately not the site's own accent color, since visitors already trust that exact green as "tap to message" |
| `border` | `#E5DED4` | Card borders, dividers |

## Typography
- Font: whatever Next.js's default scaffold already installed (Geist) — no second decorative/webfont.
  Rationale: every extra font is a mobile-Lighthouse cost, and PRD §8 sets a hard ≥85 mobile
  performance target. A handmade-goods aesthetic can come from photography, color, and spacing —
  it doesn't need a script font to read as "crafted."
- Scale: Tailwind's default type scale is sufficient for a catalog + detail page — no custom scale needed.

## Shape
- Corners: rounded (`rounded-xl` / `rounded-2xl`) over sharp — friendlier, fits handmade crochet products better than a hard-edged e-commerce look.
- Cards: soft shadow, not heavy — keep the visual weight low so photography is the focus.

## Visual direction: Soft Craft Texture
Chosen direction (of three options considered): subtle handmade-craft cues layered on an otherwise clean, minimal grid. This is the highest-risk-of-kitsch direction, so every cue below is a deliberate, restrained implementation choice — not decoration for its own sake.

**Hard constraint: CSS/SVG only, no raster texture images.** A photographic "paper" or "fiber" texture image is exactly the kind of asset that blows the <1MB-per-page budget (PRD §8) for zero functional benefit. Every craft cue here is inline SVG or pure CSS — effectively free on the network.

- **Section backgrounds**: an extremely subtle noise grain via an inline SVG `feTurbulence` filter, used as a `background-image` data URI at very low opacity (~2-4%) — reads as "not sterile-flat" without reading as "textured wallpaper." Applied sparingly (e.g. page background only), never stacked under photography.
- **Dividers**: a thread-like dashed/wavy rule (inline SVG or a repeating-linear-gradient) in place of a plain solid `border-t`, used between major sections only — not on every card or list item, or it becomes noise.
- **"New" badge shape**: a slightly organic/asymmetric border-radius (e.g. `border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px`) instead of a perfect pill — a classic lightweight CSS "hand-drawn blob" trick, zero asset cost.
- **What we are NOT doing**: no hand-drawn/script decorative font (already ruled out for performance reasons above), no auto-rotating carousels (anti-pattern per modern design patterns — low engagement, and this project's product gallery is a tap-to-switch thumbnail strip, not a carousel), no textured photography backdrops behind product images (product photos per PRD §6 are plain/consistent background — don't compete with them).

## Component states (define before styling, per component-anatomy discipline)
Every interactive component (Button, FilterChip) needs: default, hover, focus-visible, active/pressed, disabled. Focus-visible must stay clearly visible — no `outline: none` without a real replacement — since this is a public site with no login gate to fall back on for accessibility assumptions.

## Applying these
When building components, wire these into Tailwind's theme (`apps/web`'s Tailwind v4 CSS-first config) rather than hardcoding hex values in JSX — see [.claude/rules/project-rules.md](../.claude/rules/project-rules.md).
