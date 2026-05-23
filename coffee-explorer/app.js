// ---------- DATA ----------
const beans = [
  {
    name: "Arabica",
    origin: "Ethiopia · Brazil · Colombia",
    personality: "The refined classicist",
    fact: "Comprising roughly 60 percent of global production, Arabica thrives at altitude in cool, consistent climates. Its sugars develop slowly, yielding a delicate, aromatic cup with measured acidity.",
    altitude: "600–2200 m",
    species: "Coffea arabica",
    process: "Washed, Natural, Honey",
    body: 60, acidity: 80, sweetness: 75, bitterness: 35
  },
  {
    name: "Robusta",
    origin: "Vietnam · India · West Africa",
    personality: "The assertive workhorse",
    fact: "With nearly twice the caffeine of Arabica and a higher tolerance for heat and pests, Robusta is the backbone of traditional Italian espresso blends and instant coffee.",
    altitude: "0–800 m",
    species: "Coffea canephora",
    process: "Natural, Wet-hulled",
    body: 95, acidity: 30, sweetness: 25, bitterness: 90
  },
  {
    name: "Liberica",
    origin: "Philippines · Malaysia",
    personality: "The uncommon variety",
    fact: "Recognisable by its asymmetric, almond-shaped beans, Liberica produces a singular cup — smoky, woody, and faintly floral — with a profile unlike any other commercial species.",
    altitude: "300–700 m",
    species: "Coffea liberica",
    process: "Natural",
    body: 80, acidity: 50, sweetness: 55, bitterness: 70
  },
  {
    name: "Excelsa",
    origin: "Southeast Asia",
    personality: "The fruit-forward outlier",
    fact: "Reclassified as a Liberica varietal, Excelsa contributes tart, dark-fruit notes that are often used to add complexity and depth to multi-origin blends.",
    altitude: "400–800 m",
    species: "Coffea liberica var. dewevrei",
    process: "Natural",
    body: 55, acidity: 85, sweetness: 60, bitterness: 50
  },
  {
    name: "Geisha",
    origin: "Panama · Ethiopia",
    personality: "The ceremonial cultivar",
    fact: "Originating in the Gori Gesha forest of Ethiopia and made famous by Panama's Hacienda La Esmeralda, Geisha commands record prices for its jasmine, bergamot, and stone-fruit clarity.",
    altitude: "1500–2000 m",
    species: "Coffea arabica var. Geisha",
    process: "Washed, Natural",
    body: 45, acidity: 90, sweetness: 90, bitterness: 20
  },
  {
    name: "Bourbon",
    origin: "Réunion · Latin America",
    personality: "The heritage standard",
    fact: "A natural mutation discovered on the island of Bourbon (now Réunion), this varietal is celebrated for its sweetness and balance, and remains the genetic ancestor of many modern cultivars.",
    altitude: "1100–2000 m",
    species: "Coffea arabica var. Bourbon",
    process: "Washed, Natural",
    body: 65, acidity: 70, sweetness: 85, bitterness: 40
  }
];

const drinks = [
  { name: "Espresso", desc: "A concentrated extraction. Body, crema, and clarity in a single ounce.", coffee: 100, milk: 0, foam: 0, color: "#3b2417", tags: ["strong"] },
  { name: "Americano", desc: "Espresso lengthened with hot water. Approachable yet defined.", coffee: 50, milk: 0, foam: 0, water: 50, color: "#5c3924", tags: ["strong"] },
  { name: "Latte", desc: "A long pour of steamed milk over espresso, finished with a layer of microfoam.", coffee: 20, milk: 70, foam: 10, color: "#c9a274", tags: ["milky"] },
  { name: "Cappuccino", desc: "Equal thirds of espresso, steamed milk, and foam — the Italian standard.", coffee: 33, milk: 33, foam: 34, color: "#a87850", tags: ["milky"] },
  { name: "Macchiato", desc: "An espresso 'marked' with a measured spoonful of foam.", coffee: 80, milk: 0, foam: 20, color: "#4d2e1c", tags: ["strong"] },
  { name: "Mocha", desc: "Espresso, steamed milk, and chocolate — composed with restraint.", coffee: 30, milk: 50, foam: 20, color: "#7b4d2e", tags: ["sweet", "milky"] },
  { name: "Flat White", desc: "Espresso under velvet microfoam. Espresso-forward, technical, exact.", coffee: 30, milk: 65, foam: 5, color: "#b8895c", tags: ["milky"] },
  { name: "Cortado", desc: "Espresso tempered with an equal measure of warm milk.", coffee: 50, milk: 50, foam: 0, color: "#9a6b44", tags: ["strong"] },
  { name: "Cold Brew", desc: "Coarsely ground coffee, steeped slowly in cold water. Smooth, low in acidity.", coffee: 100, milk: 0, foam: 0, color: "#2a1810", tags: ["cold", "strong"] },
  { name: "Iced Latte", desc: "Espresso poured over cold milk and ice — composed but unhurried.", coffee: 25, milk: 65, foam: 10, color: "#d4b58a", tags: ["cold", "milky"] },
  { name: "Affogato", desc: "Hot espresso poured over cold vanilla gelato. A study in contrast.", coffee: 40, milk: 60, foam: 0, color: "#e6c8a3", tags: ["sweet", "cold"] },
  { name: "Caramel Macchiato", desc: "Vanilla, steamed milk, espresso, and a thread of caramel on the surface.", coffee: 25, milk: 55, foam: 20, color: "#c98e5a", tags: ["sweet", "milky"] },
];

const machines = [
  {
    name: "Espresso Machine",
    category: "Pressure brewer",
    personality: "The professional standard",
    fact: "Forces hot water through finely ground coffee at approximately nine bars of pressure. The result — a concentrated extraction with crema — is the foundation of nearly every café drink.",
    pressure: "9 bar",
    time: "25–30 seconds",
    grind: "Fine",
    yield: "30–60 ml",
    intensity: 95, body: 90, clarity: 65, ease: 35
  },
  {
    name: "French Press",
    category: "Immersion brewer",
    personality: "The full-bodied traditionalist",
    fact: "Coarse grounds steep directly in hot water before being separated by a metal mesh. Oils and fines pass through, producing a heavy, sediment-rich cup.",
    pressure: "None",
    time: "4 minutes",
    grind: "Coarse",
    yield: "350–1000 ml",
    intensity: 70, body: 95, clarity: 30, ease: 85
  },
  {
    name: "Moka Pot",
    category: "Stovetop brewer",
    personality: "The Italian household icon",
    fact: "Steam pressure from a sealed lower chamber forces water upward through coffee grounds into the upper chamber. Designed by Alfonso Bialetti in 1933.",
    pressure: "1–2 bar",
    time: "5 minutes",
    grind: "Fine–medium",
    yield: "60–300 ml",
    intensity: 85, body: 75, clarity: 50, ease: 70
  },
  {
    name: "Pour-Over",
    category: "Filter brewer",
    personality: "The clarity-focused method",
    fact: "Water is poured by hand over a paper-filtered bed of medium-ground coffee. Variables of pour rate, temperature, and time are entirely under the brewer's control.",
    pressure: "Gravity",
    time: "3–4 minutes",
    grind: "Medium",
    yield: "200–500 ml",
    intensity: 55, body: 40, clarity: 95, ease: 50
  },
  {
    name: "AeroPress",
    category: "Hybrid brewer",
    personality: "The portable polymath",
    fact: "Invented by Alan Adler in 2005, the AeroPress combines short immersion with a gentle plunge through a paper filter. Endlessly adaptable to recipe and grind.",
    pressure: "Manual (~1 bar)",
    time: "1–2 minutes",
    grind: "Fine–medium",
    yield: "60–250 ml",
    intensity: 75, body: 60, clarity: 80, ease: 90
  },
  {
    name: "Siphon",
    category: "Vacuum brewer",
    personality: "The theatrical purist",
    fact: "Vapor pressure pushes water from a lower bulb through coffee in an upper chamber; cooling then draws the brew back through cloth or glass filter. A precise, ceremonial method.",
    pressure: "Vapor",
    time: "5–7 minutes",
    grind: "Medium",
    yield: "300–500 ml",
    intensity: 65, body: 50, clarity: 90, ease: 25
  }
];

const builderOptions = {
  base: [
    { id: "espresso", label: "Single Espresso", color: "#3b2417", caffeine: 60, sweet: 0, cream: 0 },
    { id: "double", label: "Double Espresso", color: "#2a1810", caffeine: 100, sweet: 0, cream: 0 },
    { id: "decaf", label: "Decaffeinated", color: "#5c3924", caffeine: 5, sweet: 5, cream: 0 },
    { id: "coldbrew", label: "Cold Brew Concentrate", color: "#2a1810", caffeine: 80, sweet: 10, cream: 0 },
  ],
  milk: [
    { id: "none", label: "None", color: null, sweet: 0, cream: 0 },
    { id: "whole", label: "Whole Milk", color: "#f7eede", sweet: 10, cream: 70 },
    { id: "oat", label: "Oat Milk", color: "#f0e2c2", sweet: 15, cream: 60 },
    { id: "almond", label: "Almond Milk", color: "#ede0c8", sweet: 5, cream: 40 },
    { id: "soy", label: "Soy Milk", color: "#f5ebd1", sweet: 8, cream: 50 },
  ],
  sweet: [
    { id: "none", label: "Unsweetened", color: null, sweet: 0 },
    { id: "sugar", label: "Cane Sugar", color: null, sweet: 30 },
    { id: "vanilla", label: "Vanilla Syrup", color: "#fff8e0", sweet: 40 },
    { id: "caramel", label: "Caramel", color: "#c68e5b", sweet: 55 },
    { id: "chocolate", label: "Chocolate", color: "#5d3a1f", sweet: 50 },
    { id: "hazelnut", label: "Hazelnut", color: "#a06a3a", sweet: 45 },
  ],
  topping: [
    { id: "none", label: "Uncovered" },
    { id: "foam", label: "Microfoam" },
    { id: "whip", label: "Whipped Cream" },
    { id: "cinnamon", label: "Cinnamon" },
    { id: "cocoa", label: "Cocoa Dust" },
    { id: "nutmeg", label: "Nutmeg" },
  ],
  temp: [
    { id: "hot", label: "Hot" },
    { id: "iced", label: "Iced" },
  ]
};

const builderState = {
  base: "espresso",
  milk: "whole",
  sweet: "none",
  topping: "whip",
  temp: "hot"
};

// ---------- TABS ----------
const tabs = document.querySelectorAll(".nav-link");
const panels = document.querySelectorAll(".panel");
tabs.forEach(t => t.addEventListener("click", () => {
  tabs.forEach(x => x.classList.remove("active"));
  panels.forEach(x => x.classList.remove("active"));
  t.classList.add("active");
  document.getElementById(t.dataset.tab).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}));

// ---------- BEANS ----------
const beanGrid = document.getElementById("beanGrid");
const beanDetail = document.getElementById("beanDetail");

