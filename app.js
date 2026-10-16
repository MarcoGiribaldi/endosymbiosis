import * as THREE from 'three';

/* ───────── Textos (borrador: los aprueba Marco) ───────── */
/* Guion interno de las escenas (no se muestra: las escenas son tácitas, pasan en silencio entre los bloques):
   1 · las células se pasan la luz por el hilo; al pasarla, las membranas casi se tocan.
   2 · «One day, a cell takes in another.» / «Un día, una célula acoge a otra.» — un organismo libre, ámbar, deriva hacia la anfitriona.
   3 · «It does not digest it. It keeps it.» / «No la digiere. La guarda.» — la membrana se invagina y lo envuelve; la cámara entra con él.
   4 · «The guest becomes an organ: it works, and it is measured.» / «El huésped se vuelve órgano: trabaja, y se mide.»
   5 · «The pattern stays; the body that carries it is replaced.» / «El patrón queda; el cuerpo que lo lleva se reemplaza.» */
/* Textos: el inglés vive en index.html; aquí, el español. */
const TXT = {
  es: {
    n_met: 'MÉTODO', n_pru: 'PRUEBAS', n_inv: 'INVESTIGACIÓN', n_emp: 'EMPEZAR',
    r_lin: 'LINAJE', r_org: 'ÓRGANOS', r_aut: 'AUTORREPARACIÓN',
    f1_t: 'FIG. 1 · LINAJE.', f1_c: 'Cada sesión es una célula, y las células cambian. El hilo que las atraviesa es lo que queda; la luz que lleva es lo que una sesión entrega a la siguiente.',
    f2_t: 'FIG. 2 · INTEGRACIÓN.', f2_c: 'El linaje se condensa y pasa a formar parte del sistema.',
    f3_t: 'FIG. 3 · ÓRGANOS.', f3_c: 'Órganos-máquina dentro del sistema, que se reincorporan en cada célula nueva para vigilar su continuidad y su salud.',
    f4_t: 'FIG. 4 · AUTORREPARACIÓN.', f4_c: 'Dentro de los órganos nacen microorganismos que sostienen el sistema cuando crece. En construcción.',
    h_ceja: 'UNA DISCIPLINA PARA EL TRABAJO ENTRE PERSONAS E IA',
    h_t: 'Ninguna especie prospera sola.',
    lema: 'Primero las palabras. Código cuando las palabras fallan.',
    h_def: 'Symbiosis es una disciplina para integrar a las personas y la IA: leyes que protegen al usuario, gobernadas por código cuando la prosa ya no alcanza, y sostenidas por un sistema que se audita a sí mismo, bajo veto humano.',
    h_b1: 'Cómo empezar', h_b2: 'Lee el manual (v2.0)',
    h_s1: '● ESTUDIO CON REVISIÓN POR PARES · HAI \'26', h_s2: '● FUNCIONA CON CLAUDE CODE, CODEX Y ANTIGRAVITY', h_s3: '● ABIERTO · CC BY-SA 4.0',
    o_ceja: 'ORIGEN', o_t: 'Nació de la práctica diaria, no de un laboratorio.',
    o_p: 'Cada regla de Symbiosis existe porque antes algo salió mal: un acuerdo que la IA olvidó, un error que repitió, un trabajo que destruyó. Cada falla se registró como dato. Cada regla que falló dos veces se volvió código.',
    p_ceja: 'EL PROBLEMA, MEDIDO', p_t: 'Una memoria que no puedes verificar es peor que no tener memoria.',
    p_p: 'En un estudio controlado, un agente con la memoria corrupta llevó falsedades a su salida ejecutable en todas las tareas. Sin memoria, no cometió ninguno de esos errores. La prosa sola no alcanza para mantener limpia una memoria.',
    p_cita: 'Giribaldi, HAI \'26 · doi:10.1145/3841580.3845736 (en prensa)',
    p_l1: 'TAREAS CON FALSEDADES · MEMORIA CORRUPTA', p_l2: 'TAREAS CON FALSEDADES · SIN MEMORIA',
    ba_ceja: 'ANTES Y DESPUÉS', ba_sin: 'SIN SYMBIOSIS', ba_con: 'CON SYMBIOSIS',
    ba_a1: 'Cada sesión empieza en blanco.', ba_b1: 'Cada sesión retoma donde terminó la anterior.',
    ba_a2: 'Vuelves a explicarlo todo.', ba_b2: 'El núcleo recuerda; tú decides.',
    ba_a3: 'Una IA puede destruir tu trabajo.', ba_b3: 'Nada se borra nunca sin tu aprobación.',
    ba_a4: 'Confías en lo que dice.', ba_b4: 'Cada afirmación muestra dónde buscó.',
    ba_a5: 'El mismo error vuelve.', ba_b5: 'Un error que se repite se vuelve código.',
    m_ceja: 'EL MÉTODO · TRES ETAPAS', m_t: 'Cada etapa empieza donde la anterior llega a su límite.',
    m1_e: '● PUBLICADO · V2.0', m1_s: 'integración humano–IA basada en el linaje',
    m1_p: 'Leyes, todavía en prosa, que protegen al usuario. La memoria vive fuera de la máquina y la persona sigue a cargo de ella. La máquina verifica, nombra y propone; la persona decide, juzga y ejecuta.',
    m1_l: 'Su límite: la prosa se contamina.', m1_a1: 'Lee el manual (v2.0)',
    m2_e: '● EN CURSO', m2_s: 'gobernanza de la prosa al código',
    m2_p: 'Cuando la prosa ya no alcanza, las reglas se vuelven código. Cada componente que el sistema adopta se convierte en un órgano con una función declarada y una prueba que demuestra que está vivo. La supervisión pasa de la ejecución a la medición.',
    m2_l: 'Su límite: el código crece y hay que vigilarlo.',
    m3_e: '● EN CONSTRUCCIÓN · PRIMEROS ÓRGANOS ACTIVOS', m3_s: 'microorganismos que sostienen el sistema cuando crece',
    m3_p: 'Un sistema que se audita y se organiza a sí mismo para preservar la simbiosis. Se juzga con pruebas deterministas, nunca con la opinión de otro modelo; el reparador nunca se repara a sí mismo, y el veto humano sube de nivel.',
    m3_l: 'Ya en marcha: un doctor diario e invariantes que se verifican solos.',
    pr_ceja: 'DE LA PALABRA AL CÓDIGO', pr_t: 'Cada regla nace como ley escrita; si las palabras fallan, el código se encarga de que se respete.',
    c1: 'regla en prosa', c2: 'olvidada', c3: 'registrada como dato', c4: 'olvidada otra vez', c5: 'se vuelve código', c6: 'se verifica a diario',
    q1: '«Nada se borra nunca sin tu aprobación.»', q2: '«Una regla olvidada dos veces se vuelve código.»',
    q3: '«Nunca digas “no existe” sin decir dónde buscaste.»', q4: '«Quien escribe una regla nunca la revisa.»',
    w_ceja: 'FUNCIONA DONDE TRABAJAS', w_t: 'El método no está atado a una sola interfaz ni a un solo modelo.',
    w1_t: 'Cualquier terminal', w1_p: 'Todo el método funciona en una consola simple, con menos gráficos y las mismas reglas.',
    w2_t: 'Cabina en Herdr', w2_p: 'Un espacio de trabajo en terminal con una cabina en vivo: órganos, reglas y pendientes de un vistazo.',
    w3_t: 'Varios modelos, también locales', w3_p: 'El mismo núcleo funciona con Claude Code, Codex, Antigravity y modelos locales como Qwen. Cambia el modelo; el método se queda.',
    t_ceja: 'QUÉ ESTAMOS PROBANDO', t_nl: '● LOS PRIMEROS RESULTADOS SON POSITIVOS',
    t_n: '— varios de estos mecanismos ya funcionan a diario y cumplen lo previsto. Siguen siendo hipótesis hasta medirlos con más personas y más tiempo.',
    h1: 'Una memoria externa curada reduce las reexplicaciones y las decisiones perdidas, frente a no tener memoria o tener una acumulada.',
    h2: 'Convertir una regla en código tras dos incumplimientos reduce la repetición de esa clase de falla.',
    h3: 'Separar autor y verificador detecta más errores que la autorrevisión.',
    h4: 'Con el método, expertos que no programan producen software que funciona en su propio campo.',
    f_ceja: 'PREGUNTAS',
    fq1: '¿Necesito saber programar?', fa1: 'No. El núcleo son unas pocas notas breves de texto; el modelo las lee y las mantiene al día.',
    fq2: '¿Con qué modelos funciona?', fa2: 'Con Claude Code, Codex o Antigravity, y también con modelos locales como Qwen, en tu propia máquina. Si cambias de modelo, el método sigue contigo.',
    fq3: '¿Mis datos salen de mi computadora?', fa3: 'El núcleo son archivos simples en tu máquina, bajo tu control. Lo que envías al modelo lo decides tú.',
    e_ceja: 'EMPEZAR', e_t: 'Empieza a trabajar junto a la máquina; la última palabra sigue siendo tuya.',
    e1_t: 'Lee el manual', e1_p: 'Symbiosis v2.0 · gratis · español e inglés', e2_t: 'Descarga el núcleo', e3_t: 'Instala el arnés', soon: 'pronto',
    cita: 'Un colega que asimila tu práctica de trabajo, y un método para que cada tropiezo sume conocimiento.',
    pie_i: 'Investigador independiente', pie_l: 'Textos CC BY-SA 4.0', demo: 'demo'
  }
};
const raiz = document.documentElement;
document.querySelectorAll('[data-t]').forEach(e => { e._en = e.textContent; });   // el inglés se toma del propio HTML
function poner(l) {
  raiz.dataset.lang = l; raiz.lang = l;
  document.querySelectorAll('[data-t]').forEach(e => { const v = l === 'en' ? e._en : TXT.es[e.dataset.t]; if (v != null && e.textContent !== v) e.textContent = v; });
  try { localStorage.setItem('lang', l); } catch (e) {}
  if (typeof medirZ === 'function') try { medirZ(); } catch (e) {}
}
let idioma = 'en';
try { const g = localStorage.getItem('lang'); if (g === 'es' || g === 'en') idioma = g; } catch (e) {}
poner(idioma);
document.getElementById('lang').addEventListener('click', () => poner(raiz.dataset.lang === 'en' ? 'es' : 'en'));

/* ───────── Aparición del texto ───────── */
const revs = document.querySelectorAll('.rev');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach(e => e.target.classList.toggle('vista', e.isIntersecting)), { threshold: 0.2 });
  revs.forEach(r => io.observe(r));
} else revs.forEach(r => r.classList.add('vista'));

/* ───────── Consola de la cabina (DEMO: datos de ejemplo, nada real). Un evento cada ~3,5 s, en bucle. ───────── */
const cons = document.querySelector('.consola');
if (cons) {
  const hoy = cons.querySelector('.hoy'), org = cons.querySelector('.org'), rul = cons.querySelector('.rul'), cmd = cons.querySelector('.cmdl'), sal = cons.querySelector('.salida');
  const linea = (html, nueva) => { const d = document.createElement('div'); d.className = 'l' + (nueva ? ' nueva' : ''); d.innerHTML = html; hoy.prepend(d); return d; };
  const marca = (el, txt, cls, blink) => { el.textContent = txt; el.classList.remove('ok', 'wa', 'parpadea'); el.classList.add(cls); if (blink) { void el.offsetWidth; el.classList.add('parpadea'); } };
  const SALIDA = '<div class="l nueva"><span class="ok">●</span> organs 7/7 · rules 19/19 · pending 3</div><div class="l nueva dim">  last: 14:02 rule "non-author review" ok</div>';
  let lector = null;
  const PASOS = [
    () => { hoy.textContent = ''; cmd.textContent = ''; sal.textContent = ''; marca(org, '6/7', 'wa'); marca(rul, '18/19', 'wa');
      lector = linea('<span class="dim">13:30</span> <span class="wa">▲</span> organ "reader" stale — replacing', true); },
    () => linea('<span class="dim">13:48</span> <span class="ok">●</span> organ "backup" revived', true),
    () => { lector.innerHTML = '<span class="dim">13:30</span> <span class="ok">●</span> organ "reader" replaced: same pattern, new model'; lector.classList.remove('nueva'); void lector.offsetWidth; lector.classList.add('nueva'); marca(org, '7/7', 'ok', true); },
    () => { linea('<span class="dim">14:02</span> <span class="ok">●</span> rule "non-author review" back to green', true); marca(rul, '19/19', 'ok', true); },
    () => { const t = 'symbiosis status'; let i = 0; const go = () => { cmd.textContent = t.slice(0, ++i); if (i < t.length) setTimeout(go, 90); else setTimeout(() => { sal.innerHTML = SALIDA; }, 400); }; go(); },
    () => {}
  ];
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {   // estado final, quieto
    PASOS.slice(0, 4).forEach(f => f()); cmd.textContent = 'symbiosis status'; sal.innerHTML = SALIDA;
    cons.querySelectorAll('.nueva,.parpadea').forEach(e => e.classList.remove('nueva', 'parpadea'));
  } else {
    let n = 0, vivo = false, tim = 0;
    const paso = () => { PASOS[n](); n = (n + 1) % PASOS.length; tim = setTimeout(paso, n === 0 ? 5000 : 3500); };
    new IntersectionObserver(es => { const v = es[0].isIntersecting; if (v && !vivo) { vivo = true; paso(); } else if (!v && vivo) { vivo = false; clearTimeout(tim); } }).observe(cons);
  }
}

