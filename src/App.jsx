import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { createDiamond3D } from './diamond3d'

const CALENDLY = 'https://calendly.com/kamran1-sou9/new-meeting'

// Two offers, with gem stills as subtle card visuals.
const SERVICES = [
  {
    idx: '01',
    name: 'Lead-Gen Systems That Convert',
    accent: 'var(--emerald)',
    img: 'img/03-emerald.png',
    desc: 'We find your next customer and turn them into a sale. Targeting, multi-channel outreach, AI lead-scoring and CRM automation — engineered as one system, running on autopilot.',
  },
  {
    idx: '02',
    name: 'UX/UI + Full-Stack Deployment',
    accent: 'var(--sapphire-facet)',
    img: 'img/05-diamond.png',
    desc: 'The front-end that closes them. Product design, web apps and full-stack builds — designed, engineered and shipped to production. (Exhibit A: this page.)',
  },
]

// Base-aware asset URLs so the build works at any deploy base (root domain or subpath).
const BASE = import.meta.env.BASE_URL

export default function App() {
  const bgRef = useRef(null)
  const bgLayerRef = useRef(null)
  const glRef = useRef(null)
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
          scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.1 },
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

    // ---------- real-time 3D diamond (climax hero) ----------
    let gl = null
    let onPointer = null
    let onResize = null
    if (!lightMode && glRef.current) {
      gl = createDiamond3D(glRef.current)
      window.__gl = gl
      // reveal the 3D diamond + dim the video as the "the one" section enters
      ScrollTrigger.create({
        trigger: '#experience',
        start: 'top 80%',
        end: 'top 30%',
        onUpdate: (self) => {
          gl.setReveal(self.progress)
          // fully fade the descent background to dark so the ONLY diamond is the 3D one
          if (bgLayerRef.current) bgLayerRef.current.style.opacity = String(Math.max(0, 1 - self.progress * 1.08))
        },
      })
      onPointer = (e) => {
        gl.setPointer((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1))
      }
      onResize = () => gl.resize()
      window.addEventListener('pointermove', onPointer, { passive: true })
      window.addEventListener('resize', onResize)
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
      if (onPointer) window.removeEventListener('pointermove', onPointer)
      if (onResize) window.removeEventListener('resize', onResize)
      if (gl) gl.destroy()
      delete window.__lenis
      delete window.__ST
      delete window.__bgv
      delete window.__gl
    }
  }, [])

  return (
    <>
      {/* fixed background motion layer */}
      <div className="bg-layer" ref={bgLayerRef}>
        <video ref={bgRef} className="bg-video" muted playsInline preload="auto" poster={`${BASE}img/00-hero-surface.png`}>
          <source src={`${BASE}bg.mp4`} type="video/mp4" />
        </video>
        <div className="bg-static" aria-hidden="true" style={{ backgroundImage: `url(${BASE}img/05-diamond.png)` }} />
      </div>
      <div className="bg-tint" aria-hidden="true" />
      <canvas ref={glRef} className="gl-canvas" aria-hidden="true" />

      {/* nav */}
      <nav className="nav">
        <a className="wm" href="#home">Acquaint.</a>
        <div className="links">
          <a href="#catalog">Systems</a>
          <a href="#ingredients">Work</a>
          <a href="#split">Approach</a>
          <a className="book" href={CALENDLY} target="_blank" rel="noreferrer">Book a call</a>
        </div>
      </nav>

      <main className="page">
        {/* HOME / hero — surface */}
        <section id="home" className="section">
          <div className="wrap" data-reveal>
            <div className="eyebrow">AI systems + front-end</div>
            <h1 className="h1">We build the systems that find your customers — and the front-ends that close them.</h1>
            <p className="sub">Acquaint Media ships production lead-gen systems and the full-stack experiences that convert them. Not campaigns. Systems that run while you sleep.</p>
            <div className="cta-row">
              <a className="btn" href={CALENDLY} target="_blank" rel="noreferrer">Book a call</a>
              <a className="btn-ghost" href="#cta">or get a free teardown</a>
            </div>
          </div>
          <div className="cue"><span className="dot" /> Scroll to dig</div>
        </section>

        {/* SPLIT / the dig */}
        <section id="split" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>The problem</div>
            <h2 className="h2" data-reveal>Your market is mostly noise.</h2>
            <p className="sub" data-reveal>
              Most agencies sell you clicks and a landing page. We build the system underneath — targeting, outreach, AI scoring, and the interface that converts — then we run it for you.
            </p>
          </div>
        </section>

        {/* INGREDIENTS / gems + proof (pinned) */}
        <section id="ingredients" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>Proof, not pitch</div>
            <h2 className="h2" data-reveal>We build the systems operators run on.</h2>
            <p className="sub" data-reveal>
              Years of building production AI systems and the front-ends around them — alongside operators across the industry. Automation that <strong>sources, scores, and works leads</strong>, every day. Not demos.
            </p>
            <div className="metrics" data-reveal>
              <div className="metric"><div className="n" ref={m1}>0+</div><div className="l">prospects sourced</div></div>
              <div className="metric"><div className="n" ref={m2}>0+</div><div className="l">leads AI-scored &amp; ranked</div></div>
              <div className="metric"><div className="n" ref={m3}>0+</div><div className="l">leads actively worked</div></div>
            </div>
            <p className="proofline" data-reveal>
              Multi-agent funnels, full-stack builds, CRM and outreach automation — deployed and running. And the front-end? <em>You&apos;re reading one.</em>
            </p>
          </div>
        </section>

        {/* CATALOG / services */}
        <section id="catalog" className="section">
          <div className="wrap">
            <div className="eyebrow" data-reveal>What we build</div>
            <h2 className="h2" data-reveal>Two systems. One outcome — revenue.</h2>
            <div className="cards">
              {SERVICES.map((s) => (
                <article className="card" key={s.idx} style={{ '--card-accent': s.accent }} data-reveal>
                  <img className="cv" src={`${BASE}${s.img}`} alt="" aria-hidden="true" />
                  <div className="idx">{s.idx}</div>
                  <div className="card-body">
                    <div className="name">{s.name}</div>
                    <p className="desc">{s.desc}</p>
                  </div>
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
            <p className="sub">Your next best customer — surfaced by the system, closed by the front-end. Not a click. A close.</p>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="section">
          <div className="wrap" data-reveal>
            <h2 className="h2 prism-text">Let&apos;s build your system.</h2>
            <p className="sub">Thirty minutes, no pitch. We&apos;ll map where your pipeline leaks and exactly what we&apos;d build to fix it.</p>
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
              <a href="https://www.linkedin.com/in/kb1017/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
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
