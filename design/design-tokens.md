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

## Applying these
When building components, wire these into Tailwind's theme (`apps/web`'s Tailwind v4 CSS-first config) rather than hardcoding hex values in JSX — see [.claude/rules/project-rules.md](../.claude/rules/project-rules.md).