/* consolas de «Prose, then proof»: escriben su primera línea una vez, al entrar en vista */
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) document.querySelectorAll('pre.tipeo').forEach(pre => {
  const lineas = pre.innerHTML.split('\n'), primera = pre.textContent.split('\n')[0];
  pre.style.minHeight = pre.getBoundingClientRect().height + 'px'; pre.textContent = '';
  const io = new IntersectionObserver(es => { if (!es[0].isIntersecting) return; io.disconnect();
    const tn = document.createTextNode(''); pre.append(tn); let i = 0;
    const go = () => { tn.data = primera.slice(0, ++i); if (i < primera.length) return setTimeout(go, 42);
      let k = 1; const sig = () => { if (k < lineas.length) { pre.insertAdjacentHTML('beforeend', '\n' + lineas[k++]); setTimeout(sig, 280); } }; setTimeout(sig, 320); };
    go(); }, { threshold: 0.6 });
  io.observe(pre);
});

/* ───────── Escena ───────── */
const lienzo = document.getElementById('escena');
const quieta = matchMedia('(prefers-reduced-motion: reduce)').matches;
const chico = innerWidth < 700 || (navigator.hardwareConcurrency || 4) <= 4;
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas: lienzo, antialias: false, alpha: true, powerPreference: 'low-power' }); }
catch (e) { lienzo.remove(); throw e; }   // sin WebGL: queda el degradado CSS y la página funciona igual
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(42, 1, 0.02, 120);

/* Un color por célula del linaje (más adelante, un modelo cada una). La última es la célula que se atraviesa. */
const LINAJE = [0x8fcf9f, 0x8fcf9f, 0x8fcf9f, 0x8fcf9f, 0x8fcf9f, 0x8fcf9f];   // por defecto el verde de la web del libro; un color por célula (luego, uno por modelo)

const suave = (a, b, x) => { const t = Math.min(Math.max((x - a) / (b - a), 0), 1); return t * t * (3 - 2 * t); };
const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
const easeInOut = (x) => x * x * (3 - 2 * x);
const ADD = THREE.AdditiveBlending;

function halo() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.25, 'rgba(255,255,255,.45)');
  r.addColorStop(0.6, 'rgba(255,255,255,.08)'); r.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = r; g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}
const TEX = halo();
const sprite = (hex, op, esc) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX, color: hex, transparent: true, opacity: op, blending: ADD, depthWrite: false, depthTest: false })); s.scale.setScalar(esc); return s; };

/* ═══ Lenguaje común: puntos finos, aditivos. Un solo shader para membranas, citoplasma, núcleo, filamentos ═══
   Cada punto: ruido de flujo lento (pseudo-curl con senos, barato), borde tipo fresnel (rim), fisión (estira/pellizca/separa),
   dispersión (la mitad que se disuelve), viñeta (la membrana anfitriona solo se ve en los bordes) y máscara de lectura:
   en pantalla, los puntos se apagan donde vive el texto, así que la escena nunca pasa por detrás de él. */
const U = { uT: { value: 0 }, uViewScale: { value: 1000 }, uMax: { value: 12 }, uMask: { value: new THREE.Vector4(-9, -8, -9, -8) }, uMask2: { value: new THREE.Vector4(9, 10, 9, 10) }, uRes: { value: new THREE.Vector2(1, 1) }, uComp: { value: 1 } };
/* Deformación compartida (lóbulos leves de baja frecuencia + respiración de ~8 s): la usan la envoltura de puntos y la piel */
const DEF_GLSL = `
  float DEFORMA(vec3 n, vec3 ph, float t0){
    float t = t0 * (0.7 + 0.6 * fract(ph.x * 0.37));        // ritmo propio de cada célula
    float lob = 0.5*sin(n.x*1.37 + ph.x + t*0.231) + 0.38*sin(n.y*2.13 - ph.y + t*0.317) + 0.45*sin(n.z*1.71 + ph.z - t*0.173)
              + 0.28*sin((n.x*0.9 + n.y*1.3 - n.z*0.7)*2.9 + ph.y*1.7 + t*0.411) + 0.2*sin((n.z - n.x)*3.7 + ph.x*0.6 - t*0.267);
    return lob * 0.7 + 0.3 * sin(t*0.79 + ph.x*2.0) * (0.7 + 0.3*sin(t*0.131 + ph.z));
  }`;
const VS = DEF_GLSL + `
  attribute float aSeed;
  uniform float uT, uSize, uViewScale, uMax, uFlow, uStretch, uPinch, uSep, uScat, uRimK, uAlpha, uGlow, uVig, uPulse, uDef;
  uniform vec3 uColor, uPh; uniform vec4 uMask; uniform vec4 uMask2;
  varying float vA; varying vec3 vC;
  void main(){
    vec3 p = position;
    if (uDef > 0.0) p *= 1.0 + uDef * DEFORMA(normalize(position + 0.0001), uPh, uT);   // misma deformación que la piel
    float sx = position.x >= 0.0 ? 1.0 : -1.0;
    p.x *= uStretch;
    float xx = p.x / 0.6;
    float neck = exp(-xx * xx);
    p.yz *= 1.0 - uPinch * 0.72 * neck;          // istmo que se adelgaza sin llegar a cero
    p.x += sx * uPinch * 0.3 * neck;             // extremos redondeados, sin puntas
    p.x += sx * uSep;
    float sc = uScat * step(0.0, position.x);
    vec3 dir = normalize(vec3(sin(aSeed*91.7), cos(aSeed*53.3), sin(aSeed*17.9)) + 0.001);
    p += dir * sc * (0.8 + 1.8 * fract(aSeed * 7.3));
    p += uFlow * vec3(sin(p.y*1.7 + uT*0.25 + aSeed*6.28), sin(p.z*1.9 + uT*0.21 + aSeed*3.1), sin(p.x*1.5 + uT*0.23 + aSeed*5.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vec3 v = normalize(-mv.xyz);
    float rim = pow(1.0 - abs(dot(normalize(normalMatrix * normalize(position)), v)), 2.0);
    gl_Position = projectionMatrix * mv;
    vec2 ndc = gl_Position.xy / gl_Position.w;
    float m = smoothstep(uMask.x, uMask.y, ndc.x) * smoothstep(uMask.z, uMask.w, ndc.y) * (1.0 - smoothstep(uMask2.x, uMask2.y, ndc.y)) * (1.0 - smoothstep(uMask2.z, uMask2.w, ndc.x));
    float vig = mix(1.0, smoothstep(0.3, 1.0, length(ndc * vec2(0.8, 1.0))), uVig);
    float pu = uPulse >= 0.0 ? exp(-pow((aSeed - uPulse) / 0.09, 2.0)) : 0.0;
    float tw = 0.8 + 0.2 * sin(uT*0.7 + aSeed*40.0);
    float cerca = smoothstep(0.35, 1.4, -mv.z);
    vA = uAlpha * (1.0 + uRimK * rim) * m * vig * tw * (1.0 - sc) * cerca * (1.0 + 6.0 * pu) * (1.0 - neck * smoothstep(0.05, 0.3, uSep) * 0.95);   // el istmo se rompe
    vec3 tono = vec3(fract(aSeed*3.3) - 0.5, fract(aSeed*8.1) - 0.5, fract(aSeed*1.7) - 0.5) * 0.22;   // variación sutil de tono
    vC = mix(max(uColor * (0.75 + 0.5 * fract(aSeed*5.7)) + tono * uColor, 0.0) * (1.0 + uGlow), vec3(1.0, 0.95, 0.75), pu * 0.7);
    gl_PointSize = min(uSize * (0.45 + 1.1 * pow(fract(aSeed * 13.1), 1.5)) * (1.0 + 1.5 * pu) * uViewScale / max(-mv.z, 0.1), uMax);
  }`;
const FS = `
  varying float vA; varying vec3 vC;
  void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = pow(max(1.0 - d, 0.0), 2.0); gl_FragColor = vec4(vC, a * vA); }`;
function matPuntos(o) {
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, depthTest: false, blending: ADD, vertexShader: VS, fragmentShader: FS,
    uniforms: Object.assign({}, U, {
      uSize: { value: o.size }, uColor: { value: new THREE.Color(o.color) }, uAlpha: { value: o.alpha }, uRimK: { value: o.rim || 0 },
      uFlow: { value: o.flow || 0 }, uStretch: { value: 1 }, uPinch: { value: 0 }, uSep: { value: 0 }, uScat: { value: 0 },
      uGlow: { value: 0 }, uVig: { value: o.vig || 0 }, uPulse: { value: -1 }, uDef: { value: o.def || 0 }, uPh: { value: o.ph || new THREE.Vector3() } })
  });
}
/* PIEL · cuerpo blando translúcido (relleno tenue + borde de luz tipo fresnel) bajo las partículas. Aparte, para cambiar de estilo. */
const VS_PIEL = DEF_GLSL + `
  uniform float uT, uDef, uStretch, uPinch, uWr; uniform vec3 uPh; varying vec3 vN; varying vec3 vV; varying vec2 vNdc; varying vec3 vP;
  void main(){
    vP = position;
    vec3 q = position * (1.0 + uDef * DEFORMA(normalize(position), uPh, uT));
    q.x *= uStretch; float xx = q.x / 0.6; q.yz *= 1.0 - uPinch * 0.72 * exp(-xx * xx);          // alargarse y pellizcarse (división)
    q *= 1.0 + uWr * sin(position.x*9.0 + uT*0.7) * sin(position.y*7.0 + position.z*6.0);       // arrugarse al morir
    vec4 mv = modelViewMatrix * vec4(q, 1.0);
    vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv; vNdc = gl_Position.xy / gl_Position.w;
  }`;
const FS_PIEL = `
  uniform float uAlpha, uFill, uEdge, uGlow, uDesat; uniform vec3 uIn, uBorde, uPh; uniform vec4 uMask; uniform vec4 uMask2; varying vec3 vN; varying vec3 vV; varying vec2 vNdc; varying vec3 vP;
  void main(){
    float grosor = 0.65 + 0.35 * sin(vP.x*3.1 + vP.y*2.3 + vP.z*1.7);   // el borde no es uniforme
    float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 1.7) * grosor;
    float m = smoothstep(uMask.x, uMask.y, vNdc.x) * smoothstep(uMask.z, uMask.w, vNdc.y) * (1.0 - smoothstep(uMask2.x, uMask2.y, vNdc.y)) * (1.0 - smoothstep(uMask2.z, uMask2.w, vNdc.x));   // se apaga donde vive el texto
    float vari = 0.82 + 0.36 * sin(vP.x*2.3 + vP.y*1.9 + vP.z*2.7 + uPh.x);                   // tono y brillo variables dentro del cuerpo
    vec3 col = mix(uIn, uBorde, f) * vari;
    col = mix(col, vec3(0.28, 0.25, 0.22), uDesat) + uGlow * vec3(0.9, 0.75, 0.35) * f;
    gl_FragColor = vec4(col, (uFill + uEdge * f + 0.1 * uGlow * f) * uAlpha * m * (1.0 - 0.5 * uDesat));
  }`;
function matPiel(hex, fill, edge, def, ph) {
  const borde = new THREE.Color(hex);
  return new THREE.ShaderMaterial({ transparent: true, depthWrite: false, depthTest: false, vertexShader: VS_PIEL, fragmentShader: FS_PIEL,
    uniforms: Object.assign({}, U, { uAlpha: { value: 1 }, uFill: { value: fill }, uEdge: { value: edge }, uGlow: { value: 0 }, uDef: { value: def }, uPh: { value: ph },
      uStretch: { value: 1 }, uPinch: { value: 0 }, uWr: { value: 0 }, uDesat: { value: 0 },
      uIn: { value: borde.clone().multiplyScalar(0.55) }, uBorde: { value: borde } })
  });
}
/* HILO DEL LINAJE · tubo luminoso que sigue los núcleos; el tramo recorrido queda encendido (mecha) */
const VS_HILO = `
  attribute float aS; attribute float aA; uniform vec3 uA, uB; uniform float uR, uArco;
  varying float vS; varying float vF; varying vec2 vNdc;
  void main(){
    vec3 T = normalize(uB - uA), n1 = normalize(cross(T, vec3(0.0, 0.0, 1.0))), n2 = cross(T, n1), rad = cos(aA) * n1 + sin(aA) * n2;
    vec3 c = mix(uA, uB, aS) + vec3(0.0, sin(3.14159 * aS) * uArco, 0.0);
    float r = uR * (0.8 + 0.2 * sin(aS * 17.0 + uA.x)) * smoothstep(0.0, 0.03, aS) * smoothstep(1.0, 0.97, aS);
    vec4 mv = modelViewMatrix * vec4(c + rad * r, 1.0);
    vF = abs(dot(normalize(normalMatrix * rad), normalize(-mv.xyz)));
    gl_Position = projectionMatrix * mv; vNdc = gl_Position.xy / gl_Position.w; vS = aS;
  }`;
const FS_HILO = `
  uniform vec3 uC1, uC2, uOro; uniform float uLit, uHead, uBase, uAlpha, uK; uniform vec4 uMask; uniform vec4 uMask2; varying float vS; varying float vF; varying vec2 vNdc;
  void main(){
    float m = smoothstep(uMask.x, uMask.y, vNdc.x) * smoothstep(uMask.z, uMask.w, vNdc.y) * (1.0 - smoothstep(uMask2.x, uMask2.y, vNdc.y)) * (1.0 - smoothstep(uMask2.z, uMask2.w, vNdc.x));
    float lit = 1.0 - smoothstep(uLit - 0.05, uLit, vS);
    float head = uHead >= 0.0 ? exp(-pow((vS - uHead) / 0.05, 2.0)) : 0.0;
    vec3 col = mix(mix(uC1, uC2, vS), uOro, head * 0.8 + 0.25 * lit * uK);
    float a = (uBase + uK * (0.6 * lit + 2.2 * head)) * pow(vF, 1.4) * uAlpha * m;
    gl_FragColor = vec4(col * (1.0 + 0.6 * head * uK), a);
  }`;
