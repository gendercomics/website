# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Nuxt 3 website for GenderComics, a bilingual (DE/EN) content site with an external database-driven comics search. Content pages are markdown files rendered through `@nuxt/content`; the search feature calls a separate backend API (not part of this repo).

## Commands

Package manager is pnpm (pinned via `packageManager` in package.json). Node version is pinned in `.nvmrc`.

All scripts are suffixed `-website` (this repo lives alongside sibling projects in a larger workspace):

```bash
pnpm install              # install deps
pnpm run dev-website       # start dev server (http://localhost:3000)
pnpm run build-website     # production build
pnpm run generate-website  # static generation
pnpm run preview-website   # preview a production build
pnpm run lint-website       # eslint .
pnpm run test-website       # vitest run (tests/unit + tests/nuxt)
pnpm run test-watch-website  # vitest watch mode
pnpm run test-e2e-website    # playwright (builds + previews the app, then runs tests/e2e)
```

Run a single test file directly with the underlying tools:

```bash
pnpm exec vitest run tests/unit/stores/search.test.ts
pnpm exec vitest run tests/nuxt/SearchFilter.test.ts
pnpm exec playwright test tests/e2e/i18n.spec.ts
```

Note: CI runs lint with `continue-on-error: true` (there's pre-existing lint debt) — lint failures do not fail the build, but still fix what you touch.

## Testing structure

Three distinct suites, each with a different reason for existing:

- `tests/unit/` — plain Vitest, `happy-dom` environment. For logic with no Nuxt runtime dependency (e.g. Pinia stores). Use `setActivePinia(createPinia())` in `beforeEach` since stores need an active Pinia instance outside a component.
- `tests/nuxt/` — component tests that need Nuxt's runtime context (auto-imported components, `useI18n`, etc). Mount with `mountSuspended` from `@nuxt/test-utils/runtime`, not `@vue/test-utils`'s plain `mount` — plain `mount` can't resolve Nuxt auto-imports.
- `tests/e2e/` — Playwright, drives a real built-and-previewed app (`playwright.config.ts` builds via `build-website` + `preview-website` before running).

## Architecture

### Content and i18n are the same mechanism

There are no translation string files. Localization works by having **parallel markdown trees**: `content/de/**` and `content/en/**` mirror each other path-for-path (e.g. `content/de/about.md` / `content/en/about.md`). `@nuxtjs/i18n` uses `prefix_and_default` strategy with `de` as the default locale, so a route like `/about` (default) and `/en/about` both resolve to a content path built from the current locale.

Two components do the actual content resolution, both against the `content` collection defined in `content.config.ts`:

- `components/ArticleContent.vue` — takes a `content` prop (a path like `/database`), prefixes it with the current locale (`/de/database`, `/en/database`), and falls back to the raw un-prefixed path if the localized one isn't found. Used by dedicated pages (e.g. `pages/database/index.vue`).
- `pages/[...slug].vue` — catch-all route that renders whatever markdown exists at the current URL path via `ArticleContent`. This is what serves most simple content pages (imprint, privacy, team profiles, artist bios, etc.) without a dedicated `pages/*.vue` file.

When adding a new content page, add the markdown under both `content/de/` and `content/en/`, and if it needs to be prerendered, add both locale-prefixed routes to `nitro.prerender.routes` in `nuxt.config.ts` — routes not listed there won't be part of the static prerender pass.

### Search hits an external API, not this repo's server

`server/` contains no API routes — it's just a `tsconfig.json`. The `pages/database/index.vue` search feature calls out to an external backend directly via `$fetch`, using `appConfig.dbApiBaseUrl` (and `apiImageUrl` for images). These are environment-specific, set in `nuxt.config.ts` under `$development` / `$production` (staging config exists but is commented out as not working yet). There is no mock/local backend — search only works against `http://localhost:8001` (a separately-run service) or the real production API.

### State (Pinia, `stores/`)

- `search.ts` — holds the last-run search input so results can be restored (e.g. returning from a comic detail page).
- `features.ts` — simple feature flags (`comingSoon`, `databaseEnabled`, `blogEnabled`) that gate what `layouts/default.vue` renders.
- `navigation.ts` — burger menu open/closed + navbar visibility state.
- `language.ts` — mirrors the i18n locale cookie (`getLocaleCookie`/`setLocaleCookie`) into a store getter/setter.

### Security headers

`nuxt-security` is configured with a CSP relaxed specifically to allow `@sqlite.org/sqlite-wasm` (used internally by `@nuxt/content` v3's native SQLite mode). `routeRules` also disables the security middleware's XSS validator/rate limiter for `/__nuxt_content/**` internal API routes — don't remove this or Nuxt Content's dev/runtime endpoints break.

### Styling

Global CSS is loaded in a fixed order via `nuxt.config.ts` (`fonts.css`, `design.css`, `styles.css`) — component styles build on top of design tokens (e.g. `--gc-green`) defined there rather than redefining colors locally.

## Linting note

There are two ESLint configs present: `eslint.config.js` (flat config, actually used — ESLint 9 via `eslint .`) and a legacy `.eslintrc.js`. Treat `eslint.config.js` as authoritative.
