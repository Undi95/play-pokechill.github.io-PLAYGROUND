// ============================================
// POKECHILL GAME INTERNATIONALIZATION
// English / Français
// ============================================

// NOTE: the asset-path fetch hook that rewrites leading-slash URLs
// (/img/, /font/, /scripts/) for sub-path deploys lives as an inline <script>
// at the top of index.html — it MUST run before any game script, because
// movesetGenerator.js preloads SVG icons synchronously at load time.

window.gameLang = localStorage.getItem("pokechill-game-lang") || "en";

function setGameLang(lang) {
  if (lang !== "en" && lang !== "fr") return;
  window.gameLang = lang;
  localStorage.setItem("pokechill-game-lang", lang);
  location.reload();
}

// Inject #lang-toggle CSS (moved out of styles.css so the original game file
// stays untouched — only index.html gets the <div id="lang-toggle"> element).
(function injectLangToggleCSS() {
  if (document.getElementById("i18n-lang-toggle-css")) return;
  const style = document.createElement("style");
  style.id = "i18n-lang-toggle-css";
  style.textContent =
    "#lang-toggle{position:absolute;right:1rem;bottom:2.5rem;font-size:1.4rem;" +
    "cursor:pointer;color:white;opacity:.6;transition:opacity .2s;z-index:9999}" +
    "#lang-toggle:hover{opacity:1}";
  (document.head || document.documentElement).appendChild(style);
})();

// Update lang toggle emoji on load
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = window.gameLang === "fr" ? "🇺🇸" : "🇫🇷";
    toggle.title = t_ui("switchLang");
    toggle.onclick = () => setGameLang(window.gameLang === "fr" ? "en" : "fr");
  }
  translateDOM();
});

// Central text-to-key map for DOM translations

function translateElement(el, skipDone = false) {
  if (window.gameLang !== "fr") return;
  if (!skipDone && el.dataset && el.dataset.i18nDone) return;
  if (el.dataset && el.dataset.i18nHtml) {
    el.innerHTML = t_ui(el.dataset.i18nHtml);
    if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
    return;
  }
  // For leaf elements (or elements with only <br> children) whose raw HTML is in UI_TEXT_MAP
  // Only when not already called from the innerHTML hook to avoid recursion
  const isSimpleRichText =
    el.nodeType === Node.ELEMENT_NODE &&
    (!el.children || el.children.length === 0 ||
      Array.from(el.children).every((c) => c.tagName === "BR"));
  if (!skipDone && isSimpleRichText) {
    const htmlTrimmed = el.innerHTML.trim();
    if (UI_TEXT_MAP[htmlTrimmed]) {
      el.innerHTML = t_ui(UI_TEXT_MAP[htmlTrimmed]);
      if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
      return;
    }
  }
  if (el.nodeType === Node.TEXT_NODE) {
    let txt = el.textContent;
    const trimmed = txt.trim();
    if (!trimmed) return;
    const prefix = txt.match(/^\s*/)[0];
    const suffix = txt.match(/\s*$/)[0];
    if (UI_TEXT_MAP[trimmed]) {
      el.textContent = prefix + t_ui(UI_TEXT_MAP[trimmed]) + suffix;
    } else if (LORE_MAP[trimmed]) {
      el.textContent = prefix + LORE_MAP[trimmed] + suffix;
    } else {
      const res = applyPartialTranslations(txt);
      if (res.changed) el.textContent = res.text;
    }
    return;
  }
  if (!el.querySelectorAll) return;
  // placeholders
  if (el.matches && el.matches("input[placeholder], textarea[placeholder]")) {
    const ph = el.getAttribute("placeholder");
    if (UI_TEXT_MAP[ph]) el.setAttribute("placeholder", t_ui(UI_TEXT_MAP[ph]));
  }
  el.querySelectorAll("input[placeholder], textarea[placeholder]").forEach(
    (child) => {
      const ph = child.getAttribute("placeholder");
      if (UI_TEXT_MAP[ph])
        child.setAttribute("placeholder", t_ui(UI_TEXT_MAP[ph]));
    },
  );
  // direct text on element itself
  if (el.children && el.children.length === 0) {
    let txt = el.textContent;
    const trimmed = txt.trim();
    if (trimmed) {
      const prefix = txt.match(/^\s*/)[0];
      const suffix = txt.match(/\s*$/)[0];
      if (UI_TEXT_MAP[trimmed]) {
        el.textContent = prefix + t_ui(UI_TEXT_MAP[trimmed]) + suffix;
        if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
      } else if (LORE_MAP[trimmed]) {
        el.textContent = prefix + LORE_MAP[trimmed] + suffix;
        if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
      } else {
        const res = applyPartialTranslations(txt);
        if (res.changed) {
          el.textContent = res.text;
          if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
        }
      }
    }
  } else {
    el.childNodes &&
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          let txt = node.textContent;
          const trimmed = txt.trim();
          if (!trimmed) return;
          const prefix = txt.match(/^\s*/)[0];
          const suffix = txt.match(/\s*$/)[0];
          if (UI_TEXT_MAP[trimmed]) {
            node.textContent = prefix + t_ui(UI_TEXT_MAP[trimmed]) + suffix;
            if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
          } else if (LORE_MAP[trimmed]) {
            node.textContent = prefix + LORE_MAP[trimmed] + suffix;
            if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
          } else {
            const res = applyPartialTranslations(txt);
            if (res.changed) {
              node.textContent = res.text;
              if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
            }
          }
        }
      });
    // recurse into children that are elements
    // Selector must include the same tags as translateDOM (line ~200) so that
    // text inside <h3>, <th>, <td>, <p>, <li>, <em>, <b>, <i>, <u>, <font>, <small>
    // is reached when an element is inserted via innerHTML (e.g. the Moves-for-X
    // popup builds a <table> with <h3> headers and <th>Move</th>, <th>Split</th>).
    el.querySelectorAll &&
      el
        .querySelectorAll(
          "div, span, button, option, a, strong, label, text, h1, h2, h3, h4, h5, h6, p, li, em, b, i, u, font, small, td, th"
        )
        .forEach((child) => translateElement(child, skipDone));
  }
}

function translateDOM() {
  if (window.gameLang !== "fr") return;
  // Explicit data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t_ui(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t_ui(el.dataset.i18nHtml);
  });
  // Bag categories (fallback)
  const bagCats = {
    Held: "held",
    Evo: "evo",
    "TM's": "tms",
    Memo: "memo",
    Berry: "berry",
    Gems: "gems",
    Decor: "decor",
    Key: "key",
    // fallback lowercase
    held: "held",
    evo: "evo",
    tm: "tms",
    memory: "memo",
    berry: "berry",
    gem: "gems",
    decor: "decor",
    key: "key",
  };
  document
    .querySelectorAll(".item-menu-tags div, #item-menu-tags div")
    .forEach((el) => {
      const text = el.textContent.trim();
      if (bagCats[text.toLowerCase()])
        el.textContent = t_ui(bagCats[text.toLowerCase()]);
    });

  const skipTags = new Set([
    "SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "SVG", "PATH", "RECT", "CIRCLE",
    "DEFS", "MASK", "G", "CLIPPATH", "FILTER", "LINEARGRADIENT", "RADIALGRADIENT",
    "STOP", "PATTERN", "IMAGE", "USE", "SYMBOL", "META", "LINK", "HEAD", "TITLE",
    "CANVAS", "AUDIO", "VIDEO", "SOURCE", "TRACK", "EMBED", "OBJECT", "PARAM"
  ]);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  while (node = walker.nextNode()) {
    const parent = node.parentElement;
    if (!parent || skipTags.has(parent.tagName)) continue;
    let txt = node.textContent;
    const trimmed = txt.trim();
    if (!trimmed) continue;
    // Preserve leading/trailing whitespace so adjacent text nodes join correctly
    const prefix = txt.match(/^\s*/)[0];
    const suffix = txt.match(/\s*$/)[0];
    if (UI_TEXT_MAP[trimmed]) {
      node.textContent = prefix + t_ui(UI_TEXT_MAP[trimmed]) + suffix;
      continue;
    }
    if (LORE_MAP[trimmed]) {
      node.textContent = prefix + LORE_MAP[trimmed] + suffix;
      continue;
    }
    const res = applyPartialTranslations(txt);
    if (res.changed) node.textContent = res.text;
  }

  document
    .querySelectorAll("div, span, button, option, a, strong, label, h1, h2, h3, h4, h5, h6, p, li, em, b, i, u, font, small, td, th")
    .forEach((el) => {
      if (!skipTags.has(el.tagName) && (!el.children || el.children.length === 0)) {
        const htmlTrimmed = el.innerHTML.trim();
        if (UI_TEXT_MAP[htmlTrimmed]) {
          el.innerHTML = t_ui(UI_TEXT_MAP[htmlTrimmed]);
        }
      }
    });
  translateAttributes(document);
}

// Translate placeholder / title / alt attributes anywhere in `root`
function translateAttributes(root) {
  if (window.gameLang !== "fr") return;
  const rootEl = root === document ? document : (root && root.querySelectorAll ? root : null);
  if (!rootEl) return;
  const lookup = (v) => {
    if (!v) return null;
    if (UI_TEXT_MAP[v]) return t_ui(UI_TEXT_MAP[v]);
    const trimmed = v.trim();
    if (trimmed !== v && UI_TEXT_MAP[trimmed]) return t_ui(UI_TEXT_MAP[trimmed]);
    return null;
  };
  // Self (if root is an Element, not Document)
  if (root.nodeType === Node.ELEMENT_NODE) {
    ["placeholder", "title", "alt"].forEach((attr) => {
      if (root.hasAttribute && root.hasAttribute(attr)) {
        const translated = lookup(root.getAttribute(attr));
        if (translated !== null) root.setAttribute(attr, translated);
      }
    });
  }
  rootEl.querySelectorAll("[placeholder], [title], [alt]").forEach((el) => {
    ["placeholder", "title", "alt"].forEach((attr) => {
      if (el.hasAttribute(attr)) {
        const translated = lookup(el.getAttribute(attr));
        if (translated !== null) el.setAttribute(attr, translated);
      }
    });
  });
}

// Observe DOM changes to auto-translate dynamically injected content
const i18nObserver = new MutationObserver((mutations) => {
  if (window.gameLang !== "fr") return;
  const skipTags = new Set([
    "SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "SVG", "PATH", "RECT", "CIRCLE",
    "DEFS", "MASK", "G", "CLIPPATH", "FILTER", "LINEARGRADIENT", "RADIALGRADIENT",
    "STOP", "PATTERN", "IMAGE", "USE", "SYMBOL", "META", "LINK", "HEAD", "TITLE",
    "CANVAS", "AUDIO", "VIDEO", "SOURCE", "TRACK", "EMBED", "OBJECT", "PARAM"
  ]);
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (parent && skipTags.has(parent.tagName)) return;
        translateElement(node, true);
      }
    });
  });
});
i18nObserver.observe(document.body, { childList: true, subtree: true });

// Observe dynamic placeholder / title / alt changes (e.g. teamDuplicate.js sets title after render)
const i18nAttrObserver = new MutationObserver((mutations) => {
  if (window.gameLang !== "fr") return;
  mutations.forEach((m) => {
    if (m.type !== "attributes") return;
    const attr = m.attributeName;
    if (attr !== "placeholder" && attr !== "title" && attr !== "alt") return;
    const el = m.target;
    if (!el || !el.getAttribute) return;
    const v = el.getAttribute(attr);
    if (!v) return;
    let translated = null;
    if (UI_TEXT_MAP[v]) translated = t_ui(UI_TEXT_MAP[v]);
    else {
      const trimmed = v.trim();
      if (trimmed !== v && UI_TEXT_MAP[trimmed]) translated = t_ui(UI_TEXT_MAP[trimmed]);
    }
    if (translated !== null && translated !== v) el.setAttribute(attr, translated);
  });
});
i18nAttrObserver.observe(document.body, {
  attributes: true,
  attributeFilter: ["title", "placeholder", "alt"],
  subtree: true,
});

// Lore translations
const LORE_MAP = {
  "Believed to be the result of an attempt to replicate the ancestor of all Pokémon. The experiment did not achieve its intended goal, and the creature that emerged was deemed a failure.": "On le croit issu d'une tentative pour répliquer l'ancêtre de tous les Pokémon. L'expérience n'atteignit pas son but, et la créature qui en surgit fut jugée un échec.",
  "The storm of summer. Thunder rolls with its cry, and lightning strikes in time with its wings. The skies darken as it passes, and violent storms follow its soar.": "La tempête de l'été. Le tonnerre gronde avec son cri, et la foudre frappe au rythme de ses ailes. Les ciels s'assombrissent à son passage, et les tempêtes violentes suivent son vol.",
  "Shaped by human hands, bears the weight of creation twisted. Though it carries the memory of life that came before, it walks a path apart, questioning the bounds of its own existence.": "Façonné par des mains humaines, il porte le poids d'une création déformée. S'il conserve la mémoire de la vie d'antan, il chemine sur une voie à part, questionnant les limites de sa propre existence.",
  "The origin from which all Pokemon as we know trace their beginnings. Its form, small and gentle, carries the memory of every creature that would follow.": "L'origine dont tous les Pokemon que nous connaissons tirent leur commencement. Sa forme, petite et douce, porte en elle le souvenir de chaque créature à venir.",
  "Traveling through time and appearing where the past and future meet, it preserves the natural order, ensuring that the cycles of life, growth, and seasons continue uninterrupted.": "Voyageant à travers le temps et apparaissant là où le passé et le futur se rejoignent, il préserve l'ordre naturel, veillant à ce que les cycles de la vie, de la croissance et des saisons se poursuivent sans interruption.",
  "A reminder of the power that once carved the seas. Its ancient rivalry with Groudon lingers quietly, a balance written into the land and water.": "Un rappel du pouvoir qui jadis sculpta les mers. Son ancienne rivalité avec Groudon persiste en silence, un équilibre inscrit dans la terre et l'eau.",
  "The oceans made visible, and the force that first shaped the seas across the world. Waves rise and storms gather at its will.": "Les océans rendus visibles, et la force qui premièrement façonna les mers à travers le monde. Les vagues s'élèvent et les tempêtes se rassemblent à sa volonté.",
  "A reminder of the power that once carved the lands. Its ancient rivalry with Kyogre lingers quietly, a balance written into the land and water.": "Un rappel du pouvoir qui jadis sculpta les terres. Son ancienne rivalité avec Kyogre persiste en silence, un équilibre inscrit dans la terre et l'eau.",
  "The continents made whole, and the force that first shaped the land across the world. Mountains rise and deserts stretch at its will.": "Les continents rendus entiers, et la force qui premièrement façonna les terres à travers le monde. Les montagnes s'élèvent et les déserts s'étendent à sa volonté.",
  "The force that watches over the world from above. It tempers the chaos of the seas and the land, acting as a mediator between Kyogre and Groudon. The winds and currents obey its passage, and it stands as guardian of the skies.": "La force qui veille sur le monde d'en haut. Il tempère le chaos des mers et des terres, servant de médiateur entre Kyogre et Groudon. Les vents et les courants obéissent à son passage, et il se tient comme gardien des cieux.",
  "Ascending the atmosphere, its reach extending into the upper skies. Protecting not only the world below but the space above, guarding against threats from beyond.": "S'élevant dans l'atmosphère, son empire s'étend dans les hauteurs célestes. Protégeant non seulement le monde d'en bas, mais aussi l'espace d'en haut, il veille contre les menaces venues d'ailleurs.",
  "The embodiment of wishing, awakening only once in a thousand years. In those brief moments, it listens to the desires carried in the hearts of others, and its power brings those wishes into reality.": "L'incarnation du vœu, ne s'éveillant qu'une fois par millénaire. Dans ces courts instants, il écoute les désirs portés par les cœurs des autres, et son pouvoir fait de ces vœux une réalité.",
  "Emerged to give shape to knowledge. When the world was still new, it shared understanding with humanity, allowing thought and memory to take root. Its presence quiets turmoil to the gods of time and space.": "Surgi pour donner forme à la connaissance. Quand le monde était encore jeune, il partagea la compréhension avec l'humanité, permettant à la pensée et à la mémoire de prendre racine. Sa présence apaise le tumulte des dieux du temps et de l'espace.",
  "Emerged to give shape to emotion. When the world was still new, it shared feeling with humanity, allowing joy, sorrow, and empathy to take root. Its presence soothes unrest to the gods of time and space.": "Surgi pour donner forme à l'émotion. Quand le monde était encore jeune, il partagea le sentiment avec l'humanité, permettant à la joie, à la tristesse et à l'empathie de prendre racine. Sa présence apaise l'agitation des dieux du temps et de l'espace.",
  "Emerged to give shape to will. When the world was still new, it granted resolve to humanity, allowing action, choice, and determination to take form. Its presence steels the spirit of the gods of time and space.": "Surgi pour donner forme à la volonté. Quand le monde était encore jeune, il accorda la résolution à l'humanité, permettant à l'action, au choix et à la détermination de prendre forme. Sa présence trempe l'esprit des dieux du temps et de l'espace.",
  "Bound by weight and limit, a shape time itself can endure. Its power yet governs past and future, though restrained, for the world cannot withstand the full measure of eternity given form.": "Lié par le poids et la limite, une forme que le temps lui-même peut endurer. Son pouvoir gouverne encore le passé et le futur, bien que contenu, car le monde ne saurait supporter la pleine mesure de l'éternité incarnée.",
  "Shaped by the Original One, when the universe had yet to know its first moment, It was brought forth to give law to duration. By its heartbeat, time began to flow; by its will, past and future were torn apart and given order. Without It, all life trapped by eternal stillness.": "Façonné par l'Être Originel, alors que l'univers n'avait pas encore connu son premier instant, Il fut amené pour donner une loi à la durée. Par son battement de cœur, le temps commença à s'écouler ; par sa volonté, le passé et le futur furent déchirés et ordonnés. Sans Lui, toute vie serait piégée dans une immobilité éternelle.",
  "Bound by weight and limit, a shape space itself can sustain. Its power yet governs distance and separation, though restrained, for the world cannot bear the weight of infinite breadth given form.": "Lié par le poids et la limite, une forme que l'espace lui-même peut soutenir. Son pouvoir gouverne encore la distance et la séparation, bien que contenu, car le monde ne saurait supporter le poids de l'infini incarné.",
  "Shaped by the Original One, when the universe was yet unmeasured, It was brought forth to give form to expanse. By its existence, space became vast; by its will, distance gained meaning. Without It, the world would have no breadth, no separation between sky and land, nor any path for life to walk.": "Façonné par l'Être Originel, alors que l'univers n'était pas encore mesuré, Il fut amené pour donner forme à l'étendue. Par son existence, l'espace devint vaste ; par sa volonté, la distance acquit un sens. Sans Lui, le monde n'aurait aucune ampleur, aucune séparation entre le ciel et la terre, ni aucun chemin pour que la vie chemine.",
  "Formed within the depths of the earth, it moves through molten stone and scorched caverns, shaping volcanoes among the land through heat and pressure.": "Formé dans les profondeurs de la terre, il se déplace à travers la pierre en fusion et les cavernes brûlées, façonnant les volcans parmi les terres par la chaleur et la pression.",
  "Regigigas moved the continents into place, hauling landmasses with ropes of stone and ice, shaping the world through sheer strength. From this labor came the order of the land, after which it fell into long slumber.": "Regigigas mit les continents en place, traînant des masses terrestres avec des cordes de pierre et de glace, façonnant le monde par la force brute. De ce labeur naquit l'ordre des terres, après quoi il sombra dans un long sommeil.",
  "Bound by weight and limit, a shape reality can tolerate. Its power yet governs antimatter and opposition, though restrained, for the world cannot endure the force that unravels all creation made whole.": "Lié par le poids et la limite, une forme que la réalité peut tolérer. Son pouvoir gouverne encore l'antimatière et l'opposition, bien que contenu, car le monde ne saurait endurer la force qui défait toute la création dans son intégralité.",
  "Shaped by the Original One, when the laws of creation first took form, It was born in defiance of them. Given dominion over antithesis of matter, It was cast away for its violence, bound to a world where logic collapses and direction has no meaning.": "Façonné par l'Être Originel, alors que les lois de la création prenaient forme pour la première fois, Il naquit en défiance d'elles. Investi du pouvoir sur l'antithèse de la matière, Il fut banni pour sa violence, lié à un monde où la logique s'effondre et où la direction n'a aucun sens.",
  "The embodiment of moon light. From the earliest ages, it has watched over sleep and dreams, bringing peaceful rest where darkness gathers. Its feathers dispel the nightmares born by Darkrai, as they balance the quiet rhythm of night that was set into the world.": "L'incarnation de la lumière lunaire. Depuis les âges les plus reculés, il veille sur le sommeil et les rêves, apportant le repos paisible là où les ténèbres se rassemblent. Ses plumes dissipent les cauchemars engendrés par Darkrai, maintenant l'équilibre du rythme paisible de la nuit inscrit dans le monde.",
  "The prince of the seas, the chosen of its kind, born with a bond that links all ocean life. It guides the creatures of the waters, preserving harmony beneath the waves.": "Le prince des mers, l'élu de son espèce, né avec un lien qui unit toute vie océanique. Il guide les créatures des eaux, préservant l'harmonie sous les vagues.",
  "The embodiment of night shadow. From the earliest ages, it has been bound to dreams, drawing forth fear and unrest where its presence lingers. Nightmares follow in its wake, not by intent, but as a reflection of its nature.": "L'incarnation de l'ombre nocturne. Depuis les âges les plus reculés, il a été lié aux rêves, suscitant la peur et l'agitation là où sa présence s'attarde. Les cauchemars suivent son sillage, non par intention, mais comme le reflet de sa nature.",
  "Embodying gratitude and the renewal of life, It moves across barren lands, leaving fields of flowers in its wake and restoring the vitality of nature, bringing growth and bloom to places long abandoned.": "Incarnant la gratitude et le renouveau de la vie, Il parcourt les terres stériles, laissant derrière lui des champs de fleurs et restaurant la vitalité de la nature, apportant croissance et floraison aux lieux depuis longtemps abandonnés.",
  "Emerging from nothing, existence was created from its birth. Pillars that govern reality shaped by its will, and yet, only a vessel for the eye to see, and the mind to comprehend.": "Surgissant du néant, l'existence fut créée de sa naissance. Les piliers qui gouvernent la réalité façonnés par sa volonté, et pourtant, il n'est qu'un vaisseau pour l'œil à voir et l'esprit à comprendre.",
  "Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.": "Surgissant du néant, l'existence fut créée de sa naissance, mettant en branle les fils de l'univers. Les piliers qui gouvernent la réalité façonnés par ses mille bras, et pourtant ce n'est qu'un vaisseau, un que l'esprit peut tolérer."
};

