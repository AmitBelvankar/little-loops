# Little Loops

## What This Is
Mobile-first product catalog + WhatsApp enquiry funnel for a handmade crochet business. Single-owner build, hard deadline (28 Aug 2026, Raksha Bandhan). Dual purpose: a real business tool for a non-technical content owner (Amit's wife), and a documented portfolio case study. Full context: [specs/PRD.md](specs/PRD.md).

## Tech Stack
- Frontend: Next.js 15 (App Router), TypeScript, React, Tailwind — see [ADR-002](docs/ADR/ADR-002-nextjs-15-pin.md) for why not 16
- CMS: Sanity.io (free tier), embedded Studio at `/studio` — see [ADR-001](docs/ADR/ADR-001-embedded-sanity-studio.md)
- Hosting: Vercel (free tier), git-based deploy
- Monorepo: pnpm workspaces + Turborepo — see [ADR-003](docs/ADR/ADR-003-pnpm-turborepo.md)
- No backend/API server beyond Sanity + Next.js. No AWS, no Terraform, no custom infra at this scale.

## Repo Map
- `apps/web/` — the Next.js app: public catalog + embedded Sanity Studio (`/studio`)
- `packages/sanity-schema/` — product/category/subcategory schema definitions, shared by Studio
- `specs/PRD.md` — source of truth for product requirements
- `specs/features/` — one lightweight spec per Must-Have feature; read the relevant one before implementing
- `docs/ADR/` — real architecture decisions made so far, with reasoning — read before proposing a different approach to something already decided
- `design/design-tokens.md` — placeholder color/type/shape tokens (brand not finalized yet)
- `.claude/rules/project-rules.md` — house rules (Non-Goals, image handling, WhatsApp integration, performance budget)
- `REVIEW.md` — code review checklist

## Commands
```bash
pnpm dev          # all workspace packages, watch mode (turbo)
pnpm build        # build all packages
pnpm lint         # ESLint across the workspace
pnpm typecheck    # tsc --noEmit across the workspace
```

## Hard Rules — Never Violate
See [.claude/rules/project-rules.md](.claude/rules/project-rules.md) for the full list. The two most likely to be silently violated under time pressure:
1. **PRD §2 Non-Goals are locked.** No checkout, no accounts, no custom domain, no stock tracking, no multi-language. If asked to build one of these, flag it — don't assume the ask overrides the PRD.
2. **Images always via Sanity CDN + `<Image>`.** Never a raw `<img>`. This is the PRD's own named mobile-performance risk.

## Gotchas (read before touching related code)
- Next.js is pinned to `^15.4.0` — `next-sanity` doesn't support 16 yet. See [ADR-002](docs/ADR/ADR-002-nextjs-15-pin.md) before touching `apps/web/package.json`'s `next` version.
- The Sanity Studio config (`sanity.config.ts`) must only ever be imported from an explicit `'use client'` boundary (see `apps/web/src/app/studio/[[...tool]]/Studio.tsx`) — importing it directly from a Server Component crashes with a React Server Components error. Don't "simplify" this back into `page.tsx`.
- `eslint-config-next@15.x` ships legacy eslintrc-style configs, not ESLint 9 flat-config arrays — `apps/web/eslint.config.mjs` bridges this via `@eslint/eslintrc`'s `FlatCompat`. This is intentional, not a leftover.
- Brand/design tokens in `design/design-tokens.md` are explicitly placeholders (PRD §9 open question #4 — brand name/logo not finalized). Use the tokens, but don't treat the specific hex values as final.