function beanSVG(variant = 0) {
  // Each varietal has its own shape, palette, and groove path — based on real bean morphology.
  const variants = [
    {
      // 0. Arabica — classic elongated oval, medium-dark roast, S-shaped crease
      shape: "M50 10 C66 10 80 26 80 50 C80 74 66 90 50 90 C34 90 20 74 20 50 C20 26 34 10 50 10 Z",
      colors: ["#a88560", "#7a5530", "#3e2614", "#15090a"],
      rim: "#d4a778",
      groove: "M50 12 C53 24 47 36 51 48 C55 60 47 72 51 84 C52 87 50 88 50 88",
      spec: { cx: 36, cy: 26, rx: 14, ry: 9, rot: -25 }
    },
    {
      // 1. Robusta — round and squat, lighter golden-brown, straight crease
      shape: "M50 16 C70 16 84 32 84 52 C84 72 70 86 50 86 C30 86 16 72 16 52 C16 32 30 16 50 16 Z",
      colors: ["#bfa078", "#8a6a44", "#54371e", "#28160a"],
      rim: "#e6c69a",
      groove: "M50 18 L51 50 L50 84",
      spec: { cx: 36, cy: 30, rx: 13, ry: 8, rot: -20 }
    },
    {
      // 2. Liberica — large, asymmetric teardrop, very dark oily roast
      shape: "M52 8 C72 12 86 30 84 50 C82 72 64 90 48 88 C30 86 14 70 14 50 C14 26 32 4 52 8 Z",
      colors: ["#7a5638", "#3e2410", "#1a0c04", "#050200"],
      rim: "#a07a52",
      groove: "M52 12 C58 22 48 34 54 46 C60 58 46 70 52 82 C53 86 50 88 50 88",
      spec: { cx: 38, cy: 24, rx: 12, ry: 8, rot: -28 }
    },
    {
      // 3. Excelsa — elongated teardrop, reddish-mahogany tint, curvy crease
      shape: "M50 6 C66 8 80 26 78 50 C76 72 62 92 50 92 C36 92 22 72 22 50 C22 26 34 4 50 6 Z",
      colors: ["#a86040", "#6e3220", "#3a1410", "#1a0805"],
      rim: "#c98565",
      groove: "M50 10 C56 22 44 32 50 44 C56 56 44 68 50 80 C52 86 50 90 50 90",
      spec: { cx: 36, cy: 22, rx: 13, ry: 8, rot: -25 }
    },
    {
      // 4. Geisha — long, slim, light tan (light roast), gentle wavy crease
      shape: "M50 4 C62 4 74 22 74 50 C74 78 62 96 50 96 C38 96 26 78 26 50 C26 22 38 4 50 4 Z",
      colors: ["#dcc09a", "#a88660", "#6a4a2e", "#382008"],
      rim: "#f4dab2",
      groove: "M50 8 C53 22 48 36 51 50 C54 64 48 78 51 92",
      spec: { cx: 38, cy: 24, rx: 11, ry: 9, rot: -22 }
    },
    {
      // 5. Bourbon — compact rounded oval, warm caramel-brown, classic vertical crease
      shape: "M50 14 C68 14 82 30 82 50 C82 70 68 86 50 86 C32 86 18 70 18 50 C18 30 32 14 50 14 Z",
      colors: ["#b48458", "#7c5430", "#42271a", "#1c0e08"],
      rim: "#dba975",
      groove: "M50 16 C52 28 48 40 51 52 C54 64 48 76 50 84",
      spec: { cx: 36, cy: 28, rx: 13, ry: 9, rot: -20 }
    }
  ];

  const v = variants[variant % variants.length];
  const id = `bn-${variant}`;

  return `
    <svg viewBox="0 0 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="${id}-body" cx="0.32" cy="0.28" r="0.85">
          <stop offset="0" stop-color="${v.colors[0]}"/>
          <stop offset="0.22" stop-color="${v.colors[1]}"/>
          <stop offset="0.6" stop-color="${v.colors[2]}"/>
          <stop offset="1" stop-color="${v.colors[3]}"/>
        </radialGradient>
        <linearGradient id="${id}-rim" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0" stop-color="${v.rim}" stop-opacity="0.5"/>
          <stop offset="0.35" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
        <radialGradient id="${id}-spec" cx="0.25" cy="0.2" r="0.3">
          <stop offset="0" stop-color="#fff6e6" stop-opacity="0.6"/>
          <stop offset="1" stop-color="#fff6e6" stop-opacity="0"/>
        </radialGradient>
        <filter id="${id}-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5"/>
        </filter>
        <filter id="${id}-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6"/>
        </filter>
        <clipPath id="${id}-clip"><path d="${v.shape}"/></clipPath>
      </defs>

      <!-- cast shadow -->
      <ellipse cx="50" cy="94" rx="26" ry="3" fill="#1a1008" opacity="0.28" filter="url(#${id}-shadow)"/>

      <!-- main body -->
      <path d="${v.shape}" fill="url(#${id}-body)"/>

      <!-- groove with shadow + sharp inner -->
      <g clip-path="url(#${id}-clip)">
        <path d="${v.groove}" fill="none" stroke="${v.colors[3]}" stroke-width="6" stroke-linecap="round" opacity="0.85" filter="url(#${id}-soft)"/>
        <path d="${v.groove}" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" opacity="0.9"/>
        <path d="${v.groove}" fill="none" stroke="${v.rim}" stroke-width="0.5" stroke-linecap="round" opacity="0.45" transform="translate(-1.5 0)"/>
      </g>

      <!-- specular highlight -->
      <ellipse cx="${v.spec.cx}" cy="${v.spec.cy}" rx="${v.spec.rx}" ry="${v.spec.ry}"
               fill="url(#${id}-spec)" transform="rotate(${v.spec.rot} ${v.spec.cx} ${v.spec.cy})"/>
      <ellipse cx="${v.spec.cx - 4}" cy="${v.spec.cy - 4}" rx="5" ry="2.5"
               fill="#fff6e6" opacity="0.5" transform="rotate(${v.spec.rot} ${v.spec.cx - 4} ${v.spec.cy - 4})"/>

      <!-- micro surface texture -->
      <g clip-path="url(#${id}-clip)" opacity="0.35">
        <circle cx="62" cy="40" r="0.7" fill="#ffffff" opacity="0.35"/>
        <circle cx="68" cy="52" r="0.5" fill="#ffffff" opacity="0.3"/>
        <circle cx="58" cy="64" r="0.6" fill="#ffffff" opacity="0.3"/>
        <circle cx="42" cy="70" r="0.5" fill="#ffffff" opacity="0.3"/>
        <circle cx="34" cy="56" r="0.6" fill="#ffffff" opacity="0.3"/>
        <circle cx="72" cy="62" r="0.4" fill="#ffffff" opacity="0.25"/>
      </g>

      <!-- rim light -->
      <path d="${v.shape}" fill="url(#${id}-rim)"/>

      <!-- crisp outline -->
      <path d="${v.shape}" fill="none" stroke="${v.colors[3]}" stroke-width="0.6" opacity="0.7"/>
    </svg>
  `;
}

// Bean count label
const beanCountEl = document.getElementById("beanCount");
if (beanCountEl) beanCountEl.textContent = `${beans.length} Varietals`;

let selectedBeanIndex = 0;

beans.forEach((b, i) => {
  const card = document.createElement("div");
  card.className = "bean-card";
  card.dataset.index = i;
  card.innerHTML = `
    <div class="bean-visual">${beanSVG(i)}</div>
    <div class="bean-info">
      <div class="bean-name">${b.name}</div>
      <div class="bean-origin">${b.origin}</div>
    </div>
    <div class="bean-arrow">→</div>
  `;
  card.addEventListener("click", () => selectBean(i));
  beanGrid.appendChild(card);
});