// UI Translations

function t_ui(key, ...args) {
  let text = GAME_UI[window.gameLang]?.[key] || GAME_UI["en"]?.[key] || key;
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null) {
    for (const [k, v] of Object.entries(args[0])) {
      text = text.replace(new RegExp("\\{" + k + "\\}", "g"), v);
    }
  } else if (args.length > 0) {
    for (let i = 0; i < args.length; i++) {
      text = text.replace(new RegExp("\\{" + (i + 1) + "\\}", "g"), args[i]);
    }
  }
  // Evaluate nested t_ui() calls like ${t_ui('xxx')}
  text = text.replace(/\$\{t_ui\('([^']+)'\)\}/g, (_, k) => t_ui(k));
  return text;
}




/* ===== patch-fr.js ===== */


// ============================================
// PokeChill FR Engine Patch
// Monkey-patches core helpers for French
// Must be loaded AFTER game dictionaries and script.js
// ============================================

(function () {
  function waitForDeps(callback, deps) {
    const missing = deps.filter((name) => {
      if (name === "fusePkmn") return typeof fusePkmn === "undefined";
      if (name === "fuseDictionary")
        return typeof fuseDictionary === "undefined";
      if (name === "returnTypeMultipliers")
        return typeof window.returnTypeMultipliers !== "function";
      if (name === "updateItemBag")
        return typeof window.updateItemBag !== "function";
      if (name === "training")
        return typeof training === "undefined";
      if (name === "joinWithAnd")
        return typeof window.joinWithAnd !== "function";
      if (name === "joinWithOr")
        return typeof window.joinWithOr !== "function";
      if (name === "setSearchTags")
        return typeof window.setSearchTags !== "function";
      try {
        return !eval("typeof " + name + " !== 'undefined'");
      } catch {
        return true;
      }
    });
    if (missing.length) {
    }
    const ready = missing.length === 0;
    if (ready) return callback();
    setTimeout(() => waitForDeps(callback, deps), 50);
  }

  // --- French names lookup helpers ---

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

      // Direct GAME_UI key fallback (tmInfoDesc, memoryInfoDesc, etc.)
      if (typeof GAME_UI !== "undefined" && GAME_UI.fr && typeof GAME_UI.fr[input] === "string") {
        let translated = GAME_UI.fr[input];
        const vars = arguments[1];
        if (vars) {
          for (let key in vars) {
            translated = translated.replace(new RegExp(`{${key}}`, 'g'), vars[key]);
          }
        }
        return translated;
      }

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
        return html.replace(/>\s*(\w+)\s+x([0-9.]+)\s*</g, (match, typeId, mult) => {
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
        if (typeof value === "string") {
          value = value.replace(/img\/items\/tm(Feu|Eau|Plante|Électrik|Glace|Combat|Vol|Poison|Sol|Roche|Insecte|Spectre|Acier|Psy|Ténèbres|Fée|Normal|Dragon)\.png/g, function(m, typeFr) {
            const map = {Feu:"Fire", Eau:"Water", Plante:"Grass", Électrik:"Electric", Glace:"Ice", Combat:"Fighting", Vol:"Flying", Poison:"Poison", Sol:"Ground", Roche:"Rock", Insecte:"Bug", Spectre:"Ghost", Acier:"Steel", Psy:"Psychic", Ténèbres:"Dark", Fée:"Fairy", Normal:"Normal", Dragon:"Dragon"};
            return "img/items/tm" + (map[typeFr] || typeFr) + ".png";
          });
          // Pre-translate full HTML strings that are known keys in UI_TEXT_MAP
          // (e.g. multi-sentence rich-text like the Training help panel with <br><br>).
          // Doing this BEFORE setting the DOM avoids partial-translation artefacts on
          // the individual text nodes that result from the <br> split.
          if (window.gameLang === "fr" && typeof UI_TEXT_MAP !== "undefined" && typeof t_ui === "function") {
            const vTrimmed = value.trim();
            if (UI_TEXT_MAP[vTrimmed]) {
              value = t_ui(UI_TEXT_MAP[vTrimmed]);
            } else {
              // Also try accented variant (Pokemon → Pokémon) in case source uses unaccented
              const vAccented = vTrimmed.replace(/\bPokemon\b/g, "Pokémon");
              if (vAccented !== vTrimmed && UI_TEXT_MAP[vAccented]) {
                value = t_ui(UI_TEXT_MAP[vAccented]);
              }
            }
          }
        }
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

    // 7. Hook window.alert for runtime text translation
    const originalAlert = window.alert;
    window.alert = function (msg) {
      if (
        window.gameLang === "fr" &&
        typeof msg === "string" &&
        typeof translateRuntimeText === "function"
      ) {
        msg = translateRuntimeText(msg);
      }
      return originalAlert.call(this, msg);
    };

    // 8. Re-translate after common render functions
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
      "openTutorial",
    ];
    funcsToHook.forEach((name) => {
      if (typeof window[name] === "function") {
        const orig = window[name];
        window[name] = function (...args) {
          const res = orig.apply(this, args);
          // updatePokedex / updateDictionary rebuild their Fuse index from scratch
          // every call — re-run the FR enrichment so FR search keys (movepoolFR /
          // signatureFR / renameFR etc.) are present on the new index. Without this,
          // FR move name queries silently return zero results.
          try {
            if (name === "updatePokedex") {
              if (typeof window.__i18nEnrichFusePkmn === "function") window.__i18nEnrichFusePkmn();
              // Mirror the script-scope `let fusePkmn` (explore.js:5094) onto window
              // so debugging / external callers can inspect the current instance.
              if (typeof fusePkmn !== "undefined") window.fusePkmn = fusePkmn;
            }
            if (name === "updateDictionary") {
              if (typeof window.__i18nEnrichFuseDictionary === "function") window.__i18nEnrichFuseDictionary();
              if (typeof fuseDictionary !== "undefined") window.fuseDictionary = fuseDictionary;
            }
          } catch (e) {
            console.error("[i18n] fuse enrich failed in " + name + ":", e);
          }
          if (typeof translateDOM === "function" && window.gameLang === "fr") {
            requestAnimationFrame(translateDOM);
          }
          return res;
        };
      }
    });

    // 8b. Hook tooltipData to fill in help-tooltip entries missing from tooltip.js
    //     (the original game never wired up the data-help="Shop" icon etc.)
    if (typeof window.tooltipData === "function") {
      const origTooltipData = window.tooltipData;
      // category="help" entries not handled by tooltip.js line ~780. Keys are the
      // exact string passed in data-help="..." on the trigger span. Value is an
      // object {title, body} — both strings are looked up via t_ui so FR/EN both
      // benefit from the fix.
      const MISSING_HELP_ENTRIES = {
        Shop: { title: "shop", body: "shopHelp" },
      };
      window.tooltipData = function (category, data) {
        const res = origTooltipData.apply(this, arguments);
        if (category === "help" && MISSING_HELP_ENTRIES[data]) {
          const { title, body } = MISSING_HELP_ENTRIES[data];
          const tTitle = document.getElementById("tooltipTitle");
          const tBottom = document.getElementById("tooltipBottom");
          const tTop = document.getElementById("tooltipTop");
          const tMid = document.getElementById("tooltipMid");
          if (tTitle) {
            tTitle.innerHTML = typeof t_ui === "function" ? t_ui(title) : title;
            tTitle.style.display = "";
          }
          if (tBottom) {
            tBottom.innerHTML = typeof t_ui === "function" ? t_ui(body) : body;
            tBottom.style.display = "";
          }
          if (tTop) tTop.style.display = "none";
          if (tMid) tMid.style.display = "none";
        }
        return res;
      };
    }

    // 8. Dynamic UI_TEXT_MAP entries for strings that only exist in core files.
    //    Two value conventions are supported:
    //     - "<realKey>" : a real key in GAME_UI.fr (e.g. "trainingLevelInfo")
    //     - "<FrenchString>" : raw French string; t_ui() returns it verbatim
    //       when the value isn't a GAME_UI key. Use this for one-off labels
    //       that don't need a keyed entry.
    if (typeof UI_TEXT_MAP === "object") {
      const extraMap = {
        // ═══ TRAINING: VS-unlock requirements ═══
        "Defeat Gym Leader Brock in VS to unlock": "defeatBrockToUnlock",
        "Defeat Gym Leader Misty in VS to unlock": "defeatMistyToUnlock",
        "Defeat Gym Leader Phoebe in VS to unlock": "defeatPhoebeToUnlock",
        "Defeat Elite Trainer Cynthia in VS to unlock": "defeatEliteTrainerCynthiaToUnlock",
        "Defeat Ultra Entity Lusamine in VS to unlock": "defeatUltraEntityLusamine",
        "Defeat Pokemon Professor Oak in VS to unlock": "defeatPokemonProfessorOakToUnlock",
        "Defeat Elite Trainer Cynthia in VS mode to unlock, or alread max level reached": "trainingLevelError",

        // ═══ TRAINING: menu info / errors ═══
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

        // ═══ MYSTERY GIFT: split text nodes from composite tooltip ═══
        "Long Press/Right click the present below to receive a gift Kecleon!": "Appui long/Clic droit sur le cadeau ci-dessous pour recevoir un Kecleon en cadeau !",
        "It will be shiny and carrying a Souvenir Ribbon": "Il sera shiny et portera un Ruban Souvenir",

        // ═══ MOVE-POPUP: movesetGenerator.js buildTableHTML labels ═══
        "Moveset Tag Matches": "Correspondances de Tags",
        "Move": "Capacité",
        "Split": "Catégorie",

        // ═══ CHALLENGES (PR/challenges.js): modal labels ═══
        "Paste challenge code": "Collez le code du défi",
        "Player Pool:": "Groupe du joueur :",
        "Enemy Team:": "Équipe ennemie :",
        "Team:": "Équipe :",
        "Enemy:": "Ennemi :",
        "Reward:": "Récompense :",

        // ═══ CHALLENGES (PR/challengesDictionary.js): intro titles ═══
        "Introduction: Switching": "Introduction : Changement d'équipe",
        "Introduction: Weathers": "Introduction : Météos",

        // ═══ TAG SYSTEM (explore.js): remove-tag modal ═══
        "Delete tag": "Supprimer l'étiquette",
        "Are you sure you want to delete this tag? It will be removed from all Pokemon": "Êtes-vous sûr de vouloir supprimer cette étiquette ? Elle sera retirée de tous les Pokémon",

        // ═══ SHOP / ITEM DICTIONARY: generic error ═══
        "Can't do that right now": "Vous ne pouvez pas faire ceci maintenant",

        // ═══ MOVE-POPUP: category column values (Physical/Special/Status) ═══
        "Physical": "Physique",
        "Special": "Spéciale",
        "Status": "Statut",

        // ═══ ITEM TOOLTIP: unobtainable badge (tooltip.js line 1876 — bare span text node) ═══
        "This item is currently unobtainable": "itemCurrentlyUnobtainable",

        // ═══ TEAM BUILDER: add-slot button (teams.js lines 207, 1058 — bare span text) ═══
        "Add Pokemon": "Ajouter un Pokémon",
        "Add Pokémon": "Ajouter un Pokémon",

        // ═══ CREDITS: full innerHTML block (index.html line 511) ═══
        // Matched as a whole string by the innerHTML hook (value.trim() lookup), so
        // the <span onclick="secretFight(...)">Duck</span> is preserved verbatim.
        // Added Undi credit for the FR translation engine.
        "Made by <span onclick=\"secretFight(areas.missingArea.id)\">Duck</span><br><br>Pokemon and trainer sprites by Pokemon Showdown (Including artists: Beliot419, kyledove, Gnomowladny, Brumirage and ZacWeavile. Go check their work. Now.)<br><br>Gen 9 sprites by KingOfThe-X-Roads<br><br>All characters and related assets featured in this game are the exclusive property of Nintendo, Creatures Inc., and The Pokémon Company, and are used here strictly for non-commercial purposes.":
          "Réalisé par <span onclick=\"secretFight(areas.missingArea.id)\">Duck</span><br><br>Sprites Pokémon et dresseurs par Pokémon Showdown (Incluant les artistes : Beliot419, kyledove, Gnomowladny, Brumirage et ZacWeavile. Allez voir leur travail. Maintenant.)<br><br>Sprites Gen 9 par KingOfThe-X-Roads<br><br>Moteur de traduction FR par Undi<br><br>Tous les personnages et ressources associés présents dans ce jeu sont la propriété exclusive de Nintendo, Creatures Inc. et The Pokémon Company, et sont utilisés ici strictement à des fins non commerciales.",
      };
      for (const [en, key] of Object.entries(extraMap)) {
        if (!UI_TEXT_MAP[en]) UI_TEXT_MAP[en] = key;
      }
      // Original HTML uses accented "Pokémon"; UI_TEXT_MAP was built from fork using "Pokemon"
      for (const [en, key] of Object.entries(UI_TEXT_MAP)) {
        if (en.includes("Pokemon") && !en.includes("Pokémon")) {
          const withAccent = en.replace(/Pokemon/g, "Pokémon");
          if (!UI_TEXT_MAP[withAccent]) UI_TEXT_MAP[withAccent] = key;
        }
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
        ["Litten", "Flamiaou"],
        ["Turtwig", "Tortipouss"],
        ["Froakie", "Grenousse"],
        ["Fire Type", "Type Feu"],
        ["Grass Type", "Type Plante"],
        ["Water Type", "Type Eau"],
        // Composite dynamic messages — replace the English fragment so they read correctly in FR
        [" has been unlocked!", " a été débloqué !"],
        ["Thanks for the ", "Merci pour le "],
        [" now has a ", " a maintenant une nature "],
        [" nature!", " !"],
      ];
      UI_PARTIALS.push(...extraPartials);
      UI_PARTIALS.sort((a, b) => b[0].length - a[0].length);
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

    // 12. Re-translate static DOM now that all patches are applied
    if (typeof translateDOM === "function" && window.gameLang === "fr") {
      translateDOM();
      [1000, 3000, 6000, 10000].forEach((ms) =>
        setTimeout(() => {
          if (window.gameLang === "fr") translateDOM();
        }, ms)
      );
    }
  }, [
    "move",
    "ability",
    "item",
    "pkmn",
    "areas",
    "field",
    "format",
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
      // Translate lores
      if (window.gameLang === "fr" && pkmn[e].lore && LORE_MAP[pkmn[e].lore]) {
        pkmn[e].lore = LORE_MAP[pkmn[e].lore];
      }
    }

    // Inject lore translations into UI_PARTIALS so dynamically injected lores are caught
    if (window.gameLang === "fr" && typeof UI_PARTIALS === "object" && Array.isArray(UI_PARTIALS)) {
      for (const [en, fr] of Object.entries(LORE_MAP)) {
        UI_PARTIALS.push([en, fr]);
      }
      UI_PARTIALS.sort((a, b) => b[0].length - a[0].length);
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

    // 2. Enrich fusePkmn / fuseDictionary with FR-searchable fields.
    //    IMPORTANT: the game re-creates both Fuse indexes on every updatePokedex()
    //    and updateDictionary() call (explore.js:5269, dictionarySearch.js:189),
    //    wiping out any keys we previously added. So enrichment must be run on
    //    every rebuild — we expose the functions globally and re-invoke them
    //    from the funcsToHook wrappers below.
    window.__i18nEnrichFusePkmn = function () {
      if (
        typeof fusePkmn === "undefined" ||
        !fusePkmn.options ||
        !Array.isArray(fusePkmn.options.keys)
      )
        return;
      const docs = fusePkmn.getIndex().docs;
      for (const p of docs) {
        if (!p.typeFR && Array.isArray(p.type)) p.typeFR = p.type.map((t) => format(t)).join(" ");
        if (!p.abilityFR && p.ability) p.abilityFR = format(p.ability);
        if (!p.hiddenAbilityFR && p.hiddenAbility && p.hiddenAbility.id)
          p.hiddenAbilityFR = format(p.hiddenAbility.id);
        if (!p.movepoolFR && Array.isArray(p.movepool)) {
          p.movepoolFR = p.movepool
            .map((mv) => {
              const mo = typeof move !== "undefined" && move[mv];
              const fr = mo && mo.renameFR ? mo.renameFR : "";
              return `${format(mv)} ${fr}`.trim();
            })
            .join(" ");
        }
        if (!p.signatureFR && p.signature && p.signature.id) {
          const mo = typeof move !== "undefined" && move[p.signature.id];
          p.signatureFR = `${format(p.signature.id)} ${(mo && mo.renameFR) || ""}`.trim();
        }
        if (!p.eggMoveFR && p.eggMove && p.eggMove.id) {
          const mo = typeof move !== "undefined" && move[p.eggMove.id];
          p.eggMoveFR = `${format(p.eggMove.id)} ${(mo && mo.renameFR) || ""}`.trim();
        }
      }
      const keys = fusePkmn.options.keys;
      if (!hasKey(keys, "renameFR")) keys.push({ name: "renameFR", getFn: (obj) => obj.renameFR || "" });
      if (!hasKey(keys, "typeFR")) keys.push({ name: "typeFR", getFn: (obj) => obj.typeFR || "" });
      if (!hasKey(keys, "abilityFR")) keys.push({ name: "abilityFR", getFn: (obj) => obj.abilityFR || "" });
      if (!hasKey(keys, "hiddenAbilityFR")) keys.push({ name: "hiddenAbilityFR", getFn: (obj) => obj.hiddenAbilityFR || "" });
      if (!hasKey(keys, "movepoolFR")) keys.push("movepoolFR");
      if (!hasKey(keys, "signatureFR")) keys.push("signatureFR");
      if (!hasKey(keys, "eggMoveFR")) keys.push("eggMoveFR");
      if (!hasKey(keys, "tagShinyFR")) keys.push("tagShinyFR");
      if (!hasKey(keys, "tagPokerusFR")) keys.push("tagPokerusFR");
      if (!hasKey(keys, "tagSignatureFR")) keys.push("tagSignatureFR");
      if (!hasKey(keys, "tagCaughtFR")) keys.push("tagCaughtFR");
      if (!hasKey(keys, "tagObtainedInFR")) keys.push("tagObtainedInFR");
      // Rebuild the index with the new docs+keys so Fuse actually indexes them.
      fusePkmn = new Fuse(docs, fusePkmn.options);
      window.fusePkmn = fusePkmn;
    };
    window.__i18nEnrichFusePkmn();

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

    // 4. Enrich fuseDictionary — same re-run-on-every-rebuild pattern as fusePkmn.
    window.__i18nEnrichFuseDictionary = function () {
      if (
        typeof fuseDictionary === "undefined" ||
        !fuseDictionary.options ||
        !Array.isArray(fuseDictionary.options.keys)
      )
        return;
      const docs = fuseDictionary.getIndex().docs;
      for (const p of docs) {
        if (Array.isArray(p.type) && !p.typeFR) p.typeFR = p.type.map((t) => format(t)).join(" ");
        if (p.ability && !p.abilityFR) p.abilityFR = format(p.ability);
        if (p.hiddenAbility && p.hiddenAbility.id && !p.hiddenAbilityFR)
          p.hiddenAbilityFR = format(p.hiddenAbility.id);
        if (p.eggMove && p.eggMove.id && !p.eggMoveFR)
          p.eggMoveFR =
            format(p.eggMove.id) + " " + (move[p.eggMove.id]?.renameFR || "");
        if (!p.movepoolFR && Array.isArray(p.movepool)) {
          p.movepoolFR = p.movepool
            .map((mv) => {
              const mo = typeof move !== "undefined" && move[mv];
              const fr = mo && mo.renameFR ? mo.renameFR : "";
              return `${format(mv)} ${fr}`.trim();
            })
            .join(" ");
        }
        if (!p.signatureFR && p.signature && p.signature.id) {
          const mo = typeof move !== "undefined" && move[p.signature.id];
          p.signatureFR = `${format(p.signature.id)} ${(mo && mo.renameFR) || ""}`.trim();
        }
      }
      const keys = fuseDictionary.options.keys;
      if (!hasKey(keys, "renameFR")) keys.push({ name: "renameFR", getFn: (obj) => obj.renameFR || "" });
      if (!hasKey(keys, "typeFR")) keys.push({ name: "typeFR", getFn: (obj) => obj.typeFR || "" });
      if (!hasKey(keys, "abilityFR")) keys.push({ name: "abilityFR", getFn: (obj) => obj.abilityFR || "" });
      if (!hasKey(keys, "hiddenAbilityFR")) keys.push({ name: "hiddenAbilityFR", getFn: (obj) => obj.hiddenAbilityFR || "" });
      if (!hasKey(keys, "eggMoveFR")) keys.push("eggMoveFR");
      if (!hasKey(keys, "movepoolFR")) keys.push("movepoolFR");
      if (!hasKey(keys, "signatureFR")) keys.push("signatureFR");
      if (!hasKey(keys, "tagObtainedInFR")) keys.push("tagObtainedInFR");
      if (!hasKey(keys, "tagCaughtFR")) keys.push("tagCaughtFR");
      if (!hasKey(keys, "tagShinyFR")) keys.push("tagShinyFR");
      if (!hasKey(keys, "tagSignatureFR")) keys.push("tagSignatureFR");
      fuseDictionary = new Fuse(docs, fuseDictionary.options);
      window.fuseDictionary = fuseDictionary;
    };
    // Only enrich fuseDictionary if it already exists. If the user hasn't opened
    // the Dictionary panel yet, the game hasn't created it — the updateDictionary
    // wrapper below will call this function once the game builds it.
    if (typeof fuseDictionary !== "undefined") window.__i18nEnrichFuseDictionary();
  }, [
    // IMPORTANT: don't block on fuseDictionary here — the game only creates it
    // when the user opens the Dictionary panel, so requiring it would prevent
    // this whole callback from ever firing for users who only browse the Dex.
    // fuseDictionary enrichment now fires later via the updateDictionary wrapper.
    "fusePkmn",
    "pkmn",
    "move",
    "areas",
    "shop",
    "format",
    "getEvolutionFamily",
  ]);
})();

