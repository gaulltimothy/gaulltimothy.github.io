/* The Gunter Metals wordmark and torch-cut sheet (<gm-wordmark>, <gm-cutsheet>), from the storefront theme
 * Tim provided (theme export, 2026-10-06): lines 2-1031 of assets/gm-brand.js, which its build generates from
 * web/gm-wordmark.js and web/gm-cutsheet.js. Unchanged. Re-copy from the theme source when it changes. */
const __gm_wordmark = (() => {
/* gm-wordmark.js · Gunter Metals LLC extruded wordmark
 *
 * The Figma frames (ScrollTop / MidScroll / ScrollBottom) are one drawing:
 * 15 letter outlines stacked as two blurred shadows, eight extrusion slices
 * and a lit face. Between frames only the offsets and the face gradient
 * change. So this ships the outlines once and rebuilds the stack in the
 * browser, blending the frames continuously as you scroll, and adds a real
 * vanishing point so the letters splay the way a sign in space does.
 *
 *   <script type="module" src="/gm-wordmark.js"></script>
 *   <gm-wordmark scroll="exit" finish="powder-black">
 *     <img src="/gm-wordmark-static-powder-black.svg" alt="Gunter Metals LLC" width="448" height="315">
 *   </gm-wordmark>
 *
 * The <img> is the no-JS fallback; it is replaced once the element upgrades.
 *
 * Attributes
 *   scroll       "cover" (default)  0 as the element enters at the bottom of
 *                                   the viewport, 1 as it leaves at the top
 *                "exit"             0 while its top sits at the viewport top,
 *                                   1 once it has scrolled away (use for heroes)
 *                "pin"              for a sticky wordmark inside a tall section:
 *                                   0 to 1 across the section's pinned distance
 *   track        CSS selector of the element to measure instead of this one
 *                (nearest matching ancestor first). Needed with "pin".
 *   progress     0..1  pin the pose and ignore scroll (drive it from GSAP, tests)
 *   finish       stainless (default) | powder-black | mill-steel | galvanized
 *   perspective  0..0.2  how hard the letters converge on the vanishing point.
 *                Default 0.03. 0 reproduces the Figma frames exactly.
 *   sheen        multiplier on how far the highlight travels. Default 1; 0 = static.
 *   label        accessible name. Default "Gunter Metals LLC".
 *
 * Regenerate the data block from new Figma exports: node tools/build-wordmark.mjs
 */

const DATA = /* <data> */{"viewBox":[448,315],"glyphs":["M16.03 37.83C16.03 51.08 25.24 60.58 37.44 60.58C41.66 60.58 44.73 59.81 47.8 58.37V34.66H62.1V67.59C55.19 72.01 47.32 74.89 37.24 74.89C17.37 74.89 0.19 60.39 0.19 37.54C0.19 14.69 17.37 0 37.34 0C45.98 0 53.47 2.21 59.22 5.47V20.93C52.99 16.51 45.79 14.69 39.16 14.69C25.44 14.69 16.03 24.58 16.03 37.83Z","M103.51 74.89C85.17 74.89 74.04 62.6 74.04 45.03V1.63H89.68V45.12C89.68 54.92 94.87 60.58 103.51 60.58C112.34 60.58 117.81 54.92 117.81 45.03V1.63H133.55V45.03C133.55 62.6 122.03 74.89 103.51 74.89Z","M209.93 1.63V73.25H195.14L163.28 26.5H163.18V73.25H148.21V1.63H163.37L194.95 47.62H195.05V1.63H209.93Z","M240.61 73.25V15.94H219.59V1.63H277.09V15.94H256.16V73.25H240.61Z","M286.75 73.25V1.63H331.67V15.75H302.4V30.63H329.18V43.59H302.4V59.24H331.67V73.25H286.75Z","M344.96 73.25V1.63H367.62C384.89 1.63 395.64 9.98 395.64 24.96C395.64 33.51 391.13 43.2 377.5 46.76L399.1 73.25H380.29L361.28 48.1H360.61V73.25H344.96ZM360.61 36H366.94C375.39 36 379.9 32.26 379.9 25.92C379.9 19.39 375.01 15.94 367.23 15.94H360.61V36Z","M21.12 119.34L14.88 169.26H0L10.27 97.64H28.8L43.87 145.55H44.06L58.84 97.64H76.89L87.16 169.26H72.18L66.14 119.15H65.75L50.2 169.26H36.86L21.41 119.34H21.12Z","M98.62 169.26V97.64H143.54V111.75H114.26V126.63H141.04V139.59H114.26V155.24H143.54V169.26H98.62Z","M172 169.26V111.94H150.97V97.64H208.47V111.94H187.55V169.26H172Z","M275.14 169.26H258.73L252.39 151.79H225.61L219.47 169.26H203.15L229.93 97.64H247.98L275.14 169.26ZM229.93 138.92H247.98L238.95 113.96L229.93 138.92Z","M283.1 169.26V97.64H298.74V155.05H328.4V169.26H283.1Z","M360.59 96.1C367.88 96.1 374.41 98.22 379.21 101V115.4C374.51 112.04 367.4 109.93 361.45 109.93C355.12 109.93 350.7 112.42 350.7 116.94C350.7 121.16 354.64 123.08 362.12 126.15C372.3 130.19 383.43 134.7 383.43 148.33C383.43 161.77 372.97 170.8 357.13 170.8C348.21 170.8 340.24 167.92 335.44 164.36V149.2C340.43 153.71 348.21 157.07 355.6 157.07C362.7 157.07 367.4 153.8 367.4 148.91C367.4 144.11 362.41 141.8 354.64 138.63C345.81 134.99 335.25 130.28 335.25 117.51C335.25 105.03 345.13 96.1 360.59 96.1Z","M4.22 265.27V193.65H19.87V251.06H49.53V265.27H4.22Z","M59.25 265.27V193.65H74.89V251.06H104.55V265.27H59.25Z","M163.97 261.91C158.78 264.69 152.54 266.9 144.29 266.9C124.42 266.9 107.43 252.02 107.43 229.46C107.43 206.9 124.42 192.01 144.29 192.01C152.54 192.01 158.88 194.22 163.97 196.91V212.46C158.21 208.62 153.02 206.51 145.92 206.51C133.73 206.51 123.27 215.54 123.27 229.46C123.27 243.28 133.73 252.5 145.92 252.5C153.02 252.5 158.21 250.1 163.97 246.16V261.91Z"],"center":[200,133.5],"faceSpan":266.9,"maxExtrude":10.77,"shadow":{"soft":{"blur":12,"opacity":0.2},"tight":{"blur":7,"opacity":0.45}},"slices":[["#4D4D52","#38383D","#2B2B30"],["#505055","#3C3C41","#2F2F34"],["#545459","#404045","#333338"],["#58585D","#444449","#37373C"],["#5C5C61","#47474D","#3B3B40"],["#606065","#4B4B50","#3E3E44"],["#636369","#4F4F54","#424247"],["#67676C","#535358","#46464B"]],"faceOffsets":[0,0.06,0.1,0.15,0.25,0.35,0.45,0.55,0.65,0.75,0.85,0.9,1],"sheen":{"line":[-71.27,47.66,104.92,311.12],"stops":[[0,"#FFFFFF",0],[0.42,"#FFFFFF",0],[0.48,"#FFFFFF",0.12],[0.54,"#FFFFFF",0],[1,"#FFFFFF",0]],"opacity":0.4},"keys":[{"face":[22.5,29],"extrude":[2.4,-8],"soft":[24,24],"tight":[25.5,19],"faceStops":["#7A808C","#7E848F","#818791","#858A94","#8D929C","#9499A3","#9DA2AC","#A6ABB5","#AFB4BD","#B8BDC4","#BFC4CB","#C2C7CF","#BDC2C9"]},{"face":[21,18],"extrude":[3.2,8],"soft":[24,24],"tight":[27,30],"faceStops":["#ADB3BA","#BDC2C7","#B3B8BE","#A6ABB3","#ADB2B9","#B3B8BF","#A6ABB4","#999EA8","#9398A2","#8C919C","#848993","#80858F","#737885"]},{"face":[22,16],"extrude":[4,10],"soft":[24,24],"tight":[26,32],"faceStops":["#C2C7CF","#C8CDD3","#CCD1D6","#C5CAD0","#B8BDC4","#AEB3BC","#A3A8B3","#979CA6","#8A8F99","#7D828D","#707580","#6B707B","#616670"]}]}/* </data> */;
const WORDMARK = DATA;   // shared with gm-cutsheet.js

const LABEL = 'Gunter Metals LLC';
const DEFAULT_PERSPECTIVE = 0.03;
const SHEEN_TRAVEL = 1.1;   // fraction of the sheen gradient's length covered across the scroll

/* Finishes re-map the frames' colours by brightness onto a new ramp (dark to
   light), so the lighting still moves with scroll. `edge` is the strength of
   the 1 unit highlight on top edges; `grain` is the static SVG's texture. */
const FINISHES = {
  stainless: {
    sheen: 1, edge: 0.25,
    grain: { type: 'fractalNoise', freq: '0.003 1.6', octaves: 2, gain: 1.2, strength: 0.35 },
  },
  'powder-black': {
    face: ['#262a2f', '#41474e', '#858d96'], side: ['#0c0d0f', '#2c3035'],
    sheen: 0.6, edge: 0.45,
    grain: { type: 'fractalNoise', freq: '0.55', octaves: 2, gain: 1.6, strength: 0.3 },
  },
  'mill-steel': {
    face: ['#30363d', '#566270', '#9ea8b1'], side: ['#171b1f', '#3c444d'],
    sheen: 0.8, edge: 0.3,
    grain: { type: 'fractalNoise', freq: '0.009 0.022', octaves: 4, gain: 2.4, strength: 0.5 },
  },
  galvanized: {
    face: ['#7f878b', '#b9c0c3', '#e3e7e8'], side: ['#464c50', '#80878b'],
    sheen: 1.2, edge: 0.3,
    grain: { type: 'fractalNoise', freq: '0.05', octaves: 2, gain: 1.4, strength: 0.4, table: '0.36 0.64 0.45 0.58 0.4 0.66 0.5' },
  },
};
const FINISH_NAMES = Object.keys(FINISHES);

const [W, H] = DATA.viewBox;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const f2 = n => Math.round(n * 100) / 100;
const f4 = n => Math.round(n * 10000) / 10000;
const rgb = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
const hex = v => '#' + v.map(x => clamp(Math.round(x), 0, 255).toString(16).padStart(2, '0')).join('');
const esc = s => String(s).replace(/[&<>"]/g, c => `&#${c.charCodeAt(0)};`);
const lum = c => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];

function ramp(stops, t) {
  const L = stops.length - 1;
  const x = clamp(t, 0, 1) * L;
  const i = Math.min(Math.floor(x), L - 1), u = x - i;
  return stops[i].map((v, ch) => v + (stops[i + 1][ch] - v) * u);
}

const KEY_STOPS = DATA.keys.map(k => k.faceStops.map(rgb));
const SLICE_RGB = DATA.slices.map(stops => stops.map(rgb));
const GLYPHS = DATA.glyphs.map(d => `<path d="${d}"/>`).join('');
const lumRange = list => { const l = list.map(lum); return [Math.min(...l), Math.max(...l)]; };
const FACE_LUM = lumRange(KEY_STOPS.flat());
const SIDE_LUM = lumRange(SLICE_RGB.flat());

for (const f of Object.values(FINISHES)) {
  if (f.face) f.faceRGB = f.face.map(rgb);
  if (f.side) f.sideRGB = f.side.map(rgb);
}
const finishOf = name => FINISHES[name] || FINISHES.stainless;

function tone(c, f, part) {
  const stops = f[part + 'RGB'];
  if (!stops) return c;
  const [lo, hi] = part === 'face' ? FACE_LUM : SIDE_LUM;
  return ramp(stops, (lum(c) - lo) / (hi - lo));
}

// Uniform Catmull-Rom through evenly spaced keys. Keeps the motion smooth
// through the middle frame instead of kinking there.
function spline(values, p) {
  const last = values.length - 1;
  const x = clamp(p, 0, 1) * last;
  const i = Math.min(Math.floor(x), last - 1);
  const t = x - i;
  const p0 = values[Math.max(i - 1, 0)], p1 = values[i], p2 = values[i + 1], p3 = values[Math.min(i + 2, last)];
  return p1 + 0.5 * t * (p2 - p0 + t * (2 * p0 - 5 * p1 + 4 * p2 - p3 + t * (3 * (p1 - p2) + p3 - p0)));
}

function pose(p, finish = 'stainless') {
  const f = finishOf(finish);
  const ch = get => spline(DATA.keys.map(get), p);
  const pair = name => [ch(k => k[name][0]), ch(k => k[name][1])];
  return {
    p,
    face: pair('face'),
    extrude: pair('extrude'),
    soft: pair('soft'),
    tight: pair('tight'),
    faceStops: DATA.faceOffsets.map((_, s) => hex(tone([0, 1, 2].map(c => spline(KEY_STOPS.map(k => k[s][c]), p)), f, 'face'))),
  };
}

// Slice k of n sits k/n of the way back. Each is pushed along the extrusion
// vector and scaled toward the composition centre: P' = P·s + C·(1-s) + F + E·t
function sliceTransform(pz, k, n, perspective) {
  const t = k / n;
  const s = 1 - perspective * t;
  const [cx, cy] = DATA.center;
  const tx = cx * perspective * t + pz.face[0] + pz.extrude[0] * t;
  const ty = cy * perspective * t + pz.face[1] + pz.extrude[1] * t;
  return `matrix(${f4(s)} 0 0 ${f4(s)} ${f2(tx)} ${f2(ty)})`;
}

function sheenTransform(p, amount) {
  const [x1, y1, x2, y2] = DATA.sheen.line;
  const shift = (p - 0.5) * amount * SHEEN_TRAVEL;
  return `translate(${f2((x2 - x1) * shift)} ${f2((y2 - y1) * shift)})`;
}

// Shades for n slices, resampled from the frames' back-to-front ramp.
function sliceColors(n, f) {
  const L = SLICE_RGB.length - 1;
  return Array.from({ length: n }, (_, j) => {
    const u = n === 1 ? L : (j / (n - 1)) * L;
    const i = Math.min(Math.floor(u), L - 1), t = u - i;
    return SLICE_RGB[i].map((c, s) => hex(tone(c.map((v, ch) => v + (SLICE_RGB[i + 1][s][ch] - v) * t), f, 'side')));
  });
}

const blurFilter = (id, sd) =>
  `<filter id="${id}" x="-25%" y="-35%" width="150%" height="170%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="${sd}"/></filter>`;

// Figma's two inner shadows: a 1 unit highlight along top edges, a soft 2 unit shade along bottom edges.
const innerShadow = (id, edge) =>
  `<filter id="${id}" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">` +
  `<feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="a"/>` +
  `<feOffset dy="-1"/><feGaussianBlur stdDeviation="0.5"/><feComposite in2="a" operator="arithmetic" k2="-1" k3="1"/>` +
  `<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 ${edge} 0"/><feBlend in2="SourceGraphic" result="hi"/>` +
  `<feOffset in="a" dy="2"/><feGaussianBlur stdDeviation="1"/><feComposite in2="a" operator="arithmetic" k2="-1" k3="1"/>` +
  `<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/><feBlend in2="hi"/></filter>`;

/* Surface texture for the static SVG: noise split into light and dark marks
   over the face. Plain alpha compositing, no blend modes, so OG and email
   rasterisers draw it too. Static only: re-filtering noise on every scroll
   frame costs more than it adds. */
function grainFilter(id, g) {
  const k = g.gain;
  return `<filter id="${id}" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">` +
    `<feTurbulence type="${g.type}" baseFrequency="${g.freq}" numOctaves="${g.octaves}" seed="11" result="n"/>` +
    (g.table ? `<feComponentTransfer in="n" result="n"><feFuncR type="discrete" tableValues="${g.table}"/></feComponentTransfer>` : '') +
    `<feColorMatrix in="n" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 ${k} 0 0 0 ${f2(-(k * 0.5 + 0.02))}" result="hi"/>` +
    `<feColorMatrix in="n" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ${-k} 0 0 0 ${f2(k * 0.5 - 0.04)}" result="lo"/>` +
    `<feMerge><feMergeNode in="lo"/><feMergeNode in="hi"/></feMerge>` +
    `<feComposite operator="in" in2="SourceAlpha"/></filter>`;
}

function mainMarkup(u, n, pz, o) {
  const f = finishOf(o.finish);
  const span = `x1="0" y1="0" x2="0" y2="${DATA.faceSpan}" gradientUnits="userSpaceOnUse"`;
  const [x1, y1, x2, y2] = DATA.sheen.line;
  const width = f2((1.15 * DATA.maxExtrude) / n);   // a touch wider than one step, so slices fuse into a solid side

  let defs = `<g id="${u}g">${GLYPHS}</g>`;
  sliceColors(n, f).forEach((stops, j) => {
    defs += `<linearGradient id="${u}s${j}" ${span}>` +
      stops.map((c, i) => `<stop offset="${f2(i / (stops.length - 1))}" stop-color="${c}"/>`).join('') +
      `</linearGradient>`;
  });
  defs += `<linearGradient id="${u}f" ${span}>` +
    DATA.faceOffsets.map((off, i) => `<stop offset="${off}" stop-color="${pz.faceStops[i]}"/>`).join('') +
    `</linearGradient>`;
  defs += `<linearGradient id="${u}h" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" gradientUnits="userSpaceOnUse" gradientTransform="${sheenTransform(pz.p, o.sheen)}">` +
    DATA.sheen.stops.map(([off, c, a]) => `<stop offset="${off}" stop-color="${c}" stop-opacity="${a}"/>`).join('') +
    `</linearGradient>`;
  defs += innerShadow(`${u}ii`, f.edge);

  let slices = '';
  for (let j = 0; j < n; j++) {
    slices += `<use data-s href="#${u}g" fill="url(#${u}s${j})" stroke="url(#${u}s${j})" stroke-width="${width}" stroke-linejoin="round" transform="${sliceTransform(pz, n - j, n, o.perspective)}"/>`;
  }

  return `<defs>${defs}</defs><g>${slices}</g>` +
    `<g data-face filter="url(#${u}ii)" transform="translate(${f2(pz.face[0])} ${f2(pz.face[1])})">` +
    `<use href="#${u}g" fill="url(#${u}f)"/>` +
    `<use href="#${u}g" fill="url(#${u}h)" fill-opacity="${f2(DATA.sheen.opacity * f.sheen)}" style="mix-blend-mode:screen"/></g>`;
}

/* A single self-contained SVG of one pose, for the no-JS fallback, OG images, email.
   grain: strength of the finish's surface texture, 0 to turn it off. */
function staticSVG({ progress = 0.5, perspective = DEFAULT_PERSPECTIVE, sheen = 1, finish = 'stainless', grain, label = LABEL, slices = 24 } = {}) {
  const u = 'gm-';
  const f = finishOf(finish);
  const pz = pose(progress, finish);
  const strength = grain ?? f.grain.strength;
  const shadow = name =>
    `<g filter="url(#${u}${name})" fill="#000" fill-opacity="${DATA.shadow[name].opacity}" transform="translate(${f2(pz[name][0])} ${f2(pz[name][1])})"><use href="#${u}g"/></g>`;
  let filters = blurFilter(`${u}soft`, DATA.shadow.soft.blur) + blurFilter(`${u}tight`, DATA.shadow.tight.blur);
  let art = mainMarkup(u, slices, pz, { perspective, sheen, finish });
  if (strength > 0) {
    filters += grainFilter(`${u}grain`, f.grain);
    art = art.replace(/<\/g>$/, `<use href="#${u}g" fill="#000" filter="url(#${u}grain)" opacity="${f2(Math.min(strength, 1))}"/></g>`);
  }
  const body = art
    .replace('<defs>', `<defs>${filters}`)
    .replace('</defs>', `</defs>${shadow('soft')}${shadow('tight')}`)
    .replace(/ data-[a-z]+/g, '')
    .replace(/ href="/g, ' xlink:href="');
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-labelledby="${u}t"><title id="${u}t">${esc(label)}</title>${body}</svg>\n`;
}

/* ------------------------------ element ------------------------------ */

const CSS =
  `gm-wordmark{display:block;position:relative;aspect-ratio:${W}/${H}}` +
  `gm-wordmark>.gmw{position:absolute;inset:0;pointer-events:none}` +
  `gm-wordmark>.gmw>svg{display:block;width:100%;height:100%;overflow:visible}` +
  `gm-wordmark>.gmw-sh{will-change:transform}`;

const reduceMotion = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null;
let instances = 0;

if (typeof HTMLElement !== 'undefined' && !customElements.get('gm-wordmark')) {
  customElements.define('gm-wordmark', class extends HTMLElement {
    static observedAttributes = ['progress', 'perspective', 'sheen', 'label', 'finish'];

    connectedCallback() {
      if (!document.getElementById('gmw-style')) {
        document.head.append(Object.assign(document.createElement('style'), { id: 'gmw-style', textContent: CSS }));
      }
      this.u ??= `gmw${++instances}-`;
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.getAttribute('label') || LABEL);

      const layer = (cls, inner) =>
        `<div class="gmw ${cls}" aria-hidden="true"><svg viewBox="0 0 ${W} ${H}" focusable="false">${inner}</svg></div>`;
      const shadow = name =>
        layer('gmw-sh', `<defs>${blurFilter(this.u + name, DATA.shadow[name].blur)}</defs>` +
          `<g filter="url(#${this.u}${name})" fill="#000" fill-opacity="${DATA.shadow[name].opacity}">${GLYPHS}</g>`);
      this.innerHTML = shadow('soft') + shadow('tight') + layer('', '');
      [this.softLayer, this.tightLayer, this.mainLayer] = this.children;
      this.main = this.mainLayer.firstChild;

      this.cur = this.target();
      this.build();

      this.onScroll = () => this.kick();
      addEventListener('scroll', this.onScroll, { passive: true, capture: true });   // capture: also hears pages that scroll an inner element (Shopify Horizon on desktop)
      addEventListener('resize', this.onScroll);
      reduceMotion?.addEventListener?.('change', this.onScroll);
      this.io = new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; this.kick(); }, { rootMargin: '15% 0px' });
      this.io.observe(this);
      this.ro = new ResizeObserver(() => { if (this.sliceCount() !== this.n) this.build(); });
      this.ro.observe(this);
    }

    disconnectedCallback() {
      removeEventListener('scroll', this.onScroll, { capture: true });
      removeEventListener('resize', this.onScroll);
      reduceMotion?.removeEventListener?.('change', this.onScroll);
      this.io?.disconnect();
      this.ro?.disconnect();
      cancelAnimationFrame(this.raf);
      this.raf = 0;
    }

    attributeChangedCallback(name) {
      if (!this.main) return;
      if (name === 'label') this.setAttribute('aria-label', this.getAttribute('label') || LABEL);
      if (name === 'finish') this.build();
      else this.kick();
    }

    opts() {
      const num = (name, def) => {
        const v = parseFloat(this.getAttribute(name));
        return Number.isFinite(v) ? v : def;
      };
      const finish = this.getAttribute('finish');
      return {
        perspective: clamp(num('perspective', DEFAULT_PERSPECTIVE), 0, 0.2),
        sheen: num('sheen', 1),
        finish: FINISHES[finish] ? finish : 'stainless',
      };
    }

    // Enough slices that each step is at most ~1.5 device pixels at the rendered size,
    // capped at 24 so a large mark stays cheap to repaint; the slice stroke closes what is left.
    sliceCount() {
      const unitPx = (this.clientWidth / W) * (devicePixelRatio || 1);
      return clamp(Math.ceil((DATA.maxExtrude * unitPx) / 1.5), 8, 24);
    }

    build() {
      const o = this.opts();
      this.n = this.sliceCount();
      this.main.innerHTML = mainMarkup(this.u, this.n, pose(this.cur, o.finish), o);
      this.slices = [...this.main.querySelectorAll('[data-s]')];
      this.face = this.main.querySelector('[data-face]');
      this.stops = [...this.main.querySelectorAll(`#${this.u}f stop`)];
      this.sheen = this.main.querySelector(`#${this.u}h`);
      this.applied = null;
      this.apply(this.cur);
    }

    target() {
      const pinned = parseFloat(this.getAttribute('progress'));
      if (Number.isFinite(pinned)) return clamp(pinned, 0, 1);
      if (reduceMotion?.matches) return 0.5;
      const sel = this.getAttribute('track');
      const r = ((sel && (this.closest(sel) || document.querySelector(sel))) || this).getBoundingClientRect();
      const vh = innerHeight || 1;
      const mode = this.getAttribute('scroll');
      const p = mode === 'exit' ? -r.top / (r.height || 1)
        : mode === 'pin' ? -r.top / Math.max(1, r.height - vh)
        : (vh - r.top) / (vh + r.height);
      return clamp(p, 0, 1);
    }

    kick() {
      if (this.raf || this.visible === false) return;
      this.last = performance.now();
      this.raf = requestAnimationFrame(this.tick);
    }

    // Eases toward the scroll position so the metal feels heavy rather than glued to the wheel.
    tick = now => {
      this.raf = 0;
      const goal = this.target();
      const instant = this.hasAttribute('progress') || reduceMotion?.matches;
      const k = instant ? 1 : 1 - Math.exp(-Math.min(64, now - this.last) / 110);
      this.last = now;
      this.cur += (goal - this.cur) * k;
      if (Math.abs(goal - this.cur) < 5e-4) this.cur = goal;
      this.apply(this.cur);
      if (this.cur !== goal) this.raf = requestAnimationFrame(this.tick);
    };

    apply(p) {
      const o = this.opts();
      const key = `${p}|${o.perspective}|${o.sheen}|${o.finish}`;
      if (key === this.applied) return;
      this.applied = key;

      const pz = pose(p, o.finish);
      const n = this.n;
      this.slices.forEach((el, j) => el.setAttribute('transform', sliceTransform(pz, n - j, n, o.perspective)));
      this.face.setAttribute('transform', `translate(${f2(pz.face[0])} ${f2(pz.face[1])})`);
      pz.faceStops.forEach((c, i) => this.stops[i].setAttribute('stop-color', c));
      this.sheen.setAttribute('gradientTransform', sheenTransform(p, o.sheen));
      const shift = ([x, y]) => `translate3d(${f4((x / W) * 100)}%,${f4((y / H) * 100)}%,0)`;
      this.softLayer.style.transform = shift(pz.soft);
      this.tightLayer.style.transform = shift(pz.tight);
    }
  });
}

return { WORDMARK, FINISH_NAMES, pose, staticSVG };
})();
const __gm_cutsheet = (() => {
/* gm-cutsheet.js · Gunter Metals LLC, the wordmark cut from a sheet of steel
 *
 * The view opens on a sheet of steel. One quiet torch pass cuts the name out
 * of it; then the sheet is lifted off toward the viewer and carried up until
 * only its bottom edge shows, where it stays as the site's navigation bar.
 * The cut letters are left lying where they were cut on the light surface
 * beneath. Each counter (R, A) is held to the sheet by two bridges one plate
 * wide, through the stroke above and below it, placed as marked up. The torch
 * cuts along the bridges too, and they lift away with the sheet, leaving the
 * stencil breaks in the strokes.
 *
 *   <script type="module" src="/gm-cutsheet.js"></script>
 *
 *   Driven by scrolling through a tall section that pins the sheet:
 *   <nav id="site-nav" style="position:fixed;top:0;left:0;right:0;height:60px">…</nav>
 *   <section id="hero" style="height:420vh">
 *     <div style="position:sticky;top:0;height:100vh">
 *       <gm-cutsheet reveal="scroll" track="#hero" dock="#site-nav" style="position:absolute;inset:0"></gm-cutsheet>
 *     </div>
 *   </section>
 *
 *   Or playing once by itself: <gm-cutsheet reveal></gm-cutsheet>
 *
 * It fills whatever box you give it (the dock handoff assumes that box is the viewport). Attributes:
 *   reveal  "scroll": the reveal follows the scroll position through `track`,
 *                     and runs backwards when you scroll back up.
 *           "" / "auto": plays once, the first time it is on screen. Time only
 *                     advances on painted frames, so a tab opened in the
 *                     background waits instead of finishing unseen.
 *           Without it, or under prefers-reduced-motion, it shows the finished letters.
 *   track   CSS selector of the tall section whose scroll drives reveal="scroll".
 *   bar     "early": the dock bar shows from the start as its own strip of steel, and the
 *           sheet slides up under it, rather than the bar appearing only once docked.
 *   dock    CSS selector of a position:fixed bar at the top of the page, usually the
 *           site navigation. The sheet is carried up into it; the bar is dressed as the
 *           same steel and made visible once the reveal is done. Without it the sheet leaves the frame.
 *   pace    speed multiplier for reveal="auto", default 1 (0.5 is half speed).
 *   edge    "soft" (default) restrained cut edges, or "bright" for the original chrome rim.
 *   label   accessible name, default "Gunter Metals LLC".
 * data-state on the element: pending | cutting | lifting | done, for styling around it.
 * el.replay() replays an "auto" reveal, or scrolls back to the uncut sheet in "scroll" mode.
 *
 * Rendering budget: everything that moves is its own compositor layer from the start,
 * so a frame is transforms and opacity plus a small repaint where the torch is. Nothing
 * uses blend modes or per-element masks, and masks only the lift needs are built when
 * the page is idle.
 */

const { WORDMARK } = __gm_wordmark;

const LABEL = 'Gunter Metals LLC';
const GLYPHS = WORDMARK.glyphs;
const GW = WORDMARK.center[0] * 2;
const GH = WORDMARK.center[1] * 2;

const PLATE = 2.2;          // bridge width: at least one plate thickness (see bridge-study.jsx)
// Where each counter's bridges cross it, as a fraction of its width (from the markup:
// R toward the stem, A through the middle). Letters not listed default to the middle.
const BRIDGE_AT = { 5: 0.35, 9: 0.5 };
const CONTACT = [1.2, 1.8]; // a letter's shadow on the surface: plate thickness × light from the upper left
// How hard the cut edges catch the light. "soft" keeps the kerf dark and the lit sliver
// narrow, which reads as torch-cut plate; "bright" is the original chrome-rimmed look.
// [dark width, dark opacity, lit width, lit opacity] for the letters, then for the sheet.
const EDGES = {
  soft: { letter: [1, 0.85, 0.5, 0.2], sheet: [1.5, 0.8, 0.55, 0.22] },
  bright: { letter: [0.9, 0.8, 0.7, 0.45], sheet: [1.4, 0.75, 0.8, 0.5] },
};
// Timeline in ms (at pace 1 for "auto"; for "scroll" it only sets proportions).
// hold: the uncut sheet before the torch ("auto" only). pierce: the arc warming
// at a cut's start. cool: the arc dying away at its end before the torch moves
// on. beat: stillness before the lift.
const T = { hold: 800, pierce: 70, travel: 2200, cool: 60, beat: 550, lift: 2800 };
// A fresh cut edge cools through the temper colours: bright orange off the torch,
// then straw, bronze, purple and the blue a fabricator sees beside a weld, before it
// settles to mill grey. TEMPER is how long that takes, in the same ms as the timeline.
const TEMPER = 1100;
const HEAT = [[0, '#ff7a18'], [0.2, '#e8912f'], [0.4, '#a9662f'], [0.6, '#6d4f82'], [0.8, '#3f6d9e'], [1, '#55636e']];
const hexRGB = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
const HEAT_RGB = HEAT.map(([at, col]) => [at, hexRGB(col)]);
const temper = age => {   // shared with gm-headercut.js, so both cool through the same colours
  let i = 1;
  while (i < HEAT_RGB.length - 1 && age > HEAT_RGB[i][0]) i++;
  const [a0, c0] = HEAT_RGB[i - 1], [a1, c1] = HEAT_RGB[i];
  const u = (age - a0) / (a1 - a0);
  return '#' + c0.map((v, k) => Math.round(v + (c1[k] - v) * u).toString(16).padStart(2, '0')).join('');
};

// Glowing kerf behind the arc, coolest first: [length, width, colour, opacity]
const TAIL = [[12, 1.3, '#c2531a', 0.7], [6, 1.2, '#ffb45c', 1], [2.5, 1, '#fff4dc', 1]];

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const f2 = n => Math.round(n * 100) / 100;
const f4 = n => Math.round(n * 10000) / 10000;
const ease = u => 0.5 - Math.cos(Math.PI * clamp(u, 0, 1)) / 2;   // sine in-out: no sudden starts or stops
const whenIdle = fn => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 1200 }) : setTimeout(fn, 250));