function selectBean(i) {
  selectedBeanIndex = (i + beans.length) % beans.length;
  const cards = document.querySelectorAll(".bean-card");
  cards.forEach(c => c.classList.remove("selected"));
  const target = cards[selectedBeanIndex];
  if (target) {
    target.classList.add("selected");
    // keep selected card in view within the index list
    target.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  showBean(beans[selectedBeanIndex]);
}

function showBean(b) {
  beanDetail.hidden = false;
  const prev = (selectedBeanIndex - 1 + beans.length) % beans.length;
  const next = (selectedBeanIndex + 1) % beans.length;
  beanDetail.innerHTML = `
    <div class="detail-nav">
      <button class="detail-nav-btn" id="beanPrevBtn"><span class="arr">←</span> ${beans[prev].name}</button>
      <span class="detail-nav-current">${String(selectedBeanIndex + 1).padStart(2, '0')} / ${String(beans.length).padStart(2, '0')}</span>
      <button class="detail-nav-btn" id="beanNextBtn">${beans[next].name} <span class="arr">→</span></button>
    </div>
    <div class="detail-left">
      <h2>${b.name}</h2>
      <div class="detail-personality">${b.personality}</div>
      <dl class="detail-meta">
        <div class="detail-meta-row"><dt>Species</dt><dd>${b.species}</dd></div>
        <div class="detail-meta-row"><dt>Origin</dt><dd>${b.origin}</dd></div>
        <div class="detail-meta-row"><dt>Altitude</dt><dd>${b.altitude}</dd></div>
        <div class="detail-meta-row"><dt>Process</dt><dd>${b.process}</dd></div>
      </dl>
      <div class="detail-fact">${b.fact}</div>
    </div>
    <div class="detail-right">
      <div class="flavor-bars">
        <h4>Tasting Profile</h4>
        ${flavorRow("Body", b.body)}
        ${flavorRow("Acidity", b.acidity)}
        ${flavorRow("Sweetness", b.sweetness)}
        ${flavorRow("Bitterness", b.bitterness)}
      </div>
    </div>
  `;
  document.getElementById("beanPrevBtn").addEventListener("click", () => selectBean(selectedBeanIndex - 1));
  document.getElementById("beanNextBtn").addEventListener("click", () => selectBean(selectedBeanIndex + 1));
  setTimeout(() => {
    beanDetail.querySelectorAll(".fill").forEach(f => {
      f.style.width = f.dataset.val + "%";
    });
  }, 60);
  // On mobile, scroll detail into view; on desktop, the side-by-side layout means no scroll needed
  if (window.innerWidth <= 880) {
    beanDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function flavorRow(label, val) {
  return `
    <div class="flavor-row">
      <div class="lbl">${label}</div>
      <div class="track"><div class="fill" data-val="${val}"></div></div>
      <div class="num">${val}</div>
    </div>
  `;
}

// ---------- MACHINES ----------
function machineSVG(idx) {
  const id = `mc-${idx}`;
  const defs = `
    <defs>
      <linearGradient id="${id}-metal" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#b8b0a4"/>
        <stop offset="0.3" stop-color="#e6dfd2"/>
        <stop offset="0.6" stop-color="#a8a094"/>
        <stop offset="1" stop-color="#5a5448"/>
      </linearGradient>
      <linearGradient id="${id}-dark" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#3a2a1c"/>
        <stop offset="0.5" stop-color="#1a1410"/>
        <stop offset="1" stop-color="#0a0502"/>
      </linearGradient>
      <linearGradient id="${id}-glass" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/>
        <stop offset="0.4" stop-color="#ffffff" stop-opacity="0"/>
        <stop offset="1" stop-color="#000000" stop-opacity="0.18"/>
      </linearGradient>
      <radialGradient id="${id}-shadow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#1a1410" stop-opacity="0.3"/>
        <stop offset="1" stop-color="#1a1410" stop-opacity="0"/>
      </radialGradient>
      <filter id="${id}-blur" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="0.6"/>
      </filter>
    </defs>
  `;

  const renderers = {
    // Espresso machine
    0: () => `
      <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">${defs}
        <ellipse cx="50" cy="92" rx="34" ry="3" fill="url(#${id}-shadow)"/>
        <!-- base -->
        <rect x="14" y="78" width="72" height="12" rx="2" fill="url(#${id}-metal)"/>
        <rect x="14" y="78" width="72" height="2" fill="#ffffff" opacity="0.5"/>
        <!-- main body -->
        <rect x="20" y="22" width="60" height="58" rx="3" fill="url(#${id}-metal)"/>
        <rect x="22" y="24" width="56" height="2" fill="#ffffff" opacity="0.6"/>
        <rect x="22" y="74" width="56" height="2" fill="#000000" opacity="0.2"/>
        <!-- top reservoir cap -->
        <rect x="34" y="14" width="32" height="10" rx="2" fill="url(#${id}-dark)"/>
        <circle cx="50" cy="19" r="2" fill="#a8a094"/>
        <!-- pressure gauge -->
        <circle cx="36" cy="42" r="9" fill="#1a1410"/>
        <circle cx="36" cy="42" r="7" fill="#fdf8ee"/>
        <line x1="36" y1="42" x2="40" y2="38" stroke="#c0392b" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="36" cy="42" r="0.8" fill="#1a1410"/>
        <!-- group head -->
        <rect x="44" y="58" width="22" height="10" rx="1" fill="url(#${id}-dark)"/>
        <rect x="40" y="66" width="30" height="4" rx="1" fill="#0a0502"/>
        <!-- portafilter handle -->
        <rect x="62" y="68" width="22" height="3.5" rx="1.5" fill="url(#${id}-dark)"/>
        <circle cx="84" cy="69.5" r="3" fill="#1a1410"/>
        <!-- spouts -->
        <rect x="46" y="70" width="2" height="4" fill="#5a5448"/>
        <rect x="52" y="70" width="2" height="4" fill="#5a5448"/>
        <!-- steam wand -->
        <line x1="76" y1="36" x2="84" y2="58" stroke="url(#${id}-metal)" stroke-width="2.2" stroke-linecap="round"/>
        <!-- buttons -->
        <circle cx="62" cy="42" r="2.2" fill="#1a1410"/>
        <circle cx="68" cy="42" r="2.2" fill="#c0392b"/>
        <!-- highlight -->
        <rect x="22" y="24" width="3" height="50" fill="#ffffff" opacity="0.35" filter="url(#${id}-blur)"/>
      </svg>
    `,
    // French Press
    1: () => `
      <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">${defs}
        <ellipse cx="50" cy="92" rx="28" ry="3" fill="url(#${id}-shadow)"/>
        <!-- base ring -->
        <rect x="26" y="84" width="48" height="6" rx="1.5" fill="url(#${id}-metal)"/>
        <!-- glass body -->
        <rect x="28" y="32" width="44" height="54" rx="2" fill="#fdf8ee" opacity="0.5"/>
        <rect x="28" y="32" width="44" height="54" rx="2" fill="url(#${id}-glass)"/>
        <!-- coffee inside -->
        <rect x="30" y="56" width="40" height="28" fill="#3b2417" opacity="0.92"/>
        <ellipse cx="50" cy="56" rx="20" ry="2" fill="#5a3d20"/>
        <!-- plunger rod -->
        <rect x="49" y="12" width="2" height="22" fill="url(#${id}-metal)"/>
        <!-- mesh disc -->
        <rect x="32" y="52" width="36" height="3" fill="url(#${id}-metal)"/>
        <line x1="34" y1="53.5" x2="66" y2="53.5" stroke="#0a0502" stroke-width="0.5" opacity="0.6"/>
        <!-- top metal frame and lid -->
        <rect x="26" y="28" width="48" height="6" rx="1.5" fill="url(#${id}-metal)"/>
        <rect x="42" y="14" width="16" height="6" rx="1" fill="url(#${id}-metal)"/>
        <rect x="44" y="8" width="12" height="8" rx="2" fill="#1a1410"/>
        <!-- handle -->
        <path d="M72 40 Q86 44 86 56 Q86 68 72 72" fill="none" stroke="url(#${id}-metal)" stroke-width="3" stroke-linecap="round"/>
        <path d="M72 42 Q83 46 83 56 Q83 66 72 70" fill="none" stroke="#1a1410" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
        <!-- highlight -->
        <line x1="32" y1="36" x2="32" y2="80" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
      </svg>
    `,
    // Moka Pot
    2: () => `
      <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">${defs}
        <ellipse cx="50" cy="92" rx="30" ry="3" fill="url(#${id}-shadow)"/>
        <!-- bottom octagonal chamber -->
        <path d="M30 88 L26 78 L26 56 L30 50 L70 50 L74 56 L74 78 L70 88 Z" fill="url(#${id}-metal)"/>
        <path d="M30 88 L26 78 L26 56 L30 50" fill="#ffffff" opacity="0.3"/>
        <path d="M70 50 L74 56 L74 78 L70 88" fill="#0a0502" opacity="0.18"/>
        <!-- belt / joint -->
        <rect x="26" y="48" width="48" height="4" fill="url(#${id}-dark)"/>
        <!-- top chamber -->
        <path d="M30 48 L28 38 L28 28 L32 22 L68 22 L72 28 L72 38 L70 48 Z" fill="url(#${id}-metal)"/>
        <path d="M30 48 L28 38 L28 28 L32 22" fill="#ffffff" opacity="0.3"/>
        <path d="M68 22 L72 28 L72 38 L70 48" fill="#0a0502" opacity="0.18"/>
        <!-- spout -->
        <path d="M68 26 L78 22 L78 28 L70 32 Z" fill="url(#${id}-metal)"/>
        <!-- lid -->
        <rect x="34" y="16" width="32" height="6" rx="1" fill="url(#${id}-dark)"/>
        <circle cx="50" cy="14" r="3" fill="#1a1410"/>
        <!-- handle -->
        <path d="M28 60 Q14 64 14 72 Q14 80 26 82" fill="none" stroke="#1a1410" stroke-width="5" stroke-linecap="round"/>
        <path d="M28 62 Q16 66 16 72 Q16 78 26 80" fill="none" stroke="#3a2a1c" stroke-width="2.5" stroke-linecap="round"/>
        <!-- facet edges -->
        <line x1="42" y1="22" x2="42" y2="48" stroke="#0a0502" stroke-width="0.4" opacity="0.4"/>
        <line x1="58" y1="22" x2="58" y2="48" stroke="#0a0502" stroke-width="0.4" opacity="0.4"/>
        <line x1="38" y1="50" x2="38" y2="88" stroke="#0a0502" stroke-width="0.4" opacity="0.4"/>
        <line x1="62" y1="50" x2="62" y2="88" stroke="#0a0502" stroke-width="0.4" opacity="0.4"/>
      </svg>
    `,
    // Pour-Over
    3: () => `
      <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">${defs}
        <ellipse cx="50" cy="94" rx="32" ry="3" fill="url(#${id}-shadow)"/>
        <!-- carafe -->
        <path d="M30 60 L70 60 L66 90 Q50 96 34 90 Z" fill="#fdf8ee" opacity="0.55"/>
        <path d="M30 60 L70 60 L66 90 Q50 96 34 90 Z" fill="url(#${id}-glass)"/>
        <path d="M30 60 L70 60 L66 90 Q50 96 34 90 Z" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- coffee in carafe -->
        <path d="M32 76 L68 76 L66 90 Q50 95 34 90 Z" fill="#3b2417" opacity="0.9"/>
        <ellipse cx="50" cy="60" rx="20" ry="2.5" fill="none" stroke="#3a2a1c" stroke-width="0.7"/>
        <!-- carafe handle -->
        <path d="M70 64 Q82 68 82 76 Q82 84 70 86" fill="none" stroke="#3a2a1c" stroke-width="1.5" stroke-linecap="round"/>
        <!-- dripper (V60 cone) -->
        <path d="M22 22 L78 22 L58 58 L42 58 Z" fill="url(#${id}-metal)"/>
        <path d="M22 22 L78 22 L58 58 L42 58 Z" fill="url(#${id}-glass)"/>
        <path d="M22 22 L78 22 L58 58 L42 58 Z" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- ridges -->
        <line x1="32" y1="22" x2="46" y2="58" stroke="#0a0502" stroke-width="0.4" opacity="0.5"/>
        <line x1="42" y1="22" x2="50" y2="58" stroke="#0a0502" stroke-width="0.4" opacity="0.4"/>
        <line x1="58" y1="22" x2="50" y2="58" stroke="#0a0502" stroke-width="0.4" opacity="0.4"/>
        <line x1="68" y1="22" x2="54" y2="58" stroke="#0a0502" stroke-width="0.4" opacity="0.5"/>
        <!-- paper filter -->
        <path d="M28 26 L72 26 L56 54 L44 54 Z" fill="#fffaf0"/>
        <path d="M28 26 L72 26 L56 54 L44 54 Z" fill="none" stroke="#d8ccb6" stroke-width="0.5"/>
        <!-- coffee bed -->
        <ellipse cx="50" cy="32" rx="20" ry="3" fill="#3b2417"/>
        <ellipse cx="50" cy="32" rx="20" ry="3" fill="url(#${id}-glass)"/>
        <!-- drips -->
        <line x1="50" y1="58" x2="50" y2="68" stroke="#3b2417" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
        <circle cx="50" cy="70" r="1" fill="#3b2417" opacity="0.6"/>
      </svg>
    `,
    // AeroPress
    4: () => `
      <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">${defs}
        <ellipse cx="50" cy="92" rx="22" ry="3" fill="url(#${id}-shadow)"/>
        <!-- main chamber (translucent plastic) -->
        <rect x="36" y="40" width="28" height="48" rx="1" fill="#fdf8ee" opacity="0.55"/>
        <rect x="36" y="40" width="28" height="48" rx="1" fill="url(#${id}-glass)"/>
        <rect x="36" y="40" width="28" height="48" rx="1" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- coffee inside -->
        <rect x="37" y="68" width="26" height="20" fill="#3b2417" opacity="0.85"/>
        <!-- measurement marks -->
        <line x1="38" y1="48" x2="44" y2="48" stroke="#3a2a1c" stroke-width="0.5"/>
        <line x1="38" y1="56" x2="44" y2="56" stroke="#3a2a1c" stroke-width="0.5"/>
        <line x1="38" y1="64" x2="44" y2="64" stroke="#3a2a1c" stroke-width="0.5"/>
        <line x1="38" y1="72" x2="44" y2="72" stroke="#3a2a1c" stroke-width="0.5"/>
        <!-- plunger rubber seal -->
        <rect x="34" y="34" width="32" height="8" rx="1" fill="url(#${id}-dark)"/>
        <!-- plunger rod -->
        <rect x="40" y="14" width="20" height="22" rx="1" fill="#fdf8ee" opacity="0.55"/>
        <rect x="40" y="14" width="20" height="22" rx="1" fill="url(#${id}-glass)"/>
        <rect x="40" y="14" width="20" height="22" rx="1" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- top cap -->
        <rect x="36" y="10" width="28" height="6" rx="1" fill="url(#${id}-metal)"/>
        <!-- filter cap -->
        <rect x="34" y="86" width="32" height="6" rx="1" fill="url(#${id}-dark)"/>
        <!-- drip -->
        <line x1="50" y1="92" x2="50" y2="96" stroke="#3b2417" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>
      </svg>
    `,
    // Siphon
    5: () => `
      <svg viewBox="0 0 100 100" width="48" height="48" xmlns="http://www.w3.org/2000/svg">${defs}
        <ellipse cx="50" cy="94" rx="30" ry="3" fill="url(#${id}-shadow)"/>
        <!-- burner -->
        <ellipse cx="50" cy="90" rx="18" ry="3" fill="url(#${id}-metal)"/>
        <rect x="34" y="84" width="32" height="6" rx="1" fill="url(#${id}-dark)"/>
        <!-- flame -->
        <path d="M46 84 Q50 78 54 84 Q52 80 50 76 Q48 80 46 84 Z" fill="#f4a259" opacity="0.85"/>
        <path d="M48 82 Q50 78 52 82" fill="#c0392b" opacity="0.7"/>
        <!-- lower bulb -->
        <circle cx="50" cy="68" r="14" fill="#fdf8ee" opacity="0.55"/>
        <circle cx="50" cy="68" r="14" fill="url(#${id}-glass)"/>
        <circle cx="50" cy="68" r="14" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- water in lower bulb -->
        <path d="M37 70 Q50 76 63 70 Q63 80 50 82 Q37 80 37 70 Z" fill="#3b2417" opacity="0.65"/>
        <!-- connector tube -->
        <rect x="46" y="40" width="8" height="16" fill="#fdf8ee" opacity="0.55"/>
        <rect x="46" y="40" width="8" height="16" fill="url(#${id}-glass)"/>
        <rect x="46" y="40" width="8" height="16" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- gasket -->
        <rect x="44" y="38" width="12" height="3" fill="url(#${id}-dark)"/>
        <rect x="44" y="55" width="12" height="3" fill="url(#${id}-dark)"/>
        <!-- upper chamber -->
        <path d="M30 36 Q30 16 50 14 Q70 16 70 36 Z" fill="#fdf8ee" opacity="0.55"/>
        <path d="M30 36 Q30 16 50 14 Q70 16 70 36 Z" fill="url(#${id}-glass)"/>
        <path d="M30 36 Q30 16 50 14 Q70 16 70 36 Z" fill="none" stroke="#3a2a1c" stroke-width="0.8"/>
        <!-- coffee in upper chamber -->
        <path d="M34 28 Q34 18 50 16 Q66 18 66 28 Q60 32 50 32 Q40 32 34 28 Z" fill="#3b2417" opacity="0.9"/>
        <!-- glass highlights -->
        <ellipse cx="42" cy="20" rx="3" ry="6" fill="#ffffff" opacity="0.5"/>
        <ellipse cx="44" cy="64" rx="2.5" ry="4" fill="#ffffff" opacity="0.5"/>
        <!-- handle -->
        <path d="M70 60 Q80 64 80 70 Q80 76 70 78" fill="none" stroke="#3a2a1c" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `
  };

  return (renderers[idx] || renderers[0])();
}

// ---------- DRINKS ----------
const drinksGrid = document.getElementById("drinksGrid");

function drinkGlassSVG(d) {
  // Determine vessel type based on drink character
  const name = d.name.toLowerCase();
  let vessel;
  if (name === "espresso" || name === "macchiato") vessel = "demitasse";
  else if (name === "affogato") vessel = "coupe";
  else if (d.tags.includes("cold")) vessel = "highball";
  else if (name === "cortado" || name === "flat white") vessel = "tumbler";
  else vessel = "mug";

  const total = d.coffee + d.milk + d.foam + (d.water || 0);
  const id = d.name.replace(/\s/g, '');

  return renderVessel(vessel, d, total, id);
}

function renderVessel(vessel, d, total, id) {
  const liquidColor = d.color;
  const foamPct = (d.foam / total);
  const isCold = d.tags.includes("cold");

  const commonDefs = `
    <radialGradient id="ground-${id}" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#1a1410" stop-opacity="0.32"/>
      <stop offset="0.6" stop-color="#1a1410" stop-opacity="0.1"/>
      <stop offset="1" stop-color="#1a1410" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="porcelain-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9a8868"/>
      <stop offset="0.06" stop-color="#cebe9e"/>
      <stop offset="0.18" stop-color="#f0e6d2"/>
      <stop offset="0.38" stop-color="#fdf8ee"/>
      <stop offset="0.62" stop-color="#fdf8ee"/>
      <stop offset="0.82" stop-color="#e6dac0"/>
      <stop offset="0.94" stop-color="#a89878"/>
      <stop offset="1" stop-color="#6e5e42"/>
    </linearGradient>
    <linearGradient id="porcelain-shine-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="0.28" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="0.42" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="interior-${id}" cx="0.5" cy="0.5" r="0.55">
      <stop offset="0" stop-color="#3a2a1c"/>
      <stop offset="0.6" stop-color="#1a0e08"/>
      <stop offset="1" stop-color="#050200"/>
    </radialGradient>
    <linearGradient id="saucer-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9a8868"/>
      <stop offset="0.15" stop-color="#dccbac"/>
      <stop offset="0.5" stop-color="#fdf8ee"/>
      <stop offset="0.85" stop-color="#dccbac"/>
      <stop offset="1" stop-color="#7e6e50"/>
    </linearGradient>
    <linearGradient id="handle-front-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fdf8ee"/>
      <stop offset="0.5" stop-color="#f0e6d2"/>
      <stop offset="1" stop-color="#cebe9e"/>
    </linearGradient>
    <linearGradient id="glass-tint-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#e6ecef" stop-opacity="0.55"/>
      <stop offset="0.08" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="0.5" stop-color="#ffffff" stop-opacity="0.04"/>
      <stop offset="0.92" stop-color="#cdd6dc" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#a8b3bb" stop-opacity="0.4"/>
    </linearGradient>
    <linearGradient id="glass-rim-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.4"/>
      <stop offset="0.5" stop-color="#e6ecef" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.4"/>
    </linearGradient>
    <radialGradient id="crema-${id}" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#e0b988"/>
      <stop offset="0.6" stop-color="#b78950"/>
      <stop offset="1" stop-color="#7a5530"/>
    </radialGradient>
    <radialGradient id="liquid-surface-${id}" cx="0.5" cy="0.5" r="0.6">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="inner-shadow-${id}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#000000" stop-opacity="0.25"/>
      <stop offset="0.18" stop-color="#000000" stop-opacity="0"/>
      <stop offset="0.82" stop-color="#000000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.3"/>
    </linearGradient>
    <filter id="blur-${id}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="0.8"/>
    </filter>
    <filter id="soft-${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2"/>
    </filter>
  `;

  // Layered liquid stack inside a tapered glass vessel — bottom-up bands with meniscus
  function layeredLiquid(cx, top, bot, halfWAtY, drink) {
    const dTotal = (drink.coffee || 0) + (drink.milk || 0) + (drink.foam || 0) + (drink.water || 0);
    if (!dTotal) return "";
    const layers = [];
    if (drink.coffee) layers.push({ color: drink.coffee > 50 ? "#2a160c" : "#3b2417", w: drink.coffee });
    if (drink.water)  layers.push({ color: "#6b4a30", w: drink.water * 0.6 });
    if (drink.milk)   layers.push({ color: "#f0e0c2", w: drink.milk });
    if (drink.foam)   layers.push({ color: "#fffaf0", w: drink.foam });

    const total = layers.reduce((s, l) => s + l.w, 0);
    const innerTop = top + 4;       // below rim
    const innerBot = bot - 2;
    const liqH = innerBot - innerTop;
    let cursor = innerBot;
    const rects = [];
    const boundaries = [];
    layers.forEach((l, i) => {
      const h = (l.w / total) * liqH;
      cursor -= h;
      const isBot = i === 0;
      rects.push(`<rect x="0" y="${cursor.toFixed(2)}" width="130" height="${(isBot ? (innerBot + 8 - cursor) : (h + 2)).toFixed(2)}" fill="${l.color}"/>`);
      if (i < layers.length - 1) boundaries.push({ y: cursor, upper: layers[i + 1].color });
    });
    const surfaceY = cursor;

    // meniscus ellipses at each boundary (taper-aware)
    const menisci = boundaries.map(({ y, upper }) => {
      const rx = halfWAtY(y);
      return `
        <ellipse cx="${cx}" cy="${(y + 1.4).toFixed(2)}" rx="${rx.toFixed(2)}" ry="1.2" fill="#000000" opacity="0.3"/>
        <ellipse cx="${cx}" cy="${y.toFixed(2)}" rx="${rx.toFixed(2)}" ry="2.4" fill="${upper}"/>
        <ellipse cx="${(cx - rx * 0.35).toFixed(2)}" cy="${(y - 0.6).toFixed(2)}" rx="${(rx * 0.35).toFixed(2)}" ry="0.7" fill="#ffffff" opacity="0.32"/>
      `;
    }).join("");

    // top surface ellipse
    const sRx = halfWAtY(surfaceY);
    const topLayer = layers[layers.length - 1];
    const topSurface = drink.foam > 0
      ? `
        <ellipse cx="${cx}" cy="${surfaceY.toFixed(2)}" rx="${sRx.toFixed(2)}" ry="3" fill="#fffaf0"/>
        <ellipse cx="${cx}" cy="${(surfaceY - 0.5).toFixed(2)}" rx="${(sRx - 1).toFixed(2)}" ry="2.4" fill="url(#liquid-surface-${id})"/>
        <ellipse cx="${(cx - sRx * 0.3).toFixed(2)}" cy="${(surfaceY - 1.4).toFixed(2)}" rx="${(sRx * 0.5).toFixed(2)}" ry="0.8" fill="#ffffff" opacity="0.55"/>
      `
      : drink.coffee > 50 && drink.milk < 30
      ? `
        <ellipse cx="${cx}" cy="${surfaceY.toFixed(2)}" rx="${sRx.toFixed(2)}" ry="2.6" fill="url(#crema-${id})"/>
        <path d="M${cx - sRx * 0.65} ${surfaceY} Q${cx} ${surfaceY - 1.2} ${cx + sRx * 0.65} ${surfaceY + 0.5}" fill="none" stroke="#5a3d20" stroke-width="0.5" opacity="0.6"/>
        <circle cx="${cx - sRx * 0.2}" cy="${(surfaceY - 0.5).toFixed(2)}" r="0.5" fill="#e8c89a" opacity="0.8"/>
        <circle cx="${cx + sRx * 0.3}" cy="${(surfaceY + 0.3).toFixed(2)}" r="0.4" fill="#e8c89a" opacity="0.7"/>
      `
      : `
        <ellipse cx="${cx}" cy="${surfaceY.toFixed(2)}" rx="${sRx.toFixed(2)}" ry="2.4" fill="${topLayer.color}"/>
        <ellipse cx="${(cx - sRx * 0.3).toFixed(2)}" cy="${(surfaceY - 0.6).toFixed(2)}" rx="${(sRx * 0.45).toFixed(2)}" ry="0.7" fill="#ffffff" opacity="0.45"/>
      `;

    return rects.join("") + menisci + topSurface;
  }

  // Liquid surface helper — renders crema/foam/milk surface as an ellipse for proper 3D feel
  function liquidSurface(cx, cy, rx, ry, drink) {
    if (drink.foam > 0) {
      // foam on top
      return `
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fdf8ee"/>
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#liquid-surface-${id})"/>
        <ellipse cx="${cx}" cy="${cy + 0.5}" rx="${rx * 0.95}" ry="${ry * 0.85}" fill="none" stroke="#e8dcc4" stroke-width="0.4" opacity="0.6"/>
        <!-- foam micro-bubbles -->
        <circle cx="${cx - rx * 0.3}" cy="${cy - ry * 0.2}" r="0.6" fill="#ffffff"/>
        <circle cx="${cx + rx * 0.4}" cy="${cy + ry * 0.1}" r="0.5" fill="#ffffff"/>
        <circle cx="${cx + rx * 0.1}" cy="${cy - ry * 0.3}" r="0.4" fill="#fff8ec"/>
        <circle cx="${cx - rx * 0.5}" cy="${cy + ry * 0.2}" r="0.5" fill="#fff8ec"/>
      `;
    } else if (drink.coffee > 50 && drink.milk < 30) {
      // espresso crema with marbling
      return `
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#crema-${id})"/>
        <!-- crema marbling streaks -->
        <path d="M${cx - rx * 0.7} ${cy} Q${cx} ${cy - ry * 0.4} ${cx + rx * 0.7} ${cy + ry * 0.2}"
              fill="none" stroke="#5a3d20" stroke-width="0.6" opacity="0.7" filter="url(#blur-${id})"/>
        <path d="M${cx - rx * 0.4} ${cy + ry * 0.3} Q${cx + rx * 0.2} ${cy} ${cx + rx * 0.6} ${cy - ry * 0.2}"
              fill="none" stroke="#3a2410" stroke-width="0.4" opacity="0.5" filter="url(#blur-${id})"/>
        <!-- micro-bubbles in crema -->
        <circle cx="${cx - rx * 0.2}" cy="${cy - ry * 0.1}" r="0.6" fill="#e8c89a" opacity="0.8"/>
        <circle cx="${cx + rx * 0.3}" cy="${cy + ry * 0.1}" r="0.5" fill="#e8c89a" opacity="0.7"/>
        <circle cx="${cx - rx * 0.4}" cy="${cy + ry * 0.3}" r="0.4" fill="#d4ae74" opacity="0.7"/>
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#liquid-surface-${id})"/>
      `;
    } else {
      // milky / plain liquid surface
      return `
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${liquidColor}"/>
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#liquid-surface-${id})"/>
      `;
    }
  }

  const svgs = {
    // ---------- DEMITASSE — clear glass mini cup ----------
    demitasse: () => {
      const cx = 60;
      const top = 52, bot = 108;
      const topRx = 22, botRx = 18;
      const bodyPath = `M${cx - topRx} ${top + 2} L${cx - botRx} ${bot} Q${cx} ${bot + 4} ${cx + botRx} ${bot} L${cx + topRx} ${top + 2}`;
      const ink = "#6a7782";
      const lineW = 0.8;
      const halfWAtY = (y) => {
        const t = Math.max(0, Math.min(1, (y - (top + 2)) / (bot - (top + 2))));
        return topRx - t * (topRx - botRx);
      };
      return `
        <svg viewBox="0 0 130 150" width="130" height="150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            ${commonDefs}
            <clipPath id="clip-${id}"><path d="${bodyPath} Z"/></clipPath>
          </defs>

          <!-- ground shadow -->
          <ellipse cx="${cx}" cy="${bot + 11}" rx="48" ry="2.2" fill="#1a1410" opacity="0.12"/>

          <!-- porcelain saucer -->
          <ellipse cx="${cx}" cy="${bot + 5}" rx="46" ry="4.4" fill="#c5cbcf" opacity="0.55"/>
          <ellipse cx="${cx}" cy="${bot + 4}" rx="46" ry="4" fill="#fafbfc"/>
          <path d="M${cx - 26} ${bot + 3} Q${cx} ${bot - 0.5} ${cx + 26} ${bot + 3}" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.85"/>
          <ellipse cx="${cx}" cy="${bot + 1.5}" rx="22" ry="1.6" fill="#eef0f2" opacity="0.6"/>

          <!-- glass handle: anatomic ring with crisp outer + inner arcs -->
          <!-- outer arc (the visible silhouette) -->
          <path d="M${cx + topRx - 2} 64 Q${cx + topRx + 18} 67 ${cx + topRx + 18} 80 Q${cx + topRx + 18} 93 ${cx + topRx - 2} 96"
                fill="none" stroke="${ink}" stroke-width="1.3" stroke-linecap="round" opacity="0.9"/>
          <!-- inner arc (bore edge) -->
          <path d="M${cx + topRx - 1} 70 Q${cx + topRx + 11} 72.5 ${cx + topRx + 11} 80 Q${cx + topRx + 11} 87.5 ${cx + topRx - 1} 90"
                fill="none" stroke="${ink}" stroke-width="0.7" stroke-linecap="round" opacity="0.7"/>
          <!-- glossy highlight on outer arc -->
          <path d="M${cx + topRx + 1} 70 Q${cx + topRx + 15} 73 ${cx + topRx + 15} 80 Q${cx + topRx + 15} 87 ${cx + topRx + 1} 90"
                fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.75"/>

          <!-- contact shadow -->
          <ellipse cx="${cx}" cy="${bot + 2}" rx="${botRx + 1}" ry="1.5" fill="#1a1410" opacity="0.15"/>

          <!-- glass body fill (barely visible tint) -->
          <path d="${bodyPath} Z" fill="url(#glass-tint-${id})"/>

          <!-- layered liquid visible through clear glass -->
          <g clip-path="url(#clip-${id})">
            ${layeredLiquid(cx, top, bot, halfWAtY, d)}
          </g>

          <!-- left glass specular -->
          <path d="M${cx - topRx + 3} ${top + 8} Q${cx - topRx + 1} ${(top + bot) / 2} ${cx - botRx + 3} ${bot - 4}"
                fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" opacity="0.65"/>
          <!-- right glass specular -->
          <path d="M${cx + topRx - 3} ${top + 12} Q${cx + topRx - 1} ${(top + bot) / 2} ${cx + botRx - 3} ${bot - 6}"
                fill="none" stroke="#ffffff" stroke-width="0.7" stroke-linecap="round" opacity="0.5"/>

          <!-- glass body outline -->
          <path d="${bodyPath} Z" fill="none" stroke="${ink}" stroke-width="${lineW}" opacity="0.7" stroke-linejoin="round"/>

          <!-- glass rim: thin ellipse with reflective edge -->
          <ellipse cx="${cx}" cy="${top}" rx="${topRx + 0.5}" ry="3.6" fill="none" stroke="${ink}" stroke-width="${lineW}" opacity="0.7"/>
          <ellipse cx="${cx}" cy="${top + 0.6}" rx="${topRx + 0.5}" ry="3.5" fill="url(#glass-rim-${id})"/>
          <ellipse cx="${cx}" cy="${top - 0.3}" rx="${topRx - 1.5}" ry="3" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.85"/>
          <path d="M${cx - topRx + 3} ${top - 2} Q${cx} ${top - 4} ${cx + topRx - 3} ${top - 2}" fill="none" stroke="#ffffff" stroke-width="0.7" opacity="0.7"/>
        </svg>
      `;
    },

    // ---------- MUG — clear glass mug with layered drink ----------
    mug: () => {
      const cx = 56;
      const top = 30, bot = 118;
      const topRx = 32, botRx = 27;
      const bodyPath = `M${cx - topRx} ${top + 2} L${cx - botRx} ${bot} Q${cx} ${bot + 4} ${cx + botRx} ${bot} L${cx + topRx} ${top + 2}`;
      const ink = "#6a7782";
      const lineW = 1;
      const halfWAtY = (y) => {
        const t = Math.max(0, Math.min(1, (y - (top + 2)) / (bot - (top + 2))));
        return topRx - t * (topRx - botRx);
      };
      return `
        <svg viewBox="0 0 130 150" width="130" height="150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            ${commonDefs}
            <clipPath id="clip-${id}"><path d="${bodyPath} Z"/></clipPath>
          </defs>

          <!-- ground shadow -->
          <ellipse cx="${cx}" cy="${bot + 13}" rx="58" ry="2.4" fill="#1a1410" opacity="0.12"/>

          <!-- porcelain saucer -->
          <ellipse cx="${cx}" cy="${bot + 5}" rx="54" ry="5.2" fill="#c5cbcf" opacity="0.55"/>
          <ellipse cx="${cx}" cy="${bot + 4}" rx="54" ry="4.8" fill="#fafbfc"/>
          <path d="M${cx - 30} ${bot + 3} Q${cx} ${bot - 1} ${cx + 30} ${bot + 3}" fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.9"/>
          <ellipse cx="${cx}" cy="${bot + 1.5}" rx="28" ry="1.8" fill="#eef0f2" opacity="0.6"/>

          <!-- glass handle: anatomic ribbon with bold outer + crisp inner bore -->
          <!-- outer arc (the visible silhouette) -->
          <path d="M${cx + topRx - 2} 54 Q${cx + topRx + 26} 60 ${cx + topRx + 26} 80 Q${cx + topRx + 26} 100 ${cx + topRx - 2} 106"
                fill="none" stroke="${ink}" stroke-width="1.5" stroke-linecap="round" opacity="0.9"/>
          <!-- inner arc (bore edge) -->
          <path d="M${cx + topRx - 1} 62 Q${cx + topRx + 14} 67 ${cx + topRx + 14} 80 Q${cx + topRx + 14} 93 ${cx + topRx - 1} 98"
                fill="none" stroke="${ink}" stroke-width="0.8" stroke-linecap="round" opacity="0.7"/>
          <!-- glossy highlight on outer arc -->
          <path d="M${cx + topRx + 2} 60 Q${cx + topRx + 22} 66 ${cx + topRx + 22} 80 Q${cx + topRx + 22} 94 ${cx + topRx + 2} 100"
                fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>
          <!-- thin secondary highlight (catches glass refraction) -->
          <path d="M${cx + topRx + 4} 67 Q${cx + topRx + 18} 71 ${cx + topRx + 18} 80 Q${cx + topRx + 18} 89 ${cx + topRx + 4} 93"
                fill="none" stroke="#ffffff" stroke-width="0.5" stroke-linecap="round" opacity="0.6"/>

          <!-- contact shadow -->
          <ellipse cx="${cx}" cy="${bot + 2}" rx="${botRx + 1}" ry="1.8" fill="#1a1410" opacity="0.15"/>

          <!-- glass body fill (barely visible tint) -->
          <path d="${bodyPath} Z" fill="url(#glass-tint-${id})"/>

          <!-- layered liquid visible through clear glass -->
          <g clip-path="url(#clip-${id})">
            ${layeredLiquid(cx, top, bot, halfWAtY, d)}
          </g>

          <!-- left glass specular -->
          <path d="M${cx - topRx + 3} ${top + 8} Q${cx - topRx} ${(top + bot) / 2} ${cx - botRx + 3} ${bot - 6}"
                fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>
          <path d="M${cx - topRx + 5} ${top + 14} Q${cx - topRx + 2} ${top + 30} ${cx - topRx + 5} ${top + 50}"
                fill="none" stroke="#ffffff" stroke-width="0.7" opacity="0.85"/>
          <!-- right glass specular -->
          <path d="M${cx + topRx - 4} ${top + 10} Q${cx + topRx - 2} ${(top + bot) / 2} ${cx + botRx - 4} ${bot - 8}"
                fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.5"/>

          <!-- glass body outline -->
          <path d="${bodyPath} Z" fill="none" stroke="${ink}" stroke-width="${lineW}" opacity="0.7" stroke-linejoin="round"/>

          <!-- inner-wall hint (glass thickness) -->
          <path d="M${cx - topRx + 1.5} ${top + 4} L${cx - botRx + 1.5} ${bot - 1} Q${cx} ${bot + 2} ${cx + botRx - 1.5} ${bot - 1} L${cx + topRx - 1.5} ${top + 4}"
                fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.55"/>

          <!-- glass rim -->
          <ellipse cx="${cx}" cy="${top}" rx="${topRx + 0.5}" ry="4.4" fill="none" stroke="${ink}" stroke-width="${lineW}" opacity="0.7"/>
          <ellipse cx="${cx}" cy="${top + 0.8}" rx="${topRx + 0.5}" ry="4.2" fill="url(#glass-rim-${id})"/>
          <ellipse cx="${cx}" cy="${top - 0.3}" rx="${topRx - 1.8}" ry="3.6" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.85"/>
          <path d="M${cx - topRx + 4} ${top - 3} Q${cx} ${top - 5} ${cx + topRx - 4} ${top - 3}" fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.75"/>
        </svg>
      `;
    },

    // ---------- TUMBLER ----------
    tumbler: () => {
      const top = 38, bot = 116, lt = 32, rt = 98;
      const surfaceY = top + 4;
      return `
        <svg viewBox="0 0 130 150" width="130" height="150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            ${commonDefs}
            <clipPath id="clip-${id}"><path d="M${lt} ${top} L${rt} ${top} L${rt} ${bot} L${lt} ${bot} Z"/></clipPath>
          </defs>
          <ellipse cx="65" cy="${bot + 6}" rx="38" ry="2.5" fill="#1a1410" opacity="0.12"/>
          <!-- glass shadow under base -->
          <ellipse cx="65" cy="${bot + 1}" rx="33" ry="3" fill="#1a1410" opacity="0.18"/>
          <!-- liquid -->
          <g clip-path="url(#clip-${id})">
            <rect x="0" y="${surfaceY}" width="130" height="${bot - surfaceY}" fill="${liquidColor}"/>
            <rect x="0" y="${surfaceY}" width="130" height="${bot - surfaceY}" fill="url(#inner-shadow-${id})"/>
          </g>
          <!-- glass body (over liquid for refraction) -->
          <path d="M${lt} ${top} L${rt} ${top} L${rt} ${bot} L${lt} ${bot} Z" fill="url(#glass-tint-${id})"/>
          <!-- liquid surface -->
          ${liquidSurface(65, surfaceY, 33, 3.6, d)}
          <!-- glass outline -->
          <path d="M${lt} ${top} L${rt} ${top} L${rt} ${bot} L${lt} ${bot} Z" fill="none" stroke="#3a2a1c" stroke-width="0.8" opacity="0.7"/>
          <!-- thick glass bottom -->
          <rect x="${lt}" y="${bot - 4}" width="${rt - lt}" height="4" fill="#000000" opacity="0.15"/>
          <ellipse cx="65" cy="${bot}" rx="33" ry="2" fill="#000000" opacity="0.25"/>
          <!-- top rim -->
          <ellipse cx="65" cy="${top}" rx="33" ry="3.6" fill="none" stroke="#3a2a1c" stroke-width="0.9"/>
          <ellipse cx="65" cy="${top - 0.3}" rx="33" ry="3.3" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.7"/>
          <!-- specular highlights -->
          <line x1="${lt + 4}" y1="${top + 6}" x2="${lt + 4}" y2="${bot - 8}" stroke="#ffffff" stroke-width="2" opacity="0.55" filter="url(#blur-${id})"/>
          <line x1="${lt + 8}" y1="${top + 12}" x2="${lt + 8}" y2="${top + 30}" stroke="#ffffff" stroke-width="1" opacity="0.7"/>
          <line x1="${rt - 5}" y1="${top + 8}" x2="${rt - 5}" y2="${bot - 12}" stroke="#000000" stroke-width="1" opacity="0.18"/>
        </svg>
      `;
    },

    // ---------- HIGHBALL ----------
    highball: () => {
      const top = 18, bot = 122, lt = 38, rt = 92;
      const surfaceY = top + 4;
      return `
        <svg viewBox="0 0 130 150" width="130" height="150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            ${commonDefs}
            <clipPath id="clip-${id}"><path d="M${lt} ${top} L${rt} ${top} L${rt - 2} ${bot} L${lt + 2} ${bot} Z"/></clipPath>
          </defs>
          <ellipse cx="65" cy="${bot + 5}" rx="32" ry="2.5" fill="#1a1410" opacity="0.14"/>
          <!-- liquid + ice -->
          <g clip-path="url(#clip-${id})">
            <rect x="0" y="${surfaceY}" width="130" height="${bot - surfaceY}" fill="${liquidColor}"/>
            <rect x="0" y="${surfaceY}" width="130" height="${bot - surfaceY}" fill="url(#inner-shadow-${id})"/>
            <!-- ice cubes (translucent with edges) -->
            <g opacity="0.85">
              <rect x="44" y="${surfaceY + 5}" width="14" height="14" rx="2" fill="#ffffff" opacity="0.35" transform="rotate(8 51 ${surfaceY + 12})"/>
              <rect x="44" y="${surfaceY + 5}" width="14" height="14" rx="2" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.7" transform="rotate(8 51 ${surfaceY + 12})"/>
              <rect x="62" y="${surfaceY + 14}" width="16" height="16" rx="2" fill="#ffffff" opacity="0.32" transform="rotate(-12 70 ${surfaceY + 22})"/>
              <rect x="62" y="${surfaceY + 14}" width="16" height="16" rx="2" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.65" transform="rotate(-12 70 ${surfaceY + 22})"/>
              <rect x="48" y="${surfaceY + 30}" width="13" height="13" rx="2" fill="#ffffff" opacity="0.3" transform="rotate(20 54 ${surfaceY + 36})"/>
              <rect x="48" y="${surfaceY + 30}" width="13" height="13" rx="2" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.6" transform="rotate(20 54 ${surfaceY + 36})"/>
              <rect x="68" y="${surfaceY + 40}" width="12" height="12" rx="2" fill="#ffffff" opacity="0.3" transform="rotate(-6 74 ${surfaceY + 46})"/>
              <rect x="68" y="${surfaceY + 40}" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.6" transform="rotate(-6 74 ${surfaceY + 46})"/>
            </g>
            <!-- condensation on inner walls -->
            <circle cx="${lt + 3}" cy="${surfaceY + 30}" r="0.8" fill="#ffffff" opacity="0.5"/>
            <circle cx="${lt + 5}" cy="${surfaceY + 50}" r="0.6" fill="#ffffff" opacity="0.4"/>
            <circle cx="${rt - 3}" cy="${surfaceY + 40}" r="0.7" fill="#ffffff" opacity="0.4"/>
          </g>
          <!-- glass body tint -->
          <path d="M${lt} ${top} L${rt} ${top} L${rt - 2} ${bot} L${lt + 2} ${bot} Z" fill="url(#glass-tint-${id})"/>
          <!-- liquid surface -->
          ${liquidSurface(65, surfaceY, 27, 3.2, d)}
          <!-- glass outline -->
          <path d="M${lt} ${top} L${rt} ${top} L${rt - 2} ${bot} L${lt + 2} ${bot} Z" fill="none" stroke="#3a2a1c" stroke-width="0.8" opacity="0.75"/>
          <!-- top rim -->
          <ellipse cx="65" cy="${top}" rx="27" ry="3.2" fill="none" stroke="#3a2a1c" stroke-width="0.9"/>
          <ellipse cx="65" cy="${top - 0.3}" rx="27" ry="2.8" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.7"/>
          <!-- bottom -->
          <ellipse cx="65" cy="${bot}" rx="27" ry="2" fill="#000000" opacity="0.25"/>
          <!-- specular -->
          <line x1="${lt + 4}" y1="${top + 6}" x2="${lt + 5}" y2="${bot - 10}" stroke="#ffffff" stroke-width="2" opacity="0.55" filter="url(#blur-${id})"/>
          <line x1="${lt + 8}" y1="${top + 14}" x2="${lt + 8}" y2="${top + 36}" stroke="#ffffff" stroke-width="0.8" opacity="0.7"/>
          <!-- straw with thickness -->
          <line x1="80" y1="8" x2="76" y2="${bot - 12}" stroke="#1a0e08" stroke-width="3" stroke-linecap="round"/>
          <line x1="80.5" y1="8" x2="76.5" y2="${bot - 12}" stroke="#3a2418" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
          <line x1="79.5" y1="9" x2="75.5" y2="${bot - 13}" stroke="#ffffff" stroke-width="0.4" stroke-linecap="round" opacity="0.4"/>
        </svg>
      `;
    },

    // ---------- COUPE ----------
    coupe: () => {
      return `
        <svg viewBox="0 0 130 150" width="130" height="150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            ${commonDefs}
            <clipPath id="clip-${id}"><path d="M22 50 Q22 80 65 86 Q108 80 108 50 Z"/></clipPath>
          </defs>
          <ellipse cx="65" cy="130" rx="32" ry="2.5" fill="#1a1410" opacity="0.12"/>
          <!-- foot -->
          <ellipse cx="65" cy="126" rx="30" ry="3.5" fill="#a89878"/>
          <ellipse cx="65" cy="125" rx="30" ry="3" fill="#dfd4bf"/>
          <ellipse cx="65" cy="124" rx="26" ry="2.5" fill="#bfb094"/>
          <!-- stem -->
          <path d="M63 86 L62 122 L68 122 L67 86 Z" fill="#a89878"/>
          <path d="M63.5 86 L62.5 122 L67.5 122 L66.5 86 Z" fill="#dfd4bf"/>
          <line x1="64" y1="86" x2="64" y2="122" stroke="#ffffff" stroke-width="0.5" opacity="0.7"/>
          <!-- bowl liquid -->
          <g clip-path="url(#clip-${id})">
            <rect x="0" y="64" width="130" height="30" fill="${liquidColor}"/>
            <!-- gelato (multiple scoops with shading) -->
            <circle cx="52" cy="56" r="15" fill="#fffaf0"/>
            <circle cx="74" cy="54" r="14" fill="#fffaf0"/>
            <circle cx="63" cy="46" r="12" fill="#fffaf0"/>
            <!-- scoop shading -->
            <ellipse cx="46" cy="60" rx="10" ry="7" fill="#e8dcc4" opacity="0.6"/>
            <ellipse cx="80" cy="58" rx="9" ry="6" fill="#e8dcc4" opacity="0.6"/>
            <!-- scoop highlights -->
            <ellipse cx="48" cy="50" rx="6" ry="4" fill="#ffffff" opacity="0.7"/>
            <ellipse cx="70" cy="48" rx="5" ry="3" fill="#ffffff" opacity="0.7"/>
            <ellipse cx="60" cy="42" rx="4" ry="2.5" fill="#ffffff" opacity="0.8"/>
            <!-- espresso pour streams -->
            <path d="M48 56 Q44 66 50 76" fill="none" stroke="${liquidColor}" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M70 50 Q76 60 72 72" fill="none" stroke="${liquidColor}" stroke-width="2" stroke-linecap="round"/>
            <path d="M58 50 Q56 62 62 72" fill="none" stroke="${liquidColor}" stroke-width="1.6" stroke-linecap="round" opacity="0.8"/>
          </g>
          <!-- glass bowl outline + tint -->
          <path d="M22 50 Q22 80 65 86 Q108 80 108 50 Z" fill="url(#glass-tint-${id})"/>
          <path d="M22 50 Q22 80 65 86 Q108 80 108 50" fill="none" stroke="#3a2a1c" stroke-width="0.9"/>
          <ellipse cx="65" cy="50" rx="43" ry="4" fill="none" stroke="#3a2a1c" stroke-width="0.9"/>
          <ellipse cx="65" cy="49.7" rx="43" ry="3.5" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.7"/>
          <!-- bowl specular -->
          <path d="M28 54 Q28 72 36 80" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.55" filter="url(#blur-${id})"/>
        </svg>
      `;
    }
  };

  return svgs[vessel]();
}

drinks.forEach((d, i) => {
  const card = document.createElement("div");
  card.className = "drink-card";
  card.dataset.tags = d.tags.join(",");
  card.innerHTML = `
    <div class="drink-num">No. ${String(i + 1).padStart(2, '0')}</div>
    <div class="drink-glass">${drinkGlassSVG(d)}</div>
    <div class="drink-name">${d.name}</div>
    <div class="drink-desc">${d.desc}</div>
    <div class="drink-ratio">
      ${d.coffee ? `<div style="flex:${d.coffee};background:#3b2417"></div>` : ""}
      ${d.water ? `<div style="flex:${d.water};background:#a89878"></div>` : ""}
      ${d.milk ? `<div style="flex:${d.milk};background:#e8d8b8"></div>` : ""}
      ${d.foam ? `<div style="flex:${d.foam};background:#faf6ec;border:1px solid #d8ccb6"></div>` : ""}
    </div>
    <div class="drink-tags">${d.tags.map(t => `<span>${t}</span>`).join("")}</div>
  `;
  drinksGrid.appendChild(card);
});

document.querySelectorAll(".filter").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.filter;
    document.querySelectorAll(".drink-card").forEach(card => {
      const tags = card.dataset.tags.split(",");
      card.classList.toggle("fade-out", f !== "all" && !tags.includes(f));
    });
  });
});