// deploy-trigger: 2026-04-16T01:31:44.0952582+02:00
 
// ============================================
// NEW TRANSLATIONS PATCH (auto-generated)
// ============================================

Object.assign(UI_TEXT_MAP, {
  "(Attack)": "new_Attack",
  "(Defense)": "new_Defense",
  "(Special Attack)": "new_Special_Attack",
  "(Special Defense)": "new_Special_Defense",
  "(Speed)": "new_Speed",
  "- Z-move enemy type multiplier: {var}": "new_Z_move_enemy_type_multiplier_var",
  "<br>(Highest Spiraling Tower floor reached: {var})": "new_br_Highest_Spiraling_Tower_floor_reached_var",
  "<br><br>This is a Signature Move. Signature moves will automatically be learnt at level 100": "new_br_br_This_is_a_Signature_Move_Signature_moves_wi",
  "<br>Level {var}": "new_br_Level_var",
  "<br>This move is restricted ({var}) and only one of them can be present in the active moves at a time": "new_br_This_move_is_restricted_var_and_only_one_of_th",
  "<div class=\"frontier-league\">{var}</div>": "new_div_class_frontier_league_var_div",
  "<option value=\"spooky\">spooky</option>": "new_option_value_spooky_spooky_option",
  "<span class=\"explore-pkmn-level\" > lvl {var} </span>": "new_span_class_explore_pkmn_level_lvl_var_span",
  "<span class=\"nature-text\">{var} nature</span>": "new_span_class_nature_text_var_nature_span",
  "<span>Can be dropped in the dungeon area {var} (Rotation {var})</span>": "new_span_Can_be_dropped_in_the_dungeon_area_var_Rotat",
  "<span>Can be dropped in the event area {var} (Rotation {var})</span>": "new_span_Can_be_dropped_in_the_event_area_var_Rotatio",
  "<span>Can be dropped in the wild area {var} (Rotation {var})</span>": "new_span_Can_be_dropped_in_the_wild_area_var_Rotation",
  "<span>Found in the event {var} (Rotation {var})</span>": "new_span_Found_in_the_event_var_Rotation_var_span",
  "<span>Found in the wild area {var} (Rotation {var})</span>": "new_span_Found_in_the_wild_area_var_Rotation_var_span",
  "<span>Ivs Up!</span>": "new_span_Ivs_Up_span",
  "<span>Obtained as a random reward in the Battle Frontier</span>": "new_span_Obtained_as_a_random_reward_in_the_Battle_Fr",
  "<span>Obtained in the event {var} (Rotation {var})</span>": "new_span_Obtained_in_the_event_var_Rotation_var_span",
  "<span>Rare!</span>": "new_span_Rare_span",
  "<span>Reward from the event {var} (Rotation {var})</span>": "new_span_Reward_from_the_event_var_Rotation_var_span",
  "<span>Uncommon</span>": "new_span_Uncommon_span",
  "<span>Unlocks {var} at level {var} \u2714\ufe0f</span>": "new_span_Unlocks_var_at_level_var_span",
  "<span>Unlocks {var} at level {var} \u274c</span>": "new_span_Unlocks_var_at_level_var_span",
  "<span>Unlocks {var} by using a {var} at level {var}+ \u2714\ufe0f</span>": "new_span_Unlocks_var_by_using_a_var_at_level_var_span",
  "<span>Unlocks {var} by using a {var} at level {var}+ \u274c</span>": "new_span_Unlocks_var_by_using_a_var_at_level_var_span",
  "<strong style=\"filter:hue-rotate(100deg)\" class=\"event-tag\">Tier IV Raid \u2756</strong>": "new_strong_style_filter_hue_rotate_100deg_class_event",
  "<strong style=\"filter:hue-rotate(140deg)\" class=\"event-tag\">Collection \u25c8</strong>": "new_strong_style_filter_hue_rotate_140deg_class_event",
  "<strong style=\"filter:hue-rotate(200deg)\" class=\"event-tag\">Tier II Raid \u2756</strong>": "new_strong_style_filter_hue_rotate_200deg_class_event",
  "<strong style=\"filter:hue-rotate(300deg)\" class=\"event-tag\">Tier III Raid \u2756</strong>": "new_strong_style_filter_hue_rotate_300deg_class_event",
  "<strong style=\"filter:hue-rotate(50deg)\" class=\"event-tag\">Tier I Raid \u2756</strong>": "new_strong_style_filter_hue_rotate_50deg_class_event",
  "A new update is available": "new_A_new_update_is_available",
  "All of your Pokemon have functionally max IVs regardless of their actual IVs. This can be toggled off without any permanent changes<br><br>There are no side-effects to this modifier": "new_All_of_your_Pokemon_have_functionally_max_IVs_rega",
  "All-Type Moves": "new_All_Type_Moves",
  "Automatically hides got Pokemon that are not new after a battle. Excluded from this setting are: New Pokemon, Iv's Ups and Shiny Pokemon": "new_Automatically_hides_got_Pokemon_that_are_not_new_a",
  "Awarded for reaching floor 30 in the Battle Tower": "new_Awarded_for_reaching_floor_30_in_the_Battle_Tower",
  "Awarded in special occasions": "new_Awarded_in_special_occasions",
  "Awarded very rarely for spending a lot of time together": "new_Awarded_very_rarely_for_spending_a_lot_of_time_tog",
  "Capacitor Tower": "new_Capacitor_Tower",
  "Caught: {var}/{var}": "new_Caught_var_var",
  "Challenge Export": "new_Challenge_Export",
  "Changes the weather to {var} when entering or switching into the battle": "new_Changes_the_weather_to_var_when_entering_or_switch",
  "Close": "new_Close",
  "Common Ability<br>{var}": "new_Common_Ability_br_var",
  "Copy Team": "new_Copy_Team",
  "Current Type Rotation: {var}": "new_Current_Type_Rotation_var",
  "Custom Challenge": "new_Custom_Challenge",
  "Damage received is halved when over 50% HP": "new_Damage_received_is_halved_when_over_50_HP",
  "Decreases Attack by 100%": "new_Decreases_Attack_by_100",
  "Decreases Attack by 50%": "new_Decreases_Attack_by_50",
  "Decreases Defense and Attack by 50%": "new_Decreases_Defense_and_Attack_by_50",
  "Decreases Defense and Special Defense by 100%": "new_Decreases_Defense_and_Special_Defense_by_100",
  "Decreases Defense and Special Defense by 50%": "new_Decreases_Defense_and_Special_Defense_by_50",
  "Decreases Defense by 50%": "new_Decreases_Defense_by_50",
  "Decreases Defense, Special Defense and Speed by 50%": "new_Decreases_Defense_Special_Defense_and_Speed_by_50",
  "Decreases Physical Attack by 50% and deals damage every turn": "new_Decreases_Physical_Attack_by_50_and_deals_damage_e",
  "Decreases Special Attack by 100%": "new_Decreases_Special_Attack_by_100",
  "Decreases Special Attack by 50%": "new_Decreases_Special_Attack_by_50",
  "Decreases Special Attack by 50% and deals damage every turn": "new_Decreases_Special_Attack_by_50_and_deals_damage_ev",
  "Decreases Speed by 50%": "new_Decreases_Speed_by_50",
  "Decreases enemy Attack by 100%": "new_Decreases_enemy_Attack_by_100",
  "Decreases enemy Attack by 100% and Special Attack by 100%": "new_Decreases_enemy_Attack_by_100_and_Special_Attack_b",
  "Decreases enemy Attack by 50%": "new_Decreases_enemy_Attack_by_50",
  "Decreases enemy Attack by 50% when the opposing Pokemon enters the battle": "new_Decreases_enemy_Attack_by_50_when_the_opposing_Pok",
  "Decreases enemy Defense by 100%": "new_Decreases_enemy_Defense_by_100",
  "Decreases enemy Defense by 50%": "new_Decreases_enemy_Defense_by_50",
  "Decreases enemy Special Attack by 50%": "new_Decreases_enemy_Special_Attack_by_50",
  "Decreases enemy Special Attack by 50% when the opposing Pokemon enters the battle": "new_Decreases_enemy_Special_Attack_by_50_when_the_oppo",
  "Decreases enemy Special Defense by 100%": "new_Decreases_enemy_Special_Defense_by_100",
  "Decreases enemy Special Defense by 50%": "new_Decreases_enemy_Special_Defense_by_50",
  "Decreases enemy Speed by 50%": "new_Decreases_enemy_Speed_by_50",
  "Decreases enemy Speed by 75%": "new_Decreases_enemy_Speed_by_75",
  "Decreases the current Wild Area rotation by -1. Useful if you missed yesterday's rotation, or if your schedule doesnt line up with my game": "new_Decreases_the_current_Wild_Area_rotation_by_1_Usef",
  "Decreases the damage dealt by physical attacks by 75%": "new_Decreases_the_damage_dealt_by_physical_attacks_by",
  "Defeat Gym Leader Brock in VS to unlock": "new_Defeat_Gym_Leader_Brock_in_VS_to_unlock",
  "Defeat Gym Leader Misty in VS to unlock": "new_Defeat_Gym_Leader_Misty_in_VS_to_unlock",
  "Defeat Master Trainer Geeta in VS to unlock": "new_Defeat_Master_Trainer_Geeta_in_VS_to_unlock",
  "Derived constructors may only return object or undefined": "new_Derived_constructors_may_only_return_object_or_und",
  "Duplicate Team": "new_Duplicate_Team",
  "Duplicate team": "new_Duplicate_team",
  "Enemy damage over time from {var} is doubled while this Pokemon is active": "new_Enemy_damage_over_time_from_var_is_doubled_while_t",
  "Enemy team must have {var}-{var} Pok\u00e9mon.": "new_Enemy_team_must_have_var_var_Pok_mon",
  "Enter": "new_Enter",
  "Error parsing callback code string:": "new_Error_parsing_callback_code_string",
  "Every 12h you can select up to three abilities to be active for your entire team during raids for 1 hour. These abilities follow the same rules as regular abilities, and wont stack with already existing ones": "new_Every_12h_you_can_select_up_to_three_abilities_to",
  "Extended search is not available": "new_Extended_search_is_not_available",
  "Failed to fetch latest commit: {var}": "new_Failed_to_fetch_latest_commit_var",
  "Failed to load {var}: \"{var} {var}": "new_Failed_to_load_var_var_var",
  "Fatigue damage is reduced by x3<br><br>There are no side-effects to this modifier": "new_Fatigue_damage_is_reduced_by_x3_br_br_There_are_no",
  "Floor: {var}": "new_Floor_var",
  "Flying and Bug moves are executed x1.5 faster than usual": "new_Flying_and_Bug_moves_are_executed_x1_5_faster_than",
  "Frontier": "new_Frontier",
  "Ghost and Dark-type moves are executed x1.5 faster than usual": "new_Ghost_and_Dark_type_moves_are_executed_x1_5_faster",
  "GitHub API error: {var}": "new_GitHub_API_error_var",
  "Give your challenge a title.": "new_Give_your_challenge_a_title",
  "IV Training I": "new_IV_Training_I",
  "IV Training II": "new_IV_Training_II",
  "IV Training III": "new_IV_Training_III",
  "If any of your Pokemon get defeated while battling a trainer of VS Trainers, it will permanently be unusuable until you turn this mode off": "new_If_any_of_your_Pokemon_get_defeated_while_battling",
  "Import Challenge": "new_Import_Challenge",
  "Incorrect 'index' type": "new_Incorrect_index_type",
  "Increase Attack by 100% when hit with a super-effective move": "new_Increase_Attack_by_100_when_hit_with_a_super_effec",
  "Increase Special Attack by 100% when hit with a super-effective move": "new_Increase_Special_Attack_by_100_when_hit_with_a_sup",
  "Increase all Stats by 50%": "new_Increase_all_Stats_by_50",
  "Increased {var} and {var}!": "new_Increased_var_and_var",
  "Increases Attack and Defense by 50%": "new_Increases_Attack_and_Defense_by_50",
  "Increases Attack and Special Attack by 100%": "new_Increases_Attack_and_Special_Attack_by_100",
  "Increases Attack and Speed by 50% to the entire team": "new_Increases_Attack_and_Speed_by_50_to_the_entire_tea",
  "Increases Attack and Speed by 50%. Attacks x1.4 slower than usual": "new_Increases_Attack_and_Speed_by_50_Attacks_x1_4_slow",
  "Increases Attack by 100%": "new_Increases_Attack_by_100",
  "Increases Attack by 100% to the entire team": "new_Increases_Attack_by_100_to_the_entire_team",
  "Increases Attack by 150% but decreases Defense and Special Defense by 50%": "new_Increases_Attack_by_150_but_decreases_Defense_and",
  "Increases Attack by 50% and Speed by 50%": "new_Increases_Attack_by_50_and_Speed_by_50",
  "Increases Attack by 50% on {var} weather": "new_Increases_Attack_by_50_on_var_weather",
  "Increases Attack by 50% when defeating a Pokemon": "new_Increases_Attack_by_50_when_defeating_a_Pokemon",
  "Increases Defense by 100%": "new_Increases_Defense_by_100",
  "Increases Defense by 100% and Special Defense by 50%": "new_Increases_Defense_by_100_and_Special_Defense_by_50",
  "Increases Defense by 50%": "new_Increases_Defense_by_50",
  "Increases Defense by 50% if afflicted with a status effect": "new_Increases_Defense_by_50_if_afflicted_with_a_status",
  "Increases Defense by 50% on {var} weather": "new_Increases_Defense_by_50_on_var_weather",
  "Increases Special Attack and Speed by 50%. Attacks x1.4 slower than usual": "new_Increases_Special_Attack_and_Speed_by_50_Attacks_x",
  "Increases Special Attack by 100%": "new_Increases_Special_Attack_by_100",
  "Increases Special Attack by 100% and Special Defense by 100%": "new_Increases_Special_Attack_by_100_and_Special_Defens",
  "Increases Special Attack by 100% and Special Defense by 50%": "new_Increases_Special_Attack_by_100_and_Special_Defens",
  "Increases Special Attack by 100% to the entire team": "new_Increases_Special_Attack_by_100_to_the_entire_team",
  "Increases Special Attack by 100%, Defense by 50% and Special Defense by 50%": "new_Increases_Special_Attack_by_100_Defense_by_50_and",
  "Increases Special Attack by 50%": "new_Increases_Special_Attack_by_50",
  "Increases Special Attack by 50% if afflicted with a status effect": "new_Increases_Special_Attack_by_50_if_afflicted_with_a",
  "Increases Special Attack by 50% on {var} weather": "new_Increases_Special_Attack_by_50_on_var_weather",
  "Increases Special Attack by 50% when defeating a Pokemon": "new_Increases_Special_Attack_by_50_when_defeating_a_Po",
  "Increases Special Defense and Special Attack by 50%": "new_Increases_Special_Defense_and_Special_Attack_by_50",
  "Increases Special Defense by 100%": "new_Increases_Special_Defense_by_100",
  "Increases Special Defense by 100% and Defense by 50%": "new_Increases_Special_Defense_by_100_and_Defense_by_50",
  "Increases Special Defense by 100% to the entire team": "new_Increases_Special_Defense_by_100_to_the_entire_tea",
  "Increases Special Defense by 50%": "new_Increases_Special_Defense_by_50",
  "Increases Special Defense by 50% if afflicted with a status effect": "new_Increases_Special_Defense_by_50_if_afflicted_with",
  "Increases Speed by 50%": "new_Increases_Speed_by_50",
  "Increases Speed by 50% if no item is being held": "new_Increases_Speed_by_50_if_no_item_is_being_held",
  "Increases Speed by 50% on {var} weather": "new_Increases_Speed_by_50_on_var_weather",
  "Increases Speed by 50% when defeating a Pokemon": "new_Increases_Speed_by_50_when_defeating_a_Pokemon",
  "Increases Speed by 75%": "new_Increases_Speed_by_75",
  "Increases the Damage dealt by x1.2 when afflicted with {var}, and nullifies the damage overtime caused by it": "new_Increases_the_Damage_dealt_by_x1_2_when_afflicted",
  "Increases the damage of Ice-Type moves by 50%": "new_Increases_the_damage_of_Ice_Type_moves_by_50",
  "Increases the highest stat of the user by 50% on {var}": "new_Increases_the_highest_stat_of_the_user_by_50_on_va",
  "Increases the highest stat of the user by 50% on {var} weather": "new_Increases_the_highest_stat_of_the_user_by_50_on_va",
  "Inflict {var} on your entire team for 10 turns": "new_Inflict_var_on_your_entire_team_for_10_turns",
  "Inflict {var} on your entire team for 15 turns": "new_Inflict_var_on_your_entire_team_for_15_turns",
  "Inflicts {var} and decreases enemy Speed by 50%": "new_Inflicts_var_and_decreases_enemy_Speed_by_50",
  "Inflicts {var} on the user": "new_Inflicts_var_on_the_user",
  "Inflicts {var} to the entire team": "new_Inflicts_var_to_the_entire_team",
  "Inflicts {var}, but increases enemy Attack by 100%": "new_Inflicts_var_but_increases_enemy_Attack_by_100",
  "Inflicts {var}, but increases enemy Special Attack by 100%": "new_Inflicts_var_but_increases_enemy_Special_Attack_by",
  "Initialisation failed": "new_Initialisation_failed",
  "Initialisation failed - HTML5 Web Worker is not supported": "new_Initialisation_failed_HTML5_Web_Worker_is_not_supp",
  "Invalid IV value for {var}: {var}": "new_Invalid_IV_value_for_var_var",
  "Invalid attempt to spread non-iterable instance.nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.": "new_Invalid_attempt_to_spread_non_iterable_instance_nI",
  "Invalid level: {var}": "new_Invalid_level_var",
  "Invalid value for key": "new_Invalid_value_for_key",
  "Level {var}": "new_Level_var",
  "Limited Area Until {var}/{var}": "new_Limited_Area_Until_var_var",
  "Main Challenges are coming soon.": "new_Main_Challenges_are_coming_soon",
  "Make a challenge text first.": "new_Make_a_challenge_text_first",
  "Moves cannot be freely switched at this moment": "new_Moves_cannot_be_freely_switched_at_this_moment",
  "Moves fail to deal damage": "new_Moves_fail_to_deal_damage",
  "Multiple of the same Egg Move cannot exist on the same team if the host does not have said move as an inherent Egg Move or Signature Move": "new_Multiple_of_the_same_Egg_Move_cannot_exist_on_the",
  "New features unlocked!": "new_New_features_unlocked",
  "New items!": "new_New_items",
  "Next reward at {var} score": "new_Next_reward_at_var_score",
  "No custom challenges yet.": "new_No_custom_challenges_yet",
  "No item": "new_No_item",
  "No new genetic changes": "new_No_new_genetic_changes",
  "Obtained in \u2605 and \u2605\u2605 mega-dimension raids. Exchanged in the Poke-Mart": "new_Obtained_in_and_mega_dimension_raids_Exchanged_in",
  "Obtained in \u2605\u2605\u2605 and \u2605\u2605\u2605\u2605 mega-dimension raids. Exchanged in the Poke-Mart": "new_Obtained_in_and_mega_dimension_raids_Exchanged_in",
  "One or more Pokemon in the current team have multiple restricted moves ({var}) equipped": "new_One_or_more_Pokemon_in_the_current_team_have_multi",
  "Overwrite Team?": "new_Overwrite_Team",
  "Pay and cook ({var} <img src=\"img/items/goldenBottleCap.png\">)": "new_Pay_and_cook_var_img_src_img_items_goldenBottleCap",
  "Pick a different team slot.": "new_Pick_a_different_team_slot",
  "Power doubles if the target is Flying-Type": "new_Power_doubles_if_the_target_is_Flying_Type",
  "Power doubles if the target is {var}": "new_Power_doubles_if_the_target_is_var",
  "Prevents the enemy to use the move in the slot embargo was used": "new_Prevents_the_enemy_to_use_the_move_in_the_slot_emb",
  "Prevents the lowering of any Attack stat": "new_Prevents_the_lowering_of_any_Attack_stat",
  "Prevents the lowering of any Defense stat": "new_Prevents_the_lowering_of_any_Defense_stat",
  "Psychic and Fairy moves are executed x1.5 faster than usual": "new_Psychic_and_Fairy_moves_are_executed_x1_5_faster_t",
  "Rare Ability<br>{var}": "new_Rare_Ability_br_var",
  "Reach a minimum score of {var} in order to get rewards": "new_Reach_a_minimum_score_of_var_in_order_to_get_rewar",
  "Requires a <img src=\"img/items/futureContraption.png\"> Future Contraption to enter": "new_Requires_a_img_src_img_items_futureContraption_png",
  "Requires a <img src=\"img/items/futureDisk.png\"> Future Disk to enter": "new_Requires_a_img_src_img_items_futureDisk_png_Future",
  "Requires a <img src=\"img/items/megaChunk.png\"> Mega-Chunk to enter": "new_Requires_a_img_src_img_items_megaChunk_png_Mega_Ch",
  "Requires a <img src=\"img/items/megaCluster.png\"> Mega-Cluster to enter": "new_Requires_a_img_src_img_items_megaCluster_png_Mega",
  "Requires a <img src=\"img/items/megaPiece.png\"> Mega-Piece to enter": "new_Requires_a_img_src_img_items_megaPiece_png_Mega_Pi",
  "Requires a <img src=\"img/items/pokeflute.png\"> Pokeflute to enter": "new_Requires_a_img_src_img_items_pokeflute_png_Pokeflu",
  "Requires a <img src=\"img/items/primalEarth.png\"> Primal Earth to enter": "new_Requires_a_img_src_img_items_primalEarth_png_Prima",
  "Requires a <img src=\"img/items/redChain.png\"> Red Chain to enter": "new_Requires_a_img_src_img_items_redChain_png_Red_Chai",
  "Requires a <img src=\"img/items/wisdomPetal.png\"> Wisdom Petal to enter": "new_Requires_a_img_src_img_items_wisdomPetal_png_Wisdo",
  "Requires a <img src=\"img/items/wormholeResidue.png\"> Wormhole Residue to enter": "new_Requires_a_img_src_img_items_wormholeResidue_png_W",
  "Requires an <img src=\"img/items/aetherKeycard.png\"> Aether Keycard to enter": "new_Requires_an_img_src_img_items_aetherKeycard_png_Ae",
  "Requires an <img src=\"img/items/ancientKeystone.png\"> Ancient Keystone to enter": "new_Requires_an_img_src_img_items_ancientKeystone_png",
  "Requires an <img src=\"img/items/ancientOrchid.png\"> Ancient Orchid to enter": "new_Requires_an_img_src_img_items_ancientOrchid_png_An",
  "Requires an <img src=\"img/items/epochFeather.png\"> Epoch Feather to enter": "new_Requires_an_img_src_img_items_epochFeather_png_Epo",
  "Requires an <img src=\"img/items/steelKeystone.png\"> Steel Keystone to enter": "new_Requires_an_img_src_img_items_steelKeystone_png_St",
  "Requires x3 <img src=\"img/items/aetherKeycard.png\"> Aether Keycard to enter": "new_Requires_x3_img_src_img_items_aetherKeycard_png_Ae",
  "Requires x3 <img src=\"img/items/ancientKeystone.png\"> Ancient Keystones to enter": "new_Requires_x3_img_src_img_items_ancientKeystone_png",
  "Requires x3 <img src=\"img/items/ancientOrchid.png\"> Ancient Orchids to enter": "new_Requires_x3_img_src_img_items_ancientOrchid_png_An",
  "Requires x3 <img src=\"img/items/epochFeather.png\"> Epoch Feathers to enter": "new_Requires_x3_img_src_img_items_epochFeather_png_Epo",
  "Requires x3 <img src=\"img/items/futureContraption.png\"> Future Contraptions to enter": "new_Requires_x3_img_src_img_items_futureContraption_pn",
  "Requires x3 <img src=\"img/items/futureDisk.png\"> Future Disk to enter": "new_Requires_x3_img_src_img_items_futureDisk_png_Futur",
  "Requires x3 <img src=\"img/items/oldGateau.png\"> Old Gateau to enter": "new_Requires_x3_img_src_img_items_oldGateau_png_Old_Ga",
  "Requires x3 <img src=\"img/items/pokeflute.png\"> Pokeflutes to enter": "new_Requires_x3_img_src_img_items_pokeflute_png_Pokefl",
  "Requires x3 <img src=\"img/items/primalEarth.png\"> Primal Earths to enter": "new_Requires_x3_img_src_img_items_primalEarth_png_Prim",
  "Requires x3 <img src=\"img/items/redChain.png\"> Red Chains to enter": "new_Requires_x3_img_src_img_items_redChain_png_Red_Cha",
  "Requires x3 <img src=\"img/items/steelKeystone.png\"> Steel Keystones to enter": "new_Requires_x3_img_src_img_items_steelKeystone_png_St",
  "Requires x3 <img src=\"img/items/wisdomPetal.png\"> Wisdom Petals to enter": "new_Requires_x3_img_src_img_items_wisdomPetal_png_Wisd",
  "Requires x3 <img src=\"img/items/wormholeResidue.png\"> Wormhole Residues to enter": "new_Requires_x3_img_src_img_items_wormholeResidue_png",
  "Restricted Z Moves": "new_Restricted_Z_Moves",
  "Restricted moves cannot be freely switched during combat": "new_Restricted_moves_cannot_be_freely_switched_during",
  "Reward Received": "new_Reward_Received",
  "Same-Type: {var}": "new_Same_Type_var",
  "Save and go!": "new_Save_and_go",
  "Score: {var}": "new_Score_var",
  "Seasonal item, dropped randomly from defeating wild Pokemon. Expires on {var}/{var}": "new_Seasonal_item_dropped_randomly_from_defeating_wild",
  "Select a Pokemon to teach {var}": "new_Select_a_Pokemon_to_teach_var",
  "Select a Pokemon to use the {var}": "new_Select_a_Pokemon_to_use_the_var",
  "Select at least {var} Pok\u00e9mon.": "new_Select_at_least_var_Pok_mon",
  "Select ingredients to add to the curry! [{var}/3]": "new_Select_ingredients_to_add_to_the_curry_var_3",
  "Select the seasonal event to start. It will last for the 10 following days, and will get replaced by currently-ongoing ones. However, the seasonal shop of that event wont open": "new_Select_the_seasonal_event_to_start_It_will_last_fo",
  "Select the target team slot to overwrite.": "new_Select_the_target_team_slot_to_overwrite",
  "Smile Ribbon": "new_Smile_Ribbon",
  "Start Challenge": "new_Start_Challenge",
  "Story-driven battles and curated challenges live here. More Main Challenges are coming soon.": "new_Story_driven_battles_and_curated_challenges_live_h",
  "Switching Pokemon by clicking on them to have the upperhand will make hard battles much more manageable. Consider type immunities and resistances when doing so": "new_Switching_Pokemon_by_clicking_on_them_to_have_the",
  "Team Auto-Build": "new_Team_Auto_Build",
  "The training Pokemon has multiple restricted moves ({var}) equipped!": "new_The_training_Pokemon_has_multiple_restricted_moves",
  "The warmth of spring. Its fire does not scorch the world, but stirs it awake, melting snow and kindling new life. The cold loosens its hold as it passes, and the land is renewed by heat and light.": "new_The_warmth_of_spring_Its_fire_does_not_scorch_the",
  "This Pokemon can last {var} turns before fainting from Battle Fatigue at maximum IVs": "new_This_Pokemon_can_last_var_turns_before_fainting_fr",
  "This Pokemon cannot be caught on its current stage": "new_This_Pokemon_cannot_be_caught_on_its_current_stage",
  "This will replace {var}.": "new_This_will_replace_var",
  "Too many moves for {var}.": "new_Too_many_moves_for_var",
  "Total": "new_Total",
  "Trainers have twice the health. Only applies to VS Trainers": "new_Trainers_have_twice_the_health_Only_applies_to_VS",
  "Uncommon Ability<br>{var}": "new_Uncommon_Ability_br_var",
  "Unknown IV stat: {var}": "new_Unknown_IV_stat_var",
  "Unknown ability: {var}": "new_Unknown_ability_var",
  "Unknown move: {var}": "new_Unknown_move_var",
  "Unknown {var} Pok\u00e9mon: {var}": "new_Unknown_var_Pok_mon_var",
  "Unknown {var} item: {var}": "new_Unknown_var_item_var",
  "Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by {var} by x{var}": "new_Use_Evolve_a_certain_Pokemon_br_When_held_Increase",
  "Use: Evolve certain kinds of Pokemon (Must be level {var}+)": "new_Use_Evolve_certain_kinds_of_Pokemon_Must_be_level",
  "Weather moves can greatly impact the outcome of the fight. Weathers are best used in combination with switching, since the damage bonus from them will apply to everyone": "new_Weather_moves_can_greatly_impact_the_outcome_of_th",
  "Welcome valiant trainer to the final frontier, the Mega-Dimension, housing only the strongest Pokemon of all the universe!<br><br>Wormholes have each separate rules, having both unique areas, field effects and skills. In addition to field effects, skills will trigger while fighting the boss<br><br>The Pokemon appearing on the rift are random and will change on each rotation": "new_Welcome_valiant_trainer_to_the_final_frontier_the",
  "Z-move executed: Dealt {var} damage": "new_Z_move_executed_Dealt_var_damage",
});