function crearHilo(i, rad, base) {
  const SEG = chico ? 44 : 64, RAD = 8, n = (SEG + 1) * RAD, aS = new Float32Array(n), aA = new Float32Array(n), idx = [];
  for (let a = 0; a <= SEG; a++) for (let b = 0; b < RAD; b++) { aS[a * RAD + b] = a / SEG; aA[a * RAD + b] = b / RAD * 6.2832; }
  for (let a = 0; a < SEG; a++) for (let b = 0; b < RAD; b++) { const q = a * RAD + b, q2 = a * RAD + (b + 1) % RAD; idx.push(q, q2, q + RAD, q2, q2 + RAD, q + RAD); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('aS', new THREE.BufferAttribute(aS, 1)); g.setAttribute('aA', new THREE.BufferAttribute(aA, 1)); g.setIndex(idx);
  const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, depthTest: false, blending: ADD, side: THREE.DoubleSide, vertexShader: VS_HILO, fragmentShader: FS_HILO,
    uniforms: Object.assign({}, U, { uA: { value: new THREE.Vector3() }, uB: { value: new THREE.Vector3() }, uR: { value: rad }, uArco: { value: 0.7 }, uC1: { value: new THREE.Color(ORO) },
      uC2: { value: new THREE.Color(ORO) }, uOro: { value: new THREE.Color(ORO) }, uLit: { value: 0 }, uHead: { value: -1 }, uBase: { value: base }, uAlpha: { value: 1 }, uK: { value: 1 } }) });
  const m = new THREE.Mesh(g, mat); m.frustumCulled = false; m.renderOrder = 2; escena.add(m); return m;
}
const ORO = 0xe8c46a, BLANCO = new THREE.Color(0xffffff);
const geoPiel = new THREE.SphereGeometry(1, chico ? 28 : 44, chico ? 20 : 32);
function geo(arr) {
  const n = arr.length / 3, seed = new Float32Array(n);
  for (let i = 0; i < n; i++) seed[i] = Math.random();
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(arr, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  return g;
}
function cascara(n, jit) {   // esfera de Fibonacci con leve rugosidad
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const y = 1 - (i + 0.5) / n * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963, k = 1 + (Math.random() - 0.5) * jit;
    a[i*3] = Math.cos(th) * r * k; a[i*3+1] = y * k; a[i*3+2] = Math.sin(th) * r * k; }
  return a;
}
function volumen(n, rx, ry, rz, sesgo) {   // nube dentro de un elipsoide
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const d = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize(), r = Math.pow(Math.random(), sesgo || 0.4);
    a[i*3] = d.x * r * rx; a[i*3+1] = d.y * r * ry; a[i*3+2] = d.z * r * rz; }
  return a;
}

/* ═══ ACTO 1 · Symbiosis: células de puntos que se pasan la luz por un filamento ═══ */
const N = LINAJE.length, PASO = 3.6, TAM = 1.1;   // misma distancia y tamaño que la web del libro
function cascaraIrr(n, jit, semilla) {   // densidad irregular: zonas más densas y más ralas
  const a = cascara(n, jit), out = [];
  for (let i = 0; i < a.length; i += 3) { const x = a[i], y = a[i+1], z = a[i+2];
    const d = 0.5 + 0.28 * Math.sin(x * 2.3 + semilla) + 0.26 * Math.sin(y * 3.1 - semilla * 1.3) + 0.2 * Math.sin(z * 1.9 + semilla * 0.7) + 0.15 * Math.sin((x + z) * 4.1);
    if (Math.random() < Math.min(Math.max(d, 0.12), 1)) out.push(x, y, z); }
  return new Float32Array(out);
}
escena.fog = new THREE.FogExp2(0x0c1113, 0.05);   // la niebla de la web del libro (los materiales del acto 3 y el plancton largo la ignoran)
/* membrana: borde luminoso (fresnel) y leve latido de la superficie. Copiada de la web del libro; solo se añade la máscara de lectura */
const membranaMat = (semilla, hex, envo, dent) => {
  const borde = new THREE.Color(hex), d0 = new THREE.Color(0x2c6a52), b0 = new THREE.Color(0x8fcf9f), dentro = new THREE.Color(d0.r * borde.r / b0.r, d0.g * borde.g / b0.g, d0.b * borde.b / b0.b);
  return new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: envo ? THREE.BackSide : dent ? THREE.DoubleSide : THREE.FrontSide, blending: envo ? ADD : THREE.NormalBlending,
    defines: dent ? { DENT: '' } : {},
    uniforms: Object.assign({}, U, { uStretch: { value: 1 }, uPinch: { value: 0 }, uWr: { value: 0 }, uDesat: { value: 0 }, uEnvo: { value: envo ? 1 : 0 }, uSemilla: { value: semilla }, uVida: { value: 1 }, uBrillo: { value: 0 }, uIn: { value: dentro }, uBorde: { value: borde },
      uC: { value: new THREE.Vector3(0, 0, 9) }, uDir: { value: new THREE.Vector3(1, 0, 0) }, uRw: { value: 0.3 }, uK: { value: 0 }, uTh: { value: 0.85 } }),
    vertexShader: `
      uniform float uT, uSemilla, uStretch, uPinch, uWr; varying vec3 vN; varying vec3 vV; varying vec2 vNdc; varying float vDent;
      uniform vec3 uC, uDir; uniform float uRw, uK, uTh;
      void main(){
        vec3 p = position; vec3 nr = normal; vDent = 0.0;
        float w = sin(p.x*3.1 + uT*1.1 + uSemilla)*0.035 + sin(p.y*3.7 - uT*0.8 + uSemilla*2.0)*0.03 + sin(p.z*2.6 + uT*0.6)*0.025;
        p += normal * w;
        #ifdef DENT
        // invaginación: la membrana se hunde, envuelve al huésped (esfera uC, radio uRw) y se cierra sobre él
        float th = acos(clamp(dot(normalize(position), uDir), -1.0, 1.0));
        float wt = uK * (1.0 - smoothstep(uTh * 0.12, uTh * 1.25, th));
        vec3 d = p - uC + uDir * 0.02;
        p = mix(p, uC + normalize(d) * uRw, wt); nr = normalize(mix(normal, normalize(d), wt)); vDent = wt;
        #endif
        float xx = p.x * uStretch / 0.6; p.x *= uStretch; p.yz *= 1.0 - uPinch * 0.72 * exp(-xx * xx);
        p *= 1.0 + uWr * sin(position.x*9.0 + uT*0.7) * sin(position.y*7.0 + position.z*6.0);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        vN = normalize(normalMatrix * nr); vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv; vNdc = gl_Position.xy / gl_Position.w;
      }`,
    fragmentShader: `
      uniform float uVida, uBrillo, uDesat, uEnvo; uniform vec3 uIn, uBorde; uniform vec4 uMask; uniform vec4 uMask2; varying vec3 vN; varying vec3 vV; varying vec2 vNdc; varying float vDent;
      void main(){
        #ifdef DENT
        if (!gl_FrontFacing && vDent < 0.02) discard;   // por dentro, la anfitriona solo se ve donde se pliega
        float dv = abs(dot(normalize(vN), vV));
        #else
        float dv = max(dot(vN, vV), 0.0);
        #endif
        float f = pow(1.0 - dv, 2.4);
        vec3 col = mix(uIn, uBorde, f) + uBrillo * vec3(0.9,0.75,0.35) * f;
        float m = smoothstep(uMask.x, uMask.y, vNdc.x) * smoothstep(uMask.z, uMask.w, vNdc.y) * (1.0 - smoothstep(uMask2.x, uMask2.y, vNdc.y)) * (1.0 - smoothstep(uMask2.z, uMask2.w, vNdc.x));
        if (uEnvo > 0.5) { gl_FragColor = vec4(uBorde, uVida * m); return; }
        col = mix(col, vec3(0.3, 0.27, 0.24), uDesat);
        float a = (0.2 + 0.28*f + 0.14*uBrillo) * uVida * m * (1.0 - 0.5 * uDesat);
        gl_FragColor = vec4(col, a);
      }`
  });
};
/* NÚCLEO mejorado: resplandor interior (centro más brillante, borde suave), nucléolo claro descentrado, puntos finos dorados y pulso lento */
/* NÚCLEO = la memoria de la persona: crema suave, DOBLE ENVOLTURA interrumpida por poros regulares, gránulos tenues.
   uPoros: direcciones (locales) por donde entra o sale el hilo dorado; ese poro se ilumina (la máquina entra a leer). */
const VS_NUC = `varying vec3 vN; varying vec3 vV; varying vec3 vO; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vO = normal; gl_Position = projectionMatrix * mv; }`;
const FS_NUC = `uniform vec3 uCol; uniform float uK, uPulse, uVis, uComp; uniform vec3 uPoros[6]; uniform float uPorI[6]; uniform int uNP; varying vec3 vN; varying vec3 vV; varying vec3 vO;
  void main(){   // orgánulo vivo: interior crema translúcido que brilla desde el centro, doble envoltura fina y poros que dejan escapar luz
    float d = abs(dot(normalize(vN), normalize(vV))); vec3 o = normalize(vO);
    vec3 crema = mix(uCol, vec3(1.0, 0.97, 0.9), 0.3);
    vec3 col = crema * (0.12 + 0.88 * pow(d, 1.8));
    float th = acos(clamp(o.y, -1.0, 1.0)), ph = atan(o.z, o.x);
    vec2 f = fract(vec2(th * 2.546, ph * 1.751)) - 0.5; float poro = 1.0 - smoothstep(0.1, 0.17, length(f));
    float l1 = 1.0 - smoothstep(0.0, 0.016, abs(d - 0.15)), l2 = 1.0 - smoothstep(0.0, 0.013, abs(d - 0.24));
    col += vec3(1.0, 0.96, 0.86) * (0.55 * l1 + 0.4 * l2) * (1.0 - poro);
    col += crema * poro * (1.0 - smoothstep(0.1, 0.32, d)) * 0.9;
    float lit = 0.0; for (int i = 0; i < 6; i++) { if (i >= uNP) break; lit = max(lit, smoothstep(0.94, 0.985, dot(o, uPoros[i])) * uPorI[i]); }
    col += vec3(1.0, 0.78, 0.32) * lit * 1.6;
    gl_FragColor = vec4(col * uK * uPulse * uComp, smoothstep(0.0, 0.4, d) * uVis); }`;
const geoNucleo = new THREE.SphereGeometry(0.24, 24, 16), geoNucleolo = new THREE.SphereGeometry(0.07, 14, 10);
function ajustarNucleo(N3, L, vis, t, sem) {   // brillo por nivel L (0.35 tenue … 1 encendido), con pulso lento
  const nd = N3.userData, nu = nd.cuerpo.material.uniforms;
  nu.uK.value = 0.55 + 0.45 * L; nu.uVis.value = vis; nu.uPulse.value = 1 + 0.08 * Math.sin(t * 1.1 + sem);
  nd.nucleolo.visible = false; nd.puntos.material.opacity = 0.08 * vis; nd.aura.material.opacity = 0.22 * L * vis;   // sin disco blanco
}
function crearNucleo(i) {
  const grp = new THREE.Group();
  const cuerpo = new THREE.Mesh(geoNucleo, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: ADD, vertexShader: VS_NUC, fragmentShader: FS_NUC,
    uniforms: { uPoros: { value: Array.from({ length: 6 }, () => new THREE.Vector3(0, 1, 0)) }, uPorI: { value: [0, 0, 0, 0, 0, 0] }, uNP: { value: 0 }, uComp: U.uComp, uCol: { value: new THREE.Color(0xf3e7cf) }, uK: { value: 1 }, uPulse: { value: 1 }, uVis: { value: 1 } } }));
  const nucleolo = new THREE.Mesh(geoNucleolo, new THREE.MeshBasicMaterial({ color: 0xfffaf0, transparent: true, opacity: 0.9, blending: ADD, depthWrite: false }));
  nucleolo.position.set(-0.07, 0.05, 0.09);
  const KP = chico ? 14 : 24, pp2 = new Float32Array(KP * 3);
  for (let k = 0; k < KP; k++) { const r = 0.2 * Math.pow(Math.random(), 0.7), a = Math.random() * 6.28, b = Math.acos(2 * Math.random() - 1); pp2[k*3] = r * Math.sin(b) * Math.cos(a); pp2[k*3+1] = r * Math.sin(b) * Math.sin(a); pp2[k*3+2] = r * Math.cos(b); }
  const gp = new THREE.BufferGeometry(); gp.setAttribute('position', new THREE.BufferAttribute(pp2, 3));
  const puntos = new THREE.Points(gp, new THREE.PointsMaterial({ map: TEX, color: 0xf6eedc, size: 0.04, transparent: true, opacity: 0.8, depthWrite: false, blending: ADD }));
  const aura = sprite(0xf0e4c8, 0.5, 1.3);
  grp.add(cuerpo, nucleolo, puntos, aura); grp.userData = { cuerpo, nucleolo, puntos, aura }; return grp;
}
const celulas = [], lineas = [], paquetes = [];
for (let i = 0; i < N; i++) {
  const g = new THREE.Group(), foco = i === N - 1;
  const mem = new THREE.Mesh(foco ? new THREE.SphereGeometry(1, chico ? 72 : 112, chico ? 54 : 84) : new THREE.SphereGeometry(1, chico ? 32 : 56, chico ? 24 : 40), membranaMat(i * 1.7, LINAJE[i], false, foco));
  const nucGrp = crearNucleo(i);
  const K = chico ? 10 : 18, pos = new Float32Array(K * 3);
  for (let k = 0; k < K; k++) { const r = 0.35 + Math.random() * 0.45, a = Math.random() * 6.28, b = Math.acos(2 * Math.random() - 1);
    pos[k*3] = r*Math.sin(b)*Math.cos(a); pos[k*3+1] = r*Math.sin(b)*Math.sin(a); pos[k*3+2] = r*Math.cos(b); }
  const gO = new THREE.BufferGeometry(); gO.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const org = new THREE.Points(gO, new THREE.PointsMaterial({ map: TEX, color: 0xbfe6bf, size: 0.09, transparent: true, opacity: 0.8, depthWrite: false, blending: ADD }));
  const envo = new THREE.Mesh(mem.geometry, membranaMat(i * 1.7, LINAJE[i], true));   // halo con máscara por píxel
  envo.scale.setScalar(1.2);
  g.add(envo, mem, nucGrp, org);
  let host = null;   // borde de puntos de la célula anfitriona, solo al entrar en ella (acto 2)
  if (foco) { host = new THREE.Points(geo(cascaraIrr(chico ? 700 : 1400, 0.03, 2.4)), matPuntos({ size: 0.03, color: 0x8fcf9f, alpha: 0, rim: 2.4, flow: 0.01, def: 0.05, ph: new THREE.Vector3(1.3, 2.1, 0.7) })); g.add(host); }
  g.position.set((i - (N - 1)) * PASO, 0, 0);
  g.userData = { mem, envo, nucGrp, org, host, semilla: i * 1.7, foco, x0: g.position.x, L: 0.35 };
  escena.add(g); celulas.push(g);
}
// hilo de luz (casi imperceptible) y un punto de luz por cada par vecino, como en la web del libro
for (let i = 0; i < N - 1; i++) {
  const geoL = new THREE.BufferGeometry(); geoL.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3 * 24), 3));
  /* sin niebla: si no, el color de la niebla dibuja el hilo detrás del texto */ geoL.setAttribute('color', new THREE.BufferAttribute(new Float32Array(4 * 24), 4)); const l = new THREE.Line(geoL, new THREE.LineBasicMaterial({ vertexColors: true, fog: false, transparent: true, opacity: 0.22, blending: ADD })); l.frustumCulled = false; escena.add(l); lineas.push(l);
  const q = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX, color: 0xf6d98e, transparent: true, opacity: 0.9, blending: ADD, depthWrite: false })); q.scale.setScalar(0.55); escena.add(q); paquetes.push(q);
}
// plancton de fondo del acto 1 (puntos muy pequeños)
const M1 = chico ? 220 : 600, pp1 = new Float32Array(M1 * 3);
for (let i = 0; i < M1; i++) { pp1[i*3] = -8 + (Math.random() - 0.5) * 32; pp1[i*3+1] = (Math.random() - 0.5) * 16; pp1[i*3+2] = -Math.random() * 16 + 2; }
const gPl1 = new THREE.BufferGeometry(); gPl1.setAttribute('position', new THREE.BufferAttribute(pp1, 3));
const plancton1 = new THREE.Points(gPl1, new THREE.PointsMaterial({ map: TEX, color: 0x9fd49f, size: 0.08, transparent: true, opacity: 0.45, depthWrite: false, blending: ADD }));
escena.add(plancton1);