// ---------- BUILDER ----------
function renderOptions() {
  Object.keys(builderOptions).forEach(group => {
    const container = document.querySelector(`.option-group[data-group="${group}"]`);
    container.innerHTML = "";
    builderOptions[group].forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option" + (builderState[group] === opt.id ? " active" : "");
      btn.textContent = opt.label;
      btn.addEventListener("click", () => {
        builderState[group] = opt.id;
        renderOptions();
        updatePreview();
      });
      container.appendChild(btn);
    });
  });
}

function getOpt(group, id) {
  return builderOptions[group].find(o => o.id === id);
}

function updatePreview() {
  const base = getOpt("base", builderState.base);
  const milk = getOpt("milk", builderState.milk);
  const sweet = getOpt("sweet", builderState.sweet);
  const topping = getOpt("topping", builderState.topping);
  const temp = getOpt("temp", builderState.temp);

  // Build liquid layers in clipped SVG group
  // Cup interior: x ~40-180, y from 60 (top rim) to ~240 (bottom)
  // Total interior height ~180 from y=60 to y=240
  const stack = document.getElementById("liquidStack");
  stack.innerHTML = "";

  const layers = [];
  if (milk.id === "none") {
    layers.push({ color: base.color, weight: 60 });
  } else {
    layers.push({ color: base.color, weight: 35 });
    layers.push({ color: milk.color, weight: 50 });
  }
  if (sweet.color) layers.push({ color: sweet.color, weight: 8 });
  // For iced drinks we render actual ice cubes (see below), but keep a faint cool wash on top
  // by tinting the topmost layer color slightly — handled when ice is drawn.

  const totalWeight = layers.reduce((s, l) => s + l.weight, 0);
  const liquidTop = 100;
  const liquidBottom = 248;
  const liquidHeight = liquidBottom - liquidTop;

  const svgNS = "http://www.w3.org/2000/svg";
  // Cup half-width along the body taper (matches cup-clip path)
  // Cup body: M48 70 L192 70 L178 242 Q120 252 62 242 — linear taper from rx=72 at y=70 to rx=58 at y=242
  const cupInnerRx = (y) => {
    const clamped = Math.max(70, Math.min(242, y));
    const t = (clamped - 70) / 172;
    return 72 - t * 14;
  };

  let cursorY = liquidBottom;
  const boundaries = [];
  layers.forEach((l, idx) => {
    const h = (l.weight / totalWeight) * liquidHeight;
    cursorY -= h;
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", "40");
    rect.setAttribute("y", cursorY);
    rect.setAttribute("width", "160");
    // Extend bottom layer below the cup-clip apex so the curved floor fills completely
    const isBottom = idx === 0;
    rect.setAttribute("height", isBottom ? (255 - cursorY) : (h + 2));
    rect.setAttribute("fill", l.color);
    stack.appendChild(rect);
    if (idx < layers.length - 1) {
      boundaries.push({ y: cursorY, upperColor: layers[idx + 1].color });
    }
  });

  // 3D meniscus ellipses at each interior layer boundary (taper-aware)
  boundaries.forEach(({ y, upperColor }) => {
    const rx = cupInnerRx(y);

    // shadow band below the meniscus — sells the depth
    const shadowBand = document.createElementNS(svgNS, "ellipse");
    shadowBand.setAttribute("cx", "120");
    shadowBand.setAttribute("cy", y + 2.2);
    shadowBand.setAttribute("rx", rx);
    shadowBand.setAttribute("ry", "2");
    shadowBand.setAttribute("fill", "#000000");
    shadowBand.setAttribute("opacity", "0.32");
    stack.appendChild(shadowBand);

    // upper liquid's exposed surface — colour ellipse covers the flat rect edge
    const meniscus = document.createElementNS(svgNS, "ellipse");
    meniscus.setAttribute("cx", "120");
    meniscus.setAttribute("cy", y);
    meniscus.setAttribute("rx", rx);
    meniscus.setAttribute("ry", "4.2");
    meniscus.setAttribute("fill", upperColor);
    stack.appendChild(meniscus);

    // inner darker rim where surface meets cup wall (smile shape)
    const innerRim = document.createElementNS(svgNS, "path");
    innerRim.setAttribute(
      "d",
      `M${120 - rx + 1} ${y - 0.4} Q120 ${y + 3.6} ${120 + rx - 1} ${y - 0.4}`
    );
    innerRim.setAttribute("fill", "none");
    innerRim.setAttribute("stroke", "#000000");
    innerRim.setAttribute("stroke-width", "0.6");
    innerRim.setAttribute("opacity", "0.25");
    stack.appendChild(innerRim);

    // soft specular sheen on the front-left of the meniscus
    const sheen = document.createElementNS(svgNS, "ellipse");
    sheen.setAttribute("cx", 120 - rx * 0.4);
    sheen.setAttribute("cy", y - 1);
    sheen.setAttribute("rx", rx * 0.35);
    sheen.setAttribute("ry", "1.1");
    sheen.setAttribute("fill", "#ffffff");
    sheen.setAttribute("opacity", "0.32");
    stack.appendChild(sheen);
  });

  // Cylindrical curvature shading across the whole liquid column
  const cylinder = document.createElementNS(svgNS, "rect");
  cylinder.setAttribute("x", "40");
  cylinder.setAttribute("y", cursorY);
  cylinder.setAttribute("width", "160");
  cylinder.setAttribute("height", liquidBottom - cursorY + 2);
  cylinder.setAttribute("fill", "url(#liquid-cylinder)");
  stack.appendChild(cylinder);

  // Vertical depth: bottom of liquid darker than top
  const vertical = document.createElementNS(svgNS, "rect");
  vertical.setAttribute("x", "40");
  vertical.setAttribute("y", cursorY);
  vertical.setAttribute("width", "160");
  vertical.setAttribute("height", liquidBottom - cursorY + 2);
  vertical.setAttribute("fill", "url(#liquid-vertical)");
  stack.appendChild(vertical);

  // Inner wall shadow (cup interior darkens edges further)
  const innerShadow = document.createElementNS(svgNS, "rect");
  innerShadow.setAttribute("x", "40");
  innerShadow.setAttribute("y", cursorY);
  innerShadow.setAttribute("width", "160");
  innerShadow.setAttribute("height", liquidBottom - cursorY + 2);
  innerShadow.setAttribute("fill", "url(#cup-inner-shadow)");
  stack.appendChild(innerShadow);

  // top surface ellipse — realistic 3D perspective on liquid (matches cup taper)
  const surfaceCx = 120, surfaceRx = cupInnerRx(cursorY), surfaceRy = 8;
  if (milk.id === "none" && temp.id !== "iced") {
    // Espresso-style crema with marbling
    const cremaBase = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    cremaBase.setAttribute("cx", surfaceCx);
    cremaBase.setAttribute("cy", cursorY);
    cremaBase.setAttribute("rx", surfaceRx);
    cremaBase.setAttribute("ry", surfaceRy);
    cremaBase.setAttribute("fill", "url(#crema-radial)");
    stack.appendChild(cremaBase);

    // Marbled streaks
    const streak1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    streak1.setAttribute("d", `M${surfaceCx - 50} ${cursorY} Q${surfaceCx} ${cursorY - 4} ${surfaceCx + 50} ${cursorY + 2}`);
    streak1.setAttribute("fill", "none");
    streak1.setAttribute("stroke", "#5a3d20");
    streak1.setAttribute("stroke-width", "1.2");
    streak1.setAttribute("opacity", "0.55");
    stack.appendChild(streak1);

    const streak2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    streak2.setAttribute("d", `M${surfaceCx - 30} ${cursorY + 2} Q${surfaceCx + 10} ${cursorY - 2} ${surfaceCx + 40} ${cursorY + 1}`);
    streak2.setAttribute("fill", "none");
    streak2.setAttribute("stroke", "#3a2410");
    streak2.setAttribute("stroke-width", "0.8");
    streak2.setAttribute("opacity", "0.4");
    stack.appendChild(streak2);

    // Micro-bubbles
    [[-30, -2, 1.4], [20, 2, 1.2], [-10, 3, 1], [40, -1, 0.9], [-50, 1, 0.8]].forEach(([dx, dy, r]) => {
      const bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      bubble.setAttribute("cx", surfaceCx + dx);
      bubble.setAttribute("cy", cursorY + dy);
      bubble.setAttribute("r", r);
      bubble.setAttribute("fill", "#e8c89a");
      bubble.setAttribute("opacity", "0.7");
      stack.appendChild(bubble);
    });

    // Subtle highlight sheen on top
    const sheen = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    sheen.setAttribute("cx", surfaceCx - 20);
    sheen.setAttribute("cy", cursorY - 2);
    sheen.setAttribute("rx", "30");
    sheen.setAttribute("ry", "3");
    sheen.setAttribute("fill", "#ffffff");
    sheen.setAttribute("opacity", "0.18");
    stack.appendChild(sheen);
  } else {
    // Milky/iced surface — simple ellipse with sheen
    const surface = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    surface.setAttribute("cx", surfaceCx);
    surface.setAttribute("cy", cursorY);
    surface.setAttribute("rx", surfaceRx);
    surface.setAttribute("ry", surfaceRy);
    const topLayer = layers[layers.length - 1];
    surface.setAttribute("fill", topLayer.color);
    stack.appendChild(surface);

    // Surface highlight
    const sheen = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    sheen.setAttribute("cx", surfaceCx - 18);
    sheen.setAttribute("cy", cursorY - 2);
    sheen.setAttribute("rx", "32");
    sheen.setAttribute("ry", "3");
    sheen.setAttribute("fill", "#ffffff");
    sheen.setAttribute("opacity", milk.id !== "none" ? "0.35" : "0.2");
    stack.appendChild(sheen);

    // Latte art for milk-heavy hot drinks
    if (milk.id !== "none" && temp.id !== "iced" && (topping.id === "foam" || topping.id === "none")) {
      const art = document.createElementNS("http://www.w3.org/2000/svg", "path");
      art.setAttribute("d", `M${surfaceCx - 30} ${cursorY} Q${surfaceCx} ${cursorY - 4} ${surfaceCx + 30} ${cursorY}`);
      art.setAttribute("fill", "none");
      art.setAttribute("stroke", "#fffdf6");
      art.setAttribute("stroke-width", "1.5");
      art.setAttribute("opacity", "0.85");
      stack.appendChild(art);
      const art2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      art2.setAttribute("d", `M${surfaceCx - 22} ${cursorY + 1} Q${surfaceCx} ${cursorY - 2} ${surfaceCx + 22} ${cursorY + 1}`);
      art2.setAttribute("fill", "none");
      art2.setAttribute("stroke", milk.color || "#fffdf6");
      art2.setAttribute("stroke-width", "0.6");
      art2.setAttribute("opacity", "0.6");
      stack.appendChild(art2);
    }
  }

  // Ice cubes — for iced drinks, draw translucent rotated cubes inside the cup
  if (temp.id === "iced") {
    const ns = "http://www.w3.org/2000/svg";
    // place cubes spanning the liquid region (top of liquid down ~80px)
    const cubes = [
      { x: 78,  y: cursorY + 4,  size: 28, rot: -8,  opacity: 0.5 },
      { x: 112, y: cursorY + 2,  size: 30, rot: 12,  opacity: 0.55 },
      { x: 146, y: cursorY + 6,  size: 26, rot: -6,  opacity: 0.5 },
      { x: 88,  y: cursorY + 32, size: 24, rot: 16,  opacity: 0.45 },
      { x: 124, y: cursorY + 36, size: 28, rot: -14, opacity: 0.5 },
      { x: 156, y: cursorY + 30, size: 22, rot: 8,   opacity: 0.45 },
      { x: 100, y: cursorY + 60, size: 24, rot: -10, opacity: 0.42 },
      { x: 138, y: cursorY + 64, size: 22, rot: 18,  opacity: 0.42 },
    ];
    cubes.forEach(({ x, y, size, rot, opacity }) => {
      const g = document.createElementNS(ns, "g");
      g.setAttribute("transform", `rotate(${rot} ${x + size / 2} ${y + size / 2})`);
      // soft shadow under cube
      const shadow = document.createElementNS(ns, "rect");
      shadow.setAttribute("x", x + 1);
      shadow.setAttribute("y", y + 1);
      shadow.setAttribute("width", size);
      shadow.setAttribute("height", size);
      shadow.setAttribute("rx", "3");
      shadow.setAttribute("fill", "#1a1410");
      shadow.setAttribute("opacity", "0.18");
      g.appendChild(shadow);
      // translucent ice body
      const cube = document.createElementNS(ns, "rect");
      cube.setAttribute("x", x);
      cube.setAttribute("y", y);
      cube.setAttribute("width", size);
      cube.setAttribute("height", size);
      cube.setAttribute("rx", "3");
      cube.setAttribute("fill", "#ffffff");
      cube.setAttribute("opacity", opacity);
      g.appendChild(cube);
      // bright outline edges
      const edge = document.createElementNS(ns, "rect");
      edge.setAttribute("x", x);
      edge.setAttribute("y", y);
      edge.setAttribute("width", size);
      edge.setAttribute("height", size);
      edge.setAttribute("rx", "3");
      edge.setAttribute("fill", "none");
      edge.setAttribute("stroke", "#ffffff");
      edge.setAttribute("stroke-width", "1.2");
      edge.setAttribute("opacity", "0.9");
      g.appendChild(edge);
      // thin inner edge (cube depth)
      const inner = document.createElementNS(ns, "rect");
      inner.setAttribute("x", x + 2);
      inner.setAttribute("y", y + 2);
      inner.setAttribute("width", size - 4);
      inner.setAttribute("height", size - 4);
      inner.setAttribute("rx", "2");
      inner.setAttribute("fill", "none");
      inner.setAttribute("stroke", "#ffffff");
      inner.setAttribute("stroke-width", "0.5");
      inner.setAttribute("opacity", "0.55");
      g.appendChild(inner);
      // specular dot
      const spec = document.createElementNS(ns, "circle");
      spec.setAttribute("cx", x + size * 0.28);
      spec.setAttribute("cy", y + size * 0.25);
      spec.setAttribute("r", "1.6");
      spec.setAttribute("fill", "#ffffff");
      spec.setAttribute("opacity", "0.85");
      g.appendChild(spec);
      stack.appendChild(g);
    });
    // tiny condensation droplets near the inner cup walls
    [115, 145, 175, 200, 225].forEach((y, i) => {
      const side = i % 2 === 0 ? 58 : 178;
      const drop = document.createElementNS(ns, "circle");
      drop.setAttribute("cx", side + (Math.random() * 4 - 2));
      drop.setAttribute("cy", y);
      drop.setAttribute("r", 0.6 + Math.random() * 0.6);
      drop.setAttribute("fill", "#ffffff");
      drop.setAttribute("opacity", 0.55);
      stack.appendChild(drop);
    });
  }

  // Topping
  const tLayer = document.getElementById("toppingLayer");
  tLayer.innerHTML = "";
  const toppingY = cursorY;
  if (topping.id === "foam") {
    const ns = "http://www.w3.org/2000/svg";
    const fRx = cupInnerRx(toppingY);

    // Outer crema rim — warm caramelised band at cup wall (visible perspective slice)
    const cremaRim = document.createElementNS(ns, "ellipse");
    cremaRim.setAttribute("cx", "120");
    cremaRim.setAttribute("cy", toppingY);
    cremaRim.setAttribute("rx", fRx);
    cremaRim.setAttribute("ry", "10");
    cremaRim.setAttribute("fill", "#b88752");
    cremaRim.setAttribute("opacity", "0.85");
    tLayer.appendChild(cremaRim);

    // Soft inner rim — transitions from caramel to foam
    const innerRim = document.createElementNS(ns, "ellipse");
    innerRim.setAttribute("cx", "120");
    innerRim.setAttribute("cy", toppingY - 0.6);
    innerRim.setAttribute("rx", fRx - 3);
    innerRim.setAttribute("ry", "9");
    innerRim.setAttribute("fill", "#e0bd8e");
    innerRim.setAttribute("opacity", "0.75");
    tLayer.appendChild(innerRim);

    // Main silky foam surface (dominant white)
    const foam = document.createElementNS(ns, "ellipse");
    foam.setAttribute("cx", "120");
    foam.setAttribute("cy", toppingY - 1.4);
    foam.setAttribute("rx", fRx - 6);
    foam.setAttribute("ry", "8");
    foam.setAttribute("fill", "url(#foam-grad)");
    tLayer.appendChild(foam);

    // Texture: tiny scattered bubbles across surface
    for (let i = 0; i < 22; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (fRx - 6);
      const bx = 120 + Math.cos(angle) * dist;
      const by = toppingY - 1 + Math.sin(angle) * 5;
      const bubble = document.createElementNS(ns, "circle");
      bubble.setAttribute("cx", bx);
      bubble.setAttribute("cy", by);
      bubble.setAttribute("r", 0.4 + Math.random() * 0.7);
      bubble.setAttribute("fill", Math.random() > 0.6 ? "#ffffff" : "#d8b890");
      bubble.setAttribute("opacity", 0.5 + Math.random() * 0.4);
      tLayer.appendChild(bubble);
    }

    // Bigger crema specks near the rim
    for (let i = 0; i < 14; i++) {
      const angle = (Math.PI * 2 * i) / 14 + Math.random() * 0.4;
      const dist = fRx - 5 - Math.random() * 3;
      const bx = 120 + Math.cos(angle) * dist;
      const by = toppingY + Math.sin(angle) * 5.5;
      const speck = document.createElementNS(ns, "circle");
      speck.setAttribute("cx", bx);
      speck.setAttribute("cy", by);
      speck.setAttribute("r", 0.7 + Math.random() * 1.0);
      speck.setAttribute("fill", "#8a5a2a");
      speck.setAttribute("opacity", 0.5 + Math.random() * 0.3);
      tLayer.appendChild(speck);
    }

    // Subtle marbled crema streaks across surface
    const streak1 = document.createElementNS(ns, "path");
    streak1.setAttribute(
      "d",
      `M${120 - fRx + 6} ${toppingY - 1} Q120 ${toppingY - 4} ${120 + fRx - 6} ${toppingY - 1}`
    );
    streak1.setAttribute("fill", "none");
    streak1.setAttribute("stroke", "#a8804a");
    streak1.setAttribute("stroke-width", "0.8");
    streak1.setAttribute("opacity", "0.3");
    tLayer.appendChild(streak1);

    const streak2 = document.createElementNS(ns, "path");
    streak2.setAttribute(
      "d",
      `M${120 - fRx + 12} ${toppingY + 1} Q120 ${toppingY - 1} ${120 + fRx - 12} ${toppingY + 1.5}`
    );
    streak2.setAttribute("fill", "none");
    streak2.setAttribute("stroke", "#7a5530");
    streak2.setAttribute("stroke-width", "0.5");
    streak2.setAttribute("opacity", "0.25");
    tLayer.appendChild(streak2);

    // Latte-art heart in white foam (only for milk drinks)
    if (milk.id !== "none") {
      const cy = toppingY - 1.5;
      const heart = document.createElementNS(ns, "path");
      heart.setAttribute(
        "d",
        `M120 ${cy + 3}
         C 113 ${cy - 0.5} 108 ${cy - 3} 113 ${cy - 4.5}
         C 117 ${cy - 5} 119 ${cy - 3} 120 ${cy - 1.5}
         C 121 ${cy - 3} 123 ${cy - 5} 127 ${cy - 4.5}
         C 132 ${cy - 3} 127 ${cy - 0.5} 120 ${cy + 3} Z`
      );
      heart.setAttribute("fill", "#fffdf6");
      heart.setAttribute("opacity", "0.92");
      tLayer.appendChild(heart);

      // Subtle stem (tail of the rosetta/heart)
      const stem = document.createElementNS(ns, "path");
      stem.setAttribute(
        "d",
        `M120 ${cy + 3} Q120 ${cy + 4.5} ${118 + 4} ${cy + 5}`
      );
      stem.setAttribute("fill", "none");
      stem.setAttribute("stroke", "#fffdf6");
      stem.setAttribute("stroke-width", "0.9");
      stem.setAttribute("opacity", "0.85");
      tLayer.appendChild(stem);
    }

    // Top specular sheen — soft elliptical highlight
    const sheen = document.createElementNS(ns, "ellipse");
    sheen.setAttribute("cx", 120 - fRx * 0.25);
    sheen.setAttribute("cy", toppingY - 3.4);
    sheen.setAttribute("rx", fRx * 0.55);
    sheen.setAttribute("ry", "1.6");
    sheen.setAttribute("fill", "#ffffff");
    sheen.setAttribute("opacity", "0.55");
    tLayer.appendChild(sheen);

    // Thin upper-edge bright line (catches light at front of foam ellipse)
    const edgeHi = document.createElementNS(ns, "path");
    edgeHi.setAttribute(
      "d",
      `M${120 - fRx + 8} ${toppingY - 5} Q120 ${toppingY - 7.4} ${120 + fRx - 8} ${toppingY - 5}`
    );
    edgeHi.setAttribute("fill", "none");
    edgeHi.setAttribute("stroke", "#ffffff");
    edgeHi.setAttribute("stroke-width", "0.7");
    edgeHi.setAttribute("opacity", "0.6");
    tLayer.appendChild(edgeHi);
  } else if (topping.id === "whip") {
    const ns = "http://www.w3.org/2000/svg";

    // Base contact shadow on liquid surface
    const cast = document.createElementNS(ns, "ellipse");
    cast.setAttribute("cx", "120");
    cast.setAttribute("cy", toppingY + 3);
    cast.setAttribute("rx", "58");
    cast.setAttribute("ry", "4");
    cast.setAttribute("fill", "#000000");
    cast.setAttribute("opacity", "0.18");
    tLayer.appendChild(cast);

    // Caramelised cream interface where whip meets coffee
    const interface_ = document.createElementNS(ns, "ellipse");
    interface_.setAttribute("cx", "120");
    interface_.setAttribute("cy", toppingY + 1);
    interface_.setAttribute("rx", "56");
    interface_.setAttribute("ry", "3");
    interface_.setAttribute("fill", "#c9a872");
    interface_.setAttribute("opacity", "0.45");
    tLayer.appendChild(interface_);

    // Mound silhouette — a soft cloud shape via overlapping ellipses (back layer)
    const backDollops = [
      { cx: 76,  cy: toppingY - 6,  rx: 20, ry: 14 },
      { cx: 102, cy: toppingY - 14, rx: 24, ry: 18 },
      { cx: 120, cy: toppingY - 20, rx: 26, ry: 22 },
      { cx: 140, cy: toppingY - 14, rx: 24, ry: 18 },
      { cx: 166, cy: toppingY - 6,  rx: 19, ry: 13 },
    ];
    backDollops.forEach((d) => {
      const e = document.createElementNS(ns, "ellipse");
      e.setAttribute("cx", d.cx);
      e.setAttribute("cy", d.cy);
      e.setAttribute("rx", d.rx);
      e.setAttribute("ry", d.ry);
      e.setAttribute("fill", "url(#cream-grad)");
      tLayer.appendChild(e);
    });

    // Front lobes — smaller dollops in front to give 3D depth and ridge pattern
    const frontDollops = [
      { cx: 92,  cy: toppingY - 2, rx: 11, ry: 8 },
      { cx: 110, cy: toppingY - 4, rx: 12, ry: 9 },
      { cx: 130, cy: toppingY - 4, rx: 12, ry: 9 },
      { cx: 148, cy: toppingY - 2, rx: 11, ry: 8 },
    ];
    frontDollops.forEach((d) => {
      const e = document.createElementNS(ns, "ellipse");
      e.setAttribute("cx", d.cx);
      e.setAttribute("cy", d.cy);
      e.setAttribute("rx", d.rx);
      e.setAttribute("ry", d.ry);
      e.setAttribute("fill", "url(#cream-grad)");
      tLayer.appendChild(e);
    });

    // Mid-mound dollop above the back row (gives extra height)
    const upper = document.createElementNS(ns, "ellipse");
    upper.setAttribute("cx", "120");
    upper.setAttribute("cy", toppingY - 32);
    upper.setAttribute("rx", "18");
    upper.setAttribute("ry", "14");
    upper.setAttribute("fill", "url(#cream-grad)");
    tLayer.appendChild(upper);

    // Peak shadow on top of mound (sells the height)
    const peakShadow = document.createElementNS(ns, "ellipse");
    peakShadow.setAttribute("cx", "120");
    peakShadow.setAttribute("cy", toppingY - 24);
    peakShadow.setAttribute("rx", "20");
    peakShadow.setAttribute("ry", "4");
    peakShadow.setAttribute("fill", "#000000");
    peakShadow.setAttribute("opacity", "0.1");
    tLayer.appendChild(peakShadow);

    // Piped peak — classic curled tip rising from upper dollop
    const peak = document.createElementNS(ns, "path");
    peak.setAttribute(
      "d",
      `M110 ${toppingY - 38}
       Q110 ${toppingY - 50} 122 ${toppingY - 52}
       Q136 ${toppingY - 50} 134 ${toppingY - 40}
       Q132 ${toppingY - 34} 124 ${toppingY - 36}
       Q124 ${toppingY - 40} 120 ${toppingY - 40}
       Q114 ${toppingY - 38} 110 ${toppingY - 34}
       Q104 ${toppingY - 34} 110 ${toppingY - 38} Z`
    );
    peak.setAttribute("fill", "url(#cream-peak)");
    tLayer.appendChild(peak);

    // Highlights — bright specular sheen on upper-left of each main dollop
    backDollops.forEach((d) => {
      const h = document.createElementNS(ns, "ellipse");
      h.setAttribute("cx", d.cx - d.rx * 0.35);
      h.setAttribute("cy", d.cy - d.ry * 0.45);
      h.setAttribute("rx", d.rx * 0.42);
      h.setAttribute("ry", d.ry * 0.32);
      h.setAttribute("fill", "#ffffff");
      h.setAttribute("opacity", "0.6");
      tLayer.appendChild(h);
    });

    // Sharp peak highlight (catches light on the tip curl)
    const peakHi = document.createElementNS(ns, "path");
    peakHi.setAttribute(
      "d",
      `M114 ${toppingY - 46} Q118 ${toppingY - 52} 126 ${toppingY - 50}`
    );
    peakHi.setAttribute("fill", "none");
    peakHi.setAttribute("stroke", "#ffffff");
    peakHi.setAttribute("stroke-width", "1.8");
    peakHi.setAttribute("stroke-linecap", "round");
    peakHi.setAttribute("opacity", "0.9");
    tLayer.appendChild(peakHi);

    // Upper-dollop sheen
    const upperHi = document.createElementNS(ns, "ellipse");
    upperHi.setAttribute("cx", "113");
    upperHi.setAttribute("cy", toppingY - 38);
    upperHi.setAttribute("rx", "9");
    upperHi.setAttribute("ry", "4");
    upperHi.setAttribute("fill", "#ffffff");
    upperHi.setAttribute("opacity", "0.55");
    tLayer.appendChild(upperHi);

    // Ridges — faint vertical streaks suggesting piped texture
    [88, 100, 112, 128, 140, 152].forEach((cx) => {
      const ridge = document.createElementNS(ns, "path");
      const baseY = toppingY - 2;
      const topY = toppingY - 8 - Math.abs(120 - cx) * 0.08;
      ridge.setAttribute("d", `M${cx} ${baseY} Q${cx + 1} ${(baseY + topY) / 2} ${cx} ${topY}`);
      ridge.setAttribute("fill", "none");
      ridge.setAttribute("stroke", "#d8c69a");
      ridge.setAttribute("stroke-width", "0.6");
      ridge.setAttribute("opacity", "0.35");
      tLayer.appendChild(ridge);
    });
  } else if (topping.id === "cinnamon" || topping.id === "cocoa" || topping.id === "nutmeg") {
    const dustColor = topping.id === "cinnamon" ? "#8a4a1f" : topping.id === "cocoa" ? "#3a2418" : "#9a6a3a";
    for (let i = 0; i < 24; i++) {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", 55 + Math.random() * 130);
      dot.setAttribute("cy", toppingY + 1 + Math.random() * 5);
      dot.setAttribute("r", 0.8 + Math.random() * 1.4);
      dot.setAttribute("fill", dustColor);
      dot.setAttribute("opacity", 0.7 + Math.random() * 0.3);
      tLayer.appendChild(dot);
    }
  }

  // Stats
  const caffeine = base.caffeine;
  const sweetness = Math.min(100, (sweet.sweet || 0) + (milk.sweet || 0) + (base.sweet || 0));
  const cream = Math.min(100, (milk.cream || 0) + (topping.id === "whip" ? 30 : 0) + (topping.id === "foam" ? 15 : 0));

  document.getElementById("caffeineBar").style.width = Math.min(100, caffeine) + "%";
  document.getElementById("sweetBar").style.width = sweetness + "%";
  document.getElementById("creamBar").style.width = cream + "%";

  document.getElementById("caffeineVal").textContent = caffeine;
  document.getElementById("sweetVal").textContent = sweetness;
  document.getElementById("creamVal").textContent = cream;

  document.getElementById("cupLabel").textContent = generateName();
  document.getElementById("cupTagline").textContent = generateTagline();
}