Object.assign(GAME_UI.en, {
  "new_Attack": "(Attack)",
  "new_Defense": "(Defense)",
  "new_Special_Attack": "(Special Attack)",
  "new_Special_Defense": "(Special Defense)",
  "new_Speed": "(Speed)",
  "new_Z_move_enemy_type_multiplier_var": "- Z-move enemy type multiplier: {var}",
  "new_br_Highest_Spiraling_Tower_floor_reached_var": "<br>(Highest Spiraling Tower floor reached: {var})",
  "new_br_br_This_is_a_Signature_Move_Signature_moves_wi": "<br><br>This is a Signature Move. Signature moves will automatically be learnt at level 100",
  "new_br_Level_var": "<br>Level {var}",
  "new_br_This_move_is_restricted_var_and_only_one_of_th": "<br>This move is restricted ({var}) and only one of them can be present in the active moves at a time",
  "new_div_class_frontier_league_var_div": "<div class=\"frontier-league\">{var}</div>",
  "new_option_value_spooky_spooky_option": "<option value=\"spooky\">spooky</option>",
  "new_span_class_explore_pkmn_level_lvl_var_span": "<span class=\"explore-pkmn-level\" > lvl {var} </span>",
  "new_span_class_nature_text_var_nature_span": "<span class=\"nature-text\">{var} nature</span>",
  "new_span_Can_be_dropped_in_the_dungeon_area_var_Rotat": "<span>Can be dropped in the dungeon area {var} (Rotation {var})</span>",
  "new_span_Can_be_dropped_in_the_event_area_var_Rotatio": "<span>Can be dropped in the event area {var} (Rotation {var})</span>",
  "new_span_Can_be_dropped_in_the_wild_area_var_Rotation": "<span>Can be dropped in the wild area {var} (Rotation {var})</span>",
  "new_span_Found_in_the_event_var_Rotation_var_span": "<span>Found in the event {var} (Rotation {var})</span>",
  "new_span_Found_in_the_wild_area_var_Rotation_var_span": "<span>Found in the wild area {var} (Rotation {var})</span>",
  "new_span_Ivs_Up_span": "<span>Ivs Up!</span>",
  "new_span_Obtained_as_a_random_reward_in_the_Battle_Fr": "<span>Obtained as a random reward in the Battle Frontier</span>",
  "new_span_Obtained_in_the_event_var_Rotation_var_span": "<span>Obtained in the event {var} (Rotation {var})</span>",
  "new_span_Rare_span": "<span>Rare!</span>",
  "new_span_Reward_from_the_event_var_Rotation_var_span": "<span>Reward from the event {var} (Rotation {var})</span>",
  "new_span_Uncommon_span": "<span>Uncommon</span>",
  "new_span_Unlocks_var_at_level_var_span": "<span>Unlocks {var} at level {var} \u2714\ufe0f</span>",
  "new_span_Unlocks_var_at_level_var_span": "<span>Unlocks {var} at level {var} \u274c</span>",
  "new_span_Unlocks_var_by_using_a_var_at_level_var_span": "<span>Unlocks {var} by using a {var} at level {var}+ \u2714\ufe0f</span>",
  "new_span_Unlocks_var_by_using_a_var_at_level_var_span": "<span>Unlocks {var} by using a {var} at level {var}+ \u274c</span>",
  "new_strong_style_filter_hue_rotate_100deg_class_event": "<strong style=\"filter:hue-rotate(100deg)\" class=\"event-tag\">Tier IV Raid \u2756</strong>",
  "new_strong_style_filter_hue_rotate_140deg_class_event": "<strong style=\"filter:hue-rotate(140deg)\" class=\"event-tag\">Collection \u25c8</strong>",
  "new_strong_style_filter_hue_rotate_200deg_class_event": "<strong style=\"filter:hue-rotate(200deg)\" class=\"event-tag\">Tier II Raid \u2756</strong>",
  "new_strong_style_filter_hue_rotate_300deg_class_event": "<strong style=\"filter:hue-rotate(300deg)\" class=\"event-tag\">Tier III Raid \u2756</strong>",
  "new_strong_style_filter_hue_rotate_50deg_class_event": "<strong style=\"filter:hue-rotate(50deg)\" class=\"event-tag\">Tier I Raid \u2756</strong>",
  "new_A_new_update_is_available": "A new update is available",
  "new_All_of_your_Pokemon_have_functionally_max_IVs_rega": "All of your Pokemon have functionally max IVs regardless of their actual IVs. This can be toggled off without any permanent changes<br><br>There are no side-effects to this modifier",
  "new_All_Type_Moves": "All-Type Moves",
  "new_Automatically_hides_got_Pokemon_that_are_not_new_a": "Automatically hides got Pokemon that are not new after a battle. Excluded from this setting are: New Pokemon, Iv's Ups and Shiny Pokemon",
  "new_Awarded_for_reaching_floor_30_in_the_Battle_Tower": "Awarded for reaching floor 30 in the Battle Tower",
  "new_Awarded_in_special_occasions": "Awarded in special occasions",
  "new_Awarded_very_rarely_for_spending_a_lot_of_time_tog": "Awarded very rarely for spending a lot of time together",
  "new_Capacitor_Tower": "Capacitor Tower",
  "new_Caught_var_var": "Caught: {var}/{var}",
  "new_Challenge_Export": "Challenge Export",
  "new_Changes_the_weather_to_var_when_entering_or_switch": "Changes the weather to {var} when entering or switching into the battle",
  "new_Close": "Close",
  "new_Common_Ability_br_var": "Common Ability<br>{var}",
  "new_Copy_Team": "Copy Team",
  "new_Current_Type_Rotation_var": "Current Type Rotation: {var}",
  "new_Custom_Challenge": "Custom Challenge",
  "new_Damage_received_is_halved_when_over_50_HP": "Damage received is halved when over 50% HP",
  "new_Decreases_Attack_by_100": "Decreases Attack by 100%",
  "new_Decreases_Attack_by_50": "Decreases Attack by 50%",
  "new_Decreases_Defense_and_Attack_by_50": "Decreases Defense and Attack by 50%",
  "new_Decreases_Defense_and_Special_Defense_by_100": "Decreases Defense and Special Defense by 100%",
  "new_Decreases_Defense_and_Special_Defense_by_50": "Decreases Defense and Special Defense by 50%",
  "new_Decreases_Defense_by_50": "Decreases Defense by 50%",
  "new_Decreases_Defense_Special_Defense_and_Speed_by_50": "Decreases Defense, Special Defense and Speed by 50%",
  "new_Decreases_Physical_Attack_by_50_and_deals_damage_e": "Decreases Physical Attack by 50% and deals damage every turn",
  "new_Decreases_Special_Attack_by_100": "Decreases Special Attack by 100%",
  "new_Decreases_Special_Attack_by_50": "Decreases Special Attack by 50%",
  "new_Decreases_Special_Attack_by_50_and_deals_damage_ev": "Decreases Special Attack by 50% and deals damage every turn",
  "new_Decreases_Speed_by_50": "Decreases Speed by 50%",
  "new_Decreases_enemy_Attack_by_100": "Decreases enemy Attack by 100%",
  "new_Decreases_enemy_Attack_by_100_and_Special_Attack_b": "Decreases enemy Attack by 100% and Special Attack by 100%",
  "new_Decreases_enemy_Attack_by_50": "Decreases enemy Attack by 50%",
  "new_Decreases_enemy_Attack_by_50_when_the_opposing_Pok": "Decreases enemy Attack by 50% when the opposing Pokemon enters the battle",
  "new_Decreases_enemy_Defense_by_100": "Decreases enemy Defense by 100%",
  "new_Decreases_enemy_Defense_by_50": "Decreases enemy Defense by 50%",
  "new_Decreases_enemy_Special_Attack_by_50": "Decreases enemy Special Attack by 50%",
  "new_Decreases_enemy_Special_Attack_by_50_when_the_oppo": "Decreases enemy Special Attack by 50% when the opposing Pokemon enters the battle",
  "new_Decreases_enemy_Special_Defense_by_100": "Decreases enemy Special Defense by 100%",
  "new_Decreases_enemy_Special_Defense_by_50": "Decreases enemy Special Defense by 50%",
  "new_Decreases_enemy_Speed_by_50": "Decreases enemy Speed by 50%",
  "new_Decreases_enemy_Speed_by_75": "Decreases enemy Speed by 75%",
  "new_Decreases_the_current_Wild_Area_rotation_by_1_Usef": "Decreases the current Wild Area rotation by -1. Useful if you missed yesterday's rotation, or if your schedule doesnt line up with my game",
  "new_Decreases_the_damage_dealt_by_physical_attacks_by": "Decreases the damage dealt by physical attacks by 75%",
  "new_Defeat_Gym_Leader_Brock_in_VS_to_unlock": "Defeat Gym Leader Brock in VS to unlock",
  "new_Defeat_Gym_Leader_Misty_in_VS_to_unlock": "Defeat Gym Leader Misty in VS to unlock",
  "new_Defeat_Master_Trainer_Geeta_in_VS_to_unlock": "Defeat Master Trainer Geeta in VS to unlock",
  "new_Derived_constructors_may_only_return_object_or_und": "Derived constructors may only return object or undefined",
  "new_Duplicate_Team": "Duplicate Team",
  "new_Duplicate_team": "Duplicate team",
  "new_Enemy_damage_over_time_from_var_is_doubled_while_t": "Enemy damage over time from {var} is doubled while this Pokemon is active",
  "new_Enemy_team_must_have_var_var_Pok_mon": "Enemy team must have {var}-{var} Pok\u00e9mon.",
  "new_Enter": "Enter",
  "new_Error_parsing_callback_code_string": "Error parsing callback code string:",
  "new_Every_12h_you_can_select_up_to_three_abilities_to": "Every 12h you can select up to three abilities to be active for your entire team during raids for 1 hour. These abilities follow the same rules as regular abilities, and wont stack with already existing ones",
  "new_Extended_search_is_not_available": "Extended search is not available",
  "new_Failed_to_fetch_latest_commit_var": "Failed to fetch latest commit: {var}",
  "new_Failed_to_load_var_var_var": "Failed to load {var}: \"{var} {var}",
  "new_Fatigue_damage_is_reduced_by_x3_br_br_There_are_no": "Fatigue damage is reduced by x3<br><br>There are no side-effects to this modifier",
  "new_Floor_var": "Floor: {var}",
  "new_Flying_and_Bug_moves_are_executed_x1_5_faster_than": "Flying and Bug moves are executed x1.5 faster than usual",
  "new_Frontier": "Frontier",
  "new_Ghost_and_Dark_type_moves_are_executed_x1_5_faster": "Ghost and Dark-type moves are executed x1.5 faster than usual",
  "new_GitHub_API_error_var": "GitHub API error: {var}",
  "new_Give_your_challenge_a_title": "Give your challenge a title.",
  "new_IV_Training_I": "IV Training I",
  "new_IV_Training_II": "IV Training II",
  "new_IV_Training_III": "IV Training III",
  "new_If_any_of_your_Pokemon_get_defeated_while_battling": "If any of your Pokemon get defeated while battling a trainer of VS Trainers, it will permanently be unusuable until you turn this mode off",
  "new_Import_Challenge": "Import Challenge",
  "new_Incorrect_index_type": "Incorrect 'index' type",
  "new_Increase_Attack_by_100_when_hit_with_a_super_effec": "Increase Attack by 100% when hit with a super-effective move",
  "new_Increase_Special_Attack_by_100_when_hit_with_a_sup": "Increase Special Attack by 100% when hit with a super-effective move",
  "new_Increase_all_Stats_by_50": "Increase all Stats by 50%",
  "new_Increased_var_and_var": "Increased {var} and {var}!",
  "new_Increases_Attack_and_Defense_by_50": "Increases Attack and Defense by 50%",
  "new_Increases_Attack_and_Special_Attack_by_100": "Increases Attack and Special Attack by 100%",
  "new_Increases_Attack_and_Speed_by_50_to_the_entire_tea": "Increases Attack and Speed by 50% to the entire team",
  "new_Increases_Attack_and_Speed_by_50_Attacks_x1_4_slow": "Increases Attack and Speed by 50%. Attacks x1.4 slower than usual",
  "new_Increases_Attack_by_100": "Increases Attack by 100%",
  "new_Increases_Attack_by_100_to_the_entire_team": "Increases Attack by 100% to the entire team",
  "new_Increases_Attack_by_150_but_decreases_Defense_and": "Increases Attack by 150% but decreases Defense and Special Defense by 50%",
  "new_Increases_Attack_by_50_and_Speed_by_50": "Increases Attack by 50% and Speed by 50%",
  "new_Increases_Attack_by_50_on_var_weather": "Increases Attack by 50% on {var} weather",
  "new_Increases_Attack_by_50_when_defeating_a_Pokemon": "Increases Attack by 50% when defeating a Pokemon",
  "new_Increases_Defense_by_100": "Increases Defense by 100%",
  "new_Increases_Defense_by_100_and_Special_Defense_by_50": "Increases Defense by 100% and Special Defense by 50%",
  "new_Increases_Defense_by_50": "Increases Defense by 50%",
  "new_Increases_Defense_by_50_if_afflicted_with_a_status": "Increases Defense by 50% if afflicted with a status effect",
  "new_Increases_Defense_by_50_on_var_weather": "Increases Defense by 50% on {var} weather",
  "new_Increases_Special_Attack_and_Speed_by_50_Attacks_x": "Increases Special Attack and Speed by 50%. Attacks x1.4 slower than usual",
  "new_Increases_Special_Attack_by_100": "Increases Special Attack by 100%",
  "new_Increases_Special_Attack_by_100_and_Special_Defens": "Increases Special Attack by 100% and Special Defense by 100%",
  "new_Increases_Special_Attack_by_100_and_Special_Defens": "Increases Special Attack by 100% and Special Defense by 50%",
  "new_Increases_Special_Attack_by_100_to_the_entire_team": "Increases Special Attack by 100% to the entire team",
  "new_Increases_Special_Attack_by_100_Defense_by_50_and": "Increases Special Attack by 100%, Defense by 50% and Special Defense by 50%",
  "new_Increases_Special_Attack_by_50": "Increases Special Attack by 50%",
  "new_Increases_Special_Attack_by_50_if_afflicted_with_a": "Increases Special Attack by 50% if afflicted with a status effect",
  "new_Increases_Special_Attack_by_50_on_var_weather": "Increases Special Attack by 50% on {var} weather",
  "new_Increases_Special_Attack_by_50_when_defeating_a_Po": "Increases Special Attack by 50% when defeating a Pokemon",
  "new_Increases_Special_Defense_and_Special_Attack_by_50": "Increases Special Defense and Special Attack by 50%",
  "new_Increases_Special_Defense_by_100": "Increases Special Defense by 100%",
  "new_Increases_Special_Defense_by_100_and_Defense_by_50": "Increases Special Defense by 100% and Defense by 50%",
  "new_Increases_Special_Defense_by_100_to_the_entire_tea": "Increases Special Defense by 100% to the entire team",
  "new_Increases_Special_Defense_by_50": "Increases Special Defense by 50%",
  "new_Increases_Special_Defense_by_50_if_afflicted_with": "Increases Special Defense by 50% if afflicted with a status effect",
  "new_Increases_Speed_by_50": "Increases Speed by 50%",
  "new_Increases_Speed_by_50_if_no_item_is_being_held": "Increases Speed by 50% if no item is being held",
  "new_Increases_Speed_by_50_on_var_weather": "Increases Speed by 50% on {var} weather",
  "new_Increases_Speed_by_50_when_defeating_a_Pokemon": "Increases Speed by 50% when defeating a Pokemon",
  "new_Increases_Speed_by_75": "Increases Speed by 75%",
  "new_Increases_the_Damage_dealt_by_x1_2_when_afflicted": "Increases the Damage dealt by x1.2 when afflicted with {var}, and nullifies the damage overtime caused by it",
  "new_Increases_the_damage_of_Ice_Type_moves_by_50": "Increases the damage of Ice-Type moves by 50%",
  "new_Increases_the_highest_stat_of_the_user_by_50_on_va": "Increases the highest stat of the user by 50% on {var}",
  "new_Increases_the_highest_stat_of_the_user_by_50_on_va": "Increases the highest stat of the user by 50% on {var} weather",
  "new_Inflict_var_on_your_entire_team_for_10_turns": "Inflict {var} on your entire team for 10 turns",
  "new_Inflict_var_on_your_entire_team_for_15_turns": "Inflict {var} on your entire team for 15 turns",
  "new_Inflicts_var_and_decreases_enemy_Speed_by_50": "Inflicts {var} and decreases enemy Speed by 50%",
  "new_Inflicts_var_on_the_user": "Inflicts {var} on the user",
  "new_Inflicts_var_to_the_entire_team": "Inflicts {var} to the entire team",
  "new_Inflicts_var_but_increases_enemy_Attack_by_100": "Inflicts {var}, but increases enemy Attack by 100%",
  "new_Inflicts_var_but_increases_enemy_Special_Attack_by": "Inflicts {var}, but increases enemy Special Attack by 100%",
  "new_Initialisation_failed": "Initialisation failed",
  "new_Initialisation_failed_HTML5_Web_Worker_is_not_supp": "Initialisation failed - HTML5 Web Worker is not supported",
  "new_Invalid_IV_value_for_var_var": "Invalid IV value for {var}: {var}",
  "new_Invalid_attempt_to_spread_non_iterable_instance_nI": "Invalid attempt to spread non-iterable instance.nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  "new_Invalid_level_var": "Invalid level: {var}",
  "new_Invalid_value_for_key": "Invalid value for key",
  "new_Level_var": "Level {var}",
  "new_Limited_Area_Until_var_var": "Limited Area Until {var}/{var}",
  "new_Main_Challenges_are_coming_soon": "Main Challenges are coming soon.",
  "new_Make_a_challenge_text_first": "Make a challenge text first.",
  "new_Moves_cannot_be_freely_switched_at_this_moment": "Moves cannot be freely switched at this moment",
  "new_Moves_fail_to_deal_damage": "Moves fail to deal damage",
  "new_Multiple_of_the_same_Egg_Move_cannot_exist_on_the": "Multiple of the same Egg Move cannot exist on the same team if the host does not have said move as an inherent Egg Move or Signature Move",
  "new_New_features_unlocked": "New features unlocked!",
  "new_New_items": "New items!",
  "new_Next_reward_at_var_score": "Next reward at {var} score",
  "new_No_custom_challenges_yet": "No custom challenges yet.",
  "new_No_item": "No item",
  "new_No_new_genetic_changes": "No new genetic changes",
  "new_Obtained_in_and_mega_dimension_raids_Exchanged_in": "Obtained in \u2605 and \u2605\u2605 mega-dimension raids. Exchanged in the Poke-Mart",
  "new_Obtained_in_and_mega_dimension_raids_Exchanged_in": "Obtained in \u2605\u2605\u2605 and \u2605\u2605\u2605\u2605 mega-dimension raids. Exchanged in the Poke-Mart",
  "new_One_or_more_Pokemon_in_the_current_team_have_multi": "One or more Pokemon in the current team have multiple restricted moves ({var}) equipped",
  "new_Overwrite_Team": "Overwrite Team?",
  "new_Pay_and_cook_var_img_src_img_items_goldenBottleCap": "Pay and cook ({var} <img src=\"img/items/goldenBottleCap.png\">)",
  "new_Pick_a_different_team_slot": "Pick a different team slot.",
  "new_Power_doubles_if_the_target_is_Flying_Type": "Power doubles if the target is Flying-Type",
  "new_Power_doubles_if_the_target_is_var": "Power doubles if the target is {var}",
  "new_Prevents_the_enemy_to_use_the_move_in_the_slot_emb": "Prevents the enemy to use the move in the slot embargo was used",
  "new_Prevents_the_lowering_of_any_Attack_stat": "Prevents the lowering of any Attack stat",
  "new_Prevents_the_lowering_of_any_Defense_stat": "Prevents the lowering of any Defense stat",
  "new_Psychic_and_Fairy_moves_are_executed_x1_5_faster_t": "Psychic and Fairy moves are executed x1.5 faster than usual",
  "new_Rare_Ability_br_var": "Rare Ability<br>{var}",
  "new_Reach_a_minimum_score_of_var_in_order_to_get_rewar": "Reach a minimum score of {var} in order to get rewards",
  "new_Requires_a_img_src_img_items_futureContraption_png": "Requires a <img src=\"img/items/futureContraption.png\"> Future Contraption to enter",
  "new_Requires_a_img_src_img_items_futureDisk_png_Future": "Requires a <img src=\"img/items/futureDisk.png\"> Future Disk to enter",
  "new_Requires_a_img_src_img_items_megaChunk_png_Mega_Ch": "Requires a <img src=\"img/items/megaChunk.png\"> Mega-Chunk to enter",
  "new_Requires_a_img_src_img_items_megaCluster_png_Mega": "Requires a <img src=\"img/items/megaCluster.png\"> Mega-Cluster to enter",
  "new_Requires_a_img_src_img_items_megaPiece_png_Mega_Pi": "Requires a <img src=\"img/items/megaPiece.png\"> Mega-Piece to enter",
  "new_Requires_a_img_src_img_items_pokeflute_png_Pokeflu": "Requires a <img src=\"img/items/pokeflute.png\"> Pokeflute to enter",
  "new_Requires_a_img_src_img_items_primalEarth_png_Prima": "Requires a <img src=\"img/items/primalEarth.png\"> Primal Earth to enter",
  "new_Requires_a_img_src_img_items_redChain_png_Red_Chai": "Requires a <img src=\"img/items/redChain.png\"> Red Chain to enter",
  "new_Requires_a_img_src_img_items_wisdomPetal_png_Wisdo": "Requires a <img src=\"img/items/wisdomPetal.png\"> Wisdom Petal to enter",
  "new_Requires_a_img_src_img_items_wormholeResidue_png_W": "Requires a <img src=\"img/items/wormholeResidue.png\"> Wormhole Residue to enter",
  "new_Requires_an_img_src_img_items_aetherKeycard_png_Ae": "Requires an <img src=\"img/items/aetherKeycard.png\"> Aether Keycard to enter",
  "new_Requires_an_img_src_img_items_ancientKeystone_png": "Requires an <img src=\"img/items/ancientKeystone.png\"> Ancient Keystone to enter",
  "new_Requires_an_img_src_img_items_ancientOrchid_png_An": "Requires an <img src=\"img/items/ancientOrchid.png\"> Ancient Orchid to enter",
  "new_Requires_an_img_src_img_items_epochFeather_png_Epo": "Requires an <img src=\"img/items/epochFeather.png\"> Epoch Feather to enter",
  "new_Requires_an_img_src_img_items_steelKeystone_png_St": "Requires an <img src=\"img/items/steelKeystone.png\"> Steel Keystone to enter",
  "new_Requires_x3_img_src_img_items_aetherKeycard_png_Ae": "Requires x3 <img src=\"img/items/aetherKeycard.png\"> Aether Keycard to enter",
  "new_Requires_x3_img_src_img_items_ancientKeystone_png": "Requires x3 <img src=\"img/items/ancientKeystone.png\"> Ancient Keystones to enter",
  "new_Requires_x3_img_src_img_items_ancientOrchid_png_An": "Requires x3 <img src=\"img/items/ancientOrchid.png\"> Ancient Orchids to enter",
  "new_Requires_x3_img_src_img_items_epochFeather_png_Epo": "Requires x3 <img src=\"img/items/epochFeather.png\"> Epoch Feathers to enter",
  "new_Requires_x3_img_src_img_items_futureContraption_pn": "Requires x3 <img src=\"img/items/futureContraption.png\"> Future Contraptions to enter",
  "new_Requires_x3_img_src_img_items_futureDisk_png_Futur": "Requires x3 <img src=\"img/items/futureDisk.png\"> Future Disk to enter",
  "new_Requires_x3_img_src_img_items_oldGateau_png_Old_Ga": "Requires x3 <img src=\"img/items/oldGateau.png\"> Old Gateau to enter",
  "new_Requires_x3_img_src_img_items_pokeflute_png_Pokefl": "Requires x3 <img src=\"img/items/pokeflute.png\"> Pokeflutes to enter",
  "new_Requires_x3_img_src_img_items_primalEarth_png_Prim": "Requires x3 <img src=\"img/items/primalEarth.png\"> Primal Earths to enter",
  "new_Requires_x3_img_src_img_items_redChain_png_Red_Cha": "Requires x3 <img src=\"img/items/redChain.png\"> Red Chains to enter",
  "new_Requires_x3_img_src_img_items_steelKeystone_png_St": "Requires x3 <img src=\"img/items/steelKeystone.png\"> Steel Keystones to enter",
  "new_Requires_x3_img_src_img_items_wisdomPetal_png_Wisd": "Requires x3 <img src=\"img/items/wisdomPetal.png\"> Wisdom Petals to enter",
  "new_Requires_x3_img_src_img_items_wormholeResidue_png": "Requires x3 <img src=\"img/items/wormholeResidue.png\"> Wormhole Residues to enter",
  "new_Restricted_Z_Moves": "Restricted Z Moves",
  "new_Restricted_moves_cannot_be_freely_switched_during": "Restricted moves cannot be freely switched during combat",
  "new_Reward_Received": "Reward Received",
  "new_Same_Type_var": "Same-Type: {var}",
  "new_Save_and_go": "Save and go!",
  "new_Score_var": "Score: {var}",
  "new_Seasonal_item_dropped_randomly_from_defeating_wild": "Seasonal item, dropped randomly from defeating wild Pokemon. Expires on {var}/{var}",
  "new_Select_a_Pokemon_to_teach_var": "Select a Pokemon to teach {var}",
  "new_Select_a_Pokemon_to_use_the_var": "Select a Pokemon to use the {var}",
  "new_Select_at_least_var_Pok_mon": "Select at least {var} Pok\u00e9mon.",
  "new_Select_ingredients_to_add_to_the_curry_var_3": "Select ingredients to add to the curry! [{var}/3]",
  "new_Select_the_seasonal_event_to_start_It_will_last_fo": "Select the seasonal event to start. It will last for the 10 following days, and will get replaced by currently-ongoing ones. However, the seasonal shop of that event wont open",
  "new_Select_the_target_team_slot_to_overwrite": "Select the target team slot to overwrite.",
  "new_Smile_Ribbon": "Smile Ribbon",
  "new_Start_Challenge": "Start Challenge",
  "new_Story_driven_battles_and_curated_challenges_live_h": "Story-driven battles and curated challenges live here. More Main Challenges are coming soon.",
  "new_Switching_Pokemon_by_clicking_on_them_to_have_the": "Switching Pokemon by clicking on them to have the upperhand will make hard battles much more manageable. Consider type immunities and resistances when doing so",
  "new_Team_Auto_Build": "Team Auto-Build",
  "new_The_training_Pokemon_has_multiple_restricted_moves": "The training Pokemon has multiple restricted moves ({var}) equipped!",
  "new_The_warmth_of_spring_Its_fire_does_not_scorch_the": "The warmth of spring. Its fire does not scorch the world, but stirs it awake, melting snow and kindling new life. The cold loosens its hold as it passes, and the land is renewed by heat and light.",
  "new_This_Pokemon_can_last_var_turns_before_fainting_fr": "This Pokemon can last {var} turns before fainting from Battle Fatigue at maximum IVs",
  "new_This_Pokemon_cannot_be_caught_on_its_current_stage": "This Pokemon cannot be caught on its current stage",
  "new_This_will_replace_var": "This will replace {var}.",
  "new_Too_many_moves_for_var": "Too many moves for {var}.",
  "new_Total": "Total",
  "new_Trainers_have_twice_the_health_Only_applies_to_VS": "Trainers have twice the health. Only applies to VS Trainers",
  "new_Uncommon_Ability_br_var": "Uncommon Ability<br>{var}",
  "new_Unknown_IV_stat_var": "Unknown IV stat: {var}",
  "new_Unknown_ability_var": "Unknown ability: {var}",
  "new_Unknown_move_var": "Unknown move: {var}",
  "new_Unknown_var_Pok_mon_var": "Unknown {var} Pok\u00e9mon: {var}",
  "new_Unknown_var_item_var": "Unknown {var} item: {var}",
  "new_Use_Evolve_a_certain_Pokemon_br_When_held_Increase": "Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by {var} by x{var}",
  "new_Use_Evolve_certain_kinds_of_Pokemon_Must_be_level": "Use: Evolve certain kinds of Pokemon (Must be level {var}+)",
  "new_Weather_moves_can_greatly_impact_the_outcome_of_th": "Weather moves can greatly impact the outcome of the fight. Weathers are best used in combination with switching, since the damage bonus from them will apply to everyone",
  "new_Welcome_valiant_trainer_to_the_final_frontier_the": "Welcome valiant trainer to the final frontier, the Mega-Dimension, housing only the strongest Pokemon of all the universe!<br><br>Wormholes have each separate rules, having both unique areas, field effects and skills. In addition to field effects, skills will trigger while fighting the boss<br><br>The Pokemon appearing on the rift are random and will change on each rotation",
  "new_Z_move_executed_Dealt_var_damage": "Z-move executed: Dealt {var} damage",
});

