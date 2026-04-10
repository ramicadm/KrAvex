# KrAvex Website

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Lenis · Resend

---

## Quick start

```bash
npm install
cp .env.local.example .env.local   # add your RESEND_API_KEY
npm run dev                         # http://localhost:3000
```

## Environment variables

| Variable           | Description                                    |
|--------------------|------------------------------------------------|
| `RESEND_API_KEY`   | From [resend.com](https://resend.com) dashboard |
| `NEXT_PUBLIC_SITE_URL` | Production URL, e.g. `https://kravex.dev`  |

## Animation architecture

| Concern                    | Library              |
|----------------------------|----------------------|
| Smooth scroll              | Lenis                |
| Scroll-triggered reveals   | GSAP + ScrollTrigger |
| Hero entrance timeline     | GSAP                 |
| Parallax (background K)    | GSAP ScrollTrigger   |
| Counter animations         | GSAP ScrollTrigger   |
| Process line draw          | GSAP ScrollTrigger   |
| Page transitions           | Framer Motion        |
| Card hover (spring)        | Framer Motion        |
| Navbar scroll state        | Framer Motion        |
| Mobile menu toggle         | Framer Motion        |
| Button press micro-anim    | Framer Motion        |

**Lenis ↔ GSAP sync:** `LenisProvider` calls `ScrollTrigger.update` on every Lenis scroll event so both systems stay in sync.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, Lenis, Navbar, Footer
  page.tsx            Home
  services/page.tsx   Services (3 tiers)
  work/page.tsx       Case studies
  about/page.tsx      Founder bio + Amico Group brands
  blog/page.tsx       Static article index
  contact/page.tsx    Contact form
  api/contact/route.ts  Resend email handler
components/
  layout/             Navbar, Footer
  providers/          LenisProvider
  ui/                 Button, SectionLabel, AnimatedSection, KMark
  home/               Hero, TrustStrip, ServicesSection, FeaturedWork, Process, CTABand
  contact/            ContactForm (react-hook-form + Zod)
data/                 projects.ts, services.ts, blog.ts  (type-safe content)
lib/                  fonts.ts, utils.ts, animations.ts, framer-variants.ts
types/                index.ts
```

## Deploy to Vercel

```bash
vercel --prod
```

Add `RESEND_API_KEY` to your Vercel project environment variables.

## Brand

- Company name is always written **KrAvex** — capital K, capital A (Applications)
- Color palette: Navy `#0D1B2A` · Steel `#1B2D45` · Cyan `#00D4FF` · Gold `#FFB800` · Cloud `#F0F4F8`
- Fonts: Space Grotesk (display) · Inter (body) · JetBrains Mono (labels/code)

---

© 2026 KrAvex · Under The Amico Group · S-Corp · New York
