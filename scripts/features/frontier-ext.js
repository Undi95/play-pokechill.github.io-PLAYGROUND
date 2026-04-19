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
  // Same for every facility per user spec:
  //   round 7   → Silver Symbol (first brain fight)
  //   round 49  → Gold   Symbol (rematch with upgraded team)
  //   round 56+ → every 7 rounds past 49, the brain returns with an
  //               incremented difficulty multiplier (permanent post-Gold
  //               endless challenge — universal rule across all 7
  //               Hoenn facilities).
  const SILVER_ROUND = 7;
  const GOLD_ROUND = 49;
  const POST_GOLD_BOSS_EVERY = 7;

  // Difficulty multiplier — 1 up to Gold, then +1 per 7-round boss cycle.
  function difficultyMultiplier(round) {
    if (round <= GOLD_ROUND) return 1;
    return 1 + Math.floor((round - GOLD_ROUND) / POST_GOLD_BOSS_EVERY);
  }

  // Returns a descriptor { kind, multiplier } for boss rounds, or null.
  //   kind === "silver"  : round 7
  //   kind === "gold"    : round 49
  //   kind === "rematch" : round 56, 63, 70 … (every 7 past Gold)
  function getBossRoundInfo(round) {
    if (round === SILVER_ROUND) return { kind: "silver", multiplier: 1 };
    if (round === GOLD_ROUND) return { kind: "gold", multiplier: 1 };
    if (round > GOLD_ROUND && (round - GOLD_ROUND) % POST_GOLD_BOSS_EVERY === 0) {
      return { kind: "rematch", multiplier: difficultyMultiplier(round) };
    }
    return null;
  }

  // ─── 2c. DOME BRACKET LOGIC ──────────────────────────────────────────────
  // In the Dome, one "round" = a full 3-fight bracket (QF → SF → Final).
  // The last slot of each bracket is the Brain when round === 7 / 49 / post-
  // gold rematches, otherwise a standard pool trainer. Teams for all 3
  // opponents are pre-generated when a new bracket opens so the player can
  // preview the whole bracket before any battle starts.
  const DOME_BRACKET_SIZE = 3;

  function isDomeFacility(facility) {
    return facility && facility.rules && facility.rules.bracketTournament;
  }

  // Build (or return cached) the 3-trainer bracket for the current round.
  // Stored on run.bracketTrainers so the preview UI can reuse without
  // regenerating each screen refresh. Regenerates whenever the stored
  // round doesn't match the current one.
  function ensureBracketForDome(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return [];
    const currentRound = run.round + 1; // round about to be attempted
    if (run.bracketRound === currentRound && Array.isArray(run.bracketTrainers)
        && run.bracketTrainers.length === DOME_BRACKET_SIZE) {
      return run.bracketTrainers;
    }
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const bossInfo = getBossRoundInfo(currentRound);
    const trainers = [];
    for (let i = 1; i <= DOME_BRACKET_SIZE; i++) {
      if (i === DOME_BRACKET_SIZE && bossInfo) {
        // Final slot = Brain fight on boss rounds
        const brainTeam = bossInfo.kind === "silver"
          ? facility.brain.teamSilver
          : facility.brain.teamGold;
        // Clamp the brain team to the Dome's 2-Pokémon rule
        const size = expectedTeamSize(facility);
        const teamIds = brainTeam ? brainTeam.slice(0, size) : null;
        trainers.push({
          name: lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn,
          sprite: facility.brain.sprite,
          team: teamIds
            ? teamIds.map((id) => ({
                id,
                moves: pickMovesetFor(id),
                nature: simulateNatureFor(id),
              }))
            : Array.from({ length: size }, () => {
                const id = pickFromPool(5);
                return { id, moves: pickMovesetFor(id), nature: simulateNatureFor(id) };
              }),
          tier: 3,
          multiplier: bossInfo.multiplier,
          bossKind: bossInfo.kind,
          isBoss: true,
        });
      } else {
        // Regular bracket trainer — tier scales with round
        trainers.push(generateTrainer(currentRound, facility));
      }
    }
    run.bracketTrainers = trainers;
    run.bracketRound = currentRound;
    if (run.bracketBattle === undefined) run.bracketBattle = 1;
    return trainers;
  }

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

  // Pokémon pool built dynamically from the full dictionary. Instead of
  // hard-coded BST ranges (fragile — depends on how the game distributes
  // stats), we sort every mon by BST at runtime and slice by percentile.
  // Guarantees each tier always has a sizeable pool no matter the data:
  //   tier 1 : bottom 50% of BSTs     (Rounds 1-2)   no unobtainable
  //   tier 2 : 30-75%                 (Rounds 3-5)   no unobtainable
  //   tier 3 : 60-95%                 (Rounds 6-48)  no unobtainable
  //   tier 4 : 60-100%                (post-Gold)    incl. unobtainable
  //   tier 5 : top 15%                (mult ≥ 3)     incl. unobtainable
  const TIER_PERCENTILE = {
    1: { minPct: 0.00, maxPct: 0.50, unobtainable: false },
    2: { minPct: 0.30, maxPct: 0.75, unobtainable: false },
    3: { minPct: 0.60, maxPct: 0.95, unobtainable: false },
    4: { minPct: 0.60, maxPct: 1.00, unobtainable: true },
    5: { minPct: 0.85, maxPct: 1.00, unobtainable: true },
  };

  // Kept for debug / compat with earlier tooling.
  const TIER_BST = TIER_PERCENTILE;

  function bstTotal(p) {
    if (!p || !p.bst) return 0;
    const b = p.bst;
    // Pokechill uses short keys (hp/atk/def/satk/sdef/spe) per
    // pkmnDictionary.js line 12+. Guard each in case a mon ships without
    // one of them (should never happen but defensive).
    return (b.hp || 0) + (b.atk || 0) + (b.def || 0)
         + (b.satk || 0) + (b.sdef || 0) + (b.spe || 0);
  }

  // Build a sorted list of all eligible {id, bst} for percentile slicing.
  // Excludes special forms and entries without BST. Unobtainable entries
  // are kept here — the tier config decides whether to include them at
  // pick time. Recomputed on every getPool call (fast enough; 1408-entry
  // scan + sort).
  function buildSortedBstList() {
    if (typeof pkmn === "undefined") return [];
    const out = [];
    for (const id of Object.keys(pkmn)) {
      const p = pkmn[id];
      if (!p || !p.bst) continue;
      if (/Mega|Gmax|Primal/.test(id)) continue;
      const total = bstTotal(p);
      if (total <= 0) continue;
      out.push({ id, bst: total, unobtainable: p.tagObtainedIn === "unobtainable" });
    }
    out.sort((a, b) => a.bst - b.bst);
    return out;
  }

  function getPool(tier) {
    if (typeof pkmn === "undefined") return ["tauros"];
    const cfg = TIER_PERCENTILE[tier] || TIER_PERCENTILE[1];
    const sorted = buildSortedBstList();
    if (!sorted.length) return ["tauros"];
    const lo = Math.floor(sorted.length * cfg.minPct);
    const hi = Math.ceil(sorted.length * cfg.maxPct);
    const slice = sorted.slice(lo, hi);
    const ids = [];
    for (const e of slice) {
      if (!cfg.unobtainable && e.unobtainable) continue;
      ids.push(e.id);
    }
    return ids.length ? ids : ["tauros"];
  }

  // Kept for back-compat with the debug API — now a no-op since there's no
  // pool cache. Callers that invalidate bracket state should use
  // resetActiveRun() below instead.
  function resetPoolCache() {}

  // Diagnostic: inspect the actual BST distribution + per-tier pool sizes.
  // Run from DevTools: __frontierExt.debugPool() (no args = full summary)
  // or __frontierExt.debugPool(2) for a specific tier's slice + sample.
  function debugPool(tier) {
    const sorted = buildSortedBstList();
    const summary = {
      totalEligible: sorted.length,
      minBst: sorted[0] ? sorted[0].bst : null,
      maxBst: sorted[sorted.length - 1] ? sorted[sorted.length - 1].bst : null,
      unobtainableCount: sorted.filter((e) => e.unobtainable).length,
      tiers: {},
    };
    for (const t of [1, 2, 3, 4, 5]) {
      const pool = getPool(t);
      summary.tiers[t] = {
        size: pool.length,
        bstRange: pool.length
          ? [
              Math.min(...pool.map((id) => bstTotal(pkmn[id]))),
              Math.max(...pool.map((id) => bstTotal(pkmn[id]))),
            ]
          : null,
        sample: pool.slice(0, 6),
      };
    }
    if (tier !== undefined) {
      summary.detail = summary.tiers[tier];
    }
    return summary;
  }

  // Debug helper: wipe the active run (including the cached bracket
  // trainers) so the next click re-generates everything from scratch with
  // the current code. Useful after fixing a trainer-gen bug while a run
  // was mid-flight.
  function resetActiveRun() {
    if (typeof saved === "object" && saved && saved.frontierExt) {
      saved.frontierExt.activeRun = null;
    }
    if (typeof updateFrontier === "function") updateFrontier();
  }

  function pickFromPool(tier) {
    const list = getPool(tier);
    return list[Math.floor(Math.random() * list.length)] || "tauros";
  }

  // Build a strategic 4-move set for a Pokémon. Goals:
  //   • Always 1 strong STAB attack for primary type (ex: Venusaur gets
  //     Giga Drain / Sludge Bomb, never tackle).
  //   • If dual-type: 1 STAB attack for secondary type; else 1 coverage.
  //   • 1 utility move (buff, status, heal, weather — whatever fits).
  //   • Signature move used if power ≥ 65 AND hasn't already been covered.
  //
  // GENETICS + ITEM RULE: in the game, B-division Pokémon (and below) can
  // learn ANY move via genetics + a specific item. NPC trainers exploit
  // this — if a B-or-lower mon appears on an enemy team, we bypass the
  // natural learnable-pool filter and can pick moves of any type, making
  // weaker mons potentially monstrous. A-division and S-division Pokémon
  // still stick to their natural pool.
  function pickMovesetFor(pkmnId) {
    const p = typeof pkmn !== "undefined" ? pkmn[pkmnId] : null;
    if (!p || typeof move === "undefined") return [];
    const types = Array.isArray(p.type) ? p.type : [p.type];
    const primaryType = types[0];
    const secondaryType = types[1];

    // Check division (S / A / B / C / D). B and below unlock universal
    // move access via the game's genetics+item mechanic.
    let division = "C";
    try {
      if (typeof returnPkmnDivision === "function") division = returnPkmnDivision(p);
    } catch (e) { /* keep default */ }
    const unrestrictedLearning = (division === "B" || division === "C" || division === "D");

    // Natural learnable filter (only applied if division A/S):
    const isLearnableNatural = (mv) => {
      if (!mv || !Array.isArray(mv.moveset)) return false;
      if (mv.moveset.indexOf("all") !== -1) return true;
      if (mv.moveset.indexOf("normal") !== -1) return true;
      for (const t of types) {
        if (t && mv.moveset.indexOf(t) !== -1) return true;
      }
      return false;
    };
    const isLearnable = (mv) => {
      if (!mv || !Array.isArray(mv.moveset)) return false;
      if (unrestrictedLearning) return true; // B or lower → any move
      return isLearnableNatural(mv);
    };

    const chosen = [];
    const keyOf = (mv) => Object.keys(move).find((k) => move[k] === mv);
    const push = (mvOrId) => {
      if (!mvOrId) return;
      const key = typeof mvOrId === "string" ? mvOrId : keyOf(mvOrId);
      if (!key || chosen.indexOf(key) !== -1 || chosen.length >= 4) return;
      if (move[key] && move[key].restricted) return; // skip restricted (1-per-team rule)
      chosen.push(key);
    };

    // Pre-filter & classify the Pokémon's learnable pool
    const pool = [];
    for (const [k, mv] of Object.entries(move)) {
      if (!isLearnable(mv)) continue;
      pool.push({ id: k, mv });
    }

    const stabPrimary = pool
      .filter((c) => c.mv.type === primaryType && c.mv.power && c.mv.power >= 50)
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    const stabSecondary = secondaryType
      ? pool.filter((c) => c.mv.type === secondaryType && c.mv.power && c.mv.power >= 50)
            .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0))
      : [];
    const coverageAttacks = pool
      .filter((c) => c.mv.power && c.mv.power >= 60
                   && c.mv.type !== primaryType
                   && c.mv.type !== secondaryType
                   && c.mv.type !== "normal")
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    const utilityMoves = pool
      .filter((c) => (!c.mv.power || c.mv.power === 0) && (c.mv.rarity || 0) >= 2);

    // 1. Best STAB primary — always include if available
    if (stabPrimary[0]) push(stabPrimary[0].id);

    // 2. STAB secondary if dual-type, otherwise best coverage
    if (secondaryType && stabSecondary[0]) push(stabSecondary[0].id);
    else if (coverageAttacks[0]) push(coverageAttacks[0].id);

    // 3. Signature move if strong enough and not already picked
    if (p.signature && p.signature.power >= 65) push(p.signature);

    // 4. Utility move (random pick for variety across trainers)
    if (utilityMoves.length) {
      const u = utilityMoves[Math.floor(Math.random() * utilityMoves.length)];
      push(u.id);
    }

    // 5. Coverage attack if not yet added
    if (coverageAttacks[0]) push(coverageAttacks[0].id);
    if (coverageAttacks[1]) push(coverageAttacks[1].id);

    // 6. Second STAB primary (if still room)
    if (stabPrimary[1]) push(stabPrimary[1].id);

    // 7. Last-ditch fills: any remaining attack from the pool
    const allAttacks = pool
      .filter((c) => c.mv.power && c.mv.power > 0)
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    for (const c of allAttacks) {
      if (chosen.length >= 4) break;
      push(c.id);
    }

    // 8. Absolute fallback (very unlikely to trigger)
    while (chosen.length < 4 && move.tackle) {
      if (chosen.indexOf("tackle") !== -1) break;
      chosen.push("tackle");
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

  // Simulate a nature for an NPC Pokémon based on its BST profile so the
  // Palace auto-move rule can apply to enemies too (they have no real
  // nature in vanilla). Picks from the 7 Pokechill natures + empty.
  function simulateNatureFor(pkmnId) {
    const p = typeof pkmn !== "undefined" ? pkmn[pkmnId] : null;
    if (!p || !p.bst) return "";
    const { atk, def, satk, sdef, spe, hp } = p.bst;
    const physOffense = atk > satk * 1.15;
    const specOffense = satk > atk * 1.15;
    const fast = spe >= 100;
    const bulky = hp + def + sdef >= 260;
    const wallPhys = def > sdef * 1.25;
    const wallSpec = sdef > def * 1.25;

    if (bulky && wallPhys) return "bold";
    if (bulky && wallSpec) return "quiet";
    if (bulky && hp >= 95) return "relaxed";
    if (fast && (physOffense || specOffense)) return "jolly";
    if (physOffense) return "adamant";
    if (specOffense) return "modest";
    return ""; // neutral
  }

  function generateTrainer(round, facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const { sprite, name } = pickSpriteAndName(lang);

    const mult = difficultyMultiplier(round);
    let tier = 1;
    if (round >= 3) tier = 2;
    if (round >= 6) tier = 3;
    if (round > GOLD_ROUND) tier = 4;
    if (mult >= 3) tier = 5;

    // Team size scales with facility — Dome uses 2-Pokémon rosters.
    const size = expectedTeamSize(facility);
    const slots = [];
    for (let i = 0; i < size; i++) {
      const id = pickFromPool(tier);
      slots.push({
        id,
        moves: pickMovesetFor(id),
        nature: simulateNatureFor(id),
      });
    }

    return {
      name,
      sprite,
      team: slots,
      tier,
      round,
      multiplier: mult,
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
      /* Tooltip header — compact SVG icon. */
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
      /* Brain sprite centred above the rules grid in tooltipBottom. */
      .frontier-ext-help-brain-wrap {
        display: flex;
        justify-content: center;
        padding: 0.6rem 0 0.3rem;
      }
      .frontier-ext-help-brain {
        max-height: 7rem;
        image-rendering: pixelated;
        filter: drop-shadow(0 0 4px rgba(0,0,0,0.5));
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
        const dome = isDomeFacility(facility);
        const battleStr = dome
          ? ` · ${lang === "fr" ? "Combat" : "Battle"} ${run.bracketBattle || 1}/${DOME_BRACKET_SIZE}`
          : "";
        html += `<strong>${t.inProgress}</strong> — ${t.round} ${run.round + 1}/${SILVER_ROUND}${battleStr}`;
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

  // Dome-specific preview: shows the 3-trainer bracket before launching
  // each individual battle inside it. Highlights the current opponent.
  function openDomeBracketPreview(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run || run.facilityId !== facility.id) return;

    const lang = window.gameLang === "fr" ? "fr" : "en";
    const bracket = ensureBracketForDome(facility);
    const currentIdx = (run.bracketBattle || 1) - 1;
    const trainer = bracket[currentIdx];
    if (!trainer) return;

    const t = lang === "fr"
      ? {
          round: "Round",
          bracket: "Bracket",
          battle: "Combat",
          vs: "vs",
          nextOpp: "Prochain adversaire",
          remainingInBracket: "Adversaires à venir dans ce bracket",
          warn: "⚠️ Tous tes Pokémon doivent être niveau 100.",
          launch: "⚔️ Lancer le combat",
          cancel: "Annuler",
          qf: "Quart",
          sf: "Demi",
          final: "Finale",
        }
      : {
          round: "Round",
          bracket: "Bracket",
          battle: "Battle",
          vs: "vs",
          nextOpp: "Next opponent",
          remainingInBracket: "Upcoming opponents in this bracket",
          warn: "⚠️ All your Pokémon must be level 100.",
          launch: "⚔️ Launch battle",
          cancel: "Cancel",
          qf: "QF",
          sf: "SF",
          final: "Final",
        };

    const labels = [t.qf, t.sf, t.final];
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
      title.innerHTML = `${t.round} ${run.round + 1} — ${labels[currentIdx]}: ${trainer.name}`;
    }
    if (mid) {
      mid.style.display = "block";
      const teamPreview = trainer.team
        .map((slot) => (typeof format === "function" ? format(slot.id) : slot.id))
        .join(" · ");
      // Bracket overview — mark current battle, grey out completed & upcoming
      const bracketRows = bracket.map((tr, i) => {
        const teamStr = tr.team
          .map((s) => (typeof format === "function" ? format(s.id) : s.id))
          .join(" · ");
        const status = i < currentIdx
          ? "✓"
          : i === currentIdx
          ? "▶"
          : "·";
        const style = i === currentIdx
          ? "color:#ffd700;font-weight:bold;"
          : i < currentIdx
          ? "opacity:0.45;"
          : "opacity:0.7;";
        const bossMark = tr.isBoss ? " 👑" : "";
        return `<div style="${style}padding:0.15rem 0;">${status} ${labels[i]}: <strong>${tr.name}${bossMark}</strong> — ${teamStr}</div>`;
      }).join("");
      mid.innerHTML = `
        <div style="padding:0.5rem 0.8rem;">
          <div style="font-weight:bold;color:#ffd700;margin-bottom:0.3rem;">${t.nextOpp}:</div>
          <div>${teamPreview}</div>
        </div>
        <div style="padding:0.4rem 0.8rem;border-top:1px dashed rgba(255,255,255,0.15);margin-top:0.3rem;">
          <div style="font-size:0.85rem;opacity:0.8;margin-bottom:0.2rem;">${t.bracket} (${t.round} ${run.round + 1})</div>
          ${bracketRows}
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
        bracketBattle: 1,
        bracketTrainers: null,
        bracketRound: null,
      };
      saved.frontierExt.streaks[facility.id] = 0;
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else openSimulatedFight(facility);
      return;
    }
    if (action === "continue") {
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else openSimulatedFight(facility);
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
        <div class="frontier-ext-help-brain-wrap">
          <img class="frontier-ext-help-brain" src="img/trainers/${facility.brain.sprite}.png" alt="${brainName}">
        </div>
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

  // ─── 6b1. PALACE RULE — auto-move by nature (ÉTAPE 3) ────────────────────
  // Pokechill is an auto-battler: each Pokémon cycles slot1→2→3→4→1 via
  // `team[active].turn++` (explore.js:2412). The Palace overrides that
  // sequential cycle with a weighted random pick based on the Pokémon's
  // nature, matching the Gen 3 Battle Palace rule where moves are auto-
  // selected from 3 "style" buckets (ATK / DEF / SUP) per nature.
  //
  // The 7 Pokechill natures (from i18n engine.js:420+):
  //   adamant, modest, jolly, relaxed, quiet, bold, (empty/neutral)
  //
  // Style weights sum to 100 per nature:
  const NATURE_STYLE_WEIGHTS = {
    adamant: [70, 10, 20], // raw offense, Atk ▲ S.Atk ▼
    modest:  [70, 10, 20], // raw offense, S.Atk ▲ Atk ▼
    jolly:   [40, 30, 30], // speedster, erratic
    relaxed: [30, 50, 20], // tanky, HP ▲ Spe ▼ — patient, defensive
    quiet:   [20, 40, 40], // HP ▲ Atk ▼ S.Atk ▼ — support-leaning
    bold:    [15, 60, 25], // Def ▲ S.Def ▲ HP ▼ — defensive specialist
    "":      [40, 30, 30], // neutral / no nature
    none:    [40, 30, 30],
  };

  // Heuristic classifier: move with power > 0 is ATK; otherwise name-match
  // against known SUP / DEF patterns. Good enough for the Palace rule
  // without introspecting move.hitEffect function bodies.
  const SUP_PATTERNS = /bulk|amnesia|calm|swords|nasty|rest|recover|substitute|protect|detect|aquaRing|ironDefense|cosmic|growth|curse|barrier|harden|sharpen|reflect|lightScreen|safeguard|wish|synthesis|morning|moonlight|roost|agility|tailwind|helpingHand|coil|dragonDance|quiverDance|shellSmash|shiftGear|workUp|rockPolish|defog|hazeClear|doubleTeam|minimize|withdraw|stockpile|ingrain|leechSeed|gigaDrain/i;
  const DEF_PATTERNS = /leer|growl|willO|thunder.*[Ww]ave|sleep|toxic|poisonPowder|stunSpore|spore|confuse|hypno|charm|screech|metalSound|sweetKiss|babyDoll|glare|attract|disable|taunt|torment|encore|yawn|embargo|worryS|knockOff|trick|switcheroo|memento/i;

  function classifyMoveId(moveId) {
    if (!moveId) return null;
    const m = typeof move !== "undefined" ? move[moveId] : null;
    if (!m) return "SUP"; // unknown → treat as SUP
    if (m.power && m.power > 0) return "ATK";
    if (SUP_PATTERNS.test(moveId)) return "SUP";
    if (DEF_PATTERNS.test(moveId)) return "DEF";
    return "DEF"; // default for status moves we can't classify
  }

  // Generic slot-picker by nature. Works for both player (reads nature from
  // pkmn[id].nature, moves from pkmn[id].moves.slot1..4) and enemy (nature
  // + moves passed explicitly because NPCs don't have persistent pkmn state).
  function pickSlotByNatureGeneric(moves1to4, nature) {
    const weights = NATURE_STYLE_WEIGHTS[(nature || "").toLowerCase()] || NATURE_STYLE_WEIGHTS.none;

    const slots = [];
    for (let i = 1; i <= 4; i++) {
      const mv = moves1to4[i - 1] || moves1to4["slot" + i];
      if (!mv) continue;
      slots.push({ slot: i, style: classifyMoveId(mv) });
    }
    if (slots.length === 0) return null;

    const byStyle = { ATK: [], DEF: [], SUP: [] };
    slots.forEach((s) => byStyle[s.style].push(s.slot));

    const roll = Math.random() * (weights[0] + weights[1] + weights[2]);
    let targetStyle = "ATK";
    if (roll >= weights[0]) targetStyle = "DEF";
    if (roll >= weights[0] + weights[1]) targetStyle = "SUP";

    const candidates = byStyle[targetStyle].length ? byStyle[targetStyle] : slots.map((s) => s.slot);
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function pickSlotByNature(member) {
    if (!member || !member.pkmn || typeof pkmn === "undefined") return null;
    const pk = pkmn[member.pkmn.id];
    if (!pk || !pk.moves) return null;
    return pickSlotByNatureGeneric(pk.moves, pk.nature || "");
  }

  function isInPalaceRun() {
    if (typeof saved !== "object" || !saved) return false;
    if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
    if (saved.currentArea !== RUN_AREA_ID) return false;
    const facility = FACILITIES.find((f) => f.id === saved.frontierExt.activeRun.facilityId);
    return !!(facility && facility.rules && facility.rules.autoMoveByNature);
  }

  // Wrap exploreCombatPlayer to re-pick the next move slot (by nature)
  // every time the game naturally advances `team[active].turn`. This keeps
  // the bar/timer logic of the original intact — we only overwrite the
  // *target slot* for the next move charge.
  function installPalaceMoveHook() {
    if (typeof window.exploreCombatPlayer !== "function") {
      setTimeout(installPalaceMoveHook, 200);
      return;
    }
    if (window.__palaceHookInstalled) return;
    window.__palaceHookInstalled = true;
    const orig = window.exploreCombatPlayer;
    window.exploreCombatPlayer = function () {
      let prevTurn = null;
      let active = null;
      if (isInPalaceRun() && typeof exploreActiveMember !== "undefined") {
        active = team[exploreActiveMember];
        if (active) prevTurn = active.turn;
      }
      const res = orig.apply(this, arguments);
      if (active) {
        const newTurn = active.turn;
        if (newTurn !== prevTurn && newTurn !== null && newTurn !== undefined) {
          const picked = pickSlotByNature(active);
          if (picked !== null && picked >= 1 && picked <= 4) {
            active.turn = picked;
          }
        }
      }
      return res;
    };
  }

  // Mirror hook for the enemy side (exploreCombatWild). NPC trainers don't
  // have a real nature — we simulate one per slot at trainer-generation time
  // and read it back from areas[RUN_AREA_ID].frontierExtNatures[currentTrainerSlot].
  //
  // IMPORTANT: `exploreCombatWildTurn` is declared `let` at top of explore.js
  // (line 3525), same for `currentTrainerSlot` (line 182). These are in the
  // script scope, not on `window` — we MUST use bare-identifier access
  // (via eval) to read AND write them, otherwise `window.X` gives undefined
  // and a bare assignment in strict-mode throws. Same pattern as the
  // fusePkmn fix in i18n/engine.js.
  function installPalaceEnemyHook() {
    if (typeof window.exploreCombatWild !== "function") {
      setTimeout(installPalaceEnemyHook, 200);
      return;
    }
    if (window.__palaceEnemyHookInstalled) return;
    window.__palaceEnemyHookInstalled = true;
    const orig = window.exploreCombatWild;

    // Indirect eval — runs in global scope so it can read/write script-
    // scope `let` bindings from any classic <script>.
    const globalEval = eval;
    const readWildTurn = () => {
      try { return globalEval("typeof exploreCombatWildTurn === 'undefined' ? null : exploreCombatWildTurn"); }
      catch (e) { return null; }
    };
    const writeWildTurn = (n) => {
      try { globalEval("exploreCombatWildTurn = " + JSON.stringify(n)); }
      catch (e) { /* ignore */ }
    };
    const readTrainerSlot = () => {
      try { return globalEval("typeof currentTrainerSlot === 'undefined' ? 1 : currentTrainerSlot"); }
      catch (e) { return 1; }
    };

    window.exploreCombatWild = function () {
      const palaceActive = isInPalaceRun();
      const prevTurn = palaceActive ? readWildTurn() : null;
      const res = orig.apply(this, arguments);
      if (palaceActive) {
        const newTurn = readWildTurn();
        if (newTurn !== prevTurn && newTurn !== null && newTurn !== undefined) {
          const slotIdx = readTrainerSlot();
          const area = areas[RUN_AREA_ID];
          if (!area) return res;
          const nature = (area.frontierExtNatures && area.frontierExtNatures[slotIdx]) || "";
          const moves = area.team["slot" + slotIdx + "Moves"] || [];
          const picked = pickSlotByNatureGeneric(moves, nature);
          if (picked !== null && picked >= 1 && picked <= 4) {
            writeWildTurn(picked);
          }
        }
      }
      return res;
    };
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
    // Parallel array: simulated natures per slot so the Palace rule can look
    // up the active opponent's nature by slot index at combat time.
    const naturesBySlot = {};
    trainer.team.forEach((slot, i) => {
      const slotN = i + 1;
      if (!pkmn[slot.id]) return;
      team["slot" + slotN] = pkmn[slot.id];
      team["slot" + slotN + "Moves"] = slot.moves;
      naturesBySlot[slotN] = slot.nature || simulateNatureFor(slot.id) || "";
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
      // Custom field read by the enemy Palace hook (see installPalaceEnemyHook).
      frontierExtNatures: naturesBySlot,
      frontierExtFacilityId: facility.id,
      fieldEffect: [],
      itemReward: {},
      defeated: false,
      hpPercentage: 100,
      encounterEffect: function () {
        /* no-op — handled in leaveCombat hook */
      },
    };
    return areas[RUN_AREA_ID];
  }

  // Count how many slots of the currently-selected preview team are filled.
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

  // Expected team size per facility. Most Hoenn facilities use 3 Pokémon
  // (Tour / Palais / Arène / Usine / Pic / Pyramide). Only the Dôme
  // enforces 2 — single-elim tournament battles were 2v2 in Gen 3 Emerald
  // (the player brings 3, picks 2 per tournament, but since we don't yet
  // have a "pick 2 of 3" UI we just require a 2-Pokémon team).
  function expectedTeamSize(facility) {
    if (isDomeFacility(facility)) return 2;
    return 3;
  }

  function showTeamSizeError(facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const expected = expectedTeamSize(facility);
    const title = lang === "fr" ? "Taille d'équipe invalide" : "Invalid team size";
    const msg = lang === "fr"
      ? `Cette Facility suit les règles Gen 3 : exactement ${expected} Pokémon par équipe. Ajuste ton équipe via l'éditeur avant de lancer un combat.`
      : `This facility uses Gen 3 rules: exactly ${expected} Pokémon per team. Adjust your team via the editor before starting a fight.`;
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

    // Facility-specific team size check (Dome = 2, others = 3).
    const teamSize = currentPreviewTeamSize();
    if (teamSize !== expectedTeamSize(facility)) {
      showTeamSizeError(facility);
      return;
    }

    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound);

    // Regenerate (or keep) the upcoming trainer for this round
    let trainer;
    if (isDomeFacility(facility)) {
      // Dome: pull the pre-generated trainer from the bracket array at
      // the current sub-position (bracketBattle 1/2/3).
      const bracket = ensureBracketForDome(facility);
      const idx = (run.bracketBattle || 1) - 1;
      trainer = bracket[idx] || generateTrainer(nextRound, facility);
    } else if (bossInfo) {
      // Post-Gold rematches use the Gold team; Silver uses the Silver team.
      const brainTeam = bossInfo.kind === "silver"
        ? facility.brain.teamSilver
        : facility.brain.teamGold;
      trainer = {
        name: window.gameLang === "fr" ? facility.brain.nameFr : facility.brain.nameEn,
        sprite: facility.brain.sprite,
        team: brainTeam
          ? brainTeam.map((id) => ({
              id,
              moves: pickMovesetFor(id),
              nature: simulateNatureFor(id),
            }))
          : [1, 2, 3].map(() => {
              const id = pickFromPool(5);
              return { id, moves: pickMovesetFor(id), nature: simulateNatureFor(id) };
            }),
        tier: 3,
        multiplier: bossInfo.multiplier,
        bossKind: bossInfo.kind,
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
    const facility = FACILITIES.find((f) => f.id === run.facilityId);

    // Dome: victory advances sub-battle first; round only advances when the
    // whole 3-fight bracket is cleared. Symbol checks happen on bracket
    // completion, not per battle.
    if (isDomeFacility(facility)) {
      run.bracketBattle = (run.bracketBattle || 1) + 1;
      if (run.bracketBattle <= DOME_BRACKET_SIZE) {
        // Still more opponents in this bracket — don't advance round yet.
        run.upcomingTrainer = null;
        return;
      }
      // Bracket cleared → advance round + reset bracket state.
      run.bracketBattle = 1;
      run.bracketTrainers = null;
      run.bracketRound = null;
    }

    run.round += 1;
    saved.frontierExt.streaks[run.facilityId] = run.round;
    if (run.round > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = run.round;
    }
    if (run.round === SILVER_ROUND) saved.frontierExt.symbols[run.facilityId].silver = true;
    else if (run.round === GOLD_ROUND) saved.frontierExt.symbols[run.facilityId].gold = true;
    run.upcomingTrainer = null;
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

  // Wrap exitCombat so that after any frontier-ext run battle ends, the
  // player lands on the Battle Frontier tab (not the VS Trainers tab).
  // explore.js:869 forces updateVS() for any area with `trainer: true`,
  // which overrides the Frontier view set earlier at line 866 — we
  // re-apply updateFrontier() after the original exit finishes.
  function installExitRedirect() {
    if (typeof window.exitCombat !== "function") {
      setTimeout(installExitRedirect, 200);
      return;
    }
    if (window.__frontierExtExitHooked) return;
    window.__frontierExtExitHooked = true;
    const orig = window.exitCombat;
    window.exitCombat = function () {
      const wasFrontierRun =
        typeof saved !== "undefined" &&
        saved &&
        (saved.currentArea === RUN_AREA_ID ||
          saved.lastAreaJoined === RUN_AREA_ID);
      const res = orig.apply(this, arguments);
      if (wasFrontierRun && typeof updateFrontier === "function") {
        try {
          updateFrontier();
          // Also flip the vs-selector highlight to show Frontier is active
          // (vanilla code does this via onclick — we replay the effect).
          const selBtn = document.querySelector('#vs-selector div[onclick*="updateFrontier"]');
          if (selBtn) selBtn.click();
        } catch (e) {
          console.error("[frontier-ext] frontier redirect failed:", e);
        }
      }
      return res;
    };
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
    installExitRedirect();
    installPalaceMoveHook();
    installPalaceEnemyHook();
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
    // Palace rule debug
    classifyMoveId,
    pickSlotByNature,
    pickSlotByNatureGeneric,
    simulateNatureFor,
    isInPalaceRun,
    NATURE_STYLE_WEIGHTS,
    // Dome debug
    isDomeFacility,
    ensureBracketForDome,
    openDomeBracketPreview,
    DOME_BRACKET_SIZE,
    difficultyMultiplier,
    getBossRoundInfo,
    // Pool debug
    getPool,
    resetPoolCache,
    resetActiveRun,
    bstTotal,
    TIER_BST,
    debugPool,
    // quick helper to reset all runs/symbols for testing
    resetAll: () => {
      if (typeof saved === "object" && saved) saved.frontierExt = null;
      ensureSaveSlot();
      if (typeof updateFrontier === "function") updateFrontier();
    },
  };
})();
