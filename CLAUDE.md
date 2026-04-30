# mwillard.pl

The public Astro site for Maja Willard. Polish-language portfolio. Three pages, no CMS, no JS framework, deployed as plain static files to GitHub Pages.

**This is the public repo.** Anything committed here is visible to the world. Iterate on new ideas in `../studio/` first; copy finished pieces here when they're ready.

## Stack

- **Astro 6.x** static output — `npm run build` writes plain HTML/CSS to `dist/`
- Plain CSS with custom properties for theming (`src/styles/site.css`)
- Google Fonts: Bodoni Moda, Cormorant Garamond, DM Mono, Caveat
- Node.js ≥ 22.12

No React/Vue/Svelte. No backend. No database. No CMS.

## Pages

All under `src/pages/`:

| Route        | File             | Notes                                                  |
|--------------|------------------|--------------------------------------------------------|
| `/`          | `index.astro`    | Plakat — landing with 6 acts and Escher dividers       |
| `/salon/`    | `salon.astro`    | Séance ring + 5 tarot cards                            |
| `/notatnik/` | `notatnik.astro` | CV — pulls publications/paintings/cats from collection |

## Content model (hybrid)

Page **layout and prose** live directly in the `.astro` files. **Repeating lists** live in a content collection so Maja can edit them without touching markup:

- `src/content.config.ts` — Zod schema for the `notatnik` collection
- `src/content/notatnik/index.json` — publications, paintings, cats arrays

To add a publication, painting, or cat: edit that JSON file. Don't touch the page template.

## Color palette — do not change without asking

Defined in `src/styles/site.css`:

- `--magenta-deep: #520252`
- `--magenta-mid: #87245c`
- `--paper` is wired to `--magenta-deep`
- `.atmos` end color also uses the deep magenta

## Commands

```sh
npm install        # install deps (only on first clone, or after package.json changes)
npm run dev        # dev server with hot reload → http://localhost:4321/
npm run build      # static build → dist/
npm run preview    # serve dist/ locally to sanity-check the production build
```

## Deploy

**Target: GitHub Pages with custom domain `mwillard.pl`.**

Already configured:
- `astro.config.mjs` has `site: 'https://mwillard.pl'`
- `public/CNAME` contains `mwillard.pl`
- `.github/workflows/deploy.yml` builds and deploys on every push to `main` (uses `withastro/action@v3`)

Repo: `git@github.com:aestheticfuhrer/mwillard.pl`. Every push to `main` auto-deploys.

DNS lives at seohost.pl, pointed at GitHub Pages via four A records to `185.199.108-111.153` plus a `www` CNAME. Full runbook in `../studio/DEPLOY.md`.

## Where new design ideas come from

The new direction lives in `../studio/design-system/` (Claude Design handoff). Don't paste from there in bulk — copy specific files when implementing. The previous handwritten prototype is archived in `../studio/archive/prototype-html/` for reference.
