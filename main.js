window.addEventListener('scroll',()=>{
  const nav=document.getElementById('navbar');
  if(nav) nav.style.boxShadow=window.scrollY>30?'0 4px 30px rgba(0,0,0,0.6)':'none';
});
function toggleMenu(){
  const links=document.querySelector('.nav-links');
  if(links) links.classList.toggle('open');
}
function toggleCard(el){
  el.classList.toggle('open');
}
function handleSubmit(e){
  e.preventDefault();
  const form=document.querySelector('.contact-form');
  const success=document.getElementById('form-success');
  if(form) form.style.display='none';
  if(success) success.style.display='block';
}


// ============ AUTO IMAGE INJECTION ============
(function(){
  const U='https://images.unsplash.com/';
  const Q='?w=900&q=80&auto=format&fit=crop';
  const industryImages = {
    'defense': 'photo-1541339907198-e08756dedf3f',
    'aerospace': 'photo-1517976547714-720226b864c1',
    'marine': 'photo-1605281317010-fe5ffe798166',
    'energy': 'photo-1509391366360-2e959784a276',
    'industrial': 'photo-1565008447742-97f6f38c985c',
    'medical': 'photo-1576091160399-112ba8d25d1d',
    'infrastructure': 'photo-1486325212027-8081e485255e',
    'petroleum': 'photo-1518623489648-a173ef7824f3',
    'oil': 'photo-1518623489648-a173ef7824f3'
  };
  const defenseImages = [
    'photo-1584438784894-089d6a62b8fa',
    'photo-1569241055005-13eb0e3e91f6',
    'photo-1582139329536-e7284fece509',
    'photo-1574790398664-0cb6ccd1d59c',
    'photo-1518709268805-4e9042af2176'
  ];
  const capImages = [
    'photo-1581093588401-fbb62a02f120',
    'photo-1581092160562-40aa08e78837',
    'photo-1518770660439-4636190af475'
  ];
  function img(id, alt, cls){
    const i=document.createElement('img');
    i.src=U+id+Q; i.alt=alt||''; i.loading='lazy';
    if(cls) i.className=cls;
    return i;
  }
  document.addEventListener('DOMContentLoaded', function(){
    // Industry cards (link-based or class-based)
    document.querySelectorAll('a[href*="industries.html#"], .ind-card, .industry-card').forEach(el=>{
      const href=(el.getAttribute('href')||'').toLowerCase();
      let key=Object.keys(industryImages).find(k=>href.includes('#'+k));
      if(!key){
        const txt=(el.textContent||'').toLowerCase();
        key=Object.keys(industryImages).find(k=>txt.includes(k));
      }
      if(key && !el.querySelector('img')){
        el.insertBefore(img(industryImages[key], key, 'ind-image'), el.firstChild);
      }
    });
    // Defense / blast cards
    const blastCards=document.querySelectorAll('.blast-card, .defense-card');
    blastCards.forEach((el,i)=>{
      if(!el.querySelector('img')){
        el.insertBefore(img(defenseImages[i%defenseImages.length], 'Defense', 'blast-image'), el.firstChild);
      }
    });
    // Capability category headers - insert before h3 inside cap groups
    document.querySelectorAll('.cap-group, .capability-group').forEach((el,i)=>{
      if(!el.querySelector('.cap-img')){
        const h=el.querySelector('h3,h2');
        const im=img(capImages[i%capImages.length], 'Capability', 'cap-img');
        if(h) el.insertBefore(im, h); else el.insertBefore(im, el.firstChild);
      }
    });
    // Page hero overlay if section has class hero-page or id contact-hero, etc.
    ['contact-hero','about-hero','industries-hero','page-hero'].forEach(id=>{
      const e=document.getElementById(id);
      if(e) e.classList.add('page-hero');
    });
  });
})();

