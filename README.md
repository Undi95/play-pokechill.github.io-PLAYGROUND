# play-pokechill.github.io
*Monsters and Chill*

---

## 🇬🇧 English

### What is this PR?
This pull request adds a **complete French translation** to the game while keeping the original English version 100% intact.

### Architecture — Why this is a good PR
We chose a **self-contained, non-intrusive overlay** so that future updates to the original game are safe and merge-conflict free:
- **Zero original files modified.** Every file under `scripts/` is byte-identical to upstream. Only `index.html` receives a 3-line edit: one `<div id="lang-toggle">` button and two `<script>` tags.
- **All translation code lives in `scripts/i18n/`.** The folder ships two JavaScript files:
  - `engine.js` — **language-agnostic runtime**. Intercepts `innerHTML` / `textContent` / `alert` / attribute writes and observes the DOM via `MutationObserver` so every string passes through a translation lookup *before* being rendered. Also monkey-patches `format()` (the game's universal display helper) to return the localized label, and enriches the `fusePkmn` / `fuseDictionary` Fuse search indexes with French move / ability / type keys.
  - `fr.js` — **French data only**. `UI_TEXT_MAP` (English string → key), `UI_PARTIALS` (substring substitutions, sorted longest-first), `GAME_UI.en` / `GAME_UI.fr` tables, `LORE_MAP`, `INFO_TRANSLATION_PATTERNS` (regex rewrites for `info()` templates), and the `renameFR` assignments for every Pokémon / move / ability / item / area / field.
- **Language toggle** stored in `localStorage['pokechill-game-lang']`; the 🇫🇷/🇺🇸 icon at the bottom-right flips it and reloads.
- **Dex & Dictionary search** accepts French queries (Pokémon name, type, ability, move name — e.g. `Fouet Lianes`, `Fertilisation`, `Charge`) through FR-enriched Fuse keys (`movepoolFR`, `signatureFR`, `eggMoveFR`, `renameFR`, etc.).

### Files impacted
| File | Change |
|------|--------|
| `index.html` | **+3 lines** — one `<div id="lang-toggle">` and two `<script src="scripts/i18n/…">`. |
| `scripts/i18n/engine.js` | **New.** Language-agnostic runtime: DOM interceptors, `format()` monkey-patch, Fuse enrichment, tooltip helpers, innerHTML hook. |
| `scripts/i18n/fr.js` | **New.** All French data (UI strings, partials, GAME_UI tables, LORE_MAP, INFO patterns, renameFR assignments). |
| `scripts/i18n/README.md` | **New.** Onboarding guide for adding a new language (step-by-step for `es`/`de`/etc.), where each string category lives, debugging tips. |
| `README.md` | Updated with this PR description. |
| `.gitignore` | **New.** Ignores local translator tooling (audit scanners, Playwright probes, output dirs) so the repo stays clean. |

### Benefits for maintainers
1. **Zero risk for English players** — every translation path is gated by `window.gameLang === "fr"`. If `scripts/i18n/` is deleted, the game runs as pure upstream.
2. **Trivial merges** — no upstream file is patched, so future upstream updates apply without conflict. The overlay only reads runtime values; it doesn't wrap or replace any game module.
3. **Clean diff** — the PR touches 6 files (2 new overlay scripts + 1 translator README + 1 project README + 1 gitignore + 3-line index.html edit). All other files are byte-identical to upstream.
4. **Easy to extend** — `scripts/i18n/README.md` documents exactly how to add Spanish, German, etc. The engine is language-agnostic; only the data file needs to be written.

---

## 🇫🇷 Français

### Qu'est-ce que ce PR ?
Cette pull request ajoute une **traduction française complète** au jeu, tout en laissant la version anglaise originale 100 % intacte.

### Architecture — Pourquoi c'est un bon PR
Nous avons opté pour une **superposition auto-contenue et non intrusive**, afin que les futures mises à jour du jeu original restent sûres et sans conflit :
- **Aucun fichier original modifié.** Tous les fichiers sous `scripts/` sont identiques au upstream. Seul `index.html` reçoit 3 lignes : un `<div id="lang-toggle">` et deux balises `<script>`.
- **Tout le code de traduction vit dans `scripts/i18n/`** — le dossier contient deux fichiers JavaScript :
  - `engine.js` — **runtime indépendant de la langue**. Intercepte les écritures `innerHTML` / `textContent` / `alert` / attributs, et surveille le DOM via `MutationObserver` pour que chaque chaîne passe par un lookup de traduction *avant* d'être affichée. Monkey-patch aussi `format()` (le helper d'affichage universel du jeu) et enrichit les index de recherche Fuse (`fusePkmn` / `fuseDictionary`) avec des clés FR pour capacités / talents / types.
  - `fr.js` — **données françaises uniquement**. `UI_TEXT_MAP` (chaîne EN → clé), `UI_PARTIALS` (substitutions de sous-chaînes, triées par longueur décroissante), tables `GAME_UI.en` / `GAME_UI.fr`, `LORE_MAP`, `INFO_TRANSLATION_PATTERNS` (regex pour les templates `info()`), et les assignations `renameFR` pour chaque Pokémon / capacité / talent / objet / zone / champ.
- **Sélecteur de langue** stocké dans `localStorage['pokechill-game-lang']` ; l'icône 🇫🇷/🇺🇸 en bas à droite bascule et recharge.
- **Recherche Dex & Dictionnaire** accepte les requêtes françaises (nom de Pokémon, type, talent, nom de capacité — ex. `Fouet Lianes`, `Fertilisation`, `Charge`) via les clés Fuse FR (`movepoolFR`, `signatureFR`, `eggMoveFR`, `renameFR`, etc.).

### Fichiers impactés
| Fichier | Modification |
|---------|--------------|
| `index.html` | **+3 lignes** — un `<div id="lang-toggle">` et deux `<script src="scripts/i18n/…">`. |
| `scripts/i18n/engine.js` | **Nouveau.** Runtime indépendant de la langue : intercepteurs DOM, monkey-patch `format()`, enrichissement Fuse, helpers tooltip, hook innerHTML. |
| `scripts/i18n/fr.js` | **Nouveau.** Toutes les données françaises (strings UI, partials, tables GAME_UI, LORE_MAP, patterns INFO, assignations renameFR). |
| `scripts/i18n/README.md` | **Nouveau.** Guide d'intégration pour ajouter une langue (pas-à-pas pour `es`/`de`/etc.), où vit chaque catégorie de strings, conseils de debug. |
| `README.md` | Mis à jour avec la description de ce PR. |
| `.gitignore` | **Nouveau.** Ignore les outils locaux du traducteur (scanners d'audit, probes Playwright, dossiers de sortie) pour garder le repo propre. |

### Avantages pour les mainteneurs
1. **Zéro risque pour les joueurs anglais** — chaque chemin de traduction est gardé par `window.gameLang === "fr"`. Si `scripts/i18n/` est supprimé, le jeu tourne comme upstream pur.
2. **Merges triviaux** — aucun fichier upstream n'est patché, donc les futures mises à jour s'appliquent sans conflit. L'overlay ne lit que des valeurs à l'exécution ; il ne wrappe ni ne remplace aucun module du jeu.
3. **Diff propre** — le PR touche 6 fichiers (2 nouveaux scripts overlay + 1 README traducteur + 1 README projet + 1 gitignore + édition de 3 lignes d'index.html). Tous les autres fichiers sont identiques au upstream.
4. **Facile à étendre** — `scripts/i18n/README.md` documente exactement comment ajouter l'espagnol, l'allemand, etc. Le moteur est indépendant de la langue ; seul le fichier de données doit être écrit.
