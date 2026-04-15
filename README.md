# play-pokechill.github.io
*Monsters and Chill*

---

## 🇬🇧 English

### What is this PR?
This pull request adds a **complete French translation** to the game while keeping the original English version 100% intact.

### Architecture — Why this is a good PR
We chose a **self-contained, non-intrusive overlay** so that future updates to the original game are safe and merge-conflict free:
- **Original files in `scripts/` are untouched.** Only `index.html` and `styles.css` receive minimal modifications.
- **French overrides live in `scripts/fr/`.** When the player selects French, a small loader in `index.html` redirects only the whitelisted scripts to `scripts/fr/`.
- **Runtime patches** (`patch-fr.js`, `patch-fr-data.js`) inject French strings (names, descriptions, tooltips) without altering the core dictionaries.
- **UI translator** (`patch-fr-ui.js`) handles buttons, labels, and dynamically generated DOM text via a `MutationObserver`.

### Files impacted
| File | Change |
|------|--------|
| `index.html` | Adds a synchronous language loader + a language toggle button in the top-right corner. |
| `styles.css` | Adds styling for `#lang-toggle`. |
| `scripts/PR/movesetGenerator.js` | Fixes absolute asset paths (`/img/icons/…` → `img/icons/…`) so icons load correctly on GitHub Pages sub-paths. |
| `scripts/patch-fr-ui.js` | New: global UI dictionary + DOM translator. |
| `scripts/fr/areasDictionary.js` | New: French names for locations. |
| `scripts/fr/dictionarySearch.js` | New: French search labels. |
| `scripts/fr/explore.js` | New: French exploration texts. |
| `scripts/fr/itemDictionary.js` | New: French item names/descriptions. |
| `scripts/fr/moveDictionary.js` | New: French move names/descriptions. |
| `scripts/fr/patch-fr-data.js` | New: safe runtime injector for Pokémon rename/description FR keys. |
| `scripts/fr/patch-fr.js` | New: central runtime monkey-patch (format, capitalize, Fuse indices, guide, tooltips). |
| `scripts/fr/shop.js` | New: French shop strings. |
| `scripts/fr/tooltip.js` | New: French tooltip rendering. |
| `scripts/fr/README.md` | New: developer documentation for the French layer. |

### Benefits for maintainers
1. **Zero risk for English players** — if French files are removed, the game falls back to English instantly.
2. **Easy to update** — when the original game updates a dictionary, only the matching `scripts/fr/*.js` file needs syncing.
3. **Clean diff** — the PR diff shows exactly what the translation adds; no unrelated noise.

---

## 🇫🇷 Français

### Qu'est-ce que ce PR ?
Cette pull request ajoute une **traduction complète en français** au jeu, tout en gardant la version anglaise originale intacte à 100 %.

### Architecture — Pourquoi c'est un bon PR
Nous avons opté pour une **superposition auto-contenue et non intrusive**, afin que les futures mises à jour du jeu original restent sûres et sans conflit :
- **Les fichiers originaux dans `scripts/` ne sont pas modifiés.** Seuls `index.html` et `styles.css` reçoivent des changements minimes.
- **Les surcharges françaises sont dans `scripts/fr/`.** Lorsque le joueur sélectionne le français, un petit chargeur dans `index.html` redirige uniquement les scripts listés vers `scripts/fr/`.
- **Les patches à l'exécution** (`patch-fr.js`, `patch-fr-data.js`) injectent les chaînes françaises (noms, descriptions, infobulles) sans altérer les dictionnaires de base.
- **Le traducteur d'interface** (`patch-fr-ui.js`) gère les boutons, libellés et le texte DOM généré dynamiquement via un `MutationObserver`.

### Fichiers impactés
| Fichier | Modification |
|---------|--------------|
| `index.html` | Ajoute un chargeur de langue synchrone + un bouton de basculement en haut à droite. |
| `styles.css` | Ajoute le style pour `#lang-toggle`. |
| `scripts/PR/movesetGenerator.js` | Corrige les chemins absolus des assets (`/img/icons/…` → `img/icons/…`) pour que les icônes se chargent correctement sur les sous-chemins GitHub Pages. |
| `scripts/patch-fr-ui.js` | Nouveau : dictionnaire d'interface global + traducteur DOM. |
| `scripts/fr/areasDictionary.js` | Nouveau : noms français des lieux. |
| `scripts/fr/dictionarySearch.js` | Nouveau : libellés de recherche en français. |
| `scripts/fr/explore.js` | Nouveau : textes d'exploration en français. |
| `scripts/fr/itemDictionary.js` | Nouveau : noms/descriptions d'objets en français. |
| `scripts/fr/moveDictionary.js` | Nouveau : noms/descriptions d'attaques en français. |
| `scripts/fr/patch-fr-data.js` | Nouveau : injecteur sécurisé à l'exécution pour les clés `renameFR`/`descriptionFR` des Pokémon. |
| `scripts/fr/patch-fr.js` | Nouveau : patch central à l'exécution (`format`, `capitalize`, indices Fuse, guide, infobulles). |
| `scripts/fr/shop.js` | Nouveau : textes de la boutique en français. |
| `scripts/fr/tooltip.js` | Nouveau : rendu des infobulles en français. |
| `scripts/fr/README.md` | Nouveau : documentation développeur pour la couche française. |

### Avantages pour les mainteneurs
1. **Zéro risque pour les joueurs anglais** — si les fichiers français sont supprimés, le jeu revient instantanément en anglais.
2. **Facile à mettre à jour** — quand le jeu original met à jour un dictionnaire, seul le fichier `scripts/fr/*.js` correspondant doit être synchronisé.
3. **Diff propre** — le diff du PR montre exactement ce que la traduction ajoute ; aucun bruit superflu.