function bbox(d) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, cmd = '', idx = 0, x = 0, y = 0;
  for (const tok of d.match(/[A-Za-z]|-?\d*\.?\d+(?:e-?\d+)?/g)) {
    if (/[A-Za-z]/.test(tok)) { cmd = tok; idx = 0; continue; }
    if (cmd === 'H') x = +tok;
    else if (cmd === 'V') y = +tok;
    else if (idx++ % 2 === 0) { x = +tok; continue; }
    else y = +tok;
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  }
  return [x0, y0, x1, y1];
}

// Every closed contour of every letter; the largest in each letter is its outline.
const CONTOURS = GLYPHS.flatMap((d, g) => {
  const subs = d.match(/M[^M]+/g).map(s => {
    const box = bbox(s);
    return { g, d: s, box, area: (box[2] - box[0]) * (box[3] - box[1]) };
  });
  const outer = subs.reduce((a, b) => (b.area > a.area ? b : a));
  subs.forEach(s => { s.outer = s === outer; });
  return subs;
});

const NS = 'xmlns="http://www.w3.org/2000/svg"';
// Mask images cover the element with a rect in user units. It has to reach past the
// viewBox (preserveAspectRatio leaves bands on one axis) but stay a sane size: WebKit
// fails to rasterise a mask drawn around a 1e5-unit rect, which left iOS showing an
// unpierced sheet over the cut letters.
const bigRect = (vb, w, h, scale) => {
  const [vx, vy, vw, vh] = vb.split(' ').map(Number);
  const rw = Math.max(vw, w / scale) * 1.6, rh = Math.max(vh, h / scale) * 1.6;
  return `x="${f2(vx + vw / 2 - rw / 2)}" y="${f2(vy + vh / 2 - rh / 2)}" width="${f2(rw)}" height="${f2(rh)}"`;
};
const PATHS = GLYPHS.map(d => `<path d="${d}"/>`).join('');
const svgURL = s => `url("data:image/svg+xml,${encodeURIComponent(s)}")`;

