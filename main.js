/* =========================================================
   THEIS INDUSTRIES — MAIN JS
   Gold theme. Nav, toggles, patents/affiliates injection.
   ========================================================= */

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 30
      ? '0 4px 30px rgba(0,0,0,0.7), 0 0 30px rgba(212,175,55,0.08)'
      : 'none';
  }
});

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) links.classList.toggle('open');
}

function toggleCard(el) {
  el.classList.toggle('open');
}

function handleSubmit(e) {
  e.preventDefault();
  const form = document.querySelector('.contact-form');
  const success = document.getElementById('form-success');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
}

/* ============ PATENTS SECTION ============ */
(function () {
  const patents = [
    { id: 'US8698594B2', title: 'Biometric Authentication & Device Security System', year: '2014', desc: 'System, device and method for securing a user device component by authenticating the user of a biometric sensor through replication of a portion of an authentication process performed at a remote computing device.', tag: 'Security & Biometrics' },
    { id: 'US20240067518A1', title: 'Form-Coded Underground Storage Tank Filling Port', year: '2024', desc: 'A form-coded collar assembly that attaches around a filling pipe of an underground fuel storage tank, with a radial lip defining an opening — preventing cross-contamination during fuel delivery.', tag: 'Industrial / Energy' },
    { id: 'US20070058843A1', title: 'Secure Identification Device for Verifying Operator Identity', year: '2007', desc: 'Fingerprint registration and verification device for amusement rides and operator-controlled systems — preventing unauthorized persons from starting or operating equipment.', tag: 'Security & Biometrics' },
    { id: 'US20060202797A1', title: 'Biometric Fingerprint Theft Deterrent for Motor Vehicles', year: '2006', desc: 'Anti-theft device for motor vehicles using biometric fingerprint verification to authorize vehicle operation — preventing unauthorized starts.', tag: 'Automotive Security' },
    { id: 'WO2006098986A2', title: 'Biometric Vehicle Anti-Theft — International (WIPO)', year: '2006', desc: 'International filing of biometric fingerprint anti-theft device for motor vehicles — enabling fleet, OEM, and global vehicle security deployments.', tag: 'Automotive Security' }
  ];

  const pending = [
    { title: 'Theis Tekton™ Liquid Polymer Armor Composition', tag: 'Materials Science', year: 'Patent Pending', desc: 'Proprietary liquid-applied polymer system (Liquid Kevlar™) that cures on demand into ballistic, blast, and impact-resistant protective layers — deployable on any substrate.' },
    { title: 'On-Demand Variable-Hardness Polymer System', tag: 'Advanced Polymers', year: 'Patent Pending', desc: 'A reformulated polymer that transitions from flexible (gum-like) to rigid (steel-like) hardness on demand — enabling adaptive armor, vibration damping, and shock isolation.' },
    { title: 'Self-Healing Protective Coating System', tag: 'Coatings & Repair', year: 'Patent Pending', desc: 'Self-healing chemistry for protective coatings on marine, aerospace, and infrastructure surfaces — automatically restoring barrier integrity after impact or abrasion.' },
    { title: 'Rapid-Cure Deep-Sea Repair Compound', tag: 'Marine / Subsea', year: 'Patent Pending', desc: 'A submersible-applied repair compound that cures in 3–10 seconds underwater at depth — enabling emergency hull, pipeline, and structural repairs without dry-docking.' },
    { title: 'Lightweight Multi-Strike Body Armor System', tag: 'Defense / Ballistics', year: 'Patent Pending', desc: 'Tekton-based body armor with multi-strike capability, minimal back-face deformation, and weight savings over current market offerings — engineered for DoD and law enforcement.' },
    { title: 'Spray-Applied Vehicle Armor Coating', tag: 'Defense / Vehicle', year: 'Patent Pending', desc: 'Tekton-based spray-applied armor coating that bonds to legacy vehicle platforms — retrofit ballistic and blast protection without structural modification.' },
    { title: 'Blast-Attenuating Structural Panel System', tag: 'Structural Defense', year: 'Patent Pending', desc: 'Modular structural panels engineered for blast overpressure attenuation in command centers, embassies, fortified buildings, and forward operating bases.' },
    { title: 'Radar-Absorbent Functional Coating', tag: 'Stealth / Coatings', year: 'Patent Pending', desc: 'Specialty coating formulation reducing radar cross-section signatures on aerospace, naval, and ground defense platforms.' },
    { title: 'Anti-Corrosion Pipeline Coating System', tag: 'Oil & Gas', year: 'Patent Pending', desc: 'Long-life protective coating system for oil, gas, and water pipelines — resistant to salt, chemicals, abrasion, and microbial corrosion.' },
    { title: 'Submersible Hull Restoration Polymer', tag: 'Marine / Subsea', year: 'Patent Pending', desc: 'Diver or ROV-applied polymer for in-water hull repair on naval vessels, commercial shipping, and offshore platforms.' },
    { title: 'High-Temperature Aerospace Thermal Barrier', tag: 'Aerospace', year: 'Patent Pending', desc: 'Thermal barrier coating engineered for re-entry, exhaust nozzle, and hypersonic platform surfaces.' },
    { title: 'Cryogenic-Stable Sealant Formulation', tag: 'Aerospace / Energy', year: 'Patent Pending', desc: 'Sealant compound that maintains flexibility and bond strength at cryogenic temperatures — for LNG, hydrogen, and aerospace fuel systems.' },
    { title: 'Biocompatible Surgical Implant Coating', tag: 'Medical', year: 'Patent Pending', desc: 'Coating formulation for medical implants — promoting tissue integration, reducing inflammation, and extending implant service life.' },
    { title: 'Nano-Reinforced Composite Matrix', tag: 'Nanoengineering', year: 'Patent Pending', desc: 'Polymer composite reinforced with engineered nanoparticles to dramatically increase strength, impact resistance, and thermal performance.' },
    { title: 'Rapid-Deployment Field Repair Kit', tag: 'Defense / Logistics', year: 'Patent Pending', desc: 'Compact field repair kit enabling soldiers and operators to perform emergency structural and ballistic repairs in austere environments.' },
    { title: 'Modular Reactive Armor Tile System', tag: 'Defense / Vehicle', year: 'Patent Pending', desc: 'Bolt-on modular armor tiles using Tekton-reinforced composites — field-replaceable, scalable threat protection for tactical vehicles.' },
    { title: 'Electrically Conductive Polymer Coating', tag: 'Electronics / EMI', year: 'Patent Pending', desc: 'Functional coating providing electrical conductivity and EMI shielding while maintaining mechanical protection.' }
  ];

  const affiliates = [
    { icon: '◆', title: 'Manufacturing Partners', desc: 'Contract manufacturing partners producing Tekton-based armor, coatings, and protective systems at scale.' },
    { icon: '◆', title: 'Defense Primes & OEMs', desc: 'Working with prime defense contractors and OEMs to integrate Theis technology into vehicle, body, and structural armor platforms.' },
    { icon: '◆', title: 'Research Institutions', desc: 'Collaborations with universities and national labs on advanced materials, nanoengineering, and quantum applications.' },
    { icon: '◆', title: 'Marine & Energy Operators', desc: 'Deployments with offshore, subsea, and energy operators using Tekton for hull, pipeline, and structural protection.' },
    { icon: '◆', title: 'Licensing Partners', desc: 'Companies licensing Theis IP for use within their own production operations and end markets.' },
    { icon: '◆', title: 'International Distribution', desc: 'Global distribution and integration partners deploying Theis technologies across allied nations and commercial markets.' }
  ];

  function buildPatentsSection() {
    if (document.getElementById('patents')) return;
    const sec = document.createElement('section');
    sec.id = 'patents';

    const allCards = [...patents.map(p => ({
      url: `https://patents.google.com/patent/${p.id}/en`,
      external: true,
      ...p
    })), ...pending.map(p => ({ url: 'contact.html', external: false, id: 'INQUIRE FOR DETAILS', ...p }))];

    sec.innerHTML = `
      <div class="container">
        <p class="eyebrow">Intellectual Property &amp; Network</p>
        <h2>Patents &amp; Affiliates</h2>
        <p class="section-sub">Our intellectual property portfolio includes <strong style="color:var(--accent-light)">multiple issued U.S. patents</strong>, an <strong style="color:var(--accent-light)">international WIPO filing</strong>, and <strong style="color:var(--accent-light)">17+ pending applications</strong> spanning biometric security, advanced materials (Theis Tekton™), defense ballistics, marine, aerospace, medical, and industrial systems — backed by a network of manufacturers, defense primes, research institutions, and commercial partners.</p>
        <div class="patents-grid">
          ${allCards.map(p => `
            <a class="patent-card" href="${p.url}"${p.external ? ' target="_blank" rel="noopener"' : ''}>
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
            ${affiliates.map(a => `
              <div class="affiliate-card">
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

    const footer = document.querySelector('footer');
    const finalCta = document.querySelector('#cta, .final-cta');
    const target = finalCta || footer;
    if (target && target.parentNode) {
      target.parentNode.insertBefore(sec, target);
    } else {
      document.body.appendChild(sec);
    }

    // Add nav link if missing (on home page)
    const navLinks = document.getElementById('navLinks');
    if (navLinks && !navLinks.querySelector('a[href="#patents"]')) {
      const li = document.createElement('li');
      li.innerHTML = '<a href="#patents">Patents</a>';
      const contactLi = navLinks.querySelector('.nav-cta')?.closest('li');
      if (contactLi) navLinks.insertBefore(li, contactLi); else navLinks.appendChild(li);
    }
  }

  document.addEventListener('DOMContentLoaded', buildPatentsSection);
})();

