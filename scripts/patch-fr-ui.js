// ============================================
// POKECHILL GAME INTERNATIONALIZATION
// English / Français
// ============================================

window.gameLang = localStorage.getItem("pokechill-game-lang") || "fr";

function setGameLang(lang) {
  if (lang !== "en" && lang !== "fr") return;
  window.gameLang = lang;
  localStorage.setItem("pokechill-game-lang", lang);
  location.reload();
}

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
const UI_TEXT_MAP = {
  "\n    \n    \n    <div class=\"arena-tooltip\">\n    Choose a difficulty for the next trainer\n    <span>(Right click/long press to see field effect details)</span>\n    </div>\n    \n    \n    <div id=\"arena-card-list\">\n    \n    <div class=\"arena-card active-arena-card\" id=\"arena-card-1\" onclick=\"pickArenaCard(1)\" data-arena-card=\"1\">\n    <div class=\"arena-card-title\">\n    Level 100\n    <span>\n    Reward: x2<img  src=\"img/items/goldenBottleCap.png\">\n    </span>\n    </div>\n    \n    <div id=\"arena-card-1-info\" class=\"arena-card-info\">\n    </div>\n    </div>\n    \n    <div class=\"arena-card\" id=\"arena-card-2\" onclick=\"pickArenaCard(2)\" data-arena-card=\"2\">\n    <div class=\"arena-card-title\">\n    Level 125\n    <span>\n    Reward: x3<img  src=\"img/items/goldenBottleCap.png\">\n    </span>\n    </div>\n    <div id=\"arena-card-2-info\" class=\"arena-card-info\">\n    </div>\n    </div>\n    \n    <div class=\"arena-card\" id=\"arena-card-3\" onclick=\"pickArenaCard(3)\" data-arena-card=\"3\">\n    <div class=\"arena-card-title\">\n    Level 150\n    <span>\n    Reward: x4<img  src=\"img/items/goldenBottleCap.png\">\n    </span>\n    </div>\n    <div id=\"arena-card-3-info\" class=\"arena-card-info\">\n    </div>\n    </div>\n    \n    </div>\n    \n    \n    \n    ": "arenaPreviewHtml",
  "Genetics allows you to modify a Pokemon beyond what is considered normal for the species, here is a quick overview of what you can achieve with operations:<br><br>Shiny Mutation: You can inherit the shiny mutation, with a 100% chance, to members of the same family. You can also attempt to spread a new shiny mutation by using a shiny sample<br><br>IV Boosting: Simply by doing any operation, regardless of the compatibility, the IV's of the host will attempt to increase. Useful for Pokemon with little to no IV's<br><br>IV Inheriting: An advanced alternative to the previous. You can inherit IV's from a species to another depending on factors such as compatibility or genetic-aiding items used<br><br>Move Relearn: When completing an operation, all but the four selected moves of the host will be reset, meaning you can attempt to get stronger moves with each operation<br><br>Move Inheriting: An advanced alternative to the previous, you can inherit moves from the sample that would otherwise not be available to you through learning<br><br>Ability Inheriting: Using a Destiny Knot, you can swap abilities with the sample, getting access to otherwise-impossible combinations": "guideGeneticsDesc",
  "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path stroke-dasharray=\"28\" d=\"M12 10l4 7h-8Z\"><animate fill=\"freeze\" attributeName=\"stroke-dashoffset\" dur=\"0.4s\" values=\"28;0\"/></path><path d=\"M12 10l4 7h-8Z\" opacity=\"0\"><animate attributeName=\"d\" begin=\"0.4s\" dur=\"0.8s\" keyTimes=\"0;0.25;1\" repeatCount=\"indefinite\" values=\"M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z\"/><animate attributeName=\"opacity\" begin=\"0.4s\" dur=\"0.8s\" keyTimes=\"0;0.1;0.75;1\" repeatCount=\"indefinite\" values=\"0;1;1;0\"/></path></g></svg>Warning, extreme Power Cost! Only 3 out of 6 maximum IV\'s per stat will be inherited!": "geneticsWarningVeryHigh",
  "\n    <svg style=\"scale:0.7\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z\"/><rect width=\"2\" height=\"7\" x=\"11\" y=\"6\" fill=\"currentColor\" rx=\"1\"><animateTransform attributeName=\"transform\" dur=\"450s\" repeatCount=\"indefinite\" type=\"rotate\" values=\"0 12 12;360 12 12\"/></rect><rect width=\"2\" height=\"9\" x=\"11\" y=\"11\" fill=\"currentColor\" rx=\"1\"><animateTransform attributeName=\"transform\" dur=\"37.5s\" repeatCount=\"indefinite\" type=\"rotate\" values=\"0 12 12;360 12 12\"/></rect></svg>\n    The available decor will change in <font style=\"margin-left:0.3rem\" class=\"time-counter-event\">...</font>": "decorRotationTimer",
  "\n    <svg style=\"scale:0.7\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z\"/><rect width=\"2\" height=\"7\" x=\"11\" y=\"6\" fill=\"currentColor\" rx=\"1\"><animateTransform attributeName=\"transform\" dur=\"450s\" repeatCount=\"indefinite\" type=\"rotate\" values=\"0 12 12;360 12 12\"/></rect><rect width=\"2\" height=\"9\" x=\"11\" y=\"11\" fill=\"currentColor\" rx=\"1\"><animateTransform attributeName=\"transform\" dur=\"37.5s\" repeatCount=\"indefinite\" type=\"rotate\" values=\"0 12 12;360 12 12\"/></rect></svg>\n    Available items will change in <font style=\"margin-left:0.3rem\" class=\"time-counter-daily\">...</font>": "itemsRotationTimer",
  "Moves are learnt every 7 levels. Moves can be switched by right click/long press on a team pokemon<br><br>Damaging moves are divided into physical and special moves<br>The category of the move determines whether the move's damage depends on the user's Attack or Special Attack stat and the target's Defense or Special Defense<br><br>Some Pokemon might have Signature Moves. Signature Moves are species-dependant moves that a Pokemon learn at level 100. Signature Moves can't be inherited through genetics, unless the host has the corresponding Egg Move<br><br>Some moves might be restricted. Only one restricted move might be equipped at a time on the active Pokemon": "guideMovesDesc",
  "Each species of Pokemon share the same base stats that determine the actual stats of a Pokemon at a given level<br><br>Stats determine how much damage they deal and receive (see Battle: Moves). The speed stat determines how fast a Pokemon executes a move<br><br>Individual Values, or IV's, multiply base stats, and can be increased by getting multiple copies of Pokemon<br><br>Depending on their base stats, a Division will be asigned to them. You might use this Division letter to quickly assess which Pokemon can perform better on the short term": "guideStatsDesc",
  "The Battle Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances.<br><br>Every time you enter the tower, you will start from floor 1, but you can try as many times as you'd like.<br><br>Your highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle.<br><br>There is a maximum of 100 Golden Bottlecaps achievable.": "helpSpiralDesc",
  "The Battle Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances\n\nEvery time you enter the tower, you will start from floor 1, but you can try as many times as you'd like\n\nYour highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle\n\nThere is a maximum of 100 Golden Bottlecaps achievable": "spiralHelp",
  "The Battle Factory is a challenge in which your goal is to deal the maximum amount of damage. Every turn you will take a fixed amount of damage, and damage from status effects is disabled.\n\nEvery time you enter the factory, your score will reset, but you can try as many times as you'd like\n\nYour highest reached score will be saved, and reset when the league rotation changes. You will be rewarded for your highest score reached at the end of the battle\n\nThere is a maximum of 100 Golden Bottlecaps achievable": "battleFactoryHelp",
  "At a rate of 1/400, Pokemon can be shiny. These odds can be boosted through different means<br><br>Shiny Pokemon deal 15% more damage. The visual distinction can be toggled from their move menu. This wont affect the damage bonus they get<br><br>Shiny Pokemon do not carry over their evolutions. Instead, genetics must be used.<br><br>If the stars align, a shiny pokemon can receive a star sign, an even rarer pigmentation. This does not have any practical benefit, and can't be inherited or mutated trough genetics": "guideShinyDesc",
  "The Battle Factory is a challenge in which your goal is to deal the maximum amount of damage. Every turn you will take fixed damage and status effect damage is disabled.<br><br>Every time you enter the factory, your score will reset, but you can try as many times as you'd like.<br><br>Your highest reached score will be saved, and reset when the league rotation changes. You will be rewarded for your highest score reached at the end of the battle.<br><br>There is a maximum of 100 Golden Bottlecaps achievable.": "helpBattleFactoryDesc",
  "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample).<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, and a chance to increase its IV's.<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation.<br><br>You can find more information about the specifics of genetics in the guide section.": "helpGeneticsDesc",
  "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample)<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, and a chance to increase its IV's<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation<br><br>You can find more information about the specifics of genetics in the guide section": "geneticsHelpFull",
  "Abilities are traits that a Pokemon can have. While they are randomised, some abilities can only appear on specific typings. Abilities are sorted in three categories; common, uncommon and rare<br><br>Hidden abilities are innate species-dependant traits that need to be unlocked with an Ability Capsule. Once unlocked, their effect will permanently be active alongside their other ability. Same Hidden Ability and Ability wont stack with eachother": "guideAbilitiesDesc",
  "Compatibility determines how similar the sample is to the host. This influences various parameters such as the chances of inherit, or shiny mutations (only if the sample is shiny)<br><br>Sharing one type with the sample will yield one level of compatibility, whereas sharing two types will increase it by two levels.<br><br>Additionally, if the sample is of the same evolutive line as the host, it will recieve maximum compatibility": "guideCompatDesc",
  "Pokemon gain experience by defeating foes, and share a portion of it among the team. This will also be the case even if the team Pokemon are defeated<br><br>Experience gain is proportional to the level difference. A level difference of +-5 levels will net the same amount, while more than 5 levels of difference will greatly increase the amount received.<br><br>A Pokemon 10 levels higher will not yield any experience": "guideExpDesc",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Electric-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_126",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Fighting-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_128",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Psychic-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_137",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Dragon-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_125",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Flying-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_130",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Ground-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_133",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Normal-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_135",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Poison-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_136",
  "Grants, rerolls and removes natures, which modify BST Stars: <br><br>Adamant: Atk ▲, S.Atk ▼<br>Modest: S.Atk ▲, Atk ▼<br>Jolly: Spe ▲, Def ▼, S.Def ▼<br>Relaxed: HP ▲, Spe ▼<br>Quiet: HP ▲, Atk ▼, S.Atk ▼<br>Bold: Def ▲, S.Def ▲, HP ▼<br><br>Adamant and Modest can't be rolled if they'd buff the highest offensive stat of the Pokemon, neither a nature can exceed 6 stars or result in 0 speed stars": "trainingNatureName",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Fairy-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_127",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Ghost-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_131",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Grass-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_132",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Steel-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_139",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Water-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_140",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Dark-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_124",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Fire-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_129",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Rock-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_138",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Bug-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_123",
  "When held: Regardless of the holder, every {1} turns, executes a coordinated Ice-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team": "itemInfo_134",
  "Welcome, brave trainer, to the final frontier, the Mega-Dimension, which houses only the most powerful Pokemon in the entire universe!<br><br>Each wormhole has its own rules, with unique areas, field effects and abilities. In addition to field effects, abilities will trigger during the boss fight.<br><br>The Pokemon appearing in the rift are random and will change with each rotation.": "helpDimensionDesc",
  "Permanent Upgrade: Allows ALL moves to be inheritable to a host of B division and below (including Signature and Egg moves). For this to happen, at least two levels of compatibility are needed<br><br>Two or more exact Egg Moves transferred this way can't be present at the same time on a single team, unless the user of the move has said move as an inherent Egg Move or Signature Move": "itemInfo_121",
  "Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Pokemon Keywords:<br>unobtainable, wild, park, event, frontier, mart, shiny, caught, signature, eggMove, [type], [hidden ability]<br><br>Move/Ability Keywords:<br>physical, special, signature, [type], [ability]": "keywordsDictionaryHelp",
  "Certain moves can change the weather to altered ones such as Sunny, Rainy, Sandstorm, Hail, Foggy, Electric Terrain, Grassy Terrain, Misty Terrain, Trick Room, Weird Room, Cross Room, Light Screen or Safeguard<br><br>You can further check their effects by right click/long press<br><br>Altered weathers will last for 15 turns, and only can be changed after 30": "guideWeatherDesc",
  "Certain moves inflict Status Effects such as Confused, Burn, Poisoned, Freeze, Paralysis or Sleep.<br><br>You can further check their effects by right click/long press<br><br>Status Effects, like temporal stat changes, will count down with turns. You can only apply one Status Effect at a time. They last for 3 turns by default (Except Paralysis)": "guideStatusDesc",
  "Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Keywords:<br>shiny, pokerus, signature, eggMove, [type], [ability], [hidden ability], [level], [move]<br>ivsum(< = >)[number]: Check sum of IVs (IE: ivsum<36)": "keywordsPokedexHelp",
  "Genetics-aiding item: Transfers the currently equipped moves of the sample to the movepool of the host. The host will retain both its equipped moves and the newly transferred ones, but the sample will lose it's equipped ones. Can only be used with at least one level of compatibility, and does not work on signature moves": "itemInfo_115",
  "Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against Pokemon fought against, and their level will scale to yours. Type Immunities inside training will be instead converted to resistances.<br><br>Failing a training will result in no gains": "trainingHelpFull",
  "Power doubles under a weather condition, and type changes depending on it ({tagSunny} is Fire, {tagRainy} is Water, {tagSandstorm} is Ground, {tagHail} is Ice, {tagFoggy} is Ghost, {tagElectricTerrain} is Electric, {tagGrassyTerrain} is Grass, {tagMistyTerrain} is Psychic )": "moveInfo_weatherBall",
  "Challenge your Pokemon against waves of foes to get stronger. You will naturally have typing advantage against Pokemon fought, and their level will scale to yours. Type Immunities inside training are converted to resistances.<br><br>Failing a training will yield no gains.": "helpTrainingDesc",
  "Right click/long press on most elements can give further information. You can further right click/long press on information within information.<br><br>Some elements that can be inspected include areas, trainers, moves, status effects, wild pokemon, team pokemon and items": "guideInspectingDesc",
  "All characters and related assets featured in this game are the exclusive property of Nintendo, Creatures Inc., and The Pokemon Company, and are used here strictly for non-commercial purposes. No ownership is claimed, and all rights remain with their respective owners.": "creditsLegal",
  "Your team will automatically attack in a set pattern, even while you tab out or close the browser! You can right click/long press on moves or pokemon to see their stats as well. Once you have more Pokemon in your team, you will be able to switch them around in a fight": "tutorialBattle",
  "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (The item wont be consumed if failed to defeat) that can be acquired in the collection events. All Events rotate every three days.": "eventsHelpFull",
  "Like status effects, increases or decreases of stats last for 3 turns by default (Except Speed decreases, which last 2)<br><br>Buffs and debuffs of the same magnitude will not stack with each other (IE x2 50% Attack Up), but different ones will (50% + 100% Attack Up)": "guideBuffsDesc",
  "If a Pokemon uses a damaging move that has the same type as one of that Pokemon's types, the move's damage is increased by x1.5<br>This is known as same-type attack bonus, or STAB<br><br>Furthermore, Pokemon with a single typing will receive +0.2 extra STAB damage": "guideStabDesc",
  "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (the item won't be consumed if failed), which can be acquired in the collection events. All Events change every three days.": "helpEventsDesc",
  "If a Pokemon uses a damaging move that is preceded (immediately or not) by a damaging move of a different type of the executed move, it will receive a 1.3x damage multiplier. This is indicated with a cross pattern on the move bar of the affected move": "guideCrossPowerDesc",
  "Power cost determines how taxing it is to modify the host. This influences the time to complete the operation<br><br>This is determined by the division of the host. A higher division will exponentially increase the time required to modify the Pokemon": "guidePowerCostDesc",
  "Use: Teach the ability <span data-ability=\"{abilityId}\" ><span style=\"color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: {color}\">{ability}</span></span> to {types} Pokemon": "memoryInfoDesc",
  "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample). The resulting host Pokemon will have a mix of stats, IVs, nature and ability from both Pokemon.": "geneticsHelp",
  "The Battle Arena features five trainers in which you can select their difficulty for higher rewards. Field effects and battle modifiers will also be randomized alongside the trainers. Trainers fought here will reset every day.": "helpBattleArenaDesc",
  "The Battle Arena features five trainers in which you can select their difficulty for higher rewards. Field effects, battle modifiers, will also be randomised alongside the trainers. Trainers fought here will reset every day": "battleArenaHelp",
  "Right click/long tap a pokemon in your team to set their moves, you can also do this while in battle. Press the + symbol next to the Pokemon to assign items<br>Once you are ready, press Save and Go! at the top of the screen": "tutorialMoves",
  "Use: Teach the move <span data-move=\"{moveId}\" ><span style=\"color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: {color}\">{move}</span></span> to {types} Pokemon": "tmInfoDesc",
  "The user temporarily gets the (non-hidden) ability of the last defeated Pokemon on your team. This temporary ability works on top of your existing abilities. Applying a second temporary ability replaces the first one": "moveInfo_powerOfAlchemy",
  "<br><br>This is an Egg Move. Egg moves can be learnt with genetics when using this Pokemon as a host, using a sample that knows said egg move (usually in the form of Signature moves), at regular move transfer odds": "signatureMoveDesc",
  "Pokemon lose a very small fraction of their maximum health when attacking. This damage can be mitigated by a sum of the HP, Defense and Special Defense of the Pokemon, meaning bulkier Pokemon can battle for longer": "guideFatigueDesc",
  "Welcome brave trainer to the final frontier, the Mega-Dimension, which houses only the most powerful Pokemon in the entire universe. These are formidable enemies that usually require a high-level optimized team.": "megaDimensionHelp",
  "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial and will add one IV level to one of the infected Pokemon's stats. You can keep up to 10 Pokemon in the Pokerus Box.": "pokerusHelp",
  "Use: Triggers a specified seasonal event for the next 10 days. It will last for the 10 following days, and will get replaced by currently-ongoing ones. However, the seasonal shop of that event wont open": "itemInfo_085",
  "Every 12h, you can select up to three abilities to be active for your entire team during raids for 1 hour. These abilities follow the same rules as normal abilities and do not stack with existing ones.": "helpCurryDesc",
  "Every 12 hours, you can select up to three active abilities for your entire team during raids for 1 hour. These abilities will be available for selection in the Curry section of the shop.": "curryHelp",
  "You can right click/long tap almost everything on the screen for more info! You can also do this within the info itself too. Try going into the first Wild Area to start catching Pokemon": "tutorialTravel",
  "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial and will add one level of compatibility to the Pokemon in genetics when used as a host.": "helpPokerusDesc",
  "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial, and will add one level of compatibility to the Pokemon in genetics when used as a host": "pokerusHelpFull",
  "Temporarily adds {type} to the type of the enemy. Super-effective damage bonus dealt from temporal types is halved, and applying a second temporary type replaces the first one": "moveInfo_tempType",
  "This is a timed encounter. Your damage will be carried on between fights. Additionally, items needed to enter will be consumed regardless if you defeat the Pokemon or not": "timedEncounterDesc",
  "The Battle Frontier houses different types of challenges under a specific division restriction that rotates every three days. Trainers fought here will reset every day.": "helpFrontierDesc",
  "This encounter is timed. Your damage will be carried over between battles. Additionally, items required to enter will be consumed whether you defeat the Pokemon or not.": "timedEncounterWarning",
  "The Battle Frontier houses different types of challenges under a specific division restriction that rotates every three days. Trainers fought here will reset every day": "frontierHelp",
  "Genetics-aiding item: Swaps the ability of the Pokemon with the sample. Can only be used with at least one level of compatibility and does not work on hidden abilities": "itemInfo_116",
  "All your Pokemon functionally have max IVs regardless of their real IVs. This can be disabled without any permanent change.<br><br>This modifier has no side effects.": "helpModNoIvsDesc",
  "Slower Pokemon become faster, faster Pokemon become slower. Additionally, multiplies the damage based on how slow the Pokemon originally was by x1.0 to x1.5": "fieldTrickRoomDesc",
  "Pokemon and trainer sprites by Pokemon Showdown (Including artists: Beliot419, kyledove, Gnomowladny, Brumirage and ZacWeavile. Go check their work. Now.)": "creditsSprites",
  "Once used,increases the weight of rare item drops by 1% for the current battle. Multiple uses wont stack. Works always for everyone regardless of the user": "moveInfo_happyHourItems",
  "<br><br>This is a Hidden Ability. Hidden abilities are unlocked via Ability Capsules or through Training, and they work alongside your regular ability.": "hiddenAbilityExplanation",
  "Once used,increases the weight of rare Pokemon by 1% for the current battle. Multiple uses wont stack. Works always for everyone regardless of the user": "moveInfo_happyHourPkmn",
  "Any use of assets is solely for non-commercial and entertainment purposes. No ownership is claimed, and all rights remain with their respective owners": "disclaimerLegal2",
  "Select the seasonal event to start. It will last for the 10 following days, and will get replaced by currently-ongoing or upcoming official holidays.": "selectSeasonalEvent",
  "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require a high-level optimized team.": "eventsHelp",
  "<br><br>This is a Hidden Ability. Hidden abilities are unlocked via Ability Capsules or via Training, and they work alongside your regular ability": "hiddenAbilityDesc",
  "If one of your Pokemon is knocked out while fighting a VS Trainers trainer, it will become permanently unusable until you defeat the Elite Four": "nuzlokeModeHelp",
  "Slow Pokemon become fast, fast Pokemon become slow. Additionally, multiplies damage based on the Pokemon's original slowness, from x1.0 to x1.5": "roomTrickDesc",
  "When held: If a Pokemon has not fully evolved, decreases damage taken by x{1}. This does not apply to final-stage Pokemon with a Mega-Evolution": "itemInfo_019",
  "Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against the foes you challenge": "trainingHelp",
  "You can check a more in-depth explanation about stats and battle mechanics in the Guide menu. For now, I will take a break... Enjoy your stay!": "tutorialBattleEnd",
  "If one of your Pokemon is knocked out while fighting a VS Trainers trainer, it will become permanently unusable until you disable this mode.": "helpModNuzlockeDesc",
  "Multiple identical Egg Moves cannot exist in the same team if the Pokemon does not have this move as an inherent Egg Move or Signature Move": "eggMoveRestrictionError",
  "All Pokemon in Wild Areas might be caught by defeating them. Wild Areas rotate every day, so be sure to check out what can be caught today!": "wildAreasHelp",
  "All characters and related intellectual property featured are the exclusive property of Nintendo, Creatures Inc., and The Pokemon Company.": "disclaimerLegal1",
  "All Pokemon in wild areas can be caught by defeating them. Wild areas change every day, so don't forget to check what can be caught today!": "helpWildAreasDesc",
  "Decrease the current Wild Areas rotation by -1. Useful if you missed yesterday's rotation, or if your schedule does not match the game's.": "settingsAlternateWildHelp",
  "Decrease the current wild area rotation by -1. Useful if you missed yesterday's rotation, or if your schedule does not match the game's.": "helpSettingsAlternateWildDesc",
  "Auto-refights active! <span>(Does not consume <img src=\"img/items/autoRefightTicket.png\"> auto-refight tickets)</span> Click to disable": "autoRefightActiveNoConsume",
  "Automatically hides obtained Pokemon that are not new after a battle. Excluded from this setting: new Pokemon, IV upgrades and shinies.": "helpSettingsNewPkmnDesc",
  "Automatically hides obtained Pokemon that are not new after a battle. Excluded from this setting: New Pokemon, IV Upgrades and Shinies.": "settingsNewPkmnHelp",
  "Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as you progress.": "helpVsTrainersDesc",
  "Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as your progress": "vsHelp",
  "Howdy! I have been assigned to show the ropes<br>Let\'s start by getting new pokemon shall we? Select \"Travel\" on the top left menu": "tutorialIntro",
  "When held: Increases the chance of encountering a wild shiny pokemon by {1}%. Works always for everyone regardless of the holder": "itemInfo_060",
  "Genetics-aiding item: Rerolls the ability of the Host Pokemon. It has an increased chance to reroll uncommon and rare abilities": "itemInfo_107",
  "User transfers all of its stat changes and status to a the entire team and faints. This move can only be present once per team": "moveInfo_batonPass",
  "When held: Increases damage dealt by x{1}, but once all the moves of the user are executed, switch to the previous team member": "itemInfo_028",
  "Use: Re-learn a previously learned move acquired through genetics inheriting (excluding moves inherited through Lock Capsules)": "itemInfo_089",
  "All your Pokemon functionally have max IVs regardless of their real IVs. This can be disabled without permanent consequence": "noIVsHelp",
  "When held: Increases damage dealt by x{1}, but once all the moves of the user are executed, switch to the next team member": "itemInfo_029",
  "Select the seasonal event to start. It will last for 10 days, then be replaced by currently ongoing events once finished.": "seasonalEventPrompt",
  "Multiple of the same Egg Move cannot exist on the same team if the host does not have said move as an inherent Egg Move": "eggMoveRule",
  "Can be used to automatically refight battles. Cannot refight while the browser is closed. Consumed once a battle is won": "itemInfo_093",
  "Long Press/Right click the present below to receive a gift Kecleon!<br>It will be shiny and carrying a Souvenir Ribbon": "mysteryGiftInfo",
  "When held: Increases damage dealt by x{1} and increases Speed by 50% for 8 turns when hit by a Super-Effective move": "itemInfo_036",
  "Increases the chance of encountering a wild shiny pokemon by 15%. Works always for everyone regardless of the user": "moveInfo_shinyCharm",
  "Permanent Upgrade: Decrease the time required for genetic operations by 30 minutes (Up to a minimum of 10 minutes)": "itemInfo_120",
  "When held: Increases the weight of rare item drops by {1}%. Works always for everyone regardless of the holder": "itemInfo_057",
  "Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons rotate every day aswell": "dungeonsHelp",
  "You can also do this within the info itself too. Try going into the first Wild Area to start catching Pokemon": "tutorial3",
  "Multiplies base power by 1.15x everytime its used, up to 10 times. Depletes all stacks upon switching Pokemon": "moveInfo_stack1_15x10",
  "Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons also change every day.": "helpDungeonsDesc",
  "Decreases the damage of all ghost moves by 25% (Can stack). Works always for everyone regardless of the user": "moveInfo_ghostNerf",
  "Increases the Damage dealt by x1.2 when afflicted with {tag}, and nullifies the damage overtime caused by it": "moveInfo_gutsLike",
  "When held: Moves affected by Iron Fist deal x{1} more damage, and their secondary effects are executed twice": "itemInfo_034",
  "Obtained when acquiring an exceeding number of items (20+ for held items) or exchanged with other currencies": "itemInfo_081",
  "Create custom battles from your own pools and enemy teams. Import and export challenge codes to share them.": "helpCustomChallengesDesc",
  "Increases the weight of rare item drops by 1% (Can stack). Works always for everyone regardless of the user": "moveInfo_luckIncense",
  "Increases Attack by 50% if afflicted with a status effect, and nullifies the stat redution of the condition": "moveInfo_gutsFull",
  "Multiplies base power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon": "moveInfo_stack1_2x5",
  "Multiplies base power by 1.3x everytime its used, up to 3 times. Depletes all stacks upon switching Pokemon": "moveInfo_stack1_3x3",
  "When held: Increases the weight of rare pokemon by {1}%. Works always for everyone regardless of the holder": "itemInfo_058",
  "Auto-refights <span>(Does not use <img src=\"img/items/autoRefightTicket.png\"> auto-refight tickets)</span>": "autoRefightNoTicket",
  "Can be used to catch Pokemon in the Mega-Dimension. Expires after the current Mega-Dimension rotation ends": "itemInfo_097",
  "When held: Decreases the duration of negative buffs received by 1 turn and decreases damage taken by x{1}": "itemInfo_021",
  "Use: Fast-forward genetic operation time by 30 minutes. Must be used while an active operation is ongoing": "itemInfo_090",
  "Auto-refights <span>(Requires an <img src=\"img/items/autoRefightTicket.png\"> auto-refight ticket)</span>": "autoRefightRequiresTicket",
  "When held: Multi-hit moves are guaranteed to hit their maximum amount of times and deal x{1} more damage": "itemInfo_031",
  "Temporarily changes the type of the user to the type of the first move slot, and increases Speed by 75%": "moveInfo_firstMoveTypeSpeed",
  "Decreases enemy Special Attack by 50%. Power increases by x1.2-1.5 if Defense/Special Defense is risen": "moveInfo_decreaseSpaAndPowerRiseDef",
  "This is your savefile code<br>You can copy or paste savefile codes here to export or import saves<br>": "savefileCodeExplanation",
  "Right click/long tap a pokemon in your team to set their moves, you can also do this while in battle.": "tutorial4",
  "When held: Increases the duration of positive buffs used by 1 turn and increases damage dealt by x{1}": "itemInfo_020",
  "One or more Pokemon in the current team do not meet the division restrictions of the current league": "divisionRestrictionError",
  "Learn a new Pokemon Move. Can only be done with less than 20 moves, or when a new move is available": "trainingMoveName",
  "Prevents the enemy to use the move in the slot embargo was used. This is treated as a status effect": "moveInfo_embargo",
  "One or more Pokemon in the current team do not met the division restrictions of the current league": "divisionRestrictionsNotMet",
  "Your team will automatically attack in a set pattern, even while you tab out or close the browser!": "tutorial6",
  "Temporarily changes the type of the user corresponding to the weather, and increases Speed by 75%": "moveInfo_weatherTypeSpeed",
  "When held: Prevents the damage from Stealth Rocks field effect and decreases damage taken by x{1}": "itemInfo_037",
  "When held: Increases damage dealt by x{1} and enables Electric-Type moves to receive STAB bonuses": "itemInfo_042",
  "When held: Increases damage dealt by x{1} and enables Fighting-Type moves to receive STAB bonuses": "itemInfo_044",
  "Increases the damage of Water-type moves by 50% and reduces the damage of Fire-type moves by 50%": "weatherRainyDesc",
  "Increases the damage of Fire-type moves by 50% and reduces the damage of Water-type moves by 50%": "weatherSunnyDesc",
  "Positive secondary effect of damaging moves are removed, and their damage is multiplied by x1.25": "moveInfo_sheerForce",
  "When held: Increases damage dealt by x{1} and enables Psychic-Type moves to receive STAB bonuses": "itemInfo_053",
  "Attacks x1.2 slower than usual. Power increases by x1.2-1.5 if Defense/Special Defense is risen": "moveInfo_slowAndPowerRiseDef",
  "When held: Increases damage dealt by x{1} and enables Dragon-Type moves to receive STAB bonuses": "itemInfo_041",
  "When held: Increases damage dealt by x{1} and enables Flying-Type moves to receive STAB bonuses": "itemInfo_046",
  "When held: Increases damage dealt by x{1} and enables Ground-Type moves to receive STAB bonuses": "itemInfo_049",
  "When held: Increases damage dealt by x{1} and enables Normal-Type moves to receive STAB bonuses": "itemInfo_051",
  "When held: Increases damage dealt by x{1} and enables Poison-Type moves to receive STAB bonuses": "itemInfo_052",
  "Story battles and selected challenges can be found here. More Main Challenges are coming soon.": "mainChallengesHelp",
  "When held: Increases damage dealt by x{1} and enables Fairy-Type moves to receive STAB bonuses": "itemInfo_043",
  "When held: Increases damage dealt by x{1} and enables Ghost-Type moves to receive STAB bonuses": "itemInfo_047",
  "When held: Increases damage dealt by x{1} and enables Grass-Type moves to receive STAB bonuses": "itemInfo_048",
  "When held: Increases damage dealt by x{1} and enables Steel-Type moves to receive STAB bonuses": "itemInfo_055",
  "When held: Increases damage dealt by x{1} and enables Water-Type moves to receive STAB bonuses": "itemInfo_056",
  "You can check a more in-depth explanation about stats and battle mechanics in the Guide menu.": "tutorial9",
  "When held: Increases the Special Attack of the user by x{1}, but prevents them from switching": "itemInfo_024",
  "When held: Increases damage dealt by x{1} and enables Dark-Type moves to receive STAB bonuses": "itemInfo_040",
  "When held: Increases damage dealt by x{1} and enables Fire-Type moves to receive STAB bonuses": "itemInfo_045",
  "When held: Increases damage dealt by x{1} and enables Rock-Type moves to receive STAB bonuses": "itemInfo_054",
  "When held: Increases damage dealt by x{1} and enables Bug-Type moves to receive STAB bonuses": "itemInfo_039",
  "When held: Increases damage dealt by x{1} and enables Ice-Type moves to receive STAB bonuses": "itemInfo_050",
  "Buy useful items with Bottle Caps and Golden Bottle Caps. The item rotation changes daily.": "shopHelp",
  "Once you have more Pokemon in your team, you will be able to switch them around in a fight": "tutorial8",
  "When held: Increases the damage of the user by x{1}, but loses 1/10 of its max HP per turn": "itemInfo_025",
  "If an active team Pokemon typing does not match the current Weather, deal periodic damage": "fieldHeavyWeatherDesc",
  "One or more Pokemon in the current team have multiple restricted moves ({icon}) equipped": "restrictedMovesEquipped",
  "You already learnt more than 20 moves, or there is no more learnable moves at this level": "trainingMoveError",
  "Nullifies received {type}-type moves and increases Speed by 50% after being hit with one": "moveInfo_nullifiesTypeSpeed",
  "This Pokemon is marked as Special, and cannot receive shiny mutations through genetics!": "specialNoShiny",
  "When held: Increase overall defense by x{1}, but the user cannot use moves with 0 power": "itemInfo_026",
  "When held: Moves that get more powerful the more stacks they have deal x{1} more damage": "itemInfo_032",
  "Tip: Right click (or long-press on mobile) on most elements for additional information": "tipRightClick",
  "Warning, power cost too high! Only 5 out of 6 maximum IV's per stat will be inherited!": "warningPowerCost",
  "When held: Decreases the super-effective damage taken from Electric-Type moves by {1}%": "itemInfo_063",
  "When held: Decreases the super-effective damage taken from Fighting-Type moves by {1}%": "itemInfo_066",
  "Could not paste from clipboard. Please paste manually or grant clipboard permissions.": "couldNotPasteClipboard",
  "When held: Increases the Attack of the user by x{1}, but prevents them from switching": "itemInfo_023",
  "When held: Decreases the super-effective damage taken from Psychic-Type moves by {1}%": "itemInfo_070",
  "Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by {1} by x{2}": "itemInfo_117",
  "This Pokemon can last {turns} turns before fainting from battle fatigue with max IVs": "lastTurnsBeforeFainting",
  "Inverts stat changes. Positive changes become negative, and negative become positive": "moveInfo_invertStats",
  "When held: Decreases the super-effective damage taken from Poison-Type moves by {1}%": "itemInfo_067",
  "When held: Decreases the super-effective damage taken from Ground-Type moves by {1}%": "itemInfo_068",
  "When held: Decreases the super-effective damage taken from Flying-Type moves by {1}%": "itemInfo_069",
  "When held: Decreases the super-effective damage taken from Dragon-Type moves by {1}%": "itemInfo_074",
  "Permanent Upgrade: Trainers in the battle frontier award +3 extra Golden Bottle Caps": "itemInfo_119",
  "One or more Pokemon in the current team cannot be used as per Nuzlocke restrictions": "nuzlockeRestrictions",
  "When held: Decreases the super-effective damage taken from Water-Type moves by {1}%": "itemInfo_062",
  "When held: Decreases the super-effective damage taken from Grass-Type moves by {1}%": "itemInfo_064",
  "When held: Decreases the super-effective damage taken from Ghost-Type moves by {1}%": "itemInfo_073",
  "When held: Decreases the super-effective damage taken from Steel-Type moves by {1}%": "itemInfo_076",
  "When held: Decreases the super-effective damage taken from Fairy-Type moves by {1}%": "itemInfo_077",
  "Your golden bottlecaps have been exchanged into bottlecaps due to frontier changes": "goldenToBottle",
  "Fatigue damage is reduced by 3.<br><br>There are no side effects to this modifier.": "longerAFKHelp",
  "Let\'s start by getting new pokemon shall we? Select \"Travel\" on the top left menu": "tutorial1",
  "Inflicts active status effects to the attacker aswell on the moment of application": "moveInfo_synchronize",
  "When held: Decreases the super-effective damage taken from Fire-Type moves by {1}%": "itemInfo_061",
  "When held: Decreases the super-effective damage taken from Rock-Type moves by {1}%": "itemInfo_072",
  "When held: Decreases the super-effective damage taken from Dark-Type moves by {1}%": "itemInfo_075",
  "Normal-type moves become {type}-type moves, and their power is multiplied by x1.3": "moveInfo_ateType",
  "When held: Decreases the super-effective damage taken from Ice-Type moves by {1}%": "itemInfo_065",
  "When held: Decreases the super-effective damage taken from Bug-Type moves by {1}%": "itemInfo_071",
  "Get better moves that correctly match your stat distribution (Physical/Special)": "getBetterMovesStatDistribution",
  "Due to the vs rewards update you have been rewarded for your defeated trainers:": "newItemsDue",
  "Seasonal item, dropped randomly from defeating wild Pokemon. Expires on {1}/{2}": "itemInfo_099",
  "Pokerus detected on the host! Genetic compatibility is increased by one level!": "pokerusBoost",
  "Compatibility": "compatibility",
  "During raids: Temporarily gained the next abilities for everyone in your team:": "raidAbilitiesGained",
  "Star signs are unlocked for all the evolutive family as long as they are shiny": "starSignUnlockInfo",
  "Defeat Elite Trainer Cynthia in VS mode to unlock, or alread max level reached": "trainingLevelError",
  "You can right click/long press on moves or pokemon to see their stats as well.": "tutorial7",
  "Moves that execute slower than usual have their base power multiplied by x1.5": "moveInfo_slowPower15",
  "Multiplies by 1.5x the base damage of moves with equal or less than 60 power": "moveInfo_tech60",
  "When held: Increases the duration of {1}, {2}, {3}, {4} and {5} by {6} turns": "itemInfo_078",
  "You can right click/long tap almost everything on the screen for more info!": "tutorial2",
  "Moves that execute faster than usual have their base power multiplied by x2": "moveInfo_fastPower2",
  "Increases {stat} and Speed by {percent}%. Attacks x{mult} slower than usual": "moveInfo_increaseStatSpeedSlow",
  "Genetics-aiding item: Guarantees the chance to inherit Special Defense Iv's": "itemInfo_109",
  "Genetics-aiding item: Guarantees the chance to inherit Special Attack Iv's": "itemInfo_112",
  "Fatigue damage is reduced by 3.<br><br>This modifier has no side effects.": "helpModAfkDesc",
  "Prevents the enemy from using the move in the slot where Embargo was used": "statusEmbargoDesc",
  "Decreases enemy {stat} by 50% when the opposing Pokemon enters the battle": "moveInfo_decreaseEnemyStatEnter",
  "Enemy damage over time from {tag} is doubled while this Pokemon is active": "moveInfo_dotDouble",
  "All moves become Normal-type moves, and their power is multiplied by x1.3": "moveInfo_allMovesNormal",
  "Increases Speed by 50% to the entire team. Attacks x1.5 slower than usual": "moveInfo_tailwindSlow",
  "When held: Decreases the duration of negative buffs received by {1} turns": "itemInfo_027",
  "Obtained in ★★★ and ★★★★ mega-dimension raids. Exchanged in the Poke-Mart": "itemInfo_096",
  "Prevents negative stat changes and status effects while on {tag} weather": "moveInfo_preventNegWeather",
  "Attack becomes physical or special to match the highest stat of the user": "moveInfo_psyshockLike",
  "Use: Fast-forward battle time by 10 minutes. Must be used while battling": "itemInfo_083",
  "Use: Fast-forward battle time by 30 minutes. Must be used while battling": "itemInfo_084",
  "During raids: Your team has temporarily gained the following abilities:": "curryRaidEffects",
  "You can copy or paste savefile codes here to export or import saves<br>": "savefileCodeExplanationShort",
  "Select a move below and replace it with one of the list of learnt moves": "selectMoveReplace",
  "Whenever anyone in the team gets a stat risen, the user will get it too": "moveInfo_defiant",
  "Changes the weather to {tag} when entering or switching into the battle": "moveInfo_changeWeatherEnter",
  "When held: Moves that attack faster than usual are executed x{1} faster": "itemInfo_030",
  "Fully max a Pokemon's level. Can only be done with less than Level 100": "trainingLevelName",
  "Increases the highest stat of the user by 50% when defeating a Pokemon": "moveInfo_highestStatKO",
  "Get better moves that match your stat distribution (Physical/Special)": "tipStatDistributionMoves",
  "The training Pokemon has multiple restricted moves ({icon}) equipped!": "trainingPokemonRestrictedMoves",
  "Increases the power of {type}-type moves by {percent}% below {hp}% HP": "moveInfo_powerBoostLowHP",
  "Multiplies the damage by x1.5 when the opposite Pokemon shares a type": "moveInfo_rivalry",
  "{type1} and {type2}-type moves are executed x{mult} faster than usual": "moveInfo_twoTypesFaster",
  "Multiplies by x1.1 the damage of Ghost-type moves of all team members": "moveInfo_ghostAura",
  "Faints the user and decreases enemy Attack and Special Attack by 100%": "moveInfo_memento",
  "When held: Increases the Damage of the user by x{1}, but inflicts {2}": "itemInfo_022",
  "Obtained in ★ and ★★ mega-dimension raids. Exchanged in the Poke-Mart": "itemInfo_095",
  "25% chance that moves cannot deal damage and Speed is reduced by 75%": "statusParalysisDesc",
  "When held: Moves that attack slower than usual deal x{1} more damage": "itemInfo_035",
  "Gain 2 random IV stars. Can only be done with less than 10 IV stars": "trainingIv1Name",
  "Gain 2 random IV stars. Can only be done with less than 22 IV stars": "trainingIv2Name",
  "Multiply the damage dealt by x1.5 if the target has a status effect": "moveInfo_merciless",
  "Multiplies by x1.1 the power of Dark-type moves of all team members": "moveInfo_darkAura",
  "Perform the first move of the oponent. Attacks x3 faster than usual": "moveInfo_mirrorMove2",
  "Genetics-aiding item: Guarantees the chance to inherit Defense Iv's": "itemInfo_110",
  "Permanent Upgrade: Daily export rewards award an extra Fashion Case": "itemInfo_118",
  "During raids: Gained the next abilities for everyone in your team:": "raidAbilities",
  "Increases the Damage dealt by x1.15 for every team member defeated": "moveInfo_defeatistReverse",
  "Changes the weather to {tag} and switches to the next party member": "moveInfo_weatherAndSwitch",
  "Genetics-aiding item: Guarantees the chance to inherit Attack Iv's": "itemInfo_111",
  "Super-effective damage on the enemy Pokemon is reduced to neutral": "fieldIronBodyDesc",
  "Ghost-type pokemon can be hit with Normal and Fighting-type moves": "moveInfo_scrappy",
  "Received damage from non-Super-Effective moves are reduced by 80%": "moveInfo_filter",
  "When held: Increases the experience gained by the pokemon by {1}%": "itemInfo_059",
  "Genetics-aiding item: Guarantees the chance to inherit Speed Iv's": "itemInfo_108",
  "Genetics-aiding item: Multiplies by 10 the chance to inherit Iv's": "itemInfo_114",
  "Operation finished!<br>Do you want to use a genetic-aiding item?": "operationFinished",
  "Increases {stat} by {percent}% if afflicted with a status effect": "moveInfo_increaseStatStatus",
  "{type1} and {type2} moves are executed x{mult} faster than usual": "moveInfo_twoTypesFaster2",
  "Changes the weather to {tag} and increases Special Attack by 50%": "moveInfo_weatherAndSpa",
  "Increases Special Attack by 150%. Attacks x1.5 slower than usual": "moveInfo_spa150slow",
  "Can be used to catch event Pokemon. Expires after event finishes": "itemInfo_098",
  "Super-effective damage dealt to your team is reduced to neutral": "fieldLightScreenDesc",
  "Once you are ready, press Save and Go! at the top of the screen": "tutorial5",
  "Non super-effective damage dealt to the enemy is reduced by 80%": "fieldWonderWardDesc",
  "Changes the type of the user to match the type of the used move": "moveInfo_adaptType",
  "Power increases by x1.2-1.5 if Defense/Special Defense is risen": "moveInfo_powerRiseDef",
  "Increases base power by 30 for every unique stat up of the user": "moveInfo_powerPerStatUp",
  "You must have less than 10 IV stars, or alread max IVs reached": "trainingIv1Error",
  "You must have less than 22 IV stars, or alread max IVs reached": "trainingIv2Error",
  "Increases the Attack by x1.5, but prevents them from switching": "moveInfo_gorillaTactics",
  "Increases {stat1} and {stat2} by {percent}% to the entire team": "moveInfo_increaseTwoStatsTeam",
  "Genetics-aiding item: Guarantees the chance to inherit HP Iv's": "itemInfo_113",
  "Moves that hit multiple times always hit their maximum amount": "moveInfo_maxMultiHit",
  "Increases {stat} by 100% when hit with a super-effective move": "moveInfo_increaseStatSE",
  "When held: Increase the damage of Fighting-Type moves by x{1}": "itemInfo_001",
  "When held: Increase the damage of Electric-Type moves by x{1}": "itemInfo_007",
  "When held: Increases the duration of {1} weather by {2} turns": "itemInfo_079",
  "{category} moves have their base power multiplied by x{mult}": "moveInfo_categoryPower2",
  "When held: Increase the damage of Psychic-Type moves by x{1}": "itemInfo_018",
  "This ability can only appear as Hidden Ability of {pokemon}": "hiddenAbilityOf",
  "This ability can only appear as Signature Move of {pokemon}": "signatureMoveOf",
  "Perform the first move of the oponent, at double the damage": "moveInfo_mirrorMove1",
  "When held: Increase the damage of Dragon-Type moves by x{1}": "itemInfo_004",
  "When held: Increase the damage of Poison-Type moves by x{1}": "itemInfo_012",
  "When held: Increase the damage of Flying-Type moves by x{1}": "itemInfo_013",
  "When held: Increase the damage of Normal-Type moves by x{1}": "itemInfo_014",
  "When held: Increase the damage of Ground-Type moves by x{1}": "itemInfo_016",
  "Protects your team from status effects and stat reductions": "fieldSafeguardDesc",
  "Reduces physical Attack by 50% and deals damage every turn": "statusBurnDesc",
  "Halves damage received from {type1} and {type2}-type moves": "moveInfo_halvesTwoTypes",
  "Moves that are resisted by typing do instead normal damage": "moveInfo_tintedLens",
  "Inflicts {tag}, but increases enemy Special Attack by 100%": "moveInfo_inflictAndBoostEnemySpa",
  "When held: Increase the damage of Fairy-Type moves by x{1}": "itemInfo_005",
  "When held: Increase the damage of Steel-Type moves by x{1}": "itemInfo_008",
  "When held: Increase the damage of Grass-Type moves by x{1}": "itemInfo_009",
  "When held: Increase the damage of Water-Type moves by x{1}": "itemInfo_010",
  "When held: Increase the damage of Ghost-Type moves by x{1}": "itemInfo_017",
  "Reduces Special Attack by 50% and deals damage every turn": "statusPoisonDesc",
  "Increases the damage of Rock and Ground-type moves by 50%": "weatherSandstormDesc",
  "When held: Increase the damage of Dark-Type moves by x{1}": "itemInfo_002",
  "When held: Increase the damage of Fire-Type moves by x{1}": "itemInfo_003",
  "When held: Increase the damage of Rock-Type moves by x{1}": "itemInfo_006",
  "Use: Evolve certain kinds of Pokemon (Must be level {1}+)": "itemInfo_106",
  "No more rewards available. Maybe try getting a hi-score?": "noMoreRewards",
  "Increases damage of Electric and Steel-type moves by 50%": "terrainElectricDesc",
  "Increases the damage of Dark and Ghost-type moves by 50%": "weatherFoggyDesc",
  "All hits become super-effective regardless of the typing": "moveInfo_noGuard",
  "When held: Increase the damage of Ice-Type moves by x{1}": "itemInfo_011",
  "When held: Increase the damage of Bug-Type moves by x{1}": "itemInfo_015",
  "An unhatched egg. Leave combat to discover the contents!": "itemInfo_122",
  "Multiple Z-Crystals cannot be equipped in the same team": "multipleZCrystalsError",
  "Restricted moves cannot be freely changed during battle": "restrictedMoveDesc",
  "Copies all of the enemy's Attack and Defense base stats": "roomWeirdDesc",
  "Increases damage of Fairy and Psychic-type moves by 50%": "terrainMistyDesc",
  "Prevents negative status effects while on {tag} weather": "moveInfo_preventStatusWeather",
  "Inflicts {tag} and decreases enemy {stat} by {percent}%": "moveInfo_inflictAndDecreaseEnemy",
  "When held: Decreases fatigue damage of the user by x{1}": "itemInfo_038",
  "Obtained in T3 and T4 raids. Exchanged in the Poke-Mart": "itemInfo_094",
  "Unlocked while all obtainable Pokemon have been caught": "unlockedAllObtainableCaught",
  "Multiple Z-Crystals cannot be equiped in a single team": "multipleZCrystals",
  "(Right click / long press to see field effect details)": "rightClickLongTapFieldDetails",
  "{percent}% chance to decrease enemy {stat} by {value}%": "moveInfo_chanceDecreaseEnemyStat",
  "When held: Moves that have 0 power execute x{1} faster": "itemInfo_033",
  "Use: Increase the Special Defense IV of a Pokemon by 1": "itemInfo_104",
  "Come back in <span class=\"time-counter-daily\"></span>": "comeBackInTimer",
  "Trainers have double HP. Only applies to VS Trainers.": "helpModHardDesc",
  "Unlocked once all obtainable Pokemon have been caught": "spawnLocationArceus",
  "Type-immune damage is now resisted instead of ignored": "fieldNoMercyDesc",
  "When held: Increases the duration of {1} by {2} turns": "itemInfo_080",
  "Use: Increase the Special Attack IV of a Pokemon by 1": "itemInfo_103",
  "Copies all attack and defense base stats of the enemy": "fieldWeirdRoomDesc",
  "Trainers have double HP. Only applies to VS Trainers": "hardModeHelp",
  "Reach a minimum score of {X} in order to get rewards": "reachMinScore",
  "Get all Pokemon at certain level. Shiny is optional": "consoleDebugGetPokemon",
  "Increases damage of Grass and Bug-type moves by 50%": "terrainGrassyDesc",
  "{percent}% chance to increase all Stats by {value}%": "moveInfo_chanceIncreaseAllStats",
  "Weather changed by the user is extended by 15 turns": "moveInfo_weatherExtend",
  "Decreases enemy {stat} by {percent}% on getting hit": "moveInfo_decreaseEnemyStatOnHit",
  "Status effects applied to the target last x3 longer": "moveInfo_longerStatus",
  "Modify Pokemon ivs (hp, atk, satk, def, sdef, spe)": "consoleModifyPokemonIvs",
  "Defeat Legend Trainer Brendan in VS mode to unlock": "trainingNatureError",
  "Increases damage dealt by cross-power moves by 30%": "roomCrossDesc",
  "This Pokemon cannot be caught at its current stage": "spawnLocationUncatchableStage",
  "Pokemon in the Wildlife Park rotate every 12 hours": "wildlifeParkRotate",
  "Pokemon in the Wildlife Park change every 12 hours": "wildlifeParkRotation",
  "Inflicts {tag}, but increases enemy Attack by 100%": "moveInfo_inflictAndBoostEnemyAtk",
  "Are you sure you want to delete all data forever?": "deleteConfirm",
  "No tags created yet. Create your first tag above!": "noTagsCreated",
  "Status effects are cleared when switching Pokemon": "moveInfo_clearStatusSwitch",
  "When attacking, ignores the target's stat changes": "moveInfo_unaware",
  "Damage received is halved when over {percent}% HP": "moveInfo_halveDamageHighHP",
  "Super-effective damage taken multiplier is halved": "moveInfo_halveSE",
  "Every turn, raises two stats by 100% for one turn": "moveInfo_randomTwoStats",
  "Power doubles if the user is not holding any item": "moveInfo_powerDoubleNoItem",
  "Defeat Master Trainer Geeta in VS mode to unlock": "defeatGeetaToUnlock",
  "Defeat Team Leader Giovanni in VS mode to unlock": "defeatGiovanniToUnlockFrontier",
  "A new update is available! Click here to reload.": "updateAvailableBanner",
  "For now, I will take a break... Enjoy your stay!": "tutorial10",
  "Use: Unlock this cosmetic for a selected Pokemon": "unlockCosmetic",
  "{percent}% chance to inflict {tag} when attacked": "moveInfo_chanceToInflictWhenAttacked",
  "Increases {stat} by 50% if no item is being held": "moveInfo_increaseStatNoItem",
  "Increases {stat} by 50% when defeating a Pokemon": "moveInfo_increaseStatKO",
  "{percent}% chance to increase {stat} by {value}%": "moveInfo_chanceIncreaseStat",
  "Type changes based on the first type of the user": "moveInfo_typeByUser",
  "Increases the damage dealt by cross-power by 30%": "fieldCrossRoomDesc",
  "You already unlocked the Pokemon hidden ability": "trainingHiddenAbilityError",
  "Pokemon with no Fighting-type can't participate": "skillFightingPledgeDesc",
  "Pokemon with no Electric-type can't participate": "skillElectricPledgeDesc",
  "Halves the damage received of {type}-type moves": "moveInfo_halvesDamage",
  "Can only take damage from direct damaging moves": "moveInfo_sheerColdImm",
  "Copies the positive stat increases of the enemy": "moveInfo_copyEnemyStats",
  "Stat changes on the user are boosted by a stage": "moveInfo_boostStatStages",
  "Moves are executed a second time, at half power": "moveInfo_parentalBond",
  "Power doubles if the target has a status effect": "moveInfo_powerDoubleStatus",
  "Disable brave shield to properly run the page!": "disableBraveShield",
  "Your hit effects are twice as likely to happen": "skillSerendipityDesc",
  "Pokemon with no Psychic-type can't participate": "skillPsychicPledgeDesc",
  "50% chance for received Status Effects to miss": "moveInfo_statusMiss50",
  "Removes all status effect for the entire party": "moveInfo_healTeamAll",
  "Use: Increase the Defense IV of a Pokemon by 1": "itemInfo_102",
  "Are you sure you want to abort the operation?": "abortOperationConfirm",
  "Howdy! I have been assigned to show the ropes": "howdy",
  "You can only have one Baton Pass in your team": "singleBatonPassError",
  "Select ingredients to add to the curry! [5/5]": "currySelectIngredients",
  "Increases the damage of Ice-type moves by 50%": "weatherHailDesc",
  "Pokemon with no Dragon-type can't participate": "skillDragonPledgeDesc",
  "Pokemon with no Poison-type can't participate": "skillPoisonPledgeDesc",
  "Pokemon with no Flying-type can't participate": "skillFlyingPledgeDesc",
  "Pokemon with no Normal-type can't participate": "skillNormalPledgeDesc",
  "Pokemon with no Ground-type can't participate": "skillGroundPledgeDesc",
  "Increase Special Defense by 100% for 15 turns": "skillIronSpiritDesc",
  "Power increases by x1.2-1.5 if Speed is risen": "moveInfo_powerRiseSpeed",
  "10% chance to inflict {tag1},{tag2} or {tag3}": "moveInfo_chanceTripleInflict",
  "Use: Increase the Attack IV of a Pokemon by 1": "itemInfo_101",
  "AFK time is being calculated, please wait...": "afkCalculating",
  "Defeat Gym Leader Brock in VS mode to unlock": "defeatBrockToUnlock",
  "Defeat Elite Four Lance in VS mode to unlock": "defeatLanceToUnlock2",
  "Defeat Ultra Entity Lusamine in VS to unlock": "defeatUltraEntityLusamine",
  "Defeat Gym Leader Misty in VS mode to unlock": "defeatMistyToUnlock",
  "Defeat Elite Trainer Cynthia in VS to unlock": "defeatEliteTrainerCynthiaToUnlock",
  "Defeat Pokemon Professor Oak in VS to unlock": "defeatPokemonProfessorOakToUnlock",
  "Every 12h you might receive a random pokemon": "randomPokemonEvery12h",
  "Moves cannot be freely changed at the moment": "restrictedActionDesc",
  "Physical damage dealt to the enemy is halved": "fieldWeakeningCurseDesc",
  "Pokemon with no Fairy-type can't participate": "skillFairyPledgeDesc",
  "Pokemon with no Steel-type can't participate": "skillSteelPledgeDesc",
  "Pokemon with no Grass-type can't participate": "skillGrassPledgeDesc",
  "Pokemon with no Water-type can't participate": "skillWaterPledgeDesc",
  "Pokemon with no Ghost-type can't participate": "skillGhostPledgeDesc",
  "Prevents all Pokemon on your team from {tag}": "moveInfo_preventTeamTag",
  "Secondary effect of moves are executed twice": "moveInfo_doubleSecondary",
  "Use: Increase the Speed IV of a Pokemon by 1": "itemInfo_105",
  "Generates a table of possible Pokemon moves": "consoleGetMoveset",
  "All moves execute at the default speed (2s)": "fieldAverageTimeDesc",
  "Special damage dealt to the enemy is halved": "fieldFatiguingCurseDesc",
  "Pokemon with no Fire-type can't participate": "skillFirePledgeDesc",
  "Pokemon with no Dark-type can't participate": "skillDarkPledgeDesc",
  "Pokemon with no Rock-type can't participate": "skillRockPledgeDesc",
  "{category} moves are executed twice as fast": "moveInfo_categorySpeed",
  "Increases {stat} by 100% to the entire team": "moveInfo_increaseStatTeam",
  "Use: Unlock the hidden ability of a Pokemon": "itemInfo_088",
  "Type weaknesses and strengths are reversed": "fieldReverseFieldDesc",
  "Pokemon with no Ice-type can't participate": "skillIcePledgeDesc",
  "Pokemon with no Bug-type can't participate": "skillBugPledgeDesc",
  "Decreases fatigue damage of the user by x2": "moveInfo_decreaseFatigue",
  "Power doubles if the target is {condition}": "moveInfo_powerDoubleCond",
  "Power doubles if the target is {type}-Type": "moveInfo_powerDoubleType",
  "This ability is currently unobtainable :(": "dictAbilityUnobtainable",
  "Drag and drop the selected decor to apply": "dragDecor",
  "Element with id 'text-data-raw' not found": "textDataRawNotFound",
  "Right Click/Long press to see the details": "rightClickForDetails",
  "cursor:pointer; font-size:2rem; width:40%": "nope",
  "You already have the maximum possible IVs": "trainingIv3Error",
  "Sustract 1 to current Wild Area rotation:": "subtractRotation",
  "Use stat-up moves that match your attacks": "tipStatUpMoves",
  "Physical damage dealt is multiplied by x2": "moveInfo_doublePhysical",
  "Use: Increase the level of a Pokemon by 1": "itemInfo_086",
  "Use: Increase the HP IV of a Pokemon by 1": "itemInfo_100",
  "Defeat Gym Leader Phoebe in VS to unlock": "defeatPhoebeToUnlock",
  "Choose a difficulty for the next trainer": "pickDifficultyNextTrainer",
  "50% chance that moves cannot deal damage": "statusConfusedDesc",
  "- Z-move random split bonus: Yes (x1.25)": "zMoveRandomSplitYes",
  "Prevents the lowering of any {stat} stat": "moveInfo_preventLowerStat",
  "Increases {stat} by 50% on {tag} weather": "moveInfo_increaseStatWeather",
  "Increases Same-Type-Attack-Bonus by +0.2": "moveInfo_stabBoost",
  "Power doubles if the user is {condition}": "moveInfo_powerDoubleUserCond",
  "Defeat Elite Four Lance in VS to unlock": "defeatLanceToUnlockMenu",
  "Select ingredients to add to the curry!": "selectIngredients",
  "Use Stat Up moves that match your moves": "useStatUpMoves",
  "You can copy or paste savefile codes...": "youCanCopyPasteSavefileCodes",
  "Moves always hit regardless of the type": "moveInfo_alwaysHit",
  "Complete the tutorial to access events": "completeTutorialForEvents",
  "Learnable by {types} types {signature}": "learnableByTypes",
  "Right Click/Long Press to see keywords": "rightClickKeywords",
  "Increase all Stats by 50% for 10 turns": "skillOmniboostDesc",
  "Super-effective damage becomes neutral": "moveInfo_neutralSE",
  "Decreases Defense, Special Defense 50%": "moveInfo_shellSmash",
  "% to inherit sample's S. Defense Iv's": "inheritSDef",
  "Reduces physical attack damage by 75%": "reflectDesc",
  "Rewards have been automatically added": "rewardsAutoAdded",
  "Increase Defense by 100% for 15 turns": "skillIronWillDesc",
  "Use: Re-roll the ability of a Pokemon": "itemInfo_087",
  "Hide non-new Pokemon got in summary:": "hideNonNew",
  "Try to improve your Pokemon further:": "tryToImprovePokemon",
  "% to inherit sample's S. Attack Iv's": "inheritSAtk",
  "Select a pokemon to teach Hydro Pump": "selectPokemonToTeachHydroPump",
  "Select at least one ingredient first": "selectAtLeastOneIngredient",
  "This project is entirely unofficial!": "unofficial",
  "Faints your currently active Pokemon": "skillSuddenDeathDesc",
  "- Z-move stab multiplier: Yes (x1.5)": "zMoveStabMultiplier",
  "Nullifies received {type}-type moves": "moveInfo_nullifiesType",
  "Grants immunity to Ground-type moves": "moveInfo_levitate",
  "Decreases enemy {stat} by {percent}%": "moveInfo_decreaseEnemyStat",
  "Steals the stat changes of the enemy": "moveInfo_stealEnemyStats",
  "Use: Removes the nature of a Pokemon": "itemInfo_092",
  "% to inherit a move from the sample": "inheritMove",
  "Select a Pokemon to add to the team": "selectPokemonForTeam",
  "Power randomly varies from x1 to x8": "moveInfo_randomPower",
  "Super-effective against Water-types": "moveInfo_superEffWater",
  "Gen 9 sprites by KingOfThe-X-Roads": "creditsGen9",
  "First team slot must not be empty!": "firstSlotNotEmpty",
  "% to inherit sample's Defense Iv's": "inheritDef",
  "font-size:1rem; background:#465f96": "levelAbbreviation",
  "The available items will change in": "shopApricornRotation",
  "The available decor will change in": "shopDecorRotation",
  "Unlocks the Pokemon Hidden Ability": "trainingHiddenAbilityName",
  "{percent}% chance to inflict {tag}": "moveInfo_chanceToInflict",
  "Removes {tag} for the entire party": "moveInfo_healTeamTag",
  "Alter Battle Speed (Default 2000)": "consoleAlterBattleSpeed",
  "% to inherit sample's Attack Iv's": "inheritAtk",
  "Can be purchased in the Poke-Mart": "spawnLocationMart",
  "Increases all Stats by {percent}%": "moveInfo_increaseAllStats",
  "Attacks x{mult} faster than usual": "moveInfo_faster",
  "Attacks x{mult} slower than usual": "moveInfo_slower",
  "Switches to the next party member": "moveInfo_switchNext",
  "Inflicts {tag} to the entire team": "moveInfo_inflictTeam",
  "You cant afford to purchase this": "cantAffordPurchase",
  "% to inherit sample's Speed Iv's": "inheritSpe",
  "The item will be consumed on use": "itemWillBeConsumed",
  "Positive stats up last x3 longer": "moveInfo_longerPositiveStats",
  "Increases {stat} by 50% on {tag}": "moveInfo_increaseStatTerrain",
  "User performs any move at random": "moveInfo_metronome",
  "Can hit regardless of the typing": "moveInfo_noTypeImmunity",
  "Set all Pokemon IV's. Maximum 6": "consoleDebugSetIvs",
  "Type a command for further info": "consoleInfoCommand",
  "Raises by 100% two random stats": "moveInfo_raiseTwoRandom",
  "Obtained in the Battle Frontier": "itemInfo_082",
  "Get better type-matching moves": "tipTypeMatchingMoves",
  "How about the Battle Frontier?": "howAboutBattleFrontier",
  "Increases {stat} by {percent}%": "moveInfo_increaseStat",
  "Decreases {stat} by {percent}%": "moveInfo_decreaseStat",
  "All trainers defeated for now": "allTrainersDefeatedForNow",
  "Data copied to the Clipboard!": "dataCopiedClipboard",
  "% to inherit sample's HP Iv's": "inheritHp",
  "% for shiny mutation": "percentForShinyMutation",
  "Nothing but time will be lost": "nothingButTimeLost",
  "On HP bar Nº{number} depleted": "onHPBarDepleted",
  "This is your savefile code...": "thisIsYourSavefileCode",
  "Switching Pokemon deal damage": "fieldStealthRocksDesc",
  "Increases Cross-Power by +0.3": "moveInfo_crossPower03",
  "Increases Cross-Power by +0.5": "moveInfo_crossPower05",
  "and as Egg Move of {pokemon}": "eggMoveOf",
  "This Pokemon is unobtainable": "spawnLocationUnobtainable",
  "Weather changes are disabled": "fieldDeltaStreamDesc",
  "Changes the weather to {tag}": "moveInfo_changeWeather",
  "Executes the first move slot": "moveInfo_sleepTalk",
  "Complete the tutorial first": "completeTutorialFirst",
  "Complete Genetics Operation": "consoleCompleteGenetics",
  "getMoveset(pkmn.NAME,LEVEL)": "consoleHeaderCommand",
  "Modify Pokemon shiny status": "consoleModifyPokemonShiny",
  "Go play the official games!": "disclaimerPlayOfficial",
  "Right Click to see keywords": "rightClickKeywords2",
  "Select a Pokemon to use the": "selectPokemonUseItem",
  "Rerolls the Pokemon Ability": "trainingAbilityName",
  "Prevents all stat decreases": "moveInfo_preventAllStatDecrease",
  "http://www.w3.org/2000/svg": "dungeons",
  "Modify stats with Genetics": "tipGenetics",
  "No data found in the input": "noDataInInput",
  "No new items or Pokemon :(": "noNewItemsOrPokemon",
  "training-indicator-counter": "remaining",
  "Time to complete operation": "timeToComplete",
  "Inflicts {tag} on the user": "moveInfo_inflictSelf",
  "Bypasses all defense buffs": "moveInfo_bypassDef",
  "Data pasted successfully!": "dataPastedSuccessfully",
  "Battle: Buffs and Debuffs": "guideBuffs",
  "Rotation: {current}/{max}": "rotationLabel",
  "Select a pokemon to teach": "selectPokemonTeach",
  "Select a Pokemon to train": "selectPokemonToTrain",
  "Trainer {current}/{total}": "trainerCounter",
  "Modify Frontier Rotation": "consoleModifyFrontierRotation",
  "No new moves to remember": "noNewMoves",
  "Permanent Seasonal Theme": "shopNamePermanentSeasonalTheme",
  "Moves cannot deal damage": "statusSleepDesc",
  "Grants immunity to {tag}": "moveInfo_grantsImmunity",
  "Please enter a tag name": "pleaseEnterTagName",
  "Modify Dungeon Rotation": "consoleModifyDungeonRotation",
  "division and below only": "divisionAndBelowOnly",
  "spiraling-highest-floor": "highestFloor",
  "Genetics: Compatibility": "guideGeneticsCompat",
  "Hidden Ability Training": "haTraining",
  "Select move to remember": "selectMoveToRemember",
  "Select a sample Pokemon": "selectSamplePokemon",
  "Signature Move Training": "sigMoveTraining",
  "Level Training": "levelTraining",
  "Move Training": "moveTraining",
  "Nature Training": "natureTraining",
  "Current Type Rotation: ": "spiralTypeRotation",
  "Unlock a hidden ability": "tipUnlockHiddenAbility",
  "Unlock a Hidden Ability": "unlockHiddenAbility",
  "Use: Get a random Decor": "itemInfo_091",
  "All trainers defeated!": "allTrainersDefeated",
  "Click here to add tags": "clickToAddTags",
  "Error trimming sprite:": "statHealth",
  "Miscellaneous Commands": "consoleMiscCommands",
  "Modify Pokemon Ability": "consoleModifyPokemonAbility",
  "Battle: Battle Fatigue": "guideFatigue",
  "Battle: Status Effects": "guideStatus",
  "How many will you buy?": "howManyWillYouBuy",
  "Only time will be lost": "onlyTimeLost",
  "Thanks for the Dialga!": "thanksForDialga",
  "Gain 2 random IV stars": "trainingIv3Name",
  "Abilities are disabled": "fieldNeutralisingGasDesc",
  "Removes all team buffs": "skillDemoralisingRoarDesc",
  "Hits {min}-{max} times": "moveInfo_hitsTimes",
  "Please select an icon": "pleaseSelectIcon",
  "You can't afford this": "youCantAffordThis",
  "Check learnable moves": "checkLearnableMoves",
  "Modify Event Rotation": "consoleModifyEventRotation",
  "Unlock Hidden Ability": "consoleUnlockHiddenAbility",
  "Genetics: Quick Guide": "guideGenetics",
  "No additional effects": "noAdditionalEffects",
  "Select a host Pokemon": "selectHostPokemon",
  "Froakie<br>Water Type": "starterFroakie",
  "Turtwig<br>Grass Type": "starterTurtwig",
  "Auto-Refight Tickets": "autoRefightTickets",
  "Get 999 of all items": "consoleDebugGetItems",
  "Modify Pokemon level": "consoleModifyPokemonLevel",
  "Modify Wild Rotation": "consoleModifyWildRotation",
  "Error loading data: ": "errorLoadingDataPrefix",
  "Get a better Ability": "getBetterAbility",
  "Genetics: Power Cost": "guideGeneticsCost",
  "Ancient Keystone x25": "shopNameAncientKeystoneX25",
  "Get a better ability": "tipBetterAbility",
  "Auto-Refight Ticket": "autoRefightTicket",
  "Click to disable it": "clickToDisableIt",
  "~ Current Effects ~": "currentEffects",
  "Error loading data.": "errorLoadingData",
  "Give it a nickname!": "giveNickname",
  "Battle: Cross-Power": "guideCrossPower",
  "(max level reached)": "maxLevelReached",
  "not evolved (level)": "notEvolvedLevel",
  "Not yet implemented": "notYetImplemented",
  "- Return To Kanto -": "returnToKantoBanner",
  "Litten<br>Fire Type": "starterLitten",
  "Battle: Experience": "guideExp",
  "has been unlocked!": "hasBeenUnlocked2",
  "No save data found": "noSaveData",
  "Operation Overview": "operationOverview",
  "Repeated Egg Moves": "repeatedEggMoves",
  "Restricted Pokemon": "restrictedPokemon",
  "Restricted Z-Moves": "restrictedZMoves",
  "Aether Keycard x25": "shopNameAetherKeycardX25",
  "Ancient Orchid x25": "shopNameAncientOrchidX25",
  "VS Battle Frontier": "vsFrontierHeader",
  "Items are disabled": "fieldUnnerveDesc",
  "Baton Pass Clause": "batonPassClause",
  "Custom Challenges": "helpCustomChallengesTitle",
  "Sinnoh Expedition": "eventSinnohExpedition",
  "Battle: Abilities": "guideAbilities",
  "Metronome casts: ": "metronomeCasts",
  "not evolved (all)": "notEvolvedAll",
  "Restricted Action": "restrictedActionTitle",
  "Select a starter!": "selectStarter",
  "Epoch Feather x25": "shopNameEpochFeatherX25",
  "Enter tag name...": "tagNamePlaceholder",
  "Time left: {time}": "timeLeft",
  "Ability Training": "abilityTraining",
  "Add Pokemon Move": "consoleAddPokemonMove",
  "Modify Rotations": "consoleModifyRotations",
  "Difficulty: ★★★★": "difficulty4",
  "Remove star sign": "removeStarSign",
  "Restricted Moves": "restrictedMoves",
  "Hawluchanite x21": "shopNameHawluchaniteX21",
  "Wisdom Petal x25": "shopNameWisdomPetalX25",
  "Switch to French": "switchLang",
  "Electric Terrain": "tagElectricTerrain",
  "Veteran Trainer ": "trainerPrefixVeteran",
  "Battle Frontier": "vsFrontier",
  "remove-tag-menu": "deleteTag",
  "Difficulty: ★★★": "difficulty3",
  "Aether Takeover": "eventAetherTakeover",
  "Ancients Awoken": "eventAncientsAwoken",
  "Return to Kanto": "eventReturnToKanto",
  "Tier III Raid ❖": "eventTagTier3Raid",
  "Battle: Weather": "guideWeather",
  "Main Challenges": "mainChallenges",
  "No tags created": "noTagsCreatedShort",
  "Restricted Move": "restrictedMoveTitle",
  "Return To Kanto": "returnToKanto",
  "Reward received": "rewardReceived",
  "Select an event": "selectAnEvent",
  "Barbaracite x21": "shopNameBarbaraciteX21",
  "Future Disk x25": "shopNameFutureDiskX25",
  "Special Defense": "statSpecialDefense",
  "Expert Trainer ": "trainerPrefixExpert",
  "Master Trainer ": "trainerPrefixMaster",
  "Rookie Trainer ": "trainerPrefixRookie",
  "Victory Rewards": "victoryRewardsAlt",
  "genetics-start": "abort",
  "Master Trainer": "veteranTrainerPrefix",
  "Banned Pokemon": "bannedPokemon",
  "Battle Summary": "battleSummary",
  "Modify Pokemon": "consoleModifyPokemon",
  "Create new tag": "createNewTag",
  "Difficulty: ★★": "difficulty2",
  "Edit team name": "editTeamName",
  "Primeval Wilds": "eventPrimevalWilds",
  "Science Future": "eventScienceFuture",
  "Tier II Raid ❖": "eventTagTier2Raid",
  "Tier IV Raid ❖": "eventTagTier4Raid",
  "Game modifiers": "gameModifiers",
  "Game Modifiers": "gameModifiersTitle",
  "Battle Factory": "helpBattleFactoryTitle",
  "Mega Dimension": "megaDimension",
  "You have until": "mysteryGiftUntil",
  "Select an icon": "selectIconLabel",
  "Falinksite x21": "shopNameFalinksiteX21",
  "Signature Move": "signatureMove",
  "Special Attack": "statSpecialAttack",
  "Grassy Terrain": "tagGrassyTerrain",
  "Thanks for the": "thanksForPokemon",
  "Version Notice": "versionNotice",
  "Inflicts {tag}": "moveInfo_inflicts",
  "all star sign": "allStarSign",
  "barcode-flair": "barcodePreview",
  "Clear Filters": "clearFilters",
  "[Coming Soon]": "comingSoon",
  "Tier I Raid ❖": "eventTagTier1Raid",
  "Export Reward": "exportReward",
  "BattleFactory": "factoryPokemon",
  "Field Effects": "fieldEffects",
  "Battle: Moves": "guideMoves",
  "Shiny Pokemon": "guideShiny",
  "Battle: Stats": "guideStats",
  "has signature": "hasSignature",
  "has star sign": "hasStarSign",
  "Nuzlocke Mode": "nuzlockeMode",
  "Master League": "masterLeague",
  "Save and exit": "saveAndExit",
  "Bottle Cap x2": "shopNameBottleCapX2",
  "Bottle Cap x5": "shopNameBottleCapX5",
  "Pyroarite x21": "shopNamePyroariteX21",
  "Time Candy x3": "shopNameTimeCandyX3",
  "Misty Terrain": "tagMistyTerrain",
  "Trainer Reset": "trainerReset",
  "Verdant Theme": "verdantTheme",
  "Can't afford": "cantAffordTitle",
  "Cherry Theme": "cherryTheme",
  "Come back in": "comeBackIn",
  "Give Pokemon": "consoleGivePokemon",
  "Modify Items": "consoleModifyItems",
  "Damage Dealt": "damageDealt",
  "Data to Text": "dataToText",
  "Collection ◈": "eventTagCollection",
  "EXP Training": "expTraining",
  "Great League": "greatLeague",
  "Battle: STAB": "guideStab",
  "has egg move": "hasEggMove",
  "Battle Arena": "helpBattleArenaTitle",
  "Battle Tower": "helpSpiralTitle",
  "is now level": "isNowLevel",
  "Learnt Moves": "learntMoves",
  "Leave Combat": "leaveCombat",
  "Let's do it!": "letsDoIt",
  "Mystery Gift": "mysteryGift",
  "New ability!": "newAbilityTitle",
  "New Pokemon!": "newPokemon",
  "Nuzloke Mode": "nuzlokeMode",
  "Remove decor": "removeDecor",
  "Save and Go!": "saveAndGo",
  "Save Changes": "saveChanges",
  "Switch shiny": "switchShiny",
  "Light Screen": "tagLightScreen",
  "Team Preview": "teamPreview",
  "Ace Trainer ": "trainerPrefixAce",
  "Ultra League": "ultraLeague",
  "Wonder Trade": "wonderTrade",
  "Cant afford": "cantAfford",
  "Coral Theme": "coralTheme",
  "Wild Zone ✦": "eventTagWildZone",
  "Expand Lore": "expandLoreBtn",
  "Export Data": "exportData",
  "Fight Again": "fightAgain",
  "Full Screen": "fullScreen",
  "VS Trainers": "vsTrainersHeader",
  "Import Data": "importData",
  "IV Training": "ivTraining",
  "Light Theme": "lightTheme",
  "Lilac Theme": "lilacTheme",
  "Sp. Defense": "statSdef",
  "to claim it": "toClaimIt",
  "Base Stats": "baseStats",
  "Challenges": "challenges",
  "Give Items": "consoleGiveItems",
  "Dark Theme": "darkTheme",
  "Dictionary": "dictionary",
  "Game Guide": "gameGuide",
  "Grass Type": "grassType",
  "has ribbon": "hasRibbon",
  "Longer AFK": "longerAFK",
  "Wild Areas": "wildAreasTab",
  "Inspecting": "inspecting",
  "IV's Stats": "ivStats",
  "Little Cup": "littleCup",
  "New Items!": "newItems",
  "Oled Theme": "oledTheme",
  "Onyx Theme": "onyxTheme",
  "Power Cost": "powerCost",
  "(Uncommon)": "uncommonParen",
  "Restaurant": "restaurant",
  "satk Total": "satkTotal",
  "sdef Total": "sdefTotal",
  "Sp. Attack": "statSatk",
  "Cross Room": "tagCrossRoom",
  "Trick Room": "tagTrickRoom",
  "Weird Room": "tagWeirdRoom",
  "Water Type": "waterType",
  "Abilities": "abilitiesSectionTitle",
  "atk Total": "atkTotal",
  "def Total": "defTotal",
  "Evolution": "evolutionShop",
  "evolution": "evolutionFilter",
  "Fire Type": "fireType",
  "Hard Mode": "helpModHardTitle",
  "locked HA": "lockedHa",
  "not shiny": "notShiny",
  "now has a": "nowHasNature",
  "Poke-Mart": "pokeMart",
  "satk IV's": "satkIv",
  "sdef IV's": "sdefIv",
  "signature": "signatureFilter",
  "spe Total": "speTotal",
  "Tag Color": "tagColorLabel",
  "Paralysis": "tagParalysis",
  "Safeguard": "tagSafeguard",
  "Sandstorm": "tagSandstorm",
  "Uncommon!": "uncommonExcl",
  "#{number}": "teamSlotPrefix",
  "Wipe Data": "wipeData",
  "all Stats": "statAllStats",
  "atk IV's": "atkIv",
  "(Common)": "rarityCommon",
  "Made by ": "creditsMadeBy",
  "def IV's": "defIv",
  "disabled": "disabled",
  "division": "divisionLabel",
  "Dungeons": "helpDungeonsTitle",
  "Exchange": "exchange",
  "Genetics": "helpGeneticsTitle",
  "Keywords": "keywords",
  "Training": "helpTrainingTitle",
  "hp Total": "hpTotal",
  "is shiny": "isShiny",
  "Rotation": "rotationHeader",
  "satk BST": "satkBst",
  "Save Tag": "saveTagButton",
  "sdef BST": "sdefBst",
  "Settings": "settings",
  "spe IV's": "speIv",
  "Confused": "tagConfused",
  "Tag Name": "tagNameLabel",
  "Poisoned": "tagPoisoned",
  "Uncommon": "tagUncommonItems",
  "Trainers": "trainersTab",
  "electric": "typeElectric",
  "fighting": "typeFighting",
  "ability": "abilityFilter",
  "atk BST": "atkBst",
  "magenta": "colorMagenta",
  "Credits": "creditsTitle",
  "def BST": "defBst",
  "default": "defaultOption",
  "Defense": "statDefense",
  "Discord": "discord",
  "enabled": "enabled",
  "Filters": "filters",
  "Go back": "goBack",
  "Pokerus": "helpPokerusTitle",
  "Setting": "setting",
  "hp IV's": "hpIv",
  "English": "language",
  "Pokemon": "pokemonShop",
  "Go Back": "shopGoBack",
  "spe BST": "speBst",
  "Embargo": "tagEmbargo",
  "Team 10": "team10",
  "Team 11": "team11",
  "Team 12": "team12",
  "Team 13": "team13",
  "Team 14": "team14",
  "Team 15": "team15",
  "Team 16": "team16",
  "Team 17": "team17",
  "Team 18": "team18",
  "Team 19": "team19",
  "Team 20": "team20",
  "Team 21": "team21",
  "Team 22": "team22",
  "Team 23": "team23",
  "Team 24": "team24",
  "Team 25": "team25",
  "Team 26": "team26",
  "Team 27": "team27",
  "Team 28": "team28",
  "Team 29": "team29",
  "Team 30": "team30",
  "psychic": "typePsychic",
  "weather": "weatherSuffix",
  "Attack": "statAttack",
  "SPE ▼▼": "buffZzz",
  "Cancel": "cancel",
  "caught": "caughtLabel",
  "Cheats": "cheats",
  "orange": "colorOrange",
  "yellow": "colorYellow",
  "common": "common",
  "effect": "consoleHeaderEffect",
  "Events": "helpEventsTitle",
  "Finish": "finish",
  "Health": "health",
  "No IVs": "noIVs",
  "tower1": "highestSpiralingTowerFloor",
  "hp BST": "hpBst",
  "Master": "masterDifficulty",
  "Memory": "memory",
  "Novice": "novice",
  "(Rare)": "rarityRare",
  "Remove": "remove",
  "ribbon": "ribbonFilter",
  "Freeze": "tagFreeze",
  "hidden": "tagHidden",
  "Team 1": "team1",
  "Team 2": "team2",
  "Team 3": "team3",
  "Team 4": "team4",
  "Team 5": "team5",
  "Team 6": "team6",
  "Team 7": "team7",
  "Team 8": "team8",
  "Team 9": "team9",
  "Theme:": "themeLabel",
  "spooky": "themeSpooky",
  "Travel": "travel",
  "dragon": "typeDragon",
  "flying": "typeFlying",
  "ground": "typeGround",
  "normal": "typeNormal",
  "poison": "typePoison",
  "style=": "yeah",
  "Berry": "berry",
  "green": "colorGreen",
  "Decor": "decor",
  "Yeah!": "deleteConfirmButton",
  "Elite": "elite",
  "Goods": "goods",
  "Guide": "guide",
  "Curry": "helpCurryTitle",
  "Items": "items",
  "level": "levelFilter",
  "Moves": "moves",
  "Paste": "saveCodePaste",
  "point": "point",
  "Reset": "reset",
  "shiny": "shinyFilter",
  "Speed": "statSpeed",
  "Start": "start",
  "Foggy": "tagFoggy",
  "Rainy": "tagRainy",
  "Rare!": "tagRareItems",
  "Sleep": "tagSleep",
  "Sunny": "tagSunny",
  "fairy": "typeFairy",
  "ghost": "typeGhost",
  "grass": "typeGrass",
  "steel": "typeSteel",
  "water": "typeWater",
  "Stats": "statStats",
  "SATK": "buffSatk",
  "SDEF": "buffSdef",
  "blue": "colorBlue",
  "lime": "colorLime",
  "pink": "colorPink",
  "teal": "colorTeal",
  "info": "consoleHeaderInfo",
  "Copy": "saveCodeCopy",
  "Gems": "gems",
  "Back": "goBackButton",
  "Held": "held",
  "Load": "saveCodeLoad",
  "Memo": "memo",
  "Shop": "shop",
  "rare": "rare",
  "sort": "sortFilter",
  "Burn": "tagBurn",
  "Hail": "tagHail",
  "Tag:": "tagLabel",
  "none": "tagNone",
  "Tags": "tags",
  "Team": "team",
  "TM's": "tms",
  "type": "typeFilter",
  "dark": "typeDark",
  "fire": "typeFire",
  "rock": "typeRock",
  "SPE": "buffSpe",
  "red": "colorRed",
  "Dex": "dex",
  "Evo": "evo",
  "Key": "key",
  "and": "and",
  "tag": "tagFilter",
  "bug": "typeBug",
  "ice": "typeIce",
  "...": "moveInfo_ellipsis",
  "or": "or",
  "VS": "vs",
  "HP": "statHP",
  "Area Items": "areaItems",
  "Area Pokemon": "areaPokemon",
  "Factory Pokemon": "factoryPokemon",
};
const UI_PARTIALS = [
  ["Level ", "Niveau "],
  ["Lv. ", "N. "],
  ["Level: ", "Niveau : "],
  ["lvl ", "niv "],
  ["Caught: ", "Capturés : "],
  ["Score: ", "Score : "],
  [" turns before fainting", " tours avant de tomber"],
  [" left for next level)", " restants pour le prochain niveau)"],
  ["(max level reached)", "(niveau max atteint)"],
  ["Pokemon ", "Pokémon "],
  ["Pokemon", "Pokémon"],
  ["Pokemon's ", "Pokémon "],
  ["Move: ", "Capacité : "],
  ["Ability: ", "Talent : "],
  ["Item: ", "Objet : "],
  ["Type: ", "Type : "],
  [" points", " points"],
  [" point", " point"],
  ["Attack ", "Attaque "],
  ["Defense ", "Défense "],
  ["Speed ", "Vitesse "],
  ["HP ", "PV "],
  ["Sp. Attack ", "Atq. Spé. "],
  ["Sp. Defense ", "Déf. Spé. "],
  ["Difficulty: ", "Difficulté : "],
  ["Battle Tower", "Tour de Combat"],
  ["Battle Factory", "Usine de Combat"],
  ["Battle Arena", "Arène de Combat"],
  ["Highest Reached Floor: ", "Plus haut étage atteint : "],
  ["Highest Score: ", "Score Max : "],
  ["Defeated: ", "Vaincus : "],
  ["Current Type Rotation: ", "Rotation de type actuelle : "],
  ["Requires a ", "Nécessite un "],
  [" to enter", " pour entrer"],
  [" Wormhole Residue ", " Résidu de Vortex Spatial "],
  [" Wormhole Residues ", " Résidus de Vortex Spatial "],
  [" Wormhole Residue", " Résidu de Vortex Spatial"],
  [" Wormhole Residues", " Résidus de Vortex Spatial"],
  ["Common Ability", "Talent Commun"],
  ["Uncommon Ability", "Talent Inhabituel"],
  ["Rare Ability", "Talent Rare"],
];

