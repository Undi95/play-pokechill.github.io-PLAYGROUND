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
      // Plain trainer gauntlet — the "baseline" facility. Gen 3 canon:
      // Pokémon are fully healed between each of the 7 battles of a set,
      // only the end-of-set hostess modal breaks the streak (Continuer /
      // Abandonner, auto-save happens in background).
      rules: { streak: true },
      battlesPerRound: 7,
      // Bulbapedia: Silver at 35 battles (round 5), Gold at 70 battles (round 10)
      silverRound: 5,
      goldRound: 10,
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
      battlesPerRound: 7,
      // Bulbapedia: Silver at 21 wins (round 3), Gold at 42 wins (round 6)
      silverRound: 3,
      goldRound: 6,
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
      battlesPerRound: 7,
      // Bulbapedia: Silver at 28 battles (round 4), Gold at 56 battles (round 8)
      silverRound: 4,
      goldRound: 8,
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
      // Bulbapedia: Silver at 20 battles, Gold at 40 battles. Our bracket
      // is 3 battles per round → round 7 (21 battles ≈ 20) = Silver,
      // round 14 (42 battles ≈ 40) = Gold. Closest integer match.
      battlesPerRound: 3,      // bracket size (QF + SF + Final)
      silverRound: 7,
      goldRound: 14,
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
      battlesPerRound: 7,
      // Bulbapedia: Silver at 21 battles (round 3), Gold at 42 battles (round 6)
      silverRound: 3,
      goldRound: 6,
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
      // Bulbapedia: Silver at 14 rooms (round 1, the very first challenge),
      // Gold at 70 rooms (round 5). 14 rooms = 1 round in our system.
      roomsPerRound: 14,
      battlesPerRound: 14, // alias so generic helper returns a usable count
      silverRound: 1,
      goldRound: 5,
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
      // Bulbapedia: Silver at 21 floors (round 3), Gold at 70 floors (round 10)
      floorsPerRound: 7,
      battlesPerRound: 7, // alias for generic round counter
      silverRound: 3,
      goldRound: 10,
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
  // Legacy defaults — only used when a facility def forgets to set its
  // own silverRound / goldRound. Every shipped facility now has them.
  const SILVER_ROUND = 7;
  const GOLD_ROUND = 49;
  const POST_GOLD_BOSS_EVERY = 7;

  // Per-facility accessors. Bulbapedia thresholds live on each facility
  // definition (silverRound / goldRound). `postGoldRematchEvery` is our
  // custom extension and defaults to POST_GOLD_BOSS_EVERY.
  function silverRoundFor(facility) {
    return (facility && facility.silverRound) || SILVER_ROUND;
  }
  function goldRoundFor(facility) {
    return (facility && facility.goldRound) || GOLD_ROUND;
  }
  function postGoldEveryFor(facility) {
    return (facility && facility.postGoldRematchEvery) || POST_GOLD_BOSS_EVERY;
  }

  // Difficulty multiplier — 1 up to Gold, then +1 per post-Gold cycle.
  function difficultyMultiplier(round, facility) {
    const gold = goldRoundFor(facility);
    const every = postGoldEveryFor(facility);
    if (round <= gold) return 1;
    return 1 + Math.floor((round - gold) / every);
  }

  // Returns a descriptor { kind, multiplier } for boss rounds, or null.
  // Thresholds are read from the facility when supplied (Bulbapedia-
  // accurate), else fall back to the legacy 7/49 constants.
  function getBossRoundInfo(round, facility) {
    const silver = silverRoundFor(facility);
    const gold = goldRoundFor(facility);
    const every = postGoldEveryFor(facility);
    if (round === silver) return { kind: "silver", multiplier: 1 };
    if (round === gold) return { kind: "gold", multiplier: 1 };
    if (round > gold && (round - gold) % every === 0) {
      return { kind: "rematch", multiplier: difficultyMultiplier(round, facility) };
    }
    return null;
  }

  // ─── 2b1. PIKE CONSTANTS ──────────────────────────────────────────────────
  // Battle Pike (Gen 3 Emerald): each round is a dungeon of 14 rooms. Player
  // picks 1 of 3 curtain-doors per room — the outcome is only revealed after
  // clicking. HP and status persist across every room so punishing door
  // sequences (trap → trap → combat) actually hurt. Room 14 is always a
  // fight — Brain on boss rounds (7 / 49 / post-Gold rematches), otherwise a
  // tier-bumped elite trainer.
  const PIKE_ROOM_COUNT = 14;
  const PIKE_DOOR_COUNT = 3;
  // Status effects that a "trap" door can inflict. Names must match
  // EXACTLY the buff keys Pokechill reads in combat: `team[slot].buffs`
  // has numeric-turn entries for `poisoned` / `burn` / `paralysis`
  // (explore.js:2566 / 2590 / 2345 etc.). `poisoned` is the canonical
  // form — NOT "poison".
  const PIKE_TRAP_STATUSES = ["poisoned", "burn", "paralysis"];
  // Large turn count so a Pike-applied buff persists across an entire
  // battle without wearing off. The game decrements the counter per turn
  // but never refills it — 99 turns is effectively infinite for a round.
  const PIKE_STATUS_TURNS = 99;

  function isPikeFacility(facility) {
    return facility && facility.rules && facility.rules.chooseDoor;
  }

  // Any facility whose rules opt into `persistHpStatus` reuses the Pike
  // HP/status machinery — same runTeam snapshot, same apply hook on
  // initialiseArea, same post-leaveCombat snapshot, same slot pills.
  //   • Pike  : rooms 1..14 share HP/status state.
  //   • Tower : battles 1..7 of a set share HP/status state — canonical
  //             Gen 3 "no free heal between battles" feel.
  //   • Future facilities (Pyramid, etc.) can opt in by flagging the rule.
  function hasRunTeamState(facility) {
    return !!(facility && facility.rules && facility.rules.persistHpStatus);
  }

  // Number of individual encounters that make up one "round" for this
  // facility — matches the canonical Gen 3 "set" structure. Each facility
  // def declares its own value explicitly so the boss placement + streak
  // counter use precise Bulbapedia numbers, no guessing:
  //   • Tour / Palais / Arène / Usine : 7 combats / round
  //   • Dôme                           : 3 combats (bracket QF+SF+Final)
  //   • Pic                            : 14 salles / round (roomsPerRound)
  //   • Pyramide                       : 7 étages / round (floorsPerRound)
  //
  // The function prefers `battlesPerRound`, then falls back to the
  // specialised fields (roomsPerRound / floorsPerRound) for legacy defs
  // that only declared one. Returns 1 if the def is malformed.
  function battlesPerRound(facility) {
    if (!facility) return 1;
    return facility.battlesPerRound
        || facility.roomsPerRound
        || facility.floorsPerRound
        || (isDomeFacility(facility) ? DOME_BRACKET_SIZE : 1);
  }

  // Rename legacy buff keys to the game's canonical ones. First release
  // used "poison" which isn't a valid Pokechill buff key (the engine reads
  // `team[sl].buffs.poisoned`). Any save made before that fix still has
  // "poison" stuck in its cached doors and run.pikeStatus, so we migrate
  // at boot and in a defensive inline normalizer.
  function normalizePikeStatus(st) {
    if (st === "poison") return "poisoned";
    return st;
  }
  function migratePikeState() {
    if (typeof saved !== "object" || !saved || !saved.frontierExt) return;
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    if (run.pikeStatus) {
      for (const sl of Object.keys(run.pikeStatus)) {
        run.pikeStatus[sl] = normalizePikeStatus(run.pikeStatus[sl]);
      }
    }
    if (Array.isArray(run.pikeDoors)) {
      for (const d of run.pikeDoors) {
        if (d && d.data && typeof d.data.status === "string") {
          d.data.status = normalizePikeStatus(d.data.status);
        }
      }
    }
    // Upgrade split pikeHpState / pikeStatus → unified run.pikeTeam.
    migratePikeTeam();
  }

  // Classic red-velvet curtain, hand-built SVG (no raster dependency). Shape
  // inspired by the Gen 3 Battle Pike interior tileset the user referenced:
  // gold rod at the top, five vertical pleats with light/shadow gradients,
  // scalloped bottom fringe, gold tassel at centre. Safe to hue-rotate at the
  // parent level because every colour is defined via inline stops — the
  // cascade picks up any wrapping filter.
  const CURTAIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 160" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="pikeGoldRod" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f6dc8a"/>
      <stop offset="45%" stop-color="#d5a22b"/>
      <stop offset="100%" stop-color="#6a3d08"/>
    </linearGradient>
    <linearGradient id="pikeVelvet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b61a1a"/>
      <stop offset="50%" stop-color="#8a0808"/>
      <stop offset="100%" stop-color="#4c0202"/>
    </linearGradient>
    <linearGradient id="pikePleatHi" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="rgba(255,200,200,0)"/>
      <stop offset="50%" stop-color="rgba(255,190,190,0.45)"/>
      <stop offset="100%" stop-color="rgba(255,200,200,0)"/>
    </linearGradient>
  </defs>
  <!-- Gold rod -->
  <rect x="0" y="0" width="100" height="10" fill="url(#pikeGoldRod)"/>
  <rect x="0" y="0" width="100" height="2" fill="rgba(255,230,160,0.75)"/>
  <rect x="0" y="8" width="100" height="2" fill="rgba(0,0,0,0.35)"/>
  <!-- Curtain body -->
  <rect x="0" y="10" width="100" height="140" fill="url(#pikeVelvet)"/>
  <!-- Pleat shadows -->
  <rect x="13" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="31" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="49" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="67" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="85" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <!-- Pleat highlights -->
  <rect x="3"  y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="21" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="39" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="57" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="75" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="93" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <!-- Scalloped fringe -->
  <path d="M0 148 L10 160 L20 148 L30 160 L40 148 L50 160 L60 148 L70 160 L80 148 L90 160 L100 148 L100 160 L0 160 Z" fill="#2b0000"/>
  <!-- Gold tassel -->
  <circle cx="50" cy="150" r="4" fill="url(#pikeGoldRod)" stroke="#4a2a08" stroke-width="0.6"/>
  <line x1="50" y1="154" x2="50" y2="158" stroke="#8a5a1a" stroke-width="1.2"/>