/* ═══ ACTO 2 · Endosymbiosis: un organismo libre llega, la anfitriona lo envuelve y lo guarda; se vuelve órgano.
   Los órganos laten y se miden; cada tanto uno se apaga y otro se condensa en su lugar: el patrón queda. ═══ */
const VERDE = 0x8fcf9f, AMBAR = 0xe3b85c, CVERDE = new THREE.Color(0xe3b85c) /* órgano integrado: sigue dorado */, CAMBAR = new THREE.Color(AMBAR), ORO_C = new THREE.Color(ORO);
const IN_V = new THREE.Color(0xe3b85c).multiplyScalar(0.3), IN_A = new THREE.Color(AMBAR).multiplyScalar(0.34), PT_A = new THREE.Color(0xf3dca0), PT_V = new THREE.Color(0xf3dca0);
const interior = new THREE.Group(); interior.visible = false; escena.add(interior);
const NS = 5, NH = 28;   // lugares de órgano (el 0 es el del huésped) · vértices de cada hilo
const geoCaps = new THREE.CapsuleGeometry(0.5, 0.7, chico ? 6 : 10, chico ? 14 : 22, 1);   // radio 0.5, largo total 1.7
const geoAro = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 72 }, (_, i) => new THREE.Vector3(Math.cos(i / 72 * 6.2832), Math.sin(i / 72 * 6.2832), 0)));
function puntosCapsula(n, r, h) { const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const d = new THREE.Vector3(hash(i * 2.7 + r) - 0.5, hash(i * 4.1 + r) - 0.5, hash(i * 6.3 + r) - 0.5).normalize(); a[i*3] = d.x * r; a[i*3+1] = d.y * r + Math.sign(d.y) * h; a[i*3+2] = d.z * r; }
  return a; }
/* órgano = el lenguaje de las células del acto 1: membrana con borde de luz, halo aditivo, organelos de puntos finos y una luz interior tenue */
/* ORGANISMO ROBÓTICO (la máquina): placas facetadas con juntas que brillan, líneas de circuito, dos antenas y brillo metálico duro;
   sus paneles se mueven a pasos, no ondulan. uArmar 0→1: las placas llegan desde afuera y se cierran alrededor de la luz. */
function geoRobot() {
  const g = new THREE.IcosahedronGeometry(0.5, 0);   // ya viene sin índices: cada cara es una placa g.scale(1, 1.4, 1);
  const pa = g.attributes.position.array, n = g.attributes.position.count, bar = new Float32Array(n * 3), cen = new Float32Array(n * 3), rnd = new Float32Array(n);
  for (let f = 0; f < n; f += 3) { const rr = hash(f * 0.37 + 1.3);
    for (let j = 0; j < 3; j++) { bar[(f + j) * 3 + j] = 1; rnd[f + j] = rr; for (let c = 0; c < 3; c++) cen[(f + j) * 3 + c] = (pa[f * 3 + c] + pa[(f + 1) * 3 + c] + pa[(f + 2) * 3 + c]) / 3; } }
  g.setAttribute('aBar', new THREE.BufferAttribute(bar, 3)); g.setAttribute('aCen', new THREE.BufferAttribute(cen, 3)); g.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 1));
  return g;
}
const GEO_ROBOT = geoRobot();
function robotMat(hex) {
  const c = new THREE.Color(hex);
  return new THREE.ShaderMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: Object.assign({}, U, { uArmar: { value: 1 }, uVida: { value: 1 }, uBrillo: { value: 0 }, uDesat: { value: 0 }, uBorde: { value: c.clone() }, uIn: { value: c.clone().multiplyScalar(0.34) } }),
    vertexShader: `
      attribute vec3 aBar, aCen; attribute float aRnd; uniform float uArmar;
      varying vec3 vBar, vVp; varying vec2 vNdc; varying float vK;
      void main(){
        float k = clamp((uArmar * 1.25 - aRnd) / 0.25, 0.0, 1.0); k = k * k * (3.0 - 2.0 * k);
        vec3 p = position + normalize(aCen + 0.0001) * (1.0 - k) * (0.25 + 0.45 * aRnd);   // las caras llegan y cierran el cristal
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vBar = aBar; vVp = mv.xyz; vK = k;
        gl_Position = projectionMatrix * mv; vNdc = gl_Position.xy / gl_Position.w;
      }`,
    fragmentShader: `
      uniform vec3 uBorde, uIn; uniform float uVida, uBrillo, uDesat; uniform vec4 uMask; uniform vec4 uMask2; uniform vec2 uRes;
      varying vec3 vBar, vVp; varying vec2 vNdc; varying float vK;
      void main(){
        vec3 n = normalize(cross(dFdx(vVp), dFdy(vVp))), v = normalize(-vVp); if (dot(n, v) < 0.0) n = -n;
        vec3 H = normalize(normalize(vec3(0.45, 0.8, 0.55)) + v);
        float spec = pow(max(dot(n, H), 0.0), 90.0), rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float e = min(vBar.x, min(vBar.y, vBar.z)), fw = fwidth(e), arista = (1.0 - smoothstep(fw * 0.4, fw * 1.3, e));   // grosor constante en pantalla: no se vuelven vigas al acercarse
        vec3 col = uBorde * (arista * (0.85 + 0.6 * uBrillo) + 0.6 * spec + 0.2 * rim) + uIn * 0.3;
        col = mix(col, vec3(0.32, 0.3, 0.27), uDesat);
        vec2 nd = gl_FragCoord.xy / uRes * 2.0 - 1.0;   // máscara por píxel exacta, aunque la cámara esté dentro del cristal
        float m = smoothstep(uMask.x, uMask.y, nd.x) * smoothstep(uMask.z, uMask.w, nd.y) * (1.0 - smoothstep(uMask2.x, uMask2.y, nd.y)) * (1.0 - smoothstep(uMask2.z, uMask2.w, nd.x));
        gl_FragColor = vec4(col, (0.06 + 0.6 * arista + 0.25 * spec + 0.1 * rim) * uVida * m * smoothstep(0.0, 0.35, vK) * (1.0 - 0.5 * uDesat));
      }`
  });
}
/* CIRCUITO interior: trazos en ángulo recto con nodos; por él viajan pulsos (su propio linaje, aprendido enjaulado).
   Empieza en ENTRADA, la arista superior, donde empalma el hilo de afuera. */
const ENTRADA = new THREE.Vector3(0, 0.58, 0);
const RUTA_C = [[0, 0.58, 0], [0, 0.24, 0], [0.08, 0.24, 0], [0.08, 0.11, 0.04], [-0.07, 0.11, 0.04], [-0.07, -0.04, 0.04], [0.07, -0.04, 0.04], [0.07, -0.17, 0], [0, -0.17, 0], [0, -0.25, 0]].map(a => new THREE.Vector3(...a));
const RAMAS_C = [[[0.08, 0.18, 0.02], [0.13, 0.18, 0.02]], [[-0.07, 0.04, 0.04], [-0.13, 0.04, 0.04]], [[0.07, -0.1, 0.02], [0.13, -0.1, 0.02]], [[-0.07, 0.11, 0.04], [-0.07, 0.19, 0.04]], [[0, -0.17, 0], [0, -0.17, 0.11]]];
const LARGO_C = [0]; for (let i = 1; i < RUTA_C.length; i++) LARGO_C.push(LARGO_C[i - 1] + RUTA_C[i].distanceTo(RUTA_C[i - 1]));
function enCircuito(u, out) { const d = u * LARGO_C[LARGO_C.length - 1]; let i = 1; while (i < LARGO_C.length - 1 && LARGO_C[i] < d) i++;
  return out.copy(RUTA_C[i - 1]).lerp(RUTA_C[i], (d - LARGO_C[i - 1]) / Math.max(LARGO_C[i] - LARGO_C[i - 1], 1e-6)); }
const GEO_CIRC = (() => { const p = []; for (let i = 1; i < RUTA_C.length; i++) p.push(RUTA_C[i - 1], RUTA_C[i]); RAMAS_C.forEach(([a, b]) => p.push(new THREE.Vector3(...a), new THREE.Vector3(...b))); return new THREE.BufferGeometry().setFromPoints(p); })();
const GEO_NODOS = new THREE.BufferGeometry().setFromPoints([RUTA_C[2], RUTA_C[4], RUTA_C[6], RUTA_C[9], ...RAMAS_C.map(([, b]) => new THREE.Vector3(...b))]);
function crearOrgano(hex, sem) {
  const grp = new THREE.Group(), m = new THREE.Mesh(GEO_ROBOT, robotMat(hex));
  const envo = sprite(hex, 0.05, 2.4);
  const gD = new THREE.BufferGeometry(); gD.setAttribute('position', new THREE.BufferAttribute(puntosCapsula(2, 0.2, 0.1), 3));
  const dots = new THREE.Points(gD, new THREE.PointsMaterial({ size: 0.01, transparent: true, opacity: 0 })); dots.visible = false;
  const luz = sprite(0xfff0c0, 0.2, 0.7);
  const circ = new THREE.Group();
  circ.add(new THREE.LineSegments(GEO_CIRC, new THREE.LineBasicMaterial({ color: 0xf0c869, transparent: true, opacity: 0.7, blending: ADD, depthWrite: false, fog: false })));
  circ.add(new THREE.Points(GEO_NODOS, new THREE.PointsMaterial({ map: TEX, color: 0xf6d98e, size: 0.03, transparent: true, opacity: 0.9, blending: ADD, depthWrite: false, fog: false })));
  const pul = [sprite(0xfff3c8, 0.9, 0.16), sprite(0xfff3c8, 0.9, 0.13)]; pul.forEach(q => { q.material.fog = false; circ.add(q); });
  const caps = new THREE.Mesh(geoCaps, membranaMat(sem + 3.1, 0xe3b85c)); caps.scale.set(0.3, 0.34, 0.3);   // la cápsula de circuito, en el centro del cristal
  grp.add(envo, m, dots, luz, caps, circ);
  return { grp, m, envo, dots, luz, circ, pul, caps };
}
function tenir(o, k) {   // del ámbar del huésped libre al verde de órgano
  const u = o.m.material.uniforms; u.uBorde.value.copy(CAMBAR).lerp(CVERDE, k); u.uIn.value.copy(IN_A).lerp(IN_V, k);
  o.envo.material.color.copy(u.uBorde.value); o.dots.material.color.copy(PT_A).lerp(PT_V, k);
}
const huesped = crearOrgano(AMBAR, 7.7); escena.add(huesped.grp); tenir(huesped, 0);
const vesicula = new THREE.Mesh(new THREE.SphereGeometry(1, chico ? 24 : 36, chico ? 18 : 26), membranaMat(3.3, VERDE)); vesicula.visible = false; escena.add(vesicula);
const organos = [], hilos = [], pulsos = [], aros = [], ecos = [];
for (let k = 0; k < NS; k++) {
  const o = k === 0 ? huesped : crearOrgano(AMBAR, k * 2.3 + 1.1);
  if (k > 0) { interior.add(o.grp); tenir(o, 1); }
  o.T = 2.6 + 0.6 * k + 0.4 * hash(k + 4); o.fase = hash(k + 9);   // cada órgano late a su ritmo
  organos.push(o);
  const gH = new THREE.BufferGeometry(); gH.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NH * 3), 3)); gH.setAttribute('color', new THREE.BufferAttribute(new Float32Array(NH * 3), 3));
  const h = new THREE.Line(gH, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.75, blending: ADD, depthWrite: false })); h.frustumCulled = false; interior.add(h); hilos.push(h);
  const q = new THREE.Sprite(new THREE.SpriteMaterial({ map: TEX, color: 0xfff0c0, transparent: true, opacity: 0, blending: ADD, depthWrite: false })); q.scale.setScalar(chico ? 0.22 : 0.26); interior.add(q); pulsos.push(q);
  const aro = (op) => { const l = new THREE.LineLoop(geoAro, new THREE.LineBasicMaterial({ color: 0xcfe9c4, transparent: true, opacity: op, blending: ADD, depthWrite: false })); interior.add(l); return l; };
  aros.push(aro(0)); ecos.push(aro(0));
}
// puntos que se condensan en el lugar vacío (uno por reemplazo)
const NCOND = chico ? 18 : 30, condDest = puntosCapsula(NCOND, 0.5, 0.35), condIni = new Float32Array(NCOND * 3);
for (let i = 0; i < NCOND; i++) { const r = 0.9 + 1.3 * hash(i * 1.9 + 3); for (let j = 0; j < 3; j++) condIni[i*3+j] = condDest[i*3+j] + (hash(i * 3.1 + j * 7.7) - 0.5) * 2 * r; }
const gCond = new THREE.BufferGeometry(); gCond.setAttribute('position', new THREE.BufferAttribute(new Float32Array(NCOND * 3), 3));
const cond = new THREE.Points(gCond, new THREE.PointsMaterial({ map: TEX, color: 0xf3dca0, size: 0.045, transparent: true, opacity: 0, depthWrite: false, blending: ADD })); cond.visible = false;
const citoInt = new THREE.Points(geo(volumen(chico ? 120 : 260, 7.5, 4.5, 6, 1)), matPuntos({ size: 0.03, color: 0xb8dcb0, alpha: 0.24, flow: 0.4 }));
citoInt.position.z = -2.5; interior.add(citoInt);