// Bridges and the cutting order need the browser's geometry, so they are worked out on first use.
let BRIDGES, RECTS, NOT_BRIDGES, CUTS;
function prepare() {
  if (CUTS) return;
  const SVG = 'http://www.w3.org/2000/svg';
  const probe = document.createElementNS(SVG, 'svg');
  probe.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden;visibility:hidden');
  document.documentElement.append(probe);

  // From the middle of each counter, walk up and down across the stroke; a bridge
  // spans from the counter out past the stroke's far edge.
  BRIDGES = [];
  for (const c of CONTOURS.filter(c => !c.outer)) {
    const glyph = probe.appendChild(document.createElementNS(SVG, 'path'));
    glyph.setAttribute('d', GLYPHS[c.g]);
    const x = c.box[0] + (BRIDGE_AT[c.g] ?? 0.5) * (c.box[2] - c.box[0]);
    const cy = (c.box[1] + c.box[3]) / 2;
    const pt = probe.createSVGPoint();
    const solid = y => { pt.x = x; pt.y = y; return glyph.isPointInFill(pt); };
    const across = dir => {
      let y = cy;
      for (let n = 0; n < 4000 && !solid(y); n++) y += dir * 0.25;
      for (let n = 0; n < 4000 && solid(y); n++) y += dir * 0.25;
      return y + dir * 1.5;
    };
    const top = across(-1), bottom = across(1);
    BRIDGES.push({ g: c.g, x: x - PLATE / 2, y: top, w: PLATE, h: cy - top });
    BRIDGES.push({ g: c.g, x: x - PLATE / 2, y: cy, w: PLATE, h: bottom - cy });
  }
  probe.remove();
  RECTS = BRIDGES.map(b => `<rect x="${f2(b.x)}" y="${f2(b.y)}" width="${f2(b.w)}" height="${f2(b.h)}"/>`).join('');
  // Everywhere except the bridges, as one even-odd path, for clipping.
  NOT_BRIDGES = `M-1e5 -1e5H1e5V1e5H-1e5Z` + BRIDGES.map(b => `M${f2(b.x)} ${f2(b.y)}h${f2(b.w)}v${f2(b.h)}h${f2(-b.w)}Z`).join('');

  // Per letter, as a program would run it: counters first, then the cuts along each
  // bridge (both sides in one pass), then the outline that frees the part.
  CUTS = GLYPHS.flatMap((_, g) => [
    ...CONTOURS.filter(c => c.g === g && !c.outer).map(c => ({ g, d: c.d })),
    ...BRIDGES.filter(b => b.g === g).map(b => ({
      g, bridge: true,
      d: `M${f2(b.x)} ${f2(b.y)}V${f2(b.y + b.h)}M${f2(b.x + b.w)} ${f2(b.y)}V${f2(b.y + b.h)}`,
    })),
    ...CONTOURS.filter(c => c.g === g && c.outer).map(c => ({ g, d: c.d })),
  ]);
}