</svg>
`.trim();

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
    const bossInfo = getBossRoundInfo(currentRound, facility);
    const trainers = [];
    for (let i = 1; i <= DOME_BRACKET_SIZE; i++) {
      if (i === DOME_BRACKET_SIZE && bossInfo) {
        // Final slot = Brain fight on boss rounds. Brain brings his
        // canonical 3-mon team; active-pick happens at launch time.
        const brainTeam = bossInfo.kind === "silver"
          ? facility.brain.teamSilver
          : facility.brain.teamGold;
        trainers.push({
          name: lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn,
          sprite: facility.brain.sprite,
          team: brainTeam
            ? brainTeam.slice(0, 3).map((id) => ({
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
    // Upgrade any legacy Pike state in-place (poison → poisoned etc.).
    migratePikeState();
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
  // pick time. MEMOISED because the pkmn dictionary never mutates after
  // boot — the full sort (1408 entries) only runs once per session.
  let _sortedBstCache = null;
  function buildSortedBstList() {
    if (_sortedBstCache) return _sortedBstCache;
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
    _sortedBstCache = out;
    return out;
  }

  // Tier-sliced pool cache. Same key (tier → pool ids) hits thousands
  // of times per run — generate once, reuse.
  const _poolCache = {};
  function getPool(tier) {
    if (_poolCache[tier]) return _poolCache[tier];
    if (typeof pkmn === "undefined") return ["tauros"];
    const cfg = TIER_PERCENTILE[tier] || TIER_PERCENTILE[1];
    const sorted = buildSortedBstList();
    if (!sorted.length) return ["tauros"];
    const lo = Math.floor(sorted.length * cfg.minPct);
    const hi = Math.ceil(sorted.length * cfg.maxPct);
    const ids = [];
    for (let i = lo; i < hi; i++) {
      const e = sorted[i];
      if (!cfg.unobtainable && e.unobtainable) continue;
      ids.push(e.id);
    }
    const pool = ids.length ? ids : ["tauros"];
    _poolCache[tier] = pool;
    return pool;
  }

  // Invalidate pool / sorted caches — rarely needed (only if the pkmn
  // dict is mutated externally). Kept for the debug API.
  function resetPoolCache() {
    _sortedBstCache = null;
    for (const k of Object.keys(_poolCache)) delete _poolCache[k];
  }

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

  // Facility-aware pool. Starts from the raw tier pool, then applies
  // per-facility rebalances:
  //   • Arena   : bias toward high-Speed mons (top 60% of tier by Speed)
  //   • Factory : crescendo — rounds 1-3 only see the lowest X% of the
  //               tier's BST range, so the very first fights feel like
  //               a tutorial instead of a wall. Opens up to the full
  //               tier from round 4 onward, with the tier itself bumping
  //               naturally at rounds 3 / 6 / gold (see generateTrainer).
  //
  // Returns the raw tier pool as fallback if narrowing would empty it.
  function getPoolForFacility(facility, tier, round) {
    let pool = getPool(tier);
    if (isArenaFacility(facility)) pool = arenaBiasPoolBySpeed(pool);
    if (isFactoryFacility(facility) && round <= 3) {
      if (typeof pkmn !== "undefined" && pool.length > 6) {
        const pct = round === 1 ? 0.30 : round === 2 ? 0.55 : 0.80;
        const sorted = pool
          .map((id) => ({ id, bst: bstTotal(pkmn[id]) || 0 }))
          .sort((a, b) => a.bst - b.bst);
        pool = sorted.slice(0, Math.max(FACTORY_POOL_SIZE, Math.ceil(sorted.length * pct)))
                     .map((e) => e.id);
      }
    }
    return pool.length ? pool : getPool(tier);
  }

  // Build a strategic 4-move set for a Pokémon. Goals:
  //   • Always 1 strong STAB attack for primary type (ex: Venusaur gets
  //     Giga Drain / Sludge Bomb, never tackle).
  //   • If dual-type: 1 STAB attack for secondary type; else 1 coverage.
  //   • 1 utility move (buff, status, heal, weather — whatever fits).
  //   • Signature move used if power ≥ 65 AND hasn't already been covered.
  //
  // Curated "genetic" move pool that A-division and S-division Pokémon
  // can also learn — beyond their natural type-restricted pool. These
  // are moves that, in canonical Pokémon, are widely distributed across
  // species via egg-moves / TMs / tutors. Every key is verified to exist
  // in Pokechill's moveDictionary so lookups don't no-op.
  //
  // B / C / D division Pokémon keep their current full-access privilege
  // (they can learn ANY move). This set is additive on top of the
  // natural moveset for A / S division only.
  const GENETIC_MOVES_FOR_ALL = new Set([
    // Status / utility
    "thunderWave", "willOWisp", "toxic", "swagger", "confuseRay",
    "safeguard", "reflect", "lightScreen",
    // Weather
    "sunnyDay", "sandstorm", "rainDance",
    // Stat buffs (classic egg-move territory)
    "swordsDance", "nastyPlot", "calmMind", "bulkUp",
    "agility", "dragonDance", "rockPolish", "quiverDance", "shiftGear",
    // Healing
    "morningSun",
    // Priority attacks (speed-leveraging)
    "quickAttack", "extremeSpeed", "bulletPunch", "iceShard",
    "aquaJet", "vacuumWave", "shadowSneak", "machPunk",
    // Universal coverage (most species can learn at least one of these)
    "flamethrower", "thunderbolt", "iceBeam", "earthquake", "stoneEdge",
    "psychic", "energyBall", "sludgeBomb", "shadowBall",
    "facade",
  ]);

  // GENETICS + ITEM RULE: in the game, B-division Pokémon (and below) can
  // learn ANY move via genetics + a specific item. NPC trainers exploit
  // this — B-or-lower mons get the full pool, making weaker species
  // potentially monstrous. A-division and S-division Pokémon get their
  // natural moveset PLUS the curated GENETIC_MOVES_FOR_ALL set above —
  // they can still have common egg moves like Dragon Dance, Ice Beam,
  // Extreme Speed etc., even when their type doesn't natively cover it.
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
    // A / S division also unlock the curated genetic pool.
    const isLearnable = (mv, key) => {
      if (!mv || !Array.isArray(mv.moveset)) return false;
      if (unrestrictedLearning) return true; // B or lower → any move
      if (isLearnableNatural(mv)) return true;
      // A / S → curated genetic moves on top of natural.
      return !!(key && GENETIC_MOVES_FOR_ALL.has(key));
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
      if (!isLearnable(mv, k)) continue;
      pool.push({ id: k, mv });
    }

    // ── Split preference from BST (Phys/Spec/Mixed) ────────────────────
    // A high-Atk / low-SAtk mon shouldn't pack special attacks and vice
    // versa — gives the NPC a moveset that actually leverages their
    // stats. 15-point gap threshold keeps mixed mons genuinely mixed.
    const atk = (p.bst && p.bst.atk) || 0;
    const satk = (p.bst && p.bst.satk) || 0;
    const isPhys = atk > satk + 15;
    const isSpec = satk > atk + 15;
    const splitMatches = (mv) => {
      if (!mv) return false;
      if (mv.split === "status") return true; // status = always OK
      if (isPhys) return mv.split !== "special";
      if (isSpec) return mv.split !== "physical";
      return true; // mixed attackers use either split
    };

    // Weighted-random pick inside the top-N of a sorted list — swaps the
    // deterministic [0] pick for real variety between trainers. Top N is
    // biased toward stronger moves (index 0 weight × N, index 1 × N-1 …)
    // so the player still faces competent sets, not pure randomness.
    const pickTopN = (list, n) => {
      if (!list.length) return null;
      const slice = list.slice(0, Math.min(n, list.length));
      const weights = slice.map((_, i) => slice.length - i);
      const total = weights.reduce((s, w) => s + w, 0);
      let r = Math.random() * total;
      for (let i = 0; i < slice.length; i++) {
        r -= weights[i];
        if (r <= 0) return slice[i];
      }
      return slice[0];
    };

    // ── Build categorised move shortlists ──────────────────────────────
    const stabPrimary = pool
      .filter((c) => c.mv.type === primaryType && c.mv.power >= 50 && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    const stabSecondary = secondaryType
      ? pool.filter((c) => c.mv.type === secondaryType && c.mv.power >= 50 && splitMatches(c.mv))
            .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0))
      : [];
    const coverageAttacks = pool
      .filter((c) => c.mv.power >= 60
                   && c.mv.type !== primaryType
                   && c.mv.type !== secondaryType
                   && c.mv.type !== "normal"
                   && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    // "Normal" coverage split (Body Slam, Facade, Return) — useful for
    // both splits, adds neutral coverage. Kept separate so we can pick
    // once from it as flavour.
    const normalAttacks = pool
      .filter((c) => c.mv.type === "normal" && c.mv.power >= 50 && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    // Priority / speed-leveraging attacks (faster timer via `timer` field).
    const priorityAttacks = pool
      .filter((c) => c.mv.power > 0 && c.mv.timer !== undefined && splitMatches(c.mv));
    // Status-category moves (power 0 = non-attack). rarity >= 1 filters
    // out junk placeholders only; keeps Leer / Growl / Tail Whip etc.
    const utilityMoves = pool
      .filter((c) => !c.mv.power && (c.mv.rarity || 0) >= 1);
    // Tag each utility move once so we don't re-run the regex for
    // every bucket filter. Keyed by move key → "buff" / "debuff" / "other".
    const utilityKind = new Map();
    const STAT_BUFF_RE = /atkup[12]|satkup[12]|defup[12]|sdefup[12]|speup[12]/;
    const DEBUFF_RE = /poisoned|burn|paralysis|sleep|confused|atkdown|satkdown|defdown|sdefdown|spedown/;
    for (const c of utilityMoves) {
      let kind = "other";
      if (typeof c.mv.hitEffect === "function") {
        const src = c.mv.hitEffect.toString();
        if (STAT_BUFF_RE.test(src)) kind = "buff";
        else if (DEBUFF_RE.test(src)) kind = "debuff";
      }
      utilityKind.set(c.id, kind);
    }
    const statBoost = utilityMoves.filter((c) => utilityKind.get(c.id) === "buff");
    const statusOrDebuff = utilityMoves.filter((c) => utilityKind.get(c.id) === "debuff");
    const healsWeatherField = utilityMoves.filter((c) => utilityKind.get(c.id) === "other");

    // ── Role planner: build a 4-slot moveset with variety guarantees ──
    // Slot 1: signature if strong, else top STAB primary
    // Slot 2: STAB secondary (if dual-type) OR strong coverage
    // Slot 3: utility — prefer stat buff > status/debuff > heal/weather
    // Slot 4: flavour — priority, coverage 2, normal-type, or 2nd utility
    //
    // Each pick uses pickTopN with a small N (3-5) so two similar
    // Pokémon don't end up with identical movesets.

    // Slot 1 — signature FIRST if power decent (makes sig mons feel unique)
    if (p.signature && p.signature.power >= 65) push(p.signature);
    else {
      const s1 = pickTopN(stabPrimary, 3);
      if (s1) push(s1.id);
    }

    // Slot 2 — secondary STAB > coverage
    if (secondaryType && stabSecondary.length) {
      const s2 = pickTopN(stabSecondary, 3);
      if (s2) push(s2.id);
    } else {
      const cov = pickTopN(coverageAttacks, 4);
      if (cov) push(cov.id);
      else {
        // No coverage → backup with 2nd STAB primary
        const backupStab = pickTopN(stabPrimary.slice(1), 3);
        if (backupStab) push(backupStab.id);
      }
    }

    // Slot 3 — utility (buff > debuff > heal/weather), always if possible.
    // Shuffle a COPY (`.slice()`) so we don't mutate shared bucket state
    // between successive moveset generations.
    for (const bucket of [statBoost, statusOrDebuff, healsWeatherField]) {
      if (chosen.length >= 3) break;
      const shuffled = bucket.slice().sort(() => Math.random() - 0.5);
      const pick = pickTopN(shuffled, 4);
      if (pick) { push(pick.id); break; }
    }

    // Slot 4 — flavour: priority → normal coverage → coverage 2 → any attack
    if (chosen.length < 4) {
      const flavourBuckets = [priorityAttacks, normalAttacks, coverageAttacks.slice(1), stabPrimary.slice(1)];
      for (const bucket of flavourBuckets) {
        if (chosen.length >= 4) break;
        const pick = pickTopN(bucket, 4);
        if (pick) { push(pick.id); break; }
      }
    }

    // ── Fallback fills if any slot is still empty ──────────────────────
    // (Rare — defensive for Pokémon with tiny learn pools.)
    if (chosen.length < 4) {
      // Add a primary STAB if we skipped it earlier.
      if (stabPrimary[0]) push(stabPrimary[0].id);
    }
    if (chosen.length < 4) {
      const allAttacks = pool
        .filter((c) => c.mv.power > 0 && splitMatches(c.mv))
        .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
      for (const c of allAttacks) {
        if (chosen.length >= 4) break;
        push(c.id);
      }
    }
    // Absolute last-resort filler: anything learnable, any split.
    if (chosen.length < 4) {
      for (const c of pool) {
        if (chosen.length >= 4) break;
        push(c.id);
      }
    }
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

  // ── Arena balance helpers ──────────────────────────────────────────────
  // The 3-turn-per-side judge already neutralises the speed-team
  // advantage (the fast side has to WAIT for the slow side to complete
  // its 3 moves before the verdict fires). We only keep two gentle
  // biases that shape the roster flavour without costing a moveset slot:
  //   • Pool bias  : prefer the top 60% by Speed inside the tier
  //   • Nature     : swap "relaxed" / "bold" out for "jolly" (those two
  //                  natures lower Speed, which no arena NPC would run).
  // No forced speed-manipulation move is injected — that used to waste
  // a slot and produce weaker movesets now that the judge does the work.
  function arenaBiasPoolBySpeed(ids) {
    if (typeof pkmn === "undefined") return ids;
    if (!Array.isArray(ids) || ids.length < 5) return ids;
    const scored = ids
      .map((id) => ({ id, spe: (pkmn[id] && pkmn[id].bst && pkmn[id].bst.spe) || 0 }))
      .sort((a, b) => b.spe - a.spe);
    return scored.slice(0, Math.ceil(scored.length * 0.6)).map((e) => e.id);
  }

  function arenaBiasNature(originalNature /*, pkmnData */) {
    if (originalNature === "relaxed" || originalNature === "bold") return "jolly";
    return originalNature;
  }

  function generateTrainer(round, facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const { sprite, name } = pickSpriteAndName(lang);

    const mult = difficultyMultiplier(round, facility);
    const gold = goldRoundFor(facility);
    let tier = 1;
    if (round >= 3) tier = 2;
    if (round >= 6) tier = 3;
    if (round > gold) tier = 4;
    if (mult >= 3) tier = 5;

    // Every facility's NPC brings 3 Pokémon. Dôme picks 2 to actually
    // fight at match-time (see openDomePokemonSelection). The facility
    // pool helper unifies Arena speed-bias + Factory early-round
    // crescendo; other facilities just get the raw tier pool.
    const arenaBias = isArenaFacility(facility);
    const pool = getPoolForFacility(facility, tier, round);
    const size = 3;
    const slots = [];
    for (let i = 0; i < size; i++) {
      const id = pool[Math.floor(Math.random() * pool.length)] || pickFromPool(tier);
      const moves = pickMovesetFor(id);
      let nature = simulateNatureFor(id);
      if (arenaBias) nature = arenaBiasNature(nature);
      slots.push({ id, moves, nature });
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
      /* Run-in-progress badge — pulsing red pill that appears on the
         one tile where an activeRun is bound. Players see at a glance
         which facility they're committed to, without opening any tile. */
      .frontier-ext-inprogress-tag {
        display: inline-block;
        background: linear-gradient(90deg, #c0392b, #e74c3c, #c0392b);
        color: #ffecec;
        font-size: 0.7rem;
        padding: 0.1rem 0.55rem;
        border-radius: 0.2rem;
        margin-left: 0.3rem;
        vertical-align: middle;
        letter-spacing: 0.05em;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        box-shadow:
          0 0 0 1px rgba(255, 100, 100, 0.5),
          0 0 6px rgba(231, 76, 60, 0.55);
        animation: frontierInProgressPulse 1.8s ease-in-out infinite;
      }
      .frontier-ext-inprogress-tag::before {
        /* tiny red dot already embedded in the text via "● " prefix; this
           rule just nudges the text baseline so the glyph aligns visually. */
        position: relative;
        top: -0.05rem;
      }
      @keyframes frontierInProgressPulse {
        0%, 100% {
          box-shadow:
            0 0 0 1px rgba(255, 100, 100, 0.5),
            0 0 6px rgba(231, 76, 60, 0.55);
        }
        50% {
          box-shadow:
            0 0 0 1px rgba(255, 150, 150, 0.75),
            0 0 12px rgba(231, 76, 60, 0.9);
        }
      }
      /* When the whole tile is darkened (locked by unlock gate), the
         in-progress badge can't sit on a locked tile anyway — but keep
         the override defensive just in case the feature ever overlaps. */
      .frontier-ext-tile.locked .frontier-ext-inprogress-tag {
        display: none;
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
      /* Dôme 2-of-3 pick modal */
      .frontier-ext-dome-teams {
        display: flex;
        gap: 1rem;
        padding: 0.6rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .frontier-ext-dome-side {
        flex: 1 1 220px;
        min-width: 200px;
      }
      .frontier-ext-dome-label {
        font-weight: bold;
        font-size: 0.9rem;
        color: #ffc857;
        text-align: center;
        margin-bottom: 0.3rem;
      }
      .frontier-ext-dome-slots {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-dome-card {
        background: rgba(0,0,0,0.25);
        border: 2px solid transparent;
        border-radius: 0.4rem;
        padding: 0.3rem;
        width: 5rem;
        text-align: center;
        font-size: 0.75rem;
        cursor: pointer;
        transition: transform 0.1s, border-color 0.15s;
        user-select: none;
      }
      .frontier-ext-dome-card img {
        width: 3.5rem;
        height: 3.5rem;
        image-rendering: pixelated;
      }
      .frontier-ext-dome-card.player:hover {
        transform: translateY(-2px);
        border-color: rgba(255,255,255,0.5);
      }
      .frontier-ext-dome-card.player.selected {
        border-color: #6ab04c;
        background: rgba(106,176,76,0.2);
      }
      .frontier-ext-dome-card.opponent {
        cursor: default;
        border-color: rgba(192,57,43,0.5);
      }
      /* ── Factory rental selection grid ───────────────────────────────── */
      .frontier-ext-factory-subtitle {
        padding: 0.55rem 1rem 0.35rem;
        text-align: center;
        font-style: italic;
        font-size: 0.9rem;
        color: #e9d4a8;
        background: rgba(255, 230, 180, 0.06);
        border-radius: 0.3rem;
        margin: 0 0.6rem 0.3rem;
        border: 1px solid rgba(255, 230, 180, 0.12);
      }
      .frontier-ext-factory-grid {
        display: grid;
        /* 2 columns → 6 cards fit in 3 rows, giving each card ~50% more
           horizontal space so IV stars and move names stop wrapping. */
        grid-template-columns: repeat(2, 1fr);
        gap: 0.55rem;
        padding: 0.4rem 0.6rem;
      }
      .frontier-ext-factory-card {
        position: relative;
        background: linear-gradient(135deg, rgba(30, 18, 8, 0.85), rgba(18, 10, 5, 0.65));
        border: 2px solid rgba(255, 230, 180, 0.12);
        border-radius: 0.55rem;
        padding: 0.6rem 0.7rem 0.65rem;
        cursor: pointer;
        transition: transform 0.12s ease-out, border-color 0.15s, box-shadow 0.15s, background 0.15s;
        user-select: none;
        color: #f5e6c8;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
      }
      .frontier-ext-factory-card:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 230, 180, 0.3);
        background: linear-gradient(135deg, rgba(50, 30, 15, 0.9), rgba(30, 18, 8, 0.7));
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.55);
      }
      .frontier-ext-factory-card.selected {
        border-color: #6ab04c;
        background: linear-gradient(135deg, rgba(50, 80, 40, 0.55), rgba(20, 40, 18, 0.55));
        box-shadow:
          0 3px 10px rgba(0, 0, 0, 0.55),
          0 0 14px rgba(106, 176, 76, 0.4),
          inset 0 0 0 1px rgba(106, 176, 76, 0.25);
      }
      /* Card header: sprite + title block + pick badge */
      .frontier-ext-factory-card .card-header {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        padding-bottom: 0.35rem;
        border-bottom: 1px solid rgba(255, 230, 180, 0.12);
      }
      .frontier-ext-factory-card .sprite {
        width: 3.6rem;
        height: 3.6rem;
        flex-shrink: 0;
        image-rendering: pixelated;
      }
      .frontier-ext-factory-card .title-block {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .frontier-ext-factory-card .name {
        font-weight: bold;
        font-size: 1.02rem;
        color: #ffeec9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.1;
      }
      .frontier-ext-factory-card .tags {
        display: flex;
        gap: 0.3rem;
        flex-wrap: wrap;
      }
      .frontier-ext-factory-card .tag-nature {
        background: rgba(130, 180, 90, 0.22);
        color: #cfe9a0;
        padding: 0.08rem 0.45rem;
        border-radius: 0.25rem;
        font-size: 0.72rem;
        font-style: italic;
        border: 1px solid rgba(130, 180, 90, 0.3);
      }
      .frontier-ext-factory-card .tag-ability {
        background: rgba(255, 200, 90, 0.18);
        color: #ffd17a;
        padding: 0.08rem 0.45rem;
        border-radius: 0.25rem;
        font-size: 0.72rem;
        font-weight: bold;
        border: 1px solid rgba(255, 200, 90, 0.3);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 8rem;
      }
      /* IV bar grid */
      .frontier-ext-factory-card .ivs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.22rem 0.55rem;
      }
      .frontier-ext-factory-card .iv-row {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.7rem;
      }
      .frontier-ext-factory-card .iv-label {
        min-width: 1.7rem;
        font-weight: bold;
        opacity: 0.7;
        letter-spacing: 0.02em;
      }
      .frontier-ext-factory-card .iv-bar {
        flex: 1;
        height: 0.4rem;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 0.2rem;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.25);
      }
      .frontier-ext-factory-card .iv-bar-fill {
        height: 100%;
        border-radius: inherit;
        transition: width 0.2s;
      }
      .frontier-ext-factory-card .iv-bar-fill.low  { background: linear-gradient(90deg, #c0392b, #e57070); }
      .frontier-ext-factory-card .iv-bar-fill.mid  { background: linear-gradient(90deg, #d89040, #f1c868); }
      .frontier-ext-factory-card .iv-bar-fill.high { background: linear-gradient(90deg, #4ac060, #7ae090); }
      .frontier-ext-factory-card .iv-value {
        font-weight: bold;
        color: #ffe080;
        font-size: 0.72rem;
        min-width: 0.8rem;
        text-align: right;
      }
      /* Move chips — type-coloured left border */
      .frontier-ext-factory-card .moves {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.28rem;
      }
      .frontier-ext-factory-card .moves .move {
        font-size: 0.74rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background: rgba(255, 255, 255, 0.06);
        border-left: 4px solid var(--move-type, #888);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f0e4c6;
        font-weight: 500;
      }
      /* Selection badge — round green pill at header's right edge */
      .frontier-ext-factory-card .pick-badge {
        width: 1.6rem;
        height: 1.6rem;
        background: #6ab04c;
        border: 2px solid #2a1a0a;
        border-radius: 50%;
        color: white;
        font-weight: bold;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        flex-shrink: 0;
      }
      .frontier-ext-factory-counter {
        text-align: center;
        padding: 0.35rem 0.6rem 0.1rem;
        font-size: 0.9rem;
        font-weight: bold;
        color: #ffd700;
      }
      /* Expand the tooltip container while the Factory rental modal is
         open so the 6-card 2×3 grid + counter + action row all fit
         without scrolling. The class is added by setFactoryModalSizing
         (true) from openFactoryRentalSelection and cleared on confirm
         / abandon / cleanup. */
      #tooltipBox.frontier-ext-factory-open {
        max-height: 94vh !important;
        max-width: min(60rem, 96vw) !important;
        width: auto !important;
      }
      #tooltipBox.frontier-ext-factory-open #tooltipMid {
        max-height: 80vh;
        overflow-y: auto;
      }
      /* EXCEPTIONAL for this modal only: reposition the vanilla close
         button to top-right and shrink it. The default close sits at
         mid-center which overlaps the Confirm / Abandon action row.
         Uses :has() for modern browsers AND a direct class selector on
         #tooltipBackground for older browser compat. */
      #tooltipBackground.frontier-ext-factory-open #tooltipClose,
      #tooltipBackground:has(#tooltipBox.frontier-ext-factory-open) #tooltipClose {
        position: absolute !important;
        top: 0.6rem !important;
        right: 0.6rem !important;
        bottom: auto !important;
        left: auto !important;
        transform: none !important;
        width: 1.8rem !important;
        height: 1.8rem !important;
        min-width: 0 !important;
        min-height: 0 !important;
        font-size: 0.95rem !important;
        line-height: 1.8rem !important;
        padding: 0 !important;
        border-radius: 50% !important;
        background: rgba(0, 0, 0, 0.6) !important;
        color: #f5e6c8 !important;
        border: 1px solid rgba(255, 230, 180, 0.3) !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) !important;
        z-index: 10 !important;
      }
      #tooltipBackground.frontier-ext-factory-open #tooltipClose:hover,
      #tooltipBackground:has(#tooltipBox.frontier-ext-factory-open) #tooltipClose:hover {
        background: rgba(192, 57, 43, 0.85) !important;
        border-color: rgba(255, 180, 180, 0.5) !important;
      }
      /* ── Battle Pyramid — dungeon map ──────────────────────────────── */
      .frontier-ext-pyr-grid {
        display: grid;
        gap: 2px;
        padding: 0.5rem;
        background: #1a0f08;
        border: 2px solid #5a3820;
        border-radius: 0.4rem;
        margin: 0.4rem auto;
        width: fit-content;
        box-shadow:
          0 3px 10px rgba(0, 0, 0, 0.6),
          inset 0 0 0 1px rgba(255, 200, 120, 0.15);
      }
      .pyr-tile {
        position: relative;
        width: 3rem;
        height: 3rem;
        box-sizing: border-box;
        overflow: visible;
      }
      .pyr-tile svg {
        width: 100%;
        height: 100%;
        display: block;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
      }
      .pyr-tile.unrevealed {
        opacity: 0.88;
      }
      .pyr-tile.clickable {
        cursor: pointer;
        outline: 2px solid rgba(255, 230, 120, 0.6);
        outline-offset: -2px;
        z-index: 2;
      }
      .pyr-tile.clickable:hover {
        outline-color: rgba(255, 230, 120, 1);
        filter: brightness(1.2);
      }
      .pyr-tile.wall {
        cursor: not-allowed;
      }
      .pyr-tile.stairs {
        /* Subtle pulsing glow on the exit tile so the player sees it. */
        animation: pyrStairsGlow 1.8s ease-in-out infinite;
      }
      @keyframes pyrStairsGlow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.25) drop-shadow(0 0 3px rgba(255, 220, 120, 0.8)); }
      }
      .pyr-tile.player-here .pyr-char-mount {
        position: absolute;
        inset: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
      }
      .pyr-tile.player-here .pyr-char-mount svg {
        width: 80%;
        height: 80%;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
        animation: pyrCharBob 0.6s ease-in-out infinite;
      }
      @keyframes pyrCharBob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1px); }
      }
      /* Walk animation: alternating left/right legs every 250ms */
      .pyr-tile.player-here .pyr-leg-l {
        animation: pyrLegL 0.5s ease-in-out infinite;
      }
      .pyr-tile.player-here .pyr-leg-r {
        animation: pyrLegR 0.5s ease-in-out infinite;
      }
      @keyframes pyrLegL {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1px); }
      }
      @keyframes pyrLegR {
        0%, 100% { transform: translateY(-1px); }
        50% { transform: translateY(0); }
      }
      .pyr-hint {
        text-align: center;
        padding: 0.3rem 0.8rem;
        font-style: italic;
        font-size: 0.88rem;
        opacity: 0.85;
        color: var(--light2, #fff);
      }
      .pyr-hint.boss {
        color: #ffd700;
        font-weight: bold;
        font-style: normal;
        text-shadow: 0 0 4px rgba(255, 100, 100, 0.5);
      }
      /* Pyramid modal gets the same size override as Factory. */
      #tooltipBox.frontier-ext-pyramid-open {
        max-height: 92vh !important;
        max-width: min(30rem, 94vw) !important;
        width: auto !important;
      }
      #tooltipBox.frontier-ext-pyramid-open #tooltipMid {
        max-height: 80vh;
        overflow-y: auto;
      }
      /* Swap modal sections — opponent (red tint) + yours (green tint). */
      .frontier-ext-factory-swap-section {
        margin: 0.35rem 0 0.6rem;
      }
      .frontier-ext-factory-swap-section .section-label {
        padding: 0.3rem 0.8rem;
        font-weight: bold;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        margin: 0 0.6rem;
        border-radius: 0.3rem 0.3rem 0 0;
        text-transform: uppercase;
      }
      .frontier-ext-factory-swap-section .section-label.opponent {
        background: linear-gradient(90deg, rgba(192, 57, 43, 0.35), rgba(140, 40, 30, 0.25));
        color: #ffc8c0;
        border-left: 3px solid #c0392b;
      }
      .frontier-ext-factory-swap-section .section-label.yours {
        background: linear-gradient(90deg, rgba(106, 176, 76, 0.35), rgba(70, 130, 50, 0.25));
        color: #caf0b8;
        border-left: 3px solid #6ab04c;
      }
      /* Tint the cards so players see side-at-a-glance */
      .frontier-ext-factory-card.swap-take {
        border-color: rgba(192, 57, 43, 0.3);
      }
      .frontier-ext-factory-card.swap-take:hover {
        border-color: rgba(192, 57, 43, 0.6);
      }
      .frontier-ext-factory-card.swap-take.selected {
        border-color: #e74c3c;
        background: linear-gradient(135deg, rgba(120, 40, 30, 0.55), rgba(70, 20, 15, 0.55));
        box-shadow:
          0 3px 10px rgba(0, 0, 0, 0.55),
          0 0 14px rgba(231, 76, 60, 0.4),
          inset 0 0 0 1px rgba(231, 76, 60, 0.25);
      }
      .frontier-ext-factory-card.swap-give {
        border-color: rgba(106, 176, 76, 0.3);
      }
      .frontier-ext-factory-card.swap-give:hover {
        border-color: rgba(106, 176, 76, 0.6);
      }
      /* Inline actions row inside the rental modal — placed in tooltipMid
         instead of tooltipBottom so the 6-card grid can't hide it. */
      .frontier-ext-factory-actions {
        display: flex;
        justify-content: center;
        gap: 0.6rem;
        padding: 0.5rem 0.6rem 0.7rem;
        flex-wrap: wrap;
      }
      /* Visual disabled state for pseudo-disabled action buttons.
         We use a class instead of the native disabled attribute so the
         click handler can short-circuit without the browser eating
         pointer events on children. */
      .frontier-ext-action-btn.disabled {
        opacity: 0.45;
        cursor: not-allowed;
        filter: grayscale(0.5);
      }
      .frontier-ext-action-btn.disabled:hover {
        filter: grayscale(0.5);
        transform: none;
      }
      /* ── Pic de Combat (Battle Pike) ─────────────────────────────────────
         Curtain-door picker, status/heal modals, room/HP banners. */
      .frontier-ext-pike-banner {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 0.6rem;
        padding: 0.5rem 0.8rem;
        background: linear-gradient(90deg,
          rgba(70, 10, 10, 0.55),
          rgba(140, 20, 20, 0.55),
          rgba(70, 10, 10, 0.55));
        border-radius: 0.3rem;
        margin: 0.3rem 0.6rem;
        color: #ffdcdc;
        font-size: 0.9rem;
        flex-wrap: wrap;
      }
      .frontier-ext-pike-banner strong {
        color: #ffd700;
        font-size: 1.05rem;
        margin: 0 0.2rem;
      }
      .frontier-ext-pike-banner .boss-flag {
        color: #ff6b6b;
        font-weight: bold;
        text-shadow: 0 0 4px rgba(255, 50, 50, 0.6);
      }
      .frontier-ext-pike-hp-summary {
        display: flex;
        gap: 0.35rem;
        padding: 0.3rem 0.6rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-pike-hp-pill {
        background: rgba(0,0,0,0.45);
        border: 1px solid rgba(255,255,255,0.2);
        padding: 0.15rem 0.5rem;
        border-radius: 0.3rem;
        font-size: 0.75rem;
        color: #fff;
      }
      .frontier-ext-pike-hp-pill .bar {
        display: inline-block;
        width: 2.8rem;
        height: 0.35rem;
        background: rgba(255,255,255,0.15);
        border-radius: 0.15rem;
        margin-left: 0.3rem;
        vertical-align: middle;
        overflow: hidden;
      }
      .frontier-ext-pike-hp-pill .bar > span {
        display: block;
        height: 100%;
        background: linear-gradient(90deg, #6ab04c, #4ade80);
      }
      .frontier-ext-pike-hp-pill.low .bar > span {
        background: linear-gradient(90deg, #c0392b, #e74c3c);
      }
      .frontier-ext-pike-hp-pill.mid .bar > span {
        background: linear-gradient(90deg, #e67e22, #f1c40f);
      }
      .frontier-ext-pike-hp-pill .st {
        display: inline-block;
        margin-left: 0.3rem;
        padding: 0 0.25rem;
        border-radius: 0.15rem;
        font-size: 0.7rem;
      }
      .frontier-ext-pike-hp-pill .st.poisoned { background: #8e44ad; color: #fff; }
      .frontier-ext-pike-hp-pill .st.burn { background: #c0392b; color: #fff; }
      .frontier-ext-pike-hp-pill .st.paralysis { background: #f39c12; color: #000; }

      .frontier-ext-pike-doors {
        display: flex;
        gap: 1.1rem;
        padding: 0.8rem 0.6rem 0.4rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-pike-door {
        position: relative;
        width: 6.2rem;
        height: 10rem;
        cursor: pointer;
        border-radius: 0.35rem;
        overflow: hidden;
        transition: transform 0.15s, filter 0.2s, box-shadow 0.2s;
        filter: drop-shadow(0 2px 6px rgba(0,0,0,0.6));
        user-select: none;
      }
      .frontier-ext-pike-door:hover {
        transform: translateY(-4px) scale(1.04);
        filter: drop-shadow(0 4px 10px rgba(255, 80, 80, 0.5)) brightness(1.08);
      }
      .frontier-ext-pike-door:active {
        transform: translateY(-1px) scale(1.00);
      }
      .frontier-ext-pike-door svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .frontier-ext-pike-door .door-number {
        position: absolute;
        top: 0.4rem;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.75);
        color: #ffd700;
        font-weight: bold;
        padding: 0.15rem 0.55rem;
        border-radius: 0.25rem;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        pointer-events: none;
        border: 1px solid rgba(255, 215, 0, 0.5);
      }
      .frontier-ext-pike-door.revealed {
        animation: pikeCurtainSway 0.5s ease-out;
      }
      @keyframes pikeCurtainSway {
        0%   { transform: scaleY(1) translateY(0); }
        40%  { transform: scaleY(0.96) translateY(-2px); }
        100% { transform: scaleY(1) translateY(0); }
      }
      .frontier-ext-pike-door.locked {
        cursor: not-allowed;
        filter: grayscale(0.6) brightness(0.5);
      }

      .frontier-ext-pike-event {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem;
      }
      .frontier-ext-pike-event .icon {
        font-size: 2.4rem;
      }
      .frontier-ext-pike-event .headline {
        font-weight: bold;
        font-size: 1.1rem;
        color: #ffdcdc;
      }
      .frontier-ext-pike-event.heal .icon { color: #4ade80; }
      .frontier-ext-pike-event.heal .headline { color: #baf5c9; }
      .frontier-ext-pike-event.trap .icon { color: #e74c3c; }
      .frontier-ext-pike-event.trap .headline { color: #ffb3b3; }
      .frontier-ext-pike-event .body {
        text-align: center;
        font-size: 0.9rem;
        opacity: 0.9;
        color: var(--light2, #fff);
        max-width: 22rem;
      }
      /* ── Round-cleared modal (all facilities) ──────────────────────────── */
      .frontier-ext-round-header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;
        padding: 0.6rem 0;
      }
      .frontier-ext-round-header .trophy {
        font-size: 3.2rem;
        filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.55));
      }
      .frontier-ext-round-header .facility-icon svg {
        width: 4rem;
        height: 4rem;
        color: #ffd700;
        opacity: 0.95;
      }
      .frontier-ext-round-cleared {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0.6rem 0.9rem 0.3rem;
        text-align: center;
      }
      .frontier-ext-round-cleared .celebration {
        font-size: 1.15rem;
        color: var(--light2, #fff);
      }
      .frontier-ext-round-cleared .celebration strong {
        color: #ffd700;
        font-size: 1.35rem;
        margin: 0 0.2rem;
        text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
      }
      .frontier-ext-round-cleared .stats {
        display: flex;
        gap: 1.2rem;
        font-size: 0.9rem;
        opacity: 0.9;
      }
      .frontier-ext-round-cleared .stats strong {
        color: #ffd700;
        margin-left: 0.25rem;
      }
      .frontier-ext-round-next {
        margin-top: 0.4rem;
        padding: 0.35rem 0.7rem;
        border-radius: 0.3rem;
        font-size: 0.92rem;
        background: rgba(255, 255, 255, 0.08);
      }
      .frontier-ext-round-next.boss {
        color: #ffd700;
        background: linear-gradient(90deg,
          rgba(200, 40, 40, 0.35),
          rgba(255, 140, 0, 0.35),
          rgba(200, 40, 40, 0.35));
        font-weight: bold;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
      }
      .frontier-ext-round-award {
        padding: 0.3rem 0.8rem;
        border-radius: 0.3rem;
        font-weight: bold;
        animation: roundAwardPulse 1.6s ease-in-out infinite;
      }
      .frontier-ext-round-award.silver {
        color: #e8e8e8;
        background: linear-gradient(90deg, rgba(160,160,160,0.15), rgba(220,220,220,0.35), rgba(160,160,160,0.15));
        text-shadow: 0 0 4px rgba(200, 200, 200, 0.6);
      }
      .frontier-ext-round-award.gold {
        color: #fff2a6;
        background: linear-gradient(90deg, rgba(184,134,11,0.2), rgba(255,215,0,0.45), rgba(184,134,11,0.2));
        text-shadow: 0 0 6px rgba(255, 215, 0, 0.65);
      }
      @keyframes roundAwardPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.04); }
      }
      .frontier-ext-round-hint {
        padding: 0.4rem 1rem 0.6rem;
        font-style: italic;
        text-align: center;
        font-size: 0.82rem;
        opacity: 0.75;
        color: var(--dark1, #2a1a0a);
      }
      /* ── Team-menu lock mode (frontier-ext runs) ──────────────────────────
         Applied on #team-menu whenever a frontier-ext run is about to launch
         or is in progress. Blocks every interaction that would let the
         player swap / reorder / heal their team mid-challenge — team
         switcher, drag handles, click-to-change-pkmn, click-to-change-item.
         Save-and-Go and Go-back buttons stay active so the player can
         still confirm the combat or back out to the Frontier tab. */
      /* Hide the team switcher + auto-build ONLY during active combat
         launch. In tied-slot browsing mode we let the player navigate
         to other preview teams so they can use different teams for wild
         zones / other facilities while this run is paused. */
      #team-menu.frontier-ext-team-locked-strict .team-menu-selector-new {
        display: none !important;
      }
      #team-menu.frontier-ext-team-locked-strict .team-menu-selector {
        display: none !important;
      }
      #team-menu.frontier-ext-team-locked #team-preview .explore-team-member {
        pointer-events: none;
        filter: saturate(0.88);
        position: relative;
      }
      #team-menu.frontier-ext-team-locked #team-preview .team-held-item {
        pointer-events: none !important;
      }
      /* Duplicate-team button (teamDuplicate.js) can overwrite a preview
         slot with another's contents — including the tied slot. Hide it
         in both lock modes so the player can't bypass the lock via copy. */
      #team-menu.frontier-ext-team-locked #team-duplicate-button,
      #team-menu.frontier-ext-team-locked #auto-build-button {
        display: none !important;
      }
      /* Anything inside team-preview that would spawn a sub-menu (rename,
         remove, edit moves, etc.) — block via pointer-events at the root. */
      #team-menu.frontier-ext-team-locked #team-preview {
        -webkit-user-drag: none;
      }
      /* Safety net — block any residual dragstart gestures. */
      #team-menu.frontier-ext-team-locked #team-preview [draggable="true"] {
        user-select: none;
        -webkit-user-drag: none;
      }
      /* The lock banner, injected above #team-preview.
         All properties marked !important so the game's sibling layout
         rules (flex / reset styles) can't strip the encadrement. */
      .frontier-ext-team-lock-banner {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        gap: 0.6rem !important;
        margin: 0.6rem 0.7rem !important;
        padding: 0.7rem 1rem !important;
        background: linear-gradient(90deg,
          rgba(140, 20, 20, 0.85),
          rgba(200, 80, 20, 0.85),
          rgba(140, 20, 20, 0.85)) !important;
        color: #ffe6b5 !important;
        font-weight: bold !important;
        border-radius: 0.4rem !important;
        border: 2px solid rgba(255, 190, 90, 0.75) !important;
        font-size: 0.95rem !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7) !important;
        box-shadow:
          0 2px 6px rgba(0, 0, 0, 0.45),
          inset 0 0 0 1px rgba(255, 230, 180, 0.15) !important;
        flex-wrap: wrap !important;
      }
      .frontier-ext-team-lock-banner .lock-icon {
        font-size: 1.4rem !important;
        filter: drop-shadow(0 0 3px rgba(255, 180, 90, 0.7));
      }
      .frontier-ext-team-lock-banner .subtle {
        font-weight: normal !important;
        font-style: italic !important;
        font-size: 0.82rem !important;
        opacity: 0.9 !important;
        margin-left: auto !important;
        color: #ffdcb0 !important;
      }
      /* ── Arena judges' verdict toast (3-criterion breakdown) ──────────
         Drops in from the top of the screen when the Arena's 3-turn judge
         fires. Auto-dismisses after 4 seconds. Green border on victory,
         red on loss. */
      .frontier-ext-arena-verdict {
        position: fixed;
        top: 1.5rem;
        left: 50%;
        transform: translate(-50%, -150%);
        z-index: 9999;
        background: linear-gradient(180deg, #2b1d10 0%, #1a0e08 100%);
        color: #ffecc9;
        padding: 1rem 1.3rem;
        border-radius: 0.5rem;
        box-shadow:
          0 6px 20px rgba(0, 0, 0, 0.7),
          inset 0 0 0 1px rgba(255, 200, 120, 0.2);
        min-width: 22rem;
        max-width: 26rem;
        font-size: 0.95rem;
        opacity: 0;
        transition: transform 0.35s cubic-bezier(.3,1.4,.6,1), opacity 0.35s;
        pointer-events: none;
      }
      .frontier-ext-arena-verdict.show {
        opacity: 1;
        transform: translate(-50%, 0);
      }
      .frontier-ext-arena-verdict.win {
        border: 2px solid #6ab04c;
        box-shadow:
          0 6px 20px rgba(0, 0, 0, 0.7),
          0 0 18px rgba(106, 176, 76, 0.45),
          inset 0 0 0 1px rgba(106, 176, 76, 0.3);
      }
      .frontier-ext-arena-verdict.lose {
        border: 2px solid #c0392b;
        box-shadow:
          0 6px 20px rgba(0, 0, 0, 0.7),
          0 0 18px rgba(192, 57, 43, 0.45),
          inset 0 0 0 1px rgba(192, 57, 43, 0.3);
      }
      .frontier-ext-arena-verdict .title {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 0.6rem;
        color: #ffd700;
        text-shadow: 0 1px 2px rgba(0,0,0,0.6);
      }
      .frontier-ext-arena-verdict.lose .title { color: #ffb3b3; }
      .frontier-ext-arena-verdict .rows {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }
      .frontier-ext-arena-verdict .row {
        display: grid;
        grid-template-columns: 5.5rem 1fr 1fr;
        gap: 0.4rem;
        align-items: center;
        font-size: 0.88rem;
      }
      .frontier-ext-arena-verdict .row .label {
        font-weight: bold;
        color: #e0c3ff;
      }
      .frontier-ext-arena-verdict .row .win {
        color: #8effac;
        font-weight: bold;
      }
      .frontier-ext-arena-verdict .row .lose {
        color: #ff9999;
        opacity: 0.8;
      }
      /* Per-slot HP + status overlay inside the locked team preview.
         Positioned top-right because the game's #{team-i-held-item}
         sits top-left and would otherwise cover our pills. */
      .frontier-ext-team-slot-hp {
        position: absolute;
        top: 0.4rem;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.18rem;
        pointer-events: none;
        z-index: 50;
        align-items: flex-end;
      }
      .frontier-ext-team-slot-hp .hp-pill {
        background: rgba(0, 0, 0, 0.75);
        color: #fff;
        padding: 0.1rem 0.45rem;
        border-radius: 0.25rem;
        font-size: 0.78rem;
        font-weight: bold;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .frontier-ext-team-slot-hp .hp-pill.low { background: rgba(192, 57, 43, 0.9); }
      .frontier-ext-team-slot-hp .hp-pill.mid { background: rgba(230, 126, 34, 0.9); }
      .frontier-ext-team-slot-hp .hp-pill.ko {
        background: rgba(60, 60, 60, 0.95);
        color: #ff6b6b;
        text-shadow: 0 0 3px rgba(255, 80, 80, 0.7);
      }
      .frontier-ext-team-slot-hp .status-pill {
        padding: 0.1rem 0.4rem;
        border-radius: 0.25rem;
        font-size: 0.72rem;
        font-weight: bold;
        text-align: center;
      }
      .frontier-ext-team-slot-hp .status-pill.poisoned { background: #8e44ad; color: #fff; }
      .frontier-ext-team-slot-hp .status-pill.burn { background: #c0392b; color: #fff; }
      .frontier-ext-team-slot-hp .status-pill.paralysis { background: #f39c12; color: #000; }
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

    // "En cours" badge — lights up in red when this specific facility
    // has the active run. Makes the one-run-at-a-time rule visible at
    // a glance without opening each tile.
    const activeRun = saved.frontierExt && saved.frontierExt.activeRun;
    const isRunHere = activeRun && activeRun.facilityId === facility.id;
    const inProgressLabel = lang === "fr" ? "EN COURS" : "IN PROGRESS";
    const inProgressTag = isRunHere
      ? `<span class="frontier-ext-inprogress-tag" title="Run ${activeRun.round + 1}/${silverRoundFor(facility)}">● ${inProgressLabel}</span>`
      : "";

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
          </span>
          <span>
            <strong class="frontier-ext-streak">${streakLabel}: ${streak} / ${maxLabel}: ${maxStreak}</strong>
            <span class="frontier-ext-symbol ${silverClass}" title="Silver Symbol (round ${silverRoundFor(facility)})">●</span>
            <span class="frontier-ext-symbol ${goldClass}" title="Gold Symbol (round ${goldRoundFor(facility)})">●</span>
            <span class="frontier-ext-repeatable-tag">${repeatableLabel}</span>
            ${inProgressTag}
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

  // Shown when the player clicks on a facility tile while a run is
  // active in a DIFFERENT facility. The rule is simple: one active run
  // at a time. The player must either continue or abandon the current
  // run before starting another.
  function showRunInProgressElsewhere(attemptedFacility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const run = saved.frontierExt.activeRun;
    const activeFacility = FACILITIES.find((f) => f.id === run.facilityId);
    if (!activeFacility) return;
    const activeName = lang === "fr" ? activeFacility.nameFr : activeFacility.nameEn;
    const attemptedName = lang === "fr" ? attemptedFacility.nameFr : attemptedFacility.nameEn;
    const brainName = lang === "fr"
      ? activeFacility.brain.nameFr
      : activeFacility.brain.nameEn;

    const t = lang === "fr"
      ? {
          title: "⚠️ Un run est déjà en cours",
          body: `Tu as une série active dans <strong>${activeName}</strong> (Round ${run.round + 1}). Termine ou abandonne cette série avant de commencer <strong>${attemptedName}</strong>.`,
          reason: "Une seule équipe peut être verrouillée à la fois dans la ZdC Hoenn.",
          goToActive: "Reprendre " + activeName,
          abandon: "Abandonner la série en cours",
          close: "Fermer",
        }
      : {
          title: "⚠️ A run is already in progress",
          body: `You have an active streak in <strong>${activeName}</strong> (Round ${run.round + 1}). Finish or abandon that streak before starting <strong>${attemptedName}</strong>.`,
          reason: "Only one team can be locked in the Hoenn ZdC at a time.",
          goToActive: "Resume " + activeName,
          abandon: "Abandon current streak",
          close: "Close",
        };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${activeFacility.brain.sprite}.png"
        style="max-height: 120px; image-rendering: pixelated;"
        alt="${brainName}">`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = t.title;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div style="padding: 0.6rem 0.9rem;">
          <div style="margin-bottom: 0.5rem;">${t.body}</div>
          <div style="font-style: italic; opacity: 0.75; font-size: 0.9rem;">${t.reason}</div>
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="elsewhere-resume">${t.goToActive}</button>
          <button class="frontier-ext-action-btn danger" data-action="elsewhere-abandon">${t.abandon}</button>
          <button class="frontier-ext-action-btn" data-action="elsewhere-close">${t.close}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => {
          const act = btn.dataset.action;
          if (act === "elsewhere-resume") {
            openFacilityPreview(activeFacility);
          } else if (act === "elsewhere-abandon") {
            handleRunAction("abandon", activeFacility);
          } else {
            if (typeof closeTooltip === "function") closeTooltip();
          }
        };
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  // ─── 6. FACILITY PREVIEW / RUN MODAL ──────────────────────────────────────
  // Left-click on an unlocked tile opens this. Shows different content
  // depending on whether a run is already in progress for this facility.
  function openFacilityPreview(facility) {
    // Make sure any oversized modal class from a previous screen is
    // cleared — stale class could otherwise force the facility-preview
    // modal to render too tall.
    try {
      const box = document.getElementById("tooltipBox");
      if (box) {
        box.classList.remove("frontier-ext-factory-open");
        box.classList.remove("frontier-ext-pyramid-open");
      }
    } catch (e) { /* ignore */ }
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const name = lang === "fr" ? facility.nameFr : facility.nameEn;
    const brainName = lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn;

    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    const isActive = run && run.facilityId === facility.id;
    // If a run is active in a DIFFERENT facility, block this one with a
    // clear "finish or abandon your current run first" message — keeps
    // the rules simple: one active ZdC challenge at a time, the locked
    // team follows that challenge, no cross-facility team juggling.
    if (run && !isActive) {
      showRunInProgressElsewhere(facility);
      return;
    }

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
    const isBossRound = !!getBossRoundInfo(nextRound, facility);

    if (mid) {
      mid.style.display = "block";
      let html = `<div style="padding:0.4rem 0.8rem;font-style:italic;opacity:0.9;">`;
      if (isActive) {
        const dome = isDomeFacility(facility);
        const pike = isPikeFacility(facility);
        const perRound = battlesPerRound(facility);
        let battleStr = "";
        if (dome) {
          battleStr = ` · ${lang === "fr" ? "Combat" : "Battle"} ${run.bracketBattle || 1}/${DOME_BRACKET_SIZE}`;
        } else if (pike) {
          battleStr = ` · ${lang === "fr" ? "Salle" : "Room"} ${run.pikeRoom || 1}/${PIKE_ROOM_COUNT}`;
        } else if (perRound > 1) {
          // Tower / Palace / Arena / Factory — show battle progress within
          // the current round so the player sees movement even when the
          // round counter hasn't ticked over yet (7 battles = 1 round).
          battleStr = ` · ${lang === "fr" ? "Combat" : "Battle"} ${run.battleInRound || 1}/${perRound}`;
        }
        html += `<strong>${t.inProgress}</strong> — ${t.round} ${run.round + 1}/${silverRoundFor(facility)}${battleStr}`;
      } else {
        html += `${lang === "fr" ? facility.descFr : facility.descEn}`;
      }
      html += `</div>`;
      if (isBossRound && isActive) {
        const info = getBossRoundInfo(nextRound, facility);
        const bannerTxt = (info && info.kind === "silver") ? t.brainIncoming : t.goldIncoming;
        html += `<div style="padding:0.3rem 0.8rem;color:#ffd700;font-weight:bold;">${bannerTxt}</div>`;
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

  // Dôme pick-2-of-3 modal — opens AFTER the bracket preview when the
  // player clicks "Lancer le combat". Shows the player's 3 mons as
  // togglable cards; exactly 2 must be selected. The chosen 2 become the
  // active battlers; the third is temporarily cleared from the preview
  // team before combat and restored in the leaveCombat hook.
  function openDomePokemonSelection(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = window.gameLang === "fr" ? "fr" : "en";

    const bracket = ensureBracketForDome(facility);
    const currentIdx = (run.bracketBattle || 1) - 1;
    const opponent = bracket[currentIdx];
    if (!opponent) return;

    const pt = (saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};
    const playerMons = [];
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (pt[sl] && pt[sl].pkmn) playerMons.push({ slot: sl, id: pt[sl].pkmn });
    }

    // Selection persisted on the run so re-opening keeps picks
    if (!run.domeSelection) run.domeSelection = [];

    const t = lang === "fr"
      ? {
          title: "Choisis 2 Pokémon",
          desc: "Les deux camps voient leurs équipes. Sélectionne 2 Pokémon pour ce match.",
          yourTeam: "Ton équipe",
          opponentTeam: "Équipe adverse",
          need2: "Sélectionne exactement 2 Pokémon.",
          confirm: "⚔️ Confirmer et combattre",
          back: "Retour",
        }
      : {
          title: "Pick 2 Pokémon",
          desc: "Both sides see each other's teams. Pick 2 Pokémon for this match.",
          yourTeam: "Your team",
          opponentTeam: "Opponent",
          need2: "Select exactly 2 Pokémon.",
          confirm: "⚔️ Confirm & fight",
          back: "Back",
        };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) { top.style.display = "none"; }
    if (title) { title.style.display = "block"; title.innerHTML = t.title; }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div style="padding:0.5rem 0.8rem;font-style:italic;opacity:0.85;">${t.desc}</div>
        <div class="frontier-ext-dome-teams">
          <div class="frontier-ext-dome-side">
            <div class="frontier-ext-dome-label">${t.yourTeam}</div>
            <div class="frontier-ext-dome-slots" id="frontier-ext-dome-player"></div>
          </div>
          <div class="frontier-ext-dome-side">
            <div class="frontier-ext-dome-label">${t.opponentTeam} — ${opponent.name}</div>
            <div class="frontier-ext-dome-slots">
              ${opponent.team.map((s) =>
                `<div class="frontier-ext-dome-card opponent"><img src="img/pkmn/sprite/${s.id}.png" alt="${s.id}"><div>${typeof format === "function" ? format(s.id) : s.id}</div></div>`
              ).join("")}
            </div>
          </div>
        </div>
      `;
      const playerCtr = document.getElementById("frontier-ext-dome-player");
      if (playerCtr) {
        playerCtr.innerHTML = playerMons.map((m) => {
          const selected = run.domeSelection.indexOf(m.id) !== -1;
          return `<div class="frontier-ext-dome-card player${selected ? " selected" : ""}" data-monid="${m.id}"><img src="img/pkmn/sprite/${m.id}.png" alt="${m.id}"><div>${typeof format === "function" ? format(m.id) : m.id}</div></div>`;
        }).join("");
        playerCtr.querySelectorAll("[data-monid]").forEach((el) => {
          el.onclick = () => toggleDomeSelection(el.dataset.monid, facility);
        });
      }
    }
    if (bottom) {
      bottom.style.display = "block";
      const canConfirm = run.domeSelection.length === DOME_ACTIVE_SIZE;
      bottom.innerHTML = `
        <div style="padding:0.4rem 0.8rem;font-size:0.85rem;color:${canConfirm ? "#2a5e2a" : "#7a2e1a"};text-align:center;">
          ${canConfirm ? `✓ ${run.domeSelection.length}/${DOME_ACTIVE_SIZE}` : t.need2}
        </div>
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="confirm-dome" ${canConfirm ? "" : "disabled style=\"opacity:0.4;cursor:not-allowed;\""}>${t.confirm}</button>
          <button class="frontier-ext-action-btn" data-action="back">${t.back}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  // Selection stores Pokémon IDs (not slot keys) so reorders or team
  // switches between pick-time and launch-time can't cheese. If the
  // player moves their mons around, the match still uses the exact
  // Pokémon they chose. If they switch to a different preview team
  // that doesn't contain one of the picked IDs, the missing slot stays
  // empty — natural penalty for trying to cheat.
  function toggleDomeSelection(monId, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    if (!run.domeSelection) run.domeSelection = [];
    const idx = run.domeSelection.indexOf(monId);
    if (idx !== -1) {
      run.domeSelection.splice(idx, 1);
    } else if (run.domeSelection.length < DOME_ACTIVE_SIZE) {
      run.domeSelection.push(monId);
    } else {
      run.domeSelection.shift();
      run.domeSelection.push(monId);
    }
    openDomePokemonSelection(facility);
  }

  // GLOBAL SAFETY RULE: this overlay MUST NEVER mutate saved.previewTeams.
  // Any write to saved.* that can persist to disk could corrupt the
  // player's save if an error occurs mid-operation. The Dôme's 2-of-3
  // rule is instead applied to the RUNTIME `team[]` object (populated by
  // the game's injectPreviewTeam from currentTeam on each battle
  // launch); team[] is ephemeral so clearing non-selected slots there
  // has zero save-corruption risk.
  //
  // applyDomeSelection is now a marker — it only confirms the selection
  // and lets the team-filter hook do the actual filtering at launch.
  function applyDomeSelection() {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    run.domeSelectionConfirmed = true;
  }

  // Back-compat shim for earlier buggy saves that still carry a
  // domeTeamBackup. If one is found, restore from it then clear so it
  // never fires twice. New runs never populate this field anymore.
  function restoreDomeSelection() {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run || !run.domeTeamBackup) return;
    const ptKey = run.domeTeamSlot || saved.currentPreviewTeam;
    const pt = saved.previewTeams && saved.previewTeams[ptKey];
    if (pt) {
      for (const sl of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        delete pt[sl];
      }
      for (const sl of Object.keys(run.domeTeamBackup)) {
        pt[sl] = run.domeTeamBackup[sl];
      }
    }
    run.domeTeamBackup = null;
    run.domeTeamSlot = null;
  }

  // Hook injectPreviewTeam (teams.js:280) so that AFTER the game copies
  // currentTeam → team[] at combat launch, we null out the RUNTIME team[]
  // entries the player didn't pick for the Dôme match. saved.previewTeams
  // stays untouched — zero corruption risk.
  function installDomeTeamFilter() {
    if (typeof window.injectPreviewTeam !== "function") {
      setTimeout(installDomeTeamFilter, 200);
      return;
    }
    if (window.__frontierExtDomeFilterHooked) return;
    window.__frontierExtDomeFilterHooked = true;
    const orig = window.injectPreviewTeam;
    window.injectPreviewTeam = function () {
      const res = orig.apply(this, arguments);
      try {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (!run || !Array.isArray(run.domeSelection) ||
            run.domeSelection.length !== DOME_ACTIVE_SIZE) return res;
        const facility = FACILITIES.find((f) => f.id === run.facilityId);
        if (!isDomeFacility(facility)) return res;
        // Only filter when actually launching a Dôme-run battle
        // (saved.currentArea is set to RUN_AREA_ID in injectPreviewTeam
        // at line 448 via the buffer assignment).
        if (saved.currentArea !== RUN_AREA_ID) return res;
        if (typeof team === "undefined") return res;

        // Filter + PACK the team (anti-cheese). Two things to solve:
        //   1. Anti-cheese: if the player reordered the team or switched
        //      preview teams between pick and launch, keep only the
        //      exact mons they picked (matched by Pokémon ID).
        //   2. Pack to contiguous slots starting at slot1, because the
        //      game hardcodes `exploreActiveMember = "slot1"` in
        //      initialiseArea. Leaving slot1 empty would crash
        //      updateTeamPkmn at team[slot1].pkmn.id lookup.
        const keep = new Set(run.domeSelection);
        const kept = [];
        for (const slotKey of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
          const slot = team[slotKey];
          if (!slot) continue;
          const mon = slot.pkmn;
          const monId = mon && (mon.id || (typeof mon === "string" ? mon : null));
          if (monId && keep.has(monId)) {
            kept.push({ pkmn: slot.pkmn, item: slot.item });
          }
        }
        const SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];
        for (let i = 0; i < SLOTS.length; i++) {
          const slot = team[SLOTS[i]];
          if (!slot) continue;
          if (i < kept.length) {
            slot.pkmn = kept[i].pkmn;
            slot.item = kept[i].item;
          } else {
            slot.pkmn = undefined;
            slot.item = undefined;
          }
        }
      } catch (e) {
        console.error("[frontier-ext] dome team filter failed:", e);
      }
      return res;
    };
  }

  // Heal any lingering corruption from earlier buggy saves. Walks every
  // preview team and any team slot containing `null` gets its key
  // deleted — restoring the game's "slot absent = empty" invariant.
  function sanitizeNullSlots() {
    if (typeof saved !== "object" || !saved || !saved.previewTeams) return 0;
    let healed = 0;
    for (const key of Object.keys(saved.previewTeams)) {
      const pt = saved.previewTeams[key];
      if (!pt || typeof pt !== "object") continue;
      for (const sl of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        if (pt[sl] === null) {
          delete pt[sl];
          healed++;
        }
      }
    }
    if (healed > 0) {
      console.info("[frontier-ext] sanitized " + healed + " null preview-team slot(s)");
    }
    return healed;
  }

  // Hook every entry point that reads preview-team slots so the sanitizer
  // runs BEFORE the game crashes on a null value. explore.js:9915
  // (arceusCheck) and teams.js:911 (updatePreviewTeam) both blow up on
  // `pt[slotN].pkmn` when the slot is null.
  function installTeamSanitizerHooks() {
    const fnNames = ["updatePreviewTeam", "arceusCheck", "switchMenu"];
    for (const name of fnNames) {
      (function wrap(n) {
        const attempt = () => {
          if (typeof window[n] !== "function") {
            setTimeout(attempt, 200);
            return;
          }
          if (window["__frontierExtHook_" + n]) return;
          window["__frontierExtHook_" + n] = true;
          const orig = window[n];
          window[n] = function () {
            try { sanitizeNullSlots(); } catch (e) { /* ignore */ }
            return orig.apply(this, arguments);
          };
        };
        attempt();
      })(name);
    }
  }

  // Runs at bootstrap and on any updateFrontier re-render. If we find a
  // pending domeTeamBackup but no combat is in progress, that means a
  // previous run got interrupted between applyDomeSelection() and
  // restoreDomeSelection() — probably because launchCombat errored or
  // the page reloaded mid-pick. Restore automatically so the player's
  // team isn't stuck in a mutated 2-mon state.
  function recoverCorruptedDomeTeam() {
    if (typeof saved !== "object" || !saved || !saved.frontierExt) return;
    const run = saved.frontierExt.activeRun;
    if (!run || !run.domeTeamBackup) return;
    // Are we currently mid-combat in a frontier-ext run? If so, the
    // mutation is intentional; don't restore.
    if (saved.currentArea === RUN_AREA_ID) return;
    // Otherwise the team is corrupted. Restore + wipe the dome selection
    // so the next match starts fresh.
    try {
      restoreDomeSelection();
      run.domeSelection = [];
      console.info("[frontier-ext] recovered mutated Dôme team from backup");
    } catch (e) {
      console.error("[frontier-ext] recovery failed:", e);
    }
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
    const _bossInfo = getBossRoundInfo(nextRound, facility);
    const perRound = battlesPerRound(facility);
    const battleInRound = run.battleInRound || 1;
    // Brain fight only on the LAST battle of a boss round. Battles 1..N-1
    // of a boss round still face regular pool trainers. Dome handles its
    // own brain slot via ensureBracketForDome; Pike via its door picker.
    const isBrainBattleHere = _bossInfo && battleInRound === perRound;
    const isSilverBoss = isBrainBattleHere && _bossInfo.kind === "silver";
    const isGoldBoss = isBrainBattleHere && _bossInfo.kind !== "silver";

    const t = lang === "fr"
      ? {
          round: "Round",
          battle: "Combat",
          vs: "vs",
          warn: "⚠️ Tous tes Pokémon doivent être niveau 100. Sinon le combat sera très dur !",
          launch: "⚔️ Lancer le combat",
          cancel: "Annuler",
        }
      : {
          round: "Round",
          battle: "Battle",
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

    // Factory species-overlap dedupe: if the opponent happens to roll a
    // species already in the player's rental team, the combat engine would
    // read `pkmn[id]` which is currently overridden with the PLAYER's
    // rental spec (applyFactoryMoves). Net effect: the opponent fights
    // with your own stats, and post-battle swap becomes a no-op. Re-roll
    // any overlap from the same tier pool so every opponent mon is
    // distinct from your rentals.
    if (isFactoryFacility(facility) && run.factoryTeam && Array.isArray(trainer.team)) {
      const rentalIds = new Set(run.factoryTeam.map((r) => r.id));
      const tierForPool = trainer.tier || 1;
      const poolForReroll = getPoolForFacility(facility, tierForPool, nextRound);
      let safety = 0;
      for (let i = 0; i < trainer.team.length; i++) {
        while (rentalIds.has(trainer.team[i].id) && safety < 50) {
          safety++;
          const newId = poolForReroll[Math.floor(Math.random() * poolForReroll.length)]
            || pickFromPool(tierForPool);
          if (!newId || rentalIds.has(newId)) continue;
          trainer.team[i] = {
            id: newId,
            moves: pickMovesetFor(newId),
            nature: trainer.team[i].nature || simulateNatureFor(newId),
          };
        }
      }
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
      const battleStr = perRound > 1
        ? ` · ${t.battle} ${battleInRound}/${perRound}`
        : "";
      title.innerHTML = `${t.round} ${nextRound}${battleStr} — ${trainer.name}`;
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
      // Hard gate — every non-Factory facility needs exactly 3 Pokémon
      // in the current preview team BEFORE any run state is created.
      // Without this check, the run gets locked in, the player enters
      // a facility-specific preview screen (dome bracket / pike rooms /
      // pyramid map / simulated fight), then the inner "launch" path
      // would finally block with showTeamSizeError — forcing them to
      // abandon to get out. Fail fast here instead.
      // Factory is exempt (rentals replace the player's team).
      if (!isFactoryFacility(facility) && currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }
      saved.frontierExt.activeRun = {
        facilityId: facility.id,
        round: 0,
        upcomingTrainer: null,
        bracketBattle: 1,
        bracketTrainers: null,
        bracketRound: null,
        // The preview team slot tied to THIS run. While the run is alive,
        // this preview slot is locked against edits (no slot click, no
        // drag, no item swap) — switching to another preview slot in the
        // team menu is still allowed, so the player can use different
        // teams elsewhere. See applyFrontierTeamLock.
        tiedPreviewSlot: saved.currentPreviewTeam,
        // Battle-in-round counter for facilities that use 7-battle sets
        // (Tower / Palace / Arena / Factory). Brain only appears at the
        // last battle of a boss round. Reset to 1 at end of each round.
        battleInRound: 1,
        // Pike fresh-run state: room 1, no doors rolled, pikeTeam
        // populated right after this block from the active preview team.
        pikeRoom: 1,
        pikeDoors: null,
        pikeDoorPicked: null,
        pikeTeam: null,
        pikeTeamSource: null,
      };
      saved.frontierExt.streaks[facility.id] = 0;
      // Pike: snapshot the player's active preview team into the per-run
      // Pike team state before entering any room. This is the source of
      // truth for HP/status persistence across every combat of the run.
      if (isPikeFacility(facility)) initPikeTeamFromPreview();
      // Pyramid also needs the runTeam snapshot (HP/status persist via
      // the same pikeTeam structure — facility has persistHpStatus flag).
      if (isPyramidFacility(facility)) initPikeTeamFromPreview();
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else if (isPikeFacility(facility)) openPikeRoomPreview(facility);
      else if (isFactoryFacility(facility)) openFactoryRentalSelection(facility);
      else if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      else openSimulatedFight(facility);
      return;
    }
    if (action === "continue") {
      // Same hard gate as "start" — the player may have edited the team
      // while browsing the facility preview. Fail fast before we route
      // back into a sub-flow that would only block at the inner launch.
      if (!isFactoryFacility(facility) && currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }
      // Consume the between-rounds unlock flag so the team re-locks as
      // soon as the player commits to the next round preview.
      if (run) run.roundJustCleared = false;
      // Pike: re-snapshot team in case the player edited between rounds.
      if (isPikeFacility(facility)) initPikeTeamFromPreview();
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else if (isPikeFacility(facility)) openPikeRoomPreview(facility);
      else if (isFactoryFacility(facility) && !run.factoryTeam) {
        // No rentals yet for this round — open selection modal.
        openFactoryRentalSelection(facility);
      }
      else if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      else openSimulatedFight(facility);
      return;
    }
    if (action === "pike-next") {
      // Pyramid reuses the Pike heal/trap event modals — after the
      // player clicks "Next", route back to the floor map instead of
      // advancing a Pike room.
      if (isPyramidFacility(facility)) {
        pyramidAfterEvent(facility);
        return;
      }
      pikeAdvanceAfterEvent(facility);
      return;
    }
    // Round-cleared modal: "Continue" validates the team size (the player
    // may have edited it while paused), re-snapshots Pike team so HP+status
    // start clean from the current preview team, then opens the next-round
    // preview appropriate to the facility.
    if (action === "round-continue") {
      // Factory skips the size check — rentals are assigned by us, not
      // the player's preview team.
      if (!isFactoryFacility(facility) && currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }
      // Consume the between-rounds unlock flag — from this point the
      // team is committed to the upcoming round and locked again.
      if (run) run.roundJustCleared = false;
      if (isPikeFacility(facility) || isPyramidFacility(facility)) {
        // Both Pike and Pyramid share the runTeam structure for HP/status
        // persist — re-snapshot in case the player edited between rounds.
        initPikeTeamFromPreview();
      }
      if (isFactoryFacility(facility)) {
        restoreFactoryMoves(run);
        run.factoryPool = null;
        run.factorySelection = [];
        run.factoryTeam = null;
      }
      if (isPyramidFacility(facility)) {
        // New round → regenerate floor 1 from scratch.
        run.pyramid = null;
      }
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else if (isPikeFacility(facility)) openPikeRoomPreview(facility);
      else if (isFactoryFacility(facility)) openFactoryRentalSelection(facility);
      else if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      else openSimulatedFight(facility);
      return;
    }
    // Factory-specific: player confirms the 3 rentals out of 6.
    if (action === "factory-confirm") {
      confirmFactorySelection(facility);
      return;
    }
    // Factory-specific: post-battle swap modal actions.
    if (action === "factory-swap-confirm") {
      confirmFactorySwap(facility);
      return;
    }
    if (action === "factory-swap-skip") {
      if (run) {
        run.pendingFactorySwap = null;
        run.factorySwapSelection = [null, null];
      }
      openSimulatedFight(facility);
      return;
    }
    if (action === "abandon") {
      if (run) {
        const finalRound = run.round;
        if (finalRound > (saved.frontierExt.maxStreaks[facility.id] || 0)) {
          saved.frontierExt.maxStreaks[facility.id] = finalRound;
        }
        // Factory: restore original preview slot + move overrides BEFORE
        // clearing activeRun, otherwise we lose the stash reference.
        if (isFactoryFacility(facility)) cleanupFactoryRun(run);
        if (isPyramidFacility(facility)) {
          try { setPyramidModalSizing(false); } catch (e) { /* ignore */ }
          run.pyramid = null;
        }
      }
      saved.frontierExt.activeRun = null;
      // Team stays unlocked now that the challenge is over.
      try { removeFrontierTeamLock(); } catch (e) { /* ignore */ }
      if (typeof updateFrontier === "function") updateFrontier();
      if (typeof closeTooltip === "function") closeTooltip();
      return;
    }
    if (action === "back") {
      openFacilityPreview(facility);
      return;
    }
    if (action === "launch") {
      // Team-size check happens HERE for both Dôme and non-Dôme so the
      // error path never leaves the team in a mutated state. Dôme needs
      // 3 Pokémon to START — the pick-2 modal comes next.
      if (currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }
      if (isDomeFacility(facility)) {
        openDomePokemonSelection(facility);
        return;
      }
      launchCombat(facility);
      return;
    }
    if (action === "confirm-dome") {
      // Team already validated at "launch" — apply the 2-of-3 mutation
      // and fire combat. launchCombat skips its own size check when a
      // dome selection is already applied.
      const r = saved.frontierExt.activeRun;
      if (!r || !Array.isArray(r.domeSelection) || r.domeSelection.length !== DOME_ACTIVE_SIZE) return;
      applyDomeSelection();
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
          <span class="label">${t.silverAt} (${t.round} ${silverRoundFor(facility)}):</span>
          <span class="value">${teamSilverStr}</span>
          <span class="label">${t.goldAt} (${t.round} ${goldRoundFor(facility)}):</span>
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

  // ─── 6b2a. ARENA RULE — 3 turns max, judges pick the winner ─────────────
  // Canonical Gen 3 Emerald Battle Arena:
  //   • Each battle lasts at most 3 turns per side. If neither side is KO'd
  //     by then, a panel of judges decides the winner based on 3 criteria:
  //       - Mind  (Esprit)    : aggression — how many offensive moves used
  //       - Skill (Technique) : efficiency — damage dealt ratio
  //       - Body  (Corps)     : durability — remaining HP %
  //   • Winner of 2/3 criteria wins. 3-way tie → HP is the tiebreaker.
  //   • 7 battles per round like Tower/Palace/Factory (declared in the
  //     facility def). The judge verdict forces a KO so the game's own
  //     victory/defeat plumbing fires — no custom combat-end code needed.
  const ARENA_TURNS_PER_SIDE = 3;

  function isArenaFacility(facility) {
    return !!(facility && facility.rules && facility.rules.threeTurnJudge);
  }
  function isInArenaRun() {
    if (typeof saved !== "object" || !saved) return false;
    if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
    if (saved.currentArea !== RUN_AREA_ID) return false;
    const facility = FACILITIES.find((f) => f.id === saved.frontierExt.activeRun.facilityId);
    return isArenaFacility(facility);
  }

  // Per-matchup metrics stored on the active run. Each "matchup" is one
  // player-active vs one enemy-active encounter. Counters reset every
  // time either side's active Pokémon changes (KO-switch, judge-forced
  // KO, etc.), so a 3-Pokémon-vs-3 combat produces up to 3 judge events.
  function arenaFreshMatchupCounters() {
    return {
      playerMoves: 0,
      enemyMoves: 0,
      playerDamage: 0,
      enemyDamage: 0,
      playerAttacks: 0,
      enemyAttacks: 0,
      judgeFired: false,
    };
  }
  function arenaResetState() {
    if (!saved || !saved.frontierExt || !saved.frontierExt.activeRun) return;
    saved.frontierExt.activeRun.arenaState = {
      ...arenaFreshMatchupCounters(),
      lastPlayerSlot: null,
      lastEnemySlot: null,
      matchupCount: 0,      // how many matchups opened in this combat
      judgesFired: 0,       // how many judge verdicts fired
      judgeFiring: false,   // true during the 3s verdict pause (freezes combat)
    };
  }
  function arenaGetState() {
    return saved && saved.frontierExt && saved.frontierExt.activeRun
      ? saved.frontierExt.activeRun.arenaState
      : null;
  }

  // Reset only the per-matchup counters without touching the higher-level
  // matchup/judge tallies. Used when a new matchup starts.
  function arenaResetMatchup(state) {
    state.playerMoves = 0;
    state.enemyMoves = 0;
    state.playerDamage = 0;
    state.enemyDamage = 0;
    state.playerAttacks = 0;
    state.enemyAttacks = 0;
    state.judgeFired = false;
  }

  // Read the currently-active member ids on both sides. Script-scope
  // `let` bindings so we need indirect eval.
  function arenaReadActiveSlots() {
    const globalEval = eval;
    let playerSlot = null, enemySlot = null;
    try { playerSlot = globalEval("typeof exploreActiveMember === 'undefined' ? null : exploreActiveMember"); } catch (e) {}
    try { enemySlot = globalEval("typeof currentTrainerSlot === 'undefined' ? 1 : currentTrainerSlot"); } catch (e) {}
    return { playerSlot, enemySlot };
  }

  // Per-matchup HP ratios: the player's CURRENT ACTIVE vs the enemy's
  // CURRENT ACTIVE. Body criterion compares just these two, not totals
  // across the whole team — the judge fires per-matchup so "50% HP left
  // on my active" is what matters, not my bench.
  function arenaReadHpRatios() {
    const globalEval = eval;
    let wildHp = 0, wildMax = 0;
    try {
      wildHp = Number(globalEval("typeof wildPkmnHp === 'undefined' ? 0 : wildPkmnHp")) || 0;
      wildMax = Number(globalEval("typeof wildPkmnHpMax === 'undefined' ? 0 : wildPkmnHpMax")) || 0;
    } catch (e) { /* ignore */ }

    let playerHp = 0, playerMax = 0;
    try {
      const { playerSlot } = arenaReadActiveSlots();
      if (playerSlot && typeof team !== "undefined" && team[playerSlot] && team[playerSlot].pkmn
          && typeof pkmn !== "undefined") {
        const p = pkmn[team[playerSlot].pkmn.id];
        if (p && p.playerHpMax) {
          playerHp = Math.max(0, p.playerHp || 0);
          playerMax = p.playerHpMax;
        }
      }
    } catch (e) { /* ignore */ }

    return {
      playerRatio: playerMax > 0 ? playerHp / playerMax : 0,
      enemyRatio:  wildMax > 0  ? Math.max(0, wildHp) / wildMax  : 0,
      wildHp, wildMax, playerHp, playerMax,
    };
  }

  // Verdict UI — drops a temporary overlay at the top of the combat screen
  // so the player sees the 3-criterion breakdown before the normal
  // post-combat screen fires. Auto-removes after 4 seconds.
  function showArenaVerdict(playerWins, scores, hpRatios) {
    try {
      const lang = window.gameLang === "fr" ? "fr" : "en";
      const l = lang === "fr"
        ? { title: playerWins ? "⚖️ Jury : Victoire !" : "⚖️ Jury : Défaite",
            mind: "Esprit", skill: "Technique", body: "Corps",
            you: "Toi", them: "Adversaire" }
        : { title: playerWins ? "⚖️ Judges: Victory!" : "⚖️ Judges: Loss",
            mind: "Mind", skill: "Skill", body: "Body",
            you: "You", them: "Opponent" };
      const row = (label, pWon, pVal, eVal) => `
        <div class="row">
          <span class="label">${label}</span>
          <span class="${pWon ? "win" : "lose"}">${l.you} ${pVal}</span>
          <span class="${pWon ? "lose" : "win"}">${l.them} ${eVal}</span>
        </div>`;
      const pct = (r) => Math.round(r * 100) + "%";
      const host = document.createElement("div");
      host.className = "frontier-ext-arena-verdict " + (playerWins ? "win" : "lose");
      host.innerHTML = `
        <div class="title">${l.title}</div>
        <div class="rows">
          ${row(l.mind, scores.mindPlayerWins, scores.playerAttacks, scores.enemyAttacks)}
          ${row(l.skill, scores.skillPlayerWins, scores.playerDamage + " HP", scores.enemyDamage + " HP")}
          ${row(l.body, scores.bodyPlayerWins, pct(hpRatios.playerRatio), pct(hpRatios.enemyRatio))}
        </div>
      `;
      document.body.appendChild(host);
      // Force reflow then animate in
      requestAnimationFrame(() => host.classList.add("show"));
      setTimeout(() => {
        host.classList.remove("show");
        setTimeout(() => { try { host.remove(); } catch (e) {} }, 400);
      }, 4000);
    } catch (e) { console.error("[frontier-ext] arena verdict overlay failed:", e); }
  }

  const ARENA_PAUSE_MS = 3000; // verdict display + combat freeze window

  // Compute per-matchup scores, show verdict overlay, freeze the combat
  // for ARENA_PAUSE_MS, then KO ONLY the loser's active Pokémon. The
  // game's own switchMemberNext / trainer-slot-advance logic then pulls
  // in the next combatant and the counters reset.
  function arenaRenderJudge() {
    const state = arenaGetState();
    if (!state || state.judgeFired || state.judgeFiring) return;
    state.judgeFired = true;
    state.judgeFiring = true;
    state.judgesFired = (state.judgesFired || 0) + 1;

    const hp = arenaReadHpRatios();
    const bodyPlayerWins  = hp.playerRatio  > hp.enemyRatio;
    const skillPlayerWins = state.playerDamage  > state.enemyDamage;
    const mindPlayerWins  = state.playerAttacks > state.enemyAttacks;

    let playerScore = 0;
    if (bodyPlayerWins)  playerScore++;
    if (skillPlayerWins) playerScore++;
    if (mindPlayerWins)  playerScore++;
    // Strict 2/3, with Body as the tiebreaker if it's the ONLY criterion won.
    const playerWins = playerScore >= 2 || (playerScore === 1 && bodyPlayerWins);

    showArenaVerdict(playerWins, {
      ...state,
      bodyPlayerWins, skillPlayerWins, mindPlayerWins,
    }, hp);

    // Freeze combat ticks during the pause, then deliver the KO + reset.
    const globalEval = eval;
    setTimeout(() => {
      try {
        if (playerWins) {
          // Enemy's active Pokémon only (wild HP goes to 0, game's own
          // trainer-slot-advance handles pulling the next mon in).
          globalEval("wildPkmnHp = 0");
          if (typeof updateWildPkmn === "function") updateWildPkmn();
        } else {
          // Player's CURRENT active only — not the bench.
          const { playerSlot } = arenaReadActiveSlots();
          if (playerSlot && typeof team !== "undefined" && team[playerSlot]
              && team[playerSlot].pkmn && typeof pkmn !== "undefined") {
            pkmn[team[playerSlot].pkmn.id].playerHp = 0;
          }
          if (typeof updateTeamPkmn === "function") updateTeamPkmn();
        }
      } catch (e) { console.error("[frontier-ext] arena force-KO failed:", e); }

      // Reset matchup counters. The active-slot change detection in the
      // combat hooks will also catch the switch — this is belt+braces.
      arenaResetMatchup(state);
      state.judgeFiring = false;
    }, ARENA_PAUSE_MS);
  }

  // Judge trigger: wait for BOTH actives to have completed 3 moves.
  // A "tour d'attaque" = a full round where each side acted once;
  // 3 tours = both sides have moved 3 times each. The speed team may
  // hit 3 moves first but has to wait for the opponent's 3 before the
  // verdict — speed doesn't buy extra attack count for the judge.
  //
  // A KO before either side reaches 3 moves skips the judge entirely
  // (the downed Pokémon isn't "noted"): the game's own switch-to-next
  // logic runs, a new matchup opens, counters reset. Losing 3 Pokémon
  // = combat over in the usual way, judgment or not.
  function arenaCheckJudge() {
    const state = arenaGetState();
    if (!state || state.judgeFired || state.judgeFiring) return;
    const bothCompleted = state.playerMoves >= ARENA_TURNS_PER_SIDE
                       && state.enemyMoves  >= ARENA_TURNS_PER_SIDE;
    if (!bothCompleted) return;
    const hp = arenaReadHpRatios();
    if (hp.wildHp <= 0 || hp.playerHp <= 0) return;
    arenaRenderJudge();
  }

  // Wrap exploreCombatPlayer + exploreCombatWild to count moves, damage
  // and offensive-move shares per side. Identical structure to the Palace
  // hook: pre-orig snapshot, post-orig diff.
  function installArenaCombatHooks() {
    if (typeof window.exploreCombatPlayer !== "function"
     || typeof window.exploreCombatWild !== "function") {
      setTimeout(installArenaCombatHooks, 200);
      return;
    }
    if (window.__arenaHookInstalled) return;
    window.__arenaHookInstalled = true;

    const globalEval = eval;
    const readWildHp = () => { try { return Number(globalEval("typeof wildPkmnHp === 'undefined' ? 0 : wildPkmnHp")) || 0; } catch (e) { return 0; } };
    const readWildTurn = () => { try { return globalEval("typeof exploreCombatWildTurn === 'undefined' ? null : exploreCombatWildTurn"); } catch (e) { return null; } };
    const readTrainerSlot = () => { try { return globalEval("typeof currentTrainerSlot === 'undefined' ? 1 : currentTrainerSlot"); } catch (e) { return 1; } };

    // Called at the start of both hooks to reset per-matchup counters
    // when either side's active Pokémon changes (KO-switch or judge-forced
    // KO). Returns the state for downstream use, or null if not in arena.
    const detectMatchupChange = () => {
      const state = arenaGetState();
      if (!state) return null;
      const { playerSlot, enemySlot } = arenaReadActiveSlots();
      if (state.lastPlayerSlot === null && state.lastEnemySlot === null) {
        // First tick of this combat — record the initial matchup.
        state.lastPlayerSlot = playerSlot;
        state.lastEnemySlot = enemySlot;
        state.matchupCount = 1;
        return state;
      }
      if (playerSlot !== state.lastPlayerSlot || enemySlot !== state.lastEnemySlot) {
        // New matchup — reset per-matchup counters, bump matchup counter.
        arenaResetMatchup(state);
        state.lastPlayerSlot = playerSlot;
        state.lastEnemySlot = enemySlot;
        state.matchupCount = (state.matchupCount || 0) + 1;
      }
      return state;
    };

    // Damage-per-side HP reader for the enemy side (single active mon).
    const readPlayerActiveHp = () => {
      try {
        const { playerSlot } = arenaReadActiveSlots();
        if (!playerSlot || typeof team === "undefined" || !team[playerSlot]
            || !team[playerSlot].pkmn || typeof pkmn === "undefined") return 0;
        const p = pkmn[team[playerSlot].pkmn.id];
        return p ? Math.max(0, p.playerHp || 0) : 0;
      } catch (e) { return 0; }
    };

    // ── Player side: detect when team[active].turn changes → 1 move fired.
    const origPlayer = window.exploreCombatPlayer;
    window.exploreCombatPlayer = function () {
      const arenaActive = isInArenaRun();
      // During the verdict pause, freeze combat entirely — skip orig.
      if (arenaActive) {
        const s = arenaGetState();
        if (s && s.judgeFiring) return;
      }
      let active = null, prevTurn = null, prevWildHp = null;
      if (arenaActive && typeof exploreActiveMember !== "undefined") {
        detectMatchupChange();
        active = team[exploreActiveMember];
        prevTurn = active ? active.turn : null;
        prevWildHp = readWildHp();
      }
      const res = origPlayer.apply(this, arguments);
      if (arenaActive && active) {
        const newTurn = active.turn;
        if (newTurn !== prevTurn && newTurn !== null && newTurn !== undefined) {
          const state = arenaGetState();
          if (state && !state.judgeFiring) {
            state.playerMoves++;
            const postWildHp = readWildHp();
            state.playerDamage += Math.max(0, (prevWildHp || 0) - postWildHp);
            try {
              const p = pkmn[active.pkmn.id];
              const moveKey = p && p.moves && p.moves["slot" + prevTurn];
              if (moveKey && move[moveKey] && move[moveKey].power && move[moveKey].power > 0) {
                state.playerAttacks++;
              }
            } catch (e) { /* ignore */ }
            arenaCheckJudge();
          }
        }
      }
      return res;
    };

    // ── Enemy side: detect when exploreCombatWildTurn changes.
    const origWild = window.exploreCombatWild;
    window.exploreCombatWild = function () {
      const arenaActive = isInArenaRun();
      if (arenaActive) {
        const s = arenaGetState();
        if (s && s.judgeFiring) return;
      }
      let prevWildTurn = null, prevPlayerHp = 0;
      if (arenaActive) {
        detectMatchupChange();
        prevWildTurn = readWildTurn();
        prevPlayerHp = readPlayerActiveHp();
      }
      const res = origWild.apply(this, arguments);
      if (arenaActive) {
        const newWildTurn = readWildTurn();
        if (newWildTurn !== prevWildTurn && newWildTurn !== null && newWildTurn !== undefined) {
          const state = arenaGetState();
          if (state && !state.judgeFiring) {
            state.enemyMoves++;
            const postPlayerHp = readPlayerActiveHp();
            state.enemyDamage += Math.max(0, prevPlayerHp - postPlayerHp);
            try {
              const area = areas[RUN_AREA_ID];
              const slotIdx = readTrainerSlot();
              const moves = area && area.team && area.team["slot" + slotIdx + "Moves"];
              const moveKey = moves && moves[prevWildTurn - 1];
              if (moveKey && move[moveKey] && move[moveKey].power && move[moveKey].power > 0) {
                state.enemyAttacks++;
              }
            } catch (e) { /* ignore */ }
            arenaCheckJudge();
          }
        }
      }
      return res;
    };
  }

  // ─── 6b2b. FACTORY RULE — rental pool, pick 3 of 6, no preview team ─────
  // Canonical Gen 3 Emerald Battle Factory:
  //   • Each round opens with a fresh pool of 6 random rentals.
  //   • Player picks 3 as their team for the round — they do NOT use
  //     their own Pokémon. The rentals' movesets are generated via the
  //     same pickMovesetFor pipeline as NPC trainers.
  //   • 7 battles per round (declared in facility.battlesPerRound).
  //   • Between rounds a fresh pool of 6 is rolled and the selection
  //     modal opens again.
  //   • Phase 2 (not yet implemented): after each win, an option to
  //     swap one of your 3 with one of the defeated's 3.
  const FACTORY_POOL_SIZE = 6;
  const FACTORY_TEAM_SIZE = 3;
  const FACTORY_PREVIEW_SLOT = "__frontierExtFactory";

  function isFactoryFacility(facility) {
    return !!(facility && facility.rules && facility.rules.rentalPool);
  }

  // The 7 natures Pokechill exposes (matching natureDictionary). "" is
  // the neutral slot — no stat change.
  const FACTORY_RENTAL_NATURES = ["adamant", "modest", "jolly", "relaxed", "quiet", "bold", ""];

  // Random 0-6 IV. Pokechill's IV scale is 0 to 6 (see teams.js:521+ and
  // the game's pkmn init at pkmnDictionary.js:20195).
  function rollFactoryIv() { return Math.floor(Math.random() * 7); }

  function rollFactoryIvs() {
    return {
      hp: rollFactoryIv(),
      atk: rollFactoryIv(),
      def: rollFactoryIv(),
      satk: rollFactoryIv(),
      sdef: rollFactoryIv(),
      spe: rollFactoryIv(),
    };
  }

  // Pick a random ability for this species from the game's global
  // ability dict. Uses `learnPkmnAbility(id)` when available (canonical
  // type-weighted picker), else falls back to a random key.
  function rollFactoryAbility(id) {
    if (typeof pkmn === "undefined" || !pkmn[id]) return null;
    if (typeof learnPkmnAbility === "function") {
      try {
        const picked = learnPkmnAbility(id);
        if (picked) return picked;
      } catch (e) { /* fall through */ }
    }
    // Fallback: pick the hidden ability id if defined, else null.
    const h = pkmn[id].hiddenAbility;
    return h ? (h.id || null) : null;
  }

  // Tier-scaled pool of FACTORY_POOL_SIZE unique rentals. Uses the same
  // tier-by-round curve as generateTrainer AND the same
  // getPoolForFacility narrowing — so player and enemy start from a
  // balanced weak pool in rounds 1-3, then the whole tier opens up.
  //
  // CRITICAL: each rental gets its own randomised nature / IVs / ability
  // — completely independent of the user's own pkmn[id] state. This
  // means the user can never "get lucky" on a species they've trained
  // to S-tier IVs; rentals are always freshly rolled stat blocks.
  function generateFactoryRentalPool(facility, round) {
    const mult = difficultyMultiplier(round, facility);
    const gold = goldRoundFor(facility);
    let tier = 1;
    if (round >= 3) tier = 2;
    if (round >= 6) tier = 3;
    if (round > gold) tier = 4;
    if (mult >= 3) tier = 5;

    const pool = getPoolForFacility(facility, tier, round);

    const rentals = [];
    const used = new Set();
    let safety = 0;
    while (rentals.length < FACTORY_POOL_SIZE && safety < 100) {
      safety++;
      const id = pool[Math.floor(Math.random() * pool.length)];
      if (!id || used.has(id)) continue; // no duplicate species in the pool
      used.add(id);
      rentals.push({
        id,
        moves: pickMovesetFor(id),
        nature: FACTORY_RENTAL_NATURES[Math.floor(Math.random() * FACTORY_RENTAL_NATURES.length)],
        ivs: rollFactoryIvs(),
        ability: rollFactoryAbility(id),
      });
    }
    return rentals;
  }

  // Temporarily override a rental's full stat block on the shared
  // `pkmn[id]` entry — moves, nature, IVs, ability — so the combat
  // engine reads the RENTAL's randomised spec and never the user's own
  // trained Pokémon of the same species. Originals are stashed on
  // run.factoryOriginalState so we can fully restore at round-end /
  // run-end (even if the user never caught that species originally, we
  // record `undefined` and restore back to `undefined`).
  function applyFactoryMoves(run) {
    if (!run || !run.factoryTeam || typeof pkmn === "undefined") return;
    if (!run.factoryOriginalState) run.factoryOriginalState = {};
    for (const rental of run.factoryTeam) {
      const p = pkmn[rental.id];
      if (!p) continue;
      if (!run.factoryOriginalState[rental.id]) {
        run.factoryOriginalState[rental.id] = {
          moves: p.moves ? { ...p.moves } : undefined,
          nature: p.nature,
          ivs: p.ivs ? { ...p.ivs } : undefined,
          ability: p.ability,
        };
      }
      p.moves = {
        slot1: rental.moves[0],
        slot2: rental.moves[1],
        slot3: rental.moves[2],
        slot4: rental.moves[3],
      };
      p.nature = rental.nature || "";
      p.ivs = { ...rental.ivs };
      p.ability = rental.ability || undefined;
    }
  }
  function restoreFactoryMoves(run) {
    if (!run || !run.factoryOriginalState || typeof pkmn === "undefined") return;
    for (const [id, orig] of Object.entries(run.factoryOriginalState)) {
      if (!pkmn[id]) continue;
      pkmn[id].moves = orig.moves;
      pkmn[id].nature = orig.nature;
      pkmn[id].ivs = orig.ivs;
      pkmn[id].ability = orig.ability;
    }
    run.factoryOriginalState = {};
  }

  // Switch the active previewTeam slot to the private Factory slot so
  // the combat engine uses rentals. The user's current slot is stashed
  // and restored when the run ends.
  //
  // NOTE: teams.js:461 iterates `for (const slot in team)` which spans
  // all six slots — so EVERY slot key must exist on the preview team
  // (as at least `{ pkmn: undefined, item: undefined }`) or the game
  // crashes with "Cannot read properties of undefined (reading 'pkmn')".
  // We fill the unused slots 4/5/6 with empty stubs for this reason.
  function enterFactoryPreviewSlot(run) {
    if (!run.factoryOriginalPreviewSlot) {
      run.factoryOriginalPreviewSlot = saved.currentPreviewTeam;
    }
    if (!saved.previewTeams[FACTORY_PREVIEW_SLOT]) {
      saved.previewTeams[FACTORY_PREVIEW_SLOT] = {};
    }
    const pt = saved.previewTeams[FACTORY_PREVIEW_SLOT];
    // Ensure every one of the 6 slots exists as an object so the game's
    // injectPreviewTeam loop can safely read `.pkmn` / `.item` on each.
    for (const sl of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
      pt[sl] = { pkmn: undefined, item: undefined };
    }
    run.factoryTeam.forEach((rental, i) => {
      pt["slot" + (i + 1)] = { pkmn: rental.id, item: undefined };
    });
    saved.currentPreviewTeam = FACTORY_PREVIEW_SLOT;
    run.tiedPreviewSlot = FACTORY_PREVIEW_SLOT;
  }
  function restoreFactoryPreviewSlot(run) {
    if (run && run.factoryOriginalPreviewSlot) {
      if (saved.currentPreviewTeam === FACTORY_PREVIEW_SLOT) {
        saved.currentPreviewTeam = run.factoryOriginalPreviewSlot;
      }
      run.factoryOriginalPreviewSlot = null;
    }
    // Wipe the private slot (nothing valuable to keep).
    if (saved.previewTeams && saved.previewTeams[FACTORY_PREVIEW_SLOT]) {
      const pt = saved.previewTeams[FACTORY_PREVIEW_SLOT];
      for (const sl of Object.keys(pt)) delete pt[sl];
    }
  }

  // Full cleanup called at abandon / defeat / run-end.
  function cleanupFactoryRun(run) {
    try { restoreFactoryMoves(run); } catch (e) { /* ignore */ }
    try { restoreFactoryPreviewSlot(run); } catch (e) { /* ignore */ }
    try { setFactoryModalSizing(false); } catch (e) { /* ignore */ }
    if (run) {
      run.factoryPool = null;
      run.factorySelection = null;
      run.factoryTeam = null;
    }
  }

  // Add / remove the "factory modal open" class on #tooltipBox AND its
  // parent #tooltipBackground so the modal gets an enlarged viewport
  // AND the vanilla close button can be restyled (top-right small pill
  // instead of the default mid-center button that overlaps the action
  // row). Class cleared every time we navigate away from the rental
  // screen.
  function setFactoryModalSizing(on) {
    const box = document.getElementById("tooltipBox");
    const bg = document.getElementById("tooltipBackground");
    if (on) {
      if (box) box.classList.add("frontier-ext-factory-open");
      if (bg)  bg.classList.add("frontier-ext-factory-open");
    } else {
      if (box) box.classList.remove("frontier-ext-factory-open");
      if (bg)  bg.classList.remove("frontier-ext-factory-open");
    }
  }

  // ── UI: Rental selection modal ─────────────────────────────────────────
  function openFactoryRentalSelection(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = window.gameLang === "fr" ? "fr" : "en";
    setFactoryModalSizing(true);

    // Generate (or keep cached) pool for this round.
    if (!Array.isArray(run.factoryPool) || run.factoryPool.length !== FACTORY_POOL_SIZE) {
      run.factoryPool = generateFactoryRentalPool(facility, run.round + 1);
      run.factorySelection = [];
    }
    if (!Array.isArray(run.factorySelection)) run.factorySelection = [];

    const t = lang === "fr"
      ? {
          title: "Location de Pokémon",
          subtitle: "Choisis 3 Pokémon parmi les 6 proposés. Cette équipe te suivra pour les 7 combats du round.",
          pickN: "Sélection : {n}/3",
          confirm: "⚔️ Confirmer et commencer",
          cancel: "Retour",
          abandon: "Abandonner",
          noItem: "Aucun objet",
        }
      : {
          title: "Rental Pokémon",
          subtitle: "Pick 3 out of 6. This team fights through all 7 battles of the round.",
          pickN: "Selected: {n}/3",
          confirm: "⚔️ Confirm & start",
          cancel: "Back",
          abandon: "Abandon",
          noItem: "No item",
        };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) top.style.display = "none";
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${lang === "fr" ? facility.nameFr : facility.nameEn} — ${t.title}`;
    }

    const renderCards = () => {
      const ivLabels = lang === "fr"
        ? { hp: "PV", atk: "Atk", def: "Déf", satk: "AtS", sdef: "DéS", spe: "Vit" }
        : { hp: "HP", atk: "Atk", def: "Def", satk: "SAtk", sdef: "SDef", spe: "Spe" };
      const neutralLabel = lang === "fr" ? "Neutre" : "Neutral";
      const ivTier = (v) => v <= 2 ? "low" : v <= 4 ? "mid" : "high";
      // Pokechill ships a global returnTypeColor(type) helper — used
      // to accent each move chip with its type colour.
      const typeColor = (t) => (typeof returnTypeColor === "function")
        ? returnTypeColor(t) : "#888";

      const cards = run.factoryPool.map((rental, idx) => {
        const selected = run.factorySelection.indexOf(idx) !== -1;
        const pickPos = run.factorySelection.indexOf(idx);
        const monName = typeof format === "function" ? format(rental.id) : rental.id;
        const natureLabel = rental.nature
          ? (typeof format === "function" ? format(rental.nature) : rental.nature)
          : neutralLabel;
        const abilityLabel = rental.ability
          ? (typeof format === "function" ? format(rental.ability) : rental.ability)
          : "—";

        const iv = rental.ivs || {};
        const ivRow = (k) => {
          const v = Math.max(0, Math.min(6, (iv[k] | 0)));
          const pct = (v / 6) * 100;
          return `
            <div class="iv-row">
              <span class="iv-label">${ivLabels[k]}</span>
              <div class="iv-bar"><div class="iv-bar-fill ${ivTier(v)}" style="width:${pct}%"></div></div>
              <span class="iv-value">${v}</span>
            </div>`;
        };
        const ivsBlock = `
          <div class="ivs">
            ${ivRow("hp")}${ivRow("atk")}${ivRow("def")}
            ${ivRow("satk")}${ivRow("sdef")}${ivRow("spe")}
          </div>`;

        const movesList = rental.moves.map((k) => {
          const label = typeof format === "function" ? format(k) : k;
          const mv = typeof move !== "undefined" ? move[k] : null;
          const tCol = mv ? typeColor(mv.type) : "#888";
          return `<span class="move" style="--move-type:${tCol}">${label}</span>`;
        }).join("");

        return `
          <div class="frontier-ext-factory-card ${selected ? "selected" : ""}" data-idx="${idx}">
            <div class="card-header">
              <img src="img/pkmn/sprite/${rental.id}.png" alt="${monName}" class="sprite">
              <div class="title-block">
                <div class="name">${monName}</div>
                <div class="tags">
                  <span class="tag-nature">${natureLabel}</span>
                  <span class="tag-ability">${abilityLabel}</span>
                </div>
              </div>
              ${selected ? `<div class="pick-badge">${pickPos + 1}</div>` : ""}
            </div>
            ${ivsBlock}
            <div class="moves">${movesList}</div>
          </div>
        `;
      }).join("");
      return cards;
    };

    const canConfirm = run.factorySelection.length === FACTORY_TEAM_SIZE;

    if (mid) {
      mid.style.display = "block";
      // Confirm button moved inside mid (right after the counter) so
      // it's always visible — the 6-card grid is tall enough that a
      // button placed in tooltipBottom can end up below the fold.
      mid.innerHTML = `
        <div class="frontier-ext-factory-subtitle">${t.subtitle}</div>
        <div class="frontier-ext-factory-grid">${renderCards()}</div>
        <div class="frontier-ext-factory-counter">${t.pickN.replace("{n}", run.factorySelection.length)}</div>
        <div class="frontier-ext-factory-actions">
          <button class="frontier-ext-action-btn primary ${canConfirm ? "" : "disabled"}" data-action="factory-confirm">${t.confirm}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      mid.querySelectorAll(".frontier-ext-factory-card").forEach((el) => {
        el.addEventListener("click", () => toggleFactorySelection(parseInt(el.dataset.idx, 10), facility));
      });
      mid.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => {
          if (btn.classList.contains("disabled")) return;
          handleRunAction(btn.dataset.action, facility);
        };
      });
    }

    // Tooltip bottom left empty — action buttons are inline in mid.
    if (bottom) {
      bottom.style.display = "none";
      bottom.innerHTML = "";
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function toggleFactorySelection(idx, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.factoryPool)) return;
    if (!Array.isArray(run.factorySelection)) run.factorySelection = [];
    const pos = run.factorySelection.indexOf(idx);
    if (pos !== -1) {
      // Unselect
      run.factorySelection.splice(pos, 1);
    } else {
      if (run.factorySelection.length >= FACTORY_TEAM_SIZE) return; // cap
      run.factorySelection.push(idx);
    }
    openFactoryRentalSelection(facility); // re-render
  }

  // Confirm selection → freeze team, override moves, switch preview slot,
  // and fire combat directly (no team-preview menu — rentals are chosen
  // already via the modal).
  function confirmFactorySelection(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.factorySelection)) return;
    if (run.factorySelection.length !== FACTORY_TEAM_SIZE) return;

    // Freeze the picked rentals.
    run.factoryTeam = run.factorySelection.map((i) => run.factoryPool[i]);

    // Runtime setup.
    enterFactoryPreviewSlot(run);
    applyFactoryMoves(run);

    // Modal will be replaced by the combat-launch team-menu — reset our
    // oversized-modal class so nothing else inherits it.
    setFactoryModalSizing(false);

    // Fire combat through the normal launchCombat path. The private
    // preview slot + tied-slot lock ensure the team-menu UI shows the
    // rentals and blocks edits. Player clicks "Save and Go" normally.
    launchCombat(facility);
  }

  // ── Factory swap modal ─────────────────────────────────────────────
  // Shown after every mid-round Factory victory. Presents the defeated
  // opponent's 3 rentals + the player's 3 current rentals. Player picks
  // one from each side to trade, or skips. Click the Confirm button to
  // apply the swap, or Skip to proceed without trading.
  function openFactorySwapModal(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    if (!Array.isArray(run.pendingFactorySwap) || !Array.isArray(run.factoryTeam)) {
      // Nothing to swap — just go straight to next battle preview.
      openSimulatedFight(facility);
      return;
    }
    const lang = window.gameLang === "fr" ? "fr" : "en";
    setFactoryModalSizing(true);

    if (!Array.isArray(run.factorySwapSelection)) run.factorySwapSelection = [null, null];
    // [takeIdx, giveIdx] — idx into pendingFactorySwap and factoryTeam.

    const t = lang === "fr"
      ? {
          title: "Échange post-combat",
          subtitle: "Tu as vaincu ! Tu peux échanger un de tes Pokémon contre un de l'adversaire, ou passer.",
          opponentTeam: "Adversaire vaincu",
          yourTeam: "Ton équipe actuelle",
          confirm: "🔄 Confirmer l'échange",
          skip: "Passer — garder mon équipe",
          pickBoth: "Choisis un Pokémon de chaque côté pour échanger.",
        }
      : {
          title: "Post-battle swap",
          subtitle: "You won! You may trade one of your Pokémon with one of your opponent's, or skip.",
          opponentTeam: "Defeated opponent",
          yourTeam: "Your current team",
          confirm: "🔄 Confirm swap",
          skip: "Skip — keep my team",
          pickBoth: "Pick one Pokémon from each side to swap.",
        };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) top.style.display = "none";
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${lang === "fr" ? facility.nameFr : facility.nameEn} — ${t.title}`;
    }

    const renderCard = (rental, side, idx, isSelected) => {
      const monName = typeof format === "function" ? format(rental.id) : rental.id;
      const natureLabel = rental.nature
        ? (typeof format === "function" ? format(rental.nature) : rental.nature)
        : (lang === "fr" ? "Neutre" : "Neutral");
      const abilityLabel = rental.ability
        ? (typeof format === "function" ? format(rental.ability) : rental.ability)
        : "—";
      const typeColor = (ty) => (typeof returnTypeColor === "function") ? returnTypeColor(ty) : "#888";
      const moves = (rental.moves || []).map((k) => {
        const label = typeof format === "function" ? format(k) : k;
        const mv = typeof move !== "undefined" ? move[k] : null;
        const tCol = mv ? typeColor(mv.type) : "#888";
        return `<span class="move" style="--move-type:${tCol}">${label}</span>`;
      }).join("");
      const iv = rental.ivs || {};
      const ivTier = (v) => v <= 2 ? "low" : v <= 4 ? "mid" : "high";
      const ivLabels = lang === "fr"
        ? { hp: "PV", atk: "Atk", def: "Déf", satk: "AtS", sdef: "DéS", spe: "Vit" }
        : { hp: "HP", atk: "Atk", def: "Def", satk: "SAtk", sdef: "SDef", spe: "Spe" };
      const ivRow = (k) => {
        const v = Math.max(0, Math.min(6, (iv[k] | 0)));
        return `<div class="iv-row"><span class="iv-label">${ivLabels[k]}</span>
          <div class="iv-bar"><div class="iv-bar-fill ${ivTier(v)}" style="width:${(v / 6) * 100}%"></div></div>
          <span class="iv-value">${v}</span></div>`;
      };
      return `
        <div class="frontier-ext-factory-card ${isSelected ? "selected" : ""} swap-${side}"
             data-swap-side="${side}" data-swap-idx="${idx}">
          <div class="card-header">
            <img src="img/pkmn/sprite/${rental.id}.png" alt="${monName}" class="sprite">
            <div class="title-block">
              <div class="name">${monName}</div>
              <div class="tags">
                <span class="tag-nature">${natureLabel}</span>
                <span class="tag-ability">${abilityLabel}</span>
              </div>
            </div>
          </div>
          <div class="ivs">
            ${ivRow("hp")}${ivRow("atk")}${ivRow("def")}
            ${ivRow("satk")}${ivRow("sdef")}${ivRow("spe")}
          </div>
          <div class="moves">${moves}</div>
        </div>
      `;
    };

    const [takeIdx, giveIdx] = run.factorySwapSelection;
    const opponentGrid = run.pendingFactorySwap.map((r, i) =>
      renderCard(r, "take", i, takeIdx === i)).join("");
    const yourGrid = run.factoryTeam.map((r, i) =>
      renderCard(r, "give", i, giveIdx === i)).join("");

    const canConfirm = takeIdx !== null && giveIdx !== null;

    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-factory-subtitle">${t.subtitle}</div>
        <div class="frontier-ext-factory-swap-section">
          <div class="section-label opponent">${t.opponentTeam}</div>
          <div class="frontier-ext-factory-grid">${opponentGrid}</div>
        </div>
        <div class="frontier-ext-factory-swap-section">
          <div class="section-label yours">${t.yourTeam}</div>
          <div class="frontier-ext-factory-grid">${yourGrid}</div>
        </div>
        <div class="frontier-ext-factory-counter">${canConfirm ? "✓" : t.pickBoth}</div>
        <div class="frontier-ext-factory-actions">
          <button class="frontier-ext-action-btn primary ${canConfirm ? "" : "disabled"}" data-action="factory-swap-confirm">${t.confirm}</button>
          <button class="frontier-ext-action-btn" data-action="factory-swap-skip">${t.skip}</button>
        </div>
      `;
      mid.querySelectorAll(".frontier-ext-factory-card").forEach((el) => {
        el.addEventListener("click", () => {
          const side = el.dataset.swapSide;
          const idx = parseInt(el.dataset.swapIdx, 10);
          if (side === "take") run.factorySwapSelection[0] = idx;
          else run.factorySwapSelection[1] = idx;
          openFactorySwapModal(facility); // re-render
        });
      });
      mid.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => {
          if (btn.classList.contains("disabled")) return;
          handleRunAction(btn.dataset.action, facility);
        };
      });
    }
    if (bottom) { bottom.style.display = "none"; bottom.innerHTML = ""; }
    if (typeof openTooltip === "function") openTooltip();
  }

  // Execute the chosen swap: restore the outgoing rental's original pkmn
  // state, insert the incoming rental into factoryTeam (same slot), apply
  // its spec so the next combat picks up the new moves/nature/ivs/ability.
  function confirmFactorySwap(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.pendingFactorySwap)) return;
    const [takeIdx, giveIdx] = run.factorySwapSelection || [null, null];
    if (takeIdx === null || giveIdx === null) return;
    const incoming = run.pendingFactorySwap[takeIdx];
    const outgoing = run.factoryTeam[giveIdx];
    if (!incoming || !outgoing) return;

    // Restore the OUTGOING rental's original pkmn state (we no longer
    // need it overridden; keep the user's data clean for the species).
    if (run.factoryOriginalState && run.factoryOriginalState[outgoing.id]
        && typeof pkmn !== "undefined" && pkmn[outgoing.id]) {
      const orig = run.factoryOriginalState[outgoing.id];
      pkmn[outgoing.id].moves = orig.moves;
      pkmn[outgoing.id].nature = orig.nature;
      pkmn[outgoing.id].ivs = orig.ivs;
      pkmn[outgoing.id].ability = orig.ability;
      delete run.factoryOriginalState[outgoing.id];
    }

    // Replace in factoryTeam and in the private previewTeam slot so the
    // combat engine sees the new species on next launch.
    run.factoryTeam[giveIdx] = incoming;
    const pt = saved.previewTeams && saved.previewTeams[FACTORY_PREVIEW_SLOT];
    if (pt) pt["slot" + (giveIdx + 1)] = { pkmn: incoming.id, item: undefined };

    // Apply the new rental's full spec (moves + nature + IVs + ability)
    // to pkmn[id], backing up the incoming species' original state so
    // we can restore it at run-end.
    applyFactoryMoves(run);

    // Clear swap state + reset selection.
    run.pendingFactorySwap = null;
    run.factorySwapSelection = [null, null];

    // Move on to the next battle preview.
    openSimulatedFight(facility);
  }

  // ─── 6b2c. PYRAMID RULE — 7-floor grid nav, hidden encounters ─────────────
  // Canonical Gen 3 Emerald Battle Pyramid:
  //   • Each round = climb 7 floors. One floor at a time.
  //   • Each floor is a grid with random layout: walkable floor, walls,
  //     a stairs tile leading up, and hidden encounter tiles (trainers,
  //     wild Pokémon, heal/cure items).
  //   • Tile contents revealed only when the player walks onto them
  //     (fog-of-contents — tile shape is visible, contents are "?").
  //   • HP + status persist across all 7 floors (reuses Pike's runTeam).
  //   • Final floor of a boss round (round 3 Silver, 10 Gold, post-Gold
  //     rematches) culminates in a Brandon fight — otherwise it's just
  //     normal stairs.
  //
  // Layout: 5×5 grid. Canonical Pyramid uses larger floors but 5×5 fits
  // cleanly inside the tooltip without scrolling.
  const PYR_GRID_SIZE = 5;
  const PYR_TILES = {
    EMPTY: "empty",
    WALL: "wall",
    STAIRS: "stairs",
    TRAINER: "trainer",
    WILD: "wild",
    HEAL_FULL: "healFull",
    HEAL_PARTIAL: "healHalf",
    CURE_STATUS: "cure",
  };
  // Visible revealed tiles have type info shown; unrevealed show "?" .
  // Walls are always visible (structural) even before reveal.

  function isPyramidFacility(facility) {
    return !!(facility && facility.rules && facility.rules.gridNav);
  }
  function isInPyramidRun() {
    if (typeof saved !== "object" || !saved) return false;
    if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
    const facility = FACILITIES.find((f) => f.id === saved.frontierExt.activeRun.facilityId);
    return isPyramidFacility(facility);
  }

  // ── Pixel-art tile SVGs ──────────────────────────────────────────────
  // All 16×16 viewBox, styled via CSS for size (pixelated rendering).
  const PYR_TILE_SVG = {
    floor: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="2" y="3" width="2" height="1" fill="#a98848"/><rect x="10" y="6" width="1" height="1" fill="#a98848"/><rect x="5" y="10" width="2" height="1" fill="#a98848"/><rect x="12" y="12" width="1" height="2" fill="#a98848"/><rect x="1" y="14" width="1" height="1" fill="#a98848"/></svg>`,
    wall: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#4a3520"/><rect x="0" y="0" width="16" height="1" fill="#6a4f30"/><rect x="0" y="4" width="16" height="1" fill="#2a1d10"/><rect x="5" y="1" width="1" height="3" fill="#2a1d10"/><rect x="11" y="1" width="1" height="3" fill="#2a1d10"/><rect x="0" y="8" width="16" height="1" fill="#2a1d10"/><rect x="2" y="5" width="1" height="3" fill="#2a1d10"/><rect x="8" y="5" width="1" height="3" fill="#2a1d10"/><rect x="14" y="5" width="1" height="3" fill="#2a1d10"/><rect x="0" y="12" width="16" height="1" fill="#2a1d10"/><rect x="5" y="9" width="1" height="3" fill="#2a1d10"/><rect x="11" y="9" width="1" height="3" fill="#2a1d10"/><rect x="2" y="13" width="1" height="3" fill="#2a1d10"/><rect x="8" y="13" width="1" height="3" fill="#2a1d10"/><rect x="14" y="13" width="1" height="3" fill="#2a1d10"/></svg>`,
    stairs: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="2" y="12" width="12" height="2" fill="#7a5a30"/><rect x="3" y="9" width="10" height="2" fill="#9a7a40"/><rect x="4" y="6" width="8" height="2" fill="#b08a50"/><rect x="5" y="3" width="6" height="2" fill="#c99a60"/><rect x="6" y="1" width="4" height="1" fill="#ffd98a"/></svg>`,
    question: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><text x="8" y="13" font-size="12" font-weight="bold" text-anchor="middle" fill="#5a3020" font-family="monospace">?</text></svg>`,
    heal: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="5" y="2" width="6" height="12" fill="#f86060"/><rect x="2" y="5" width="12" height="6" fill="#f86060"/><rect x="6" y="3" width="4" height="10" fill="#ff8080"/><rect x="3" y="6" width="10" height="4" fill="#ff8080"/></svg>`,
    cure: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><circle cx="8" cy="8" r="5" fill="#70e070"/><rect x="7" y="4" width="2" height="8" fill="#ffffff"/><rect x="4" y="7" width="8" height="2" fill="#ffffff"/></svg>`,
    trainer: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="6" y="2" width="4" height="3" fill="#2a1a0a"/><rect x="5" y="5" width="6" height="6" fill="#5080d0"/><rect x="4" y="11" width="3" height="3" fill="#2a1a0a"/><rect x="9" y="11" width="3" height="3" fill="#2a1a0a"/></svg>`,
    wild: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="4" y="4" width="2" height="2" fill="#5a8030"/><rect x="10" y="3" width="3" height="3" fill="#5a8030"/><rect x="7" y="8" width="2" height="2" fill="#5a8030"/><rect x="3" y="11" width="3" height="2" fill="#5a8030"/><rect x="11" y="12" width="2" height="2" fill="#5a8030"/></svg>`,
    fog: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#2a1a14"/><rect x="3" y="3" width="2" height="2" fill="#3a2520" opacity="0.6"/><rect x="11" y="5" width="2" height="2" fill="#3a2520" opacity="0.6"/><rect x="7" y="9" width="2" height="2" fill="#3a2520" opacity="0.6"/></svg>`,
  };
  // Explorer character — simple trainer silhouette with 2-frame walk.
  // The "walk" animation alternates two leg positions via CSS.
  const PYR_CHARACTER_SVG = `
<svg viewBox="0 0 16 20" preserveAspectRatio="xMidYMid meet" class="pyr-char">
  <!-- Hat -->
  <rect x="4" y="1" width="8" height="2" fill="#c04040"/>
  <rect x="3" y="3" width="10" height="1" fill="#c04040"/>
  <!-- Face -->
  <rect x="5" y="4" width="6" height="3" fill="#f0c898"/>
  <rect x="5" y="5" width="1" height="1" fill="#2a1a0a"/>
  <rect x="10" y="5" width="1" height="1" fill="#2a1a0a"/>
  <!-- Body (blue shirt) -->
  <rect x="4" y="7" width="8" height="5" fill="#4060c0"/>
  <rect x="4" y="7" width="8" height="1" fill="#6080e0"/>
  <!-- Arms -->
  <rect x="3" y="8" width="1" height="3" fill="#4060c0"/>
  <rect x="12" y="8" width="1" height="3" fill="#4060c0"/>
  <!-- Legs (base) -->
  <rect class="pyr-leg-l" x="5" y="12" width="2" height="5" fill="#303030"/>
  <rect class="pyr-leg-r" x="9" y="12" width="2" height="5" fill="#303030"/>
  <!-- Shoes -->
  <rect x="5" y="17" width="2" height="1" fill="#1a1a1a"/>
  <rect x="9" y="17" width="2" height="1" fill="#1a1a1a"/>
</svg>`.trim();

  // ── Floor generation ───────────────────────────────────────────────────
  // Random but guaranteed-solvable: start at (col ceil/2, row = SIZE-1),
  // stairs somewhere at row 0-1, with enough floor tiles to connect.
  // Walls clustered randomly; encounters + items sprinkled across empty
  // tiles. Player's tile is always floor/empty (no encounter on start).
  function generatePyramidFloor(facility, floorNum, isLastFloor) {
    const size = PYR_GRID_SIZE;
    const grid = [];
    for (let y = 0; y < size; y++) {
      const row = [];
      for (let x = 0; x < size; x++) row.push(PYR_TILES.EMPTY);
      grid.push(row);
    }

    // Random walls — ~18% of tiles. Never on start or stairs cells.
    const startX = Math.floor(size / 2);
    const startY = size - 1;
    let stairsX = Math.floor(Math.random() * size);
    let stairsY = 0;
    // Avoid a trivial collision (shouldn't happen but safe).
    if (stairsX === startX && stairsY === startY) stairsX = (stairsX + 1) % size;

    // Carve a GUARANTEED path from start → stairs BEFORE placing walls.
    // Without this, random wall placement can cluster into a diagonal
    // barrier (observed: walls at (1,4)(2,3)(3,2)(4,1) cut off top-left
    // stairs from bottom-center start). Random L-shape (vertical-first or
    // horizontal-first) keeps layout variety. Cells on this path are
    // tagged "protected" and skipped by the wall placer below.
    const protectedCells = new Set();
    const cellKey = (x, y) => y * size + x;
    {
      const vFirst = Math.random() < 0.5;
      let px = startX;
      let py = startY;
      protectedCells.add(cellKey(px, py));
      const stepToward = (from, to) => (from < to ? from + 1 : from - 1);
      if (vFirst) {
        while (py !== stairsY) { py = stepToward(py, stairsY); protectedCells.add(cellKey(px, py)); }
        while (px !== stairsX) { px = stepToward(px, stairsX); protectedCells.add(cellKey(px, py)); }
      } else {
        while (px !== stairsX) { px = stepToward(px, stairsX); protectedCells.add(cellKey(px, py)); }
        while (py !== stairsY) { py = stepToward(py, stairsY); protectedCells.add(cellKey(px, py)); }
      }
    }

    // Place walls
    const wallCount = Math.floor(size * size * 0.18);
    let placedWalls = 0, safety = 0;
    while (placedWalls < wallCount && safety < 50) {
      safety++;
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if (x === startX && y === startY) continue;
      if (x === stairsX && y === stairsY) continue;
      if (protectedCells.has(cellKey(x, y))) continue; // keep the carved path open
      if (grid[y][x] !== PYR_TILES.EMPTY) continue;
      grid[y][x] = PYR_TILES.WALL;
      placedWalls++;
    }

    // Safety net: if the carve above somehow failed or a future change
    // skips it, BFS-verify reachability and break a wall if blocked.
    const isReachable = () => {
      const seen = new Set([cellKey(startX, startY)]);
      const queue = [[startX, startY]];
      while (queue.length) {
        const [cx, cy] = queue.shift();
        if (cx === stairsX && cy === stairsY) return true;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = cx + dx, ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
          const k = cellKey(nx, ny);
          if (seen.has(k)) continue;
          if (grid[ny][nx] === PYR_TILES.WALL) continue;
          seen.add(k);
          queue.push([nx, ny]);
        }
      }
      return false;
    };
    let breakSafety = 0;
    while (!isReachable() && breakSafety < 30) {
      breakSafety++;
      // Find any wall and remove it; fall through until BFS succeeds.
      const walls = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (grid[y][x] === PYR_TILES.WALL) walls.push([x, y]);
        }
      }
      if (!walls.length) break;
      const [wx, wy] = walls[Math.floor(Math.random() * walls.length)];
      grid[wy][wx] = PYR_TILES.EMPTY;
    }

    // Place stairs (last floor stairs handled specially by runVictory).
    grid[stairsY][stairsX] = PYR_TILES.STAIRS;

    // Encounter + item distribution across remaining empty tiles.
    // Later floors get more trainer density and fewer heals.
    const difficulty = floorNum / 7;
    const emptyCells = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] === PYR_TILES.EMPTY && !(x === startX && y === startY)) {
          emptyCells.push({ x, y });
        }
      }
    }
    // Shuffle
    emptyCells.sort(() => Math.random() - 0.5);

    // Distribution (of the empty-cell count):
    // trainers: 25% → 40% (scales with floor)
    // wild:     15% → 20%
    // heal+cure: 15% → 5%
    const trainerCount = Math.max(2, Math.floor(emptyCells.length * (0.25 + 0.15 * difficulty)));
    const wildCount = Math.max(1, Math.floor(emptyCells.length * (0.15 + 0.05 * difficulty)));
    const healFullCount = difficulty < 0.5 ? 1 : 0;
    const healHalfCount = Math.max(1, Math.floor(emptyCells.length * (0.10 - 0.05 * difficulty)));
    const cureCount = Math.max(1, Math.floor(emptyCells.length * 0.08));

    const assign = (type, count) => {
      for (let i = 0; i < count && emptyCells.length; i++) {
        const c = emptyCells.shift();
        grid[c.y][c.x] = type;
      }
    };
    assign(PYR_TILES.TRAINER, trainerCount);
    assign(PYR_TILES.WILD, wildCount);
    assign(PYR_TILES.HEAL_FULL, healFullCount);
    assign(PYR_TILES.HEAL_PARTIAL, healHalfCount);
    assign(PYR_TILES.CURE_STATUS, cureCount);

    return {
      grid,
      playerX: startX,
      playerY: startY,
      stairsX, stairsY,
      visited: { [startY * size + startX]: true }, // player's start tile
      revealed: { [startY * size + startX]: true },
      floor: floorNum,
      isLastFloor: !!isLastFloor,
    };
  }

  // BFS check — is the stairs tile reachable from the player's current
  // position? Used as both a load-time migration guard (old saves with
  // unwinnable layouts) and a defense-in-depth against future generator
  // regressions.
  function pyramidFloorIsSolvable(state) {
    if (!state || !Array.isArray(state.grid)) return true;
    const size = state.grid.length;
    const sx = state.playerX, sy = state.playerY;
    const tx = state.stairsX, ty = state.stairsY;
    const seen = new Set([sy * size + sx]);
    const queue = [[sx, sy]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      if (cx === tx && cy === ty) return true;
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const k = ny * size + nx;
        if (seen.has(k)) continue;
        if (state.grid[ny][nx] === PYR_TILES.WALL) continue;
        seen.add(k);
        queue.push([nx, ny]);
      }
    }
    return false;
  }

  // Lazy init — called from start / advanceFloor / continue paths.
  // Also auto-heals unwinnable floors left over from older saves: if the
  // stairs are not reachable from the player's current tile, regenerate
  // the floor in place (keeping the floor number + isLastFloor flag).
  function ensurePyramidFloor(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return null;
    if (!run.pyramid) {
      const floor = 1;
      run.pyramid = generatePyramidFloor(facility, floor, floor === 7);
    } else if (!pyramidFloorIsSolvable(run.pyramid)) {
      const prevFloor = run.pyramid.floor || 1;
      const prevLast = !!run.pyramid.isLastFloor;
      run.pyramid = generatePyramidFloor(facility, prevFloor, prevLast);
    }
    return run.pyramid;
  }

  function setPyramidModalSizing(on) {
    const box = document.getElementById("tooltipBox");
    if (!box) return;
    if (on) box.classList.add("frontier-ext-pyramid-open");
    else box.classList.remove("frontier-ext-pyramid-open");
  }

  // ── UI: Floor map ───────────────────────────────────────────────────
  function openPyramidFloorMap(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    // Block map access if the tied team is no longer a legal 3. This
    // catches the "empty team dodges all combats to reach stairs × 7
    // and wins the round" cheese at its entry point.
    if (!canRunProceed(facility)) return;
    const state = ensurePyramidFloor(facility);
    if (!state) return;
    setPyramidModalSizing(true);
    const lang = window.gameLang === "fr" ? "fr" : "en";

    const t = lang === "fr"
      ? {
          title: "Pyramide de Combat",
          floor: "Étage",
          hpStatus: "État de l'équipe",
          hintStart: "Explore l'étage — clique une case adjacente pour avancer.",
          hintFinal: "Étage final — le Cerveau t'attend près de l'escalier.",
          abandon: "Abandonner",
        }
      : {
          title: "Battle Pyramid",
          floor: "Floor",
          hpStatus: "Team status",
          hintStart: "Explore the floor — click an adjacent tile to move.",
          hintFinal: "Final floor — the Brain is waiting near the stairs.",
          abandon: "Abandon",
        };

    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);
    const isBossFloor = state.floor === 7 && !!bossInfo;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) top.style.display = "none";
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${t.title} — ${t.floor} ${state.floor}/7`;
    }

    // Build grid HTML
    const tileHtml = (x, y) => {
      const key = y * PYR_GRID_SIZE + x;
      const tile = state.grid[y][x];
      const isVisited = !!state.visited[key];
      const isRevealed = !!state.revealed[key];
      const isPlayer = x === state.playerX && y === state.playerY;
      const isAdjacent = Math.abs(x - state.playerX) + Math.abs(y - state.playerY) === 1;

      // Walls always visible; other tiles show their SVG only if revealed,
      // else show "?" (fog-of-contents). Stairs also always visible.
      let svg = PYR_TILE_SVG.fog;
      let cls = "pyr-tile";
      if (tile === PYR_TILES.WALL) {
        svg = PYR_TILE_SVG.wall; cls += " wall";
      } else if (tile === PYR_TILES.STAIRS) {
        svg = PYR_TILE_SVG.stairs; cls += " stairs";
      } else if (isRevealed || isVisited) {
        if (tile === PYR_TILES.EMPTY) { svg = PYR_TILE_SVG.floor; cls += " floor"; }
        else if (tile === PYR_TILES.TRAINER) { svg = PYR_TILE_SVG.trainer; cls += " trainer"; }
        else if (tile === PYR_TILES.WILD) { svg = PYR_TILE_SVG.wild; cls += " wild"; }
        else if (tile === PYR_TILES.HEAL_FULL || tile === PYR_TILES.HEAL_PARTIAL) { svg = PYR_TILE_SVG.heal; cls += " heal"; }
        else if (tile === PYR_TILES.CURE_STATUS) { svg = PYR_TILE_SVG.cure; cls += " cure"; }
      } else {
        // Unrevealed non-wall: floor + ? overlay
        svg = PYR_TILE_SVG.question; cls += " unrevealed";
      }
      if (isAdjacent && tile !== PYR_TILES.WALL) cls += " clickable";
      if (isPlayer) cls += " player-here";
      const playerSprite = isPlayer ? `<div class="pyr-char-mount">${PYR_CHARACTER_SVG}</div>` : "";
      return `<div class="${cls}" data-x="${x}" data-y="${y}">${svg}${playerSprite}</div>`;
    };

    let gridHtml = '<div class="frontier-ext-pyr-grid" style="grid-template-columns: repeat(' + PYR_GRID_SIZE + ', 1fr);">';
    for (let y = 0; y < PYR_GRID_SIZE; y++) {
      for (let x = 0; x < PYR_GRID_SIZE; x++) gridHtml += tileHtml(x, y);
    }
    gridHtml += '</div>';

    // HP summary reused from Pike (persistHpStatus → runTeam shape identical).
    const hpSummary = renderFrontierTeamHpSummary();

    const hint = isBossFloor ? t.hintFinal : t.hintStart;
    const hintClass = isBossFloor ? "pyr-hint boss" : "pyr-hint";

    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        ${hpSummary}
        <div class="${hintClass}">${hint}</div>
        ${gridHtml}
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      mid.querySelectorAll(".pyr-tile.clickable").forEach((el) => {
        el.addEventListener("click", () => {
          const tx = parseInt(el.dataset.x, 10);
          const ty = parseInt(el.dataset.y, 10);
          pyramidMovePlayerTo(tx, ty, facility);
        });
      });
      mid.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (bottom) { bottom.style.display = "none"; bottom.innerHTML = ""; }
    if (typeof openTooltip === "function") openTooltip();
  }

  // Generic HP summary — reuses the Pike team shape (pikeTeam). Shows
  // name + HP% + status pill for each slot. Pyramid uses the same
  // per-run team state via persistHpStatus.
  function renderFrontierTeamHpSummary() {
    const run = saved.frontierExt.activeRun;
    if (!run) return "";
    migratePikeTeam();
    if (!run.pikeTeam) return "";
    const l = pikeL10n();
    const statusLabel = {
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
    };
    const cells = [];
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const ps = run.pikeTeam[sl];
      if (!ps || !ps.pkmnId) continue;
      const ratio = (typeof ps.hpRatio === "number") ? ps.hpRatio : 1.0;
      const status = ps.status ? normalizePikeStatus(ps.status) : null;
      const pct = Math.round(ratio * 100);
      const barWidth = Math.max(0, Math.min(100, pct));
      const cls = ratio <= 0 ? "low" : (ratio <= 0.25 ? "low" : (ratio <= 0.5 ? "mid" : ""));
      const monName = typeof format === "function" ? format(ps.pkmnId) : ps.pkmnId;
      const statusPill = status
        ? `<span class="st ${status}">${statusLabel[status] || status}</span>`
        : "";
      cells.push(`
        <span class="frontier-ext-pike-hp-pill ${cls}">
          ${monName}: ${ratio <= 0 ? "KO" : pct + "%"}
          <span class="bar"><span style="width:${barWidth}%"></span></span>
          ${statusPill}
        </span>
      `);
    }
    if (!cells.length) return "";
    return `<div class="frontier-ext-pike-hp-summary">${cells.join("")}</div>`;
  }

  // ── Movement + encounter resolution ────────────────────────────────
  function pyramidMovePlayerTo(tx, ty, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !run.pyramid) return;
    // Re-validate the tied team on EVERY tile click — without this, a
    // map opened with 3 mons could continue to advance after the tied
    // team was emptied (external edit, pre-fix save). With the guard,
    // any move that would lead to a stairs-advance or combat is
    // blocked the moment the team falls below 3.
    if (!canRunProceed(facility)) return;
    const state = run.pyramid;
    // Must be adjacent + not a wall.
    const dx = Math.abs(tx - state.playerX);
    const dy = Math.abs(ty - state.playerY);
    if (dx + dy !== 1) return;
    if (state.grid[ty][tx] === PYR_TILES.WALL) return;

    // Move + mark revealed + visited.
    state.playerX = tx; state.playerY = ty;
    const key = ty * PYR_GRID_SIZE + tx;
    state.visited[key] = true;
    state.revealed[key] = true;
    // Reveal orthogonal neighbours (peek)
    [[1,0],[-1,0],[0,1],[0,-1]].forEach(([ddx, ddy]) => {
      const nx = tx + ddx, ny = ty + ddy;
      if (nx < 0 || nx >= PYR_GRID_SIZE || ny < 0 || ny >= PYR_GRID_SIZE) return;
      state.revealed[ny * PYR_GRID_SIZE + nx] = true;
    });

    // Resolve tile contents.
    pyramidResolveTile(facility);
  }

  function pyramidResolveTile(facility) {
    const run = saved.frontierExt.activeRun;
    const state = run.pyramid;
    const tile = state.grid[state.playerY][state.playerX];
    const key = state.playerY * PYR_GRID_SIZE + state.playerX;

    switch (tile) {
      case PYR_TILES.TRAINER: {
        // Consume the tile, fire a trainer combat via launchCombat.
        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        const trainer = generateTrainer(run.round + 1, facility);
        run.upcomingTrainer = trainer;
        run.pyramidEncounterKind = "trainer";
        launchCombat(facility);
        return;
      }
      case PYR_TILES.WILD: {
        // Single wild Pokémon — simulate by generating a trainer with
        // only 1 mon in its team. Reuses the existing combat flow.
        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        const wildTrainer = generateTrainer(run.round + 1, facility);
        wildTrainer.team = wildTrainer.team.slice(0, 1); // just 1 mon
        wildTrainer.name = window.gameLang === "fr" ? "Pokémon sauvage" : "Wild Pokémon";
        wildTrainer.sprite = "hiker"; // any generic sprite, the area will render its own
        run.upcomingTrainer = wildTrainer;
        run.pyramidEncounterKind = "wild";
        launchCombat(facility);
        return;
      }
      case PYR_TILES.HEAL_FULL: {
        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        applyPikeHealRatio(1.0); // full heal + status cleared
        showPikeEventModal(facility, "heal", pikeL10n().healFullTitle, pikeL10n().healFullBody, "full");
        run.pyramidPendingAfterEvent = true;
        return;
      }
      case PYR_TILES.HEAL_PARTIAL: {
        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        applyPikeHealRatio(0.5); // partial heal, status stays
        showPikeEventModal(facility, "heal", pikeL10n().healHalfTitle, pikeL10n().healHalfBody, "half");
        run.pyramidPendingAfterEvent = true;
        return;
      }
      case PYR_TILES.CURE_STATUS: {
        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        // Clear status on all slots, HP untouched.
        if (run.pikeTeam) {
          for (const sl of ["slot1", "slot2", "slot3"]) {
            if (run.pikeTeam[sl]) run.pikeTeam[sl].status = null;
          }
        }
        const lang = window.gameLang === "fr" ? "fr" : "en";
        const title = lang === "fr" ? "🌿 Baie purificatrice" : "🌿 Cleansing berry";
        const body = lang === "fr"
          ? "Les statuts de toute ton équipe ont été soignés."
          : "All status conditions on your team have been cured.";
        showPikeEventModal(facility, "heal", title, body, "cure");
        run.pyramidPendingAfterEvent = true;
        return;
      }
      case PYR_TILES.STAIRS: {
        // Boss floor check — final floor of a boss round → brain fight
        // instead of free floor-advance.
        const bossInfo = getBossRoundInfo(run.round + 1, facility);
        if (state.floor === 7 && bossInfo) {
          // Fire brain combat.
          run.upcomingTrainer = null; // let launchCombat boss path generate
          run.pyramidEncounterKind = "brain";
          launchCombat(facility);
          return;
        }
        // Otherwise: advance floor (or round if floor 7).
        pyramidAdvanceFloor(facility);
        return;
      }
      case PYR_TILES.EMPTY:
      default:
        // No-op, re-render the map for the new position.
        openPyramidFloorMap(facility);
        return;
    }
  }

  // Advance to next floor (new random layout) or end the round if on 7.
  function pyramidAdvanceFloor(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !run.pyramid) return;
    // Final team-size guard right before any round-victory fires via
    // the non-combat path (stairs → floor 7 wrap). Without this an
    // emptied tied team could clear a round by dodging every trainer
    // tile and walking up stairs 7 times.
    if (!canRunProceed(facility)) return;
    const nextFloor = run.pyramid.floor + 1;
    if (nextFloor > 7) {
      // All 7 floors cleared — round complete. Set the flag that
      // onRunVictory's Pyramid branch reads to route to round-end.
      run.pyramidRoundComplete = true;
      onRunVictory();
      // We're not coming from a real combat here, so exit-redirect won't
      // fire — open the round-cleared modal ourselves.
      if (run.roundJustCleared) {
        showRoundClearedModal(facility);
      }
      return;
    }
    run.pyramid = generatePyramidFloor(facility, nextFloor, nextFloor === 7);
    openPyramidFloorMap(facility);
  }

  // Called after a non-combat event modal (heal/cure). Player clicks
  // "Next room" on the event modal → pike-next action fires → we
  // re-route to the map if it's a Pyramid run.
  function pyramidAfterEvent(facility) {
    const run = saved.frontierExt.activeRun;
    if (run) run.pyramidPendingAfterEvent = false;
    openPyramidFloorMap(facility);
  }

  // ─── 6b3. PIKE RULE — 14 rooms, 3 doors, HP/status persist ───────────────
  // Signature Gen 3 Emerald Battle Pike rules:
  //   • Each round = 14 rooms.
  //   • Each room shows 3 closed curtains (doors). The player picks one; the
  //     contents — trainer fight / heal / trap / boss — are revealed only
  //     after clicking.
  //   • HP + status carry over between rooms in the same round. A full-heal
  //     door clears both; a partial-heal door restores HP only; a trap door
  //     inflicts a random status on one slot.
  //   • Room 14 is always a fight. On boss rounds (round 7, 49, post-Gold
  //     rematches), it's the Brain — otherwise it's an elite trainer one
  //     tier above the normal round pool, as a final gauntlet spike.
  //   • Room 1 of each new round resets HP to 100% and clears status.

  // Localised labels for door-result announcements and banners. Everything
  // else goes through the i18n overlay at runtime, but the door picker and
  // heal/trap modals use their own structured copy because they're
  // dynamically composed.
  const PIKE_L10N = {
    fr: {
      pickDoor: "Choisis une porte",
      subDesc: "Les rideaux cachent combats, soins et pièges. Ton choix ne peut pas être annulé.",
      room: "Salle",
      round: "Round",
      team: "Équipe",
      brainRoom: "Salle finale — le Cerveau de la Frontière t'attend !",
      toughRoom: "Salle finale — un dresseur d'élite garde la sortie.",
      bossBanner: "⚡ Cerveau imminent !",
      healFullTitle: "Infirmière rencontrée !",
      healFullBody: "Toute ton équipe récupère 100% de ses PV et ses statuts sont soignés.",
      healHalfTitle: "Source de soin",
      healHalfBody: "Toute ton équipe récupère 50% de ses PV (le statut reste).",
      trapTitle: "Piège déclenché !",
      trapBody: "Un de tes Pokémon subit un statut.",
      next: "Salle suivante",
      cancel: "Retour",
      back: "Retour",
      abandon: "Abandonner",
      fightBrain: "Affronter le Cerveau",
      fightTough: "Engager le combat",
      statusPoisoned: "Empoisonné",
      statusBurn: "Brûlé",
      statusParalysis: "Paralysé",
    },
    en: {
      pickDoor: "Pick a door",
      subDesc: "Curtains hide battles, heals and traps. Your choice is final.",
      room: "Room",
      round: "Round",
      team: "Team",
      brainRoom: "Final room — the Frontier Brain awaits!",
      toughRoom: "Final room — an elite trainer guards the exit.",
      bossBanner: "⚡ Brain incoming!",
      healFullTitle: "Nurse encounter!",
      healFullBody: "Your whole team heals to 100% HP and any status is cured.",
      healHalfTitle: "Healing spring",
      healHalfBody: "Your whole team regains 50% HP (status is not cured).",
      trapTitle: "Trap sprung!",
      trapBody: "One of your Pokémon is afflicted with a status.",
      next: "Next room",
      cancel: "Back",
      back: "Back",
      abandon: "Abandon",
      fightBrain: "Face the Brain",
      fightTough: "Start the fight",
      statusPoisoned: "Poisoned",
      statusBurn: "Burned",
      statusParalysis: "Paralyzed",
    },
  };

  function pikeL10n() {
    return PIKE_L10N[window.gameLang === "fr" ? "fr" : "en"];
  }

  // ─── PIKE TEAM SNAPSHOT ──────────────────────────────────────────────────
  // Dedicated per-run team state. Solves two problems at once:
  //   1. The game's injectPreviewTeam + setPkmnTeamHp path hard-resets
  //      pkmn[id].playerHp to playerHpMax and wipes team[].buffs on every
  //      combat entry — a runtime-only side-state means we own the HP/status
  //      truth and can re-apply them after the reset lands.
  //   2. Pyramid will need exactly the same persistent-team semantics, so we
  //      keep the shape generic (pkmnId/item/hpRatio/status per slot).
  //
  // Shape:
  //   run.pikeTeam = {
  //     slot1: { pkmnId: "dragonite", item: "lumBerry", hpRatio: 1.0, status: null },
  //     slot2: {...},
  //     slot3: {...},
  //   }
  // hpRatio is 0..1 (1.0 = full HP). status is one of PIKE_TRAP_STATUSES
  // or null.
  function initPikeTeamFromPreview() {
    ensureSaveSlot();
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    const pt = (saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};
    run.pikeTeam = {};
    run.pikeTeamSource = saved.currentPreviewTeam; // Remember which preview slot seeded us
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (pt[sl] && pt[sl].pkmn) {
        run.pikeTeam[sl] = {
          pkmnId: pt[sl].pkmn,
          item: pt[sl].item || null,
          hpRatio: 1.0,
          status: null,
        };
      }
    }
  }

  // One-time migration for saves that were started before run.pikeTeam
  // existed — rebuild it from the legacy pikeHpState / pikeStatus + the
  // preview team slot, so the run can resume without losing progress.
  function migratePikeTeam() {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    if (run.pikeTeam) return; // already migrated
    const fac = FACILITIES.find((f) => f.id === run.facilityId);
    // Migration only runs for facilities that use the runTeam machinery.
    if (!hasRunTeamState(fac)) return;
    const pt = (saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};
    run.pikeTeam = {};
    run.pikeTeamSource = saved.currentPreviewTeam;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (!pt[sl] || !pt[sl].pkmn) continue;
      const hp = (run.pikeHpState && run.pikeHpState[sl]);
      const st = (run.pikeStatus && run.pikeStatus[sl]);
      run.pikeTeam[sl] = {
        pkmnId: pt[sl].pkmn,
        item: pt[sl].item || null,
        hpRatio: (typeof hp === "number") ? hp : 1.0,
        status: st ? normalizePikeStatus(st) : null,
      };
    }
  }

  // Weighted random outcome for a single door at a given room index. The
  // weights shift with room progression: early rooms bias toward heals so
  // the player survives long enough to feel the mechanic; mid rooms
  // balance combat vs utility; late rooms (11+) strip away most heals
  // to ramp pressure before the room-14 finale.
  function rollSinglePikeDoor(room, facility) {
    const run = saved.frontierExt.activeRun;
    const nextRound = run.round + 1;
    const early = room <= 4;
    const late = room >= 11;

    // [combat, heal_full, heal_half, trap]
    let weights;
    if (early)      weights = [50, 15, 20, 15];
    else if (late)  weights = [70, 5,  10, 15];
    else            weights = [55, 10, 20, 15];

    const total = weights.reduce((a, b) => a + b, 0);
    const roll = Math.random() * total;
    let cum = 0;

    cum += weights[0];
    if (roll < cum) {
      return {
        type: "combat",
        data: { trainer: generateTrainer(nextRound, facility) },
      };
    }
    cum += weights[1];
    if (roll < cum) return { type: "heal_full", data: {} };
    cum += weights[2];
    if (roll < cum) return { type: "heal_half", data: {} };
    const status = PIKE_TRAP_STATUSES[Math.floor(Math.random() * PIKE_TRAP_STATUSES.length)];
    return { type: "trap", data: { status } };
  }

  // Roll all 3 doors for a given room. Guarantees the final room is always
  // a fight (Brain on boss rounds, tough trainer otherwise). For normal
  // rooms, forces at least 1 combat door so the player never gets a free
  // triple-heal jackpot.
  function rollPikeDoors(room, facility) {
    const run = saved.frontierExt.activeRun;
    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);

    if (room === PIKE_ROOM_COUNT) {
      if (bossInfo) {
        // All 3 doors lead to the Brain — final room of a boss round.
        return [
          { type: "brain", data: { kind: bossInfo.kind } },
          { type: "brain", data: { kind: bossInfo.kind } },
          { type: "brain", data: { kind: bossInfo.kind } },
        ];
      }
      // Normal round final: 3 tough elite trainers (tier bump).
      const tough = () => {
        const t = generateTrainer(nextRound, facility);
        // Bump the trainer's difficulty tier one step for the finale.
        t.tier = Math.min(5, (t.tier || 1) + 1);
        return { type: "tough", data: { trainer: t } };
      };
      return [tough(), tough(), tough()];
    }

    const doors = [];
    for (let i = 0; i < PIKE_DOOR_COUNT; i++) {
      doors.push(rollSinglePikeDoor(room, facility));
    }
    // Ensure at least 1 combat door in every room.
    if (!doors.some((d) => d.type === "combat" || d.type === "brain" || d.type === "tough")) {
      doors[Math.floor(Math.random() * doors.length)] = {
        type: "combat",
        data: { trainer: generateTrainer(run.round + 1, facility) },
      };
    }
    return doors;
  }

  // Compact HP bar summary rendered inside the pike preview. Reads from
  // run.pikeTeam (the unified per-run team state). Shows nothing if the
  // run has no team state yet (should never happen post-init — migration
  // covers legacy saves).
  function renderPikeHpSummary() {
    const run = saved.frontierExt.activeRun;
    if (!run) return "";
    migratePikeTeam();
    const l = pikeL10n();
    const statusLabel = {
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
    };
    const cells = [];
    const source = run.pikeTeam || {};
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const ps = source[sl];
      if (!ps || !ps.pkmnId) continue;
      const ratio = (typeof ps.hpRatio === "number") ? ps.hpRatio : 1.0;
      const status = ps.status ? normalizePikeStatus(ps.status) : null;
      const pct = Math.round(ratio * 100);
      const barWidth = Math.max(0, Math.min(100, pct));
      const cls = ratio <= 0.25 ? "low" : (ratio <= 0.5 ? "mid" : "");
      const monName = typeof format === "function" ? format(ps.pkmnId) : ps.pkmnId;
      const statusPill = status
        ? `<span class="st ${status}">${statusLabel[status] || status}</span>`
        : "";
      cells.push(`
        <span class="frontier-ext-pike-hp-pill ${cls}">
          ${monName}: ${pct}%
          <span class="bar"><span style="width:${barWidth}%"></span></span>
          ${statusPill}
        </span>
      `);
    }
    if (!cells.length) return "";
    return `<div class="frontier-ext-pike-hp-summary">${cells.join("")}</div>`;
  }

  // Render the 3-door picker modal. Opened every time we enter a new room.
  // run.pikeDoors is rolled once per room — re-opening the same modal (e.g.
  // player backed out and reopened the tile) keeps the same 3 outcomes so
  // they can't reroll a bad set.
  function openPikeRoomPreview(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const l = pikeL10n();

    if (!run.pikeRoom || run.pikeRoom < 1) run.pikeRoom = 1;
    if (run.pikeRoom > PIKE_ROOM_COUNT) run.pikeRoom = PIKE_ROOM_COUNT;
    if (!Array.isArray(run.pikeDoors) || run.pikeDoors.length !== PIKE_DOOR_COUNT) {
      run.pikeDoors = rollPikeDoors(run.pikeRoom, facility);
    }

    // Re-entry guard: if the user already picked a door in this room and
    // closed the tooltip before resolving the outcome, resume exactly where
    // they left off — don't let them pick a different curtain (would
    // enable rerolling bad matchups or healing twice).
    const pickedIdx = run.pikeDoorPicked;
    if (pickedIdx !== null && pickedIdx !== undefined
        && Array.isArray(run.pikeDoors) && run.pikeDoors[pickedIdx]) {
      const d = run.pikeDoors[pickedIdx];
      if (d.type === "combat" || d.type === "brain" || d.type === "tough") {
        // Re-fire the committed combat directly.
        applyPikeDoor(pickedIdx, facility);
        return;
      }
      if (d.applied) {
        // Heal/trap already resolved. Re-show the event modal without
        // re-running the effect so the player can still click "Next".
        const l = pikeL10n();
        const map = {
          heal_full: ["heal", l.healFullTitle, l.healFullBody, "full"],
          heal_half: ["heal", l.healHalfTitle, l.healHalfBody, "half"],
          trap:      ["trap", l.trapTitle,     `${l.trapBody} (${({poisoned:l.statusPoisoned,burn:l.statusBurn,paralysis:l.statusParalysis}[d.data.status]) || d.data.status})`, d.data.status],
        };
        const m = map[d.type];
        if (m) {
          showPikeEventModal(facility, m[0], m[1], m[2], m[3]);
          return;
        }
      }
    }

    const nextRound = run.round + 1;
    const isFinalRoom = run.pikeRoom === PIKE_ROOM_COUNT;
    const bossInfo = getBossRoundInfo(nextRound, facility);
    const isBossFinale = isFinalRoom && !!bossInfo;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      if (isBossFinale) {
        top.style.display = "block";
        top.innerHTML = `<img src="img/trainers/${facility.brain.sprite}.png"
          style="max-height: 140px; image-rendering: pixelated;"
          alt="${lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn}">`;
      } else {
        // No header decoration for non-boss rooms — the title + 3 curtains
        // in the bottom already carry the Pike identity; a curtain in the
        // header just overlaps the title and adds visual noise.
        top.style.display = "none";
        top.innerHTML = "";
      }
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${lang === "fr" ? facility.nameFr : facility.nameEn} — ${l.room} ${run.pikeRoom}/${PIKE_ROOM_COUNT}`;
    }
    if (mid) {
      mid.style.display = "block";
      let banner = `
        <div class="frontier-ext-pike-banner">
          <span>${l.round} <strong>${nextRound}</strong></span>
          <span>${l.room} <strong>${run.pikeRoom}</strong>/${PIKE_ROOM_COUNT}</span>`;
      if (isBossFinale) {
        banner += `<span class="boss-flag">${l.bossBanner}</span>`;
      }
      banner += `</div>`;
      const hpSummary = renderPikeHpSummary();
      const prompt = isFinalRoom
        ? (isBossFinale ? l.brainRoom : l.toughRoom)
        : `<div style="text-align:center;padding:0.3rem 0.8rem;font-style:italic;opacity:0.9;">${l.pickDoor}</div>
           <div style="text-align:center;padding:0 0.8rem 0.3rem;font-size:0.82rem;opacity:0.75;">${l.subDesc}</div>`;
      mid.innerHTML = banner + hpSummary +
        (isFinalRoom
          ? `<div style="text-align:center;padding:0.4rem 0.8rem;color:#ffd700;font-weight:bold;">${prompt}</div>`
          : prompt);
    }
    if (bottom) {
      bottom.style.display = "block";
      const doors = run.pikeDoors.map((_, idx) => `
        <div class="frontier-ext-pike-door" data-door="${idx}">
          <span class="door-number">${idx + 1}</span>
          ${CURTAIN_SVG}
        </div>
      `).join("");
      bottom.innerHTML = `
        <div class="frontier-ext-pike-doors">${doors}</div>
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn" data-action="back">${l.back}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${l.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll(".frontier-ext-pike-door").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = parseInt(el.dataset.door, 10);
          // Play a quick reveal wobble before applying, for UX feedback.
          el.classList.add("revealed");
          // Lock all sibling doors so the user can't multi-click.
          bottom.querySelectorAll(".frontier-ext-pike-door").forEach((sib) => {
            if (sib !== el) sib.classList.add("locked");
          });
          setTimeout(() => applyPikeDoor(idx, facility), 280);
        });
      });
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  // Entry point from a curtain click. Dispatches to the right handler based
  // on door type. Combat / brain / tough lead straight into launchCombat
  // (which opens the team-preview menu); heal / trap show a confirmation
  // panel then advance to the next room.
  function applyPikeDoor(idx, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.pikeDoors)) return;
    const door = run.pikeDoors[idx];
    if (!door) return;
    run.pikeDoorPicked = idx;

    switch (door.type) {
      case "combat":
      case "tough": {
        run.upcomingTrainer = door.data.trainer;
        launchCombat(facility);
        return;
      }
      case "brain": {
        // Let launchCombat follow its boss path — getBossRoundInfo picks the
        // right team at run.round+1. Null out upcomingTrainer so that path
        // fires instead of the cached random trainer.
        run.upcomingTrainer = null;
        launchCombat(facility);
        return;
      }
      case "heal_full": {
        if (!door.applied) applyPikeHealRatio(1.0);
        door.applied = true;
        showPikeEventModal(facility, "heal", pikeL10n().healFullTitle, pikeL10n().healFullBody, "full");
        return;
      }
      case "heal_half": {
        if (!door.applied) applyPikeHealRatio(0.5);
        door.applied = true;
        showPikeEventModal(facility, "heal", pikeL10n().healHalfTitle, pikeL10n().healHalfBody, "half");
        return;
      }
      case "trap": {
        // Normalize in-place so every downstream read gets canonical key.
        door.data.status = normalizePikeStatus(door.data.status);
        if (!door.applied) applyPikeTrap(door.data.status);
        door.applied = true;
        const l = pikeL10n();
        const statusName = { poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis }[door.data.status] || door.data.status;
        showPikeEventModal(facility, "trap", l.trapTitle, `${l.trapBody} (${statusName})`, door.data.status);
        return;
      }
    }
  }

  // Heal a flat ratio across all 3 slots in run.pikeTeam. Capped at 1.0.
  // Full-heal (>=1.0) clears status; partial heals leave status intact
  // (matches Gen 3 Pike — only Nurse rooms cure status).
  function applyPikeHealRatio(ratio) {
    const run = saved.frontierExt.activeRun;
    migratePikeTeam();
    if (!run.pikeTeam) return;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const ps = run.pikeTeam[sl];
      if (!ps) continue;
      const cur = (typeof ps.hpRatio === "number") ? ps.hpRatio : 1.0;
      ps.hpRatio = Math.min(1.0, cur + ratio);
      if (ratio >= 1.0) ps.status = null;
    }
  }

  // Pick a random Pike-team slot and inflict a status on it. Only one slot
  // per trap door, matching the Gen 3 Pike one-Pokémon trap rule.
  function applyPikeTrap(status) {
    const run = saved.frontierExt.activeRun;
    migratePikeTeam();
    if (!run.pikeTeam) return;
    const candidates = ["slot1", "slot2", "slot3"].filter((sl) => run.pikeTeam[sl]);
    if (!candidates.length) return;
    const target = candidates[Math.floor(Math.random() * candidates.length)];
    run.pikeTeam[target].status = normalizePikeStatus(status);
  }

  // Heal/trap confirmation modal. User clicks "Next room" to advance.
  function showPikeEventModal(facility, kind, title, body, variant) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const l = pikeL10n();
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const icon = kind === "heal"
      ? (variant === "full" ? "💚" : "🌿")
      : "☠️";
    const facName = lang === "fr" ? facility.nameFr : facility.nameEn;

    // Facility-specific context strings — the same Pike modal is reused
    // for Pyramid item tiles, so the title unit and button label must
    // switch accordingly (Pyramid = Étage X/7 + "Utiliser" button).
    const isPyramid = isPyramidFacility(facility);
    const run = saved.frontierExt.activeRun;
    let unitLabel, unitValue, nextLabel;
    if (isPyramid && run && run.pyramid) {
      unitLabel = lang === "fr" ? "Étage" : "Floor";
      unitValue = `${run.pyramid.floor}/7`;
      nextLabel = lang === "fr" ? "Utiliser" : "Use";
    } else {
      unitLabel = l.room;
      unitValue = `${run.pikeRoom}/${PIKE_ROOM_COUNT}`;
      nextLabel = l.next;
    }

    if (top) top.style.display = "none";
    if (titleEl) {
      titleEl.style.display = "block";
      titleEl.innerHTML = `${facName} — ${unitLabel} ${unitValue}`;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-pike-event ${kind}">
          <div class="icon">${icon}</div>
          <div class="headline">${title}</div>
          <div class="body">${body}</div>
        </div>
        ${renderFrontierTeamHpSummary()}
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="pike-next">${nextLabel}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${l.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  // ─── ROUND-CLEARED MODAL (all facilities) ────────────────────────────────
  // Shown after any full round is completed. Mirrors the vanilla Battle
  // Tower's "save every 7 floors" pattern: celebrate the round, show
  // streak / symbol progress, then let the player either continue
  // immediately or pause to change team before the next round.
  //
  // A "round" is facility-specific:
  //   • Tower / Palace / Arena / Factory : 1 battle  = 1 round
  //   • Dôme                              : 3 battles (bracket) = 1 round
  //   • Pic                               : 14 rooms  = 1 round
  //   • Pyramide                          : 7 floors  = 1 round (TBD)
  //
  // When the player picks "Pause", activeRun stays alive and the modal
  // closes; they can then open the team editor, change their team, and
  // resume via the facility tile's "Continue (Round N+1)" button.
  // "Continue" from inside the modal validates team size, re-snapshots
  // Pike-specific state (so team edits while paused are picked up), and
  // opens the appropriate next-round preview.
  function showRoundClearedModal(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const name = lang === "fr" ? facility.nameFr : facility.nameEn;
    const brainName = lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn;
    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);

    const t = lang === "fr"
      ? {
          headline: "Round terminé !",
          justCleared: "Round",
          cleared: "bouclé",
          streak: "Série actuelle",
          best: "Record",
          next: "Round suivant",
          normal: "Dresseur standard",
          silver: "⚡ Le Cerveau de la Frontière (Argent) t'attend !",
          gold: "💎 Le Cerveau de la Frontière (Or) t'attend !",
          rematch: "🔥 Revanche du Cerveau ×" + (bossInfo && bossInfo.multiplier),
          continue: "Continuer — Round " + nextRound,
          abandon: "Abandonner",
          hint: "Sauvegarde automatique. Continuer enchaîne sur le round suivant, Abandonner met fin à la série. Entre rounds ton équipe est déverrouillée — tu peux l'éditer avant de continuer.",
          silverAwarded: "🏆 Symbole Argent débloqué !",
          goldAwarded: "🏆 Symbole Or débloqué !",
        }
      : {
          headline: "Round cleared!",
          justCleared: "Round",
          cleared: "cleared",
          streak: "Current streak",
          best: "Best",
          next: "Next round",
          normal: "Standard trainer",
          silver: "⚡ The Frontier Brain (Silver) is next!",
          gold: "💎 The Frontier Brain (Gold) is next!",
          rematch: "🔥 Brain rematch ×" + (bossInfo && bossInfo.multiplier),
          continue: "Continue — Round " + nextRound,
          abandon: "Abandon",
          hint: "Auto-saved. Continue moves on to the next round, Abandon ends the streak. Between rounds your team unlocks — edit it before continuing.",
          silverAwarded: "🏆 Silver Symbol unlocked!",
          goldAwarded: "🏆 Gold Symbol unlocked!",
        };

    const streak = saved.frontierExt.streaks[facility.id] || 0;
    const best = saved.frontierExt.maxStreaks[facility.id] || 0;
    const symbols = saved.frontierExt.symbols[facility.id] || { silver: false, gold: false };
    // A symbol was just earned if the round that was completed matches the
    // silver/gold threshold. run.round has already been incremented.
    const silverJustEarned = run.round === silverRoundFor(facility) && symbols.silver;
    const goldJustEarned = run.round === goldRoundFor(facility) && symbols.gold;

    let nextBanner = "";
    if (bossInfo) {
      if (bossInfo.kind === "silver") nextBanner = `<div class="frontier-ext-round-next boss">${t.silver}</div>`;
      else if (bossInfo.kind === "gold") nextBanner = `<div class="frontier-ext-round-next boss">${t.gold}</div>`;
      else nextBanner = `<div class="frontier-ext-round-next boss">${t.rematch}</div>`;
    }

    let awards = "";
    if (silverJustEarned) awards += `<div class="frontier-ext-round-award silver">${t.silverAwarded}</div>`;
    if (goldJustEarned) awards += `<div class="frontier-ext-round-award gold">${t.goldAwarded}</div>`;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      // Use the facility icon (without the frontier-flair positioning class)
      // inside a small celebratory card.
      const compactIcon = facility.iconSvg.replace(/\bclass="frontier-flair"\s*/, "");
      top.innerHTML = `
        <div class="frontier-ext-round-header">
          <div class="trophy">🏆</div>
          <div class="facility-icon">${compactIcon}</div>
        </div>
      `;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${name} — ${t.headline}`;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-round-cleared">
          <div class="celebration">${t.justCleared} <strong>${run.round}</strong> ${t.cleared} !</div>
          <div class="stats">
            <span>${t.streak}: <strong>${streak}</strong></span>
            <span>${t.best}: <strong>${best}</strong></span>
          </div>
          ${awards}
          ${nextBanner}
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      // Hostess-style flow à la Gen 3 Battle Tower: two-button choice
      // between continuing the streak and abandoning. The game auto-saves
      // in the background so no separate "Save" option is needed.
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="round-continue">${t.continue}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
        <div class="frontier-ext-round-hint">${t.hint}</div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  // Advance room after a no-combat event (heal / trap). If this pushes us
  // past the final room (shouldn't happen — room 14 always rolls combat
  // doors), we fall through to a full round-complete path for safety.
  function pikeAdvanceAfterEvent(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    run.pikeRoom = (run.pikeRoom || 1) + 1;
    run.pikeDoors = null;
    run.pikeDoorPicked = null;

    if (run.pikeRoom > PIKE_ROOM_COUNT) {
      // Defensive: treat as round victory so the run stays consistent.
      run.pikeRoom = 1;
      if (run.pikeTeam) {
        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (run.pikeTeam[sl]) {
            run.pikeTeam[sl].hpRatio = 1.0;
            run.pikeTeam[sl].status = null;
          }
        }
      }
      run.round += 1;
      saved.frontierExt.streaks[run.facilityId] = run.round;
      if (run.round > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
        saved.frontierExt.maxStreaks[run.facilityId] = run.round;
      }
      if (run.round === silverRoundFor(facility)) saved.frontierExt.symbols[run.facilityId].silver = true;
      else if (run.round === goldRoundFor(facility)) saved.frontierExt.symbols[run.facilityId].gold = true;
      if (typeof updateFrontier === "function") updateFrontier();
      if (typeof closeTooltip === "function") closeTooltip();
      return;
    }
    openPikeRoomPreview(facility);
  }

  // Apply persisted Pike HP + status from run.pikeTeam to the runtime
  // state. Writes to `pkmn[id].playerHp` (species dict — NOT team[slot])
  // and to `team[slot].buffs[status]` (slot-local). Idempotent.
  //
  // Emits diagnostic logs so we can confirm the write lands after the
  // game's setPkmnTeamHp reset — toggle with `window.__frontierExt.pikeDebug`.
  function applyPikeHpStateNow() {
    try {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      if (!run) return;
      if (saved.currentArea !== RUN_AREA_ID) return;
      const fac = FACILITIES.find((f) => f.id === run.facilityId);
      // Accept any facility with persistHpStatus (Pike + Pyramid share
      // this mechanism). Using hasRunTeamState instead of isPikeFacility
      // extends the HP/status restore to all facilities that opt in.
      if (!hasRunTeamState(fac)) return;
      migratePikeTeam();
      if (!run.pikeTeam) return;
      if (typeof team === "undefined" || typeof pkmn === "undefined") return;
      const debug = !!window.__frontierExt?.pikeDebug;
      if (debug) console.log("[pike-apply] start, pikeTeam:", JSON.parse(JSON.stringify(run.pikeTeam)));

      let appliedAny = false;
      for (const sl of ["slot1", "slot2", "slot3"]) {
        const ps = run.pikeTeam[sl];
        if (!ps) continue;
        if (!team[sl] || !team[sl].pkmn) {
          if (debug) console.log(`[pike-apply] ${sl}: no team slot`);
          continue;
        }
        const pokeData = pkmn[team[sl].pkmn.id];
        if (!pokeData) {
          if (debug) console.log(`[pike-apply] ${sl}: no pkmn data for ${team[sl].pkmn.id}`);
          continue;
        }

        // INTEGRITY CHECK — if the Pokémon in this slot has changed since
        // the Pike snapshot (either via a lock bypass or a legitimate
        // swap between rounds that wasn't captured by initPikeTeamFromPreview),
        // DO NOT inherit the old Pokémon's HP/status. Reset this slot to
        // full HP + no status, and update pikeTeam to track the new mon.
        if (ps.pkmnId && ps.pkmnId !== team[sl].pkmn.id) {
          if (debug) console.log(`[pike-apply] ${sl}: pkmn changed ${ps.pkmnId} -> ${team[sl].pkmn.id}, resetting HP/status`);
          ps.pkmnId = team[sl].pkmn.id;
          ps.hpRatio = 1.0;
          ps.status = null;
          // No writes to pokeData.playerHp / team[sl].buffs — the game's
          // setPkmnTeamHp already set full HP + cleared buffs, and that's
          // what we want for the swapped-in Pokémon.
          continue;
        }

        // HP restore. CRITICAL: when ratio is 0 (KO'd in a previous room)
        // we must write exactly 0 — not clamp to 1 — so the game's
        // `playerHp <= 0` death path triggers and the Pokémon can't keep
        // attacking. Clamp to min-1 only for *live* ratios where floor()
        // could otherwise round a tiny positive to 0.
        if (typeof ps.hpRatio === "number" && pokeData.playerHpMax) {
          const newHp = ps.hpRatio > 0
            ? Math.max(1, Math.floor(pokeData.playerHpMax * ps.hpRatio))
            : 0;
          if (debug) console.log(`[pike-apply] ${sl} ${team[sl].pkmn.id}: hp ${pokeData.playerHp}/${pokeData.playerHpMax} -> ${newHp} (ratio ${ps.hpRatio})`);
          pokeData.playerHp = newHp;
          appliedAny = true;
        }

        // Status restore — normalise so legacy keys ("poison") are
        // upgraded before hitting the buff dict.
        const st = ps.status ? normalizePikeStatus(ps.status) : null;
        if (st) {
          if (!team[sl].buffs) team[sl].buffs = {};
          if (debug) console.log(`[pike-apply] ${sl}: status ${st} x${PIKE_STATUS_TURNS}`);
          team[sl].buffs[st] = PIKE_STATUS_TURNS;
          appliedAny = true;
        }
      }

      if (appliedAny) {
        try {
          if (typeof updateTeamPkmn === "function") updateTeamPkmn();
          if (typeof updateTeamBuffs === "function") updateTeamBuffs();
          if (debug) {
            // Read-back verification: did our writes stick?
            for (const sl of ["slot1", "slot2", "slot3"]) {
              if (!team[sl] || !team[sl].pkmn) continue;
              const pd = pkmn[team[sl].pkmn.id];
              console.log(`[pike-apply] readback ${sl}: hp=${pd?.playerHp}/${pd?.playerHpMax} buffs=`, JSON.parse(JSON.stringify(team[sl].buffs || {})));
            }
          }
        } catch (e) { /* UI refresh is best-effort */ }
      }
    } catch (e) {
      console.error("[frontier-ext] pike state apply failed:", e);
    }
  }

  // ─── TEAM-MENU LOCK (ZdC Hoenn) ──────────────────────────────────────────
  // During a frontier-ext run, players must not be able to:
  //   • switch preview teams (the <select id="team-slot-selector">)
  //   • swap Pokémon inside a slot (click on the slot card)
  //   • swap items (click on the held-item card)
  //   • drag-and-drop to reorder slots (exchanges HP/status — critical bug)
  //   • trigger the auto-build button (would wipe the team)
  //
  // Only the "Save and Go" and "Go back" header buttons must remain
  // clickable so the player can still launch the fight or return to the
  // Frontier tab. The CSS class `.frontier-ext-team-locked` on #team-menu
  // + `pointer-events: none` on the slot cards handle interactions. We
  // also add a lock banner and, for Pike, decorate each slot with its
  // stored HP + status so the player can see the team state at a glance.
  // True when the player is actually launching / inside a frontier combat.
  // In this "strict" context we hide the team-switcher too — no browsing
  // other teams mid-launch.
  function isFrontierRunActive() {
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    return saved.currentAreaBuffer === RUN_AREA_ID || saved.currentArea === RUN_AREA_ID;
  }

  // True when the currently-viewed preview team is THE team tied to an
  // active run. In this context we lock edits on the current slot but
  // keep the switcher visible so the player can navigate to another
  // preview team for wild zones / other facilities.
  function isFrontierTiedSlotActive() {
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    const tied = run.tiedPreviewSlot || run.pikeTeamSource;
    if (!tied) return false;
    return saved.currentPreviewTeam === tied;
  }

  // The team is considered "committed" from the moment a run starts.
  // Only between rounds — marked by `run.roundJustCleared` — is the
  // team unlocked for edits, matching the vanilla Gen 3 save-point
  // at the end of each set. Any other state (fresh run before 1st
  // battle, mid-round, paused combat, …) keeps the team locked.
  //
  // Previously this function returned false when no damage / no picked
  // door / etc. was committed, which left a cheat window between "Start
  // run" and the first real combat where the player could swap items or
  // Pokémon. The single-flag check closes that window.
  function isFrontierMidRound() {
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    // Active run exists → locked. roundJustCleared is the only unlock
    // signal; it stays true from onRunVictory until round-continue /
    // continue consumes it when the player starts the next round.
    return !run.roundJustCleared;
  }

  function getFrontierRunFacility() {
    if (typeof saved !== "object" || !saved) return null;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return null;
    return FACILITIES.find((f) => f.id === run.facilityId) || null;
  }

  // Refresh the HP + status pills on each Pike team slot. Reads LIVE
  // values first (combat engine updates pkmn[id].playerHp / team[sl].buffs
  // on every tick) and falls back to run.pikeTeam for the team-preview
  // outside combat. Idempotent — safe to call from both the lock apply
  // path and from updateTeamPkmn / updateTeamBuffs wraps for real-time
  // updates during combat.
  //
  // The overlay DOM is created here if missing, so this function alone
  // is enough to decorate slot cards whether they come from
  // updatePreviewTeam (team menu) or setPkmnTeam (combat sidebar) —
  // both use the same #explore-${slot}-member container id.
  function refreshFrontierPikePills() {
    if (typeof team === "undefined" || typeof pkmn === "undefined") return;
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    const fac = FACILITIES.find((f) => f.id === run.facilityId);
    // Any facility with persistHpStatus gets live HP/status pills on its
    // combat team (Pike + Pyramid currently).
    if (!fac || !hasRunTeamState(fac)) return;
    const l = pikeL10n();
    const statusLabel = {
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
    };
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const card = document.getElementById(`explore-${sl}-member`);
      if (!card) continue;
      // Lazily create the overlay container.
      let overlay = card.querySelector(".frontier-ext-team-slot-hp");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "frontier-ext-team-slot-hp";
        overlay.innerHTML = `<span class="hp-pill">--</span>`;
        if (getComputedStyle(card).position === "static") card.style.position = "relative";
        card.appendChild(overlay);
      }

      // Live values from the combat engine; fallback to pikeTeam snapshot.
      let ratio = 1.0;
      let status = null;
      if (team[sl] && team[sl].pkmn) {
        const pokeData = pkmn[team[sl].pkmn.id];
        if (pokeData && pokeData.playerHpMax) {
          ratio = Math.max(0, Math.min(1, (pokeData.playerHp || 0) / pokeData.playerHpMax));
        }
        if (team[sl].buffs) {
          for (const st of PIKE_TRAP_STATUSES) {
            if (team[sl].buffs[st] > 0) { status = st; break; }
          }
        }
      } else if (run.pikeTeam && run.pikeTeam[sl]) {
        const ps = run.pikeTeam[sl];
        if (typeof ps.hpRatio === "number") ratio = ps.hpRatio;
        if (ps.status) status = normalizePikeStatus(ps.status);
      }

      const pct = Math.round(ratio * 100);
      const hpCls = ratio <= 0 ? "ko" : (ratio <= 0.25 ? "low" : (ratio <= 0.5 ? "mid" : ""));
      const hpText = ratio <= 0 ? "KO" : `${pct}%`;

      const hpPill = overlay.querySelector(".hp-pill");
      if (hpPill) {
        // Only rewrite if changed (avoid useless DOM churn every tick).
        const newClass = `hp-pill ${hpCls}`.trim();
        if (hpPill.className !== newClass) hpPill.className = newClass;
        if (hpPill.textContent !== hpText) hpPill.textContent = hpText;
      }

      let statusPill = overlay.querySelector(".status-pill");
      if (status) {
        if (!statusPill) {
          statusPill = document.createElement("span");
          statusPill.className = "status-pill";
          overlay.appendChild(statusPill);
        }
        const newClass = `status-pill ${status}`;
        if (statusPill.className !== newClass) statusPill.className = newClass;
        const newText = statusLabel[status] || status;
        if (statusPill.textContent !== newText) statusPill.textContent = newText;
      } else if (statusPill) {
        statusPill.remove();
      }
    }
  }

  // Wrap updateTeamPkmn + updateTeamBuffs so each HP / buff tick propagates
  // to our slot pills. Both functions fire very frequently during combat
  // — refreshFrontierPikePills short-circuits out if nothing's open and
  // diffs before any DOM write when it IS, so the cost per call is
  // negligible.
  function installLivePillHooks() {
    const attach = (name) => {
      if (typeof window[name] !== "function") {
        setTimeout(() => attach(name), 200);
        return;
      }
      const flag = `__frontierExtHook_${name}`;
      if (window[flag]) return;
      window[flag] = true;
      const orig = window[name];
      window[name] = function () {
        const res = orig.apply(this, arguments);
        try { refreshFrontierPikePills(); } catch (e) { /* ignore */ }
        return res;
      };
    };
    attach("updateTeamPkmn");
    attach("updateTeamBuffs");
  }

  // Recursion guard. The MutationObserver on #team-menu watches the
  // `class` + `style` attributes, and this function mutates both —
  // without the guard we'd fire a self-triggering loop that freezes the
  // event loop (the browser hangs without any error).
  let __applyingFrontierLock = false;

  // Apply the lock: toggle class + insert banner + decorate slots with
  // Pike HP / status (if it's a Pike run). Safe to call multiple times;
  // each invocation rebuilds the banner + decorations idempotently.
  //
  // Two modes:
  //   • STRICT: combat launch in progress. Hide the preview-team switcher
  //     so nothing moves while confirming the team for battle.
  //   • TIED-SLOT: the currently-browsed preview team IS the one bound to
  //     the active run. Lock edits on this team but let the player switch
  //     to another preview slot freely — they may want to use a different
  //     team for wild zones / other facilities in the meantime.
  function applyFrontierTeamLock() {
    if (__applyingFrontierLock) return;
    __applyingFrontierLock = true;
    try {
      _applyFrontierTeamLockInner();
    } finally {
      // Let one microtask pass before releasing the guard so the observer
      // callbacks triggered by our own DOM writes get swallowed.
      Promise.resolve().then(() => { __applyingFrontierLock = false; });
    }
  }
  function _removeFrontierTeamLockInner() {
    const teamMenu = document.getElementById("team-menu");
    if (!teamMenu) return;
    teamMenu.classList.remove("frontier-ext-team-locked");
    teamMenu.classList.remove("frontier-ext-team-locked-strict");
    const banner = document.getElementById("frontier-ext-team-lock-banner");
    if (banner) banner.remove();
    document.querySelectorAll(".frontier-ext-team-slot-hp").forEach((el) => el.remove());
    document.querySelectorAll("[data-__frontier-locked-drag='1'], [data-__frontierLockedDrag='1']").forEach((el) => {
      el.draggable = true;
      delete el.dataset.__frontierLockedDrag;
    });
  }

  function _applyFrontierTeamLockInner() {
    const teamMenu = document.getElementById("team-menu");
    if (!teamMenu) return;
    const strict = isFrontierRunActive();
    const tiedSlot = isFrontierTiedSlotActive();
    const midRound = isFrontierMidRound();
    const tiedLock = !strict && tiedSlot && midRound;
    if (!strict && !tiedLock) {
      // Inline remove — avoids self-reentry via the guarded wrapper.
      _removeFrontierTeamLockInner();
      return;
    }
    teamMenu.classList.add("frontier-ext-team-locked");
    teamMenu.classList.toggle("frontier-ext-team-locked-strict", strict);
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const facility = getFrontierRunFacility();
    const facName = facility ? (lang === "fr" ? facility.nameFr : facility.nameEn) : "";

    // Insert (or refresh) the lock banner above #team-preview.
    let banner = document.getElementById("frontier-ext-team-lock-banner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "frontier-ext-team-lock-banner";
      banner.className = "frontier-ext-team-lock-banner";
      const preview = document.getElementById("team-preview");
      if (preview && preview.parentNode) {
        preview.parentNode.insertBefore(banner, preview);
      } else {
        teamMenu.appendChild(banner);
      }
    }
    const subtleFr = strict
      ? "· impossible de changer pendant le combat"
      : "· round en cours, bascule vers une autre équipe si besoin d'ailleurs";
    const subtleEn = strict
      ? "· can't be changed during combat"
      : "· round in progress, switch to another team for other zones";
    const txt = lang === "fr"
      ? `<span class="lock-icon">🔒</span><span>Équipe verrouillée — ${facName}</span><span class="subtle">&nbsp;${subtleFr}</span>`
      : `<span class="lock-icon">🔒</span><span>Team locked — ${facName}</span><span class="subtle">&nbsp;${subtleEn}</span>`;
    banner.innerHTML = txt;

    // For Pike: delegate HP / status pill decoration to the shared live
    // refresh helper. It's idempotent (reuses existing overlays, diffs
    // before DOM writes) so calling it here aligns the team-menu view
    // with whatever values the combat engine has right now.
    if (facility && isPikeFacility(facility)) {
      migratePikeTeam();
      try { refreshFrontierPikePills(); } catch (e) { /* ignore */ }
    } else {
      // Non-Pike lock (strict mode for other facilities) — strip any
      // stale Pike pills that might linger from a previous run.
      document.querySelectorAll(".frontier-ext-team-slot-hp").forEach((el) => el.remove());
    }

    // Drag-kill safety net: even with pointer-events:none, some browsers
    // still fire dragstart on native draggable elements. Strip the
    // draggable attribute while locked.
    document.querySelectorAll("#team-preview [draggable='true']").forEach((el) => {
      el.dataset.__frontierLockedDrag = "1";
      el.draggable = false;
    });
  }

  function removeFrontierTeamLock() {
    if (__applyingFrontierLock) return;
    __applyingFrontierLock = true;
    try {
      _removeFrontierTeamLockInner();
    } finally {
      Promise.resolve().then(() => { __applyingFrontierLock = false; });
    }
  }

  // Wrap updatePreviewTeam so every render (including initial open, team
  // switch attempts, auto-refreshes) gets the lock applied or stripped
  // automatically. Stacks after any existing Dome / sanitizer wraps.
  function installTeamMenuLockHook() {
    if (typeof window.updatePreviewTeam !== "function") {
      setTimeout(installTeamMenuLockHook, 200);
      return;
    }
    if (window.__frontierExtTeamLockHooked) return;
    window.__frontierExtTeamLockHooked = true;
    const orig = window.updatePreviewTeam;
    window.updatePreviewTeam = function () {
      // Pre-render the lock banner + class BEFORE the game wipes and
      // rebuilds #team-preview. User-visible timing: banner shows first,
      // then the (locked) team slots paint — no unlocked-team flash.
      try { applyFrontierTeamLock(); }
      catch (e) { console.error("[frontier-ext] pre-render lock failed:", e); }
      const res = orig.apply(this, arguments);
      // Post-render pass re-decorates slot cards with HP / status pills
      // (slots were just freshly re-created, so those overlays were
      // wiped with innerHTML = "" inside updatePreviewTeam).
      try { applyFrontierTeamLock(); }
      catch (e) { console.error("[frontier-ext] post-render lock failed:", e); }
      return res;
    };
  }

  // True if the given Pokémon species ID is currently part of the tied
  // preview team of an active frontier run. Used by the right-click
  // blocker to forbid editing the run's Pokémon even when the player
  // browses to them from ANY screen (dex, storage, genetics, etc.).
  function isPkmnInActiveRunTeam(pkmnId) {
    if (!pkmnId) return false;
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    const tiedSlot = run.tiedPreviewSlot || run.pikeTeamSource;
    if (!tiedSlot) return false;
    const pt = saved.previewTeams && saved.previewTeams[tiedSlot];
    if (!pt) return false;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (pt[sl] && pt[sl].pkmn === pkmnId) return true;
    }
    return false;
  }

  // Capture-phase right-click / long-press blocker that stops the game's
  // tooltip.js contextmenu handler from opening the Pokémon editor on
  // any team sprite during an active frontier run.
  //
  // Two independent rules:
  //   • Scope to #explore-team (combat sidebar) + #team-preview
  //     (team-menu) during a run — covers sprites regardless of which
  //     species they depict.
  //   • Any element whose data-pkmn-editor VALUE matches a species in
  //     the tied run-team is blocked anywhere (dex, storage, genetics,
  //     party overview) so you can't bypass the lock by looking up the
  //     mon through a different screen.
  function installFrontierRightClickBlock() {
    if (window.__frontierExtContextBlock) return;
    window.__frontierExtContextBlock = true;
    const shouldBlock = (e) => {
      if (typeof saved !== "object" || !saved) return false;
      if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
      const target = e.target && e.target.closest
        ? e.target.closest("[data-pkmn-editor]")
        : null;
      if (!target) return false;
      // Rule 1: anywhere, if the sprite points to a run-team species.
      const pkmnId = target.dataset && target.dataset.pkmnEditor;
      if (isPkmnInActiveRunTeam(pkmnId)) return true;
      // Rule 2: anywhere inside team-preview / explore-team containers.
      const exploreTeam = document.getElementById("explore-team");
      const teamPreview = document.getElementById("team-preview");
      return (exploreTeam && exploreTeam.contains(target))
          || (teamPreview && teamPreview.contains(target));
    };
    const blocker = (e) => {
      if (!shouldBlock(e)) return;
      try { e.preventDefault(); } catch (_) {}
      try { e.stopImmediatePropagation(); } catch (_) {}
      try { e.stopPropagation(); } catch (_) {}
    };
    document.addEventListener("contextmenu", blocker, { capture: true });
  }

  // Capture-phase event filter at the document level. This is the
  // ultimate safety net — it fires BEFORE any game listener (the game's
  // own dragstart/click/touchstart handlers on slot cards, held-item
  // cards, etc. all use bubble phase). If the event target is inside a
  // locked #team-preview, we preventDefault + stopImmediatePropagation so
  // the game never sees it.
  //
  // Even if somebody (me or the user) forgets to set pointer-events or
  // draggable=false on a new DOM node, this blocks the interaction
  // regardless. Events blocked: pointerdown, mousedown, click, dragstart,
  // touchstart (critical for mobile + trackpad drag).
  function installTeamLockEventFilter() {
    if (window.__frontierExtLockFilterInstalled) return;
    window.__frontierExtLockFilterInstalled = true;

    const shouldBlock = (e) => {
      const teamMenu = document.getElementById("team-menu");
      if (!teamMenu || !teamMenu.classList.contains("frontier-ext-team-locked")) return false;
      const preview = document.getElementById("team-preview");
      if (!preview) return false;
      // Block anything inside the team-preview container (slots, held
      // items, move tags, sprite — everything). Header buttons (save,
      // back) live outside and stay clickable.
      return preview.contains(e.target);
    };
    const blocker = (e) => {
      if (!shouldBlock(e)) return;
      try { e.preventDefault(); } catch (_) {}
      try { e.stopImmediatePropagation(); } catch (_) {}
      try { e.stopPropagation(); } catch (_) {}
    };
    // capture: true fires before game listeners on descendants.
    const opts = { capture: true, passive: false };
    ["pointerdown", "mousedown", "click", "dragstart", "touchstart", "touchmove"]
      .forEach((evt) => document.addEventListener(evt, blocker, opts));
  }

  // Secondary safety net: a MutationObserver that watches #team-menu for
  // visibility / class changes and re-applies the lock. Catches every
  // code path that shows the menu — including paths that bypass
  // updatePreviewTeam (e.g. just toggling display), and repairs state
  // after any F5 / post-bootstrap load race.
  function installTeamMenuObserver() {
    const teamMenu = document.getElementById("team-menu");
    if (!teamMenu) {
      setTimeout(installTeamMenuObserver, 300);
      return;
    }
    if (window.__frontierExtTeamMenuObserved) return;
    window.__frontierExtTeamMenuObserved = true;
    const observer = new MutationObserver(() => {
      try { applyFrontierTeamLock(); }
      catch (e) { /* defensive — never throw from observer */ }
    });
    observer.observe(teamMenu, { attributes: true, attributeFilter: ["style", "class"] });
    // Also run once now in case the menu is already open on load.
    try { applyFrontierTeamLock(); } catch (e) { /* ignore */ }
  }

  // Pokechill resets HP + clears all buffs in `initialiseArea()`
  // (explore.js:3937+ → setPkmnTeamHp() at 3958, then the buff purge
  // loop at 3967-3969). That function runs via a setTimeout inside
  // injectPreviewTeam (teams.js:487 → ~500ms delay) — so a naive wrap
  // on injectPreviewTeam runs BEFORE the reset and gets clobbered.
  //
  // The correct hook point is `initialiseArea` itself: wrap it, let the
  // game reset HP/buffs to their defaults, then re-apply our Pike state
  // at the tail of the same call. Every post-orig write overrides the
  // freshly-maxed value — perfect timing.
  function installPikeHpRestoreHook() {
    if (typeof window.initialiseArea !== "function") {
      setTimeout(installPikeHpRestoreHook, 200);
      return;
    }
    if (window.__frontierExtPikeHpHooked) return;
    window.__frontierExtPikeHpHooked = true;
    const orig = window.initialiseArea;
    window.initialiseArea = function () {
      const res = orig.apply(this, arguments);
      try { applyPikeHpStateNow(); }
      catch (e) { console.error("[frontier-ext] pike post-init apply failed:", e); }
      // Decorate the freshly-built combat sidebar slots (#explore-slotN-
      // member). setPkmnTeam just ran inside initialiseArea and rebuilt
      // those divs from scratch, so any previous overlay is gone.
      try { refreshFrontierPikePills(); }
      catch (e) { /* best-effort */ }
      return res;
    };
  }

  // Snapshot HP% / status from the runtime team[] into run.pikeTeam at
  // the moment combat ends. Called from the leaveCombat hook BEFORE orig
  // fires, so the game hasn't yet reset buffs / HP.
  //
  // HP source: `pkmn[team[sl].pkmn.id].playerHp` / `.playerHpMax`
  // (teams.js:544+).
  // Status source: `team[sl].buffs.<name>` as a turn counter
  // (explore.js:2566 etc.).
  function snapshotPikeHpFromRuntime() {
    try {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      if (!run) return;
      const fac = FACILITIES.find((f) => f.id === run.facilityId);
      // Snapshot HP/status for ANY facility that opts into persistHpStatus.
      if (!hasRunTeamState(fac)) return;
      if (typeof team === "undefined" || typeof pkmn === "undefined") return;
      migratePikeTeam();
      if (!run.pikeTeam) return;
      const debug = !!window.__frontierExt?.pikeDebug;

      for (const sl of ["slot1", "slot2", "slot3"]) {
        const ps = run.pikeTeam[sl];
        if (!ps) continue;
        if (!team[sl] || !team[sl].pkmn) continue;
        const pokeData = pkmn[team[sl].pkmn.id];
        if (pokeData && pokeData.playerHpMax) {
          const ratio = Math.max(0, Math.min(1, (pokeData.playerHp || 0) / pokeData.playerHpMax));
          if (debug) console.log(`[pike-snap] ${sl} ${team[sl].pkmn.id}: hp ${pokeData.playerHp}/${pokeData.playerHpMax} -> ratio ${ratio}`);
          ps.hpRatio = ratio;
        }
        let activeStatus = null;
        const buffs = team[sl].buffs;
        if (buffs) {
          for (const st of PIKE_TRAP_STATUSES) {
            if (buffs[st] > 0) { activeStatus = st; break; }
          }
        }
        if (debug && activeStatus !== ps.status) console.log(`[pike-snap] ${sl}: status ${ps.status} -> ${activeStatus}`);
        ps.status = activeStatus;
      }
    } catch (e) {
      console.error("[frontier-ext] pike HP snapshot failed:", e);
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

    // Dôme: enemy AI picks DOME_ACTIVE_SIZE random mons from their 3-team
    // for the actual match. Keep `trainer.team` untouched (so the bracket
    // preview can still show the full roster); just pick a subset for
    // the area mounting.
    let effectiveTeam = trainer.team;
    if (isDomeFacility(facility) && trainer.team.length > DOME_ACTIVE_SIZE) {
      const indices = [0, 1, 2]
        .sort(() => Math.random() - 0.5)
        .slice(0, DOME_ACTIVE_SIZE);
      effectiveTeam = indices.map((i) => trainer.team[i]);
    }

    const team = {};
    // Parallel array: simulated natures per slot so the Palace rule can look
    // up the active opponent's nature by slot index at combat time.
    const naturesBySlot = {};
    effectiveTeam.forEach((slot, i) => {
      const slotN = i + 1;
      if (!pkmn[slot.id]) return;
      team["slot" + slotN] = pkmn[slot.id];
      team["slot" + slotN + "Moves"] = slot.moves;
      naturesBySlot[slotN] = slot.nature || simulateNatureFor(slot.id) || "";
    });

    // Fresh arena state — every new combat starts judge-eligible from 0.
    if (isArenaFacility(facility)) arenaResetState();

    areas[RUN_AREA_ID] = {
      id: RUN_AREA_ID,
      name: trainer.name,
      background: facility.background,
      sprite: trainer.sprite,
      // `difficulty` is read by explore.js:531 as the enemy's HP MULTIPLIER
      // (`hpMultiplier = areas[currentArea].difficulty`). The player's own
      // hpMultiplier is 4 for trainer areas (teams.js:514). Anything above
      // ~5-6 tilts fights heavily toward the NPC tank.
      //   • Tier 1 : 4  (parity with player — round 1 feels fair)
      //   • Tier 2 : 6
      //   • Tier 3 : 8
      //   • Tier 4 : 10
      //   • Tier 5 : 12 (endgame, 3× player HP pool)
      // Post-Gold rematches add via the multiplier field separately.
      difficulty: (trainer.tier ? trainer.tier * 2 + 2 : 4),
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

  // Size of the team tied to THIS run — the preview slot the player
  // committed at "start" time. Independent of whatever slot they may
  // have switched to in the team menu. Used to catch scenarios where
  // the tied team was emptied mid-run (pre-fix saves, external edits).
  function tiedTeamSize(run) {
    if (!run || !run.tiedPreviewSlot) return 0;
    try {
      const pt = saved.previewTeams && saved.previewTeams[run.tiedPreviewSlot];
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

  // Central guard called at EVERY in-run interaction point that could
  // otherwise progress the run without a real fight (clicking a map
  // tile, walking onto stairs, opening the floor map / swap modal,
  // launching combat, onRunVictory). Returns true if the run can
  // safely proceed. Returns false (and pops the team-size error) if:
  //   • the run exists but the tied preview slot no longer has 3
  //     filled slots (someone emptied it), OR
  //   • the run's currently-selected preview team has <3 filled slots
  //     and the player is about to enter combat on it.
  // Factory is exempt — rentals replace the player's team entirely.
  function canRunProceed(facility) {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return true; // no run, nothing to guard
    if (isFactoryFacility(facility)) return true;
    if (tiedTeamSize(run) !== 3) {
      showTeamSizeError(facility);
      return false;
    }
    return true;
  }

  // Team size brought INTO the facility. Every Hoenn facility uses 3 per
  // canonical Gen 3 rules. The Dôme still uses 3 here because the
  // signature rule is "bring 3, pick 2 per match" (see DOME_ACTIVE_SIZE
  // below and the player-pick modal in openDomePokemonSelection).
  function expectedTeamSize(facility) {
    return 3;
  }

  // Dôme only — how many of the 3 Pokémon actually fight in each match.
  // Canonical Gen 3 Emerald: both sides see each other's 3-mon roster,
  // then each side secretly picks 2 to send into battle.
  const DOME_ACTIVE_SIZE = 2;

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

    // Team-size check — skipped if a Dôme selection has already been
    // applied (handleRunAction("confirm-dome") path). In that state the
    // preview team has been mutated to 2 slots on purpose, and the size
    // check was already done in handleRunAction("launch") *before* the
    // mutation happened. Two-layered validation: the current preview
    // must have 3 (for the vanilla team-preview menu this opens), AND
    // the tied slot must still have 3 (catches emptied tied team).
    const domeApplied = run.domeTeamBackup && isDomeFacility(facility);
    if (!domeApplied) {
      const teamSize = currentPreviewTeamSize();
      if (teamSize !== 3) {
        showTeamSizeError(facility);
        return;
      }
      if (!canRunProceed(facility)) return;
    }

    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);
    // For Tower/Palace/Arena/Factory the brain only appears at the FINAL
    // battle of a boss round. Battles 1..N-1 use regular pool trainers
    // even if nextRound === SILVER/GOLD_ROUND. Dome has its own brain
    // placement (last bracket slot, handled by ensureBracketForDome).
    // Pike triggers brain through its door picker — any launchCombat
    // coming from a "brain" door already implies the final-room moment,
    // so Pike keeps the original behaviour unchanged.
    const perRound = battlesPerRound(facility);
    const battleInRound = run.battleInRound || 1;
    const brainDueThisBattle = bossInfo
      && !isDomeFacility(facility)
      && (isPikeFacility(facility) || battleInRound === perRound);

    // Regenerate (or keep) the upcoming trainer for this round
    let trainer;
    if (isDomeFacility(facility)) {
      // Dome: pull the pre-generated trainer from the bracket array at
      // the current sub-position (bracketBattle 1/2/3).
      const bracket = ensureBracketForDome(facility);
      const idx = (run.bracketBattle || 1) - 1;
      trainer = bracket[idx] || generateTrainer(nextRound, facility);
    } else if (brainDueThisBattle) {
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
    // Belt-and-braces: any call site that reaches onRunVictory with an
    // invalid tied team means something slipped past the per-entry
    // guards. Refuse to credit the streak and abandon the run instead
    // of advancing. Factory is exempt (rentals, no tied preview).
    if (!isFactoryFacility(facility) && tiedTeamSize(run) !== 3) {
      // Silent abandon — we don't want to fire showTeamSizeError here
      // since the caller may not be showing a tooltip (leaveCombat
      // path). Just clear activeRun + unlock team.
      saved.frontierExt.activeRun = null;
      try { removeFrontierTeamLock(); } catch (e) { /* ignore */ }
      if (typeof updateFrontier === "function") updateFrontier();
      return;
    }

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

    // Pyramid — combats happen inside the dungeon. Round completion is
    // driven by the dungeon state (floor > 7 OR floor-7 brain win), not
    // a fixed battle count. So we skip the battleInRound logic here and
    // handle it separately below.
    if (isPyramidFacility(facility)) {
      const brainWin = run.pyramidEncounterKind === "brain";
      run.pyramidEncounterKind = null;
      if (brainWin) {
        // Boss-floor brain combat cleared → full round complete.
        run.pyramidRoundComplete = true;
      }
      if (run.pyramidRoundComplete) {
        run.pyramidRoundComplete = false;
        run.pyramid = null; // fresh dungeon next round
        // Fall through to round++ path below.
      } else {
        // Normal dungeon encounter (trainer / wild) — stay in the
        // dungeon. The run.pyramid state is kept; exit-redirect hook
        // auto-reopens the floor map.
        run.upcomingTrainer = null;
        return;
      }
    }

    // Tower / Palace / Arena / Factory — battles come in sets of N (usually
    // 7 per canonical Gen 3 structure). A victory in battle 1..N-1 of a
    // round just advances the counter; only the Nth win triggers the
    // round-advance + boss + round-cleared modal.
    const perRound = battlesPerRound(facility);
    if (perRound > 1 && !isPikeFacility(facility) && !isDomeFacility(facility) && !isPyramidFacility(facility)) {
      // Factory canonical swap rule: after every battle except the last
      // of a round, the player may trade one of their 3 rentals with one
      // of the defeated opponent's 3. Stash the opponent's team HERE,
      // before upcomingTrainer is nulled out, so the swap modal can
      // render the candidates.
      //
      // The swap spec captures the opponent's ACTUAL combat stats ("you
      // take the Pokémon that hit you" — canon Gen 3 Factory): IVs +
      // ability are snapshotted from pkmn[id] as it stood during the
      // fight, not re-rolled. Moves + nature come from the NPC trainer
      // spec. Species overlap with the player's rental team was already
      // eliminated at trainer-generation time (see openSimulatedFight
      // dedupe block), so pkmn[id] here reflects the opponent's own
      // state (either trained by the player in the main game, or the
      // engine defaults for never-caught species).
      if (isFactoryFacility(facility)
          && run.upcomingTrainer
          && (run.battleInRound || 1) < perRound) {
        run.pendingFactorySwap = (run.upcomingTrainer.team || []).map((r) => {
          const p = (typeof pkmn !== "undefined" && pkmn[r.id]) ? pkmn[r.id] : null;
          return {
            id: r.id,
            moves: r.moves || pickMovesetFor(r.id),
            nature: r.nature || simulateNatureFor(r.id) || "",
            ivs: (p && p.ivs) ? { ...p.ivs } : { hp: 0, atk: 0, def: 0, satk: 0, sdef: 0, spe: 0 },
            ability: (p && p.ability) ? p.ability : null,
          };
        });
      }
      run.battleInRound = (run.battleInRound || 1) + 1;
      if (run.battleInRound <= perRound) {
        run.upcomingTrainer = null;
        return;
      }
      // Round cleared — reset counter, fall through to round++ path.
      run.battleInRound = 1;
    }

    // Pike: combat victory advances the room counter. The round only ticks
    // over when room 14 is cleared. HP/status persist between rooms and
    // reset only when a full round is done.
    if (isPikeFacility(facility)) {
      run.pikeRoom = (run.pikeRoom || 1) + 1;
      run.pikeDoors = null;
      run.pikeDoorPicked = null;
      if (run.pikeRoom <= PIKE_ROOM_COUNT) {
        // More rooms to go — keep HP/status, don't advance round.
        run.upcomingTrainer = null;
        return;
      }
      // Final room cleared → round advance + heal / cure the Pike team
      // for the next round. Don't wipe pikeTeam: we keep the same mons /
      // items for the whole run, just restore them to full between rounds.
      run.pikeRoom = 1;
      if (run.pikeTeam) {
        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (run.pikeTeam[sl]) {
            run.pikeTeam[sl].hpRatio = 1.0;
            run.pikeTeam[sl].status = null;
          }
        }
      }
    }

    run.round += 1;
    saved.frontierExt.streaks[run.facilityId] = run.round;
    if (run.round > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = run.round;
    }
    if (run.round === silverRoundFor(facility)) saved.frontierExt.symbols[run.facilityId].silver = true;
    else if (run.round === goldRoundFor(facility)) saved.frontierExt.symbols[run.facilityId].gold = true;
    run.upcomingTrainer = null;
    // Flag the round-clear so the exit-redirect hook shows a celebration
    // modal (matches vanilla Battle Tower's "save & change team every
    // 7 floors" pattern — each facility uses the modal between rounds).
    run.roundJustCleared = true;
  }

  function onRunDefeat() {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const final = run.round;
    if (final > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = final;
    }
    // Factory: restore overridden moves + preview slot BEFORE clearing
    // activeRun, otherwise the stash references disappear.
    const fac = FACILITIES.find((f) => f.id === run.facilityId);
    if (isFactoryFacility(fac)) cleanupFactoryRun(run);
    if (isPyramidFacility(fac)) {
      try { setPyramidModalSizing(false); } catch (e) { /* ignore */ }
    }
    saved.frontierExt.activeRun = null;
    saved.frontierExt.streaks[run.facilityId] = 0;
    // Run is dead → remove the team-menu lock so the player can reorganise
    // their teams freely again.
    try { removeFrontierTeamLock(); } catch (e) { /* ignore */ }
  }

  // Wrap updateVS (explore.js:6797) so our ephemeral RUN_AREA_ID area
  // never appears in the VS Trainers listing. The vanilla filter is just
  // `type === "vs" && !defeated`, which matches our ephemeral area between
  // when buildEphemeralRunArea creates it (defeated=false) and when the
  // game flags it defeated=true on victory. If the player escapes the
  // team-preview menu, or if they lose a run (defeated stays false), the
  // ghost trainer stays in `areas` and leaks into VS until a page refresh.
  //
  // We can't just delete the area post-combat (exitCombat at explore.js:780
  // reads `areas[saved.lastAreaJoined].type` and crashes if missing), so
  // instead we temporarily pull it out of `areas` just while updateVS
  // iterates, then restore it. No state loss, zero VS leak.
  function installVSLeakFilter() {
    if (typeof window.updateVS !== "function") {
      setTimeout(installVSLeakFilter, 150);
      return;
    }
    if (window.__frontierExtVSHooked) return;
    window.__frontierExtVSHooked = true;
    const orig = window.updateVS;
    window.updateVS = function () {
      const stash = (typeof areas === "object" && areas) ? areas[RUN_AREA_ID] : null;
      if (stash) delete areas[RUN_AREA_ID];
      try {
        return orig.apply(this, arguments);
      } finally {
        if (stash) areas[RUN_AREA_ID] = stash;
      }
    };
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
          // Post-combat auto-reopen. The ZdC flow should always land on a
          // clear "next step" modal — never dump the player on the
          // Frontier tab with no guidance. Branches, in priority order:
          //   1. Round was just cleared (any facility) : celebration modal
          //   2. Pic mid-round                         : 3-door picker
          //   3. Dôme mid-bracket                      : bracket preview
          //   4. Tour/Palais/Arène/Usine mid-round     : next-battle preview
          // Re-check activeRun inside the deferred callback so an abandon
          // between now and the timeout firing doesn't resurrect anything.
          setTimeout(() => {
            const laterRun = saved && saved.frontierExt && saved.frontierExt.activeRun;
            if (!laterRun) return;
            const fac = FACILITIES.find((f) => f.id === laterRun.facilityId);
            if (!fac) return;

            // 1. End-of-round celebration (flag stays alive until
            //    round-continue / continue consumes it).
            if (laterRun.roundJustCleared) {
              showRoundClearedModal(fac);
              return;
            }

            // 2. Pic — auto-open the 3-curtain picker at the next room.
            if (isPikeFacility(fac)
                && laterRun.pikeRoom >= 1
                && laterRun.pikeRoom <= PIKE_ROOM_COUNT) {
              openPikeRoomPreview(fac);
              return;
            }

            // 2b. Pyramide — come back to the floor map after every
            //     combat (dungeon tile-by-tile exploration). The active
            //     pyramid state is kept alive across combats.
            if (isPyramidFacility(fac) && laterRun.pyramid) {
              openPyramidFloorMap(fac);
              return;
            }

            // 3. Dôme — auto-open the bracket preview on the next
            //    sub-battle of the same round.
            if (isDomeFacility(fac) && (laterRun.bracketBattle || 1) > 1) {
              openDomeBracketPreview(fac);
              return;
            }

            // 4. Tour / Palais / Arène / Usine — auto-open the next-step
            //    screen. Factory first shows the post-battle swap modal
            //    (when a swap is pending); other facilities go straight
            //    to the simulated-fight preview for the next battle.
            //    battleInRound has been incremented to the *next* battle
            //    in onRunVictory (stays <= perRound until round cleared).
            const perRound = battlesPerRound(fac);
            if (perRound > 1
                && !isPikeFacility(fac)
                && !isDomeFacility(fac)
                && !isPyramidFacility(fac)
                && (laterRun.battleInRound || 1) > 1
                && (laterRun.battleInRound || 1) <= perRound) {
              // Factory post-battle swap offer — renders instead of the
              // simulated fight preview. On skip / confirm the swap
              // handlers themselves open the fight preview.
              if (isFactoryFacility(fac) && Array.isArray(laterRun.pendingFactorySwap)) {
                openFactorySwapModal(fac);
                return;
              }
              openSimulatedFight(fac);
              return;
            }
          }, 80);
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
      // Pike: snapshot HP% + status from runtime team[] BEFORE the game
      // starts cleaning up combat state. We must act before orig to catch
      // the real values; the post-orig branch then does the higher-level
      // victory/defeat routing.
      if (wasFrontierRun && wasVictory) {
        try { snapshotPikeHpFromRuntime(); }
        catch (e) { console.error("[frontier-ext] pike snapshot failed:", e); }
      }
      const res = orig.apply(this, arguments);
      if (wasFrontierRun) {
        try {
          // Hide the "Rejoin" (recombattre) button — it reads stale trainer
          // data from our ephemeral RUN_AREA_ID and doesn't actually re-fire
          // the facility's next-round logic. Frontier runs ALWAYS advance via
          // the facility preview's Continue button, never the area-rejoin
          // shortcut, so force it hidden in our zones regardless of
          // victory/defeat. Vanilla code sets it visible at explore.js:821
          // then conditionally hides on defeated — our override covers the
          // defeat case too.
          const rejoinBtn = document.getElementById("area-rejoin");
          if (rejoinBtn) rejoinBtn.style.display = "none";
          if (wasVictory) onRunVictory();
          else onRunDefeat();
          // No more preview-team mutation to restore — the Dôme now
          // filters team[] at runtime via installDomeTeamFilter, leaving
          // saved.previewTeams untouched throughout the match.
          // Legacy safety: if an older buggy save still has a backup,
          // restoreDomeSelection() heals it. No-op otherwise.
          restoreDomeSelection();
          const r = saved.frontierExt && saved.frontierExt.activeRun;
          if (r) r.domeSelection = [];
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
        sanitizeNullSlots();
        recoverCorruptedDomeTeam();
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
    // Inject CSS FIRST — before any hook. Previously injectStyles() ran
    // only inside the updateFrontier wrap, which meant that if the player
    // refreshed the page and opened the team menu before ever visiting
    // the Frontier tab, our .frontier-ext-team-lock-banner class had no
    // matching rule and the banner rendered as plain text. Injecting up
    // front makes every style available the moment the DOM is ready.
    try { injectStyles(); } catch (e) { console.error("[frontier-ext] injectStyles failed:", e); }
    installInjection();
    installHelpTooltip();
    installCombatHook();
    installExitRedirect();
    installVSLeakFilter();
    installPalaceMoveHook();
    installPalaceEnemyHook();
    installArenaCombatHooks();
    installTeamSanitizerHooks();
    installDomeTeamFilter();
    installPikeHpRestoreHook();
    installTeamMenuLockHook();
    installTeamMenuObserver();
    installTeamLockEventFilter();
    installFrontierRightClickBlock();
    installLivePillHooks();
    // Attempt a corrupt-team recovery on boot. Safe if nothing to recover.
    try {
      ensureSaveSlot();
      sanitizeNullSlots();
      recoverCorruptedDomeTeam();
    } catch (e) { /* ignore — saved may not be ready yet */ }
    // Saved may load asynchronously after script runs — retry the
    // sanitizer a few times over the first couple seconds so the fix
    // lands regardless of the game's init ordering.
    let attempts = 0;
    const retry = () => {
      attempts++;
      try {
        const healed = sanitizeNullSlots();
        if (healed > 0 && typeof updatePreviewTeam === "function") {
          // Refresh the team-editor UI if it's already open.
          try { updatePreviewTeam(); } catch (e) { /* ignore */ }
        }
      } catch (e) { /* ignore */ }
      if (attempts < 6) setTimeout(retry, 500);
    };
    setTimeout(retry, 300);
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
    GENETIC_MOVES_FOR_ALL,
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
    // Pyramid debug
    isPyramidFacility,
    isInPyramidRun,
    generatePyramidFloor,
    openPyramidFloorMap,
    pyramidMovePlayerTo,
    pyramidResolveTile,
    pyramidAdvanceFloor,
    pyramidAfterEvent,
    PYR_TILES,
    PYR_GRID_SIZE,
    // Factory debug
    isFactoryFacility,
    generateFactoryRentalPool,
    openFactoryRentalSelection,
    toggleFactorySelection,
    confirmFactorySelection,
    openFactorySwapModal,
    confirmFactorySwap,
    applyFactoryMoves,
    restoreFactoryMoves,
    enterFactoryPreviewSlot,
    restoreFactoryPreviewSlot,
    cleanupFactoryRun,
    FACTORY_POOL_SIZE,
    FACTORY_TEAM_SIZE,
    FACTORY_PREVIEW_SLOT,
    // Arena debug
    isArenaFacility,
    isInArenaRun,
    arenaGetState,
    arenaResetState,
    arenaRenderJudge,
    arenaCheckJudge,
    arenaReadHpRatios,
    showArenaVerdict,
    arenaBiasPoolBySpeed,
    arenaBiasNature,
    ARENA_TURNS_PER_SIDE,
    // Dome debug
    isDomeFacility,
    ensureBracketForDome,
    openDomeBracketPreview,
    openDomePokemonSelection,
    applyDomeSelection,
    restoreDomeSelection,
    installDomeTeamFilter,
    recoverCorruptedDomeTeam,
    sanitizeNullSlots,
    DOME_BRACKET_SIZE,
    DOME_ACTIVE_SIZE,
    // Pike debug
    isPikeFacility,
    openPikeRoomPreview,
    rollPikeDoors,
    rollSinglePikeDoor,
    applyPikeDoor,
    applyPikeHealRatio,
    applyPikeTrap,
    pikeAdvanceAfterEvent,
    snapshotPikeHpFromRuntime,
    applyPikeHpStateNow,
    initPikeTeamFromPreview,
    migratePikeState,
    migratePikeTeam,
    normalizePikeStatus,
    // Round-cleared modal (universal across facilities)
    showRoundClearedModal,
    // Team-menu lock
    applyFrontierTeamLock,
    removeFrontierTeamLock,
    isFrontierRunActive,
    isFrontierTiedSlotActive,
    isFrontierMidRound,
    // Flip window.__frontierExt.pikeDebug = true to log every snapshot/apply.
    pikeDebug: false,
    PIKE_ROOM_COUNT,
    PIKE_DOOR_COUNT,
    PIKE_TRAP_STATUSES,
    PIKE_STATUS_TURNS,
    CURTAIN_SVG,
    difficultyMultiplier,
    getBossRoundInfo,
    silverRoundFor,
    goldRoundFor,
    postGoldEveryFor,
    battlesPerRound,
    // Pool debug
    getPool,
    getPoolForFacility,
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
