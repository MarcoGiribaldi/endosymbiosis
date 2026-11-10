/* endosymbiosis.org · navegación en el celular (D234, 9-nov-2026). Marco: «navegar en celular en la web es muy complicado en móvil».
   Solo actúa en pantallas angostas (≤ 760 px): una barra abajo, al alcance del pulgar, con Menú · Índice (si la página tiene) · Arriba.
   El menú es una hoja grande con botones de 52 px: Inicio, Simbiosis, Endosimbiosis, Estudios, Empezar e idioma.
   No depende de ninguna librería y no cambia nada en la computadora. */
(function () {
  var mq = window.matchMedia('(max-width: 760px)');
  var path = location.pathname.replace(/index\.html$/, '');
  var htmlLang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2);
  var lang = htmlLang;
  try {
    if (path === '/' || path === '') {
      var q = new URLSearchParams(location.search).get('lang');
      var g = localStorage.getItem('lang');
      lang = q || g || (/^es\b/i.test((navigator.languages && navigator.languages[0]) || navigator.language || '') ? 'es' : 'en');
    }
  } catch (e) {}
  var es = lang === 'es';
  var T = es
    ? { menu: 'Menú', toc: 'Índice', top: 'Arriba', close: 'Cerrar', home: 'Inicio', sim: 'Simbiosis · el libro', endo: 'Endosimbiosis · el kit',
        studies: 'Estudios · HAI 2026', start: 'Empezar', other: 'Read in English', otherLang: 'en' }
    : { menu: 'Menu', toc: 'Contents', top: 'Top', close: 'Close', home: 'Home', sim: 'Symbiosis · the book', endo: 'Endosymbiosis · the kit',
        studies: 'Studies · HAI 2026', start: 'Start here', other: 'Leer en español', otherLang: 'es' };
  var PAR = { simbiosis: 'symbiosis', symbiosis: 'simbiosis', endosimbiosis: 'endosymbiosis', endosymbiosis: 'endosimbiosis' };
  var seg = path.split('/').filter(Boolean);
  function otherUrl() {
    if (!seg.length) return '/?lang=' + T.otherLang;
    if (PAR[seg[0]]) return '/' + PAR[seg[0]] + '/' + (seg[1] || '');
    return null;   // estudios: solo en inglés por ahora
  }
  var links = [
    [T.home, '/?lang=' + lang, !seg.length],
    [T.sim, es ? '/simbiosis/' : '/symbiosis/', seg[0] === 'simbiosis' || seg[0] === 'symbiosis'],
    [T.endo, es ? '/endosimbiosis/' : '/endosymbiosis/', seg[0] === 'endosimbiosis' || seg[0] === 'endosymbiosis'],
    [T.studies, '/studies/', seg[0] === 'studies' || seg[0] === 'hai26'],
    [T.start, '/?lang=' + lang + '#empezar', false]
  ];
  var toc = document.querySelector('nav.indice, .toc');

  var css = '.nm-bar[hidden]{display:none !important}@media (max-width:760px){' +
    '.nm-bar{position:fixed;left:0;right:0;bottom:0;z-index:60;display:flex;gap:8px;justify-content:space-between;align-items:center;' +
    'padding:8px max(12px,env(safe-area-inset-right,0px)) calc(8px + env(safe-area-inset-bottom,0px)) max(12px,env(safe-area-inset-left,0px));' +
    'background:var(--nm-bg);border-top:1px solid var(--nm-rule);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}' +
    '.nm-bar button{flex:1;min-height:46px;border-radius:12px;border:1px solid var(--nm-rule);background:transparent;color:var(--nm-fg);' +
    'font:600 15px/1 system-ui,-apple-system,"Segoe UI",sans-serif;display:flex;align-items:center;justify-content:center;gap:8px}' +
    '.nm-bar button.nm-main{background:var(--nm-accent);color:var(--nm-on-accent);border-color:var(--nm-accent)}' +
    '.nm-bar svg{width:18px;height:18px}' +
    'body.nm-on{padding-bottom:calc(76px + env(safe-area-inset-bottom,0px)) !important}' +
    '.nm-sheet{position:fixed;inset:0;z-index:70;display:flex;flex-direction:column;justify-content:flex-end;background:rgba(0,0,0,.45)}' +
    '.nm-sheet[hidden]{display:none !important}' +
    '.nm-panel{background:var(--nm-solid);color:var(--nm-fg);border-radius:18px 18px 0 0;max-height:82vh;overflow:auto;' +
    'padding:14px max(16px,env(safe-area-inset-right,0px)) calc(16px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));display:grid;gap:8px}' +
    '.nm-panel a,.nm-panel button{display:flex;align-items:center;min-height:52px;padding:0 16px;border-radius:12px;border:1px solid var(--nm-rule);' +
    'color:var(--nm-fg);text-decoration:none;font:500 17px/1.25 system-ui,-apple-system,"Segoe UI",sans-serif;background:transparent;text-align:left}' +
    '.nm-panel a[aria-current]{border-color:var(--nm-accent);color:var(--nm-accent);font-weight:700}' +
    '.nm-panel .nm-lang{justify-content:center;border-style:dashed}' +
    '.nm-panel .nm-close{justify-content:center;background:var(--nm-rule)}' +
    '.nm-panel .nm-toc a{min-height:46px;font-size:15.5px}' +
    '.nm-panel .nm-toc{display:grid;gap:6px}' +
    '.nav-sitio .enl a:not(.lang){display:none}' +   // en el celular, la barra de arriba solo deja la marca y el idioma; lo demás está en el menú
    '}';
  function luminance(c) { var m = c.match(/\d+(\.\d+)?/g); if (!m) return 1; return (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) / 255; }
  function setColors() {
    var cs = getComputedStyle(document.body), bg = cs.backgroundColor, fg = cs.color;
    if (!bg || bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent') bg = getComputedStyle(document.documentElement).backgroundColor || '#0d1210';
    var dark = luminance(bg) < 0.5, r = document.documentElement.style;
    r.setProperty('--nm-solid', dark ? '#121915' : '#fffdf8');
    r.setProperty('--nm-bg', dark ? 'rgba(13,18,16,.94)' : 'rgba(255,253,248,.94)');
    r.setProperty('--nm-fg', fg || (dark ? '#ece7dc' : '#141815'));
    r.setProperty('--nm-rule', dark ? 'rgba(236,231,220,.16)' : 'rgba(20,24,21,.14)');
    r.setProperty('--nm-accent', dark ? '#e3b85c' : '#7a5d12');
    r.setProperty('--nm-on-accent', dark ? '#0d1210' : '#ffffff');
  }
  var ICON = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    toc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 7h11M9 12h11M9 17h11M4 7h.01M4 12h.01M4 17h.01"/></svg>',
    top: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
  };
  var built = false, bar, sheet, panel, lastFocus;
  function openSheet(kind) {
    lastFocus = document.activeElement; panel.innerHTML = '';
    if (kind === 'toc' && toc) {
      var box = document.createElement('div'); box.className = 'nm-toc';
      toc.querySelectorAll('a[href^="#"]').forEach(function (a) {
        var l = document.createElement('a'); l.href = a.getAttribute('href'); l.textContent = a.textContent.trim(); box.appendChild(l);
      });
      panel.appendChild(box);
    } else {
      links.forEach(function (x) { var a = document.createElement('a'); a.href = x[1]; a.textContent = x[0]; if (x[2]) a.setAttribute('aria-current', 'page'); panel.appendChild(a); });
      var o = otherUrl(); if (o) { var a = document.createElement('a'); a.href = o; a.className = 'nm-lang'; a.textContent = T.other; a.lang = T.otherLang;
        a.addEventListener('click', function () { try { localStorage.setItem('lang', T.otherLang); } catch (e) {} }); panel.appendChild(a); }
    }
    var c = document.createElement('button'); c.type = 'button'; c.className = 'nm-close'; c.textContent = T.close; c.addEventListener('click', closeSheet); panel.appendChild(c);
    sheet.hidden = false; document.body.style.overflow = 'hidden';
    var first = panel.querySelector('a,button'); if (first) first.focus();
  }
  function closeSheet() { sheet.hidden = true; document.body.style.overflow = ''; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
  function build() {
    if (built) return; built = true;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st); setColors();
    bar = document.createElement('nav'); bar.className = 'nm-bar'; bar.setAttribute('aria-label', T.menu);
    bar.innerHTML = '<button type="button" class="nm-main" data-k="menu">' + ICON.menu + T.menu + '</button>' +
      (toc ? '<button type="button" data-k="toc">' + ICON.toc + T.toc + '</button>' : '') +
      '<button type="button" data-k="top" aria-label="' + T.top + '">' + ICON.top + T.top + '</button>';
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.k === 'top') window.scrollTo({ top: 0, behavior: 'smooth' }); else openSheet(b.dataset.k);
    });
    sheet = document.createElement('div'); sheet.className = 'nm-sheet'; sheet.hidden = true; sheet.setAttribute('role', 'dialog'); sheet.setAttribute('aria-modal', 'true');
    panel = document.createElement('div'); panel.className = 'nm-panel'; sheet.appendChild(panel);
    sheet.addEventListener('click', function (e) { if (e.target === sheet || e.target.closest('.nm-panel a')) closeSheet(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !sheet.hidden) closeSheet(); });
    document.body.appendChild(bar); document.body.appendChild(sheet);
  }
  function apply() { if (mq.matches) { build(); bar.hidden = false; document.body.classList.add('nm-on'); } else if (built) { bar.hidden = true; document.body.classList.remove('nm-on'); closeSheet(); } }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
  if (mq.addEventListener) mq.addEventListener('change', apply);
})();
