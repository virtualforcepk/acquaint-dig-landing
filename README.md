# Acquaint Dig — Cinematic Scroll Landing Page

A single-page, **scroll-driven** landing page for **Acquaint Media** — a Canadian B2B lead‑generation & AI‑automation agency. The entire page is one continuous **descent through dark earth**: as you scroll, a full‑screen background video scrubs frame‑by‑frame from the soil surface down to a diamond — *the one big lead*.

> **The story is a dig.** Most of the market is dirt. We dig through it, the gems surface (emerald, then sapphire), and we reach the diamond.

<p align="center">
  <img src="public/img/05-diamond.png" alt="Acquaint Dig — the diamond" width="80%" />
</p>

<p align="center">
  <img src="public/img/00-hero-surface.png" width="13%" />
  <img src="public/img/01-dirt.png" width="13%" />
  <img src="public/img/02-dig.png" width="13%" />
  <img src="public/img/03-emerald.png" width="13%" />
  <img src="public/img/04-sapphire.png" width="13%" />
  <img src="public/img/05-diamond.png" width="13%" />
  <img src="public/img/06-cta-resolve.png" width="13%" />
</p>

---

## ✨ Highlights

- **Scroll‑scrubbed background video** — page scroll position maps 1:1 to `video.currentTime`, so the descent feels like one continuous motion you control by scrolling. The clip is re‑encoded **all‑keyframe** (every frame independently seekable) for judder‑free scrubbing.
- **Buttery smooth scrolling** with **Lenis**, correctly wired into **GSAP ScrollTrigger**.
- **Pinned reveal section**, animated **count‑up metrics**, and per‑section reveals driven by ScrollTrigger.
- **Cinematic design system** — dark‑soil palette, faceted‑gem accents, a prism gradient reserved for the climax + CTA, all via CSS variables (Clash Display · Satoshi · Space Mono).
- **Graceful fallbacks** — a static image background + simplified layout on small screens and for `prefers-reduced-motion`.

## 🛠 Tech

**Vite** · **React** (JavaScript) · **GSAP** + **ScrollTrigger** · **Lenis** · CSS variables

## 🚀 Run locally

```bash
npm install
npm run dev          # → http://localhost:5173
```

Production build (relative asset paths):

```bash
npm run build -- --base=./
npm run preview
```

## 🧠 How the scroll‑video system works

1. A fixed, full‑screen `<video>` (`public/bg.mp4`, muted, paused) sits behind the content with a soil‑tint overlay for text legibility.
2. **Lenis** drives smooth scrolling and feeds ScrollTrigger the canonical way:
   ```js
   lenis.on('scroll', ScrollTrigger.update)
   gsap.ticker.add((t) => lenis.raf(t * 1000))
   gsap.ticker.lagSmoothing(0)
   ```
3. A `scrub` ScrollTrigger tweens a proxy `0 → video.duration` across the whole page and writes `video.currentTime` on every update — **the scroll *is* the playhead.**
4. The background clip is encoded all‑keyframe (`keyint=1`), so every seek lands instantly.

Dev hooks (exposed on `window` for tinkering): `window.__lenis`, `window.__ST`, `window.__bgv`.

## 📁 Structure

```
website/
├─ index.html              # fonts + root
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx              # page + scroll/video/GSAP/Lenis engine
│  └─ index.css            # design tokens (CSS vars) + section styles
├─ public/
│  ├─ bg.mp4               # all-keyframe descent video (scroll-scrubbed)
│  └─ img/00..06-*.png     # the 7 descent stills
└─ vite.config.js
```

## 🎨 Sections

`home` (hero) · `split` (the dig) · `ingredients` (gems + proof, pinned) · `catalog` (services) · `experience` (the diamond climax) · `cta` · `footer`

---

<sub>Front‑end sample. Visuals generated for the Acquaint Media “dig” concept. © 2026 Acquaint Media.</sub>
