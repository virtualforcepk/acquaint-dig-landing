import * as THREE from 'three'

// Real-time WebGL brilliant-cut diamond — the climax hero.
// Faceted geometry, crisp high-reflection physical glass with chromatic dispersion,
// emerald/sapphire/warm point-lights for colored fire, a glow halo, auto-rotation
// and pointer parallax. Returns an imperative API for scroll wiring.
export function createDiamond3D(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.25
  // halve the transmission render-target cost (big GPU/CPU win, negligible on a small gem)
  renderer.transmissionResolutionScale = 0.5

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0, 7)

  // --- environment (reflections + sparkle) ---
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envSrc = makeEnvTexture()
  const envRT = pmrem.fromEquirectangular(envSrc)
  scene.environment = envRT.texture

  // --- lights: strong key from above + emerald/sapphire/warm fire ---
  scene.add(new THREE.AmbientLight(0xffffff, 0.06))
  const key = new THREE.DirectionalLight(0xffffff, 2.6); key.position.set(0.4, 6, 3); scene.add(key)
  const rim = new THREE.DirectionalLight(0xbcd2ff, 1.4); rim.position.set(-3, 1, -4); scene.add(rim)
  const warm = new THREE.DirectionalLight(0xffe6b0, 1.0); warm.position.set(2.6, -2.4, 2.6); scene.add(warm)
  // colored fire comes from bright emerald/sapphire/white spots in the env map (see makeEnvTexture)

  // --- diamond ---
  // Glassy diamond: transmission with thin walls + tinted attenuation to avoid the milky look.
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.0,
    roughness: 0.0,
    transmission: 0.92,
    ior: 2.417,
    thickness: 0.5,
    dispersion: 6.0,
    attenuationColor: new THREE.Color(0xbfe0ff),
    attenuationDistance: 1.2,
    iridescence: 0.4,
    iridescenceIOR: 1.4,
    clearcoat: 1.0,
    clearcoatRoughness: 0.0,
    envMapIntensity: 3.2,
    transparent: true,
    side: THREE.DoubleSide,
  })
  const diamond = new THREE.Mesh(makeBrilliant(), mat)
  diamond.rotation.x = -0.16
  const group = new THREE.Group()
  group.add(diamond)
  scene.add(group)

  // --- glow halo (blaze) behind the stone ---
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(), color: 0xbfe6ff, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false,
  }))
  glow.scale.set(2.6, 2.6, 1)
  glow.position.set(0, 0, -1.0)
  group.add(glow)

  // --- state ---
  let reveal = 0, pxT = 0, pyT = 0, px = 0, py = 0
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const clock = new THREE.Clock()
  let raf = 0, disposed = false

  function tick() {
    if (disposed) return
    const dt = Math.min(clock.getDelta(), 0.05)
    diamond.rotation.y += dt * (reduce ? 0.1 : 0.42)
    px += (pxT - px) * 0.05; py += (pyT - py) * 0.05
    group.rotation.y = px * 0.5
    group.rotation.x = -0.06 + py * 0.4
    const s = 1.3 * Math.max(0.0001, reveal)
    group.scale.setScalar(s)
    mat.opacity = reveal
    glow.material.opacity = reveal * 0.55
    group.visible = reveal > 0.02
    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  function resize() {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1
    renderer.setSize(w, h, false)
    camera.aspect = w / h; camera.updateProjectionMatrix()
    group.position.x = w / h > 1.1 ? 1.35 : 0
  }
  resize()

  return {
    setReveal: (v) => { reveal = v < 0 ? 0 : v > 1 ? 1 : v },
    setPointer: (nx, ny) => { pxT = nx; pyT = ny },
    resize,
    destroy: () => {
      disposed = true
      cancelAnimationFrame(raf)
      envSrc.dispose(); envRT.dispose(); pmrem.dispose()
      mat.dispose(); diamond.geometry.dispose()
      glow.material.map.dispose(); glow.material.dispose()
      renderer.dispose()
    },
  }

  // ---------- helpers ----------
  function makeEnvTexture() {
    const c = document.createElement('canvas'); c.width = 512; c.height = 256
    const x = c.getContext('2d')
    const g = x.createLinearGradient(0, 0, 0, 256)
    g.addColorStop(0, '#16223a'); g.addColorStop(0.5, '#070b12'); g.addColorStop(1, '#020306')
    x.fillStyle = g; x.fillRect(0, 0, 512, 256)
    // dense field of bright spots = sparkle/fire sources reflected across the facets
    let s = 1234567
    const rnd = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 }
    x.fillStyle = '#ffffff'
    for (let i = 0; i < 70; i++) { const px = rnd() * 512, py = rnd() * 160, r = 1.5 + rnd() * 6; x.globalAlpha = 0.45 + rnd() * 0.55; x.beginPath(); x.arc(px, py, r, 0, 7); x.fill() }
    x.globalAlpha = 1
    for (const p of [[120, 55, 30], [400, 80, 26], [256, 38, 22]]) { x.beginPath(); x.arc(p[0], p[1], p[2], 0, 7); x.fill() }
    x.fillStyle = 'rgba(50,255,160,0.95)'; x.beginPath(); x.arc(90, 150, 30, 0, 7); x.fill()
    x.fillStyle = 'rgba(90,150,255,1.0)'; x.beginPath(); x.arc(380, 120, 34, 0, 7); x.fill()
    x.fillStyle = 'rgba(255,220,160,0.85)'; x.beginPath(); x.arc(240, 70, 20, 0, 7); x.fill()
    const t = new THREE.CanvasTexture(c)
    t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.SRGBColorSpace
    return t
  }

  function makeGlowTexture() {
    const c = document.createElement('canvas'); c.width = 256; c.height = 256
    const x = c.getContext('2d')
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128)
    g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.22, 'rgba(180,220,255,0.5)')
    g.addColorStop(0.55, 'rgba(80,140,255,0.13)'); g.addColorStop(1, 'rgba(0,0,0,0)')
    x.fillStyle = g; x.fillRect(0, 0, 256, 256)
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace
    return t
  }

  // round brilliant: table + star + girdle crown, pavilion to culet. Non-indexed => flat facets.
  function makeBrilliant() {
    const seg = 16
    const ring = (r, y) => { const a = []; for (let i = 0; i <= seg; i++) { const t = (i / seg) * Math.PI * 2; a.push([Math.cos(t) * r, y, Math.sin(t) * r]) } return a }
    const table = ring(0.53, 0.34), star = ring(0.72, 0.26), girdle = ring(1.0, 0), pav = ring(0.52, -0.5)
    const tableC = [0, 0.34, 0], culet = [0, -1.1, 0], pos = []
    const tri = (A, B, C) => { pos.push(A[0], A[1], A[2], B[0], B[1], B[2], C[0], C[1], C[2]) }
    for (let i = 0; i < seg; i++) {
      tri(tableC, table[i + 1], table[i])
      tri(table[i], star[i], star[i + 1]); tri(table[i], star[i + 1], table[i + 1])
      tri(star[i], girdle[i], girdle[i + 1]); tri(star[i], girdle[i + 1], star[i + 1])
      tri(girdle[i + 1], pav[i + 1], pav[i]); tri(girdle[i + 1], pav[i], girdle[i])
      tri(pav[i], culet, pav[i + 1])
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    geo.computeVertexNormals()
    return geo
  }
}