// Hot-rolled plate: long mill-scale streaks and soft blotches. Drawn once as a tiling
// image, so the reveal never re-runs the noise; kept to two cheap noise passes so it
// rasterises quickly on a phone. Frequencies are whole cycles per tile, so it wraps
// without a visible seam or grid.
const TILE = 800;
const GRAIN = svgURL(
  `<svg ${NS} width="${TILE}" height="${TILE}">` +
  `<filter id="m" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.0025 0.04" numOctaves="3" seed="4" stitchTiles="stitch"/>` +
  `<feColorMatrix values="0 0 0 0 0.62 0 0 0 0 0.68 0 0 0 0 0.74 1.5 0 0 0 -0.74"/></filter>` +
  `<filter id="d" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.00375 0.0125" numOctaves="2" seed="9" stitchTiles="stitch"/>` +
  `<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -1.3 0 0 0 0.6"/></filter>` +
  `<rect width="100%" height="100%" filter="url(#m)" opacity="0.1"/>` +
  `<rect width="100%" height="100%" filter="url(#d)" opacity="0.18"/></svg>`);

// The steel, lit from the upper left. Letters, sheet and dock bar share it, so they
// read as one plate. Without the grain, this is also the page's pre-script first paint.
const STEEL =
  `radial-gradient(85% 70% at 16% 6%, rgba(214,226,238,.16), transparent 62%),` +
  `radial-gradient(140% 120% at 50% 40%, transparent 50%, rgba(0,0,0,.5)),` +
  `${GRAIN} 0 0/${TILE}px ${TILE}px,` +
  `linear-gradient(158deg, #383e45 0%, #2a2f35 45%, #202428 100%)`;

