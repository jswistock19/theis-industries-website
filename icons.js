/* Theis Industries — Inline SVG icon library
   Monoline, gold accent, premium defense aesthetic.
   All icons are 1.5px stroke, 24x24 viewBox, currentColor stroke.
*/
const THEIS_ICONS = {
  // Disciplines / Hero pillars
  chemistry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7.5 14h9"/><circle cx="10" cy="17" r=".6" fill="currentColor"/><circle cx="13.5" cy="18" r=".6" fill="currentColor"/></svg>',
  physics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>',
  engineering: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z"/></svg>',

  // Industries
  defense: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  aerospace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3c4 1 6 4 6 6-2 0-4 1-5 2l-3 3-4 6-2-2 3-5-4 1-2-2 6-3 3-3c1-1 2-3 2-5z"/></svg>',
  marine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16c2 1 3 1 4.5 0S10 15 12 16s3 1 4.5 0S19 15 21 16"/><path d="M3 20c2 1 3 1 4.5 0S10 19 12 20s3 1 4.5 0S19 19 21 20"/><path d="M12 4v8M8 8l4-4 4 4"/></svg>',
  energy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  industrial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l6 3v-3l6 3V7l6 4v10H3z"/><path d="M7 17h2M11 17h2M15 17h2"/></svg>',
  medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18" stroke-width="2"/><circle cx="12" cy="12" r="10"/></svg>',
  construction: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11"/><path d="M10 21v-6h4v6"/></svg>',
  oilgas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 7 6 10 6 13a6 6 0 0 0 12 0c0-3-2-6-6-11z"/><path d="M10 13a2 2 0 0 0 2 2"/></svg>',

  // Defense applications
  bodyarmor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 5 5v7c0 4 3 7 7 8 4-1 7-4 7-8V5l-3-2H8z"/><path d="M9 11l2 2 4-4"/></svg>',
  vehiclearmor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16V10l3-4h12l3 4v6h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3z"/><path d="M6 10h12"/></svg>',
  structural: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M4 21V8h16v13M4 8 12 3l8 5"/><path d="M9 21v-6h6v6"/></svg>',
  blast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M5 5l2 2M2 12h3M5 19l2-2M12 22v-3M19 19l-2-2M22 12h-3M19 5l-2 2"/><circle cx="12" cy="12" r="4"/></svg>',
  stealth: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c3-4 6-6 10-6s7 2 10 6c-3 4-6 6-10 6S5 16 2 12z"/><circle cx="12" cy="12" r="2.5"/></svg>',

  // Capabilities - Chemistry
  chem_eng: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6L4 18a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L15 9V3M8 3h8"/></svg>',
  coatings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h12l4 4v4l-2 2v9H7v-7l-3-3z"/><path d="M16 7h4"/></svg>',
  textile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/><path d="M7 3v18M12 3v18M17 3v18"/></svg>',
  household: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6l1 4-2 2v9h-4V9L8 7z"/><path d="M10 13h4"/></svg>',
  biomolecular: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3c0 4 14 4 14 11s-14 7-14 0M5 21c0-4 14-4 14-11"/><path d="M7 7h10M7 17h10"/></svg>',
  metallurgical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h16l-2 7H6z"/><path d="M7 14V8a5 5 0 0 1 10 0v6"/></svg>',
  ceramics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10l-1 5a4 4 0 1 1-8 0z"/><path d="M9 15v6h6v-6"/></svg>',
  polymers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.5 10.5 10.5 7.5M13.5 7.5l3 3M16.5 13.5l-3 3M10.5 16.5l-3-3"/></svg>',
  crystals: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 9l8 13 8-13z"/><path d="M4 9h16M12 2v20"/></svg>',
  biomaterials: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 3-6 6-6 10a6 6 0 0 0 12 0c0-4-3-7-6-10z"/><path d="M9 13a3 3 0 0 0 3 3"/></svg>',
  corrosion: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c3-3 5 3 8 0s5 3 8 0M4 17c3-3 5 3 8 0s5 3 8 0M4 7c3-3 5 3 8 0s5 3 8 0"/></svg>',
  materials: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',

  // Capabilities - General Engineering
  manufacturing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l6 3v-3l6 3V7l6 4v10z"/></svg>',
  molecular: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><circle cx="5" cy="6" r="1.5"/><circle cx="19" cy="6" r="1.5"/><circle cx="5" cy="18" r="1.5"/><circle cx="19" cy="18" r="1.5"/><path d="M6.3 7 10.5 11M17.7 7 13.5 11M6.3 17 10.5 13M17.7 17 13.5 13"/></svg>',
  mechanical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
  interdisciplinary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><circle cx="12" cy="6" r="4"/></svg>',
  environmental: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-3 6-7 8-7 13a7 7 0 0 0 14 0c0-5-4-7-7-13z"/><path d="M12 8v10"/></svg>',
  geotechnical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20M4 18l4-6 4 4 4-7 4 9"/><circle cx="8" cy="6" r="2"/></svg>',
  structural_eng: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V7l9-4 9 4v14"/><path d="M3 21h18M9 21v-6h6v6M9 11h6"/></svg>',
  transport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="12" rx="2"/><path d="M4 13h16"/><circle cx="8" cy="19" r="1.5"/><circle cx="16" cy="19" r="1.5"/></svg>',
  utility: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
  water: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-4 6-7 9-7 13a7 7 0 0 0 14 0c0-4-3-7-7-13z"/></svg>',

  // Capabilities - Electrical
  electronic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v3M12 4v3M16 4v3M8 17v3M12 17v3M16 17v3M4 8h3M4 12h3M4 16h3M17 8h3M17 12h3M17 16h3"/><rect x="9" y="9" width="6" height="6"/></svg>',
  power: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
  optical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
  acoustical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4h3l5 4V6L6 10z"/><path d="M15 9c1 1 1 5 0 6M18 7c2 2 2 8 0 10"/></svg>',
  optomechanical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h12l5 5-5 5H3z"/><circle cx="14" cy="12" r="2"/></svg>',
  thermal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 8v6"/></svg>',
  vehicle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16V11l3-5h12l3 5v5h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3z"/><path d="M6 11h12"/></svg>',
  powerplant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V11l3-2h2V5h4v4h2l3 2v10z"/><path d="M9 21v-4h6v4"/></svg>',
  industrial_plant: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l6 3v-3l6 3V7l6 4v10z"/><path d="M7 17h2M11 17h2M15 17h2"/></svg>',
  energy_eng: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>',
  agricultural: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M12 9c-3-3-7-1-7-1s0 4 3 5 4-1 4-4zM12 9c3-3 7-1 7-1s0 4-3 5-4-1-4-4zM12 16c-2-2-5-1-5-1s0 3 2 4 3-1 3-3zM12 16c2-2 5-1 5-1s0 3-2 4-3-1-3-3z"/></svg>',
  nano: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r=".8" fill="currentColor"/><circle cx="6" cy="8" r=".6" fill="currentColor"/><circle cx="18" cy="8" r=".6" fill="currentColor"/><circle cx="6" cy="16" r=".6" fill="currentColor"/><circle cx="18" cy="16" r=".6" fill="currentColor"/><path d="M6 8 12 12 18 8M6 16 12 12 18 16M12 4v16"/></svg>',
  quantum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></svg>',
  nuclear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 4a8 8 0 0 1 7 4l-4 2.5M5 8a8 8 0 0 1 7-4M5 8l4 2.5M12 20l0-4.5M12 20a8 8 0 0 0 7-4l-4-2.5M5 16a8 8 0 0 0 7 4M5 16l4-2.5"/></svg>',
  petroleum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V8l8-4v4h8v12z"/><path d="M8 12v4M14 12v4M18 12v4"/></svg>',

  // Engagement / licensing
  licensing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="4"/><path d="M11 12l8-8 3 3-3 3-2-2-3 3"/></svg>',
  acquisition: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h5v5M19 3l-9 9M5 21h14M5 21v-9l5-3 4 3v9"/></svg>',
  partnership: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 11l3 3 2-2 4 4-3 3-9-9 3-3z"/><path d="M14 6l4 4M11 4l3-1 3 1 1 3-1 3"/></svg>',
  production: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V10l6 3v-3l6 3V7l6 4v10z"/></svg>',
  rd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5"/></svg>',
  document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',

  // Generic / values / contact
  diamond: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18M9 3l3 6 3-6M9 9l3 12 3-12"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 7 9-7"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
};

// Mount: scan elements with [data-icon] and inject the corresponding SVG
window.mountTheisIcons = function mountTheisIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.getAttribute('data-icon');
    if (THEIS_ICONS[key]) {
      el.innerHTML = THEIS_ICONS[key];
      el.classList.add('theis-icon');
    }
  });
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.mountTheisIcons);
} else {
  window.mountTheisIcons();
}
