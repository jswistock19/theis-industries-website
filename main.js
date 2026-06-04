/* =========================================================
   THEIS INDUSTRIES INC. — MAIN.JS
   Gold-on-Black Defense Brand · Full Feature Set
   ========================================================= */

/* ============================================================
   SECTION 1 — PAGE LOAD TRANSITION
   ============================================================ */
(function initPageTransition() {
  // Inject overlay div
  const overlay = document.createElement('div');
  overlay.id = 'page-overlay';
  document.body.prepend(overlay);

  // Remove overlay after animation (~600ms)
  overlay.addEventListener('animationend', () => {
    overlay.style.display = 'none';
  });

  // Add loaded class to body
  window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
  });
})();

/* ============================================================
   SECTION 2 — CUSTOM CURSOR (gold diamond dot with lerp lag)
   ============================================================ */
(function initCursor() {
  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  document.body.appendChild(dot);

  let mouseX = -100, mouseY = -100;
  let curX = -100, curY = -100;
  let rafId = null;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Lerp factor — lower = more lag
  const LERP = 0.18;

  function animateCursor() {
    curX += (mouseX - curX) * LERP;
    curY += (mouseY - curY) * LERP;
    dot.style.left = curX + 'px';
    dot.style.top  = curY + 'px';
    rafId = requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover state on interactive elements
  const hoverTargets = 'a, button, [onclick], .pillar, .industry-card, .license-card, .defense-card, .faq-item, .cap-card, .division-card, .patent-card, .ind-detail-header, input, textarea, select, label, .cs-card, .stat-item, .case-card, .case-study-card, .metrics-bar, .client-name, .case-badge';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) dot.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) dot.classList.remove('cursor-hover');
  });

  document.addEventListener('mousedown', () => dot.classList.add('cursor-click'));
  document.addEventListener('mouseup',   () => dot.classList.remove('cursor-click'));

  // Hide on touch devices
  document.addEventListener('touchstart', () => {
    dot.style.display = 'none';
    document.body.style.cursor = 'auto';
    cancelAnimationFrame(rafId);
  }, { once: true });
})();

/* ============================================================
   SECTION 3 — NAV SCROLL BEHAVIOR
   ============================================================ */
(function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ============================================================
   SECTION 4 — HAMBURGER MENU
   ============================================================ */
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const burger = document.querySelector('.hamburger');
  if (!links) return;
  links.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}

// Close nav when clicking outside on mobile
document.addEventListener('click', (e) => {
  const links = document.querySelector('.nav-links');
  const nav   = document.getElementById('navbar');
  if (!links || !nav) return;
  if (links.classList.contains('open') && !nav.contains(e.target)) {
    links.classList.remove('open');
    const burger = document.querySelector('.hamburger');
    if (burger) burger.classList.remove('open');
  }
});

// Dropdown trigger: tap/click to toggle. The trigger is an href="#" link with
// no real target, so on desktop hover already works — here we make it reliably
// open on click/tap (essential on touch devices where :hover never fires).
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.nav-dropdown-trigger');
  if (!trigger) return;
  const dropdown = trigger.closest('.nav-dropdown');
  if (!dropdown) return;
  e.preventDefault();
  e.stopPropagation();
  const wasOpen = dropdown.classList.contains('open');
  // Close any other open dropdowns first.
  document.querySelectorAll('.nav-dropdown.open').forEach((d) => {
    if (d !== dropdown) d.classList.remove('open');
  });
  dropdown.classList.toggle('open', !wasOpen);
});

// Close any open dropdown when clicking outside of it.
document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-dropdown')) return;
  document.querySelectorAll('.nav-dropdown.open').forEach((d) => d.classList.remove('open'));
});

/* ============================================================
   SECTION 5 — ACTIVE NAV LINK (current page detection)
   ============================================================ */
