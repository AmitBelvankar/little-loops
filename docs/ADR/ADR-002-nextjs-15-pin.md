# ADR-002: Pin Next.js to 15.x (not 16)

## Date
2026-07-26

## Status
Accepted

## Context
`create-next-app` scaffolded the latest Next.js (16.2.11) by default. `next-sanity`'s `peerDependencies` declare support for `next: "^14.2 || ^15.0.0-0"` only — Next 16 isn't listed. Attempting to run the embedded Studio (see [ADR-001](ADR-001-embedded-sanity-studio.md)) on Next 16 produced a hard runtime crash on `/studio`: `TypeError: React.createContext is not a function`. Root cause: Sanity Studio's dependencies (`sanity/structure`, `@sanity/vision`) get evaluated under Next's restricted React Server Components module resolution when the config is imported from a Server Component context, and that restricted build of React deliberately omits `createContext`. This is a real, reproducible incompatibility, not a misconfiguration on our side.

## Decision
Pin `apps/web`'s `next` and `eslint-config-next` to `^15.4.0`, matching what `next-sanity` actually supports. Do not upgrade to Next 16 until `next-sanity` publishes explicit support for it.

## Options Considered

### Option A: Pin to Next 15 (Chosen)
- Pros: proven, documented compatibility with `next-sanity`'s embedded Studio pattern; stable ahead of a hard 28 Aug deadline; the actual fix (isolating the Studio config behind an explicit Client Component boundary) still applies and is now verified working.
- Cons: misses Next 16 features until a later, deliberate upgrade.

### Option B: Stay on Next 16, work around the incompatibility
- Pros: latest framework version.
- Cons: broke Studio outright in testing; no published timeline for `next-sanity` support; not worth the risk against a fixed launch date for a business-critical CMS editing path.

## Consequences
- Positive: `/studio` verified working end-to-end (200 response, Sanity project connected) on Next 15.5.21.
- Negative / trade-offs: revisit this pin once `next-sanity`'s `package.json` peer dependencies explicitly include Next 16.
- Related: `eslint-config-next@15.x` ships legacy eslintrc-style configs, not ESLint 9 flat-config arrays — required bridging via `@eslint/eslintrc`'s `FlatCompat` in `apps/web/eslint.config.mjs`. Same root cause (matching tooling to the pinned Next 15 line), noted here rather than as a separate ADR since it's a direct consequence of this decision.

## References
- `node_modules/.pnpm/next-sanity@*/node_modules/next-sanity/package.json` peerDependencies
- [apps/web/src/app/studio/[[...tool]]/Studio.tsx](../../apps/web/src/app/studio/[[...tool]]/Studio.tsx) — the Client Component boundary fix
- [apps/web/package.json](../../apps/web/package.json)