// The surface the sheet was lying on.
const SURFACE =
  `radial-gradient(90% 75% at 18% 8%, #f7f5f0, transparent 70%),` +
  `linear-gradient(160deg, #eeece7 0%, #e2dfd8 100%)`;

// The plate's thickness seen at its bottom edge.
const EDGE = `linear-gradient(#59616a, #1a1d20)`;
const MASKED = `-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat`;
const CSS =
  `gm-cutsheet{display:block;position:relative;overflow:hidden;background:${SURFACE}}` +
  `gm-cutsheet>div{position:absolute;inset:0;pointer-events:none}` +
  `gm-cutsheet>div>svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}` +
  `gm-cutsheet>.gmc-plate,gm-cutsheet>.gmc-letters,gm-cutsheet>.gmc-sheet{background:${STEEL}}` +
  `gm-cutsheet>.gmc-letters,gm-cutsheet>.gmc-sheet{${MASKED}}` +
  `gm-cutsheet>.gmc-cast>div{position:absolute;inset:0;background:#000;${MASKED}}` +
  `gm-cutsheet>.gmc-lip{top:100%;bottom:auto;height:28px;` +
  `background:linear-gradient(#59616a 0,#1a1d20 3px,rgba(0,0,0,.32) 3px,rgba(0,0,0,.1) 11px,transparent 28px)}` +
  // The dock bar: the bottom strip of the same sheet, with its edge and a little shadow
  `.gmc-dock{background:${STEEL};background-repeat:no-repeat,no-repeat,repeat,no-repeat;box-shadow:0 14px 24px -10px rgba(0,0,0,.4)}` +
  `.gmc-dock::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:3px;pointer-events:none;background:${EDGE}}`;