(function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .divisions-dropdown a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefPage = href.split('/').pop().split('#')[0];
    // Match exact filename, or treat '' as index.html
    if (
      hrefPage === currentPage ||
      (currentPage === '' && hrefPage === 'index.html') ||
      (currentPage === 'index.html' && hrefPage === '')
    ) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   SECTION 6 — SMOOTH SCROLL for anchor links
   ============================================================ */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (href === '#' || href.length < 2) return; // ignore bare/empty anchors (e.g. dropdown trigger)
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();

  // Honor the target's CSS scroll-margin-top when set (handles sticky sub-nav
  // bars like the Industries tab rail); otherwise fall back to nav height.
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
  const smt = parseInt(getComputedStyle(target).scrollMarginTop) || 0;
  const offset = smt > 0 ? smt : navH + 16;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });

  // Make sure anything inside the jumped-to section is revealed immediately,
  // so a scroll target never lands on permanently-hidden (opacity:0) content.
  target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    .forEach((el) => el.classList.add('visible'));
  if (target.classList.contains('reveal')) target.classList.add('visible');

  // Close mobile nav if open
  const navLinks = document.querySelector('.nav-links');
  if (navLinks?.classList.contains('open')) toggleMenu();
});

/* ============================================================
   SECTION 8 — INTERSECTION OBSERVER REVEAL
   Adds .visible to .reveal elements; staggers siblings
   ============================================================ */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      // Check if it's a sibling group (stagger)
      const parent = el.parentElement;
      const siblings = parent
        ? [...parent.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')]
        : [];

      const index = siblings.indexOf(el);
      const delay = index >= 0 ? index * 80 : 0;

      setTimeout(() => el.classList.add('visible'), delay);
      observer.unobserve(el);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  function observeRevealElements() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
      observer.observe(el);
    });
  }

  observeRevealElements();
  // Re-observe after dynamic content injected (patents)
  window._reobserveReveal = observeRevealElements;
})();

/* ============================================================
   SECTION 9 — STAT COUNTER ANIMATION
   Elements: <span class="stat-num" data-target="38" data-suffix="+">
   ============================================================ */