// ============ PATENTS SECTION INJECTION ============
(function(){
  const patents = [
    { id:'US8698594B2', title:'Biometric Authentication & Device Security System', year:'2014', desc:'System, device and method for securing a user device component by authenticating the user of a biometric sensor through replication of a portion of an authentication process performed at a remote computing device.', tag:'Security & Biometrics' },
    { id:'US20240067518A1', title:'Form-Coded Underground Storage Tank Filling Port', year:'2024', desc:'A form-coded collar assembly that attaches around a filling pipe of an underground fuel storage tank, with a radial lip defining an opening — preventing cross-contamination during fuel delivery.', tag:'Industrial / Energy' },
    { id:'US20070058843A1', title:'Secure Identification Device for Verifying Operator Identity', year:'2007', desc:'Fingerprint registration and verification device for amusement rides and operator-controlled systems — preventing unauthorized persons from starting or operating equipment.', tag:'Security & Biometrics' },
    { id:'US20060202797A1', title:'Biometric Fingerprint Theft Deterrent for Motor Vehicles', year:'2006', desc:'Anti-theft device for motor vehicles using biometric fingerprint verification to authorize vehicle operation — preventing unauthorized starts.', tag:'Automotive Security' }
  ];
  function buildPatentsSection(){
    if(document.getElementById('patents')) return;
    const sec=document.createElement('section');
    sec.id='patents';
    sec.innerHTML=`
      <div class="container">
        <p class="eyebrow">Intellectual Property</p>
        <h2>Jason Theis — Issued Patents</h2>
        <p class="section-sub">A portfolio of issued U.S. patents covering biometric security, industrial materials, and protective systems — invented by Jason Theis, founder of Theis Industries.</p>
        <div class="patents-grid">
          ${patents.map(p=>`
            <a class="patent-card" href="https://patents.google.com/patent/${p.id}/en" target="_blank" rel="noopener">
              <div class="patent-tag">${p.tag}</div>
              <div class="patent-year">${p.year}</div>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <div class="patent-id">${p.id} <span class="patent-arrow">→</span></div>
            </a>
          `).join('')}
        </div>
        <p class="patents-foot">View the full inventor portfolio on <a href="https://patents.google.com/?inventor=Jason+Theis" target="_blank" rel="noopener">Google Patents</a>.</p>
      </div>
    `;
    // Insert before footer / final CTA
    const footer=document.querySelector('footer');
    const finalCta=document.querySelector('#cta, .final-cta');
    const target= finalCta || footer;
    if(target && target.parentNode){
      target.parentNode.insertBefore(sec, target);
    } else {
      document.body.appendChild(sec);
    }
    // Add nav link if missing
    const navLinks=document.getElementById('navLinks');
    if(navLinks && !navLinks.querySelector('a[href="#patents"]')){
      const li=document.createElement('li');
      li.innerHTML='<a href="#patents">Patents</a>';
      const contactLi=navLinks.querySelector('.nav-cta')?.closest('li');
      if(contactLi) navLinks.insertBefore(li, contactLi); else navLinks.appendChild(li);
    }
  }
  document.addEventListener('DOMContentLoaded', buildPatentsSection);
})();

// ============ EXTENDED PATENTS - PORTFOLIO ============
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const sec = document.getElementById('patents');
    if(!sec) return;
    const grid = sec.querySelector('.patents-grid');
    if(!grid) return;
    const more = [
      { id:'WO2006098986A2', title:'Biometric Vehicle Anti-Theft — International', year:'2006', tag:'Automotive Security', desc:'International (WIPO) filing of biometric fingerprint anti-theft device for motor vehicles — enabling fleet, OEM, and global vehicle security deployments.' },
      { id:'Pending', title:'Theis Tekton™ Liquid Polymer Armor Composition', year:'Patent Pending', tag:'Materials Science', desc:'Proprietary liquid-applied polymer system (Liquid Kevlar™) that cures on demand into ballistic, blast, and impact-resistant protective layers — deployable on any substrate.' },
      { id:'Pending', title:'On-Demand Variable-Hardness Polymer System', year:'Patent Pending', tag:'Advanced Polymers', desc:'A reformulated polymer that transitions from flexible (gum-like) to rigid (steel-like) hardness on demand — enabling adaptive armor, vibration damping, and shock isolation.' },
      { id:'Pending', title:'Self-Healing Protective Coating System', year:'Patent Pending', tag:'Coatings & Repair', desc:'Self-healing chemistry for protective coatings on marine, aerospace, and infrastructure surfaces — automatically restoring barrier integrity after impact or abrasion.' },
      { id:'Pending', title:'Rapid-Cure Deep-Sea Repair Compound', year:'Patent Pending', tag:'Marine / Subsea', desc:'A submersible-applied repair compound that cures in 3–10 seconds underwater at depth — enabling emergency hull, pipeline, and structural repairs without dry-docking.' },
      { id:'Pending', title:'Lightweight Multi-Strike Body Armor System', year:'Patent Pending', tag:'Defense / Ballistics', desc:'Tekton-based body armor with multi-strike capability, minimal back-face deformation, and weight savings over current market offerings — engineered for DoD and law enforcement.' }
    ];
    more.forEach(p=>{
      const a=document.createElement('a');
      a.className='patent-card';
      const isPending=p.id==='Pending';
      a.href = isPending ? 'contact.html' : `https://patents.google.com/patent/${p.id}/en`;
      if(!isPending){ a.target='_blank'; a.rel='noopener'; }
      a.innerHTML = `
        <div class="patent-tag">${p.tag}</div>
        <div class="patent-year">${p.year}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="patent-id">${isPending?'INQUIRE FOR DETAILS':p.id} <span class="patent-arrow">→</span></div>
      `;
      grid.appendChild(a);
    });
    const foot = sec.querySelector('.patents-foot');
    if(foot){
      foot.innerHTML = 'View the full inventor portfolio on <a href="https://patents.google.com/?inventor=Jason+Theis" target="_blank" rel="noopener">Google Patents</a> — or <a href="contact.html">contact us</a> to discuss licensing, IP partnerships, or pending applications.';
    }
    const sub = sec.querySelector('.section-sub');
    if(sub) sub.textContent = 'A portfolio of issued U.S. patents and pending applications spanning biometric security, advanced materials (Theis Tekton™), defense ballistics, and industrial systems — invented by Jason Theis, founder of Theis Industries.';
  });
})();