function generateName() {
  const base = getOpt("base", builderState.base);
  const milk = getOpt("milk", builderState.milk);
  const sweet = getOpt("sweet", builderState.sweet);
  const temp = getOpt("temp", builderState.temp);

  let parts = [];
  if (temp.id === "iced") parts.push("Iced");
  if (sweet.id !== "none" && sweet.id !== "sugar") parts.push(sweet.label.replace(" Syrup", ""));
  if (milk.id !== "none") parts.push(milk.label.replace(" Milk", ""));
  parts.push(base.label.replace("Single ", "").replace("Double ", "Double ").replace(" Concentrate", ""));
  return parts.join(" ");
}

function generateTagline() {
  const base = getOpt("base", builderState.base);
  const milk = getOpt("milk", builderState.milk);
  const sweet = getOpt("sweet", builderState.sweet);
  const temp = getOpt("temp", builderState.temp);

  if (base.id === "espresso" && milk.id === "none" && sweet.id === "none") return "A measured, classical preparation.";
  if (base.id === "double" && milk.id === "none") return "Concentrated and direct.";
  if (milk.id !== "none" && sweet.id === "none") return "Restrained, milk-forward, balanced.";
  if (sweet.id === "caramel" || sweet.id === "chocolate") return "Indulgent and warm in character.";
  if (temp.id === "iced") return "Cool, composed, contemporary.";
  return "A considered composition.";
}