(function initStatCounters() {
  function easeOutQuad(t) { return t * (2 - t); }

  function countUp(el) {
    const target   = parseFloat(el.dataset.target);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const duration = 1600;
    const start    = performance.now();
    const isFloat  = String(target).includes('.');

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = easeOutQuad(progress);
      const current  = target * eased;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target + suffix;
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      countUp(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num[data-target]').forEach((el) => observer.observe(el));
})();

/* ============================================================
   SECTION 10 — ACCORDION TOGGLE (cards, faq, industries)
   ============================================================ */
function toggleCard(el) {
  const isOpen = el.classList.contains('open');
  // Optionally close other cards in the same group
  // (only for faq items — keep defense/cap cards independent)
  if (el.classList.contains('faq-item')) {
    const siblings = el.parentElement?.querySelectorAll('.faq-item.open') || [];
    siblings.forEach((s) => { if (s !== el) s.classList.remove('open'); });
  }
  el.classList.toggle('open', !isOpen);
}

/* ============================================================
   SECTION 11 — MAGNETIC HOVER EFFECT
   On .pillar, .industry-card, .license-card, .division-card
   Mouse position within card → subtle translate toward cursor
   ============================================================ */
(function initMagnetic() {
  const SELECTORS = '.pillar, .industry-card, .license-card, .division-card, .patent-card';
  const MAX_SHIFT = 8; // px

  function applyMagnetic(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      const dx = ((e.clientX - cx) / (rect.width  / 2)) * MAX_SHIFT;
      const dy = ((e.clientY - cy) / (rect.height / 2)) * MAX_SHIFT;
      card.style.transform = `translateY(-4px) translate(${dx}px, ${dy}px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  }

  function initAll() {
    document.querySelectorAll(SELECTORS).forEach((card) => {
      // Avoid double-binding
      if (card.dataset.magneticBound) return;
      card.dataset.magneticBound = '1';
      applyMagnetic(card);
    });
  }

  // Initial pass + after patent injection
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
  window._reinitMagnetic = initAll;
})();

/* ============================================================
   SECTION 12 — POSTURE STRIP MARQUEE
   Duplicate the content for seamless infinite scroll
   ============================================================ */
(function initPostureMarquee() {
  const row = document.querySelector('.posture-row');
  if (!row) return;

  // Wrap in track + duplicate
  const parent = row.parentElement;
  const track  = document.createElement('div');
  track.className = 'posture-track';

  const clone  = row.cloneNode(true);
  row.classList.remove('posture-row');
  clone.classList.remove('posture-row');

  track.appendChild(row);
  track.appendChild(clone);
  parent.appendChild(track);
})();

/* ============================================================
   SECTION 13 — HANDLE SUBMIT (contact form)
   ============================================================ */
function handleSubmit(e) {
  e.preventDefault();
  const form    = document.querySelector('.contact-form') || e.target;
  const wrap    = document.querySelector('.contact-form-wrap');
  const success = document.getElementById('form-success');

  if (form) form.style.display = 'none';
  if (success) {
    success.style.display = 'block';
    success.innerHTML = `
      <div style="font-size:2.5rem;margin-bottom:1rem;color:var(--accent)">◆</div>
      <h3>Message Received</h3>
      <p>Thank you for contacting Theis Industries. We'll respond within one business day.</p>
      <a href="index.html" class="btn-secondary" style="margin-top:1.5rem;display:inline-block">Return Home</a>
    `;
  }

  // Fallback if no #form-success element
  if (!success && wrap) {
    wrap.innerHTML = `
      <div class="form-success">
        <div style="font-size:2.5rem;margin-bottom:1rem;color:var(--accent)">◆</div>
        <h3>Message Received</h3>
        <p>Thank you for contacting Theis Industries. We'll respond within one business day.</p>
        <a href="index.html" class="btn-secondary" style="margin-top:1.5rem;display:inline-block">Return Home</a>
      </div>
    `;
  }
}

/* ============================================================
   SECTION 14 — PAGE NAVIGATION WITH TRANSITION
   Intercept internal links, play exit animation, then navigate
   ============================================================ */
(function initPageTransitionLinks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip: anchors, external links, mailto, tel, javascript:
    if (
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      href.startsWith('javascript') ||
      link.target === '_blank' ||
      link.hasAttribute('data-no-transition')
    ) return;

    e.preventDefault();

    const overlay = document.getElementById('page-overlay');
    if (overlay) {
      overlay.style.display = 'block';
      overlay.style.animation = 'none';
      overlay.style.opacity   = '0';
      overlay.offsetHeight; // reflow
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity   = '1';
    }

    document.body.classList.add('exiting');

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
})();

/* ============================================================
   SECTION 15 — PATENTS + AFFILIATES INJECTION
   Preserves all data from original main.js exactly.
   ============================================================ */
(function () {
  const patents = [
    {
      id: 'US8698594B2',
      title: 'Biometric Authentication & Device Security System',
      year: '2014',
      desc: 'System, device and method for securing a user device component by authenticating the user of a biometric sensor through replication of a portion of an authentication process performed at a remote computing device.',
      tag: 'Security & Biometrics'
    },
    {
      id: 'US20240067518A1',
      title: 'Form-Coded Underground Storage Tank Filling Port',
      year: '2024',
      desc: 'A form-coded collar assembly that attaches around a filling pipe of an underground fuel storage tank, with a radial lip defining an opening — preventing cross-contamination during fuel delivery.',
      tag: 'Industrial / Energy'
    },
    {
      id: 'US20070058843A1',
      title: 'Secure Identification Device for Verifying Operator Identity',
      year: '2007',
      desc: 'Fingerprint registration and verification device for amusement rides and operator-controlled systems — preventing unauthorized persons from starting or operating equipment.',
      tag: 'Security & Biometrics'
    },
    {
      id: 'US20060202797A1',
      title: 'Biometric Fingerprint Theft Deterrent for Motor Vehicles',
      year: '2006',
      desc: 'Anti-theft device for motor vehicles using biometric fingerprint verification to authorize vehicle operation — preventing unauthorized starts.',
      tag: 'Automotive Security'
    },
    {
      id: 'WO2006098986A2',
      title: 'Biometric Vehicle Anti-Theft — International (WIPO)',
      year: '2006',
      desc: 'International filing of biometric fingerprint anti-theft device for motor vehicles — enabling fleet, OEM, and global vehicle security deployments.',
      tag: 'Automotive Security'
    }
  ];

  const pending = [
    { title: 'Theis Tekton™ Liquid Polymer Armor Composition',       tag: 'Materials Science',     year: 'Patent Pending', desc: 'Proprietary liquid-applied polymer system (Liquid Kevlar™) that cures on demand into ballistic, blast, and impact-resistant protective layers — deployable on any substrate.' },
    { title: 'On-Demand Variable-Hardness Polymer System',            tag: 'Advanced Polymers',     year: 'Patent Pending', desc: 'A reformulated polymer that transitions from flexible (gum-like) to rigid (steel-like) hardness on demand — enabling adaptive armor, vibration damping, and shock isolation.' },
    { title: 'Self-Healing Protective Coating System',                tag: 'Coatings & Repair',     year: 'Patent Pending', desc: 'Self-healing chemistry for protective coatings on marine, aerospace, and infrastructure surfaces — automatically restoring barrier integrity after impact or abrasion.' },
    { title: 'Rapid-Cure Deep-Sea Repair Compound',                   tag: 'Marine / Subsea',       year: 'Patent Pending', desc: 'A submersible-applied repair compound that cures in 3–10 seconds underwater at depth — enabling emergency hull, pipeline, and structural repairs without dry-docking.' },
    { title: 'Lightweight Multi-Strike Body Armor System',            tag: 'Defense / Ballistics',  year: 'Patent Pending', desc: 'Tekton-based body armor with multi-strike capability, minimal back-face deformation, and weight savings over current market offerings — engineered for DoD and law enforcement.' },
    { title: 'Spray-Applied Vehicle Armor Coating',                   tag: 'Defense / Vehicle',     year: 'Patent Pending', desc: 'Tekton-based spray-applied armor coating that bonds to legacy vehicle platforms — retrofit ballistic and blast protection without structural modification.' },
    { title: 'Blast-Attenuating Structural Panel System',             tag: 'Structural Defense',    year: 'Patent Pending', desc: 'Modular structural panels engineered for blast overpressure attenuation in command centers, embassies, fortified buildings, and forward operating bases.' },
    { title: 'Radar-Absorbent Functional Coating',                    tag: 'Stealth / Coatings',    year: 'Patent Pending', desc: 'Specialty coating formulation reducing radar cross-section signatures on aerospace, naval, and ground defense platforms.' },
    { title: 'Anti-Corrosion Pipeline Coating System',                tag: 'Oil & Gas',             year: 'Patent Pending', desc: 'Long-life protective coating system for oil, gas, and water pipelines — resistant to salt, chemicals, abrasion, and microbial corrosion.' },
    { title: 'Submersible Hull Restoration Polymer',                  tag: 'Marine / Subsea',       year: 'Patent Pending', desc: 'Diver or ROV-applied polymer for in-water hull repair on naval vessels, commercial shipping, and offshore platforms.' },
    { title: 'High-Temperature Aerospace Thermal Barrier',            tag: 'Aerospace',             year: 'Patent Pending', desc: 'Thermal barrier coating engineered for re-entry, exhaust nozzle, and hypersonic platform surfaces.' },
    { title: 'Cryogenic-Stable Sealant Formulation',                  tag: 'Aerospace / Energy',    year: 'Patent Pending', desc: 'Sealant compound that maintains flexibility and bond strength at cryogenic temperatures — for LNG, hydrogen, and aerospace fuel systems.' },
    { title: 'Biocompatible Surgical Implant Coating',                tag: 'Medical',               year: 'Patent Pending', desc: 'Coating formulation for medical implants — promoting tissue integration, reducing inflammation, and extending implant service life.' },
    { title: 'Nano-Reinforced Composite Matrix',                      tag: 'Nanoengineering',       year: 'Patent Pending', desc: 'Polymer composite reinforced with engineered nanoparticles to dramatically increase strength, impact resistance, and thermal performance.' },
    { title: 'Rapid-Deployment Field Repair Kit',                     tag: 'Defense / Logistics',   year: 'Patent Pending', desc: 'Compact field repair kit enabling soldiers and operators to perform emergency structural and ballistic repairs in austere environments.' },
    { title: 'Modular Reactive Armor Tile System',                    tag: 'Defense / Vehicle',     year: 'Patent Pending', desc: 'Bolt-on modular armor tiles using Tekton-reinforced composites — field-replaceable, scalable threat protection for tactical vehicles.' },
    { title: 'Electrically Conductive Polymer Coating',               tag: 'Electronics / EMI',     year: 'Patent Pending', desc: 'Functional coating providing electrical conductivity and EMI shielding while maintaining mechanical protection.' }
  ];

  const affiliates = [
    { icon: '◆', title: 'Manufacturing Partners',       desc: 'Contract manufacturing partners producing Tekton-based armor, coatings, and protective systems at scale.' },
    { icon: '◆', title: 'Defense Primes & OEMs',        desc: 'Working with prime defense contractors and OEMs to integrate Theis technology into vehicle, body, and structural armor platforms.' },
    { icon: '◆', title: 'Research Institutions',        desc: 'Collaborations with universities and national labs on advanced materials, nanoengineering, and quantum applications.' },
    { icon: '◆', title: 'Marine & Energy Operators',    desc: 'Deployments with offshore, subsea, and energy operators using Tekton for hull, pipeline, and structural protection.' },
    { icon: '◆', title: 'Licensing Partners',           desc: 'Companies licensing Theis IP for use within their own production operations and end markets.' },
    { icon: '◆', title: 'International Distribution',   desc: 'Global distribution and integration partners deploying Theis technologies across allied nations and commercial markets.' }
  ];

  function buildPatentsSection() {
    if (document.getElementById('patents')) return;

    const sec = document.createElement('section');
    sec.id = 'patents';

    const allCards = [
      ...patents.map((p) => ({
        url: `https://patents.google.com/patent/${p.id}/en`,
        external: true,
        ...p
      })),
      ...pending.map((p) => ({
        url: 'contact.html',
        external: false,
        id: 'INQUIRE FOR DETAILS',
        ...p
      }))
    ];

    sec.innerHTML = `
      <div class="container">
        <p class="eyebrow">Intellectual Property &amp; Network</p>
        <h2>Patents &amp; Affiliates</h2>
        <p class="section-sub">Our intellectual property portfolio includes <strong style="color:var(--accent-light)">multiple issued U.S. patents</strong>, an <strong style="color:var(--accent-light)">international WIPO filing</strong>, and <strong style="color:var(--accent-light)">17+ pending applications</strong> spanning biometric security, advanced materials (Theis Tekton™), defense ballistics, marine, aerospace, medical, and industrial systems — backed by a network of manufacturers, defense primes, research institutions, and commercial partners.</p>
        <div class="patents-grid">
          ${allCards.map((p) => `
            <a class="patent-card reveal" href="${p.url}"${p.external ? ' target="_blank" rel="noopener"' : ''}>
              <div class="patent-tag">${p.tag}</div>
              <div class="patent-year">${p.year}</div>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <div class="patent-id">${p.id} <span class="patent-arrow">→</span></div>
            </a>
          `).join('')}
        </div>

        <div id="affiliates-block">
          <h3 class="affiliates-heading">Affiliates &amp; Partners</h3>
          <p class="affiliates-sub">Theis Industries collaborates with manufacturers, research institutions, defense contractors, and commercial partners to bring proprietary technologies to market.</p>
          <div class="affiliates-grid">
            ${affiliates.map((a) => `
              <div class="affiliate-card reveal">
                <div class="aff-icon">${a.icon}</div>
                <h4>${a.title}</h4>
                <p>${a.desc}</p>
              </div>
            `).join('')}
          </div>
          <p class="affiliates-cta">Interested in partnering with Theis Industries? <a href="contact.html">Start a conversation →</a></p>
        </div>

        <p class="patents-foot">View the full inventor portfolio on <a href="https://patents.google.com/?inventor=Jason+Theis" target="_blank" rel="noopener">Google Patents</a> — or <a href="contact.html">contact us</a> to discuss licensing, IP partnerships, or pending applications.</p>
      </div>
    `;

    const finalCta = document.querySelector('#cta, .final-cta');
    const footer   = document.querySelector('footer');
    const target   = finalCta || footer;

    if (target && target.parentNode) {
      target.parentNode.insertBefore(sec, target);
    } else {
      document.body.appendChild(sec);
    }

    // Mount SVG icons in injected content
    if (typeof mountTheisIcons === 'function') {
      try { mountTheisIcons(); } catch (e) {}
    }

    // Re-observe reveal elements in new content
    if (typeof window._reobserveReveal === 'function') window._reobserveReveal();
    if (typeof window._reinitMagnetic  === 'function') window._reinitMagnetic();
  }

  document.addEventListener('DOMContentLoaded', buildPatentsSection);
})();

