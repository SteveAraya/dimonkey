/* ============================================
   DiMonkey Landing Page — main.js
   Animations, particles, interactivity, i18n
   ============================================ */

(function () {
  'use strict';

  /* =========================
     i18n — TRANSLATIONS
     ========================= */
  var translations = {
    en: {
      'nav.home': 'Home',
      'nav.products': 'Products',
      'nav.vision': 'Vision',
      'nav.team': 'Team',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in touch',
      'hero.badge': '🚀 The next unicorn is being built',
      'hero.title': 'Building solutions<br><span class="gradient-text">that matter</span>',
      'hero.subtitle': 'We are a Latin American startup building digital products that transform people\'s lives. We started in Costa Rica, but our vision is global.',
      'hero.btn_products': 'See our products',
      'hero.btn_vision': 'Our vision',
      'products.label': 'Our Solutions',
      'products.title': 'Products that make<br><span class="gradient-text">a difference</span>',
      'products.imhomi_desc': 'The app to find your ideal home in Costa Rica. Search apartments and houses with pet and roommate filters.',
      'products.learn_more': 'Learn more',
      'products.nomi_desc': 'Your AI-powered finance companion. Track expenses, savings, and budgets. Snap a photo of any receipt and let AI categorize it instantly.',
      'products.nomi_status': '🔨 In development',
      'products.nomi_f1': '📊 Smart charts',
      'products.nomi_f2': '📸 Receipt scanner',
      'products.nomi_f3': '🐜 Ant expense alerts',
      'products.next_title': 'Next Solution',
      'products.in_dev': '🔨 In development',
      'products.next_desc': 'Something big is coming. Stay tuned.',
      'vision.label': 'Why DiMonkey?',
      'vision.title': 'Built with <span class="gradient-text">purpose</span>',
      'vision.problem_title': 'Problem First',
      'vision.problem_desc': 'We identify real problems before writing a single line of code.',
      'vision.latam_title': 'Latin America & Beyond',
      'vision.latam_desc': 'We were born in Costa Rica but we build for the world.',
      'vision.unicorn_title': 'Unicorn Mindset',
      'vision.unicorn_desc': 'We don\'t build apps, we build the future.',
      'team.label': 'The people behind it',
      'team.title': 'Two people,<br><span class="gradient-text">one obsession</span>',
      'team.intro': 'We both build and we both bring ideas. The titles only say where the final call lands.',
      'team.f1_role': 'Co-founder & CEO',
      'team.f2_role': 'Co-founder & CTO',
      'stats.product': 'Products in progress',
      'stats.country': 'Country (for now)',
      'stats.problems': 'Problems to solve',
      'stats.founded': 'Year founded',
      'cta.title': 'Want to be part of<br><span class="gradient-text">the journey?</span>',
      'cta.subtitle': 'We keep building. If you have an idea, want to collaborate, or simply want to know what\'s next — write to us.',
      'footer.privacy': 'Privacy',
      'footer.contact': 'Contact',
      'footer.copyright': '© ' + new Date().getFullYear() + ' DiMonkey. All rights reserved.',
      'footer.love': 'Built with 💜 from Costa Rica',
      'footer.support': 'Support us ☕',
      'support.title': 'Fuel the <span class="gradient-text">monkey</span>',
      'support.text': 'Keeping these projects alive has real costs: servers, domains and many hours of work. If something we make helps you, you can buy us a coffee. It\'s completely voluntary, and it means a lot.',
      'support.button': 'Buy us a coffee',
      'support.note': 'Secure payment via Ko-fi · PayPal or card'
    },
    es: {
      'nav.home': 'Inicio',
      'nav.products': 'Productos',
      'nav.vision': 'Visión',
      'nav.team': 'Equipo',
      'nav.contact': 'Contacto',
      'nav.cta': 'Contáctanos',
      'hero.badge': '🚀 El próximo unicornio se está construyendo',
      'hero.title': 'Construyendo soluciones<br><span class="gradient-text">que importan</span>',
      'hero.subtitle': 'Somos una startup latinoamericana creando productos digitales que transforman la vida de las personas. Empezamos en Costa Rica, pero nuestra visión es global.',
      'hero.btn_products': 'Ver nuestros productos',
      'hero.btn_vision': 'Nuestra visión',
      'products.label': 'Nuestras Soluciones',
      'products.title': 'Productos que hacen<br><span class="gradient-text">la diferencia</span>',
      'products.imhomi_desc': 'La app para encontrar tu hogar ideal en Costa Rica. Busca apartamentos y casas con filtros de mascotas y roommates.',
      'products.learn_more': 'Saber más',
      'products.nomi_desc': 'Tu compañero financiero con IA. Controlá gastos, ahorros y presupuestos. Tomale foto a cualquier factura y dejá que la IA la categorice al instante.',
      'products.nomi_status': '🔨 En desarrollo',
      'products.nomi_f1': '📊 Gráficos inteligentes',
      'products.nomi_f2': '📸 Escáner de facturas',
      'products.nomi_f3': '🐜 Alertas de gastos hormiga',
      'products.next_title': 'Próxima Solución',
      'products.in_dev': '🔨 En desarrollo',
      'products.next_desc': 'Algo grande se viene. Mantenete atento.',
      'vision.label': '¿Por qué DiMonkey?',
      'vision.title': 'Construido con <span class="gradient-text">propósito</span>',
      'vision.problem_title': 'El Problema Primero',
      'vision.problem_desc': 'Identificamos problemas reales antes de escribir una sola línea de código.',
      'vision.latam_title': 'Latinoamérica y Más Allá',
      'vision.latam_desc': 'Nacimos en Costa Rica pero construimos para el mundo.',
      'vision.unicorn_title': 'Mentalidad Unicornio',
      'vision.unicorn_desc': 'No construimos apps, construimos el futuro.',
      'team.label': 'Quiénes están detrás',
      'team.title': 'Dos personas,<br><span class="gradient-text">una obsesión</span>',
      'team.intro': 'Los dos programamos y los dos traemos ideas. Los títulos solo dicen dónde se toma la decisión final.',
      'team.f1_role': 'Co-fundador & CEO',
      'team.f2_role': 'Co-fundador & CTO',
      'stats.product': 'Productos en progreso',
      'stats.country': 'País (por ahora)',
      'stats.problems': 'Problemas por resolver',
      'stats.founded': 'Año de fundación',
      'cta.title': '¿Querés ser parte<br><span class="gradient-text">del viaje?</span>',
      'cta.subtitle': 'Seguimos construyendo. Si tenés una idea, querés colaborar o simplemente querés saber qué sigue — escribinos.',
      'footer.privacy': 'Privacidad',
      'footer.contact': 'Contacto',
      'footer.copyright': '© ' + new Date().getFullYear() + ' DiMonkey. Todos los derechos reservados.',
      'footer.love': 'Hecho con 💜 desde Costa Rica',
      'footer.support': 'Apoyanos ☕',
      'support.title': 'Cargale combustible al <span class="gradient-text">mono</span>',
      'support.text': 'Mantener estos proyectos vivos tiene costos reales: servidores, dominios y muchas horas de trabajo. Si algo de lo que hacemos te sirve, podés invitarnos un café. Es totalmente voluntario y significa muchísimo.',
      'support.button': 'Invitanos un café',
      'support.note': 'Pago seguro con Ko-fi · PayPal o tarjeta'
    }
  };

  var currentLang = 'en';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update the html lang attribute
    document.documentElement.lang = lang;

    // Update all translatable elements
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var text = translations[lang][key];
      if (!text) return;

      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });

    // Update toggle UI
    var options = document.querySelectorAll('.lang-option');
    options.forEach(function (opt) {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Persist preference
    try { localStorage.setItem('dimonkey-lang', lang); } catch (e) { /* ignore */ }
  }

  function initLanguageToggle() {
    var toggle = document.getElementById('langToggle');
    if (!toggle) return;

    toggle.addEventListener('click', function () {
      var newLang = currentLang === 'en' ? 'es' : 'en';
      setLanguage(newLang);
    });

    // Also allow clicking individual options
    var options = toggle.querySelectorAll('.lang-option');
    options.forEach(function (opt) {
      opt.addEventListener('click', function (e) {
        e.stopPropagation();
        var lang = opt.getAttribute('data-lang');
        if (lang !== currentLang) {
          setLanguage(lang);
        }
      });
    });

    // Load saved preference
    try {
      var saved = localStorage.getItem('dimonkey-lang');
      if (saved && translations[saved]) {
        setLanguage(saved);
      }
    } catch (e) { /* ignore */ }
  }

  // ---- DOM Ready ----
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initLanguageToggle();
    initCustomCursor();
    initHeader();
    initMobileNav();
    initHeroCanvas();
    initScrollAnimations();
    initStatCounters();
    initSupportSpotlight();
  }

  /* =========================
     CUSTOM CURSOR (desktop)
     ========================= */
  function initCustomCursor() {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var cursor = document.getElementById('customCursor');
    var glow = document.getElementById('cursorGlow');
    if (!cursor || !glow) return;

    var cx = -100, cy = -100;
    var gx = -100, gy = -100;

    document.addEventListener('mousemove', function (e) {
      cx = e.clientX;
      cy = e.clientY;
    });

    function animate() {
      gx += (cx - gx) * 0.15;
      gy += (cy - gy) * 0.15;

      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      glow.style.left = gx + 'px';
      glow.style.top = gy + 'px';

      requestAnimationFrame(animate);
    }
    animate();

    var interactives = document.querySelectorAll('a, button, .product-card, .vision-card');
    interactives.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.classList.add('hovering');
        glow.classList.add('hovering');
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('hovering');
        glow.classList.remove('hovering');
      });
    });
  }

  /* =========================
     HEADER — transparent → solid
     ========================= */
  function initHeader() {
    var header = document.getElementById('header');
    if (!header) return;

    function checkScroll() {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /* =========================
     MOBILE NAV
     ========================= */
  function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      links.classList.toggle('active');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('active');
        links.classList.remove('active');
      });
    });
  }

  /* =========================
     HERO CANVAS — Particle grid
     ========================= */
  function initHeroCanvas() {
    var canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var particles = [];
    var mouse = { x: -9999, y: -9999 };
    var numParticles;
    var connectDist;
    var w, h;

    function resize() {
      w = canvas.parentElement.offsetWidth;
      h = canvas.parentElement.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var area = w * h;
      numParticles = Math.min(Math.floor(area / 12000), 120);
      connectDist = Math.min(w, h) * 0.15;
      connectDist = Math.max(connectDist, 100);
      connectDist = Math.min(connectDist, 180);

      createParticles();
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(123, 47, 255, ' + p.opacity + ')';
        ctx.fill();

        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x;
          var dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            var alpha = (1 - dist / connectDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(123, 47, 255, ' + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        var mdx = p.x - mouse.x;
        var mdy = p.y - mouse.y;
        var mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 150) {
          var force = (150 - mDist) / 150 * 0.02;
          p.vx += mdx * force;
          p.vy += mdy * force;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
      }

      if (mouse.x > 0 && mouse.y > 0) {
        var gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
        gradient.addColorStop(0, 'rgba(123, 47, 255, 0.06)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function () {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    window.addEventListener('resize', debounce(resize, 200));
    resize();
    draw();
  }

  /* =========================
     SCROLL ANIMATIONS
     ========================= */
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* =========================
     STAT COUNTERS
     ========================= */
  function initStatCounters() {
    var statNumbers = document.querySelectorAll('.stat-number[data-target]');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
      observer.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'));
    var duration = target > 100 ? 1800 : 1200;
    var start = performance.now();

    function step(timestamp) {
      var progress = Math.min((timestamp - start) / duration, 1);
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(ease * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(step);
  }

  /* =========================
     SUPPORT CARD SPOTLIGHT
     ========================= */
  function initSupportSpotlight() {
    var card = document.querySelector('.support-card-inner');
    if (!card || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
    card.addEventListener('mouseleave', function () {
      card.style.removeProperty('--mx');
      card.style.removeProperty('--my');
    });
  }

  /* =========================
     UTILS
     ========================= */
  function debounce(fn, ms) {
    var timer;
    return function () {
      clearTimeout(timer);
      var args = arguments;
      var context = this;
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, ms);
    };
  }

})();