Object.assign(GAME_UI.fr, {
  "new_Attack": "(Attaque)",
  "new_Defense": "(D\u00e9fense)",
  "new_Special_Attack": "(Attaque Sp\u00e9ciale)",
  "new_Special_Defense": "(D\u00e9fense Sp\u00e9ciale)",
  "new_Speed": "(Vitesse)",
  "new_Z_move_enemy_type_multiplier_var": "- Multiplicateur de type Z-move ennemi : {var}",
  "new_br_Highest_Spiraling_Tower_floor_reached_var": "<br>(\u00c9tage le plus haut atteint \u00e0 la Tour Spirale : {var})",
  "new_br_br_This_is_a_Signature_Move_Signature_moves_wi": "<br><br>C'est une Capacit\u00e9 Signature. Les capacit\u00e9s signatures sont apprises automatiquement au niveau 100",
  "new_br_Level_var": "<br>Niveau {var}",
  "new_br_This_move_is_restricted_var_and_only_one_of_th": "<br>Cette capacit\u00e9 est restreinte ({var}) et une seule peut \u00eatre pr\u00e9sente dans les capacit\u00e9s actives \u00e0 la fois",
  "new_div_class_frontier_league_var_div": "<div class=\"frontier-league\">{var}</div>",
  "new_option_value_spooky_spooky_option": "<option value=\"spooky\">effrayant</option>",
  "new_span_class_explore_pkmn_level_lvl_var_span": "<span class=\"explore-pkmn-level\" > niv {var} </span>",
  "new_span_class_nature_text_var_nature_span": "<span class=\"nature-text\">nature {var}</span>",
  "new_span_Can_be_dropped_in_the_dungeon_area_var_Rotat": "<span>Peut \u00eatre obtenu dans le donjon {var} (Rotation {var})</span>",
  "new_span_Can_be_dropped_in_the_event_area_var_Rotatio": "<span>Peut \u00eatre obtenu dans la zone d'\u00e9v\u00e9nement {var} (Rotation {var})</span>",
  "new_span_Can_be_dropped_in_the_wild_area_var_Rotation": "<span>Peut \u00eatre obtenu dans la zone sauvage {var} (Rotation {var})</span>",
  "new_span_Found_in_the_event_var_Rotation_var_span": "<span>Trouv\u00e9 dans l'\u00e9v\u00e9nement {var} (Rotation {var})</span>",
  "new_span_Found_in_the_wild_area_var_Rotation_var_span": "<span>Trouv\u00e9 dans la zone sauvage {var} (Rotation {var})</span>",
  "new_span_Ivs_Up_span": "<span>IV augment\u00e9s !</span>",
  "new_span_Obtained_as_a_random_reward_in_the_Battle_Fr": "<span>Obtenu comme r\u00e9compense al\u00e9atoire \u00e0 la Zone de Combat</span>",
  "new_span_Obtained_in_the_event_var_Rotation_var_span": "<span>Obtenu dans l'\u00e9v\u00e9nement {var} (Rotation {var})</span>",
  "new_span_Rare_span": "<span>Rare !</span>",
  "new_span_Reward_from_the_event_var_Rotation_var_span": "<span>R\u00e9compense de l'\u00e9v\u00e9nement {var} (Rotation {var})</span>",
  "new_span_Uncommon_span": "<span>Peu commun</span>",
  "new_span_Unlocks_var_at_level_var_span": "<span>D\u00e9bloque {var} au niveau {var} \u2714\ufe0f</span>",
  "new_span_Unlocks_var_at_level_var_span": "<span>D\u00e9bloque {var} au niveau {var} \u274c</span>",
  "new_span_Unlocks_var_by_using_a_var_at_level_var_span": "<span>D\u00e9bloque {var} en utilisant un {var} au niveau {var}+ \u2714\ufe0f</span>",
  "new_span_Unlocks_var_by_using_a_var_at_level_var_span": "<span>D\u00e9bloque {var} en utilisant un {var} au niveau {var}+ \u274c</span>",
  "new_strong_style_filter_hue_rotate_100deg_class_event": "<strong style=\"filter:hue-rotate(100deg)\" class=\"event-tag\">Raid Tier IV \u2756</strong>",
  "new_strong_style_filter_hue_rotate_140deg_class_event": "<strong style=\"filter:hue-rotate(140deg)\" class=\"event-tag\">Collection \u25c8</strong>",
  "new_strong_style_filter_hue_rotate_200deg_class_event": "<strong style=\"filter:hue-rotate(200deg)\" class=\"event-tag\">Raid Tier II \u2756</strong>",
  "new_strong_style_filter_hue_rotate_300deg_class_event": "<strong style=\"filter:hue-rotate(300deg)\" class=\"event-tag\">Raid Tier III \u2756</strong>",
  "new_strong_style_filter_hue_rotate_50deg_class_event": "<strong style=\"filter:hue-rotate(50deg)\" class=\"event-tag\">Raid Tier I \u2756</strong>",
  "new_A_new_update_is_available": "Une nouvelle mise \u00e0 jour est disponible",
  "new_All_of_your_Pokemon_have_functionally_max_IVs_rega": "Tous vos Pok\u00e9mon ont fonctionnellement des IV max ind\u00e9pendamment de leurs IV r\u00e9els. Cela peut \u00eatre d\u00e9sactiv\u00e9 sans changement permanent<br><br>Il n'y a pas d'effet secondaire \u00e0 ce modificateur",
  "new_All_Type_Moves": "Capacit\u00e9s de tous types",
  "new_Automatically_hides_got_Pokemon_that_are_not_new_a": "Masque automatiquement les Pok\u00e9mon obtenus qui ne sont pas nouveaux apr\u00e8s un combat. Exclus de ce param\u00e8tre : Nouveaux Pok\u00e9mon, IV augment\u00e9s et Pok\u00e9mon chromatiques",
  "new_Awarded_for_reaching_floor_30_in_the_Battle_Tower": "Attribu\u00e9 pour avoir atteint l'\u00e9tage 30 de la Tour de Combat",
  "new_Awarded_in_special_occasions": "Attribu\u00e9 lors d'occasions sp\u00e9ciales",
  "new_Awarded_very_rarely_for_spending_a_lot_of_time_tog": "Tr\u00e8s rarement attribu\u00e9 pour avoir pass\u00e9 beaucoup de temps ensemble",
  "new_Capacitor_Tower": "Tour Condensateur",
  "new_Caught_var_var": "Attrap\u00e9s : {var}/{var}",
  "new_Challenge_Export": "Exporter le d\u00e9fi",
  "new_Changes_the_weather_to_var_when_entering_or_switch": "Change la m\u00e9t\u00e9o en {var} en entrant ou en changeant au combat",
  "new_Close": "Fermer",
  "new_Common_Ability_br_var": "Talent commun<br>{var}",
  "new_Copy_Team": "Copier l'\u00e9quipe",
  "new_Current_Type_Rotation_var": "Rotation de type actuelle : {var}",
  "new_Custom_Challenge": "D\u00e9fi personnalis\u00e9",
  "new_Damage_received_is_halved_when_over_50_HP": "Les d\u00e9g\u00e2ts re\u00e7us sont divis\u00e9s par deux au-dessus de 50% de PV",
  "new_Decreases_Attack_by_100": "Diminue l'Attaque de 100%",
  "new_Decreases_Attack_by_50": "Diminue l'Attaque de 50%",
  "new_Decreases_Defense_and_Attack_by_50": "Diminue la D\u00e9fense et l'Attaque de 50%",
  "new_Decreases_Defense_and_Special_Defense_by_100": "Diminue la D\u00e9fense et la D\u00e9fense Sp\u00e9ciale de 100%",
  "new_Decreases_Defense_and_Special_Defense_by_50": "Diminue la D\u00e9fense et la D\u00e9fense Sp\u00e9ciale de 50%",
  "new_Decreases_Defense_by_50": "Diminue la D\u00e9fense de 50%",
  "new_Decreases_Defense_Special_Defense_and_Speed_by_50": "Diminue la D\u00e9fense, la D\u00e9fense Sp\u00e9ciale et la Vitesse de 50%",
  "new_Decreases_Physical_Attack_by_50_and_deals_damage_e": "Diminue l'Attaque physique de 50% et inflige des d\u00e9g\u00e2ts \u00e0 chaque tour",
  "new_Decreases_Special_Attack_by_100": "Diminue l'Attaque Sp\u00e9ciale de 100%",
  "new_Decreases_Special_Attack_by_50": "Diminue l'Attaque Sp\u00e9ciale de 50%",
  "new_Decreases_Special_Attack_by_50_and_deals_damage_ev": "Diminue l'Attaque Sp\u00e9ciale de 50% et inflige des d\u00e9g\u00e2ts \u00e0 chaque tour",
  "new_Decreases_Speed_by_50": "Diminue la Vitesse de 50%",
  "new_Decreases_enemy_Attack_by_100": "Diminue l'Attaque ennemie de 100%",
  "new_Decreases_enemy_Attack_by_100_and_Special_Attack_b": "Diminue l'Attaque ennemie de 100% et l'Attaque Sp\u00e9ciale de 100%",
  "new_Decreases_enemy_Attack_by_50": "Diminue l'Attaque ennemie de 50%",
  "new_Decreases_enemy_Attack_by_50_when_the_opposing_Pok": "Diminue l'Attaque ennemie de 50% quand le Pok\u00e9mon adverse entre au combat",
  "new_Decreases_enemy_Defense_by_100": "Diminue la D\u00e9fense ennemie de 100%",
  "new_Decreases_enemy_Defense_by_50": "Diminue la D\u00e9fense ennemie de 50%",
  "new_Decreases_enemy_Special_Attack_by_50": "Diminue l'Attaque Sp\u00e9ciale ennemie de 50%",
  "new_Decreases_enemy_Special_Attack_by_50_when_the_oppo": "Diminue l'Attaque Sp\u00e9ciale ennemie de 50% quand le Pok\u00e9mon adverse entre au combat",
  "new_Decreases_enemy_Special_Defense_by_100": "Diminue la D\u00e9fense Sp\u00e9ciale ennemie de 100%",
  "new_Decreases_enemy_Special_Defense_by_50": "Diminue la D\u00e9fense Sp\u00e9ciale ennemie de 50%",
  "new_Decreases_enemy_Speed_by_50": "Diminue la Vitesse ennemie de 50%",
  "new_Decreases_enemy_Speed_by_75": "Diminue la Vitesse ennemie de 75%",
  "new_Decreases_the_current_Wild_Area_rotation_by_1_Usef": "Diminue la rotation de la Zone Sauvage actuelle de -1. Utile si vous avez manqu\u00e9 la rotation d'hier, ou si votre emploi du temps ne correspond pas au jeu",
  "new_Decreases_the_damage_dealt_by_physical_attacks_by": "Diminue les d\u00e9g\u00e2ts inflig\u00e9s par les attaques physiques de 75%",
  "new_Defeat_Gym_Leader_Brock_in_VS_to_unlock": "Battez le Champion Pierre en VS pour d\u00e9bloquer",
  "new_Defeat_Gym_Leader_Misty_in_VS_to_unlock": "Battez la Championne Ondine en VS pour d\u00e9bloquer",
  "new_Defeat_Master_Trainer_Geeta_in_VS_to_unlock": "Battez la Ma\u00eetresse Menzi en VS pour d\u00e9bloquer",
  "new_Derived_constructors_may_only_return_object_or_und": "Les constructeurs d\u00e9riv\u00e9s ne peuvent retourner qu'un objet ou undefined",
  "new_Duplicate_Team": "Dupliquer l'\u00e9quipe",
  "new_Duplicate_team": "Dupliquer l'\u00e9quipe",
  "new_Enemy_damage_over_time_from_var_is_doubled_while_t": "Les d\u00e9g\u00e2ts ennemis sur la dur\u00e9e de {var} sont doubl\u00e9s tant que ce Pok\u00e9mon est actif",
  "new_Enemy_team_must_have_var_var_Pok_mon": "L'\u00e9quipe ennemie doit avoir {var}-{var} Pok\u00e9mon.",
  "new_Enter": "Entrer",
  "new_Error_parsing_callback_code_string": "Erreur lors de l'analyse de la cha\u00eene de callback :",
  "new_Every_12h_you_can_select_up_to_three_abilities_to": "Toutes les 12h, vous pouvez s\u00e9lectionner jusqu'\u00e0 trois talents actifs pour toute votre \u00e9quipe pendant les raids pendant 1 heure. Ces talents suivent les m\u00eames r\u00e8gles que les talents normaux et ne se cumulent pas avec ceux d\u00e9j\u00e0 existants",
  "new_Extended_search_is_not_available": "La recherche \u00e9tendue n'est pas disponible",
  "new_Failed_to_fetch_latest_commit_var": "Impossible de r\u00e9cup\u00e9rer le dernier commit : {var}",
  "new_Failed_to_load_var_var_var": "\u00c9chec du chargement de {var} : \"{var} {var}",
  "new_Fatigue_damage_is_reduced_by_x3_br_br_There_are_no": "Les d\u00e9g\u00e2ts de fatigue sont r\u00e9duits de x3<br><br>Il n'y a pas d'effet secondaire \u00e0 ce modificateur",
  "new_Floor_var": "\u00c9tage : {var}",
  "new_Flying_and_Bug_moves_are_executed_x1_5_faster_than": "Les capacit\u00e9s Vol et Insecte sont ex\u00e9cut\u00e9es x1,5 plus vite que la normale",
  "new_Frontier": "Zone de Combat",
  "new_Ghost_and_Dark_type_moves_are_executed_x1_5_faster": "Les capacit\u00e9s Spectre et T\u00e9n\u00e8bres sont ex\u00e9cut\u00e9es x1,5 plus vite que la normale",
  "new_GitHub_API_error_var": "Erreur API GitHub : {var}",
  "new_Give_your_challenge_a_title": "Donnez un titre \u00e0 votre d\u00e9fi.",
  "new_IV_Training_I": "Entra\u00eenement IV I",
  "new_IV_Training_II": "Entra\u00eenement IV II",
  "new_IV_Training_III": "Entra\u00eenement IV III",
  "new_If_any_of_your_Pokemon_get_defeated_while_battling": "Si l'un de vos Pok\u00e9mon est mis K.O. en combattant un dresseur de VS Dresseurs, il deviendra d\u00e9finitivement inutilisable jusqu'\u00e0 ce que vous d\u00e9sactiviez ce mode",
  "new_Import_Challenge": "Importer le d\u00e9fi",
  "new_Incorrect_index_type": "Type d'index incorrect",
  "new_Increase_Attack_by_100_when_hit_with_a_super_effec": "Augmente l'Attaque de 100% quand touch\u00e9 par une attaque super-efficace",
  "new_Increase_Special_Attack_by_100_when_hit_with_a_sup": "Augmente l'Attaque Sp\u00e9ciale de 100% quand touch\u00e9 par une attaque super-efficace",
  "new_Increase_all_Stats_by_50": "Augmente toutes les stats de 50%",
  "new_Increased_var_and_var": "Augmentation de {var} et {var} !",
  "new_Increases_Attack_and_Defense_by_50": "Augmente l'Attaque et la D\u00e9fense de 50%",
  "new_Increases_Attack_and_Special_Attack_by_100": "Augmente l'Attaque et l'Attaque Sp\u00e9ciale de 100%",
  "new_Increases_Attack_and_Speed_by_50_to_the_entire_tea": "Augmente l'Attaque et la Vitesse de 50% pour toute l'\u00e9quipe",
  "new_Increases_Attack_and_Speed_by_50_Attacks_x1_4_slow": "Augmente l'Attaque et la Vitesse de 50%. Attaque x1,4 plus lentement que la normale",
  "new_Increases_Attack_by_100": "Augmente l'Attaque de 100%",
  "new_Increases_Attack_by_100_to_the_entire_team": "Augmente l'Attaque de 100% pour toute l'\u00e9quipe",
  "new_Increases_Attack_by_150_but_decreases_Defense_and": "Augmente l'Attaque de 150% mais diminue la D\u00e9fense et la D\u00e9fense Sp\u00e9ciale de 50%",
  "new_Increases_Attack_by_50_and_Speed_by_50": "Augmente l'Attaque de 50% et la Vitesse de 50%",
  "new_Increases_Attack_by_50_on_var_weather": "Augmente l'Attaque de 50% sous la m\u00e9t\u00e9o {var}",
  "new_Increases_Attack_by_50_when_defeating_a_Pokemon": "Augmente l'Attaque de 50% en vainquant un Pok\u00e9mon",
  "new_Increases_Defense_by_100": "Augmente la D\u00e9fense de 100%",
  "new_Increases_Defense_by_100_and_Special_Defense_by_50": "Augmente la D\u00e9fense de 100% et la D\u00e9fense Sp\u00e9ciale de 50%",
  "new_Increases_Defense_by_50": "Augmente la D\u00e9fense de 50%",
  "new_Increases_Defense_by_50_if_afflicted_with_a_status": "Augmente la D\u00e9fense de 50% si afflig\u00e9 par un statut",
  "new_Increases_Defense_by_50_on_var_weather": "Augmente la D\u00e9fense de 50% sous la m\u00e9t\u00e9o {var}",
  "new_Increases_Special_Attack_and_Speed_by_50_Attacks_x": "Augmente l'Attaque Sp\u00e9ciale et la Vitesse de 50%. Attaque x1,4 plus lentement que la normale",
  "new_Increases_Special_Attack_by_100": "Augmente l'Attaque Sp\u00e9ciale de 100%",
  "new_Increases_Special_Attack_by_100_and_Special_Defens": "Augmente l'Attaque Sp\u00e9ciale de 100% et la D\u00e9fense Sp\u00e9ciale de 100%",
  "new_Increases_Special_Attack_by_100_and_Special_Defens": "Augmente l'Attaque Sp\u00e9ciale de 100% et la D\u00e9fense Sp\u00e9ciale de 50%",
  "new_Increases_Special_Attack_by_100_to_the_entire_team": "Augmente l'Attaque Sp\u00e9ciale de 100% pour toute l'\u00e9quipe",
  "new_Increases_Special_Attack_by_100_Defense_by_50_and": "Augmente l'Attaque Sp\u00e9ciale de 100%, la D\u00e9fense de 50% et la D\u00e9fense Sp\u00e9ciale de 50%",
  "new_Increases_Special_Attack_by_50": "Augmente l'Attaque Sp\u00e9ciale de 50%",
  "new_Increases_Special_Attack_by_50_if_afflicted_with_a": "Augmente l'Attaque Sp\u00e9ciale de 50% si afflig\u00e9 par un statut",
  "new_Increases_Special_Attack_by_50_on_var_weather": "Augmente l'Attaque Sp\u00e9ciale de 50% sous la m\u00e9t\u00e9o {var}",
  "new_Increases_Special_Attack_by_50_when_defeating_a_Po": "Augmente l'Attaque Sp\u00e9ciale de 50% en vainquant un Pok\u00e9mon",
  "new_Increases_Special_Defense_and_Special_Attack_by_50": "Augmente la D\u00e9fense Sp\u00e9ciale et l'Attaque Sp\u00e9ciale de 50%",
  "new_Increases_Special_Defense_by_100": "Augmente la D\u00e9fense Sp\u00e9ciale de 100%",
  "new_Increases_Special_Defense_by_100_and_Defense_by_50": "Augmente la D\u00e9fense Sp\u00e9ciale de 100% et la D\u00e9fense de 50%",
  "new_Increases_Special_Defense_by_100_to_the_entire_tea": "Augmente la D\u00e9fense Sp\u00e9ciale de 100% pour toute l'\u00e9quipe",
  "new_Increases_Special_Defense_by_50": "Augmente la D\u00e9fense Sp\u00e9ciale de 50%",
  "new_Increases_Special_Defense_by_50_if_afflicted_with": "Augmente la D\u00e9fense Sp\u00e9ciale de 50% si afflig\u00e9 par un statut",
  "new_Increases_Speed_by_50": "Augmente la Vitesse de 50%",
  "new_Increases_Speed_by_50_if_no_item_is_being_held": "Augmente la Vitesse de 50% si aucun objet n'est tenu",
  "new_Increases_Speed_by_50_on_var_weather": "Augmente la Vitesse de 50% sous la m\u00e9t\u00e9o {var}",
  "new_Increases_Speed_by_50_when_defeating_a_Pokemon": "Augmente la Vitesse de 50% en vainquant un Pok\u00e9mon",
  "new_Increases_Speed_by_75": "Augmente la Vitesse de 75%",
  "new_Increases_the_Damage_dealt_by_x1_2_when_afflicted": "Augmente les d\u00e9g\u00e2ts inflig\u00e9s de x1,2 quand afflig\u00e9 par {var}, et annule les d\u00e9g\u00e2ts sur la dur\u00e9e caus\u00e9s par celui-ci",
  "new_Increases_the_damage_of_Ice_Type_moves_by_50": "Augmente les d\u00e9g\u00e2ts des capacit\u00e9s de type Glace de 50%",
  "new_Increases_the_highest_stat_of_the_user_by_50_on_va": "Augmente la stat la plus haute de l'utilisateur de 50% sous {var}",
  "new_Increases_the_highest_stat_of_the_user_by_50_on_va": "Augmente la stat la plus haute de l'utilisateur de 50% sous la m\u00e9t\u00e9o {var}",
  "new_Inflict_var_on_your_entire_team_for_10_turns": "Inflige {var} \u00e0 toute votre \u00e9quipe pendant 10 tours",
  "new_Inflict_var_on_your_entire_team_for_15_turns": "Inflige {var} \u00e0 toute votre \u00e9quipe pendant 15 tours",
  "new_Inflicts_var_and_decreases_enemy_Speed_by_50": "Inflige {var} et diminue la Vitesse ennemie de 50%",
  "new_Inflicts_var_on_the_user": "Inflige {var} \u00e0 l'utilisateur",
  "new_Inflicts_var_to_the_entire_team": "Inflige {var} \u00e0 toute l'\u00e9quipe",
  "new_Inflicts_var_but_increases_enemy_Attack_by_100": "Inflige {var}, mais augmente l'Attaque ennemie de 100%",
  "new_Inflicts_var_but_increases_enemy_Special_Attack_by": "Inflige {var}, mais augmente l'Attaque Sp\u00e9ciale ennemie de 100%",
  "new_Initialisation_failed": "\u00c9chec de l'initialisation",
  "new_Initialisation_failed_HTML5_Web_Worker_is_not_supp": "\u00c9chec de l'initialisation - HTML5 Web Worker n'est pas support\u00e9",
  "new_Invalid_IV_value_for_var_var": "Valeur d'IV invalide pour {var} : {var}",
  "new_Invalid_attempt_to_spread_non_iterable_instance_nI": "Tentative invalide d'\u00e9taler une instance non it\u00e9rable. Pour \u00eatre it\u00e9rable, les objets non-tableaux doivent avoir une m\u00e9thode [Symbol.iterator]().",
  "new_Invalid_level_var": "Niveau invalide : {var}",
  "new_Invalid_value_for_key": "Valeur invalide pour la cl\u00e9",
  "new_Level_var": "Niveau {var}",
  "new_Limited_Area_Until_var_var": "Zone limit\u00e9e jusqu'au {var}/{var}",
  "new_Main_Challenges_are_coming_soon": "Les d\u00e9fis principaux arrivent bient\u00f4t.",
  "new_Make_a_challenge_text_first": "Cr\u00e9ez d'abord un texte de d\u00e9fi.",
  "new_Moves_cannot_be_freely_switched_at_this_moment": "Les capacit\u00e9s ne peuvent pas \u00eatre chang\u00e9es librement pour le moment",
  "new_Moves_fail_to_deal_damage": "Les capacit\u00e9s \u00e9chouent \u00e0 infliger des d\u00e9g\u00e2ts",
  "new_Multiple_of_the_same_Egg_Move_cannot_exist_on_the": "Plusieurs capacit\u00e9s \u0152uf identiques ne peuvent pas exister dans la m\u00eame \u00e9quipe si le Pok\u00e9mon h\u00f4te n'a pas cette capacit\u00e9 comme capacit\u00e9 \u0152uf inh\u00e9rente ou Capacit\u00e9 Signature",
  "new_New_features_unlocked": "Nouvelles fonctionnalit\u00e9s d\u00e9bloqu\u00e9es !",
  "new_New_items": "Nouveaux objets !",
  "new_Next_reward_at_var_score": "Prochaine r\u00e9compense \u00e0 {var} points",
  "new_No_custom_challenges_yet": "Pas encore de d\u00e9fis personnalis\u00e9s.",
  "new_No_item": "Aucun objet",
  "new_No_new_genetic_changes": "Aucun nouveau changement g\u00e9n\u00e9tique",
  "new_Obtained_in_and_mega_dimension_raids_Exchanged_in": "Obtenu dans les raids m\u00e9ga-dimension \u2605 et \u2605\u2605. \u00c9chang\u00e9 au Poke-Mart",
  "new_Obtained_in_and_mega_dimension_raids_Exchanged_in": "Obtenu dans les raids m\u00e9ga-dimension \u2605\u2605\u2605 et \u2605\u2605\u2605\u2605. \u00c9chang\u00e9 au Poke-Mart",
  "new_One_or_more_Pokemon_in_the_current_team_have_multi": "Un ou plusieurs Pok\u00e9mon de l'\u00e9quipe actuelle ont plusieurs capacit\u00e9s restreintes ({var}) \u00e9quip\u00e9es",
  "new_Overwrite_Team": "\u00c9craser l'\u00e9quipe ?",
  "new_Pay_and_cook_var_img_src_img_items_goldenBottleCap": "Payer et cuisiner ({var} <img src=\"img/items/goldenBottleCap.png\">)",
  "new_Pick_a_different_team_slot": "Choisissez un autre emplacement d'\u00e9quipe.",
  "new_Power_doubles_if_the_target_is_Flying_Type": "La puissance double si la cible est de type Vol",
  "new_Power_doubles_if_the_target_is_var": "La puissance double si la cible est {var}",
  "new_Prevents_the_enemy_to_use_the_move_in_the_slot_emb": "Emp\u00eache l'ennemi d'utiliser la capacit\u00e9 dans l'emplacement o\u00f9 Embargo a \u00e9t\u00e9 utilis\u00e9",
  "new_Prevents_the_lowering_of_any_Attack_stat": "Emp\u00eache la diminution de toute stat d'Attaque",
  "new_Prevents_the_lowering_of_any_Defense_stat": "Emp\u00eache la diminution de toute stat de D\u00e9fense",
  "new_Psychic_and_Fairy_moves_are_executed_x1_5_faster_t": "Les capacit\u00e9s Psy et F\u00e9e sont ex\u00e9cut\u00e9es x1,5 plus vite que la normale",
  "new_Rare_Ability_br_var": "Talent rare<br>{var}",
  "new_Reach_a_minimum_score_of_var_in_order_to_get_rewar": "Atteignez un score minimum de {var} pour obtenir des r\u00e9compenses",
  "new_Requires_a_img_src_img_items_futureContraption_png": "N\u00e9cessite une <img src=\"img/items/futureContraption.png\"> Future Contraption pour entrer",
  "new_Requires_a_img_src_img_items_futureDisk_png_Future": "N\u00e9cessite une <img src=\"img/items/futureDisk.png\"> Future Disk pour entrer",
  "new_Requires_a_img_src_img_items_megaChunk_png_Mega_Ch": "N\u00e9cessite un <img src=\"img/items/megaChunk.png\"> Mega-Chunk pour entrer",
  "new_Requires_a_img_src_img_items_megaCluster_png_Mega": "N\u00e9cessite un <img src=\"img/items/megaCluster.png\"> Mega-Cluster pour entrer",
  "new_Requires_a_img_src_img_items_megaPiece_png_Mega_Pi": "N\u00e9cessite un <img src=\"img/items/megaPiece.png\"> Mega-Piece pour entrer",
  "new_Requires_a_img_src_img_items_pokeflute_png_Pokeflu": "N\u00e9cessite une <img src=\"img/items/pokeflute.png\"> Pokeflute pour entrer",
  "new_Requires_a_img_src_img_items_primalEarth_png_Prima": "N\u00e9cessite une <img src=\"img/items/primalEarth.png\"> Primal Earth pour entrer",
  "new_Requires_a_img_src_img_items_redChain_png_Red_Chai": "N\u00e9cessite une <img src=\"img/items/redChain.png\"> Red Chain pour entrer",
  "new_Requires_a_img_src_img_items_wisdomPetal_png_Wisdo": "N\u00e9cessite un <img src=\"img/items/wisdomPetal.png\"> Wisdom Petal pour entrer",
  "new_Requires_a_img_src_img_items_wormholeResidue_png_W": "N\u00e9cessite un <img src=\"img/items/wormholeResidue.png\"> Wormhole Residue pour entrer",
  "new_Requires_an_img_src_img_items_aetherKeycard_png_Ae": "N\u00e9cessite une <img src=\"img/items/aetherKeycard.png\"> Aether Keycard pour entrer",
  "new_Requires_an_img_src_img_items_ancientKeystone_png": "N\u00e9cessite une <img src=\"img/items/ancientKeystone.png\"> Ancient Keystone pour entrer",
  "new_Requires_an_img_src_img_items_ancientOrchid_png_An": "N\u00e9cessite une <img src=\"img/items/ancientOrchid.png\"> Ancient Orchid pour entrer",
  "new_Requires_an_img_src_img_items_epochFeather_png_Epo": "N\u00e9cessite une <img src=\"img/items/epochFeather.png\"> Epoch Feather pour entrer",
  "new_Requires_an_img_src_img_items_steelKeystone_png_St": "N\u00e9cessite une <img src=\"img/items/steelKeystone.png\"> Steel Keystone pour entrer",
  "new_Requires_x3_img_src_img_items_aetherKeycard_png_Ae": "N\u00e9cessite x3 <img src=\"img/items/aetherKeycard.png\"> Aether Keycard pour entrer",
  "new_Requires_x3_img_src_img_items_ancientKeystone_png": "N\u00e9cessite x3 <img src=\"img/items/ancientKeystone.png\"> Ancient Keystones pour entrer",
  "new_Requires_x3_img_src_img_items_ancientOrchid_png_An": "N\u00e9cessite x3 <img src=\"img/items/ancientOrchid.png\"> Ancient Orchids pour entrer",
  "new_Requires_x3_img_src_img_items_epochFeather_png_Epo": "N\u00e9cessite x3 <img src=\"img/items/epochFeather.png\"> Epoch Feathers pour entrer",
  "new_Requires_x3_img_src_img_items_futureContraption_pn": "N\u00e9cessite x3 <img src=\"img/items/futureContraption.png\"> Future Contraptions pour entrer",
  "new_Requires_x3_img_src_img_items_futureDisk_png_Futur": "N\u00e9cessite x3 <img src=\"img/items/futureDisk.png\"> Future Disk pour entrer",
  "new_Requires_x3_img_src_img_items_oldGateau_png_Old_Ga": "N\u00e9cessite x3 <img src=\"img/items/oldGateau.png\"> Old Gateau pour entrer",
  "new_Requires_x3_img_src_img_items_pokeflute_png_Pokefl": "N\u00e9cessite x3 <img src=\"img/items/pokeflute.png\"> Pokeflutes pour entrer",
  "new_Requires_x3_img_src_img_items_primalEarth_png_Prim": "N\u00e9cessite x3 <img src=\"img/items/primalEarth.png\"> Primal Earths pour entrer",
  "new_Requires_x3_img_src_img_items_redChain_png_Red_Cha": "N\u00e9cessite x3 <img src=\"img/items/redChain.png\"> Red Chains pour entrer",
  "new_Requires_x3_img_src_img_items_steelKeystone_png_St": "N\u00e9cessite x3 <img src=\"img/items/steelKeystone.png\"> Steel Keystones pour entrer",
  "new_Requires_x3_img_src_img_items_wisdomPetal_png_Wisd": "N\u00e9cessite x3 <img src=\"img/items/wisdomPetal.png\"> Wisdom Petals pour entrer",
  "new_Requires_x3_img_src_img_items_wormholeResidue_png": "N\u00e9cessite x3 <img src=\"img/items/wormholeResidue.png\"> Wormhole Residues pour entrer",
  "new_Restricted_Z_Moves": "Capacit\u00e9s Z restreintes",
  "new_Restricted_moves_cannot_be_freely_switched_during": "Les capacit\u00e9s restreintes ne peuvent pas \u00eatre chang\u00e9es librement pendant le combat",
  "new_Reward_Received": "R\u00e9compense re\u00e7ue",
  "new_Same_Type_var": "M\u00eame type : {var}",
  "new_Save_and_go": "Sauv. et lancer",
  "new_Score_var": "Score : {var}",
  "new_Seasonal_item_dropped_randomly_from_defeating_wild": "Objet saisonnier, obtenu al\u00e9atoirement en vainquant des Pok\u00e9mon sauvages. Expire le {var}/{var}",
  "new_Select_a_Pokemon_to_teach_var": "S\u00e9lectionnez un Pok\u00e9mon pour apprendre {var}",
  "new_Select_a_Pokemon_to_use_the_var": "S\u00e9lectionnez un Pok\u00e9mon pour utiliser le {var}",
  "new_Select_at_least_var_Pok_mon": "S\u00e9lectionnez au moins {var} Pok\u00e9mon.",
  "new_Select_ingredients_to_add_to_the_curry_var_3": "S\u00e9lectionnez des ingr\u00e9dients \u00e0 ajouter au curry ! [{var}/3]",
  "new_Select_the_seasonal_event_to_start_It_will_last_fo": "S\u00e9lectionnez l'\u00e9v\u00e9nement saisonnier \u00e0 d\u00e9marrer. Il durera les 10 prochains jours, et sera remplac\u00e9 par ceux en cours. Cependant, la boutique saisonni\u00e8re de cet \u00e9v\u00e9nement n'ouvrira pas",
  "new_Select_the_target_team_slot_to_overwrite": "S\u00e9lectionnez l'emplacement d'\u00e9quipe cible \u00e0 \u00e9craser.",
  "new_Smile_Ribbon": "Ruban Sourire",
  "new_Start_Challenge": "Commencer le d\u00e9fi",
  "new_Story_driven_battles_and_curated_challenges_live_h": "Les combats sc\u00e9naris\u00e9s et les d\u00e9fis s\u00e9lectionn\u00e9s sont ici. Plus de d\u00e9fis principaux arrivent bient\u00f4t.",
  "new_Switching_Pokemon_by_clicking_on_them_to_have_the": "Changer de Pok\u00e9mon en cliquant dessus pour prendre l'avantage rendra les combats difficiles bien plus g\u00e9rables. Pensez aux immunit\u00e9s et r\u00e9sistances de type en faisant cela",
  "new_Team_Auto_Build": "Construction auto d'\u00e9quipe",
  "new_The_training_Pokemon_has_multiple_restricted_moves": "Le Pok\u00e9mon d'entra\u00eenement a plusieurs capacit\u00e9s restreintes ({var}) \u00e9quip\u00e9es !",
  "new_The_warmth_of_spring_Its_fire_does_not_scorch_the": "La chaleur du printemps. Son feu ne br\u00fble pas le monde, mais le r\u00e9veille, faisant fondre la neige et allumant une nouvelle vie. Le froid rel\u00e2che son emprise au passage, et la terre est renouvel\u00e9e par la chaleur et la lumi\u00e8re.",
  "new_This_Pokemon_can_last_var_turns_before_fainting_fr": "Ce Pok\u00e9mon peut tenir {var} tours avant de tomber de fatigue au combat avec des IV max",
  "new_This_Pokemon_cannot_be_caught_on_its_current_stage": "Ce Pok\u00e9mon ne peut pas \u00eatre attrap\u00e9 \u00e0 son stade actuel",
  "new_This_will_replace_var": "Cela remplacera {var}.",
  "new_Too_many_moves_for_var": "Trop de capacit\u00e9s pour {var}.",
  "new_Total": "Total",
  "new_Trainers_have_twice_the_health_Only_applies_to_VS": "Les dresseurs ont deux fois plus de sant\u00e9. S'applique uniquement aux Dresseurs VS",
  "new_Uncommon_Ability_br_var": "Talent peu commun<br>{var}",
  "new_Unknown_IV_stat_var": "Stat IV inconnue : {var}",
  "new_Unknown_ability_var": "Talent inconnu : {var}",
  "new_Unknown_move_var": "Capacit\u00e9 inconnue : {var}",
  "new_Unknown_var_Pok_mon_var": "Pok\u00e9mon {var} inconnu : {var}",
  "new_Unknown_var_item_var": "Objet {var} inconnu : {var}",
  "new_Use_Evolve_a_certain_Pokemon_br_When_held_Increase": "Utilisation : Faire \u00e9voluer un certain Pok\u00e9mon<br>Tenu : Augmente les d\u00e9g\u00e2ts inflig\u00e9s par {var} de x{var}",
  "new_Use_Evolve_certain_kinds_of_Pokemon_Must_be_level": "Utilisation : Faire \u00e9voluer certains types de Pok\u00e9mon (Doit \u00eatre niveau {var}+)",
  "new_Weather_moves_can_greatly_impact_the_outcome_of_th": "Les capacit\u00e9s m\u00e9t\u00e9o peuvent grandement impacter l'issue du combat. Elles sont mieux utilis\u00e9es en combinaison avec les changements, car le bonus de d\u00e9g\u00e2ts s'appliquera \u00e0 tout le monde",
  "new_Welcome_valiant_trainer_to_the_final_frontier_the": "Bienvenue brave dresseur \u00e0 la derni\u00e8re fronti\u00e8re, la M\u00e9ga-Dimension, qui abrite les Pok\u00e9mon les plus forts de tout l'univers !<br><br>Les trous de ver ont chacun leurs propres r\u00e8gles, avec des zones uniques, des effets de terrain et des talents. En plus des effets de terrain, les talents se d\u00e9clencheront pendant le combat contre le boss<br><br>Les Pok\u00e9mon apparaissant dans la faille sont al\u00e9atoires et changeront \u00e0 chaque rotation",
  "new_Z_move_executed_Dealt_var_damage": "Z-move ex\u00e9cut\u00e9 : {var} d\u00e9g\u00e2ts inflig\u00e9s",
});


