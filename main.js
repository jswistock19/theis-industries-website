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
