/* ============================================
   DiMonkey — main.js
   Idioma (EN/ES), header, mono, pausa y todo lo que se mueve.
   ============================================ */

(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { a = a === undefined ? 0 : a; b = b === undefined ? 1 : b; return Math.min(b, Math.max(a, v)); };
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* =========================
     TEXTOS (EN por defecto, ES con voseo)
     ========================= */
  var T = {
    en: {
      'skip': 'Skip to products',
      'nav.home': 'Home', 'nav.products': 'Products', 'nav.how': 'How we work', 'nav.team': 'Team', 'nav.contact': 'Contact',
      'nav.cta': 'Get in touch', 'nav.menu': 'Open menu', 'nav.menuClose': 'Close menu',
      'lang.aria': 'Change language', 'monkey.aria': 'The DiMonkey monkey, hanging upside down',
      'pause.stop': 'Pause animations', 'pause.play': 'Play animations',
      'hero.badge': 'The next unicorn is being built',
      'hero.t1': 'Building solutions', 'hero.t2': 'that matter',
      'rot.pre': 'for',
      'rot.imhomi': 'hassle-free renting', 'rot.nomi': 'clear finances', 'rot.gogyms': 'training at all your gyms', 'rot.next': 'whatever comes next',
      'rot.sr': 'hassle-free renting, clear finances, training at all your gyms and whatever comes next.',
      'hero.lead': "We're a Latin American startup that designs and builds digital products for real problems. We started in Costa Rica; our vision is global.",
      'hero.btn1': 'See the products', 'hero.btn2': 'How we work',
      'cat.imhomi': 'Proptech', 'cat.nomi': 'Fintech', 'cat.gogyms': 'Fitness', 'cat.next': 'In the works',
      'next.short': "What's next",
      'band.next': "What's next", 'band.made': 'Made in Costa Rica',
      'products.label': 'Our solutions',
      'products.title': 'Products that make<br><span class="gradient-text">a difference</span>',
      'products.sub': 'Three products on the way and one in the works. Each with its own brand; all with the same obsession with solving something real.',
      'status.dev': 'In development',
      'imhomi.kick': 'Proptech · Costa Rica',
      'imhomi.promise': 'Everything that happens in a rental, in one app.',
      'imhomi.desc': 'From finding a room to getting the deposit back: viewings, lease, payments, shared living and inventory, all on record for both sides.',
      'imhomi.f1': 'Search with pet and roommate filters', 'imhomi.f2': 'Lease, payments and inventory in one place', 'imhomi.f3': 'Blind ratings from both sides at the end',
      'imhomi.go': 'Discover ImHomi', 'imhomi.status': 'Coming soon to Costa Rica', 'imhomi.tag': 'The whole rental',
      'life.1': 'Search', 'life.1s': 'room, apartment or house',
      'life.2': 'View', 'life.2s': 'the viewing gets scheduled',
      'life.3': 'Sign', 'life.3s': 'the lease, paper-free',
      'life.4': 'Pay', 'life.4s': 'every month, with a receipt',
      'life.5': 'Live', 'life.5s': 'inventory and repairs',
      'life.6': 'Settle', 'life.6s': 'the deposit, no fights',
      'imhomi.cap': 'For tenants and for landlords',
      'nomi.kick': 'Fintech · Personal finance',
      'nomi.promise': 'Your finances, clear and in order.',
      'nomi.desc': 'Your money companion: accounts, cards, budget and goals in one place, in colones and dollars.',
      'nomi.f1': 'Accounts and cards, with statements and payments', 'nomi.f2': 'Monthly budget and savings goals',
      'nomi.f3': 'Recurring expenses that log themselves', 'nomi.f4': 'Receipt photos and small-spend tracking', 'nomi.soon': 'Coming next',
      'nomi.note': 'The website arrives with the app.',
      'nomi.month': 'November', 'nomi.avail': 'Available', 'nomi.gain': '+{n} this month', 'nomi.used': 'used',
      'nomi.c1': 'Food', 'nomi.c2': 'Transport', 'nomi.c3': 'Going out', 'nomi.c4': 'Utilities', 'nomi.cap': 'Sample amounts',
      'm.1': 'JUN', 'm.2': 'JUL', 'm.3': 'AUG', 'm.4': 'SEP', 'm.5': 'OCT', 'm.6': 'NOV',
      'gg.kick': 'Fitness · People and gyms',
      'gg.promise': 'A new way to train.',
      'gg.desc': 'One account for all your gyms, with your workouts, records and goals, plus the tools every gym needs day to day.',
      'gg.f1': 'Your profile goes with you, gym to gym', 'gg.f2': 'Workouts, records and goals you can watch grow', 'gg.f3': 'Memberships, classes and payments for gyms',
      'gg.go': 'Discover Go-Gyms', 'gg.status': 'Coming soon', 'gg.tag': 'One account',
      'gg.week': 'This week · goal 4 days', 'gg.of': '{n} of 4', 'gg.done': 'WEEK DONE',
      'd.1': 'M', 'd.2': 'T', 'd.3': 'W', 'd.4': 'T', 'd.5': 'F', 'd.6': 'S', 'd.7': 'S',
      'gg.cap': "Your progress isn't stuck in one gym",
      'next.kick': 'In the works', 'next.name': 'Next solution',
      'next.promise': "We're already building the next one.",
      'next.desc': "We can't say what it is yet. We can say how it starts: like the others, with a real problem someone lives with every day.",
      'next.go': 'Let me know when it launches', 'next.mail': 'mailto:hola@dimonkey.com?subject=Tell%20me%20about%20the%20next%20solution',
      'next.tag': 'Classified', 'next.code': 'PROJECT', 'next.build': 'Build',
      'how.label': 'Why DiMonkey?',
      'how.mani': 'First we understand the <em>problem</em>. Then we write code. We were born in Costa Rica, but we build for the <em>world</em>. We don\'t make apps for the sake of it: we build the <em>future</em> we want to use.',
      'how.p1': 'Problem first', 'how.p1d': 'We find real problems before writing a single line of code.',
      'how.p2': 'Latin America and beyond', 'how.p2d': 'Born in Costa Rica, built for the world.',
      'how.p3': 'Unicorn mindset', 'how.p3d': "We don't build apps, we build the future.",
      'team.label': 'The people behind it',
      'team.title': 'Two people,<br><span class="gradient-text">one obsession</span>',
      'team.sub': 'We dream up, design and code every product together, from the first idea to the last line of code.',
      'team.f1': 'Co-founder · CEO', 'team.f2': 'Co-founder · CTO',
      'team.f1alt': 'Steve Araya, co-founder and CEO of DiMonkey', 'team.f2alt': 'Alonso Rojas, co-founder and CTO of DiMonkey',
      'team.f1in': 'Steve Araya on LinkedIn', 'team.f2in': 'Alonso Rojas on LinkedIn',
      'team.f1mail': 'Email Steve Araya', 'team.f2mail': 'Email Alonso Rojas',
      'stats.aria': 'DiMonkey in numbers', 'stats.products': 'products on the way', 'stats.country': 'country (for now)',
      'stats.inf': 'Infinite', 'stats.problems': 'problems to solve', 'stats.year': 'the year we started',
      'cta.title': 'Want to be part of<br><span class="gradient-text">the journey?</span>',
      'cta.sub': "We keep building. If you have an idea, want to collaborate or just want to know what's next, write to us.",
      'cta.copy': 'Copy email', 'cta.copied': 'Copied', 'cta.copiedLive': 'Email copied',
      'support.title': 'Fuel the <span class="gradient-text">monkey</span>',
      'support.text': "Keeping these projects alive has real costs: servers, domains and many hours of work. If something we make helps you, you can buy us a coffee. It's completely voluntary, and it means a lot.",
      'support.button': 'Buy us a coffee', 'support.note': 'Secure payment via Ko-fi · PayPal or card',
      'foot.aria': 'Footer', 'foot.support': 'Support us', 'foot.rights': 'All rights reserved.',
      'foot.made1': 'Built with', 'foot.made2': 'from Costa Rica', 'foot.love': 'love'
    },
    es: {
      'skip': 'Saltar a los productos',
      'nav.home': 'Inicio', 'nav.products': 'Productos', 'nav.how': 'Cómo trabajamos', 'nav.team': 'Equipo', 'nav.contact': 'Contacto',
      'nav.cta': 'Escribinos', 'nav.menu': 'Abrir el menú', 'nav.menuClose': 'Cerrar el menú',
      'lang.aria': 'Cambiar idioma', 'monkey.aria': 'El mono de DiMonkey, colgado de cabeza',
      'pause.stop': 'Pausar animaciones', 'pause.play': 'Reanudar animaciones',
      'hero.badge': 'El próximo unicornio se está construyendo',
      'hero.t1': 'Construyendo soluciones', 'hero.t2': 'que importan',
      'rot.pre': 'para',
      'rot.imhomi': 'alquilar sin enredos', 'rot.nomi': 'tener tus finanzas claras', 'rot.gogyms': 'entrenar en todos tus gyms', 'rot.next': 'lo que sigue',
      'rot.sr': 'alquilar sin enredos, tener tus finanzas claras, entrenar en todos tus gyms y lo que sigue.',
      'hero.lead': 'Somos una startup latinoamericana que diseña y construye productos digitales para problemas reales. Empezamos en Costa Rica; la visión es global.',
      'hero.btn1': 'Ver los productos', 'hero.btn2': 'Cómo trabajamos',
      'cat.imhomi': 'Proptech', 'cat.nomi': 'Fintech', 'cat.gogyms': 'Fitness', 'cat.next': 'En el horno',
      'next.short': 'Lo que sigue',
      'band.next': 'Lo que sigue', 'band.made': 'Hecho en Costa Rica',
      'products.label': 'Nuestras soluciones',
      'products.title': 'Productos que hacen<br><span class="gradient-text">la diferencia</span>',
      'products.sub': 'Tres productos en camino y uno en el horno. Cada uno con su marca; todos con la misma obsesión por resolver algo de verdad.',
      'status.dev': 'En desarrollo',
      'imhomi.kick': 'Proptech · Costa Rica',
      'imhomi.promise': 'Todo lo que pasa en un alquiler, en una sola app.',
      'imhomi.desc': 'Desde buscar cuarto hasta liquidar el depósito: visitas, contrato, pagos, convivencia e inventario, con todo registrado para las dos partes.',
      'imhomi.f1': 'Búsqueda con filtros de mascotas y roommates', 'imhomi.f2': 'Contrato, pagos e inventario en un solo lugar', 'imhomi.f3': 'Calificación a ciegas de las dos partes al final',
      'imhomi.go': 'Conocé ImHomi', 'imhomi.status': 'Próximamente en Costa Rica', 'imhomi.tag': 'El alquiler entero',
      'life.1': 'Buscás', 'life.1s': 'cuarto, apartamento o casa',
      'life.2': 'Visitás', 'life.2s': 'la visita queda agendada',
      'life.3': 'Firmás', 'life.3s': 'el contrato, sin papeles',
      'life.4': 'Pagás', 'life.4s': 'cada mes, con comprobante',
      'life.5': 'Vivís', 'life.5s': 'inventario e incidencias',
      'life.6': 'Liquidás', 'life.6s': 'el depósito, sin pleitos',
      'imhomi.cap': 'Para quien alquila y para quien provee',
      'nomi.kick': 'Fintech · Finanzas personales',
      'nomi.promise': 'Tus finanzas, claras y en orden.',
      'nomi.desc': 'Tu compañero financiero: cuentas, tarjetas, presupuesto y metas en un solo lugar, en colones y en dólares.',
      'nomi.f1': 'Cuentas y tarjetas, con sus cortes y pagos', 'nomi.f2': 'Presupuesto del mes y metas de ahorro',
      'nomi.f3': 'Gastos recurrentes que se anotan solos', 'nomi.f4': 'Fotos de recibos y gastos hormiga', 'nomi.soon': 'Lo que viene',
      'nomi.note': 'La web llega con la app.',
      'nomi.month': 'Noviembre', 'nomi.avail': 'Disponible', 'nomi.gain': '+{n} este mes', 'nomi.used': 'usado',
      'nomi.c1': 'Comida', 'nomi.c2': 'Transporte', 'nomi.c3': 'Salidas', 'nomi.c4': 'Servicios', 'nomi.cap': 'Montos de ejemplo',
      'm.1': 'JUN', 'm.2': 'JUL', 'm.3': 'AGO', 'm.4': 'SET', 'm.5': 'OCT', 'm.6': 'NOV',
      'gg.kick': 'Fitness · Personas y gyms',
      'gg.promise': 'Una nueva forma de entrenar.',
      'gg.desc': 'Una sola cuenta para todos tus gyms, con tus entrenos, récords y metas, y las herramientas que cada gym necesita en el día a día.',
      'gg.f1': 'Tu perfil viaja con vos, de gym en gym', 'gg.f2': 'Entrenos, récords y metas que se ven crecer', 'gg.f3': 'Membresías, clases y pagos para el gym',
      'gg.go': 'Conocé Go-Gyms', 'gg.status': 'Muy pronto', 'gg.tag': 'Una cuenta',
      'gg.week': 'Esta semana · meta 4 dias', 'gg.of': '{n} de 4', 'gg.done': 'SEMANA CUMPLIDA',
      'd.1': 'L', 'd.2': 'K', 'd.3': 'M', 'd.4': 'J', 'd.5': 'V', 'd.6': 'S', 'd.7': 'D',
      'gg.cap': 'Tu progreso no se queda en un solo gym',
      'next.kick': 'En el horno', 'next.name': 'Próxima solución',
      'next.promise': 'Ya estamos construyendo la próxima.',
      'next.desc': 'Todavía no podemos contar qué es. Sí podemos contar cómo nace: igual que las otras, de un problema real que alguien vive todos los días.',
      'next.go': 'Avisame cuando salga', 'next.mail': 'mailto:hola@dimonkey.com?subject=Av%C3%ADsenme%20de%20la%20pr%C3%B3xima%20soluci%C3%B3n',
      'next.tag': 'Clasificado', 'next.code': 'PROYECTO', 'next.build': 'Armado',
      'how.label': '¿Por qué DiMonkey?',
      'how.mani': 'Primero entendemos el <em>problema</em>. Después escribimos código. Nacimos en Costa Rica, pero construimos para el <em>mundo</em>. No hacemos apps por hacerlas: construimos el <em>futuro</em> que queremos usar.',
      'how.p1': 'El problema primero', 'how.p1d': 'Identificamos problemas reales antes de escribir una sola línea de código.',
      'how.p2': 'Latinoamérica y más allá', 'how.p2d': 'Nacimos en Costa Rica, pero construimos para el mundo.',
      'how.p3': 'Mentalidad unicornio', 'how.p3d': 'No construimos apps, construimos el futuro.',
      'team.label': 'Quiénes están detrás',
      'team.title': 'Dos personas,<br><span class="gradient-text">una obsesión</span>',
      'team.sub': 'Pensamos, diseñamos y programamos cada producto entre los dos, desde la idea hasta la última línea de código.',
      'team.f1': 'Cofundador · CEO', 'team.f2': 'Cofundador · CTO',
      'team.f1alt': 'Steve Araya, cofundador y CEO de DiMonkey', 'team.f2alt': 'Alonso Rojas, cofundador y CTO de DiMonkey',
      'team.f1in': 'LinkedIn de Steve Araya', 'team.f2in': 'LinkedIn de Alonso Rojas',
      'team.f1mail': 'Escribirle a Steve Araya', 'team.f2mail': 'Escribirle a Alonso Rojas',
      'stats.aria': 'DiMonkey en números', 'stats.products': 'productos en camino', 'stats.country': 'país (por ahora)',
      'stats.inf': 'Infinitos', 'stats.problems': 'problemas por resolver', 'stats.year': 'el año en que arrancamos',
      'cta.title': '¿Querés ser parte<br><span class="gradient-text">del viaje?</span>',
      'cta.sub': 'Seguimos construyendo. Si tenés una idea, querés colaborar o simplemente querés saber qué sigue, escribinos.',
      'cta.copy': 'Copiar el correo', 'cta.copied': 'Copiado', 'cta.copiedLive': 'Correo copiado',
      'support.title': 'Cargale combustible al <span class="gradient-text">mono</span>',
      'support.text': 'Mantener estos proyectos vivos tiene costos reales: servidores, dominios y muchas horas de trabajo. Si algo de lo que hacemos te sirve, podés invitarnos un café. Es totalmente voluntario y significa muchísimo.',
      'support.button': 'Invitanos un café', 'support.note': 'Pago seguro con Ko-fi · PayPal o tarjeta',
      'foot.aria': 'Pie', 'foot.support': 'Apoyanos', 'foot.rights': 'Todos los derechos reservados.',
      'foot.made1': 'Hecho con', 'foot.made2': 'desde Costa Rica', 'foot.love': 'amor'
    }
  };

  var lang = 'en';
  function t(k) { var d = T[lang]; return d[k] !== undefined ? d[k] : T.en[k]; }
  // ₡412.500 en español, ₡412,500 en inglés.
  function money(n) { return '₡' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'es' ? '.' : ','); }

  /* =========================
     PAUSA (WCAG 2.2.2): con movimiento reducido arranca pausado
     ========================= */
  var paused = reduce;
  try { var sp = localStorage.getItem('dimonkey-pause'); if (sp === '1') paused = true; else if (sp === '0') paused = false; } catch (e) { /* sin almacenamiento */ }
  var pauseBtn = $('#pauseBtn'), pauseTxt = $('#pauseTxt');
  var onPause = [];
  function setPaused(v, save) {
    paused = v;
    root.classList.toggle('x-paused', v);
    pauseTxt.textContent = t(v ? 'pause.play' : 'pause.stop');
    $$('svg').forEach(function (s) { if (s.pauseAnimations) { if (v) s.pauseAnimations(); else s.unpauseAnimations(); } });
    if (save) { try { localStorage.setItem('dimonkey-pause', v ? '1' : '0'); } catch (e) { /* ignorar */ } }
    onPause.forEach(function (f) { f(v); });
  }
  pauseBtn.addEventListener('click', function () { setPaused(!paused, true); });

  /* =========================
     HEADER Y MENÚ
     ========================= */
  var header = $('#header');
  function checkHeader() { header.classList.toggle('scrolled', scrollY > 60); }
  addEventListener('scroll', checkHeader, { passive: true }); checkHeader();

  var navToggle = $('#navToggle'), navLinks = $('#navLinks');
  function setMenu(open) {
    navToggle.classList.toggle('active', open); navLinks.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', t(open ? 'nav.menuClose' : 'nav.menu'));
  }
  navToggle.addEventListener('click', function () { setMenu(!navLinks.classList.contains('active')); });
  $$('a', navLinks).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && navLinks.classList.contains('active')) { setMenu(false); navToggle.focus(); } });

  /* =========================
     REVELADO
     ========================= */
  var rvIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(e.target.classList.contains('animate-on-scroll') ? 'visible' : 'in'); rvIO.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -12% 0px' });
  $$('[data-rv], .animate-on-scroll').forEach(function (el) { rvIO.observe(el); });
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('x-on'); }); });

  /* =========================
     FRASE QUE ROTA + ÓRBITA
     ========================= */
  var PRODS = ['imhomi', 'nomi', 'gogyms', 'next'];
  var NAMES = { imhomi: 'ImHomi', nomi: 'Nomi', gogyms: 'Go-Gyms' };
  var words = $$('.x-word');
  var orbit = $('#xOrbit'), nodes = $$('.x-node', orbit), label = $('#xOrbLabel'), core = $('#xCore');
  var active = 0, steps = 0, phi = Math.PI / 2, phiT = Math.PI / 2, orbitHover = false, shown = -1;

  function buildWords() {
    words.forEach(function (w) {
      var txt = t('rot.' + w.dataset.p); w.textContent = '';
      Array.prototype.forEach.call(txt, function (c, i) { var s = document.createElement('span'); s.className = 'ch'; s.style.setProperty('--i', i); s.textContent = c === ' ' ? ' ' : c; w.appendChild(s); });
    });
  }
  function orbLabel(i) {
    var k = PRODS[i];
    label.innerHTML = '<b>' + (NAMES[k] || t('next.short')) + '</b> · ' + t('cat.' + k);
  }
  function showWord(i) {
    words.forEach(function (w, k) {
      if (k === i) { w.classList.remove('off'); w.classList.add('on'); }
      else if (k === shown) { w.classList.remove('on'); w.classList.add('off'); }
      else { w.classList.remove('on'); w.classList.remove('off'); }
    });
    shown = i;
    label.style.opacity = 0;
    setTimeout(function () { orbLabel(i); label.style.opacity = 1; }, 220);
  }
  function goTo(i) {
    var fwd = (i - active + 4) % 4; if (fwd === 0) return;
    steps += fwd; active = i; phiT = Math.PI / 2 - steps * Math.PI / 2; showWord(i);
    if (!paused) { core.classList.add('hop'); setTimeout(function () { core.classList.remove('hop'); }, 420); }
  }
  orbit.addEventListener('pointerenter', function () { orbitHover = true; });
  orbit.addEventListener('pointerleave', function () { orbitHover = false; });
  nodes.forEach(function (n, i) { n.addEventListener('click', function () { goTo(i); jumpToProduct(i); }); });
  var lastCycle = performance.now(), heroVisible = true;
  new IntersectionObserver(function (es) { heroVisible = es[0].isIntersecting; }).observe($('.x-hero'));
  var TILT = -14 * Math.PI / 180;
  function placeOrbit() {
    var w = orbit.clientWidth, RX = w * 0.42, RY = w * 0.28;
    nodes.forEach(function (n, i) {
      var a = phi + i * Math.PI / 2, x = Math.cos(a) * RX, y = Math.sin(a) * RY, d = (Math.sin(a) + 1) / 2;
      var X = x * Math.cos(TILT) - y * Math.sin(TILT), Y = x * Math.sin(TILT) + y * Math.cos(TILT);
      n.style.transform = 'translate(' + X.toFixed(1) + 'px,' + Y.toFixed(1) + 'px) scale(' + (0.58 + d * 0.52).toFixed(3) + ')';
      n.style.zIndex = d > 0.5 ? 60 + Math.round(d * 10) : 10 + Math.round(d * 10);
      n.style.opacity = (0.35 + d * 0.65).toFixed(2);
      n.style.filter = d < 0.5 ? 'blur(' + ((0.5 - d) * 3).toFixed(1) + 'px)' : '';
      n.classList.toggle('front', d > 0.96);
    });
  }

  /* =========================
     CIELO Y PISO: red de partículas arriba (con constelación junto al cursor), grilla abajo
     ========================= */
  var cv = $('#xGrid'), ctx = cv.getContext('2d');
  var gw = 0, gh = 0, net = [], mx = 0, mxs = 0, px = -9999, py = -9999, pk = 0;
  function sizeGrid() {
    var dpr = Math.min(devicePixelRatio || 1, 2);
    gw = cv.clientWidth; gh = cv.clientHeight; cv.width = gw * dpr; cv.height = gh * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var hor = gh * 0.64, n = Math.max(18, Math.min(50, Math.round(gw * hor / 17000)));
    net = [];
    for (var i = 0; i < n; i++) net.push({ x: Math.random() * gw, y: Math.random() * hor, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.3 + 0.7 });
  }
  function drawSky(hor) {
    var LINK = Math.max(110, Math.min(165, gw * 0.11)), R = 200, on = px > -9000;
    pk += ((on ? 1 : 0) - pk) * 0.06;
    // Se apagan al acercarse al horizonte, para no pelearse con el piso.
    var fade = function (y) { return clamp(1 - (y - hor * 0.45) / (hor * 0.55)); };
    var i, j, p, d;
    if (!paused) for (i = 0; i < net.length; i++) {
      p = net[i];
      if (on) { var dx = px - p.x, dy = py - p.y; d = Math.hypot(dx, dy); if (d < R && d > 36) { p.vx += dx / d * 0.01; p.vy += dy / d * 0.01; } }
      p.vx *= 0.985; p.vy *= 0.985;
      var sp = Math.hypot(p.vx, p.vy);
      if (sp < 0.1) { p.vx += (Math.random() - 0.5) * 0.03; p.vy += (Math.random() - 0.5) * 0.03; }
      if (sp > 0.8) { p.vx *= 0.8 / sp; p.vy *= 0.8 / sp; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < -12) p.x = gw + 12; else if (p.x > gw + 12) p.x = -12;
      if (p.y < -12) p.y = hor; else if (p.y > hor) p.y = -12;
    }
    ctx.lineWidth = 0.6;
    for (i = 0; i < net.length; i++) {
      var a = net[i], fa = fade(a.y);
      for (j = i + 1; j < net.length; j++) {
        var b = net[j]; d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) { ctx.strokeStyle = 'rgba(150,110,255,' + ((1 - d / LINK) * 0.2 * Math.min(fa, fade(b.y))).toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    }
    // La constelación del cursor: las cercanas se le unen y se sueltan cuando se va.
    if (pk > 0.01) {
      ctx.lineWidth = 0.8;
      for (i = 0; i < net.length; i++) { p = net[i]; d = Math.hypot(p.x - px, p.y - py); if (d < R) { ctx.strokeStyle = 'rgba(0,229,255,' + ((1 - d / R) * 0.5 * pk * fade(p.y)).toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(px, py); ctx.stroke(); } }
      if (py < hor) { ctx.globalAlpha = pk * fade(py); ctx.fillStyle = 'rgba(0,229,255,.18)'; ctx.beginPath(); ctx.arc(px, py, 9, 0, 7); ctx.fill(); ctx.fillStyle = '#7CF3FF'; ctx.beginPath(); ctx.arc(px, py, 2.4, 0, 7); ctx.fill(); ctx.globalAlpha = 1; }
    }
    for (i = 0; i < net.length; i++) {
      p = net[i];
      var f = fade(p.y), near = pk > 0.01 ? clamp(1 - Math.hypot(p.x - px, p.y - py) / R) * pk : 0;
      ctx.fillStyle = near > 0.05 ? 'rgba(124,243,255,' + (f * (0.45 + near * 0.5)).toFixed(3) + ')' : 'rgba(183,155,255,' + (f * 0.5).toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r + near * 1.2, 0, 7); ctx.fill();
    }
  }
  function drawGrid(tm) {
    ctx.clearRect(0, 0, gw, gh);
    var hor = gh * 0.64, vp = gw * 0.5 + mxs * 60;
    drawSky(hor);
    var g = ctx.createLinearGradient(0, hor, 0, gh); g.addColorStop(0, 'rgba(123,47,255,0)'); g.addColorStop(0.35, 'rgba(123,47,255,.35)'); g.addColorStop(1, 'rgba(0,229,255,.28)');
    ctx.strokeStyle = g; ctx.lineWidth = 1;
    ctx.beginPath();
    var off = (tm * 0.00009) % 1, K = 14, k, i;
    for (k = 0; k < K; k++) { var fr = (k + off) / K, y = hor + (gh - hor) * fr * fr; ctx.moveTo(0, y); ctx.lineTo(gw, y); }
    var spc = gw / 7;
    for (i = -12; i <= 12; i++) { ctx.moveTo(vp + i * spc * 0.06, hor); ctx.lineTo(vp + i * spc * 1.4, gh); }
    ctx.stroke();
    var hg = ctx.createLinearGradient(0, 0, gw, 0); hg.addColorStop(0, 'rgba(0,229,255,0)'); hg.addColorStop(0.5, 'rgba(0,229,255,.55)'); hg.addColorStop(1, 'rgba(0,229,255,0)');
    ctx.fillStyle = hg; ctx.fillRect(0, hor - 0.5, gw, 1);
  }
  addEventListener('pointermove', function (e) { mx = e.clientX / innerWidth - 0.5; }, { passive: true });
  if (fine) {
    var heroEl = $('.x-hero');
    heroEl.addEventListener('pointermove', function (e) { var r = cv.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; }, { passive: true });
    heroEl.addEventListener('pointerleave', function () { px = py = -9999; });
  }

  /* =========================
     CINTA
     ========================= */
  var band = $('#xBand'); band.appendChild(band.firstElementChild.cloneNode(true)); band.appendChild(band.firstElementChild.cloneNode(true));
  var bandX = 0, lastY = scrollY, vel = 0;

  /* =========================
     ESCENARIO DE PRODUCTOS
     Fijo en compu si entra entero; si no (teléfono, pantalla baja, movimiento reducido), apilado.
     ========================= */
  var prod = $('.x-prod'), theater = $('#xTheater'), pin = $('.x-pin', theater), acts = $$('.x-act'), bgs = $$('.x-bg-i'), rail = $$('.x-rail button');
  var pinned = null, cur = -1, autoStart = acts.map(function () { return null; });
  function fits() {
    // Se mide la escena de verdad (su alto en pantalla), no innerHeight: en Safari innerHeight
    // crece cuando se esconden las barras y la escena quedaba recortada.
    var room = pin.clientHeight - 2 * header.offsetHeight - 16;
    return acts.every(function (a) {
      var copy = $('.x-act-copy', a), mono = $('.x-mono-wrap', a);
      return copy.offsetHeight <= room && mono.offsetHeight <= room;
    });
  }
  function setMode() {
    var want = innerWidth >= 1024 && innerHeight >= 620 && !reduce;
    if (want) { prod.classList.add('is-pinned'); if (!fits()) want = false; }
    if (want === pinned) { prod.classList.toggle('is-pinned', pinned); return; }
    pinned = want; prod.classList.toggle('is-pinned', pinned);
    cur = -1;
    if (!pinned) acts.forEach(function (a) { a.inert = false; a.classList.remove('out'); a.classList.remove('on'); actIO.unobserve(a); actIO.observe(a); });
    else acts.forEach(function (a) { a.classList.remove('on'); });
    bgs.forEach(function (b) { b.classList.remove('on'); });
  }
  function setAct(i) {
    if (i === cur) return;
    var prev = cur; cur = i;
    acts.forEach(function (a, k) { a.classList.toggle('on', k === i); a.classList.toggle('out', k === prev); a.inert = k !== i; });
    if (prev >= 0) setTimeout(function () { if (acts[prev] && cur !== prev) acts[prev].classList.remove('out'); }, 700);
    bgs.forEach(function (b, k) { b.classList.toggle('on', k === i); });
    rail.forEach(function (b, k) { b.setAttribute('aria-current', String(k === i)); });
    if (i >= 0 && acts[i].dataset.p === 'next') scramble();
  }
  function theaterGeom() { var r = theater.getBoundingClientRect(); return { top: r.top + scrollY, len: theater.offsetHeight - pin.clientHeight }; }
  function jumpToProduct(i) {
    var beh = reduce ? 'auto' : 'smooth';
    if (pinned) { var g = theaterGeom(); scrollTo({ top: g.top + g.len * ((i + 0.08) / acts.length), behavior: beh }); }
    else acts[i].scrollIntoView({ behavior: beh, block: 'start' });
  }
  rail.forEach(function (b, i) { b.addEventListener('click', function () { jumpToProduct(i); }); });
  var actIO = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (pinned || !e.isIntersecting) return;
      e.target.classList.add('on');
      var k = acts.indexOf(e.target); if (autoStart[k] == null) autoStart[k] = performance.now();
      if (e.target.dataset.p === 'next') scramble();
    });
  }, { threshold: 0.2 });

  /* Lo que se mueve adentro de cada monolito, según el avance p (0 a 1). */
  var life = $$('#xLife li'), lifeOl = $('#xLife');
  var amt = $('#xNomiAmt'), pct = $('#xNomiPct');
  var gyms = $$('#xNet .gym'), week = $('#xWeek'), weekTxt = $('#xWeekTxt'), days = $$('.x-days li');
  var TRAIN = [0, 2, 4, 5];
  var lastP = acts.map(function () { return -1; }), curP = acts.map(function () { return 0; });
  function paint(k, p, force) {
    if (!force && Math.abs(p - lastP[k]) < 0.002) return; lastP[k] = p; curP[k] = p;
    var a = acts[k]; a.style.setProperty('--p', p.toFixed(3));
    var key = a.dataset.p;
    if (key === 'imhomi') {
      var n = Math.min(5, Math.floor(clamp((p - 0.12) / 0.8) * 6.0001));
      life.forEach(function (li, j) { li.classList.toggle('lit', j <= n && p > 0.1); li.classList.toggle('now', j === n && p > 0.1); });
      lifeOl.style.setProperty('--lf', p > 0.1 ? (n / 5).toFixed(3) : 0);
    } else if (key === 'nomi') {
      var e = 1 - Math.pow(1 - clamp(p * 1.4), 3);
      amt.textContent = money(412500 * e); pct.textContent = Math.round(68 * clamp(p * 1.4)) + '%';
    } else if (key === 'gogyms') {
      gyms.forEach(function (g, j) { g.classList.toggle('lit', p > 0.3 + j * 0.12); });
      var done = TRAIN.filter(function (d, j) { return p > 0.45 + j * 0.12; }).length;
      days.forEach(function (d, j) { var x = TRAIN.indexOf(j); d.classList.toggle('lit', x > -1 && x < done); d.classList.toggle('today', j === 5); });
      weekTxt.textContent = done >= 4 ? t('gg.done') : t('gg.of').replace('{n}', done); week.classList.toggle('done', done >= 4);
    }
  }

  /* El nombre de lo que sigue: se intenta leer y no se deja. */
  var scrEl = $('#xScramble'), codeEl = $('#xCode'), scrambling = false;
  function setCode() { codeEl.textContent = t('next.code') + ' ▓▓▓▓▓▓'; }
  function scramble() {
    if (scrambling) return; scrambling = true;
    var target = t('next.name'), G = '▓▒░█<>/\\_#*+';
    if (reduce || paused) { scrEl.textContent = target; scrambling = false; return; }
    var f = 0, chars = Array.prototype.slice.call(target);
    var tick = function () {
      f++;
      scrEl.textContent = chars.map(function (c, i) { return c === ' ' ? ' ' : (f > 8 + i * 1.6 ? c : G[(Math.random() * G.length) | 0]); }).join('');
      codeEl.textContent = t('next.code') + ' ' + [0, 0, 0, 0, 0, 0].map(function () { return G[(Math.random() * 4) | 0]; }).join('');
      if (f < 8 + chars.length * 1.6 + 2) requestAnimationFrame(tick); else { scrEl.textContent = t('next.name'); scrambling = false; }
    };
    requestAnimationFrame(tick);
  }

  /* =========================
     MANIFIESTO: se enciende palabra por palabra (se rearma al cambiar el idioma)
     ========================= */
  var mani = $('#xMani'), mw = [], maniLit = -1;
  function buildManifesto() {
    var tmp = document.createElement('div'); tmp.innerHTML = t('how.mani');
    mani.textContent = ''; mw = [];
    Array.prototype.slice.call(tmp.childNodes).forEach(function (n) {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { mani.appendChild(document.createTextNode(part)); return; }
          var s = document.createElement('span'); s.className = 'w'; s.textContent = part; mani.appendChild(s); mw.push(s);
        });
      } else { var s = document.createElement('span'); s.className = 'w g'; s.textContent = n.textContent; mani.appendChild(s); mw.push(s); }
    });
    maniLit = -1;
    if (reduce) mw.forEach(function (w) { w.classList.add('lit'); });
  }

  /* =========================
     NÚMEROS: odómetro e infinito (la curva se calcula: dos lazos iguales)
     ========================= */
  $$('.x-odo').forEach(function (o) {
    Array.prototype.forEach.call(o.dataset.v, function (d, i) {
      var col = document.createElement('span'); col.className = 'col'; col.setAttribute('aria-hidden', 'true'); col.style.setProperty('--k', i);
      for (var r = 0; r < 20; r++) { var s = document.createElement('span'); s.textContent = r % 10; col.appendChild(s); }
      col.dataset.d = d; o.appendChild(col);
    });
  });
  (function () {
    var pts = [], N = 160;
    for (var i = 0; i <= N; i++) { var a = Math.PI / 2 - 2 * Math.PI * i / N; pts.push((60 + 50 * Math.cos(a)).toFixed(2) + ' ' + (32 + 50 * Math.sin(a) * Math.cos(a)).toFixed(2)); }
    var d = 'M' + pts.join(' L') + 'Z';
    $$('.x-inf path').forEach(function (p) { p.setAttribute('d', d); });
  })();
  if (reduce) $$('.x-odo .col').forEach(function (c) { c.style.transition = 'none'; });
  new IntersectionObserver(function (es, ob) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      $$('.col', e.target).forEach(function (c) { c.style.transform = 'translateY(-' + (10 + +c.dataset.d) + 'em)'; });
      $('#xStatsSec').classList.add('in'); ob.unobserve(e.target);
    });
  }, { threshold: 0.4 }).observe($('#xStats'));

  /* =========================
     CORREO
     ========================= */
  var copyBtn = $('#xCopy'), copyTxt = $('#xCopyTxt'), copyLive = $('#xCopyLive'), copyT = null;
  copyBtn.addEventListener('click', function () {
    var done = function () {
      copyBtn.classList.add('ok'); copyTxt.textContent = t('cta.copied'); copyLive.textContent = t('cta.copiedLive');
      clearTimeout(copyT); copyT = setTimeout(function () { copyBtn.classList.remove('ok'); copyTxt.textContent = t('cta.copy'); copyLive.textContent = ''; }, 1800);
    };
    var fallback = function () { var ta = document.createElement('textarea'); ta.value = 'hola@dimonkey.com'; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) { /* ignorar */ } ta.remove(); done(); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText('hola@dimonkey.com').then(done, fallback); else fallback();
  });

  /* =========================
     INCLINACIÓN CON BRILLO (solo con mouse)
     ========================= */
  if (fine && !reduce) $$('[data-tilt]').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--ry', ((x - 0.5) * 12).toFixed(2) + 'deg'); el.style.setProperty('--rx', ((0.5 - y) * 10).toFixed(2) + 'deg');
      el.style.setProperty('--gx', (x * 100).toFixed(1) + '%'); el.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    el.addEventListener('pointerleave', function () { ['--rx', '--ry', '--gx', '--gy'].forEach(function (p) { el.style.removeProperty(p); }); });
  });

  /* =========================
     DIMONKEY GIGANTE DEL PIE
     ========================= */
  var giant = $('#xGiant'), gO = $('.o', giant), gF = $('.f', giant), GL = [];
  Array.prototype.forEach.call('DiMonkey', function (c, i) {
    [gO, gF].forEach(function (r) { var s = document.createElement('span'); s.textContent = c; s.style.setProperty('--i', i); r.appendChild(s); });
    GL.push({ o: gO.children[i], f: gF.children[i], k: 0 });
  });
  var gHover = null, footVisible = false;
  if (fine) {
    giant.parentElement.addEventListener('pointermove', function (e) { gHover = e.clientX; }, { passive: true });
    giant.parentElement.addEventListener('pointerleave', function () { gHover = null; });
  }
  new IntersectionObserver(function (es) {
    footVisible = es[0].isIntersecting;
    if (footVisible && !giant.classList.contains('in')) { giant.classList.add('in'); setTimeout(function () { giant.classList.add('done'); }, 1600); }
  }, { threshold: 0.2 }).observe(giant);
  function giantStill(v) { GL.forEach(function (g) { g.k = v; g.o.style.setProperty('--k', v); g.f.style.setProperty('--k', v); }); }
  $('#xYear').textContent = new Date().getFullYear();

  /* =========================
     TARJETA DE KO-FI: luz que sigue al mouse
     ========================= */
  (function () {
    var card = $('.support-card-inner');
    if (!card || !fine) return;
    card.addEventListener('mousemove', function (e) { var r = card.getBoundingClientRect(); card.style.setProperty('--mx', (e.clientX - r.left) + 'px'); card.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    card.addEventListener('mouseleave', function () { card.style.removeProperty('--mx'); card.style.removeProperty('--my'); });
  })();

  /* =========================
     EL MONO DEL HEADER (igual que antes)
     ========================= */
  (function initHeroMonkey() {
    var monkey = $('#heroMonkey');
    if (!monkey) return;
    var svg = $('.monkey', monkey);
    var STATES = ['is-wink', 'is-tongue', 'is-shy'];
    var stateIndex = 0, taps = 0, tapTimer = null, stateTimer = null;
    // Las pupilas (y un poco la cabeza) siguen el cursor
    if (fine && !reduce) {
      addEventListener('mousemove', function (e) {
        var box = monkey.getBoundingClientRect();
        var dx = (e.clientX - (box.left + box.width / 2)) / innerWidth;
        var dy = (e.clientY - (box.top + box.height / 2)) / innerHeight;
        monkey.style.setProperty('--eye-x', clamp(dx * 26, -5, 5).toFixed(2) + 'px');
        monkey.style.setProperty('--eye-y', clamp(dy * 26, -5, 5).toFixed(2) + 'px');
        svg.style.setProperty('--monkey-tilt', clamp(dx * 14, -6, 6).toFixed(2) + 'deg');
      });
    }
    monkey.addEventListener('click', react);
    // Al bajar, el mono se sube a la barra y se queda sentado
    var perched = false;
    addEventListener('scroll', function () {
      var shouldPerch = scrollY > 140;
      if (shouldPerch === perched) return;
      perched = shouldPerch;
      monkey.classList.toggle('is-perched', perched);
    }, { passive: true });
    function react() {
      taps++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(function () { taps = 0; }, 2500);
      if (taps >= 4) { taps = 0; wave(); return; }
      clearTimeout(stateTimer);
      STATES.forEach(function (s) { monkey.classList.remove(s); });
      void monkey.offsetWidth; // reinicia la animación del estado antes de volver a aplicarlo
      var state = STATES[stateIndex % STATES.length];
      stateIndex++;
      monkey.classList.add(state);
      stateTimer = setTimeout(function () { monkey.classList.remove(state); }, state === 'is-shy' ? 1700 : 1400);
    }
    function wave() {
      STATES.forEach(function (s) { monkey.classList.remove(s); });
      monkey.classList.remove('is-waving');
      void monkey.offsetWidth;
      monkey.classList.add('is-waving');
      setTimeout(function () { monkey.classList.remove('is-waving'); }, 2200);
    }
    // Saluda solo una vez, al entrar (y no si las animaciones están en pausa)
    if (!reduce && !paused) setTimeout(function () { if (!monkey.classList.contains('is-perched') && !paused) wave(); }, 1400);
  })();

  /* =========================
     IDIOMA
     ========================= */
  function applyLang(l, save) {
    if (!T[l]) return;
    lang = l;
    root.lang = l;
    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n')); if (v === undefined) return;
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = v; else el.textContent = v;
    });
    $$('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $$('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'))); });
    $$('[data-i18n-href]').forEach(function (el) { el.setAttribute('href', t(el.getAttribute('data-i18n-href'))); });
    $$('.lang-option').forEach(function (o) { o.classList.toggle('active', o.getAttribute('data-lang') === l); });
    // Lo que se arma con JS.
    buildWords(); var keep = shown; shown = -1; showWord(keep < 0 ? active : keep); orbLabel(active);
    buildManifesto(); onScroll();
    pauseTxt.textContent = t(paused ? 'pause.play' : 'pause.stop');
    navToggle.setAttribute('aria-label', t(navLinks.classList.contains('active') ? 'nav.menuClose' : 'nav.menu'));
    $('#xNomiGain').textContent = t('nomi.gain').replace('{n}', money(38000));
    $$('[data-amt]').forEach(function (b) { b.textContent = money(+b.dataset.amt); });
    if (!scrambling) scrEl.textContent = t('next.name');
    setCode();
    copyTxt.textContent = t(copyBtn.classList.contains('ok') ? 'cta.copied' : 'cta.copy');
    acts.forEach(function (a, k) { paint(k, curP[k], true); });
    if (save) { try { localStorage.setItem('dimonkey-lang', l); } catch (e) { /* ignorar */ } }
  }
  var langToggle = $('#langToggle');
  langToggle.addEventListener('click', function () { applyLang(lang === 'en' ? 'es' : 'en', true); });
  $$('.lang-option', langToggle).forEach(function (o) {
    o.addEventListener('click', function (e) { e.stopPropagation(); var l = o.getAttribute('data-lang'); if (l !== lang) applyLang(l, true); });
  });

  /* =========================
     UN SOLO BUCLE
     ========================= */
  function onScroll() {
    var vh = innerHeight;
    if (pinned) {
      var g = theaterGeom(), raw = clamp((scrollY - g.top) / g.len) * acts.length;
      var i = Math.min(acts.length - 1, Math.floor(raw)), local = clamp(raw - i);
      // El primero se arma cuando el escenario ya se ve, no antes.
      if (scrollY < g.top - vh * 0.45) setAct(-1);
      else { setAct(i); paint(i, clamp(local * 1.35)); }
      rail.forEach(function (b, k) { $('b', b).style.setProperty('--f', k < i ? 1 : k === i ? local.toFixed(3) : 0); });
    }
    if (!reduce && mw.length) {
      var r = mani.getBoundingClientRect();
      var p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.35));
      var n = Math.round(p * mw.length);
      if (n !== maniLit) { maniLit = n; mw.forEach(function (w, k) { w.classList.toggle('lit', k < n); }); }
    }
  }
  var ticking = false;
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); } }, { passive: true });
  var rsT = null;
  addEventListener('resize', function () { clearTimeout(rsT); rsT = setTimeout(function () { sizeGrid(); setMode(); onScroll(); if (paused) drawGrid(0); }, 120); });

  function frame(tm) {
    var dy = scrollY - lastY; lastY = scrollY; vel += (Math.abs(dy) - vel) * 0.1;
    mxs += (mx - mxs) * 0.05;
    if (!paused) {
      if (heroVisible) {
        drawGrid(tm);
        if (!orbitHover && tm - lastCycle > 3200) { lastCycle = tm; goTo((active + 1) % 4); }
      }
      var third = band.scrollWidth / 3;
      bandX -= 0.6 + Math.min(vel, 40) * 0.12; if (-bandX >= third) bandX += third;
      band.style.transform = 'translate3d(' + bandX.toFixed(1) + 'px,0,0)';
      // Sin escenario fijo: cada monolito se arma solo al aparecer.
      if (!pinned) acts.forEach(function (a, k) { if (autoStart[k] != null) paint(k, clamp((tm - autoStart[k]) / 3600)); });
      if (footVisible) {
        GL.forEach(function (g, i) {
          var target;
          if (gHover != null) { var r = g.o.getBoundingClientRect(); target = clamp(1 - Math.abs(gHover - (r.left + r.width / 2)) / (innerWidth * 0.16)); }
          else { var ph = (tm * 0.00035) % 1.6 - 0.3; target = clamp(1 - Math.abs(ph - i / 7) * 3.2) * 0.85; }
          g.k += (target - g.k) * 0.12;
          g.o.style.setProperty('--k', g.k.toFixed(3)); g.f.style.setProperty('--k', g.k.toFixed(3));
        });
      }
    } else if (!pinned) {
      acts.forEach(function (a, k) { if (autoStart[k] != null) paint(k, 1); });
    }
    phi += (phiT - phi) * (paused ? 1 : 0.07);
    placeOrbit();
    requestAnimationFrame(frame);
  }

  // En pausa: todo queda en su estado final y quieto.
  onPause.push(function (v) {
    if (v) { drawGrid(0); giantStill(0.5); band.style.transform = 'translate3d(0,0,0)'; }
  });

  // Arranque
  try { var saved = localStorage.getItem('dimonkey-lang'); if (saved && T[saved]) lang = saved; } catch (e) { /* ignorar */ }
  sizeGrid(); setMode();
  applyLang(lang, false);
  setPaused(paused, false);
  onScroll();
  requestAnimationFrame(frame);
})();