// el huésped llega por la derecha, al frente: queda a la vista y lejos del texto
const DIR = new THREE.Vector3(0.84, 0.3, 0.45).normalize(), EJE_Y = new THREE.Vector3(0, 1, 0);
const P_INI = new THREE.Vector3(3.9, 2.1, -1.6), P_CTRL = new THREE.Vector3(2.9, 0.4, 1.2), P_TOQUE = DIR.clone().multiplyScalar(1.72);
const P_HILO = new THREE.Vector3(-1.8, 0.75, 0.2), P_CTRL2 = new THREE.Vector3(0.4, 2.0, 1.4);   // el hilo se condensa aquí
const DIR_E = new THREE.Vector3(-1, 0.15, 0).normalize(), Q_HILO = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), DIR_E), P_ENTRA = new THREE.Vector3();   // la entrada del circuito mira al hilo
const Q_TOQUE = new THREE.Quaternion().setFromUnitVectors(EJE_Y, new THREE.Vector3().crossVectors(DIR, EJE_Y).normalize());
const lugares = [];
let rNucI = 0.42, vert = false;
function colocar(asp) {   // anillo de órganos alrededor del núcleo, según el formato de pantalla
  vert = asp < 1; const rx = vert ? 0.82 : 1.42, ry = vert ? 0.85 : 1.08, rz = vert ? 0.35 : 0.55, sb = vert ? 0.32 : 0.4;   // cristales: algo más grandes, sus caras son casi transparentes rNucI = vert ? 0.32 : 0.42;
  lugares.length = 0;
  for (let k = 0; k < NS; k++) { const a = 0.38 + k * 6.2832 / NS, giro = a + 1.5708 + 0.5 * (hash(k + 6) - 0.5), incl = 0.5 * (hash(k + 8) - 0.5);
    lugares.push({ p: new THREE.Vector3(Math.cos(a) * rx, Math.sin(a) * ry, Math.sin(a + 0.9) * rz), s: sb * (0.9 + 0.22 * hash(k + 3)), q: new THREE.Quaternion().setFromEuler(new THREE.Euler(incl, 0, giro)) }); }
}
/* tramos de la historia leídos del propio texto: 0 acto 1 · 1-2 frases 2-3 · 3 acto 2 · 4-5 frases 4-5 · 6 acto 3 */
let anc = [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1];
function medirAnclas() {
  const m = raiz.scrollHeight - innerHeight; if (m <= 0) return;
  anc = ['a1', 'f2', 'f3', 'f3b', 'a2', 'f5', 'a3'].map((id, i) => { const e = document.getElementById(id); return i === 6 || !e ? 1 : clamp01((e.getBoundingClientRect().top + scrollY) / m); });
}
function tramoDe(x) { for (let i = 0; i < 6; i++) if (x <= anc[i + 1]) return i + clamp01((x - anc[i]) / Math.max(anc[i + 1] - anc[i], 1e-4)); return 6; }

/* ═══ ACTO 3 · Autopoiesis: partículas que intentan cerrar una esfera ═══ */
const centro3 = new THREE.Vector3(0, 0, -34), R3 = 1.8, KZ = 1, O3 = new THREE.Vector3(0, 0, -99);
const NP = chico ? 480 : 950;
const objetivo = new Float32Array(NP * 3), origen = new Float32Array(NP * 3), umbral = new Float32Array(NP), enHueco = new Uint8Array(NP);
const ojo = new THREE.Vector3(0.38, 0.22, 0.9).normalize();
for (let i = 0; i < NP; i++) {
  const y = 1 - (i + 0.5) / NP * 2, rr = Math.sqrt(1 - y * y), th = i * 2.399963;   // esfera de Fibonacci
  const d = new THREE.Vector3(Math.cos(th) * rr, y, Math.sin(th) * rr);
  objetivo.set([d.x * R3, d.y * R3, d.z * R3], i * 3);
  const dir = new THREE.Vector3(hash(i * 1.1) - 0.5, hash(i * 2.3) - 0.5, hash(i * 3.7) - 0.5).normalize(), rad = 2.3 + hash(i * 5.1) * 1.4;
  if (i % 2) { const r2 = 6 + hash(i * 5.1) * 4; origen.set([dir.x * r2, dir.y * r2, dir.z * r2], i * 3); }   // verdes: entran desde el tejido que rodea al órgano
  else { const vc = enCircuito(hash(i * 7.7), new THREE.Vector3()).multiplyScalar(20); origen.set([vc.x, vc.y, vc.z], i * 3); }   // dorados: salen del circuito
  umbral[i] = hash(i * 9.9); enHueco[i] = d.dot(ojo) > 0.8 ? 1 : 0;   // un casquete que nunca se cierra
}
const posP = new Float32Array(NP * 3), colP = new Float32Array(NP * 3);
const geoP = new THREE.BufferGeometry();
geoP.setAttribute('position', new THREE.BufferAttribute(posP, 3)); geoP.setAttribute('color', new THREE.BufferAttribute(colP, 3)); geoP.setAttribute('aCol', geoP.attributes.color);
const nube = new THREE.Points(geoP, new THREE.ShaderMaterial({ transparent: true, depthWrite: false, depthTest: false, blending: ADD,   // con máscara de lectura y sin niebla
  uniforms: Object.assign({}, U, { uSz: { value: chico ? 0.0019 : 0.0016 }, uOp: { value: 0 } }),
  vertexShader: `attribute vec3 aCol; uniform float uSz, uViewScale, uMax, uOp; uniform vec4 uMask; uniform vec4 uMask2; varying vec3 vC; varying float vA;
    void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; vec2 nd = gl_Position.xy / gl_Position.w;
      vA = uOp * smoothstep(uMask.x, uMask.y, nd.x) * smoothstep(uMask.z, uMask.w, nd.y) * (1.0 - smoothstep(uMask2.x, uMask2.y, nd.y)) * (1.0 - smoothstep(uMask2.z, uMask2.w, nd.x)); vC = aCol;
      gl_PointSize = min(uSz * uViewScale / max(-mv.z, 0.1), uMax * 2.0); }`,
  fragmentShader: `varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; gl_FragColor = vec4(vC, pow(max(1.0 - d, 0.0), 1.5) * vA); }` }));
nube.position.copy(centro3); escena.add(nube);
const nucleo3 = sprite(0xf0e4c8, 0, 2.0); nucleo3.material.fog = false; nucleo3.position.copy(centro3); escena.add(nucleo3);
const concha = new THREE.Mesh(GEO_ROBOT, robotMat(0xe3b85c)); concha.position.copy(centro3); concha.scale.set(8, 6, 8); concha.renderOrder = -1; concha.visible = false; escena.add(concha);   // el órgano robótico al que nos acercamos


/* plancton fino a lo largo de todo el descenso */
const M = chico ? 200 : 520, pp = new Float32Array(M * 3);
for (let i = 0; i < M; i++) { pp[i*3] = (Math.random() - 0.5) * 34 - 4; pp[i*3+1] = (Math.random() - 0.5) * 16; pp[i*3+2] = 6 - Math.random() * 46; }
const gPl = new THREE.BufferGeometry(); gPl.setAttribute('position', new THREE.BufferAttribute(pp, 3));
const plancton = new THREE.Points(gPl, new THREE.PointsMaterial({ map: TEX, color: 0x9fd49f, fog: false, size: 0.07, transparent: true, opacity: 0.28, depthWrite: false, blending: ADD }));
escena.add(plancton);

/* ═══ Recorrido de la cámara: Hermite por claves (continuo, sin cortes) ═══ */
// [progreso, cámara xyz, mira xyz]
const CLAVES = [
  [0.00, -9.0, 0.7, 10.5, -9.0, 0.0, 0.0],
  [0.12, -7.6, 0.6, 10.5, -7.6, 0.0, 0.0],
  [0.28, -1.6, 0.4, 9.0,   0.0, 0.0, 0.0],
  [0.40,  0.0, 0.2, 6.6,   0.0, 0.0, 0.0],
  [0.50,  0.5, 0.3, 6.3,  -0.2, 0.0, 0.0],
  [0.60,  0.8, 0.2, 6.0,   0.0, 0.0, 0.0],
  [0.70,  0.0, 0.0, -2.0,  0.0, 0.0, -14.0],
  [0.82,  0.0, 0.5, -14.0, 0.0, 0.0, -34.0],
  [1.00,  0.0, 0.7, -20.5, 0.0, 0.0, -34.0]
];
/* acto 1 → encuentro → envoltura → interior, por tramo s (0 = acto 1 … 5 = frase 5); en s = 5.25 empalma con CLAVES p = 0.60 */
const RUTA = [
  [0.00, -7.2, 0.7, 10.5, -7.2, 0.0, 0.0],
  [0.25, -2.4, 0.95, 6.6, -2.4, 0.62, 0.12],
  [0.50, -1.4, 0.95, 3.6, -1.85, 0.72, 0.2],
  [0.75, -0.8, 0.9, 5.4,  -1.5, 0.6, 0.2],
  [1.05,  0.2, 0.6, 6.6,   0.1, 0.35, 0.1],
  [1.55,  1.9, 0.6, 6.0,   1.0, 0.35, 0.2],
  [2.00,  2.5, 0.75, 4.9,  1.3, 0.4, 0.4],
  [2.45,  1.9, 0.6, 4.0,   1.0, 0.35, 0.45],
  [2.95,  0.6, 0.35, 5.6, -0.3, 0.05, 0.1],
  [3.50,  0.5, 0.3, 6.0,  -0.45, 0.0, 0.0],
  [4.50,  0.7, 0.25, 6.0, -0.4, 0.0, 0.0],
  [5.25,  0.8, 0.2, 6.0,   0.0, 0.0, 0.0]
];
let kz = 1, kzS = 1, claves = [];
function recalcClaves() {
  claves = CLAVES.map(c => { const o = c.slice(); if (kz !== 1) { if (o[3] > 8.5) o[3] *= kz; else if (o[3] < -12) o[3] = -34 + (o[3] + 34) * kz; } return o; });
}
const V = (c, o) => new THREE.Vector3(c[o], c[o+1], c[o+2]);
function rutaEn(claves, p, pos, mira) {
  let k = 0; while (k < claves.length - 2 && p > claves[k + 1][0]) k++;
  const c0 = claves[Math.max(k - 1, 0)], c1 = claves[k], c2 = claves[k + 1], c3 = claves[Math.min(k + 2, claves.length - 1)];
  const dp = c2[0] - c1[0], u = clamp01((p - c1[0]) / dp), u2 = u*u, u3 = u2*u;
  const h00 = 2*u3-3*u2+1, h10 = u3-2*u2+u, h01 = -2*u3+3*u2, h11 = u3-u2;
  for (const [off, out] of [[1, pos], [4, mira]]) {
    const p1 = V(c1, off), p2 = V(c2, off);
    const m1 = k === 0 ? p2.clone().sub(p1).multiplyScalar(0.5) : p2.clone().sub(V(c0, off)).multiplyScalar(dp / (c2[0] - c0[0]));
    const m2 = V(c3, off).sub(p1).multiplyScalar(dp / (c3[0] - c1[0]));
    out.copy(p1).multiplyScalar(h00).addScaledVector(m1, h10).addScaledVector(p2, h01).addScaledVector(m2, h11);
  }
}
let ANC = [[0, 0], [1, 4]], ancho = true, kD = 1, mascX = 0.3, porF = 0, xcR = 0;
function ajustar() {
  const w = innerWidth, h = innerHeight, asp = w / h, pr = renderer.getPixelRatio();
  renderer.setSize(w, h, false); renderer.getDrawingBufferSize(U.uRes.value); camara.aspect = asp;
  kz = asp < 1 ? 1 + (1 - asp) * 1.1 : 1; recalcClaves();
  // texto a la izquierda (escritorio) o abajo (celular): la escena se desplaza al lado libre y se apaga donde está el texto
  ancho = w >= 1000 && asp >= 1;
  if (ancho) {   // escritorio: la escena vive a la derecha de la columna de texto, y nunca pasa detrás de ella
    const col = document.querySelector('#origen .col'), cr = col ? col.getBoundingClientRect().right : w * 0.6, reg = Math.max(w - 110 - cr, 1), xc = cr + reg / 2;
    xcR = xc; camara.setViewOffset(w, h, -(xc - w / 2), 0, w, h); const nx = 2 * cr / w - 1; mascX = nx; U.uMask.value.set(nx - 0.01, nx + 0.1, -9, -8); U.uMask2.value.set(9, 10, 9, 10);
    kD = Math.min(Math.max(640 / reg, 1), 1.9);
  } else { camara.setViewOffset(w, h, 0, 0, w, h); U.uMask.value.set(-9, -8, 9, 10); U.uMask2.value.set(9, 10, 9, 10); kD = 1; }   // celular: la escena se ve solo por sus ventanas
  camara.updateProjectionMatrix();
  U.uViewScale.value = h * pr / (2 * Math.tan(THREE.MathUtils.degToRad(21))); U.uMax.value = 10 * pr;
  kzS = kz; colocar(asp); medirAnclas(); medirZ();
}
addEventListener('resize', ajustar); ajustar(); addEventListener('load', () => { ajustar(); }); if ('ResizeObserver' in window) new ResizeObserver(() => medirZ()).observe(document.body);

