# Pokechill i18n overlay

This directory holds the **non-destructive translation layer**. No original game
file is patched — all UI strings are intercepted at runtime and swapped before
they reach the DOM. The only change outside this directory is a ~10-line edit
in `index.html` that injects this overlay (flag toggle + two `<script>` tags
+ one inline bootstrap script for the asset-path fix).

## File layout

- **`engine.js`** — language-agnostic runtime. Contains every DOM / runtime
  hook, the `format()` monkey-patch, the Fuse search-index enrichment, and
  dispatcher logic. No hard-coded translations live here.
- **`fr.js`** — French data only. `UI_TEXT_MAP`, `UI_PARTIALS`, `GAME_UI.en` /
  `GAME_UI.fr`, `LORE_MAP`, `INFO_TRANSLATION_PATTERNS`, the wrapped
  `applyPartialTranslations` extension with regex rewrites, and the
  `renameFR` assignments for every Pokémon / move / ability / item / area /
  field. This is the file another translator copies and retargets.

Language state is `localStorage['pokechill-game-lang']` (`"en"` / `"fr"`) and is
toggled by the 🇫🇷/🇺🇸 icon added by `index.html`.

## What `engine.js` actually does

1. **Asset-path fix** (inline script in `index.html` `<head>` — runs BEFORE any
   game script). Several game files call `fetch("/img/...")` with a leading
   slash; on a sub-path deploy (e.g. `user.github.io/repo-name/`) that resolves
   to the domain root and 404s. The bootstrap rewrites `/img/`, `/font/`,
   `/scripts/` URLs by prefixing the deploy's base path. `window.__i18nAssetBase`
   is exposed for debugging.
2. **`format()` monkey-patch** — the game's universal display helper. In FR
   mode, looks up the input in `TYPE_NAMES_FR` / `MOVE_CATEGORY_FR` /
   `NATURE_NAMES_FR`, then walks `move` / `ability` / `item` / `pkmn` / `areas` /
   `field` dicts for a `renameFR` key.
3. **`innerHTML` / `textContent` / attribute setters** are patched so any
   string written to the DOM passes through a translation lookup chain:
   `UI_TEXT_MAP` exact-match → `LORE_MAP` → `applyPartialTranslations`
   (substring partials + regex rewrites in `fr.js`).
4. **`MutationObserver`s** catch (a) childList additions so dynamically
   inserted text nodes get translated, and (b) attribute writes on `title` /
   `placeholder` / `alt` subtree-wide (e.g. `teamDuplicate.js` setting a
   `title` after render).
5. **`window.alert` hook** routes runtime English alerts through the same
   `translateRuntimeText` path, so game files that call `alert("Error loading
   data.")` never need to be patched — the English string is looked up in
   `UI_TEXT_MAP` and replaced.
6. **`window.tooltipData` hook** post-fills help-tooltip entries the original
   `tooltip.js` never wired up (e.g. `data-help="Shop"`). Driven by a
   `MISSING_HELP_ENTRIES` map — easy to extend.
7. **Fuse search-index enrichment** — `fusePkmn` (dex) and `fuseDictionary`
   (dictionnaire) are re-created by the game on every `updatePokedex()` /
   `updateDictionary()` call. Two functions (`__i18nEnrichFusePkmn` /
   `__i18nEnrichFuseDictionary`) add FR-searchable fields (`movepoolFR`,
   `signatureFR`, `eggMoveFR`, `renameFR`, `typeFR`, `abilityFR`, `hiddenAbilityFR`)
   to each doc and push the matching keys to `options.keys`, then rebuild the
   index. The wrappers in `funcsToHook` invoke these after every rebuild so FR
   queries (`Fouet Lianes`, `Fertilisation`, `Charge`, `Souvenir`) match.
8. **`extraMap`** — a late-added table of `"English string": "key"` (or
   `"English": "Direct French"`) entries that extend `UI_TEXT_MAP`. Used for
   strings the auto-extractor missed, tooltip bottoms with split text nodes,
   and one-off labels like category column values (`Physical`/`Special`).
9. **`translateDOM()`** — sweep run on page load and after every rendered
   panel (hooked via `funcsToHook`: `renderPoke`, `renderBox`, `renderShop`,
   `updatePokedex`, `updateDictionary`, etc.). Walks every text node / input
   placeholder / title attr and translates in place.

## Where each category of strings lives in `fr.js`

| Category | Location | Example |
|---|---|---|
| Static UI labels (button text, titles) | `GAME_UI.fr` block, EN↔key map in `UI_TEXT_MAP` | `saveAndGo: "Sauv. et lancer"` |
| Substring partials (split-across-nodes fragments) | `UI_PARTIALS` array | `[" Future Disk", " Disque Futur"]` |
| Dynamic strings with placeholders | Regex block in wrapped `applyPartialTranslations` | `^Moves for (.+)$ → "Capacités de $1"` |
| Move/ability/item `info()` templates | `INFO_TRANSLATION_PATTERNS` | `{regex: /Changes the weather to .../, fr: "..."}` |
| Proper names (species / moves / items / fields) | `renameFR` assignments at bottom of `fr.js` | `move.tackle.renameFR = "Charge"` |
| Lore paragraphs | `LORE_MAP` | Pokémon dex entries |

