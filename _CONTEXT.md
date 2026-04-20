# Pokechill — Zone de Combat d'Hoenn (ZdC) — Dev Context

> **Status** : active dev (2026-04-20) · remote `playground/main` · latest commit `fc106c2`
> **Open thread** : Arena triple-kill still reported despite the `shouldCombatStop` hijack + no-gap bridge. User suggested a dedicated Arena combat system; we pushed back and tried bridging flags. Awaiting user's friend (programmer) to co-investigate.

---

## Project layout

| Folder | Purpose | Touchable? |
|---|---|---|
| `play-pokechill.github.io-main_og` | Upstream English game, pristine reference | ❌ never |
| `play-pokechill.github.io-mainBranch` | Clean FR translation (no ZdC) | ✏️ `scripts/i18n/*` + `index.html` injection only |
| `play-pokechill.github.io-testRoom` (this dir) | Active dev — FR + ZdC | ✏️ `scripts/features/frontier-ext.js`, `scripts/i18n/*`, `index.html` |
| `play-pokechill.github.io-fr-backup` | Older FR attempt, backup | ❌ reference |

**Golden rule**: never edit the game's original source files. Everything lives in the overlay:
- `scripts/features/frontier-ext.js` — ~8600 lines, whole ZdC system
- `scripts/i18n/fr.js` + `scripts/i18n/engine.js` — FR translation overlay
- `index.html` — only one acceptable edit: `<script>` tags at the end loading our overlays

