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
  const FACILITIES = [
    {
      id: "frontierPalace",
      nameEn: "Battle Palace",
      nameFr: "Palais de Combat",
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
      // iconEmoji: "👑", // placeholder — will swap to real SVG later
      iconEmoji: "🏯",
      hueRotate: 60, // degrees — tints the tile background
      rules: { autoMoveByNature: true },
    },
    {
      id: "frontierDojo",
      nameEn: "Battle Arena",
      nameFr: "Dojo de Combat",
      descEn: "3 turns max per battle. If neither side KOs, judges decide based on Mind / Skill / Body scores.",
      descFr: "3 tours max par combat. Si aucun K.O., le jury décide selon Esprit / Technique / Corps.",
      brain: {
        id: "greta",
        sprite: "arena_tycoon_greta",
        nameEn: "Arena Tycoon Greta",
        nameFr: "Maîtresse du Dojo Gabrielle",
        teamSilver: ["heracross", "umbreon", "hariyama"],
        teamGold: ["hariyama", "shedinja", "medicham"],
      },
      iconEmoji: "🥋",
      hueRotate: 0,
      rules: { threeTurnJudge: true },
    },
    {
      id: "frontierPike",
      nameEn: "Battle Pike",
      nameFr: "Pic de Combat",
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
      iconEmoji: "🐍",
      hueRotate: -40,
      rules: { chooseDoor: true, persistHpStatus: true, roomCount: 14 },
    },
    {
      id: "frontierPyramid",
      nameEn: "Battle Pyramid",
      nameFr: "Pyramide de Combat",
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
      iconEmoji: "🔺",
      hueRotate: 30,
      rules: { gridNav: true, persistHpStatus: true, gridSize: 7 },
    },
    {
      id: "frontierFactorySecret",
      nameEn: "Hidden Factory",
      nameFr: "Usine Secrète",
      descEn: "Get 3 rental Pokémon from a random pool. After each win, swap one of yours with the defeated opponent's. Pure Gen 3 Factory rules.",
      descFr: "Choisis 3 Pokémon de location dans un pool aléatoire. Après chaque victoire, tu peux échanger un des tiens avec un de l'adversaire. Règles Factory Gen 3 pures.",
      brain: {
        id: "noland",
        sprite: "factory_head_noland",
        nameEn: "Factory Head Noland",
        nameFr: "Maître de l'Usine Philémon",
        teamSilver: null, // Noland uses random rentals himself, like the player
        teamGold: null,
      },
      iconEmoji: "🏭",
      hueRotate: 160,
      rules: { rentalPool: true, swapAfterWin: true },
    },
  ];

  // ─── 2. BRAIN BATTLE TRIGGERS ─────────────────────────────────────────────
  // Same for every facility per user spec: brain appears at round 7 (Silver)
  // and round 49 (Gold rematch with upgraded team).
  const SILVER_ROUND = 7;
  const GOLD_ROUND = 49;

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
      .frontier-ext-tile {
        position: relative;
        filter: hue-rotate(var(--hue, 0deg));
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
      .frontier-ext-brain-icon {
        image-rendering: pixelated;
        filter: drop-shadow(0 0 2px rgba(0,0,0,0.6));
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

    const tile = document.createElement("div");
    tile.className = "explore-ticket frontier-ticket frontier-ext-tile";
    tile.style.setProperty("--hue", facility.hueRotate + "deg");
    tile.dataset.facility = facility.id;

    tile.innerHTML = `
      <span class="hitbox"></span>
      <div style="width: 100%;">
        <span class="frontier-flair" style="font-size: 2rem; display: inline-block; vertical-align: middle; margin-right: 0.3rem;">${facility.iconEmoji}</span>
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
        <img class="explore-ticket-sprite sprite-trim frontier-ext-brain-icon"
             style="z-index: 10; height: 100%;"
             src="img/trainers/${facility.brain.sprite}.png"
             alt="${facility.brain.nameEn}">
      </div>
    `;

    tile.addEventListener("click", () => openFacilityPreview(facility));
    return tile;
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
      title.innerHTML = `${facility.iconEmoji} ${name}`;
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
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installInjection);
  } else {
    installInjection();
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