const reduceMotion = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null;
let instances = 0;

if (typeof HTMLElement !== 'undefined' && !customElements.get('gm-cutsheet')) {
  customElements.define('gm-cutsheet', class extends HTMLElement {
    connectedCallback() {
      prepare();
      if (!document.getElementById('gmc-style')) {
        document.head.append(Object.assign(document.createElement('style'), { id: 'gmc-style', textContent: CSS }));
      }
      const u = (this.u ??= `gmc${++instances}-`);
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.getAttribute('label') || LABEL);

      const edge = EDGES[this.getAttribute('edge')] || EDGES.soft;
      const svg = inner => `<svg preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">${inner}</svg>`;
      // Clip paths, not masks: pure geometry, no offscreen buffers.
      const noBridges = id => `<clipPath id="${id}" clipPathUnits="userSpaceOnUse"><path clip-rule="evenodd" d="${NOT_BRIDGES}"/></clipPath>`;
      const bridged = [...new Set(BRIDGES.map(b => b.g))];

      this.innerHTML =
        // Each letter's own small shadow on the surface
        `<div class="gmc-contact">${svg(
          `<defs>${noBridges(`${u}cb`)}<filter id="${u}c" x="-5%" y="-5%" width="115%" height="115%">` +
          `<feOffset dx="${CONTACT[0]}" dy="${CONTACT[1]}"/><feGaussianBlur stdDeviation="1.4"/></filter></defs>` +
          `<g filter="url(#${u}c)"><g clip-path="url(#${u}cb)" fill="#000" fill-opacity="0.35">${PATHS}</g></g>`)}</div>` +
        `<div class="gmc-letters"></div>` +
        // The plate's edge around each letter: a dark hairline, catching light where it faces up-left
        `<div class="gmc-edge">${svg(
          `<defs>${noBridges(`${u}eb`)}</defs><g clip-path="url(#${u}eb)" fill="none" stroke-linejoin="round">` +
          `<g stroke="#0e1012" stroke-width="${edge.letter[0]}" stroke-opacity="${edge.letter[1]}">${PATHS}</g>` +
          `<g stroke="#9aa1a9" stroke-width="${edge.letter[2]}" stroke-opacity="${edge.letter[3]}" transform="translate(0.35 0.45)">${PATHS}</g></g>`)}</div>` +
        // The sheet's shadow on the surface while it is lifted
        `<div class="gmc-cast"><div></div></div>` +
        // The whole uncut plate, hiding the letters until the sheet around them comes away
        `<div class="gmc-plate"></div>` +
        `<div class="gmc-lip"></div>` +
        `<div class="gmc-sheet"></div>` +
        // The sheet's own thickness around each opening, seen once it is off the surface
        `<div class="gmc-sheet-edge">${svg(
          `<defs>${noBridges(`${u}sb`)}</defs><g clip-path="url(#${u}sb)" fill="none" stroke-linejoin="round">` +
          `<g stroke="#070809" stroke-width="${edge.sheet[0]}" stroke-opacity="${edge.sheet[1]}">${PATHS}</g>` +
          `<g stroke="#aab1b8" stroke-width="${edge.sheet[2]}" stroke-opacity="${edge.sheet[3]}" transform="translate(-0.45 -0.6)">${PATHS}</g></g>`)}</div>` +
        `<div class="gmc-fx">${svg(
          `<defs>${noBridges(`${u}fb`)}` +
          bridged.map(g => `<clipPath id="${u}s${g}" clipPathUnits="userSpaceOnUse"><path d="${GLYPHS[g]}"/></clipPath>`).join('') +
          `<radialGradient id="${u}glow">` +
          `<stop offset="0" stop-color="#fff"/><stop offset="0.18" stop-color="#e4edff" stop-opacity="0.7"/>` +
          `<stop offset="0.5" stop-color="#9db8ff" stop-opacity="0.16"/><stop offset="1" stop-color="#9db8ff" stop-opacity="0"/></radialGradient></defs>` +
          `<g fill="none" stroke="#08090a" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round">` +
          // Contours stop at the bridges; a bridge's own cuts only exist where they cross the stroke.
          `<g clip-path="url(#${u}fb)">${CUTS.map((c, i) => c.bridge ? '' : `<path data-kerf="${i}" d="${c.d}"/>`).join('')}</g>` +
          bridged.map(g => `<g clip-path="url(#${u}s${g})">${CUTS.map((c, i) => c.bridge && c.g === g ? `<path data-kerf="${i}" d="${c.d}"/>` : '').join('')}</g>`).join('') +
          `</g><g fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">` +
          `<g clip-path="url(#${u}fb)">${CUTS.map((c, i) => c.bridge ? '' : `<path data-heat="${i}" d="${c.d}" opacity="0"/>`).join('')}</g>` +
          bridged.map(g => `<g clip-path="url(#${u}s${g})">${CUTS.map((c, i) => c.bridge && c.g === g ? `<path data-heat="${i}" d="${c.d}" opacity="0"/>` : '').join('')}</g>`).join('') +
          `</g><g fill="none" stroke-linecap="round" stroke-linejoin="round">` +
          TAIL.map(([, w, col, op]) => `<path data-tail stroke="${col}" stroke-width="${w}" stroke-opacity="${op}" opacity="0"/>`).join('') +
          `</g><circle data-glow r="1" fill="url(#${u}glow)" opacity="0"/>`)}</div>`;

      this.letters = this.querySelector('.gmc-letters');
      this.contact = this.querySelector('.gmc-contact');
      this.edge = this.querySelector('.gmc-edge');
      this.cast = this.querySelector('.gmc-cast');
      this.plate = this.querySelector('.gmc-plate');
      this.lip = this.querySelector('.gmc-lip');
      this.sheet = this.querySelector('.gmc-sheet');
      this.sheetEdge = this.querySelector('.gmc-sheet-edge');
      this.fx = this.querySelector('.gmc-fx');
      this.moving = [this.plate, this.sheet, this.lip, this.cast, this.edge, this.sheetEdge, this.fx];
      this.svgs = [...this.querySelectorAll('svg')];
      const dockSel = this.getAttribute('dock');
      this.dock = dockSel ? document.querySelector(dockSel) : null;
      this.dock?.classList.add('gmc-dock');
      this.barEarly = this.getAttribute('bar') === 'early' && Boolean(this.dock);
      this.layoutKey = '';
      this.masksReady = false;
      this.run = null;
      this.layout();

      const value = this.getAttribute('reveal');
      this.mode = value === 'scroll' ? 'scroll' : value !== null ? 'auto' : null;
      const animate = this.mode && !(this.mode === 'auto' && this.state === 'done') && !reduceMotion?.matches;
      this.setState(animate ? 'pending' : 'done');
      if (animate) whenIdle(() => this.buildMasks()); else this.buildMasks();
      this.reset(animate);

      this.onScroll = () => this.kick();
      this.onVisibility = () => {
        if (document.visibilityState !== 'visible') { cancelAnimationFrame(this.raf); this.raf = 0; return; }
        if (this.run) this.kick();
        else if (this.onScreen) this.start();
      };
      addEventListener('scroll', this.onScroll, { passive: true, capture: true });   // capture: also hears pages that scroll an inner element (Shopify Horizon on desktop)
      addEventListener('resize', this.onScroll);
      document.addEventListener('visibilitychange', this.onVisibility);
      this.ro = new ResizeObserver(() => { this.layout(); if (this.run) this.run.shown = -1; this.kick(); });
      this.ro.observe(this);
      this.io = new IntersectionObserver(([e]) => {
        this.onScreen = e.intersectionRatio >= 0.35;
        if (this.onScreen && this.mode === 'auto') this.start();
      }, { threshold: [0, 0.35] });
      this.io.observe(this);
      if (animate && this.mode === 'scroll') this.start();
    }

    disconnectedCallback() {
      removeEventListener('scroll', this.onScroll, { capture: true });
      removeEventListener('resize', this.onScroll);
      document.removeEventListener('visibilitychange', this.onVisibility);
      this.ro?.disconnect();
      this.io?.disconnect();
      cancelAnimationFrame(this.raf);
      this.raf = 0;
      if (this.run) this.setState('pending');
      this.run = null;
    }

    setState(state) {
      if (this.state === state) return;
      this.state = state;
      this.dataset.state = state;
    }

    pace() {
      return clamp(parseFloat(this.getAttribute('pace')) || 1, 0.25, 3);
    }

    trackElement() {
      const sel = this.getAttribute('track');
      return (sel && (this.closest(sel) || document.querySelector(sel))) || this;
    }

    // Scroll progress through the track: 0 as it reaches the top of the view,
    // 1 once its pinned distance has been scrolled.
    progress() {
      const r = this.trackElement().getBoundingClientRect();
      return clamp(-r.top / Math.max(1, r.height - innerHeight), 0, 1);
    }

    layout() {
      const w = this.clientWidth || 1, h = this.clientHeight || 1;

      // The dock bar shows the bottom strip of a sheet this size, so its steel lines up with the sheet's.
      this.barH = this.dock ? this.dock.offsetHeight : 0;
      if (this.dock) {
        const shift = `0 ${this.barH - h}px`;
        this.dock.style.backgroundSize = `${w}px ${h}px, ${w}px ${h}px, ${TILE}px ${TILE}px, ${w}px ${h}px`;
        this.dock.style.backgroundPosition = [shift, shift, shift, shift].join(', ');
      }

      // The letters take at most a set share of the width and height; every layer
      // shares one viewBox with preserveAspectRatio "meet", so they line up exactly.
      const narrow = w < 640;
      const vw = GW / (narrow ? 0.84 : 0.6);
      const vh = GH / (narrow ? 0.46 : 0.56);
      this.scale = Math.min(w / vw, h / vh);   // screen pixels per letter unit
      this.vb = `${f2((GW - vw) / 2)} ${f2((GH - vh) / 2)} ${f2(vw)} ${f2(vh)}`;
      const key = `${this.vb}|${f2(this.scale)}|${w}x${h}`;
      if (key === this.layoutKey) return;
      this.layoutKey = key;
      this.svgs.forEach(s => s.setAttribute('viewBox', this.vb));
      if (this.masksReady) { this.masksReady = false; this.buildMasks(); }
    }

    // The sheet's openings, the letters, and the sheet's blurred shadow. None is on
    // screen before the lift, so they are built once the page is idle (or on demand).
    buildMasks() {
      if (this.masksReady || !this.letters) return;
      this.masksReady = true;
      const w = this.clientWidth || 1, h = this.clientHeight || 1;
      const { vb, scale } = this;
      // CSS masks read an image's alpha, so draw each shape through an SVG
      // luminance mask to turn black into real transparency.
      const big = bigRect(vb, w, h, scale);
      const img = (inner, filter = '') => svgURL(
        `<svg ${NS} viewBox="${vb}" preserveAspectRatio="xMidYMid meet">${filter}` +
        `<mask id="m" maskUnits="userSpaceOnUse" ${big}>${inner}</mask><rect ${big} fill="#fff" mask="url(#m)"/></svg>`);
      const holes = `<rect ${big} fill="#fff"/><g fill="#000">${PATHS}</g><g fill="#fff">${RECTS}</g>`;
      const seenW = w / scale + 80 / scale, seenH = h / scale + 80 / scale;   // all on screen, plus the blur's reach
      const blur =
        `<filter id="b" filterUnits="userSpaceOnUse" x="${f2((GW - seenW) / 2)}" y="${f2((GH - seenH) / 2)}" width="${f2(seenW)}" height="${f2(seenH)}">` +
        `<feGaussianBlur stdDeviation="${f2(14 / scale)}"/></filter>`;
      this.mask(this.sheet, img(holes));
      this.mask(this.cast.firstChild, img(`<g filter="url(#b)">${holes}</g>`, blur));
      // The cut letters, less the bridges that stay with the sheet
      this.mask(this.letters, img(`<g fill="#fff">${PATHS}</g><g fill="#000">${RECTS}</g>`));
    }

    mask(el, url) {
      el.style.webkitMaskImage = url;
      el.style.maskImage = url;
    }

    // Keep what moves on its own compositor layer for the whole reveal, so nothing is
    // promoted (or repainted underneath) mid-motion.
    promote(on) {
      for (const el of this.moving) el.style.willChange = on ? 'transform, opacity' : '';
    }

    // pending: one whole plate, nothing cut yet. Otherwise: the letters on the surface,
    // and the sheet already docked as the bar.
    reset(pending) {
      this.plate.style.visibility = pending ? '' : 'hidden';
      this.plate.style.opacity = '';
      this.contact.style.opacity = pending ? '0' : '';
      for (const el of [this.sheet, this.cast, this.lip, this.sheetEdge]) {
        el.style.display = pending ? '' : 'none';
        el.style.transform = '';
        el.style.visibility = '';
      }
      // Near-zero rather than zero, so these layers are painted ahead of the lift.
      this.cast.style.opacity = this.lip.style.opacity = this.sheetEdge.style.opacity = '0.001';
      this.edge.style.opacity = pending ? '0.001' : '';
      this.fx.style.display = 'none';
      this.fx.style.opacity = '';
      this.promote(false);
      if (this.dock) this.dock.style.visibility = pending && !this.barEarly ? 'hidden' : 'visible';
    }

    replay() {
      if (!this.letters || !this.mode || reduceMotion?.matches) return;
      if (this.mode === 'scroll') {
        this.trackElement().scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      cancelAnimationFrame(this.raf);
      this.raf = 0;
      this.run = null;
      this.setState('pending');
      this.reset(true);
      const r = this.getBoundingClientRect();
      const onScreen = Math.max(0, Math.min(r.bottom, innerHeight) - Math.max(r.top, 0));
      if (onScreen >= 0.35 * Math.min(r.height, innerHeight)) this.start();
    }

    start() {
      if (this.state !== 'pending' || this.run) return;
      if (this.mode === 'auto' && document.visibilityState !== 'visible') return;
      this.fx.style.display = '';
      this.promote(true);

      const kerfs = [];
      for (const el of this.fx.querySelectorAll('[data-kerf]')) kerfs[+el.dataset.kerf] = el;
      const heats = [];
      for (const el of this.fx.querySelectorAll('[data-heat]')) heats[+el.dataset.heat] = el;
      const lens = kerfs.map(el => el.getTotalLength());
      const perUnit = T.travel / lens.reduce((a, b) => a + b, 0);
      let at = this.mode === 'scroll' ? 0 : T.hold;
      const plan = lens.map((len, i) => {
        const step = { start: at + T.pierce };
        step.end = step.start + len * perUnit;
        at = step.end + T.cool;   // let the arc die away before the torch moves on
        kerfs[i].setAttribute('stroke-dasharray', `${f2(len)} ${f2(len + 1)}`);
        kerfs[i].setAttribute('stroke-dashoffset', f2(len));
        if (heats[i]) {
          heats[i].setAttribute('stroke-dasharray', `${f2(len)} ${f2(len + 1)}`);
          heats[i].setAttribute('stroke-dashoffset', f2(len));
          heats[i].setAttribute('opacity', '0');
        }
        return step;
      });
      const liftAt = at - T.cool + T.beat;

      this.run = {
        clock: 0, last: performance.now(), cur: this.progress(),
        kerfs, heats, lens, plan, liftAt, total: liftAt + T.lift, glowState: [],
        tails: [...this.fx.querySelectorAll('[data-tail]')], glow: this.fx.querySelector('[data-glow]'),
        on: -1, dash: [], lifting: false, docked: false, shown: -1,
      };
      this.setState('cutting');
      this.kick();
    }

    kick() {
      if (!this.run || this.raf) return;
      this.run.last = performance.now();
      this.raf = requestAnimationFrame(this.frame);
    }

    frame = now => {
      this.raf = 0;
      const r = this.run;
      if (!r) return;
      const elapsed = Math.max(0, now - r.last);
      r.last = now;

      let t, moving;
      if (this.mode === 'scroll') {
        // The sheet has weight: it follows the scroll position, never snaps to it.
        // Exponential easing is stable at any frame length, so a busy machine lags less, not more.
        const goal = this.progress();
        r.cur += (goal - r.cur) * (1 - Math.exp(-Math.min(elapsed, 250) / 140));
        if (Math.abs(goal - r.cur) < 1e-4) r.cur = goal;
        // Finish a little before the end of the track: scroll position rarely lands on exactly 1,
        // and the sheet must reach the bar for the handoff to happen.
        t = clamp(r.cur / 0.97, 0, 1) * r.total;
        moving = r.cur !== goal;
      } else {
        r.clock += Math.min(elapsed, 50) * this.pace();   // a long frame stretches time rather than jumping
        t = r.clock;
        moving = t < r.total;
      }
      if (t !== r.shown) { r.shown = t; this.render(t); }

      if (this.mode === 'auto' && !moving) {
        this.run = null;
        this.setState('done');
        this.reset(false);
        return;
      }
      // Scroll mode keeps a frame in flight while the sheet is on screen. iOS coalesces
      // scroll events during momentum, and waiting for the next one froze the lift.
      if (moving || (this.mode === 'scroll' && this.onScreen)) this.raf = requestAnimationFrame(this.frame);
    };

    // Everything on screen is a function of t, so the reveal can run either way.
    render(t) {
      const r = this.run;
      if (!this.masksReady && t > r.liftAt * 0.4) this.buildMasks();   // someone is scrolling fast

      let arc = null;
      r.plan.forEach((step, i) => {
        const len = r.lens[i];
        const cut = clamp((t - step.start) / (step.end - step.start), 0, 1) * len;
        const off = String(f2(len - cut));
        if (r.dash[i] !== off) { r.dash[i] = off; r.kerfs[i].setAttribute('stroke-dashoffset', off); }
        // The same length of edge, cooling from where the torch left it.
        const hot = r.heats[i];
        if (hot) {
          const age = clamp((t - step.end) / TEMPER, 0, 1);
          const seen = cut > 0 ? f2(0.9 * (1 - age) ** 0.45) : 0;
          const was = r.glowState[i] || {};
          if (was.off !== off) hot.setAttribute('stroke-dashoffset', off);
          if (was.seen !== seen) hot.setAttribute('opacity', String(seen));
          const col = seen > 0 ? temper(age) : was.col;
          if (seen > 0 && was.col !== col) hot.setAttribute('stroke', col);
          r.glowState[i] = { off, seen, col };
        }
        const pierceAt = step.start - T.pierce;
        if (t >= pierceAt && t < step.end) arc = { i, cut, heat: ease((t - pierceAt) / T.pierce) };
        else if (t >= step.end && t < step.end + T.cool) arc = { i, cut: len, heat: 1 - ease((t - step.end) / T.cool) };
      });

      if (arc) {
        const path = r.kerfs[arc.i];
        const len = r.lens[arc.i];
        const pt = path.getPointAtLength(arc.cut);
        r.glow.setAttribute('transform', `translate(${f2(pt.x)} ${f2(pt.y)}) scale(${f2(9 * (0.4 + 0.6 * arc.heat))})`);
        r.glow.setAttribute('opacity', f2(arc.heat));
        if (r.on !== arc.i) {
          r.on = arc.i;
          r.tails.forEach(el => el.setAttribute('d', CUTS[arc.i].d));
        }
        TAIL.forEach(([L], k) => {
          const l = Math.min(arc.cut, L);
          const el = r.tails[k];
          el.setAttribute('stroke-dasharray', `${f2(l)} ${f2(len * 2)}`);
          el.setAttribute('stroke-dashoffset', f2(-(arc.cut - l)));
          el.setAttribute('opacity', l > 0 ? f2(arc.heat) : '0');
        });
      } else if (r.on !== -1) {
        r.on = -1;
        r.glow.setAttribute('opacity', '0');
        r.tails.forEach(el => el.setAttribute('opacity', '0'));
      }

      // Every part cut: the sheet comes away and the letters stay where they lie.
      const lifting = t >= r.liftAt;
      if (lifting !== r.lifting) {
        r.lifting = lifting;
        this.plate.style.visibility = '';
      }
      // At the end, exactly 1: (liftAt + lift - liftAt) / lift can round to just under it.
      const u = t >= r.total ? 1 : lifting ? clamp((t - r.liftAt) / T.lift, 0, 1) : 0;
      // One continuous motion: lifted off the surface, and overlapping that, carried up
      // and set down flat as the bar (or out of the frame when there is no bar).
      const rise = ease(u / 0.4);
      const away = ease((u - 0.25) / 0.75);
      this.setState(u >= 1 ? 'done' : lifting ? 'lifting' : 'cutting');

      const W = this.clientWidth, H = this.clientHeight;
      const travel = this.barH ? H - this.barH : 1.15 * H;
      const lift = -(0.015 * rise * (1 - away) * H + away * travel);
      const grow = 0.05 * rise * (1 - away);
      const style = (el, prop, value) => { if (el.style[prop] !== value) el.style[prop] = value; };
      const sheetTransform = lifting ? `translate3d(0,${f2(lift)}px,0) scale(${f4(1 + grow)})` : 'none';
      style(this.fx, 'opacity', String(f2(1 - ease(u / 0.2))));
      style(this.edge, 'opacity', String(Math.max(0.001, f2(rise))));   // the letters' edges show as the gap opens
      // The uncut plate is what the openings show while the sheet is still flush; it goes
      // as the sheet rises off it, so no frame shows through to the surface below.
      const covered = 1 - ease(rise / 0.12);
      style(this.plate, 'opacity', String(f2(covered)));
      style(this.plate, 'visibility', covered <= 0.002 ? 'hidden' : '');
      // Each letter only casts a shadow once there is a gap to cast it into.
      style(this.contact, 'opacity', String(f2(ease(rise / 0.5))));
      style(this.sheet, 'transform', sheetTransform);
      style(this.sheetEdge, 'transform', sheetTransform);
      style(this.sheetEdge, 'opacity', String(Math.max(0.001, f2(rise * (1 - away)))));
      // The plate's bottom edge and its shadow ride along with it.
      style(this.lip, 'transform', `translate3d(0,${f2(lift + (grow / 2) * H)}px,0)`);
      style(this.lip, 'opacity', String(Math.max(0.001, f2(rise))));
      // Its shadow on the surface opens down-right as the gap grows, then softens away as it is carried off.
      style(this.cast, 'transform', `translate3d(${f2(0.014 * rise * W)}px,${f2(0.022 * rise * H + lift)}px,0) scale(${f4(1 + 0.03 * rise)})`);
      style(this.cast, 'opacity', String(Math.max(0.001, f2(0.45 * rise * (1 - ease(away / 0.35))))));

      // Once set down, the bar takes over from the sheet so it can stay with the page.
      if (this.dock) {
        const docked = u >= 1;
        if (docked !== r.docked) {
          r.docked = docked;
          if (!this.barEarly) this.dock.style.visibility = docked ? 'visible' : 'hidden';
          for (const el of [this.sheet, this.lip, this.sheetEdge]) el.style.visibility = docked ? 'hidden' : '';
        }
      }
    }
  });
}

return { temper };
})();