## Common pitfalls (and how the overlay handles them)

- **Mojibake keys** — strings saved with a different encoding than the runtime
  (`NÂº` vs `Nº`). Detected manually; fix by adding a regex in
  `applyPartialTranslations` instead of relying on the broken key match.
- **Cross-wired UI_TEXT_MAP** — EN string maps to a GAME_UI key whose FR value
  is for a different concept (real bug found: Brendan-unlock text mapped to
  `trainingNatureError`). Audit tool `_audit_crosswire.py` (gitignored) flags
  these by comparing key EN vs `GAME_UI.en[target]`.
- **`<img>`-split text nodes** — "Requires a X to enter" renders as three DOM
  nodes (text + img + text). Exact-match UI_TEXT_MAP can't catch it, so it
  needs per-fragment `UI_PARTIALS` entries for each item name.
- **Pre-monkey-patch `fetch` preloads** — `movesetGenerator.js` calls `fetch`
  synchronously at script-load time, before `engine.js` runs. That's why the
  asset-path fix lives as an inline script in `<head>` instead of inside
  `engine.js`.
- **Combat stat + weather displays** — the game emits `"ATK ▲"`, `"SATK ▲▲"`,
  `"Foggy 9"`, `"Trick Room 9"`, etc. from hard-coded return statements that
  don't go through `t_ui()`. Caught by regex in `applyPartialTranslations`
  with per-label maps (`STAT_FR`, `FIELD_FR`).
- **Secret-click HTML preserved** — the in-game Credits block has a hidden
  `<span onclick="secretFight(...)">Duck</span>`. Translated as a full HTML
  block via `extraMap` so the onclick stays verbatim.

## Adding a new language (e.g. Spanish / `es`)

1. Copy `fr.js` → `es.js`. Keep every key and structure identical; translate
   only the values in `GAME_UI.fr`, `LORE_MAP`, `INFO_TRANSLATION_PATTERNS`,
   and the `renameFR` strings (they can become `renameES` if you want to keep
   FR around, or just reuse the `renameFR` field and switch per-language).
2. In `engine.js`, extend the locale maps (`TYPE_NAMES_FR` / `MOVE_CATEGORY_FR`
   / `NATURE_NAMES_FR`) and the `setGameLang` guard to accept `"es"`. Best
   path is to generalize the maps into an object keyed by language code and
   index it at each lookup.
3. In `index.html`, add a `<script src="scripts/i18n/es.js">` **before**
   `engine.js` and wire the language toggle (dropdown instead of 2-way flip,
   or cycle through locales).
4. The Fuse enrichment, asset-path fix, tooltipData hook, alert hook, and
   MutationObservers are language-agnostic — they auto-apply once `gameLang`
   is set to your new locale.

## Debugging a missing translation

Open DevTools console and run:

```js
window.gameLang                           // "fr" when FR is active
window.__i18nAssetBase                    // "/repo-name/" on sub-path deploy, "/" at root
window.fetch.toString()                   // should show the inline-bootstrap wrapper
window.fusePkmn.options.keys              // must include movepoolFR, signatureFR, etc.
translateRuntimeText("Some English text") // what the pipeline resolves a string to
UI_TEXT_MAP["Some English text"]          // key it resolves to
GAME_UI.fr["thatKey"]                     // the localized value
format("foggy")                           // "Brouillard" when FR active
```

If a string slips through:
1. Contains a placeholder (`${…}`) → exact-match lookup can't match. Add a
   regex to `applyPartialTranslations`.
2. Split across an inline `<img>` / `<br>` → add `UI_PARTIALS` for each
   fragment.
3. Rendered into `innerHTML` before `engine.js` loads → add to the inline
   bootstrap in `index.html` if it's a synchronous preload, otherwise rely on
   `MutationObserver` catch-up.
4. Mojibake — retype the key in UTF-8 or catch it with a regex accepting both
   variants.

## Local tooling (gitignored — see root `.gitignore`)

- **`_audit_bugs.py`** — regex-anchor audit and duplicate GAME_UI.fr key
  detector. Catches regex patterns that use `^...$` when the runtime string
  sits mid-composition.
- **`_audit_bugs2.py`** — UI_TEXT_MAP collision audit between `fr.js` and
  `engine.js` (same English → different internal key, engine.js override
  wins).
- **`_audit_crosswire.py`** — UI_TEXT_MAP entries pointing to a GAME_UI key
  whose EN value is semantically unrelated (heuristic: length ratio < 0.6).
- **`_find_en.py`** — enumerates user-facing sinks (`innerHTML=`, `alert(`,
  etc.) in the game files, checks each literal against UI_TEXT_MAP /
  UI_PARTIALS / regex, lists the uncovered ones in `_untranslated.json`.
- **Playwright probes** (`_probe_fr.js`, `_probe_deep.js`, `_probe_force.js`,
  `_extract_coverage.js`) — drive the game with `save.json` loaded and flag
  remaining English strings surface-by-surface. Useful for catching flows
  that only trigger on specific game state.