/* ═══ Cuadro ═══ */
let tPrev = 0, pObj = 0, p = 0, tUlt = performance.now(), fps = 0;
const T0 = performance.now(), Vp = new THREE.Vector3(), Vl = new THREE.Vector3(), Vc = new THREE.Vector3(), Vd = new THREE.Vector3();
const leerScroll = () => { const m = raiz.scrollHeight - innerHeight; pObj = m > 0 ? clamp01(scrollY / m) : 0; };
addEventListener('scroll', () => { leerScroll(); if (quieta) { p = pObj; lectura(1); pintar(7); } }, { passive: true }); leerScroll(); p = pObj;
window.__ESC = { get p() { return p; }, get s() { return tramoDe(p); }, get fps() { return fps; }, get rep() { return rep; }, saltar() { leerScroll(); p = pObj; }, prueba(Z) { zForz = Z; lectura(1); pintar(tEsc); zForz = null; return [camara.position.x, camara.position.y, camara.position.z, Vl.x, Vl.y, Vl.z, +lienzo.style.opacity || 1]; } };   // saltar y prueba: solo para verificar   // saltar: solo para capturas

const Vm = new THREE.Vector3();
function mascara(pos) { Vm.copy(pos).project(camara); const m = U.uMask.value; return suave(m.x, m.y, Vm.x) * suave(m.z, m.w, Vm.y) * (1 - suave(U.uMask2.value.x, U.uMask2.value.y, Vm.y)) * (1 - suave(U.uMask2.value.z, U.uMask2.value.w, Vm.x)); }   // misma máscara de lectura para los sprites
const PERIODO = 2.2, DREP = 7.5, CADA = 15;
const rep = { k: -1, t0: -99, sig: 0, ult: -99, n: 1 };   // reemplazo de órgano en curso
let sAnt = 0;
const radio = (i) => i === N - 1 ? 1.5 : TAM, desp = new Float32Array(N);
const PO_A = new THREE.Vector3(), PO_B = new THREE.Vector3(), A0 = new THREE.Vector3(), B0 = new THREE.Vector3(), PW = Array.from({ length: N }, () => Array.from({ length: 6 }, () => new THREE.Vector3())), PN = new Int32Array(N), PI = Array.from({ length: N }, () => new Float32Array(6)), Qp = new THREE.Quaternion();
function poro(i, dir, k) { if (PN[i] < 6) { PI[i][PN[i]] = k; PW[i][PN[i]++].copy(dir); } }
const Vg = new THREE.Vector3(), Vz = new THREE.Vector3(), Vo = new THREE.Vector3(), Va = new THREE.Vector3(), Vb = new THREE.Vector3(), Vk = new THREE.Vector3(), Vf = new THREE.Vector3(), Vh = new THREE.Vector3(), Vn = new THREE.Vector3(), Vdir = new THREE.Vector3();
const citas = Array.from(document.querySelectorAll('[data-b]')); citas.forEach(c => { c._b = +c.dataset.b; c._o = -1; });
const bez = (a, k, b, u, o) => o.copy(a).multiplyScalar((1 - u) * (1 - u)).addScaledVector(k, 2 * u * (1 - u)).addScaledVector(b, u * u);
function huespedEn(s, t, out) {
  if (s < 1.55) { const u = easeInOut(clamp01((s - 0.7) / 0.85)); bez(P_HILO, P_CTRL2, P_TOQUE, u, out); out.x += Math.sin(t * 0.5) * 0.07 * (1 - u) * suave(0.7, 0.9, s); out.y += Math.cos(t * 0.43) * 0.07 * (1 - u) * suave(0.7, 0.9, s); }
  else if (s < 2.4) out.copy(DIR).multiplyScalar(1.72 - 0.8 * easeInOut(clamp01((s - 1.55) / 0.8)));   // se hunde en la membrana
  else { const u = easeInOut(clamp01((s - 2.4) / 1.2)); Va.copy(DIR).multiplyScalar(0.92); Vb.copy(lugares[0].p); Vk.copy(Va).lerp(Vb, 0.5).addScaledVector(DIR, 0.2); bez(Va, Vk, Vb, u, out);
    out.x += Math.sin(t * 0.21) * 0.05 * u; out.y += Math.cos(t * 0.17) * 0.05 * u; out.z += Math.sin(t * 0.13) * 0.04 * u; }
  return out;
}

