# mwillard.pl

Personal portfolio of Maja Willard. Polish-language. Static site, Astro 6, deployed to GitHub Pages → [mwillard.pl](https://mwillard.pl).

## Run locally

```sh
npm install
npm run dev      # → http://localhost:4321/
npm run build    # static build → ./dist/
```

Requires Node ≥ 22.12.

## Stack

Astro 6, plain CSS with custom properties, Google Fonts (Bodoni Moda, Cormorant Garamond, DM Mono, Caveat). No JS framework, no backend.

## Pages

- `/` — Plakat (landing)
- `/salon/` — Séance ring with tarot cards
- `/notatnik/` — CV / publications / paintings / cats

## Deploy

GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`.
