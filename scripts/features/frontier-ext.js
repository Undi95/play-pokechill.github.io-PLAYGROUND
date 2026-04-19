// ============================================
// BATTLE FRONTIER EXTENSION — Hoenn Gen 3 ruleset (Pokémon Emerald)
// ============================================
//
// Adds 7 "(Hoenn)" facilities to the existing Battle Frontier menu — each
// labelled with the Hoenn region where the Gen 3 Battle Frontier lived:
//   • Tour de Combat (Hoenn)       — trainer gauntlet, brain Anabel
//   • Palais de Combat (Hoenn)     — auto-move by nature, brain Spenser
//   • Arène de Combat (Hoenn)      — 3-turn judge system, brain Greta
//   • Dôme de Combat (Hoenn)       — single-elim bracket, brain Tucker
//   • Usine de Combat (Hoenn)      — random rentals + swap, brain Noland
//   • Pic de Combat (Hoenn)        — 3-door choose-your-fate, brain Lucy
//   • Pyramide de Combat (Hoenn)   — dungeon grid, brain Brandon
//
// Canonical Gen 3 rules:
//   • Battle 7   → Silver Symbol (Frontier Brain 1st fight)
//   • Battle 49  → Gold   Symbol (Frontier Brain rematch, upgraded team)
//   • All facilities are "Repeatable" — replayable infinitely.
//   • Teams of 3 Pokémon, level 100 required.
//
// Same overlay pattern as scripts/i18n/:
//   • No original game file touched.
//   • Injected via one <script> tag in index.html.
//   • Data-driven (FACILITIES array) — easy to tweak rules or add more.
//   • Internal facility IDs keep the `...Secret` suffix for save-compat
//     (switching to `...Hoenn` would wipe existing streak/symbol records).
//
// ============================================
(function () {
  "use strict";

  // ─── 1. FACILITY DATA ─────────────────────────────────────────────────────
  // Each facility is a self-contained spec. `rules.apply(ctx)` is called by the
  // combat wrapper at the right phase (move-select, judge, reward, etc.).
  // Sprites live in img/trainers/ with canonical Gen 3 Emerald filenames.
  // Icons are SVG strings in the same style as the original frontier-flair
  // icons (single-colour filled paths, 32x32 viewBox-ish).
  // SVG icons in the same style + size as the vanilla frontier-flair icons
  // (Battle Tower Eiffel, Factory gears). class="frontier-flair" must sit on
  // the <svg> element itself — styles.css line 5461 sizes it to 7rem × 7rem
  // absolute-positioned.
  //
  // Each SVG is hand-composed with rects / simple paths to avoid pixel drift
  // when the 32px viewBox is scaled up to 7rem.
  const ICON_TOWER = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M14 2h4v2h-4zm-1 3h6v3h-6zm-2 4h10v2h-10zm1 3h8v4h-8zm-1 5h10v3h-10zm-1 4h12v3h-12zm-1 4h14v3h-14zm-1 4h16v4h-16z"/></svg>`;

  const ICON_PALACE = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3 4 9h24zM3 10h26v2H3zm3 3h2v12H6zm6 0h2v12h-2zm6 0h2v12h-2zm6 0h2v12h-2zM4 26h24v2H4zm-1 3h26v2H3z"/></svg>`;

  const ICON_ARENA = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M2 5c4 2 8 3 14 3s10-1 14-3v4c-4 2-8 3-14 3S6 11 2 9zm4 8h3v6h14v-6h3v17h-3V22H9v8H6zm3 6h14v-3H9z"/></svg>`;

  const ICON_DOME = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3a12 12 0 0 0-12 12v2h24v-2A12 12 0 0 0 16 3m-6 6 1-3 1 3zm5-1 1-3 1 3zm5 1 1-3 1 3zM3 18h26v3H3zm1 4h24v3H4zm-1 4h26v3H3z"/></svg>`;

  const ICON_FACTORY = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M3 13v16h10v-5l5 3v-6l5 3v-6l6 3V11zm14 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-2 3h4v5h-4zm1-2v-1h2v1z"/></svg>`;

  const ICON_PIKE = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3 2 29h28zm0 5 10 18H6zm-2 10 2 3 2-3-2 2zm-5 8h14v2H9z"/></svg>`;

  const ICON_PYRAMID = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3 3 29h26zm0 5-9 16h18zm0 3-6 11h12zm0 3-3 6h6z"/></svg>`;

  // 7 secret variants that mirror the 7 canonical Gen 3 Emerald facilities.
  // Suffixed "(Hoenn)" / "(Hoenn)" so they read as bonus-content companions
  // to whatever vanilla Pokechill ships (Tour, Usine, Arène — different rules).
  //
  // All use backgrounds that already exist in img/bg/ so we don't have to ship
  // new art with this feature.
  const FACILITIES = [
    {
      id: "frontierTowerSecret",
      nameEn: "Battle Tower (Hoenn)",
      nameFr: "Tour de Combat (Hoenn)",
      descEn: "Trainer gauntlet — unlike the vanilla Tower's wild waves, this is a streak of fights against trainers. Pick your team and survive as long as you can.",
      descFr: "Enchaînement de dresseurs — contrairement à la Tour classique (vagues sauvages), ici ce sont des combats 100% dresseurs. Compose ton équipe et tiens le plus longtemps.",
      brain: {
        id: "anabel",
        sprite: "salon_maiden_anabel",
        nameEn: "Salon Maiden Anabel",
        nameFr: "Demoiselle du Salon Anabel",
        teamSilver: ["alakazam", "entei", "snorlax"],
        teamGold: ["raikou", "latios", "snorlax"],
      },
      iconSvg: ICON_TOWER,
      background: "tower",
      hueRotate: 200,
      rules: { streak: true },
    },
    {
      id: "frontierPalaceSecret",
      nameEn: "Battle Palace (Hoenn)",
      nameFr: "Palais de Combat (Hoenn)",
      descEn: "Your Pokémon pick moves on their own, guided by their nature. No player input during attacks.",
      descFr: "Tes Pokémon choisissent leurs capacités seuls selon leur nature. Aucun contrôle pendant les attaques.",
      brain: {
        id: "spenser",
        sprite: "palace_maven_spenser",
        nameEn: "Palace Maven Spenser",
        nameFr: "Maître du Palais Santo",
        teamSilver: ["crobat", "lapras", "claydol"],
        teamGold: ["crobat", "lapras", "slaking"],
      },
      iconSvg: ICON_PALACE,
      background: "gym",
      hueRotate: 60,
      rules: { autoMoveByNature: true },
    },
    {
      id: "frontierArenaSecret",
      nameEn: "Battle Arena (Hoenn)",
      nameFr: "Arène de Combat (Hoenn)",
      descEn: "3 turns max per battle. If neither side KOs, judges decide based on Mind / Skill / Body scores.",
      descFr: "3 tours max par combat. Si aucun K.O., le jury décide selon Esprit / Technique / Corps.",
      brain: {
        id: "greta",
        sprite: "arena_tycoon_greta",
        nameEn: "Arena Tycoon Greta",
        nameFr: "Maîtresse de l'Arène Gabrielle",
        teamSilver: ["heracross", "umbreon", "hariyama"],
        teamGold: ["hariyama", "shedinja", "medicham"],
      },
      iconSvg: ICON_ARENA,
      background: "lab",
      hueRotate: 0,
      rules: { threeTurnJudge: true },
    },
    {
      id: "frontierDomeSecret",
      nameEn: "Battle Dome (Hoenn)",
      nameFr: "Dôme de Combat (Hoenn)",
      descEn: "Single-elimination tournament — beat 4 trainers in a bracket per tour. You see each opponent's team ahead of time and pick 2 of your Pokémon.",
      descFr: "Tournoi à élimination directe — bats 4 dresseurs en bracket par tour. Tu vois l'équipe de chaque adversaire à l'avance et choisis 2 de tes Pokémon.",
      brain: {
        id: "tucker",
        sprite: "dome_ace_tucker",
        nameEn: "Dome Ace Tucker",
        nameFr: "As du Dôme Thierry",
        teamSilver: ["salamence", "charizard", "swampert"],
        teamGold: ["salamence", "metagross", "latias"],
      },
      iconSvg: ICON_DOME,
      background: "town",
      hueRotate: 320,
      rules: { bracketTournament: true, bracketSize: 4, previewEnemy: true, pickSubset: 2 },
    },
    {
      id: "frontierFactorySecret",
      nameEn: "Battle Factory (Hoenn)",
      nameFr: "Usine de Combat (Hoenn)",
      descEn: "Get 3 rental Pokémon from a random pool. After each win, you can swap one of yours with the defeated opponent's. Pure Gen 3 Factory rules.",
      descFr: "Choisis 3 Pokémon de location dans un pool aléatoire. Après chaque victoire, tu peux échanger un des tiens avec un de l'adversaire. Règles Factory Gen 3 pures.",
      brain: {
        id: "noland",
        sprite: "factory_head_noland",
        nameEn: "Factory Head Noland",
        nameFr: "Maître de l'Usine Philémon",
        teamSilver: null, // Noland uses random rentals himself, like the player
        teamGold: null,
      },
      iconSvg: ICON_FACTORY,
      background: "cave",
      hueRotate: 160,
      rules: { rentalPool: true, swapAfterWin: true },
    },
    {
      id: "frontierPikeSecret",
      nameEn: "Battle Pike (Hoenn)",
      nameFr: "Pic de Combat (Hoenn)",
      descEn: "14 rooms. Pick one of three doors per room: battle, wild, heal, trap, or mystery. HP and status persist.",
      descFr: "14 salles. Choisis une des trois portes à chaque salle : combat, sauvage, soin, piège ou mystère. PV et statuts persistent.",
      brain: {
        id: "lucy",
        sprite: "pike_queen_lucy",
        nameEn: "Pike Queen Lucy",
        nameFr: "Reine du Pic Lucie",
        teamSilver: ["seviper", "shuckle", "milotic"],
        teamGold: ["seviper", "gyarados", "milotic"],
      },
      iconSvg: ICON_PIKE,
      background: "mountain",
      hueRotate: -40,
      rules: { chooseDoor: true, persistHpStatus: true, roomCount: 14 },
    },
    {
      id: "frontierPyramidSecret",
      nameEn: "Battle Pyramid (Hoenn)",
      nameFr: "Pyramide de Combat (Hoenn)",
      descEn: "Navigate a 7x7 grid. Hidden trainers, wild waves, items, and traps. HP and status persist. Find the stairs to advance.",
      descFr: "Navigue une grille 7x7. Dresseurs cachés, vagues sauvages, objets et pièges. PV et statuts persistent. Trouve l'escalier pour avancer.",
      brain: {
        id: "brandon",
        sprite: "pyramid_king_brandon",
        nameEn: "Pyramid King Brandon",
        nameFr: "Roi de la Pyramide Bastien",
        teamSilver: ["regirock", "regice", "registeel"],
        teamGold: ["articuno", "zapdos", "moltres"],
      },
      iconSvg: ICON_PYRAMID,
      background: "desert",
      hueRotate: 30,
      rules: { gridNav: true, persistHpStatus: true, gridSize: 7 },
    },
  ];

  // ─── 2. BRAIN BATTLE TRIGGERS ─────────────────────────────────────────────
  // Same for every facility per user spec: brain appears at round 7 (Silver)
  // and round 49 (Gold rematch with upgraded team).
  const SILVER_ROUND = 7;
  const GOLD_ROUND = 49;

  // ─── 2b. ACCESS GATE ──────────────────────────────────────────────────────
  // All 7 secret facilities are locked until the player defeats Pokemon
  // Professor Oak in VS. Matches the Shop / VS-trainer pattern
  // (areas.vsXxx.defeated === true after the fight).
  const UNLOCK_KEY = "vsPokemonProfessorOak";
  // Reuse the existing GAME_UI key so FR/other-locale translation applies.
  const UNLOCK_TEXT_KEY = "defeatPokemonProfessorOakToUnlock";
  const UNLOCK_TEXT_FALLBACK = "Defeat Pokemon Professor Oak in VS to unlock";

  function isUnlocked() {
    try {
      return !!(typeof areas !== "undefined" && areas[UNLOCK_KEY] && areas[UNLOCK_KEY].defeated);
    } catch (e) {
      return false;
    }
  }

  function unlockText() {
    if (typeof t_ui === "function") {
      const t = t_ui(UNLOCK_TEXT_KEY);
      if (t && t !== UNLOCK_TEXT_KEY) return t;
    }
    return UNLOCK_TEXT_FALLBACK;
  }

  // ─── 3. SAVE STATE ────────────────────────────────────────────────────────
  // Namespaced under saved.frontierExt so we never collide with vanilla game.
  //   streaks    : current-run round counter (advances on each win)
  //   maxStreaks : best round reached ever, per facility
  //   symbols    : { silver, gold } flags per facility (round 7 / round 49)
  //   activeRun  : in-progress run state (or null if idle):
  //                { facilityId, round, upcomingTrainer }
  function ensureSaveSlot() {
    if (typeof saved !== "object" || !saved) return;
    if (!saved.frontierExt) {
      saved.frontierExt = {
        streaks: {},
        maxStreaks: {},
        symbols: {},
        activeRun: null,
      };
    }
    if (saved.frontierExt.activeRun === undefined) saved.frontierExt.activeRun = null;
    for (const f of FACILITIES) {
      if (saved.frontierExt.streaks[f.id] === undefined) saved.frontierExt.streaks[f.id] = 0;
      if (saved.frontierExt.maxStreaks[f.id] === undefined) saved.frontierExt.maxStreaks[f.id] = 0;
      if (!saved.frontierExt.symbols[f.id]) saved.frontierExt.symbols[f.id] = { silver: false, gold: false };
    }
  }

  // ─── 3b. TRAINER GENERATOR ────────────────────────────────────────────────
  // Builds a random trainer for non-boss rounds (1-6, 8-48, 50+). Bosses are
  // round 7 / 49 — those use the facility's canonical brain team.
  //
  // Design goals:
  //   • Every trainer has a diverse, functional team (STAB attacks + at least
  //     one utility move per Pokémon).
  //   • Difficulty scales with round: round 1-2 mid-tier, 3-5 strong,
  //     6 / 8+ very strong, 49+ brutal.
  //   • Sprites drawn from the 100+ available in img/trainers/ so the pool
  //     feels populated.
  // Generic role-based sprites only — no iconic / named trainers (Cynthia,
  // Lance, Red, etc.) because their PNGs carry their own identity and pairing
  // them with random names breaks immersion. Bosses keep their canonical
  // sprite via `facility.brain.sprite`, generics are reserved for rounds 1-6.
  // Every filename below verified present in img/trainers/ (tree listed
  // against ls(img/trainers/)).
  const GENERIC_SPRITES_M = [
    "aceTrainerSnowM","artist","blackBelt","bugCatcher","channeler","clown",
    "firebreather","gentleman","hiker","hiker2","janitor","pokemaniac",
    "rocketGruntM","sailor","schoolKid","scientist","swimmer","veteran",
    "worker","youngster",
  ];
  const GENERIC_SPRITES_F = [
    "aceTrainerSnowF","aromaLady","battlegirl","beauty","birdkeeper",
    "hexmaniac","madame","psychic","rocketGruntF",
  ];
  const TRAINER_NAMES_FR_M = [
    "Jean-Baptiste","Hugo","Mathis","Alexandre","Tristan","Raphaël","Nicolas",
    "Arthur","Lucas","Gabriel","Noah","Elias","Maxime","Julien","Antoine",
    "Baptiste","Victor","Clément","Théo","Paul",
  ];
  const TRAINER_NAMES_FR_F = [
    "Léa","Océane","Zoé","Emma","Camille","Chloé","Sarah","Juliette","Manon",
    "Inès","Louna","Jade","Alice","Lucie","Élise","Marion","Noémie","Clara",
    "Sophie","Anaïs",
  ];
  const TRAINER_NAMES_EN_M = [
    "Jake","Hugh","Max","Alex","Trent","Cam","Rafe","Nick","Arthur","Luke",
    "Gabe","Noah","Eli","Mark","Jason","Sam","Victor","Leo","Theo","Paul",
  ];
  const TRAINER_NAMES_EN_F = [
    "Lilly","Olivia","Zoe","Emma","Chloe","Sarah","Julie","Mandy","Ines",
    "Luna","Jade","Alice","Lucy","Ellie","Mary","Noemi","Clara","Sophie",
    "Anna","Ivy",
  ];

  // Pokémon pool for non-boss trainers, tagged by difficulty tier. Tier grows
  // with the round so round-1 trainers feel different from round-6 trainers.
  //   tier 1 : solid mid-BST mons (Rounds 1-2)
  //   tier 2 : strong pseudo-legendary / meta (Rounds 3-5)
  //   tier 3 : end-game heavy hitters (Round 6, 8-10, etc.)
  const POOL_TIER = {
    1: [
      "vileplume","wigglytuff","ninetales","rapidash","weezing","muk","hypno",
      "alakazam","machamp","arcanine","kadabra","rhydon","dodrio","tangela",
      "kingler","kingdra","tauros","sandslash","primeape","golduck","fearow",
    ],
    2: [
      "gengar","snorlax","gyarados","dragonite","tyranitar","blissey","salamence",
      "metagross","garchomp","milotic","togekiss","heracross","breloom","mamoswine",
      "scizor","aggron","weavile","starmie","venusaur","charizard","blastoise",
    ],
    3: [
      "dragonite","tyranitar","salamence","metagross","garchomp","hydreigon",
      "goodra","dragapult","kommoKommo","volcarona","excadrill","ferrothorn",
      "conkeldurr","chandelure","haxorus","milotic","mamoswine","kingambit",
    ],
  };

  function pickFromPool(tier) {
    const list = POOL_TIER[tier] || POOL_TIER[1];
    for (let tries = 0; tries < 20; tries++) {
      const id = list[Math.floor(Math.random() * list.length)];
      if (typeof pkmn !== "undefined" && pkmn[id]) return id;
    }
    // Hard fallback: any common mon that definitely exists
    return "tauros";
  }

  // Pick 4 move ids for a given Pokémon id. Prioritises:
  //   slot 1 : the mon's signature (always a strong fit)
  //   slot 2 : highest-power STAB attack compatible with its primary type
  //   slot 3 : utility move (status / debuff / buff)
  //   slot 4 : second attack (different type, for coverage)
  function pickMovesetFor(pkmnId) {
    const p = typeof pkmn !== "undefined" ? pkmn[pkmnId] : null;
    if (!p || typeof move === "undefined") return [];
    const primaryType = Array.isArray(p.type) ? p.type[0] : p.type;
    const secondaryType = Array.isArray(p.type) ? p.type[1] : null;

    const chosen = [];
    const pushIfOk = (mv) => {
      if (!mv) return;
      const id = mv.id || (mv === mv ? null : null);
      // Match the rest of the codebase: we need move.id not the object
      // (move entries have no explicit `id` property; the object key serves
      // as identity, so derive it by comparing against move dict).
      const key = Object.keys(move).find((k) => move[k] === mv);
      if (!key) return;
      if (chosen.indexOf(key) !== -1) return;
      chosen.push(key);
    };

    // 1. Signature move if defined
    if (p.signature) pushIfOk(p.signature);

    // Build candidate lists once
    const allMoves = Object.entries(move);
    const typeOk = (mv, t) => {
      if (!mv || !Array.isArray(mv.moveset)) return false;
      return mv.moveset.indexOf(t) !== -1 || mv.moveset.indexOf("all") !== -1;
    };
    const isAttack = (mv) => mv.power && mv.power > 0;
    const isStatus = (mv) => !mv.power || mv.power === 0;

    // 2. Strongest STAB attack for primary type (power 70-130 range, rarity >= 2)
    const stabPrimary = allMoves
      .filter(([k, mv]) => mv.type === primaryType && typeOk(mv, primaryType) && isAttack(mv) && mv.power >= 65 && mv.power <= 150 && (mv.rarity || 0) >= 2)
      .sort(([, a], [, b]) => (b.power || 0) - (a.power || 0));
    if (stabPrimary[0]) pushIfOk(stabPrimary[0][1]);

    // 3. Utility move (status, low power, rarity >= 2, primary or "all" moveset)
    const utility = allMoves
      .filter(([k, mv]) => typeOk(mv, primaryType) && isStatus(mv) && (mv.rarity || 0) >= 2);
    if (utility.length) {
      const u = utility[Math.floor(Math.random() * utility.length)];
      pushIfOk(u[1]);
    }

    // 4. Coverage attack — different type from primary, strong
    const coverageType = secondaryType || "normal";
    const coverage = allMoves
      .filter(([k, mv]) => mv.type === coverageType && typeOk(mv, coverageType) && isAttack(mv) && mv.power >= 60 && mv.power <= 130 && (mv.rarity || 0) >= 2)
      .sort(([, a], [, b]) => (b.power || 0) - (a.power || 0));
    if (coverage[0]) pushIfOk(coverage[0][1]);

    // Pad with tackle if we somehow came short
    while (chosen.length < 4) {
      if (move.tackle && chosen.indexOf("tackle") === -1) chosen.push("tackle");
      else break;
    }
    return chosen.slice(0, 4);
  }

  // Pick a sprite + a gender-matching name. Neutral sprites get a random
  // pick from either name pool so we don't accidentally pair e.g. a
  // "beauty" sprite with "Gabriel" or a "blackBelt" sprite with "Lucie".
  // Pick a sprite + a gender-matching name. Probability reflects bucket size
  // roughly (22 M : 7 F), but floored at 30% F so women show up often enough.
  function pickSpriteAndName(lang) {
    const roll = Math.random();
    let gender, pool;
    if (roll < 0.7) {
      gender = "M";
      pool = GENERIC_SPRITES_M;
    } else {
      gender = "F";
      pool = GENERIC_SPRITES_F;
    }
    const sprite = pool[Math.floor(Math.random() * pool.length)];
    const nameList = lang === "fr"
      ? (gender === "M" ? TRAINER_NAMES_FR_M : TRAINER_NAMES_FR_F)
      : (gender === "M" ? TRAINER_NAMES_EN_M : TRAINER_NAMES_EN_F);
    const name = nameList[Math.floor(Math.random() * nameList.length)];
    return { sprite, name, gender };
  }

  function generateTrainer(round, facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const { sprite, name } = pickSpriteAndName(lang);

    // Round-based tier scaling
    let tier = 1;
    if (round >= 3) tier = 2;
    if (round >= 6) tier = 3;

    const slots = [1, 2, 3].map(() => {
      const id = pickFromPool(tier);
      return { id, moves: pickMovesetFor(id) };
    });

    return {
      name,
      sprite,
      team: slots,
      tier,
      round,
      facilityId: facility.id,
    };
  }

  // ─── 4. STYLES (injected, same pattern as i18n lang-toggle) ───────────────
  function injectStyles() {
    if (document.getElementById("frontier-ext-css")) return;
    const css = `
      /* Whole-tile hue rotation gives each facility its own colour identity. */
      .frontier-ext-tile {
        position: relative;
        filter: hue-rotate(var(--hue, 0deg));
      }
      /* Counter-rotate the brain sprite so its colours stay true despite the
         tile tint. Same trick as the original Battle Factory tile. */
      .frontier-ext-tile img.frontier-ext-brain-icon {
        filter: hue-rotate(calc(var(--hue, 0deg) * -1));
        image-rendering: pixelated;
        height: 100%;
        width: auto;
        max-height: 7rem;
      }
      .frontier-ext-repeatable-tag {
        display: inline-block;
        background: #6ab04c;
        color: white;
        font-size: 0.7rem;
        padding: 0.1rem 0.5rem;
        border-radius: 0.2rem;
        margin-left: 0.3rem;
        vertical-align: middle;
        letter-spacing: 0.05em;
      }
      .frontier-ext-streak {
        background: #4a4a6a;
        color: white;
        padding: 0.1rem 0.5rem;
        border-radius: 0.2rem;
        font-size: 0.85rem;
        margin-right: 0.2rem;
      }
      .frontier-ext-symbol {
        display: inline-block;
        font-size: 1.1rem;
        margin: 0 0.1rem;
      }
      .frontier-ext-symbol.silver { color: #c0c0c0; text-shadow: 0 0 3px #888; }
      .frontier-ext-symbol.gold   { color: #ffd700; text-shadow: 0 0 3px #b8860b; }
      .frontier-ext-symbol.locked { color: #2a2a2a; }
      /* Right-click help rule grid inside the tooltip. Colours picked to
         contrast with the game's beige/tan tooltipBottom background (light1)
         — bright orange on beige was unreadable, dark brown/red works. */
      .frontier-ext-help-rules {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.45rem 1rem;
        padding: 0.7rem 1rem;
        text-align: left;
        font-size: 0.95rem;
        color: var(--dark1, #2a1a0a);
      }
      .frontier-ext-help-rules .label {
        color: #7a2e1a;
        font-weight: bold;
        white-space: nowrap;
      }
      .frontier-ext-help-rules .value {
        color: var(--dark1, #2a1a0a);
      }
      .frontier-ext-help-footer {
        padding: 0.4rem 1rem 0.6rem;
        opacity: 0.75;
        font-size: 0.85rem;
        text-align: center;
        color: var(--dark1, #2a1a0a);
        font-style: italic;
      }
      /* Tooltip header icon — smaller than the tile's 7rem flair. */
      .frontier-ext-tooltip-icon {
        display: inline-block;
        vertical-align: middle;
      }
      .frontier-ext-tooltip-icon svg {
        width: 3rem;
        height: 3rem;
        color: var(--light2, #fff);
        opacity: 0.9;
      }
      /* Locked state — applied when the player hasn't beaten Pokemon
         Professor Oak in VS yet. Same dim pattern as the shop's locked
         categories (explore.js:1674). */
      .frontier-ext-tile.locked {
        filter: hue-rotate(var(--hue, 0deg)) brightness(0.35) grayscale(0.3);
        cursor: not-allowed;
      }
      .frontier-ext-tile.locked img.frontier-ext-brain-icon {
        filter: hue-rotate(calc(var(--hue, 0deg) * -1)) brightness(2.8) grayscale(-0.3);
        /* counter-rotate to keep original sprite colours but slightly
           re-brighten since the parent darkened everything. */
      }
      .frontier-ext-lock-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 3rem;
        color: #ffd700;
        opacity: 0.9;
        z-index: 5;
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.8));
      }
      /* Section divider between vanilla facilities (bound by division rules
         shown in the header banner) and our secret section (Open Level,
         Gen 3 canonical rules, no division restriction). */
      .frontier-ext-divider {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin: 1rem 0 0.4rem;
        padding: 0.4rem 0.8rem;
        background: linear-gradient(90deg,
          rgba(157, 78, 221, 0.15),
          rgba(157, 78, 221, 0.35) 50%,
          rgba(157, 78, 221, 0.15));
        border-top: 2px dashed rgba(207, 168, 250, 0.7);
        border-bottom: 2px dashed rgba(207, 168, 250, 0.7);
        color: #fff;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-divider-title {
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.05em;
        color: #e0c3ff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      }
      .frontier-ext-divider-sub {
        font-size: 0.85rem;
        opacity: 0.85;
        font-style: italic;
      }
      /* Run-action buttons inside the modal bottom. */
      .frontier-ext-run-actions {
        display: flex;
        gap: 0.5rem;
        padding: 0.6rem 0.8rem 0.8rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .frontier-ext-action-btn {
        border: none;
        border-radius: 0.3rem;
        padding: 0.5rem 1rem;
        font-size: 0.95rem;
        cursor: pointer;
        background: var(--dark1, #2a1a0a);
        color: var(--light1, #f5e6c8);
        transition: transform 0.1s, filter 0.15s;
        font-weight: bold;
      }
      .frontier-ext-action-btn:hover { filter: brightness(1.15); transform: translateY(-1px); }
      .frontier-ext-action-btn:active { transform: translateY(0); }
      .frontier-ext-action-btn.primary {
        background: #6ab04c;
        color: white;
      }
      .frontier-ext-action-btn.danger {
        background: #c0392b;
        color: white;
      }
    `;
    const style = document.createElement("style");
    style.id = "frontier-ext-css";
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ─── 4b. SECTION DIVIDER ──────────────────────────────────────────────────
  // Renders a labelled band between the vanilla facilities (division-locked)
  // and our secret section (Open Level, no division rules).
  function buildDivider() {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const t = lang === "fr"
      ? {
          title: "⚔️ Zone de Combat — Hoenn",
          sub: "Règles Gen 3 d'Emeraude · Pokémon niveau 100 requis · Équipes de 3 · Pas de restriction de division",
        }
      : {
          title: "⚔️ Battle Frontier — Hoenn",
          sub: "Gen 3 Emerald rules · Level 100 Pokémon required · Teams of 3 · No division restriction",
        };

    const div = document.createElement("div");
    div.className = "frontier-ext-divider";
    div.innerHTML = `
      <span class="frontier-ext-divider-title">${t.title}</span>
      <span class="frontier-ext-divider-sub">${t.sub}</span>
    `;
    return div;
  }

  // ─── 5. TILE BUILDER ──────────────────────────────────────────────────────
  function buildTile(facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const name = lang === "fr" ? facility.nameFr : facility.nameEn;
    const repeatableLabel = lang === "fr" ? "RECOMMENÇABLE" : "REPEATABLE";
    const streakLabel = lang === "fr" ? "Série" : "Streak";
    const maxLabel = lang === "fr" ? "Record" : "Best";

    const streak = (saved.frontierExt && saved.frontierExt.streaks[facility.id]) || 0;
    const maxStreak = (saved.frontierExt && saved.frontierExt.maxStreaks[facility.id]) || 0;
    const symbols = (saved.frontierExt && saved.frontierExt.symbols[facility.id]) || { silver: false, gold: false };

    const silverClass = symbols.silver ? "silver" : "locked";
    const goldClass = symbols.gold ? "gold" : "locked";

    const unlocked = isUnlocked();

    const tile = document.createElement("div");
    tile.className = "explore-ticket frontier-ticket frontier-ext-tile" + (unlocked ? "" : " locked");
    tile.style.setProperty("--hue", facility.hueRotate + "deg");
    tile.dataset.facility = facility.id;

    // Golden padlock overlay when locked.
    const lockOverlay = unlocked
      ? ""
      : `<svg class="frontier-ext-lock-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3m0 11a2 2 0 0 1 1 3.7V20h-2v-1.3A2 2 0 0 1 12 15"/></svg>`;

    // Structure mirrors the vanilla Battle Tower / Battle Factory tile in
    // explore.js line ~7383+ : frontier-flair SVG as a direct child, then the
    // left label span, then the right-side sprite container.
    tile.innerHTML = `
      <span class="hitbox"></span>
      ${lockOverlay}
      <div style="width: 100%;">
        ${facility.iconSvg}
        <span class="explore-ticket-left">
          <span style="font-size:1.2rem">
            ${name}
            <span class="frontier-ext-repeatable-tag">${repeatableLabel}</span>
          </span>
          <span>
            <strong class="frontier-ext-streak">${streakLabel}: ${streak} / ${maxLabel}: ${maxStreak}</strong>
            <span class="frontier-ext-symbol ${silverClass}" title="Silver Symbol (round ${SILVER_ROUND})">●</span>
            <span class="frontier-ext-symbol ${goldClass}" title="Gold Symbol (round ${GOLD_ROUND})">●</span>
          </span>
        </span>
      </div>
      <div style="width: 8rem;" class="explore-ticket-right">
        <span class="explore-ticket-bg" style="background-image: url(img/bg/${facility.background}.png);"></span>
        <img class="explore-ticket-sprite sprite-trim frontier-ext-brain-icon"
             style="z-index: 10;"
             src="img/trainers/${facility.brain.sprite}.png"
             alt="${facility.brain.nameEn}">
      </div>
    `;

    // Right-click / long-press opens the help tooltip even when locked, so
    // the player can still read what the facility will do once they unlock it.
    tile.dataset.help = "FrontierExt:" + facility.id;
    // Left-click: preview / battle start if unlocked, else show the lock
    // message using the same pattern as the shop's locked apricorn category
    // (explore.js:1676-1681).
    tile.addEventListener("click", () => {
      if (!isUnlocked()) {
        showLockedTooltip();
        return;
      }
      openFacilityPreview(facility);
    });
    return tile;
  }

  function showLockedTooltip() {
    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    if (top) top.style.display = "none";
    if (title) title.style.display = "none";
    if (bottom) bottom.style.display = "none";
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = unlockText();
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  // ─── 6. FACILITY PREVIEW / RUN MODAL ──────────────────────────────────────
  // Left-click on an unlocked tile opens this. Shows different content
  // depending on whether a run is already in progress for this facility.
  function openFacilityPreview(facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const name = lang === "fr" ? facility.nameFr : facility.nameEn;
    const brainName = lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn;

    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    const isActive = run && run.facilityId === facility.id;

    const t = lang === "fr"
      ? {
          brain: "Cerveau :",
          maxStreak: "Meilleure série :",
          inProgress: "Série en cours",
          start: "Commencer une série",
          cont: "Continuer (Round {r})",
          abandon: "Abandonner",
          round: "Round",
          brainIncoming: "⚡ Round 7 — le Cerveau de la Frontière approche !",
          goldIncoming: "💎 Round 49 — rematch Or !",
        }
      : {
          brain: "Brain:",
          maxStreak: "Best streak:",
          inProgress: "Run in progress",
          start: "Start a run",
          cont: "Continue (Round {r})",
          abandon: "Abandon",
          round: "Round",
          brainIncoming: "⚡ Round 7 — the Frontier Brain is next!",
          goldIncoming: "💎 Round 49 — Gold rematch!",
        };

    const maxStreak = saved.frontierExt.maxStreaks[facility.id] || 0;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${facility.brain.sprite}.png" style="max-height: 140px; image-rendering: pixelated;" alt="${brainName}">`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = name;
    }

    const nextRound = isActive ? run.round + 1 : 1;
    const isBossRound = nextRound === SILVER_ROUND || nextRound === GOLD_ROUND;

    if (mid) {
      mid.style.display = "block";
      let html = `<div style="padding:0.4rem 0.8rem;font-style:italic;opacity:0.9;">`;
      if (isActive) {
        html += `<strong>${t.inProgress}</strong> — ${t.round} ${run.round + 1}/${SILVER_ROUND}`;
      } else {
        html += `${lang === "fr" ? facility.descFr : facility.descEn}`;
      }
      html += `</div>`;
      if (isBossRound && isActive) {
        html += `<div style="padding:0.3rem 0.8rem;color:#ffd700;font-weight:bold;">${nextRound === SILVER_ROUND ? t.brainIncoming : t.goldIncoming}</div>`;
      }
      mid.innerHTML = html;
    }

    if (bottom) {
      bottom.style.display = "block";
      const buttons = isActive
        ? `
          <button class="frontier-ext-action-btn primary" data-action="continue">${t.cont.replace("{r}", run.round + 1)}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        `
        : `
          <button class="frontier-ext-action-btn primary" data-action="start">${t.start}</button>
        `;

      bottom.innerHTML = `
        <div class="frontier-ext-help-rules" style="grid-template-columns:auto 1fr;">
          <span class="label">${t.brain}</span>
          <span class="value">${brainName}</span>
          <span class="label">${t.maxStreak}</span>
          <span class="value">${maxStreak}</span>
        </div>
        <div class="frontier-ext-run-actions">${buttons}</div>
      `;

      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }

    if (typeof openTooltip === "function") openTooltip();
  }

  // Shows upcoming trainer + simulate win/loss buttons (placeholder until
  // real combat is wired in Étape 2).
  function openSimulatedFight(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run || run.facilityId !== facility.id) return;

    const lang = window.gameLang === "fr" ? "fr" : "en";
    const nextRound = run.round + 1;
    const isSilverBoss = nextRound === SILVER_ROUND;
    const isGoldBoss = nextRound === GOLD_ROUND;

    const t = lang === "fr"
      ? {
          round: "Round",
          vs: "vs",
          warn: "⚠️ Tous tes Pokémon doivent être niveau 100. Sinon le combat sera très dur !",
          launch: "⚔️ Lancer le combat",
          cancel: "Annuler",
        }
      : {
          round: "Round",
          vs: "vs",
          warn: "⚠️ All your Pokémon must be level 100. The battle will be very hard otherwise!",
          launch: "⚔️ Launch battle",
          cancel: "Cancel",
        };

    // Generate or reuse the upcoming trainer
    let trainer;
    if (isSilverBoss || isGoldBoss) {
      const brainTeam = isSilverBoss ? facility.brain.teamSilver : facility.brain.teamGold;
      trainer = {
        name: lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn,
        sprite: facility.brain.sprite,
        team: brainTeam
          ? brainTeam.map((id) => ({ id, moves: pickMovesetFor(id) }))
          : [1, 2, 3].map(() => {
              const id = pickFromPool(3);
              return { id, moves: pickMovesetFor(id) };
            }),
        isBoss: true,
      };
    } else {
      trainer = generateTrainer(nextRound, facility);
    }
    run.upcomingTrainer = trainer;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${trainer.sprite}.png" style="max-height: 140px; image-rendering: pixelated;" alt="${trainer.name}">`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${t.round} ${nextRound} — ${trainer.name}`;
    }
    if (mid) {
      mid.style.display = "block";
      const teamPreview = trainer.team
        .map((slot) => (typeof format === "function" ? format(slot.id) : slot.id))
        .join(" · ");
      mid.innerHTML = `
        <div style="padding:0.5rem 0.8rem;">
          <div style="opacity:0.75;font-size:0.9rem;">${t.vs}</div>
          <div style="font-weight:bold;margin-top:0.2rem;">${teamPreview}</div>
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div style="padding:0.4rem 0.8rem;color:#7a2e1a;font-size:0.85rem;text-align:center;">${t.warn}</div>
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="launch">${t.launch}</button>
          <button class="frontier-ext-action-btn" data-action="back">${t.cancel}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function handleRunAction(action, facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;

    if (action === "start") {
      saved.frontierExt.activeRun = {
        facilityId: facility.id,
        round: 0,
        upcomingTrainer: null,
      };
      saved.frontierExt.streaks[facility.id] = 0;
      openSimulatedFight(facility);
      return;
    }
    if (action === "continue") {
      openSimulatedFight(facility);
      return;
    }
    if (action === "abandon") {
      if (run) {
        const finalRound = run.round;
        if (finalRound > (saved.frontierExt.maxStreaks[facility.id] || 0)) {
          saved.frontierExt.maxStreaks[facility.id] = finalRound;
        }
      }
      saved.frontierExt.activeRun = null;
      if (typeof updateFrontier === "function") updateFrontier();
      if (typeof closeTooltip === "function") closeTooltip();
      return;
    }
    if (action === "back") {
      openFacilityPreview(facility);
      return;
    }
    if (action === "launch") {
      launchCombat(facility);
      return;
    }
  }

  // ─── 6b. HELP TOOLTIP (right-click / long-press) ──────────────────────────
  // Each tile sets dataset.help = "FrontierExt:<id>". When the game's
  // right-click handler calls tooltipData("help", that string), we intercept
  // and fill the tooltip with a rules breakdown specific to the facility.
  function installHelpTooltip() {
    if (typeof window.tooltipData !== "function") {
      setTimeout(installHelpTooltip, 100);
      return;
    }
    const origTooltipData = window.tooltipData;
    window.tooltipData = function (category, data) {
      if (category === "help" && typeof data === "string" && data.indexOf("FrontierExt:") === 0) {
        const facId = data.slice("FrontierExt:".length);
        const facility = FACILITIES.find((f) => f.id === facId);
        if (facility) {
          fillHelpTooltip(facility);
          if (typeof openTooltip === "function") openTooltip();
          return;
        }
      }
      return origTooltipData.apply(this, arguments);
    };
  }

  function fillHelpTooltip(facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const name = lang === "fr" ? facility.nameFr : facility.nameEn;
    const desc = lang === "fr" ? facility.descFr : facility.descEn;
    const brainName = lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn;

    // Localised labels
    const t = lang === "fr"
      ? {
          rules: "Règles",
          brain: "Cerveau de la Frontière",
          silverAt: "Symbole Argent",
          goldAt: "Symbole Or",
          teamSilver: "Équipe Argent",
          teamGold: "Équipe Or",
          round: "Combat",
          repeatable: "Affrontable à l'infini — les combats reprennent à zéro à chaque tentative mais les records restent.",
        }
      : {
          rules: "Rules",
          brain: "Frontier Brain",
          silverAt: "Silver Symbol",
          goldAt: "Gold Symbol",
          teamSilver: "Silver Team",
          teamGold: "Gold Team",
          round: "Battle",
          repeatable: "Fully repeatable — runs reset each attempt but streaks are kept for posterity.",
        };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      // Strip the frontier-flair class (which forces 7rem absolute-positioned
      // sizing meant for the tile) so the tooltip header shows a compact 3rem
      // icon instead.
      const compactIcon = facility.iconSvg.replace(/\bclass="frontier-flair"\s*/, "");
      top.innerHTML = `<span class="frontier-ext-tooltip-icon">${compactIcon}</span>`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = name;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `<div style="padding: 0.4rem 0.8rem; font-style: italic; opacity: 0.9;">${desc}</div>`;
    }
    if (bottom) {
      bottom.style.display = "block";
      const teamSilverStr = facility.brain.teamSilver
        ? facility.brain.teamSilver.map((id) => format(id)).join(" · ")
        : (lang === "fr" ? "Location aléatoire" : "Random rentals");
      const teamGoldStr = facility.brain.teamGold
        ? facility.brain.teamGold.map((id) => format(id)).join(" · ")
        : (lang === "fr" ? "Location aléatoire" : "Random rentals");

      bottom.innerHTML = `
        <div class="frontier-ext-help-rules">
          <span class="label">${t.brain}:</span>
          <span class="value">${brainName}</span>
          <span class="label">${t.silverAt} (${t.round} ${SILVER_ROUND}):</span>
          <span class="value">${teamSilverStr}</span>
          <span class="label">${t.goldAt} (${t.round} ${GOLD_ROUND}):</span>
          <span class="value">${teamGoldStr}</span>
        </div>
        <div class="frontier-ext-help-footer">${t.repeatable}</div>
      `;
    }
  }

  // ─── 6c. REAL COMBAT LAUNCH (ÉTAPE 2) ─────────────────────────────────────
  // Ephemeral area id used throughout. Always reassigned before each fight.
  const RUN_AREA_ID = "frontierExtRun";

  // Construct an `areas[RUN_AREA_ID]` object with the trainer's team. Mirrors
  // the shape of vanilla vsTrainer areas (areasDictionary.js line 5152) so
  // the combat engine at explore.js:484 reads slot1/slot1Moves/... natively.
  function buildEphemeralRunArea(trainer, facility) {
    if (typeof areas === "undefined" || typeof pkmn === "undefined") return null;

    const team = {};
    trainer.team.forEach((slot, i) => {
      const slotN = i + 1;
      if (!pkmn[slot.id]) return;
      team["slot" + slotN] = pkmn[slot.id];
      team["slot" + slotN + "Moves"] = slot.moves;
    });

    areas[RUN_AREA_ID] = {
      id: RUN_AREA_ID,
      name: trainer.name,
      background: facility.background,
      sprite: trainer.sprite,
      difficulty: trainer.tier ? trainer.tier * 10 + 20 : 40,
      trainer: true,
      type: "vs",
      level: 100,
      team,
      fieldEffect: [],
      itemReward: {}, // no items for non-boss rounds; boss could add
      defeated: false,
      hpPercentage: 100,
      // Called by explore.js when all slots are defeated. We let our
      // leaveCombat wrapper handle state advancement; here we just mark
      // the area done so the wrapper can tell victory from defeat.
      encounterEffect: function () {
        /* no-op — handled in leaveCombat hook */
      },
    };
    return areas[RUN_AREA_ID];
  }

  // Count how many slots of the currently-selected preview team are filled.
  // Used to enforce the Frontier rule of exactly 3 Pokémon per team.
  function currentPreviewTeamSize() {
    try {
      const pt = saved.previewTeams[saved.currentPreviewTeam];
      if (!pt) return 0;
      let n = 0;
      for (const slot of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        if (pt[slot] && pt[slot].pkmn) n++;
      }
      return n;
    } catch (e) {
      return 0;
    }
  }

  function showTeamSizeError() {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const title = lang === "fr" ? "Équipe trop grande" : "Team too large";
    const msg = lang === "fr"
      ? "Les Facilities Secrètes suivent les règles Gen 3 : exactement 3 Pokémon par équipe. Retire les Pokémon supplémentaires via l'éditeur d'équipe avant de lancer un combat."
      : "Secret Facilities use Gen 3 rules: exactly 3 Pokémon per team. Remove extras via the team editor before starting a fight.";
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    if (top) top.style.display = "none";
    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = "⚠️ " + title; }
    if (mid) { mid.style.display = "block"; mid.innerHTML = `<div style="padding:0.6rem 0.8rem;">${msg}</div>`; }
    if (bottom) bottom.style.display = "none";
    if (typeof openTooltip === "function") openTooltip();
  }

  // Kick off a real combat round. Same flow as vanilla tile click:
  //   1) set saved.currentAreaBuffer
  //   2) show the team-preview menu
  //   3) hide explore menu
  // The player then picks their team + confirms, which triggers the
  // vanilla combat start path. No need to re-implement combat.
  function launchCombat(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run || run.facilityId !== facility.id) return;

    // Frontier rule: teams of exactly 3 Pokémon. Refuse the launch if the
    // player's preview team has anything other than 3.
    const teamSize = currentPreviewTeamSize();
    if (teamSize !== 3) {
      showTeamSizeError();
      return;
    }

    const nextRound = run.round + 1;
    const isSilverBoss = nextRound === SILVER_ROUND;
    const isGoldBoss = nextRound === GOLD_ROUND;

    // Regenerate (or keep) the upcoming trainer for this round
    let trainer;
    if (isSilverBoss || isGoldBoss) {
      const brainTeam = isSilverBoss ? facility.brain.teamSilver : facility.brain.teamGold;
      trainer = {
        name: window.gameLang === "fr" ? facility.brain.nameFr : facility.brain.nameEn,
        sprite: facility.brain.sprite,
        team: brainTeam
          ? brainTeam.map((id) => ({ id, moves: pickMovesetFor(id) }))
          : [1, 2, 3].map(() => {
              const id = pickFromPool(3);
              return { id, moves: pickMovesetFor(id) };
            }),
        tier: 3,
        isBoss: true,
      };
    } else {
      trainer = run.upcomingTrainer || generateTrainer(nextRound, facility);
    }
    run.upcomingTrainer = trainer;

    const area = buildEphemeralRunArea(trainer, facility);
    if (!area) return;

    // Follow the same team-preview opening flow as the vanilla tiles
    // (explore.js Battle Tower tile click handler at line ~7399).
    try {
      saved.currentAreaBuffer = RUN_AREA_ID;
      const previewExit = document.getElementById("preview-team-exit");
      const teamMenu = document.getElementById("team-menu");
      const menuBtn = document.getElementById("menu-button-parent");
      const exploreMenu = document.getElementById("explore-menu");
      if (previewExit) previewExit.style.display = "flex";
      if (teamMenu) {
        teamMenu.style.zIndex = "50";
        teamMenu.style.display = "flex";
      }
      if (menuBtn) menuBtn.style.display = "none";
      if (typeof updatePreviewTeam === "function") updatePreviewTeam();
      if (typeof afkSeconds !== "undefined") window.afkSeconds = 0;
      if (exploreMenu) exploreMenu.style.display = "none";
      if (typeof closeTooltip === "function") closeTooltip();
    } catch (e) {
      console.error("[frontier-ext] failed to open preview menu:", e);
    }
  }

  // Called from the leaveCombat hook on victory.
  function onRunVictory() {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    run.round += 1;
    saved.frontierExt.streaks[run.facilityId] = run.round;
    if (run.round > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = run.round;
    }
    if (run.round === SILVER_ROUND) saved.frontierExt.symbols[run.facilityId].silver = true;
    else if (run.round === GOLD_ROUND) saved.frontierExt.symbols[run.facilityId].gold = true;
    run.upcomingTrainer = null;
    // Player returns to explore menu naturally via leaveCombat — they'll
    // click the tile again to continue or go elsewhere.
  }

  function onRunDefeat() {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const final = run.round;
    if (final > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = final;
    }
    saved.frontierExt.activeRun = null;
    saved.frontierExt.streaks[run.facilityId] = 0;
  }

  // Wrap leaveCombat so we can detect which side won when it returns from
  // a frontier-ext run area. Installed once at bootstrap, retries until the
  // game's leaveCombat is defined.
  function installCombatHook() {
    if (typeof window.leaveCombat !== "function") {
      setTimeout(installCombatHook, 200);
      return;
    }
    if (window.__frontierExtLeaveCombatHooked) return;
    window.__frontierExtLeaveCombatHooked = true;
    const orig = window.leaveCombat;
    window.leaveCombat = function () {
      const wasFrontierRun = typeof saved !== "undefined" && saved &&
                             saved.currentArea === RUN_AREA_ID;
      // explore.js sets `areas[currentArea].defeated = true` BEFORE calling
      // leaveCombat() on victory. If the flag is set when we arrive here,
      // the player won this round; otherwise they lost (or abandoned).
      const wasVictory = wasFrontierRun &&
                         areas[RUN_AREA_ID] &&
                         areas[RUN_AREA_ID].defeated === true;
      const res = orig.apply(this, arguments);
      if (wasFrontierRun) {
        try {
          if (wasVictory) onRunVictory();
          else onRunDefeat();
          // DO NOT delete areas[RUN_AREA_ID] here — the game calls
          // exitCombat() *after* leaveCombat() (triggered by the end-of-
          // battle screen buttons), and it reads areas[saved.lastAreaJoined]
          // at explore.js:780. Removing the area causes an uncaught
          // TypeError. Next round's buildEphemeralRunArea() will overwrite
          // the slot, so leaving it in place is safe.
        } catch (e) {
          console.error("[frontier-ext] post-combat failed:", e);
        }
      }
      return res;
    };
  }

  // ─── 7. INJECTION HOOK ────────────────────────────────────────────────────
  // Patch updateFrontier() so our tiles get appended every time the Frontier
  // menu re-renders. Uses the same funcsToHook pattern as the i18n engine.
  function installInjection() {
    if (typeof window.updateFrontier !== "function") {
      setTimeout(installInjection, 100);
      return;
    }
    const origUpdateFrontier = window.updateFrontier;
    window.updateFrontier = function () {
      const res = origUpdateFrontier.apply(this, arguments);
      try {
        ensureSaveSlot();
        injectStyles();
        const listing = document.getElementById("frontier-listing");
        if (!listing) return res;
        // Section header separating the vanilla facilities (division-locked,
        // shown in the league banner at the top) from our secret section
        // (Open Level, no division rules, Gen 3 canonical rulesets).
        listing.appendChild(buildDivider());
        // Append our tiles after whatever the original rendered.
        for (const facility of FACILITIES) {
          listing.appendChild(buildTile(facility));
        }
        // Let i18n translate any EN strings we didn't hardcode.
        if (typeof translateDOM === "function" && window.gameLang === "fr") {
          requestAnimationFrame(translateDOM);
        }
      } catch (e) {
        console.error("[frontier-ext] injection failed:", e);
      }
      return res;
    };
  }

  // ─── 8. BOOTSTRAP ─────────────────────────────────────────────────────────
  function bootstrap() {
    installInjection();
    installHelpTooltip();
    installCombatHook();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }

  // Expose for debugging from DevTools.
  window.__frontierExt = {
    facilities: FACILITIES,
    SILVER_ROUND,
    GOLD_ROUND,
    RUN_AREA_ID,
    ensureSaveSlot,
    buildTile,
    openFacilityPreview,
    generateTrainer,
    pickMovesetFor,
    pickFromPool,
    handleRunAction,
    launchCombat,
    buildEphemeralRunArea,
    onRunVictory,
    onRunDefeat,
    isUnlocked,
    // quick helper to reset all runs/symbols for testing
    resetAll: () => {
      if (typeof saved === "object" && saved) saved.frontierExt = null;
      ensureSaveSlot();
      if (typeof updateFrontier === "function") updateFrontier();
    },
  };
})();
