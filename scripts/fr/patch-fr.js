// ============================================
// PokeChill FR Engine Patch
// Monkey-patches core helpers for French
// Must be loaded AFTER game dictionaries and script.js
// ============================================

(function () {
  function waitForDeps(callback, deps) {
    const ready = deps.every((name) => {
      if (name === "fusePkmn") return typeof fusePkmn !== "undefined";
      if (name === "fuseDictionary")
        return typeof fuseDictionary !== "undefined";
      if (name === "returnTypeMultipliers")
        return typeof window.returnTypeMultipliers === "function";
      if (name === "updateItemBag")
        return typeof window.updateItemBag === "function";
      if (name === "training")
        return typeof window.training !== "undefined";
      if (name === "joinWithAnd")
        return typeof window.joinWithAnd === "function";
      if (name === "joinWithOr")
        return typeof window.joinWithOr === "function";
      if (name === "setSearchTags")
        return typeof window.setSearchTags === "function";
      return typeof window[name] !== "undefined";
    });
    if (ready) return callback();
    setTimeout(() => waitForDeps(callback, deps), 50);
  }

  // --- French names lookup helpers ---
  const TYPE_NAMES_FR = {
    normal: "Normal",
    fire: "Feu",
    water: "Eau",
    electric: "Électrik",
    grass: "Plante",
    ice: "Glace",
    fighting: "Combat",
    poison: "Poison",
    ground: "Sol",
    flying: "Vol",
    psychic: "Psy",
    bug: "Insecte",
    rock: "Roche",
    ghost: "Spectre",
    dragon: "Dragon",
    dark: "Ténèbres",
    steel: "Acier",
    fairy: "Fée",
  };

  const MOVE_CATEGORY_FR = {
    physical: "Physique",
    special: "Spécial",
    status: "Statut",
  };

  const NATURE_NAMES_FR = {
    hardy: "Sauvage",
    lonely: "Solo",
    brave: "Brave",
    adamant: "Rigide",
    naughty: "Mauvais",
    bold: "Assuré",
    docile: "Docile",
    relaxed: "Doux",
    impish: "Malin",
    lax: "Lâche",
    timid: "Timide",
    hasty: "Pressé",
    serious: "Sérieux",
    jolly: "Jovial",
    naive: "Naïf",
    modest: "Modeste",
    mild: "Doux",
    quiet: "Discret",
    bashful: "Pudique",
    rash: "Foufou",
    calm: "Calme",
    gentle: "Gentil",
    sassy: "Malpoli",
    careful: "Prudent",
    quirky: "Bizarre",
  };

  function getFrName(dict, id) {
    const obj = dict && dict[id];
    return obj ? obj.renameFR || null : null;
  }

  // --- Phase 1: basic helpers & DOM hooks ---
  waitForDeps(() => {
    // 1. Monkey-patch format()
    const originalFormat = window.format;
    window.format = function (input) {
      const isFR = window.gameLang === "fr";
      if (!isFR || typeof input !== "string") {
        return originalFormat(input);
      }

      if (TYPE_NAMES_FR[input]) return TYPE_NAMES_FR[input];
      if (MOVE_CATEGORY_FR[input]) return MOVE_CATEGORY_FR[input];
      if (NATURE_NAMES_FR[input]) return NATURE_NAMES_FR[input];

      const fr =
        getFrName(move, input) ||
        getFrName(ability, input) ||
        getFrName(item, input) ||
        getFrName(pkmn, input) ||
        getFrName(areas, input) ||
        getFrName(field, input);
      if (fr) return fr;

      return originalFormat(input);
    };

    // 2. Ensure capitalize() exists
    if (typeof window.capitalize !== "function") {
      window.capitalize = function (str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    }

    // 3. Monkey-patch joinWithAnd / joinWithOr
    if (typeof window.joinWithAnd === "function") {
      const origAnd = window.joinWithAnd;
      window.joinWithAnd = function (list) {
        let res = origAnd(list);
        if (window.gameLang === "fr") {
          res = res.replace(/\band\b/g, "et");
        }
        return res;
      };
    }
    if (typeof window.joinWithOr === "function") {
      const origOr = window.joinWithOr;
      window.joinWithOr = function (list) {
        let res = origOr(list);
        if (window.gameLang === "fr") {
          res = res.replace(/\bor\b/g, "ou");
        }
        return res;
      };
    }

    // 4. Monkey-patch returnTypeMultipliers
    if (typeof window.returnTypeMultipliers === "function") {
      const orig = window.returnTypeMultipliers;
      window.returnTypeMultipliers = function (pkmn) {
        const html = orig(pkmn);
        if (window.gameLang !== "fr") return html;
        // Replace raw type IDs with formatted (FR) names inside the pills
        return html.replace(/>(\w+)\s+x([0-9.]+)</g, (match, typeId, mult) => {
          return `>${format(typeId)} x${mult}<`;
        });
      };
    }

    // 5. Hook textContent updates on existing elements
    const originalTextContentDesc = Object.getOwnPropertyDescriptor(
      Node.prototype,
      "textContent"
    );
    Object.defineProperty(Node.prototype, "textContent", {
      set: function (value) {
        if (
          window.gameLang === "fr" &&
          typeof value === "string" &&
          typeof translateRuntimeText === "function"
        ) {
          value = translateRuntimeText(value);
        }
        originalTextContentDesc.set.call(this, value);
      },
      get: originalTextContentDesc.get,
      configurable: true,
    });

    // 6. Hook innerHTML updates on existing elements
    const originalInnerHTMLDesc = Object.getOwnPropertyDescriptor(
      Element.prototype,
      "innerHTML"
    );
    Object.defineProperty(Element.prototype, "innerHTML", {
      set: function (value) {
        originalInnerHTMLDesc.set.call(this, value);
        if (
          window.gameLang === "fr" &&
          typeof translateElement === "function"
        ) {
          translateElement(this, true);
        }
      },
      get: originalInnerHTMLDesc.get,
      configurable: true,
    });

    // 7. Re-translate after common render functions
    const funcsToHook = [
      "renderPoke",
      "renderBox",
      "renderShop",
      "renderCurry",
      "renderAchievements",
      "renderArena",
      "updateMap",
      "renderParty",
      "renderInventory",
      "renderPokemonMenu",
      "renderMoves",
      "setTrainingMenu",
      "updatePokedex",
      "updateDictionary",
    ];
    funcsToHook.forEach((name) => {
      if (typeof window[name] === "function") {
        const orig = window[name];
        window[name] = function (...args) {
          const res = orig.apply(this, args);
          if (typeof translateDOM === "function" && window.gameLang === "fr") {
            requestAnimationFrame(translateDOM);
          }
          return res;
        };
      }
    });

    // 8. Dynamic UI_TEXT_MAP entries for strings that only exist in core files
    if (typeof UI_TEXT_MAP === "object") {
      const extraMap = {
        "Defeat Gym Leader Brock in VS to unlock": "defeatBrockToUnlock",
        "Defeat Gym Leader Misty in VS to unlock": "defeatMistyToUnlock",
        "Defeat Gym Leader Phoebe in VS to unlock": "defeatPhoebeToUnlock",
        "Defeat Elite Trainer Cynthia in VS to unlock": "defeatEliteTrainerCynthiaToUnlock",
        "Defeat Ultra Entity Lusamine in VS to unlock": "defeatUltraEntityLusamine",
        "Defeat Pokemon Professor Oak in VS to unlock": "defeatPokemonProfessorOakToUnlock",
        "Fully max a Pokemon's level. Can only be done with less than Level 100": "trainingLevelInfo",
        "Gain 2 random IV stars. Can only be done with less than 10 IV stars": "trainingIv1Info",
        "Gain 4 random IV stars. Can only be done with less than 15 IV stars": "trainingIv2Info",
        "Gain 6 random IV stars. Can only be done with less than 21 IV stars": "trainingIv3Info",
        "Rerolls the Pokemon Ability": "trainingAbilityInfo",
        "Rerolls the Pokemon Hidden Ability": "trainingHaInfo",
        "Teaches the Pokemon a move from its movepool": "trainingMoveInfo",
        "Rerolls the Pokemon Nature": "trainingNatureInfo",
        "You must have less than 10 IV stars, or alread max IVs reached": "trainingIv1Error",
        "You must have less than 15 IV stars, or alread max IVs reached": "trainingIv2Error",
        "You must have less than 21 IV stars, or alread max IVs reached": "trainingIv3Error",
        "Defeat Elite Trainer Cynthia in VS mode to unlock, or alread max level reached": "trainingLevelError",
      };
      for (const [en, key] of Object.entries(extraMap)) {
        if (!UI_TEXT_MAP[en]) UI_TEXT_MAP[en] = key;
      }
    }

    // 9. Dynamic UI_PARTIALS for item subtitles, unlocks, etc.
    if (typeof UI_PARTIALS === "object" && Array.isArray(UI_PARTIALS)) {
      const extraPartials = [
        ["(Fighting)", "(Combat)"],
        ["(Dark)", "(Ténèbres)"],
        ["(Fire)", "(Feu)"],
        ["(Dragon)", "(Dragon)"],
        ["(Fairy)", "(Fée)"],
        ["(Rock)", "(Roche)"],
        ["(Electric)", "(Électrik)"],
        ["(Steel)", "(Acier)"],
        ["(Grass)", "(Plante)"],
        ["(Water)", "(Eau)"],
        ["(Ice)", "(Glace)"],
        ["(Poison)", "(Poison)"],
        ["(Flying)", "(Vol)"],
        ["(Normal)", "(Normal)"],
        ["(Bug)", "(Insecte)"],
        ["(Ground)", "(Sol)"],
        ["(Ghost)", "(Spectre)"],
        ["(Psychic)", "(Psy)"],
        ["(Hp)", "(PV)"],
        ["(Attack)", "(Attaque)"],
        ["(Defense)", "(Défense)"],
        ["(Special Attack)", "(Atq. Spé.)"],
        ["(Special Defense)", "(Déf. Spé.)"],
        ["(Speed)", "(Vitesse)"],
        ["Requires a ", "Nécessite un "],
        ["Requires an ", "Nécessite un "],
        [" to enter", " pour entrer"],
        [" Wormhole Residue ", " Résidu de Vortex Spatial "],
        [" Wormhole Residues ", " Résidus de Vortex Spatial "],
        [" Wormhole Residue", " Résidu de Vortex Spatial"],
        [" Wormhole Residues", " Résidus de Vortex Spatial"],
        ["Common Ability", "Talent Commun"],
        ["Uncommon Ability", "Talent Inhabituel"],
        ["Rare Ability", "Talent Rare"],
        ["Battle Tower", "Tour de Combat"],
        ["Battle Factory", "Usine de Combat"],
        ["Battle Arena", "Arène de Combat"],
        ["Highest Reached Floor: ", "Plus haut étage atteint : "],
        ["Highest Score: ", "Score Max : "],
        ["Defeated: ", "Vaincus : "],
        ["Current Type Rotation: ", "Rotation de type actuelle : "],
        ["(max level reached)", "(niveau max atteint)"],
        ["Difficulty: ", "Difficulté : "],
        [" is now level ", " est maintenant niveau "],
        [" learnt ", " a appris "],
      ];
      UI_PARTIALS.push(...extraPartials);
    }

    // 10. Translate area unlockDescriptions dynamically
    if (typeof areas === "object" && typeof translateRuntimeText === "function") {
      for (const key in areas) {
        const area = areas[key];
        if (area && typeof area.unlockDescription === "string") {
          area.unlockDescription = translateRuntimeText(area.unlockDescription);
        }
      }
    }

    // 11. Translate training info strings dynamically
    if (typeof training === "object" && typeof translateRuntimeText === "function") {
      for (const key in training) {
        const t = training[key];
        if (t && typeof t.info === "string") {
          t.info = translateRuntimeText(t.info);
        }
        if (t && typeof t.errorText === "string") {
          t.errorText = translateRuntimeText(t.errorText);
        }
      }
    }

    // 12. Initial DOM translate
    if (typeof translateDOM === "function" && window.gameLang === "fr") {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", translateDOM);
      } else {
        translateDOM();
      }
    }
  }, [
    "move",
    "ability",
    "item",
    "pkmn",
    "areas",
    "field",
    "format",
    "capitalize",
    "joinWithAnd",
    "joinWithOr",
    "returnTypeMultipliers",
    "training",
    "translateRuntimeText",
    "UI_TEXT_MAP",
    "UI_PARTIALS",
  ]);

  // --- Phase 1b: Guide FR translation ---
  (function waitForGuide() {
    if (
      typeof guide !== "undefined" &&
      typeof t_ui === "function" &&
      window.gameLang === "fr"
    ) {
      const GUIDE_FR = {
        inspecting: { title: "inspecting", desc: "guideInspectingDesc" },
        stats: { title: "guideStats", desc: "guideStatsDesc" },
        abilities: { title: "guideAbilities", desc: "guideAbilitiesDesc" },
        experience: { title: "guideExp", desc: "guideExpDesc" },
        moves: { title: "guideMoves", desc: "guideMovesDesc" },
        stab: { title: "guideStab", desc: "guideStabDesc" },
        crossStab: { title: "guideCrossPower", desc: "guideCrossPowerDesc" },
        battleFatigue: { title: "guideFatigue", desc: "guideFatigueDesc" },
        statusEffects: { title: "guideStatus", desc: "guideStatusDesc" },
        buffsDebuffs: { title: "guideBuffs", desc: "guideBuffsDesc" },
        weather: { title: "guideWeather", desc: "guideWeatherDesc" },
        shiny: { title: "guideShiny", desc: "guideShinyDesc" },
        genetics: { title: "guideGenetics", desc: "guideGeneticsDesc" },
        compatibility: { title: "guideGeneticsCompat", desc: "guideCompatDesc" },
        powerCost: { title: "guideGeneticsCost", desc: "guidePowerCostDesc" },
      };
      for (const [key, val] of Object.entries(GUIDE_FR)) {
        if (!guide[key]) continue;
        guide[key].name = t_ui(val.title);
        guide[key].description = function () {
          return t_ui(val.desc);
        };
      }
      // Re-render guide list so DOM picks up French names
      const guideList = document.getElementById("guide-list");
      if (guideList && typeof setGuide === "function") {
        guideList.innerHTML = "";
        setGuide();
      }
    } else {
      setTimeout(waitForGuide, 50);
    }
  })();

  // --- Phase 1c: Tooltip FR translation ---
  (function waitForTooltip() {
    if (
      typeof openTooltip === "function" &&
      typeof translateElement === "function" &&
      window.gameLang === "fr"
    ) {
      const origOpenTooltip = window.openTooltip;
      window.openTooltip = function () {
        origOpenTooltip.apply(this, arguments);
        const ids = ["tooltipTitle", "tooltipMid", "tooltipBottom", "tooltipTop"];
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el) translateElement(el, true);
        });
      };
    } else {
      setTimeout(waitForTooltip, 50);
    }
  })();

  // --- Phase 2: Fuse search FR support ---
  waitForDeps(() => {
    // 1. Generate FR tags on pkmn objects
    for (const e in pkmn) {
      if (pkmn[e].caught > 0) {
        pkmn[e].tagCaught = "caught";
        pkmn[e].tagCaughtFR = "capture";
      }
      if (pkmn[e].shiny) {
        pkmn[e].tagShiny = "shiny";
        pkmn[e].tagShinyFR = "shiny";
      }

      for (const i in areas) {
        if (areas[i].type == "wild") {
          if (
            areas[i].spawns.common.includes(pkmn[e]) ||
            areas[i].spawns.uncommon.includes(pkmn[e]) ||
            areas[i].spawns.rare.includes(pkmn[e])
          ) {
            pkmn[e].tagObtainedIn = "wild";
            pkmn[e].tagObtainedInFR = "sauvage";
          }
        }
        if (areas[i].type == "event" && areas[i].uncatchable != true) {
          if (
            areas[i].spawns?.common?.includes(pkmn[e]) ||
            areas[i].spawns?.uncommon?.includes(pkmn[e]) ||
            areas[i].spawns?.rare?.includes(pkmn[e])
          ) {
            pkmn[e].tagObtainedIn = "event";
            pkmn[e].tagObtainedInFR = "evenement";
          }
        }
        if (areas[i].encounter) {
          if (
            areas[i].team.slot1 == pkmn[e] ||
            areas[i].reward?.includes(pkmn[e])
          ) {
            pkmn[e].tagObtainedIn = "event";
            pkmn[e].tagObtainedInFR = "evenement";
          }
        }
      }

      if (
        (typeof wildlifePoolCommon !== "undefined" && wildlifePoolCommon.includes(e)) ||
        (typeof wildlifePoolUncommon !== "undefined" && wildlifePoolUncommon.includes(e)) ||
        (typeof wildlifePoolRare !== "undefined" && wildlifePoolRare.includes(e))
      ) {
        pkmn[e].tagObtainedIn = "park";
        pkmn[e].tagObtainedInFR = "parc";
      }
      if (
        typeof exclusiveFrontierPkmn !== "undefined" &&
        exclusiveFrontierPkmn.includes(pkmn[e])
      ) {
        pkmn[e].tagObtainedIn = "frontier";
        pkmn[e].tagObtainedInFR = "zdc";
      }
      if (pkmn[e].pokerus) {
        pkmn[e].tagPokerus = "pokerus";
        pkmn[e].tagPokerusFR = "pokerus";
      }
      if (pkmn[e].movepool && pkmn[e].movepool.length > 0) {
        pkmn[e].movepoolFR = pkmn[e].movepool
          .map((m) => move[m]?.renameFR || move[m]?.rename || m)
          .join(" ");
      }
      if (pkmn[e].signature) {
        pkmn[e].tagSignature = "signature";
        pkmn[e].tagSignatureFR = "signature";
      }
      if (pkmn[e].eggMove && pkmn[e].eggMove.id) {
        pkmn[e].eggMoveFR =
          pkmn[e].eggMove.id +
          " " +
          (move[pkmn[e].eggMove.id]?.renameFR ||
            move[pkmn[e].eggMove.id]?.rename ||
            pkmn[e].eggMove.id);
      }
    }

    // shop mart tag
    if (typeof shop === "object") {
      for (const i in shop) {
        if (shop[i].pkmn == undefined) continue;
        if (pkmn[shop[i].pkmn]) {
          pkmn[shop[i].pkmn].tagObtainedIn = "mart";
          pkmn[shop[i].pkmn].tagObtainedInFR = "boutique";
        }
      }
    }

    // unobtainable tag via family
    for (const e in pkmn) {
      if (pkmn[e].tagObtainedIn == undefined) {
        const family = getEvolutionFamily(pkmn[e]);
        const familyHasDirectObtainable = Array.from(family).some((member) => {
          return member.tagObtainedIn !== undefined && member.tagObtainedIn !== "unobtainable";
        });
        if (!familyHasDirectObtainable) {
          for (const member of family) {
            if (member.tagObtainedIn === undefined) {
              member.tagObtainedIn = "unobtainable";
              member.tagObtainedInFR = "nonobtenable";
            }
          }
        }
      }
      if (e == "arceus" && pkmn.arceus) {
        pkmn[e].tagObtainedIn = "arceus";
        pkmn[e].tagObtainedInFR = "arceus";
      }
    }

    // move signature tag
    for (const i in move) {
      if (move[i].moveset == undefined) {
        move[i].tagSignature = "signature";
        move[i].tagSignatureFR = "signature";
      }
    }

    // Helper to check if a Fuse key already exists
    const hasKey = (arr, name) => arr.some((k) => (typeof k === "object" ? k.name === name : k === name));

    // 2. Enrich fusePkmn index with FR fields
    if (
      typeof fusePkmn !== "undefined" &&
      fusePkmn.options &&
      Array.isArray(fusePkmn.options.keys)
    ) {
      // Inject computed FR fields into existing docs so Fuse can search them
      const docs = fusePkmn.getIndex().docs;
      for (const p of docs) {
        if (!p.typeFR && p.type) p.typeFR = p.type.map((t) => format(t)).join(" ");
        if (!p.abilityFR && p.ability) p.abilityFR = format(p.ability);
        if (!p.hiddenAbilityFR && p.hiddenAbility && p.hiddenAbility.id)
          p.hiddenAbilityFR = format(p.hiddenAbility.id);
      }
      const keys = fusePkmn.options.keys;
      if (!hasKey(keys, "renameFR")) keys.push({ name: "renameFR", getFn: (obj) => obj.renameFR || "" });
      if (!hasKey(keys, "typeFR")) keys.push({ name: "typeFR", getFn: (obj) => obj.typeFR || "" });
      if (!hasKey(keys, "abilityFR")) keys.push({ name: "abilityFR", getFn: (obj) => obj.abilityFR || "" });
      if (!hasKey(keys, "hiddenAbilityFR")) keys.push({ name: "hiddenAbilityFR", getFn: (obj) => obj.hiddenAbilityFR || "" });
      if (!hasKey(keys, "movepoolFR")) keys.push("movepoolFR");
      if (!hasKey(keys, "tagShinyFR")) keys.push("tagShinyFR");
      if (!hasKey(keys, "tagPokerusFR")) keys.push("tagPokerusFR");
      if (!hasKey(keys, "tagSignatureFR")) keys.push("tagSignatureFR");
      if (!hasKey(keys, "tagCaughtFR")) keys.push("tagCaughtFR");
      if (!hasKey(keys, "tagObtainedInFR")) keys.push("tagObtainedInFR");
      // Rebuild Fuse index so new keys are actually searchable
      fusePkmn = new Fuse(docs, fusePkmn.options);
    }

    // 3.5 Normalize French type queries to English IDs so searching "feu" behaves like "fire"
    const FR_TYPE_TO_EN = {
      "normal": "normal",
      "feu": "fire",
      "eau": "water",
      "électrik": "electric",
      "electrik": "electric",
      "plante": "grass",
      "glace": "ice",
      "combat": "fighting",
      "poison": "poison",
      "sol": "ground",
      "vol": "flying",
      "psy": "psychic",
      "insecte": "bug",
      "roche": "rock",
      "spectre": "ghost",
      "dragon": "dragon",
      "ténèbres": "dark",
      "tenebres": "dark",
      "acier": "steel",
      "fée": "fairy",
      "fee": "fairy",
    };
    window.normalizeFrTypeQuery = function (query) {
      return query.split(/\s+/).map(term => FR_TYPE_TO_EN[term.toLowerCase().trim()] || term).join(' ');
    };

    // 4. Enrich fuseDictionary index with FR fields
    if (
      typeof fuseDictionary !== "undefined" &&
      fuseDictionary.options &&
      Array.isArray(fuseDictionary.options.keys)
    ) {
      const docs = fuseDictionary.getIndex().docs;
      for (const p of docs) {
        if (p.type && !p.typeFR) p.typeFR = p.type.map((t) => format(t)).join(" ");
        if (p.ability && !p.abilityFR) p.abilityFR = format(p.ability);
        if (p.hiddenAbility && p.hiddenAbility.id && !p.hiddenAbilityFR)
          p.hiddenAbilityFR = format(p.hiddenAbility.id);
        if (p.eggMove && p.eggMove.id && !p.eggMoveFR)
          p.eggMoveFR =
            format(p.eggMove.id) + " " + (move[p.eggMove.id]?.renameFR || "");
      }
      const keys = fuseDictionary.options.keys;
      if (!hasKey(keys, "renameFR")) keys.push({ name: "renameFR", getFn: (obj) => obj.renameFR || "" });
      if (!hasKey(keys, "typeFR")) keys.push({ name: "typeFR", getFn: (obj) => obj.typeFR || "" });
      if (!hasKey(keys, "abilityFR")) keys.push({ name: "abilityFR", getFn: (obj) => obj.abilityFR || "" });
      if (!hasKey(keys, "hiddenAbilityFR")) keys.push({ name: "hiddenAbilityFR", getFn: (obj) => obj.hiddenAbilityFR || "" });
      if (!hasKey(keys, "eggMoveFR")) keys.push("eggMoveFR");
      if (!hasKey(keys, "tagObtainedInFR")) keys.push("tagObtainedInFR");
      if (!hasKey(keys, "tagCaughtFR")) keys.push("tagCaughtFR");
      if (!hasKey(keys, "tagShinyFR")) keys.push("tagShinyFR");
      if (!hasKey(keys, "tagSignatureFR")) keys.push("tagSignatureFR");
      // Rebuild Fuse index so new keys are actually searchable
      fuseDictionary = new Fuse(docs, fuseDictionary.options);
    }
  }, [
    "fusePkmn",
    "fuseDictionary",
    "pkmn",
    "move",
    "areas",
    "shop",
    "format",
    "getEvolutionFamily",
  ]);
})();
