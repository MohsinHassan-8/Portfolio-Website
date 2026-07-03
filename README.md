# Mohsin Hassan | AI/ML Engineer Portfolio

Built with React + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## What's included

- `src/sections/` — Hero, About, Skills (Services), Projects
- `src/components/` — FadeIn, AnimatedText, ContactButton, LiveProjectButton, ProjectCard
- `public/projects/` — 3 real screenshots each for Marginalia and VERITAS
- `public/favicon.svg` — generated luxury "MH" monogram favicon

## Changes in this pass

- Removed the hero portrait/magnet image entirely — hero is now just the heading + nav + tagline + contact button.
- Reduced the "Hi, i'm mohsin" heading size so it fits on one line at all breakpoints.
- Contact links now point to `allaboutmohsin8@gmail.com` (nav "Contact" link + every Contact Me button) and GitHub links point to `https://github.com/MohsinHassan-8/` (nav icon + About section link).
- Marquee section removed (not enough source images yet).
- About Me copy updated to your exact wording.
- Page title fixed to "Mohsin Hassan | AI/ML Engineer" (pipe instead of em dash).
- Each project card now uses 3 real screenshots (2 stacked + 1 tall) instead of one repeated image.
- Both project buttons now say "Live Demo" and link to:
  - Marginalia → https://research-paper-rag-chatbot.vercel.app
  - VERITAS → https://veritas-full-stack.vercel.app/

## Still open

- If you'd like the marquee section back, send over ~15-20 of your own screenshots/GIFs and I'll wire it back in (`src/sections/MarqueeSection.tsx` was removed but the pattern is easy to recreate).
- A real headshot can still be added to the hero if you change your mind — just say the word.