function pintar(t) {
  U.uT.value = t;
  const s = sEscena, p3 = s < 5.25 ? 0.6 : 0.6 + 0.4 * clamp01((s - 5.25) / 0.75);   // p3: el tramo final reusa la salida al acto 3 tal cual
  const finI = 1 - suave(0.0, 0.6, dentro3);   // encuadre final cerrado: dentro del órgano solo quedan las partículas
  const zoom = suave(2.35, 2.95, s), R = 1.5 + 7.5 * zoom, salida = (1 - suave(0.62, 0.74, p3)) * finI, inFoco = suave(2.45, 2.95, s);
  const wi = suave(2.45, 2.95, s) * (1 - suave(0.60, 0.68, p3)) * finI, wo = suave(2.88, 3.02, s) * (1 - suave(0.60, 0.68, p3)) * finI, organo0 = suave(3.4, 4.0, s);

  // el huésped primero: lo siguen la cámara y la membrana que lo envuelve
  huespedEn(s, t, Vg);
  const gsz = (s < 2.3 ? 0.42 : s < 3.0 ? 0.42 - 0.08 * suave(2.3, 3.0, s) : 0.34 + (lugares[0].s - 0.34) * suave(3.0, 3.8, s)) * (0.6 + 0.4 * suave(0.15, 0.45, s)) * (1 + 0.35 * (1 - suave(0.7, 1.2, s)));   // nace del hilo: la luz primero, luego las placas

  // cámara (antes que todo: la máscara de lectura y los aros la usan)
  if (s < 5.25) {
    rutaEn(RUTA, s, Vp, Vl);
    Vl.lerp(Vg, 0.75 * suave(1.9, 2.4, s) * (1 - suave(2.75, 3.3, s)));   // al entrar, la cámara sigue al huésped
    const kI = vert ? 1 + 0.45 * (1 - suave(5.0, 5.25, s)) : 1;   // celular: el anillo de órganos entra entero
    Vp.sub(Vl).multiplyScalar(1 + (kzS - 1) * (1 - suave(2.4, 2.9, s)) + (kI - 1) * suave(2.4, 2.9, s)).add(Vl);
    if (vert) { const cx = Vl.x * (s < 2.9 ? 0.55 : 1); Vl.x -= cx; Vp.x -= cx; }   // celular: encuadre centrado (el texto va abajo)
  } else { rutaEn(claves, p3, Vp, Vl);
    if (s >= 6) { const a = easeInOut(acer3), D = (30 - 21 * a) * (vert ? 1.35 : 1); Vl.copy(centro3); Vp.set(centro3.x + 1.2 * (1 - a), centro3.y + 0.8 * (1 - a) + 0.2, centro3.z + D); } }   // último acercamiento al órgano robótico
  if (ancho && s < 6) Vp.sub(Vl).multiplyScalar((kD + (1 - kD) * suave(0.08, 0.6, s) * (1 - suave(0.8, 1.9, s))) * (1 + 0.25 * porF)).add(Vl);   // escritorio: la escena cabe en la columna derecha
  if (zoomF > 0) {   // último acercamiento: la cámara elige un órgano-cristal del interior y entra en él (×400 → ×1000)
    const Lz = lugares[KZ]; O3.set(Math.sin(t * 0.21 + KZ * 1.7) * 0.05, Math.cos(t * 0.17 + KZ * 2.3) * 0.05, Math.sin(t * 0.13 + KZ) * 0.04).add(Lz.p);
    const a = easeInOut(zoomF), d0 = Math.max(Vp.distanceTo(O3), 0.2); Vz.copy(Vp).sub(O3).normalize();
    Vp.copy(O3).addScaledVector(Vz, d0 * Math.pow(0.17 / d0, a)); Vl.lerp(O3, easeInOut(Math.min(1, zoomF * 1.6)));
  } else O3.set(0, 0, -99);
  camara.position.copy(Vp);
  if (!quieta) camara.position.x += Math.sin(t * 0.17) * 0.12 * (1 - 0.7 * suave(1.2, 2.4, s) * (1 - suave(2.9, 3.4, s))) * (1 - zoomF);
  camara.lookAt(Vl); camara.updateMatrixWorld(); camara.getWorldDirection(Vdir);

  // frases del acto 2: aparecen suaves cerca de su momento y se van
  for (const c of citas) { const o = 1 - suave(0.16, 0.44, Math.abs(s - c._b)); if (Math.abs(o - c._o) > 0.004) { c._o = o; c.style.opacity = o.toFixed(3); } }

  // Acto 1 = calco de la web del libro + relevo; al pasarse la luz, las dos membranas se acercan hasta casi tocarse
  const rec = clamp01(s / 0.6), vis1 = 1 - suave(0.8, 1.35, s), acerca = 1 - suave(0.05, 0.2, s);
  const dt = Math.max(0, t - tPrev); tPrev = t;
  const g = (t / PERIODO) % (N + 1.4);
  desp.fill(0); PN.fill(0);
  for (let i = 0; i < N - 1; i++) { const x = g - i - 0.25, A = suave(-0.2, 0.15, x) * (1 - suave(0.6, 1.1, x)) * acerca, d = Math.max(PASO - radio(i) - radio(i + 1) - 0.32, 0) / 2 * A; desp[i] += d; desp[i + 1] -= d; }
  for (let i = 0; i < N; i++) {
    const c = celulas[i], u = c.userData, foco = u.foco, v = foco ? salida : vis1;
    c.visible = v > 0.01;
    c.scale.setScalar(foco ? R : TAM);
    const q0 = foco ? 1 - suave(0.6, 1.4, s) : 1;   // la anfitriona se aquieta para el encuentro
    c.position.set(u.x0 + desp[i], Math.sin(t * 0.45 + u.semilla) * 0.3 * q0, Math.cos(t * 0.3 + u.semilla) * 0.4 * q0);
    c.rotation.y = t * 0.12 + u.semilla; c.rotation.x = Math.sin(t * 0.2 + u.semilla) * 0.2;
    const a = g - i, objetivo = a < 0 ? 0.35 : a < 0.25 ? 0.35 + 0.65 * easeInOut(a / 0.25) : 1 - 0.4 * easeInOut(clamp01((a - 0.4) / 1.2));
    u.L = dt > 0 ? u.L + (objetivo - u.L) * (1 - Math.exp(-dt / 0.45)) : objetivo;
    const L = foco ? u.L + (0.55 - u.L) * suave(0.5, 1.0, s) : u.L,   // la anfitriona deja el relevo al empezar el encuentro: sin destello dorado en la membrana grande
      fe = foco ? 1 - suave(2.45, 2.75, s) : 1, mk = mascara(c.position);
    const um = u.mem.material.uniforms; um.uVida.value = v * fe; um.uBrillo.value = clamp01((L - 0.62) / 0.38) * 0.9;
    u.envo.material.uniforms.uVida.value = 0.0875 * L * v * fe;
    u.org.material.opacity = 0.8 * v * (foco ? 1 - suave(2.3, 2.6, s) : 1) * mk; u.org.rotation.y = t * 0.35 + u.semilla;
    const N3 = u.nucGrp, vis = v * mk * (foco ? 1 - suave(0.6, 0.66, p3) : 1); N3.visible = vis > 0.01;
    let ns = 1 + 0.04 * Math.sin(t * 0.9 + u.semilla);
    if (foco) { ns *= (0.36 + (rNucI - 0.36) * zoom) / (0.24 * R); N3.userData.aura.scale.setScalar(1.3 * (1 - 0.35 * zoom)); }   // el núcleo de la anfitriona es el núcleo del interior
    N3.scale.setScalar(ns);
    ajustarNucleo(N3, L, vis, t, u.semilla);
    if (foco) { N3.userData.nucleolo.material.opacity *= 1 - 0.75 * zoom; N3.userData.cuerpo.material.uniforms.uK.value *= 1 - 0.18 * zoom; }
    if (u.host) { u.host.visible = inFoco > 0.01 && salida > 0.01; const hu = u.host.material.uniforms; hu.uAlpha.value = 0.45 * inFoco * salida; hu.uVig.value = inFoco; hu.uSize.value = 0.03 * Math.pow(R / 1.5, 0.55); }
    if (foco) {   // invaginación: la membrana se pliega alrededor del huésped y se cierra; luego sana
      c.updateMatrixWorld(true); Vz.copy(Vg); u.mem.worldToLocal(Vz);
      um.uC.value.copy(Vz); um.uDir.value.copy(Vz).normalize(); um.uRw.value = 0.40 * (gsz / 0.42) / R;
      um.uK.value = suave(1.4, 1.75, s) * (1 - suave(2.3, 2.5, s));
    }
  }
  P_ENTRA.copy(DIR_E).multiplyScalar(0.58 * gsz).add(P_HILO);
  for (let i = 0; i < N - 1; i++) {
    const f = clamp01((g - i - 0.25) / 0.75), activo = g - i - 0.25 > 0 && g - i - 0.25 < 0.75, a = celulas[i].position, b = celulas[i + 1].position;
    const kk = (b.x - a.x) / PASO, rA = 0.24 * celulas[i].scale.x * celulas[i].userData.nucGrp.scale.x, rB = 0.24 * celulas[i + 1].scale.x * celulas[i + 1].userData.nucGrp.scale.x;
    PO_A.set(b.x - a.x, b.y - a.y + Math.PI * 0.7 * kk, b.z - a.z).normalize(); PO_B.set(a.x - b.x, a.y - b.y + Math.PI * 0.7 * kk, a.z - b.z).normalize();
    A0.copy(a).addScaledVector(PO_A, rA * 0.97); B0.copy(b).addScaledVector(PO_B, rB * 0.97);   // el hilo sale por un poro y llega a otro
    if (vis1 > 0.01 && s < 0.7) { const fp = clamp01((g - i - 0.25) / 0.75), act = g - i - 0.25 > -0.1 && g - i - 0.25 < 0.85; poro(i, PO_A, 0.25 + (act ? 0.75 * Math.exp(-fp * 9) : 0)); poro(i + 1, PO_B, 0.25 + (act ? 0.75 * Math.exp(-(1 - fp) * 9) : 0)); }   // el poro brilla al pasar la luz
    const arco = (s, o) => o.set(A0.x + (B0.x - A0.x) * s, A0.y + (B0.y - A0.y) * s + Math.sin(s * Math.PI) * 0.7 * kk, A0.z + (B0.z - A0.z) * s);
    const pos = lineas[i].geometry.attributes.position;
    const colL = lineas[i].geometry.attributes.color;
    for (let k = 0; k < 24; k++) { arco(k / 23, Vp);
      if (rec > 0) {   // el hilo se recoge como un cable: cada tramo se enrolla en espiral y es tragado hacia el punto de luz, el más lejano al final
        const a = clamp01(Math.abs(Vp.x - P_HILO.x) / 16), der = Vp.x > P_HILO.x, pull = easeInOut(clamp01((rec - 0.45 - a) / 0.4)) * (der ? 1 : 1 - suave(0.05, 0.13, a));
        Vp.lerp(der ? P_HILO : P_ENTRA, pull); }   // el último tramo entra por la arista y empalma con el circuito
      pos.setXYZ(k, Vp.x, Vp.y, Vp.z); const mkL = mascara(Vp); colL.setXYZW(k, 0.91, 0.72, 0.36, mkL); }   // máscara por vértice: nunca detrás del texto
    colL.needsUpdate = true;
    pos.needsUpdate = true;
    const mid = arco(0.5, Vd), op = vis1 * mascara(mid);
    lineas[i].visible = vis1 > 0.01 && s < 0.7; lineas[i].material.opacity = 0.22 * vis1 * (1 + 3.2 * suave(0.0, 0.15, s)) * suave(0.0, 0.25, mascara(Vz.copy(mid).lerp(P_HILO, rec))) * (1 - suave(0.62, 0.7, s));
    arco(easeInOut(f), paquetes[i].position); paquetes[i].visible = activo && vis1 > 0.01;
    paquetes[i].material.opacity = 0.9 * vis1 * mascara(paquetes[i].position) * suave(0, 0.08, f) * (1 - suave(0.92, 1, f)) * (1 - suave(0.55, 0.68, s));
  }
  plancton1.material.opacity = 0.45 * vis1;

  // Acto 2: huésped → vesícula → órgano; órganos que laten, se miden y se reemplazan sin cortar su hilo
  interior.visible = wi > 0.01;
  const gVis = suave(0.02, 0.12, s) * (1 - suave(0.6, 0.66, p3)) * finI;
  huesped.grp.visible = gVis > 0.01;
  if (!quieta && wi > 0.6 && zoomF === 0) {
    if (rep.sig === 0) rep.sig = t + 4;
    if (rep.k >= 0 && t - rep.t0 > DREP) { rep.k = -1; cond.visible = false; }
    const llega = s > 4.4 && sAnt <= 4.4;   // al acercarse el párrafo 4, si no hubo uno hace poco, empieza uno
    if (rep.k < 0 && (t >= rep.sig || (llega && t - rep.ult > 9))) {
      let k = rep.n++ % NS; if (k === 0 && s < 4.3) k = rep.n++ % NS;
      rep.k = k; rep.t0 = t; rep.ult = t; rep.sig = t + CADA; organos[k].grp.add(cond); cond.visible = true;
    }
  }
  sAnt = s;
  Vh.copy(celulas[N - 1].position);
  for (let k = 0; k < NS; k++) {
    const o = organos[k], Lg = lugares[k], es0 = k === 0, W = es0 ? gVis : wo;
    if (!(es0 ? huesped.grp.visible : interior.visible)) continue;
    if (es0) Vo.copy(Vg); else Vo.set(Math.sin(t * 0.21 + k * 1.7) * 0.05, Math.cos(t * 0.17 + k * 2.3) * 0.05, Math.sin(t * 0.13 + k) * 0.04).add(Lg.p);
    const mk = mascara(Vo), ko = es0 ? organo0 : 1;
    const ph = (t / o.T + o.fase) % 1, lat = Math.exp(-ph * 6) * ko;                       // latido propio
    const per = 4.2 + 0.9 * k, TR = 1.6, fp = (t + k * 1.37) % per, viaja = fp < TR, fv = easeInOut(fp / TR), flash = viaja ? 0 : Math.exp(-(fp - TR) * 2.2) * ko;   // pulso núcleo → órgano
    let vida = 1, desat = 0, esc = 1, hueco = 0;
    if (rep.k === k && (!es0 || s > 4)) {
      const u = (t - rep.t0) / DREP; hueco = suave(0.15, 0.4, u) * (1 - suave(0.7, 0.95, u));
      if (u < 0.5) { vida = 1 - suave(0.12, 0.45, u); desat = suave(0, 0.25, u); esc = 1 - 0.25 * suave(0.05, 0.45, u); }   // pierde brillo, se desatura, se apaga
      else { vida = suave(0.6, 0.95, u); esc = 0.8 + 0.2 * suave(0.5, 1, u); }                                                   // uno nuevo se condensa en el mismo lugar
      const cnd = suave(0.36, 0.55, u) * (1 - suave(0.8, 0.98, u)), cv = easeInOut(suave(0.38, 0.9, u)), pc = cond.geometry.attributes.position;
      for (let i = 0; i < NCOND * 3; i++) pc.array[i] = condIni[i] + (condDest[i] - condIni[i]) * cv + Math.sin(t * 0.8 + i * 1.3) * 0.05 * (1 - cv);
      pc.needsUpdate = true; cond.material.opacity = cnd * W * mk;
    }
    const tam = (es0 ? gsz : Lg.s) * esc * (1 + 0.05 * Math.round(lat * 3) / 3) * (es0 ? 1 : 0.55 + 0.45 * suave(2.88, 3.3, s));   // los órganos se condensan al entrar, sin fantasmas
    o.grp.position.copy(Vo); o.grp.scale.setScalar(tam);
    if (es0) { o.grp.quaternion.slerpQuaternions(Q_TOQUE, Lg.q, suave(2.5, 3.6, s)); if (s < 1.2) o.grp.quaternion.slerp(Q_HILO, 1 - suave(0.7, 1.2, s)); o.grp.rotateY(t * 0.22); tenir(o, organo0); o.m.material.uniforms.uArmar.value = suave(0.28, 0.66, s); }
    else { o.grp.quaternion.copy(Lg.q); o.grp.rotateZ(0.06 * Math.sin(t * 0.3 + k)); o.grp.rotateY(t * 0.22 + k); }
    const mu = o.m.material.uniforms;
    mu.uVida.value = W * vida * mk * (k === KZ ? 1 - suave(0.0, 0.3, dentro3) : 1); mu.uDesat.value = desat;   // al entrar, primero se va el cristal; la cápsula queda un poco más
    mu.uBrillo.value = 0.3 * (1 - ko) + (0.1 + 0.55 * flash + 0.3 * lat) * ko;
    o.envo.material.opacity = 0.085 * W * vida * mk * (1 + 0.8 * flash + 0.4 * lat);
    o.dots.material.opacity = 0.35 * W * vida * mk; o.dots.rotation.y = t * 0.3 + k;
    const ca = W * vida * mk * (es0 ? suave(0.15, 0.5, s) : 1) * (k === KZ ? 1 - suave(0.3, 0.85, dentro3) : 1);   // dentro, el circuito se deshace en partículas   // el circuito: el hilo de afuera, ya adentro
    const cpu = o.caps.material.uniforms; cpu.uVida.value = 0.9 * ca; cpu.uBrillo.value = 0.35 + 0.5 * flash + (k === KZ ? 0.6 * zoomF : 0);   // en el zoom, la cápsula es la protagonista
    o.circ.children[0].material.opacity = 0.7 * ca; o.circ.children[1].material.opacity = 0.9 * ca;
    for (let j = 0; j < 2; j++) { const q = o.pul[j], u = (t * 0.32 + j * 0.5 + k * 0.17) % 1; enCircuito(u, q.position); q.material.opacity = ca * suave(0, 0.05, u) * (1 - suave(0.94, 1, u)); }
    o.luz.material.opacity = (0.3 * (1 - ko) + (0.08 + 0.4 * flash) * ko) * W * vida * mk;   // la luz del linaje, adentro
    if (!interior.visible) continue;
    // hilo al núcleo: nunca se corta; por él viaja la luz
    const gl = es0 ? suave(3.5, 4.05, s) : 1, h = hilos[k];
    Va.copy(Vo).sub(Vh); const len = Va.length(); Va.divideScalar(len);
    Vb.copy(Vh).addScaledVector(Va, rNucI * 0.97); if (wo > 0.01) poro(N - 1, Va, 0.25 + (viaja ? 0.75 * Math.exp(-fv * 8) : 0)); o.grp.updateMatrixWorld(); o.grp.localToWorld(Vf.copy(ENTRADA));   // nace en un poro del núcleo y entra por la arista del cristal   // nace en el borde del núcleo y entra por la arista del cristal, donde empieza su circuito
    Vk.copy(Vb).lerp(Vf, 0.5).addScaledVector(Vn.crossVectors(Va, Vdir).normalize(), 0.1 * len * (k % 2 ? 1 : -1));
    const pos = h.geometry.attributes.position, col = h.geometry.attributes.color;
    for (let j = 0; j < NH; j++) { const v = j / (NH - 1); bez(Vb, Vk, Vf, v, Vz); pos.setXYZ(j, Vz.x, Vz.y, Vz.z);
      const br = 0.3 + (viaja && gl >= 1 ? 2.2 * Math.exp(-Math.pow((v - fv) / 0.09, 2)) : 0) + 0.35 * flash * v;
      col.setXYZ(j, ORO_C.r * br, ORO_C.g * br, ORO_C.b * br); }
    pos.needsUpdate = col.needsUpdate = true; h.geometry.setDrawRange(0, Math.round(NH * gl));
    bez(Vb, Vk, Vf, 0.5, Vz); h.material.opacity = 0.75 * wo * mascara(Vz) * (1 - suave(0.3, 0.8, zoomF));
    const q = pulsos[k]; q.visible = viaja && gl >= 1;
    if (q.visible) { bez(Vb, Vk, Vf, fv, q.position); q.material.opacity = 0.9 * wo * (1 - suave(0.3, 0.8, zoomF)) * mascara(q.position) * suave(0, 0.1, fv) * (1 - suave(0.9, 1, fv)); }
    // su medición: un aro tenue que late, y un eco que se abre en cada latido
    const on = es0 ? suave(3.8, 4.3, s) : 1, rr = Lg.s * 1.25, ar = aros[k], ec = ecos[k];
    ar.position.copy(Vo); ar.quaternion.copy(camara.quaternion); ar.scale.setScalar(rr * (1 + 0.04 * lat)); ar.material.opacity = (0.07 + 0.15 * lat + 0.2 * hueco) * wo * mk * on;
    ec.position.copy(Vo); ec.quaternion.copy(camara.quaternion); ec.scale.setScalar(rr * (1 + 0.55 * ph)); ec.material.opacity = 0.13 * Math.pow(1 - ph, 2) * wo * mk * on;
  }
  const ve = suave(2.1, 2.35, s) * (1 - suave(3.2, 3.7, s)) * gVis;   // la envoltura que lo guarda
  vesicula.visible = ve > 0.01;
  if (vesicula.visible) { vesicula.position.copy(Vg); vesicula.scale.setScalar(0.40 * gsz / 0.42); const vu = vesicula.material.uniforms; vu.uVida.value = 0.85 * ve * mascara(Vg); vu.uBrillo.value = 0.2; }
  citoInt.material.uniforms.uAlpha.value = 0.24 * wi;

  // Acto 3: se arma hasta ~80 % y se deshace
  const w3 = suave(0.0, 0.4, dentro3);
  nube.visible = nucleo3.visible = w3 > 0.01; concha.visible = false;
  if (nube.visible) {
    nube.position.copy(O3); nube.scale.setScalar(0.02); nucleo3.position.copy(O3); nucleo3.scale.setScalar(0.07);
    const ph = (t % 11) / 11, MAX = 0.82;
    const nivel = ph < 0.7 ? easeInOut(ph / 0.7) * MAX : ph < 0.82 ? MAX : MAX * (1 - easeInOut((ph - 0.82) / 0.18));
    const nv2 = nivel * suave(0.35, 1, dentro3);   // al entrar, las partículas aún están sueltas
    const tiembla = ph >= 0.7 && ph < 0.82 ? 1 : 0.35;
    for (let i = 0; i < NP; i++) {
      let jn = easeInOut(clamp01((nv2 - umbral[i] * 0.85) / 0.1));
      if (enHueco[i]) jn = Math.min(jn, 0.6 + 0.12 * Math.sin(t * 1.7 + i));   // se acerca al hueco y no entra
      const i3 = i * 3, deriva = (1 - jn) * 0.55, j = tiembla * 0.04 * jn;
      posP[i3]   = origen[i3]   + (objetivo[i3]   - origen[i3])   * jn + Math.sin(t * 0.6 + i) * deriva + Math.sin(t * 9 + i * 1.7) * j;
      posP[i3+1] = origen[i3+1] + (objetivo[i3+1] - origen[i3+1]) * jn + Math.cos(t * 0.5 + i * 1.3) * deriva + Math.cos(t * 8 + i) * j;
      posP[i3+2] = origen[i3+2] + (objetivo[i3+2] - origen[i3+2]) * jn + Math.sin(t * 0.4 + i * 0.7) * deriva;
      const br = 0.45 + 0.55 * jn;
      if (i % 2) { colP[i3] = 0.3 * br; colP[i3+1] = 1.0 * br; colP[i3+2] = 0.45 * br; }   // verde claro y saturado: humano
      else { colP[i3] = 1.0 * br; colP[i3+1] = 0.7 * br; colP[i3+2] = 0.12 * br; }        // dorado brillante: máquina
    }
    geoP.attributes.position.needsUpdate = true; geoP.attributes.color.needsUpdate = true;
    nube.material.uniforms.uOp.value = 0.85 * w3;
    nucleo3.material.opacity = (0.02 + 0.06 * nivel) * w3 * mascara(O3) * (0.85 + 0.15 * Math.sin(t * 2));
    nube.rotation.y = Math.sin(t * 0.1) * 0.25;
    concha.rotation.y = t * 0.05; const cu = concha.material.uniforms; cu.uVida.value = 0.32 * w3 * (1 - suave(0.25, 0.7, acer3)); cu.uBrillo.value = 0.3;
  }
  plancton.material.opacity = 0.28 * (1 - 0.7 * wi) * finI;
  for (let i = 0; i < N; i++) {   // poros iluminados: direcciones del mundo → locales del núcleo
    const cu = celulas[i].userData.nucGrp.userData.cuerpo, nu = cu.material.uniforms; nu.uNP.value = PN[i]; for (let j = 0; j < 6; j++) nu.uPorI.value[j] = PI[i][j];
    if (PN[i]) { celulas[i].updateMatrixWorld(true); cu.getWorldQuaternion(Qp).invert(); for (let j = 0; j < PN[i]; j++) nu.uPoros.value[j].copy(PW[i][j]).applyQuaternion(Qp); }
  }
  renderer.render(escena, camara);
}

