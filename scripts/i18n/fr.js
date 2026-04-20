// French i18n data for Pokechill
window.i18n = window.i18n || {};
window.i18n.fr = {};

// --- UI_TEXT_MAP ---
window.i18n.fr.UI_TEXT_MAP = {
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
  "Select the seasonal event to start. It will last for the 10 following days, and will get replaced by currently-ongoing ones. However, the seasonal shop of that event wont open": "selectSeasonalEventLong",
  "Multiple of the same Egg Move cannot exist on the same team if the host does not have said move as an inherent Egg Move": "eggMoveRule",
  "Multiple of the same Egg Move cannot exist on the same team if the host does not have said move as an inherent Egg Move or Signature Move": "eggMoveRuleFull",
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
  "Defeat Legend Trainer Brendan in VS mode to unlock": "defeatBrendanToUnlock",
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
  "On HP bar NÂº{number} depleted": "onHPBarDepleted",
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
  "Could not paste from clipboard. Please paste manually or grant clipboard permissions.": "clipboardPasteError",
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
  "While in combat, Pokemon get tired and lose a very small fraction of their hp yada yada.": "tutorialPlaceholder",
  "~ Current Effects ~": "curryCurrentEffects",
  "x1.2 Item drop": "curryEffectItemDrop",
  "x1.4 Cross power damage": "curryEffectCrossPower",
  "x2 STAB damage": "curryEffectStab",
  "Reset": "resetButton",
  "Abort": "abort",
  "Start": "start",
  "Finish": "finish",
  "Rare!": "tagRareExclaim",
  "Uncommon": "tagUncommon",
  "common": "common",
  "uncommon": "tagUncommon",
  "rare": "tagRare",
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
  "default": "themeDefault",
  "dark": "themeDark",
  "verdant": "themeVerdant",
  "lilac": "themeLilac",
  "cherry": "themeCherry",
  "onyx": "themeOnyx",
  "coral": "themeCoral",
  "oled": "themeOled",
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
  "Prevents negative status effects while on": "preventsNegStatusWhileOn",
  "Prevents negative stat changes and status effects while on": "preventsNegStatsAndStatusWhileOn",
  "Attack": "statAttack",
  "SPE ▼▼": "buffSpeDown2",
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
  "All characters and related intellectual property featured are the exclusive property of Nintendo, Creatures Inc., and The Pokémon Company.": "disclaimerLegal1",
  "Decreases Physical Attack by 50% and deals damage every turn": "statusBurnDesc",
  "Decreases Special Attack by 50% and deals damage every turn": "statusPoisonDesc",
  "Moves fail to deal damage": "statusSleepDesc",
  "50% chance for moves to fail to deal damage": "statusConfusedDesc",
  "25% chance for moves to fail to deal damage and Speed is reduced by 75%": "statusParalysisDesc",
  "Prevents the enemy to use the move in the slot embargo was used": "statusEmbargoDesc",
  "Increases the damage of Fire-Type moves by 50% and decreases the damage of Water-Type moves by 50%": "weatherSunnyDesc",
  "Increases the damage of Water-Type moves by 50% and decreases the damage of Fire-Type moves by 50%": "weatherRainyDesc",
  "Increases the damage of Rock and Ground-Type moves by 50%": "weatherSandstormDesc",
  "Increases the damage of Ice-Type moves by 50%": "weatherHailDesc",
  "Increases the damage of Dark and Ghost-Type moves by 50%": "weatherFoggyDesc",
  "Increases the damage of Electric and Steel-Type moves by 50%": "terrainElectricDesc",
  "Increases the damage of Grass and Bug-Type moves by 50%": "terrainGrassyDesc",
  "Increases the damage of Fairy and Psychic-Type moves by 50%": "terrainMistyDesc",
  "A new update is available": "newUpdateAvailable",
  "New features unlocked!": "newFeaturesUnlocked",
  "<div class=\"tooltip-title\"><b>Unknown</b></div>": "tooltipUnknown",
  "<div class=\"tooltip-title\"><b>Trainer</b></div>": "tooltipTrainer",
  "<div class=\"tooltip-title\"><b>Pokemon</b></div>": "tooltipPokemon",
  "<div class=\"tooltip-title\"><b>Item</b></div>": "tooltipItem",
  "This is a Signature Move. Signature moves will automatically be learnt at level 100": "signatureMoveDesc",
  "This is an Egg Move. Egg moves can be learnt with genetics when using this Pokemon as a host, using a sample that knows said egg move (usually in the form of Signature moves), at regular move transfer odds": "eggMoveDesc",
  "Egg Move": "eggMoveLabel",
  "Overwrite Team?": "overwriteTeam",
  "Overwrite": "overwrite",
  "Duplicate Team": "duplicateTeam",
  "Invalid challenge code.": "invalidChallengeCode",
  "Start Challenge": "startChallenge",
  "No custom challenges yet.": "noCustomChallengesYet",
  "Main Challenges are coming soon.": "mainChallengesSoon",
  "Moves cannot be freely switched at this moment": "restrictedActionDesc",
  "Restricted moves cannot be freely switched during combat": "restrictedMoveDesc",
  "Mega-Dimension": "megaDimension",
  "Decreases the damage dealt by physical attacks by 75%": "reflectDesc",
  "The Battle Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances<br><br>Every time you enter the tower, you will start from floor 1, but you can try as many times as you'd like<br><br>Your highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle<br><br>There is a maximum of 100 Golden Bottlecaps achievable": "helpSpiralDesc",
  "The Battle Factory is a challenge in which your goal is to deal the maximum amount of damage. Every turn you will take a fixed amount of damage, and damage from status effects is disabled.<br><br>Every time you enter the factory, your score will reset, but you can try as many times as you'd like<br><br>Your highest reached score will be saved, and reset when the league rotation changes. You will be rewarded for your highest score reached at the end of the battle<br><br>There is a maximum of 100 Golden Bottlecaps achievable": "helpBattleFactoryDesc",
  "Welcome valiant trainer to the final frontier, the Mega-Dimension, housing only the strongest Pokemon of all the universe!<br><br>Wormholes have each separate rules, having both unique areas, field effects and skills. In addition to field effects, skills will trigger while fighting the boss<br><br>The Pokemon appearing on the rift are random and will change on each rotation": "helpDimensionDesc",
  "Automatically hides got Pokemon that are not new after a battle. Excluded from this setting are: New Pokemon, Iv's Ups and Shiny Pokemon": "helpSettingDesc",
  "Decreases the current Wild Area rotation by -1. Useful if you missed yesterday's rotation, or if your schedule doesnt line up with my game": "helpSettingsAlternateWildDesc",
  "Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Pokemon keywords:<br>unobtainable, wild, park, event, frontier, mart, shiny, caught, signature, eggMove, [type], [hidden ability]<br><br>Move keywords:<br>physical, special, signature, [type], [ability]": "keywordsDictionaryHelp",
  "Story-driven battles and curated challenges live here. More Main Challenges are coming soon.": "helpMainChallengesDesc",
  "Trainers have twice the health. Only applies to VS Trainers": "hardModeHelp",
  "If any of your Pokemon get defeated while battling a trainer of VS Trainers, it will permanently be unusuable until you turn this mode off": "nuzlokeModeHelp",
  "All of your Pokemon have functionally max IVs regardless of their actual IVs. This can be toggled off without any permanent changes<br><br>There are no side-effects to this modifier": "helpModNoIvsDesc",
  "Fatigue damage is reduced by x3<br><br>There are no side-effects to this modifier": "helpModAfkDesc",
  "Every 12h you can select up to three abilities to be active for your entire team during raids for 1 hour. These abilities follow the same rules as regular abilities, and wont stack with already existing ones": "helpCurryDesc",
  "Disable brave shield to properly run the page!": "disableBraveShield",
  "Please enter a tag name": "pleaseEnterTagName",
  "Please select an icon": "pleaseSelectIcon",
  "No tags created yet": "noTagsCreatedYet",
  "Save and go!": "saveAndGo",
  "Reward Received": "rewardReceived",
  "Operation overview": "operationOverview",
  "New items!": "newItems",
  "Restricted Z Moves": "restrictedZMoves",
  "Team Auto-Build": "teamAutoBuild",
  "Select your preference for the team (Your current team will be replaced by it)": "teamAutoBuildDesc",
  "Choose Your Team": "chooseYourTeam",
  "Pick a different team slot.": "pickDifferentTeamSlot",
  "Copy Team": "copyTeam",
  "Select the target team slot to overwrite.": "selectTargetTeamSlot",
  "Close": "closeBtn",
  "Compatibility": "compatibilityLabel",
  "Reward:": "rewardLabel",
};

const UI_TEXT_MAP = window.i18n.fr.UI_TEXT_MAP;
window.UI_TEXT_MAP = UI_TEXT_MAP;

// --- UI_PARTIALS & translateRuntimeText ---
window.i18n.fr.UI_PARTIALS = [
  // ── Restricted moves modal (teams.js:355 / explore.js:9300) ────────────
  // Le message est composé au runtime via innerHTML qui intercale une icône
  // SVG au milieu du texte :
  //   `...multiple restricted moves (${restrictedIcon}) equipped`
  // La table UI_TEXT_MAP en tête de fichier contient la phrase avec un
  // placeholder `{icon}`, mais l'engine i18n fait du matching exact sur les
  // nodes de texte — qui sont splittés autour du SVG. Chaque fragment est
  // donc traduit séparément ici.
  [
    "One or more Pokemon in the current team have multiple restricted moves (",
    "Un ou plusieurs Pokémon de l'équipe actuelle ont plusieurs capacités restreintes (",
  ],
  [
    "The training Pokemon has multiple restricted moves (",
    "Le Pokémon d'entraînement a plusieurs capacités restreintes (",
  ],
  // Suffixes. Plus long avant plus court — sinon ") equipped" matche
  // d'abord et mange l'exclamation.
  [") equipped!", ") équipées !"],
  [") equipped", ") équipées"],

  // ── Restricted move tooltip (tooltip.js:925) ───────────────────────────
  // Même pattern que le modal plus haut : SVG injecté au milieu du texte
  // via template literal, les nodes de texte sont splittés autour de l'icône.
  [
    "This move is restricted (",
    "Cette capacité est restreinte (",
  ],
  [
    ") and only one of them can be present in the active moves at a time",
    ") et une seule d'entre elles peut être présente dans les capacités actives à la fois",
  ],

  ["Litten", "Flamiaou"],
  ["Turtwig", "Tortipouss"],
  ["Froakie", "Grenousse"],
  ["Level ", "Niveau "],
  ["Lv. ", "N. "],
  ["Level: ", "Niveau : "],
  ["lvl ", "niv "],
  ["Caught: ", "Capturés : "],

  ["Highest Score: ", "Score Max : "],
  ["Score: ", "Score : "],
  [" turns before fainting", " tours avant de tomber"],
  [" left for next level)", " restants pour le prochain niveau)"],
  ["(max level reached)", "(niveau max atteint)"],
  ["Pokemon ", "Pokémon "],
  ["Pokemon", "Pokémon"],
  ["Pokemon's ", "Pokémon "],
  ["Signature Move: ", "Capacité Signature : "],
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
  ["Defeated: ", "Vaincus : "],
  ["Current Type Rotation: ", "Rotation de type actuelle : "],
  ["Requires a ", "Nécessite un "],
  ["Requires an ", "Nécessite un "],
  ["Requires x3 ", "Nécessite x3 "],
  [" to enter", " pour entrer"],
  // ═══ AREA-ENTRY ITEMS (substrings, sorted by length desc; matches render in "Nécessite un X pour entrer") ═══
  // Multi-word item names first so they win over shorter substrings.
  [" Wormhole Residues ", " Résidus de Trou de Ver "],
  [" Wormhole Residue ", " Résidu de Trou de Ver "],
  [" Wormhole Residues", " Résidus de Trou de Ver"],
  [" Wormhole Residue", " Résidu de Trou de Ver"],
  [" Future Contraptions ", " Machineries Futures "],
  [" Future Contraption ", " Machinerie Future "],
  [" Future Contraptions", " Machineries Futures"],
  [" Future Contraption", " Machinerie Future"],
  [" Ancient Keystones ", " Clés Anciennes "],
  [" Ancient Keystone ", " Clé Ancienne "],
  [" Ancient Keystones", " Clés Anciennes"],
  [" Ancient Keystone", " Clé Ancienne"],
  [" Ancient Orchids ", " Orchidées Anciennes "],
  [" Ancient Orchid ", " Orchidée Ancienne "],
  [" Ancient Orchids", " Orchidées Anciennes"],
  [" Ancient Orchid", " Orchidée Ancienne"],
  [" Steel Keystones ", " Clés Acier "],
  [" Steel Keystone ", " Clé Acier "],
  [" Steel Keystones", " Clés Acier"],
  [" Steel Keystone", " Clé Acier"],
  [" Aether Keycards ", " Cartes Aether "],
  [" Aether Keycard ", " Carte Aether "],
  [" Aether Keycards", " Cartes Aether"],
  [" Aether Keycard", " Carte Aether"],
  [" Wisdom Petals ", " Pétales de Sagesse "],
  [" Wisdom Petal ", " Pétale de Sagesse "],
  [" Wisdom Petals", " Pétales de Sagesse"],
  [" Wisdom Petal", " Pétale de Sagesse"],
  [" Epoch Feathers ", " Plumes d'Époque "],
  [" Epoch Feather ", " Plume d'Époque "],
  [" Epoch Feathers", " Plumes d'Époque"],
  [" Epoch Feather", " Plume d'Époque"],
  [" Primal Earths ", " Terres Primales "],
  [" Primal Earth ", " Terre Primale "],
  [" Primal Earths", " Terres Primales"],
  [" Primal Earth", " Terre Primale"],
  [" Red Chains ", " Chaînes Rouges "],
  [" Red Chain ", " Chaîne Rouge "],
  [" Red Chains", " Chaînes Rouges"],
  [" Red Chain", " Chaîne Rouge"],
  [" Future Disks ", " Disques Futurs "],
  [" Future Disk ", " Disque Futur "],
  [" Future Disks", " Disques Futurs"],
  [" Future Disk", " Disque Futur"],
  [" Mega-Clusters ", " Amas Méga "],
  [" Mega-Cluster ", " Amas Méga "],
  [" Mega-Clusters", " Amas Méga"],
  [" Mega-Cluster", " Amas Méga"],
  [" Mega-Chunks ", " Morceaux Méga "],
  [" Mega-Chunk ", " Morceau Méga "],
  [" Mega-Chunks", " Morceaux Méga"],
  [" Mega-Chunk", " Morceau Méga"],
  [" Mega-Pieces ", " Fragments Méga "],
  [" Mega-Piece ", " Fragment Méga "],
  [" Mega-Pieces", " Fragments Méga"],
  [" Mega-Piece", " Fragment Méga"],
  [" Pokeflutes ", " Poké Flûtes "],
  [" Pokeflute ", " Poké Flûte "],
  [" Pokeflutes", " Poké Flûtes"],
  [" Pokeflute", " Poké Flûte"],
  [" Old Gateau", " Vieux Gâteau"],
  ["Common Ability", "Talent Commun"],
  ["Uncommon Ability", "Talent Inhabituel"],
  ["Rare Ability", "Talent Rare"],
  ["Highest Floor: ", "Étage Max : "],
  ["Floor: ", "Étage : "],
  ["Auto-Refight is active! ", "Recombat auto actif ! "],
  ["Auto-Refight Tickets remaining", "tickets de recombat auto restants"],
  ["Auto-Refight Tickets", "tickets de recombat auto"],
  ["Auto-Refight Ticket", "ticket de recombat auto"],
  ["Auto-Refight", "Recombat auto"],
  ["Rare!", "Rare !"],
  ["Uncommon", "Peu commun"],
  ["Requires an ", "Nécessite un "],
  ["Wont use ", "N'utilise pas de "],
  ["Wont consume an ", "Ne consomme pas de "],
  ["Select ingredients to add to the curry! ", "Sélectionnez des ingrédients à ajouter au curry ! "],
  ["Pay and cook (", "Payer et cuisiner ("],
  ["Speed: ", "Vitesse : "],
  ["Time left: ", "Temps restant : "],
  ["Right click/long tap a pokemon in your team to set their moves, you can also do this while in battle. Press the + symbol next to the Pokemon to assign items", "Clic droit ou appui long sur un Pokémon de ton équipe pour définir ses capacités, tu peux aussi le faire en combat. Appuie sur le symbole + à côté du Pokémon pour lui assigner des objets"],
  ["in bag", "dans le sac"],
  ["Use: Teach the ability ", "Utilisation : Apprend le talent "],
  ["Use: Teach the move ", "Utilisation : Apprend la capacité "],
  [" to ", " à "],
  ["Changes the weather to ", "Change la météo en "],
  [" when entering or switching into the battle", " en entrant ou en rejoignant le combat"],
  [" when afflicted with ", " quand affligé par "],
  [" when hit by a ", " quand touché par un "],
  ["Increases the Damage dealt by ", "Augmente les dégâts infligés de "],
  [", and nullifies the damage overtime caused by it", " et annule les dégâts sur la durée causés par celui-ci"],
];

const UI_PARTIALS = window.i18n.fr.UI_PARTIALS;
window.UI_PARTIALS = UI_PARTIALS;

// --- GAME_UI ---
window.i18n.fr.GAME_UI = {
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
    // Buff abréviations — valeurs EN restaurées d'après formatBuffs()
    // dans explore.js (ligne ~7835). Le bloc précédent avait tous les
    // statuts mappés à "SPE ▼▼" (corruption d'un find/replace précédent),
    // ce qui cassait toute introspection EN-source du lang toggle.
    buffAtk: "ATK",
    buffBrn: "BRN",
    buffCnf: "CNF",
    buffDef: "DEF",
    buffEmb: "EMB",
    buffFrz: "FRZ",
    buffPar: "PAR",
    buffPsn: "PSN",
    buffSatk: "SATK",
    buffSdef: "SDEF",
    buffSpe: "SPE",
    // Anciennement nommée `buffZzz` (collision visuelle avec le ZZZ
    // du sommeil). Renommée : UI_TEXT_MAP:942 mappe "SPE ▼▼" vers cette
    // clé, la source EN reste donc "SPE ▼▼" (Speed down 2). Le vrai
    // ZZZ du sommeil passe par explore.js:7873 (formatBuffs) et ne
    // transite jamais par l'engine i18n — rien à changer côté sommeil.
    buffSpeDown2: "SPE ▼▼",
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
    themeDefault: "default",
    themeDark: "dark",
    themeVerdant: "verdant",
    themeLilac: "lilac",
    themeCherry: "cherry",
    themeOnyx: "onyx",
    themeCoral: "coral",
    themeOled: "oled",
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
    curryCurrentEffects: "~ Current Effects ~",
    curryEffectItemDrop: "x1.2 Item drop",
    curryEffectCrossPower: "x1.4 Cross power damage",
    curryEffectStab: "x2 STAB damage",
    resetButton: "Reset",
    tutorialPlaceholder: "While in combat, Pokemon get tired and lose a very small fraction of their hp yada yada.",
    tagRareExclaim: "Rare!",
    tagUncommon: "Uncommon",
    tagRare: "Rare",
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
    clipboardPasteError: "Could not paste from clipboard. Please paste manually or grant clipboard permissions.",
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
    eggMoveRuleFull:
      "Plusieurs Egg Moves identiques ne peuvent pas exister dans la même équipe si le Pokémon hôte n'a pas cette capacité comme Egg Move inhérente ou Capacité Signature",
    elementNotFound: "Element with id 'text-data-raw' not found",
    elite: "Elite",
    enabled: "enabled",
    enterTagName: "Please enter a tag name",
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
    onHPBarDepleted: "On HP bar NÂº{number} depleted",
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
    rare: "Rare",
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
    rightClickKeywords: "Clic droit / appui long pour voir les mots-clés",
    rightClickKeywords2: "Clic droit pour voir les mots-clés",
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
    selectSeasonalEventLong:
      "Sélectionnez l'événement saisonnier à démarrer. Il durera les 10 prochains jours, et sera remplacé par ceux en cours. Cependant, la boutique saisonnière de cet événement n'ouvrira pas",
    selectAnEvent: "Select an event",
    selectIconAlert: "Please select an icon",
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
      "<span>Unlocks ${format(pkmn[ttdata].evolve()[1].pkmn.id)} at level ${pkmn[ttdata].evolve()[1].level} âœ”ï¸</span>",
    unlocksByUsingItem:
      "<span>Unlocks ${format(pkmn[ttdata].evolve()[evo].pkmn.id)} by using a ${format(item[pkmn[ttdata].evolve()[evo].item.id].id)} at level ${levelRequired}+ ✔️</span>",
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
    // Traduction FR de la pill « SPE ▼▼ » (voir UI_TEXT_MAP:942 pour
    // le binding). Anciennement nommée buffZzz avec valeur "ZZZ", ce
    // qui causait un double « ZZZ » affiché sur les ennemis ralentis
    // et endormis simultanément — le sommeil étant lui-même rendu
    // « ZZZ » en dur par explore.js:7873.
    buffSpeDown2: "VIT ▼▼",
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
    themeDefault: "Défaut",
    themeDark: "Sombre",
    themeVerdant: "Verdoyant",
    themeLilac: "Lilas",
    themeCherry: "Cerise",
    themeOnyx: "Onyx",
    themeCoral: "Corail",
    themeOled: "OLED",
    clearFilters: "Effacer les Filtres",
    clickAddTags: "+ Étiquette",
    clickToAddTags: "+ Étiquette",
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
    curryCurrentEffects: "~ Effets Actuels ~",
    curryEffectItemDrop: "x1,2 Butin d'objets",
    curryEffectCrossPower: "x1,4 Dégâts Cross-Power",
    curryEffectStab: "x2 Dégâts STAB",
    resetButton: "Réinitialiser",
    tutorialPlaceholder: "En combat, les Pokémon perdent une très petite fraction de leurs PV maximum en attaquant. Bla bla bla.",
    tagRareExclaim: "Rare !",
    tagUncommon: "Peu commun",
    tagRare: "Rare",
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
    clipboardPasteError: "Impossible de coller depuis le presse-papiers. Veuillez coller manuellement ou accorder les permissions du presse-papiers.",
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
      "Ceci est une Egg Move. Les Egg Moves peuvent être apprises avec la génétique en utilisant ce Pokémon comme hôte, avec un échantillon qui connaît ladite Egg Move (souvent sous forme de Capacité Signature), avec les chances normales de transfert de capacité",
    eggMoveInherited: "Egg Move héritée : {move} !",
    eggMoveLabel: "Egg Move",
    eggMoveOf: "et comme Egg Move de {pokemon}",
    eggMoveRestrictionError:
      "Plusieurs Egg Moves identiques ne peuvent exister dans la même équipe si le Pokémon ne possède pas cette capacité comme Egg Move ou Capacité Signature innée",
    eggMoveRule:
      "Plusieurs copies de la même Egg Move ne peuvent pas exister dans la même équipe si le Pokémon hôte n'a pas cette capacité comme Egg Move inhérente",
    elementNotFound: "Élément avec l'id 'text-data-raw' introuvable",
    elite: "Élite",
    enabled: "activé",
    enterTagName: "Veuillez entrer un nom de tag",
    errorLoadingData: "Erreur lors du chargement des données.",
    errorLoadingDataPrefix: "Erreur lors du chargement des données : ",
    eventAetherTakeover: "Prise de Contrôle Æther",
    eventAncientsAwoken: "Éveil des Anciens",
    eventPrimevalWilds: "Terres Primitives",
    eventReturnToKanto: "Retour à Kanto",
    eventScienceFuture: "Science du Futur",
    eventSinnohExpedition: "Expédition Sinnoh",
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
      "Les Pokémon gagnent de l'expérience en vainquant des ennemis et en partagent une partie avec l'équipe. Cela reste vrai même si les Pokémon de l'équipe sont vaincus<br><br>Le gain d'expérience est proportionnel à la différence de niveau. Une différence de Â±5 niveaux donnera le même montant, tandis qu'une différence supérieure à 5 niveaux augmentera grandement le montant reçu.<br><br>Un Pokémon de 10 niveaux supérieurs ne donnera aucune expérience",
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
      "Les capacités sont apprises tous les 7 niveaux. Les capacités peuvent être changées par clic droit / appui long sur un Pokémon de l'équipe<br><br>Les capacités offensives sont divisées en capacités physiques et spéciales<br>La catégorie de la capacité détermine si les dégâts dépendent de l'Attaque ou de l'Attaque Spéciale de l'utilisateur et de la Défense ou Défense Spéciale de la cible<br><br>Certains Pokémon peuvent avoir des Capacités Signature. Les Capacités Signature dépendent de l'espèce et sont apprises au niveau 100. Elles ne peuvent pas être héritées par génétique, sauf si l'hôte possède la Egg Move correspondante<br><br>Certaines capacités peuvent être restreintes. Une seule capacité restreinte peut être équipée à la fois sur le Pokémon actif",
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
    hasEggMove: "a une Egg Move",
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
    onHPBarDepleted: "Lorsque la barre de PV NÂº{number} est épuisée",
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
    rare: "Rare",
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
    repeatedEggMoves: "Egg Moves répétées",
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
    selectIconAlert: "Veuillez sélectionner une icône",
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
    tagLightScreen: "Mur Lumière",
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
    tagSunny: "Soleil",
    tagTrickRoom: "Distorsion",
    tagUncommon: "Peu commun",
    tagUncommonExclaim: "Peu commun !",
    tagUncommonItems: "Peu commun",
    tagWeirdRoom: "Zone Étrange",
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
      "Utilisation : réapprend une capacité précédemment apprise via l'héritage génétique (à l'exclusion des capacités héritées par les Capsules Lock)",
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
      "Amélioration permanente : permet à TOUTES les capacités d'être héritables par un hôte de division B et inférieure (y compris les capacités Signature et Egg Moves). Pour cela, au moins deux niveaux de compatibilité sont nécessaires<br><br>Deux Egg Moves identiques ou plus transférées de cette manière ne peuvent pas être présentes en même temps dans une seule équipe, sauf si l'utilisateur de la capacité l'a comme Egg Move ou Signature inhérente",
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
    preventsNegStatusWhileOn: "Empêche les statuts négatifs sous",
    preventsNegStatsAndStatusWhileOn: "Empêche les changements de stats négatifs et les statuts sous",
    newUpdateAvailable: "Une nouvelle mise à jour est disponible",
    newFeaturesUnlocked: "Nouvelles fonctionnalités débloquées !",
    tooltipUnknown: '<div class="tooltip-title"><b>Inconnu</b></div>',
    tooltipTrainer: '<div class="tooltip-title"><b>Dresseur</b></div>',
    tooltipPokemon: '<div class="tooltip-title"><b>Pokémon</b></div>',
    tooltipItem: '<div class="tooltip-title"><b>Objet</b></div>',
    overwriteTeam: "Écraser l'équipe ?",
    overwrite: "Écraser",
    duplicateTeam: "Dupliquer l'équipe",
    invalidChallengeCode: "Code de défi invalide.",
    startChallenge: "Commencer le défi",
    noCustomChallengesYet: "Aucun défi personnalisé pour l'instant.",
    mainChallengesSoon: "Les défis principaux arrivent bientôt.",
    disableBraveShield: "Désactivez le bouclier Brave pour exécuter correctement la page !",
    pleaseEnterTagName: "Veuillez entrer un nom de tag",
    pleaseSelectIcon: "Veuillez sélectionner une icône",
    noTagsCreatedYet: "Aucun tag créé pour l'instant",
    saveAndGo: "Sauv. et lancer",
    rewardReceived: "Récompense reçue",
    operationOverview: "Aperçu de l'opération",
    newItems: "Nouveaux objets !",
    restrictedZMoves: "Capacités Z restreintes",
    teamAutoBuild: "Construction auto d'équipe",
    teamAutoBuildDesc: "Sélectionnez votre préférence pour l'équipe (votre équipe actuelle sera remplacée)",
    chooseYourTeam: "Choisissez votre équipe",
    pickDifferentTeamSlot: "Choisissez un emplacement d'équipe différent.",
    copyTeam: "Copier l'équipe",
    selectTargetTeamSlot: "Sélectionnez l'emplacement d'équipe cible à écraser.",
    closeBtn: "Fermer",
    compatibilityLabel: "Compatibilité",
    rewardLabel: "Récompense :",
  },
};

const GAME_UI = window.i18n.fr.GAME_UI;
window.GAME_UI = GAME_UI;

// --- translateRuntimeText ---
window.translateRuntimeText = function(value) {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (UI_TEXT_MAP[trimmed]) {
    return t_ui(UI_TEXT_MAP[trimmed]);
  }
  if (LORE_MAP[trimmed]) {
    return LORE_MAP[trimmed];
  }
  const res = applyPartialTranslations(value);
  return res.text;
};

// --- applyPartialTranslations (original) ---
window.i18n.fr.applyPartialTranslations = function(txt) {
  let changed = false;

  // Ability "nerf" descriptions (shown when slotted as non-hidden)
  // These are injected as plain text inside tooltip <font> tags
  if (txt.includes("When slotted as a non-hidden ability")) {
    txt = txt.replace(/When slotted as a non-hidden ability:/gi, "Quand équipé comme talent non-caché :");
    // "reduced to" may have had its " to " partially translated to " à " by UI_PARTIALS
    txt = txt.replace(/reduced to/gi, "réduits à");
    txt = txt.replace(/reduced à/gi, "réduits à");
    // Fix gender agreement: Vitesse réduits → Vitesse réduite
    txt = txt.replace(/Vitesse réduits/gi, "Vitesse réduite");
    changed = true;
  }

  // TM / Memory descriptions (interpolated with HTML spans)
  const tmMoveNew = txt.replace(/Use: Teach the move ([\s\S]+?) to all Pokemon/g, "Utilisation : enseigne la capacité $1 à tous les Pokémon");
  if (tmMoveNew !== txt) {
    txt = tmMoveNew; changed = true;
  } else {
    const tmMoveNew2 = txt.replace(/Use: Teach the move ([\s\S]+?) to ([\s\S]+?) Pokemon/g, "Utilisation : enseigne la capacité $1 aux Pokémon de type $2");
    if (tmMoveNew2 !== txt) { txt = tmMoveNew2; changed = true; }
  }

  const tmAbilityNew = txt.replace(/Use: Teach the ability ([\s\S]+?) to all Pokemon/g, "Utilisation : enseigne le talent $1 à tous les Pokémon");
  if (tmAbilityNew !== txt) {
    txt = tmAbilityNew; changed = true;
  } else {
    const tmAbilityNew2 = txt.replace(/Use: Teach the ability ([\s\S]+?) to ([\s\S]+?) Pokemon/g, "Utilisation : enseigne le talent $1 aux Pokémon de type $2");
    if (tmAbilityNew2 !== txt) { txt = tmAbilityNew2; changed = true; }
  }
  for (const [en, fr] of UI_PARTIALS) {
    if (txt.includes(en)) {
      txt = txt.split(en).join(fr);
      changed = true;
    }
  }
  return { text: txt, changed };
}

// --- applyPartialTranslations (wrapped extension) ---
const _origApplyPartialTranslations = window.i18n.fr.applyPartialTranslations;
window.i18n.fr.applyPartialTranslations = function(value) {
  const res = _origApplyPartialTranslations(value);
  let txt = res.text;
  if (typeof txt !== 'string') return res;

  function stat_fr(stat) {
    const map = {"Attack":"Attaque","Defense":"Défense","Special Attack":"Attaque Spéciale","Special Defense":"Défense Spéciale","Speed":"Vitesse"};
    return map[stat] || stat;
  }

  // Type labels in item names / canvas
  txt = txt.replace(/\((Normal|Fighting|Flying|Poison|Ground|Rock|Bug|Ghost|Steel|Fire|Water|Grass|Electric|Psychic|Ice|Dragon|Dark|Fairy)\)/g, function(m, type){
    const typeMap = {Normal:"Normal",Fighting:"Combat",Flying:"Vol",Poison:"Poison",Ground:"Sol",Rock:"Roche",Bug:"Insecte",Ghost:"Spectre",Steel:"Acier",Fire:"Feu",Water:"Eau",Grass:"Plante",Electric:"Électrik",Psychic:"Psy",Ice:"Glace",Dragon:"Dragon",Dark:"Ténèbres",Fairy:"Fée"};
    return "(" + (typeMap[type] || type) + ")";
  });

  // Canvas stat labels
  txt = txt.replace(/\(Attack\)/g, '(Attaque)');
  txt = txt.replace(/\(Defense\)/g, '(Défense)');
  txt = txt.replace(/\(Special Attack\)/g, '(Attaque Spéciale)');
  txt = txt.replace(/\(Special Defense\)/g, '(Défense Spéciale)');
  txt = txt.replace(/\(Speed\)/g, '(Vitesse)');
  txt = txt.replace(/\(Hp\)/g, '(PV)');

  // Signature / Egg Move colon labels in tooltips
  txt = txt.replace(/Signature Move: /g, 'Capacité Signature : ');
  txt = txt.replace(/Egg Move: /g, 'Egg Move : ');

  // Save error alert with dynamic message
  txt = txt.replace(/^Error loading data: (.+)$/, 'Erreur lors du chargement des données : $1');

  // Team duplicate overwrite message with dynamic team name
  txt = txt.replace(/This will replace (.+)\./, 'Ceci remplacera $1.');

  // Item count labels
  txt = txt.replace(/(\d+) in total/g, '$1 au total');
  txt = txt.replace(/(\d+) in bag/g, '$1 dans le sac');
  txt = txt.replace(/\(You have (\d+)\)/g, '(Vous en avez $1)');

  // Tooltip move exclusivity descriptions
  txt = txt.replace(/This move can only appear as the Signature Move of/g, 'Cette capacité ne peut apparaître que comme Capacité Signature de');
  txt = txt.replace(/and the Egg Move of/g, 'et comme Egg Move de');

  // Family 1: Genetics HTML messages (text-only replacements)
  txt = txt.replace(/★ Moves transferred!/g, '★ Capacités transférées !');
  txt = txt.replace(/★ Ability swapped!/g, '★ Talent échangé !');
  txt = txt.replace(/★ New ability: ([^!]+)!/g, '★ Nouveau talent : $1 !');
  txt = txt.replace(/◇ Move inherited: ([^!]+)!/g, '◇ Capacité héritée : $1 !');
  txt = txt.replace(/✦ Shiny Mutation!/g, '✦ Mutation chromatique !');
  txt = txt.replace(/❖ (Attack|Defense|Special Attack|Special Defense|Speed) Iv's inherited!/g, function(m, stat){ return '❖ IV de '+stat_fr(stat)+' hérités !'; });
  txt = txt.replace(/⟐ Egg Move inherited: ([^!]+)!/g, '⟐ Egg Move héritée : $1 !');
  txt = txt.replace(/◆ (Attack|Defense|Special Attack|Special Defense|Speed) Iv's increased!/g, function(m, stat){ return '◆ IV de '+stat_fr(stat)+' augmentés !'; });

  // Family 2: Chance patterns
  txt = txt.replace(/(\d+)% chance (?:to|à) decrease enemy (Attack|Defense|Special Attack|Special Defense|Speed|Attaque|Défense|Attaque Spéciale|Défense Spéciale|Vitesse) by (\d+)%/g, "$1% de chance de diminuer l\'ennemi $2 de $3%");
  txt = txt.replace(/(\d+)% chance (?:to|à) increase (Attack|Defense|Special Attack|Special Defense|Speed|Attaque|Défense|Attaque Spéciale|Défense Spéciale|Vitesse) by (\d+)%/g, "$1% de chance d\'augmenter $2 de $3%");
  txt = txt.replace(/(\d+)% chance (?:to|à) increase all Stats by (\d+)%/g, "$1% de chance d\'augmenter toutes les stats de $2%");
  txt = txt.replace(/(\d+)% chance (?:to|à) inflict \\{var\\}/g, "$1% de chance d\'infliger {var}");
  txt = txt.replace(/(\d+)% chance (?:to|à) inflict \\{var\\},\\{var\\} or \\{var\\}/g, "$1% de chance d\'infliger {var}, {var} ou {var}");
  txt = txt.replace(/(\d+)% chance (?:to|à) inflict \\{var\\} when attacked/g, "$1% de chance d\'infliger {var} quand attaqué");
  txt = txt.replace(/(\d+)% chance for moves to fail to deal damage and Speed is reduced by (\d+)%/g, "$1% de chance que les capacités échouent à infliger des dégâts et la Vitesse est réduite de $2%");
  txt = txt.replace(/(\d+)% chance for moves to fail to deal damage/g, "$1% de chance que les capacités échouent à infliger des dégâts");

  // Family 3: Stat increase/decrease patterns
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Augmente $1 de $2%");
  txt = txt.replace(/Increase (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Augmente $1 de $2%");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) and (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Augmente $1 et $2 de $3%");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% to the entire team/g, "Augmente $1 de $2% pour toute l\'équipe");
  txt = txt.replace(/Decreases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Diminue $1 de $2%");
  txt = txt.replace(/Decreases (Attack|Defense|Special Attack|Special Defense|Speed) and (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Diminue $1 et $2 de $3%");
  txt = txt.replace(/Decreases enemy (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Diminue l\'$1 ennemie de $2%");
  txt = txt.replace(/Decreases enemy (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% and (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Diminue l\'$1 ennemie de $2% et $3 de $4%");
  txt = txt.replace(/Decreases enemy (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% when the opposing Pokemon enters the battle/g, "Diminue l\'$1 ennemie de $2% quand le Pokémon adverse entre au combat");
  txt = txt.replace(/Decreases the damage dealt by physical attacks by (\d+)%/g, "Diminue les dégâts infligés par les attaques physiques de $1%");
  txt = txt.replace(/Decrease enemy Speed by (\d+)% on getting hit/g, "Diminue la Vitesse ennemie de $1% en subissant une attaque");
  txt = txt.replace(/Increase all Stats by (\d+)%/g, "Augmente toutes les stats de $1%");
  txt = txt.replace(/Increase (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% when hit with a super-effective move/g, "Augmente $1 de $2% quand touché par une attaque super-efficace");
  txt = txt.replace(/Increases the highest stat of the user by (\d+)% on \\{var\\}(?: weather)?/g, "Augmente la stat la plus haute de l\'utilisateur de $1% sous {var}");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% on \\{var\\} weather/g, "Augmente $1 de $2% sous la météo {var}");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% when defeating a Pokemon/g, "Augmente $1 de $2% en vainquant un Pokémon");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% if afflicted with a status effect/g, "Augmente $1 de $2% si affligé par un statut");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) and (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%\. Attacks x([0-9.]+) slower than usual/g, "Augmente $1 et $2 de $3%. Attaque x$4 plus lentement que la normale");
  txt = txt.replace(/Increases (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)% but decreases (Attack|Defense|Special Attack|Special Defense|Speed) and (Attack|Defense|Special Attack|Special Defense|Speed) by (\d+)%/g, "Augmente $1 de $2% mais diminue $3 et $4 de $5%");

  // Family 4: Attack speed patterns
  txt = txt.replace(/Attacks x([0-9.]+) faster than usual/g, "Attaque x$1 plus vite que la normale");
  txt = txt.replace(/Attacks x([0-9.]+) slower than usual/g, "Attaque x$1 plus lentement que la normale");

  // Family 5: Type-specific ability descriptions
  txt = txt.replace(/Halves the damage received of ([A-Za-z]+)-type moves/g, "Divise par deux les dégâts reçus des capacités de type $1");
  txt = txt.replace(/Nullifies received ([A-Za-z]+)-type moves and increases Speed by (\d+)% after being hit with one/g, "Annule les capacités de type $1 reçues et augmente la Vitesse de $2% après avoir été touché par l\'une d\'elles");
  txt = txt.replace(/Nullifies received ([A-Za-z]+)-type moves/g, "Annule les capacités de type $1 reçues");
  txt = txt.replace(/Increases the power of ([A-Za-z]+)-type moves by (\d+)% below (\d+)% HP/g, "Augmente la puissance des capacités de type $1 de $2% sous $3% de PV");
  txt = txt.replace(/Normal-type moves become ([A-Za-z]+)-type moves, and their power is multiplied by x([0-9.]+)/g, "Les capacités de type Normal deviennent des capacités de type $1, et leur puissance est multipliée par x$2");
  txt = txt.replace(/Increases the damage of ([A-Za-z]+) and ([A-Za-z]+)-Type moves by (\d+)%/g, "Augmente les dégâts des capacités de type $1 et $2 de $3%");
  txt = txt.replace(/Increases the damage of ([A-Za-z]+)-Type moves by (\d+)% and decreases the damage of ([A-Za-z]+)-Type moves by (\d+)%/g, "Augmente les dégâts des capacités de type $1 de $2% et diminue les dégâts des capacités de type $3 de $4%");
  txt = txt.replace(/Halves damage received from ([A-Za-z]+) and ([A-Za-z]+)-type moves/g, "Divise par deux les dégâts reçus des capacités de type $1 et $2");
  txt = txt.replace(/([A-Za-z]+) and ([A-Za-z]+)-type moves are executed x([0-9.]+) faster than usual/g, "Les capacités de type $1 et $2 sont exécutées x$3 plus vite que la normale");

  // Family 6: Move-specific patterns
  txt = txt.replace(/Temporarily adds ([A-Za-z]+) to the type of the enemy\\. Super-effective damage bonus dealt from temporal types is halved, and applying a second temporary type replaces the first one/g, "Ajoute temporairement le type $1 au type de l\'ennemi. Le bonus de dégâts super-efficaces infligés par les types temporaires est divisé par deux, et appliquer un second type temporaire remplace le premier");
  txt = txt.replace(/Power doubles if the target is Paralyzed/g, "La puissance double si la cible est Paralysée");
  txt = txt.replace(/Power doubles if the user is Paralyzed, Burned or Poisoned/g, "La puissance double si l\'utilisateur est Paralysé, Brûlé ou Empoisonné");
  txt = txt.replace(/Power doubles if the target is ([A-Za-z\-]+)/g, "La puissance double si la cible est $1");
  txt = txt.replace(/Power doubles if the target is \\{var\\}/g, "La puissance double si la cible est {var}");
  txt = txt.replace(/Prevents all Pokemon on your team from \\{var\\}/g, "Empêche tous les Pokémon de l\'équipe d\'être {var}");
  txt = txt.replace(/Prevents negative stat changes and status effects while on \\{var\\} weather/g, "Empêche les changements de stats négatifs et les statuts sous la météo {var}");
  txt = txt.replace(/Prevents negative status effects while on \\{var\\} weather/g, "Empêche les statuts négatifs sous la météo {var}");
  txt = txt.replace(/Changes the weather to \\{var\\} and increases Special Attack by (\d+)%/g, "Change la météo en {var} et augmente l\'Attaque Spéciale de $1%");
  txt = txt.replace(/Changes the weather to \\{var\\} and switches to the next party member/g, "Change la météo en {var} et passe au prochain membre de l\'équipe");
  txt = txt.replace(/Changes the weather to \\{var\\}/g, "Change la météo en {var}");

  // Family 7: Item patterns (When held)
  txt = txt.replace(/When held: Increase the damage of ([A-Za-z]+)-Type moves by x(\\{var\\}|[0-9.]+)/g, "Tenu : Augmente les dégâts des capacités de type $1 de x$2");
  txt = txt.replace(/When held: Decreases the super-effective damage taken from ([A-Za-z]+)-Type moves by (\\{var\\}|[0-9.]+)%/g, "Tenu : Diminue les dégâts super-efficaces reçus des capacités de type $1 de $2%");
  txt = txt.replace(/When held: Increases damage dealt by x(\\{var\\}|[0-9.]+) and enables ([A-Za-z]+)-Type (?:moves|capacités) (?:to|à) receive STAB bonuses/g, "Tenu : Augmente les dégâts infligés de x$1 et permet aux capacités de type $2 de bénéficier du bonus STAB");
  txt = txt.replace(/When held: Increases damage dealt by x(\\{var\\}|[0-9.]+) and increases Speed by (\d+)% for (\d+) turns when hit by a Super-Effective move/g, "Tenu : Augmente les dégâts infligés de x$1 et augmente la Vitesse de $2% pendant $3 tours quand touché par une attaque super-efficace");
  txt = txt.replace(/When held: Increases damage dealt by x(\\{var\\}|[0-9.]+), but once all the (?:moves|capacités) of the user are executed, switch to the next team member/g, "Tenu : Augmente les dégâts infligés de x$1, mais une fois que toutes les capacités de l\'utilisateur sont exécutées, passe au membre d\'équipe suivant");
  txt = txt.replace(/When held: Increases damage dealt by x(\\{var\\}|[0-9.]+), but once all the (?:moves|capacités) of the user are executed, switch to the previous team member/g, "Tenu : Augmente les dégâts infligés de x$1, mais une fois que toutes les capacités de l\'utilisateur sont exécutées, passe au membre d\'équipe précédent");
  txt = txt.replace(/When held: Increases the (Attack|Special Attack) of the user by x(\\{var\\}|[0-9.]+), but prevents them from switching/g, "Tenu : Augmente l\'$1 de l\'utilisateur de x$2, mais l\'empêche de changer");
  txt = txt.replace(/When held: Increases the Damage of the user by x(\\{var\\}|[0-9.]+), but inflicts \\{var\\}/g, "Tenu : Augmente les dégâts de l\'utilisateur de x$1, mais inflige {var}");
  txt = txt.replace(/When held: Increases the chance of encountering a wild shiny pokemon by (\\{var\\}|[0-9.]+)%\\. Works always for everyone regardless of the holder/g, "Tenu : Augmente les chances de rencontrer un Pokémon chromatique sauvage de $1%. Fonctionne toujours pour tout le monde indépendamment du porteur");
  txt = txt.replace(/When held: Increases the damage of the user by x(\\{var\\}|[0-9.]+), but loses 1\/(\d+) of its max HP per turn/g, "Tenu : Augmente les dégâts de l\'utilisateur de x$1, mais perd 1/$2 de ses PV max par tour");
  txt = txt.replace(/When held: Increases the duration of positive buffs used by 1 turn and increases damage dealt by x(\\{var\\}|[0-9.]+)/g, "Tenu : Augmente la durée des buffs positifs utilisés de 1 tour et augmente les dégâts infligés de x$1");
  txt = txt.replace(/When held: Increases the duration of \\{var\\} by \\{var\\} turns/g, "Tenu : Augmente la durée de {var} de {var} tours");
  txt = txt.replace(/When held: Increases the duration of \\{var\\} weather by \\{var\\} turns/g, "Tenu : Augmente la durée de la météo {var} de {var} tours");
  txt = txt.replace(/When held: Increases the experience gained by the pokemon by (\\{var\\}|[0-9.]+)%/g, "Tenu : Augmente l\'expérience gagnée par le Pokémon de $1%");

  // Family 8: Z-crystal descriptions
  txt = txt.replace(/When held: Regardless of the holder, every \\{var\\} turns, executes a coordinated ([A-Za-z]+)-type attack if the holder isnt fainted([\s\S]*?)Only one Z crystal can be equipped per team/g, "Tenu : Indépendamment du porteur, tous les {var} tours, exécute une attaque coordonnée de type $1 si le porteur n\'est pas K.O. Qu\'elle soit physique ou spéciale dépend de la stat la plus haute du porteur (si égalité, ce sera aléatoire mais infligera x1,25 dégâts supplémentaires). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses buffs. Un seul cristal Z peut être équipé par équipe");

  // Family 9: Tooltip dynamic texts (innerHTML injected by tooltip.js)
  // NOTE: original used ^ anchor but the full string is `${type}, ${power} Power, ${split}${affectedText}`
  //       so "Power" sits in the middle — use a non-anchored variant.
  txt = txt.replace(/(\d+)\s+Power,/g, "$1 Puissance,");
  txt = txt.replace(/^(\d+) Power, /g, "$1 Puissance, ");
  txt = txt.replace(/^Affected by (.+)$/g, "Affecté par $1");
  txt = txt.replace(/Learnable by (.+) types( \((Common|Uncommon|Rare)\))?/g, function(m, types, rarity) {
    let r = rarity || "";
    if (r === " (Common)") r = " (Commun)";
    if (r === " (Uncommon)") r = " (Peu commun)";
    if (r === " (Rare)") r = " (Rare)";
    if (types === "all") return "Apprenable par tous les types" + r;
    return "Apprenable par les types " + types + r;
  });
  txt = txt.replace(/Additionally, appears as the Hidden ability of (.+)/g, "De plus, apparaît comme le talent caché de $1");
  txt = txt.replace(/^This Pok[eé]mon can last (\d+) (?:turns before fainting|tours avant de tomber) from Battle Fatigue at maximum IVs$/g, "Ce Pokémon peut durer $1 tours avant de tomber de fatigue au combat avec des IVs max");
  txt = txt.replace(/^Obtained as a random reward in the Battle Frontier$/g, "Obtenu comme récompense aléatoire dans la Zone de Combat");
  txt = txt.replace(/^Obtained in the event (.+) \(Rotation (\d+)\)$/g, "Obtenu dans l'événement $1 (Rotation $2)");
  txt = txt.replace(/^Found in the wild area (.+) \(Rotation (\d+)\)$/g, "Trouvé dans la zone sauvage $1 (Rotation $2)");
  txt = txt.replace(/^Found in the event (.+) \(Rotation (\d+)\)$/g, "Trouvé dans l'événement $1 (Rotation $2)");
  txt = txt.replace(/^Found randomly in the Wildlife Park wild area$/g, "Trouvé aléatoirement dans la zone sauvage du Parc Naturel");
  txt = txt.replace(/^Can be dropped in the wild area (.+) \(Rotation (\d+)\)$/g, "Peut être obtenu dans la zone sauvage $1 (Rotation $2)");
  txt = txt.replace(/^Can be dropped in the dungeon area (.+) \(Rotation (\d+)\)$/g, "Peut être obtenu dans la zone donjon $1 (Rotation $2)");
  txt = txt.replace(/^Can be dropped in the event area (.+) \(Rotation (\d+)\)$/g, "Peut être obtenu dans la zone événement $1 (Rotation $2)");
  txt = txt.replace(/^Can be bought in the Poke-Mart$/g, "Peut être acheté au Poké-Mart");
  txt = txt.replace(/^Can be purchased in the Poke-Mart$/g, "Peut être acheté au Poké-Mart");
  txt = txt.replace(/^Reward from the event (.+) \(Rotation (\d+)\)$/g, "Récompense de l'événement $1 (Rotation $2)");
  txt = txt.replace(/^Reward from Spiraling Tower$/g, "Récompense de la Tour Spirale");
  txt = txt.replace(/^This Pok[eé]mon cannot be caught on its current stage$/g, "Ce Pokémon ne peut pas être capturé à son stade actuel");
  txt = txt.replace(/^This Pok[eé]mon is unobtainable$/g, "Ce Pokémon est non-obtenable");
  txt = txt.replace(/^Unlocked while all obtainable Pok[eé]mon have been caught$/g, "Débloqué quand tous les Pokémon obtenables ont été capturés");
  txt = txt.replace(/^\(You have (\d+)\)$/g, "(Vous en avez $1)");
  txt = txt.replace(/^(\d+) in total/g, "$1 au total");

  // Mystery Gift tooltip dynamic date: "You have until April 20 to claim" → "Vous avez jusqu'au 20 avril pour le réclamer"
  const EN_MONTH_FR = { January:"janvier", February:"février", March:"mars", April:"avril", May:"mai", June:"juin", July:"juillet", August:"août", September:"septembre", October:"octobre", November:"novembre", December:"décembre" };
  txt = txt.replace(/\bYou have until (January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}) to claim\b/g, (m, mo, d) => `Vous avez jusqu'au ${d} ${EN_MONTH_FR[mo] || mo.toLowerCase()} pour le réclamer`);
  txt = txt.replace(/\bYou have until (January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2})\b/g, (m, mo, d) => `Vous avez jusqu'au ${d} ${EN_MONTH_FR[mo] || mo.toLowerCase()}`);

  // ═══ MOVE-POPUP (movesetGenerator.js) DYNAMIC HEADERS ═══
  // Title: "Moves for Bulbizarre" (Pokemon name is already French)
  txt = txt.replace(/^Moves for (.+)$/, "Capacités de $1");
  // Section header: "Same-Type: Grass" / "Same-Type: Poison" etc. — type name is capitalized English
  const MOVE_TYPE_FR = {
    Normal: "Normal", Fighting: "Combat", Flying: "Vol", Poison: "Poison",
    Ground: "Sol", Rock: "Roche", Bug: "Insecte", Ghost: "Spectre",
    Steel: "Acier", Fire: "Feu", Water: "Eau", Grass: "Plante",
    Electric: "Électrik", Psychic: "Psy", Ice: "Glace", Dragon: "Dragon",
    Dark: "Ténèbres", Fairy: "Fée"
  };
  txt = txt.replace(/^Same-Type\s*:\s*([A-Za-z]+)$/, (m, t) => `Même Type : ${MOVE_TYPE_FR[t] || t}`);

  // ═══ TRAINING WAVE COUNTER (explore.js) ═══
  // "Remaining: 5" → "Restant : 5"
  txt = txt.replace(/^Remaining:\s*(\d+)$/, "Restant : $1");
  txt = txt.replace(/\bRemaining:\s*(\d+)/g, "Restant : $1");

  // ═══ AREAS DICTIONARY: new-content notices ═══
  // "New Dungeon: Sunken Temple" etc. (the dungeon name after ":" should match an area;
  // leave it as-is and just translate the prefix — the area-name i18n patches handle the name)
  txt = txt.replace(/\bNew Dungeon:\s*/g, "Nouveau Donjon : ");
  txt = txt.replace(/\bNew Area:\s*/g, "Nouvelle Zone : ");
  txt = txt.replace(/\bNew Event:\s*/g, "Nouvel Évènement : ");

  // ═══ CHALLENGES: dynamic selection messages ═══
  txt = txt.replace(/^You can only select (\d+) Pok[eé]mon\.$/, "Vous ne pouvez sélectionner que $1 Pokémon.");
  txt = txt.replace(/^Selected (\d+)\/(\d+)$/, "Sélectionné $1/$2");

  // ═══ POKÉMON TOOLTIP: evolution-chain lines (tooltip.js 1168-1182) ═══
  // Runtime produces:
  //   "Unlocks <NAME> at level <N> ✔️"
  //   "Unlocks <NAME> at level <N> ❌"
  //   "Unlocks <NAME> by using a <ITEM> at level <N>+ ✔️/❌"
  // The NAME and ITEM are already FR-formatted by format() so we only rewrite
  // the surrounding English phrase.
  txt = txt.replace(
    /\bUnlocks\s+(.+?)\s+at level\s+(\d+)\s*(✔️|❌)/g,
    "Débloque $1 au niveau $2 $3"
  );
  txt = txt.replace(
    /\bUnlocks\s+(.+?)\s+by using a\s+(.+?)\s+at level\s+(\d+)\+\s*(✔️|❌)/g,
    "Débloque $1 en utilisant un(e) $2 au niveau $3+ $4"
  );

  // ═══ COMBAT: stat buff abbreviations (explore.js line 7875+) ═══
  // Runtime produces "ATK ▲", "SATK ▲▲", "SPE ▼▼" etc. in combat side panels.
  // Match stat name + arrow(s) and localize the abbreviation.
  {
    const STAT_FR = { ATK: "ATQ", DEF: "DÉF", SATK: "ATQ.SP", SDEF: "DÉF.SP", SPE: "VIT" };
    txt = txt.replace(
      /\b(SATK|SDEF|ATK|DEF|SPE)\s*(▲▲?|▼▼?)/g,
      (m, stat, arrows) => `${STAT_FR[stat]} ${arrows}`
    );
  }

  // ═══ COMBAT: active field effect tag "Foggy 9" / "Trick Room 9" / etc. ═══
  // (explore.js line 7686 : `${format(saved.weather)} ${saved.weatherTimer} ...`)
  // If format() fallback didn't kick in, catch the displayed name + turn counter.
  // Includes: simple weathers, terrains, rooms, field effects — anything with a
  // turn counter in the combat side-panel.
  {
    const FIELD_FR = {
      // Weathers
      "Foggy": "Brouillard", "Rainy": "Pluie", "Sunny": "Soleil",
      "Hail": "Grêle", "Sandstorm": "Tempête de Sable", "Snowy": "Neige",
      // Terrains
      "Grassy Terrain": "Champ Herbu", "Misty Terrain": "Champ Brumeux",
      "Electric Terrain": "Champ Électrifié", "Psychic Terrain": "Champ Psychique",
      // Rooms + screens
      "Trick Room": "Distorsion", "Weird Room": "Zone Étrange",
      "Cross Room": "Salle Croix", "Light Screen": "Mur Lumière",
      "Safeguard": "Rune Protect",
      // Intensified weathers (mega-dim / special areas)
      "Harsh Sun": "Soleil Ardent", "Thick Fog": "Brouillard Dense",
      "Fierce Hail": "Grêle Violente", "Coarse Sandstorm": "Tempête de Sable Violente",
      "Heavy Rain": "Pluie Torrentielle",
      "Grassy Field": "Champ Herbu", "Misty Field": "Champ Brumeux",
    };
    // Multi-word names listed first so greedy alternation picks the longest match.
    txt = txt.replace(
      /\b(Electric Terrain|Psychic Terrain|Grassy Terrain|Misty Terrain|Grassy Field|Misty Field|Coarse Sandstorm|Heavy Rain|Fierce Hail|Thick Fog|Harsh Sun|Light Screen|Trick Room|Weird Room|Cross Room|Safeguard|Sandstorm|Foggy|Rainy|Sunny|Snowy|Hail)\s+(\d+)\b/g,
      (m, w, n) => `${FIELD_FR[w] || w} ${n}`
    );
  }

  // ═══ NATURE DISPLAY (tooltip.js line 1192): "Jovial nature" → "Nature Jovial" ═══
  // format() already renames via NATURE_NAMES_FR in engine.js (jolly→Jovial etc.), so we match FR names.
  txt = txt.replace(
    /^(Sauvage|Solo|Brave|Rigide|Mauvais|Assuré|Docile|Doux|Malin|Lâche|Timide|Pressé|Sérieux|Jovial|Naïf|Modeste|Discret|Pudique|Foufou|Calme|Gentil|Malpoli|Prudent|Bizarre)\s+nature$/,
    "Nature $1"
  );

  // ═══ MOVE-POPUP INFO COLUMN: status effect names (originally "Inflige Paralysis" after partial translation) ═══
  // The "Inflicts X" → "Inflige X" replacement already ran, but X stays English. Translate the status keyword:
  txt = txt.replace(/\bInflige Paralysis\b/g, "Inflige Paralysie");
  txt = txt.replace(/\bInflige Sleep\b/g, "Inflige Sommeil");
  txt = txt.replace(/\bInflige Poisoned\b/g, "Inflige Poison");
  txt = txt.replace(/\bInflige Confused\b/g, "Inflige Confusion");
  txt = txt.replace(/\bInflige Burn\b/g, "Inflige Brûlure");
  txt = txt.replace(/\bInflige Burned\b/g, "Inflige Brûlure");
  txt = txt.replace(/\bInflige Freeze\b/g, "Inflige Gel");
  txt = txt.replace(/\bInflige Frozen\b/g, "Inflige Gel");
  // Same inside longer composite info lines (e.g. "50% chance to inflict Poisoned" → "50% de chance d'infliger Poison")
  txt = txt.replace(/\b(d'infliger|d'infliger) Paralysis\b/g, "$1 Paralysie");
  txt = txt.replace(/\b(d'infliger|d'infliger) Sleep\b/g, "$1 Sommeil");
  txt = txt.replace(/\b(d'infliger|d'infliger) Poisoned\b/g, "$1 Poison");
  txt = txt.replace(/\b(d'infliger|d'infliger) Confused\b/g, "$1 Confusion");
  txt = txt.replace(/\b(d'infliger|d'infliger) Burn\b/g, "$1 Brûlure");
  txt = txt.replace(/\b(d'infliger|d'infliger) Burned\b/g, "$1 Brûlure");
  txt = txt.replace(/\b(d'infliger|d'infliger) Freeze\b/g, "$1 Gel");
  txt = txt.replace(/\b(d'infliger|d'infliger) Frozen\b/g, "$1 Gel");
  // Composite: "Inflige Confused, mais augmente l'Attaque Spéciale de l'ennemi de 100%"
  txt = txt.replace(/\bConfused,/g, "Confusion,");

  // ═══ MOVE-POPUP INFO: weather/room names after "Change la météo en X" ═══
  // After "Changes the weather to " → "Change la météo en " partial runs, X is still English.
  // Previous regex [A-Z][A-Za-z ]+? was too greedy — it stopped at "Grassy" (space in lookahead)
  // and never captured "Grassy Terrain". Use an explicit alternation with known weather names.
  const WEATHER_AFTER_METEO = {
    "Sunny": "Soleil",
    "Rainy": "Pluie",
    "Sandstorm": "Tempête de Sable",
    "Hail": "Grêle",
    "Foggy": "Brouillard",
    "Snowy": "Neige",
    "Grassy Terrain": "Champ Herbu",
    "Misty Terrain": "Champ Brumeux",
    "Electric Terrain": "Champ Électrifié",
    "Psychic Terrain": "Champ Psychique",
    "Trick Room": "Distorsion",
    "Weird Room": "Zone Étrange",
    "Cross Room": "Salle Croix",
    "Light Screen": "Mur Lumière",
    "Safeguard": "Rune Protect",
  };
  txt = txt.replace(
    /\bChange la météo en (Grassy Terrain|Misty Terrain|Electric Terrain|Psychic Terrain|Trick Room|Weird Room|Cross Room|Light Screen|Safeguard|Sandstorm|Sunny|Rainy|Foggy|Snowy|Hail)\b/g,
    (m, w) => `Change la météo en ${WEATHER_AFTER_METEO[w] || w}`
  );

  // ═══ MEGA-DIMENSION SKILLS: trigger condition (tooltip.js line 769) ═══
  // `<span>On HP bar Nº${i} depleted</span>` → the UI_TEXT_MAP key had mojibake (NÂº vs Nº)
  // so lookup never matched. Use a regex that accepts the proper U+00BA (º) or U+00B0 (°).
  // After HP → PV partial, the runtime text is "On PV bar Nº1 depleted" (or with ° if font
  // substituted). Match both and also bare "On HP bar" just in case.
  txt = txt.replace(
    /\bOn (?:HP|PV) bar N[º°]?\s*(\d+) depleted\b/g,
    "Lorsque la barre de PV N°$1 est épuisée"
  );

  const changed = txt !== res.text || res.changed;
  return { text: txt, changed };
};

const applyPartialTranslations = window.i18n.fr.applyPartialTranslations;

// --- INFO_TRANSLATION_PATTERNS ---
window.i18n.fr.INFO_TRANSLATION_PATTERNS = [
  // Manual TM / Memory patterns (dynamically generated in itemDictionary.js, not caught by extractor)
  { regex: /Use: Teach the move <span data-move="([^"]+?)"\s*><span\s+style="([^"]*?)">([\s\S]*?)<\/span><\/span> to all Pokemon/g, fr: "Utilisation : enseigne la capacité <span data-move=\"$1\"><span style=\"$2\">$3</span></span> à tous les Pokémon" },
  { regex: /Use: Teach the move <span data-move="([^"]+?)"\s*><span\s+style="([^"]*?)">([\s\S]*?)<\/span><\/span> to ([\s\S]+?) Pokemon/g, fr: "Utilisation : enseigne la capacité <span data-move=\"$1\"><span style=\"$2\">$3</span></span> aux Pokémon de type $4" },
  { regex: /Use: Teach the ability <span data-ability="([^"]+?)"\s*><span\s+style="([^"]*?)">([\s\S]*?)<\/span><\/span> to all Pokemon/g, fr: "Utilisation : enseigne le talent <span data-ability=\"$1\"><span style=\"$2\">$3</span></span> à tous les Pokémon" },
  { regex: /Use: Teach the ability <span data-ability="([^"]+?)"\s*><span\s+style="([^"]*?)">([\s\S]*?)<\/span><\/span> to ([\s\S]+?) Pokemon/g, fr: "Utilisation : enseigne le talent <span data-ability=\"$1\"><span style=\"$2\">$3</span></span> aux Pokémon de type $4" },

  { regex: /Power doubles under a weather condition, and type changes depending on it \(([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([\s\S]*?) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([\s\S]*?) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([\s\S]*?) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+), ([\s\S]*?) is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) \)/g, fr: "La puissance double sous une condition météo, et le type change en fonction ($1 est $2, $3 est $4, $5 est $6, $7 est $8, $9 est $10, $11 est $12, $13 est $14, $15 est $16)" },
  { regex: /When held: Regardless of the holder, every ([0-9.]+) turns, executes a coordinated ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type attack if the holder isnt fainted\. Whether its physical or special depends on the highest stat of the holder \(If they are equal, it will be random, but deal x1\.25 more damage\)\. This attack benefits from holder stats and typing but not from their abilities nor buffs\. Only one Z crystal can be equipped per team/g, fr: "Tenu : Indépendamment du porteur, toutes les $1 tours, exécute une attaque coordonnée de type $2 si le porteur n'est pas K.O. L'attaque est physique ou spéciale selon la stat la plus élevée du porteur (si égalité, aléatoire mais inflige x1.25 plus de dégâts). Cette attaque bénéficie des stats et du type du porteur mais pas de ses talents ni de ses buffs. Un seul cristal Z peut être équipé par équipe" },
  { regex: /Permanent Upgrade: Allows ALL moves to be inheritable to a host of B division and below \(including Signature and Egg moves\)\. For this to happen, at least two levels of compatibility are needed<br><br>Two or more exact Egg Moves transferred this way can't be present at the same time on a single team, unless the user of the move has said move as an inherent Egg Move or Signature Move/g, fr: "Amélioration permanente : Permet à TOUTES les capacités d'être héritables par un hôte de division B et inférieure (y compris les capacités Signature et Egg Moves). Pour cela, au moins deux niveaux de compatibilité sont nécessaires<br><br>Deux Egg Moves exactes transférées de cette manière ne peuvent pas être présentes en même temps dans une même équipe, sauf si l'utilisateur de la capacité l'a comme Egg Move ou Signature innée" },
  { regex: /Genetics-aiding item: Transfers the currently equipped moves of the sample to the movepool of the host\. The host will retain both its equipped moves and the newly transferred ones, but the sample will lose it's equipped ones\. Can only be used with at least one level of compatibility, and does not work on signature moves/g, fr: "Objet d'aide génétique : Transfère les capacités actuellement équipées de l'échantillon vers le répertoire du Pokémon hôte. Le hôte conserve ses capacités équipées et les nouvelles transférées, mais l'échantillon perd les siennes. Ne peut être utilisé qu'avec au moins un niveau de compatibilité, et ne fonctionne pas sur les capacités signature" },
  { regex: /Use: Triggers a specified seasonal event for the next (-?\d+(?:\.\d+)?) days\. It will last for the (-?\d+(?:\.\d+)?) following days, and will get replaced by currently-ongoing ones\. However, the seasonal shop of that event wont open/g, fr: "Utilisation : Déclenche un événement saisonnier spécifié pour les $1 prochains jours. Il durera les $2 jours suivants, et sera remplacé par ceux en cours. Cependant, la boutique saisonnière de cet événement ne s'ouvrira pas" },
  { regex: /The user temporarily gets the \(non-hidden\) ability of the last defeated Pokemon on your team\. This temporary ability works on top of your existing abilities\. Applying a second temporary ability replaces the first one/g, fr: "L'utilisateur obtient temporairement le talent (non-caché) du dernier Pokémon K.O. de l'équipe. Ce talent temporaire s'ajoute aux talents existants. L'application d'un second talent temporaire remplace le premier" },
  { regex: /Temporarily adds ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) to the type of the enemy\. Super-effective damage bonus dealt from temporal types is halved, and applying a second temporary type replaces the first one/g, fr: "Ajoute temporairement le type $1 à l'ennemi. Le bonus de dégâts super efficaces infligés par les types temporaires est divisé par 2, et l'application d'un second type temporaire remplace le premier" },
  { regex: /Once used,increases the weight of rare item drops by (-?\d+(?:\.\d+)?)% for the current battle\. Multiple uses wont stack\. Works always for everyone regardless of the user/g, fr: "Une fois utilisé, augmente le poids des objets rares lâchés de $1% pour le combat en cours. Les utilisations multiples ne se cumulent pas. Fonctionne toujours pour tout le monde indépendamment de l'utilisateur" },
  { regex: /Once used,increases the weight of rare Pokemon by (-?\d+(?:\.\d+)?)% for the current battle\. Multiple uses wont stack\. Works always for everyone regardless of the user/g, fr: "Une fois utilisé, augmente le poids des Pokémon rares de $1% pour le combat en cours. Les utilisations multiples ne se cumulent pas. Fonctionne toujours pour tout le monde indépendamment de l'utilisateur" },
  { regex: /Genetics-aiding item: Swaps the ability of the Pokemon with the sample\. Can only be used with at least one level of compatibility and does not work on hidden abilities/g, fr: "Objet d'aide génétique : Échange le talent du Pokémon avec celui de l'échantillon. Ne peut être utilisé qu'avec au moins un niveau de compatibilité et ne fonctionne pas sur les talents cachés" },
  { regex: /Decreases the damage of all ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) moves by (-?\d+(?:\.\d+)?)% \(Can stack\)\. Works always for everyone regardless of the user/g, fr: "Diminue les dégâts de toutes les capacités de type $1 de $2% (cumulable). Fonctionne toujours pour tout le monde indépendamment de l'utilisateur" },
  { regex: /When held: Increases damage dealt by x([0-9.]+) and increases Speed by (-?\d+(?:\.\d+)?)% for (-?\d+(?:\.\d+)?) turns when hit by a Super-Effective move/g, fr: "Tenu : Augmente les dégâts infligés de x$1 et augmente la Vitesse de $2% pendant $3 tours quand touché par une capacité super efficace" },
  { regex: /When held: If a Pokemon has not fully evolved, decreases damage taken by x([0-9.]+)\. This does not apply to final-stage Pokemon with a Mega-Evolution/g, fr: "Tenu : Si un Pokémon n'a pas totalement évolué, diminue les dégâts subis de x$1. Ne s'applique pas aux Pokémon de stade final avec une Méga-Évolution" },
  { regex: /Permanent Upgrade: Decrease the time required for genetic operations by (-?\d+(?:\.\d+)?) minutes \(Up to a minimum of (-?\d+(?:\.\d+)?) minutes\)/g, fr: "Amélioration permanente : Diminue le temps nécessaire pour les opérations génétiques de $1 minutes (jusqu'à un minimum de $2 minutes)" },
  { regex: /([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type pokemon can be hit with ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) and ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves/g, fr: "Les Pokémon de type $1 peuvent être touchés par des capacités de type $2 et $3" },
  { regex: /When held: Increases the chance of encountering a wild shiny pokemon by ([0-9.]+)%\. Works always for everyone regardless of the holder/g, fr: "Tenu : Augmente les chances de rencontrer un Pokémon sauvage chromatique de $1%. Fonctionne toujours pour tout le monde indépendamment du porteur" },
  { regex: /([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves become ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves, and their power is multiplied by x1\.3/g, fr: "Les capacités de type $1 deviennent de type $2, et leur puissance est multipliée par x1.3" },
  { regex: /Decreases enemy Special Attack by (-?\d+(?:\.\d+)?)%\. Power increases by x1\.2-(-?\d+(?:\.\d+)?) if Defense\/Special Defense is risen/g, fr: "Diminue l'Attaque Spéciale de l'ennemi de $1%. La puissance augmente de x1.2 à x$2 si la Défense/Défense Spéciale est augmentée" },
  { regex: /When held: Increases damage dealt by x([0-9.]+), but once all the moves of the user are executed, switch to the previous team member/g, fr: "Tenu : Augmente les dégâts infligés de x$1, mais une fois toutes les capacités de l'utilisateur exécutées, change pour le membre précédent de l'équipe" },
  { regex: /Increases the chance of encountering a wild shiny pokemon by (-?\d+(?:\.\d+)?)%\. Works always for everyone regardless of the user/g, fr: "Augmente les chances de rencontrer un Pokémon sauvage chromatique de $1%. Fonctionne toujours pour tout le monde indépendamment de l'utilisateur" },
  { regex: /Nullifies received ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves and increases Speed by (-?\d+(?:\.\d+)?)% after being hit with one/g, fr: "Annule les capacités de type $1 reçues et augmente la Vitesse de $2% après en avoir subi une" },
  { regex: /When held: Increases the damage of the user by x([0-9.]+), but loses (-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?) of its max HP per turn/g, fr: "Tenu : Augmente les dégâts de l'utilisateur de x$1, mais il perd $2/$3 de ses PV max par tour" },
  { regex: /When held: Increases damage dealt by x([0-9.]+), but once all the moves of the user are executed, switch to the next team member/g, fr: "Tenu : Augmente les dégâts infligés de x$1, mais une fois toutes les capacités de l'utilisateur exécutées, change pour le membre suivant de l'équipe" },
  { regex: /Use: Re-learn a previously learned move acquired through genetics inheriting \(excluding moves inherited through Lock Capsules\)/g, fr: "Utilisation : Réapprend une capacité précédemment apprise par héritage génétique (excluant les capacités héritées via les Capsules Lock)" },
  { regex: /Genetics-aiding item: Rerolls the ability of the Host Pokemon\. It has an increased chance to reroll uncommon and rare abilities/g, fr: "Objet d'aide génétique : Relance le talent du Pokémon hôte. Il a une chance accrue de relancer des talents peu communs et rares" },
  { regex: /When held: Increases damage dealt by x([0-9.]+) and enables ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-Type moves to receive STAB bonuses/g, fr: "Tenu : Augmente les dégâts infligés de x$1 et permet aux capacités de type $2 de bénéficier du STAB" },
  { regex: /User transfers all of its stat changes and status to a the entire team and faints\. This move can only be present once per team/g, fr: "L'utilisateur transfère tous ses changements de stats et altérations à toute l'équipe et est mis K.O. Cette capacité ne peut être présente qu'une seule fois par équipe" },
  { regex: /When held: Decreases the duration of negative buffs received by (-?\d+(?:\.\d+)?) turn and decreases damage taken by x([0-9.]+)/g, fr: "Tenu : Diminue la durée des buffs négatifs reçus de $1 tour et diminue les dégâts subis de x$2" },
  { regex: /Multiplies base power by 1\.15x everytime its used, up to (-?\d+(?:\.\d+)?) times\. Depletes all stacks upon switching Pokemon/g, fr: "Multiplie la puissance de base par 1.15x à chaque utilisation, jusqu'à $1 fois. Tous les cumuls sont perdus au changement de Pokémon" },
  { regex: /"Punch"-related moves have their base power multiplied by x1\.5 <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<\/span>/g, fr: "Les capacités liées aux 'Poings' voient leur puissance de base multipliée par x1.5 <span style=\"opacity:$1\">($2)</span>" },
  { regex: /Increases the weight of rare item drops by (-?\d+(?:\.\d+)?)% \(Can stack\)\. Works always for everyone regardless of the user/g, fr: "Augmente le poids des objets rares lâchés de $1% (cumulable). Fonctionne toujours pour tout le monde indépendamment de l'utilisateur" },
  { regex: /"Sharp"-related moves have their base power multiplied by x1\.5 <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<\/span>/g, fr: "Les capacités liées aux 'Lames' voient leur puissance de base multipliée par x1.5 <span style=\"opacity:$1\">($2)</span>" },
  { regex: /Obtained when acquiring an exceeding number of items \((-?\d+(?:\.\d+)?)\+ for held items\) or exchanged with other currencies/g, fr: "Obtenu en acquérant un excès d'objets ($1+ pour les objets tenus) ou échangé avec d'autres devises" },
  { regex: /Multiplies base power by 1\.2x everytime its used, up to (-?\d+(?:\.\d+)?) times\. Depletes all stacks upon switching Pokemon/g, fr: "Multiplie la puissance de base par 1.2x à chaque utilisation, jusqu'à $1 fois. Tous les cumuls sont perdus au changement de Pokémon" },
  { regex: /Multiplies base power by 1\.3x everytime its used, up to (-?\d+(?:\.\d+)?) times\. Depletes all stacks upon switching Pokemon/g, fr: "Multiplie la puissance de base par 1.3x à chaque utilisation, jusqu'à $1 fois. Tous les cumuls sont perdus au changement de Pokémon" },
  { regex: /"Pulse"-related moves have their base power multiplied by x1\.5 <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<span>/g, fr: "Les capacités liées aux 'Pulsions' voient leur puissance de base multipliée par x1.5 <span style=\"opacity:$1\">($2)<span>" },
  { regex: /"Head"-related moves have their base power multiplied by x1\.5 <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<span>/g, fr: "Les capacités liées à la 'Tête' voient leur puissance de base multipliée par x1.5 <span style=\"opacity:$1\">($2)<span>" },
  { regex: /When held: Increases the duration of positive buffs used by (-?\d+(?:\.\d+)?) turn and increases damage dealt by x([0-9.]+)/g, fr: "Tenu : Augmente la durée des buffs positifs utilisés de $1 tour et augmente les dégâts infligés de x$2" },
  { regex: /"Fang"-related moves have their base power multiplied by x2 <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<\/span>/g, fr: "Les capacités liées aux 'Crocs' voient leur puissance de base multipliée par x2 <span style=\"opacity:$1\">($2)</span>" },
  { regex: /"Claw"-related moves have their base power multiplied by x2 <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<\/span>/g, fr: "Les capacités liées aux 'Griffes' voient leur puissance de base multipliée par x2 <span style=\"opacity:$1\">($2)</span>" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)% if afflicted with a status effect, and nullifies the stat redution of the condition/g, fr: "Augmente l'Attaque de $1% en cas d'altération de statut, et annule la réduction de stats de la condition" },
  { regex: /Use: Fast-forward genetic operation time by (-?\d+(?:\.\d+)?) minutes\. Must be used while an active operation is ongoing/g, fr: "Utilisation : Avance le temps des opérations génétiques de $1 minutes. Doit être utilisé pendant qu'une opération est en cours" },
  { regex: /Can be used to automatically refight battles\. Cannot refight while the browser is closed\. Consumed once a battle is won/g, fr: "Permet de recommencer automatiquement les combats. Impossible de recommencer quand le navigateur est fermé. Consommé une fois un combat gagné" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)%, Defense by (-?\d+(?:\.\d+)?)% and Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque Spéciale de $1%, la Défense de $2% et la Défense Spéciale de $3%" },
  { regex: /Temporarily changes the type of the user to the type of the first move slot, and increases Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Change temporairement le type de l'utilisateur pour le type de la première capacité, et augmente la Vitesse de $1%" },
  { regex: /([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) and ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves are executed x1\.5 faster than usual/g, fr: "Les capacités de type $1 et $2 sont exécutées x1.5 plus vite que la normale" },
  { regex: /When held: Increases the weight of rare item drops by ([0-9.]+)%\. Works always for everyone regardless of the holder/g, fr: "Tenu : Augmente le poids des objets rares lâchés de $1%. Fonctionne toujours pour tout le monde indépendamment du porteur" },
  { regex: /When held: Increases the duration of ([\s\S]*?), ([\s\S]*?), ([\s\S]*?), ([\s\S]*?) and ([\s\S]*?) by ([0-9.]+) turns/g, fr: "Tenu : Augmente la durée de $1, $2, $3, $4 et $5 de $6 tours" },
  { regex: /Increases the power of ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves by (-?\d+(?:\.\d+)?)% below (-?\d+(?:\.\d+)?)% HP/g, fr: "Augmente la puissance des capacités de type $1 de $2% quand les PV sont inférieurs à $3%" },
  { regex: /When held: Decreases the super-effective damage taken from ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-Type moves by ([0-9.]+)%/g, fr: "Tenu : Diminue les dégâts super efficaces reçus des capacités de type $1 de $2%" },
  { regex: /Increases the Damage dealt by x1\.2 when afflicted with ([\s\S]*?), and nullifies the damage overtime caused by it/g, fr: "Augmente les dégâts infligés de x1.2 sous $1, et annule les dégâts sur la durée causés par celui-ci" },
  { regex: /When held: Moves affected by Iron Fist deal x([0-9.]+) more damage, and their secondary effects are executed twice/g, fr: "Tenu : Les capacités affectées par Poing de Fer infligent x$1 plus de dégâts, et leurs effets secondaires sont exécutés deux fois" },
  { regex: /When held: Increases the weight of rare pokemon by ([0-9.]+)%\. Works always for everyone regardless of the holder/g, fr: "Tenu : Augmente le poids des Pokémon rares de $1%. Fonctionne toujours pour tout le monde indépendamment du porteur" },
  { regex: /Attacks x1\.2 slower than usual\. Power increases by x1\.2-(-?\d+(?:\.\d+)?) if Defense\/Special Defense is risen/g, fr: "Attaque x1.2 plus lentement que la normale. La puissance augmente de x1.2 à x$1 si la Défense/Défense Spéciale est augmentée" },
  { regex: /([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) and ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) moves are executed x1\.5 faster than usual/g, fr: "Les capacités de type $1 et $2 sont exécutées x1.5 plus vite que la normale" },
  { regex: /Temporarily changes the type of the user corresponding to the weather, and increases Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Change temporairement le type de l'utilisateur selon la météo, et augmente la Vitesse de $1%" },
  { regex: /When held: Multi-hit moves are guaranteed to hit their maximum amount of times and deal x([0-9.]+) more damage/g, fr: "Tenu : Les capacités à multiples coups touchent toujours leur nombre maximum de coups et infligent x$1 plus de dégâts" },
  { regex: /"Dance"-related moves are executed twice as fast <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<span>/g, fr: "Les capacités liées à la 'Danse' sont exécutées deux fois plus vite <span style=\"opacity:$1\">($2)<span>" },
  { regex: /"Sound"-related moves are executed twice as fast <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<span>/g, fr: "Les capacités liées au 'Son' sont exécutées deux fois plus vite <span style=\"opacity:$1\">($2)<span>" },
  { regex: /"Sharp"-related moves are executed twice as fast <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<span>/g, fr: "Les capacités liées aux 'Lames' sont exécutées deux fois plus vite <span style=\"opacity:$1\">($2)<span>" },
  { regex: /When held: Increase overall defense by x([0-9.]+), but the user cannot use moves with (-?\d+(?:\.\d+)?) power/g, fr: "Tenu : Augmente la défense globale de x$1, mais l'utilisateur ne peut pas utiliser de capacités de puissance $2" },
  { regex: /Halves damage received from ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) and ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves/g, fr: "Divise par 2 les dégâts reçus des capacités de type $1 et $2" },
  { regex: /"Wind"-related moves are executed twice as fast <span style="opacity:(-?\d+(?:\.\d+)?)">\(([\s\S]*?)\)<span>/g, fr: "Les capacités liées au 'Vent' sont exécutées deux fois plus vite <span style=\"opacity:$1\">($2)<span>" },
  { regex: /Can be used to catch Pokemon in the Mega-Dimension\. Expires after the current Mega-Dimension rotation ends/g, fr: "Permet de capturer des Pokémon dans la Méga-Dimension. Expire à la fin de la rotation de Méga-Dimension en cours" },
  { regex: /Changes the weather to ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) and increases Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Change la météo en $1 et augmente l'Attaque Spéciale de $2%" },
  { regex: /Increases the highest stat of the user by (-?\d+(?:\.\d+)?)% on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Augmente la stat la plus élevée de l'utilisateur de $1% sous la météo $2" },
  { regex: /When held: Prevents the damage from Stealth Rocks field effect and decreases damage taken by x([0-9.]+)/g, fr: "Tenu : Empêche les dégâts de l'effet de terrain Piège de Roc et diminue les dégâts subis de x$1" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)% but decreases Defense and Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque de $1% mais diminue la Défense et la Défense Spéciale de $2%" },
  { regex: /Permanent Upgrade: Trainers in the battle frontier award \+(-?\d+(?:\.\d+)?) extra Golden Bottle Caps/g, fr: "Amélioration permanente : Les Dresseurs de la Zone de Combat donnent +$1 Capsules d'Or supplémentaires" },
  { regex: /All moves become ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves, and their power is multiplied by x1\.3/g, fr: "Toutes les capacités deviennent de type $1, et leur puissance est multipliée par x1.3" },
  { regex: /Prevents the enemy to use the move in the slot embargo was used\. This is treated as a status effect/g, fr: "Empêche l'ennemi d'utiliser la capacité de l'emplacement où Embargo a été utilisé. C'est traité comme une altération de statut" },
  { regex: /Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ([\s\S]*?) by x([\s\S]*?)/g, fr: "Utilisation : Fait évoluer un certain Pokémon.<br>Tenu : Augmente les dégâts infligés par $1 de x$2" },
  { regex: /Prevents negative stat changes and status effects while on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Empêche les baisses de stats et les altérations de statut sous la météo $1" },
  { regex: /When held: Increases the Special Attack of the user by x([0-9.]+), but prevents them from switching/g, fr: "Tenu : Augmente l'Attaque Spéciale de l'utilisateur de x$1, mais empêche le changement de Pokémon" },
  { regex: /Changes the weather to ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) when entering or switching into the battle/g, fr: "Change la météo en $1 à l'entrée en combat ou au changement" },
  { regex: /Positive secondary effect of damaging moves are removed, and their damage is multiplied by x1\.25/g, fr: "Les effets secondaires positifs des capacités infligeant des dégâts sont supprimés, et leurs dégâts sont multipliés par x1.25" },
  { regex: /Multiplies by x1\.1 the damage of ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves of all team members/g, fr: "Multiplie par x1.1 les dégâts des capacités de type $1 de tous les membres de l'équipe" },
  { regex: /When held: Increases the duration of ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather by ([0-9.]+) turns/g, fr: "Tenu : Augmente la durée de la météo $1 de $2 tours" },
  { regex: /Decreases enemy Special Attack by (-?\d+(?:\.\d+)?)% when the opposing Pokemon enters the battle/g, fr: "Diminue l'Attaque Spéciale de l'ennemi de $1% quand le Pokémon adverse entre au combat" },
  { regex: /Multiplies by x1\.1 the power of ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves of all team members/g, fr: "Multiplie par x1.1 la puissance des capacités de type $1 de tous les membres de l'équipe" },
  { regex: /Seasonal item, dropped randomly from defeating wild Pokemon\. Expires on ([\s\S]*?)\/([\s\S]*?)/g, fr: "Objet saisonnier, lâché aléatoirement en battant des Pokémon sauvages. Expire le $1/$2" },
  { regex: /Changes the weather to ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) and switches to the next party member/g, fr: "Change la météo en $1 et change pour le prochain membre de l'équipe" },
  { regex: /When held: Moves that get more powerful the more stacks they have deal x([0-9.]+) more damage/g, fr: "Tenu : Les capacités qui deviennent plus puissantes avec plus de cumuls infligent x$1 plus de dégâts" },
  { regex: /Multiplies by 1\.5x the base damage of moves with equal or less than (-?\d+(?:\.\d+)?) power/g, fr: "Multiplie par 1.5x les dégâts de base des capacités dont la puissance est inférieure ou égale à $1" },
  { regex: /When held: Increase the damage of ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-Type moves by x([0-9.]+)/g, fr: "Tenu : Augmente les dégâts des capacités de type $1 de x$2" },
  { regex: /When held: Increases the Attack of the user by x([0-9.]+), but prevents them from switching/g, fr: "Tenu : Augmente l'Attaque de l'utilisateur de x$1, mais empêche le changement de Pokémon" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)% on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Augmente l'Attaque Spéciale de $1% sous la météo $2" },
  { regex: /Increases Speed by (-?\d+(?:\.\d+)?)% to the entire team\. Attacks x1\.5 slower than usual/g, fr: "Augmente la Vitesse de toute l'équipe de $1%. Attaque x1.5 plus lentement que la normale" },
  { regex: /Increases Special Attack and Speed by (-?\d+(?:\.\d+)?)%\. Attacks x1\.4 slower than usual/g, fr: "Augmente l'Attaque Spéciale et la Vitesse de $1%. Attaque x1.4 plus lentement que la normale" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)% and Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque Spéciale de $1% et la Défense Spéciale de $2%" },
  { regex: /Use: Fast-forward battle time by (-?\d+(?:\.\d+)?) minutes\. Must be used while battling/g, fr: "Utilisation : Avance le temps de combat de $1 minutes. Doit être utilisé pendant un combat" },
  { regex: /Decreases enemy Attack by (-?\d+(?:\.\d+)?)% when the opposing Pokemon enters the battle/g, fr: "Diminue l'Attaque de l'ennemi de $1% quand le Pokémon adverse entre au combat" },
  { regex: /Increases the highest stat of the user by (-?\d+(?:\.\d+)?)% when defeating a Pokemon/g, fr: "Augmente la stat la plus élevée de l'utilisateur de $1% lors d'un K.O." },
  { regex: /Inverts stat changes\. Positive changes become negative, and negative become positive/g, fr: "Inverse les changements de stats. Les changements positifs deviennent négatifs, et les négatifs deviennent positifs" },
  { regex: /Decreases enemy Attack by (-?\d+(?:\.\d+)?)% and Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue l'Attaque de l'ennemi de $1% et l'Attaque Spéciale de $2%" },
  { regex: /Moves that are resisted by typing do instead ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) damage/g, fr: "Les capacités normalement peu efficaces infligent à la place des dégâts de type $1" },
  { regex: /Increases Defense by (-?\d+(?:\.\d+)?)% on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Augmente la Défense de $1% sous la météo $2" },
  { regex: /Faints the user and decreases enemy Attack and Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Met l'utilisateur K.O. et diminue l'Attaque et l'Attaque Spéciale de l'ennemi de $1%" },
  { regex: /Prevents negative status effects while on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Empêche les altérations de statut négatives sous la météo $1" },
  { regex: /Increases Attack and Speed by (-?\d+(?:\.\d+)?)%\. Attacks x1\.4 slower than usual/g, fr: "Augmente l'Attaque et la Vitesse de $1%. Attaque x1.4 plus lentement que la normale" },
  { regex: /When held: Increases the Damage of the user by x([0-9.]+), but inflicts ([\s\S]*?)/g, fr: "Tenu : Augmente les dégâts de l'utilisateur de x$1, mais inflige $2" },
  { regex: /Inflicts active status effects to the attacker aswell on the moment of application/g, fr: "Inflige également les altérations de statut actives à l'attaquant au moment de l'application" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)% on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Augmente l'Attaque de $1% sous la météo $2" },
  { regex: /Increase Special Attack by (-?\d+(?:\.\d+)?)% when hit with a super-effective move/g, fr: "Augmente l'Attaque Spéciale de $1% quand touché par une capacité super efficace" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to decrease enemy Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance de diminuer la Défense Spéciale de l'ennemi de $2%" },
  { regex: /Increases Speed by (-?\d+(?:\.\d+)?)% on ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+) weather/g, fr: "Augmente la Vitesse de $1% sous la météo $2" },
  { regex: /Increases Special Defense by (-?\d+(?:\.\d+)?)% if afflicted with a status effect/g, fr: "Augmente la Défense Spéciale de $1% en cas d'altération de statut" },
  { regex: /Increases Defense by (-?\d+(?:\.\d+)?)% and Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente la Défense de $1% et la Défense Spéciale de $2%" },
  { regex: /Increases Special Defense by (-?\d+(?:\.\d+)?)% and Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente la Défense Spéciale de $1% et la Défense de $2%" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to decrease enemy Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance de diminuer l'Attaque Spéciale de l'ennemi de $2%" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)% if afflicted with a status effect/g, fr: "Augmente l'Attaque Spéciale de $1% en cas d'altération de statut" },
  { regex: /Received damage from non-Super-Effective moves are reduced by (-?\d+(?:\.\d+)?)%/g, fr: "Les dégâts reçus des capacités non super efficaces sont réduits de $1%" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)%\. Attacks x1\.5 slower than usual/g, fr: "Augmente l'Attaque Spéciale de $1%. Attaque x1.5 plus lentement que la normale" },
  { regex: /When held: Decreases the duration of negative buffs received by ([\s\S]*?) turns/g, fr: "Tenu : Diminue la durée des buffs négatifs reçus de $1 tours" },
  { regex: /Genetics-aiding item: Multiplies by (-?\d+(?:\.\d+)?) the chance to inherit Iv's/g, fr: "Objet d'aide génétique : Multiplie par $1 la chance d'hériter des IV" },
  { regex: /Power increases by x1\.2-(-?\d+(?:\.\d+)?) if Defense\/Special Defense is risen/g, fr: "La puissance augmente de x1.2 à x$1 si la Défense/Défense Spéciale est augmentée" },
  { regex: /Enemy damage over time from ([\s\S]*?) is doubled while this Pokemon is active/g, fr: "Les dégâts sur la durée infligés par $1 à l'ennemi sont doublés tant que ce Pokémon est actif" },
  { regex: /Moves that execute slower than usual have their base power multiplied by x1\.5/g, fr: "Les capacités plus lentes que la normale voient leur puissance de base multipliée par x1.5" },
  { regex: /Increases base power by (-?\d+(?:\.\d+)?) for every unique stat up of the user/g, fr: "Augmente la puissance de base de $1 pour chaque augmentation de stat unique de l'utilisateur" },
  { regex: /Prevents negative stat changes and status effects while on ([\s\S]*?) weather/g, fr: "Empêche les baisses de stats et les altérations de statut sous la météo $1" },
  { regex: /Inflicts ([\s\S]*?), but increases enemy Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Inflige $1, mais augmente l'Attaque Spéciale de l'ennemi de $2%" },
  { regex: /When held: Moves that attack faster than usual are executed x([0-9.]+) faster/g, fr: "Tenu : Les capacités qui attaquent plus vite que la normale sont exécutées x$1 plus vite" },
  { regex: /Changes the weather to ([\s\S]*?) when entering or switching into the battle/g, fr: "Change la météo en $1 à l'entrée en combat ou au changement" },
  { regex: /When held: Moves that have (-?\d+(?:\.\d+)?) power execute x([0-9.]+) faster/g, fr: "Tenu : Les capacités de puissance $1 s'exécutent x$2 plus vite" },
  { regex: /Moves that execute faster than usual have their base power multiplied by x2/g, fr: "Les capacités plus rapides que la normale voient leur puissance de base multipliée par x2" },
  { regex: /Genetics-aiding item: Guarantees the chance to inherit Special Defense Iv's/g, fr: "Objet d'aide génétique : Garantit la chance d'hériter des IV Défense Spéciale" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to increase Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance d'augmenter l'Attaque Spéciale de $2%" },
  { regex: /Increase Attack by (-?\d+(?:\.\d+)?)% when hit with a super-effective move/g, fr: "Augmente l'Attaque de $1% quand touché par une capacité super efficace" },
  { regex: /Increases the highest stat of the user by (-?\d+(?:\.\d+)?)% on ([\s\S]*?)/g, fr: "Augmente la stat la plus élevée de l'utilisateur de $1% sous $2" },
  { regex: /When held: Moves that attack slower than usual deal x([0-9.]+) more damage/g, fr: "Tenu : Les capacités qui attaquent plus lentement que la normale infligent x$1 plus de dégâts" },
  { regex: /When held: Increases the duration of ([\s\S]*?) weather by ([0-9.]+) turns/g, fr: "Tenu : Augmente la durée de la météo $1 de $2 tours" },
  { regex: /Obtained in ★★★ and ★★★★ mega-dimension raids\. Exchanged in the Poke-Mart/g, fr: "Obtenu dans les raids Méga-Dimension ★★★ et ★★★★. Échangeable au Poké-Mart" },
  { regex: /Genetics-aiding item: Guarantees the chance to inherit Special Attack Iv's/g, fr: "Objet d'aide génétique : Garantit la chance d'hériter des IV Attaque Spéciale" },
  { regex: /Halves the damage received of ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves/g, fr: "Divise par 2 les dégâts reçus des capacités de type $1" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to decrease enemy Defense by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance de diminuer la Défense de l'ennemi de $2%" },
  { regex: /Increases Defense by (-?\d+(?:\.\d+)?)% if afflicted with a status effect/g, fr: "Augmente la Défense de $1% en cas d'altération de statut" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to decrease enemy Attack by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance de diminuer l'Attaque de l'ennemi de $2%" },
  { regex: /Attack becomes physical or special to match the highest stat of the user/g, fr: "L'attaque devient physique ou spéciale pour correspondre à la stat la plus élevée de l'utilisateur" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to inflict ([\s\S]*?),([\s\S]*?) or ([\s\S]*?)/g, fr: "$1% de chance d'infliger $2, $3 ou $4" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to decrease enemy Speed by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance de diminuer la Vitesse de l'ennemi de $2%" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)% when defeating a Pokemon/g, fr: "Augmente l'Attaque Spéciale de $1% lors d'un K.O." },
  { regex: /Whenever anyone in the team gets a stat risen, the user will get it too/g, fr: "Quand un membre de l'équipe voit une stat augmenter, l'utilisateur l'obtient aussi" },
  { regex: /When held: Increases the experience gained by the pokemon by ([0-9.]+)%/g, fr: "Tenu : Augmente l'expérience gagnée par le Pokémon de $1%" },
  { regex: /Multiplies the damage by x1\.5 when the opposite Pokemon shares a type/g, fr: "Multiplie les dégâts par x1.5 quand le Pokémon adverse partage un type" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)% and Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque de $1% et la Vitesse de $2%" },
  { regex: /Obtained in ★ and ★★ mega-dimension raids\. Exchanged in the Poke-Mart/g, fr: "Obtenu dans les raids Méga-Dimension ★ et ★★. Échangeable au Poké-Mart" },
  { regex: /Use: Increase the Special Defense IV of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente l'IV Défense Spéciale d'un Pokémon de $1" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to increase all Stats by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance d'augmenter toutes les stats de $2%" },
  { regex: /Inflicts ([\s\S]*?), but increases enemy Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Inflige $1, mais augmente l'Attaque de l'ennemi de $2%" },
  { regex: /Use: Increase the Special Attack IV of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente l'IV Attaque Spéciale d'un Pokémon de $1" },
  { regex: /Power doubles if the target is ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-Type/g, fr: "La puissance double si la cible est de type $1" },
  { regex: /Multiply the damage dealt by x1\.5 if the target has a status effect/g, fr: "Multiplie les dégâts infligés par x1.5 si la cible a une altération de statut" },
  { regex: /Perform the first move of the oponent\. Attacks x3 faster than usual/g, fr: "Exécute la première capacité de l'adversaire. Attaque x3 plus vite que la normale" },
  { regex: /Use: Evolve certain kinds of Pokemon \(Must be level ([\s\S]*?)\+\)/g, fr: "Utilisation : Fait évoluer certains types de Pokémon (doit être de niveau $1+)" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to increase Defense by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance d'augmenter la Défense de $2%" },
  { regex: /Increases the Damage dealt by x1\.15 for every team member defeated/g, fr: "Augmente les dégâts infligés de x1.15 pour chaque membre de l'équipe K.O." },
  { regex: /Inflicts ([\s\S]*?) and decreases enemy Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Inflige $1 et diminue la Vitesse de l'ennemi de $2%" },
  { regex: /Increases Attack and Speed by (-?\d+(?:\.\d+)?)% to the entire team/g, fr: "Augmente l'Attaque et la Vitesse de toute l'équipe de $1%" },
  { regex: /Genetics-aiding item: Guarantees the chance to inherit Defense Iv's/g, fr: "Objet d'aide génétique : Garantit la chance d'hériter des IV Défense" },
  { regex: /Permanent Upgrade: Daily export rewards award an extra Fashion Case/g, fr: "Amélioration permanente : Les récompenses d'exportation quotidiennes donnent une Mallette Mode supplémentaire" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to increase Attack by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance d'augmenter l'Attaque de $2%" },
  { regex: /When held: Increases the duration of ([\s\S]*?) by ([0-9.]+) turns/g, fr: "Tenu : Augmente la durée de $1 de $2 tours" },
  { regex: /Weather changed by the user is extended by (-?\d+(?:\.\d+)?) turns/g, fr: "La météo changée par l'utilisateur dure $1 tours de plus" },
  { regex: /Increases Special Defense and Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente la Défense Spéciale et l'Attaque Spéciale de $1%" },
  { regex: /Increases Special Defense by (-?\d+(?:\.\d+)?)% to the entire team/g, fr: "Augmente la Défense Spéciale de toute l'équipe de $1%" },
  { regex: /Decreases Defense, Special Defense and Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense, la Défense Spéciale et la Vitesse de $1%" },
  { regex: /Genetics-aiding item: Guarantees the chance to inherit Attack Iv's/g, fr: "Objet d'aide génétique : Garantit la chance d'hériter des IV Attaque" },
  { regex: /Can be used to catch event Pokemon\. Expires after event finishes/g, fr: "Permet de capturer des Pokémon d'événement. Expire à la fin de l'événement" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to increase Speed by (-?\d+(?:\.\d+)?)%/g, fr: "$1% de chance d'augmenter la Vitesse de $2%" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)% to the entire team/g, fr: "Augmente l'Attaque Spéciale de toute l'équipe de $1%" },
  { regex: /Genetics-aiding item: Guarantees the chance to inherit Speed Iv's/g, fr: "Objet d'aide génétique : Garantit la chance d'hériter des IV Vitesse" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)% when defeating a Pokemon/g, fr: "Augmente l'Attaque de $1% lors d'un K.O." },
  { regex: /Increases the Attack by x1\.5, but prevents them from switching/g, fr: "Augmente l'Attaque de x1.5, mais empêche le changement de Pokémon" },
  { regex: /Changes the type of the user to match the type of the used move/g, fr: "Change le type de l'utilisateur pour correspondre au type de la capacité utilisée" },
  { regex: /Every turn, raises two stats by (-?\d+(?:\.\d+)?)% for one turn/g, fr: "À chaque tour, augmente deux stats de $1% pendant un tour" },
  { regex: /Nullifies received ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves/g, fr: "Annule les capacités de type $1 reçues" },
  { regex: /Increases Speed by (-?\d+(?:\.\d+)?)% if no item is being held/g, fr: "Augmente la Vitesse de $1% si aucun objet n'est tenu" },
  { regex: /Grants immunity to ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-type moves/g, fr: "Confère l'immunité aux capacités de type $1" },
  { regex: /Increases Speed by (-?\d+(?:\.\d+)?)% when defeating a Pokemon/g, fr: "Augmente la Vitesse de $1% lors d'un K.O." },
  { regex: /Super-effective against ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)-types/g, fr: "Super efficace contre les types $1" },
  { regex: /Use: Increase the Defense IV of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente l'IV Défense d'un Pokémon de $1" },
  { regex: /Genetics-aiding item: Guarantees the chance to inherit HP Iv's/g, fr: "Objet d'aide génétique : Garantit la chance d'hériter des IV PV" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to inflict ([\s\S]*?) when attacked/g, fr: "$1% de chance d'infliger $2 lors d'une attaque reçue" },
  { regex: /(-?\d+(?:\.\d+)?)% chance for received Status Effects to miss/g, fr: "$1% de chance que les altérations de statut reçues échouent" },
  { regex: /Moves that hit multiple times always hit their maximum amount/g, fr: "Les capacités à multiples coups touchent toujours leur nombre maximum de coups" },
  { regex: /When held: Decreases fatigue damage of the user by x([0-9.]+)/g, fr: "Tenu : Diminue les dégâts de fatigue de l'utilisateur de x$1" },
  { regex: /Use: Increase the Attack IV of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente l'IV Attaque d'un Pokémon de $1" },
  { regex: /Power increases by x1\.2-(-?\d+(?:\.\d+)?) if Speed is risen/g, fr: "La puissance augmente de x1.2 à x$1 si la Vitesse est augmentée" },
  { regex: /Use: Increase the Speed IV of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente l'IV Vitesse d'un Pokémon de $1" },
  { regex: /Increases Speed by (-?\d+(?:\.\d+)?)% on ([\s\S]*?) weather/g, fr: "Augmente la Vitesse de $1% sous la météo $2" },
  { regex: /Decreases Defense and Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense et la Défense Spéciale de $1%" },
  { regex: /Perform the first move of the oponent, at double the damage/g, fr: "Exécute la première capacité de l'adversaire, avec le double de dégâts" },
  { regex: /Power doubles if the user is Paralyzed, Burned or Poisoned/g, fr: "La puissance double si l'utilisateur est Paralysé, Brûlé ou Empoisonné" },
  { regex: /Damage received is halved when over (-?\d+(?:\.\d+)?)% HP/g, fr: "Les dégâts reçus sont divisés par 2 quand les PV sont supérieurs à $1%" },
  { regex: /Decrease enemy Speed by (-?\d+(?:\.\d+)?)% on getting hit/g, fr: "Diminue la Vitesse de l'ennemi de $1% quand touché" },
  { regex: /Increases Attack and Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque et l'Attaque Spéciale de $1%" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)% to the entire team/g, fr: "Augmente l'Attaque de toute l'équipe de $1%" },
  { regex: /Use: Increase the level of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente le niveau d'un Pokémon de $1" },
  { regex: /Use: Increase the HP IV of a Pokemon by (-?\d+(?:\.\d+)?)/g, fr: "Utilisation : Augmente l'IV PV d'un Pokémon de $1" },
  { regex: /An unhatched egg\. Leave combat to discover the contents!/g, fr: "Un oeuf non éclos. Quittez le combat pour découvrir son contenu !" },
  { regex: /Obtained in T3 and T4 raids\. Exchanged in the Poke-Mart/g, fr: "Obtenu dans les raids T3 et T4. Échangeable au Poké-Mart" },
  { regex: /All hits become super-effective regardless of the typing/g, fr: "Tous les coups deviennent super efficaces indépendamment du type" },
  { regex: /Changes the weather to ([A-Za-zÀ-ÖØ-öø-ÿÉéèêëïôùûç\-]+)/g, fr: "Change la météo en $1" },
  { regex: /Increases Same-Type-Attack-Bonus by \+(-?\d+(?:\.\d+)?)/g, fr: "Augmente le STAB de +$1" },
  { regex: /Decreases enemy Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense Spéciale de l'ennemi de $1%" },
  { regex: /Decreases Defense, Special Defense (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense et la Défense Spéciale de $1%" },
  { regex: /Decreases enemy Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue l'Attaque Spéciale de l'ennemi de $1%" },
  { regex: /Status effects applied to the target last x3 longer/g, fr: "Les altérations de statut appliquées à la cible durent x3 plus longtemps" },
  { regex: /Increases Attack and Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque et la Défense de $1%" },
  { regex: /Decreases Defense and Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense et l'Attaque de $1%" },
  { regex: /Prevents all Pokemon on your team from ([\s\S]*?)/g, fr: "Empêche tous les Pokémon de l'équipe d'être $1" },
  { regex: /Status effects are cleared when switching Pokemon/g, fr: "Les altérations de statut sont soignées au changement de Pokémon" },
  { regex: /When attacking, ignores the target's stat changes/g, fr: "Lors d'une attaque, ignore les changements de stats de la cible" },
  { regex: /Super-effective damage taken multiplier is halved/g, fr: "Le multiplicateur de dégâts super efficaces reçus est divisé par 2" },
  { regex: /Power doubles if the user is not holding any item/g, fr: "La puissance double si l'utilisateur ne tient aucun objet" },
  { regex: /Type changes based on the first type of the user/g, fr: "Le type change en fonction du premier type de l'utilisateur" },
  { regex: /(-?\d+(?:\.\d+)?)% chance to inflict ([\s\S]*?)/g, fr: "$1% de chance d'infliger $2" },
  { regex: /Increases Special Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente la Défense Spéciale de $1%" },
  { regex: /Can only take damage from direct damaging moves/g, fr: "Ne peut subir de dégâts que des capacités infligeant directement des dégâts" },
  { regex: /Copies the positive stat increases of the enemy/g, fr: "Copie les augmentations de stats positives de l'ennemi" },
  { regex: /Stat changes on the user are boosted by a stage/g, fr: "Les changements de stats de l'utilisateur sont augmentés d'un niveau" },
  { regex: /Moves are executed a second time, at half power/g, fr: "Les capacités sont exécutées une seconde fois, à demi-puissance" },
  { regex: /Power doubles if the target has a status effect/g, fr: "La puissance double si la cible a une altération de statut" },
  { regex: /Hits (-?\d+(?:\.\d+)?)-(-?\d+(?:\.\d+)?) times/g, fr: "Inflige $1 à $2 coups" },
  { regex: /Decreases Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue l'Attaque Spéciale de $1%" },
  { regex: /Increases Special Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque Spéciale de $1%" },
  { regex: /Halves the damage received of Flame-type moves/g, fr: "Divise par 2 les dégâts reçus des capacités de type Feu" },
  { regex: /Removes all status effect for the entire party/g, fr: "Soigne toutes les altérations de statut pour toute l'équipe" },
  { regex: /Decreases enemy Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense de l'ennemi de $1%" },
  { regex: /Raises by (-?\d+(?:\.\d+)?)% two random stats/g, fr: "Augmente deux stats aléatoires de $1%" },
  { regex: /Decreases enemy Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue l'Attaque de l'ennemi de $1%" },
  { regex: /Increases Cross-Power by \+(-?\d+(?:\.\d+)?)/g, fr: "Augmente la Cross-Puissance de +$1" },
  { regex: /Secondary effect of moves are executed twice/g, fr: "Les effets secondaires des capacités sont exécutés deux fois" },
  { regex: /Decreases enemy Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Vitesse de l'ennemi de $1%" },
  { regex: /Use: Unlock the hidden ability of a Pokemon/g, fr: "Utilisation : Débloque le talent caché d'un Pokémon" },
  { regex: /Decreases fatigue damage of the user by x2/g, fr: "Diminue les dégâts de fatigue de l'utilisateur de x2" },
  { regex: /Prevents the lowering of any Defense stat/g, fr: "Empêche la baisse de la stat Défense" },
  { regex: /Physical damage dealt is multiplied by x2/g, fr: "Les dégâts physiques infligés sont multipliés par x2" },
  { regex: /Power doubles if the target is ([\s\S]*?)/g, fr: "La puissance double si la cible est $1" },
  { regex: /Prevents the lowering of any Attack stat/g, fr: "Empêche la baisse de la stat Attaque" },
  { regex: /Power doubles if the target is Paralyzed/g, fr: "La puissance double si la cible est Paralysée" },
  { regex: /Increase all Stats by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente toutes les stats de $1%" },
  { regex: /Increases Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente la Défense de $1%" },
  { regex: /Moves always hit regardless of the type/g, fr: "Les capacités touchent toujours indépendamment du type" },
  { regex: /Removes ([\s\S]*?) for the entire party/g, fr: "Soigne $1 pour toute l'équipe" },
  { regex: /Decreases Defense by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Défense de $1%" },
  { regex: /Decreases Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue l'Attaque de $1%" },
  { regex: /Super-effective damage becomes neutral/g, fr: "Les dégâts super efficaces deviennent neutres" },
  { regex: /Increases Attack by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente l'Attaque de $1%" },
  { regex: /Inflicts ([\s\S]*?) to the entire team/g, fr: "Inflige $1 à toute l'équipe" },
  { regex: /Increases Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Augmente la Vitesse de $1%" },
  { regex: /Decreases Speed by (-?\d+(?:\.\d+)?)%/g, fr: "Diminue la Vitesse de $1%" },
  { regex: /Use: Re-roll the ability of a Pokemon/g, fr: "Utilisation : Relance le talent d'un Pokémon" },
  { regex: /Steals the stat changes of the enemy/g, fr: "Vole les changements de stats de l'ennemi" },
  { regex: /Use: Removes the nature of a Pokemon/g, fr: "Utilisation : Supprime la nature d'un Pokémon" },
  { regex: /Power randomly varies from x1 to x8/g, fr: "La puissance varie aléatoirement de x1 à x8" },
  { regex: /Changes the weather to ([\s\S]*?)/g, fr: "Change la météo en $1" },
  { regex: /Switches to the next party member/g, fr: "Change pour le prochain membre de l'équipe" },
  { regex: /Positive stats up last x3 longer/g, fr: "Les augmentations de stats positives durent x3 plus longtemps" },
  { regex: /User performs any move at random/g, fr: "L'utilisateur exécute une capacité au hasard" },
  { regex: /Can hit regardless of the typing/g, fr: "Peut toucher indépendamment du type" },
  { regex: /Attacks x1\.2 slower than usual/g, fr: "Attaque x1.2 plus lentement que la normale" },
  { regex: /Attacks x1\.2 faster than usual/g, fr: "Attaque x1.2 plus vite que la normale" },
  { regex: /Attacks x1\.5 slower than usual/g, fr: "Attaque x1.5 plus lentement que la normale" },
  { regex: /Inflicts ([\s\S]*?) on the user/g, fr: "Inflige $1 à l'utilisateur" },
  { regex: /Attacks x1\.5 faster than usual/g, fr: "Attaque x1.5 plus vite que la normale" },
  { regex: /Obtained in the Battle Frontier/g, fr: "Obtenu dans la Zone de Combat" },
  { regex: /Grants immunity to ([\s\S]*?)/g, fr: "Confère l'immunité à $1" },
  { regex: /Hits (-?\d+(?:\.\d+)?) times/g, fr: "Inflige $1 coups" },
  { regex: /Attacks x2 faster than usual/g, fr: "Attaque x2 plus vite que la normale" },
  { regex: /Attacks x2 slower than usual/g, fr: "Attaque x2 plus lentement que la normale" },
  { regex: /Executes the first move slot/g, fr: "Exécute la capacité du premier emplacement" },
  { regex: /Prevents all stat decreases/g, fr: "Empêche toute baisse de stats" },
  { regex: /Bypasses all defense buffs/g, fr: "Ignore tous les buffs de Défense" },
  { regex: /Use: Get a random Decor/g, fr: "Utilisation : Obtient un Décor aléatoire" },
  { regex: /Inflicts ([\s\S]*?)/g, fr: "Inflige $1" },
  { regex: /\.\.\./g, fr: "..." },
];

const INFO_TRANSLATION_PATTERNS = window.i18n.fr.INFO_TRANSLATION_PATTERNS;

// --- autoPatchInfos ---
window.i18n.fr.autoPatchInfos = function() {
  if (typeof item !== 'object' && typeof ability !== 'object' && typeof move !== 'object') return;

  const dicts = [];
  if (typeof item === 'object') dicts.push(item);
  if (typeof ability === 'object') dicts.push(ability);
  if (typeof move === 'object') dicts.push(move);

  dicts.forEach(function(dict) {
    for (const key in dict) {
      const obj = dict[key];
      if (!obj || typeof obj.info !== 'function') continue;

      const origInfo = obj.info;
      obj.info = function() {
        let text = origInfo.call(this);
        if (window.gameLang !== 'fr' || typeof text !== 'string') return text;

        for (let i = 0; i < INFO_TRANSLATION_PATTERNS.length; i++) {
          const p = INFO_TRANSLATION_PATTERNS[i];
          p.regex.lastIndex = 0;
          if (p.regex.test(text)) {
            p.regex.lastIndex = 0;
            text = text.replace(p.regex, p.fr);
            break;
          }
        }

        // Post-process: translate any remaining English type names that leaked through templates
        text = text.replace(/\b(Normal|Fighting|Flying|Poison|Ground|Rock|Bug|Ghost|Steel|Fire|Water|Grass|Electric|Psychic|Ice|Dragon|Dark|Fairy)\b/g, function(m, type){
          const typeMap = {Normal:"Normal",Fighting:"Combat",Flying:"Vol",Poison:"Poison",Ground:"Sol",Rock:"Roche",Bug:"Insecte",Ghost:"Spectre",Steel:"Acier",Fire:"Feu",Water:"Eau",Grass:"Plante",Electric:"Électrik",Psychic:"Psy",Ice:"Glace",Dragon:"Dragon",Dark:"Ténèbres",Fairy:"Fée"};
          return typeMap[type] || type;
        });

        return text;
      };
    }
  });
}


const autoPatchInfos = window.i18n.fr.autoPatchInfos;

// --- renameFR ---
window.i18n.fr.applyRenames = function() {
/* ===== patch-fr-data.js ===== */


// PokeChill FR Data Patch — renameFR & descriptionFR assignments

// From scripts/moveDictionary.js
if (ability && ability.hydratation) ability.hydratation.renameFR =  `Hydratation`;
if (ability && ability.sandVeil) ability.sandVeil.renameFR =  `Voile Sable`;
if (ability && ability.snowCloak) ability.snowCloak.renameFR =  `Rideau Neige`;
if (ability && ability.grabGuard) ability.grabGuard.renameFR =  `Garde Combat`;
if (ability && ability.waterGuard) ability.waterGuard.renameFR =  `Garde Eau`;
if (ability && ability.flameGuard) ability.flameGuard.renameFR =  `Garde Feu`;
if (ability && ability.curseGuard) ability.curseGuard.renameFR =  `Garde Spectre`;
if (ability && ability.poisonGuard) ability.poisonGuard.renameFR =  `Garde Poison`;
if (ability && ability.iceGuard) ability.iceGuard.renameFR =  `Garde Glace`;
if (ability && ability.psychicGuard) ability.psychicGuard.renameFR =  `Garde Psy`;
if (ability && ability.fairyGuard) ability.fairyGuard.renameFR =  `Garde Fée`;
if (ability && ability.leafGuard) ability.leafGuard.renameFR =  `Feuille Garde`;
if (ability && ability.plainGuard) ability.plainGuard.renameFR =  `Garde Normal`;
if (ability && ability.sinisterGuard) ability.sinisterGuard.renameFR =  `Garde Ténèbres`;
if (ability && ability.steelGuard) ability.steelGuard.renameFR =  `Garde Acier`;
if (ability && ability.dragonGuard) ability.dragonGuard.renameFR =  `Garde Dragon`;
if (ability && ability.bugGuard) ability.bugGuard.renameFR =  `Garde Insecte`;
if (ability && ability.rockGuard) ability.rockGuard.renameFR =  `Garde Roche`;
if (ability && ability.groundGuard) ability.groundGuard.renameFR =  `Garde Sol`;
if (ability && ability.flyingGuard) ability.flyingGuard.renameFR =  `Garde Vol`;
if (ability && ability.insomnia) ability.insomnia.renameFR =  `Insomnia`;
if (ability && ability.immunity) ability.immunity.renameFR =  `Vaccin`;
if (ability && ability.limber) ability.limber.renameFR =  `Échauffement`;
if (ability && ability.ownTempo) ability.ownTempo.renameFR =  `Tempo Perso`;
if (ability && ability.magmaArmor) ability.magmaArmor.renameFR =  `Armumagma`;
if (ability && ability.waterVeil) ability.waterVeil.renameFR =  `Ignifu-Voile`;
if (ability && ability.marvelScale) ability.marvelScale.renameFR =  `Écaille Spéciale`;
if (ability && ability.livingShield) ability.livingShield.renameFR =  `Bouclier Vivant`;
if (ability && ability.overgrow) ability.overgrow.renameFR =  `Engrais`;
if (ability && ability.blaze) ability.blaze.renameFR =  `Brasier`;
if (ability && ability.swarm) ability.swarm.renameFR =  `Essaim`;
if (ability && ability.torrent) ability.torrent.renameFR =  `Torrent`;
if (ability && ability.bastion) ability.bastion.renameFR =  `Bastion`;
if (ability && ability.average) ability.average.renameFR =  `Moyen`;
if (ability && ability.resolve) ability.resolve.renameFR =  `Résolution`;
if (ability && ability.mistify) ability.mistify.renameFR =  `Brumisation`;
if (ability && ability.hexerei) ability.hexerei.renameFR =  `Sorcellerie`;
if (ability && ability.glimmer) ability.glimmer.renameFR =  `Lueur`;
if (ability && ability.skyward) ability.skyward.renameFR =  `Céleste`;
if (ability && ability.draconic) ability.draconic.renameFR =  `Draconique`;
if (ability && ability.noxious) ability.noxious.renameFR =  `Nocif`;
if (ability && ability.solid) ability.solid.renameFR =  `Solide`;
if (ability && ability.rime) ability.rime.renameFR =  `Givre`;
if (ability && ability.voltage) ability.voltage.renameFR =  `Voltage`;
if (ability && ability.hyperCutter) ability.hyperCutter.renameFR =  `Hyper Cutter`;
if (ability && ability.bigPecks) ability.bigPecks.renameFR =  `Cœur de Coq`;
if (ability && ability.wonderSkin) ability.wonderSkin.renameFR =  `Peau Miracle`;
if (ability && ability.synchronize) ability.synchronize.renameFR =  `Synchro`;
if (ability && ability.solarPower) ability.solarPower.renameFR =  `Force Soleil`;
if (ability && ability.iceBody) ability.iceBody.renameFR =  `Corps Gel`;
if (ability && ability.rainDish) ability.rainDish.renameFR =  `Cuvette`;
if (ability && ability.sandForce) ability.sandForce.renameFR =  `Force Sable`;
if (ability && ability.static) ability.static.renameFR =  `Statik`;
if (ability && ability.flameBody) ability.flameBody.renameFR =  `Corps Ardent`;
if (ability && ability.poisonPoint) ability.poisonPoint.renameFR =  `Point Poison`;
if (ability && ability.strangeCharm) ability.strangeCharm.renameFR =  `Charme Étrange`;
if (ability && ability.effectSpore) ability.effectSpore.renameFR =  `Pose Spore`;
if (ability && ability.glacialBody) ability.glacialBody.renameFR =  `Corps Glacial`;
if (ability && ability.naturalCure) ability.naturalCure.renameFR =  `Médic Nature`;
if (ability && ability.technician) ability.technician.renameFR =  `Technicien`;
if (ability && ability.scrappy) ability.scrappy.renameFR =  `Querelleur`;
if (ability && ability.unaware) ability.unaware.renameFR =  `Inconscient`;
if (ability && ability.magicGuard) ability.magicGuard.renameFR =  `Garde Magik`;
if (ability && ability.voltAbsorb) ability.voltAbsorb.renameFR =  `Absorbe-Volt`;
if (ability && ability.waterAbsorb) ability.waterAbsorb.renameFR =  `Absorbe-Eau`;
if (ability && ability.flareAbsorb) ability.flareAbsorb.renameFR =  `Absorb Feu`;
if (ability && ability.curseAbsorb) ability.curseAbsorb.renameFR =  `Absorb Spectre`;
if (ability && ability.poisonAbsorb) ability.poisonAbsorb.renameFR =  `Absorb Poison`;
if (ability && ability.frostAbsorb) ability.frostAbsorb.renameFR =  `Absorb Glace`;
if (ability && ability.psychicAbsorb) ability.psychicAbsorb.renameFR =  `Absorb Psy`;
if (ability && ability.lightAbsorb) ability.lightAbsorb.renameFR =  `Absorb Fée`;
if (ability && ability.growthAbsorb) ability.growthAbsorb.renameFR =  `Absorb Plante`;
if (ability && ability.strongJaw) ability.strongJaw.renameFR =  `Prognathe`;
if (ability && ability.toughClaws) ability.toughClaws.renameFR =  `Griffe Dure`;
if (ability && ability.ironFist) ability.ironFist.renameFR =  `Poing de Fer`;
if (ability && ability.rivalry) ability.rivalry.renameFR =  `Rivalité`;
if (ability && ability.pickPocket) ability.pickPocket.renameFR =  `Pickpocket`;
if (ability && ability.brittleArmor) ability.brittleArmor.renameFR =  `Armure Fragile`;
if (ability && ability.chlorophyll) ability.chlorophyll.renameFR =  `Chlorophylle`;
if (ability && ability.grassyPelt) ability.grassyPelt.renameFR =  `Peau Plante`;
if (ability && ability.sandyPelt) ability.sandyPelt.renameFR =  `Peau Sable`;
if (ability && ability.icyPelt) ability.icyPelt.renameFR =  `Peau Glace`;
if (ability && ability.moistPelt) ability.moistPelt.renameFR =  `Peau Eau`;
if (ability && ability.fieryPelt) ability.fieryPelt.renameFR =  `Peau Feu`;
if (ability && ability.pixiePelt) ability.pixiePelt.renameFR =  `Peau Velue`;
if (ability && ability.blackPelt) ability.blackPelt.renameFR =  `Peau Noire`;
if (ability && ability.spikyPelt) ability.spikyPelt.renameFR =  `Peau Piquante`;
if (ability && ability.climaTact) ability.climaTact.renameFR =  `Tact Climatique`;
if (ability && ability.intangible) ability.intangible.renameFR =  `Intangible`;
if (ability && ability.hyperconductor) ability.hyperconductor.renameFR =  `Hyperconducteur`;
if (ability && ability.faeRush) ability.faeRush.renameFR =  `Ruée Féerique`;
if (ability && ability.moltShed) ability.moltShed.renameFR =  `Mue Ardente`;
if (ability && ability.slushRush) ability.slushRush.renameFR =  `Chasse-Neige`;
if (ability && ability.swiftSwim) ability.swiftSwim.renameFR =  `Glissade`;
if (ability && ability.sandRush) ability.sandRush.renameFR =  `Baigne Sable`;
if (ability && ability.intimidate) ability.intimidate.renameFR =  `Intimidation`;
if (ability && ability.dauntingLook) ability.dauntingLook.renameFR =  `Regard Intimidant`;
if (ability && ability.unburden) ability.unburden.renameFR =  `Délestage`;
if (ability && ability.moxie) ability.moxie.renameFR =  `Impudence`;
if (ability && ability.strategist) ability.strategist.renameFR =  `Stratège`;
if (ability && ability.sheerForce) ability.sheerForce.renameFR =  `Sans Limite`;
if (ability && ability.levitate) ability.levitate.renameFR =  `Lévitation`;
if (ability && ability.thickFat) ability.thickFat.renameFR =  `Isograisse`;
if (ability && ability.adaptability) ability.adaptability.renameFR =  `Adaptabilité`;
if (ability && ability.ambidextrous) ability.ambidextrous.renameFR =  `Ambidextre`;
if (ability && ability.noGuard) ability.noGuard.renameFR =  `Annule Garde`;
if (ability && ability.multiscale) ability.multiscale.renameFR =  `Multiécaille`;
if (ability && ability.guts) ability.guts.renameFR =  `Cran`;
if (ability && ability.skillLink) ability.skillLink.renameFR =  `Multi-Coups`;
if (ability && ability.sharpness) ability.sharpness.renameFR =  `Incisif`;
if (ability && ability.angerPoint) ability.angerPoint.renameFR =  `Colérique`;
if (ability && ability.justified) ability.justified.renameFR =  `Cœur Noble`;
if (ability && ability.filter) ability.filter.renameFR =  `Filtre`;
if (ability && ability.reckless) ability.reckless.renameFR =  `Téméraire`;
if (ability && ability.libero) ability.libero.renameFR =  `Libéro`;
if (ability && ability.flashElectro) ability.flashElectro.renameFR =  `Flash Électrik`;
if (ability && ability.flashAqua) ability.flashAqua.renameFR =  `Flash Eau`;
if (ability && ability.flashPyro) ability.flashPyro.renameFR =  `Flash Feu`;
if (ability && ability.flashUmbra) ability.flashUmbra.renameFR =  `Flash Ténèbres`;
if (ability && ability.flashVenum) ability.flashVenum.renameFR =  `Flash Poison`;
if (ability && ability.flashCryo) ability.flashCryo.renameFR =  `Flash Glace`;
if (ability && ability.flashPsycha) ability.flashPsycha.renameFR =  `Flash Psy`;
if (ability && ability.flashFae) ability.flashFae.renameFR =  `Flash Fée`;
if (ability && ability.flashHerba) ability.flashHerba.renameFR =  `Flash Herbe`;
if (ability && ability.stoned) ability.stoned.renameFR =  `Pétrifié`;
if (ability && ability.powerOfAlchemy) ability.powerOfAlchemy.renameFR =  `Osmose`;
if (ability && ability.stamina) ability.stamina.renameFR =  `Endurance`;
if (ability && ability.gooey) ability.gooey.renameFR =  `Poisseux`;
if (ability && ability.flowerVeil) ability.flowerVeil.renameFR =  `Flora-Voile`;
if (ability && ability.aromaVeil) ability.aromaVeil.renameFR =  `Aroma-Voile`;
if (ability && ability.sweetVeil) ability.sweetVeil.renameFR =  `Gluco-Voile`;
if (ability && ability.pastelVeil) ability.pastelVeil.renameFR =  `Voile Pastel`;
if (ability && ability.shieldsDown) ability.shieldsDown.renameFR =  `Bouclier-Carcan`;
if (ability && ability.colorSpore) ability.colorSpore.renameFR =  `Spore Colorée`;
if (ability && ability.merciless) ability.merciless.renameFR =  `Cruauté`;
if (ability && ability.costar) ability.costar.renameFR =  `Collab`;
if (ability && ability.purifyingSalt) ability.purifyingSalt.renameFR =  `Sel Purificateur`;
if (ability && ability.treasureOfRuin) ability.treasureOfRuin.renameFR =  `Trésor du Fléau`;
if (ability && ability.thousandArms) ability.thousandArms.renameFR =  `Mille Bras`;
if (ability && ability.goodAsGold) ability.goodAsGold.renameFR =  `Corps en Or`;
if (ability && ability.wonderGuard) ability.wonderGuard.renameFR =  `Garde Mystik`;
if (ability && ability.tintedLens) ability.tintedLens.renameFR =  `Lentiteintée`;
if (ability && ability.prankster) ability.prankster.renameFR =  `Farceur`;
if (ability && ability.galeWings) ability.galeWings.renameFR =  `Ailes Bourrasque`;
if (ability && ability.neuroforce) ability.neuroforce.renameFR =  `Cérébro-Force`;
if (ability && ability.speedBoost) ability.speedBoost.renameFR =  `Turbo`;
if (ability && ability.scorch) ability.scorch.renameFR =  `Carbonisé`;
if (ability && ability.corrosion) ability.corrosion.renameFR =  `Corrosion`;
if (ability && ability.dancer) ability.dancer.renameFR =  `Danseuse`;
if (ability && ability.cacophony) ability.cacophony.renameFR =  `Cacophonie`;
if (ability && ability.windRider) ability.windRider.renameFR =  `Aéroporté`;
if (ability && ability.iaido) ability.iaido.renameFR =  `Iaïdo`;
if (ability && ability.megaLauncher) ability.megaLauncher.renameFR =  `Méga Blaster`;
if (ability && ability.metalhead) ability.metalhead.renameFR =  `Tête de Métal`;
if (ability && ability.imposter) ability.imposter.renameFR =  `Imposteur`;
if (ability && ability.toxicBoost) ability.toxicBoost.renameFR =  `Rage Poison`;
if (ability && ability.flareBoost) ability.flareBoost.renameFR =  `Rage Brûlure`;
if (ability && ability.fullMetalBody) ability.fullMetalBody.renameFR =  `Métallo-Garde`;
if (ability && ability.supremeOverlord) ability.supremeOverlord.renameFR =  `Général Suprême`;
if (ability && ability.gorillaTactics) ability.gorillaTactics.renameFR =  `Entêtement`;
if (ability && ability.beastBoost) ability.beastBoost.renameFR =  `Boost Chimère`;
if (ability && ability.quarkDrive) ability.quarkDrive.renameFR =  `Charge Quantique`;
if (ability && ability.protosynthesis) ability.protosynthesis.renameFR =  `Paléosynthèse`;
if (ability && ability.drizzle) ability.drizzle.renameFR =  `Crachin`;
if (ability && ability.drought) ability.drought.renameFR =  `Sécheresse`;
if (ability && ability.sandStream) ability.sandStream.renameFR =  `Sable Volant`;
if (ability && ability.snowWarning) ability.snowWarning.renameFR =  `Alerte Neige`;
if (ability && ability.somberField) ability.somberField.renameFR =  `Champ Sombre`;
if (ability && ability.electricSurge) ability.electricSurge.renameFR =  `Créa-Élec`;
if (ability && ability.grassySurge) ability.grassySurge.renameFR =  `Créa-Herbe`;
if (ability && ability.mistySurge) ability.mistySurge.renameFR =  `Créa-Brume`;
if (ability && ability.sereneGrace) ability.sereneGrace.renameFR =  `Sérénité`;
if (ability && ability.hugePower) ability.hugePower.renameFR =  `Coloforce`;
if (ability && ability.contrary) ability.contrary.renameFR =  `Contestation`;
if (ability && ability.protean) ability.protean.renameFR =  `Protéen`;
if (ability && ability.simple) ability.simple.renameFR =  `Simple`;
if (ability && ability.parentalBond) ability.parentalBond.renameFR =  `Amour Filial`;
if (ability && ability.moody) ability.moody.renameFR =  `Lunatique`;
if (ability && ability.darkAura) ability.darkAura.renameFR =  `Aura Ténébreuse`;
if (ability && ability.soulAsterism) ability.soulAsterism.renameFR =  `Constellation d'Âme`;
if (ability && ability.normalize) ability.normalize.renameFR =  `Normalise`;
if (ability && ability.ferrilate) ability.ferrilate.renameFR =  `Peau Ferraille`;
if (ability && ability.glaciate) ability.glaciate.renameFR =  `Peau Gelée`;
if (ability && ability.terralate) ability.terralate.renameFR =  `Terralation`;
if (ability && ability.toxilate) ability.toxilate.renameFR =  `Peau Toxique`;
if (ability && ability.hydrolate) ability.hydrolate.renameFR =  `Peau Aquatique`;
if (ability && ability.pyrolate) ability.pyrolate.renameFR =  `Peau Ardente`;
if (ability && ability.chrysilate) ability.chrysilate.renameFR =  `Peau Insecte`;
if (ability && ability.galvanize) ability.galvanize.renameFR =  `Peau Électrique`;
if (ability && ability.gloomilate) ability.gloomilate.renameFR =  `Peau Sombre`;
if (ability && ability.espilate) ability.espilate.renameFR =  `Peau Psychique`;
if (ability && ability.aerilate) ability.aerilate.renameFR =  `Peau Céleste`;
if (ability && ability.pixilate) ability.pixilate.renameFR =  `Peau Féérique`;
if (ability && ability.verdify) ability.verdify.renameFR =  `Verdification`;
if (ability && ability.dragonMaw) ability.dragonMaw.renameFR =  `Dent de Dragon`;
if (move && move.quickAttack) move.quickAttack.renameFR =  `Vive-Attaque`;
if (move && move.tackle) move.tackle.renameFR =  `Charge`;
if (move && move.doubleSlap) move.doubleSlap.renameFR =  `Torgnoles`;
if (move && move.cut) move.cut.renameFR =  `Coupe`;
if (move && move.leer) move.leer.renameFR =  `Groz'Yeux`;
if (move && move.growl) move.growl.renameFR =  `Rugissement`;
if (move && move.swagger) move.swagger.renameFR =  `Vantardise`;
if (move && move.doubleHit) move.doubleHit.renameFR =  `Coup Double`;
if (move && move.playNice) move.playNice.renameFR =  `Camaraderie`;
if (move && move.swift) move.swift.renameFR =  `Météores`;
if (move && move.dizzyPunch) move.dizzyPunch.renameFR =  `Uppercut`;
if (move && move.stomp) move.stomp.renameFR =  `Écrasement`;
if (move && move.screech) move.screech.renameFR =  `Grincement`;
if (move && move.smellingSalts) move.smellingSalts.renameFR =  `Stimulant`;
if (move && move.facade) move.facade.renameFR =  `Façade`;
if (move && move.slash) move.slash.renameFR =  `Tranche`;
if (move && move.extremeSpeed) move.extremeSpeed.renameFR =  `Vitesse Extrême`;
if (move && move.strength) move.strength.renameFR =  `Force`;
if (move && move.hyperVoice) move.hyperVoice.renameFR =  `Mégaphone`;
if (move && move.bodyPress) move.bodyPress.renameFR =  `Big Splash`;
if (move && move.hyperBeam) move.hyperBeam.renameFR =  `Ultralaser`;
if (move && move.gigaImpact) move.gigaImpact.renameFR =  `Giga Impact`;
if (move && move.swordsDance) move.swordsDance.renameFR =  `Danse Lames`;
if (move && move.ember) move.ember.renameFR =  `Flammèche`;
if (move && move.fireSpin) move.fireSpin.renameFR =  `Danse Flammes`;
if (move && move.flameCharge) move.flameCharge.renameFR =  `Nitrocharge`;
if (move && move.incinerate) move.incinerate.renameFR =  `Calcination`;
if (move && move.fireFang) move.fireFang.renameFR =  `Crocs Feu`;
if (move && move.firePunch) move.firePunch.renameFR =  `Poing Feu`;
if (move && move.sunnyDay) move.sunnyDay.renameFR =  `Zénith`;
if (move && move.flamethrower) move.flamethrower.renameFR =  `Lance-Flammes`;
if (move && move.heatWave) move.heatWave.renameFR =  `Canicule`;
if (move && move.fireBlast) move.fireBlast.renameFR =  `Déflagration`;
if (move && move.flareBlitz) move.flareBlitz.renameFR =  `Boutefeu`;
if (move && move.overheat) move.overheat.renameFR =  `Surchauffe`;
if (move && move.nuzzle) move.nuzzle.renameFR =  `Frotte-Frimousse`;
if (move && move.magneticFlux) move.magneticFlux.renameFR =  `Magné-Contrôle`;
if (move && move.thunderShock) move.thunderShock.renameFR =  `Éclair`;
if (move && move.thunderWave) move.thunderWave.renameFR =  `Cage Éclair`;
if (move && move.chargeBeam) move.chargeBeam.renameFR =  `Rayon Chargé`;
if (move && move.electroWeb) move.electroWeb.renameFR =  `Toile Élek`;
if (move && move.thunderFang) move.thunderFang.renameFR =  `Crocs Éclair`;
if (move && move.thunderPunch) move.thunderPunch.renameFR =  `Poing Éclair`;
if (move && move.thunderbolt) move.thunderbolt.renameFR =  `Tonnerre`;
if (move && move.discharge) move.discharge.renameFR =  `Coup d'Jus`;
if (move && move.electricTerrain) move.electricTerrain.renameFR =  `Champ Électrifié`;
if (move && move.thunder) move.thunder.renameFR =  `Fatal-Foudre`;
if (move && move.voltSwitch) move.voltSwitch.renameFR =  `Change Éclair`;
if (move && move.wildCharge) move.wildCharge.renameFR =  `Éclair Fou`;
if (move && move.supercellSlam) move.supercellSlam.renameFR =  `Volt Assaut`;
if (move && move.mudSlap) move.mudSlap.renameFR =  `Coud'Boue`;
if (move && move.magnitude) move.magnitude.renameFR =  `Ampleur`;
if (move && move.mudShot) move.mudShot.renameFR =  `Tir de Boue`;
if (move && move.bulldoze) move.bulldoze.renameFR =  `Piétisol`;
if (move && move.sandstorm) move.sandstorm.renameFR =  `Tempête de Sable`;
if (move && move.scorchingSands) move.scorchingSands.renameFR =  `Sable Ardent`;
if (move && move.rototiller) move.rototiller.renameFR =  `Fertilisation`;
if (move && move.earthquake) move.earthquake.renameFR =  `Séisme`;
if (move && move.dig) move.dig.renameFR =  `Tunnel`;
if (move && move.earthPower) move.earthPower.renameFR =  `Telluriforce`;
if (move && move.stompingTantrum) move.stompingTantrum.renameFR =  `Trépignement`;
if (move && move.bulletPunch) move.bulletPunch.renameFR =  `Pisto-Poing`;
if (move && move.metalClaw) move.metalClaw.renameFR =  `Griffe Acier`;
if (move && move.magnetBomb) move.magnetBomb.renameFR =  `Bombe Aimant`;
if (move && move.mirrorShot) move.mirrorShot.renameFR =  `Miroi-Tir`;
if (move && move.steelWing) move.steelWing.renameFR =  `Ailes d'Acier`;
if (move && move.ironHead) move.ironHead.renameFR =  `Tête de Fer`;
if (move && move.sharkJaws) move.sharkJaws.renameFR =  `Mâchoires de Requin`;
if (move && move.ironSlug) move.ironSlug.renameFR =  `Balle de Fer`;
if (move && move.flashCannon) move.flashCannon.renameFR =  `Luminocanon`;
if (move && move.ironTail) move.ironTail.renameFR =  `Queue de Fer`;
if (move && move.smartStrike) move.smartStrike.renameFR =  `Estocorne`;
if (move && move.metalSound) move.metalSound.renameFR =  `Strido-Son`;
if (move && move.ironDefense) move.ironDefense.renameFR =  `Mur de Fer`;
if (move && move.peck) move.peck.renameFR =  `Picpic`;
if (move && move.gust) move.gust.renameFR =  `Tornade`;
if (move && move.skyDrop) move.skyDrop.renameFR =  `Chute Libre`;
if (move && move.dualWingbeat) move.dualWingbeat.renameFR =  `Double Volée`;
if (move && move.acrobatics) move.acrobatics.renameFR =  `Acrobatie`;
if (move && move.airShlash) move.airShlash.renameFR =  `Tranch'Air`;
if (move && move.drillPeck) move.drillPeck.renameFR =  `Bec Vrille`;
if (move && move.tailwind) move.tailwind.renameFR =  `Vent Arrière`;
if (move && move.fly) move.fly.renameFR =  `Vol`;
if (move && move.featherDance) move.featherDance.renameFR =  `Danse Plumes`;
if (move && move.bounce) move.bounce.renameFR =  `Rebond`;
if (move && move.hurricane) move.hurricane.renameFR =  `Vent Violent`;
if (move && move.razorTalons) move.razorTalons.renameFR =  `Griffes Rasoir`;
if (move && move.acid) move.acid.renameFR =  `Acide`;
if (move && move.poisonSting) move.poisonSting.renameFR =  `Dard-Venin`;
if (move && move.smog) move.smog.renameFR =  `Purédpois`;
if (move && move.poisonPowder) move.poisonPowder.renameFR =  `Poudre Toxik`;
if (move && move.toxic) move.toxic.renameFR =  `Toxik`;
if (move && move.poisonFang) move.poisonFang.renameFR =  `Crochet Venin`;
if (move && move.sludge) move.sludge.renameFR =  `Détritus`;
if (move && move.crossPoison) move.crossPoison.renameFR =  `Poison Croix`;
if (move && move.poisonClaw) move.poisonClaw.renameFR =  `Griffe Poison`;
if (move && move.poisonJab) move.poisonJab.renameFR =  `Direct Toxik`;
if (move && move.sludgeBomb) move.sludgeBomb.renameFR =  `Bombe Beurk`;
if (move && move.sludgeWave) move.sludgeWave.renameFR =  `Cradovague`;
if (move && move.coil) move.coil.renameFR =  `Enroulement`;
if (move && move.acidArmor) move.acidArmor.renameFR =  `Acidarmure`;
if (move && move.acidSpray) move.acidSpray.renameFR =  `Bombe Acide`;
if (move && move.noxiousTorque) move.noxiousTorque.renameFR =  `Moteur Nocif`;
if (move && move.iceShard) move.iceShard.renameFR =  `Éclats Glace`;
if (move && move.powderSnow) move.powderSnow.renameFR =  `Poudreuse`;
if (move && move.icicleSpear) move.icicleSpear.renameFR =  `Stalactite`;
if (move && move.hail) move.hail.renameFR =  `Grêle`;
if (move && move.icyWind) move.icyWind.renameFR =  `Vent Glace`;
if (move && move.avalanche) move.avalanche.renameFR =  `Avalanche`;
if (move && move.frostBreath) move.frostBreath.renameFR =  `Souffle Glacé`;
if (move && move.auroraBeam) move.auroraBeam.renameFR =  `Onde Boréale`;
if (move && move.iceFang) move.iceFang.renameFR =  `Crocs Givre`;
if (move && move.icePunch) move.icePunch.renameFR =  `Poing Glace`;
if (move && move.iceBeam) move.iceBeam.renameFR =  `Laser Glace`;
if (move && move.blizzard) move.blizzard.renameFR =  `Blizzard`;
if (move && move.icicleCrash) move.icicleCrash.renameFR =  `Chute Glace`;
if (move && move.safeguard) move.safeguard.renameFR =  `Rune Protect`;
if (move && move.freezyFrost) move.freezyFrost.renameFR =  `Évo-Congélo`;
if (move && move.twineedle) move.twineedle.renameFR =  `Double Dard`;
if (move && move.furyCutter) move.furyCutter.renameFR =  `Taillade`;
if (move && move.infestation) move.infestation.renameFR =  `Harcèlement`;
if (move && move.pinMissile) move.pinMissile.renameFR =  `Dard-Nuée`;
if (move && move.stickyWeb) move.stickyWeb.renameFR =  `Toile Gluante`;
if (move && move.pounce) move.pounce.renameFR =  `Bond`;
if (move && move.struggleBug) move.struggleBug.renameFR =  `Survinsecte`;
if (move && move.bugBite) move.bugBite.renameFR =  `Piqûre`;
if (move && move.bugBuzz) move.bugBuzz.renameFR =  `Bourdon`;
if (move && move.signalBeam) move.signalBeam.renameFR =  `Rayon Signal`;
if (move && move.silverWind) move.silverWind.renameFR =  `Vent Argenté`;
if (move && move.xScissor) move.xScissor.renameFR =  `Plaie Croix`;
if (move && move.firstImpression) move.firstImpression.renameFR =  `Escarmouche`;
if (move && move.stringShot) move.stringShot.renameFR =  `Sécrétion`;
if (move && move.uTurn) move.uTurn.renameFR =  `Demi-Tour`;
if (move && move.weirdRoom) move.weirdRoom.renameFR =  `Zone Étrange`;
if (move && move.savageStinger) move.savageStinger.renameFR =  `Dard Sauvage`;
if (move && move.quiverDance) move.quiverDance.renameFR =  `Papillodanse`;
if (move && move.waterGun) move.waterGun.renameFR =  `Pistolet à O`;
if (move && move.aquaJet) move.aquaJet.renameFR =  `Aqua-Jet`;
if (move && move.whirlpool) move.whirlpool.renameFR =  `Siphon`;
if (move && move.waterPulse) move.waterPulse.renameFR =  `Vibraqua`;
if (move && move.chillingWater) move.chillingWater.renameFR =  `Écosurf`;
if (move && move.bubbleBeam) move.bubbleBeam.renameFR =  `Bulles d'O`;
if (move && move.foamShot) move.foamShot.renameFR =  `Tir d'Écume`;
if (move && move.rainDance) move.rainDance.renameFR =  `Danse Pluie`;
if (move && move.waterfall) move.waterfall.renameFR =  `Cascade`;
if (move && move.scald) move.scald.renameFR =  `Ébullition`;
if (move && move.liquidation) move.liquidation.renameFR =  `Aqua-Brèche`;
if (move && move.aquaTail) move.aquaTail.renameFR =  `Hydro-Queue`;
if (move && move.surf) move.surf.renameFR =  `Surf`;
if (move && move.muddyWater) move.muddyWater.renameFR =  `Ocroupi`;
if (move && move.hydroPump) move.hydroPump.renameFR =  `Hydrocanon`;
if (move && move.waveCrash) move.waveCrash.renameFR =  `Aquatacle`;
if (move && move.leafage) move.leafage.renameFR =  `Feuillage`;
if (move && move.vineWhip) move.vineWhip.renameFR =  `Fouet Lianes`;
if (move && move.magicalLeaf) move.magicalLeaf.renameFR =  `Feuille Magik`;
if (move && move.bulletSeed) move.bulletSeed.renameFR =  `Balle Graine`;
if (move && move.razorLeaf) move.razorLeaf.renameFR =  `Tranch'Herbe`;
if (move && move.stunSpore) move.stunSpore.renameFR =  `Para-Spore`;
if (move && move.ragePowder) move.ragePowder.renameFR =  `Poudre Fureur`;
if (move && move.leafBlade) move.leafBlade.renameFR =  `Lame Feuille`;
if (move && move.energyBall) move.energyBall.renameFR =  `Éco-Sphère`;
if (move && move.solarBeam) move.solarBeam.renameFR =  `Lance-Soleil`;
if (move && move.solarBlade) move.solarBlade.renameFR =  `Lame Solaire`;
if (move && move.seedBomb) move.seedBomb.renameFR =  `Canon Graine`;
if (move && move.cottonSpore) move.cottonSpore.renameFR =  `Spore Coton`;
if (move && move.spore) move.spore.renameFR =  `Spore`;
if (move && move.grassyTerrain) move.grassyTerrain.renameFR =  `Champ Herbu`;
if (move && move.leafStorm) move.leafStorm.renameFR =  `Tempête Verte`;
if (move && move.rockSmash) move.rockSmash.renameFR =  `Éclate-Roc`;
if (move && move.vacuumWave) move.vacuumWave.renameFR =  `Onde Vide`;
if (move && move.machPunk) move.machPunk.renameFR =  `Mach Punch`;
if (move && move.armThrust) move.armThrust.renameFR =  `Cogne`;
if (move && move.powerupPunch) move.powerupPunch.renameFR =  `Poing Boost`;
if (move && move.stormThrow) move.stormThrow.renameFR =  `Yama Arashi`;
if (move && move.lowSweep) move.lowSweep.renameFR =  `Balayette`;
if (move && move.forcePalm) move.forcePalm.renameFR =  `Forte-Paume`;
if (move && move.brickBreak) move.brickBreak.renameFR =  `Casse-Brique`;
if (move && move.skyUppercut) move.skyUppercut.renameFR =  `Stratopercut`;
if (move && move.hammerArm) move.hammerArm.renameFR =  `Marto-Poing`;
if (move && move.auraSphere) move.auraSphere.renameFR =  `Aurasphère`;
if (move && move.bulkUp) move.bulkUp.renameFR =  `Gonflette`;
if (move && move.crossChop) move.crossChop.renameFR =  `Coup Croix`;
if (move && move.closeCombat) move.closeCombat.renameFR =  `Close Combat`;
if (move && move.superpower) move.superpower.renameFR =  `Surpuissance`;
if (move && move.focusBlast) move.focusBlast.renameFR =  `Exploforce`;
if (move && move.crossRoom) move.crossRoom.renameFR =  `Salle Croisée`;
if (move && move.confusion) move.confusion.renameFR =  `Choc Mental`;
if (move && move.psybeam) move.psybeam.renameFR =  `Rafale Psy`;
if (move && move.futureSight) move.futureSight.renameFR =  `Prescience`;
if (move && move.psychoCut) move.psychoCut.renameFR =  `Coupe Psycho`;
if (move && move.psychicFangs) move.psychicFangs.renameFR =  `Psycho-Croc`;
if (move && move.zenHeadbut) move.zenHeadbut.renameFR =  `Psykoud'Boul`;
if (move && move.twinBeam) move.twinBeam.renameFR =  `Double Rayon`;
if (move && move.psychic) move.psychic.renameFR =  `Psyko`;
if (move && move.extrasensory) move.extrasensory.renameFR =  `Extrasenseur`;
if (move && move.amnesia) move.amnesia.renameFR =  `Amnésie`;
if (move && move.barrier) move.barrier.renameFR =  `Bouclier`;
if (move && move.agility) move.agility.renameFR =  `Hâte`;
if (move && move.calmMind) move.calmMind.renameFR =  `Plénitude`;
if (move && move.psychoBoost) move.psychoBoost.renameFR =  `Psycho-Boost`;
if (move && move.reflect) move.reflect.renameFR =  `Protection`;
if (move && move.rockThrow) move.rockThrow.renameFR =  `Jet-Pierres`;
if (move && move.accelerock) move.accelerock.renameFR =  `Vif Roc`;
if (move && move.rockBlast) move.rockBlast.renameFR =  `Boule Roc`;
if (move && move.rollout) move.rollout.renameFR =  `Roulade`;
if (move && move.ancientPower) move.ancientPower.renameFR =  `Pouvoir Antique`;
if (move && move.smackDown) move.smackDown.renameFR =  `Anti-Air`;
if (move && move.gemstoneCrush) move.gemstoneCrush.renameFR =  `Broyage de Gemmes`;
if (move && move.rockTomb) move.rockTomb.renameFR =  `Tomberoche`;
if (move && move.rockSlide) move.rockSlide.renameFR =  `Éboulement`;
if (move && move.powerGem) move.powerGem.renameFR =  `Rayon Gemme`;
if (move && move.stoneEdge) move.stoneEdge.renameFR =  `Lame de Roc`;
if (move && move.meteorBeam) move.meteorBeam.renameFR =  `Laser Météore`;
if (move && move.rockPolish) move.rockPolish.renameFR =  `Poliroche`;
if (move && move.wrathOfTheLand) move.wrathOfTheLand.renameFR =  `Colère de la Terre`;
if (move && move.lick) move.lick.renameFR =  `Léchouille`;
if (move && move.shadowSneak) move.shadowSneak.renameFR =  `Ombre Portée`;
if (move && move.confuseRay) move.confuseRay.renameFR =  `Onde Folie`;
if (move && move.willOWisp) move.willOWisp.renameFR =  `Feu Follet`;
if (move && move.fog) move.fog.renameFR =  `Brouillard`;
if (move && move.ominousWind) move.ominousWind.renameFR =  `Vent Mauvais`;
if (move && move.hex) move.hex.renameFR =  `Châtiment`;
if (move && move.shadowClaw) move.shadowClaw.renameFR =  `Griffe Ombre`;
if (move && move.shadowPunch) move.shadowPunch.renameFR =  `Poing Ombre`;
if (move && move.shadowBall) move.shadowBall.renameFR =  `Ball'Ombre`;
if (move && move.phantomForce) move.phantomForce.renameFR =  `Hantise`;
if (move && move.twister) move.twister.renameFR =  `Ouragan`;
if (move && move.dragonTail) move.dragonTail.renameFR =  `Draco-Queue`;
if (move && move.dualChop) move.dualChop.renameFR =  `Double Baffe`;
if (move && move.dragonBreath) move.dragonBreath.renameFR =  `Draco-Souffle`;
if (move && move.dragonClaw) move.dragonClaw.renameFR =  `Draco-Griffe`;
if (move && move.scaleShot) move.scaleShot.renameFR =  `Rafale Écailles`;
if (move && move.dragonPulse) move.dragonPulse.renameFR =  `Draco-Choc`;
if (move && move.dragonRush) move.dragonRush.renameFR =  `Draco-Charge`;
if (move && move.outrage) move.outrage.renameFR =  `Colère`;
if (move && move.dracoMeteor) move.dracoMeteor.renameFR =  `Draco-Météore`;
if (move && move.dragonDance) move.dragonDance.renameFR =  `Danse Draco`;
if (move && move.pursuit) move.pursuit.renameFR =  `Poursuite`;
if (move && move.snarl) move.snarl.renameFR =  `Aboiement`;
if (move && move.bite) move.bite.renameFR =  `Morsure`;
if (move && move.feintAttack) move.feintAttack.renameFR =  `Feinte`;
if (move && move.knockOff) move.knockOff.renameFR =  `Sabotage`;
if (move && move.crunch) move.crunch.renameFR =  `Mâchouille`;
if (move && move.darkPulse) move.darkPulse.renameFR =  `Vibrobscur`;
if (move && move.honeClaws) move.honeClaws.renameFR =  `Aiguisage`;
if (move && move.nightDaze) move.nightDaze.renameFR =  `Explonuit`;
if (move && move.nightSlash) move.nightSlash.renameFR =  `Tranche-Nuit`;
if (move && move.fakeTears) move.fakeTears.renameFR =  `Croco Larme`;
if (move && move.nastyPlot) move.nastyPlot.renameFR =  `Machination`;
if (move && move.memento) move.memento.renameFR =  `Souvenir`;
if (move && move.trickRoom) move.trickRoom.renameFR =  `Distorsion`;
if (move && move.embargo) move.embargo.renameFR =  `Embargo`;
if (move && move.brutalSwing) move.brutalSwing.renameFR =  `Centrifugifle`;
if (move && move.disarmingVoice) move.disarmingVoice.renameFR =  `Voix Enjôleuse`;
if (move && move.drainingKiss) move.drainingKiss.renameFR =  `Vampibaiser`;
if (move && move.fairyWind) move.fairyWind.renameFR =  `Vent Féérique`;
if (move && move.echoedVoice) move.echoedVoice.renameFR =  `Écho`;
if (move && move.alluringVoice) move.alluringVoice.renameFR =  `Voix Envoûtante`;
if (move && move.mirrorShrapnel) move.mirrorShrapnel.renameFR =  `Éclats de Miroir`;
if (move && move.spiritBreak) move.spiritBreak.renameFR =  `Choc Émotionnel`;
if (move && move.dazzlingGleam) move.dazzlingGleam.renameFR =  `Éclat Magique`;
if (move && move.playRough) move.playRough.renameFR =  `Câlinerie`;
if (move && move.auroraPunch) move.auroraPunch.renameFR =  `Poing Aurore`;
if (move && move.moonblast) move.moonblast.renameFR =  `Pouvoir Lunaire`;
if (move && move.babydollEyes) move.babydollEyes.renameFR =  `Regard Touchant`;
if (move && move.charm) move.charm.renameFR =  `Charme`;
if (move && move.sweetKiss) move.sweetKiss.renameFR =  `Doux Baiser`;
if (move && move.mistyTerrain) move.mistyTerrain.renameFR =  `Champ Brumeux`;
if (move && move.lightScreen) move.lightScreen.renameFR =  `Mur Lumière`;
if (move && move.magicalTorque) move.magicalTorque.renameFR =  `Moteur Magique`;
if (move && move.acupressure) move.acupressure.renameFR =  `Acupression`;
if (move && move.batonPass) move.batonPass.renameFR =  `Relais`;
if (move && move.bellyDrum) move.bellyDrum.renameFR =  `Cognobidon`;
if (move && move.boomburst) move.boomburst.renameFR =  `Bang Sonique`;
if (move && move.eggBomb) move.eggBomb.renameFR =  `Bombe Oeuf`;
if (move && move.cometPunch) move.cometPunch.renameFR =  `Poing Comète`;
if (move && move.payDay) move.payDay.renameFR =  `Jackpot`;
if (move && move.teatime) move.teatime.renameFR =  `Thérémonie`;
if (move && move.metronome) move.metronome.renameFR =  `Métronome`;
if (move && move.mimic) move.mimic.renameFR =  `Copie`;
if (move && move.meFirst) move.meFirst.renameFR =  `Moi d'Abord`;
if (move && move.burnUp) move.burnUp.renameFR =  `Flamme Ultime`;
if (move && move.magmaStorm) move.magmaStorm.renameFR =  `Vortex Magma`;
if (move && move.inferno) move.inferno.renameFR =  `Feu d'Enfer`;
if (move && move.aquaStep) move.aquaStep.renameFR =  `Danse Aquatique`;
if (move && move.hydroCannon) move.hydroCannon.renameFR =  `Hydroblast`;
if (move && move.gigatonHammer) move.gigatonHammer.renameFR =  `Marteau Mastoc`;
if (move && move.razorShell) move.razorShell.renameFR =  `Coqui-Lame`;
if (move && move.tripleDive) move.tripleDive.renameFR =  `Triple Plongée`;
if (move && move.electroBall) move.electroBall.renameFR =  `Boule Élek`;
if (move && move.charge) move.charge.renameFR =  `Chargeur`;
if (move && move.ionise) move.ionise.renameFR =  `Ionisation`;
if (move && move.appleAcid) move.appleAcid.renameFR =  `Acide Malique`;
if (move && move.chloroblast) move.chloroblast.renameFR =  `Chloroblast`;
if (move && move.frenzyPlant) move.frenzyPlant.renameFR =  `Végé-Attaque`;
if (move && move.trailblaze) move.trailblaze.renameFR =  `Désherbaffe`;
if (move && move.auraWheel) move.auraWheel.renameFR =  `Roue Libre`;
if (move && move.freezeDry) move.freezeDry.renameFR =  `Lyophilisation`;
if (move && move.snowscape) move.snowscape.renameFR =  `Chute de Neige`;
if (move && move.venoshock) move.venoshock.renameFR =  `Choc Venin`;
if (move && move.toxicThread) move.toxicThread.renameFR =  `Fil Toxique`;
if (move && move.highHorsepower) move.highHorsepower.renameFR =  `Cavalerie Lourde`;
if (move && move.blazeKick) move.blazeKick.renameFR =  `Pied Brûleur`;
if (move && move.pyroBall) move.pyroBall.renameFR =  `Ballon Brûlant`;
if (move && move.braveBird) move.braveBird.renameFR =  `Rapace`;
if (move && move.spectralThief) move.spectralThief.renameFR =  `Clepto-Mânes`;
if (move && move.snipeShot) move.snipeShot.renameFR =  `Tir de Précision`;
if (move && move.moongeistBeam) move.moongeistBeam.renameFR =  `Rayon Spectral`;
if (move && move.sunsteelStrike) move.sunsteelStrike.renameFR =  `Choc Météore`;
if (move && move.rockWrecker) move.rockWrecker.renameFR =  `Roc-Boulet`;
if (move && move.aeroblast) move.aeroblast.renameFR =  `Aéroblast`;
if (move && move.sacredFire) move.sacredFire.renameFR =  `Feu Sacré`;
if (move && move.crabhammer) move.crabhammer.renameFR =  `Pince-Masse`;
if (move && move.iceHammer) move.iceHammer.renameFR =  `Marteau de Glace`;
if (move && move.dragonDarts) move.dragonDarts.renameFR =  `Draco-Flèches`;
if (move && move.hiJumpKick) move.hiJumpKick.renameFR =  `Pied Voltige`;
if (move && move.falseSurrender) move.falseSurrender.renameFR =  `Fourbette`;
if (move && move.headCharge) move.headCharge.renameFR =  `Peignée`;
if (move && move.megahorn) move.megahorn.renameFR =  `Mégacorne`;
if (move && move.needleArm) move.needleArm.renameFR =  `Poing Dard`;
if (move && move.anchorShot) move.anchorShot.renameFR =  `Ancrage`;
if (move && move.darkestLariat) move.darkestLariat.renameFR =  `Dark Lariat`;
if (move && move.dragonEnergy) move.dragonEnergy.renameFR =  `Draco-Énergie`;
if (move && move.thunderCage) move.thunderCage.renameFR =  `Voltageôle`;
if (move && move.ruination) move.ruination.renameFR =  `Cataclysme`;
if (move && move.mindBlown) move.mindBlown.renameFR =  `Caboche-Kaboum`;
if (move && move.sparklingAria) move.sparklingAria.renameFR =  `Aria de l'Écume`;
if (move && move.floralHealing) move.floralHealing.renameFR =  `Soin Floral`;
if (move && move.revelationDance) move.revelationDance.renameFR =  `Danse Éveil`;
if (move && move.weatherBall) move.weatherBall.renameFR =  `Ball'Météo`;
if (move && move.poisonTail) move.poisonTail.renameFR =  `Queue-Poison`;
if (move && move.heatCrash) move.heatCrash.renameFR =  `Tacle Feu`;
if (move && move.chatter) move.chatter.renameFR =  `Babil`;
if (move && move.voltTackle) move.voltTackle.renameFR =  `Électacle`;
if (move && move.zingZap) move.zingZap.renameFR =  `Électrikipik`;
if (move && move.lovelyKiss) move.lovelyKiss.renameFR =  `Grobisou`;
if (move && move.crushGrip) move.crushGrip.renameFR =  `Presse`;
if (move && move.lightOfRuin) move.lightOfRuin.renameFR =  `Lumière du Néant`;
if (move && move.spacialRend) move.spacialRend.renameFR =  `Spatio-Rift`;
if (move && move.fishiousRend) move.fishiousRend.renameFR =  `Branchicrok`;
if (move && move.armorCannon) move.armorCannon.renameFR =  `Canon Blindé`;
if (move && move.bitterBlade) move.bitterBlade.renameFR =  `Lame en Peine`;
if (move && move.brutalClaw) move.brutalClaw.renameFR =  `Griffe Brutale`;
if (move && move.noRetreat) move.noRetreat.renameFR =  `Ultime Bastion`;
if (move && move.storedPower) move.storedPower.renameFR =  `Force Ajoutée`;
if (move && move.chillyReception) move.chillyReception.renameFR =  `Neigeux de Mots`;
if (move && move.camouflage) move.camouflage.renameFR =  `Camouflage`;
if (move && move.tailGlow) move.tailGlow.renameFR =  `Lumi-Queue`;
if (move && move.luminaCrash) move.luminaCrash.renameFR =  `Lumino-Impact`;
if (move && move.flyingPress) move.flyingPress.renameFR =  `Flying Press`;
if (move && move.mountainGale) move.mountainGale.renameFR =  `Bise Glaciaire`;
if (move && move.jetPunch) move.jetPunch.renameFR =  `Poing Sonique`;
if (move && move.roarOfTime) move.roarOfTime.renameFR =  `Hurle-Temps`;
if (move && move.doomDesire) move.doomDesire.renameFR =  `Vœu Destructeur`;
if (move && move.beakBlast) move.beakBlast.renameFR =  `Bec-Canon`;
if (move && move.shadowForce) move.shadowForce.renameFR =  `Revenant`;
if (move && move.blueFlare) move.blueFlare.renameFR =  `Flamme Bleue`;
if (move && move.boltStrike) move.boltStrike.renameFR =  `Charge Foudre`;
if (move && move.glaciate) move.glaciate.renameFR =  `Ère Glaciaire`;
if (move && move.howl) move.howl.renameFR =  `Grondement`;
if (move && move.lunarDance) move.lunarDance.renameFR =  `Danse Lune`;
if (move && move.aromaticMist) move.aromaticMist.renameFR =  `Brume Capiteuse`;
if (move && move.fairyLock) move.fairyLock.renameFR =  `Verrou Enchanté`;
if (move && move.electrify) move.electrify.renameFR =  `Électrisation`;
if (move && move.forestCurse) move.forestCurse.renameFR =  `Maléfice Sylvain`;
if (move && move.trickOrTreat) move.trickOrTreat.renameFR =  `Halloween`;
if (move && move.soak) move.soak.renameFR =  `Détrempage`;
if (move && move.magicPowder) move.magicPowder.renameFR =  `Poudre Magique`;
if (move && move.mudSport) move.mudSport.renameFR =  `Lance-Boue`;
if (move && move.boneRush) move.boneRush.renameFR =  `Charge Os`;
if (move && move.clamp) move.clamp.renameFR =  `Claquoir`;
if (move && move.waterShuriken) move.waterShuriken.renameFR =  `Sheauriken`;
if (move && move.barbBarrage) move.barbBarrage.renameFR =  `Multitoxik`;
if (move && move.barrage) move.barrage.renameFR =  `Pilonnage`;
if (move && move.mysticalPower) move.mysticalPower.renameFR =  `Force Mystique`;
if (move && move.psyshieldBash) move.psyshieldBash.renameFR =  `Sprint Bouclier`;
if (move && move.sketch) move.sketch.renameFR =  `Gribouille`;
if (move && move.prismaticLaser) move.prismaticLaser.renameFR =  `Laser Prisme`;
if (move && move.lusterPurge) move.lusterPurge.renameFR =  `Lumi-Éclat`;
if (move && move.mistBall) move.mistBall.renameFR =  `Ball'Brume`;
if (move && move.dynamicPunch) move.dynamicPunch.renameFR =  `Dynamo-Poing`;
if (move && move.thunderousKick) move.thunderousKick.renameFR =  `Coup Fulgurant`;
if (move && move.fieryWrath) move.fieryWrath.renameFR =  `Fureur Ardente`;
if (move && move.freezingGlare) move.freezingGlare.renameFR =  `Regard Glaçant`;
if (move && move.meteorAssault) move.meteorAssault.renameFR =  `Joute Astrale`;
if (move && move.cottonGuard) move.cottonGuard.renameFR =  `Cotogarde`;
if (move && move.kingsShield) move.kingsShield.renameFR =  `Bouclier Royal`;
if (move && move.drumBeating) move.drumBeating.renameFR =  `Tambour Battant`;
if (move && move.tropKick) move.tropKick.renameFR =  `Botte Sucrette`;
if (move && move.fireLash) move.fireLash.renameFR =  `Fouet de Feu`;
if (move && move.clangingScales) move.clangingScales.renameFR =  `Vibrécaille`;
if (move && move.shiftGear) move.shiftGear.renameFR =  `Chgt Vitesse`;
if (move && move.kinesis) move.kinesis.renameFR =  `Télékinésie`;
if (move && move.gearUp) move.gearUp.renameFR =  `Engrenage`;
if (move && move.relicSong) move.relicSong.renameFR =  `Chant Antique`;
if (move && move.zapCannon) move.zapCannon.renameFR =  `Élecanon`;
if (move && move.triAttack) move.triAttack.renameFR =  `Triplattaque`;
if (move && move.judgment) move.judgment.renameFR =  `Jugement`;
if (move && move.rageFist) move.rageFist.renameFR =  `Poing de Colère`;
if (move && move.iceBall) move.iceBall.renameFR =  `Ball'Glace`;
if (move && move.tripleAxel) move.tripleAxel.renameFR =  `Triple Axel`;
if (move && move.attackOrder) move.attackOrder.renameFR =  `Appel Attaque`;
if (move && move.populationBomb) move.populationBomb.renameFR =  `Prolifération`;
if (move && move.nobleRoar) move.nobleRoar.renameFR =  `Râle Mâle`;
if (move && move.hyperDrill) move.hyperDrill.renameFR =  `Hyperceuse`;
if (move && move.fieryDance) move.fieryDance.renameFR =  `Danse du Feu`;
if (move && move.torchSong) move.torchSong.renameFR =  `Chant Flamboyant`;
if (move && move.seedFlare) move.seedFlare.renameFR =  `Fulmigraine`;
if (move && move.vCreate) move.vCreate.renameFR =  `Coup Victoire`;
if (move && move.dragonAscent) move.dragonAscent.renameFR =  `Draco-Ascension`;
if (move && move.mysticalFire) move.mysticalFire.renameFR =  `Feu Ensorcelé`;
if (move && move.headlongRush) move.headlongRush.renameFR =  `Assaut Frontal`;
if (move && move.sandsearStorm) move.sandsearStorm.renameFR =  `Typhon Pyrosable`;
if (move && move.splash) move.splash.renameFR =  `Trempette`;
if (move && move.conversion) move.conversion.renameFR =  `Conversion`;
if (move && move.flameBurst) move.flameBurst.renameFR =  `Rebondifeu`;
if (move && move.morningSun) move.morningSun.renameFR =  `Aurore`;

// From scripts/itemDictionary.js
if (item && item.blackBelt) item.blackBelt.renameFR =  `Ceinture Noire`;
if (item && item.blackGlasses) item.blackGlasses.renameFR =  `Lunettes Noires`;
if (item && item.charcoal) item.charcoal.renameFR =  `Charbon`;
if (item && item.dragonFang) item.dragonFang.renameFR =  `Croc Dragon`;
if (item && item.fairyFeather) item.fairyFeather.renameFR =  `Plume Enchantée`;
if (item && item.hardStone) item.hardStone.renameFR =  `Pierre Dure`;
if (item && item.magnet) item.magnet.renameFR =  `Aimant`;
if (item && item.metalCoat) item.metalCoat.renameFR =  `Peau Métal`;
if (item && item.miracleSeed) item.miracleSeed.renameFR =  `Graine Miracle`;
if (item && item.mysticWater) item.mysticWater.renameFR =  `Eau Mystique`;
if (item && item.neverMeltIce) item.neverMeltIce.renameFR =  `Glace Éternelle`;
if (item && item.poisonBarb) item.poisonBarb.renameFR =  `Pic Venin`;
if (item && item.sharpBeak) item.sharpBeak.renameFR =  `Bec Pointu`;
if (item && item.silkScarf) item.silkScarf.renameFR =  `Mouchoir Soie`;
if (item && item.silverPowder) item.silverPowder.renameFR =  `Poudre Argentée`;
if (item && item.softSand) item.softSand.renameFR =  `Sable Doux`;
if (item && item.spellTag) item.spellTag.renameFR =  `Rune Sort`;
if (item && item.twistedSpoon) item.twistedSpoon.renameFR =  `Cuillère Tordue`;
if (item && item.eviolite) item.eviolite.renameFR =  `Évoluroc`;
if (item && item.lightClay) item.lightClay.renameFR =  `Lumargile`;
if (item && item.mentalHerb) item.mentalHerb.renameFR =  `Herbe Mental`;
if (item && item.flameOrb) item.flameOrb.renameFR =  `Orbe Flamme`;
if (item && item.toxicOrb) item.toxicOrb.renameFR =  `Orbe Toxique`;
if (item && item.choiceBand) item.choiceBand.renameFR =  `Bandeau Choix`;
if (item && item.choiceSpecs) item.choiceSpecs.renameFR =  `Lunettes Choix`;
if (item && item.lifeOrb) item.lifeOrb.renameFR =  `Orbe Vie`;
if (item && item.assaultVest) item.assaultVest.renameFR =  `Veste de Combat`;
if (item && item.clearAmulet) item.clearAmulet.renameFR =  `Amulette Purifiante`;
if (item && item.ejectPack) item.ejectPack.renameFR =  `Sac Fuite`;
if (item && item.ejectButton) item.ejectButton.renameFR =  `Bouton Fuite`;
if (item && item.quickClaw) item.quickClaw.renameFR =  `Vive Griffe`;
if (item && item.loadedDice) item.loadedDice.renameFR =  `Dés Pipés`;
if (item && item.metronome) item.metronome.renameFR =  `Métronome`;
if (item && item.powerHerb) item.powerHerb.renameFR =  `Herbe Pouvoir`;
if (item && item.luckyPunch) item.luckyPunch.renameFR =  `Poing Chance`;
if (item && item.laggingTail) item.laggingTail.renameFR =  `Ralentiqueue`;
if (item && item.weaknessPolicy) item.weaknessPolicy.renameFR =  `Vulné-Assurance`;
if (item && item.heavyDutyBoots) item.heavyDutyBoots.renameFR =  `Grosses Bottes`;
if (item && item.leftovers) item.leftovers.renameFR =  `Restes`;
if (item && item.bugGem) item.bugGem.renameFR =  `Joyau Insecte`;
if (item && item.darkGem) item.darkGem.renameFR =  `Joyau Ténèbres`;
if (item && item.dragonGem) item.dragonGem.renameFR =  `Joyau Dragon`;
if (item && item.electricGem) item.electricGem.renameFR =  `Joyau Électrik`;
if (item && item.fairyGem) item.fairyGem.renameFR =  `Joyau Fée`;
if (item && item.fightingGem) item.fightingGem.renameFR =  `Joyau Combat`;
if (item && item.fireGem) item.fireGem.renameFR =  `Joyau Feu`;
if (item && item.flyingGem) item.flyingGem.renameFR =  `Joyau Vol`;
if (item && item.ghostGem) item.ghostGem.renameFR =  `Joyau Spectre`;
if (item && item.grassGem) item.grassGem.renameFR =  `Joyau Plante`;
if (item && item.groundGem) item.groundGem.renameFR =  `Joyau Sol`;
if (item && item.iceGem) item.iceGem.renameFR =  `Joyau Glace`;
if (item && item.normalGem) item.normalGem.renameFR =  `Joyau Normal`;
if (item && item.poisonGem) item.poisonGem.renameFR =  `Joyau Poison`;
if (item && item.psychicGem) item.psychicGem.renameFR =  `Joyau Psy`;
if (item && item.rockGem) item.rockGem.renameFR =  `Joyau Roche`;
if (item && item.steelGem) item.steelGem.renameFR =  `Joyau Acier`;
if (item && item.waterGem) item.waterGem.renameFR =  `Joyau Eau`;
if (item && item.luckIncense) item.luckIncense.renameFR =  `Encens Veine`;
if (item && item.pureIncense) item.pureIncense.renameFR =  `Encens Pur`;
if (item && item.luckyEgg) item.luckyEgg.renameFR =  `Oeuf Chance`;
if (item && item.shinyCharm) item.shinyCharm.renameFR =  `Charme Chroma`;
if (item && item.occaBerry) item.occaBerry.renameFR =  `Baie Chocco`;
if (item && item.passhoBerry) item.passhoBerry.renameFR =  `Baie Pocpoc`;
if (item && item.wacanBerry) item.wacanBerry.renameFR =  `Baie Parma`;
if (item && item.rindoBerry) item.rindoBerry.renameFR =  `Baie Ratam`;
if (item && item.yacheBerry) item.yacheBerry.renameFR =  `Baie Nanone`;
if (item && item.chopleBerry) item.chopleBerry.renameFR =  `Baie Pomroz`;
if (item && item.kebiaBerry) item.kebiaBerry.renameFR =  `Baie Kébia`;
if (item && item.shucaBerry) item.shucaBerry.renameFR =  `Baie Jouca`;
if (item && item.cobaBerry) item.cobaBerry.renameFR =  `Baie Cobaba`;
if (item && item.payapaBerry) item.payapaBerry.renameFR =  `Baie Yapap`;
if (item && item.tangaBerry) item.tangaBerry.renameFR =  `Baie Panga`;
if (item && item.chartiBerry) item.chartiBerry.renameFR =  `Baie Charti`;
if (item && item.kasibBerry) item.kasibBerry.renameFR =  `Baie Sédra`;
if (item && item.habanBerry) item.habanBerry.renameFR =  `Baie Fraigo`;
if (item && item.colburBerry) item.colburBerry.renameFR =  `Baie Lampou`;
if (item && item.babiriBerry) item.babiriBerry.renameFR =  `Baie Babiri`;
if (item && item.roseliBerry) item.roseliBerry.renameFR =  `Baie Selro`;
if (item && item.terrainExtender) item.terrainExtender.renameFR =  `Champ'Duit`;
if (item && item.dampRock) item.dampRock.renameFR =  `Roche Humide`;
if (item && item.heatRock) item.heatRock.renameFR =  `Roche Chaude`;
if (item && item.icyRock) item.icyRock.renameFR =  `Roche Glace`;
if (item && item.smoothRock) item.smoothRock.renameFR =  `Roche Lisse`;
if (item && item.electricSeed) item.electricSeed.renameFR =  `Graine Électrik`;
if (item && item.grassySeed) item.grassySeed.renameFR =  `Graine Herbe`;
if (item && item.mistySeed) item.mistySeed.renameFR =  `Graine Brume`;
if (item && item.foggySeed) item.foggySeed.renameFR =  `Graine Brumeuse`;
if (item && item.bottleCap) item.bottleCap.renameFR =  `Capsule d'Argent`;
if (item && item.goldenBottleCap) item.goldenBottleCap.renameFR =  `Capsule d'Or`;
if (item && item.timeCandy) item.timeCandy.renameFR =  `Bonbon Temps`;
if (item && item.timeCandyXL) item.timeCandyXL.renameFR =  `Bonbon Temps XL`;
if (item && item.festivalTicket) item.festivalTicket.renameFR =  `Festicket`;
if (item && item.rareCandy) item.rareCandy.renameFR =  `Super Bonbon`;
if (item && item.abilityPatch) item.abilityPatch.renameFR =  `Patch Talent`;
if (item && item.abilityCapsule) item.abilityCapsule.renameFR =  `Pilule Talent`;
if (item && item.heartScale) item.heartScale.renameFR =  `Écaille Cœur`;
if (item && item.energyRoot) item.energyRoot.renameFR =  `Racinénergie`;
if (item && item.fashionCase) item.fashionCase.renameFR =  `Coffret Mode`;
if (item && item.neutralMint) item.neutralMint.renameFR =  `Menthe Neutre`;
if (item && item.autoRefightTicket) item.autoRefightTicket.renameFR =  `Ticket Recombat Auto`;
if (item && item.yellowApricorn) item.yellowApricorn.renameFR =  `Noigrume Jaune`;
if (item && item.pinkApricorn) item.pinkApricorn.renameFR =  `Noigrume Rose`;
if (item && item.greenApricorn) item.greenApricorn.renameFR =  `Noigrume Vert`;
if (item && item.whiteApricorn) item.whiteApricorn.renameFR =  `Noigrume Blanc`;
if (item && item.blackApricorn) item.blackApricorn.renameFR =  `Noigrume Noir`;
if (item && item.megaShard) item.megaShard.renameFR =  `Éclat Méga`;
if (item && item.megaPiece) item.megaPiece.renameFR =  `Fragment Méga`;
if (item && item.megaChunk) item.megaChunk.renameFR =  `Morceau Méga`;
if (item && item.megaCluster) item.megaCluster.renameFR =  `Amas Méga`;
if (item && item.primalEarth) item.primalEarth.renameFR =  `Terre Primale`;
if (item && item.thunderousRock) item.thunderousRock.renameFR =  `Roche Foudroyante`;
if (item && item.articRock) item.articRock.renameFR =  `Roche Arctique`;
if (item && item.ancientOrchid) item.ancientOrchid.renameFR =  `Orchidée Ancienne`;
if (item && item.futureDisk) item.futureDisk.renameFR =  `Disque Futur`;
if (item && item.ancientKeystone) item.ancientKeystone.renameFR =  `Clé Ancienne`;
if (item && item.steelKeystone) item.steelKeystone.renameFR =  `Clé Acier`;
if (item && item.frozenKeystone) item.frozenKeystone.renameFR =  `Clé Gelée`;
if (item && item.aetherKeycard) item.aetherKeycard.renameFR =  `Carte Aether`;
if (item && item.wormholeResidue) item.wormholeResidue.renameFR =  `Résidu de Trou de Ver`;
if (item && item.futureContraption) item.futureContraption.renameFR =  `Machinerie Future`;
if (item && item.redChain) item.redChain.renameFR =  `Chaîne Rouge`;
if (item && item.wisdomPetal) item.wisdomPetal.renameFR =  `Pétale de Sagesse`;
if (item && item.epochFeather) item.epochFeather.renameFR =  `Plume d'Époque`;
if (item && item.pokeflute) item.pokeflute.renameFR =  `Poké Flûte`;
if (item && item.oldGateau) item.oldGateau.renameFR =  `Vieux Gâteau`;
if (item && item.hpUp) item.hpUp.renameFR =  `PV Plus`;
if (item && item.protein) item.protein.renameFR =  `Protéine`;
if (item && item.iron) item.iron.renameFR =  `Fer`;
if (item && item.calcium) item.calcium.renameFR =  `Calcium`;
if (item && item.zinc) item.zinc.renameFR =  `Zinc`;
if (item && item.carbos) item.carbos.renameFR =  `Carbone`;
if (item && item.waterStone) item.waterStone.renameFR =  `Pierre Eau`;
if (item && item.thunderStone) item.thunderStone.renameFR =  `Pierre Foudre`;
if (item && item.sunStone) item.sunStone.renameFR =  `Pierre Soleil`;
if (item && item.linkStone) item.linkStone.renameFR =  `Pierre Lien`;
if (item && item.ovalStone) item.ovalStone.renameFR =  `Pierre Ovale`;
if (item && item.moonStone) item.moonStone.renameFR =  `Pierre Lune`;
if (item && item.leafStone) item.leafStone.renameFR =  `Pierre Plante`;
if (item && item.iceStone) item.iceStone.renameFR =  `Pierre Glace`;
if (item && item.fireStone) item.fireStone.renameFR =  `Pierre Feu`;
if (item && item.duskStone) item.duskStone.renameFR =  `Pierre Nuit`;
if (item && item.dawnStone) item.dawnStone.renameFR =  `Pierre Aube`;
if (item && item.shinyStone) item.shinyStone.renameFR =  `Pierre Éclat`;
if (item && item.oddRock) item.oddRock.renameFR =  `Roche Étrange`;
if (item && item.everstone) item.everstone.renameFR =  `Pierre Stase`;
if (item && item.powerAnklet) item.powerAnklet.renameFR =  `Chaîne Pouvoir`;
if (item && item.powerBand) item.powerBand.renameFR =  `Bandeau Pouvoir`;
if (item && item.powerBelt) item.powerBelt.renameFR =  `Ceinture Pouvoir`;
if (item && item.powerBracer) item.powerBracer.renameFR =  `Poignet Pouvoir`;
if (item && item.powerLens) item.powerLens.renameFR =  `Lentille Pouvoir`;
if (item && item.powerWeight) item.powerWeight.renameFR =  `Poids Pouvoir`;
if (item && item.machoBrace) item.machoBrace.renameFR =  `Bracelet Macho`;
if (item && item.lockCapsule) item.lockCapsule.renameFR =  `Capsule Lock`;
if (item && item.destinyKnot) item.destinyKnot.renameFR =  `Nœud Destin`;
if (item && item.abomasite) item.abomasite.renameFR =  `Blizzarite`;
if (item && item.absolite) item.absolite.renameFR =  `Absolite`;
if (item && item.aerodactylite) item.aerodactylite.renameFR =  `Ptéraïte`;
if (item && item.aggronite) item.aggronite.renameFR =  `Galekingite`;
if (item && item.alakazite) item.alakazite.renameFR =  `Alakazamite`;
if (item && item.altarianite) item.altarianite.renameFR =  `Altarite`;
if (item && item.ampharosite) item.ampharosite.renameFR =  `Pharampite`;
if (item && item.audinite) item.audinite.renameFR =  `Nanméouïte`;
if (item && item.banettite) item.banettite.renameFR =  `Branettite`;
if (item && item.barbaracite) item.barbaracite.renameFR =  `Barbaracite`;
if (item && item.baxcaliburite) item.baxcaliburite.renameFR =  `Bekaglaçonite`;
if (item && item.beedrillite) item.beedrillite.renameFR =  `Dardargnite`;
if (item && item.blastoisinite) item.blastoisinite.renameFR =  `Tortankite`;
if (item && item.blazikenite) item.blazikenite.renameFR =  `Braségalite`;
if (item && item.cameruptite) item.cameruptite.renameFR =  `Caméruptite`;
if (item && item.charizarditeX) item.charizarditeX.renameFR =  `Dracaufite X`;
if (item && item.charizarditeY) item.charizarditeY.renameFR =  `Dracaufite Y`;
if (item && item.diancite) item.diancite.renameFR =  `Diancite`;
if (item && item.dragonitite) item.dragonitite.renameFR =  `Dracolitite`;
if (item && item.falinksite) item.falinksite.renameFR =  `Hexadronite`;
if (item && item.galladite) item.galladite.renameFR =  `Gallamite`;
if (item && item.garchompite) item.garchompite.renameFR =  `Carchacrokite`;
if (item && item.glalitite) item.glalitite.renameFR =  `Oniglalite`;
if (item && item.gardevoirite) item.gardevoirite.renameFR =  `Gardevoirite`;
if (item && item.gengarite) item.gengarite.renameFR =  `Ectoplasmite`;
if (item && item.gyaradosite) item.gyaradosite.renameFR =  `Léviatorite`;
if (item && item.heracronite) item.heracronite.renameFR =  `Scarhinoïte`;
if (item && item.houndoominite) item.houndoominite.renameFR =  `Démolossite`;
if (item && item.hawluchanite) item.hawluchanite.renameFR =  `Brutalibrite`;
if (item && item.kangaskhanite) item.kangaskhanite.renameFR =  `Kangourexite`;
if (item && item.lopunnite) item.lopunnite.renameFR =  `Lockpinite`;
if (item && item.lucarionite) item.lucarionite.renameFR =  `Lucarite`;
if (item && item.manectite) item.manectite.renameFR =  `Élecsprintite`;
if (item && item.mawilite) item.mawilite.renameFR =  `Mysdibulite`;
if (item && item.medichamite) item.medichamite.renameFR =  `Charminite`;
if (item && item.metagrossite) item.metagrossite.renameFR =  `Métalossite`;
if (item && item.mewtwoniteX) item.mewtwoniteX.renameFR =  `Mewtwoïte X`;
if (item && item.mewtwoniteY) item.mewtwoniteY.renameFR =  `Mewtwoïte Y`;
if (item && item.pidgeotite) item.pidgeotite.renameFR =  `Roucarnagite`;
if (item && item.pyroarite) item.pyroarite.renameFR =  `Néméliosite`;
if (item && item.pinsirite) item.pinsirite.renameFR =  `Scarabruite`;
if (item && item.raichutiteX) item.raichutiteX.renameFR =  `Raichite X`;
if (item && item.raichutiteY) item.raichutiteY.renameFR =  `Raichite Y`;
if (item && item.sablenite) item.sablenite.renameFR =  `Ténéfixite`;
if (item && item.salamencite) item.salamencite.renameFR =  `Drattakite`;
if (item && item.sceptilite) item.sceptilite.renameFR =  `Jungkite`;
if (item && item.scizorite) item.scizorite.renameFR =  `Cizayoxite`;
if (item && item.sharpedonite) item.sharpedonite.renameFR =  `Sharpedite`;
if (item && item.slowbronite) item.slowbronite.renameFR =  `Flagadossite`;
if (item && item.steelixite) item.steelixite.renameFR =  `Steelixite`;
if (item && item.swampertite) item.swampertite.renameFR =  `Laggronite`;
if (item && item.tyranitarite) item.tyranitarite.renameFR =  `Tyranocivite`;
if (item && item.venusaurite) item.venusaurite.renameFR =  `Florizarrite`;
if (item && item.magazineSubscription) item.magazineSubscription.renameFR =  `Abonnement Magazine`;
if (item && item.battlePass) item.battlePass.renameFR =  `Pass de Combat`;
if (item && item.replicatorUpgradeS) item.replicatorUpgradeS.renameFR =  `Amélioration Réplicateur S`;
if (item && item.replicatorUpgradeE) item.replicatorUpgradeE.renameFR =  `Amélioration Réplicateur E`;
if (item && item.mysteryEgg) item.mysteryEgg.renameFR =  `Oeuf Mystère`;
if (item && item.tmDummy) item.tmDummy.renameFR =  `CT Factice`;
if (item && item.nothing) item.nothing.renameFR =  `Rien`;
if (item && item.buginiumZ) item.buginiumZ.renameFR =  `Insectozélite`;
if (item && item.darkiniumZ) item.darkiniumZ.renameFR =  `Ténébrozélite`;
if (item && item.dragoniumZ) item.dragoniumZ.renameFR =  `Dracozélite`;
if (item && item.electriumZ) item.electriumZ.renameFR =  `Voltazélite`;
if (item && item.fairiumZ) item.fairiumZ.renameFR =  `Nymphézélite`;
if (item && item.fightiniumZ) item.fightiniumZ.renameFR =  `Combazélite`;
if (item && item.firiumZ) item.firiumZ.renameFR =  `Pyrozélite`;
if (item && item.flyiniumZ) item.flyiniumZ.renameFR =  `Aérozélite`;
if (item && item.ghostiumZ) item.ghostiumZ.renameFR =  `Spectrozélite`;
if (item && item.grassiumZ) item.grassiumZ.renameFR =  `Florazélite`;
if (item && item.groundiumZ) item.groundiumZ.renameFR =  `Terrazélite`;
if (item && item.iciumZ) item.iciumZ.renameFR =  `Cryozélite`;
if (item && item.normaliumZ) item.normaliumZ.renameFR =  `Normazélite`;
if (item && item.poisoniumZ) item.poisoniumZ.renameFR =  `Toxizélite`;
if (item && item.psychiumZ) item.psychiumZ.renameFR =  `Psychézélite`;
if (item && item.rockiumZ) item.rockiumZ.renameFR =  `Rocazélite`;
if (item && item.steeliumZ) item.steeliumZ.renameFR =  `Métallozélite`;
if (item && item.wateriumZ) item.wateriumZ.renameFR =  `Aquazélite`;
if (item && item.quickAttackTm) item.quickAttackTm.renameFR =  `CT Vive-Attaque`;
if (item && item.swiftTm) item.swiftTm.renameFR =  `CT Météores`;
if (item && item.strengthTm) item.strengthTm.renameFR =  `CT Force`;
if (item && item.emberTm) item.emberTm.renameFR =  `CT Flammèche`;
if (item && item.incinerateTm) item.incinerateTm.renameFR =  `CT Calcination`;
if (item && item.flamethrowerTm) item.flamethrowerTm.renameFR =  `CT Lance-Flammes`;
if (item && item.nuzzleTm) item.nuzzleTm.renameFR =  `CT Frotte-Frimousse`;
if (item && item.thunderPunchTm) item.thunderPunchTm.renameFR =  `CT Poing Éclair`;
if (item && item.thunderboltTm) item.thunderboltTm.renameFR =  `CT Tonnerre`;
if (item && item.mudSlapTm) item.mudSlapTm.renameFR =  `CT Coud'Boue`;
if (item && item.bulldozeTm) item.bulldozeTm.renameFR =  `CT Piétisol`;
if (item && item.earthquakeTm) item.earthquakeTm.renameFR =  `CT Séisme`;
if (item && item.bulletPunchTm) item.bulletPunchTm.renameFR =  `CT Pisto-Poing`;
if (item && item.metalClawTm) item.metalClawTm.renameFR =  `CT Griffe Acier`;
if (item && item.flashCannonTm) item.flashCannonTm.renameFR =  `CT Luminocanon`;
if (item && item.peckTm) item.peckTm.renameFR =  `CT Picpic`;
if (item && item.acrobaticsTm) item.acrobaticsTm.renameFR =  `CT Acrobatie`;
if (item && item.flyTm) item.flyTm.renameFR =  `CT Vol`;
if (item && item.acidTm) item.acidTm.renameFR =  `CT Acide`;
if (item && item.crossPoisonTm) item.crossPoisonTm.renameFR =  `CT Poison Croix`;
if (item && item.sludgeBombTm) item.sludgeBombTm.renameFR =  `CT Bombe Beurk`;
if (item && item.iceShardTm) item.iceShardTm.renameFR =  `CT Éclats Glace`;
if (item && item.avalancheTm) item.avalancheTm.renameFR =  `CT Avalanche`;
if (item && item.iceBeamTm) item.iceBeamTm.renameFR =  `CT Laser Glace`;
if (item && item.twineedleTm) item.twineedleTm.renameFR =  `CT Double Dard`;
if (item && item.bugBiteTm) item.bugBiteTm.renameFR =  `CT Piqûre`;
if (item && item.bugBuzzTm) item.bugBuzzTm.renameFR =  `CT Bourdon`;
if (item && item.waterGunTm) item.waterGunTm.renameFR =  `CT Pistolet à O`;
if (item && item.waterPulseTm) item.waterPulseTm.renameFR =  `CT Vibraqua`;
if (item && item.aquaTailTm) item.aquaTailTm.renameFR =  `CT Hydro-Queue`;
if (item && item.leafageTm) item.leafageTm.renameFR =  `CT Feuillage`;
if (item && item.magicalLeafTm) item.magicalLeafTm.renameFR =  `CT Feuille Magik`;
if (item && item.leafBladeTm) item.leafBladeTm.renameFR =  `CT Lame Feuille`;
if (item && item.rockSmashTm) item.rockSmashTm.renameFR =  `CT Éclate-Roc`;
if (item && item.forcePalmTm) item.forcePalmTm.renameFR =  `CT Forte-Paume`;
if (item && item.auraSphereTm) item.auraSphereTm.renameFR =  `CT Aurasphère`;
if (item && item.confusionTm) item.confusionTm.renameFR =  `CT Choc Mental`;
if (item && item.psychoCutTm) item.psychoCutTm.renameFR =  `CT Coupe Psycho`;
if (item && item.psychicTm) item.psychicTm.renameFR =  `CT Psyko`;
if (item && item.rockThrowTm) item.rockThrowTm.renameFR =  `CT Jet-Pierres`;
if (item && item.rockSlideTm) item.rockSlideTm.renameFR =  `CT Éboulement`;
if (item && item.powerGemTm) item.powerGemTm.renameFR =  `CT Rayon Gemme`;
if (item && item.lickTm) item.lickTm.renameFR =  `CT Léchouille`;
if (item && item.hexTm) item.hexTm.renameFR =  `CT Châtiment`;
if (item && item.shadowBallTm) item.shadowBallTm.renameFR =  `CT Ball'Ombre`;
if (item && item.twisterTm) item.twisterTm.renameFR =  `CT Ouragan`;
if (item && item.dragonTailTm) item.dragonTailTm.renameFR =  `CT Draco-Queue`;
if (item && item.dragonRushTm) item.dragonRushTm.renameFR =  `CT Draco-Charge`;
if (item && item.dragonPulseTm) item.dragonPulseTm.renameFR =  `CT Draco-Choc`;
if (item && item.pursuitTm) item.pursuitTm.renameFR =  `CT Poursuite`;
if (item && item.biteTm) item.biteTm.renameFR =  `CT Morsure`;
if (item && item.darkPulseTm) item.darkPulseTm.renameFR =  `CT Vibrobscur`;
if (item && item.disarmingVoiceTm) item.disarmingVoiceTm.renameFR =  `CT Voix Enjôleuse`;
if (item && item.dazzlingGleamTm) item.dazzlingGleamTm.renameFR =  `CT Éclat Magique`;
if (item && item.playRoughTm) item.playRoughTm.renameFR =  `CT Câlinerie`;
if (item && item.tackleTm) item.tackleTm.renameFR =  `CT Charge`;
if (item && item.quickAttackTm) item.quickAttackTm.renameFR =  `CT Vive-Attaque`;
if (item && item.leerTm) item.leerTm.renameFR =  `CT Groz'Yeux`;
if (item && item.bulkUpTm) item.bulkUpTm.renameFR =  `CT Gonflette`;
if (item && item.thunderWaveTm) item.thunderWaveTm.renameFR =  `CT Cage Éclair`;
if (item && item.toxicTm) item.toxicTm.renameFR =  `CT Toxik`;
if (item && item.willOWispTm) item.willOWispTm.renameFR =  `CT Feu Follet`;
if (item && item.calmMindTm) item.calmMindTm.renameFR =  `CT Plénitude`;
if (item && item.sunnyDayTm) item.sunnyDayTm.renameFR =  `CT Zénith`;
if (item && item.rainDanceTm) item.rainDanceTm.renameFR =  `CT Danse Pluie`;
if (item && item.crunchTm) item.crunchTm.renameFR =  `CT Mâchouille`;
if (item && item.xScissorTm) item.xScissorTm.renameFR =  `CT Plaie Croix`;
if (item && item.moonblastTm) item.moonblastTm.renameFR =  `CT Pouvoir Lunaire`;
if (item && item.fireBlastTm) item.fireBlastTm.renameFR =  `CT Déflagration`;
if (item && item.hydroPumpTm) item.hydroPumpTm.renameFR =  `CT Hydrocanon`;
if (item && item.thunderTm) item.thunderTm.renameFR =  `CT Fatal-Foudre`;
if (item && item.hyperBeamTm) item.hyperBeamTm.renameFR =  `CT Ultralaser`;
if (item && item.swaggerTm) item.swaggerTm.renameFR =  `CT Vantardise`;
if (item && item.ironDefenseTm) item.ironDefenseTm.renameFR =  `CT Mur de Fer`;
if (item && item.feintAttackTm) item.feintAttackTm.renameFR =  `CT Feinte`;
if (item && item.chillingWaterTm) item.chillingWaterTm.renameFR =  `CT Écosurf`;
if (item && item.silverWindTm) item.silverWindTm.renameFR =  `CT Vent Argenté`;
if (item && item.avalancheTm) item.avalancheTm.renameFR =  `CT Avalanche`;
if (item && item.knockOffTm) item.knockOffTm.renameFR =  `CT Sabotage`;
if (item && item.ominousWindTm) item.ominousWindTm.renameFR =  `CT Vent Mauvais`;
if (item && item.flameChargeTm) item.flameChargeTm.renameFR =  `CT Nitrocharge`;
if (item && item.acidSprayTm) item.acidSprayTm.renameFR =  `CT Bombe Acide`;
if (item && item.hailTm) item.hailTm.renameFR =  `CT Grêle`;
if (item && item.fogTm) item.fogTm.renameFR =  `CT Brouillard`;
if (item && item.sandstormTm) item.sandstormTm.renameFR =  `CT Tempête de Sable`;
if (item && item.electricTerrainTm) item.electricTerrainTm.renameFR =  `CT Champ Électrifié`;
if (item && item.mistyTerrainTm) item.mistyTerrainTm.renameFR =  `CT Champ Brumeux`;
if (item && item.grassyTerrainTm) item.grassyTerrainTm.renameFR =  `CT Champ Herbu`;
if (item && item.nastyPlotTm) item.nastyPlotTm.renameFR =  `CT Machination`;
if (item && item.swordsDanceTm) item.swordsDanceTm.renameFR =  `CT Danse Lames`;
if (item && item.voltSwitchTm) item.voltSwitchTm.renameFR =  `CT Change Éclair`;
if (item && item.uTurnTm) item.uTurnTm.renameFR =  `CT Demi-Tour`;
if (item && item.chargeBeamTm) item.chargeBeamTm.renameFR =  `CT Rayon Chargé`;
if (item && item.dischargeTm) item.dischargeTm.renameFR =  `CT Coup d'Jus`;
if (item && item.scorchingSandsTm) item.scorchingSandsTm.renameFR =  `CT Sable Ardent`;
if (item && item.airShlashTm) item.airShlashTm.renameFR =  `CT Tranch'Air`;
if (item && item.poisonJabTm) item.poisonJabTm.renameFR =  `CT Direct Toxik`;
if (item && item.liquidationTm) item.liquidationTm.renameFR =  `CT Aqua-Brèche`;
if (item && item.energyBallTm) item.energyBallTm.renameFR =  `CT Éco-Sphère`;
if (item && item.skyUppercutTm) item.skyUppercutTm.renameFR =  `CT Stratopercut`;
if (item && item.dracoMeteorTm) item.dracoMeteorTm.renameFR =  `CT Draco-Météore`;
if (item && item.spiritBreakTm) item.spiritBreakTm.renameFR =  `CT Choc Émotionnel`;
if (item && item.trickRoomTm) item.trickRoomTm.renameFR =  `CT Distorsion`;
if (item && item.crossRoomTm) item.crossRoomTm.renameFR =  `CT Salle Croisée`;
if (item && item.weirdRoomTm) item.weirdRoomTm.renameFR =  `CT Zone Étrange`;
if (item && item.safeguardTm) item.safeguardTm.renameFR =  `CT Rune Protect`;
if (item && item.lightScreenTm) item.lightScreenTm.renameFR =  `CT Mur Lumière`;
if (item && item.hydratationMemory) item.hydratationMemory.renameFR =  `Mémoire Hydratation`;
if (item && item.sandVeilMemory) item.sandVeilMemory.renameFR =  `Mémoire Voile Sable`;
if (item && item.snowCloakMemory) item.snowCloakMemory.renameFR =  `Mémoire Cape Neige`;
if (item && item.marvelScaleMemory) item.marvelScaleMemory.renameFR =  `Mémoire Écaille Spéciale`;
if (item && item.livingShieldMemory) item.livingShieldMemory.renameFR =  `Mémoire Bouclier Vivant`;
if (item && item.bigPecksMemory) item.bigPecksMemory.renameFR =  `Mémoire Cœur de Coq`;
if (item && item.hyperCutterMemory) item.hyperCutterMemory.renameFR =  `Mémoire Hyper Cutter`;
if (item && item.synchronizeMemory) item.synchronizeMemory.renameFR =  `Mémoire Synchro`;
if (item && item.iceBodyMemory) item.iceBodyMemory.renameFR =  `Mémoire Corps Gel`;
if (item && item.rainDishMemory) item.rainDishMemory.renameFR =  `Mémoire Cuvette Pluie`;
if (item && item.solarPowerMemory) item.solarPowerMemory.renameFR =  `Mémoire Force Soleil`;
if (item && item.sandForceMemory) item.sandForceMemory.renameFR =  `Mémoire Force Sable`;
if (item && item.scrappyMemory) item.scrappyMemory.renameFR =  `Mémoire Querelleur`;
if (item && item.strongJawMemory) item.strongJawMemory.renameFR =  `Mémoire Prognathe`;
if (item && item.toughClawsMemory) item.toughClawsMemory.renameFR =  `Mémoire Griffe Dure`;
if (item && item.ironFistMemory) item.ironFistMemory.renameFR =  `Mémoire Poing de Fer`;
if (item && item.magicGuardMemory) item.magicGuardMemory.renameFR =  `Mémoire Garde Magik`;
if (item && item.pickPocketMemory) item.pickPocketMemory.renameFR =  `Mémoire Pickpocket`;
if (item && item.blueBarrette) item.blueBarrette.renameFR =  `Barrette Bleue`;
if (item && item.pinkBarrette) item.pinkBarrette.renameFR =  `Barrette Rose`;
if (item && item.greenBarrette) item.greenBarrette.renameFR =  `Barrette Verte`;
if (item && item.blueBarrette) item.blueBarrette.renameFR =  `Barrette Bleue`;
if (item && item.blueFlower) item.blueFlower.renameFR =  `Fleur Bleue`;
if (item && item.purpleFlower) item.purpleFlower.renameFR =  `Fleur Violette`;
if (item && item.redFlower) item.redFlower.renameFR =  `Fleur Rouge`;
if (item && item.blueBalloon) item.blueBalloon.renameFR =  `Ballon Bleu`;
if (item && item.redBalloon) item.redBalloon.renameFR =  `Ballon Rouge`;
if (item && item.greenBalloon) item.greenBalloon.renameFR =  `Ballon Vert`;
if (item && item.professorHat) item.professorHat.renameFR =  `Chapeau de Professeur`;
if (item && item.academicHat) item.academicHat.renameFR =  `Chapeau Académique`;
if (item && item.redBall) item.redBall.renameFR =  `Balle Rouge`;
if (item && item.greenBall) item.greenBall.renameFR =  `Balle Verte`;
if (item && item.blueBall) item.blueBall.renameFR =  `Balle Bleue`;
if (item && item.redHeaddress) item.redHeaddress.renameFR =  `Coiffe Rouge`;
if (item && item.purpleHeaddress) item.purpleHeaddress.renameFR =  `Coiffe Violette`;
if (item && item.tealHeaddress) item.tealHeaddress.renameFR =  `Coiffe Sarcelle`;
if (item && item.blackTie) item.blackTie.renameFR =  `Cravate Noire`;
if (item && item.whiteTie) item.whiteTie.renameFR =  `Cravate Blanche`;
if (item && item.stripedTie) item.stripedTie.renameFR =  `Cravate Rayée`;
if (item && item.greenTie) item.greenTie.renameFR =  `Cravate Verte`;
if (item && item.orangeTie) item.orangeTie.renameFR =  `Cravate Orange`;
if (item && item.blueTie) item.blueTie.renameFR =  `Cravate Bleue`;
if (item && item.blackBowtie) item.blackBowtie.renameFR =  `Nœud Papillon Noir`;
if (item && item.pinkBowtie) item.pinkBowtie.renameFR =  `Nœud Papillon Rose`;
if (item && item.blueBowtie) item.blueBowtie.renameFR =  `Nœud Papillon Bleu`;
if (item && item.yellowBowtie) item.yellowBowtie.renameFR =  `Nœud Papillon Jaune`;
if (item && item.tealHeadband) item.tealHeadband.renameFR =  `Bandeau Sarcelle`;
if (item && item.greenHeadband) item.greenHeadband.renameFR =  `Bandeau Vert`;
if (item && item.yellowHeadband) item.yellowHeadband.renameFR =  `Bandeau Jaune`;
if (item && item.blackScarf) item.blackScarf.renameFR =  `Écharpe Noire`;
if (item && item.whiteScarf) item.whiteScarf.renameFR =  `Écharpe Blanche`;
if (item && item.redScarf) item.redScarf.renameFR =  `Foulard Rouge`;
if (item && item.blueScarf) item.blueScarf.renameFR =  `Foulard Bleu`;
if (item && item.yellowStar) item.yellowStar.renameFR =  `Étoile Jaune`;
if (item && item.tealStar) item.tealStar.renameFR =  `Étoile Sarcelle`;
if (item && item.redStar) item.redStar.renameFR =  `Étoile Rouge`;
if (item && item.blackMoustache) item.blackMoustache.renameFR =  `Moustache Noire`;
if (item && item.whiteMoustache) item.whiteMoustache.renameFR =  `Moustache Blanche`;
if (item && item.microphone) item.microphone.renameFR =  `Microphone`;
if (item && item.oldUmbrella) item.oldUmbrella.renameFR =  `Vieux Parapluie`;
if (item && item.coloredParasol) item.coloredParasol.renameFR =  `Parasol Coloré`;
if (item && item.pokeballFlag) item.pokeballFlag.renameFR =  `Drapeau Poké Ball`;
if (item && item.pinkMushroom) item.pinkMushroom.renameFR =  `Champignon Rose`;
if (item && item.yellowStarBalloon) item.yellowStarBalloon.renameFR =  `Ballon Étoile Jaune`;
if (item && item.blackSpecs) item.blackSpecs.renameFR =  `Lunettes Noires`;
if (item && item.googlySpecs) item.googlySpecs.renameFR =  `Lunettes Excentriques`;
if (item && item.topHat) item.topHat.renameFR =  `Haut-de-Forme`;
if (item && item.gentlemanHat) item.gentlemanHat.renameFR =  `Chapeau de Gentleman`;
if (item && item.silverTiara) item.silverTiara.renameFR =  `Tiare d'Argent`;
if (item && item.frillyApron) item.frillyApron.renameFR =  `Tablier à Volants`;
if (item && item.chefHat) item.chefHat.renameFR =  `Toque de Chef`;
if (item && item.fluffyBeard) item.fluffyBeard.renameFR =  `Barbe Flouffe`;
if (item && item.hummingNote) item.hummingNote.renameFR =  `Note Bourdonnante`;
if (item && item.prettyDewdrop) item.prettyDewdrop.renameFR =  `Belle Goutte de Rosée`;
if (item && item.spotlight) item.spotlight.renameFR =  `Projecteur`;
if (item && item.glitterPowder) item.glitterPowder.renameFR =  `Poudre Pailletée`;
if (item && item.confetti) item.confetti.renameFR =  `Confettis`;
if (item && item.comet) item.comet.renameFR =  `Comète`;
if (item && item.gorgeousSpecs) item.gorgeousSpecs.renameFR =  `Lunettes Superbes`;
if (item && item.mysticSmoke) item.mysticSmoke.renameFR =  `Fumée Mystique`;
if (item && item.flashHerbaMemory) item.flashHerbaMemory.renameFR =  `Mémoire Flash Herbe`;
if (item && item.flashFaeMemory) item.flashFaeMemory.renameFR =  `Mémoire Flash Fée`;
if (item && item.flashPsychaMemory) item.flashPsychaMemory.renameFR =  `Mémoire Flash Psy`;
if (item && item.flashCryoMemory) item.flashCryoMemory.renameFR =  `Mémoire Flash Glace`;
if (item && item.flashVenumMemory) item.flashVenumMemory.renameFR =  `Mémoire Flash Poison`;
if (item && item.flashUmbraMemory) item.flashUmbraMemory.renameFR =  `Mémoire Flash Ténèbres`;
if (item && item.flashPyroMemory) item.flashPyroMemory.renameFR =  `Mémoire Flash Feu`;
if (item && item.flashAquaMemory) item.flashAquaMemory.renameFR =  `Mémoire Flash Eau`;
if (item && item.flashElectroMemory) item.flashElectroMemory.renameFR =  `Mémoire Flash Électrik`;
if (item && item.liberoMemory) item.liberoMemory.renameFR =  `Mémoire Libéro`;
if (item && item.recklessMemory) item.recklessMemory.renameFR =  `Mémoire Téméraire`;
if (item && item.filterMemory) item.filterMemory.renameFR =  `Mémoire Filtre`;
if (item && item.justifiedMemory) item.justifiedMemory.renameFR =  `Mémoire Cœur Noble`;
if (item && item.angerPointMemory) item.angerPointMemory.renameFR =  `Mémoire Colérique`;
if (item && item.sharpnessMemory) item.sharpnessMemory.renameFR =  `Mémoire Incisif`;
if (item && item.gutsMemory) item.gutsMemory.renameFR =  `Mémoire Cran`;
if (item && item.multiscaleMemory) item.multiscaleMemory.renameFR =  `Mémoire Multiécaille`;
if (item && item.noGuardMemory) item.noGuardMemory.renameFR =  `Mémoire Annule Garde`;
if (item && item.ambidextrousMemory) item.ambidextrousMemory.renameFR =  `Mémoire Ambidextre`;
if (item && item.adaptabilityMemory) item.adaptabilityMemory.renameFR =  `Mémoire Adaptabilité`;
if (item && item.thickFatMemory) item.thickFatMemory.renameFR =  `Mémoire Isograisse`;
if (item && item.levitateMemory) item.levitateMemory.renameFR =  `Mémoire Lévitation`;
if (item && item.sheerForceMemory) item.sheerForceMemory.renameFR =  `Mémoire Sans Limite`;
if (item && item.strategistMemory) item.strategistMemory.renameFR =  `Mémoire Stratège`;
if (item && item.moxieMemory) item.moxieMemory.renameFR =  `Mémoire Impudence`;
if (item && item.unburdenMemory) item.unburdenMemory.renameFR =  `Mémoire Délestage`;
if (item && item.dauntingLookMemory) item.dauntingLookMemory.renameFR =  `Mémoire Regard Intimidant`;
if (item && item.intimidateMemory) item.intimidateMemory.renameFR =  `Mémoire Intimidation`;
if (item && item.sandRushMemory) item.sandRushMemory.renameFR =  `Mémoire Baigne Sable`;
if (item && item.swiftSwimMemory) item.swiftSwimMemory.renameFR =  `Mémoire Glissade`;
if (item && item.slushRushMemory) item.slushRushMemory.renameFR =  `Mémoire Chasse-Neige`;
if (item && item.moltShedMemory) item.moltShedMemory.renameFR =  `Mémoire Mue Ardente`;
if (item && item.faeRushMemory) item.faeRushMemory.renameFR =  `Mémoire Ruée Féerique`;
if (item && item.hyperconductorMemory) item.hyperconductorMemory.renameFR =  `Mémoire Hyperconducteur`;
if (item && item.intangibleMemory) item.intangibleMemory.renameFR =  `Mémoire Intangible`;
if (item && item.climaTactMemory) item.climaTactMemory.renameFR =  `Mémoire Tact Climatique`;
if (item && item.spikyPeltMemory) item.spikyPeltMemory.renameFR =  `Mémoire Peau Piquante`;
if (item && item.blackPeltMemory) item.blackPeltMemory.renameFR =  `Mémoire Peau Noire`;
if (item && item.pixiePeltMemory) item.pixiePeltMemory.renameFR =  `Mémoire Peau Velue`;
if (item && item.fieryPeltMemory) item.fieryPeltMemory.renameFR =  `Mémoire Peau Feu`;
if (item && item.moistPeltMemory) item.moistPeltMemory.renameFR =  `Mémoire Peau Eau`;
if (item && item.icyPeltMemory) item.icyPeltMemory.renameFR =  `Mémoire Peau Glace`;
if (item && item.sandyPeltMemory) item.sandyPeltMemory.renameFR =  `Mémoire Peau Sable`;
if (item && item.grassyPeltMemory) item.grassyPeltMemory.renameFR =  `Mémoire Peau Plante`;
if (item && item.stonedMemory) item.stonedMemory.renameFR =  `Mémoire Pétrifié`;
if (item && item.staminaMemory) item.staminaMemory.renameFR =  `Mémoire Endurance`;
if (item && item.gooeyMemory) item.gooeyMemory.renameFR =  `Mémoire Poisseux`;
if (item && item.shieldsDownMemory) item.shieldsDownMemory.renameFR =  `Mémoire Bouclier-Carcan`;
if (item && item.costarMemory) item.costarMemory.renameFR =  `Mémoire Collab`;
if (item && item.purifyingSaltMemory) item.purifyingSaltMemory.renameFR =  `Mémoire Sel Purificateur`;
if (item && item.scorchMemory) item.scorchMemory.renameFR =  `Mémoire Carbonisé`;
if (item && item.corrosionMemory) item.corrosionMemory.renameFR =  `Mémoire Corrosion`;
if (item && item.megaLauncherMemory) item.megaLauncherMemory.renameFR =  `Mémoire Méga Blaster`;
if (item && item.metalheadMemory) item.metalheadMemory.renameFR =  `Mémoire Tête de Métal`;
if (item && item.moodyMemory) item.moodyMemory.renameFR =  `Mémoire Lunatique`;
if (item && item.mercilessMemory) item.mercilessMemory.renameFR =  `Mémoire Cruauté`;
if (item && item.colorSporeMemory) item.colorSporeMemory.renameFR =  `Mémoire Spore Colorée`;
if (item && item.sandStreamMemory) item.sandStreamMemory.renameFR =  `Mémoire Sable Volant`;
if (item && item.snowWarningMemory) item.snowWarningMemory.renameFR =  `Mémoire Alerte Neige`;
if (item && item.somberFieldMemory) item.somberFieldMemory.renameFR =  `Mémoire Champ Sombre`;
if (item && item.dancerMemory) item.dancerMemory.renameFR =  `Mémoire Danseuse`;
if (item && item.cacophonyMemory) item.cacophonyMemory.renameFR =  `Mémoire Cacophonie`;
if (item && item.windRiderMemory) item.windRiderMemory.renameFR =  `Mémoire Aéroporté`;
if (item && item.gorillaTacticsMemory) item.gorillaTacticsMemory.renameFR =  `Mémoire Entêtement`;
if (item && item.imposterMemory) item.imposterMemory.renameFR =  `Mémoire Imposteur`;
if (item && item.drizzleMemory) item.drizzleMemory.renameFR =  `Mémoire Crachin`;
if (item && item.droughtMemory) item.droughtMemory.renameFR =  `Mémoire Sécheresse`;
if (item && item.electricSurgeMemory) item.electricSurgeMemory.renameFR =  `Mémoire Créa-Élec`;
if (item && item.grassySurgeMemory) item.grassySurgeMemory.renameFR =  `Mémoire Créa-Herbe`;
if (item && item.mistySurgeMemory) item.mistySurgeMemory.renameFR =  `Mémoire Créa-Brume`;
if (item && item.ferrilateMemory) item.ferrilateMemory.renameFR =  `Mémoire Peau Ferraille`;
if (item && item.glaciateMemory) item.glaciateMemory.renameFR =  `Mémoire Peau Gelée`;
if (item && item.terralateMemory) item.terralateMemory.renameFR =  `Mémoire Terralation`;
if (item && item.toxilateMemory) item.toxilateMemory.renameFR =  `Mémoire Peau Toxique`;
if (item && item.hydrolateMemory) item.hydrolateMemory.renameFR =  `Mémoire Peau Aquatique`;
if (item && item.pyrolateMemory) item.pyrolateMemory.renameFR =  `Mémoire Peau Ardente`;
if (item && item.chrysilateMemory) item.chrysilateMemory.renameFR =  `Mémoire Peau Insecte`;
if (item && item.galvanizeMemory) item.galvanizeMemory.renameFR =  `Mémoire Peau Électrique`;
if (item && item.gloomilateMemory) item.gloomilateMemory.renameFR =  `Mémoire Peau Sombre`;
if (item && item.espilateMemory) item.espilateMemory.renameFR =  `Mémoire Peau Psychique`;
if (item && item.aerilateMemory) item.aerilateMemory.renameFR =  `Mémoire Peau Céleste`;
if (item && item.pixilateMemory) item.pixilateMemory.renameFR =  `Mémoire Peau Féérique`;
if (item && item.verdifyMemory) item.verdifyMemory.renameFR =  `Mémoire Verdification`;
if (item && item.dragonMawMemory) item.dragonMawMemory.renameFR =  `Mémoire Gueule de Dragon`;
if (item && item.iaidoMemory) item.iaidoMemory.renameFR =  `Mémoire Iaïdo`;
if (item && item.blackCape) item.blackCape.renameFR =  `Cape Noire`;
if (item && item.crown) item.crown.renameFR =  `Couronne`;
if (item && item.determination) item.determination.renameFR =  `Détermination`;
if (item && item.pinkHeartBalloon) item.pinkHeartBalloon.renameFR =  `Ballon Cœur Rose`;
if (item && item.silverTiara) item.silverTiara.renameFR =  `Tiare d'Argent`;
if (item && item.wealthyCoins) item.wealthyCoins.renameFR =  `Pièces de Richesse`;
if (item && item.witchyHat) item.witchyHat.renameFR =  `Chapeau de Sorcière`;

// From scripts/pkmnDictionary.js
if (pkmn && pkmn.bulbasaur) pkmn.bulbasaur.renameFR =  `Bulbizarre`;
if (pkmn && pkmn.ivysaur) pkmn.ivysaur.renameFR =  `Herbizarre`;
if (pkmn && pkmn.venusaur) pkmn.venusaur.renameFR =  `Florizarre`;
if (pkmn && pkmn.venusaurClone) pkmn.venusaurClone.renameFR =  `Florizarre Clone`;
if (pkmn && pkmn.megaVenusaur) pkmn.megaVenusaur.renameFR =  `Méga-Florizarre`;
if (pkmn && pkmn.venusaurGmax) pkmn.venusaurGmax.renameFR =  `Florizarre Gigamax`;
if (pkmn && pkmn.charmander) pkmn.charmander.renameFR =  `Salamèche`;
if (pkmn && pkmn.charmeleon) pkmn.charmeleon.renameFR =  `Reptincel`;
if (pkmn && pkmn.charizard) pkmn.charizard.renameFR =  `Dracaufeu`;
if (pkmn && pkmn.charizardClone) pkmn.charizardClone.renameFR =  `Dracaufeu Clone`;
if (pkmn && pkmn.megaCharizardX) pkmn.megaCharizardX.renameFR =  `Méga-Dracaufeu X`;
if (pkmn && pkmn.megaCharizardY) pkmn.megaCharizardY.renameFR =  `Méga-Dracaufeu Y`;
if (pkmn && pkmn.charizardGmax) pkmn.charizardGmax.renameFR =  `Dracaufeu Gigamax`;
if (pkmn && pkmn.squirtle) pkmn.squirtle.renameFR =  `Carapuce`;
if (pkmn && pkmn.wartortle) pkmn.wartortle.renameFR =  `Carabaffe`;
if (pkmn && pkmn.blastoise) pkmn.blastoise.renameFR =  `Tortank`;
if (pkmn && pkmn.blastoiseClone) pkmn.blastoiseClone.renameFR =  `Tortank Clone`;
if (pkmn && pkmn.megaBlastoise) pkmn.megaBlastoise.renameFR =  `Méga-Tortank`;
if (pkmn && pkmn.blastoiseGmax) pkmn.blastoiseGmax.renameFR =  `Tortank Gigamax`;
if (pkmn && pkmn.caterpie) pkmn.caterpie.renameFR =  `Chenipan`;
if (pkmn && pkmn.metapod) pkmn.metapod.renameFR =  `Chrysacier`;
if (pkmn && pkmn.butterfree) pkmn.butterfree.renameFR =  `Papilusion`;
if (pkmn && pkmn.butterfreeGmax) pkmn.butterfreeGmax.renameFR =  `Papilusion Gigamax`;
if (pkmn && pkmn.weedle) pkmn.weedle.renameFR =  `Aspicot`;
if (pkmn && pkmn.kakuna) pkmn.kakuna.renameFR =  `Coconfort`;
if (pkmn && pkmn.beedrill) pkmn.beedrill.renameFR =  `Dardargnan`;
if (pkmn && pkmn.megaBeedrill) pkmn.megaBeedrill.renameFR =  `Méga-Dardargnan`;
if (pkmn && pkmn.pidgey) pkmn.pidgey.renameFR =  `Roucool`;
if (pkmn && pkmn.pidgeotto) pkmn.pidgeotto.renameFR =  `Roucoups`;
if (pkmn && pkmn.pidgeot) pkmn.pidgeot.renameFR =  `Roucarnage`;
if (pkmn && pkmn.megaPidgeot) pkmn.megaPidgeot.renameFR =  `Méga-Roucarnage`;
if (pkmn && pkmn.rattata) pkmn.rattata.renameFR =  `Rattata`;
if (pkmn && pkmn.alolanRattata) pkmn.alolanRattata.renameFR =  `Rattata d'Alola`;
if (pkmn && pkmn.raticate) pkmn.raticate.renameFR =  `Rattatac`;
if (pkmn && pkmn.alolanRaticate) pkmn.alolanRaticate.renameFR =  `Rattatac d'Alola`;
if (pkmn && pkmn.spearow) pkmn.spearow.renameFR =  `Piafabec`;
if (pkmn && pkmn.fearow) pkmn.fearow.renameFR =  `Rapasdepic`;
if (pkmn && pkmn.ekans) pkmn.ekans.renameFR =  `Abo`;
if (pkmn && pkmn.arbok) pkmn.arbok.renameFR =  `Arbok`;
if (pkmn && pkmn.spikyPichu) pkmn.spikyPichu.renameFR =  `Pichu Kogeki`;
if (pkmn && pkmn.pichu) pkmn.pichu.renameFR =  `Pichu`;
if (pkmn && pkmn.pikachu) pkmn.pikachu.renameFR =  `Pikachu`;
if (pkmn && pkmn.pikachuGmax) pkmn.pikachuGmax.renameFR =  `Pikachu Gigamax`;
if (pkmn && pkmn.pikachuAsh) pkmn.pikachuAsh.renameFR =  `Pikachu Sacha`;
if (pkmn && pkmn.pikachuWorld) pkmn.pikachuWorld.renameFR =  `Pikachu Casquette Monde`;
if (pkmn && pkmn.pikachuHoenn) pkmn.pikachuHoenn.renameFR =  `Pikachu Casquette de Hoenn`;
if (pkmn && pkmn.pikachuWorld) pkmn.pikachuWorld.renameFR =  `Pikachu Casquette Monde`;
if (pkmn && pkmn.pikachuUnova) pkmn.pikachuUnova.renameFR =  `Pikachu Casquette d'Unys`;
if (pkmn && pkmn.pikachuKalos) pkmn.pikachuKalos.renameFR =  `Pikachu Casquette de Kalos`;
if (pkmn && pkmn.pikachuBelle) pkmn.pikachuBelle.renameFR =  `Pikachu Lady`;
if (pkmn && pkmn.pikachuLibre) pkmn.pikachuLibre.renameFR =  `Pikachu Catcheur`;
if (pkmn && pkmn.pikachuPhd) pkmn.pikachuPhd.renameFR =  `Pikachu Docteur`;
if (pkmn && pkmn.pikachuPopstar) pkmn.pikachuPopstar.renameFR =  `Pikachu Star`;
if (pkmn && pkmn.pikachuRockstar) pkmn.pikachuRockstar.renameFR =  `Pikachu Rockeur`;
if (pkmn && pkmn.raichu) pkmn.raichu.renameFR =  `Raichu`;
if (pkmn && pkmn.alolanRaichu) pkmn.alolanRaichu.renameFR =  `Raichu d'Alola`;
if (pkmn && pkmn.megaRaichuX) pkmn.megaRaichuX.renameFR =  `Méga-Raichu X`;
if (pkmn && pkmn.megaRaichuY) pkmn.megaRaichuY.renameFR =  `Méga-Raichu Y`;
if (pkmn && pkmn.sandshrew) pkmn.sandshrew.renameFR =  `Sabelette`;
if (pkmn && pkmn.sandslash) pkmn.sandslash.renameFR =  `Sablaireau`;
if (pkmn && pkmn.alolanSandshrew) pkmn.alolanSandshrew.renameFR =  `Sabelette d'Alola`;
if (pkmn && pkmn.alolanSandslash) pkmn.alolanSandslash.renameFR =  `Sablaireau d'Alola`;
if (pkmn && pkmn.nidoranF) pkmn.nidoranF.renameFR =  `Nidoran♀`;
if (pkmn && pkmn.nidorina) pkmn.nidorina.renameFR =  `Nidorina`;
if (pkmn && pkmn.nidoqueen) pkmn.nidoqueen.renameFR =  `Nidoqueen`;
if (pkmn && pkmn.nidoranM) pkmn.nidoranM.renameFR =  `Nidoran♂`;
if (pkmn && pkmn.nidorino) pkmn.nidorino.renameFR =  `Nidorino`;
if (pkmn && pkmn.nidoking) pkmn.nidoking.renameFR =  `Nidoking`;
if (pkmn && pkmn.cleffa) pkmn.cleffa.renameFR =  `Mélo`;
if (pkmn && pkmn.clefairy) pkmn.clefairy.renameFR =  `Mélofée`;
if (pkmn && pkmn.clefable) pkmn.clefable.renameFR =  `Mélodelfe`;
if (pkmn && pkmn.megaClefable) pkmn.megaClefable.renameFR =  `Méga-Mélodelfe`;
if (pkmn && pkmn.vulpix) pkmn.vulpix.renameFR =  `Goupix`;
if (pkmn && pkmn.alolanVulpix) pkmn.alolanVulpix.renameFR =  `Goupix d'Alola`;
if (pkmn && pkmn.ninetales) pkmn.ninetales.renameFR =  `Feunard`;
if (pkmn && pkmn.alolanNinetales) pkmn.alolanNinetales.renameFR =  `Feunard d'Alola`;
if (pkmn && pkmn.igglybuff) pkmn.igglybuff.renameFR =  `Toudoudou`;
if (pkmn && pkmn.jigglypuff) pkmn.jigglypuff.renameFR =  `Rondoudou`;
if (pkmn && pkmn.wigglytuff) pkmn.wigglytuff.renameFR =  `Grodoudou`;
if (pkmn && pkmn.zubat) pkmn.zubat.renameFR =  `Nosferapti`;
if (pkmn && pkmn.golbat) pkmn.golbat.renameFR =  `Nosferalto`;
if (pkmn && pkmn.crobat) pkmn.crobat.renameFR =  `Nostenfer`;
if (pkmn && pkmn.oddish) pkmn.oddish.renameFR =  `Mystherbe`;
if (pkmn && pkmn.gloom) pkmn.gloom.renameFR =  `Ortide`;
if (pkmn && pkmn.vileplume) pkmn.vileplume.renameFR =  `Rafflesia`;
if (pkmn && pkmn.bellossom) pkmn.bellossom.renameFR =  `Joliflor`;
if (pkmn && pkmn.paras) pkmn.paras.renameFR =  `Paras`;
if (pkmn && pkmn.parasect) pkmn.parasect.renameFR =  `Parasect`;
if (pkmn && pkmn.venonat) pkmn.venonat.renameFR =  `Mimitoss`;
if (pkmn && pkmn.venomoth) pkmn.venomoth.renameFR =  `Aéromite`;
if (pkmn && pkmn.diglett) pkmn.diglett.renameFR =  `Taupiqueur`;
if (pkmn && pkmn.alolanDiglett) pkmn.alolanDiglett.renameFR =  `Taupiqueur d'Alola`;
if (pkmn && pkmn.dugtrio) pkmn.dugtrio.renameFR =  `Triopikeur`;
if (pkmn && pkmn.alolanDugtrio) pkmn.alolanDugtrio.renameFR =  `Triopikeur d'Alola`;
if (pkmn && pkmn.meowth) pkmn.meowth.renameFR =  `Miaouss`;
if (pkmn && pkmn.meowthGmax) pkmn.meowthGmax.renameFR =  `Miaouss Gigamax`;
if (pkmn && pkmn.alolanMeowth) pkmn.alolanMeowth.renameFR =  `Miaouss d'Alola`;
if (pkmn && pkmn.galarianMeowth) pkmn.galarianMeowth.renameFR =  `Miaouss de Galar`;
if (pkmn && pkmn.persian) pkmn.persian.renameFR =  `Persian`;
if (pkmn && pkmn.alolanPersian) pkmn.alolanPersian.renameFR =  `Persian d'Alola`;
if (pkmn && pkmn.perrserker) pkmn.perrserker.renameFR =  `Berserkatt`;
if (pkmn && pkmn.psyduck) pkmn.psyduck.renameFR =  `Psykokwak`;
if (pkmn && pkmn.golduck) pkmn.golduck.renameFR =  `Akwakwak`;
if (pkmn && pkmn.mankey) pkmn.mankey.renameFR =  `Férosinge`;
if (pkmn && pkmn.primeape) pkmn.primeape.renameFR =  `Colossinge`;
if (pkmn && pkmn.annihilape) pkmn.annihilape.renameFR =  `Courrousinge`;
if (pkmn && pkmn.growlithe) pkmn.growlithe.renameFR =  `Caninos`;
if (pkmn && pkmn.hisuianGrowlithe) pkmn.hisuianGrowlithe.renameFR =  `Caninos de Hisui`;
if (pkmn && pkmn.arcanine) pkmn.arcanine.renameFR =  `Arcanin`;
if (pkmn && pkmn.hisuianArcanine) pkmn.hisuianArcanine.renameFR =  `Arcanin de Hisui`;
if (pkmn && pkmn.poliwag) pkmn.poliwag.renameFR =  `Ptitard`;
if (pkmn && pkmn.poliwhirl) pkmn.poliwhirl.renameFR =  `Têtarte`;
if (pkmn && pkmn.poliwrath) pkmn.poliwrath.renameFR =  `Tartard`;
if (pkmn && pkmn.politoed) pkmn.politoed.renameFR =  `Tarpaud`;
if (pkmn && pkmn.abra) pkmn.abra.renameFR =  `Abra`;
if (pkmn && pkmn.kadabra) pkmn.kadabra.renameFR =  `Kadabra`;
if (pkmn && pkmn.alakazam) pkmn.alakazam.renameFR =  `Alakazam`;
if (pkmn && pkmn.megaAlakazam) pkmn.megaAlakazam.renameFR =  `Méga-Alakazam`;
if (pkmn && pkmn.machop) pkmn.machop.renameFR =  `Machoc`;
if (pkmn && pkmn.machoke) pkmn.machoke.renameFR =  `Machopeur`;
if (pkmn && pkmn.machamp) pkmn.machamp.renameFR =  `Mackogneur`;
if (pkmn && pkmn.machampGmax) pkmn.machampGmax.renameFR =  `Mackogneur Gigamax`;
if (pkmn && pkmn.bellsprout) pkmn.bellsprout.renameFR =  `Chétiflor`;
if (pkmn && pkmn.weepinbell) pkmn.weepinbell.renameFR =  `Boustiflor`;
if (pkmn && pkmn.victreebel) pkmn.victreebel.renameFR =  `Empiflor`;
if (pkmn && pkmn.megaVictreebel) pkmn.megaVictreebel.renameFR =  `Méga-Empiflor`;
if (pkmn && pkmn.tentacool) pkmn.tentacool.renameFR =  `Tentacool`;
if (pkmn && pkmn.tentacruel) pkmn.tentacruel.renameFR =  `Tentacruel`;
if (pkmn && pkmn.geodude) pkmn.geodude.renameFR =  `Racaillou`;
if (pkmn && pkmn.alolanGeodude) pkmn.alolanGeodude.renameFR =  `Racaillou d'Alola`;
if (pkmn && pkmn.graveler) pkmn.graveler.renameFR =  `Gravalanch`;
if (pkmn && pkmn.alolanGraveler) pkmn.alolanGraveler.renameFR =  `Gravalanch d'Alola`;
if (pkmn && pkmn.golem) pkmn.golem.renameFR =  `Grolem`;
if (pkmn && pkmn.alolanGolem) pkmn.alolanGolem.renameFR =  `Grolem d'Alola`;
if (pkmn && pkmn.ponyta) pkmn.ponyta.renameFR =  `Ponyta`;
if (pkmn && pkmn.galarianPonyta) pkmn.galarianPonyta.renameFR =  `Ponyta de Galar`;
if (pkmn && pkmn.rapidash) pkmn.rapidash.renameFR =  `Galopa`;
if (pkmn && pkmn.galarianRapidash) pkmn.galarianRapidash.renameFR =  `Galopa de Galar`;
if (pkmn && pkmn.slowpoke) pkmn.slowpoke.renameFR =  `Ramoloss`;
if (pkmn && pkmn.galarianSlowpoke) pkmn.galarianSlowpoke.renameFR =  `Ramoloss de Galar`;
if (pkmn && pkmn.slowbro) pkmn.slowbro.renameFR =  `Flagadoss`;
if (pkmn && pkmn.megaSlowbro) pkmn.megaSlowbro.renameFR =  `Méga-Flagadoss`;
if (pkmn && pkmn.galarianSlowbro) pkmn.galarianSlowbro.renameFR =  `Flagadoss de Galar`;
if (pkmn && pkmn.slowking) pkmn.slowking.renameFR =  `Roigada`;
if (pkmn && pkmn.galarianSlowking) pkmn.galarianSlowking.renameFR =  `Roigada de Galar`;
if (pkmn && pkmn.magnemite) pkmn.magnemite.renameFR =  `Magnéti`;
if (pkmn && pkmn.magneton) pkmn.magneton.renameFR =  `Magnéton`;
if (pkmn && pkmn.magnezone) pkmn.magnezone.renameFR =  `Magnézone`;
if (pkmn && pkmn.farfetchd) pkmn.farfetchd.renameFR =  `Canarticho`;
if (pkmn && pkmn.galarianFarfetchd) pkmn.galarianFarfetchd.renameFR =  `Canarticho de Galar`;
if (pkmn && pkmn.sirfetchd) pkmn.sirfetchd.renameFR =  `Palarticho`;
if (pkmn && pkmn.doduo) pkmn.doduo.renameFR =  `Doduo`;
if (pkmn && pkmn.dodrio) pkmn.dodrio.renameFR =  `Dodrio`;
if (pkmn && pkmn.seel) pkmn.seel.renameFR =  `Otaria`;
if (pkmn && pkmn.dewgong) pkmn.dewgong.renameFR =  `Lamantine`;
if (pkmn && pkmn.grimer) pkmn.grimer.renameFR =  `Tadmorv`;
if (pkmn && pkmn.alolanGrimer) pkmn.alolanGrimer.renameFR =  `Tadmorv d'Alola`;
if (pkmn && pkmn.muk) pkmn.muk.renameFR =  `Grotadmorv`;
if (pkmn && pkmn.alolanMuk) pkmn.alolanMuk.renameFR =  `Grotadmorv d'Alola`;
if (pkmn && pkmn.shellder) pkmn.shellder.renameFR =  `Kokiyas`;
if (pkmn && pkmn.cloyster) pkmn.cloyster.renameFR =  `Crustabri`;
if (pkmn && pkmn.gastly) pkmn.gastly.renameFR =  `Fantominus`;
if (pkmn && pkmn.haunter) pkmn.haunter.renameFR =  `Spectrum`;
if (pkmn && pkmn.gengar) pkmn.gengar.renameFR =  `Ectoplasma`;
if (pkmn && pkmn.megaGengar) pkmn.megaGengar.renameFR =  `Méga-Ectoplasma`;
if (pkmn && pkmn.gengarGmax) pkmn.gengarGmax.renameFR =  `Ectoplasma Gigamax`;
if (pkmn && pkmn.onix) pkmn.onix.renameFR =  `Onix`;
if (pkmn && pkmn.steelix) pkmn.steelix.renameFR =  `Steelix`;
if (pkmn && pkmn.megaSteelix) pkmn.megaSteelix.renameFR =  `Méga-Steelix`;
if (pkmn && pkmn.drowzee) pkmn.drowzee.renameFR =  `Soporifik`;
if (pkmn && pkmn.hypno) pkmn.hypno.renameFR =  `Hypnomade`;
if (pkmn && pkmn.krabby) pkmn.krabby.renameFR =  `Krabby`;
if (pkmn && pkmn.kingler) pkmn.kingler.renameFR =  `Krabboss`;
if (pkmn && pkmn.kinglerGmax) pkmn.kinglerGmax.renameFR =  `Krabboss Gigamax`;
if (pkmn && pkmn.voltorb) pkmn.voltorb.renameFR =  `Voltorbe`;
if (pkmn && pkmn.hisuianVoltorb) pkmn.hisuianVoltorb.renameFR =  `Voltorbe de Hisui`;
if (pkmn && pkmn.electrode) pkmn.electrode.renameFR =  `Électrode`;
if (pkmn && pkmn.hisuianElectrode) pkmn.hisuianElectrode.renameFR =  `Électrode de Hisui`;
if (pkmn && pkmn.exeggcute) pkmn.exeggcute.renameFR =  `Noeunoeuf`;
if (pkmn && pkmn.exeggutor) pkmn.exeggutor.renameFR =  `Noadkoko`;
if (pkmn && pkmn.alolanExeggutor) pkmn.alolanExeggutor.renameFR =  `Noadkoko d'Alola`;
if (pkmn && pkmn.cubone) pkmn.cubone.renameFR =  `Osselait`;
if (pkmn && pkmn.marowak) pkmn.marowak.renameFR =  `Ossatueur`;
if (pkmn && pkmn.alolanMarowak) pkmn.alolanMarowak.renameFR =  `Ossatueur d'Alola`;
if (pkmn && pkmn.tyrogue) pkmn.tyrogue.renameFR =  `Debugant`;
if (pkmn && pkmn.hitmonlee) pkmn.hitmonlee.renameFR =  `Kicklee`;
if (pkmn && pkmn.hitmonchan) pkmn.hitmonchan.renameFR =  `Tygnon`;
if (pkmn && pkmn.hitmontop) pkmn.hitmontop.renameFR =  `Kapoera`;
if (pkmn && pkmn.lickitung) pkmn.lickitung.renameFR =  `Excelangue`;
if (pkmn && pkmn.lickilicky) pkmn.lickilicky.renameFR =  `Coudlangue`;
if (pkmn && pkmn.koffing) pkmn.koffing.renameFR =  `Smogo`;
if (pkmn && pkmn.weezing) pkmn.weezing.renameFR =  `Smogogo`;
if (pkmn && pkmn.galarianWeezing) pkmn.galarianWeezing.renameFR =  `Smogogo de Galar`;
if (pkmn && pkmn.rhyhorn) pkmn.rhyhorn.renameFR =  `Rhinocorne`;
if (pkmn && pkmn.rhydon) pkmn.rhydon.renameFR =  `Rhinoféros`;
if (pkmn && pkmn.rhyperior) pkmn.rhyperior.renameFR =  `Rhinastoc`;
if (pkmn && pkmn.happiny) pkmn.happiny.renameFR =  `Ptiravi`;
if (pkmn && pkmn.chansey) pkmn.chansey.renameFR =  `Leveinard`;
if (pkmn && pkmn.blissey) pkmn.blissey.renameFR =  `Leuphorie`;
if (pkmn && pkmn.tangela) pkmn.tangela.renameFR =  `Saquedeneu`;
if (pkmn && pkmn.tangelaEvent) pkmn.tangelaEvent.renameFR =  `Saquedeneu`;
if (pkmn && pkmn.tangrowth) pkmn.tangrowth.renameFR =  `Bouldeneu`;
if (pkmn && pkmn.kangaskhan) pkmn.kangaskhan.renameFR =  `Kangourex`;
if (pkmn && pkmn.megaKangaskhan) pkmn.megaKangaskhan.renameFR =  `Méga-Kangourex`;
if (pkmn && pkmn.horsea) pkmn.horsea.renameFR =  `Hypotrempe`;
if (pkmn && pkmn.seadra) pkmn.seadra.renameFR =  `Hypocéan`;
if (pkmn && pkmn.kingdra) pkmn.kingdra.renameFR =  `Hyporoi`;
if (pkmn && pkmn.goldeen) pkmn.goldeen.renameFR =  `Poissirène`;
if (pkmn && pkmn.seaking) pkmn.seaking.renameFR =  `Poissoroy`;
if (pkmn && pkmn.staryu) pkmn.staryu.renameFR =  `Stari`;
if (pkmn && pkmn.starmie) pkmn.starmie.renameFR =  `Staross`;
if (pkmn && pkmn.megaStarmie) pkmn.megaStarmie.renameFR =  `Méga-Staross`;
if (pkmn && pkmn.mimejr) pkmn.mimejr.renameFR =  `Mime Jr.`;
if (pkmn && pkmn.mrmime) pkmn.mrmime.renameFR =  `M. Mime`;
if (pkmn && pkmn.galarianMrmime) pkmn.galarianMrmime.renameFR =  `M. Mime de Galar`;
if (pkmn && pkmn.mrRime) pkmn.mrRime.renameFR =  `M. Glaquette`;
if (pkmn && pkmn.scyther) pkmn.scyther.renameFR =  `Insécateur`;
if (pkmn && pkmn.scizor) pkmn.scizor.renameFR =  `Cizayox`;
if (pkmn && pkmn.megaScizor) pkmn.megaScizor.renameFR =  `Méga-Cizayox`;
if (pkmn && pkmn.kleavor) pkmn.kleavor.renameFR =  `Hachécateur`;
if (pkmn && pkmn.smoochum) pkmn.smoochum.renameFR =  `Lippouti`;
if (pkmn && pkmn.jynx) pkmn.jynx.renameFR =  `Lippoutou`;
if (pkmn && pkmn.elekid) pkmn.elekid.renameFR =  `Élekid`;
if (pkmn && pkmn.electabuzz) pkmn.electabuzz.renameFR =  `Élektek`;
if (pkmn && pkmn.electivire) pkmn.electivire.renameFR =  `Élekable`;
if (pkmn && pkmn.magby) pkmn.magby.renameFR =  `Magby`;
if (pkmn && pkmn.magmar) pkmn.magmar.renameFR =  `Magmar`;
if (pkmn && pkmn.magmortar) pkmn.magmortar.renameFR =  `Maganon`;
if (pkmn && pkmn.pinsir) pkmn.pinsir.renameFR =  `Scarabrute`;
if (pkmn && pkmn.megaPinsir) pkmn.megaPinsir.renameFR =  `Méga-Scarabrute`;
if (pkmn && pkmn.tauros) pkmn.tauros.renameFR =  `Tauros`;
if (pkmn && pkmn.taurosCombat) pkmn.taurosCombat.renameFR =  `Tauros Combat`;
if (pkmn && pkmn.taurosBlaze) pkmn.taurosBlaze.renameFR =  `Tauros Flamboyant`;
if (pkmn && pkmn.taurosAqua) pkmn.taurosAqua.renameFR =  `Tauros Aqua`;
if (pkmn && pkmn.magikarp) pkmn.magikarp.renameFR =  `Magicarpe`;
if (pkmn && pkmn.magikarpKoi) pkmn.magikarpKoi.renameFR =  `Magicarpe Koi`;
if (pkmn && pkmn.magikarpRegal) pkmn.magikarpRegal.renameFR =  `Magicarpe Royal`;
if (pkmn && pkmn.magikarpSakura) pkmn.magikarpSakura.renameFR =  `Magicarpe Sakura`;
if (pkmn && pkmn.magikarpSkelly) pkmn.magikarpSkelly.renameFR =  `Magicarpe Squelette`;
if (pkmn && pkmn.magikarpSoar) pkmn.magikarpSoar.renameFR =  `Magicarpe Volant`;
if (pkmn && pkmn.magikarpTiger) pkmn.magikarpTiger.renameFR =  `Magicarpe Tigre`;
if (pkmn && pkmn.gyarados) pkmn.gyarados.renameFR =  `Léviator`;
if (pkmn && pkmn.megaGyarados) pkmn.megaGyarados.renameFR =  `Méga-Léviator`;
if (pkmn && pkmn.lapras) pkmn.lapras.renameFR =  `Lokhlass`;
if (pkmn && pkmn.laprasGmax) pkmn.laprasGmax.renameFR =  `Lokhlass Gigamax`;
if (pkmn && pkmn.ditto) pkmn.ditto.renameFR =  `Métamorph`;
if (pkmn && pkmn.eevee) pkmn.eevee.renameFR =  `Évoli`;
if (pkmn && pkmn.eeveeGmax) pkmn.eeveeGmax.renameFR =  `Évoli Gigamax`;
if (pkmn && pkmn.vaporeon) pkmn.vaporeon.renameFR =  `Aquali`;
if (pkmn && pkmn.jolteon) pkmn.jolteon.renameFR =  `Voltali`;
if (pkmn && pkmn.flareon) pkmn.flareon.renameFR =  `Pyroli`;
if (pkmn && pkmn.espeon) pkmn.espeon.renameFR =  `Mentali`;
if (pkmn && pkmn.umbreon) pkmn.umbreon.renameFR =  `Noctali`;
if (pkmn && pkmn.leafeon) pkmn.leafeon.renameFR =  `Phyllali`;
if (pkmn && pkmn.glaceon) pkmn.glaceon.renameFR =  `Givrali`;
if (pkmn && pkmn.sylveon) pkmn.sylveon.renameFR =  `Nymphali`;
if (pkmn && pkmn.porygon) pkmn.porygon.renameFR =  `Porygon`;
if (pkmn && pkmn.porygon2) pkmn.porygon2.renameFR =  `Porygon2`;
if (pkmn && pkmn.porygonZ) pkmn.porygonZ.renameFR =  `Porygon-Z`;
if (pkmn && pkmn.omanyte) pkmn.omanyte.renameFR =  `Amonita`;
if (pkmn && pkmn.omastar) pkmn.omastar.renameFR =  `Amonistar`;
if (pkmn && pkmn.kabuto) pkmn.kabuto.renameFR =  `Kabuto`;
if (pkmn && pkmn.kabutops) pkmn.kabutops.renameFR =  `Kabutops`;
if (pkmn && pkmn.aerodactyl) pkmn.aerodactyl.renameFR =  `Ptéra`;
if (pkmn && pkmn.megaAerodactyl) pkmn.megaAerodactyl.renameFR =  `Méga-Ptéra`;
if (pkmn && pkmn.munchlax) pkmn.munchlax.renameFR =  `Goinfrex`;
if (pkmn && pkmn.snorlax) pkmn.snorlax.renameFR =  `Ronflex`;
if (pkmn && pkmn.snorlaxGmax) pkmn.snorlaxGmax.renameFR =  `Ronflex Gigamax`;
if (pkmn && pkmn.articuno) pkmn.articuno.renameFR =  `Artikodin`;
if (pkmn && pkmn.galarianArticuno) pkmn.galarianArticuno.renameFR =  `Artikodin de Galar`;
if (pkmn && pkmn.zapdos) pkmn.zapdos.renameFR =  `Électhor`;
if (pkmn && pkmn.galarianZapdos) pkmn.galarianZapdos.renameFR =  `Électhor de Galar`;
if (pkmn && pkmn.moltres) pkmn.moltres.renameFR =  `Sulfura`;
if (pkmn && pkmn.galarianMoltres) pkmn.galarianMoltres.renameFR =  `Sulfura de Galar`;
if (pkmn && pkmn.dratini) pkmn.dratini.renameFR =  `Minidraco`;
if (pkmn && pkmn.dragonair) pkmn.dragonair.renameFR =  `Draco`;
if (pkmn && pkmn.dragonite) pkmn.dragonite.renameFR =  `Dracolosse`;
if (pkmn && pkmn.megaDragonite) pkmn.megaDragonite.renameFR =  `Méga-Dracolosse`;
if (pkmn && pkmn.mewtwo) pkmn.mewtwo.renameFR =  `Mewtwo`;
if (pkmn && pkmn.megaMewtwoX) pkmn.megaMewtwoX.renameFR =  `Méga-Mewtwo X`;
if (pkmn && pkmn.megaMewtwoY) pkmn.megaMewtwoY.renameFR =  `Méga-Mewtwo Y`;
if (pkmn && pkmn.mew) pkmn.mew.renameFR =  `Mew`;
if (pkmn && pkmn.chikorita) pkmn.chikorita.renameFR =  `Germignon`;
if (pkmn && pkmn.bayleef) pkmn.bayleef.renameFR =  `Macronium`;
if (pkmn && pkmn.meganium) pkmn.meganium.renameFR =  `Méganium`;
if (pkmn && pkmn.megaMeganium) pkmn.megaMeganium.renameFR =  `Méga-Méganium`;
if (pkmn && pkmn.cyndaquil) pkmn.cyndaquil.renameFR =  `Héricendre`;
if (pkmn && pkmn.quilava) pkmn.quilava.renameFR =  `Feurisson`;
if (pkmn && pkmn.typhlosion) pkmn.typhlosion.renameFR =  `Typhlosion`;
if (pkmn && pkmn.hisuianTyphlosion) pkmn.hisuianTyphlosion.renameFR =  `Typhlosion de Hisui`;
if (pkmn && pkmn.totodile) pkmn.totodile.renameFR =  `Kaiminus`;
if (pkmn && pkmn.croconaw) pkmn.croconaw.renameFR =  `Crocrodil`;
if (pkmn && pkmn.feraligatr) pkmn.feraligatr.renameFR =  `Aligatueur`;
if (pkmn && pkmn.megaFeraligatr) pkmn.megaFeraligatr.renameFR =  `Méga-Aligatueur`;
if (pkmn && pkmn.sentret) pkmn.sentret.renameFR =  `Fouinette`;
if (pkmn && pkmn.furret) pkmn.furret.renameFR =  `Fouinar`;
if (pkmn && pkmn.hoothoot) pkmn.hoothoot.renameFR =  `Hoothoot`;
if (pkmn && pkmn.noctowl) pkmn.noctowl.renameFR =  `Noarfang`;
if (pkmn && pkmn.ledyba) pkmn.ledyba.renameFR =  `Coxy`;
if (pkmn && pkmn.ledian) pkmn.ledian.renameFR =  `Coxyclaque`;
if (pkmn && pkmn.spinarak) pkmn.spinarak.renameFR =  `Mimigal`;
if (pkmn && pkmn.ariados) pkmn.ariados.renameFR =  `Migalos`;
if (pkmn && pkmn.chinchou) pkmn.chinchou.renameFR =  `Loupio`;
if (pkmn && pkmn.lanturn) pkmn.lanturn.renameFR =  `Lanturn`;
if (pkmn && pkmn.togepi) pkmn.togepi.renameFR =  `Togepi`;
if (pkmn && pkmn.togetic) pkmn.togetic.renameFR =  `Togetic`;
if (pkmn && pkmn.togekiss) pkmn.togekiss.renameFR =  `Togekiss`;
if (pkmn && pkmn.natu) pkmn.natu.renameFR =  `Natu`;
if (pkmn && pkmn.xatu) pkmn.xatu.renameFR =  `Xatu`;
if (pkmn && pkmn.mareep) pkmn.mareep.renameFR =  `Wattouat`;
if (pkmn && pkmn.flaaffy) pkmn.flaaffy.renameFR =  `Lainergie`;
if (pkmn && pkmn.ampharos) pkmn.ampharos.renameFR =  `Pharamp`;
if (pkmn && pkmn.megaAmpharos) pkmn.megaAmpharos.renameFR =  `Méga-Pharamp`;
if (pkmn && pkmn.azurill) pkmn.azurill.renameFR =  `Azurill`;
if (pkmn && pkmn.marill) pkmn.marill.renameFR =  `Marill`;
if (pkmn && pkmn.azumarill) pkmn.azumarill.renameFR =  `Azumarill`;
if (pkmn && pkmn.bonsly) pkmn.bonsly.renameFR =  `Manzaï`;
if (pkmn && pkmn.sudowoodo) pkmn.sudowoodo.renameFR =  `Simularbre`;
if (pkmn && pkmn.hoppip) pkmn.hoppip.renameFR =  `Granivol`;
if (pkmn && pkmn.skiploom) pkmn.skiploom.renameFR =  `Floravol`;
if (pkmn && pkmn.jumpluff) pkmn.jumpluff.renameFR =  `Cotovol`;
if (pkmn && pkmn.aipom) pkmn.aipom.renameFR =  `Capumain`;
if (pkmn && pkmn.ambipom) pkmn.ambipom.renameFR =  `Capidextre`;
if (pkmn && pkmn.sunkern) pkmn.sunkern.renameFR =  `Tournegrin`;
if (pkmn && pkmn.sunflora) pkmn.sunflora.renameFR =  `Héliatronc`;
if (pkmn && pkmn.yanma) pkmn.yanma.renameFR =  `Yanma`;
if (pkmn && pkmn.yanmega) pkmn.yanmega.renameFR =  `Yanmega`;
if (pkmn && pkmn.wooper) pkmn.wooper.renameFR =  `Axoloto`;
if (pkmn && pkmn.paldeanWooper) pkmn.paldeanWooper.renameFR =  `Axoloto de Paldéa`;
if (pkmn && pkmn.quagsire) pkmn.quagsire.renameFR =  `Maraiste`;
if (pkmn && pkmn.clodsire) pkmn.clodsire.renameFR =  `Terraiste`;
if (pkmn && pkmn.murkrow) pkmn.murkrow.renameFR =  `Cornèbre`;
if (pkmn && pkmn.honchkrow) pkmn.honchkrow.renameFR =  `Corboss`;
if (pkmn && pkmn.misdreavus) pkmn.misdreavus.renameFR =  `Feuforêve`;
if (pkmn && pkmn.mismagius) pkmn.mismagius.renameFR =  `Magirêve`;
if (pkmn && pkmn.unownA) pkmn.unownA.renameFR =  `Zarbi A`;
if (pkmn && pkmn.unownB) pkmn.unownB.renameFR =  `Zarbi B`;
if (pkmn && pkmn.unownC) pkmn.unownC.renameFR =  `Zarbi C`;
if (pkmn && pkmn.unownD) pkmn.unownD.renameFR =  `Zarbi D`;
if (pkmn && pkmn.unownE) pkmn.unownE.renameFR =  `Zarbi E`;
if (pkmn && pkmn.unownF) pkmn.unownF.renameFR =  `Zarbi F`;
if (pkmn && pkmn.unownG) pkmn.unownG.renameFR =  `Zarbi G`;
if (pkmn && pkmn.unownH) pkmn.unownH.renameFR =  `Zarbi H`;
if (pkmn && pkmn.unownI) pkmn.unownI.renameFR =  `Zarbi I`;
if (pkmn && pkmn.unownJ) pkmn.unownJ.renameFR =  `Zarbi J`;
if (pkmn && pkmn.unownK) pkmn.unownK.renameFR =  `Zarbi K`;
if (pkmn && pkmn.unownL) pkmn.unownL.renameFR =  `Zarbi L`;
if (pkmn && pkmn.unownM) pkmn.unownM.renameFR =  `Zarbi M`;
if (pkmn && pkmn.unownN) pkmn.unownN.renameFR =  `Zarbi N`;
if (pkmn && pkmn.unownO) pkmn.unownO.renameFR =  `Zarbi O`;
if (pkmn && pkmn.unownP) pkmn.unownP.renameFR =  `Zarbi P`;
if (pkmn && pkmn.unownQ) pkmn.unownQ.renameFR =  `Zarbi Q`;
if (pkmn && pkmn.unownR) pkmn.unownR.renameFR =  `Zarbi R`;
if (pkmn && pkmn.unownS) pkmn.unownS.renameFR =  `Zarbi S`;
if (pkmn && pkmn.unownT) pkmn.unownT.renameFR =  `Zarbi T`;
if (pkmn && pkmn.unownU) pkmn.unownU.renameFR =  `Zarbi U`;
if (pkmn && pkmn.unownV) pkmn.unownV.renameFR =  `Zarbi V`;
if (pkmn && pkmn.unownW) pkmn.unownW.renameFR =  `Zarbi W`;
if (pkmn && pkmn.unownX) pkmn.unownX.renameFR =  `Zarbi X`;
if (pkmn && pkmn.unownY) pkmn.unownY.renameFR =  `Zarbi Y`;
if (pkmn && pkmn.unownZ) pkmn.unownZ.renameFR =  `Zarbi Z`;
if (pkmn && pkmn.unownExclamation) pkmn.unownExclamation.renameFR =  `Zarbi !`;
if (pkmn && pkmn.unownQuestion) pkmn.unownQuestion.renameFR =  `Zarbi ?`;
if (pkmn && pkmn.wynaut) pkmn.wynaut.renameFR =  `Okéoké`;
if (pkmn && pkmn.wobbuffet) pkmn.wobbuffet.renameFR =  `Qulbutoké`;
if (pkmn && pkmn.girafarig) pkmn.girafarig.renameFR =  `Girafarig`;
if (pkmn && pkmn.farigiraf) pkmn.farigiraf.renameFR =  `Farigiraf`;
if (pkmn && pkmn.pineco) pkmn.pineco.renameFR =  `Pomdepik`;
if (pkmn && pkmn.forretress) pkmn.forretress.renameFR =  `Foretress`;
if (pkmn && pkmn.dunsparce) pkmn.dunsparce.renameFR =  `Insolourdo`;
if (pkmn && pkmn.dudunsparce) pkmn.dudunsparce.renameFR =  `Deusolourdo`;
if (pkmn && pkmn.dududunsparce) pkmn.dududunsparce.renameFR =  `Deusolourdo`;
if (pkmn && pkmn.gligar) pkmn.gligar.renameFR =  `Scorplane`;
if (pkmn && pkmn.gliscor) pkmn.gliscor.renameFR =  `Scorvol`;
if (pkmn && pkmn.snubbull) pkmn.snubbull.renameFR =  `Snubbull`;
if (pkmn && pkmn.granbull) pkmn.granbull.renameFR =  `Granbull`;
if (pkmn && pkmn.qwilfish) pkmn.qwilfish.renameFR =  `Qwilfish`;
if (pkmn && pkmn.hisuianQwilfish) pkmn.hisuianQwilfish.renameFR =  `Qwilfish de Hisui`;
if (pkmn && pkmn.overqwil) pkmn.overqwil.renameFR =  `Qwilpik`;
if (pkmn && pkmn.shuckle) pkmn.shuckle.renameFR =  `Caratroc`;
if (pkmn && pkmn.heracross) pkmn.heracross.renameFR =  `Scarhino`;
if (pkmn && pkmn.megaHeracross) pkmn.megaHeracross.renameFR =  `Méga-Scarhino`;
if (pkmn && pkmn.sneasel) pkmn.sneasel.renameFR =  `Farfuret`;
if (pkmn && pkmn.hisuianSneasel) pkmn.hisuianSneasel.renameFR =  `Farfuret de Hisui`;
if (pkmn && pkmn.weavile) pkmn.weavile.renameFR =  `Dimoret`;
if (pkmn && pkmn.hisuianSneasler) pkmn.hisuianSneasler.renameFR =  `Farfurex`;
if (pkmn && pkmn.teddiursa) pkmn.teddiursa.renameFR =  `Teddiursa`;
if (pkmn && pkmn.ursaring) pkmn.ursaring.renameFR =  `Ursaring`;
if (pkmn && pkmn.ursaluna) pkmn.ursaluna.renameFR =  `Ursaking`;
if (pkmn && pkmn.ursalunaBloodmoon) pkmn.ursalunaBloodmoon.renameFR =  `Ursaking Lune Vermeille`;
if (pkmn && pkmn.slugma) pkmn.slugma.renameFR =  `Limagma`;
if (pkmn && pkmn.magcargo) pkmn.magcargo.renameFR =  `Volcaropod`;
if (pkmn && pkmn.swinub) pkmn.swinub.renameFR =  `Marcacrin`;
if (pkmn && pkmn.piloswine) pkmn.piloswine.renameFR =  `Cochignon`;
if (pkmn && pkmn.mamoswine) pkmn.mamoswine.renameFR =  `Mammochon`;
if (pkmn && pkmn.corsola) pkmn.corsola.renameFR =  `Corayon`;
if (pkmn && pkmn.galarianCorsola) pkmn.galarianCorsola.renameFR =  `Corayon de Galar`;
if (pkmn && pkmn.cursola) pkmn.cursola.renameFR =  `Corayôme`;
if (pkmn && pkmn.remoraid) pkmn.remoraid.renameFR =  `Rémoraid`;
if (pkmn && pkmn.octillery) pkmn.octillery.renameFR =  `Octillery`;
if (pkmn && pkmn.delibird) pkmn.delibird.renameFR =  `Cadoizo`;
if (pkmn && pkmn.mantyke) pkmn.mantyke.renameFR =  `Babimanta`;
if (pkmn && pkmn.mantine) pkmn.mantine.renameFR =  `Démanta`;
if (pkmn && pkmn.skarmory) pkmn.skarmory.renameFR =  `Airmure`;
if (pkmn && pkmn.megaSkarmory) pkmn.megaSkarmory.renameFR =  `Méga-Airmure`;
if (pkmn && pkmn.houndour) pkmn.houndour.renameFR =  `Malosse`;
if (pkmn && pkmn.houndoom) pkmn.houndoom.renameFR =  `Démolosse`;
if (pkmn && pkmn.megaHoundoom) pkmn.megaHoundoom.renameFR =  `Méga-Démolosse`;
if (pkmn && pkmn.phanpy) pkmn.phanpy.renameFR =  `Phanpy`;
if (pkmn && pkmn.donphan) pkmn.donphan.renameFR =  `Donphan`;
if (pkmn && pkmn.stantler) pkmn.stantler.renameFR =  `Cerfrousse`;
if (pkmn && pkmn.wyrdeer) pkmn.wyrdeer.renameFR =  `Cerbyllin`;
if (pkmn && pkmn.smeargle) pkmn.smeargle.renameFR =  `Queulorior`;
if (pkmn && pkmn.miltank) pkmn.miltank.renameFR =  `Écrémeuh`;
if (pkmn && pkmn.raikou) pkmn.raikou.renameFR =  `Raikou`;
if (pkmn && pkmn.entei) pkmn.entei.renameFR =  `Entei`;
if (pkmn && pkmn.suicune) pkmn.suicune.renameFR =  `Suicune`;
if (pkmn && pkmn.larvitar) pkmn.larvitar.renameFR =  `Embrylex`;
if (pkmn && pkmn.pupitar) pkmn.pupitar.renameFR =  `Ymphect`;
if (pkmn && pkmn.tyranitar) pkmn.tyranitar.renameFR =  `Tyranocif`;
if (pkmn && pkmn.megaTyranitar) pkmn.megaTyranitar.renameFR =  `Méga-Tyranocif`;
if (pkmn && pkmn.lugia) pkmn.lugia.renameFR =  `Lugia`;
if (pkmn && pkmn.hooh) pkmn.hooh.renameFR =  `Ho-Oh`;
if (pkmn && pkmn.celebi) pkmn.celebi.renameFR =  `Celebi`;
if (pkmn && pkmn.treecko) pkmn.treecko.renameFR =  `Arcko`;
if (pkmn && pkmn.grovyle) pkmn.grovyle.renameFR =  `Massko`;
if (pkmn && pkmn.sceptile) pkmn.sceptile.renameFR =  `Jungko`;
if (pkmn && pkmn.megaSceptile) pkmn.megaSceptile.renameFR =  `Méga-Jungko`;
if (pkmn && pkmn.torchic) pkmn.torchic.renameFR =  `Poussifeu`;
if (pkmn && pkmn.combusken) pkmn.combusken.renameFR =  `Galifeu`;
if (pkmn && pkmn.blaziken) pkmn.blaziken.renameFR =  `Braségali`;
if (pkmn && pkmn.megaBlaziken) pkmn.megaBlaziken.renameFR =  `Méga-Braségali`;
if (pkmn && pkmn.mudkip) pkmn.mudkip.renameFR =  `Gobou`;
if (pkmn && pkmn.marshtomp) pkmn.marshtomp.renameFR =  `Flobio`;
if (pkmn && pkmn.swampert) pkmn.swampert.renameFR =  `Laggron`;
if (pkmn && pkmn.megaSwampert) pkmn.megaSwampert.renameFR =  `Méga-Laggron`;
if (pkmn && pkmn.poochyena) pkmn.poochyena.renameFR =  `Medhyèna`;
if (pkmn && pkmn.mightyena) pkmn.mightyena.renameFR =  `Grahyèna`;
if (pkmn && pkmn.zigzagoon) pkmn.zigzagoon.renameFR =  `Zigzaton`;
if (pkmn && pkmn.galarianZigzagoon) pkmn.galarianZigzagoon.renameFR =  `Zigzaton de Galar`;
if (pkmn && pkmn.linoone) pkmn.linoone.renameFR =  `Linéon`;
if (pkmn && pkmn.galarianLinoone) pkmn.galarianLinoone.renameFR =  `Linéon de Galar`;
if (pkmn && pkmn.obstagoon) pkmn.obstagoon.renameFR =  `Ixon`;
if (pkmn && pkmn.wurmple) pkmn.wurmple.renameFR =  `Chenipotte`;
if (pkmn && pkmn.silcoon) pkmn.silcoon.renameFR =  `Armulys`;
if (pkmn && pkmn.beautifly) pkmn.beautifly.renameFR =  `Charmillon`;
if (pkmn && pkmn.cascoon) pkmn.cascoon.renameFR =  `Blindalys`;
if (pkmn && pkmn.dustox) pkmn.dustox.renameFR =  `Papinox`;
if (pkmn && pkmn.lotad) pkmn.lotad.renameFR =  `Nénupiot`;
if (pkmn && pkmn.lombre) pkmn.lombre.renameFR =  `Lombre`;
if (pkmn && pkmn.ludicolo) pkmn.ludicolo.renameFR =  `Ludicolo`;
if (pkmn && pkmn.seedot) pkmn.seedot.renameFR =  `Grainipiot`;
if (pkmn && pkmn.nuzleaf) pkmn.nuzleaf.renameFR =  `Pifeuil`;
if (pkmn && pkmn.shiftry) pkmn.shiftry.renameFR =  `Tengalice`;
if (pkmn && pkmn.taillow) pkmn.taillow.renameFR =  `Nirondelle`;
if (pkmn && pkmn.swellow) pkmn.swellow.renameFR =  `Hélédelle`;
if (pkmn && pkmn.wingull) pkmn.wingull.renameFR =  `Goélise`;
if (pkmn && pkmn.pelipper) pkmn.pelipper.renameFR =  `Bekipan`;
if (pkmn && pkmn.ralts) pkmn.ralts.renameFR =  `Tarsal`;
if (pkmn && pkmn.kirlia) pkmn.kirlia.renameFR =  `Kirlia`;
if (pkmn && pkmn.gardevoir) pkmn.gardevoir.renameFR =  `Gardevoir`;
if (pkmn && pkmn.megaGardevoir) pkmn.megaGardevoir.renameFR =  `Méga-Gardevoir`;
if (pkmn && pkmn.gallade) pkmn.gallade.renameFR =  `Gallame`;
if (pkmn && pkmn.megaGallade) pkmn.megaGallade.renameFR =  `Méga-Gallame`;
if (pkmn && pkmn.surskit) pkmn.surskit.renameFR =  `Arakdo`;
if (pkmn && pkmn.masquerain) pkmn.masquerain.renameFR =  `Maskadra`;
if (pkmn && pkmn.shroomish) pkmn.shroomish.renameFR =  `Balignon`;
if (pkmn && pkmn.breloom) pkmn.breloom.renameFR =  `Chapignon`;
if (pkmn && pkmn.slakoth) pkmn.slakoth.renameFR =  `Parecool`;
if (pkmn && pkmn.vigoroth) pkmn.vigoroth.renameFR =  `Vigoroth`;
if (pkmn && pkmn.slaking) pkmn.slaking.renameFR =  `Monaflèmit`;
if (pkmn && pkmn.nincada) pkmn.nincada.renameFR =  `Ningale`;
if (pkmn && pkmn.ninjask) pkmn.ninjask.renameFR =  `Ninjask`;
if (pkmn && pkmn.shedinja) pkmn.shedinja.renameFR =  `Munja`;
if (pkmn && pkmn.whismur) pkmn.whismur.renameFR =  `Chuchmur`;
if (pkmn && pkmn.loudred) pkmn.loudred.renameFR =  `Ramboum`;
if (pkmn && pkmn.exploud) pkmn.exploud.renameFR =  `Brouhabam`;
if (pkmn && pkmn.makuhita) pkmn.makuhita.renameFR =  `Makuhita`;
if (pkmn && pkmn.hariyama) pkmn.hariyama.renameFR =  `Hariyama`;
if (pkmn && pkmn.nosepass) pkmn.nosepass.renameFR =  `Tarinor`;
if (pkmn && pkmn.probopass) pkmn.probopass.renameFR =  `Tarinorme`;
if (pkmn && pkmn.skitty) pkmn.skitty.renameFR =  `Skitty`;
if (pkmn && pkmn.delcatty) pkmn.delcatty.renameFR =  `Delcatty`;
if (pkmn && pkmn.sableye) pkmn.sableye.renameFR =  `Ténéfix`;
if (pkmn && pkmn.megaSableye) pkmn.megaSableye.renameFR =  `Méga-Ténéfix`;
if (pkmn && pkmn.mawile) pkmn.mawile.renameFR =  `Mysdibule`;
if (pkmn && pkmn.megaMawile) pkmn.megaMawile.renameFR =  `Méga-Mysdibule`;
if (pkmn && pkmn.aron) pkmn.aron.renameFR =  `Galekid`;
if (pkmn && pkmn.lairon) pkmn.lairon.renameFR =  `Galegon`;
if (pkmn && pkmn.aggron) pkmn.aggron.renameFR =  `Galeking`;
if (pkmn && pkmn.megaAggron) pkmn.megaAggron.renameFR =  `Méga-Galeking`;
if (pkmn && pkmn.meditite) pkmn.meditite.renameFR =  `Méditikka`;
if (pkmn && pkmn.medicham) pkmn.medicham.renameFR =  `Charmina`;
if (pkmn && pkmn.megaMedicham) pkmn.megaMedicham.renameFR =  `Méga-Charmina`;
if (pkmn && pkmn.electrike) pkmn.electrike.renameFR =  `Dynavolt`;
if (pkmn && pkmn.manectric) pkmn.manectric.renameFR =  `Élecsprint`;
if (pkmn && pkmn.megaManectric) pkmn.megaManectric.renameFR =  `Méga-Élecsprint`;
if (pkmn && pkmn.plusle) pkmn.plusle.renameFR =  `Posipi`;
if (pkmn && pkmn.minun) pkmn.minun.renameFR =  `Négapi`;
if (pkmn && pkmn.volbeat) pkmn.volbeat.renameFR =  `Muciole`;
if (pkmn && pkmn.illumise) pkmn.illumise.renameFR =  `Lumivole`;
if (pkmn && pkmn.gulpin) pkmn.gulpin.renameFR =  `Gloupti`;
if (pkmn && pkmn.swalot) pkmn.swalot.renameFR =  `Avaltout`;
if (pkmn && pkmn.carvanha) pkmn.carvanha.renameFR =  `Carvanha`;
if (pkmn && pkmn.sharpedo) pkmn.sharpedo.renameFR =  `Sharpedo`;
if (pkmn && pkmn.megaSharpedo) pkmn.megaSharpedo.renameFR =  `Méga-Sharpedo`;
if (pkmn && pkmn.wailmer) pkmn.wailmer.renameFR =  `Wailmer`;
if (pkmn && pkmn.wailord) pkmn.wailord.renameFR =  `Wailord`;
if (pkmn && pkmn.numel) pkmn.numel.renameFR =  `Chamallot`;
if (pkmn && pkmn.camerupt) pkmn.camerupt.renameFR =  `Camérupt`;
if (pkmn && pkmn.megaCamerupt) pkmn.megaCamerupt.renameFR =  `Méga-Camérupt`;
if (pkmn && pkmn.torkoal) pkmn.torkoal.renameFR =  `Chartor`;
if (pkmn && pkmn.spoink) pkmn.spoink.renameFR =  `Spoink`;
if (pkmn && pkmn.grumpig) pkmn.grumpig.renameFR =  `Groret`;
if (pkmn && pkmn.spinda) pkmn.spinda.renameFR =  `Spinda`;
if (pkmn && pkmn.trapinch) pkmn.trapinch.renameFR =  `Kraknoix`;
if (pkmn && pkmn.vibrava) pkmn.vibrava.renameFR =  `Vibraninf`;
if (pkmn && pkmn.flygon) pkmn.flygon.renameFR =  `Libégon`;
if (pkmn && pkmn.cacnea) pkmn.cacnea.renameFR =  `Cacnea`;
if (pkmn && pkmn.cacturne) pkmn.cacturne.renameFR =  `Cacturne`;
if (pkmn && pkmn.swablu) pkmn.swablu.renameFR =  `Tylton`;
if (pkmn && pkmn.altaria) pkmn.altaria.renameFR =  `Altaria`;
if (pkmn && pkmn.megaAltaria) pkmn.megaAltaria.renameFR =  `Méga-Altaria`;
if (pkmn && pkmn.zangoose) pkmn.zangoose.renameFR =  `Mangriff`;
if (pkmn && pkmn.seviper) pkmn.seviper.renameFR =  `Séviper`;
if (pkmn && pkmn.lunatone) pkmn.lunatone.renameFR =  `Séléroc`;
if (pkmn && pkmn.solrock) pkmn.solrock.renameFR =  `Solaroc`;
if (pkmn && pkmn.barboach) pkmn.barboach.renameFR =  `Barloche`;
if (pkmn && pkmn.whiscash) pkmn.whiscash.renameFR =  `Barbicha`;
if (pkmn && pkmn.corphish) pkmn.corphish.renameFR =  `Écrapince`;
if (pkmn && pkmn.crawdaunt) pkmn.crawdaunt.renameFR =  `Colhomard`;
if (pkmn && pkmn.baltoy) pkmn.baltoy.renameFR =  `Balbuto`;
if (pkmn && pkmn.claydol) pkmn.claydol.renameFR =  `Kaorine`;
if (pkmn && pkmn.lileep) pkmn.lileep.renameFR =  `Lilia`;
if (pkmn && pkmn.cradily) pkmn.cradily.renameFR =  `Vacilys`;
if (pkmn && pkmn.anorith) pkmn.anorith.renameFR =  `Anorith`;
if (pkmn && pkmn.armaldo) pkmn.armaldo.renameFR =  `Armaldo`;
if (pkmn && pkmn.feebas) pkmn.feebas.renameFR =  `Barpau`;
if (pkmn && pkmn.milotic) pkmn.milotic.renameFR =  `Milobellus`;
if (pkmn && pkmn.castform) pkmn.castform.renameFR =  `Morphéo`;
if (pkmn && pkmn.castformSunny) pkmn.castformSunny.renameFR =  `Morphéo Solaire`;
if (pkmn && pkmn.castformRainy) pkmn.castformRainy.renameFR =  `Morphéo Eau de Pluie`;
if (pkmn && pkmn.castformSnowy) pkmn.castformSnowy.renameFR =  `Morphéo Blizzard`;
if (pkmn && pkmn.kecleon) pkmn.kecleon.renameFR =  `Kecleon`;
if (pkmn && pkmn.shuppet) pkmn.shuppet.renameFR =  `Polichombr`;
if (pkmn && pkmn.banette) pkmn.banette.renameFR =  `Branette`;
if (pkmn && pkmn.megaBanette) pkmn.megaBanette.renameFR =  `Méga-Branette`;
if (pkmn && pkmn.duskull) pkmn.duskull.renameFR =  `Skelénox`;
if (pkmn && pkmn.dusclops) pkmn.dusclops.renameFR =  `Téraclope`;
if (pkmn && pkmn.dusknoir) pkmn.dusknoir.renameFR =  `Noctunoir`;
if (pkmn && pkmn.tropius) pkmn.tropius.renameFR =  `Tropius`;
if (pkmn && pkmn.chingling) pkmn.chingling.renameFR =  `Korillon`;
if (pkmn && pkmn.chimecho) pkmn.chimecho.renameFR =  `Éoko`;
if (pkmn && pkmn.megaChimecho) pkmn.megaChimecho.renameFR =  `Méga-Éoko`;
if (pkmn && pkmn.absol) pkmn.absol.renameFR =  `Absol`;
if (pkmn && pkmn.megaAbsol) pkmn.megaAbsol.renameFR =  `Méga-Absol`;
if (pkmn && pkmn.megaAbsolZ) pkmn.megaAbsolZ.renameFR =  `Méga-Absol Z`;
if (pkmn && pkmn.snorunt) pkmn.snorunt.renameFR =  `Stalgamin`;
if (pkmn && pkmn.snoruntEvent) pkmn.snoruntEvent.renameFR =  `Stalgamin`;
if (pkmn && pkmn.glalie) pkmn.glalie.renameFR =  `Oniglali`;
if (pkmn && pkmn.megaGlalie) pkmn.megaGlalie.renameFR =  `Méga-Oniglali`;
if (pkmn && pkmn.froslass) pkmn.froslass.renameFR =  `Momartik`;
if (pkmn && pkmn.megaFroslass) pkmn.megaFroslass.renameFR =  `Méga-Momartik`;
if (pkmn && pkmn.spheal) pkmn.spheal.renameFR =  `Obalie`;
if (pkmn && pkmn.sealeo) pkmn.sealeo.renameFR =  `Phogleur`;
if (pkmn && pkmn.walrein) pkmn.walrein.renameFR =  `Kaimorse`;
if (pkmn && pkmn.clamperl) pkmn.clamperl.renameFR =  `Coquiperl`;
if (pkmn && pkmn.huntail) pkmn.huntail.renameFR =  `Serpang`;
if (pkmn && pkmn.gorebyss) pkmn.gorebyss.renameFR =  `Rosabyss`;
if (pkmn && pkmn.relicanth) pkmn.relicanth.renameFR =  `Relicanth`;
if (pkmn && pkmn.luvdisc) pkmn.luvdisc.renameFR =  `Lovdisc`;
if (pkmn && pkmn.bagon) pkmn.bagon.renameFR =  `Draby`;
if (pkmn && pkmn.shelgon) pkmn.shelgon.renameFR =  `Drackhaus`;
if (pkmn && pkmn.salamence) pkmn.salamence.renameFR =  `Drattak`;
if (pkmn && pkmn.megaSalamence) pkmn.megaSalamence.renameFR =  `Méga-Drattak`;
if (pkmn && pkmn.beldum) pkmn.beldum.renameFR =  `Terhal`;
if (pkmn && pkmn.metang) pkmn.metang.renameFR =  `Métang`;
if (pkmn && pkmn.metagross) pkmn.metagross.renameFR =  `Métalosse`;
if (pkmn && pkmn.megaMetagross) pkmn.megaMetagross.renameFR =  `Méga-Métalosse`;
if (pkmn && pkmn.regirock) pkmn.regirock.renameFR =  `Regirock`;
if (pkmn && pkmn.regice) pkmn.regice.renameFR =  `Regice`;
if (pkmn && pkmn.registeel) pkmn.registeel.renameFR =  `Registeel`;
if (pkmn && pkmn.latias) pkmn.latias.renameFR =  `Latias`;
if (pkmn && pkmn.megaLatias) pkmn.megaLatias.renameFR =  `Méga-Latias`;
if (pkmn && pkmn.latios) pkmn.latios.renameFR =  `Latios`;
if (pkmn && pkmn.megaLatios) pkmn.megaLatios.renameFR =  `Méga-Latios`;
if (pkmn && pkmn.kyogre) pkmn.kyogre.renameFR =  `Kyogre`;
if (pkmn && pkmn.kyogrePrimal) pkmn.kyogrePrimal.renameFR =  `Primo-Kyogre`;
if (pkmn && pkmn.groudon) pkmn.groudon.renameFR =  `Groudon`;
if (pkmn && pkmn.groudonPrimal) pkmn.groudonPrimal.renameFR =  `Primo-Groudon`;
if (pkmn && pkmn.rayquaza) pkmn.rayquaza.renameFR =  `Rayquaza`;
if (pkmn && pkmn.megaRayquaza) pkmn.megaRayquaza.renameFR =  `Méga-Rayquaza`;
if (pkmn && pkmn.jirachi) pkmn.jirachi.renameFR =  `Jirachi`;
if (pkmn && pkmn.deoxys) pkmn.deoxys.renameFR =  `Deoxys`;
if (pkmn && pkmn.deoxysAttack) pkmn.deoxysAttack.renameFR =  `Deoxys Attaque`;
if (pkmn && pkmn.deoxysDefense) pkmn.deoxysDefense.renameFR =  `Deoxys Défense`;
if (pkmn && pkmn.deoxysSpeed) pkmn.deoxysSpeed.renameFR =  `Deoxys Vitesse`;
if (pkmn && pkmn.turtwig) pkmn.turtwig.renameFR =  `Tortipouss`;
if (pkmn && pkmn.grotle) pkmn.grotle.renameFR =  `Boskara`;
if (pkmn && pkmn.torterra) pkmn.torterra.renameFR =  `Torterra`;
if (pkmn && pkmn.chimchar) pkmn.chimchar.renameFR =  `Ouisticram`;
if (pkmn && pkmn.monferno) pkmn.monferno.renameFR =  `Chimpenfeu`;
if (pkmn && pkmn.infernape) pkmn.infernape.renameFR =  `Simiabraz`;
if (pkmn && pkmn.piplup) pkmn.piplup.renameFR =  `Tiplouf`;
if (pkmn && pkmn.prinplup) pkmn.prinplup.renameFR =  `Prinplouf`;
if (pkmn && pkmn.empoleon) pkmn.empoleon.renameFR =  `Pingoléon`;
if (pkmn && pkmn.starly) pkmn.starly.renameFR =  `Étourmi`;
if (pkmn && pkmn.staravia) pkmn.staravia.renameFR =  `Étourvol`;
if (pkmn && pkmn.staraptor) pkmn.staraptor.renameFR =  `Étouraptor`;
if (pkmn && pkmn.megaStaraptor) pkmn.megaStaraptor.renameFR =  `Méga-Étouraptor`;
if (pkmn && pkmn.bidoof) pkmn.bidoof.renameFR =  `Keunotor`;
if (pkmn && pkmn.bibarel) pkmn.bibarel.renameFR =  `Castorno`;
if (pkmn && pkmn.kricketot) pkmn.kricketot.renameFR =  `Crikzik`;
if (pkmn && pkmn.kricketune) pkmn.kricketune.renameFR =  `Mélokrik`;
if (pkmn && pkmn.shinx) pkmn.shinx.renameFR =  `Lixy`;
if (pkmn && pkmn.luxio) pkmn.luxio.renameFR =  `Luxio`;
if (pkmn && pkmn.luxray) pkmn.luxray.renameFR =  `Luxray`;
if (pkmn && pkmn.budew) pkmn.budew.renameFR =  `Rozbouton`;
if (pkmn && pkmn.roselia) pkmn.roselia.renameFR =  `Rosélia`;
if (pkmn && pkmn.roserade) pkmn.roserade.renameFR =  `Roserade`;
if (pkmn && pkmn.cranidos) pkmn.cranidos.renameFR =  `Kranidos`;
if (pkmn && pkmn.rampardos) pkmn.rampardos.renameFR =  `Charkos`;
if (pkmn && pkmn.shieldon) pkmn.shieldon.renameFR =  `Dinoclier`;
if (pkmn && pkmn.bastiodon) pkmn.bastiodon.renameFR =  `Bastiodon`;
if (pkmn && pkmn.burmy) pkmn.burmy.renameFR =  `Cheniti`;
if (pkmn && pkmn.burmySandy) pkmn.burmySandy.renameFR =  `Cheniti Sable`;
if (pkmn && pkmn.burmyTrash) pkmn.burmyTrash.renameFR =  `Cheniti Déchet`;
if (pkmn && pkmn.wormadam) pkmn.wormadam.renameFR =  `Cheniselle`;
if (pkmn && pkmn.wormadamSandy) pkmn.wormadamSandy.renameFR =  `Cheniselle Sable`;
if (pkmn && pkmn.wormadamTrash) pkmn.wormadamTrash.renameFR =  `Cheniselle Déchet`;
if (pkmn && pkmn.mothim) pkmn.mothim.renameFR =  `Papilord`;
if (pkmn && pkmn.combee) pkmn.combee.renameFR =  `Apitrini`;
if (pkmn && pkmn.vespiquen) pkmn.vespiquen.renameFR =  `Apireine`;
if (pkmn && pkmn.pachirisu) pkmn.pachirisu.renameFR =  `Pachirisu`;
if (pkmn && pkmn.buizel) pkmn.buizel.renameFR =  `Mustébouée`;
if (pkmn && pkmn.floatzel) pkmn.floatzel.renameFR =  `Mustéflott`;
if (pkmn && pkmn.cherubi) pkmn.cherubi.renameFR =  `Ceribou`;
if (pkmn && pkmn.cherrim) pkmn.cherrim.renameFR =  `Ceriflor`;
if (pkmn && pkmn.cherrimSunshine) pkmn.cherrimSunshine.renameFR =  `Ceriflor Ensoleillé`;
if (pkmn && pkmn.shellos) pkmn.shellos.renameFR =  `Sancoki`;
if (pkmn && pkmn.shellosEast) pkmn.shellosEast.renameFR =  `Sancoki Orient`;
if (pkmn && pkmn.gastrodon) pkmn.gastrodon.renameFR =  `Tritosor`;
if (pkmn && pkmn.gastrodonEast) pkmn.gastrodonEast.renameFR =  `Tritosor Orient`;
if (pkmn && pkmn.drifloon) pkmn.drifloon.renameFR =  `Baudrive`;
if (pkmn && pkmn.drifblim) pkmn.drifblim.renameFR =  `Grodrive`;
if (pkmn && pkmn.buneary) pkmn.buneary.renameFR =  `Laporeille`;
if (pkmn && pkmn.lopunny) pkmn.lopunny.renameFR =  `Lockpin`;
if (pkmn && pkmn.megaLopunny) pkmn.megaLopunny.renameFR =  `Méga-Lockpin`;
if (pkmn && pkmn.glameow) pkmn.glameow.renameFR =  `Chaglam`;
if (pkmn && pkmn.purugly) pkmn.purugly.renameFR =  `Chaffreux`;
if (pkmn && pkmn.stunky) pkmn.stunky.renameFR =  `Moufouette`;
if (pkmn && pkmn.skuntank) pkmn.skuntank.renameFR =  `Moufflair`;
if (pkmn && pkmn.bronzor) pkmn.bronzor.renameFR =  `Archéomire`;
if (pkmn && pkmn.bronzong) pkmn.bronzong.renameFR =  `Archéodong`;
if (pkmn && pkmn.chatot) pkmn.chatot.renameFR =  `Pijako`;
if (pkmn && pkmn.spiritomb) pkmn.spiritomb.renameFR =  `Spiritomb`;
if (pkmn && pkmn.gible) pkmn.gible.renameFR =  `Griknot`;
if (pkmn && pkmn.gabite) pkmn.gabite.renameFR =  `Carmache`;
if (pkmn && pkmn.garchomp) pkmn.garchomp.renameFR =  `Carchacrok`;
if (pkmn && pkmn.megaGarchomp) pkmn.megaGarchomp.renameFR =  `Méga-Carchacrok`;
if (pkmn && pkmn.megaGarchompZ) pkmn.megaGarchompZ.renameFR =  `Méga-Carchacrok Z`;
if (pkmn && pkmn.riolu) pkmn.riolu.renameFR =  `Riolu`;
if (pkmn && pkmn.lucario) pkmn.lucario.renameFR =  `Lucario`;
if (pkmn && pkmn.megaLucario) pkmn.megaLucario.renameFR =  `Méga-Lucario`;
if (pkmn && pkmn.megaLucarioZ) pkmn.megaLucarioZ.renameFR =  `Méga-Lucario Z`;
if (pkmn && pkmn.hippopotas) pkmn.hippopotas.renameFR =  `Hippopotas`;
if (pkmn && pkmn.hippowdon) pkmn.hippowdon.renameFR =  `Hippodocus`;
if (pkmn && pkmn.skorupi) pkmn.skorupi.renameFR =  `Rapion`;
if (pkmn && pkmn.drapion) pkmn.drapion.renameFR =  `Drascore`;
if (pkmn && pkmn.croagunk) pkmn.croagunk.renameFR =  `Cradopaud`;
if (pkmn && pkmn.toxicroak) pkmn.toxicroak.renameFR =  `Coatox`;
if (pkmn && pkmn.carnivine) pkmn.carnivine.renameFR =  `Vortente`;
if (pkmn && pkmn.finneon) pkmn.finneon.renameFR =  `Écayon`;
if (pkmn && pkmn.lumineon) pkmn.lumineon.renameFR =  `Luminéon`;
if (pkmn && pkmn.snover) pkmn.snover.renameFR =  `Blizzi`;
if (pkmn && pkmn.abomasnow) pkmn.abomasnow.renameFR =  `Blizzaroi`;
if (pkmn && pkmn.megaAbomasnow) pkmn.megaAbomasnow.renameFR =  `Méga-Blizzaroi`;
if (pkmn && pkmn.rotom) pkmn.rotom.renameFR =  `Motisma`;
if (pkmn && pkmn.rotomHeat) pkmn.rotomHeat.renameFR =  `Motisma Chaleur`;
if (pkmn && pkmn.rotomWash) pkmn.rotomWash.renameFR =  `Motisma Lavage`;
if (pkmn && pkmn.rotomFrost) pkmn.rotomFrost.renameFR =  `Motisma Froid`;
if (pkmn && pkmn.rotomFan) pkmn.rotomFan.renameFR =  `Motisma Hélice`;
if (pkmn && pkmn.rotomMow) pkmn.rotomMow.renameFR =  `Motisma Tonte`;
if (pkmn && pkmn.uxie) pkmn.uxie.renameFR =  `Créhelf`;
if (pkmn && pkmn.mesprit) pkmn.mesprit.renameFR =  `Créfollet`;
if (pkmn && pkmn.azelf) pkmn.azelf.renameFR =  `Créfadet`;
if (pkmn && pkmn.dialga) pkmn.dialga.renameFR =  `Dialga`;
if (pkmn && pkmn.dialgaOrigin) pkmn.dialgaOrigin.renameFR =  `Diagla Originel`;
if (pkmn && pkmn.palkia) pkmn.palkia.renameFR =  `Palkia`;
if (pkmn && pkmn.palkiaOrigin) pkmn.palkiaOrigin.renameFR =  `Palkia Originel`;
if (pkmn && pkmn.heatran) pkmn.heatran.renameFR =  `Heatran`;
if (pkmn && pkmn.megaHeatran) pkmn.megaHeatran.renameFR =  `Méga-Heatran`;
if (pkmn && pkmn.regigigas) pkmn.regigigas.renameFR =  `Regigigas`;
if (pkmn && pkmn.giratina) pkmn.giratina.renameFR =  `Giratina`;
if (pkmn && pkmn.giratinaOrigin) pkmn.giratinaOrigin.renameFR =  `Giratina Originel`;
if (pkmn && pkmn.cresselia) pkmn.cresselia.renameFR =  `Cresselia`;
if (pkmn && pkmn.phione) pkmn.phione.renameFR =  `Phione`;
if (pkmn && pkmn.manaphy) pkmn.manaphy.renameFR =  `Manaphy`;
if (pkmn && pkmn.darkrai) pkmn.darkrai.renameFR =  `Darkrai`;
if (pkmn && pkmn.megaDarkrai) pkmn.megaDarkrai.renameFR =  `Méga-Darkrai`;
if (pkmn && pkmn.shaymin) pkmn.shaymin.renameFR =  `Shaymin`;
if (pkmn && pkmn.shayminSky) pkmn.shayminSky.renameFR =  `Shaymin Céleste`;
if (pkmn && pkmn.arceus) pkmn.arceus.renameFR =  `Arceus`;
if (pkmn && pkmn.arceusFighting) pkmn.arceusFighting.renameFR =  `Arceus Combat`;
if (pkmn && pkmn.arceusflying) pkmn.arceusflying.renameFR =  `Arceus Vol`;
if (pkmn && pkmn.arceusPoison) pkmn.arceusPoison.renameFR =  `Arceus Poison`;
if (pkmn && pkmn.arceusGround) pkmn.arceusGround.renameFR =  `Arceus Sol`;
if (pkmn && pkmn.arceusRock) pkmn.arceusRock.renameFR =  `Arceus Roche`;
if (pkmn && pkmn.arceusBug) pkmn.arceusBug.renameFR =  `Arceus Insecte`;
if (pkmn && pkmn.arceusGhost) pkmn.arceusGhost.renameFR =  `Arceus Spectre`;
if (pkmn && pkmn.arceusSteel) pkmn.arceusSteel.renameFR =  `Arceus Acier`;
if (pkmn && pkmn.arceusFire) pkmn.arceusFire.renameFR =  `Arceus Feu`;
if (pkmn && pkmn.arceusWater) pkmn.arceusWater.renameFR =  `Arceus Eau`;
if (pkmn && pkmn.arceusGrass) pkmn.arceusGrass.renameFR =  `Arceus Plante`;
if (pkmn && pkmn.arceusElectric) pkmn.arceusElectric.renameFR =  `Arceus Électrik`;
if (pkmn && pkmn.arceusPsychic) pkmn.arceusPsychic.renameFR =  `Arceus Psy`;
if (pkmn && pkmn.arceusIce) pkmn.arceusIce.renameFR =  `Arceus Glace`;
if (pkmn && pkmn.arceusDragon) pkmn.arceusDragon.renameFR =  `Arceus Dragon`;
if (pkmn && pkmn.arceusDark) pkmn.arceusDark.renameFR =  `Arceus Ténèbres`;
if (pkmn && pkmn.arceusFairy) pkmn.arceusFairy.renameFR =  `Arceus Fée`;
if (pkmn && pkmn.victini) pkmn.victini.renameFR =  `Victini`;
if (pkmn && pkmn.snivy) pkmn.snivy.renameFR =  `Vipélierre`;
if (pkmn && pkmn.servine) pkmn.servine.renameFR =  `Lianaja`;
if (pkmn && pkmn.serperior) pkmn.serperior.renameFR =  `Majaspic`;
if (pkmn && pkmn.tepig) pkmn.tepig.renameFR =  `Gruikui`;
if (pkmn && pkmn.pignite) pkmn.pignite.renameFR =  `Grotichon`;
if (pkmn && pkmn.emboar) pkmn.emboar.renameFR =  `Roitiflam`;
if (pkmn && pkmn.megaEmboar) pkmn.megaEmboar.renameFR =  `Méga-Roitiflam`;
if (pkmn && pkmn.oshawott) pkmn.oshawott.renameFR =  `Moustillon`;
if (pkmn && pkmn.dewott) pkmn.dewott.renameFR =  `Mateloutre`;
if (pkmn && pkmn.samurott) pkmn.samurott.renameFR =  `Clamiral`;
if (pkmn && pkmn.hisuianSamurott) pkmn.hisuianSamurott.renameFR =  `Clamiral de Hisui`;
if (pkmn && pkmn.patrat) pkmn.patrat.renameFR =  `Ratentif`;
if (pkmn && pkmn.watchog) pkmn.watchog.renameFR =  `Miradar`;
if (pkmn && pkmn.lillipup) pkmn.lillipup.renameFR =  `Ponchiot`;
if (pkmn && pkmn.herdier) pkmn.herdier.renameFR =  `Ponchien`;
if (pkmn && pkmn.stoutland) pkmn.stoutland.renameFR =  `Mastouffe`;
if (pkmn && pkmn.purrloin) pkmn.purrloin.renameFR =  `Chacripan`;
if (pkmn && pkmn.liepard) pkmn.liepard.renameFR =  `Léopardus`;
if (pkmn && pkmn.pansage) pkmn.pansage.renameFR =  `Feuillajou`;
if (pkmn && pkmn.simisage) pkmn.simisage.renameFR =  `Feuiloutan`;
if (pkmn && pkmn.pansear) pkmn.pansear.renameFR =  `Flamajou`;
if (pkmn && pkmn.simisear) pkmn.simisear.renameFR =  `Flamoutan`;
if (pkmn && pkmn.panpour) pkmn.panpour.renameFR =  `Flotajou`;
if (pkmn && pkmn.simipour) pkmn.simipour.renameFR =  `Flotoutan`;
if (pkmn && pkmn.munna) pkmn.munna.renameFR =  `Munna`;
if (pkmn && pkmn.musharna) pkmn.musharna.renameFR =  `Mushana`;
if (pkmn && pkmn.pidove) pkmn.pidove.renameFR =  `Poichigeon`;
if (pkmn && pkmn.tranquill) pkmn.tranquill.renameFR =  `Colombeau`;
if (pkmn && pkmn.unfezant) pkmn.unfezant.renameFR =  `Déflaisan`;
if (pkmn && pkmn.blitzle) pkmn.blitzle.renameFR =  `Zébibron`;
if (pkmn && pkmn.zebstrika) pkmn.zebstrika.renameFR =  `Zéblitz`;
if (pkmn && pkmn.roggenrola) pkmn.roggenrola.renameFR =  `Nodulithe`;
if (pkmn && pkmn.boldore) pkmn.boldore.renameFR =  `Géolithe`;
if (pkmn && pkmn.gigalith) pkmn.gigalith.renameFR =  `Gigalithe`;
if (pkmn && pkmn.woobat) pkmn.woobat.renameFR =  `Chovsourir`;
if (pkmn && pkmn.swoobat) pkmn.swoobat.renameFR =  `Rhinolove`;
if (pkmn && pkmn.drilbur) pkmn.drilbur.renameFR =  `Rototaupe`;
if (pkmn && pkmn.excadrill) pkmn.excadrill.renameFR =  `Minotaupe`;
if (pkmn && pkmn.megaExcadrill) pkmn.megaExcadrill.renameFR =  `Méga-Minotaupe`;
if (pkmn && pkmn.audino) pkmn.audino.renameFR =  `Nanméouïe`;
if (pkmn && pkmn.megaAudino) pkmn.megaAudino.renameFR =  `Méga-Nanméouïe`;
if (pkmn && pkmn.timburr) pkmn.timburr.renameFR =  `Charpenti`;
if (pkmn && pkmn.gurdurr) pkmn.gurdurr.renameFR =  `Ouvrifier`;
if (pkmn && pkmn.conkeldurr) pkmn.conkeldurr.renameFR =  `Bétochef`;
if (pkmn && pkmn.tympole) pkmn.tympole.renameFR =  `Tritonde`;
if (pkmn && pkmn.palpitoad) pkmn.palpitoad.renameFR =  `Batracné`;
if (pkmn && pkmn.seismitoad) pkmn.seismitoad.renameFR =  `Crapustule`;
if (pkmn && pkmn.throh) pkmn.throh.renameFR =  `Judokrak`;
if (pkmn && pkmn.sawk) pkmn.sawk.renameFR =  `Karaclée`;
if (pkmn && pkmn.sewaddle) pkmn.sewaddle.renameFR =  `Larveyette`;
if (pkmn && pkmn.swadloon) pkmn.swadloon.renameFR =  `Couverdure`;
if (pkmn && pkmn.leavanny) pkmn.leavanny.renameFR =  `Manternel`;
if (pkmn && pkmn.venipede) pkmn.venipede.renameFR =  `Venipatte`;
if (pkmn && pkmn.whirlipede) pkmn.whirlipede.renameFR =  `Scobolide`;
if (pkmn && pkmn.scolipede) pkmn.scolipede.renameFR =  `Brutapode`;
if (pkmn && pkmn.cottonee) pkmn.cottonee.renameFR =  `Doudouvet`;
if (pkmn && pkmn.whimsicott) pkmn.whimsicott.renameFR =  `Farfaduvet`;
if (pkmn && pkmn.petilil) pkmn.petilil.renameFR =  `Chlorobule`;
if (pkmn && pkmn.lilligant) pkmn.lilligant.renameFR =  `Fragilady`;
if (pkmn && pkmn.hisuianLilligant) pkmn.hisuianLilligant.renameFR =  `Fragilady de Hisui`;
if (pkmn && pkmn.basculin) pkmn.basculin.renameFR =  `Bargantua`;
if (pkmn && pkmn.basculinBlue) pkmn.basculinBlue.renameFR =  `Bargantua Bleu`;
if (pkmn && pkmn.basculinWhite) pkmn.basculinWhite.renameFR =  `Bargantua Blanc`;
if (pkmn && pkmn.basculegionM) pkmn.basculegionM.renameFR =  `Paragruel Mâle`;
if (pkmn && pkmn.basculegionF) pkmn.basculegionF.renameFR =  `Paragruel Femelle`;
if (pkmn && pkmn.sandile) pkmn.sandile.renameFR =  `Mascaïman`;
if (pkmn && pkmn.krokorok) pkmn.krokorok.renameFR =  `Escroco`;
if (pkmn && pkmn.krookodile) pkmn.krookodile.renameFR =  `Crocorible`;
if (pkmn && pkmn.darumaka) pkmn.darumaka.renameFR =  `Darumarond`;
if (pkmn && pkmn.galarianDarumaka) pkmn.galarianDarumaka.renameFR =  `Darumarond de Galar`;
if (pkmn && pkmn.darmanitan) pkmn.darmanitan.renameFR =  `Darumacho`;
if (pkmn && pkmn.galarianDarmanitan) pkmn.galarianDarmanitan.renameFR =  `Darumacho de Galar`;
if (pkmn && pkmn.maractus) pkmn.maractus.renameFR =  `Maracachi`;
if (pkmn && pkmn.dwebble) pkmn.dwebble.renameFR =  `Crabicoque`;
if (pkmn && pkmn.crustle) pkmn.crustle.renameFR =  `Crabaraque`;
if (pkmn && pkmn.scraggy) pkmn.scraggy.renameFR =  `Baggiguane`;
if (pkmn && pkmn.scrafty) pkmn.scrafty.renameFR =  `Baggaïd`;
if (pkmn && pkmn.sigilyph) pkmn.sigilyph.renameFR =  `Cryptéro`;
if (pkmn && pkmn.yamask) pkmn.yamask.renameFR =  `Tutafeh`;
if (pkmn && pkmn.galarianYamask) pkmn.galarianYamask.renameFR =  `Tutafeh de Galar`;
if (pkmn && pkmn.cofagrigus) pkmn.cofagrigus.renameFR =  `Tutankafer`;
if (pkmn && pkmn.runerigus) pkmn.runerigus.renameFR =  `Tutétékri`;
if (pkmn && pkmn.tirtouga) pkmn.tirtouga.renameFR =  `Carapagos`;
if (pkmn && pkmn.carracosta) pkmn.carracosta.renameFR =  `Mégapagos`;
if (pkmn && pkmn.archen) pkmn.archen.renameFR =  `Arkéapti`;
if (pkmn && pkmn.archeops) pkmn.archeops.renameFR =  `Aéroptéryx`;
if (pkmn && pkmn.trubbish) pkmn.trubbish.renameFR =  `Miamiasme`;
if (pkmn && pkmn.garbodor) pkmn.garbodor.renameFR =  `Miasmax`;
if (pkmn && pkmn.garbodorGmax) pkmn.garbodorGmax.renameFR =  `Miasmax Gigamax`;
if (pkmn && pkmn.zorua) pkmn.zorua.renameFR =  `Zorua`;
if (pkmn && pkmn.hisuianZorua) pkmn.hisuianZorua.renameFR =  `Zorua de Hisui`;
if (pkmn && pkmn.zoroark) pkmn.zoroark.renameFR =  `Zoroark`;
if (pkmn && pkmn.hisuianZoroark) pkmn.hisuianZoroark.renameFR =  `Zoroark de Hisui`;
if (pkmn && pkmn.minccino) pkmn.minccino.renameFR =  `Chinchidou`;
if (pkmn && pkmn.cinccino) pkmn.cinccino.renameFR =  `Pashmilla`;
if (pkmn && pkmn.gothita) pkmn.gothita.renameFR =  `Scrutella`;
if (pkmn && pkmn.gothorita) pkmn.gothorita.renameFR =  `Mesmérella`;
if (pkmn && pkmn.gothitelle) pkmn.gothitelle.renameFR =  `Sidérella`;
if (pkmn && pkmn.solosis) pkmn.solosis.renameFR =  `Nucléos`;
if (pkmn && pkmn.duosion) pkmn.duosion.renameFR =  `Méios`;
if (pkmn && pkmn.reuniclus) pkmn.reuniclus.renameFR =  `Symbios`;
if (pkmn && pkmn.ducklett) pkmn.ducklett.renameFR =  `Couaneton`;
if (pkmn && pkmn.swanna) pkmn.swanna.renameFR =  `Lakmécygne`;
if (pkmn && pkmn.vanillite) pkmn.vanillite.renameFR =  `Sorbébé`;
if (pkmn && pkmn.vanillish) pkmn.vanillish.renameFR =  `Sorboul`;
if (pkmn && pkmn.vanilluxe) pkmn.vanilluxe.renameFR =  `Sorbouboul`;
if (pkmn && pkmn.deerling) pkmn.deerling.renameFR =  `Vivaldaim`;
if (pkmn && pkmn.deerlingAutumn) pkmn.deerlingAutumn.renameFR =  `Vivaldaim Automne`;
if (pkmn && pkmn.deerlingSpring) pkmn.deerlingSpring.renameFR =  `Vivaldaim Printemps`;
if (pkmn && pkmn.deerlingWinter) pkmn.deerlingWinter.renameFR =  `Vivaldaim Hiver`;
if (pkmn && pkmn.sawsbuck) pkmn.sawsbuck.renameFR =  `Haydaim`;
if (pkmn && pkmn.sawsbuckAutumn) pkmn.sawsbuckAutumn.renameFR =  `Haydaim Automne`;
if (pkmn && pkmn.sawsbuckSpring) pkmn.sawsbuckSpring.renameFR =  `Haydaim Printemps`;
if (pkmn && pkmn.sawsbuckWinter) pkmn.sawsbuckWinter.renameFR =  `Haydaim Hiver`;
if (pkmn && pkmn.emolga) pkmn.emolga.renameFR =  `Emolga`;
if (pkmn && pkmn.emolgaEvent) pkmn.emolgaEvent.renameFR =  `Emolga`;
if (pkmn && pkmn.karrablast) pkmn.karrablast.renameFR =  `Carabing`;
if (pkmn && pkmn.escavalier) pkmn.escavalier.renameFR =  `Lançargot`;
if (pkmn && pkmn.foongus) pkmn.foongus.renameFR =  `Trompignon`;
if (pkmn && pkmn.amoonguss) pkmn.amoonguss.renameFR =  `Gaulet`;
if (pkmn && pkmn.frillish) pkmn.frillish.renameFR =  `Viskuse`;
if (pkmn && pkmn.jellicent) pkmn.jellicent.renameFR =  `Moyade`;
if (pkmn && pkmn.alomomola) pkmn.alomomola.renameFR =  `Mamanbo`;
if (pkmn && pkmn.joltik) pkmn.joltik.renameFR =  `Statitik`;
if (pkmn && pkmn.galvantula) pkmn.galvantula.renameFR =  `Mygavolt`;
if (pkmn && pkmn.ferroseed) pkmn.ferroseed.renameFR =  `Grindur`;
if (pkmn && pkmn.ferrothorn) pkmn.ferrothorn.renameFR =  `Noacier`;
if (pkmn && pkmn.klink) pkmn.klink.renameFR =  `Tic`;
if (pkmn && pkmn.klang) pkmn.klang.renameFR =  `Clic`;
if (pkmn && pkmn.klinklang) pkmn.klinklang.renameFR =  `Cliticlic`;
if (pkmn && pkmn.tynamo) pkmn.tynamo.renameFR =  `Anchwatt`;
if (pkmn && pkmn.eelektrik) pkmn.eelektrik.renameFR =  `Lampéroie`;
if (pkmn && pkmn.eelektross) pkmn.eelektross.renameFR =  `Ohmassacre`;
if (pkmn && pkmn.megaEelektross) pkmn.megaEelektross.renameFR =  `Méga-Ohmassacre`;
if (pkmn && pkmn.elgyem) pkmn.elgyem.renameFR =  `Lewsor`;
if (pkmn && pkmn.beheeyem) pkmn.beheeyem.renameFR =  `Neitram`;
if (pkmn && pkmn.litwick) pkmn.litwick.renameFR =  `Funécire`;
if (pkmn && pkmn.lampent) pkmn.lampent.renameFR =  `Mélancolux`;
if (pkmn && pkmn.chandelure) pkmn.chandelure.renameFR =  `Lugulabre`;
if (pkmn && pkmn.megaChandelure) pkmn.megaChandelure.renameFR =  `Méga-Lugulabre`;
if (pkmn && pkmn.axew) pkmn.axew.renameFR =  `Coupenotte`;
if (pkmn && pkmn.fraxure) pkmn.fraxure.renameFR =  `Incisache`;
if (pkmn && pkmn.haxorus) pkmn.haxorus.renameFR =  `Tranchodon`;
if (pkmn && pkmn.cubchoo) pkmn.cubchoo.renameFR =  `Polarhume`;
if (pkmn && pkmn.beartic) pkmn.beartic.renameFR =  `Polagriffe`;
if (pkmn && pkmn.cryogonal) pkmn.cryogonal.renameFR =  `Hexagel`;
if (pkmn && pkmn.shelmet) pkmn.shelmet.renameFR =  `Escargaume`;
if (pkmn && pkmn.accelgor) pkmn.accelgor.renameFR =  `Limaspeed`;
if (pkmn && pkmn.stunfisk) pkmn.stunfisk.renameFR =  `Limonde`;
if (pkmn && pkmn.galarianStunfisk) pkmn.galarianStunfisk.renameFR =  `Limonde de Galar`;
if (pkmn && pkmn.mienfoo) pkmn.mienfoo.renameFR =  `Kungfouine`;
if (pkmn && pkmn.mienshao) pkmn.mienshao.renameFR =  `Shaofouine`;
if (pkmn && pkmn.druddigon) pkmn.druddigon.renameFR =  `Drakkarmin`;
if (pkmn && pkmn.golett) pkmn.golett.renameFR =  `Gringolem`;
if (pkmn && pkmn.golurk) pkmn.golurk.renameFR =  `Golemastoc`;
if (pkmn && pkmn.megaGolurk) pkmn.megaGolurk.renameFR =  `Méga-Golemastoc`;
if (pkmn && pkmn.pawniard) pkmn.pawniard.renameFR =  `Scalpion`;
if (pkmn && pkmn.bisharp) pkmn.bisharp.renameFR =  `Scalproie`;
if (pkmn && pkmn.kingambit) pkmn.kingambit.renameFR =  `Scalpereur`;
if (pkmn && pkmn.bouffalant) pkmn.bouffalant.renameFR =  `Frison`;
if (pkmn && pkmn.rufflet) pkmn.rufflet.renameFR =  `Furaiglon`;
if (pkmn && pkmn.braviary) pkmn.braviary.renameFR =  `Gueriaigle`;
if (pkmn && pkmn.hisuianBraviary) pkmn.hisuianBraviary.renameFR =  `Gueriaigle de Hisui`;
if (pkmn && pkmn.vullaby) pkmn.vullaby.renameFR =  `Vostourno`;
if (pkmn && pkmn.mandibuzz) pkmn.mandibuzz.renameFR =  `Vaututrice`;
if (pkmn && pkmn.heatmor) pkmn.heatmor.renameFR =  `Aflamanoir`;
if (pkmn && pkmn.durant) pkmn.durant.renameFR =  `Fermite`;
if (pkmn && pkmn.deino) pkmn.deino.renameFR =  `Solochi`;
if (pkmn && pkmn.zweilous) pkmn.zweilous.renameFR =  `Diamat`;
if (pkmn && pkmn.hydreigon) pkmn.hydreigon.renameFR =  `Trioxhydre`;
if (pkmn && pkmn.larvesta) pkmn.larvesta.renameFR =  `Pyronille`;
if (pkmn && pkmn.volcarona) pkmn.volcarona.renameFR =  `Pyrax`;
if (pkmn && pkmn.cobalion) pkmn.cobalion.renameFR =  `Cobaltium`;
if (pkmn && pkmn.terrakion) pkmn.terrakion.renameFR =  `Terrakium`;
if (pkmn && pkmn.virizion) pkmn.virizion.renameFR =  `Viridium`;
if (pkmn && pkmn.tornadus) pkmn.tornadus.renameFR =  `Boréas`;
if (pkmn && pkmn.tornadusTherian) pkmn.tornadusTherian.renameFR =  `Boréas Totémique`;
if (pkmn && pkmn.thundurus) pkmn.thundurus.renameFR =  `Fulguris`;
if (pkmn && pkmn.thundurusTherian) pkmn.thundurusTherian.renameFR =  `Fulguris Totémique`;
if (pkmn && pkmn.landorus) pkmn.landorus.renameFR =  `Démétéros`;
if (pkmn && pkmn.landorusTherian) pkmn.landorusTherian.renameFR =  `Démétéros Totémique`;
if (pkmn && pkmn.enamorus) pkmn.enamorus.renameFR =  `Amovénus`;
if (pkmn && pkmn.enamorusTherian) pkmn.enamorusTherian.renameFR =  `Amovénus Totémique`;
if (pkmn && pkmn.reshiram) pkmn.reshiram.renameFR =  `Reshiram`;
if (pkmn && pkmn.zekrom) pkmn.zekrom.renameFR =  `Zekrom`;
if (pkmn && pkmn.kyurem) pkmn.kyurem.renameFR =  `Kyurem`;
if (pkmn && pkmn.kyuremBlack) pkmn.kyuremBlack.renameFR =  `Kyurem Noir`;
if (pkmn && pkmn.kyuremWhite) pkmn.kyuremWhite.renameFR =  `Kyurem Blanc`;
if (pkmn && pkmn.keldeo) pkmn.keldeo.renameFR =  `Keldeo`;
if (pkmn && pkmn.keldeoResolute) pkmn.keldeoResolute.renameFR =  `Keldeo Décidé`;
if (pkmn && pkmn.meloetta) pkmn.meloetta.renameFR =  `Meloetta`;
if (pkmn && pkmn.meloettaPirouette) pkmn.meloettaPirouette.renameFR =  `Meloetta Danse`;
if (pkmn && pkmn.genesect) pkmn.genesect.renameFR =  `Genesect`;
if (pkmn && pkmn.genesectDouse) pkmn.genesectDouse.renameFR =  `Genesect Aqua`;
if (pkmn && pkmn.genesectShock) pkmn.genesectShock.renameFR =  `Genesect Choc`;
if (pkmn && pkmn.genesectBurn) pkmn.genesectBurn.renameFR =  `Genesect Pyro`;
if (pkmn && pkmn.genesectChill) pkmn.genesectChill.renameFR =  `Genesect Cryo`;
if (pkmn && pkmn.chespin) pkmn.chespin.renameFR =  `Marisson`;
if (pkmn && pkmn.quilladin) pkmn.quilladin.renameFR =  `Boguérisse`;
if (pkmn && pkmn.chesnaught) pkmn.chesnaught.renameFR =  `Blindépique`;
if (pkmn && pkmn.megaChesnaught) pkmn.megaChesnaught.renameFR =  `Méga-Blindépique`;
if (pkmn && pkmn.fennekin) pkmn.fennekin.renameFR =  `Feunnec`;
if (pkmn && pkmn.braixen) pkmn.braixen.renameFR =  `Roussil`;
if (pkmn && pkmn.delphox) pkmn.delphox.renameFR =  `Goupelin`;
if (pkmn && pkmn.megaDelphox) pkmn.megaDelphox.renameFR =  `Méga-Goupelin`;
if (pkmn && pkmn.froakie) pkmn.froakie.renameFR =  `Grenousse`;
if (pkmn && pkmn.frogadier) pkmn.frogadier.renameFR =  `Croâporal`;
if (pkmn && pkmn.greninja) pkmn.greninja.renameFR =  `Amphinobi`;
if (pkmn && pkmn.greninjaAsh) pkmn.greninjaAsh.renameFR =  `Amphinobi Forme Sacha`;
if (pkmn && pkmn.megaGreninja) pkmn.megaGreninja.renameFR =  `Méga-Amphinobi`;
if (pkmn && pkmn.bunnelby) pkmn.bunnelby.renameFR =  `Sapereau`;
if (pkmn && pkmn.diggersby) pkmn.diggersby.renameFR =  `Excavarenne`;
if (pkmn && pkmn.fletchling) pkmn.fletchling.renameFR =  `Passerouge`;
if (pkmn && pkmn.fletchinder) pkmn.fletchinder.renameFR =  `Braisillon`;
if (pkmn && pkmn.talonflame) pkmn.talonflame.renameFR =  `Flambusard`;
if (pkmn && pkmn.scatterbug) pkmn.scatterbug.renameFR =  `Lépidonille`;
if (pkmn && pkmn.spewpa) pkmn.spewpa.renameFR =  `Pérégrain`;
if (pkmn && pkmn.vivillon) pkmn.vivillon.renameFR =  `Prismillon`;
if (pkmn && pkmn.vivillonArchipelago) pkmn.vivillonArchipelago.renameFR =  `Prismillon Archipel`;
if (pkmn && pkmn.vivillonContinental) pkmn.vivillonContinental.renameFR =  `Prismillon Continent`;
if (pkmn && pkmn.vivillonElegant) pkmn.vivillonElegant.renameFR =  `Prismillon Monarchie`;
if (pkmn && pkmn.vivillonFancy) pkmn.vivillonFancy.renameFR =  `Prismillon Fantaisie`;
if (pkmn && pkmn.vivillonGarden) pkmn.vivillonGarden.renameFR =  `Prismillon Verdure`;
if (pkmn && pkmn.vivillonHighPlains) pkmn.vivillonHighPlains.renameFR =  `Prismillon Sécheresse`;
if (pkmn && pkmn.vivillonIcySnow) pkmn.vivillonIcySnow.renameFR =  `Prismillon Blizzard`;
if (pkmn && pkmn.vivillonJungle) pkmn.vivillonJungle.renameFR =  `Prismillon Jungle`;
if (pkmn && pkmn.vivillonMarine) pkmn.vivillonMarine.renameFR =  `Prismillon Rivage`;
if (pkmn && pkmn.vivillonModern) pkmn.vivillonModern.renameFR =  `Prismillon Métropole`;
if (pkmn && pkmn.vivillonMonsoon) pkmn.vivillonMonsoon.renameFR =  `Prismillon Cyclone`;
if (pkmn && pkmn.vivillonOcean) pkmn.vivillonOcean.renameFR =  `Prismillon Soleil Levant`;
if (pkmn && pkmn.vivillonPokeball) pkmn.vivillonPokeball.renameFR =  `Prismillon Poké Ball`;
if (pkmn && pkmn.vivillonPolar) pkmn.vivillonPolar.renameFR =  `Prismillon Banquise`;
if (pkmn && pkmn.vivillonRiver) pkmn.vivillonRiver.renameFR =  `Prismillon Delta`;
if (pkmn && pkmn.vivillonSandstorm) pkmn.vivillonSandstorm.renameFR =  `Prismillon Sable`;
if (pkmn && pkmn.vivillonSavanna) pkmn.vivillonSavanna.renameFR =  `Prismillon Mangrove`;
if (pkmn && pkmn.vivillonSun) pkmn.vivillonSun.renameFR =  `Prismillon Zénith`;
if (pkmn && pkmn.vivillonTundra) pkmn.vivillonTundra.renameFR =  `Prismillon Glace`;
if (pkmn && pkmn.litleo) pkmn.litleo.renameFR =  `Hélionceau`;
if (pkmn && pkmn.pyroar) pkmn.pyroar.renameFR =  `Némélios`;
if (pkmn && pkmn.megaPyroar) pkmn.megaPyroar.renameFR =  `Méga-Némélios`;
if (pkmn && pkmn.flabebe) pkmn.flabebe.renameFR =  `Flabébé`;
if (pkmn && pkmn.flabebeBlue) pkmn.flabebeBlue.renameFR =  `Flabébé Bleu`;
if (pkmn && pkmn.flabebeOrange) pkmn.flabebeOrange.renameFR =  `Flabébé Orange`;
if (pkmn && pkmn.flabebeWhite) pkmn.flabebeWhite.renameFR =  `Flabébé Blanc`;
if (pkmn && pkmn.flabebeYellow) pkmn.flabebeYellow.renameFR =  `Flabébé Jaune`;
if (pkmn && pkmn.floette) pkmn.floette.renameFR =  `Floette`;
if (pkmn && pkmn.floetteBlue) pkmn.floetteBlue.renameFR =  `Floette Bleu`;
if (pkmn && pkmn.floetteOrange) pkmn.floetteOrange.renameFR =  `Floette Orange`;
if (pkmn && pkmn.floetteWhite) pkmn.floetteWhite.renameFR =  `Floette Blanc`;
if (pkmn && pkmn.floetteYellow) pkmn.floetteYellow.renameFR =  `Floette Jaune`;
if (pkmn && pkmn.floetteEternal) pkmn.floetteEternal.renameFR =  `Floette Éternel`;
if (pkmn && pkmn.megaFloette) pkmn.megaFloette.renameFR =  `Méga-Floette`;
if (pkmn && pkmn.florges) pkmn.florges.renameFR =  `Florges`;
if (pkmn && pkmn.florgesBlue) pkmn.florgesBlue.renameFR =  `Florges Bleu`;
if (pkmn && pkmn.florgesOrange) pkmn.florgesOrange.renameFR =  `Florges Orange`;
if (pkmn && pkmn.florgesWhite) pkmn.florgesWhite.renameFR =  `Florges Blanc`;
if (pkmn && pkmn.florgesYellow) pkmn.florgesYellow.renameFR =  `Florges Jaune`;
if (pkmn && pkmn.skiddo) pkmn.skiddo.renameFR =  `Cabriolaine`;
if (pkmn && pkmn.gogoat) pkmn.gogoat.renameFR =  `Chevroum`;
if (pkmn && pkmn.pancham) pkmn.pancham.renameFR =  `Pandespiègle`;
if (pkmn && pkmn.pangoro) pkmn.pangoro.renameFR =  `Pandarbare`;
if (pkmn && pkmn.furfrou) pkmn.furfrou.renameFR =  `Couafarel`;
if (pkmn && pkmn.furfrouHeart) pkmn.furfrouHeart.renameFR =  `Couafarel Cœur`;
if (pkmn && pkmn.furfrouStar) pkmn.furfrouStar.renameFR =  `Couafarel Étoile`;
if (pkmn && pkmn.furfrouDiamond) pkmn.furfrouDiamond.renameFR =  `Couafarel Diamant`;
if (pkmn && pkmn.furfrouDebutante) pkmn.furfrouDebutante.renameFR =  `Couafarel Demoiselle`;
if (pkmn && pkmn.furfrouMatron) pkmn.furfrouMatron.renameFR =  `Couafarel Madame`;
if (pkmn && pkmn.furfrouDandy) pkmn.furfrouDandy.renameFR =  `Couafarel Monsieur`;
if (pkmn && pkmn.furfrouReine) pkmn.furfrouReine.renameFR =  `Couafarel Coupe Reine`;
if (pkmn && pkmn.furfrouKabuki) pkmn.furfrouKabuki.renameFR =  `Couafarel Kabuki`;
if (pkmn && pkmn.furfrouPharaoh) pkmn.furfrouPharaoh.renameFR =  `Couafarel Pharaon`;
if (pkmn && pkmn.espurr) pkmn.espurr.renameFR =  `Psystigri`;
if (pkmn && pkmn.meowstic) pkmn.meowstic.renameFR =  `Mistigrix`;
if (pkmn && pkmn.megaMeowstic) pkmn.megaMeowstic.renameFR =  `Méga-Mistigrix`;
if (pkmn && pkmn.honedge) pkmn.honedge.renameFR =  `Monorpale`;
if (pkmn && pkmn.doublade) pkmn.doublade.renameFR =  `Dimoclès`;
if (pkmn && pkmn.aegislash) pkmn.aegislash.renameFR =  `Exagide`;
if (pkmn && pkmn.spritzee) pkmn.spritzee.renameFR =  `Fluvetin`;
if (pkmn && pkmn.aromatisse) pkmn.aromatisse.renameFR =  `Cocotine`;
if (pkmn && pkmn.swirlix) pkmn.swirlix.renameFR =  `Sucroquin`;
if (pkmn && pkmn.slurpuff) pkmn.slurpuff.renameFR =  `Cupcanaille`;
if (pkmn && pkmn.inkay) pkmn.inkay.renameFR =  `Sepiatop`;
if (pkmn && pkmn.malamar) pkmn.malamar.renameFR =  `Sepiatroce`;
if (pkmn && pkmn.megaMalamar) pkmn.megaMalamar.renameFR =  `Méga-Sepiatroce`;
if (pkmn && pkmn.binacle) pkmn.binacle.renameFR =  `Opermine`;
if (pkmn && pkmn.barbaracle) pkmn.barbaracle.renameFR =  `Golgopathe`;
if (pkmn && pkmn.megaBarbaracle) pkmn.megaBarbaracle.renameFR =  `Méga-Golgopathe`;
if (pkmn && pkmn.skrelp) pkmn.skrelp.renameFR =  `Venalgue`;
if (pkmn && pkmn.dragalge) pkmn.dragalge.renameFR =  `Kravarech`;
if (pkmn && pkmn.megaDragalge) pkmn.megaDragalge.renameFR =  `Méga-Kravarech`;
if (pkmn && pkmn.clauncher) pkmn.clauncher.renameFR =  `Flingouste`;
if (pkmn && pkmn.clawitzer) pkmn.clawitzer.renameFR =  `Gamblast`;
if (pkmn && pkmn.helioptile) pkmn.helioptile.renameFR =  `Galvaran`;
if (pkmn && pkmn.heliolisk) pkmn.heliolisk.renameFR =  `Iguolta`;
if (pkmn && pkmn.tyrunt) pkmn.tyrunt.renameFR =  `Ptyranidur`;
if (pkmn && pkmn.tyrantrum) pkmn.tyrantrum.renameFR =  `Rexillius`;
if (pkmn && pkmn.amaura) pkmn.amaura.renameFR =  `Amagara`;
if (pkmn && pkmn.aurorus) pkmn.aurorus.renameFR =  `Dragmara`;
if (pkmn && pkmn.hawlucha) pkmn.hawlucha.renameFR =  `Brutalibré`;
if (pkmn && pkmn.megaHawlucha) pkmn.megaHawlucha.renameFR =  `Méga-Brutalibré`;
if (pkmn && pkmn.dedenne) pkmn.dedenne.renameFR =  `Dedenne`;
if (pkmn && pkmn.carbink) pkmn.carbink.renameFR =  `Strassie`;
if (pkmn && pkmn.goomy) pkmn.goomy.renameFR =  `Mucuscule`;
if (pkmn && pkmn.sliggoo) pkmn.sliggoo.renameFR =  `Colimucus`;
if (pkmn && pkmn.hisuianSliggoo) pkmn.hisuianSliggoo.renameFR =  `Colimucus de Hisui`;
if (pkmn && pkmn.goodra) pkmn.goodra.renameFR =  `Muplodocus`;
if (pkmn && pkmn.hisuianGoodra) pkmn.hisuianGoodra.renameFR =  `Muplodocus de Hisui`;
if (pkmn && pkmn.klefki) pkmn.klefki.renameFR =  `Trousselin`;
if (pkmn && pkmn.phantump) pkmn.phantump.renameFR =  `Brocélôme`;
if (pkmn && pkmn.trevenant) pkmn.trevenant.renameFR =  `Desséliande`;
if (pkmn && pkmn.pumpkaboo) pkmn.pumpkaboo.renameFR =  `Pitrouille`;
if (pkmn && pkmn.gourgeist) pkmn.gourgeist.renameFR =  `Banshitrouye`;
if (pkmn && pkmn.bergmite) pkmn.bergmite.renameFR =  `Grelaçon`;
if (pkmn && pkmn.avalugg) pkmn.avalugg.renameFR =  `Séracrawl`;
if (pkmn && pkmn.hisuianAvalugg) pkmn.hisuianAvalugg.renameFR =  `Séracrawl de Hisui`;
if (pkmn && pkmn.noibat) pkmn.noibat.renameFR =  `Sonistrelle`;
if (pkmn && pkmn.noivern) pkmn.noivern.renameFR =  `Bruyverne`;
if (pkmn && pkmn.xerneas) pkmn.xerneas.renameFR =  `Xerneas`;
if (pkmn && pkmn.yveltal) pkmn.yveltal.renameFR =  `Yveltal`;
if (pkmn && pkmn.zygarde10) pkmn.zygarde10.renameFR =  `Zygarde Forme 10 %`;
if (pkmn && pkmn.zygarde50) pkmn.zygarde50.renameFR =  `Zygarde Forme 50 %`;
if (pkmn && pkmn.zygarde100) pkmn.zygarde100.renameFR =  `Zygarde Forme Parfaite`;
if (pkmn && pkmn.megaZygarde) pkmn.megaZygarde.renameFR =  `Méga-Zygarde`;
if (pkmn && pkmn.diancie) pkmn.diancie.renameFR =  `Diancie`;
if (pkmn && pkmn.megaDiancie) pkmn.megaDiancie.renameFR =  `Méga-Diancie`;
if (pkmn && pkmn.hoopa) pkmn.hoopa.renameFR =  `Hoopa Enchaîné`;
if (pkmn && pkmn.hoopaUnbound) pkmn.hoopaUnbound.renameFR =  `Hoopa Déchaîné`;
if (pkmn && pkmn.volcanion) pkmn.volcanion.renameFR =  `Volcanion`;
if (pkmn && pkmn.rowlet) pkmn.rowlet.renameFR =  `Brindibou`;
if (pkmn && pkmn.dartrix) pkmn.dartrix.renameFR =  `Efflèche`;
if (pkmn && pkmn.decidueye) pkmn.decidueye.renameFR =  `Archéduc`;
if (pkmn && pkmn.hisuianDecidueye) pkmn.hisuianDecidueye.renameFR =  `Archéduc de Hisui`;
if (pkmn && pkmn.litten) pkmn.litten.renameFR =  `Flamiaou`;
if (pkmn && pkmn.torracat) pkmn.torracat.renameFR =  `Matoufeu`;
if (pkmn && pkmn.incineroar) pkmn.incineroar.renameFR =  `Félinferno`;
if (pkmn && pkmn.popplio) pkmn.popplio.renameFR =  `Otaquin`;
if (pkmn && pkmn.brionne) pkmn.brionne.renameFR =  `Otarlette`;
if (pkmn && pkmn.primarina) pkmn.primarina.renameFR =  `Oratoria`;
if (pkmn && pkmn.pikipek) pkmn.pikipek.renameFR =  `Picassaut`;
if (pkmn && pkmn.trumbeak) pkmn.trumbeak.renameFR =  `Piclairon`;
if (pkmn && pkmn.toucannon) pkmn.toucannon.renameFR =  `Bazoucan`;
if (pkmn && pkmn.yungoos) pkmn.yungoos.renameFR =  `Manglouton`;
if (pkmn && pkmn.gumshoos) pkmn.gumshoos.renameFR =  `Argouste`;
if (pkmn && pkmn.grubbin) pkmn.grubbin.renameFR =  `Larvibule`;
if (pkmn && pkmn.charjabug) pkmn.charjabug.renameFR =  `Chrysapile`;
if (pkmn && pkmn.vikavolt) pkmn.vikavolt.renameFR =  `Lucanon`;
if (pkmn && pkmn.crabrawler) pkmn.crabrawler.renameFR =  `Crabagarre`;
if (pkmn && pkmn.crabominable) pkmn.crabominable.renameFR =  `Crabominable`;
if (pkmn && pkmn.megaCrabominable) pkmn.megaCrabominable.renameFR =  `Méga-Crabominable`;
if (pkmn && pkmn.oricorioBaile) pkmn.oricorioBaile.renameFR =  `Plumeline Style Flamenco`;
if (pkmn && pkmn.oricorioPomPom) pkmn.oricorioPomPom.renameFR =  `Plumeline Style Pom-Pom`;
if (pkmn && pkmn.oricorioPau) pkmn.oricorioPau.renameFR =  `Plumeline Style Hula`;
if (pkmn && pkmn.oricorioSensu) pkmn.oricorioSensu.renameFR =  `Plumeline Style Buyō`;
if (pkmn && pkmn.cutiefly) pkmn.cutiefly.renameFR =  `Bombydou`;
if (pkmn && pkmn.ribombee) pkmn.ribombee.renameFR =  `Rubombelle`;
if (pkmn && pkmn.rockruff) pkmn.rockruff.renameFR =  `Rocabot`;
if (pkmn && pkmn.lycanrocMidday) pkmn.lycanrocMidday.renameFR =  `Lougaroc Forme Diurne`;
if (pkmn && pkmn.lycanrocMidnight) pkmn.lycanrocMidnight.renameFR =  `Lougaroc Forme Nocturne`;
if (pkmn && pkmn.lycanrocDusk) pkmn.lycanrocDusk.renameFR =  `Lougaroc Forme Crépusculaire`;
if (pkmn && pkmn.wishiwashi) pkmn.wishiwashi.renameFR =  `Froussardine`;
if (pkmn && pkmn.wishiwashiSchool) pkmn.wishiwashiSchool.renameFR =  `Froussardine Forme Banc`;
if (pkmn && pkmn.mareanie) pkmn.mareanie.renameFR =  `Vorastérie`;
if (pkmn && pkmn.toxapex) pkmn.toxapex.renameFR =  `Prédastérie`;
if (pkmn && pkmn.mudbray) pkmn.mudbray.renameFR =  `Tiboudet`;
if (pkmn && pkmn.mudsdale) pkmn.mudsdale.renameFR =  `Bourrinos`;
if (pkmn && pkmn.dewpider) pkmn.dewpider.renameFR =  `Araqua`;
if (pkmn && pkmn.araquanid) pkmn.araquanid.renameFR =  `Tarenbulle`;
if (pkmn && pkmn.fomantis) pkmn.fomantis.renameFR =  `Mimantis`;
if (pkmn && pkmn.lurantis) pkmn.lurantis.renameFR =  `Floramantis`;
if (pkmn && pkmn.morelull) pkmn.morelull.renameFR =  `Spododo`;
if (pkmn && pkmn.shiinotic) pkmn.shiinotic.renameFR =  `Lampignon`;
if (pkmn && pkmn.salandit) pkmn.salandit.renameFR =  `Tritox`;
if (pkmn && pkmn.salazzle) pkmn.salazzle.renameFR =  `Malamandre`;
if (pkmn && pkmn.stufful) pkmn.stufful.renameFR =  `Nounourson`;
if (pkmn && pkmn.bewear) pkmn.bewear.renameFR =  `Chelours`;
if (pkmn && pkmn.bounsweet) pkmn.bounsweet.renameFR =  `Croquine`;
if (pkmn && pkmn.steenee) pkmn.steenee.renameFR =  `Candine`;
if (pkmn && pkmn.tsareena) pkmn.tsareena.renameFR =  `Sucreine`;
if (pkmn && pkmn.comfey) pkmn.comfey.renameFR =  `Guérilande`;
if (pkmn && pkmn.oranguru) pkmn.oranguru.renameFR =  `Gouroutan`;
if (pkmn && pkmn.passimian) pkmn.passimian.renameFR =  `Quartermac`;
if (pkmn && pkmn.wimpod) pkmn.wimpod.renameFR =  `Sovkipou`;
if (pkmn && pkmn.golisopod) pkmn.golisopod.renameFR =  `Sarmuraï`;
if (pkmn && pkmn.megaGolisopod) pkmn.megaGolisopod.renameFR =  `Méga-Sarmuraï`;
if (pkmn && pkmn.sandygast) pkmn.sandygast.renameFR =  `Bacabouh`;
if (pkmn && pkmn.palossand) pkmn.palossand.renameFR =  `Trépassable`;
if (pkmn && pkmn.pyukumuku) pkmn.pyukumuku.renameFR =  `Concombaffe`;
if (pkmn && pkmn.typeNull) pkmn.typeNull.renameFR =  `Type:0`;
if (pkmn && pkmn.silvally) pkmn.silvally.renameFR =  `Silvallié`;
if (pkmn && pkmn.minior) pkmn.minior.renameFR =  `Météno`;
if (pkmn && pkmn.miniorBlue) pkmn.miniorBlue.renameFR =  `Météno Noyeau Bleu`;
if (pkmn && pkmn.miniorGreen) pkmn.miniorGreen.renameFR =  `Météno Noyeau Vert`;
if (pkmn && pkmn.miniorIndigo) pkmn.miniorIndigo.renameFR =  `Météno Noyeau Indigo`;
if (pkmn && pkmn.miniorOrange) pkmn.miniorOrange.renameFR =  `Météno Noyeau Orange`;
if (pkmn && pkmn.miniorRed) pkmn.miniorRed.renameFR =  `Météno Noyeau Rouge`;
if (pkmn && pkmn.miniorViolet) pkmn.miniorViolet.renameFR =  `Météno Noyeau Violet`;
if (pkmn && pkmn.miniorYellow) pkmn.miniorYellow.renameFR =  `Météno Noyeau Jaune`;
if (pkmn && pkmn.komala) pkmn.komala.renameFR =  `Dodoala`;
if (pkmn && pkmn.turtonator) pkmn.turtonator.renameFR =  `Boumata`;
if (pkmn && pkmn.togedemaru) pkmn.togedemaru.renameFR =  `Togedemaru`;
if (pkmn && pkmn.mimikyu) pkmn.mimikyu.renameFR =  `Mimiqui`;
if (pkmn && pkmn.bruxish) pkmn.bruxish.renameFR =  `Denticrisse`;
if (pkmn && pkmn.drampa) pkmn.drampa.renameFR =  `Draïeul`;
if (pkmn && pkmn.megaDrampa) pkmn.megaDrampa.renameFR =  `Méga-Draïeul`;
if (pkmn && pkmn.dhelmise) pkmn.dhelmise.renameFR =  `Sinistrail`;
if (pkmn && pkmn.jangmoo) pkmn.jangmoo.renameFR =  `Bébécaille`;
if (pkmn && pkmn.hakamoo) pkmn.hakamoo.renameFR =  `Écaïd`;
if (pkmn && pkmn.kommoo) pkmn.kommoo.renameFR =  `Ékaïser`;
if (pkmn && pkmn.tapuKoko) pkmn.tapuKoko.renameFR =  `Tokorico`;
if (pkmn && pkmn.tapuLele) pkmn.tapuLele.renameFR =  `Tokopiyon`;
if (pkmn && pkmn.tapuBulu) pkmn.tapuBulu.renameFR =  `Tokotoro`;
if (pkmn && pkmn.tapuFini) pkmn.tapuFini.renameFR =  `Tokopisco`;
if (pkmn && pkmn.cosmog) pkmn.cosmog.renameFR =  `Cosmog`;
if (pkmn && pkmn.cosmoem) pkmn.cosmoem.renameFR =  `Cosmovum`;
if (pkmn && pkmn.solgaleo) pkmn.solgaleo.renameFR =  `Solgaleo`;
if (pkmn && pkmn.lunala) pkmn.lunala.renameFR =  `Lunala`;
if (pkmn && pkmn.nihilego) pkmn.nihilego.renameFR =  `Zéroïd`;
if (pkmn && pkmn.buzzwole) pkmn.buzzwole.renameFR =  `Mouscoto`;
if (pkmn && pkmn.pheromosa) pkmn.pheromosa.renameFR =  `Cancrelove`;
if (pkmn && pkmn.xurkitree) pkmn.xurkitree.renameFR =  `Câblifère`;
if (pkmn && pkmn.celesteela) pkmn.celesteela.renameFR =  `Bamboiselle`;
if (pkmn && pkmn.kartana) pkmn.kartana.renameFR =  `Katagami`;
if (pkmn && pkmn.guzzlord) pkmn.guzzlord.renameFR =  `Engloutyran`;
if (pkmn && pkmn.necrozma) pkmn.necrozma.renameFR =  `Necrozma`;
if (pkmn && pkmn.necrozmaDawnWings) pkmn.necrozmaDawnWings.renameFR =  `Necrozma Ailes de l'Aurore`;
if (pkmn && pkmn.necrozmaDuskMane) pkmn.necrozmaDuskMane.renameFR =  `Necrozma Crinière du Couchant`;
if (pkmn && pkmn.ultraNecrozma) pkmn.ultraNecrozma.renameFR =  `Ultra-Necrozma`;
if (pkmn && pkmn.magearna) pkmn.magearna.renameFR =  `Magearna`;
if (pkmn && pkmn.magearnaOriginal) pkmn.magearnaOriginal.renameFR =  `Magearna Couleur du Passé`;
if (pkmn && pkmn.megaMagearna) pkmn.megaMagearna.renameFR =  `Méga-Magearna`;
if (pkmn && pkmn.megaMagearnaOriginal) pkmn.megaMagearnaOriginal.renameFR =  `Méga-Magearna Originelle`;
if (pkmn && pkmn.marshadow) pkmn.marshadow.renameFR =  `Marshadow`;
if (pkmn && pkmn.poipole) pkmn.poipole.renameFR =  `Vémini`;
if (pkmn && pkmn.naganadel) pkmn.naganadel.renameFR =  `Mandrillon`;
if (pkmn && pkmn.stakataka) pkmn.stakataka.renameFR =  `Ama-Ama`;
if (pkmn && pkmn.blacephalon) pkmn.blacephalon.renameFR =  `Pierroteknik`;
if (pkmn && pkmn.zeraora) pkmn.zeraora.renameFR =  `Zeraora`;
if (pkmn && pkmn.megaZeraora) pkmn.megaZeraora.renameFR =  `Méga-Zeraora`;
if (pkmn && pkmn.meltan) pkmn.meltan.renameFR =  `Meltan`;
if (pkmn && pkmn.melmetal) pkmn.melmetal.renameFR =  `Melmetal`;
if (pkmn && pkmn.melmetalGmax) pkmn.melmetalGmax.renameFR =  `Melmetal Gigamax`;
if (pkmn && pkmn.grookey) pkmn.grookey.renameFR =  `Ouistempo`;
if (pkmn && pkmn.thwackey) pkmn.thwackey.renameFR =  `Badabouin`;
if (pkmn && pkmn.rillaboom) pkmn.rillaboom.renameFR =  `Gorythmic`;
if (pkmn && pkmn.rillaboomGmax) pkmn.rillaboomGmax.renameFR =  `Gorythmic Gigamax`;
if (pkmn && pkmn.scorbunny) pkmn.scorbunny.renameFR =  `Flambino`;
if (pkmn && pkmn.raboot) pkmn.raboot.renameFR =  `Lapyro`;
if (pkmn && pkmn.cinderace) pkmn.cinderace.renameFR =  `Pyrobut`;
if (pkmn && pkmn.cinderaceGmax) pkmn.cinderaceGmax.renameFR =  `Pyrobut Gigamax`;
if (pkmn && pkmn.sobble) pkmn.sobble.renameFR =  `Larméléon`;
if (pkmn && pkmn.drizzile) pkmn.drizzile.renameFR =  `Arrozard`;
if (pkmn && pkmn.inteleon) pkmn.inteleon.renameFR =  `Lézargus`;
if (pkmn && pkmn.inteleonGmax) pkmn.inteleonGmax.renameFR =  `Lézargus Gigamax`;
if (pkmn && pkmn.skwovet) pkmn.skwovet.renameFR =  `Rongourmand`;
if (pkmn && pkmn.greedent) pkmn.greedent.renameFR =  `Rongrigou`;
if (pkmn && pkmn.rookidee) pkmn.rookidee.renameFR =  `Minisange`;
if (pkmn && pkmn.corvisquire) pkmn.corvisquire.renameFR =  `Bleuseille`;
if (pkmn && pkmn.corviknight) pkmn.corviknight.renameFR =  `Corvaillus`;
if (pkmn && pkmn.corviknightGmax) pkmn.corviknightGmax.renameFR =  `Corvaillus Gigamax`;
if (pkmn && pkmn.blipbug) pkmn.blipbug.renameFR =  `Larvadar`;
if (pkmn && pkmn.dottler) pkmn.dottler.renameFR =  `Coléodôme`;
if (pkmn && pkmn.orbeetle) pkmn.orbeetle.renameFR =  `Astronelle`;
if (pkmn && pkmn.orbeetleGmax) pkmn.orbeetleGmax.renameFR =  `Astronelle Gigamax`;
if (pkmn && pkmn.nickit) pkmn.nickit.renameFR =  `Goupilou`;
if (pkmn && pkmn.thievul) pkmn.thievul.renameFR =  `Roublenard`;
if (pkmn && pkmn.gossifleur) pkmn.gossifleur.renameFR =  `Tournicoton`;
if (pkmn && pkmn.eldegoss) pkmn.eldegoss.renameFR =  `Blancoton`;
if (pkmn && pkmn.wooloo) pkmn.wooloo.renameFR =  `Moumouton`;
if (pkmn && pkmn.dubwool) pkmn.dubwool.renameFR =  `Moumouflon`;
if (pkmn && pkmn.chewtle) pkmn.chewtle.renameFR =  `Khélocrok`;
if (pkmn && pkmn.drednaw) pkmn.drednaw.renameFR =  `Torgamord`;
if (pkmn && pkmn.drednawGmax) pkmn.drednawGmax.renameFR =  `Torgamord Gigamax`;
if (pkmn && pkmn.yamper) pkmn.yamper.renameFR =  `Voltoutou`;
if (pkmn && pkmn.boltund) pkmn.boltund.renameFR =  `Fulgudog`;
if (pkmn && pkmn.rolycoly) pkmn.rolycoly.renameFR =  `Charbi`;
if (pkmn && pkmn.carkol) pkmn.carkol.renameFR =  `Wagomine`;
if (pkmn && pkmn.coalossal) pkmn.coalossal.renameFR =  `Monthracite`;
if (pkmn && pkmn.coalossalGmax) pkmn.coalossalGmax.renameFR =  `Monthracite Gigamax`;
if (pkmn && pkmn.applin) pkmn.applin.renameFR =  `Verpom`;
if (pkmn && pkmn.flapple) pkmn.flapple.renameFR =  `Pomdrapi`;
if (pkmn && pkmn.appletun) pkmn.appletun.renameFR =  `Dratatin`;
if (pkmn && pkmn.appletunGmax) pkmn.appletunGmax.renameFR =  `Dratatin Gigamax`;
if (pkmn && pkmn.dipplin) pkmn.dipplin.renameFR =  `Pomdramour`;
if (pkmn && pkmn.hydrapple) pkmn.hydrapple.renameFR =  `Pomdorochi`;
if (pkmn && pkmn.silicobra) pkmn.silicobra.renameFR =  `Dunaja`;
if (pkmn && pkmn.sandaconda) pkmn.sandaconda.renameFR =  `Dunaconda`;
if (pkmn && pkmn.sandacondaGmax) pkmn.sandacondaGmax.renameFR =  `Dunaconda Gigamax`;
if (pkmn && pkmn.cramorant) pkmn.cramorant.renameFR =  `Nigosier`;
if (pkmn && pkmn.arrokuda) pkmn.arrokuda.renameFR =  `Embrochet`;
if (pkmn && pkmn.barraskewda) pkmn.barraskewda.renameFR =  `Hastacuda`;
if (pkmn && pkmn.toxel) pkmn.toxel.renameFR =  `Toxizap`;
if (pkmn && pkmn.toxtricity) pkmn.toxtricity.renameFR =  `Salarsen`;
if (pkmn && pkmn.toxtricityGmax) pkmn.toxtricityGmax.renameFR =  `Salarsen Forme Aigüe Gigamax`;
if (pkmn && pkmn.sizzlipede) pkmn.sizzlipede.renameFR =  `Grillepattes`;
if (pkmn && pkmn.centiskorch) pkmn.centiskorch.renameFR =  `Scolocendre`;
if (pkmn && pkmn.centiskorchGmax) pkmn.centiskorchGmax.renameFR =  `Scolocendre Gigamax`;
if (pkmn && pkmn.clobbopus) pkmn.clobbopus.renameFR =  `Poulpaf`;
if (pkmn && pkmn.grapploct) pkmn.grapploct.renameFR =  `Krakos`;
if (pkmn && pkmn.sinistea) pkmn.sinistea.renameFR =  `Théffroi`;
if (pkmn && pkmn.polteageist) pkmn.polteageist.renameFR =  `Polthégeist`;
if (pkmn && pkmn.hatenna) pkmn.hatenna.renameFR =  `Bibichut`;
if (pkmn && pkmn.hattrem) pkmn.hattrem.renameFR =  `Chapotus`;
if (pkmn && pkmn.hatterene) pkmn.hatterene.renameFR =  `Sorcilence`;
if (pkmn && pkmn.hattereneGmax) pkmn.hattereneGmax.renameFR =  `Sorcilence Gigamax`;
if (pkmn && pkmn.impidimp) pkmn.impidimp.renameFR =  `Grimalin`;
if (pkmn && pkmn.morgrem) pkmn.morgrem.renameFR =  `Fourbelin`;
if (pkmn && pkmn.grimmsnarl) pkmn.grimmsnarl.renameFR =  `Angoliath`;
if (pkmn && pkmn.grimmsnarlGmax) pkmn.grimmsnarlGmax.renameFR =  `Angoliath Gigamax`;
if (pkmn && pkmn.milcery) pkmn.milcery.renameFR =  `Crèmy`;
if (pkmn && pkmn.alcremie) pkmn.alcremie.renameFR =  `Charmilly`;
if (pkmn && pkmn.alcremieGmax) pkmn.alcremieGmax.renameFR =  `Charmilly Gigamax`;
if (pkmn && pkmn.falinks) pkmn.falinks.renameFR =  `Hexadron`;
if (pkmn && pkmn.megaFalinks) pkmn.megaFalinks.renameFR =  `Méga-Hexadron`;
if (pkmn && pkmn.pincurchin) pkmn.pincurchin.renameFR =  `Wattapik`;
if (pkmn && pkmn.snom) pkmn.snom.renameFR =  `Frissonille`;
if (pkmn && pkmn.frosmoth) pkmn.frosmoth.renameFR =  `Beldeneige`;
if (pkmn && pkmn.stonjourner) pkmn.stonjourner.renameFR =  `Dolman`;
if (pkmn && pkmn.eiscue) pkmn.eiscue.renameFR =  `Bekaglaçon`;
if (pkmn && pkmn.indeedee) pkmn.indeedee.renameFR =  `Wimessir`;
if (pkmn && pkmn.morpeko) pkmn.morpeko.renameFR =  `Morpeko`;
if (pkmn && pkmn.cufant) pkmn.cufant.renameFR =  `Charibari`;
if (pkmn && pkmn.copperajah) pkmn.copperajah.renameFR =  `Pachyradjah`;
if (pkmn && pkmn.copperajahGmax) pkmn.copperajahGmax.renameFR =  `Pachyradjah Gigamax`;
if (pkmn && pkmn.dracozolt) pkmn.dracozolt.renameFR =  `Galvagon`;
if (pkmn && pkmn.arctozolt) pkmn.arctozolt.renameFR =  `Galvagla`;
if (pkmn && pkmn.dracovish) pkmn.dracovish.renameFR =  `Hydragon`;
if (pkmn && pkmn.arctovish) pkmn.arctovish.renameFR =  `Hydragla`;
if (pkmn && pkmn.duraludon) pkmn.duraludon.renameFR =  `Duralugon`;
if (pkmn && pkmn.duraludonGmax) pkmn.duraludonGmax.renameFR =  `Duralugon Gigamax`;
if (pkmn && pkmn.archaludon) pkmn.archaludon.renameFR =  `Pondralugon`;
if (pkmn && pkmn.dreepy) pkmn.dreepy.renameFR =  `Fantyrm`;
if (pkmn && pkmn.drakloak) pkmn.drakloak.renameFR =  `Dispareptil`;
if (pkmn && pkmn.dragapult) pkmn.dragapult.renameFR =  `Lanssorien`;
if (pkmn && pkmn.zacian) pkmn.zacian.renameFR =  `Zacian`;
if (pkmn && pkmn.zacianCrowned) pkmn.zacianCrowned.renameFR =  `Zacian Épée Suprême`;
if (pkmn && pkmn.zamazenta) pkmn.zamazenta.renameFR =  `Zamazenta`;
if (pkmn && pkmn.zamazentaCrowned) pkmn.zamazentaCrowned.renameFR =  `Zamazenta Bouclier Suprême`;
if (pkmn && pkmn.eternatus) pkmn.eternatus.renameFR =  `Éthernatos`;
if (pkmn && pkmn.kubfu) pkmn.kubfu.renameFR =  `Wushours`;
if (pkmn && pkmn.urshifuSingle) pkmn.urshifuSingle.renameFR =  `Shifours Poing Final`;
if (pkmn && pkmn.urshifuSingleGmax) pkmn.urshifuSingleGmax.renameFR =  `Shifours Style Poing Final Gigamax`;
if (pkmn && pkmn.urshifuRapid) pkmn.urshifuRapid.renameFR =  `Shifours Style Mille Poings`;
if (pkmn && pkmn.urshifuRapidGmax) pkmn.urshifuRapidGmax.renameFR =  `Shifours Style Mille Poings Gigamax`;
if (pkmn && pkmn.zarude) pkmn.zarude.renameFR =  `Zarude`;
if (pkmn && pkmn.zarudeDada) pkmn.zarudeDada.renameFR =  `Zarude Papa`;
if (pkmn && pkmn.regieleki) pkmn.regieleki.renameFR =  `Regieleki`;
if (pkmn && pkmn.regidrago) pkmn.regidrago.renameFR =  `Regidrago`;
if (pkmn && pkmn.glastrier) pkmn.glastrier.renameFR =  `Blizzeval`;
if (pkmn && pkmn.spectrier) pkmn.spectrier.renameFR =  `Spectreval`;
if (pkmn && pkmn.calyrex) pkmn.calyrex.renameFR =  `Sylveroy`;
if (pkmn && pkmn.calyrexIce) pkmn.calyrexIce.renameFR =  `Calyrex Cavalier du Froid`;
if (pkmn && pkmn.calyrexShadow) pkmn.calyrexShadow.renameFR =  `Calyrex Cavalier d'Effroi`;
if (pkmn && pkmn.sprigatito) pkmn.sprigatito.renameFR =  `Poussacha`;
if (pkmn && pkmn.floragato) pkmn.floragato.renameFR =  `Matourgeon`;
if (pkmn && pkmn.meowscarada) pkmn.meowscarada.renameFR =  `Miascarade`;
if (pkmn && pkmn.fuecoco) pkmn.fuecoco.renameFR =  `Chochodile`;
if (pkmn && pkmn.crocalor) pkmn.crocalor.renameFR =  `Crocogril`;
if (pkmn && pkmn.skeledirge) pkmn.skeledirge.renameFR =  `Flâmigator`;
if (pkmn && pkmn.quaxly) pkmn.quaxly.renameFR =  `Coiffeton`;
if (pkmn && pkmn.quaxwell) pkmn.quaxwell.renameFR =  `Canarbello`;
if (pkmn && pkmn.quaquaval) pkmn.quaquaval.renameFR =  `Palmaval`;
if (pkmn && pkmn.lechonk) pkmn.lechonk.renameFR =  `Gourmelet`;
if (pkmn && pkmn.oinkologne) pkmn.oinkologne.renameFR =  `Fragroin`;
if (pkmn && pkmn.tarountula) pkmn.tarountula.renameFR =  `Tissenboule`;
if (pkmn && pkmn.spidops) pkmn.spidops.renameFR =  `Filentrappe`;
if (pkmn && pkmn.nymble) pkmn.nymble.renameFR =  `Lilliterelle`;
if (pkmn && pkmn.lokix) pkmn.lokix.renameFR =  `Gambex`;
if (pkmn && pkmn.pawmi) pkmn.pawmi.renameFR =  `Pohm`;
if (pkmn && pkmn.pawmo) pkmn.pawmo.renameFR =  `Pohmotte`;
if (pkmn && pkmn.pawmot) pkmn.pawmot.renameFR =  `Pohmarmotte`;
if (pkmn && pkmn.tandemaus) pkmn.tandemaus.renameFR =  `Compagnol`;
if (pkmn && pkmn.maushold) pkmn.maushold.renameFR =  `Famignol`;
if (pkmn && pkmn.fidough) pkmn.fidough.renameFR =  `Pâtachiot`;
if (pkmn && pkmn.dachsbun) pkmn.dachsbun.renameFR =  `Briochien`;
if (pkmn && pkmn.smoliv) pkmn.smoliv.renameFR =  `Olivini`;
if (pkmn && pkmn.dolliv) pkmn.dolliv.renameFR =  `Olivado`;
if (pkmn && pkmn.arboliva) pkmn.arboliva.renameFR =  `Arboliva`;
if (pkmn && pkmn.squawkabilly) pkmn.squawkabilly.renameFR =  `Tapatoès`;
if (pkmn && pkmn.nacli) pkmn.nacli.renameFR =  `Selutin`;
if (pkmn && pkmn.naclstack) pkmn.naclstack.renameFR =  `Amassel`;
if (pkmn && pkmn.garganacl) pkmn.garganacl.renameFR =  `Gigansel`;
if (pkmn && pkmn.charcadet) pkmn.charcadet.renameFR =  `Charbambin`;
if (pkmn && pkmn.armarouge) pkmn.armarouge.renameFR =  `Carmadura`;
if (pkmn && pkmn.ceruledge) pkmn.ceruledge.renameFR =  `Malvalame`;
if (pkmn && pkmn.tadbulb) pkmn.tadbulb.renameFR =  `Têtampoule`;
if (pkmn && pkmn.bellibolt) pkmn.bellibolt.renameFR =  `Ampibidou`;
if (pkmn && pkmn.wattrel) pkmn.wattrel.renameFR =  `Zapétrel`;
if (pkmn && pkmn.kilowattrel) pkmn.kilowattrel.renameFR =  `Fulgulairo`;
if (pkmn && pkmn.maschiff) pkmn.maschiff.renameFR =  `Grondogue`;
if (pkmn && pkmn.mabosstiff) pkmn.mabosstiff.renameFR =  `Dogrino`;
if (pkmn && pkmn.shroodle) pkmn.shroodle.renameFR =  `Gribouraigne`;
if (pkmn && pkmn.grafaiai) pkmn.grafaiai.renameFR =  `Tag-Tag`;
if (pkmn && pkmn.bramblin) pkmn.bramblin.renameFR =  `Virovent`;
if (pkmn && pkmn.brambleghast) pkmn.brambleghast.renameFR =  `Virevorreur`;
if (pkmn && pkmn.toedscool) pkmn.toedscool.renameFR =  `Terracool`;
if (pkmn && pkmn.toedscruel) pkmn.toedscruel.renameFR =  `Terracruel`;
if (pkmn && pkmn.klawf) pkmn.klawf.renameFR =  `Craparoi`;
if (pkmn && pkmn.capsakid) pkmn.capsakid.renameFR =  `Pimito`;
if (pkmn && pkmn.scovillain) pkmn.scovillain.renameFR =  `Scovilain`;
if (pkmn && pkmn.megaScovillain) pkmn.megaScovillain.renameFR =  `Méga-Scovilain`;
if (pkmn && pkmn.rellor) pkmn.rellor.renameFR =  `Léboulérou`;
if (pkmn && pkmn.rabsca) pkmn.rabsca.renameFR =  `Bérasca`;
if (pkmn && pkmn.flittle) pkmn.flittle.renameFR =  `Flotillon`;
if (pkmn && pkmn.espathra) pkmn.espathra.renameFR =  `Cléopsytra`;
if (pkmn && pkmn.tinkatink) pkmn.tinkatink.renameFR =  `Forgerette`;
if (pkmn && pkmn.tinkatuff) pkmn.tinkatuff.renameFR =  `Forgella`;
if (pkmn && pkmn.tinkaton) pkmn.tinkaton.renameFR =  `Forgelina`;
if (pkmn && pkmn.wiglett) pkmn.wiglett.renameFR =  `Taupikeau`;
if (pkmn && pkmn.wugtrio) pkmn.wugtrio.renameFR =  `Triopikeau`;
if (pkmn && pkmn.bombirdier) pkmn.bombirdier.renameFR =  `Lestombaile`;
if (pkmn && pkmn.finizen) pkmn.finizen.renameFR =  `Dofin`;
if (pkmn && pkmn.palafin) pkmn.palafin.renameFR =  `Superdofin`;
if (pkmn && pkmn.palafinHero) pkmn.palafinHero.renameFR =  `Superdofin Forme Super`;
if (pkmn && pkmn.varoom) pkmn.varoom.renameFR =  `Vrombi`;
if (pkmn && pkmn.revavroom) pkmn.revavroom.renameFR =  `Vrombotor`;
if (pkmn && pkmn.cyclizar) pkmn.cyclizar.renameFR =  `Motorizard`;
if (pkmn && pkmn.orthworm) pkmn.orthworm.renameFR =  `Ferdeter`;
if (pkmn && pkmn.glimmet) pkmn.glimmet.renameFR =  `Germéclat`;
if (pkmn && pkmn.glimmora) pkmn.glimmora.renameFR =  `Floréclat`;
if (pkmn && pkmn.megaGlimmora) pkmn.megaGlimmora.renameFR =  `Méga-Floréclat`;
if (pkmn && pkmn.greavard) pkmn.greavard.renameFR =  `Toutombe`;
if (pkmn && pkmn.houndstone) pkmn.houndstone.renameFR =  `Tomberro`;
if (pkmn && pkmn.flamigo) pkmn.flamigo.renameFR =  `Flamenroule`;
if (pkmn && pkmn.cetoddle) pkmn.cetoddle.renameFR =  `Piétacé`;
if (pkmn && pkmn.cetitan) pkmn.cetitan.renameFR =  `Balbalèze`;
if (pkmn && pkmn.veluza) pkmn.veluza.renameFR =  `Délestin`;
if (pkmn && pkmn.dondozo) pkmn.dondozo.renameFR =  `Oyacata`;
if (pkmn && pkmn.tatsugiri) pkmn.tatsugiri.renameFR =  `Nigirigon`;
if (pkmn && pkmn.tatsugiriDroopy) pkmn.tatsugiriDroopy.renameFR =  `Nigirigon Forme Affalée`;
if (pkmn && pkmn.tatsugiriStretchy) pkmn.tatsugiriStretchy.renameFR =  `Nigirigon Forme Raide`;
if (pkmn && pkmn.megaTatsugiriCurly) pkmn.megaTatsugiriCurly.renameFR =  `Méga-Nigirigon Boucle`;
if (pkmn && pkmn.megaTatsugiriDroopy) pkmn.megaTatsugiriDroopy.renameFR =  `Méga-Nigirigon Flasque`;
if (pkmn && pkmn.megaTatsugiriStretchy) pkmn.megaTatsugiriStretchy.renameFR =  `Méga-Nigirigon Raide`;
if (pkmn && pkmn.greatTusk) pkmn.greatTusk.renameFR =  `Fort-Ivoire`;
if (pkmn && pkmn.screamTail) pkmn.screamTail.renameFR =  `Hurle-Queue`;
if (pkmn && pkmn.bruteBonnet) pkmn.bruteBonnet.renameFR =  `Fongus-Furie`;
if (pkmn && pkmn.flutterMane) pkmn.flutterMane.renameFR =  `Flotte-Mèche`;
if (pkmn && pkmn.slitherWing) pkmn.slitherWing.renameFR =  `Rampe-Ailes`;
if (pkmn && pkmn.sandyShocks) pkmn.sandyShocks.renameFR =  `Pelage-Sablé`;
if (pkmn && pkmn.ironTreads) pkmn.ironTreads.renameFR =  `Roue-de-Fer`;
if (pkmn && pkmn.ironBundle) pkmn.ironBundle.renameFR =  `Hotte-de-Fer`;
if (pkmn && pkmn.ironHands) pkmn.ironHands.renameFR =  `Paume-de-Fer`;
if (pkmn && pkmn.ironJugulis) pkmn.ironJugulis.renameFR =  `Têtes-de-Fer`;
if (pkmn && pkmn.ironMoth) pkmn.ironMoth.renameFR =  `Mite-de-Fer`;
if (pkmn && pkmn.ironThorns) pkmn.ironThorns.renameFR =  `Épine-de-Fer`;
if (pkmn && pkmn.frigibax) pkmn.frigibax.renameFR =  `Frigodo`;
if (pkmn && pkmn.arctibax) pkmn.arctibax.renameFR =  `Cryodo`;
if (pkmn && pkmn.baxcalibur) pkmn.baxcalibur.renameFR =  `Glaivodo`;
if (pkmn && pkmn.megaBaxcalibur) pkmn.megaBaxcalibur.renameFR =  `Méga-Glaivodo`;
if (pkmn && pkmn.gimmighoul) pkmn.gimmighoul.renameFR =  `Mordudor`;
if (pkmn && pkmn.gimmighoulRoaming) pkmn.gimmighoulRoaming.renameFR =  `Mordudor Forme Marche`;
if (pkmn && pkmn.gholdengo) pkmn.gholdengo.renameFR =  `Gromago`;
if (pkmn && pkmn.woChien) pkmn.woChien.renameFR =  `Chongjian`;
if (pkmn && pkmn.chienPao) pkmn.chienPao.renameFR =  `Baojian`;
if (pkmn && pkmn.tingLu) pkmn.tingLu.renameFR =  `Dinglu`;
if (pkmn && pkmn.chiYu) pkmn.chiYu.renameFR =  `Yuyu`;
if (pkmn && pkmn.roaringMoon) pkmn.roaringMoon.renameFR =  `Rugit-Lune`;
if (pkmn && pkmn.ironValiant) pkmn.ironValiant.renameFR =  `Garde-de-Fer`;
if (pkmn && pkmn.ironLeaves) pkmn.ironLeaves.renameFR =  `Vert-de-Fer`;
if (pkmn && pkmn.ironBoulder) pkmn.ironBoulder.renameFR =  `Roc-de-Fer`;
if (pkmn && pkmn.ironCrown) pkmn.ironCrown.renameFR =  `Chef-de-Fer`;
if (pkmn && pkmn.koraidon) pkmn.koraidon.renameFR =  `Koraidon`;
if (pkmn && pkmn.miraidon) pkmn.miraidon.renameFR =  `Miraidon`;
if (pkmn && pkmn.walkingWake) pkmn.walkingWake.renameFR =  `Serpente-Eau`;
if (pkmn && pkmn.gougingFire) pkmn.gougingFire.renameFR =  `Feu-Perçant`;
if (pkmn && pkmn.ragingBolt) pkmn.ragingBolt.renameFR =  `Ire-Foudre`;
if (pkmn && pkmn.poltchageist) pkmn.poltchageist.renameFR =  `Poltchageist`;
if (pkmn && pkmn.sinistcha) pkmn.sinistcha.renameFR =  `Théffroyable`;
if (pkmn && pkmn.okidogi) pkmn.okidogi.renameFR =  `Félicanis`;
if (pkmn && pkmn.munkidori) pkmn.munkidori.renameFR =  `Fortusimia`;
if (pkmn && pkmn.fezandipiti) pkmn.fezandipiti.renameFR =  `Favianos`;
if (pkmn && pkmn.ogerponTeal) pkmn.ogerponTeal.renameFR =  `Ogerpon Masque Turquoise`;
if (pkmn && pkmn.ogerponWellspring) pkmn.ogerponWellspring.renameFR =  `Ogerpon Masque du Puits`;
if (pkmn && pkmn.ogerponHearthflame) pkmn.ogerponHearthflame.renameFR =  `Ogerpon Masque du Fourneau`;
if (pkmn && pkmn.ogerponCornerstone) pkmn.ogerponCornerstone.renameFR =  `Ogerpon Masque de la Pierre`;
if (pkmn && pkmn.terapagos) pkmn.terapagos.renameFR =  `Terapagos Forme Normale`;
if (pkmn && pkmn.terapagosTerastal) pkmn.terapagosTerastal.renameFR =  `Terapagos Téracristal`;
if (pkmn && pkmn.terapagosStellar) pkmn.terapagosStellar.renameFR =  `Terapagos Stellaire`;
if (pkmn && pkmn.pecharunt) pkmn.pecharunt.renameFR =  `Pêchaminus`;
if (pkmn && pkmn.singleStrikeUrshifuGmax) pkmn.singleStrikeUrshifuGmax.renameFR =  `Shifours Poing Final Gigamax`;
if (pkmn && pkmn.missingno) pkmn.missingno.renameFR =  `MissingNo.`;
if (pkmn && pkmn.f00) pkmn.f00.renameFR =  `f00`;
if (pkmn && pkmn.ghost) pkmn.ghost.renameFR =  `Fantôme`;
if (pkmn && pkmn.kabutopsB) pkmn.kabutopsB.renameFR =  `Kabutops B`;
if (pkmn && pkmn.aerodactylB) pkmn.aerodactylB.renameFR =  `Aérodactyl B`;
if (pkmn && pkmn.humanoid) pkmn.humanoid.renameFR =  `Humanoïde`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.renameFR =  `Onix de Cristal`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.renameFR =  `Ruban Souvenir`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.descriptionFR =  `Attribué lors d'occasions spéciales`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.renameFR =  `Ruban Endurance`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.descriptionFR =  `Attribué pour avoir atteint l'étage 30 de la Tour de Combat`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.renameFR =  `Ruban Sourire`;
if (pkmn && pkmn.crystalOnix) pkmn.crystalOnix.descriptionFR =  `Attribué très rarement pour avoir passé beaucoup de temps ensemble`;

// From scripts/areasDictionary.js
if (field && field.sunny) field.sunny.renameFR =  `Ensoleillement`;
if (field && field.rainy) field.rainy.renameFR =  `Pluie`;
if (field && field.sandstorm) field.sandstorm.renameFR =  `Tempête de Sable`;
if (field && field.hail) field.hail.renameFR =  `Grêle`;
if (field && field.foggy) field.foggy.renameFR =  `Brouillard`;
if (field && field.electricTerrain) field.electricTerrain.renameFR =  `Champ Électrifié`;
if (field && field.grassyTerrain) field.grassyTerrain.renameFR =  `Champ Herbu`;
if (field && field.mistyTerrain) field.mistyTerrain.renameFR =  `Champ Brumeux`;
if (field && field.psychicTerrain) field.psychicTerrain.renameFR =  `Champ Psychique`;
if (field && field.trickRoom) field.trickRoom.renameFR =  `Distorsion`;
if (field && field.weirdRoom) field.weirdRoom.renameFR =  `Zone Étrange`;
if (field && field.crossRoom) field.crossRoom.renameFR =  `Salle Croix`;
if (field && field.lightScreen) field.lightScreen.renameFR =  `Mur Lumière`;
if (field && field.safeguard) field.safeguard.renameFR =  `Rune Protect`;
if (field && field.reflect) field.reflect.renameFR =  `Reflet`;
if (field && field.simpleAura) field.simpleAura.renameFR =  `Aura Simple`;
if (field && field.moodyAura) field.moodyAura.renameFR =  `Aura Lunatique`;
if (field && field.serendipity) field.serendipity.renameFR =  `Sérendipité`;
if (field && field.harshSun) field.harshSun.renameFR =  `Soleil Ardent`;
if (field && field.thickFog) field.thickFog.renameFR =  `Brouillard Dense`;
if (field && field.fierceHail) field.fierceHail.renameFR =  `Grêle Violente`;
if (field && field.coarseSandstorm) field.coarseSandstorm.renameFR =  `Tempête de Sable Violente`;
if (field && field.heavyRain) field.heavyRain.renameFR =  `Pluie Torrentielle`;
if (field && field.mistyField) field.mistyField.renameFR =  `Champ Brumeux`;
if (field && field.grassyField) field.grassyField.renameFR =  `Champ Herbu`;
if (field && field.electricField) field.electricField.renameFR =  `Champ Électrifié`;
if (field && field.trickField) field.trickField.renameFR =  `Champ de Distorsion`;
if (field && field.reverseField) field.reverseField.renameFR =  `Champ Inversé`;
if (field && field.averageTime) field.averageTime.renameFR =  `Temps Moyen`;
if (field && field.noMercy) field.noMercy.renameFR =  `Sans Pitié`;
if (field && field.deltaStream) field.deltaStream.renameFR =  `Courant Delta`;
if (field && field.stealthRocks) field.stealthRocks.renameFR =  `Piège de Roc`;
if (field && field.heavyWeather) field.heavyWeather.renameFR =  `Météo Lourde`;
if (field && field.ironBody) field.ironBody.renameFR =  `Corps de Fer`;
if (field && field.wonderWard) field.wonderWard.renameFR =  `Gardien Merveilleux`;
if (field && field.neutralisingGas) field.neutralisingGas.renameFR =  `Gaz Neutralisant`;
if (field && field.weakeningCurse) field.weakeningCurse.renameFR =  `Malédiction Affaiblissante`;
if (field && field.fatiguingCurse) field.fatiguingCurse.renameFR =  `Malédiction Fatiguante`;
if (field && field.unnerve) field.unnerve.renameFR =  `Trouble`;
if (field && field.firePledge) field.firePledge.renameFR =  `Feu Serment`;
if (field && field.fightingPledge) field.fightingPledge.renameFR =  `Combat Serment`;
if (field && field.darkPledge) field.darkPledge.renameFR =  `Ténèbres Serment`;
if (field && field.dragonPledge) field.dragonPledge.renameFR =  `Dragon Serment`;
if (field && field.fairyPledge) field.fairyPledge.renameFR =  `Fée Serment`;
if (field && field.rockPledge) field.rockPledge.renameFR =  `Roche Serment`;
if (field && field.electricPledge) field.electricPledge.renameFR =  `Électrique Serment`;
if (field && field.steelPledge) field.steelPledge.renameFR =  `Acier Serment`;
if (field && field.grassPledge) field.grassPledge.renameFR =  `Plante Serment`;
if (field && field.waterPledge) field.waterPledge.renameFR =  `Eau Serment`;
if (field && field.IcePledge) field.IcePledge.renameFR =  `Glace Serment`;
if (field && field.poisonPledge) field.poisonPledge.renameFR =  `Poison Serment`;
if (field && field.flyingPledge) field.flyingPledge.renameFR =  `Vol Serment`;
if (field && field.normalPledge) field.normalPledge.renameFR =  `Normal Serment`;
if (field && field.bugPledge) field.bugPledge.renameFR =  `Insecte Serment`;
if (field && field.groundPledge) field.groundPledge.renameFR =  `Sol Serment`;
if (field && field.ghostPledge) field.ghostPledge.renameFR =  `Spectre Serment`;
if (field && field.psychicPledge) field.psychicPledge.renameFR =  `Psy Serment`;

// --- Areas: Wild Zones ---
if (areas && areas.wildlifePark) areas.wildlifePark.renameFR = `Parc Naturel`;
if (areas && areas.offshoreRigger) areas.offshoreRigger.renameFR = `Plateforme Offshore`;
if (areas && areas.safariZone) areas.safariZone.renameFR = `Zone Safari`;
if (areas && areas.coolBeach) areas.coolBeach.renameFR = `Plage Fraîche`;
if (areas && areas.computeringLab) areas.computeringLab.renameFR = `Labo Informatique`;
if (areas && areas.activeVolcano) areas.activeVolcano.renameFR = `Volcan Actif`;
if (areas && areas.berryForest) areas.berryForest.renameFR = `Forêt aux Baies`;
if (areas && areas.chargestoneCave) areas.chargestoneCave.renameFR = `Grotte Électrolithe`;
if (areas && areas.citySewers) areas.citySewers.renameFR = `Égouts Urbains`;
if (areas && areas.crashingSeaside) areas.crashingSeaside.renameFR = `Côte Déchaînée`;
if (areas && areas.dankCave) areas.dankCave.renameFR = `Grotte Humide`;
if (areas && areas.dracoLair) areas.dracoLair.renameFR = `Repaire du Dragon`;
if (areas && areas.evilSummit) areas.evilSummit.renameFR = `Sommet Maléfique`;
if (areas && areas.fidoPark) areas.fidoPark.renameFR = `Parc Fido`;
if (areas && areas.foggyGraveyard) areas.foggyGraveyard.renameFR = `Cimetière Brumeux`;
if (areas && areas.forestShrine) areas.forestShrine.renameFR = `Sanctuaire Forestier`;
if (areas && areas.frozenLake) areas.frozenLake.renameFR = `Lac Gelé`;
if (areas && areas.fuegoIronworks) areas.fuegoIronworks.renameFR = `Fonderie Fuego`;
if (areas && areas.gemstoneCavern) areas.gemstoneCavern.renameFR = `Caverne aux Gemmes`;
if (areas && areas.hollowNest) areas.hollowNest.renameFR = `Nid Creux`;
if (areas && areas.lavaLake) areas.lavaLake.renameFR = `Lac de Lave`;
if (areas && areas.lonLonRanch) areas.lonLonRanch.renameFR = `Ranch Lon Lon`;
if (areas && areas.mantleCore) areas.mantleCore.renameFR = `Noyau Terrestre`;
if (areas && areas.mountainTrail) areas.mountainTrail.renameFR = `Sentier de Montagne`;
if (areas && areas.permafrostGrotto) areas.permafrostGrotto.renameFR = `Grotte du Permafrost`;
if (areas && areas.pokemonDojo) areas.pokemonDojo.renameFR = `Dojo Pokémon`;
if (areas && areas.poniCanyon) areas.poniCanyon.renameFR = `Canyon de Poni`;
if (areas && areas.powerPlant) areas.powerPlant.renameFR = `Centrale Électrique`;
if (areas && areas.quietMeadow) areas.quietMeadow.renameFR = `Prairie Tranquille`;
if (areas && areas.relicPassage) areas.relicPassage.renameFR = `Passage des Reliques`;
if (areas && areas.sandyDunes) areas.sandyDunes.renameFR = `Dunes de Sable`;
if (areas && areas.saruTemple) areas.saruTemple.renameFR = `Temple Saru`;
if (areas && areas.scorchingBadlands) areas.scorchingBadlands.renameFR = `Terres Brûlées`;
if (areas && areas.seaBed) areas.seaBed.renameFR = `Fond Marin`;
if (areas && areas.seafoamCurrents) areas.seafoamCurrents.renameFR = `Courants Écume`;
if (areas && areas.skyHigh) areas.skyHigh.renameFR = `Ciel Élevé`;
if (areas && areas.snowpointCliff) areas.snowpointCliff.renameFR = `Falaise Frimapic`;
if (areas && areas.strangeSpace) areas.strangeSpace.renameFR = `Espace Étrange`;
if (areas && areas.streetCircus) areas.streetCircus.renameFR = `Cirque Ambulant`;
if (areas && areas.sunkenShip) areas.sunkenShip.renameFR = `Épave Engloutie`;
if (areas && areas.teaParlor) areas.teaParlor.renameFR = `Salon de Thé`;
if (areas && areas.thornwoodForest) areas.thornwoodForest.renameFR = `Forêt d'Épines`;
if (areas && areas.unovaWorks) areas.unovaWorks.renameFR = `Usine d'Unys`;
if (areas && areas.urbanWalkway) areas.urbanWalkway.renameFR = `Promenade Urbaine`;
if (areas && areas.valorLakeside) areas.valorLakeside.renameFR = `Rive du Lac Courage`;
if (areas && areas.verdantForest) areas.verdantForest.renameFR = `Forêt Verdoyante`;
if (areas && areas.weaponsFacility) areas.weaponsFacility.renameFR = `Arsenal`;
if (areas && areas.woodlandConcert) areas.woodlandConcert.renameFR = `Concert Forestier`;
if (areas && areas.abandonedManor) areas.abandonedManor.renameFR = `Manoir Abandonné`;

// --- Areas: Dungeons ---
if (areas && areas.sinnohUndergroundI) areas.sinnohUndergroundI.renameFR = `Souterrain de Sinnoh I`;
if (areas && areas.sinnohUndergroundII) areas.sinnohUndergroundII.renameFR = `Souterrain de Sinnoh II`;
if (areas && areas.sinnohUndergroundIII) areas.sinnohUndergroundIII.renameFR = `Souterrain de Sinnoh III`;
if (areas && areas.beginnerDojoI) areas.beginnerDojoI.renameFR = `Dojo Débutant I`;
if (areas && areas.beginnerDojoII) areas.beginnerDojoII.renameFR = `Dojo Débutant II`;
if (areas && areas.beginnerDojoIII) areas.beginnerDojoIII.renameFR = `Dojo Débutant III`;
if (areas && areas.advancedDojoI) areas.advancedDojoI.renameFR = `Dojo Avancé I`;
if (areas && areas.advancedDojoII) areas.advancedDojoII.renameFR = `Dojo Avancé II`;
if (areas && areas.advancedDojoIII) areas.advancedDojoIII.renameFR = `Dojo Avancé III`;
if (areas && areas.expertDojoI) areas.expertDojoI.renameFR = `Dojo Expert I`;
if (areas && areas.expertDojoII) areas.expertDojoII.renameFR = `Dojo Expert II`;
if (areas && areas.expertDojoIII) areas.expertDojoIII.renameFR = `Dojo Expert III`;
if (areas && areas.victoryRoadI) areas.victoryRoadI.renameFR = `Route Victoire I`;
if (areas && areas.victoryRoadII) areas.victoryRoadII.renameFR = `Route Victoire II`;
if (areas && areas.victoryRoadIII) areas.victoryRoadIII.renameFR = `Route Victoire III`;
if (areas && areas.glisteringCaveI) areas.glisteringCaveI.renameFR = `Grotte Étincelante I`;
if (areas && areas.glisteringCaveII) areas.glisteringCaveII.renameFR = `Grotte Étincelante II`;
if (areas && areas.glisteringCaveIII) areas.glisteringCaveIII.renameFR = `Grotte Étincelante III`;
if (areas && areas.sunkenTempleI) areas.sunkenTempleI.renameFR = `Temple Englouti I`;
if (areas && areas.sunkenTempleII) areas.sunkenTempleII.renameFR = `Temple Englouti II`;
if (areas && areas.sunkenTempleIII) areas.sunkenTempleIII.renameFR = `Temple Englouti III`;

// --- Areas: Events (non-Pokemon locations) ---
if (areas && areas.ecosphere) areas.ecosphere.renameFR = `Écosphère`;
if (areas && areas.protonCity) areas.protonCity.renameFR = `Cité Proton`;
if (areas && areas.aetherHeadquarters) areas.aetherHeadquarters.renameFR = `QG Æther`;
if (areas && areas.alphaRuins) areas.alphaRuins.renameFR = `Ruines Alpha`;
if (areas && areas.ancientTomb) areas.ancientTomb.renameFR = `Tombeau Antique`;
if (areas && areas.articSummit) areas.articSummit.renameFR = `Sommet Arctique`;
if (areas && areas.ceruleanCave) areas.ceruleanCave.renameFR = `Grotte Azurée`;
if (areas && areas.climatologyLab) areas.climatologyLab.renameFR = `Labo Climatologie`;
if (areas && areas.cosplayConvention) areas.cosplayConvention.renameFR = `Convention Cosplay`;
if (areas && areas.exoticPond) areas.exoticPond.renameFR = `Bassin Exotique`;
if (areas && areas.fierySummit) areas.fierySummit.renameFR = `Sommet Ardent`;
if (areas && areas.flowerMeadow) areas.flowerMeadow.renameFR = `Prairie Fleurie`;
if (areas && areas.frozenTomb) areas.frozenTomb.renameFR = `Tombeau Gelé`;
if (areas && areas.fusionPlant) areas.fusionPlant.renameFR = `Usine de Fusion`;
if (areas && areas.galacticHeadquarters) areas.galacticHeadquarters.renameFR = `QG Galaxie`;
if (areas && areas.galacticWarehouse) areas.galacticWarehouse.renameFR = `Entrepôt Galaxie`;
if (areas && areas.lakeAcuity) areas.lakeAcuity.renameFR = `Lac Savoir`;
if (areas && areas.lakeValor) areas.lakeValor.renameFR = `Lac Courage`;
if (areas && areas.lamodeDogwalk) areas.lamodeDogwalk.renameFR = `Promenade à la Mode`;
if (areas && areas.meteorCave) areas.meteorCave.renameFR = `Grotte Météore`;
if (areas && areas.paupauFestival) areas.paupauFestival.renameFR = `Festival Pau Pau`;
if (areas && areas.primalFissure) areas.primalFissure.renameFR = `Faille Primordiale`;
if (areas && areas.primitiveGrove) areas.primitiveGrove.renameFR = `Bosquet Primitif`;
if (areas && areas.steelTomb) areas.steelTomb.renameFR = `Tombeau d'Acier`;
if (areas && areas.summitOfSeasons) areas.summitOfSeasons.renameFR = `Sommet des Saisons`;
if (areas && areas.suspiciousManor) areas.suspiciousManor.renameFR = `Manoir Suspect`;
if (areas && areas.wormholeSpace) areas.wormholeSpace.renameFR = `Espace Ultra-Brèche`;
if (areas && areas.zoologyLab) areas.zoologyLab.renameFR = `Labo Zoologie`;

// --- Areas: Season ---
if (areas && areas.trickyForest) areas.trickyForest.renameFR = `Forêt Piégeuse`;
if (areas && areas.seasonMarshadow) areas.seasonMarshadow.renameFR = `Rencontre Effrayante`;

// --- Areas: Dimension ---
if (areas && areas.dimensionRift1) areas.dimensionRift1.renameFR = `Faille Dimensionnelle 1`;
if (areas && areas.dimensionRift2) areas.dimensionRift2.renameFR = `Faille Dimensionnelle 2`;
if (areas && areas.dimensionRift3) areas.dimensionRift3.renameFR = `Faille Dimensionnelle 3`;
if (areas && areas.dimensionRift4) areas.dimensionRift4.renameFR = `Faille Dimensionnelle 4`;
if (areas && areas.dimensionRaid1) areas.dimensionRaid1.renameFR = `Raid Dimensionnel 1`;
if (areas && areas.dimensionRaid2) areas.dimensionRaid2.renameFR = `Raid Dimensionnel 2`;
if (areas && areas.dimensionRaid3) areas.dimensionRaid3.renameFR = `Raid Dimensionnel 3`;
if (areas && areas.dimensionRaid4) areas.dimensionRaid4.renameFR = `Raid Dimensionnel 4`;

// --- Areas: Frontier special ---
if (areas && areas.frontierSpiralingTower) areas.frontierSpiralingTower.renameFR = `Tour en Spirale`;
if (areas && areas.frontierBattleFactory) areas.frontierBattleFactory.renameFR = `Usine de Combat`;

// --- Areas: Special / Secret ---
if (areas && areas.studioA) areas.studioA.renameFR = `Studio A`;
if (areas && areas.secretGhost) areas.secretGhost.renameFR = `Spectre Secret`;
if (areas && areas.secretOnix) areas.secretOnix.renameFR = `Onix Secret`;
if (areas && areas.secretHumanoid) areas.secretHumanoid.renameFR = `Humanoïde Secret`;
if (areas && areas.secretAerodactly) areas.secretAerodactly.renameFR = `Ptéra Secret`;
if (areas && areas.secretKabutops) areas.secretKabutops.renameFR = `Kabutops Secret`;
if (areas && areas.training) areas.training.renameFR = `Entraînement`;

// --- Season .name overrides ---
if (window.gameLang === 'fr') {
  if (typeof season !== 'undefined' && season.halloween) season.halloween.name = `Gala d'Halloween`;
  if (areas && areas.seasonMarshadow && areas.seasonMarshadow.name) areas.seasonMarshadow.name = `Rencontre Effrayante`;
}

};
window.i18n.fr.applyRenames();