document.getElementById("randomBtn").addEventListener("click", () => {
  Object.keys(builderOptions).forEach(g => {
    const opts = builderOptions[g];
    builderState[g] = opts[Math.floor(Math.random() * opts.length)].id;
  });
  renderOptions();
  updatePreview();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  builderState.base = "espresso";
  builderState.milk = "none";
  builderState.sweet = "none";
  builderState.topping = "none";
  builderState.temp = "hot";
  renderOptions();
  updatePreview();
  document.getElementById("recipeCard").hidden = true;
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const card = document.getElementById("recipeCard");
  const base = getOpt("base", builderState.base);
  const milk = getOpt("milk", builderState.milk);
  const sweet = getOpt("sweet", builderState.sweet);
  const topping = getOpt("topping", builderState.topping);
  const temp = getOpt("temp", builderState.temp);

  card.hidden = false;
  card.innerHTML = `
    <div class="recipe-eyebrow">Composed Recipe</div>
    <h3>${generateName()}</h3>
    <div class="recipe-tagline">${generateTagline()}</div>
    <dl class="ingredients-list">
      <div class="ingredient-row"><dt>Service</dt><dd>${temp.label}</dd></div>
      <div class="ingredient-row"><dt>Base</dt><dd>${base.label}</dd></div>
      <div class="ingredient-row"><dt>Milk</dt><dd>${milk.label}</dd></div>
      <div class="ingredient-row"><dt>Sweetener</dt><dd>${sweet.label}</dd></div>
      <div class="ingredient-row"><dt>Finish</dt><dd>${topping.label}</dd></div>
    </dl>
  `;
  card.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// ---------- MACHINES master/detail ----------
const machineGrid = document.getElementById("machineGrid");
const machineDetail = document.getElementById("machineDetail");
const machineCountEl = document.getElementById("machineCount");
if (machineCountEl) machineCountEl.textContent = `${machines.length} Methods`;

let selectedMachineIndex = 0;

machines.forEach((m, i) => {
  const card = document.createElement("div");
  card.className = "bean-card";
  card.dataset.index = i;
  card.innerHTML = `
    <div class="bean-visual">${machineSVG(i)}</div>
    <div class="bean-info">
      <div class="bean-name">${m.name}</div>
      <div class="bean-origin">${m.category}</div>
    </div>
    <div class="bean-arrow">→</div>
  `;
  card.addEventListener("click", () => selectMachine(i));
  machineGrid.appendChild(card);
});

function selectMachine(i) {
  selectedMachineIndex = (i + machines.length) % machines.length;
  const cards = machineGrid.querySelectorAll(".bean-card");
  cards.forEach(c => c.classList.remove("selected"));
  const target = cards[selectedMachineIndex];
  if (target) {
    target.classList.add("selected");
    target.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  showMachine(machines[selectedMachineIndex]);
}

function showMachine(m) {
  machineDetail.hidden = false;
  const prev = (selectedMachineIndex - 1 + machines.length) % machines.length;
  const next = (selectedMachineIndex + 1) % machines.length;
  machineDetail.innerHTML = `
    <div class="detail-nav">
      <button class="detail-nav-btn" id="machinePrevBtn"><span class="arr">←</span> ${machines[prev].name}</button>
      <span class="detail-nav-current">${String(selectedMachineIndex + 1).padStart(2, '0')} / ${String(machines.length).padStart(2, '0')}</span>
      <button class="detail-nav-btn" id="machineNextBtn">${machines[next].name} <span class="arr">→</span></button>
    </div>
    <div class="detail-left">
      <h2>${m.name}</h2>
      <div class="detail-personality">${m.personality}</div>
      <dl class="detail-meta">
        <div class="detail-meta-row"><dt>Category</dt><dd>${m.category}</dd></div>
        <div class="detail-meta-row"><dt>Pressure</dt><dd>${m.pressure}</dd></div>
        <div class="detail-meta-row"><dt>Brew time</dt><dd>${m.time}</dd></div>
        <div class="detail-meta-row"><dt>Grind</dt><dd>${m.grind}</dd></div>
        <div class="detail-meta-row"><dt>Yield</dt><dd>${m.yield}</dd></div>
      </dl>
      <div class="detail-fact">${m.fact}</div>
    </div>
    <div class="detail-right">
      <div class="flavor-bars">
        <h4>Brew Profile</h4>
        ${flavorRow("Intensity", m.intensity)}
        ${flavorRow("Body", m.body)}
        ${flavorRow("Clarity", m.clarity)}
        ${flavorRow("Ease of use", m.ease)}
      </div>
    </div>
  `;
  document.getElementById("machinePrevBtn").addEventListener("click", () => selectMachine(selectedMachineIndex - 1));
  document.getElementById("machineNextBtn").addEventListener("click", () => selectMachine(selectedMachineIndex + 1));
  setTimeout(() => {
    machineDetail.querySelectorAll(".fill").forEach(f => {
      f.style.width = f.dataset.val + "%";
    });
  }, 60);
  if (window.innerWidth <= 880) {
    machineDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

renderOptions();
updatePreview();
selectBean(0);
selectMachine(0);

// Keyboard navigation between cards when an index-style panel is active
document.addEventListener("keydown", (e) => {
  if (document.getElementById("beans").classList.contains("active")) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); selectBean(selectedBeanIndex + 1); }
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); selectBean(selectedBeanIndex - 1); }
  } else if (document.getElementById("machines").classList.contains("active")) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); selectMachine(selectedMachineIndex + 1); }
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); selectMachine(selectedMachineIndex - 1); }
  }
});