// ============ PATENTS HEADING UPDATE + AFFILIATES ============
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
      const sec=document.getElementById('patents');
      if(!sec) return;
      const h=sec.querySelector('h2');
      if(h) h.textContent='Patents & Affiliates';
      const sub=sec.querySelector('.section-sub');
      if(sub) sub.textContent='Our intellectual property portfolio spans biometric security, advanced materials (Theis Tekton™), defense ballistics, and industrial systems — backed by issued U.S. patents, pending applications, and a network of partners, manufacturers, and research affiliates.';
      const navLink=document.querySelector('a[href="#patents"]');
      if(navLink) navLink.textContent='Patents';
      // Add Affiliates subsection after the patents grid
      if(!document.getElementById('affiliates-block')){
        const grid=sec.querySelector('.patents-grid');
        if(grid){
          const aff=document.createElement('div');
          aff.id='affiliates-block';
          aff.innerHTML=`
            <h3 class="affiliates-heading">Affiliates & Partners</h3>
            <p class="affiliates-sub">Theis Industries collaborates with manufacturers, research institutions, defense contractors, and commercial partners to bring proprietary technologies to market.</p>
            <div class="affiliates-grid">
              <div class="affiliate-card"><div class="aff-icon">🏭</div><h4>Manufacturing Partners</h4><p>Contract manufacturing partners producing Tekton-based armor, coatings, and protective systems at scale.</p></div>
              <div class="affiliate-card"><div class="aff-icon">🛡️</div><h4>Defense Primes & OEMs</h4><p>Working with prime defense contractors and OEMs to integrate Theis technology into vehicle, body, and structural armor platforms.</p></div>
              <div class="affiliate-card"><div class="aff-icon">🔬</div><h4>Research Institutions</h4><p>Collaborations with universities and national labs on advanced materials, nanoengineering, and quantum applications.</p></div>
              <div class="affiliate-card"><div class="aff-icon">🌊</div><h4>Marine & Energy Operators</h4><p>Deployments with offshore, subsea, and energy operators using Tekton for hull, pipeline, and structural protection.</p></div>
              <div class="affiliate-card"><div class="aff-icon">💼</div><h4>Licensing Partners</h4><p>Companies licensing Theis IP for use within their own production operations and end markets.</p></div>
              <div class="affiliate-card"><div class="aff-icon">🌍</div><h4>International Distribution</h4><p>Global distribution and integration partners deploying Theis technologies across allied nations and commercial markets.</p></div>
            </div>
            <p class="affiliates-cta">Interested in partnering with Theis Industries? <a href="contact.html">Start a conversation →</a></p>
          `;
          grid.parentNode.insertBefore(aff, grid.nextSibling);
        }
      }
    }, 200);
  });
})();
