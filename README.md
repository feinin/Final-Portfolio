# Kenan Kong — Portfolio

A Next.js + Tailwind portfolio. Design concept: an engineer's notebook —
dark ink background, faint grid-paper texture, monospace accents, and a
hand-drawn-feeling node graph in the hero that connects you to your core
stack (nods to your Obsidian graph-view / trace-table way of thinking).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Before you deploy, replace these placeholders

- `app/page.tsx`
  - `traceLog`: real dates for Aditi Consulting and General Assembly
  - `projects`: swap in 2–3 real projects, names, stacks, and blurbs
  - Contact section: your real email, GitHub, and LinkedIn URLs
- `app/layout.tsx`: update the `metadata` description if you want
- `components/SkillGraph.tsx`: add/remove nodes if your stack changes

## Deploy

Easiest path is Vercel:

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo to Vercel for auto-deploys on push.