/* ============================================================
   SECTION 16 — ICONS MOUNTING (call after DOM mutations)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof mountTheisIcons === 'function') {
    try { mountTheisIcons(); } catch (e) {}
  }
});

/* ============================================================
   SECTION 17 — MISC INIT ON DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Cursor: hide default on all interactive elements ---- */
  document.querySelectorAll('a, button, [onclick], input, textarea, select').forEach((el) => {
    el.style.cursor = 'none';
  });

  /* ---- Mark process section for CSS connector animation ---- */
  const hww = document.getElementById('howwework');
  if (hww) {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        hww.classList.add('in-view');
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(hww);
  }

  /* ---- Add .reveal to key content blocks automatically ---- */
  const autoRevealSelectors = [
    '.pillar',
    '.industry-card',
    '.division-card',
    '.defense-card',
    '.license-card',
    '.diff-card',
    '.process-step',
    '.timeline-item',
    '.value-item',
    '.leader-card',
    '.affiliate-card',
    '.spoke-product-card'
  ];

  autoRevealSelectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });
  });

  // Trigger observer for newly-classed elements
  if (typeof window._reobserveReveal === 'function') window._reobserveReveal();

  /* ---- Section headings reveal ---- */
  document.querySelectorAll('section .eyebrow, section .section-label, section h2, section .section-sub').forEach((el) => {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });
  if (typeof window._reobserveReveal === 'function') window._reobserveReveal();

});

