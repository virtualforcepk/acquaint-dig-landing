import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

const CALENDLY = 'https://calendly.com/kamran1-sou9/30min'

// 4 services — names exactly as specified; gem stills used as subtle card visuals.
const SERVICES = [
  { idx: '01', name: 'Digital Strategy', accent: 'var(--emerald)', img: 'img/03-emerald.png' },
  { idx: '02', name: 'Paid Advertising (Meta & Google)', accent: 'var(--sapphire-facet)', img: 'img/04-sapphire.png' },
  { idx: '03', name: 'AI Automation & CRM', accent: 'var(--emerald-facet)', img: 'img/02-dig.png' },
  { idx: '04', name: 'Real Estate Ads', accent: 'var(--sapphire)', img: 'img/06-cta-resolve.png' },
]

// Base-aware asset URLs so the build works at any deploy base (root domain or subpath).
const BASE = import.meta.env.BASE_URL

export default function App() {
  const bgRef = useRef(null)
  const m1 = useRef(null)
  const m2 = useRef(null)
  const m3 = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const video = bgRef.current
    let disposed = false

    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const smallScreen = window.matchMedia('(max-width: 760px)').matches
    const lightMode = prefersReduce || smallScreen // skip frame scrubbing -> static bg

    // ---------- Lenis smooth scroll, wired to ScrollTrigger + gsap.ticker ----------
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.5 })
    lenis.on('scroll', ScrollTrigger.update)
    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    // ---------- dev hooks ----------
    window.__lenis = lenis
    window.__ST = ScrollTrigger
    window.__bgv = video

    const ctx = gsap.context(() => {
      // scene reveals
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 42,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
        })
      })

      // pin the gems + proof section as the held "reveal" moment
      ScrollTrigger.create({ trigger: '#ingredients', start: 'top top', end: '+=110%', pin: true, pinSpacing: true })

      // metric count-up on enter
      const fmt = (v) => Math.round(v).toLocaleString('en-US') + '+'
      ;[{ ref: m1, to: 88000 }, { ref: m2, to: 30000 }, { ref: m3, to: 1700 }].forEach(({ ref, to }) => {
        const o = { v: 0 }
        gsap.to(o, {
          v: to,
          duration: 1.6,
          ease: 'power1.out',
          scrollTrigger: { trigger: '#ingredients', start: 'top 60%', toggleActions: 'play none none none' },
          onUpdate: () => {
            if (ref.current) ref.current.textContent = fmt(o.v)
          },
        })
      })
    })

    // ---------- scroll-scrubbed background video ----------
    if (!lightMode && video) {
      const startScrub = () => {
        if (disposed) return
        const dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 12
        const proxy = { t: 0 }
        gsap.to(proxy, {
          t: dur,
          ease: 'none',
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.4 },
          onUpdate: () => {
            if (video.readyState >= 2) {
              const t = Math.min(dur - 0.04, Math.max(0, proxy.t))
              // only seek on a meaningful delta to avoid thrashing the decoder
              if (Math.abs(video.currentTime - t) > 1 / 60) {
                try { video.currentTime = t } catch (e) { /* not seekable yet */ }
              }
            }
          },
        })
        ScrollTrigger.refresh()
        // paint the surface (first) frame at the top, not a stray preloaded frame
        try { video.currentTime = 0.03 } catch (e) { /* not seekable yet */ }
      }
      video.pause()
      if (isFinite(video.duration) && video.duration > 0) startScrub()
      else video.addEventListener('loadedmetadata', startScrub, { once: true })
    }

    ScrollTrigger.refresh()
    // re-measure once web fonts + images settle (pins depend on accurate heights)
    const refreshT = setTimeout(() => ScrollTrigger.refresh(), 700)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh() })
    }

    return () => {
      disposed = true
      clearTimeout(refreshT)
      gsap.ticker.remove(ticker)
      ctx.revert()
      ScrollTrigger.getAll().forEach((st) => st.kill())
      lenis.destroy()
      delete window.__lenis
      delete window.__ST
      delete window.__bgv
    }
  }, [])

  return (
    <>
      {/* fixed background motion layer */}
      <div className="bg-layer">
        <video ref={bgRef} className="bg-video" muted playsInline preload="auto" poster={`${BASE}img/00-hero-surface.png`}>
          <source src={`${BASE}bg.mp4`} type="video/mp4" />
        </video>
        <div className="bg-static" aria-hidden="true" style={{ backgroundImage: `url(${BASE}img/05-diamond.png)` }} />
      </div>
      <div className="bg-tint" aria-hidden="true" />

      {/* nav */}
      <nav className="nav">
        <a className="wm" href="#home">Acquaint.</a>
        <div className="links">
          <a href="#catalog">Services</a>
          <a href="#ingredients">Work</a>
          <a href="#cta">About</a>
          <a className="book" href={CALENDLY} target="_blank" rel="noreferrer">Book a call</a>
        </div>
      </nav>

      <main className="page">
        {/* HOME / hero — surface */}
        <section id="home" className="section">
          <div className="wrap" data-reveal>
            <div className="eyebrow">Lead generation, reimagined</div>
            <h1 className="h1">Stop buying clicks. Start mining customers.</h1>
            <p className="sub">Your next customer is buried in the noise. We dig until they surface.</p>
            <div className="cta-row">
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Book a call</a>
              <a className="btn-ghost" href="#cta">or get a free audit</a>
            </div>
          </div>
          <div className="cue"><span className="dot" /> Scroll to dig</div>
        </section>

        {/* SPLIT / the dig */}
        <section id="split" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>The dig</div>
            <h2 className="h2" data-reveal>Your market is mostly dirt.</h2>
            <p className="sub" data-reveal>
              So we start digging. Targeting, outreach, funnels and AI that sift the whole market — not just skim the top.
            </p>
          </div>
        </section>

        {/* INGREDIENTS / gems + proof (pinned) */}
        <section id="ingredients" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>The gems</div>
            <h2 className="h2" data-reveal>And we hit gems.</h2>
            <p className="sub" data-reveal>Qualified prospects, ready to buy — delivered straight to your pipeline.</p>
            <div className="metrics" data-reveal>
              <div className="metric"><div className="n" ref={m1}>0+</div><div className="l">prospects sourced</div></div>
              <div className="metric"><div className="n" ref={m2}>0+</div><div className="l">leads AI-scored &amp; ranked</div></div>
              <div className="metric"><div className="n" ref={m3}>0+</div><div className="l">leads actively worked</div></div>
            </div>
          </div>
        </section>

        {/* CATALOG / services */}
        <section id="catalog" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>What we do</div>
            <h2 className="h2" data-reveal>One team for the whole dig.</h2>
            <div className="cards">
              {SERVICES.map((s) => (
                <article className="card" key={s.idx} style={{ '--card-accent': s.accent }} data-reveal>
                  <img className="cv" src={`${BASE}${s.img}`} alt="" aria-hidden="true" />
                  <div className="idx">{s.idx}</div>
                  <div className="name">{s.name}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE / the one — diamond climax */}
        <section id="experience" className="section">
          <div className="wrap" data-reveal>
            <div className="eyebrow">The one</div>
            <h2 className="h2">Then we find <span className="prism-text">the one.</span></h2>
            <p className="sub">Your next best customer. Not a click. A close.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="section">
          <div className="wrap" data-reveal>
            <h2 className="h2 prism-text">Find your next customer.</h2>
            <p className="sub">Thirty minutes, no pitch — an honest look at where your pipeline is leaking.</p>
            <div className="cta-row">
              <a className="btn btn-prism" href={CALENDLY} target="_blank" rel="noreferrer">Book a call</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="footer" className="footer">
        <div className="wrap">
          <div className="top">
            <div>
              <div className="brand">Acquaint.</div>
              <div className="tag">Get people acquainted with your media.</div>
            </div>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>
          <div className="meta">
            <span>Mississauga, ON · serving Canada</span>
            <span>© 2026 Acquaint Media</span>
          </div>
        </div>
      </footer>
    </>
  )
}