// Patch INFO_TRANSLATION_PATTERNS with HTML-wrapped variants that the plain-text
// patterns miss (e.g. abilities whose info() interpolates ${tagRainy} which is HTML).
// These must be unshifted (not pushed) so they take precedence over less-specific plain-text patterns.
(function addHtmlAwareInfoPatterns(){
  if (!window.i18n || !window.i18n.fr || !Array.isArray(window.i18n.fr.INFO_TRANSLATION_PATTERNS)) return;
  const extras = [
    // Ability descriptions using ${tagXxx} HTML spans
    { regex: /^Prevents negative status effects while on (<span[\s\S]+?<\/span>) weather$/, fr: "Empêche les altérations de statut négatives sous la météo $1" },
    { regex: /^Prevents negative stat changes and status effects while on (<span[\s\S]+?<\/span>) weather$/, fr: "Empêche les changements de stats négatifs et les statuts sous la météo $1" },
    { regex: /^Changes the weather to (<span[\s\S]+?<\/span>) when entering or switching into the battle$/, fr: "Change la météo en $1 en entrant ou en étant changé dans le combat" },
    { regex: /^Changes the weather to (<span[\s\S]+?<\/span>) and increases Special Attack by (\d+)%$/, fr: "Change la météo en $1 et augmente l'Attaque Spéciale de $2%" },
    { regex: /^Changes the weather to (<span[\s\S]+?<\/span>) and switches to the next party member$/, fr: "Change la météo en $1 et passe au prochain membre de l'équipe" },
    { regex: /^Changes the weather to (<span[\s\S]+?<\/span>)$/, fr: "Change la météo en $1" },
    { regex: /^Power doubles if the target is (<span[\s\S]+?<\/span>)$/, fr: "La puissance double si la cible est $1" },
    { regex: /^Prevents all Pokemon on your team from (<span[\s\S]+?<\/span>)$/, fr: "Empêche tous les Pokémon de l'équipe d'être $1" },
    { regex: /^(\d+)% chance to inflict (<span[\s\S]+?<\/span>)$/, fr: "$1% de chance d'infliger $2" },
    { regex: /^(\d+)% chance to inflict (<span[\s\S]+?<\/span>) when attacked$/, fr: "$1% de chance d'infliger $2 quand attaqué" },
  ];
  // unshift so these are tried first
  for (let i = extras.length - 1; i >= 0; i--) {
    window.i18n.fr.INFO_TRANSLATION_PATTERNS.unshift(extras[i]);
  }
})();

// Extend LORE_MAP with missing entries (Articuno was absent)
(function extendLoreMap(){
  if (typeof LORE_MAP !== "object" || !LORE_MAP) return;
  const additions = {
    "The cold of winter. Air chills and frost gathers in its wake. Snowfall follows as it passes, and mountains are left sealed in ice where it lingers.": "Le froid de l'hiver. L'air se glace et le givre s'accumule dans son sillage. La neige tombe à son passage, et les montagnes restent scellées dans la glace là où il s'attarde.",
  };
  for (const [en, fr] of Object.entries(additions)) {
    if (!LORE_MAP[en]) LORE_MAP[en] = fr;
  }
})();

window.i18n.fr.autoPatchInfos();