window.translateRuntimeText = function(value) {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (UI_TEXT_MAP[trimmed]) {
    return t_ui(UI_TEXT_MAP[trimmed]);
  }
  let changed = false;
  for (const [en, fr] of UI_PARTIALS) {
    if (value.includes(en)) {
      value = value.split(en).join(fr);
      changed = true;
    }
  }
  return value;
};

function translateElement(el, skipDone = false) {
  if (window.gameLang !== "fr") return;
  if (!skipDone && el.dataset && el.dataset.i18nDone) return;
  if (el.dataset && el.dataset.i18nHtml) {
    el.innerHTML = t_ui(el.dataset.i18nHtml);
    if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
    return;
  }
  if (el.nodeType === Node.TEXT_NODE) {
    let txt = el.textContent;
    const trimmed = txt.trim();
    if (UI_TEXT_MAP[trimmed]) {
      el.textContent = t_ui(UI_TEXT_MAP[trimmed]);
    } else {
      let changed = false;
      for (const [en, fr] of UI_PARTIALS) {
        if (txt.includes(en)) {
          txt = txt.split(en).join(fr);
          changed = true;
        }
      }
      if (changed) el.textContent = txt;
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
    if (UI_TEXT_MAP[trimmed]) {
      el.textContent = t_ui(UI_TEXT_MAP[trimmed]);
      if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
    } else {
      let changed = false;
      for (const [en, fr] of UI_PARTIALS) {
        if (txt.includes(en)) {
          txt = txt.split(en).join(fr);
          changed = true;
        }
      }
      if (changed) {
        el.textContent = txt;
        if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
      }
    }
  } else {
    el.childNodes &&
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          let txt = node.textContent;
          const trimmed = txt.trim();
          if (UI_TEXT_MAP[trimmed]) {
            node.textContent = t_ui(UI_TEXT_MAP[trimmed]);
            if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
          } else {
            let changed = false;
            for (const [en, fr] of UI_PARTIALS) {
              if (txt.includes(en)) {
                txt = txt.split(en).join(fr);
                changed = true;
              }
            }
            if (changed) {
              node.textContent = txt;
              if (!skipDone && el.dataset) el.dataset.i18nDone = "1";
            }
          }
        }
      });
    // recurse into children that are elements
    el.querySelectorAll &&
      el
        .querySelectorAll("div, span, button, option, a, strong, label")
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
  document
    .querySelectorAll("div, span, button, option, a, strong, label")
    .forEach((el) => translateElement(el));
}