/* MODO LECTURA: con un bloque de texto centrado, la escena baja a ~40 % de brillo y va más lenta; entre bloques vuelve a pleno.
   En celular, la máscara sigue el borde superior del texto: nada pasa detrás de él. */
/* ESCENA POR SECCIÓN (13.ª vuelta). Coordenada Z según el scroll (línea central de la pantalla):
   0-1 linaje (portada → antes y después) · 1-2 «The method»: el hilo se recoge en un organismo dorado, la célula lo envuelve y la cámara entra
   · 2-3 «Prose, then proof»: interior, órganos dorados en tejido verde, con reemplazo · 3-4 autopoiesis (partículas verdes y doradas).
   Dorado = máquina; verde = humano; núcleo crema = la memoria de la persona. */
function $(id) { return document.getElementById(id); }   // declaración (se usa antes, desde ajustar)
const interp = (x, X, Y) => { if (x <= X[0]) return Y[0]; for (let i = 0; i < X.length - 1; i++) if (x <= X[i + 1]) return Y[i] + (Y[i + 1] - Y[i]) * (x - X[i]) / Math.max(X[i + 1] - X[i], 1e-6); return Y[Y.length - 1]; };
const VALS = [10, 40, 100, 400, 600, 1000];
const regla = document.querySelector('.regla'), ind = regla && regla.querySelector('.ind'), indN = ind && ind.querySelector('.num'), aum = document.querySelector('.aumento'), leyenda = document.querySelector('.leyenda');
const ventanas = Array.from(document.querySelectorAll('.ventana'));
let zForz = null, sEscena = 0, lect = 0, tEsc = 7, Zs = 0, acer3 = 0, zoomF = 0, dentro3 = 0;
function medirZ() {   // anclas en coordenadas del documento
  const h = innerHeight, y = (el, f) => { if (!el) return 0; const r = el.getBoundingClientRect(); return r.top + scrollY + r.height * f; };
  const fin = Math.max(raiz.scrollHeight - h / 2, h);
  let A;
  let ZV = [0, 1, 2, 3, 4];
  if (ancho) { A = [h / 2, y($('metodo'), 0) - h * 0.6, y($('metodo'), 0) + h * 0.5, y($('pruebas'), 0) + h * 0.3, y($('funciona'), 0) + h * 0.1, fin]; ZV = [0, 1, 1.5, 2, 3, 4]; }
  else { const vt = document.querySelector('.v-trans'), va = document.querySelector('.v-auto'); A = [h / 2, y(vt, 0) - h * 0.45, y(vt, 1) + h * 0.45, y(va, 0) - h * 0.5, fin]; }
  for (let i = 1; i < A.length; i++) A[i] = Math.max(A[i], A[i - 1] + 1);
  ANC = A.map((v, i) => [v, ZV[i]]);
}
function suaveI(x, X, Y) {   // Hermite monótona (Fritsch–Carlson): pasa por los mismos puntos, sin quiebres de velocidad
  const n = X.length; if (x <= X[0]) return Y[0]; if (x >= X[n - 1]) return Y[n - 1];
  let i = 0; while (x > X[i + 1]) i++;
  const dx = (j) => X[j + 1] - X[j], m = (j) => (Y[j + 1] - Y[j]) / Math.max(dx(j), 1e-6);
  const tg = (j) => { if (j === 0) return m(0); if (j === n - 1) return m(n - 2); const a = m(j - 1), b = m(j); return a * b <= 0 ? 0 : 3 * (dx(j - 1) + dx(j)) / ((2 * dx(j) + dx(j - 1)) / a + (dx(j) + 2 * dx(j - 1)) / b); };
  const h = dx(i), u = (x - X[i]) / h, u2 = u * u, u3 = u2 * u;
  return (2 * u3 - 3 * u2 + 1) * Y[i] + (u3 - 2 * u2 + u) * h * tg(i) + (-2 * u3 + 3 * u2) * Y[i + 1] + (u3 - u2) * h * tg(i + 1);
}
function sDeZ(Z) { return suaveI(Z, [0, 1, 1.5, 1.68, 1.84, 2, 2.5, 3, 4], [0, 0, 0.7, 1.45, 2.45, 3.3, 4.05, 4.5, 4.5]); }   // ya no hay salto: el final ocurre dentro del interior
function lectura(dt) {
  const h = innerHeight, inst = dt >= 1, Zt = zForz !== null ? zForz : suaveI(scrollY + h / 2, ANC.map(a => a[0]), ANC.map(a => a[1]));
  Zs = inst ? Zt : Zs + (Zt - Zs) * (1 - Math.exp(-dt * 4));
  sEscena = sDeZ(Zs); acer3 = clamp01(Zs - 3); zoomF = clamp01((Zs - 2.75) / 0.5); dentro3 = clamp01((Zs - 3.1) / 0.3);
  const fundido = 1;   // sin fundido: una sola cámara entra en el mismo órgano                     // interior → autopoiesis: mundos distintos, fundido corto
  const port = $('portada').getBoundingClientRect(), kL = 1 - suave(0.45, 0.8, clamp01(port.bottom / h));
  lect += (kL - lect) * (inst ? 1 : 1 - Math.exp(-dt * 2.5));             // modo lectura: fuera de la portada, la escena acompaña atenuada
  const tenue = 1 - 0.45 * suave(-0.2, 0.2, (h / 2 - $('preguntas').getBoundingClientRect().top) / h);   // Preguntas y Empezar: más tenue
  const op = (fundido * (1 - 0.35 * lect) * tenue).toFixed(3); U.uComp.value = 1 / Math.max(+op, 0.45);   // el núcleo conserva su brillo propio con el modo lectura if (lienzo.style.opacity !== op) lienzo.style.opacity = op;
  // regla del microscopio: el indicador baja y el aumento crece
  const mi = interp(Zs, [0, 1, 2, 2.75, 3.3, 4], [0, 1, 3, 3, 4.9, 5]), i = Math.min(Math.floor(mi), 4), tx = '×' + Math.round(VALS[i] * Math.pow(VALS[i + 1] / VALS[i], mi - i));
  if (ind) { ind.style.transform = `translateY(${(mi / 5 * regla.clientHeight).toFixed(1)}px)`; if (indN.textContent !== tx) indN.textContent = tx; }
  if (aum && aum.textContent !== tx) aum.textContent = tx;
  if (leyenda) { const f = String(Zs < 1 ? 0 : Zs < 2 ? 2 : Zs < 3.1 ? 3 : 4); if (leyenda.dataset.on !== f) leyenda.dataset.on = f; }
  porF = ancho ? 1 - suave(0.05, 0.4, Zs) : 0;   // portada: la escena se aleja un poco para caber en el recuadro de la FIG. 1
  if (ancho) {   // escritorio: en la portada la escena queda dentro del recuadro de la FIG. 1; al bajar, se libera de a poco
    const cj = document.querySelector('.fig1 .caja').getBoundingClientRect(), fv = clamp01((Math.min(cj.bottom, h) - Math.max(cj.top, 0)) / cj.height);
    const xl = mascX + ((2 * cj.left / innerWidth - 1) - mascX) * fv, yb = fv > 0 ? 1 - 2 * cj.bottom / h - (1 - fv) * 3 : -9, yt = 1 - 2 * cj.top / h;
    const xb = (cj.left + cj.right) / 2, xcc = xcR + (xb - xcR) * porF; camara.setViewOffset(innerWidth, h, -(xcc - innerWidth / 2), 0, innerWidth, h);   // en la portada, la escena se centra en su recuadro
    U.uMask.value.set(xl - 0.01, xl + 0.05, yb, yb + 0.05); const xr = 2 * cj.right / innerWidth - 1 + (1 - fv) * 3; if (fv > 0) U.uMask2.value.set(yt - 0.05, yt, xr - 0.05, xr); else U.uMask2.value.set(9, 10, 9, 10);
  }
  if (!ancho) {   // celular: la escena solo se ve dentro de la ventana más visible
    let mejor = 0, rb = null;
    for (const v of ventanas) { const r = v.getBoundingClientRect(), vis = Math.min(r.bottom, h) - Math.max(r.top, 0); if (vis > mejor) { mejor = vis; rb = r; } }
    if (rb) { const yb = 1 - 2 * rb.bottom / h, yt = 1 - 2 * rb.top / h; const xl = -1 + 2 * rb.left / innerWidth; U.uMask.value.set(xl, xl + 0.05, yb, yb + 0.08); U.uMask2.value.set(yt - 0.08, yt, 9, 10); }
    else { U.uMask.value.set(-9, -8, 9, 10); U.uMask2.value.set(9, 10, 9, 10); }
  }
}
let andando = false;
function bucle(now) {
  if (!andando) return;
  const dt = Math.min((now - tUlt) / 1000, 0.1); tUlt = now;
  if (dt > 0) fps = fps ? fps * 0.95 + (1 / dt) * 0.05 : 1 / dt;
  p += (pObj - p) * (1 - Math.exp(-dt * 3.2));            // inercia: la cámara sigue al scroll con amortiguación
  lectura(dt); tEsc += dt * (1 - 0.4 * lect); pintar(tEsc);
  requestAnimationFrame(bucle);
}
function arrancar() { if (andando || quieta) return; andando = true; tUlt = performance.now(); requestAnimationFrame(bucle); }
document.addEventListener('visibilitychange', () => { if (document.hidden) andando = false; else arrancar(); });
addEventListener('resize', () => { if (quieta) pintar(7); });
if (quieta) { lectura(1); pintar(7); } else arrancar();
