# ADR-003: pnpm Workspaces + Turborepo

## Date
2026-07-26

## Status
Accepted

## Context
The project needs monorepo tooling for `apps/web` + `packages/sanity-schema`, deployed to Vercel's free tier. There was a specific concern raised early on: would choosing Vercel-adjacent tooling now create lock-in if the project ever needed to move to AWS later (e.g. for a V2 WhatsApp Cloud API webhook host)?

## Decision
pnpm workspaces + Turborepo.

## Options Considered

### Option A: pnpm + Turborepo (Chosen)
- Pros: Turborepo is built by the Vercel team and auto-detected on deploy — zero-config build caching/task pipelines; pnpm workspaces are fast and disk-efficient, the current ecosystem default for Next.js monorepos.
- Cons: none material at this project's size.

### Option B: npm workspaces only
- Pros: no extra tooling to learn, built into npm directly.
- Cons: no build-graph caching or task orchestration — doesn't matter much at one app + one package, but there's no real cost to having it either.

## Consequences
- Positive: `pnpm dev` / `build` / `lint` / `typecheck` all run through Turborepo's task graph across both workspace packages, verified working.
- Negative / trade-offs: none identified.
- On the AWS lock-in question: none. Turborepo is a task-runner/build-graph tool with no opinion on deploy target; pnpm workspaces are equally portable. Moving `apps/web` to AWS later (via an adapter like OpenNext or SST) would touch zero package/workspace structure — only the hosting step changes.

## References
- [pnpm-workspace.yaml](../../pnpm-workspace.yaml), [turbo.json](../../turbo.json)
