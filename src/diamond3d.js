import * as THREE from 'three'

// Real-time WebGL brilliant-cut diamond: faceted geometry, physical glass material
// with refraction + chromatic dispersion ("fire"), procedural environment for sparkle,
// slow auto-rotation + pointer parallax. Returns an imperative API for scroll wiring.
export function createDiamond3D(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.15

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0, 7.0)

  // --- procedural environment (reflections + sparkle sources) ---
  const pmrem = new THREE.PMREMGenerator(renderer)
  const envSrc = makeEnvTexture()
  const envRT = pmrem.fromEquirectangular(envSrc)
  scene.environment = envRT.texture

  // --- lighting: one strong key from above (brand "single top light") + cool/warm fills ---
  scene.add(new THREE.AmbientLight(0xffffff, 0.22))
  const key = new THREE.DirectionalLight(0xffffff, 3.1); key.position.set(0.6, 5, 3); scene.add(key)
  const cool = new THREE.DirectionalLight(0x9ec5ff, 1.5); cool.position.set(-4, 1.5, 2); scene.add(cool)
  const warm = new THREE.DirectionalLight(0xffe6b0, 1.0); warm.position.set(3, -2.5, 2.5); scene.add(warm)

  // --- diamond ---
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0.01,
    transmission: 0.62,    // lower than 1 so it reads crisp/reflective, not milky (no DOM backdrop to refract)
    ior: 2.417,            // diamond
    thickness: 1.0,
    dispersion: 6.5,       // chromatic dispersion = prismatic fire (three r163+)
    iridescence: 0.6,
    iridescenceIOR: 1.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.02,
    envMapIntensity: 3.2,
    specularIntensity: 1.0,
    attenuationColor: new THREE.Color(0xeaf2ff),
    attenuationDistance: 4,
    transparent: true,
    side: THREE.DoubleSide,
  })
  const diamond = new THREE.Mesh(makeBrilliant(), mat)
  diamond.rotation.x = -0.16
  const group = new THREE.Group()
  group.add(diamond)
  scene.add(group)

  // --- state ---
  let reveal = 0          // 0..1 scroll reveal
  let pxTarget = 0, pyTarget = 0, px = 0, py = 0
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const clock = new THREE.Clock()
  let raf = 0
  let disposed = false

  function tick() {
    if (disposed) return
    const dt = Math.min(clock.getDelta(), 0.05)
    diamond.rotation.y += dt * (reduce ? 0.12 : 0.5)
    px += (pxTarget - px) * 0.05
    py += (pyTarget - py) * 0.05
    group.rotation.y = px * 0.5
    group.rotation.x = -0.08 + py * 0.4
    const s = 1.0 * Math.max(0.0001, reveal)
    group.scale.setScalar(s)
    mat.opacity = reveal
    group.visible = reveal > 0.02
    renderer.render(scene, camera)
    raf = requestAnimationFrame(tick)
  }
  raf = requestAnimationFrame(tick)

  function resize() {
    const w = canvas.clientWidth || 1
    const h = canvas.clientHeight || 1
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    // sit the diamond on the right on wide screens (copy lives on the left), centered on narrow
    group.position.x = w / h > 1.1 ? 1.25 : 0
  }
  resize()

  return {
    setReveal: (v) => { reveal = v < 0 ? 0 : v > 1 ? 1 : v },
    setPointer: (nx, ny) => { pxTarget = nx; pyTarget = ny },
    resize,
    destroy: () => {
      disposed = true
      cancelAnimationFrame(raf)
      envSrc.dispose(); envRT.dispose(); pmrem.dispose()
      mat.dispose(); diamond.geometry.dispose()
      renderer.dispose()
    },
  }

  // ---------- helpers ----------
  function makeEnvTexture() {
    const c = document.createElement('canvas'); c.width = 512; c.height = 256
    const x = c.getContext('2d')
    const g = x.createLinearGradient(0, 0, 0, 256)
    g.addColorStop(0, '#26324c'); g.addColorStop(0.5, '#0b1016'); g.addColorStop(1, '#05070b')
    x.fillStyle = g; x.fillRect(0, 0, 512, 256)
    x.fillStyle = '#ffffff'
    const spots = [[110, 55, 26], [300, 40, 18], [420, 150, 16], [200, 205, 14], [470, 90, 14], [150, 120, 12], [350, 205, 11]]
    spots.forEach((p) => { x.beginPath(); x.arc(p[0], p[1], p[2], 0, 7); x.fill() })
    x.fillStyle = 'rgba(90,169,255,0.9)'; x.beginPath(); x.arc(360, 100, 30, 0, 7); x.fill()
    x.fillStyle = 'rgba(52,245,176,0.85)'; x.beginPath(); x.arc(80, 150, 26, 0, 7); x.fill()
    const t = new THREE.CanvasTexture(c)
    t.mapping = THREE.EquirectangularReflectionMapping
    t.colorSpace = THREE.SRGBColorSpace
    return t
  }

  // round brilliant cut: girdle, crown (to table), pavilion (to culet).
  // Non-indexed geometry => computeVertexNormals yields flat facets.
  function makeBrilliant() {
    const seg = 32
    const ring = (r, y) => {
      const a = []
      for (let i = 0; i <= seg; i++) { const t = (i / seg) * Math.PI * 2; a.push([Math.cos(t) * r, y, Math.sin(t) * r]) }
      return a
    }
    const girdle = ring(1.0, 0.0)
    const crownMid = ring(0.86, 0.17)
    const table = ring(0.56, 0.33)
    const tableC = [0, 0.33, 0]
    const pav = ring(0.52, -0.5)
    const culet = [0, -1.12, 0]
    const pos = []
    const tri = (A, B, C) => { pos.push(A[0], A[1], A[2], B[0], B[1], B[2], C[0], C[1], C[2]) }
    for (let i = 0; i < seg; i++) {
      tri(girdle[i], crownMid[i], crownMid[i + 1])
      tri(girdle[i], crownMid[i + 1], girdle[i + 1])
      tri(crownMid[i], table[i], table[i + 1])
      tri(crownMid[i], table[i + 1], crownMid[i + 1])
      tri(tableC, table[i + 1], table[i])
      tri(girdle[i + 1], pav[i + 1], pav[i])
      tri(girdle[i + 1], pav[i], girdle[i])
      tri(pav[i], culet, pav[i + 1])
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    geo.computeVertexNormals()
    return geo
  }
}