**Git remotes (testRoom)**:
- `playground` → `git@github.com:Undi95/play-pokechill.github.io-PLAYGROUND.git` (**this is where we push**)
- `origin` → `git@github.com:Undi95/play-pokechill.github.io.git` (user's own fork, diverged)
- `upstream` → `github.com/play-pokechill/play-pokechill.github.io.git`

Commit format: commits authored `Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.

---

## What "ZdC d'Hoenn" is

A 7-facility Gen 3 Emerald Battle Frontier clone grafted onto Pokechill via an overlay. Own VS sub-tab ("ZdC d'Hoenn" / "Hoenn BF"), own rules per facility, own run state, own team locks, own judge system, own difficulty curve.

### The 7 facilities (`FACILITIES` array, frontier-ext.js:65-236)

| Facility | ID | Silver | Gold | Brain | Rule |
|---|---|---|---|---|---|
| Tour | `frontierTowerSecret` | 5 | 10 | Anabel | streak, 7 battles/round |
| Palais | `frontierPalaceSecret` | 3 | 6 | Spenser/Santo | auto-move by nature |
| Arène | `frontierArenaSecret` | 4 | 8 | Greta/Gabrielle | **3-turn judge** |
| Dôme | `frontierDomeSecret` | 7 | 14 | Tucker/Thierry | bracket tournament, pick 2 of 3 |
| Usine | `frontierFactorySecret` | 3 | 6 | Noland/Philémon | rentals + swap |
| Pic | `frontierPikeSecret` | 1 | 5 | Lucy/Lucie | 14 rooms, 3 doors each, persist HP |
| Pyramide | `frontierPyramidSecret` | 3 | 10 | Brandon/Bastien | 7-floor grid, persist HP |

**Female brains** (for FR gendered labels "Meneuse de Zone"): Anabel, Greta, Lucy. Others are male → "Meneur de Zone". Helper: `isFemaleBrain(brain)`, `meneurLabelFr/meneurArticledFr/meneurDeFr`.

---

## Core architecture

### Difficulty pipeline
`computeRunDifficulty(round, facility)` is the source of truth — returns `{tier, mult, hpMult, ivRating, abilityChance, forceHiddenAbility, useEggMove, forceSignature}`. Drives moveset generation, IV injection, HP multiplier, ability override.

Rematch cadence: `postGoldEveryFor(facility)` defaults to `gold - silver` (e.g. Tour 5, Palais 3). Each facility keeps its Silver→Gold rhythm in post-Gold cycles.

### Run state
- `saved.frontierExt.activeRun` — max 1 run actively locked in (blocks other facilities, team lock applied). **Data shape**: `{ facilityId, round, battleInRound, upcomingTrainer, roundJustCleared, tiedPreviewSlot, + facility-specific state }`.
- `saved.frontierExt.pausedRuns[facId]` — any number of paused runs (no locks, preserve state for Resume). Keyed by facility ID.

Actions (`handleRunAction`, line ~3827):
- `start` — create new activeRun, apply team lock
- `continue` / `round-continue` — validate team ≥3, open next preview
- `rest` — snapshot activeRun into pausedRuns, clear locks, **force saveGame() immediately** so F5 can't revert
- `resume` — pausedRuns[fac] → activeRun, re-apply team lock, re-tie preview slot
- `abandon` — handle either bucket, streak → 0, max preserved

Refresh dispatcher: `refreshActiveFrontierView()` routes to `updateHoennBF` if the active run OR any paused run is in a Hoenn facility OR the Hoenn listing is currently visible — so Rest doesn't kick the player back to the vanilla Battle Frontier tab.

### F5 behaviour
- `forfeitOnBoot` retry loop in bootstrap. If `activeRun` is set at boot → streak reset to 0 (mid-combat reload = defeat).
- **Exception**: if `activeRun.roundJustCleared === true`, promote to paused instead of forfeit — covers the race where save captured between round-clear modal and Rest click.

### Combat injection
`RUN_AREA_ID = "frontierExtRun"`. `buildEphemeralRunArea(trainer, facility)` constructs a synthetic area object into `areas[RUN_AREA_ID]` with the trainer's team, difficulty, fieldEffects, etc. Used as a per-combat throwaway that vanilla `initialiseArea` + combat code reads as if it were a normal trainer area.

### Enemy stat injection
`applyEnemyRuntimeStats(run, trainer, diff)` stashes `pkmn[id].ivs` + `.ability` + `.level/exp/caught` for each enemy mon on `run.enemyRuntimeState`, writes the diff-driven values (max IV = 6, hidden ability forced at Gold, level 100 for rentals). `restoreEnemyRuntimeStats(run)` undoes everything. Mirrors `applyFactoryMoves` pattern.

Restore fires from:
- `exitCombat` wrap (every combat end)
- `onRunDefeat` (belt & braces)
- `onRunVictory` guard path
- Abandon action

### IV-based enemy HP scaling
`installEnemyIvHpHook` wraps `setWildPkmn` to multiply `wildPkmnHp` and `wildPkmnHpMax` by `Math.pow(1.1, diff.ivRating)` whenever either `saved.currentArea === RUN_AREA_ID` OR `saved.currentAreaBuffer === RUN_AREA_ID`. Mirrors player formula `setPkmnTeamHp` at teams.js:544. Max 1.77× at IV 6.

---

## Moveset generator (`pickMovesetFor`, frontier-ext.js:880+)

Reads `move[k].hitEffect.toString()` via `buildMoveCategories()` to classify each move into:
- `setupAtk` / `setupSatk` / `setupSpe` / `setupMixOff` (Dragon/Quiver Dance) / `setupExtreme` (Belly Drum, No Retreat, Shell Smash)
- `setupDef` (Iron Defense, Calm Mind, Bulk Up)
- `weatherSun/Rain/Sand/Hail`, `terrainElec/Grass/Misty`
- `screenReflect` / `screenLight`, `roomField` (Trick Room, Safeguard, …)
- `debuff`, `healing`

Archetype inference from BST (physical fast / special fast / bulky). Slot planner:
1. Signature — always if forceSignature (Gold+) or BP ≥ 80
2. Egg move — force for B/C/D division post-Silver, 50% for higher divisions
3. **MANDATORY setup** post-Silver from archetype list
4. Weather/terrain when STAB benefits + no weather-setter ability forced
5. Primary STAB
6. Secondary STAB / coverage
7. Priority (fast/phys sweepers)
8. Coverage fill

`restricted` flag is a TEAM-level constraint (game enforces it). The per-mon filter was stripping setups paired with restricted signatures — removed.

---

## Arena system (the currently-wonky one)

### Files + key lines (testRoom, commit fc106c2)

- **L.4452** `ARENA_TURNS_PER_SIDE = 3`
- **L.4454** `isArenaFacility(facility)` — checks `rules.threeTurnJudge`
- **L.4457** `isInArenaRun()` — activeRun + arena facility
- **L.4469-4501** state init / reset: `arenaFreshMatchupCounters`, `arenaResetState`, `arenaGetState`, `arenaResetMatchup`
- **L.4511** `arenaReadActiveSlots()` — reads `exploreActiveMember`, `currentTrainerSlot`
- **L.4523** `arenaReadHpRatios()` — reads `wildPkmnHp`/`wildPkmnHpMax`, player's active HP
- **L.4554-4596** `showArenaVerdict` — the verdict card overlay with Mind/Skill/Body
- **L.4599** `ARENA_PAUSE_MS = 3000` — verdict display + combat freeze
- **L.4605-4758** `arenaRenderJudge` — **the crux**. Computes scores, shows overlay, snapshots active slot + team HP, 3s setTimeout, applies KO. **Keeps `judgeFiring=true` past the KO when player wins** — `installArenaSwapFreeze` clears it after the bridge window.
- **L.4771** `arenaCheckJudge` — trigger: `playerMoves >=3 && enemyMoves >=3 && both still alive`
- **L.4797** `ARENA_SWAP_FREEZE_MS = 1000` — post-swap invincibility
- **L.4800-4844** `installArenaSwapFreeze` — wraps `setWildPkmn`. Bridge case (L.4829): if `judgeFiring` still true at swap, extend freeze + clear both flags together. Normal case: fire 1s `arenaSwapFreezing` window.
- **L.4850-4866** `installArenaShouldCombatStopHook` — **critical**. Wraps `shouldCombatStop()` (explore.js:2114) to return `true` when `judgeFiring || arenaSwapFreezing`. Without this the `animate` rAF loop (explore.js:3322) keeps ticking during the verdict.
- **L.4869-4998** `installArenaCombatHooks` — wraps `exploreCombatPlayer` + `exploreCombatWild` to count per-matchup stats. Also short-circuits during freeze flags.

### Mind criterion
Originally raw attack count — a speed-stacking mon (Pachirisu + Costar + No Retreat → Speed +3) auto-won because 6 attacks > 3. Now a **ratio** (`attacks ÷ total moves`) so setup-heavy mons lose Mind even if they attacked more overall.

Display: `mindCell(att, mv) = "X/Y"` format in the verdict card.

### Judge KO safety (`arenaRenderJudge` setTimeout)
- Snapshots active slot + species ID + HP of every slot1-3 BEFORE the pause
- On playerLoses: write 0 to **that specific species** only if (a) still on that slot (b) still alive. Then restore every other slot's HP from snapshot (defensive rollback).
- On playerWins: `wildPkmnHp = 0`, keep `judgeFiring` true for the bridge.

---

## The "triple kill" bug — open investigation

### User report
At Arena, a single judge verdict kills 2-3 of the enemy trainer's Pokémon, not just one. User tracked the pattern: score 3 = 3 kills, score 2 = 2 kills, score 1 = 1 kill.

### What we ruled out
- Verified `playerWins=true` in all logged verdicts → my code only ever writes `wildPkmnHp=0` once per verdict
- Verified `handleRunAction("rest", tour)` correctly moves activeRun → pausedRuns
- Verified IV HP scaling via `installEnemyIvHpHook` (both currentArea and currentAreaBuffer guards now)

### Working theory
The `animate` rAF loop inside `exploreCombatWild` (explore.js:3322) self-schedules via `requestAnimationFrame(animate)`. Wrapping `exploreCombatPlayer` / `exploreCombatWild` at their entry points doesn't stop the already-running rAF — each frame it progresses `barProgress`, fires attacks, damages wild.

With a Pachirisu+Speed+3 build, the attack interval is short enough that during the 3s verdict pause + 1s respawn gap, the player sneaks in 2-3 more attacks. High-score verdicts correlate with high DPS → more follow-up kills post-freeze.

### Fixes applied
1. **`71fd523`** — hijacked `shouldCombatStop()` so `animate` skips its body during freeze flags
2. **`ffe8c7b`** — bridge `judgeFiring` through `setWildPkmn` so there's **zero** un-frozen frame between verdict start and post-spawn invincibility end
3. **`fc106c2`** — IV HP hook also triggers on initial enemy load (check `currentAreaBuffer`)

### User's last report
"J'ai encore fait un triple kill lmao." — user paused investigation, handed context to a programmer friend. They may suggest a rewrite ("systeme de combat a part pour ce batiment"). We pushed back with the bridge fix; awaiting retest.

---

## Other major systems

### i18n FR
- `scripts/i18n/fr.js` — 8k+ lines of FR translations + `UI_PARTIALS` regex passes
- `scripts/i18n/engine.js` — MutationObserver-driven DOM translator
- All vanilla strings translated via overlay; our ZdC strings written in FR directly with EN fallback
- Recent fix: `buffZzz` renamed to `buffSpeDown2` (was causing double-ZZZ on paralyzed + asleep enemies). EN ref block (L.1332-1343) restored to proper acronyms.
- "Restricted moves" modal: UI_PARTIALS entries for the fragmented sentence around the SVG icon

### Factory-specific
- `applyFactoryMoves(run)` / `restoreFactoryMoves(run)` — stash/restore `pkmn[id].moves/nature/ivs/ability/level/exp/caught` for rentals
- `installFactoryRestrictedBypass` — clears `move[].restricted` flags during `injectPreviewTeam` calls in Factory runs (so 2+ restricted moves on a rental post-swap don't block combat launch)
- Factory rentals always level 100 regardless of caught status (was a bug: Diancie rental loaded at level 1)

### Pike / Pyramide HP persist
- `pikeTeam` on `run` — per-slot `{ pkmnId, hpRatio, status }` snapshot
- `snapshotPikeHpFromRuntime` after each combat, `applyPikeHpStatusOnJoin` on next combat entry
- Unified helper `hasRunTeamState(facility)` — any facility with `rules.persistHpStatus` gets the behaviour

### VS sub-tab
- `HOENN_TAB_ID = "frontier-hoenn-tab"`, `HOENN_LISTING_ID = "frontier-hoenn-listing"`
- `installInjection()` wraps `updateVS` + `updateFrontier` to re-add our Hoenn tab button on every rebuild and manage `display:none` across the 3 listings
- `window.updateHoennBF` — global that rebuilds the selector + populates hoenn-listing
- `data-help="FrontierExt:__section__"` on the ? icon routes to `fillHoennSectionHelp()` (right-click → vanilla `tooltipData` hook)

### Help tooltip
`fillHoennSectionHelp` fills the tooltip body (`tooltipBottom`) with the vanilla beige panel style. Title = "VS Zone de Combat — Hoenn". Single condensed paragraph matching the vanilla "VS Zone de Combat" density.

---

## Known traps

1. **`saved.currentArea` vs `saved.currentAreaBuffer`** — Buffer is set in `launchCombat` BEFORE currentArea swaps. Any hook that reads "are we in a Frontier run area?" needs to check both.
2. **`pkmn[id]` is species-shared** — overriding `pkmn.alakazam.ivs` affects both player and enemy Alakazam if species overlap. All overrides stashed and restored properly.
3. **`animate` is nested in `exploreCombatWild`** (explore.js:3322) — it self-schedules via rAF, wrapping the outer function doesn't catch iterations. Use `shouldCombatStop` hijack instead.
4. **`restricted` moves are TEAM-level** — the game enforces "1 per team", not per mon. Our picker lets multiple restricted moves on one mon (signature + Dragon Dance is common).
5. **Save auto-fires every 60s** (`setInterval(saveGame, 60000)` in save.js:325) — call `saveGame()` manually after state changes that must survive F5 (e.g. Rest action).
6. **VS menu header** (`#vs-menu-header`) gets innerHTML-rewritten by vanilla `updateVS`/`updateFrontier` — any tab button or icon we inject must be re-applied after every rebuild.

---

## Dev loop

```bash
cd "D:/Downloads/Pokechill/NEWUPDATE/play-pokechill.github.io-testRoom"
python -m http.server 8765
# open http://127.0.0.1:8765/index.html in a browser (Ctrl+F5 for hard refresh)
node --check scripts/features/frontier-ext.js  # syntax check after edits
git push playground main                       # only push to playground, never origin
```

Probes in the root, all gitignored (`_probe_*.js`):
- `_probe_difficulty.js` — dumps `computeRunDifficulty` results per facility per round
- `_probe_eggmove.js` — verifies egg move injection at Silver+
- `_probe_moveset.js` — bulk-generates movesets, counts signature/egg/setup hit rates
- `_probe_pause_flow.js` — simulates rest/resume state transitions
- `_probe_arena_rest.js` — simulates Arena verdict + tile badge rendering
- `_probe_hoenn_tab.js` / `_probe_hoenn_header.js` — VS sub-tab integration

Every probe loads `save.json` (gitignored reference save), sets `pokechill-game-lang = "fr"`, waits for `window.__frontierExt` exposure.

---

## Debug surface

`window.__frontierExt` exposes most helpers for DevTools poking:
- `FACILITIES`, `computeRunDifficulty`, `tierForRound`, `nextGoalRoundFor`
- `pickMovesetFor`, `buildMoveCategories`, `simulateNatureFor`, `weatherFromAbility`
- `applyEnemyRuntimeStats`, `restoreEnemyRuntimeStats`
- `meneurLabelFr`, `meneurArticledFr`, `meneurDeFr`, `zoneLeaderEn`, `isFemaleBrain`
- `fillHoennSectionHelp` — for manual tooltip firing
- `handleRunAction` — for scripted state transitions
- `arenaCheckJudge`, `arenaRenderJudge` (arena-specific)

---

## Known vanilla bugs surfaced by the probes (NOT fixed — rule: don't touch originals)

- **`teams.js:464` — `injectPreviewTeam` missing optional chain on area lookup**
  ```js
  if (areas[saved.currentArea].fieldEffect?.includes(field.unnerve.id)) ...
  ```
  The `?.` is on `.fieldEffect` only, so if `areas[saved.currentArea]` is
  `undefined` the call throws `TypeError: Cannot read properties of undefined
  (reading 'fieldEffect')`. Hit by the `_probe_full_tour.js` probe when it
  chains 7 facility launches in ~10s (rapid transitions leave a momentary
  window where `saved.currentArea` points to a key that isn't in `areas`).
  Not reachable in normal user flow — the UI sequence guarantees
  `saved.currentArea` resolves before injection fires. Fix would be trivial
  (`areas[saved.currentArea]?.fieldEffect?.includes(...)`) but belongs in
  upstream Pokechill, not the overlay.

---

## Commit archaeology (what each recent push did)

- `fc106c2` fix: IV HP hook covers currentAreaBuffer (first enemy load)
- `ffe8c7b` fix: bridge judgeFiring to setWildPkmn, close the 1s gap
- `71fd523` fix: arena freeze via shouldCombatStop hook + drop buff strip
- `81e0217` fix: force-flush saveGame right after Repos click
- `47127ec` fix: F5 during round-cleared state promotes to pause, not forfeit
- `d3fdda8` feat: scale enemy max HP by diff.ivRating (mirror player formula)
- `d8da08c` balance: arena Mind criterion is now a ratio, not raw count
- `c72dbe3` feat: strategic moveset builder + mini-boss last battle bump
- `9b49a5e` feat: Emerald-style crescendo difficulty + medal polish
- `2d483db` feat: dedicated "ZdC d'Hoenn" sub-tab in VS menu
- `6496307` feat: true pause via pausedRuns + F5-forfeit + section help
- `4a9792e` i18n: "Meneur/Meneuse de Zone" instead of "Cerveau de la Frontière"
- `8a80519` i18n(fr): fix double-ZZZ on enemy buff list

See `git log --oneline playground/main` for the full tape.
