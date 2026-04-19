// ============================================
// BATTLE FRONTIER EXTENSION — fidèle à Pokémon Emeraude
// ============================================
//
// Adds 5 additional facilities to the existing Battle Frontier menu:
//   • Palais de Combat (Battle Palace)     — auto-move by nature
//   • Dojo de Combat   (Battle Arena)      — 3-turn judged rounds
//   • Pic de Combat    (Battle Pike)       — 3-door choose-your-fate, HP/status persist
//   • Pyramide de Combat (Battle Pyramid)  — dungeon grid with random encounters
//   • Usine Secrète    (Hidden Factory)    — full-random rentals + swap after win
//
// Canonical Gen 3 rules:
//   • Battle 7   → Silver Symbol (Frontier Brain 1st fight)
//   • Battle 49  → Gold   Symbol (Frontier Brain rematch, upgraded team)
//   • All facilities are "Repeatable" — replayable infinitely, unlike VS trainers.
//
// Same overlay pattern as scripts/i18n/:
//   • No original game file touched.
//   • Injected via one <script> tag in index.html.
//   • Data-driven (FACILITIES array) — easy to tweak rules or add more.
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
  // Suffixed "(secrète)" / "(secret)" so they read as bonus-content companions
  // to whatever vanilla Pokechill ships (Tour, Usine, Arène — different rules).
  //
  // All use backgrounds that already exist in img/bg/ so we don't have to ship
  // new art with this feature.
  const FACILITIES = [
    {
      id: "frontierTowerSecret",
      nameEn: "Battle Tower (secret)",
      nameFr: "Tour de Combat (secrète)",
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
      nameEn: "Battle Palace (secret)",
      nameFr: "Palais de Combat (secrète)",
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
      nameEn: "Battle Arena (secret)",
      nameFr: "Arène de Combat (secrète)",
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
      nameEn: "Battle Dome (secret)",
      nameFr: "Dôme de Combat (secrète)",
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
      nameEn: "Battle Factory (secret)",
      nameFr: "Usine de Combat (secrète)",
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
      nameEn: "Battle Pike (secret)",
      nameFr: "Pic de Combat (secrète)",
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
      nameEn: "Battle Pyramid (secret)",
      nameFr: "Pyramide de Combat (secrète)",
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
  function ensureSaveSlot() {
    if (typeof saved !== "object" || !saved) return;
    if (!saved.frontierExt) {
      saved.frontierExt = {
        streaks: {}, // { frontierPalace: 0, frontierDojo: 0, ... }
        maxStreaks: {},
        symbols: {}, // { frontierPalace: { silver: false, gold: false }, ... }
      };
    }
    for (const f of FACILITIES) {
      if (saved.frontierExt.streaks[f.id] === undefined) saved.frontierExt.streaks[f.id] = 0;
      if (saved.frontierExt.maxStreaks[f.id] === undefined) saved.frontierExt.maxStreaks[f.id] = 0;
      if (!saved.frontierExt.symbols[f.id]) saved.frontierExt.symbols[f.id] = { silver: false, gold: false };
    }
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
    `;
    const style = document.createElement("style");
    style.id = "frontier-ext-css";
    style.textContent = css;
    document.head.appendChild(style);
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

  // ─── 6. PREVIEW MODAL (placeholder — will launch combat later) ────────────
  function openFacilityPreview(facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const name = lang === "fr" ? facility.nameFr : facility.nameEn;
    const desc = lang === "fr" ? facility.descFr : facility.descEn;
    const brainName = lang === "fr" ? facility.brain.nameFr : facility.brain.nameEn;
    const comingSoon = lang === "fr"
      ? "⚠️ Combat à venir — cette facility est en développement."
      : "⚠️ Battle coming soon — this facility is under development.";
    const brainLabel = lang === "fr" ? "Cerveau de la Frontière :" : "Frontier Brain:";

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
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `<div style="padding: 0.5rem;">${desc}</div>`;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div style="padding: 0.5rem; line-height: 1.5;">
          <div><strong>${brainLabel}</strong> ${brainName}</div>
          <div style="opacity: 0.7; margin-top: 0.3rem;">${comingSoon}</div>
        </div>
      `;
    }

    if (typeof openTooltip === "function") openTooltip();
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
    ensureSaveSlot,
    buildTile,
    openFacilityPreview,
  };
})();
