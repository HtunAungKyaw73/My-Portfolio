# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`).

- `pnpm dev` — run dev server
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — Next.js ESLint

No test setup exists.

## Build behavior (important)

`next.config.mjs` sets `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`. Builds will **not** fail on lint or type errors — they pass silently. Run `pnpm lint` and check types explicitly; do not assume a green build means clean code. `images.unoptimized: true` (no Next image optimization).

## Architecture

Single-page static portfolio. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.

- `app/page.tsx` — the entire site. Renders all sections in order: `Header → Hero → About → Skills → Projects → Experience → Contact → Footer`, all wrapped in `ThemeProvider`. Adding a section = add a component to `components/` and slot it here.
- `app/layout.tsx` — root layout. Geist Sans/Mono fonts injected via inline `<style>`; `<html className="light">` is hardcoded.
- `app/action.ts` — `'use server'` Server Action `sendMessage`. Contact form handler: sends email via **nodemailer over Gmail** using `EMAIL_USER` / `EMAIL_PASS` env vars (see `.env`). Recipient is hardcoded to the owner's address. This is the only backend logic.
- `components/*.tsx` — one file per page section (lowercase names, e.g. `hero.tsx`). These are the things you edit for content/layout changes.
- `components/ui/` — shadcn/ui primitives (new-york style). Generated; prefer regenerating via shadcn over hand-editing.
- `components/theme-provider.tsx` — wraps `next-themes`.
- `hooks/`, `lib/utils.ts` (`cn` helper) — standard shadcn scaffolding.

`mongodb/command.txt` is unrelated MongoDB shell practice notes — **not** wired into the app. There is no database in this project.

## Conventions

- Path alias `@/*` maps to repo root (`@/components`, `@/lib/utils`, `@/hooks`, `@/components/ui`).
- shadcn config in `components.json`: new-york style, neutral base, lucide icons, CSS variables.
- Tailwind v4 — no `tailwind.config.js`. Theme and design tokens live in `app/globals.css`. Loaded via `@tailwindcss/postcss` (`postcss.config.mjs`).
