/* D231: la traducción de la portada vive aparte de la escena 3D (auditoría de GPT del sitio: si el módulo de Three.js falla,
   la portada no debe quedar en inglés ni invisible). Script clásico, sin dependencias. */
(function () {
const TXT = {
  es: { // BORRADOR-MARCO
    n_ini: 'INICIO', n_sim: 'SIMBIOSIS', n_endo: 'ENDOSIMBIOSIS', n_emp: 'EMPEZAR', // BORRADOR-MARCO
    r_lin: 'LINAJE', r_org: 'ÓRGANOS', r_aut: 'AUTORREPARACIÓN', // BORRADOR-MARCO
    f1_t: 'FIG. 1 · LINAJE.', f1_c: 'Cada sesión es una célula, y las células cambian. El hilo que las atraviesa es lo que queda; la luz que lleva es lo que una sesión entrega a la siguiente.', // BORRADOR-MARCO
    f2_t: 'FIG. 2 · INTEGRACIÓN.', f2_c: 'El linaje se condensa y pasa a formar parte del sistema.', // BORRADOR-MARCO
    f3_t: 'FIG. 3 · ÓRGANOS.', f3_c: 'Órganos-máquina dentro del sistema, que se reincorporan en cada célula nueva para vigilar su continuidad y su salud.', // BORRADOR-MARCO
    f4_t: 'FIG. 4 · AUTORREPARACIÓN.', f4_c: 'Dentro de los órganos nacen microorganismos que sostienen el sistema cuando crece. En construcción.', // BORRADOR-MARCO
    h_ceja: 'UNA DISCIPLINA PARA EL TRABAJO ENTRE PERSONAS E IA', // BORRADOR-MARCO
    h_t: 'Ninguna especie prospera sola.', // BORRADOR-MARCO
    lema: 'Primero las palabras. Código cuando las palabras fallan.', // BORRADOR-MARCO
    h_def: 'Simbiosis es un pacto de convivencia entre personas e IA: leyes que protegen al usuario, código cuando la prosa ya no alcanza, y un sistema que se audita a sí mismo, bajo veto humano.', // BORRADOR-MARCO
    h_b1: 'Cómo instalar', h_b2: 'Simbiosis 2.1', h_b3: 'Endosimbiosis 1.1', h_b4: 'Autopoiesis · en construcción', // BORRADOR-MARCO
    h_s1: '● ESTUDIO CON REVISIÓN POR PARES · HAI \'26', h_s2: '● FUNCIONA CON CLAUDE CODE, CODEX Y ANTIGRAVITY', h_s3: '● ABIERTO · CC BY-SA 4.0', h_s4: '● LINUX · WINDOWS · MAC', // BORRADOR-MARCO
    o_ceja: 'ORIGEN', o_t: 'Nació de la práctica diaria, no de un laboratorio.', // BORRADOR-MARCO
    o_p: 'Cada regla de Simbiosis existe porque antes algo salió mal: un acuerdo que la IA olvidó, un error que repitió, un trabajo que destruyó. Cada falla se registró como dato. Cada regla que falló dos veces se volvió código.', // BORRADOR-MARCO
    p_ceja: 'EL PROBLEMA, MEDIDO', p_t: 'Una memoria que no puedes verificar es peor que no tener memoria.', // BORRADOR-MARCO
    p_p: 'En un estudio controlado, un agente con la memoria corrupta llevó falsedades a su salida ejecutable en las tres tareas. Con la memoria correcta, o sin ninguna memoria, no cometió ninguno de esos errores. La prosa sola no alcanza para mantener limpia una memoria.', // BORRADOR-MARCO
    p_cita: 'Giribaldi, HAI \'26 · doi:10.1145/3841580.3845736 (en prensa) · Póster Track C n.º 27 · ID 1166', // BORRADOR-MARCO
    p_l1: 'TAREAS CON FALSEDADES · MEMORIA CORRUPTA', p_l2: 'TAREAS CON FALSEDADES · SIN MEMORIA', p_l3: 'TAREAS CON FALSEDADES · MEMORIA CORRECTA', // BORRADOR-MARCO
    ba_ceja: 'ANTES Y DESPUÉS', ba_sin: 'SIN SYMBIOSIS', ba_con: 'CON SYMBIOSIS', // BORRADOR-MARCO
    ba_a1: 'Cada sesión empieza en blanco.', ba_b1: 'Cada sesión retoma donde terminó la anterior.', // BORRADOR-MARCO
    ba_a2: 'Vuelves a explicarlo todo.', ba_b2: 'El núcleo recuerda; tú decides.', // BORRADOR-MARCO
    ba_a3: 'Una IA puede destruir tu trabajo.', ba_b3: 'Lo que sobra se aparta; vaciar es tuyo.', // BORRADOR-MARCO
    ba_a4: 'Confías en lo que dice.', ba_b4: 'Cada afirmación muestra dónde buscó.', // BORRADOR-MARCO
    ba_a5: 'El mismo error vuelve.', ba_b5: 'Un error que se repite se vuelve código.', // BORRADOR-MARCO
    m_ceja: 'EL MÉTODO · TRES ETAPAS', m_t: 'Cada etapa empieza donde la anterior llega a su límite.', // BORRADOR-MARCO
    m1_e: '● PUBLICADO · V2.1', m1_s: 'integración humano–IA basada en el linaje', // BORRADOR-MARCO
    m1_p: 'Leyes, todavía en prosa, que protegen al usuario. La memoria vive fuera de la máquina y la persona sigue a cargo de ella. La máquina verifica, nombra y propone; la persona decide, juzga y ejecuta.', // BORRADOR-MARCO
    m1_l: 'Su límite: la prosa se contamina.', m1_a1: 'Lee el manual (v2.1)', // BORRADOR-MARCO
    m2_e: '● PUBLICADO · V1.1', m2_a1: 'Lee la página e instala el kit', m2_s: 'gobernanza de la prosa al código', // BORRADOR-MARCO
    m2_p: 'Cuando la prosa ya no alcanza, las reglas se vuelven código. Cada componente que el sistema adopta se convierte en un órgano con una función declarada y una prueba que demuestra que está vivo. La supervisión pasa de la ejecución a la medición.', // BORRADOR-MARCO
    m2_l: 'Su límite: el código crece y hay que vigilarlo.', m2_ya: 'Ya funciona: diez piezas (el guardián, el canario, el filtro de secretos…), probadas en Linux, Windows y Mac.', // BORRADOR-MARCO
    m3_e: '● EN CONSTRUCCIÓN · PRIMEROS ÓRGANOS ACTIVOS', m3_s: 'microorganismos que sostienen el sistema cuando crece', // BORRADOR-MARCO
    m3_p: 'Un sistema que se audita y se organiza a sí mismo para preservar la simbiosis. Se juzga con pruebas deterministas, nunca con la opinión de otro modelo; el reparador nunca se repara a sí mismo, y el veto humano sube de nivel.', // BORRADOR-MARCO
    m3_l: 'Ya en marcha: un doctor diario e invariantes que se verifican solos.', // BORRADOR-MARCO
    pr_ceja: 'DE LA PALABRA AL CÓDIGO', pr_t: 'Cada regla nace como ley escrita; si las palabras fallan, el código se encarga de que se respete.', // BORRADOR-MARCO
    c1: 'regla en prosa', c2: 'olvidada', c3: 'registrada como dato', c4: 'olvidada otra vez', c5: 'se vuelve código', c6: 'se verifica a diario', // BORRADOR-MARCO
    q1: '«Lo que sobra se aparta; vaciar es tuyo.»', q2: '«Una regla olvidada dos veces se vuelve código.»', // BORRADOR-MARCO
    q3: '«Nunca digas “no existe” sin decir dónde buscaste.»', q4: '«Quien escribe una regla nunca la revisa.»', // BORRADOR-MARCO
    w_ceja: 'FUNCIONA DONDE TRABAJAS', w_t: 'El método no está atado a una sola interfaz ni a un solo modelo.', // BORRADOR-MARCO
    w1_t: 'Cualquier terminal', w1_p: 'Todo el método funciona en una consola simple, con menos gráficos y las mismas reglas.', // BORRADOR-MARCO
    w2_t: 'Cabina en Herdr', w2_p: 'Un espacio de trabajo en terminal con una cabina en vivo: órganos, reglas y pendientes de un vistazo.', // BORRADOR-MARCO
    w3_t: 'Varios modelos, también locales', w3_p: 'El mismo núcleo funciona con Claude Code, Codex, Antigravity y modelos locales como Qwen. Cambia el modelo; el método se queda.', // BORRADOR-MARCO
    t_ceja: 'QUÉ ESTAMOS PROBANDO', t_nl: '● LOS PRIMEROS RESULTADOS SON POSITIVOS', // BORRADOR-MARCO
    t_n: '— varios de estos mecanismos ya funcionan a diario y cumplen lo previsto. Siguen siendo hipótesis hasta medirlos con más personas y más tiempo.', // BORRADOR-MARCO
    h1: 'Una memoria externa curada reduce las reexplicaciones y las decisiones perdidas, frente a no tener memoria o tener una acumulada.', // BORRADOR-MARCO
    h2: 'Convertir una regla en código tras dos incumplimientos reduce la repetición de esa clase de falla.', // BORRADOR-MARCO
    h3: 'Separar autor y verificador detecta más errores que la autorrevisión.', // BORRADOR-MARCO
    h4: 'Con el método, expertos que no programan producen software que funciona en su propio campo.', // BORRADOR-MARCO
    f_ceja: 'PREGUNTAS', // BORRADOR-MARCO
    fq1: '¿Necesito saber programar?', fa1: 'No. El núcleo son unas pocas notas breves de texto; el modelo las lee y las mantiene al día.', // BORRADOR-MARCO
    fq2: '¿Con qué modelos funciona?', fa2: 'Con Claude Code, Codex o Antigravity, y también con modelos locales como Qwen, en tu propia máquina. Si cambias de modelo, el método sigue contigo.', // BORRADOR-MARCO
    fq3: '¿Mis datos salen de mi computadora?', fa3: 'El núcleo son archivos simples en tu máquina, bajo tu control. Lo que envías al modelo lo decides tú.', // BORRADOR-MARCO
    e_ceja: 'EMPEZAR', e_t: 'Empieza a trabajar junto a la máquina; la última palabra sigue siendo tuya.', // BORRADOR-MARCO
    e1_t: 'Lee el manual', e1_p: 'Simbiosis v2.1 · gratis · español e inglés', e2_t: 'Arma tu núcleo', e3_t: 'Instala Endosimbiosis', soon: 'pronto', e3_d: 'Descarga el kit 1.1', e3_r1: 'Python 3.10 o más nuevo, y git', e3_r2: 'En Windows, una carpeta sin espacios en el nombre', e3_r3: '¿Ya tienes notas? Cópialas dentro antes de instalar', e3_ia_c: 'Para tu IA', e3_copiar: 'Copiar', e3_guia: 'Guía completa de instalación →', e3_ia_t: 'Descomprímelo, abre tu IA en esa carpeta y dile:', e3_ia: 'Descargué endosymbiosis-1.1.zip de endosymbiosis.org y lo descomprimí aquí. Primero comprueba que la huella SHA-256 del zip sea 6f3f4ca273730b783c493c27b2f069a02c2c8bc13f065d09724b3dea774aff07. Después lee README.md y guíame para instalarlo, paso a paso. Los comandos los corro yo.', // BORRADOR-MARCO
    cita: 'Un colega que asimila tu práctica de trabajo, y un método para que cada tropiezo sume conocimiento.', // BORRADOR-MARCO
    pie_i: 'Investigador independiente', pie_l: 'Código MIT · Textos CC BY-SA 4.0', pie_v: '(todas las versiones)', demo: 'demo' // BORRADOR-MARCO
  }
};
const raiz = document.documentElement;
document.querySelectorAll('[data-t]').forEach(e => { e._en = e.textContent; });   // el inglés se toma del propio HTML
function poner(l) {
  raiz.dataset.lang = l; raiz.lang = l;
  document.querySelectorAll('[data-t]').forEach(e => { const v = l === 'en' ? e._en : TXT.es[e.dataset.t]; if (v != null && e.textContent !== v) e.textContent = v; });
  document.querySelectorAll('[data-href-es]').forEach(e => { if (!e._hrefEn) e._hrefEn = e.getAttribute('href'); e.setAttribute('href', l === 'es' ? e.dataset.hrefEs : e._hrefEn); });
  try { localStorage.setItem('lang', l); } catch (e) {}
  try { document.dispatchEvent(new Event('idioma')); } catch (e) {}
}
let idioma = 'en';
try { const n = (navigator.languages && navigator.languages[0]) || navigator.language || ''; if (/^es\b/i.test(n)) idioma = 'es'; } catch (e) {}   // D231: primera visita, el idioma del navegador (Marco: «procede»)
try { const g = localStorage.getItem('lang'); if (g === 'es' || g === 'en') idioma = g; } catch (e) {}
try { const q = new URLSearchParams(location.search).get('lang'); if (q === 'es' || q === 'en') idioma = q; } catch (e) {}
poner(idioma);
document.getElementById('lang').addEventListener('click', () => poner(raiz.dataset.lang === 'en' ? 'es' : 'en'));
})();
/* D231: botón «Copiar» de la frase para la IA (Marco: «estilizamos un poco esta parte?») */
document.querySelectorAll('.copiar').forEach(function (b) {
  b.addEventListener('click', function () {
    var pre = b.closest('.frase-ia').querySelector('pre'), o = b.textContent, es = document.documentElement.lang === 'es';
    var ok = function () { b.textContent = es ? 'Copiado ✓' : 'Copied ✓'; setTimeout(function () { b.textContent = o; }, 1600); };
    try { navigator.clipboard.writeText(pre.textContent).then(ok, function () {}); } catch (e) {}
  });
});
