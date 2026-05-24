# Portfolio — Akshat Srivastava

Personal portfolio. Plain static HTML/CSS/JS, no build step.

## Local development

The site is fully static. Any static file server works:

```bash
# Python
python3 -m http.server 8000

# Or Node
npx serve .
```

Open <http://localhost:8000>.

## Project structure

```
.
├── index.html          # Home
├── case-study.html     # Long-form case study page
├── resume.html         # Resume page (intro CTA points to a Google Doc; this page is the styled fallback)
├── script.js           # All client behaviour (smart previews, theme toggle, clock, scroll progress, etc.)
├── styles.css          # All styles
├── assets/             # Images
├── vercel.json         # Vercel hosting config (clean URLs + cache headers)
└── twitter-worker/     # Cloudflare Worker for Twitter follower stats — deployed separately, NOT part of the static site
```

## Deploying

### Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel — no framework, no build command, no output directory. Vercel treats it as a static site.
3. `vercel.json` provides clean URLs (`/case-study` instead of `/case-study.html`) and long cache headers for `/assets/*`.
4. `.vercelignore` keeps `twitter-worker/` out of the static deploy.

### GitHub Pages

Push to GitHub and enable Pages from the repo settings. No build step needed. Note: GitHub Pages does not honour `vercel.json` — clean URLs won't apply, so internal links must keep the `.html` suffix.

## Twitter follower stats (optional)

`script.js` has a constant near the top:

```js
const TWITTER_STATS_WORKER = ""; // leave empty to disable Twitter stats
```

Stats will gracefully be skipped when this is empty. To enable:

1. Deploy `twitter-worker/` to Cloudflare Workers:
   ```bash
   cd twitter-worker
   npx wrangler deploy
   ```
   Set the `TWITTER_BEARER_TOKEN` secret via `wrangler secret put TWITTER_BEARER_TOKEN`.
2. Paste the worker URL into `TWITTER_STATS_WORKER`.

## Cache-busting

CSS and JS load with version query strings (`?v=NN`). Bump the version on every change to force visitors past the browser cache.

- `styles.css?v=46`
- `script.js?v=51`

Bump consistently across `index.html`, `case-study.html`, `resume.html`.

## Adding a Medium article

The writing list is hand-curated. To add an article, edit the `<ol class="list list--writing">` block inside `<section id="writing">` in `index.html` and prepend a new `<li class="list__item">…</li>` following the existing pattern.