// Observe DOM changes to auto-translate dynamically injected content
const i18nObserver = new MutationObserver((mutations) => {
  if (window.gameLang !== "fr") return;
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) translateElement(node);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  i18nObserver.observe(document.body, { childList: true, subtree: true });
});

// UI Translations
const GAME_UI = {
  en: {
    abilities: "Abilities",
    abilitiesSection: "Abilities",
    abilitiesSectionTitle: "Abilities",
    abilityCurrentlyUnobtainable: "This ability is currently unobtainable :(",
    abilityFilter: "ability",
    abilitySwapped:
      '<div style="filter:hue-rotate(-50deg)">★ Ability swapped!</div>',
    abilityTraining: "Ability Training",
    abort: "genetics-start",
    abortOperationConfirm: "Are you sure you want to abort the operation?",
    aceTrainerPrefix: "Master Trainer",
    addPokemon: "color: white;",
    additionallyHiddenAbilityOf:
      "<br><br>Additionally, appears as the Hidden ability of ${joinWithAnd(signatureArray)}",
    affectedBy: "<br>Affected by ${joinWithAnd(affectedAbilities)}",
    afkCalculating: "AFK time is being calculated, please wait...",
    alertEnterTagName: "Please enter a tag name",
    alertSelectIcon: "Please select an icon",
    allStarSign: "all star sign",
    allTrainersDefeated: "All trainers defeated!",
    allTrainersDefeatedForNow: "All trainers defeated for now",
    autoRefightNoTicketTraining:
      'Auto-refights <span>(Does not use <img src="img/items/autoRefightTicket.png"> auto-refight tickets)</span>',
    areaPokemon:
      '<div id="area-preview-spawns"><strong>Area Pokemon ${uncatchableIcon}</strong></div>',
    arenaPreviewHtml:
      '\n    \n    \n    <div class="arena-tooltip">\n    Choose a difficulty for the next trainer\n    <span>(Right click/long press to see field effect details)</span>\n    </div>\n    \n    \n    <div id="arena-card-list">\n    \n    <div class="arena-card active-arena-card" id="arena-card-1" onclick="pickArenaCard(1)" data-arena-card="1">\n    <div class="arena-card-title">\n    Level 100\n    <span>\n    Reward: x2<img  src="img/items/goldenBottleCap.png">\n    </span>\n    </div>\n    \n    <div id="arena-card-1-info" class="arena-card-info">\n    </div>\n    </div>\n    \n    <div class="arena-card" id="arena-card-2" onclick="pickArenaCard(2)" data-arena-card="2">\n    <div class="arena-card-title">\n    Level 125\n    <span>\n    Reward: x3<img  src="img/items/goldenBottleCap.png">\n    </span>\n    </div>\n    <div id="arena-card-2-info" class="arena-card-info">\n    </div>\n    </div>\n    \n    <div class="arena-card" id="arena-card-3" onclick="pickArenaCard(3)" data-arena-card="3">\n    <div class="arena-card-title">\n    Level 150\n    <span>\n    Reward: x4<img  src="img/items/goldenBottleCap.png">\n    </span>\n    </div>\n    <div id="arena-card-3-info" class="arena-card-info">\n    </div>\n    </div>\n    \n    </div>\n    \n    \n    \n    ',
    atkBst: "atk BST",
    atkIv: "atk IV's",
    atkIvIncreased:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    atkIvInherited:
      '<div style="filter:hue-rotate(200deg)">❖ Speed Iv\'s inherited!</div>',
    atkTotal: "atk Total",
    attack: "Attack",
    autoRefight: "img/items/autoRefightTicket.png",
    autoRefightActive: "img/items/autoRefightTicket.png",
    autoRefightActiveNoConsume:
      'Auto-refights active! <span>(Does not consume <img src="img/items/autoRefightTicket.png"> auto-refight tickets)</span> Click to disable',
    autoRefightNoTicket:
      'Auto-refights <span>(Does not use <img src="img/items/autoRefightTicket.png"> auto-refight tickets)</span>',
    autoRefightRequiresTicket:
      'Auto-refights <span>(Requires an <img src="img/items/autoRefightTicket.png"> auto-refight ticket)</span>',
    autoRefightTicket: "Auto-Refight Ticket",
    autoRefightTickets: "Auto-Refight Tickets",
    autoRefightTicketsRemaining:
      "({count} {icon} Auto-Refight Tickets remaining)",
    bannedPokemon: "Banned Pokemon",
    barcodePreview: "barcode-flair",
    baseStats: "Base Stats",
    batonPassClause: "Baton Pass Clause",
    battleArena: "Battle Arena",
    battleArenaHelp:
      "The Battle Arena features five trainers in which you can select their difficulty for higher rewards. Field effects, battle modifiers, will also be randomised alongside the trainers. Trainers fought here will reset every day",
    battleFactory: "Battle Factory",
    battleFactoryHelp:
      "The Battle Factory is a challenge in which your goal is to deal the maximum amount of damage. Every turn you will take a fixed amount of damage, and damage from status effects is disabled.\n\nEvery time you enter the factory, your score will reset, but you can try as many times as you'd like\n\nYour highest reached score will be saved, and reset when the league rotation changes. You will be rewarded for your highest score reached at the end of the battle\n\nThere is a maximum of 100 Golden Bottlecaps achievable",
    battleFrontier: "Select a Pokemon to use the ${format(i)}",
    battleFrontierTab: "Battle Frontier",
    battleSummary: "Battle Summary",
    battleTower: "Battle Tower",
    berry: "Berry",
    betterStatMoves:
      "Get better moves that correctly match your stat distribution (Physical/Special)",
    betterTypeMoves: "Get better type-matching moves",
    buffAtk: "SPE ▼▼",
    buffBrn: "SPE ▼▼",
    buffCnf: "SPE ▼▼",
    buffDef: "SPE ▼▼",
    buffEmb: "SPE ▼▼",
    buffFrz: "SPE ▼▼",
    buffPar: "SPE ▼▼",
    buffPsn: "SPE ▼▼",
    buffSatk: "SATK",
    buffSdef: "SDEF",
    buffSpe: "SPE",
    buffZzz: "SPE ▼▼",
    canBeBoughtInPokeMart: "<span>Can be bought in the Poke-Mart</span>",
    canBeDroppedDungeonArea:
      "<span>Can be dropped in the dungeon area ${format(i)} (Rotation ${areas[i].rotation})</span>",
    canBeDroppedEventArea:
      "<span>Can be dropped in the event area ${format(i)} (Rotation ${areas[i].rotation})</span>",
    canBeDroppedWildArea:
      "<span>Can be dropped in the wild area ${format(i)} (Rotation ${areas[i].rotation})</span>",
    canBePurchasedInPokeMart:
      "Unlocked while all obtainable Pokemon have been caught",
    cancel: "Cancel",
    cantAfford: "Cant afford",
    cantAffordPurchase: "You cant afford to purchase this",
    cantAffordThis: "You can't afford this",
    cantAffordTitle: "Can't afford",
    caught: "caught",
    caughtCount:
      '<div id="inpect-pkmn-signature" style="box-shadow: none; outline:none"> <svg style="margin: 0 0.3rem; opacity:0.8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="SVGVlQBebkA"><g fill="none"><path fill="#555555" fill-rule="evenodd" stroke="#fff" stroke-width="4" d="M24 44c10.252 0 16-6.954 16-18S31.132 4 24 4S8 14.954 8 26s5.748 18 16 18Z" clip-rule="evenodd"/><path fill="#fff" d="M21 38a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path fill="#fff" fill-rule="evenodd" d="M16 29.668a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGVlQBebkA)"/></svg> Egg Move: ${format(pkmn[ttdata].eggMove.id)} </div>',
    caughtLabel: "caught",
    challenges: "Challenges",
    cheats: "Cheats",
    checkLearnableMoves: "Check learnable moves",
    cherryTheme: "Cherry Theme",
    clearFilters: "Clear Filters",
    clickAddTags: "Click here to add tags",
    clickToAddTags: "Click here to add tags",
    clickToDisableIt: "Click to disable it",
    clipboardPasteFailed:
      "Could not paste from clipboard. Please paste manually or grant clipboard permissions.",
    collection:
      '<strong style="filter:hue-rotate(100deg)" class="event-tag">Tier IV Raid ❖</strong>',
    colorBlue: "blue",
    colorGreen: "green",
    colorLime: "lime",
    colorMagenta: "magenta",
    colorOrange: "orange",
    colorPink: "pink",
    colorRed: "red",
    colorTeal: "teal",
    colorYellow: "yellow",
    comeBackIn: "Come back in",
    comeBackInTimer: 'Come back in <span class="time-counter-daily"></span>',
    comingSoon: "[Coming Soon]",
    common: "common",
    commonAbility: "Rare Ability<br>${ability[ttdata].info()}",
    commonParen: "(Common)",
    compatibility:
      'Compatibility <font style="color:#E58FFF; margin-left:0.3rem">[${compability-1}]</font>',
    completeTutorialFirst: "Complete the tutorial first",
    completeTutorialForEvents: "Complete the tutorial to access events",
    consoleAddPokemonMove: "Add Pokemon Move",
    consoleAlterBattleSpeed: "Alter Battle Speed (Default 2000)",
    consoleCompleteGenetics: "Complete Genetics Operation",
    consoleDebugGetItems: "Get 999 of all items",
    consoleDebugGetPokemon:
      "Get all Pokemon at certain level. Shiny is optional",
    consoleDebugSetIvs: "Set all Pokemon IV's. Maximum 6",
    consoleErrorTrimmingSprite: "Error trimming sprite:",
    consoleGetMoveset: "Generates a table of possible Pokemon moves",
    consoleGiveItems: "Give Items",
    consoleGivePokemon: "Give Pokemon",
    consoleHeaderCommand: "getMoveset(pkmn.NAME,LEVEL)",
    consoleHeaderEffect: "effect",
    consoleHeaderInfo: "info",
    consoleInfoCommand: "Type a command for further info",
    consoleMiscCommands: "Miscellaneous Commands",
    consoleModifyDungeonRotation: "Modify Dungeon Rotation",
    consoleModifyEventRotation: "Modify Event Rotation",
    consoleModifyFrontierRotation: "Modify Frontier Rotation",
    consoleModifyItems: "Modify Items",
    consoleModifyPokemon: "Modify Pokemon",
    consoleModifyPokemonAbility: "Modify Pokemon Ability",
    consoleModifyPokemonIvs:
      "Modify Pokemon ivs (hp, atk, satk, def, sdef, spe)",
    consoleModifyPokemonLevel: "Modify Pokemon level",
    consoleModifyPokemonShiny: "Modify Pokemon shiny status",
    consoleModifyRotations: "Modify Rotations",
    consoleModifyWildRotation: "Modify Wild Rotation",
    consoleUnlockHiddenAbility: "Unlock Hidden Ability",
    copy: "Copy",
    copyButton: "Copy",
    coralTheme: "Coral Theme",
    couldNotPasteClipboard:
      "Could not paste from clipboard. Please paste manually or grant clipboard permissions.",
    createNewTag: "Create new tag",
    creditsGen9: "Gen 9 sprites by KingOfThe-X-Roads",
    creditsLegal:
      "All characters and related assets featured in this game are the exclusive property of Nintendo, Creatures Inc., and The Pokemon Company, and are used here strictly for non-commercial purposes. No ownership is claimed, and all rights remain with their respective owners.",
    creditsMadeBy: "Made by ",
    creditsSprites:
      "Pokemon and trainer sprites by Pokemon Showdown (Including artists: Beliot419, kyledove, Gnomowladny, Brumirage and ZacWeavile. Go check their work. Now.)",
    creditsTitle: "Credits",
    currentEffects: "~ Current Effects ~",
    curryHelp:
      "Every 12 hours, you can select up to three active abilities for your entire team during raids for 1 hour. These abilities will be available for selection in the Curry section of the shop.",
    curryRaidEffects:
      "During raids: Your team has temporarily gained the following abilities:",
    customChallenges: "Custom Challenges",
    customChallengesHelp:
      "Create custom battles from your own pools and enemy teams. Import and export challenge codes to share them.",
    damageDealt: "Damage Dealt",
    darkTheme: "Dark Theme",
    dataCopiedClipboard: "Data copied to the Clipboard!",
    dataPastedSuccessfully: "Data pasted successfully!",
    dataToText: "Data to Text",
    decor: "Decor",
    decorRotationTimer:
      '\n    <svg style="scale:0.7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="450s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="37.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>\n    The available decor will change in <font style="margin-left:0.3rem" class="time-counter-event">...</font>',
    defBst: "def BST",
    defIv: "def IV's",
    defIvIncreased:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    defIvInherited:
      '<div style="filter:hue-rotate(200deg)">❖ Speed Iv\'s inherited!</div>',
    defTotal: "def Total",
    defaultOption: "default",
    defeatBrendanToUnlock: "Defeat Legend Trainer Brendan in VS mode to unlock",
    defeatBrockToUnlock: "Defeat Gym Leader Brock in VS mode to unlock",
    defeatEliteFourLance: "Defeat Elite Four Lance in VS to unlock",
    defeatGeetaToUnlock: "Defeat Master Trainer Geeta in VS mode to unlock",
    defeatGiovanniToUnlock: "Defeat Team Leader Giovanni in VS mode to unlock",
    defeatGiovanniToUnlockFrontier:
      "Defeat Team Leader Giovanni in VS mode to unlock",
    defeatLanceToUnlock: "Defeat Elite Four Lance in VS to unlock",
    defeatLanceToUnlock2: "Defeat Elite Four Lance in VS mode to unlock",
    defeatLanceToUnlockMenu: "Defeat Elite Four Lance in VS to unlock",
    defeatLusamineToUnlock: "Defeat Ultra Entity Lusamine in VS to unlock",
    deleteConfirmButton: "Yeah!",
    defeatMistyToUnlock: "Defeat Gym Leader Misty in VS mode to unlock",
    defeatPhoebeToUnlock: "Defeat Gym Leader Phoebe in VS to unlock",
    defeatEliteTrainerCynthiaToUnlock:
      "Defeat Elite Trainer Cynthia in VS to unlock",
    defeatPokemonProfessorOakToUnlock:
      "Defeat Pokemon Professor Oak in VS to unlock",
    defeatUltraEntityLusamine: "Defeat Ultra Entity Lusamine in VS to unlock",
    defeatedLabel: "Defeated: ",
    defense: "Defense",
    deleteConfirmButton: "Yeah!",
    deleteConfirm: "Are you sure you want to delete all data forever?",
    deleteTag: "remove-tag-menu",
    deleteTagConfirm:
      '<div id="remove-tag-menu" style="display:flex; flex-direction:column">Are you sure you want to delete this tag? It will be removed from all Pokemon</div>',
    dex: "Dex",
    dictAbilityUnobtainable: "This ability is currently unobtainable :(",
    dictionary: "Dictionary",
    difficulty: "Difficulty: ★",
    difficulty2: "Difficulty: ★★",
    difficulty3: "Difficulty: ★★★",
    difficulty4: "Difficulty: ★★★★",
    disableBraveShield: "Disable brave shield to properly run the page!",
    disabled: "disabled",
    disclaimerLegal1:
      "All characters and related intellectual property featured are the exclusive property of Nintendo, Creatures Inc., and The Pokemon Company.",
    disclaimerLegal2:
      "Any use of assets is solely for non-commercial and entertainment purposes. No ownership is claimed, and all rights remain with their respective owners",
    disclaimerPlayOfficial: "Go play the official games!",
    discord: "Discord",
    divisionAndBelow: "division and below only",
    divisionAndBelowOnly: "division and below only",
    divisionFilter: "division",
    divisionRestrictionError:
      "One or more Pokemon in the current team do not meet the division restrictions of the current league",
    divisionRestrictionsNotMet:
      "One or more Pokemon in the current team do not met the division restrictions of the current league",
    dragDecor: "Drag and drop the selected decor to apply",
    dungeons: "http://www.w3.org/2000/svg",
    dungeonsHeader: "Dungeons",
    dungeonsHelp:
      "Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons rotate every day aswell",
    dungeonsTab: "Dungeons",
    editTeamName: "Edit team name",
    eggMoveDesc:
      "<br><br>This is an Egg Move. Egg moves can be learnt with genetics when using this Pokemon as a host, using a sample that knows said egg move (usually in the form of Signature moves), at regular move transfer odds",
    eggMoveInherited:
      '<div style="filter:hue-rotate(0deg)">◇ Move inherited: ${format(moveID)}!</div>',
    eggMoveLabel:
      '<div id="inpect-pkmn-signature" style="box-shadow: none; outline:none"> <svg style="margin: 0 0.3rem; opacity:0.8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="SVGVlQBebkA"><g fill="none"><path fill="#555555" fill-rule="evenodd" stroke="#fff" stroke-width="4" d="M24 44c10.252 0 16-6.954 16-18S31.132 4 24 4S8 14.954 8 26s5.748 18 16 18Z" clip-rule="evenodd"/><path fill="#fff" d="M21 38a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path fill="#fff" fill-rule="evenodd" d="M16 29.668a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGVlQBebkA)"/></svg> Egg Move: ${format(pkmn[ttdata].eggMove.id)} </div>',
    eggMoveOf: "and as Egg Move of {pokemon}",
    eggMoveRestrictionError:
      "Multiple identical Egg Moves cannot exist in the same team if the Pokemon does not have this move as an inherent Egg Move or Signature Move",
    eggMoveRule:
      "Multiple of the same Egg Move cannot exist on the same team if the host does not have said move as an inherent Egg Move",
    elementNotFound: "Element with id 'text-data-raw' not found",
    elite: "Elite",
    enabled: "enabled",
    errorLoadingData: "Error loading data.",
    errorLoadingDataPrefix: "Error loading data: ",
    eventAetherTakeover: "Aether Takeover",
    eventAncientsAwoken: "Ancients Awoken",
    eventPrimevalWilds: "Primeval Wilds",
    eventReturnToKanto: "Return to Kanto",
    eventScienceFuture: "Science Future",
    eventSinnohExpedition: "Sinnoh Expedition",
    eventTagCollection: "Collection ◈",
    eventTagTier1Raid: "Tier I Raid ❖",
    eventTagTier2Raid: "Tier II Raid ❖",
    eventTagTier3Raid: "Tier III Raid ❖",
    eventTagTier4Raid: "Tier IV Raid ❖",
    eventTagWildZone: "Wild Zone ✦",
    events:
      "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (The item wont be consumed if failed to defeat) that can be acquired in the collection events. All Events rotate every three days.",
    eventsDungeonTab: "Dungeons",
    eventsEventTab: "Events",
    eventsHelp:
      "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require a high-level optimized team.",
    eventsHelpFull:
      "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (The item wont be consumed if failed to defeat) that can be acquired in the collection events. All Events rotate every three days.",
    eventsMenuHeader: "Events",
    eventsTab: "Events",
    evo: "Evo",
    evolution: "Evolution",
    evolutionFilter: "evolution",
    evolutionShop: "Evolution",
    exchange: "Exchange",
    expTraining: "EXP Training",
    expandLore: "Expand Lore",
    expandLoreBtn: "Expand Lore",
    expertTrainerPrefix: "Master Trainer",
    exportData: "Export Data",
    exportReward: "Export Reward",
    factoryPokemon: "BattleFactory",
    fieldEffect:
      '<strong style="font-size:1rem; background:#725AA4; margin-left:0.2rem">+ Field Effect</strong>',
    fieldEffects: "Field Effects",
    fightAgain: "Fight Again",
    filters: "Filters",
    finish: "Finish",
    fireType: "Fire Type",
    firstSlotEmptyError: "First team slot must not be empty!",
    firstSlotNotEmpty: "First team slot must not be empty!",
    floor: "spiraling-highest-floor",
    foundInEvent: "Unlocked while all obtainable Pokemon have been caught",
    foundInWildArea: "Unlocked while all obtainable Pokemon have been caught",
    foundInWildlifePark:
      "Unlocked while all obtainable Pokemon have been caught",
    frontierHelp:
      "The Battle Frontier houses different types of challenges under a specific division restriction that rotates every three days. Trainers fought here will reset every day",
    fullScreen: "Full Screen",
    gameGuide: "Game Guide",
    gameModifiers: "Game modifiers",
    gameModifiersTitle: "Game Modifiers",
    rightClickForDetails: "Right Click/Long press to see the details",
    gems: "Gems",
    genetics:
      "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample)<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, and a chance to increase its IV's<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation<br><br>You can find more information about the specifics of genetics in the guide section",
    geneticsFinishedPrompt:
      "Operation finished!<br>Do you want to use a genetic-aiding item?",
    geneticsHelp:
      "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample). The resulting host Pokemon will have a mix of stats, IVs, nature and ability from both Pokemon.",
    geneticsHelpFull:
      "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample)<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, and a chance to increase its IV's<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation<br><br>You can find more information about the specifics of genetics in the guide section",
    geneticsWarningExtreme:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="28" d="M12 10l4 7h-8Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 10l4 7h-8Z" opacity="0"><animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"/><animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>Warning, extreme Power Cost! Only 3 out of 6 maximum IV\'s per stat will be inherited!',
    geneticsWarningHigh:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="28" d="M12 10l4 7h-8Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 10l4 7h-8Z" opacity="0"><animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"/><animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>Warning, extreme Power Cost! Only 3 out of 6 maximum IV\'s per stat will be inherited!',
    geneticsWarningVeryHigh:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="28" d="M12 10l4 7h-8Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 10l4 7h-8Z" opacity="0"><animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"/><animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>Warning, extreme Power Cost! Only 3 out of 6 maximum IV\'s per stat will be inherited!',
    getBetterAbility: "Get a better Ability",
    getBetterMovesStatDistribution:
      "Get better moves that correctly match your stat distribution (Physical/Special)",
    getBetterTypeMatchingMoves: "Get better type-matching moves",
    giveNickname: "Give it a nickname!",
    goBack: "Go back",
    goBackButton: "Back",
    goldenToBottle:
      "Your golden bottlecaps have been exchanged into bottlecaps due to frontier changes",
    goods: "Goods",
    grassType: "Grass Type",
    greatLeague: "Great League",
    guide: "Guide",
    guideAbilities: "Battle: Abilities",
    guideAbilitiesDesc:
      "Abilities are traits that a Pokemon can have. While they are randomised, some abilities can only appear on specific typings. Abilities are sorted in three categories; common, uncommon and rare<br><br>Hidden abilities are innate species-dependant traits that need to be unlocked with an Ability Capsule. Once unlocked, their effect will permanently be active alongside their other ability. Same Hidden Ability and Ability wont stack with eachother",
    guideBuffs: "Battle: Buffs and Debuffs",
    guideBuffsDesc:
      "Like status effects, increases or decreases of stats last for 3 turns by default (Except Speed decreases, which last 2)<br><br>Buffs and debuffs of the same magnitude will not stack with each other (IE x2 50% Attack Up), but different ones will (50% + 100% Attack Up)",
    guideCompatDesc:
      "Compatibility determines how similar the sample is to the host. This influences various parameters such as the chances of inherit, or shiny mutations (only if the sample is shiny)<br><br>Sharing one type with the sample will yield one level of compatibility, whereas sharing two types will increase it by two levels.<br><br>Additionally, if the sample is of the same evolutive line as the host, it will recieve maximum compatibility",
    guideCrossPower: "Battle: Cross-Power",
    guideCrossPowerDesc:
      "If a Pokemon uses a damaging move that is preceded (immediately or not) by a damaging move of a different type of the executed move, it will receive a 1.3x damage multiplier. This is indicated with a cross pattern on the move bar of the affected move",
    guideExp: "Battle: Experience",
    guideExpDesc:
      "Pokemon gain experience by defeating foes, and share a portion of it among the team. This will also be the case even if the team Pokemon are defeated<br><br>Experience gain is proportional to the level difference. A level difference of +-5 levels will net the same amount, while more than 5 levels of difference will greatly increase the amount received.<br><br>A Pokemon 10 levels higher will not yield any experience",
    guideFatigue: "Battle: Battle Fatigue",
    guideFatigueDesc:
      "Pokemon lose a very small fraction of their maximum health when attacking. This damage can be mitigated by a sum of the HP, Defense and Special Defense of the Pokemon, meaning bulkier Pokemon can battle for longer",
    guideGenetics: "Genetics: Quick Guide",
    guideGeneticsCompat: "Genetics: Compatibility",
    guideGeneticsCost: "Genetics: Power Cost",
    guideGeneticsDesc:
      "Genetics allows you to modify a Pokemon beyond what is considered normal for the species, here is a quick overview of what you can achieve with operations:<br><br>Shiny Mutation: You can inherit the shiny mutation, with a 100% chance, to members of the same family. You can also attempt to spread a new shiny mutation by using a shiny sample<br><br>IV Boosting: Simply by doing any operation, regardless of the compatibility, the IV's of the host will attempt to increase. Useful for Pokemon with little to no IV's<br><br>IV Inheriting: An advanced alternative to the previous. You can inherit IV's from a species to another depending on factors such as compatibility or genetic-aiding items used<br><br>Move Relearn: When completing an operation, all but the four selected moves of the host will be reset, meaning you can attempt to get stronger moves with each operation<br><br>Move Inheriting: An advanced alternative to the previous, you can inherit moves from the sample that would otherwise not be available to you through learning<br><br>Ability Inheriting: Using a Destiny Knot, you can swap abilities with the sample, getting access to otherwise-impossible combinations",
    guideInspectingDesc:
      "Right click/long press on most elements can give further information. You can further right click/long press on information within information.<br><br>Some elements that can be inspected include areas, trainers, moves, status effects, wild pokemon, team pokemon and items",
    guideMoves: "Battle: Moves",
    guideMovesDesc:
      "Moves are learnt every 7 levels. Moves can be switched by right click/long press on a team pokemon<br><br>Damaging moves are divided into physical and special moves<br>The category of the move determines whether the move's damage depends on the user's Attack or Special Attack stat and the target's Defense or Special Defense<br><br>Some Pokemon might have Signature Moves. Signature Moves are species-dependant moves that a Pokemon learn at level 100. Signature Moves can't be inherited through genetics, unless the host has the corresponding Egg Move<br><br>Some moves might be restricted. Only one restricted move might be equipped at a time on the active Pokemon",
    guidePowerCostDesc:
      "Power cost determines how taxing it is to modify the host. This influences the time to complete the operation<br><br>This is determined by the division of the host. A higher division will exponentially increase the time required to modify the Pokemon",
    guideShiny: "Shiny Pokemon",
    guideShinyDesc:
      "At a rate of 1/400, Pokemon can be shiny. These odds can be boosted through different means<br><br>Shiny Pokemon deal 15% more damage. The visual distinction can be toggled from their move menu. This wont affect the damage bonus they get<br><br>Shiny Pokemon do not carry over their evolutions. Instead, genetics must be used.<br><br>If the stars align, a shiny pokemon can receive a star sign, an even rarer pigmentation. This does not have any practical benefit, and can't be inherited or mutated trough genetics",
    guideStab: "Battle: STAB",
    guideStabDesc:
      "If a Pokemon uses a damaging move that has the same type as one of that Pokemon's types, the move's damage is increased by x1.5<br>This is known as same-type attack bonus, or STAB<br><br>Furthermore, Pokemon with a single typing will receive +0.2 extra STAB damage",
    guideStats: "Battle: Stats",
    guideStatsDesc:
      "Each species of Pokemon share the same base stats that determine the actual stats of a Pokemon at a given level<br><br>Stats determine how much damage they deal and receive (see Battle: Moves). The speed stat determines how fast a Pokemon executes a move<br><br>Individual Values, or IV's, multiply base stats, and can be increased by getting multiple copies of Pokemon<br><br>Depending on their base stats, a Division will be asigned to them. You might use this Division letter to quickly assess which Pokemon can perform better on the short term",
    guideStatus: "Battle: Status Effects",
    guideStatusDesc:
      "Certain moves inflict Status Effects such as Confused, Burn, Poisoned, Freeze, Paralysis or Sleep.<br><br>You can further check their effects by right click/long press<br><br>Status Effects, like temporal stat changes, will count down with turns. You can only apply one Status Effect at a time. They last for 3 turns by default (Except Paralysis)",
    guideWeather: "Battle: Weather",
    guideWeatherDesc:
      "Certain moves can change the weather to altered ones such as Sunny, Rainy, Sandstorm, Hail, Foggy, Electric Terrain, Grassy Terrain, Misty Terrain, Trick Room, Weird Room, Cross Room, Light Screen or Safeguard<br><br>You can further check their effects by right click/long press<br><br>Altered weathers will last for 15 turns, and only can be changed after 30",
    haTraining: "Hidden Ability Training",
    hardMode: "Hard Mode",
    hardModeHelp: "Trainers have double HP. Only applies to VS Trainers",
    hasBeenUnlocked: "has been unlocked!",
    hasBeenUnlocked2: "has been unlocked!",
    hasEggMove: "has egg move",
    hasLearnt: "has learnt {moves}!",
    hasRibbon: "has ribbon",
    hasSignature: "has signature",
    hasStarSign: "has star sign",
    health: "Health",
    held: "Held",
    helpBattleArenaDesc:
      "The Battle Arena features five trainers in which you can select their difficulty for higher rewards. Field effects and battle modifiers will also be randomized alongside the trainers. Trainers fought here will reset every day.",
    helpBattleArenaTitle: "Battle Arena",
    helpBattleFactoryDesc:
      "The Battle Factory is a challenge in which your goal is to deal the maximum amount of damage. Every turn you will take fixed damage and status effect damage is disabled.<br><br>Every time you enter the factory, your score will reset, but you can try as many times as you'd like.<br><br>Your highest reached score will be saved, and reset when the league rotation changes. You will be rewarded for your highest score reached at the end of the battle.<br><br>There is a maximum of 100 Golden Bottlecaps achievable.",
    helpBattleFactoryTitle: "Battle Factory",
    helpCurryDesc:
      "Every 12h, you can select up to three abilities to be active for your entire team during raids for 1 hour. These abilities follow the same rules as normal abilities and do not stack with existing ones.",
    helpCurryTitle: "Curry",
    helpCustomChallengesDesc:
      "Create custom battles from your own pools and enemy teams. Import and export challenge codes to share them.",
    helpCustomChallengesTitle: "Custom Challenges",
    helpDimensionDesc:
      "Welcome, brave trainer, to the final frontier, the Mega-Dimension, which houses only the most powerful Pokemon in the entire universe!<br><br>Each wormhole has its own rules, with unique areas, field effects and abilities. In addition to field effects, abilities will trigger during the boss fight.<br><br>The Pokemon appearing in the rift are random and will change with each rotation.",
    helpDimensionTitle: "Mega Dimension",
    helpDungeonsDesc:
      "Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons also change every day.",
    helpDungeonsTitle: "Dungeons",
    helpEventsDesc:
      "Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (the item won't be consumed if failed), which can be acquired in the collection events. All Events change every three days.",
    helpEventsTitle: "Events",
    helpFrontierDesc:
      "The Battle Frontier houses different types of challenges under a specific division restriction that rotates every three days. Trainers fought here will reset every day.",
    helpFrontierTitle: "Battle Frontier",
    helpGeneticsDesc:
      "With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample).<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, and a chance to increase its IV's.<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation.<br><br>You can find more information about the specifics of genetics in the guide section.",
    helpGeneticsTitle: "Genetics",
    helpMainChallengesDesc:
      "Story battles and selected challenges can be found here. More Main Challenges are coming soon.",
    helpMainChallengesTitle: "Main Challenges",
    helpModAfkDesc:
      "Fatigue damage is reduced by 3.<br><br>This modifier has no side effects.",
    helpModAfkTitle: "Longer AFK",
    helpModHardDesc: "Trainers have double HP. Only applies to VS Trainers.",
    helpModHardTitle: "Hard Mode",
    helpModNoIvsDesc:
      "All your Pokemon functionally have max IVs regardless of their real IVs. This can be disabled without any permanent change.<br><br>This modifier has no side effects.",
    helpModNoIvsTitle: "No IVs",
    helpModNuzlockeDesc:
      "If one of your Pokemon is knocked out while fighting a VS Trainers trainer, it will become permanently unusable until you disable this mode.",
    helpModNuzlockeTitle: "Nuzlocke Mode",
    helpPokerusDesc:
      "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial and will add one level of compatibility to the Pokemon in genetics when used as a host.",
    helpPokerusTitle: "Pokerus",
    helpSearchDictionaryTitle: "Keywords",
    helpSearchPokedexTitle: "Keywords",
    helpSettingTitle: "Setting",
    helpSettingTitleAlt: "Setting",
    helpSettingsAlternateWildDesc:
      "Decrease the current wild area rotation by -1. Useful if you missed yesterday's rotation, or if your schedule does not match the game's.",
    helpSettingsNewPkmnDesc:
      "Automatically hides obtained Pokemon that are not new after a battle. Excluded from this setting: new Pokemon, IV upgrades and shinies.",
    helpSpiralDesc:
      "The Battle Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances.<br><br>Every time you enter the tower, you will start from floor 1, but you can try as many times as you'd like.<br><br>Your highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle.<br><br>There is a maximum of 100 Golden Bottlecaps achievable.",
    helpSpiralTitle: "Battle Tower",
    helpTrainingDesc:
      "Challenge your Pokemon against waves of foes to get stronger. You will naturally have typing advantage against Pokemon fought, and their level will scale to yours. Type Immunities inside training are converted to resistances.<br><br>Failing a training will yield no gains.",
    helpTrainingTitle: "Training",
    helpVsTrainersDesc:
      "Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as you progress.",
    helpVsTrainersTitle: "VS Trainers",
    helpWildAreasDesc:
      "All Pokemon in wild areas can be caught by defeating them. Wild areas change every day, so don't forget to check what can be caught today!",
    helpWildAreasTitle: "Wild Areas",
    hiddenAbilityDesc:
      "<br><br>This is a Hidden Ability. Hidden abilities are unlocked via Ability Capsules or via Training, and they work alongside your regular ability",
    hiddenAbilityExplanation:
      "<br><br>This is a Hidden Ability. Hidden abilities are unlocked via Ability Capsules or through Training, and they work alongside your regular ability.",
    hiddenAbilityOf:
      "This ability can only appear as Hidden Ability of {pokemon}",
    hideNonNew: "Hide non-new Pokemon got in summary:",
    highestFloor: "spiraling-highest-floor",
    highestReachedFloorLabel: "Highest Reached Floor: ",
    highestScore: "Highest Score: ",
    highestSpiralingTowerFloor: "tower1",
    howAboutBattleFrontier: "How about the Battle Frontier?",
    howManyWillYouBuy: "How many will you buy?",
    howdy: "Howdy! I have been assigned to show the ropes",
    hpBst: "hp BST",
    hpIv: "hp IV's",
    hpIvIncreased:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    hpIvInherited:
      '<div style="filter:hue-rotate(200deg)">❖ Speed Iv\'s inherited!</div>',
    hpRemainingLabel: "HP Remaining: ",
    hpTotal: "hp Total",
    importData: "Import Data",
    improvePokemonPrompt: "Try to improve your Pokemon further:",
    inBag: "${item[ttdata].got} in bag",
    inTotal:
      '${returnItemLevel(ttdata,"stars")}<br>${item[ttdata].got} in total ${returnItemLevel(ttdata,"left")}',
    increasedStat: "Increased ${parts[0]}!",
    increasedStats: "Increased ${parts[0]}!",
    inheritAtk: "% to inherit sample's Attack Iv's",
    inheritDef: "% to inherit sample's Defense Iv's",
    inheritHp: "% to inherit sample's HP Iv's",
    inheritMove: "% to inherit a move from the sample",
    percentForShinyMutation: "% for shiny mutation",
    inheritSAtk: "% to inherit sample's S. Attack Iv's",
    inheritSDef: "% to inherit sample's S. Defense Iv's",
    inheritSpe: "% to inherit sample's Speed Iv's",
    inspecting: "Inspecting",
    isNowLevel: "is now level",
    isShiny: "is shiny",
    itemCurrentlyUnobtainable:
      "<span>This item is currently unobtainable</span>",
    itemExportReward: "<span>Obtained via Export Reward</span>",
    itemShopPurchase: "<span>Can be purchased in the Poke-Mart</span>",
    itemSpiralingReward: "<span>Reward from Spiraling Tower</span>",
    itemUnobtainable: "<span>This item is currently unobtainable</span>",
    itemWillBeConsumed: "The item will be consumed on use",
    items: "Items",
    itemsRotationTimer:
      '\n    <svg style="scale:0.7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="450s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="37.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>\n    Available items will change in <font style="margin-left:0.3rem" class="time-counter-daily">...</font>',
    ivStats: "IV's Stats",
    ivTraining: "IV Training",
    ivsUp: "<span>Iv's Up!</span>",
    ivsUpAlt: "<span>IVs + !</span>",
    key: "Key",
    keywords: "Keywords",
    keywordsPokedexHelp:
      "Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Keywords:<br>shiny, pokerus, signature, eggMove, [type], [ability], [hidden ability], [level], [move]<br>ivsum(< = >)[number]: Check sum of IVs (IE: ivsum<36)",
    keywordsDictionaryHelp:
      "Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Pokemon Keywords:<br>unobtainable, wild, park, event, frontier, mart, shiny, caught, signature, eggMove, [type], [hidden ability]<br><br>Move/Ability Keywords:<br>physical, special, signature, [type], [ability]",
    language: "English",
    lastTurnsBeforeFainting:
      "This Pokemon can last {turns} turns before fainting from battle fatigue with max IVs",
    learnableByTypes: "Learnable by {types} types {signature}",
    learnt: "${format(saved.trainingPokemon)} learnt ${format(learntMove)}!",
    learntMoves: "Learnt Moves",
    leaveCombat: "Leave Combat",
    leftForNextLevel: "(${left} left for next level)",
    letsDoIt: "Let's do it!",
    levelAbbreviation: "Level ",
    levelAbbreviationShort:
      '${nickname} ${nameTag} <span style="color:#FF4671;">✦</span> <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[ currentTeam[i].pkmn ].level}</span>',
    levelFilter: "level",
    levelLabel: "Level ${poke.level}",
    lightTheme: "Light Theme",
    lilacTheme: "Lilac Theme",
    limited:
      '<div onclick="shopCategory = \'limited\'; updateItemShop() "><img src="img/items/cherishball.png">Limited</div>',
    limitedAreaUntil:
      "Limited Area Until ${saved.temporalSeason.end.month}/${saved.temporalSeason.end.day}",
    littleCup: "Little Cup",
    load: "Load",
    loadButton: "Load",
    lockedHa: "locked HA",
    longerAFK: "Longer AFK",
    longerAFKHelp:
      "Fatigue damage is reduced by 3.<br><br>There are no side effects to this modifier.",
    lvl: '<span style="display:flex; white-space:nowrap">lvl ${pkmn[i].level} ${nameMarks}</span><img style="filter:hue-rotate(${starsign[pkmn[i].starsign].hue}deg)" class="sprite-trim" src="img/pkmn/sprite/${i}.png">',
    mainChallenges: "Main Challenges",
    mainChallengesHelp:
      "Story battles and selected challenges can be found here. More Main Challenges are coming soon.",
    masterDifficulty: "Master",
    masterLeague: "Master League",
    masterTrainerPrefix: "Master Trainer",
    maxLevelReached: "(max level reached)",
    megaDimension: "Mega Dimension",
    megaDimensionHelp:
      "Welcome brave trainer to the final frontier, the Mega-Dimension, which houses only the most powerful Pokemon in the entire universe. These are formidable enemies that usually require a high-level optimized team.",
    memo: "Memo",
    memory: "Memory",
    metronomeCasts: "Metronome casts: ",
    modifyGenetics: "Modify stats with Genetics",
    modifyStatsWithGenetics: "Modify stats with Genetics",
    moveBasePower:
      '</span><strong>(${move[moveId].power} BP, ${format(move[moveId].split)})</strong><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">',
    moveInherited:
      '<div style="filter:hue-rotate(0deg)">◇ Move inherited: ${format(moveID)}!</div>',
    moves: "Moves",
    movesTransferred:
      '<div style="filter:hue-rotate(-200deg)">★ Moves transferred!</div>',
    multipleZCrystals: "Multiple Z-Crystals cannot be equiped in a single team",
    multipleZCrystalsError:
      "Multiple Z-Crystals cannot be equipped in the same team",
    mysteryGift: "Mystery Gift",
    mysteryGiftClaimUntil:
      '${mysteryGift.info}<br>You have until ${mysteryGift.duration.toLocaleString("en-US", {month: "long",day: "numeric"})} to claim',
    mysteryGiftInfo:
      "Long Press/Right click the present below to receive a gift Kecleon!<br>It will be shiny and carrying a Souvenir Ribbon",
    mysteryGiftUntil: "You have until",
    natureSuffix:
      '<span class="nature-text">${format(pkmn[ttdata].nature)} nature</span>',
    divisionLabel: "division",
    or: "or",
    and: "and",
    new: "<span>New!</span>",
    newAbility:
      '<div style="filter:hue-rotate(-50deg)">★ New ability: ${format(newAbility)}!</div>',
    newAbilityTitle: "New ability!",
    newItems: "New Items!",
    updateAvailableBanner: "A new update is available! Click here to reload.",
    newItemsDue:
      "Due to the vs rewards update you have been rewarded for your defeated trainers:",
    newPokemon: "New Pokemon!",
    newPokemonTag: "<span>New!</span>",
    newPokemonTagAlt: "<span>New!</span>",
    nextRewardAt: "Next reward at {score} score",
    noAdditionalEffects: "No additional effects",
    noDataFoundInInput: "No data found in the input",
    noDataInInput: "No data found in the input",
    noIVs: "No IVs",
    noIVsHelp:
      "All your Pokemon functionally have max IVs regardless of their real IVs. This can be disabled without permanent consequence",
    noMoreRewards: "No more rewards available. Maybe try getting a hi-score?",
    noMovesToRemember: "No new moves to remember",
    noNewGeneticChanges:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    noNewItems: "No new items or Pokemon :(",
    noNewItemsOrPokemon: "No new items or Pokemon :(",
    noNewMoves: "No new moves to remember",
    noSaveData: "No save data found",
    noTagsCreateFirst: "No tags created yet. Create your first tag above!",
    noTagsCreated: "No tags created yet. Create your first tag above!",
    noTagsCreatedShort: "No tags created",
    nope: "cursor:pointer; font-size:2rem; width:40%",
    notEvolvedAll: "not evolved (all)",
    notEvolvedLevel: "not evolved (level)",
    notShiny: "not shiny",
    notYetImplemented: "Not yet implemented",
    nothingButTimeLost: "Nothing but time will be lost",
    novice: "Novice",
    nowHas:
      "${format(saved.trainingPokemon)} now has ${format(pkmn[saved.trainingPokemon].hiddenAbility.id)}!",
    nowHasNature: "now has a",
    nuzlockeMode: "Nuzlocke Mode",
    nuzlockeRestrictionError:
      "One or more Pokemon in the current team cannot be used as per Nuzlocke restrictions",
    nuzlockeRestrictions:
      "One or more Pokemon in the current team cannot be used as per Nuzlocke restrictions",
    nuzlokeMode: "Nuzloke Mode",
    nuzlokeModeHelp:
      "If one of your Pokemon is knocked out while fighting a VS Trainers trainer, it will become permanently unusable until you defeat the Elite Four",
    obtainedBattleFrontierRandom:
      "Unlocked while all obtainable Pokemon have been caught",
    obtainedInEvent: "Unlocked while all obtainable Pokemon have been caught",
    obtainedViaExportReward: "<span>Obtained via Export Reward</span>",
    oledTheme: "Oled Theme",
    onHPBarDepleted: "On HP bar Nº{number} depleted",
    oneBatonPassOnly: "You can only have one Baton Pass in your team",
    onlyTimeLost: "Only time will be lost",
    onyxTheme: "Onyx Theme",
    operationFinished:
      "Operation finished!<br>Do you want to use a genetic-aiding item?",
    operationOverview: "Operation Overview",
    paste: "Paste",
    pasteButton: "Paste",
    payAndCook:
      'Pay and cook ({price} <img src="img/items/goldenBottleCap.png">)',
    permanentSeasonalTheme: "Permanent Seasonal Theme",
    pickDifficultyNextTrainer: "Choose a difficulty for the next trainer",
    pleaseEnterTagName: "Please enter a tag name",
    pleaseSelectIcon: "Please select an icon",
    point: "point",
    points: '${stat} ${n} point${n > 1 ? "s" : ""}',
    pokeMart: "Poke-Mart",
    pokemon: "Pokemon",
    pokemonCannotBeCaughtStage:
      "Unlocked while all obtainable Pokemon have been caught",
    pokemonShop: "Pokemon",
    shop: "Shop",
    shopHelp:
      "Buy useful items with Bottle Caps and Golden Bottle Caps. The item rotation changes daily.",
    pokemonUnobtainable:
      "Unlocked while all obtainable Pokemon have been caught",
    pokerus:
      "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial, and will add one level of compatibility to the Pokemon in genetics when used as a host",
    pokerusBoost:
      "Pokerus detected on the host! Genetic compatibility is increased by one level!",
    pokerusHelp:
      "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial and will add one IV level to one of the infected Pokemon's stats. You can keep up to 10 Pokemon in the Pokerus Box.",
    pokerusHelpFull:
      "Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial, and will add one level of compatibility to the Pokemon in genetics when used as a host",
    powerCost: "Power Cost",
    powerLabel:
      "${move[ttdata].power} Power, ${format(move[ttdata].split)}${affectedText}",
    raidAbilities:
      "During raids: Gained the next abilities for everyone in your team:",
    raidAbilitiesGained:
      "During raids: Temporarily gained the next abilities for everyone in your team:",
    currySelectIngredients: "Select ingredients to add to the curry! [5/5]",
    selectPokemonToTeachHydroPump: "Select a pokemon to teach Hydro Pump",
    thanksForDialga: "Thanks for the Dialga!",
    randomPokemonEvery12h: "Every 12h you might receive a random pokemon",
    rare: "rare",
    rareAbility: "Rare Ability<br>${ability[ttdata].info()}",
    rareExcl:
      'Rare!',
    rareParen: "(Rare)",
    rarityCommon: "(Common)",
    rarityRare: "(Rare)",
    rarityUncommon: "(Uncommon)",
    reachMinScore: "Reach a minimum score of {X} in order to get rewards",
    reachMinimumScore:
      "Reach a minimum score of {score} in order to get rewards",
    reflectDesc: "Reduces physical attack damage by 75%",
    remaining: "training-indicator-counter",
    remove: "Remove",
    removeDecor: "Remove decor",
    removeStarSign: "Remove star sign",
    repeatedEggMoves: "Repeated Egg Moves",
    requiresAn: "Requires an {item}",
    requiresItemToEnter: "Requires an {item} to enter",
    requiresTicket: "Requires an {item} Auto-Refight Ticket",
    reset: "Reset",
    restaurant: "Restaurant",
    restrictedAction: "Restricted Action",
    restrictedActionDesc: "Moves cannot be freely changed at the moment",
    restrictedActionTitle: "Restricted Action",
    restrictedMove: "Restricted Move",
    restrictedMoveDesc:
      "Restricted moves cannot be freely changed during battle",
    restrictedMoveInfo:
      "<br>This move is restricted (${restrictedIcon}) and only one of them can be present in the active moves at a time",
    restrictedMoveTitle: "Restricted Move",
    restrictedMoves: "Restricted Moves",
    restrictedMovesEquipped:
      "One or more Pokemon in the current team have multiple restricted moves ({icon}) equipped",
    restrictedPokemon: "Restricted Pokemon",
    restrictedZMoves: "Restricted Z-Moves",
    returnToKanto: "Return To Kanto",
    returnToKantoBanner: "- Return To Kanto -",
    rewardFromSpiralingTower: "<span>Reward from Spiraling Tower</span>",
    rewardLabel: "Reward",
    rewardReceived: "Reward received",
    rewardsAutoAdded: "Rewards have been automatically added",
    rotationHeader: "Rotation",
    ribbonFilter: "ribbon",
    rightClickKeywords: "Right Click/Long Press to see keywords",
    rightClickKeywords2: "Right Click to see keywords",
    rightClickLongTapFieldDetails:
      "(Right click / long press to see field effect details)",
    rookieTrainerPrefix: "Master Trainer",
    roomCrossDesc: "Increases damage dealt by cross-power moves by 30%",
    roomTrickDesc:
      "Slow Pokemon become fast, fast Pokemon become slow. Additionally, multiplies damage based on the Pokemon's original slowness, from x1.0 to x1.5",
    roomWeirdDesc: "Copies all of the enemy's Attack and Defense base stats",
    rotationLabel: "Rotation: {current}/{max}",
    safeguardDesc: "Protects your team from status effects and stat reductions",
    satkBst: "satk BST",
    satkIv: "satk IV's",
    satkIvIncreased:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    satkIvInherited:
      '<div style="filter:hue-rotate(200deg)">❖ Speed Iv\'s inherited!</div>',
    satkTotal: "satk Total",
    saveAndExit: "Save and exit",
    saveAndGo: "Save and Go!",
    saveChanges: "Save Changes",
    saveCodeCopy: "Copy",
    saveCodeDescription:
      "This is your savefile code<br>You can copy or paste savefile codes here to export or import saves<br>",
    saveCodeDescriptionNoData:
      "You can copy or paste savefile codes here to export or import saves<br>",
    saveCodeLoad: "Load",
    saveCodePaste: "Paste",
    saveTag: "Save Tag",
    saveTagButton: "Save Tag",
    savefileCodeExplanation:
      "This is your savefile code<br>You can copy or paste savefile codes here to export or import saves<br>",
    savefileCodeExplanationShort:
      "You can copy or paste savefile codes here to export or import saves<br>",
    scoreLabel: "Score: {score}",
    screenLightDesc:
      "Super-effective damage dealt to your team is reduced to neutral",
    sdefBst: "sdef BST",
    sdefIv: "sdef IV's",
    sdefIvIncreased:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    sdefIvInherited:
      '<div style="filter:hue-rotate(200deg)">❖ Speed Iv\'s inherited!</div>',
    sdefTotal: "sdef Total",
    seasonListContainer:
      '<div id="season-list" style="display:flex; justify-content:center;align-items:center;flex-direction:column; gap:0.5rem"></div>',
    seasonalEventPrompt:
      "Select the seasonal event to start. It will last for 10 days, then be replaced by currently ongoing events once finished.",
    selectAnEvent: "Select an event",
    selectAtLeastOneIngredient: "Select at least one ingredient first",
    selectHostPokemon: "Select a host Pokemon",
    selectIconLabel: "Select an icon",
    selectIngredients: "Select ingredients to add to the curry!",
    selectIngredientsCurry:
      "Select ingredients to add to the curry! [{count}/3]",
    selectMoveReplace:
      "Select a move below and replace it with one of the list of learnt moves",
    selectMoveToRemember: "Select move to remember",
    selectPokemonAddTeam: "Select a Pokemon to add to the team",
    selectPokemonForTeam: "Select a Pokemon to add to the team",
    selectPokemonTeach: "Select a pokemon to teach",
    selectPokemonToTeach:
      "Select a Pokemon to teach ${format(item[i].ability)}",
    selectPokemonToTrain: "Select a Pokemon to train",
    selectPokemonToUseItem: "Select a Pokemon to use the ${format(i)}",
    selectPokemonUseItem: "Select a Pokemon to use the",
    selectSamplePokemon: "Select a sample Pokemon",
    selectSeasonalEvent:
      "Select the seasonal event to start. It will last for the 10 following days, and will get replaced by currently-ongoing or upcoming official holidays.",
    selectStarter: "Select a starter!",
    setting: "Setting",
    settings: "Settings",
    settingsAlternateWildHelp:
      "Decrease the current Wild Areas rotation by -1. Useful if you missed yesterday's rotation, or if your schedule does not match the game's.",
    settingsNewPkmnHelp:
      "Automatically hides obtained Pokemon that are not new after a battle. Excluded from this setting: New Pokemon, IV Upgrades and Shinies.",
    shiny: "<span>✦Shiny✦!</span>",
    shinyFilter: "shiny",
    starSignUnlockInfo:
      "Star signs are unlocked for all the evolutive family as long as they are shiny",
    shinyMutation:
      '<div style="filter:hue-rotate(100deg)">✦ Shiny Mutation!</div>',
    shinyTag: "<span>✦Shiny✦ !</span>",
    shopApricornRotation: "The available items will change in",
    shopDecorRotation: "The available decor will change in",
    shopGoBack: "Go Back",
    shopNameAetherKeycardX25: "Aether Keycard x25",
    shopNameAncientKeystoneX25: "Ancient Keystone x25",
    shopNameAncientOrchidX25: "Ancient Orchid x25",
    shopNameBarbaraciteX21: "Barbaracite x21",
    shopNameBottleCapX2: "Bottle Cap x2",
    shopNameBottleCapX5: "Bottle Cap x5",
    shopNameEpochFeatherX25: "Epoch Feather x25",
    shopNameFalinksiteX21: "Falinksite x21",
    shopNameFutureDiskX25: "Future Disk x25",
    shopNameHawluchaniteX21: "Hawluchanite x21",
    shopNamePermanentSeasonalTheme: "Permanent Seasonal Theme",
    shopNamePyroariteX21: "Pyroarite x21",
    shopNameTimeCandyX3: "Time Candy x3",
    shopNameWisdomPetalX25: "Wisdom Petal x25",
    shopStock: "(Stock: ${shop[i].stock})",
    sigMoveTraining: "Signature Move Training",
    levelTraining: "Level Training",
    moveTraining: "Move Training",
    natureTraining: "Nature Training",
    signatureFilter: "signature",
    signatureMove: "Signature Move",
    signatureMoveDesc:
      "<br><br>This is an Egg Move. Egg moves can be learnt with genetics when using this Pokemon as a host, using a sample that knows said egg move (usually in the form of Signature moves), at regular move transfer odds",
    signatureMoveLabel:
      '<div id="inpect-pkmn-signature" style="box-shadow: none; outline:none"> <svg style="margin: 0 0.3rem; opacity:0.8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><defs><mask id="SVGVlQBebkA"><g fill="none"><path fill="#555555" fill-rule="evenodd" stroke="#fff" stroke-width="4" d="M24 44c10.252 0 16-6.954 16-18S31.132 4 24 4S8 14.954 8 26s5.748 18 16 18Z" clip-rule="evenodd"/><path fill="#fff" d="M21 38a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path fill="#fff" fill-rule="evenodd" d="M16 29.668a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGVlQBebkA)"/></svg> Egg Move: ${format(pkmn[ttdata].eggMove.id)} </div>',
    signatureMoveOf:
      "This ability can only appear as Signature Move of {pokemon}",
    signed: "<span>☉Signed☉!</span>",
    signedTag: "<span>☉Signed☉ !</span>",
    singleBatonPassError: "You can only have one Baton Pass in your team",
    sortFilter: "sort",
    spawnLocationArceus:
      "Unlocked once all obtainable Pokemon have been caught",
    spawnLocationFrontier:
      "<span>Obtained as random reward in the Battle Frontier</span>",
    spawnLocationMart: "Can be purchased in the Poke-Mart",
    spawnLocationUncatchableStage:
      "This Pokemon cannot be caught at its current stage",
    spawnLocationUnobtainable: "This Pokemon is unobtainable",
    spawnLocationWildlifePark:
      "<span>Found randomly in the Wildlife Park wild area</span>",
    speBst: "spe BST",
    speIv: "spe IV's",
    speIvIncreased:
      '<div style="filter:hue-rotate(250deg)">◆ Speed Iv\'s increased!</div>',
    speIvInherited:
      '<div style="filter:hue-rotate(200deg)">❖ Speed Iv\'s inherited!</div>',
    speTotal: "spe Total",
    specialAttack: "Special Attack",
    specialDefense: "Special Defense",
    specialNoShiny:
      "This Pokemon is marked as Special, and cannot receive shiny mutations through genetics!",
    speed: "Speed",
    spiralHelp:
      "The Battle Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances\n\nEvery time you enter the tower, you will start from floor 1, but you can try as many times as you'd like\n\nYour highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle\n\nThere is a maximum of 100 Golden Bottlecaps achievable",
    spiralTypeRotation: "Current Type Rotation: ",
    start: "Start",
    statAtk: "Attack",
    statAttack: "Attack",
    statDef: "Defense",
    statDefense: "Defense",
    statHealth: "Error trimming sprite:",
    statHp: "You already have the maximum possible IVs",
    statSatk: "Sp. Attack",
    statSdef: "Sp. Defense",
    statSpe: "Speed",
    statSpecialAttack: "Special Attack",
    statSpecialDefense: "Special Defense",
    statSpeed: "Speed",
    statusBurnDesc:
      "Reduces physical Attack by 50% and deals damage every turn",
    statusConfusedDesc: "50% chance that moves cannot deal damage",
    statusEmbargoDesc:
      "Prevents the enemy from using the move in the slot where Embargo was used",
    statusFreezeDesc: "Moves cannot deal damage",
    statusParalysisDesc:
      "25% chance that moves cannot deal damage and Speed is reduced by 75%",
    statusPoisonDesc:
      "Reduces Special Attack by 50% and deals damage every turn",
    statusSleepDesc: "Moves cannot deal damage",
    subtractRotation: "Sustract 1 to current Wild Area rotation:",
    switchShiny: "Switch shiny",
    switchLang: "Switch to French",
    tagBurn: "Burn",
    tagColorLabel: "Tag Color",
    tagConfused: "Confused",
    tagCrossRoom: "Cross Room",
    tagElectricTerrain: "Electric Terrain",
    tagEmbargo: "Embargo",
    tagFilter: "tag",
    tagFoggy: "Foggy",
    tagFreeze: "Freeze",
    tagGrassyTerrain: "Grassy Terrain",
    tagHail: "Hail",
    tagHidden: "hidden",
    tagLabel: "Tag:",
    tagLightScreen: "Light Screen",
    tagMistyTerrain: "Misty Terrain",
    tagName: "Tag Name",
    tagNameLabel: "Tag Name",
    tagNamePlaceholder: "Enter tag name...",
    tagNone: "none",
    tagParalysis: "Paralysis",
    tagPoisoned: "Poisoned",
    tagRainy: "Rainy",
    tagRare: "Rare!",
    tagRareItems: "Rare!",
    tagSafeguard: "Safeguard",
    tagSandstorm: "Sandstorm",
    tagSleep: "Sleep",
    tagSunny: "Sunny",
    tagTrickRoom: "Trick Room",
    tagUncommon: "Uncommon",
    tagUncommonExclaim: "Uncommon!",
    tagUncommonItems: "Uncommon",
    tagWeirdRoom: "Weird Room",
    tags: "Tags",
    team: "Team",
    teamSlotPrefix: "#{number}",
    team1: "Team 1",
    team10: "Team 10",
    team11: "Team 11",
    team12: "Team 12",
    team13: "Team 13",
    team14: "Team 14",
    team15: "Team 15",
    team16: "Team 16",
    team17: "Team 17",
    team18: "Team 18",
    team19: "Team 19",
    team2: "Team 2",
    team20: "Team 20",
    team21: "Team 21",
    team22: "Team 22",
    team23: "Team 23",
    team24: "Team 24",
    team25: "Team 25",
    team26: "Team 26",
    team27: "Team 27",
    team28: "Team 28",
    team29: "Team 29",
    team3: "Team 3",
    team30: "Team 30",
    team4: "Team 4",
    team5: "Team 5",
    team6: "Team 6",
    team7: "Team 7",
    team8: "Team 8",
    team9: "Team 9",
    teamPreview: "Team Preview",
    terrainElectricDesc:
      "Increases damage of Electric and Steel-type moves by 50%",
    terrainGrassyDesc: "Increases damage of Grass and Bug-type moves by 50%",
    terrainMistyDesc: "Increases damage of Fairy and Psychic-type moves by 50%",
    textDataRawNotFound: "Element with id 'text-data-raw' not found",
    thanksForPokemon: "Thanks for the",
    themeLabel: "Theme:",
    themeSpooky: "spooky",
    thisIsYourSavefileCode: "This is your savefile code...",
    tierIRaid:
      '<strong style="filter:hue-rotate(100deg)" class="event-tag">Tier IV Raid ❖</strong>',
    tierIiRaid:
      '<strong style="filter:hue-rotate(100deg)" class="event-tag">Tier IV Raid ❖</strong>',
    tierIiiRaid:
      '<strong style="filter:hue-rotate(100deg)" class="event-tag">Tier IV Raid ❖</strong>',
    tierIvRaid:
      '<strong style="filter:hue-rotate(100deg)" class="event-tag">Tier IV Raid ❖</strong>',
    timeHMS: "${h}h ${m}m ${x}s",
    timeLeft: "Time left: {time}",
    timeToComplete: "Time to complete operation",
    timedEncounterDesc:
      "This is a timed encounter. Your damage will be carried on between fights. Additionally, items needed to enter will be consumed regardless if you defeat the Pokemon or not",
    timedEncounterWarning:
      "This encounter is timed. Your damage will be carried over between battles. Additionally, items required to enter will be consumed whether you defeat the Pokemon or not.",
    tipBetterAbility: "Get a better ability",
    tipGenetics: "Modify stats with Genetics",
    tipRightClick:
      "Tip: Right click (or long-press on mobile) on most elements for additional information",
    tipStatDistributionMoves:
      "Get better moves that match your stat distribution (Physical/Special)",
    tipStatUpMoves: "Use stat-up moves that match your attacks",
    tipTypeMatchingMoves: "Get better type-matching moves",
    tipUnlockHiddenAbility: "Unlock a hidden ability",
    tms: "TM's",
    toClaimIt: "to claim it",
    trainerCounter: "Trainer {current}/{total}",
    trainerPrefixAce: "Ace Trainer ",
    trainerPrefixExpert: "Expert Trainer ",
    trainerPrefixMaster: "Master Trainer ",
    trainerPrefixRookie: "Rookie Trainer ",
    trainerPrefixVeteran: "Veteran Trainer ",
    trainerReset: "Trainer Reset",
    trainers: "Select a Pokemon to use the ${format(i)}",
    trainersTab: "Trainers",
    training:
      "Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against Pokemon fought against, and their level will scale to yours. Type Immunities inside training will be instead converted to resistances.<br><br>Failing a training will result in no gains",
    trainingAbilityInfo: "Rerolls the Pokemon Ability",
    trainingAbilityName: "Rerolls the Pokemon Ability",
    trainingFailed:
      "<div style=\"display:flex; flex-direction:column; width: 100%; height:auto; justify-content:center; align-items:center; flex-shrink:0; text-align:center\">${t_ui('trainingFailed')}<br><br>${t_ui('tryToImprovePokemon')}<br> <div class=\"genetics-overview-tags\" > <div style=\"filter:hue-rotate(0deg)\">${t_ui('getBetterTypeMatchingMoves')}</div> <div style=\"filter:hue-rotate(0deg)\">${t_ui('getBetterMovesStatDistribution')}</div> <div style=\"filter:hue-rotate(0deg)\">${t_ui('useStatUpMoves')}</div> <div style=\"filter:hue-rotate(0deg)\">${t_ui('unlockHiddenAbility')}</div> <div style=\"filter:hue-rotate(0deg)\">${t_ui('getBetterAbility')}</div> <div style=\"filter:hue-rotate(0deg)\">${t_ui('modifyStatsWithGenetics')}</div> </div></div>",
    trainingHelp:
      "Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against the foes you challenge",
    trainingHelpFull:
      "Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against Pokemon fought against, and their level will scale to yours. Type Immunities inside training will be instead converted to resistances.<br><br>Failing a training will result in no gains",
    trainingHiddenAbilityError:
      "You already unlocked the Pokemon hidden ability",
    trainingHiddenAbilityInfo: "Unlocks the Pokemon Hidden Ability",
    trainingHiddenAbilityName: "Unlocks the Pokemon Hidden Ability",
    trainingIv1Error:
      "You must have less than 10 IV stars, or alread max IVs reached",
    trainingIv1Info:
      "Gain 2 random IV stars. Can only be done with less than 10 IV stars",
    trainingIv1Name:
      "Gain 2 random IV stars. Can only be done with less than 10 IV stars",
    trainingIv2Error:
      "You must have less than 22 IV stars, or alread max IVs reached",
    trainingIv2Info:
      "Gain 2 random IV stars. Can only be done with less than 22 IV stars",
    trainingIv2Name:
      "Gain 2 random IV stars. Can only be done with less than 22 IV stars",
    trainingIv3Error: "You already have the maximum possible IVs",
    trainingIv3Info: "Gain 2 random IV stars",
    trainingIv3Name: "Gain 2 random IV stars",
    trainingLevelError:
      "Defeat Elite Trainer Cynthia in VS mode to unlock, or alread max level reached",
    trainingLevelInfo:
      "Fully max a Pokemon's level. Can only be done with less than Level 100",
    trainingLevelName:
      "Fully max a Pokemon's level. Can only be done with less than Level 100",
    trainingMoveError:
      "You already learnt more than 20 moves, or there is no more learnable moves at this level",
    trainingMoveInfo:
      "Learn a new Pokemon Move. Can only be done with less than 20 moves, or when a new move is available",
    trainingMoveName:
      "Learn a new Pokemon Move. Can only be done with less than 20 moves, or when a new move is available",
    trainingNatureError: "Defeat Legend Trainer Brendan in VS mode to unlock",
    trainingNatureInfo:
      "Grants, rerolls and removes natures, which modify BST Stars: <br><br>Adamant: Atk ▲, S.Atk ▼<br>Modest: S.Atk ▲, Atk ▼<br>Jolly: Spe ▲, Def ▼, S.Def ▼<br>Relaxed: HP ▲, Spe ▼<br>Quiet: HP ▲, Atk ▼, S.Atk ▼<br>Bold: Def ▲, S.Def ▲, HP ▼<br><br>Adamant and Modest can't be rolled if they'd buff the highest offensive stat of the Pokemon, neither a nature can exceed 6 stars or result in 0 speed stars",
    trainingNatureName:
      "Grants, rerolls and removes natures, which modify BST Stars: <br><br>Adamant: Atk ▲, S.Atk ▼<br>Modest: S.Atk ▲, Atk ▼<br>Jolly: Spe ▲, Def ▼, S.Def ▼<br>Relaxed: HP ▲, Spe ▼<br>Quiet: HP ▲, Atk ▼, S.Atk ▼<br>Bold: Def ▲, S.Def ▲, HP ▼<br><br>Adamant and Modest can't be rolled if they'd buff the highest offensive stat of the Pokemon, neither a nature can exceed 6 stars or result in 0 speed stars",
    trainingPokemonRestrictedMoves:
      "The training Pokemon has multiple restricted moves ({icon}) equipped!",
    travel: "Travel",
    tryImprove: "Try to improve your Pokemon further:",
    tryToImprovePokemon: "Try to improve your Pokemon further:",
    tutorial1:
      'Let\'s start by getting new pokemon shall we? Select "Travel" on the top left menu',
    tutorial10: "For now, I will take a break... Enjoy your stay!",
    tutorial2:
      "You can right click/long tap almost everything on the screen for more info!",
    tutorial3:
      "You can also do this within the info itself too. Try going into the first Wild Area to start catching Pokemon",
    tutorial4:
      "Right click/long tap a pokemon in your team to set their moves, you can also do this while in battle.",
    tutorial5:
      "Once you are ready, press Save and Go! at the top of the screen",
    tutorial6:
      "Your team will automatically attack in a set pattern, even while you tab out or close the browser!",
    tutorial7:
      "You can right click/long press on moves or pokemon to see their stats as well.",
    tutorial8:
      "Once you have more Pokemon in your team, you will be able to switch them around in a fight",
    tutorial9:
      "You can check a more in-depth explanation about stats and battle mechanics in the Guide menu.",
    tutorialBattle:
      "Your team will automatically attack in a set pattern, even while you tab out or close the browser! You can right click/long press on moves or pokemon to see their stats as well. Once you have more Pokemon in your team, you will be able to switch them around in a fight",
    tutorialBattleEnd:
      "You can check a more in-depth explanation about stats and battle mechanics in the Guide menu. For now, I will take a break... Enjoy your stay!",
    tutorialIntro:
      'Howdy! I have been assigned to show the ropes<br>Let\'s start by getting new pokemon shall we? Select "Travel" on the top left menu',
    tutorialMoves:
      "Right click/long tap a pokemon in your team to set their moves, you can also do this while in battle. Press the + symbol next to the Pokemon to assign items<br>Once you are ready, press Save and Go! at the top of the screen",
    tutorialTravel:
      "You can right click/long tap almost everything on the screen for more info! You can also do this within the info itself too. Try going into the first Wild Area to start catching Pokemon",
    type: "type",
    typeBug: "bug",
    typeDark: "dark",
    typeDragon: "dragon",
    typeElectric: "electric",
    typeFairy: "fairy",
    typeFighting: "fighting",
    typeFilter: "type",
    typeFire: "fire",
    typeFlying: "flying",
    typeGhost: "ghost",
    typeGrass: "grass",
    typeGround: "ground",
    typeIce: "ice",
    typeNormal: "normal",
    typePoison: "poison",
    typePsychic: "psychic",
    typeRock: "rock",
    typeSteel: "steel",
    typeWater: "water",
    ultraLeague: "Ultra League",
    uncommon: "<span>Uncommon!</span>",
    unlockCosmetic: "Use: Unlock this cosmetic for a selected Pokemon",
    tmInfoDesc:
      'Use: Teach the move <span data-move="{moveId}" ><span style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: {color}">{move}</span></span> to {types} Pokemon',
    memoryInfoDesc:
      'Use: Teach the ability <span data-ability="{abilityId}" ><span style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: {color}">{ability}</span></span> to {types} Pokemon',
    uncommonAbility: "Rare Ability<br>${ability[ttdata].info()}",
    uncommonExcl: "Uncommon!",
    uncommonParen: "(Uncommon)",
    unlockHA: "Unlock a Hidden Ability",
    unlockHiddenAbility: "Unlock a Hidden Ability",
    unlockedAllObtainableCaught:
      "Unlocked while all obtainable Pokemon have been caught",
    unlocksAtLevel:
      "<span>Unlocks ${format(pkmn[ttdata].evolve()[1].pkmn.id)} at level ${pkmn[ttdata].evolve()[1].level} ✔️</span>",
    unlocksByUsingItem:
      "<span>Unlocks ${format(pkmn[ttdata].evolve()[evo].pkmn.id)} by using a ${format(item[pkmn[ttdata].evolve()[evo].item.id].id)} at level ${levelRequired}+ ❌</span>",
    unofficial: "This project is entirely unofficial!",
    useStatUpMoves: "Use Stat Up moves that match your moves",
    verdantTheme: "Verdant Theme",
    versionNotice: "Version Notice",
    versionRewardCaps:
      "x${bottlecapGot} Bottle Caps | x${(bottlecapGot/3).toFixed(0)} Golden Bottle Caps",
    veteranTrainerPrefix: "Master Trainer",
    victoryRewards: "Victory Rewards",
    victoryRewardsAlt: "Victory Rewards",
    vs: "VS",
    vsFrontier: "Battle Frontier",
    vsFrontierHeader: "VS Battle Frontier",
    vsHelp:
      "Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as your progress",
    vsTrainers: "VS Trainers",
    vsTrainersHeader: "VS Trainers",
    warningPowerCost:
      "Warning, power cost too high! Only 5 out of 6 maximum IV's per stat will be inherited!",
    waterType: "Water Type",
    weatherFoggyDesc:
      "Increases the damage of Dark and Ghost-type moves by 50%",
    weatherHailDesc: "Increases the damage of Ice-type moves by 50%",
    weatherRainyDesc:
      "Increases the damage of Water-type moves by 50% and reduces the damage of Fire-type moves by 50%",
    weatherSandstormDesc:
      "Increases the damage of Rock and Ground-type moves by 50%",
    weatherSunnyDesc:
      "Increases the damage of Fire-type moves by 50% and reduces the damage of Water-type moves by 50%",
    skillSerendipityDesc: "Your hit effects are twice as likely to happen",
    fieldTrickRoomDesc:
      "Slower Pokemon become faster, faster Pokemon become slower",
    fieldReverseFieldDesc: "Type weaknesses and strengths are reversed",
    fieldAverageTimeDesc: "All moves execute at the default speed (2s)",
    fieldNoMercyDesc: "Type-immune damage is now resisted instead of ignored",
    fieldDeltaStreamDesc: "Weather changes are disabled",
    fieldStealthRocksDesc: "Switching Pokemon deal damage",
    fieldHeavyWeatherDesc:
      "If an active team Pokemon typing does not match the current Weather, deal periodic damage",
    fieldIronBodyDesc:
      "Super-effective damage on the enemy Pokemon is reduced to neutral",
    fieldWonderWardDesc:
      "Non super-effective damage dealt to the enemy is reduced by 80%",
    fieldNeutralisingGasDesc: "Abilities are disabled",
    fieldWeakeningCurseDesc: "Physical damage dealt to the enemy is halved",
    fieldFatiguingCurseDesc: "Special damage dealt to the enemy is halved",
    fieldUnnerveDesc: "Items are disabled",
    skillFirePledgeDesc: "Pokemon with no Fire-type can't participate",
    skillFightingPledgeDesc: "Pokemon with no Fighting-type can't participate",
    skillDarkPledgeDesc: "Pokemon with no Dark-type can't participate",
    skillDragonPledgeDesc: "Pokemon with no Dragon-type can't participate",
    skillFairyPledgeDesc: "Pokemon with no Fairy-type can't participate",
    skillRockPledgeDesc: "Pokemon with no Rock-type can't participate",
    skillElectricPledgeDesc: "Pokemon with no Electric-type can't participate",
    skillSteelPledgeDesc: "Pokemon with no Steel-type can't participate",
    skillGrassPledgeDesc: "Pokemon with no Grass-type can't participate",
    skillWaterPledgeDesc: "Pokemon with no Water-type can't participate",
    skillIcePledgeDesc: "Pokemon with no Ice-type can't participate",
    skillPoisonPledgeDesc: "Pokemon with no Poison-type can't participate",
    skillFlyingPledgeDesc: "Pokemon with no Flying-type can't participate",
    skillNormalPledgeDesc: "Pokemon with no Normal-type can't participate",
    skillBugPledgeDesc: "Pokemon with no Bug-type can't participate",
    skillGroundPledgeDesc: "Pokemon with no Ground-type can't participate",
    skillGhostPledgeDesc: "Pokemon with no Ghost-type can't participate",
    skillPsychicPledgeDesc: "Pokemon with no Psychic-type can't participate",
    skillIronWillDesc: "Increase Defense by 100% for 15 turns",
    skillIronSpiritDesc: "Increase Special Defense by 100% for 15 turns",
    skillOmniboostDesc: "Increase all Stats by 50% for 10 turns",
    skillElectroblastDesc:
      "Inflict ${t_ui('tagParalysis')} on your entire team for 10 turns",
    skillPyroblastDesc:
      "Inflict ${t_ui('tagBurn')} on your entire team for 15 turns",
    skillCryoblastDesc:
      "Inflict ${t_ui('tagFreeze')} on your entire team for 10 turns",
    skillToxiblastDesc:
      "Inflict ${t_ui('tagPoisoned')} on your entire team for 15 turns",
    skillSuddenDeathDesc: "Faints your currently active Pokemon",
    skillDemoralisingRoarDesc: "Removes all team buffs",
    weatherSuffix: "weather",
    wildAreas: "Wild Areas",
    wildAreasHeader: "Wild Areas",
    wildAreasHelp:
      "All Pokemon in Wild Areas might be caught by defeating them. Wild Areas rotate every day, so be sure to check out what can be caught today!",
    wildAreasTab: "Wild Areas",
    wildZone:
      '<strong style="filter:hue-rotate(100deg)" class="event-tag">Tier IV Raid ❖</strong>',
    wildlifeParkRotate: "Pokemon in the Wildlife Park rotate every 12 hours",
    wildlifeParkRotation: "Pokemon in the Wildlife Park change every 12 hours",
    wip: "<span>${abilityHiddenIcon}WIP</span>",
    wipeData: "Wipe Data",
    wonderTrade: "Wonder Trade",
    wontConsumeAn: "Wont consume an {item}",
    wontUse: "Wont use {item}",
    wontUseTicket: "Wont use {item} Auto-Refight Tickets",
    yeah: "style=",
    youCanCopyPasteSavefileCodes: "You can copy or paste savefile codes...",
    youCantAffordThis: "You can't afford this",
    youHave: "${item[ttdata].info()}<br>(You have ${item[ttdata].got})",
    zMoveRandomSplitBonus: "- Z-move random split bonus: Yes (x1.25)",
    zMoveRandomSplitYes: "- Z-move random split bonus: Yes (x1.25)",
    zMoveStabMultiplier: "- Z-move stab multiplier: Yes (x1.5)",
    moveInfo_preventStatusWeather:
      "Prevents negative status effects while on {tag} weather",
    moveInfo_halvesDamage: "Halves the damage received of {type}-type moves",
    moveInfo_grantsImmunity: "Grants immunity to {tag}",
    moveInfo_increaseStatStatus:
      "Increases {stat} by {percent}% if afflicted with a status effect",
    moveInfo_powerBoostLowHP:
      "Increases the power of {type}-type moves by {percent}% below {hp}% HP",
    moveInfo_preventLowerStat: "Prevents the lowering of any {stat} stat",
    moveInfo_statusMiss50: "50% chance for received Status Effects to miss",
    moveInfo_synchronize:
      "Inflicts active status effects to the attacker aswell on the moment of application",
    statSpeed: "Speed",
    statAttack: "Attack",
    statDefense: "Defense",
    statSpecialAttack: "Special Attack",
    statSpecialDefense: "Special Defense",
    statHP: "HP",
    statStats: "Stats",
    statAllStats: "all Stats",
    moveInfo_increaseAllStats: "Increases all Stats by {percent}%",
    moveInfo_chanceIncreaseAllStats:
      "{percent}% chance to increase all Stats by {value}%",
    moveInfo_increaseStatWeather: "Increases {stat} by 50% on {tag} weather",
    moveInfo_chanceToInflictWhenAttacked:
      "{percent}% chance to inflict {tag} when attacked",
    moveInfo_clearStatusSwitch:
      "Status effects are cleared when switching Pokemon",
    moveInfo_tech60:
      "Multiplies by 1.5x the base damage of moves with equal or less than 60 power",
    moveInfo_scrappy:
      "Ghost-type pokemon can be hit with Normal and Fighting-type moves",
    moveInfo_unaware: "When attacking, ignores the target's stat changes",
    moveInfo_sheerColdImm: "Can only take damage from direct damaging moves",
    moveInfo_nullifiesType: "Nullifies received {type}-type moves",
    moveInfo_categoryPower:
      "{category} moves have their base power multiplied by x{mult}",
    moveInfo_rivalry:
      "Multiplies the damage by x1.5 when the opposite Pokemon shares a type",
    moveInfo_luckIncense:
      "Increases the weight of rare item drops by 1% (Can stack). Works always for everyone regardless of the user",
    moveInfo_preventNegWeather:
      "Prevents negative stat changes and status effects while on {tag} weather",
    moveInfo_weatherExtend:
      "Weather changed by the user is extended by 15 turns",
    moveInfo_decreaseEnemyStatEnter:
      "Decreases enemy {stat} by 50% when the opposing Pokemon enters the battle",
    moveInfo_increaseStatNoItem:
      "Increases {stat} by 50% if no item is being held",
    moveInfo_increaseStatKO: "Increases {stat} by 50% when defeating a Pokemon",
    moveInfo_sheerForce:
      "Positive secondary effect of damaging moves are removed, and their damage is multiplied by x1.25",
    moveInfo_levitate: "Grants immunity to Ground-type moves",
    moveInfo_halvesTwoTypes:
      "Halves damage received from {type1} and {type2}-type moves",
    moveInfo_stabBoost: "Increases Same-Type-Attack-Bonus by +0.2",
    moveInfo_crossPower03: "Increases Cross-Power by +0.3",
    moveInfo_alwaysHit: "Moves always hit regardless of the type",
    moveInfo_halveDamageHighHP:
      "Damage received is halved when over {percent}% HP",
    moveInfo_gutsFull:
      "Increases Attack by 50% if afflicted with a status effect, and nullifies the stat redution of the condition",
    moveInfo_maxMultiHit:
      "Moves that hit multiple times always hit their maximum amount",
    moveInfo_increaseStatSE:
      "Increases {stat} by 100% when hit with a super-effective move",
    moveInfo_halveSE: "Super-effective damage taken multiplier is halved",
    moveInfo_slowPower15:
      "Moves that execute slower than usual have their base power multiplied by x1.5",
    moveInfo_fastPower2:
      "Moves that execute faster than usual have their base power multiplied by x2",
    moveInfo_nullifiesTypeSpeed:
      "Nullifies received {type}-type moves and increases Speed by 50% after being hit with one",
    moveInfo_longerPositiveStats: "Positive stats up last x3 longer",
    moveInfo_powerOfAlchemy:
      "The user temporarily gets the (non-hidden) ability of the last defeated Pokemon on your team. This temporary ability works on top of your existing abilities. Applying a second temporary ability replaces the first one",
    moveInfo_decreaseFatigue: "Decreases fatigue damage of the user by x2",
    moveInfo_decreaseEnemyStatOnHit:
      "Decreases enemy {stat} by {percent}% on getting hit",
    moveInfo_preventTeamTag: "Prevents all Pokemon on your team from {tag}",
    moveInfo_neutralSE: "Super-effective damage becomes neutral",
    moveInfo_longerStatus:
      "Status effects applied to the target last x3 longer",
    moveInfo_merciless:
      "Multiply the damage dealt by x1.5 if the target has a status effect",
    moveInfo_defiant:
      "Whenever anyone in the team gets a stat risen, the user will get it too",
    moveInfo_ghostNerf:
      "Decreases the damage of all ghost moves by 25% (Can stack). Works always for everyone regardless of the user",
    moveInfo_crossPower05: "Increases Cross-Power by +0.5",
    moveInfo_noGuard:
      "All hits become super-effective regardless of the typing",
    moveInfo_shinyCharm:
      "Increases the chance of encountering a wild shiny pokemon by 15%. Works always for everyone regardless of the user",
    moveInfo_filter:
      "Received damage from non-Super-Effective moves are reduced by 80%",
    moveInfo_tintedLens:
      "Moves that are resisted by typing do instead normal damage",
    moveInfo_twoTypesFaster:
      "{type1} and {type2}-type moves are executed x{mult} faster than usual",
    moveInfo_twoTypesFaster2:
      "{type1} and {type2} moves are executed x{mult} faster than usual",
    moveInfo_dotDouble:
      "Enemy damage over time from {tag} is doubled while this Pokemon is active",
    moveInfo_categorySpeed: "{category} moves are executed twice as fast",
    moveInfo_categoryPower2:
      "{category} moves have their base power multiplied by x{mult}",
    moveInfo_copyEnemyStats: "Copies the positive stat increases of the enemy",
    moveInfo_gutsLike:
      "Increases the Damage dealt by x1.2 when afflicted with {tag}, and nullifies the damage overtime caused by it",
    moveInfo_preventAllStatDecrease: "Prevents all stat decreases",
    moveInfo_defeatistReverse:
      "Increases the Damage dealt by x1.15 for every team member defeated",
    moveInfo_gorillaTactics:
      "Increases the Attack by x1.5, but prevents them from switching",
    moveInfo_highestStatKO:
      "Increases the highest stat of the user by 50% when defeating a Pokemon",
    moveInfo_increaseStatTerrain: "Increases {stat} by 50% on {tag}",
    moveInfo_changeWeatherEnter:
      "Changes the weather to {tag} when entering or switching into the battle",
    moveInfo_doubleSecondary: "Secondary effect of moves are executed twice",
    moveInfo_doublePhysical: "Physical damage dealt is multiplied by x2",
    moveInfo_invertStats:
      "Inverts stat changes. Positive changes become negative, and negative become positive",
    moveInfo_adaptType:
      "Changes the type of the user to match the type of the used move",
    moveInfo_boostStatStages: "Stat changes on the user are boosted by a stage",
    moveInfo_parentalBond: "Moves are executed a second time, at half power",
    moveInfo_randomTwoStats:
      "Every turn, raises two stats by 100% for one turn",
    moveInfo_darkAura:
      "Multiplies by x1.1 the power of Dark-type moves of all team members",
    moveInfo_ghostAura:
      "Multiplies by x1.1 the damage of Ghost-type moves of all team members",
    moveInfo_allMovesNormal:
      "All moves become Normal-type moves, and their power is multiplied by x1.3",
    moveInfo_ateType:
      "Normal-type moves become {type}-type moves, and their power is multiplied by x1.3",
    moveInfo_faster: "Attacks x{mult} faster than usual",
    moveInfo_hitsTimes: "Hits {min}-{max} times",
    moveInfo_decreaseEnemyStat: "Decreases enemy {stat} by {percent}%",
    moveInfo_inflictAndBoostEnemyAtk:
      "Inflicts {tag}, but increases enemy Attack by 100%",
    moveInfo_hitsCount: "Hits {count} times",
    moveInfo_chanceToInflict: "{percent}% chance to inflict {tag}",
    moveInfo_powerDoubleCond: "Power doubles if the target is {condition}",
    moveInfo_powerDoubleUserCond: "Power doubles if the user is {condition}",
    moveInfo_powerRiseDef:
      "Power increases by x1.2-1.5 if Defense/Special Defense is risen",
    moveInfo_slower: "Attacks x{mult} slower than usual",
    moveInfo_increaseStat: "Increases {stat} by {percent}%",
    moveInfo_chanceIncreaseStat:
      "{percent}% chance to increase {stat} by {value}%",
    moveInfo_changeWeather: "Changes the weather to {tag}",
    moveInfo_decreaseStat: "Decreases {stat} by {percent}%",
    moveInfo_inflicts: "Inflicts {tag}",
    moveInfo_switchNext: "Switches to the next party member",
    moveInfo_randomPower: "Power randomly varies from x1 to x8",
    moveInfo_chanceDecreaseEnemyStat:
      "{percent}% chance to decrease enemy {stat} by {value}%",
    moveInfo_slowAndPowerRiseDef:
      "Attacks x1.2 slower than usual. Power increases by x1.2-1.5 if Defense/Special Defense is risen",
    moveInfo_powerDoubleNoItem:
      "Power doubles if the user is not holding any item",
    moveInfo_tailwindSlow:
      "Increases Speed by 50% to the entire team. Attacks x1.5 slower than usual",
    moveInfo_stack1_2x5:
      "Multiplies base power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon",
    moveInfo_decreaseSpaAndPowerRiseDef:
      "Decreases enemy Special Attack by 50%. Power increases by x1.2-1.5 if Defense/Special Defense is risen",
    moveInfo_increaseStatSpeedSlow:
      "Increases {stat} and Speed by {percent}%. Attacks x{mult} slower than usual",
    moveInfo_inflictAndBoostEnemySpa:
      "Inflicts {tag}, but increases enemy Special Attack by 100%",
    moveInfo_powerDoubleType: "Power doubles if the target is {type}-Type",
    moveInfo_powerDoubleStatus:
      "Power doubles if the target has a status effect",
    moveInfo_inflictSelf: "Inflicts {tag} on the user",
    moveInfo_memento:
      "Faints the user and decreases enemy Attack and Special Attack by 100%",
    moveInfo_embargo:
      "Prevents the enemy to use the move in the slot embargo was used. This is treated as a status effect",
    moveInfo_raiseTwoRandom: "Raises by 100% two random stats",
    moveInfo_batonPass:
      "User transfers all of its stat changes and status to a the entire team and faints. This move can only be present once per team",
    moveInfo_happyHourItems:
      "Once used,increases the weight of rare item drops by 1% for the current battle. Multiple uses wont stack. Works always for everyone regardless of the user",
    moveInfo_happyHourPkmn:
      "Once used,increases the weight of rare Pokemon by 1% for the current battle. Multiple uses wont stack. Works always for everyone regardless of the user",
    moveInfo_metronome: "User performs any move at random",
    moveInfo_mirrorMove1:
      "Perform the first move of the oponent, at double the damage",
    moveInfo_mirrorMove2:
      "Perform the first move of the oponent. Attacks x3 faster than usual",
    moveInfo_superEffWater: "Super-effective against Water-types",
    moveInfo_weatherAndSpa:
      "Changes the weather to {tag} and increases Special Attack by 50%",
    moveInfo_inflictAndDecreaseEnemy:
      "Inflicts {tag} and decreases enemy {stat} by {percent}%",
    moveInfo_stealEnemyStats: "Steals the stat changes of the enemy",
    moveInfo_bypassDef: "Bypasses all defense buffs",
    moveInfo_psyshockLike:
      "Attack becomes physical or special to match the highest stat of the user",
    moveInfo_healTeamTag: "Removes {tag} for the entire party",
    moveInfo_healTeamAll: "Removes all status effect for the entire party",
    moveInfo_typeByUser: "Type changes based on the first type of the user",
    moveInfo_weatherBall:
      "Power doubles under a weather condition, and type changes depending on it ({tagSunny} is Fire, {tagRainy} is Water, {tagSandstorm} is Ground, {tagHail} is Ice, {tagFoggy} is Ghost, {tagElectricTerrain} is Electric, {tagGrassyTerrain} is Grass, {tagMistyTerrain} is Psychic )",
    moveInfo_powerPerStatUp:
      "Increases base power by 30 for every unique stat up of the user",
    moveInfo_weatherAndSwitch:
      "Changes the weather to {tag} and switches to the next party member",
    moveInfo_weatherTypeSpeed:
      "Temporarily changes the type of the user corresponding to the weather, and increases Speed by 75%",
    moveInfo_spa150slow:
      "Increases Special Attack by 150%. Attacks x1.5 slower than usual",
    moveInfo_powerRiseSpeed: "Power increases by x1.2-1.5 if Speed is risen",
    moveInfo_noTypeImmunity: "Can hit regardless of the typing",
    moveInfo_increaseStatTeam: "Increases {stat} by 100% to the entire team",
    moveInfo_tempType:
      "Temporarily adds {type} to the type of the enemy. Super-effective damage bonus dealt from temporal types is halved, and applying a second temporary type replaces the first one",
    moveInfo_sleepTalk: "Executes the first move slot",
    moveInfo_increaseTwoStatsTeam:
      "Increases {stat1} and {stat2} by {percent}% to the entire team",
    moveInfo_chanceTripleInflict:
      "10% chance to inflict {tag1},{tag2} or {tag3}",
    moveInfo_stack1_3x3:
      "Multiplies base power by 1.3x everytime its used, up to 3 times. Depletes all stacks upon switching Pokemon",
    moveInfo_stack1_15x10:
      "Multiplies base power by 1.15x everytime its used, up to 10 times. Depletes all stacks upon switching Pokemon",
    moveInfo_shellSmash: "Decreases Defense, Special Defense 50%",
    moveInfo_ellipsis: "...",
    moveInfo_firstMoveTypeSpeed:
      "Temporarily changes the type of the user to the type of the first move slot, and increases Speed by 75%",
    moveInfo_inflictTeam: "Inflicts {tag} to the entire team",
    itemInfo_001:
      "When held: Increase the damage of Fighting-Type moves by x{1}",
    itemInfo_002: "When held: Increase the damage of Dark-Type moves by x{1}",
    itemInfo_003: "When held: Increase the damage of Fire-Type moves by x{1}",
    itemInfo_004: "When held: Increase the damage of Dragon-Type moves by x{1}",
    itemInfo_005: "When held: Increase the damage of Fairy-Type moves by x{1}",
    itemInfo_006: "When held: Increase the damage of Rock-Type moves by x{1}",
    itemInfo_007:
      "When held: Increase the damage of Electric-Type moves by x{1}",
    itemInfo_008: "When held: Increase the damage of Steel-Type moves by x{1}",
    itemInfo_009: "When held: Increase the damage of Grass-Type moves by x{1}",
    itemInfo_010: "When held: Increase the damage of Water-Type moves by x{1}",
    itemInfo_011: "When held: Increase the damage of Ice-Type moves by x{1}",
    itemInfo_012: "When held: Increase the damage of Poison-Type moves by x{1}",
    itemInfo_013: "When held: Increase the damage of Flying-Type moves by x{1}",
    itemInfo_014: "When held: Increase the damage of Normal-Type moves by x{1}",
    itemInfo_015: "When held: Increase the damage of Bug-Type moves by x{1}",
    itemInfo_016: "When held: Increase the damage of Ground-Type moves by x{1}",
    itemInfo_017: "When held: Increase the damage of Ghost-Type moves by x{1}",
    itemInfo_018:
      "When held: Increase the damage of Psychic-Type moves by x{1}",
    itemInfo_019:
      "When held: If a Pokemon has not fully evolved, decreases damage taken by x{1}. This does not apply to final-stage Pokemon with a Mega-Evolution",
    itemInfo_020:
      "When held: Increases the duration of positive buffs used by 1 turn and increases damage dealt by x{1}",
    itemInfo_021:
      "When held: Decreases the duration of negative buffs received by 1 turn and decreases damage taken by x{1}",
    itemInfo_022:
      "When held: Increases the Damage of the user by x{1}, but inflicts {2}",
    itemInfo_023:
      "When held: Increases the Attack of the user by x{1}, but prevents them from switching",
    itemInfo_024:
      "When held: Increases the Special Attack of the user by x{1}, but prevents them from switching",
    itemInfo_025:
      "When held: Increases the damage of the user by x{1}, but loses 1/10 of its max HP per turn",
    itemInfo_026:
      "When held: Increase overall defense by x{1}, but the user cannot use moves with 0 power",
    itemInfo_027:
      "When held: Decreases the duration of negative buffs received by {1} turns",
    itemInfo_028:
      "When held: Increases damage dealt by x{1}, but once all the moves of the user are executed, switch to the previous team member",
    itemInfo_029:
      "When held: Increases damage dealt by x{1}, but once all the moves of the user are executed, switch to the next team member",
    itemInfo_030:
      "When held: Moves that attack faster than usual are executed x{1} faster",
    itemInfo_031:
      "When held: Multi-hit moves are guaranteed to hit their maximum amount of times and deal x{1} more damage",
    itemInfo_032:
      "When held: Moves that get more powerful the more stacks they have deal x{1} more damage",
    itemInfo_033: "When held: Moves that have 0 power execute x{1} faster",
    itemInfo_034:
      "When held: Moves affected by Iron Fist deal x{1} more damage, and their secondary effects are executed twice",
    itemInfo_035:
      "When held: Moves that attack slower than usual deal x{1} more damage",
    itemInfo_036:
      "When held: Increases damage dealt by x{1} and increases Speed by 50% for 8 turns when hit by a Super-Effective move",
    itemInfo_037:
      "When held: Prevents the damage from Stealth Rocks field effect and decreases damage taken by x{1}",
    itemInfo_038: "When held: Decreases fatigue damage of the user by x{1}",
    itemInfo_039:
      "When held: Increases damage dealt by x{1} and enables Bug-Type moves to receive STAB bonuses",
    itemInfo_040:
      "When held: Increases damage dealt by x{1} and enables Dark-Type moves to receive STAB bonuses",
    itemInfo_041:
      "When held: Increases damage dealt by x{1} and enables Dragon-Type moves to receive STAB bonuses",
    itemInfo_042:
      "When held: Increases damage dealt by x{1} and enables Electric-Type moves to receive STAB bonuses",
    itemInfo_043:
      "When held: Increases damage dealt by x{1} and enables Fairy-Type moves to receive STAB bonuses",
    itemInfo_044:
      "When held: Increases damage dealt by x{1} and enables Fighting-Type moves to receive STAB bonuses",
    itemInfo_045:
      "When held: Increases damage dealt by x{1} and enables Fire-Type moves to receive STAB bonuses",
    itemInfo_046:
      "When held: Increases damage dealt by x{1} and enables Flying-Type moves to receive STAB bonuses",
    itemInfo_047:
      "When held: Increases damage dealt by x{1} and enables Ghost-Type moves to receive STAB bonuses",
    itemInfo_048:
      "When held: Increases damage dealt by x{1} and enables Grass-Type moves to receive STAB bonuses",
    itemInfo_049:
      "When held: Increases damage dealt by x{1} and enables Ground-Type moves to receive STAB bonuses",
    itemInfo_050:
      "When held: Increases damage dealt by x{1} and enables Ice-Type moves to receive STAB bonuses",
    itemInfo_051:
      "When held: Increases damage dealt by x{1} and enables Normal-Type moves to receive STAB bonuses",
    itemInfo_052:
      "When held: Increases damage dealt by x{1} and enables Poison-Type moves to receive STAB bonuses",
    itemInfo_053:
      "When held: Increases damage dealt by x{1} and enables Psychic-Type moves to receive STAB bonuses",
    itemInfo_054:
      "When held: Increases damage dealt by x{1} and enables Rock-Type moves to receive STAB bonuses",
    itemInfo_055:
      "When held: Increases damage dealt by x{1} and enables Steel-Type moves to receive STAB bonuses",
    itemInfo_056:
      "When held: Increases damage dealt by x{1} and enables Water-Type moves to receive STAB bonuses",
    itemInfo_057:
      "When held: Increases the weight of rare item drops by {1}%. Works always for everyone regardless of the holder",
    itemInfo_058:
      "When held: Increases the weight of rare pokemon by {1}%. Works always for everyone regardless of the holder",
    itemInfo_059:
      "When held: Increases the experience gained by the pokemon by {1}%",
    itemInfo_060:
      "When held: Increases the chance of encountering a wild shiny pokemon by {1}%. Works always for everyone regardless of the holder",
    itemInfo_061:
      "When held: Decreases the super-effective damage taken from Fire-Type moves by {1}%",
    itemInfo_062:
      "When held: Decreases the super-effective damage taken from Water-Type moves by {1}%",
    itemInfo_063:
      "When held: Decreases the super-effective damage taken from Electric-Type moves by {1}%",
    itemInfo_064:
      "When held: Decreases the super-effective damage taken from Grass-Type moves by {1}%",
    itemInfo_065:
      "When held: Decreases the super-effective damage taken from Ice-Type moves by {1}%",
    itemInfo_066:
      "When held: Decreases the super-effective damage taken from Fighting-Type moves by {1}%",
    itemInfo_067:
      "When held: Decreases the super-effective damage taken from Poison-Type moves by {1}%",
    itemInfo_068:
      "When held: Decreases the super-effective damage taken from Ground-Type moves by {1}%",
    itemInfo_069:
      "When held: Decreases the super-effective damage taken from Flying-Type moves by {1}%",
    itemInfo_070:
      "When held: Decreases the super-effective damage taken from Psychic-Type moves by {1}%",
    itemInfo_071:
      "When held: Decreases the super-effective damage taken from Bug-Type moves by {1}%",
    itemInfo_072:
      "When held: Decreases the super-effective damage taken from Rock-Type moves by {1}%",
    itemInfo_073:
      "When held: Decreases the super-effective damage taken from Ghost-Type moves by {1}%",
    itemInfo_074:
      "When held: Decreases the super-effective damage taken from Dragon-Type moves by {1}%",
    itemInfo_075:
      "When held: Decreases the super-effective damage taken from Dark-Type moves by {1}%",
    itemInfo_076:
      "When held: Decreases the super-effective damage taken from Steel-Type moves by {1}%",
    itemInfo_077:
      "When held: Decreases the super-effective damage taken from Fairy-Type moves by {1}%",
    itemInfo_078:
      "When held: Increases the duration of {1}, {2}, {3}, {4} and {5} by {6} turns",
    itemInfo_079:
      "When held: Increases the duration of {1} weather by {2} turns",
    itemInfo_080: "When held: Increases the duration of {1} by {2} turns",
    itemInfo_081:
      "Obtained when acquiring an exceeding number of items (20+ for held items) or exchanged with other currencies",
    itemInfo_082: "Obtained in the Battle Frontier",
    itemInfo_083:
      "Use: Fast-forward battle time by 10 minutes. Must be used while battling",
    itemInfo_084:
      "Use: Fast-forward battle time by 30 minutes. Must be used while battling",
    itemInfo_085:
      "Use: Triggers a specified seasonal event for the next 10 days. It will last for the 10 following days, and will get replaced by currently-ongoing ones. However, the seasonal shop of that event wont open",
    itemInfo_086: "Use: Increase the level of a Pokemon by 1",
    itemInfo_087: "Use: Re-roll the ability of a Pokemon",
    itemInfo_088: "Use: Unlock the hidden ability of a Pokemon",
    itemInfo_089:
      "Use: Re-learn a previously learned move acquired through genetics inheriting (excluding moves inherited through Lock Capsules)",
    itemInfo_090:
      "Use: Fast-forward genetic operation time by 30 minutes. Must be used while an active operation is ongoing",
    itemInfo_091: "Use: Get a random Decor",
    itemInfo_092: "Use: Removes the nature of a Pokemon",
    itemInfo_093:
      "Can be used to automatically refight battles. Cannot refight while the browser is closed. Consumed once a battle is won",
    itemInfo_094: "Obtained in T3 and T4 raids. Exchanged in the Poke-Mart",
    itemInfo_095:
      "Obtained in ★ and ★★ mega-dimension raids. Exchanged in the Poke-Mart",
    itemInfo_096:
      "Obtained in ★★★ and ★★★★ mega-dimension raids. Exchanged in the Poke-Mart",
    itemInfo_097:
      "Can be used to catch Pokemon in the Mega-Dimension. Expires after the current Mega-Dimension rotation ends",
    itemInfo_098:
      "Can be used to catch event Pokemon. Expires after event finishes",
    itemInfo_099:
      "Seasonal item, dropped randomly from defeating wild Pokemon. Expires on {1}/{2}",
    itemInfo_100: "Use: Increase the HP IV of a Pokemon by 1",
    itemInfo_101: "Use: Increase the Attack IV of a Pokemon by 1",
    itemInfo_102: "Use: Increase the Defense IV of a Pokemon by 1",
    itemInfo_103: "Use: Increase the Special Attack IV of a Pokemon by 1",
    itemInfo_104: "Use: Increase the Special Defense IV of a Pokemon by 1",
    itemInfo_105: "Use: Increase the Speed IV of a Pokemon by 1",
    itemInfo_106: "Use: Evolve certain kinds of Pokemon (Must be level {1}+)",
    itemInfo_107:
      "Genetics-aiding item: Rerolls the ability of the Host Pokemon. It has an increased chance to reroll uncommon and rare abilities",
    itemInfo_108:
      "Genetics-aiding item: Guarantees the chance to inherit Speed Iv's",
    itemInfo_109:
      "Genetics-aiding item: Guarantees the chance to inherit Special Defense Iv's",
    itemInfo_110:
      "Genetics-aiding item: Guarantees the chance to inherit Defense Iv's",
    itemInfo_111:
      "Genetics-aiding item: Guarantees the chance to inherit Attack Iv's",
    itemInfo_112:
      "Genetics-aiding item: Guarantees the chance to inherit Special Attack Iv's",
    itemInfo_113:
      "Genetics-aiding item: Guarantees the chance to inherit HP Iv's",
    itemInfo_114:
      "Genetics-aiding item: Multiplies by 10 the chance to inherit Iv's",
    itemInfo_115:
      "Genetics-aiding item: Transfers the currently equipped moves of the sample to the movepool of the host. The host will retain both its equipped moves and the newly transferred ones, but the sample will lose it's equipped ones. Can only be used with at least one level of compatibility, and does not work on signature moves",
    itemInfo_116:
      "Genetics-aiding item: Swaps the ability of the Pokemon with the sample. Can only be used with at least one level of compatibility and does not work on hidden abilities",
    itemInfo_117:
      "Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by {1} by x{2}",
    itemInfo_118:
      "Permanent Upgrade: Daily export rewards award an extra Fashion Case",
    itemInfo_119:
      "Permanent Upgrade: Trainers in the battle frontier award +3 extra Golden Bottle Caps",
    itemInfo_120:
      "Permanent Upgrade: Decrease the time required for genetic operations by 30 minutes (Up to a minimum of 10 minutes)",
    itemInfo_121:
      "Permanent Upgrade: Allows ALL moves to be inheritable to a host of B division and below (including Signature and Egg moves). For this to happen, at least two levels of compatibility are needed<br><br>Two or more exact Egg Moves transferred this way can't be present at the same time on a single team, unless the user of the move has said move as an inherent Egg Move or Signature Move",
    itemInfo_122: "An unhatched egg. Leave combat to discover the contents!",
    itemInfo_123:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Bug-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_124:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Dark-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_125:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Dragon-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_126:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Electric-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_127:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Fairy-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_128:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Fighting-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_129:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Fire-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_130:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Flying-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_131:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Ghost-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_132:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Grass-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_133:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Ground-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_134:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Ice-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_135:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Normal-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_136:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Poison-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_137:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Psychic-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_138:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Rock-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_139:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Steel-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    itemInfo_140:
      "When held: Regardless of the holder, every {1} turns, executes a coordinated Water-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team",
    fieldCrossRoomDesc: "Increases the damage dealt by cross-power by 30%",
    fieldLightScreenDesc:
      "Super-effective damage dealt to your team is reduced to neutral",
    fieldSafeguardDesc:
      "Protects your team from status effects and stat reductions",
    fieldTrickRoomDesc:
      "Slower Pokemon become faster, faster Pokemon become slower. Additionally, multiplies the damage based on how slow the Pokemon originally was by x1.0 to x1.5",
    fieldWeirdRoomDesc: "Copies all attack and defense base stats of the enemy",
    rewardFromEvent: "Reward from the event {event} (Rotation {rotation})",
    starterFroakie: "Froakie<br>Water Type",
    starterLitten: "Litten<br>Fire Type",
    starterTurtwig: "Turtwig<br>Grass Type",
  },
  fr: {
    abilities: "Talents",
    abilitiesSection: "Capacités",
    abilitiesSectionTitle: "Talents",
    abilityCurrentlyUnobtainable:
      "Cette capacité est actuellement impossible à obtenir :(",
    abilityFilter: "talent",
    abilitySwapped: "Talent échangé !",
    abilityTraining: "Entraînement Talent",
    abort: "Annuler",
    abortOperationConfirm: "Êtes-vous sûr de vouloir annuler l'opération ?",
    aceTrainerPrefix: "Dresseur As ",
    addPokemon: "Ajouter un Pokémon",
    additionallyHiddenAbilityOf:
      "De plus, apparaît comme le Talent caché de {pokemon}",
    affectedBy: "Affecté par",
    afkCalculating:
      "Le temps AFK est en cours de calcul, veuillez patienter...",
    alertEnterTagName: "Veuillez entrer un nom d'étiquette",
    alertSelectIcon: "Veuillez sélectionner une icône",
    allStarSign: "tous les signes astraux",
    allTrainersDefeated: "Tous les dresseurs vaincus !",
    allTrainersDefeatedForNow: "Tous les dresseurs vaincus pour l'instant",
    areaItems: "Objets de la zone",
    areaPokemon: "Pokémon de la zone",
    arenaPreviewHtml:
      '\n    \n    \n    <div class="arena-tooltip">\n    Choisissez une difficulté pour le prochain dresseur\n    <span>(Clic droit/appui long pour voir les détails des effets de terrain)</span>\n    </div>\n    \n    \n    <div id="arena-card-list">\n    \n    <div class="arena-card active-arena-card" id="arena-card-1" onclick="pickArenaCard(1)" data-arena-card="1">\n    <div class="arena-card-title">\n    Niveau 100\n    <span>\n    Récompense : x2<img  src="img/items/goldenBottleCap.png">\n    </span>\n    </div>\n    \n    <div id="arena-card-1-info" class="arena-card-info">\n    </div>\n    </div>\n    \n    <div class="arena-card" id="arena-card-2" onclick="pickArenaCard(2)" data-arena-card="2">\n    <div class="arena-card-title">\n    Niveau 125\n    <span>\n    Récompense : x3<img  src="img/items/goldenBottleCap.png">\n    </span>\n    </div>\n    <div id="arena-card-2-info" class="arena-card-info">\n    </div>\n    </div>\n    \n    <div class="arena-card" id="arena-card-3" onclick="pickArenaCard(3)" data-arena-card="3">\n    <div class="arena-card-title">\n    Niveau 150\n    <span>\n    Récompense : x4<img  src="img/items/goldenBottleCap.png">\n    </span>\n    </div>\n    <div id="arena-card-3-info" class="arena-card-info">\n    </div>\n    </div>\n    \n    </div>\n    \n    \n    \n    ',
    atkBst: "ATQ BST",
    atkIv: "ATQ IV",
    atkIvIncreased: "IV ATQ augmenté !",
    atkIvInherited: "IV ATQ hérité !",
    atkTotal: "ATQ Total",
    attack: "Attaque",
    autoRefight: "Recombat Auto",
    autoRefightActive: "Re-combat Auto actif !",
    autoRefightActiveNoConsume:
      'Recombats auto actifs ! <span>(Ne consomme pas de <img src="img/items/autoRefightTicket.png"> ticket de recombat auto)</span> Cliquez pour désactiver',
    autoRefightNoTicket:
      'Recombats auto <span> (N\'utilise pas de <img src="img/items/autoRefightTicket.png"> tickets de recombat auto)</span>',
    autoRefightNoTicketTraining:
      'Recombats auto <span> (N\'utilise pas de <img src="img/items/autoRefightTicket.png"> tickets de recombat auto)</span>',
    autoRefightRequiresTicket:
      'Recombats auto <span> (Nécessite un <img src="img/items/autoRefightTicket.png"> ticket de recombat auto)</span>',
    autoRefightTicket: "Ticket de Recombat Auto",
    autoRefightTickets: "Tickets de Recombat Auto",
    autoRefightTicketsRemaining:
      "({count} {icon} Tickets de Recombat Auto restants)",
    bannedPokemon: "Pokémon Bannis",
    barcodePreview: "Aperçu du code-barres",
    baseStats: "Stats de Base",
    batonPassClause: "Clause Relais",
    battleArena: "Arène de Combat",
    battleArenaHelp:
      "L'Arène de Combat propose cinq dresseurs dont vous pouvez choisir la difficulté pour des récompenses plus élevées. Les effets de terrain, les modificateurs de combat seront aussi randomisés avec les dresseurs. Les dresseurs affrontés ici se réinitialisent chaque jour",
    battleFactory: "Usine de Combat",
    battleFactoryHelp:
      "L'Usine de Combat est un défi où votre objectif est d'infliger le maximum de dégâts. Chaque tour, vous subirez des dégâts fixes, et les dégâts des effets de statut sont désactivés.\n\nChaque fois que vous entrez dans l'usine, votre score se réinitialise, mais vous pouvez réessayer autant de fois que vous voulez\n\nVotre meilleur score sera sauvegardé, et réinitialisé quand la rotation de ligue change. Vous serez récompensé pour votre meilleur score atteint à la fin du combat\n\nIl y a un maximum de 100 capsules dorées obtenables",
    battleFrontier: "Zone de Combat",
    battleFrontierTab: "Zone de Combat",
    battleSummary: "Résumé du Combat",
    battleTower: "Tour de Combat",
    berry: "Baie",
    betterStatMoves:
      "Obtiens de meilleures capacités correspondant à ta répartition de stats (Physique/Spéciale)",
    betterTypeMoves: "Obtiens de meilleures capacités adaptées aux types",
    buffAtk: "ATQ",
    buffBrn: "BRN",
    buffCnf: "CNF",
    buffDef: "DEF",
    buffEmb: "EMB",
    buffFrz: "FRZ",
    buffPar: "PAR",
    buffPsn: "PSN",
    buffSatk: "ATQ.SP",
    buffSdef: "DEF.SP",
    buffSpe: "VIT",
    buffZzz: "ZZZ",
    canBeBoughtInPokeMart: "Peut être acheté au Poke-Mart",
    canBeDroppedDungeonArea:
      "Peut être obtenu dans la zone de donjon {area} (Rotation {rotation})",
    canBeDroppedEventArea:
      "Peut être obtenu dans la zone d'événement {area} (Rotation {rotation})",
    canBeDroppedWildArea:
      "Peut être obtenu dans la zone sauvage {area} (Rotation {rotation})",
    canBePurchasedInPokeMart: "Peut être acheté au Poke-Mart",
    cancel: "Annuler",
    cantAfford: "Impossible d'acheter",
    cantAffordPurchase: "Vous ne pouvez pas vous permettre d'acheter ceci",
    cantAffordThis: "Vous ne pouvez pas vous permettre ceci",
    cantAffordTitle: "Impossible d'acheter",
    caught: "capturé",
    caughtCount: "Capturés :",
    caughtLabel: "capturé",
    challenges: "Défis",
    cheats: "Triches",
    checkLearnableMoves: "Voir les capacités apprises",
    cherryTheme: "Thème Cerise",
    clearFilters: "Effacer les Filtres",
    clickAddTags: "Clique ici pour ajouter des tags",
    clickToAddTags: "Cliquez ici pour ajouter des étiquettes",
    clickToDisableIt: "Cliquez pour le désactiver",
    clipboardPasteFailed:
      "Impossible de coller depuis le presse-papiers. Veuillez coller manuellement ou accorder les permissions du presse-papiers.",
    collection: "Collection ◈",
    colorBlue: "bleu",
    colorGreen: "vert",
    colorLime: "citron vert",
    colorMagenta: "magenta",
    colorOrange: "orange",
    colorPink: "rose",
    colorRed: "rouge",
    colorTeal: "bleu-vert",
    colorYellow: "jaune",
    comeBackIn: "Revenez dans",
    comeBackInTimer: 'Revenez dans <span class="time-counter-daily"></span>',
    comingSoon: "[Bientôt Disponible]",
    common: "commun",
    commonAbility: "Capacité Commune",
    commonParen: "(Commun)",
    compatibility: "Compatibilité",
    completeTutorialFirst: "Terminez d'abord le tutoriel",
    completeTutorialForEvents:
      "Terminez le tutoriel pour accéder aux événements",
    consoleAddPokemonMove: "Ajouter Capacité Pokémon",
    consoleAlterBattleSpeed: "Modifier Vitesse de Combat (Défaut 2000)",
    consoleCompleteGenetics: "Compléter l'Opération de Génétique",
    consoleDebugGetItems: "Obtenir 999 de tous les objets",
    consoleDebugGetPokemon:
      "Obtenir tous les Pokémon à un certain niveau. Shiny est optionnel",
    consoleDebugSetIvs: "Définir tous les IVs des Pokémon. Maximum 6",
    consoleErrorTrimmingSprite: "Erreur de découpe de sprite :",
    consoleGetMoveset: "Génère un tableau des capacités possibles d'un Pokémon",
    consoleGiveItems: "Donner Objets",
    consoleGivePokemon: "Donner Pokémon",
    consoleHeaderCommand: "commande",
    consoleHeaderEffect: "effet",
    consoleHeaderInfo: "info",
    consoleInfoCommand: "Tapez une commande pour plus d'infos",
    consoleMiscCommands: "Commandes Diverses",
    consoleModifyDungeonRotation: "Modifier Rotation Donjon",
    consoleModifyEventRotation: "Modifier Rotation Événement",
    consoleModifyFrontierRotation: "Modifier Rotation Frontière",
    consoleModifyItems: "Modifier Objets",
    consoleModifyPokemon: "Modifier Pokémon",
    consoleModifyPokemonAbility: "Modifier Talent Pokémon",
    consoleModifyPokemonIvs:
      "Modifier IVs Pokémon (PV, ATQ, ATQ.SP, DEF, DEF.SP, VIT)",
    consoleModifyPokemonLevel: "Modifier niveau Pokémon",
    consoleModifyPokemonShiny: "Modifier statut shiny Pokémon",
    consoleModifyRotations: "Modifier Rotations",
    consoleModifyWildRotation: "Modifier Rotation Sauvage",
    consoleUnlockHiddenAbility: "Débloquer Talent Caché",
    copy: "Copier",
    copyButton: "Copier",
    coralTheme: "Thème Corail",
    couldNotPasteClipboard:
      "Impossible de coller depuis le presse-papiers. Veuillez coller manuellement ou accorder les permissions du presse-papiers.",
    createNewTag: "Créer un nouveau tag",
    creditsGen9: "Sprites Gen 9 par KingOfThe-X-Roads",
    creditsLegal:
      "Tous les personnages et ressources associés présents dans ce jeu sont la propriété exclusive de Nintendo, Creatures Inc. et The Pokémon Company, et sont utilisés ici strictement à des fins non commerciales. Aucune propriété n'est revendiquée et tous les droits restent à leurs propriétaires respectifs.",
    creditsMadeBy: "Réalisé par ",
    creditsSprites:
      "Sprites Pokémon et dresseurs par Pokemon Showdown (Incluant les artistes : Beliot419, kyledove, Gnomowladny, Brumirage et ZacWeavile. Allez voir leur travail. Maintenant.)",
    creditsTitle: "Crédits",
    currentEffects: "~ Effets Actuels ~",
    curryHelp:
      "Toutes les 12h vous pouvez sélectionner jusqu'à trois capacités actives pour toute votre équipe pendant les raids pendant 1 heure. Ces capacités seront disponibles à la sélection dans la section Curry du magasin.",
    curryRaidEffects:
      "Pendant les raids : Votre équipe a temporairement acquis les capacités suivantes :",
    customChallenges: "Défis Personnalisés",
    customChallengesHelp:
      "Créez des combats personnalisés à partir de vos propres pools et équipes ennemies. Importez et exportez des codes de défi pour les partager.",
    damageDealt: "Dégâts infligés",
    darkTheme: "Thème Sombre",
    dataCopiedClipboard: "Données copiées dans le presse-papiers !",
    dataPastedSuccessfully: "Données collées avec succès !",
    dataToText: "Données en Texte",
    decor: "Déco",
    decorRotationTimer:
      '\n    <svg style="scale:0.7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="450s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="37.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>\n    La décoration disponible changera dans <font style="margin-left:0.3rem" class="time-counter-event">...</font>',
    defBst: "DEF BST",
    defIv: "DEF IV",
    defIvIncreased: "IV DEF augmenté !",
    defIvInherited: "IV DEF hérité !",
    defTotal: "DEF Total",
    defaultOption: "défaut",
    defeatBrendanToUnlock:
      "Vainquez le Dresseur Légendaire Brendan en mode VS pour débloquer",
    defeatBrockToUnlock:
      "Vainquez le Champion Pierre en mode VS pour débloquer",
    defeatEliteFourLance: "Vainquez le Conseil 4 Peter en VS pour débloquer",
    defeatGeetaToUnlock:
      "Vainquez la Dresseuse Maître Geeta en mode VS pour débloquer",
    defeatGiovanniToUnlock:
      "Vainquez le Chef de la Team Giovanni en mode VS pour débloquer",
    defeatGiovanniToUnlockFrontier:
      "Battez le Boss Giovanni en mode VS pour débloquer",
    defeatLanceToUnlock: "Battez Lance du Conseil 4 en mode VS pour débloquer",
    defeatLanceToUnlock2:
      "Vainquez le Conseil 4 Peter en mode VS pour débloquer",
    defeatLanceToUnlockMenu:
      "Battez Lance du Conseil 4 en mode VS pour débloquer",
    defeatLusamineToUnlock:
      "Battez la Fondation Æther Lusamine en mode VS pour débloquer",
    defeatMistyToUnlock:
      "Vainquez la Championne Ondine en mode VS pour débloquer",
    defeatPhoebeToUnlock: "Vainquez la Championne Spectra en VS pour débloquer",
    defeatEliteTrainerCynthiaToUnlock:
      "Vainquez la Dresseuse d'Élite Cynthia en VS pour débloquer",
    defeatPokemonProfessorOakToUnlock:
      "Vainquez le Professeur Pokémon Chen en VS pour débloquer",
    defeatUltraEntityLusamine:
      "Vainquez l'Entité Ultra Elsa-Mina en VS pour débloquer",
    defeatedLabel: "Vaincus : ",
    defense: "Défense",
    deleteConfirmButton: "Ouais !",
    deleteConfirm:
      "Es-tu sûr de vouloir supprimer toutes les données pour toujours ?",
    deleteTag: "Supprimer l'étiquette",
    deleteTagConfirm:
      "Êtes-vous sûr de vouloir supprimer cette étiquette ? Elle sera retirée de tous les Pokémon",
    dex: "Dex",
    dictAbilityUnobtainable:
      "Ce talent est actuellement impossible à obtenir :(",
    dictionary: "Dictionnaire",
    difficulty: "Difficulté : ★",
    difficulty2: "Difficulté : ★★",
    difficulty3: "Difficulté : ★★★",
    difficulty4: "Difficulté : ★★★★",
    disableBraveShield:
      "Désactive brave shield pour faire tourner correctement la page !",
    disabled: "désactivé",
    disclaimerLegal1:
      "Tous les personnages et la propriété intellectuelle associée présentés sont la propriété exclusive de Nintendo, Creatures Inc. et The Pokémon Company.",
    disclaimerLegal2:
      "Toute utilisation des ressources est uniquement à des fins non commerciales et de divertissement. Aucune propriété n'est revendiquée et tous les droits restent à leurs propriétaires respectifs.",
    disclaimerPlayOfficial: "Jouez aux jeux officiels !",
    discord: "Discord",
    divisionAndBelow: "division et en-dessous uniquement",
    divisionAndBelowOnly: "division et inférieures uniquement",
    divisionFilter: "division",
    divisionRestrictionError:
      "Un ou plusieurs Pokémon de l'équipe actuelle ne respectent pas les restrictions de division de la ligue actuelle",
    divisionRestrictionsNotMet:
      "Un ou plusieurs Pokémon de l'équipe actuelle ne respectent pas les restrictions de division de la ligue actuelle",
    dragDecor: "Glisse-dépose le décor sélectionné pour l'appliquer",
    dungeons: "Donjons",
    dungeonsHeader: "Donjons",
    dungeonsHelp:
      "Les Pokémon des Donjons ne peuvent pas être capturés, mais ils peuvent donner des objets utiles et de l'EXP. Les Donjons changent aussi chaque jour",
    dungeonsTab: "Donjons",
    editTeamName: "Modifier le nom de l'équipe",
    eggMoveDesc:
      "Ceci est une Capacité Œuf. Les capacités œuf peuvent être apprises avec la génétique en utilisant ce Pokémon comme hôte, avec un échantillon qui connaît ladite capacité œuf (souvent sous forme de Capacité Signature), avec les chances normales de transfert de capacité",
    eggMoveInherited: "Capacité Œuf héritée : {move} !",
    eggMoveLabel: "Capacité œuf",
    eggMoveOf: "et comme Capacité Œuf de {pokemon}",
    eggMoveRestrictionError:
      "Plusieurs Capacités Œuf identiques ne peuvent exister dans la même équipe si le Pokémon ne possède pas cette capacité comme Capacité Œuf ou Capacité Signature innée",
    eggMoveRule:
      "Plusieurs copies de la même Capacité Œuf ne peuvent pas exister dans la même équipe si le Pokémon hôte n'a pas cette capacité comme Capacité Œuf inhérente",
    elementNotFound: "Élément avec l'id 'text-data-raw' introuvable",
    elite: "Élite",
    enabled: "activé",
    errorLoadingData: "Erreur lors du chargement des données.",
    errorLoadingDataPrefix: "Erreur lors du chargement des données : ",
    eventAetherTakeover: "Aether Takeover",
    eventAncientsAwoken: "Ancients Awoken",
    eventPrimevalWilds: "Primeval Wilds",
    eventReturnToKanto: "Return to Kanto",
    eventScienceFuture: "Science Future",
    eventSinnohExpedition: "Sinnoh Expedition",
    eventTagCollection: "Collection ◈",
    eventTagTier1Raid: "Raid Niveau I ❖",
    eventTagTier2Raid: "Raid Niveau II ❖",
    eventTagTier3Raid: "Raid Niveau III ❖",
    eventTagTier4Raid: "Raid Niveau IV ❖",
    eventTagWildZone: "Zone sauvage ✦",
    events: "Événements",
    eventsDungeonTab: "Donjons",
    eventsEventTab: "Événements",
    eventsHelp:
      "Les événements peuvent contenir à la fois des objets et des Pokémon à obtenir. Les événements marqués d'un crâne signifient des ennemis puissants qui nécessitent généralement une équipe de haut niveau optimisée.",
    eventsHelpFull:
      "Les événements peuvent contenir à la fois des objets et des Pokémon à obtenir. Les événements marqués d'un crâne signifient des ennemis puissants qui nécessitent généralement un objet pour capturer (l'objet ne sera pas consommé en cas d'échec) qui peut être acquis dans les événements de collection. Tous les événements changent tous les trois jours.",
    eventsMenuHeader: "Événements",
    eventsTab: "Événements",
    evo: "Évo",
    evolution: "Évolution",
    evolutionFilter: "évolution",
    evolutionShop: "Évolution",
    exchange: "Échange",
    expTraining: "Entraînement EXP",
    expandLore: "Développer l'Histoire",
    expandLoreBtn: "Développer le Lore",
    expertTrainerPrefix: "Dresseur Expert ",
    exportData: "Exporter les Données",
    exportReward: "Exporter la Récompense",
    factoryPokemon: "Pokémon Usine",
    fieldEffect: "Effet de Terrain",
    fieldEffects: "Effets de terrain",
    fightAgain: "Recombattre",
    filters: "Filtres",
    finish: "Terminer",
    fireType: "Type Feu",
    firstSlotEmptyError:
      "Le premier emplacement de l'équipe ne doit pas être vide !",
    firstSlotNotEmpty: "La première place de l'équipe ne doit pas être vide !",
    floor: "Étage : ",
    foundInEvent: "Trouvé dans l'événement {event} (Rotation {rotation})",
    foundInWildArea: "Trouvé dans la zone sauvage {area} (Rotation {rotation})",
    foundInWildlifePark:
      "Trouvé aléatoirement dans la zone sauvage du Parc Naturel",
    frontierHelp:
      "La Zone de Combat propose différents types de défis sous une restriction de division spécifique qui change tous les trois jours. Les dresseurs affrontés ici se réinitialisent chaque jour",
    fullScreen: "Plein Écran",
    gameGuide: "Guide du Jeu",
    gameModifiers: "Modificateurs de jeu",
    gameModifiersTitle: "Modificateurs de Jeu",
    rightClickForDetails: "Clic droit / appui long pour voir les détails",
    gems: "Joyaux",
    genetics: "Génétique",
    geneticsFinishedPrompt:
      "Opération terminée !<br>Voulez-vous utiliser un objet d'aide génétique ?",
    geneticsHelp:
      "Avec la génétique, vous pouvez modifier les paramètres d'un Pokémon niveau 100 (l'hôte) et les influencer en fonction d'un autre Pokémon (l'échantillon). Le Pokémon hôte résultant aura un mélange des stats, IVs, nature et capacité des deux Pokémon.",
    geneticsHelpFull:
      "Avec la génétique, vous pouvez modifier les paramètres d'un Pokémon niveau 100 (l'hôte) et les influencer en fonction d'un autre Pokémon (l'échantillon).<br><br>En faisant cela, le niveau de l'hôte sera réinitialisé à 1 tout en conservant ses 4 capacités actuellement sélectionnées, avec une chance d'augmenter ses IV.<br><br>La génétique peut également être influencée en utilisant des objets d'aide génétique, utilisables à la fin de l'opération.<br><br>Vous pouvez trouver plus d'informations sur les spécificités de la génétique dans la section guide.",
    geneticsWarningExtreme:
      "Attention, le coût en puissance est extrême ! Seulement 3 IV maximum sur 6 par stat seront hérités !",
    geneticsWarningHigh:
      "Attention, le coût en puissance est élevé ! Seulement 5 IV maximum sur 6 par stat seront hérités !",
    geneticsWarningVeryHigh:
      "Attention, le coût en puissance est très élevé ! Seulement 4 IV maximum sur 6 par stat seront hérités !",
    getBetterAbility: "Obtiens un meilleur Talent",
    getBetterMovesStatDistribution:
      "Obtenez de meilleures capacités correspondant à votre répartition de stats (Physique/Spécial)",
    getBetterTypeMatchingMoves:
      "Obtenez de meilleures capacités correspondant aux types",
    giveNickname: "Donnez-lui un surnom !",
    goBack: "Retour",
    goBackButton: "Retour",
    goldenToBottle:
      "Tes capsules dorées ont été échangées contre des capsules à cause des changements de frontière",
    goods: "Marchandises",
    grassType: "Type Plante",
    greatLeague: "Grande Ligue",
    guide: "Guide",
    guideAbilities: "Combat : Talents",
    guideAbilitiesDesc:
      "Les talents sont des traits qu'un Pokémon peut posséder. Bien qu'ils soient aléatoires, certains talents ne peuvent apparaître que sur certains types. Les talents sont classés en trois catégories : communs, peu communs et rares<br><br>Les talents cachés sont des traits innés dépendants de l'espèce qui doivent être débloqués avec une Capsule Talent. Une fois débloqués, leur effet sera permanent en plus de l'autre talent. Un même talent caché et talent ne se cumulent pas",
    guideBuffs: "Combat : Altérations de stats",
    guideBuffsDesc:
      "Comme les effets de statut, les augmentations ou diminutions de stats durent 3 tours par défaut (sauf les baisses de Vitesse, qui durent 2 tours)<br><br>Les améliorations et affaiblissements de même ampleur ne se cumulent pas (ex. x2 Attaque +50%), mais les différents oui (Attaque +50% +100%)",
    guideCompatDesc:
      "La compatibilité détermine à quel point l'échantillon ressemble à l'hôte. Cela influence divers paramètres comme les chances d'héritage ou les mutations shinys (uniquement si l'échantillon est shiny)<br><br>Partager un type avec l'échantillon donne un niveau de compatibilité, tandis que partager deux types l'augmente de deux niveaux.<br><br>De plus, si l'échantillon appartient à la même ligne évolutive que l'hôte, il recevra une compatibilité maximale",
    guideCrossPower: "Combat : Cross-Power",
    guideCrossPowerDesc:
      "Si un Pokémon utilise une capacité offensive précédée (immédiatement ou non) par une capacité offensive d'un type différent de celle exécutée, il recevra un multiplicateur de dégâts x1,3. Cela est indiqué par un motif en croix sur la barre de capacité de la capacité concernée",
    guideExp: "Combat : Expérience",
    guideExpDesc:
      "Les Pokémon gagnent de l'expérience en vainquant des ennemis et en partagent une partie avec l'équipe. Cela reste vrai même si les Pokémon de l'équipe sont vaincus<br><br>Le gain d'expérience est proportionnel à la différence de niveau. Une différence de ±5 niveaux donnera le même montant, tandis qu'une différence supérieure à 5 niveaux augmentera grandement le montant reçu.<br><br>Un Pokémon de 10 niveaux supérieurs ne donnera aucune expérience",
    guideFatigue: "Combat : Fatigue de Combat",
    guideFatigueDesc:
      "Les Pokémon perdent une très petite fraction de leurs PV maximums en attaquant. Ces dégâts peuvent être atténués par la somme des PV, Défense et Défense Spéciale du Pokémon, ce qui signifie que les Pokémon plus résistants peuvent combattre plus longtemps",
    guideGenetics: "Génétique : Guide Rapide",
    guideGeneticsCompat: "Génétique : Compatibilité",
    guideGeneticsCost: "Génétique : Coût en Puissance",
    guideGeneticsDesc:
      "La génétique vous permet de modifier un Pokémon au-delà de ce qui est considéré comme normal pour l'espèce. Voici un aperçu rapide de ce que vous pouvez accomplir avec les opérations :<br><br>Mutation Shiny : Vous pouvez hériter de la mutation shiny, avec 100% de chances, pour les membres de la même famille. Vous pouvez aussi tenter de propager une nouvelle mutation shiny en utilisant un échantillon shiny<br><br>Amélioration des IV : Simplement en effectuant une opération, quelle que soit la compatibilité, les IV de l'hôte tenteront d'augmenter. Utile pour les Pokémon avec peu ou pas d'IV<br><br>Héritage des IV : Une alternative avancée à la précédente. Vous pouvez hériter des IV d'une espèce à une autre selon des facteurs comme la compatibilité ou les objets génétiques utilisés<br><br>Rappel de Capacité : Lors de la finalisation d'une opération, toutes les capacités sauf les quatre sélectionnées de l'hôte seront réinitialisées, ce qui signifie que vous pouvez tenter d'obtenir des capacités plus puissantes à chaque opération<br><br>Héritage de Capacité : Une alternative avancée à la précédente, vous pouvez hériter de capacités de l'échantillon qui ne seraient autrement pas disponibles par l'apprentissage<br><br>Héritage de Talent : En utilisant un Nœud Destin, vous pouvez échanger les talents avec l'échantillon, obtenant des combinaisons autrement impossibles",
    guideInspectingDesc:
      "Clic droit / appui long sur la plupart des éléments peut donner plus d'informations. Vous pouvez faire un clic droit / appui long supplémentaire sur les informations contenues dans les informations.<br><br>Certains éléments inspectables incluent les zones, les dresseurs, les capacités, les effets de statut, les Pokémon sauvages, les Pokémon de l'équipe et les objets",
    guideMoves: "Combat : Capacités",
    guideMovesDesc:
      "Les capacités sont apprises tous les 7 niveaux. Les capacités peuvent être changées par clic droit / appui long sur un Pokémon de l'équipe<br><br>Les capacités offensives sont divisées en capacités physiques et spéciales<br>La catégorie de la capacité détermine si les dégâts dépendent de l'Attaque ou de l'Attaque Spéciale de l'utilisateur et de la Défense ou Défense Spéciale de la cible<br><br>Certains Pokémon peuvent avoir des Capacités Signature. Les Capacités Signature dépendent de l'espèce et sont apprises au niveau 100. Elles ne peuvent pas être héritées par génétique, sauf si l'hôte possède la Capacité Œuf correspondante<br><br>Certaines capacités peuvent être restreintes. Une seule capacité restreinte peut être équipée à la fois sur le Pokémon actif",
    guidePowerCostDesc:
      "Le coût en puissance détermine à quel point il est coûteux de modifier l'hôte. Cela influence le temps nécessaire pour compléter l'opération<br><br>Cela est déterminé par la division de l'hôte. Une division plus élevée augmentera exponentiellement le temps requis pour modifier le Pokémon",
    guideShiny: "Pokémon Shinys",
    guideShinyDesc:
      "À un taux de 1/400, les Pokémon peuvent être shinys. Ces chances peuvent être augmentées par différents moyens<br><br>Les Pokémon shinys infligent 15% de dégâts supplémentaires. La distinction visuelle peut être activée/désactivée depuis leur menu de capacités. Cela n'affectera pas le bonus de dégâts<br><br>Les Pokémon shinys ne conservent pas leur chromatisme à l'évolution. À la place, la génétique doit être utilisée.<br><br>Si les étoiles s'alignent, un Pokémon shiny peut recevoir un signe stellaire, une pigmentation encore plus rare. Cela n'a aucun avantage pratique et ne peut pas être hérité ou muté par la génétique",
    guideStab: "Combat : STAB",
    guideStabDesc:
      "Si un Pokémon utilise une capacité offensive du même type que l'un de ses types, les dégâts de la capacité sont augmentés de x1,5<br>C'est ce qu'on appelle le bonus de même type, ou STAB<br><br>De plus, les Pokémon n'ayant qu'un seul type recevront +0,2 de dégâts STAB supplémentaires",
    guideStats: "Combat : Stats",
    guideStatsDesc:
      "Chaque espèce de Pokémon partage les mêmes stats de base qui déterminent les stats réelles d'un Pokémon à un niveau donné<br><br>Les stats déterminent les dégâts infligés et reçus (voir Combat : Capacités). La stat de vitesse détermine la rapidité d'exécution d'une capacité<br><br>Les Valeurs Individuelles, ou IV, multiplient les stats de base et peuvent être augmentées en obtenant plusieurs exemplaires de Pokémon<br><br>Selon leurs stats de base, une Division leur sera assignée. Vous pouvez utiliser cette lettre de Division pour évaluer rapidement quels Pokémon peuvent mieux performer à court terme",
    guideStatus: "Combat : Effets de Statut",
    guideStatusDesc:
      "Certaines capacités infligent des Effets de Statut tels que Confus, Brûlé, Empoisonné, Gelé, Paralysé ou Endormi.<br><br>Vous pouvez vérifier leurs effets en faisant un clic droit / appui long<br><br>Les effets de statut, comme les changements de stats temporaires, diminuent au fil des tours. Vous ne pouvez appliquer qu'un seul effet de statut à la fois. Ils durent 3 tours par défaut (sauf la Paralysie)",
    guideWeather: "Combat : Météo",
    guideWeatherDesc:
      "Certaines capacités peuvent changer la météo en conditions altérées telles qu'Ensoleillé, Pluvieux, Tempête de Sable, Grêle, Brumeux, Terrain Électrique, Terrain Herbu, Terrain Brumeux, Distorsion, Salle Étrange, Salle Croix, Écran Lumière ou Rune Protectrice<br><br>Vous pouvez vérifier leurs effets en faisant un clic droit / appui long<br><br>Les conditions météorologiques altérées durent 15 tours et ne peuvent être changées qu'après 30 tours",
    haTraining: "Entraînement Talent Caché",
    hardMode: "Mode Difficile",
    hardModeHelp:
      "Les dresseurs ont le double de PV. S'applique uniquement aux Dresseurs VS",
    hasBeenUnlocked: " a été débloqué !",
    hasBeenUnlocked2: "a été débloqué !",
    hasEggMove: "a une capacité œuf",
    hasLearnt: " a appris ",
    hasRibbon: "a un ruban",
    hasSignature: "a une signature",
    hasStarSign: "a un signe astral",
    health: "PV",
    held: "Tenu",
    helpBattleArenaDesc:
      "L'Arène de Combat met en scène cinq dresseurs dont vous pouvez choisir la difficulté pour des récompenses plus importantes. Les effets de terrain et modificateurs de combat seront également randomisés avec les dresseurs. Les dresseurs combattus ici réinitialisent chaque jour.",
    helpBattleArenaTitle: "Arène de Combat",
    helpBattleFactoryDesc:
      "L'Usine de Combat est un défi où votre objectif est d'infliger un maximum de dégâts. Chaque tour, vous subirez des dégâts fixes et les dégâts des altérations de statut sont désactivés.<br><br>À chaque entrée dans l'usine, votre score sera réinitialisé, mais vous pouvez réessayer autant de fois que vous le souhaitez.<br><br>Votre meilleur score sera sauvegardé et réinitialisé lors du changement de rotation de ligue. Vous serez récompensé pour votre meilleur score atteint à la fin du combat.<br><br>Un maximum de 100 Capsules d'Or est achievable.",
    helpBattleFactoryTitle: "Usine de Combat",
    helpCurryDesc:
      "Toutes les 12h, vous pouvez sélectionner jusqu'à trois talents pour qu'ils soient actifs pour toute votre équipe pendant les raids pendant 1 heure. Ces talents suivent les mêmes règles que les talents normaux et ne se cumulent pas avec ceux déjà existants.",
    helpCurryTitle: "Curry",
    helpCustomChallengesDesc:
      "Créez des combats personnalisés à partir de vos propres pools et équipes ennemies. Importez et exportez des codes de défi pour les partager.",
    helpCustomChallengesTitle: "Défis personnalisés",
    helpDimensionDesc:
      "Bienvenue, vaillant dresseur, dans la dernière frontière, la Méga-Dimension, qui abrite uniquement les Pokémon les plus puissants de tout l'univers !<br><br>Les trous de ver ont chacun leurs propres règles, avec des zones uniques, des effets de terrain et des talents. En plus des effets de terrain, les talents se déclencheront lors du combat contre le boss.<br><br>Les Pokémon apparaissant dans la faille sont aléatoires et changeront à chaque rotation.",
    helpDimensionTitle: "Méga-Dimension",
    helpDungeonsDesc:
      "Les Pokémon des donjons ne peuvent pas être capturés, mais ils peuvent laisser tomber des objets utiles et de l'EXP. Les donjons changent également chaque jour.",
    helpDungeonsTitle: "Donjons",
    helpEventsDesc:
      "Les événements peuvent contenir à la fois des objets et des Pokémon à obtenir. Les événements marqués d'un crâne signifient des ennemis puissants qui nécessitent généralement un objet pour être capturés (l'objet ne sera pas consommé en cas d'échec), lequel peut être acquis dans les événements de collection. Tous les événements changent tous les trois jours.",
    helpEventsTitle: "Événements",
    helpFrontierDesc:
      "La Zone de Combat propose différents types de défis soumis à une restriction de division spécifique qui change tous les trois jours. Les dresseurs combattus ici réinitialisent chaque jour.",
    helpFrontierTitle: "Zone de Combat",
    helpGeneticsDesc:
      "Avec la génétique, vous pouvez modifier les paramètres d'un Pokémon niveau 100 (l'hôte) et les influencer à partir d'un autre Pokémon (l'échantillon).<br><br>En faisant cela, le niveau de l'hôte sera réinitialisé à 1 tout en conservant ses 4 capacités actuellement sélectionnées, avec une chance d'augmenter ses IV.<br><br>La génétique peut également être influencée en utilisant des objets d'aide génétique, utilisables à la fin de l'opération.<br><br>Vous pouvez trouver plus d'informations sur les spécificités de la génétique dans la section guide.",
    helpGeneticsTitle: "Génétique",
    helpMainChallengesDesc:
      "Les combats scénarisés et les défis sélectionnés se trouvent ici. Plus de défis principaux arrivent bientôt.",
    helpMainChallengesTitle: "Défis principaux",
    helpModAfkDesc:
      "Les dégâts de fatigue sont réduits par 3.<br><br>Ce modificateur n'a aucun effet secondaire.",
    helpModAfkTitle: "Absence prolongée",
    helpModHardDesc:
      "Les dresseurs ont le double de PV. S'applique uniquement aux Dresseurs VS.",
    helpModHardTitle: "Mode difficile",
    helpModNoIvsDesc:
      "Tous vos Pokémon ont fonctionnellement des IV max quels que soient leurs IV réels. Cela peut être désactivé sans aucun changement permanent.<br><br>Ce modificateur n'a aucun effet secondaire.",
    helpModNoIvsTitle: "Sans IV",
    helpModNuzlockeDesc:
      "Si l'un de vos Pokémon est mis K.O. en combattant un dresseur des Dresseurs VS, il deviendra définitivement inutilisable jusqu'à ce que vous désactiviez ce mode.",
    helpModNuzlockeTitle: "Mode Nuzlocke",
    helpPokerusDesc:
      "Toutes les 12 heures, certains de vos Pokémon contracteront le Pokerus. Ce virus est entièrement bénéfique et ajoutera un niveau de compatibilité au Pokémon en génétique lorsqu'il est utilisé comme hôte.",
    helpPokerusTitle: "Pokerus",
    helpSearchDictionaryTitle: "Mots-clés",
    helpSearchPokedexTitle: "Mots-clés",
    helpSettingTitle: "Paramètre",
    helpSettingTitleAlt: "Paramètre",
    helpSettingsAlternateWildDesc:
      "Diminue la rotation actuelle de la zone sauvage de -1. Utile si vous avez manqué la rotation d'hier, ou si votre emploi du temps ne correspond pas à celui du jeu.",
    helpSettingsNewPkmnDesc:
      "Masque automatiquement les Pokémon obtenus qui ne sont pas nouveaux après un combat. Sont exclus de ce paramètre : les nouveaux Pokémon, les augmentations d'IV et les Pokémon shinys.",
    helpSpiralDesc:
      "La Tour de Combat est un défi à difficulté infinie où chaque Pokémon vaincu augmente la difficulté. Les immunités de type dans ce défi sont converties en résistances.<br><br>À chaque entrée dans la tour, vous recommencerez à l'étage 1, mais vous pouvez réessayer autant de fois que vous le souhaitez.<br><br>Votre plus haut étage atteint sera sauvegardé et réinitialisé lors du changement de rotation de ligue. Vous serez récompensé pour chaque nouvel étage record atteint à la fin du combat.<br><br>Un maximum de 100 Capsules d'Or est achievable.",
    helpSpiralTitle: "Tour de Combat",
    helpTrainingDesc:
      "Affrontez des vagues d'ennemis avec vos Pokémon pour devenir plus fort. Vous aurez naturellement l'avantage de type contre les Pokémon combattus, et leur niveau s'adaptera au vôtre. Les immunités de type en entraînement sont converties en résistances.<br><br>Échouer un entraînement ne rapportera aucun gain.",
    helpTrainingTitle: "Entraînement",
    helpVsTrainersDesc:
      "Vainquez des dresseurs de plus en plus difficiles et forgez-vous une réputation ! Vous débloquerez peut-être de nouvelles zones à explorer en progressant.",
    helpVsTrainersTitle: "Dresseurs VS",
    helpWildAreasDesc:
      "Tous les Pokémon des zones sauvages peuvent être capturés en les vainquant. Les zones sauvages changent chaque jour, alors n'oubliez pas de vérifier ce qui peut être capturé aujourd'hui !",
    helpWildAreasTitle: "Zones sauvages",
    hiddenAbilityDesc:
      "Ceci est un Talent Caché. Les talents cachés sont débloqués via des Capsules de Talent ou par l'Entraînement, et ils fonctionnent en parallèle de votre talent régulier",
    hiddenAbilityExplanation:
      "<br><br>Ceci est un Talent caché. Les talents cachés sont débloqués via des Capsules de Talent ou par l'Entraînement, et ils fonctionnent en parallèle de votre talent régulier.",
    hiddenAbilityOf:
      "Cette capacité ne peut apparaître que comme Talent Caché de {pokemon}",
    hideNonNew: "Cacher les Pokémon déjà obtenus dans le résumé :",
    highestFloor: "Étage Max : ",
    highestReachedFloorLabel: "Plus haut étage atteint : ",
    highestScore: "Score Max : ",
    highestSpiralingTowerFloor: "Plus haut étage de la Tour Spirale atteint",
    howAboutBattleFrontier: "Et la Zone de Combat ?",
    howManyWillYouBuy: "Combien en achèterez-vous ?",
    howdy: "Salut ! J'ai été assigné pour te montrer les ficelles du métier",
    hpBst: "PV BST",
    hpIv: "PV IV",
    hpIvIncreased: "IV PV augmenté !",
    hpIvInherited: "IV PV hérité !",
    hpRemainingLabel: "PV Restants",
    hpTotal: "PV Total",
    importData: "Importer les Données",
    improvePokemonPrompt: "Essayez d'améliorer davantage votre Pokémon :",
    inBag: "dans le sac",
    inTotal: "au total",
    increasedStat: "Augmentation de {stat}",
    increasedStats: "Augmentation de {rest} et {last}",
    inheritAtk: "% d'hériter des IV Attaque de l'échantillon",
    inheritDef: "% d'hériter des IV Défense de l'échantillon",
    inheritHp: "% d'hériter des IV PV de l'échantillon",
    inheritMove: "% d'hériter d'une capacité de l'échantillon",
    percentForShinyMutation: "% de mutation shiny",
    inheritSAtk: "% d'hériter des IV Att. Spé. de l'échantillon",
    inheritSDef: "% d'hériter des IV Déf. Spé. de l'échantillon",
    inheritSpe: "% d'hériter des IV Vitesse de l'échantillon",
    inspecting: "Inspection",
    isNowLevel: "est maintenant niveau",
    isShiny: "est shiny",
    itemCurrentlyUnobtainable:
      "Cet objet est actuellement impossible à obtenir",
    itemExportReward: "<span>Obtenu via la récompense d'export</span>",
    itemShopPurchase: "<span>Peut être acheté au Poké-Mart</span>",
    itemSpiralingReward: "<span>Récompense de la Tour Spirale</span>",
    itemUnobtainable:
      "<span>Cet objet est actuellement impossible à obtenir</span>",
    itemWillBeConsumed: "L'objet sera consommé à l'utilisation",
    items: "Objets",
    itemsRotationTimer:
      '\n    <svg style="scale:0.7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/><rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="450s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect><rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1"><animateTransform attributeName="transform" dur="37.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></rect></svg>\n    Les objets disponibles changeront dans <font style="margin-left:0.3rem" class="time-counter-daily">...</font>',
    ivStats: "Stats IV",
    ivTraining: "Entraînement IV",
    ivsUp: "IVs Up !",
    ivsUpAlt: "<span>IVs + !</span>",
    key: "Clé",
    keywords: "Mots-clés",
    keywordsPokedexHelp:
      "Opérateurs :<br>![mot-clé] : Exclure de la recherche<br>[motA] ou [motB] : Rechercher motA OU motB<br>[motA] [motB] : Rechercher motA ET motB<br><br>Mots-clés :<br>shiny, pokerus, signature, eggMove, [type], [talent], [talent caché], [niveau], [capacité]<br>ivsum(< = >)[nombre] : Vérifier la somme des IV (ex : ivsum<36)",
    keywordsDictionaryHelp:
      "Opérateurs :<br>![mot-clé] : Exclure de la recherche<br>[motA] ou [motB] : Rechercher motA OU motB<br>[motA] [motB] : Rechercher motA ET motB<br><br>Mots-clés Pokémon :<br>nonobtenable, sauvage, parc, evenement, zdc, boutique, shiny, capture, signature, eggMove, [type], [talent caché]<br><br>Mots-clés Capacités/Talents :<br>physique, special, signature, [type], [talent]",
    language: "Français",
    lastTurnsBeforeFainting:
      "Ce Pokémon peut durer {turns} tours avant de tomber de fatigue au combat avec des IVs max",
    learnableByTypes: "Apprenable par les types {types} {signature}",
    learnt: "appris",
    learntMoves: "Capacités Apprises",
    leaveCombat: "Quitter le Combat",
    leftForNextLevel: "({left} restant pour le prochain niveau)",
    letsDoIt: "Allons-y !",
    levelAbbreviation: "N.",
    levelAbbreviationShort: "niv",
    levelFilter: "niveau",
    levelLabel: "Niveau",
    lightTheme: "Thème Clair",
    lilacTheme: "Thème Lilas",
    limited: "Limité",
    limitedAreaUntil: "Zone Limitée Jusqu'au {date}",
    littleCup: "Little Cup",
    load: "Charger",
    loadButton: "Charger",
    lockedHa: "Talent caché verrouillé",
    longerAFK: "AFK Plus Long",
    longerAFKHelp:
      "Les dégâts de fatigue sont réduits par 3<br><br>Il n'y a aucun effet secondaire à ce modificateur",
    lvl: "niv ",
    mainChallenges: "Défis Principaux",
    mainChallengesHelp:
      "Les défis narratifs et les challenges sélectionnés se trouvent ici. Plus de Défis Principaux arrivent bientôt.",
    masterDifficulty: "Maître",
    masterLeague: "Master Ligue",
    masterTrainerPrefix: "Dresseur Maître ",
    maxLevelReached: "(niveau max atteint)",
    megaDimension: "Méga-Dimension",
    megaDimensionHelp:
      "Bienvenue vaillant dresseur dans la frontière finale, la Méga-Dimension, qui abrite uniquement les Pokémon les plus puissants de tout l'univers. Ce sont des ennemis redoutables qui nécessitent généralement une équipe de haut niveau optimisée.",
    memo: "Mémo",
    memory: "Mémoire",
    metronomeCasts: "Métronome lance : ",
    modifyGenetics: "Modifie les stats avec la Génétique",
    modifyStatsWithGenetics: "Modifiez les stats avec la Génétique",
    moveBasePower: "PB",
    moveInherited: "Capacité héritée : {move} !",
    moves: "Capacités",
    movesTransferred: "Capacités transférées !",
    multipleZCrystals:
      "Plusieurs Z-Cristaux ne peuvent pas être équipés dans une seule équipe",
    multipleZCrystalsError:
      "Plusieurs Cristaux Z ne peuvent pas être équipés dans une même équipe",
    mysteryGift: "Cadeau Mystère",
    mysteryGiftClaimUntil: "Vous avez jusqu'au {date} pour réclamer",
    mysteryGiftInfo:
      "Appui long/Clic droit sur le cadeau ci-dessous pour recevoir un Kecleon en cadeau !<br>Il sera shiny et portera un Ruban Souvenir",
    mysteryGiftUntil: "Vous avez jusqu'au",
    natureSuffix: "Nature",
    or: "ou",
    and: "et",
    new: "Nouveau !",
    newAbility: "Nouvelle capacité !",
    newAbilityTitle: "Nouveau talent !",
    newItems: "Nouveaux Objets !",
    updateAvailableBanner:
      "Une nouvelle mise à jour est disponible ! Clique ici pour recharger.",
    newItemsDue:
      "Suite à la mise à jour des récompenses VS, tu as été récompensé pour tes dresseurs vaincus :",
    newPokemon: "Nouveau Pokémon !",
    newPokemonTag: "<span>Nouveau !</span>",
    newPokemonTagAlt: "<span>Nouveau !</span>",
    nextRewardAt: "Prochaine récompense à {X} score",
    noAdditionalEffects: "Aucun effet supplémentaire",
    noDataFoundInInput: "Aucune donnée trouvée dans le champ",
    noDataInInput: "Aucune donnée trouvée dans le champ",
    noIVs: "Sans IVs",
    noIVsHelp:
      "Tous vos Pokémon ont fonctionnellement des IVs max indépendamment de leurs IVs réels. Cela peut être désactivé sans conséquence permanente",
    noMoreRewards:
      "Plus de récompenses disponibles. Essaie d'obtenir un meilleur score ?",
    noMovesToRemember: "Pas de nouvelles attaques à remémorer",
    noNewGeneticChanges: "Aucun nouveau changement génétique.",
    noNewItems: "Pas de nouveaux objets ou Pokémon :(",
    noNewItemsOrPokemon: "Pas de nouveaux objets ou Pokémon :(",
    noNewMoves: "Pas de nouvelles capacités à retenir",
    noSaveData: "Aucune sauvegarde trouvée",
    noTagsCreateFirst:
      "Aucune étiquette créée pour l'instant. Créez votre première étiquette ci-dessus !",
    noTagsCreated: "Aucun tag créé. Créez votre premier tag ci-dessus !",
    noTagsCreatedShort: "Aucun tag créé",
    nope: "Non",
    notEvolvedAll: "non évolué (tous)",
    notEvolvedLevel: "non évolué (niveau)",
    notShiny: "non shiny",
    notYetImplemented: "Pas encore implémenté",
    nothingButTimeLost: "Seul le temps sera perdu",
    novice: "Novice",
    nowHas: "a maintenant",
    nowHasNature: "a maintenant une nature",
    nuzlockeMode: "Mode Nuzlocke",
    nuzlockeRestrictionError:
      "Un ou plusieurs Pokémon de l'équipe actuelle ne peuvent pas être utilisés selon les restrictions Nuzlocke",
    nuzlockeRestrictions:
      "Un ou plusieurs Pokémon de l'équipe actuelle ne peuvent pas être utilisés selon les restrictions Nuzlocke",
    nuzlokeMode: "Mode Nuzlocke",
    nuzlokeModeHelp:
      "Si l'un de vos Pokémon est mis K.O. en combattant un dresseur des Dresseurs VS, il deviendra définitivement inutilisable jusqu'à ce que vous vainquiez le Conseil 4",
    obtainedBattleFrontierRandom:
      "Obtenu comme récompense aléatoire dans la Zone de Combat",
    obtainedInEvent: "Obtenu dans l'événement {event} (Rotation {rotation})",
    obtainedViaExportReward: "Obtenu via la Récompense d'Export",
    oledTheme: "Thème OLED",
    onHPBarDepleted: "Lorsque la barre de PV Nº{number} est épuisée",
    oneBatonPassOnly:
      "Vous ne pouvez avoir qu'un seul Reflet dans votre équipe",
    onlyTimeLost: "Seul du temps sera perdu",
    onyxTheme: "Thème Onyx",
    operationFinished:
      "Opération terminée !<br>Voulez-vous utiliser un objet d'aide génétique ?",
    operationOverview: "Vue d'ensemble de l'opération",
    paste: "Coller",
    pasteButton: "Coller",
    payAndCook: "Payer et cuisiner",
    permanentSeasonalTheme: "Thème Saisonnier Permanent",
    pickDifficultyNextTrainer:
      "Choisissez une difficulté pour le prochain dresseur",
    pleaseEnterTagName: "Veuillez entrer un nom de tag",
    pleaseSelectIcon: "Veuillez sélectionner une icône",
    point: "point",
    points: "points",
    pokeMart: "Poké-Mart",
    pokemon: "Pokémon",
    pokemonCannotBeCaughtStage:
      "Ce Pokémon ne peut pas être capturé à son stade actuel",
    pokemonShop: "Pokémon",
    shop: "Boutique",
    shopHelp:
      "Achète des objets utiles avec des Capsules d'Argent et des Capsules d'Or. La rotation des objets change chaque jour.",
    pokemonUnobtainable: "Ce Pokémon est impossible à obtenir",
    pokerus: "Pokérus",
    pokerusBoost:
      "Pokerus détecté sur l'hôte ! La compatibilité génétique est augmentée d'un niveau !",
    pokerusHelp:
      "Toutes les 12 heures, certains de vos Pokémon contracteront le Pokérus. Ce virus est entièrement bénéfique et ajoutera un niveau d'IV à l'une des stats du Pokémon infecté. Vous pouvez conserver jusqu'à 10 Pokémon dans la Boîte Pokérus.",
    pokerusHelpFull:
      "Toutes les 12 heures, certains de vos Pokémon contracteront le Pokerus. Ce virus est entièrement bénéfique et ajoutera un niveau de compatibilité au Pokémon en génétique lorsqu'il est utilisé comme hôte",
    powerCost: "Coût en Puissance",
    powerLabel: "Puissance",
    raidAbilities:
      "Lors des raids : Les talents suivants ont été gagnés pour toute l'équipe :",
    raidAbilitiesGained:
      "Pendant les raids : Capacités temporairement gagnées pour toute votre équipe :",
    currySelectIngredients:
      "Sélectionne des ingrédients à ajouter au curry ! [5/5]",
    selectPokemonToTeachHydroPump:
      "Sélectionne un Pokémon à apprendre Hydro Pump",
    thanksForDialga: "Merci pour le Dialga !",
    randomPokemonEvery12h:
      "Toutes les 12h vous pourriez recevoir un Pokémon aléatoire",
    rare: "rare",
    rareAbility: "Capacité Rare",
    rareExcl: "Rare !",
    rareParen: "(Rare)",
    rarityCommon: "(Commun)",
    rarityRare: "(Rare)",
    rarityUncommon: "(Peu commun)",
    reachMinScore:
      "Atteins un score minimum de {X} pour obtenir des récompenses",
    reachMinimumScore:
      "Atteignez un score minimum de {score} pour obtenir des récompenses",
    reflectDesc: "Réduit les dégâts des attaques physiques de 75%",
    remaining: "Restant : ",
    remove: "Retirer",
    removeDecor: "Retirer le décor",
    removeStarSign: "Retirer le signe astral",
    repeatedEggMoves: "Capacités Œuf répétées",
    requiresAn: "Nécessite un {item}",
    requiresItemToEnter: "Nécessite un {item} pour entrer",
    requiresTicket: "Nécessite un Ticket Recombat Auto {item}",
    reset: "Réinitialiser",
    restaurant: "Restaurant",
    restrictedAction: "Action Restreinte",
    restrictedActionDesc:
      "Les capacités ne peuvent pas être changées librement pour le moment",
    restrictedActionTitle: "Action restreinte",
    restrictedMove: "Capacité Restreinte",
    restrictedMoveDesc:
      "Les capacités restreintes ne peuvent pas être changées librement pendant le combat",
    restrictedMoveInfo:
      "Cette capacité est restreinte ({icon}) et une seule d'entre elles peut être présente dans les capacités actives à la fois",
    restrictedMoveTitle: "Capacité restreinte",
    restrictedMoves: "Capacités restreintes",
    restrictedMovesEquipped:
      "Un ou plusieurs Pokémon de l'équipe actuelle ont plusieurs capacités restreintes ({icon}) équipées",
    restrictedPokemon: "Pokémon Restreints",
    restrictedZMoves: "Capacités Z restreintes",
    returnToKanto: "Retour à Kanto",
    returnToKantoBanner: "- Retour à Kanto -",
    rewardFromSpiralingTower: "Récompense de la Tour Spirale",
    rewardLabel: "Récompense",
    rewardReceived: "Récompense reçue",
    rewardsAutoAdded: "Les récompenses ont été ajoutées automatiquement",
    rotationHeader: "Rotation",
    ribbonFilter: "ruban",
    rightClickKeywords: "Clic droit / Appui long pour voir les mots-clés",
    rightClickKeywords2: "Clic droit pour voir les mots-clés",
    rightClickLongTapFieldDetails:
      "(Clic droit / appui long pour voir les détails de l'effet de terrain)",
    rookieTrainerPrefix: "Dresseur Débutant ",
    roomCrossDesc:
      "Augmente les dégâts infligés par les capacités cross-power de 30%",
    roomTrickDesc:
      "Les Pokémon lents deviennent rapides, les rapides deviennent lents. De plus, multiplie les dégâts selon la lenteur originelle du Pokémon, de x1,0 à x1,5",
    roomWeirdDesc:
      "Copie toutes les stats d'Attaque et de Défense de base de l'ennemi",
    rotationLabel: "Rotation : {current}/{max}",
    safeguardDesc:
      "Protège votre équipe des altérations de statut et des baisses de stats",
    satkBst: "ATQ.SP BST",
    satkIv: "ATQ.SP IV",
    satkIvIncreased: "IV ATQ.SP augmenté !",
    satkIvInherited: "IV ATQ.SP hérité !",
    satkTotal: "ATQ.SP Total",
    saveAndExit: "Sauvegarder et quitter",
    saveAndGo: "Sauv. et lancer",
    saveChanges: "Sauvegarder les Modifications",
    saveCodeCopy: "Copier",
    saveCodeDescription:
      "Voici votre code de sauvegarde<br>Vous pouvez copier ou coller des codes de sauvegarde ici pour exporter ou importer des sauvegardes<br>",
    saveCodeDescriptionNoData:
      "Vous pouvez copier ou coller des codes de sauvegarde ici pour exporter ou importer des sauvegardes<br>",
    saveCodeLoad: "Charger",
    saveCodePaste: "Coller",
    saveTag: "Sauvegarder le tag",
    saveTagButton: "Enregistrer l'étiquette",
    savefileCodeExplanation:
      "Voici votre code de sauvegarde<br>Vous pouvez copier ou coller des codes de sauvegarde ici pour exporter ou importer des sauvegardes<br>",
    savefileCodeExplanationShort:
      "Vous pouvez copier ou coller des codes de sauvegarde ici pour exporter ou importer des sauvegardes<br>",
    scoreLabel: "Score : {score}",
    screenLightDesc:
      "Les dégâts super efficaces infligés à votre équipe sont réduits à neutre",
    sdefBst: "DEF.SP BST",
    sdefIv: "DEF.SP IV",
    sdefIvIncreased: "IV DEF.SP augmenté !",
    sdefIvInherited: "IV DEF.SP hérité !",
    sdefTotal: "DEF.SP Total",
    seasonListContainer:
      '<div id="season-list" style="display:flex; justify-content:center;align-items:center;flex-direction:column; gap:0.5rem"></div>',
    seasonalEventPrompt:
      "Sélectionnez l'événement saisonnier à démarrer. Il durera 10 jours, puis sera remplacé par les événements en cours une fois terminé.",
    selectAnEvent: "Sélectionnez un événement",
    selectAtLeastOneIngredient: "Sélectionnez au moins un ingrédient d'abord",
    selectHostPokemon: "Sélectionnez un Pokémon hôte",
    selectIconLabel: "Sélectionnez une icône",
    selectIngredients: "Sélectionne les ingrédients à ajouter au curry !",
    selectIngredientsCurry:
      "Sélectionnez des ingrédients à ajouter au curry ! [{count}/3]",
    selectMoveReplace:
      "Sélectionne une capacité ci-dessous et remplace-la par une de la liste des capacités apprises",
    selectMoveToRemember: "Sélectionnez la capacité à retenir",
    selectPokemonAddTeam: "Sélectionnez un Pokémon à ajouter à l'équipe",
    selectPokemonForTeam: "Sélectionnez un Pokémon à ajouter à l'équipe",
    selectPokemonTeach: "Sélectionne un Pokémon pour enseigner",
    selectPokemonToTeach: "Sélectionnez un Pokémon pour lui enseigner {move}",
    selectPokemonToTrain: "Sélectionnez un Pokémon à entraîner",
    selectPokemonToUseItem: "Sélectionnez un Pokémon pour utiliser {item}",
    selectPokemonUseItem: "Sélectionnez un Pokémon pour utiliser",
    selectSamplePokemon: "Sélectionnez un Pokémon échantillon",
    selectSeasonalEvent:
      "Sélectionnez l'événement saisonnier à démarrer. Il durera les 10 jours suivants, et sera remplacé par les fêtes officielles en cours ou à venir.",
    selectStarter: "Choisis un starter !",
    setting: "Paramètre",
    settings: "Paramètres",
    settingsAlternateWildHelp:
      "Diminue la rotation actuelle des Zones Sauvages de -1. Utile si vous avez manqué la rotation d'hier, ou si votre emploi du temps ne correspond pas à celui du jeu.",
    settingsNewPkmnHelp:
      "Masque automatiquement les Pokémon obtenus qui ne sont pas nouveaux après un combat. Exclus de ce paramètre : Nouveaux Pokémon, Améliorations d'IVs et Shinys.",
    shiny: "✦Shiny✦!",
    shinyFilter: "shiny",
    starSignUnlockInfo:
      "Les signes astraux sont débloqués pour toute la famille évolutive tant qu'ils sont shiny",
    shinyMutation: "% de mutation shiny",
    shinyTag: "<span>✦Shiny✦ !</span>",
    shopApricornRotation: "Les objets disponibles changeront dans",
    shopDecorRotation: "La décoration disponible changera dans",
    shopGoBack: "Retour",
    shopNameAetherKeycardX25: "Carte Aether x25",
    shopNameAncientKeystoneX25: "Clé de Voûte Ancienne x25",
    shopNameAncientOrchidX25: "Orchidée Ancienne x25",
    shopNameBarbaraciteX21: "Barbaracite x21",
    shopNameBottleCapX2: "Capsule d'Argent x2",
    shopNameBottleCapX5: "Capsule d'Argent x5",
    shopNameEpochFeatherX25: "Plume Époque x25",
    shopNameFalinksiteX21: "Falinksite x21",
    shopNameFutureDiskX25: "Disque Futur x25",
    shopNameHawluchaniteX21: "Hawluchanite x21",
    shopNamePermanentSeasonalTheme: "Thème Saisonnier Permanent",
    shopNamePyroariteX21: "Pyroarite x21",
    shopNameTimeCandyX3: "Bonbon Temps x3",
    shopNameWisdomPetalX25: "Pétale de Sagesse x25",
    shopStock: "Stock : {stock}",
    sigMoveTraining: "Entraînement Capacité Signature",
    levelTraining: "Entraînement Niveau",
    moveTraining: "Entraînement Capacité",
    natureTraining: "Entraînement Nature",
    signatureFilter: "signature",
    signatureMove: "Capacité Signature",
    signatureMoveDesc:
      "Ceci est une Capacité Signature. Les capacités signature seront automatiquement apprises au niveau 100",
    signatureMoveLabel: "Capacité signature",
    signatureMoveOf:
      "Cette capacité ne peut apparaître que comme Capacité Signature de {pokemon}",
    signed: "☉Signé☉!",
    signedTag: "<span>☉Signé☉ !</span>",
    singleBatonPassError:
      "Vous ne pouvez avoir qu'un seul Relais dans votre équipe",
    sortFilter: "tri",
    spawnLocationArceus:
      "Débloqué une fois que tous les Pokémon obtenables ont été capturés",
    spawnLocationFrontier:
      "<span>Obtenu comme récompense aléatoire dans la Zone de Combat</span>",
    spawnLocationMart: "Peut être acheté au Poké-Mart",
    spawnLocationUncatchableStage:
      "Ce Pokémon ne peut pas être capturé à son stade actuel",
    spawnLocationUnobtainable: "Ce Pokémon est impossible à obtenir",
    spawnLocationWildlifePark:
      "<span>Trouvé aléatoirement dans la zone sauvage du Parc Naturel</span>",
    speBst: "VIT BST",
    speIv: "VIT IV",
    speIvIncreased: "IV VIT augmenté !",
    speIvInherited: "IV VIT hérité !",
    speTotal: "VIT Total",
    specialAttack: "Att. Spé.",
    specialDefense: "Déf. Spé.",
    specialNoShiny:
      "Ce Pokémon est marqué comme Spécial et ne peut pas recevoir de mutations shinys par la génétique !",
    speed: "Vitesse",
    spiralHelp:
      "La Tour de Combat est un défi à difficulté infinie où chaque Pokémon vaincu augmente la difficulté. Les immunités de type dans ce défi sont converties en résistances\n\nChaque fois que vous entrez dans la tour, vous commencez à l'étage 1, mais vous pouvez réessayer autant de fois que vous voulez\n\nVotre étage le plus haut atteint sera sauvegardé, et réinitialisé quand la rotation de ligue change. Vous serez récompensé pour chaque nouvel étage record atteint à la fin du combat\n\nIl y a un maximum de 100 capsules dorées obtenables",
    spiralTypeRotation: "Rotation de type actuelle : ",
    start: "Commencer",
    statAtk: "ATQ",
    statAttack: "Attaque",
    statDef: "DEF",
    statDefense: "Défense",
    statHealth: "PV",
    statHp: "PV",
    statSatk: "ATQ.SP",
    statSdef: "DEF.SP",
    statSpe: "VIT",
    statSpecialAttack: "Att. Spé.",
    statSpecialDefense: "Déf. Spé.",
    statSpeed: "Vitesse",
    statusBurnDesc:
      "Réduit l'Attaque physique de 50% et inflige des dégâts à chaque tour",
    statusConfusedDesc:
      "50% de chance que les capacités ne puissent pas infliger de dégâts",
    statusEmbargoDesc:
      "Empêche l'ennemi d'utiliser la capacité dans l'emplacement où Embargo a été utilisée",
    statusFreezeDesc: "Les capacités ne peuvent pas infliger de dégâts",
    statusParalysisDesc:
      "25% de chance que les capacités ne puissent pas infliger de dégâts et la Vitesse est réduite de 75%",
    statusPoisonDesc:
      "Réduit l'Attaque spéciale de 50% et inflige des dégâts à chaque tour",
    statusSleepDesc: "Les capacités ne peuvent pas infliger de dégâts",
    subtractRotation: "Retirer 1 à la rotation de la Zone Sauvage actuelle :",
    switchShiny: "Changer le shiny",
    switchLang: "Passer en Anglais",
    tagBurn: "Brûlure",
    tagColorLabel: "Couleur de l'étiquette",
    tagConfused: "Confus",
    tagCrossRoom: "Salle Croix",
    tagElectricTerrain: "Champ Électrifié",
    tagEmbargo: "Embargo",
    tagFilter: "étiquette",
    tagFoggy: "Brouillard",
    tagFreeze: "Gel",
    tagGrassyTerrain: "Champ Herbu",
    tagHail: "Grêle",
    tagHidden: "caché",
    tagLabel: "Étiquette :",
    tagLightScreen: "Écran Lumière",
    tagMistyTerrain: "Champ Brumeux",
    tagName: "Nom du tag",
    tagNameLabel: "Nom de l'étiquette",
    tagNamePlaceholder: "Entrez le nom de l'étiquette...",
    tagNone: "aucun",
    tagParalysis: "Paralysie",
    tagPoisoned: "Poison",
    tagRainy: "Pluie",
    tagRare: "Rare !",
    tagRareItems: "Rare !",
    tagSafeguard: "Rune Protect",
    tagSandstorm: "Tempête de Sable",
    tagSleep: "Sommeil",
    tagSunny: "Ensoleillement",
    tagTrickRoom: "Salle Tricks",
    tagUncommon: "Peu commun",
    tagUncommonExclaim: "Peu commun !",
    tagUncommonItems: "Peu commun",
    tagWeirdRoom: "Salle Bizarre",
    tags: "Tags",
    team: "Équipe",
    teamSlotPrefix: "#{number}",
    team1: "Équipe 1",
    team10: "Équipe 10",
    team11: "Équipe 11",
    team12: "Équipe 12",
    team13: "Équipe 13",
    team14: "Équipe 14",
    team15: "Équipe 15",
    team16: "Équipe 16",
    team17: "Équipe 17",
    team18: "Équipe 18",
    team19: "Équipe 19",
    team2: "Équipe 2",
    team20: "Équipe 20",
    team21: "Équipe 21",
    team22: "Équipe 22",
    team23: "Équipe 23",
    team24: "Équipe 24",
    team25: "Équipe 25",
    team26: "Équipe 26",
    team27: "Équipe 27",
    team28: "Équipe 28",
    team29: "Équipe 29",
    team3: "Équipe 3",
    team30: "Équipe 30",
    team4: "Équipe 4",
    team5: "Équipe 5",
    team6: "Équipe 6",
    team7: "Équipe 7",
    team8: "Équipe 8",
    team9: "Équipe 9",
    teamPreview: "Aperçu de l'équipe",
    terrainElectricDesc:
      "Augmente les dégâts des capacités de type Électrik et Acier de 50%",
    terrainGrassyDesc:
      "Augmente les dégâts des capacités de type Plante et Insecte de 50%",
    terrainMistyDesc:
      "Augmente les dégâts des capacités de type Fée et Psy de 50%",
    textDataRawNotFound: "Élément avec l'id 'text-data-raw' introuvable",
    thanksForPokemon: "Merci pour le",
    themeLabel: "Thème :",
    themeSpooky: "effrayant",
    thisIsYourSavefileCode: "Voici votre code de sauvegarde...",
    tierIRaid: "Raid Niveau I ❖",
    tierIiRaid: "Raid Niveau II ❖",
    tierIiiRaid: "Raid Niveau III ❖",
    tierIvRaid: "Raid Niveau IV ❖",
    timeHMS: "{h}h {m}m {s}s",
    timeLeft: "Temps restant : {time}",
    timeToComplete: "Temps pour compléter l'opération",
    timedEncounterDesc:
      "Ceci est une rencontre chronométrée. Vos dégâts seront conservés entre les combats. De plus, les objets nécessaires pour entrer seront consommés que vous vainquiez le Pokémon ou non",
    timedEncounterWarning:
      "Cette rencontre est chronométrée. Vos dégâts seront conservés entre les combats. De plus, les objets nécessaires pour entrer seront consommés que vous vainquiez le Pokémon ou non.",
    tipBetterAbility: "Obtenez un meilleur talent",
    tipGenetics: "Modifiez les stats avec la Génétique",
    tipRightClick:
      "Astuce : Clic droit (ou appui long sur mobile) sur la plupart des éléments pour plus d'infos",
    tipStatDistributionMoves:
      "Obtenez de meilleures attaques correspondant à votre répartition de stats (Physique/Spécial)",
    tipStatUpMoves:
      "Utilisez des attaques de boost de stats correspondant à vos attaques",
    tipTypeMatchingMoves: "Obtenez de meilleures attaques adaptées au type",
    tipUnlockHiddenAbility: "Débloquez un talent caché",
    tms: "CT",
    toClaimIt: "pour le réclamer",
    trainerCounter: "Dresseur {current}/{total}",
    trainerPrefixAce: "Dresseur expert ",
    trainerPrefixExpert: "Dresseur chevronné ",
    trainerPrefixMaster: "Dresseur maître ",
    trainerPrefixRookie: "Dresseur débutant ",
    trainerPrefixVeteran: "Dresseur vétéran ",
    trainerReset: "Réinitialisation Dresseurs",
    trainers: "Dresseurs",
    trainersTab: "Dresseurs",
    training: "Entraînement",
    trainingAbilityInfo: "Change le talent du Pokémon d'entraînement",
    trainingAbilityName: "Entraînement Talent",
    trainingFailed: "Entraînement Échoué :(",
    trainingHelp:
      "Mettez vos Pokémon au défi contre des vagues d'ennemis pour devenir plus fort. Vous aurez naturellement l'avantage de type contre les ennemis que vous affrontez",
    trainingHelpFull:
      "Mettez vos Pokémon au défi contre des vagues d'ennemis pour devenir plus fort. Vous aurez naturellement l'avantage de type contre les Pokémon combattus, et leur niveau s'adaptera au vôtre. Les immunités de type en entraînement seront converties en résistances.<br><br>Échouer un entraînement ne rapportera aucun gain",
    trainingHiddenAbilityError:
      "Le Pokémon d'entraînement a déjà son talent caché débloqué",
    trainingHiddenAbilityInfo:
      "Débloque le talent caché du Pokémon d'entraînement",
    trainingHiddenAbilityName: "Entraînement Talent Caché",
    trainingIv1Error: "Le Pokémon d'entraînement a déjà des IVs maximum",
    trainingIv1Info:
      "Booste deux stats IV aléatoires du Pokémon d'entraînement",
    trainingIv1Name: "Entraînement IV I",
    trainingIv2Error: "Le Pokémon d'entraînement a déjà des IVs maximum",
    trainingIv2Info:
      "Booste trois stats IV aléatoires du Pokémon d'entraînement",
    trainingIv2Name: "Entraînement IV II",
    trainingIv3Error: "Le Pokémon d'entraînement a déjà des IVs maximum",
    trainingIv3Info:
      "Booste quatre stats IV aléatoires du Pokémon d'entraînement",
    trainingIv3Name: "Entraînement IV III",
    trainingLevelError: "Le Pokémon d'entraînement est déjà au niveau maximum",
    trainingLevelInfo: "Booste le niveau du Pokémon d'entraînement",
    trainingLevelName: "Entraînement Niveau",
    trainingMoveError:
      "Le Pokémon d'entraînement connaît déjà toutes les capacités disponibles",
    trainingMoveInfo:
      "Enseigne une nouvelle capacité au Pokémon d'entraînement",
    trainingMoveName: "Entraînement Capacité",
    trainingNatureError: "Le Pokémon d'entraînement a déjà une nature",
    trainingNatureInfo: "Change la nature du Pokémon d'entraînement",
    trainingNatureName: "Entraînement Nature",
    trainingPokemonRestrictedMoves:
      "Le Pokémon d'entraînement a plusieurs capacités restreintes ({icon}) équipées !",
    travel: "Explorer",
    tryImprove: "Essaie d'améliorer encore ton Pokémon :",
    tryToImprovePokemon: "Essayez d'améliorer encore votre Pokémon :",
    tutorial1:
      'Commençons par obtenir de nouveaux Pokémon, d\'accord ? Sélectionne "Explorer" dans le menu en haut à gauche',
    tutorial10:
      "Pour l'instant, je vais faire une pause... Profite bien de ton séjour !",
    tutorial2:
      "Tu peux faire un clic droit ou un appui long sur presque tout à l'écran pour plus d'infos !",
    tutorial3:
      "Tu peux aussi le faire dans les infos elles-mêmes. Essaie d'aller dans la première Zone Sauvage pour commencer à capturer des Pokémon",
    tutorial4:
      "Clic droit ou appui long sur un Pokémon de ton équipe pour définir ses capacités, tu peux aussi le faire en combat.",
    tutorial5:
      "Une fois prêt, appuie sur Sauvegarder et Partir ! en haut de l'écran",
    tutorial6:
      "Ton équipe attaquera automatiquement selon un schéma défini, même si tu changes d'onglet ou fermes le navigateur !",
    tutorial7:
      "Tu peux aussi faire un clic droit ou appui long sur les capacités ou les Pokémon pour voir leurs stats.",
    tutorial8:
      "Une fois que tu auras plus de Pokémon dans ton équipe, tu pourras les échanger pendant un combat",
    tutorial9:
      "Tu peux consulter une explication plus détaillée des stats et mécaniques de combat dans le menu Guide.",
    tutorialBattle:
      "Ton équipe attaquera automatiquement selon un schéma défini, même si tu changes d'onglet ou fermes le navigateur ! Tu peux aussi faire un clic droit ou appui long sur les capacités ou les Pokémon pour voir leurs stats. Une fois que tu auras plus de Pokémon dans ton équipe, tu pourras les échanger pendant un combat",
    tutorialBattleEnd:
      "Tu peux consulter une explication plus détaillée des stats et mécaniques de combat dans le menu Guide. Pour l'instant, je vais faire une pause... Profite bien de ton séjour !",
    tutorialIntro:
      "Salut ! J'ai été assigné pour te montrer les ficelles du métier<br>Commençons par obtenir de nouveaux Pokémon, d'accord ? Sélectionne \"Explorer\" dans le menu en haut à gauche",
    tutorialMoves:
      "Clic droit ou appui long sur un Pokémon de ton équipe pour définir ses capacités, tu peux aussi le faire en combat. Appuie sur le symbole + à côté du Pokémon pour lui assigner des objets<br>Une fois prêt, appuie sur Sauvegarder et Partir ! en haut de l'écran",
    tutorialTravel:
      "Tu peux faire un clic droit ou un appui long sur presque tout à l'écran pour plus d'infos ! Tu peux aussi le faire dans les infos elles-mêmes. Essaie d'aller dans la première Zone Sauvage pour commencer à capturer des Pokémon",
    type: "type",
    typeBug: "insecte",
    typeDark: "ténèbres",
    typeDragon: "dragon",
    typeElectric: "électrik",
    typeFairy: "fée",
    typeFighting: "combat",
    typeFilter: "type",
    typeFire: "feu",
    typeFlying: "vol",
    typeGhost: "spectre",
    typeGrass: "plante",
    typeGround: "sol",
    typeIce: "glace",
    typeNormal: "normal",
    typePoison: "poison",
    typePsychic: "psy",
    typeRock: "roche",
    typeSteel: "acier",
    typeWater: "eau",
    ultraLeague: "Ultra Ligue",
    uncommon: "Inhabituel",
    unlockCosmetic:
      "Utilisation : débloque ce cosmétique pour un Pokémon sélectionné",
    tmInfoDesc:
      'Utilisation : enseigne la capacité <span data-move="{moveId}" ><span style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: {color}">{move}</span></span> aux Pokémon de type {types}',
    memoryInfoDesc:
      'Utilisation : enseigne le talent <span data-ability="{abilityId}" ><span style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: {color}">{ability}</span></span> aux Pokémon de type {types}',
    uncommonAbility: "Capacité Inhabituelle",
    uncommonExcl: "Inhabituel !",
    uncommonParen: "(Inhabituel)",
    unlockHA: "Débloque un Talent Caché",
    unlockHiddenAbility: "Débloquez une capacité cachée",
    unlockedAllObtainableCaught:
      "Débloqué quand tous les Pokémon obtenables ont été capturés",
    unlocksAtLevel: "Débloque {pokemon} au niveau {level}",
    unlocksByUsingItem:
      "Débloque {pokemon} en utilisant {item} au niveau {level}+",
    unofficial: "Ce projet est entièrement non officiel !",
    useStatUpMoves:
      "Utilise des capacités de montée de stats correspondant à tes capacités",
    verdantTheme: "Thème Verdoyant",
    versionNotice: "Note de Version",
    versionRewardCaps: "x{bottle} Capsules d'Argent | x{golden} Capsules d'Or",
    veteranTrainerPrefix: "Dresseur Vétéran ",
    victoryRewards: "Récompenses de victoire",
    victoryRewardsAlt: "Récompenses de victoire",
    vs: "VS",
    vsFrontier: "VS Zone de Combat",
    vsFrontierHeader: "VS Zone de Combat",
    vsHelp:
      "Vainquez des dresseurs de plus en plus difficiles et frayez-vous un chemin vers la gloire ! Vous pouvez débloquer des zones supplémentaires à explorer au fur et à mesure de votre progression.",
    vsTrainers: "VS Dresseurs",
    vsTrainersHeader: "VS Dresseurs",
    warningPowerCost:
      "Attention, coût en puissance trop élevé ! Seulement 5 IV maximum sur 6 par stat seront hérités !",
    waterType: "Type Eau",
    weatherFoggyDesc:
      "Augmente les dégâts des capacités de type Ténèbres et Spectre de 50%",
    weatherHailDesc: "Augmente les dégâts des capacités de type Glace de 50%",
    weatherRainyDesc:
      "Augmente les dégâts des capacités de type Eau de 50% et réduit ceux des capacités de type Feu de 50%",
    weatherSandstormDesc:
      "Augmente les dégâts des capacités de type Roche et Sol de 50%",
    weatherSunnyDesc:
      "Augmente les dégâts des capacités de type Feu de 50% et réduit ceux des capacités de type Eau de 50%",
    skillSerendipityDesc:
      "Vos effets de coup ont deux fois plus de chances de se produire",
    fieldTrickRoomDesc:
      "Les Pokémon les plus lents deviennent plus rapides, les plus rapides deviennent plus lents",
    fieldReverseFieldDesc: "Les faiblesses et forces de type sont inversées",
    fieldAverageTimeDesc:
      "Toutes les capacités s'exécutent à la vitesse par défaut (2s)",
    fieldNoMercyDesc:
      "Les dégâts contre les immunités de type sont résistés au lieu d'être ignorés",
    fieldDeltaStreamDesc: "Les changements de météo sont désactivés",
    fieldStealthRocksDesc: "Les changements de Pokémon infligent des dégâts",
    fieldHeavyWeatherDesc:
      "Si le type d'un Pokémon actif de l'équipe ne correspond pas à la météo actuelle, inflige des dégâts périodiques",
    fieldIronBodyDesc:
      "Les dégâts super efficaces infligés à l'ennemi sont réduits à neutre",
    fieldWonderWardDesc:
      "Les dégâts non super efficaces infligés à l'ennemi sont réduits de 80%",
    fieldNeutralisingGasDesc: "Les talents sont désactivés",
    fieldWeakeningCurseDesc:
      "Les dégâts physiques infligés à l'ennemi sont divisés par deux",
    fieldFatiguingCurseDesc:
      "Les dégâts spéciaux infligés à l'ennemi sont divisés par deux",
    fieldUnnerveDesc: "Les objets sont désactivés",
    skillFirePledgeDesc: "Les Pokémon sans type Feu ne peuvent pas participer",
    skillFightingPledgeDesc:
      "Les Pokémon sans type Combat ne peuvent pas participer",
    skillDarkPledgeDesc:
      "Les Pokémon sans type Ténèbres ne peuvent pas participer",
    skillDragonPledgeDesc:
      "Les Pokémon sans type Dragon ne peuvent pas participer",
    skillFairyPledgeDesc: "Les Pokémon sans type Fée ne peuvent pas participer",
    skillRockPledgeDesc:
      "Les Pokémon sans type Roche ne peuvent pas participer",
    skillElectricPledgeDesc:
      "Les Pokémon sans type Électrik ne peuvent pas participer",
    skillSteelPledgeDesc:
      "Les Pokémon sans type Acier ne peuvent pas participer",
    skillGrassPledgeDesc:
      "Les Pokémon sans type Plante ne peuvent pas participer",
    skillWaterPledgeDesc: "Les Pokémon sans type Eau ne peuvent pas participer",
    skillIcePledgeDesc: "Les Pokémon sans type Glace ne peuvent pas participer",
    skillPoisonPledgeDesc:
      "Les Pokémon sans type Poison ne peuvent pas participer",
    skillFlyingPledgeDesc:
      "Les Pokémon sans type Vol ne peuvent pas participer",
    skillNormalPledgeDesc:
      "Les Pokémon sans type Normal ne peuvent pas participer",
    skillBugPledgeDesc:
      "Les Pokémon sans type Insecte ne peuvent pas participer",
    skillGroundPledgeDesc:
      "Les Pokémon sans type Sol ne peuvent pas participer",
    skillGhostPledgeDesc:
      "Les Pokémon sans type Spectre ne peuvent pas participer",
    skillPsychicPledgeDesc:
      "Les Pokémon sans type Psy ne peuvent pas participer",
    skillIronWillDesc: "Augmente la Défense de 100% pendant 15 tours",
    skillIronSpiritDesc:
      "Augmente la Défense Spéciale de 100% pendant 15 tours",
    skillOmniboostDesc: "Augmente toutes les stats de 50% pendant 10 tours",
    skillElectroblastDesc:
      "Inflige ${t_ui('tagParalysis')} à toute votre équipe pendant 10 tours",
    skillPyroblastDesc:
      "Inflige ${t_ui('tagBurn')} à toute votre équipe pendant 15 tours",
    skillCryoblastDesc:
      "Inflige ${t_ui('tagFreeze')} à toute votre équipe pendant 10 tours",
    skillToxiblastDesc:
      "Inflige ${t_ui('tagPoisoned')} à toute votre équipe pendant 15 tours",
    skillSuddenDeathDesc: "Met K.O. le Pokémon actuellement actif",
    skillDemoralisingRoarDesc: "Retire tous les boosts d'équipe",
    weatherSuffix: "météo",
    wildAreas: "Zones Sauvages",
    wildAreasHeader: "Zones sauvages",
    wildAreasHelp:
      "Tous les Pokémon des Zones Sauvages peuvent être capturés en les vainquant. Les Zones Sauvages changent chaque jour, alors n'oubliez pas de vérifier ce qui est disponible aujourd'hui !",
    wildAreasTab: "Zones sauvages",
    wildZone: "Zone Sauvage ✦",
    wildlifeParkRotate:
      "Les Pokémon du Parc Naturel changent toutes les 12 heures",
    wildlifeParkRotation:
      "Les Pokémon du Parc Naturel changent toutes les 12 heures",
    wip: "En développement",
    wipeData: "Effacer les Données",
    wonderTrade: "Échange Miracle",
    wontConsumeAn: "Ne consommera pas de {item}",
    wontUse: "N'utilisera pas {item}",
    wontUseTicket: "N'utilisera pas de Tickets Recombat Auto {item}",
    yeah: "Ouais !",
    youCanCopyPasteSavefileCodes:
      "Vous pouvez copier ou coller des codes de sauvegarde...",
    youCantAffordThis: "Vous n'avez pas assez pour cela",
    youHave: "Vous en avez {count}",
    zMoveRandomSplitBonus:
      "- Bonus de répartition aléatoire Z-move : Oui (x1,25)",
    zMoveRandomSplitYes: "- Bonus split aléatoire attaque Z : Oui (x1,25)",
    zMoveStabMultiplier: "- Multiplicateur STAB Z-move : Oui (x1,5)",
    moveInfo_preventStatusWeather:
      "Empêche les altérations de statut négatives sous la météo {tag}",
    moveInfo_halvesDamage:
      "Divise par 2 les dégâts reçus des capacités de type {type}",
    moveInfo_grantsImmunity: "Confère l'immunité à {tag}",
    moveInfo_increaseStatStatus:
      "Augmente {stat} de {percent}% si le Pokémon subit une altération de statut",
    moveInfo_powerBoostLowHP:
      "Augmente la puissance des capacités de type {type} de {percent}% si les PV sont inférieurs à {hp}%",
    moveInfo_preventLowerStat: "Empêche la réduction de {stat}",
    moveInfo_statusMiss50:
      "50% de chance que les altérations de statut reçues échouent",
    moveInfo_synchronize:
      "Inflige les altérations de statut actives à l'attaquant au moment de l'application",
    statSpeed: "Vitesse",
    statAttack: "Attaque",
    statDefense: "Défense",
    statSpecialAttack: "Atq. Spé.",
    statSpecialDefense: "Déf. Spé.",
    statHP: "PV",
    statStats: "stats",
    statAllStats: "toutes les stats",
    moveInfo_increaseAllStats: "Augmente toutes les stats de {percent}%",
    moveInfo_chanceIncreaseAllStats:
      "{percent}% de chance d'augmenter toutes les stats de {value}%",
    moveInfo_increaseStatWeather: "Augmente {stat} de 50% sous la météo {tag}",
    moveInfo_chanceToInflictWhenAttacked:
      "{percent}% de chance d'infliger {tag} lors d'une attaque",
    moveInfo_clearStatusSwitch:
      "Les altérations de statut sont soignées au changement de Pokémon",
    moveInfo_tech60:
      "Multiplie par 1,5x les dégâts de base des capacités de 60 de puissance ou moins",
    moveInfo_scrappy:
      "Les Pokémon Spectre peuvent être touchés par des capacités Normal et Combat",
    moveInfo_unaware:
      "Lors de l'attaque, ignore les changements de stats de la cible",
    moveInfo_sheerColdImm:
      "Ne peut subir de dégâts que par des capacités directes",
    moveInfo_nullifiesType: "Annule les capacités de type {type} reçues",
    moveInfo_categoryPower:
      "Les capacités de type {category} ont leur puissance de base multipliée par {mult}",
    moveInfo_rivalry:
      "Multiplie les dégâts par 1,5 quand le Pokémon adverse partage un type",
    moveInfo_luckIncense:
      "Augmente le poids des objets rares de 1% (cumulable). Fonctionne toujours pour tout le monde",
    moveInfo_preventNegWeather:
      "Empêche les baisses de stats et altérations de statut négatives sous la météo {tag}",
    moveInfo_weatherExtend:
      "La météo changée par le lanceur dure 15 tours de plus",
    moveInfo_decreaseEnemyStatEnter:
      "Diminue {stat} ennemi de 50% quand le Pokémon adverse entre en combat",
    moveInfo_increaseStatNoItem:
      "Augmente {stat} de 50% si aucun objet n'est tenu",
    moveInfo_increaseStatKO:
      "Augmente {stat} de 50% en mettant un Pokémon K.O.",
    moveInfo_sheerForce:
      "Les effets secondaires positifs des capacités offensives sont supprimés et leurs dégâts sont multipliés par 1,25",
    moveInfo_levitate: "Confère l'immunité aux capacités de type Sol",
    moveInfo_halvesTwoTypes:
      "Divise par 2 les dégâts reçus des capacités de type {type1} et {type2}",
    moveInfo_stabBoost: "Augmente le STAB de +0,2",
    moveInfo_crossPower03: "Augmente la Cross-Power de +0,3",
    moveInfo_alwaysHit: "Les capacités touchent toujours quel que soit le type",
    moveInfo_halveDamageHighHP:
      "Les dégâts reçus sont divisés par 2 au-dessus de {percent}% de PV",
    moveInfo_gutsFull:
      "Augmente l'Attaque de 50% si le Pokémon subit une altération de statut et annule la réduction de stat de l'altération",
    moveInfo_maxMultiHit:
      "Les capacités à coups multiples touchent toujours leur nombre maximum",
    moveInfo_increaseStatSE:
      "Augmente {stat} de 100% lors d'une attaque super efficace",
    moveInfo_halveSE:
      "Le multiplicateur de dégâts super efficaces subis est divisé par 2",
    moveInfo_slowPower15:
      "Les capacités lentes ont leur puissance de base multipliée par 1,5",
    moveInfo_fastPower2:
      "Les capacités rapides ont leur puissance de base multipliée par 2",
    moveInfo_nullifiesTypeSpeed:
      "Annule les capacités de type {type} reçues et augmente la Vitesse de 50% après en avoir subi une",
    moveInfo_longerPositiveStats:
      "Les boosts de stats positifs durent 3x plus longtemps",
    moveInfo_powerOfAlchemy:
      "Le lanceur obtient temporairement le talent (non-caché) du dernier Pokémon K.O. de l'équipe. Ce talent temporaire s'ajoute aux talents existants. L'application d'un second talent temporaire remplace le premier",
    moveInfo_decreaseFatigue: "Diminue les dégâts de fatigue du lanceur par 2",
    moveInfo_decreaseEnemyStatOnHit:
      "Diminue {stat} ennemi de {percent}% en subissant une attaque",
    moveInfo_preventTeamTag:
      "Empêche tous les Pokémon de l'équipe d'être {tag}",
    moveInfo_neutralSE: "Les dégâts super efficaces deviennent neutres",
    moveInfo_longerStatus:
      "Les altérations de statut appliquées à la cible durent 3x plus longtemps",
    moveInfo_merciless:
      "Multiplie les dégâts infligés par 1,5 si la cible a une altération de statut",
    moveInfo_defiant:
      "Lorsqu'un membre de l'équipe reçoit un boost de stats, le lanceur le reçoit aussi",
    moveInfo_ghostNerf:
      "Diminue les dégâts de toutes les capacités Spectre de 25% (cumulable). Fonctionne toujours pour tout le monde",
    moveInfo_crossPower05: "Augmente la Cross-Power de +0,5",
    moveInfo_noGuard:
      "Tous les coups deviennent super efficaces quel que soit le type",
    moveInfo_shinyCharm:
      "Augmente les chances de rencontrer un Pokémon sauvage shiny de 15%. Fonctionne toujours pour tout le monde",
    moveInfo_filter:
      "Les dégâts reçus des attaques non super efficaces sont réduits de 80%",
    moveInfo_tintedLens: "Les capacités résistées infligent des dégâts normaux",
    moveInfo_twoTypesFaster:
      "Les capacités de type {type1} et {type2} sont exécutées x{mult} plus rapidement",
    moveInfo_twoTypesFaster2:
      "Les capacités de type {type1} et {type2} sont exécutées x{mult} plus rapidement",
    moveInfo_dotDouble:
      "Les dégâts au fil du temps de {tag} subis par l'ennemi sont doublés tant que ce Pokémon est actif",
    moveInfo_categorySpeed:
      "Les capacités de type {category} sont exécutées deux fois plus vite",
    moveInfo_categoryPower2:
      "Les capacités de type {category} ont leur puissance de base multipliée par {mult}",
    moveInfo_copyEnemyStats:
      "Copie les augmentations de stats positives de l'ennemi",
    moveInfo_gutsLike:
      "Augmente les dégâts infligés de 1,2x sous {tag} et annule les dégâts au fil du temps causés par celui-ci",
    moveInfo_preventAllStatDecrease: "Empêche toute baisse de stats",
    moveInfo_defeatistReverse:
      "Augmente les dégâts infligés de 1,15x pour chaque membre de l'équipe K.O.",
    moveInfo_gorillaTactics:
      "Augmente l'Attaque de 1,5x mais empêche le changement de Pokémon",
    moveInfo_highestStatKO:
      "Augmente la stat la plus élevée du lanceur de 50% en mettant un Pokémon K.O.",
    moveInfo_increaseStatTerrain: "Augmente {stat} de 50% sur {tag}",
    moveInfo_changeWeatherEnter:
      "Change la météo en {tag} à l'entrée ou au changement sur le terrain",
    moveInfo_doubleSecondary:
      "Les effets secondaires des capacités sont déclenchés deux fois",
    moveInfo_doublePhysical:
      "Les dégâts physiques infligés sont multipliés par 2",
    moveInfo_invertStats:
      "Inverse les changements de stats. Les positifs deviennent négatifs et inversement",
    moveInfo_adaptType:
      "Change le type du lanceur pour correspondre au type de la capacité utilisée",
    moveInfo_boostStatStages:
      "Les changements de stats du lanceur sont augmentés d'un niveau",
    moveInfo_parentalBond:
      "Les capacités sont exécutées une seconde fois à moitié puissance",
    moveInfo_randomTwoStats:
      "Chaque tour, augmente deux stats de 100% pendant un tour",
    moveInfo_darkAura:
      "Multiplie par 1,1 la puissance des capacités Ténèbres de tous les membres de l'équipe",
    moveInfo_ghostAura:
      "Multiplie par 1,1 les dégâts des capacités Spectre de tous les membres de l'équipe",
    moveInfo_allMovesNormal:
      "Toutes les capacités deviennent de type Normal et leur puissance est multipliée par 1,3",
    moveInfo_ateType:
      "Les capacités Normal deviennent de type {type} et leur puissance est multipliée par 1,3",
    moveInfo_faster: "Attaque x{mult} plus rapidement",
    moveInfo_hitsTimes: "Frappe {min}-{max} fois",
    moveInfo_decreaseEnemyStat: "Diminue {stat} ennemi de {percent}%",
    moveInfo_inflictAndBoostEnemyAtk:
      "Inflige {tag} mais augmente l'Attaque ennemie de 100%",
    moveInfo_hitsCount: "Frappe {count} fois",
    moveInfo_chanceToInflict: "{percent}% de chance d'infliger {tag}",
    moveInfo_powerDoubleCond: "La puissance double si la cible est {condition}",
    moveInfo_powerDoubleUserCond:
      "La puissance double si le lanceur est {condition}",
    moveInfo_powerRiseDef:
      "La puissance augmente de x1,2-1,5 si Défense/Déf. Spé. est augmentée",
    moveInfo_slower: "Attaque x{mult} plus lentement",
    moveInfo_increaseStat: "Augmente {stat} de {percent}%",
    moveInfo_chanceIncreaseStat:
      "{percent}% de chance d'augmenter {stat} de {value}%",
    moveInfo_changeWeather: "Change la météo en {tag}",
    moveInfo_decreaseStat: "Diminue {stat} de {percent}%",
    moveInfo_inflicts: "Inflige {tag}",
    moveInfo_switchNext: "Change pour le prochain membre de l'équipe",
    moveInfo_randomPower: "La puissance varie aléatoirement de x1 à x8",
    moveInfo_chanceDecreaseEnemyStat:
      "{percent}% de chance de diminuer {stat} ennemi de {value}%",
    moveInfo_slowAndPowerRiseDef:
      "Attaque x1,2 plus lentement. La puissance augmente de x1,2-1,5 si Défense/Déf. Spé. est augmentée",
    moveInfo_powerDoubleNoItem:
      "La puissance double si le lanceur ne tient aucun objet",
    moveInfo_tailwindSlow:
      "Augmente la Vitesse de 50% pour toute l'équipe. Attaque x1,5 plus lentement",
    moveInfo_stack1_2x5:
      "Multiplie la puissance de base par 1,2x à chaque utilisation, jusqu'à 5 fois. Tous les cumuls sont perdus au changement de Pokémon",
    moveInfo_decreaseSpaAndPowerRiseDef:
      "Diminue l'Atq. Spé. ennemie de 50%. La puissance augmente de x1,2-1,5 si Défense/Déf. Spé. est augmentée",
    moveInfo_increaseStatSpeedSlow:
      "Augmente {stat} et Vitesse de {percent}%. Attaque x{mult} plus lentement",
    moveInfo_inflictAndBoostEnemySpa:
      "Inflige {tag} mais augmente l'Atq. Spé. ennemie de 100%",
    moveInfo_powerDoubleType:
      "La puissance double si la cible est de type {type}",
    moveInfo_powerDoubleStatus:
      "La puissance double si la cible a une altération de statut",
    moveInfo_inflictSelf: "Inflige {tag} au lanceur",
    moveInfo_memento:
      "Le lanceur tombe K.O. et diminue l'Attaque et l'Atq. Spé. ennemies de 100%",
    moveInfo_embargo:
      "Empêche l'ennemi d'utiliser la capacité de l'emplacement où Embargo a été utilisé. Traitée comme une altération de statut",
    moveInfo_raiseTwoRandom: "Augmente de 100% deux stats aléatoires",
    moveInfo_batonPass:
      "Le lanceur transfère tous ses changements de stats et altérations à toute l'équipe et tombe K.O. Cette capacité ne peut être présente qu'une fois par équipe",
    moveInfo_happyHourItems:
      "Une fois utilisée, augmente le poids des objets rares de 1% pour le combat actuel. Les utilisations multiples ne se cumulent pas. Fonctionne pour tout le monde",
    moveInfo_happyHourPkmn:
      "Une fois utilisée, augmente le poids des Pokémon rares de 1% pour le combat actuel. Les utilisations multiples ne se cumulent pas. Fonctionne pour tout le monde",
    moveInfo_metronome: "Le lanceur utilise une capacité au hasard",
    moveInfo_mirrorMove1:
      "Exécute la première capacité de l'adversaire avec le double de dégâts",
    moveInfo_mirrorMove2:
      "Exécute la première capacité de l'adversaire. Attaque x3 plus rapidement",
    moveInfo_superEffWater: "Super efficace contre les types Eau",
    moveInfo_weatherAndSpa:
      "Change la météo en {tag} et augmente l'Atq. Spé. de 50%",
    moveInfo_inflictAndDecreaseEnemy:
      "Inflige {tag} et diminue {stat} ennemi de {percent}%",
    moveInfo_stealEnemyStats: "Vole les changements de stats de l'ennemi",
    moveInfo_bypassDef: "Ignore tous les bonus de défense",
    moveInfo_psyshockLike:
      "L'attaque devient physique ou spéciale selon la stat la plus élevée du lanceur",
    moveInfo_healTeamTag: "Soigne {tag} pour toute l'équipe",
    moveInfo_healTeamAll:
      "Soigne toutes les altérations de statut pour toute l'équipe",
    moveInfo_typeByUser:
      "Le type change en fonction du premier type du lanceur",
    moveInfo_weatherBall:
      "La puissance double sous une condition météo et le type change en fonction ({tagSunny} = Feu, {tagRainy} = Eau, {tagSandstorm} = Sol, {tagHail} = Glace, {tagFoggy} = Spectre, {tagElectricTerrain} = Électrik, {tagGrassyTerrain} = Plante, {tagMistyTerrain} = Psy)",
    moveInfo_powerPerStatUp:
      "Augmente la puissance de base de 30 pour chaque boost de stat unique du lanceur",
    moveInfo_weatherAndSwitch:
      "Change la météo en {tag} et change pour le prochain membre de l'équipe",
    moveInfo_weatherTypeSpeed:
      "Change temporairement le type du lanceur selon la météo et augmente la Vitesse de 75%",
    moveInfo_spa150slow:
      "Augmente l'Atq. Spé. de 150%. Attaque x1,5 plus lentement",
    moveInfo_powerRiseSpeed:
      "La puissance augmente de x1,2-1,5 si la Vitesse est augmentée",
    moveInfo_noTypeImmunity: "Peut toucher quel que soit le type",
    moveInfo_increaseStatTeam: "Augmente {stat} de 100% pour toute l'équipe",
    moveInfo_tempType:
      "Ajoute temporairement le type {type} à la cible. Le bonus de dégâts super efficaces des types temporaires est divisé par 2, et l'application d'un second type temporaire remplace le premier",
    moveInfo_sleepTalk: "Exécute la capacité du premier emplacement",
    moveInfo_increaseTwoStatsTeam:
      "Augmente {stat1} et {stat2} de {percent}% pour toute l'équipe",
    moveInfo_chanceTripleInflict:
      "10% de chance d'infliger {tag1}, {tag2} ou {tag3}",
    moveInfo_stack1_3x3:
      "Multiplie la puissance de base par 1,3x à chaque utilisation, jusqu'à 3 fois. Tous les cumuls sont perdus au changement de Pokémon",
    moveInfo_stack1_15x10:
      "Multiplie la puissance de base par 1,15x à chaque utilisation, jusqu'à 10 fois. Tous les cumuls sont perdus au changement de Pokémon",
    moveInfo_shellSmash: "Diminue la Défense et la Déf. Spé. de 50%",
    moveInfo_ellipsis: "...",
    moveInfo_firstMoveTypeSpeed:
      "Change temporairement le type du lanceur selon le type de la première capacité et augmente la Vitesse de 75%",
    moveInfo_inflictTeam: "Inflige {tag} à toute l\'équipe",
    itemInfo_001:
      "Tenu : augmente les dégâts des capacités de type Combat de x{1}",
    itemInfo_002:
      "Tenu : augmente les dégâts des capacités de type Ténèbres de x{1}",
    itemInfo_003:
      "Tenu : augmente les dégâts des capacités de type Feu de x{1}",
    itemInfo_004:
      "Tenu : augmente les dégâts des capacités de type Dragon de x{1}",
    itemInfo_005:
      "Tenu : augmente les dégâts des capacités de type Fée de x{1}",
    itemInfo_006:
      "Tenu : augmente les dégâts des capacités de type Roche de x{1}",
    itemInfo_007:
      "Tenu : augmente les dégâts des capacités de type Électrik de x{1}",
    itemInfo_008:
      "Tenu : augmente les dégâts des capacités de type Acier de x{1}",
    itemInfo_009:
      "Tenu : augmente les dégâts des capacités de type Plante de x{1}",
    itemInfo_010:
      "Tenu : augmente les dégâts des capacités de type Eau de x{1}",
    itemInfo_011:
      "Tenu : augmente les dégâts des capacités de type Glace de x{1}",
    itemInfo_012:
      "Tenu : augmente les dégâts des capacités de type Poison de x{1}",
    itemInfo_013:
      "Tenu : augmente les dégâts des capacités de type Vol de x{1}",
    itemInfo_014:
      "Tenu : augmente les dégâts des capacités de type Normal de x{1}",
    itemInfo_015:
      "Tenu : augmente les dégâts des capacités de type Insecte de x{1}",
    itemInfo_016:
      "Tenu : augmente les dégâts des capacités de type Sol de x{1}",
    itemInfo_017:
      "Tenu : augmente les dégâts des capacités de type Spectre de x{1}",
    itemInfo_018:
      "Tenu : augmente les dégâts des capacités de type Psy de x{1}",
    itemInfo_019:
      "Tenu : si un Pokémon n'a pas totalement évolué, diminue les dégâts subis de x{1}. Ne s'applique pas aux Pokémon de stade final possédant une Méga-Évolution",
    itemInfo_020:
      "Tenu : augmente la durée des bonus positifs utilisés de 1 tour et augmente les dégâts infligés de x{1}",
    itemInfo_021:
      "Tenu : diminue la durée des malus reçus de 1 tour et diminue les dégâts subis de x{1}",
    itemInfo_022:
      "Tenu : augmente les dégâts de l'utilisateur de x{1}, mais inflige {2}",
    itemInfo_023:
      "Tenu : augmente l'Attaque de l'utilisateur de x{1}, mais l'empêche de changer de Pokémon",
    itemInfo_024:
      "Tenu : augmente l'Attaque Spéciale de l'utilisateur de x{1}, mais l'empêche de changer de Pokémon",
    itemInfo_025:
      "Tenu : augmente les dégâts de l'utilisateur de x{1}, mais il perd 1/10 de ses PV max à chaque tour",
    itemInfo_026:
      "Tenu : augmente la défense globale de x{1}, mais l'utilisateur ne peut pas utiliser de capacités avec 0 de puissance",
    itemInfo_027: "Tenu : diminue la durée des malus reçus de {1} tours",
    itemInfo_028:
      "Tenu : augmente les dégâts infligés de x{1}, mais une fois toutes les capacités de l'utilisateur exécutées, il revient au membre d'équipe précédent",
    itemInfo_029:
      "Tenu : augmente les dégâts infligés de x{1}, mais une fois toutes les capacités de l'utilisateur exécutées, il passe au membre d'équipe suivant",
    itemInfo_030:
      "Tenu : les capacités qui attaquent plus vite que la normale s'exécutent x{1} plus vite",
    itemInfo_031:
      "Tenu : les capacités à coups multiples touchent toujours leur nombre maximum de fois et infligent x{1} de dégâts supplémentaires",
    itemInfo_032:
      "Tenu : les capacités qui gagnent en puissance avec les cumuls infligent x{1} de dégâts supplémentaires",
    itemInfo_033:
      "Tenu : les capacités avec 0 de puissance s'exécutent x{1} plus vite",
    itemInfo_034:
      "Tenu : les capacités affectées par Poing de Fer infligent x{1} de dégâts supplémentaires et leurs effets secondaires s'exécutent deux fois",
    itemInfo_035:
      "Tenu : les capacités qui attaquent plus lentement que la normale infligent x{1} de dégâts supplémentaires",
    itemInfo_036:
      "Tenu : augmente les dégâts infligés de x{1} et augmente la Vitesse de 50% pendant 8 tours quand touché par une capacité super efficace",
    itemInfo_037:
      "Tenu : prévient les dégâts de l'effet de terrain Piège de Roc et diminue les dégâts subis de x{1}",
    itemInfo_038:
      "Tenu : diminue les dégâts de fatigue de l'utilisateur de x{1}",
    itemInfo_039:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Insecte de bénéficier du bonus STAB",
    itemInfo_040:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Ténèbres de bénéficier du bonus STAB",
    itemInfo_041:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Dragon de bénéficier du bonus STAB",
    itemInfo_042:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Électrik de bénéficier du bonus STAB",
    itemInfo_043:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Fée de bénéficier du bonus STAB",
    itemInfo_044:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Combat de bénéficier du bonus STAB",
    itemInfo_045:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Feu de bénéficier du bonus STAB",
    itemInfo_046:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Vol de bénéficier du bonus STAB",
    itemInfo_047:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Spectre de bénéficier du bonus STAB",
    itemInfo_048:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Plante de bénéficier du bonus STAB",
    itemInfo_049:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Sol de bénéficier du bonus STAB",
    itemInfo_050:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Glace de bénéficier du bonus STAB",
    itemInfo_051:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Normal de bénéficier du bonus STAB",
    itemInfo_052:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Poison de bénéficier du bonus STAB",
    itemInfo_053:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Psy de bénéficier du bonus STAB",
    itemInfo_054:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Roche de bénéficier du bonus STAB",
    itemInfo_055:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Acier de bénéficier du bonus STAB",
    itemInfo_056:
      "Tenu : augmente les dégâts infligés de x{1} et permet aux capacités de type Eau de bénéficier du bonus STAB",
    itemInfo_057:
      "Tenu : augmente le poids des objets rares lâchés de {1}%. Fonctionne toujours pour tout le monde indépendamment du porteur",
    itemInfo_058:
      "Tenu : augmente le poids des Pokémon rares de {1}%. Fonctionne toujours pour tout le monde indépendamment du porteur",
    itemInfo_059: "Tenu : augmente l'expérience gagnée par le Pokémon de {1}%",
    itemInfo_060:
      "Tenu : augmente les chances de rencontrer un Pokémon shiny sauvage de {1}%. Fonctionne toujours pour tout le monde indépendamment du porteur",
    itemInfo_061:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Feu de {1}%",
    itemInfo_062:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Eau de {1}%",
    itemInfo_063:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Électrik de {1}%",
    itemInfo_064:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Plante de {1}%",
    itemInfo_065:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Glace de {1}%",
    itemInfo_066:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Combat de {1}%",
    itemInfo_067:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Poison de {1}%",
    itemInfo_068:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Sol de {1}%",
    itemInfo_069:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Vol de {1}%",
    itemInfo_070:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Psy de {1}%",
    itemInfo_071:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Insecte de {1}%",
    itemInfo_072:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Roche de {1}%",
    itemInfo_073:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Spectre de {1}%",
    itemInfo_074:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Dragon de {1}%",
    itemInfo_075:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Ténèbres de {1}%",
    itemInfo_076:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Acier de {1}%",
    itemInfo_077:
      "Tenu : diminue les dégâts super efficaces subis par les capacités de type Fée de {1}%",
    itemInfo_078:
      "Tenu : augmente la durée de {1}, {2}, {3}, {4} et {5} de {6} tours",
    itemInfo_079: "Tenu : augmente la durée de la météo {1} de {2} tours",
    itemInfo_080: "Tenu : augmente la durée de {1} de {2} tours",
    itemInfo_081:
      "Obtenu en acquérant un nombre excessif d'objets (20+ pour les objets tenus) ou échangé avec d'autres monnaies",
    itemInfo_082: "Obtenu dans la Zone de Combat",
    itemInfo_083:
      "Utilisation : avance le temps de combat de 10 minutes. Doit être utilisé pendant un combat",
    itemInfo_084:
      "Utilisation : avance le temps de combat de 30 minutes. Doit être utilisé pendant un combat",
    itemInfo_085:
      "Utilisation : déclenche un événement saisonnier spécifique pour les 10 prochains jours. Il durera les 10 jours suivants et sera remplacé par ceux en cours. Cependant, la boutique saisonnière de cet événement ne s'ouvrira pas",
    itemInfo_086: "Utilisation : augmente le niveau d'un Pokémon de 1",
    itemInfo_087: "Utilisation : change le talent d'un Pokémon",
    itemInfo_088: "Utilisation : débloque le talent caché d'un Pokémon",
    itemInfo_089:
      "Utilisation : réapprend une capacité précédemment apprise via l'héritage génétique (à l'exclusion des capacités héritées par les Capsules de Verrouillage)",
    itemInfo_090:
      "Utilisation : avance le temps de l'opération génétique de 30 minutes. Doit être utilisé pendant qu'une opération est en cours",
    itemInfo_091: "Utilisation : obtient un Décor aléatoire",
    itemInfo_092: "Utilisation : supprime la nature d'un Pokémon",
    itemInfo_093:
      "Permet de relancer automatiquement les combats. Ne peut pas relancer quand le navigateur est fermé. Consommé une fois un combat gagné",
    itemInfo_094: "Obtenu dans les raids T3 et T4. Échangeable au Poké-Mart",
    itemInfo_095:
      "Obtenu dans les raids ★ et ★★ de la Méga-Dimension. Échangeable au Poké-Mart",
    itemInfo_096:
      "Obtenu dans les raids ★★★ et ★★★★ de la Méga-Dimension. Échangeable au Poké-Mart",
    itemInfo_097:
      "Permet de capturer des Pokémon dans la Méga-Dimension. Expire à la fin de la rotation actuelle de la Méga-Dimension",
    itemInfo_098:
      "Permet de capturer des Pokémon d'événement. Expire à la fin de l'événement",
    itemInfo_099:
      "Seasonal item, dropped randomly from defeating wild Pokemon. Expires on {1}/{2}",
    itemInfo_100: "Utilisation : augmente l'IV PV d'un Pokémon de 1",
    itemInfo_101: "Utilisation : augmente l'IV Attaque d'un Pokémon de 1",
    itemInfo_102: "Utilisation : augmente l'IV Défense d'un Pokémon de 1",
    itemInfo_103:
      "Utilisation : augmente l'IV Attaque Spéciale d'un Pokémon de 1",
    itemInfo_104:
      "Utilisation : augmente l'IV Défense Spéciale d'un Pokémon de 1",
    itemInfo_105: "Utilisation : augmente l'IV Vitesse d'un Pokémon de 1",
    itemInfo_106:
      "Utilisation : fait évoluer certains types de Pokémon (doit être niveau {1}+)",
    itemInfo_107:
      "Objet d'aide génétique : change le talent du Pokémon Hôte. Il a une chance accrue d'obtenir des talents inhabituels et rares",
    itemInfo_108:
      "Objet d'aide génétique : garantit la chance d'hériter des IV Vitesse",
    itemInfo_109:
      "Objet d'aide génétique : garantit la chance d'hériter des IV Défense Spéciale",
    itemInfo_110:
      "Objet d'aide génétique : garantit la chance d'hériter des IV Défense",
    itemInfo_111:
      "Objet d'aide génétique : garantit la chance d'hériter des IV Attaque",
    itemInfo_112:
      "Objet d'aide génétique : garantit la chance d'hériter des IV Attaque Spéciale",
    itemInfo_113:
      "Objet d'aide génétique : garantit la chance d'hériter des IV PV",
    itemInfo_114:
      "Objet d'aide génétique : multiplie par 10 la chance d'hériter des IV",
    itemInfo_115:
      "Objet d'aide génétique : transfère les capacités actuellement équipées de l'échantillon vers le répertoire de l'hôte. L'hôte conserve ses capacités équipées et les nouvelles transférées, mais l'échantillon perd les siennes. Ne peut être utilisé qu'avec au moins un niveau de compatibilité, et ne fonctionne pas sur les capacités signature",
    itemInfo_116:
      "Objet d'aide génétique : échange le talent du Pokémon avec celui de l'échantillon. Ne peut être utilisé qu'avec au moins un niveau de compatibilité et ne fonctionne pas sur les talents cachés",
    itemInfo_117:
      "Utilisation : fait évoluer un certain Pokémon<br>Tenu : augmente les dégâts infligés par {1} de x{2}",
    itemInfo_118:
      "Amélioration permanente : les récompenses d'exportation quotidiennes attribuent une Mallette de Mode supplémentaire",
    itemInfo_119:
      "Amélioration permanente : les dresseurs de la Zone de Combat accordent +3 Capsules d'Or supplémentaires",
    itemInfo_120:
      "Amélioration permanente : diminue le temps requis pour les opérations génétiques de 30 minutes (jusqu'à un minimum de 10 minutes)",
    itemInfo_121:
      "Amélioration permanente : permet à TOUTES les capacités d'être héritables par un hôte de division B et inférieure (y compris les capacités Signature et Œuf). Pour cela, au moins deux niveaux de compatibilité sont nécessaires<br><br>Deux capacités Œuf identiques ou plus transférées de cette manière ne peuvent pas être présentes en même temps dans une seule équipe, sauf si l'utilisateur de la capacité l'a comme capacité Œuf ou Signature inhérente",
    itemInfo_122:
      "Un œuf non éclos. Quittez le combat pour découvrir son contenu !",
    itemInfo_123:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Insecte si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_124:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Ténèbres si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_125:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Dragon si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_126:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Électrik si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_127:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Fée si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_128:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Combat si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_129:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Feu si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_130:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Vol si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_131:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Spectre si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_132:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Plante si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_133:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Sol si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_134:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Glace si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_135:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Normal si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_136:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Poison si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_137:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Psy si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_138:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Roche si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_139:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Acier si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    itemInfo_140:
      "Tenu : indépendamment du porteur, tous les {1} tours, exécute une attaque coordonnée de type Eau si le porteur n'est pas K.O. Son caractère physique ou spécial dépend de la stat la plus élevée du porteur (si elles sont égales, ce sera aléatoire mais infligera x1,25 de dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses bonus. Un seul Cristal Z peut être équipé par équipe",
    fieldCrossRoomDesc:
      "Augmente les dégâts infligés par la cross-power de 30%",
    fieldLightScreenDesc:
      "Les dégâts super efficaces infligés à votre équipe sont réduits à neutre",
    fieldSafeguardDesc:
      "Protège votre équipe des altérations de statut et des réductions de stats",
    fieldTrickRoomDesc:
      "Les Pokémon les plus lents deviennent plus rapides, les plus rapides deviennent plus lents. De plus, multiplie les dégâts selon la lenteur d'origine du Pokémon de x1,0 à x1,5",
    fieldWeirdRoomDesc:
      "Copie toutes les stats d'attaque et de défense de base de l'ennemi",
    rewardFromEvent: "Récompense de l'événement {event} (Rotation {rotation})",
    starterFroakie: "Grenousse<br>Type Eau",
    starterLitten: "Flamiaou<br>Type Feu",
    starterTurtwig: "Tortipouss<br>Type Plante",
  },
};

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