/* ============================================================
   LEGACY COMPATIBILITY — keep toggleCard global
   ============================================================ */
window.toggleMenu  = toggleMenu;
window.toggleCard  = toggleCard;
window.handleSubmit = handleSubmit;

/* ============================================================
   MOBILE FIX PATCH
   ============================================================ */
(function mobileFixPatch() {
  const isMobile = () => window.innerWidth <= 768;

  /* 1. On mobile, force-reveal ALL reveal elements immediately
        so blank dead zones never appear from missed intersections */
  function forceRevealOnMobile() {
    if (!isMobile()) return;
    document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    ).forEach(el => el.classList.add('visible'));
  }

  // Run immediately + after dynamic content (patents section) loads
  forceRevealOnMobile();
  setTimeout(forceRevealOnMobile, 800);
  setTimeout(forceRevealOnMobile, 2000);

  // Re-run whenever patents/dynamic sections inject content
  const origReobserve = window._reobserveReveal;
  window._reobserveReveal = function() {
    if (origReobserve) origReobserve();
    forceRevealOnMobile();
  };

  /* 2. Fix any element with inline position:sticky that slips through
        CSS specificity on mobile */
  function fixStickyOnMobile() {
    if (!isMobile()) return;
    document.querySelectorAll('[style*="sticky"]').forEach(el => {
      el.style.position = 'static';
    });
  }
  fixStickyOnMobile();

  /* 3. Back to top button — inject if missing */
  if (!document.getElementById('back-to-top')) {
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.innerHTML = '&#8679;';
    btn.setAttribute('aria-label', 'Back to top');
    btn.style.cssText = `
      display: none;
      position: fixed;
      bottom: 1.5rem;
      right: 1.25rem;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(212,175,55,0.15);
      border: 1px solid rgba(212,175,55,0.4);
      color: #d4af37;
      font-size: 1.4rem;
      line-height: 1;
      cursor: pointer;
      z-index: 999;
      backdrop-filter: blur(8px);
      transition: opacity 0.3s ease, background 0.2s ease;
    `;
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 600 ? 'flex' : 'none';
      btn.style.alignItems = 'center';
      btn.style.justifyContent = 'center';
    }, { passive: true });
  }

  /* 4. Prevent horizontal scroll — kill any overflowing child on mobile */
  function killHorizontalOverflow() {
    if (!isMobile()) return;
    // Find elements wider than viewport and constrain them
    const vw = window.innerWidth;
    document.querySelectorAll('section, .container, .section-inner').forEach(el => {
      if (el.scrollWidth > vw + 4) {
        el.style.overflow = 'hidden';
        el.style.maxWidth = '100vw';
      }
    });
  }
  setTimeout(killHorizontalOverflow, 500);
  window.addEventListener('resize', killHorizontalOverflow, { passive: true });

})();
