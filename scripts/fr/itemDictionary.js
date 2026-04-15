const item = {}

item.blackBelt = {
    rename: `Black Belt`,
    renameFR: `Ceinture Noire`,
    subtitle: `(Fighting)`,
    type: "held",
     evo: true,
    info: function() {return `${t_ui('itemInfo_001', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.blackGlasses = {
    rename: `Black Glasses`,
    renameFR: `Lunettes Noires`,
    subtitle: `(Dark)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_002', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.charcoal = {
    rename: `Charcoal`,
    renameFR: `Charbon`,
    subtitle: `(Fire)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_003', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonFang = {
    rename: `Dragon Fang`,
    renameFR: `Croc Dragon`,
    subtitle: `(Dragon)`,
    type: "held",
    evo: true,
    info: function() {return `${t_ui('itemInfo_004', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyFeather = {
    rename: `Fairy Feather`,
    renameFR: `Plume Enchantée`,
    subtitle: `(Fairy)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_005', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.hardStone = {
    rename: `Hard Stone`,
    renameFR: `Pierre Dure`,
    subtitle: `(Rock)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_006', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.magnet = {
    rename: `Magnet`,
    renameFR: `Aimant`,
    subtitle: `(Electric)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_007', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metalCoat = {
    rename: `Metal Coat`,
    renameFR: `Peau Métal`,
    subtitle: `(Steel)`,
    type: "held",
    evo: true,
    info: function() {return `${t_ui('itemInfo_008', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.miracleSeed = {
    rename: `Miracle Seed`,
    renameFR: `Graine Miracle`,
    subtitle: `(Grass)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_009', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mysticWater = {
    rename: `Mystic Water`,
    renameFR: `Eau Mystique`,
    subtitle: `(Water)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_010', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.neverMeltIce = {
    rename: `Never-Melt Ice`,
    renameFR: `Glace Éternelle`,
    subtitle: `(Ice)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_011', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonBarb = {
    rename: `Poison Barb`,
    renameFR: `Pic Venin`,
    subtitle: `(Poison)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_012', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sharpBeak = {
    rename: `Sharp Beak`,
    renameFR: `Bec Pointu`,
    subtitle: `(Flying)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_013', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silkScarf = {
    rename: `Silk Scarf`,
    renameFR: `Mouchoir Soie`,
    subtitle: `(Normal)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_014', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silverPowder = {
    rename: `Silver Powder`,
    renameFR: `Poudre Argentée`,
    subtitle: `(Bug)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_015', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.softSand = {
    rename: `Soft Sand`,
    renameFR: `Sable Doux`,
    subtitle: `(Ground)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_016', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.spellTag = {
    rename: `Spell Tag`,
    renameFR: `Rune Sort`,
    subtitle: `(Ghost)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_017', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.twistedSpoon = {
    rename: `Twisted Spoon`,
    renameFR: `Cuillère Tordue`,
    subtitle: `(Psychic)`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_018', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.eviolite = {
    rename: `Eviolite`,
    renameFR: `Évoluroc`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_019', this.power().toFixed(2))}`},
    power : function() { return 1+(returnItemLevel(this.id)/5)}
}

item.lightClay = {
    rename: `Light Clay`,
    renameFR: `Lumargile`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_020', this.power().toFixed(2))}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.mentalHerb = {
    rename: `Mental Herb`,
    renameFR: `Herbe Mental`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_021', this.power().toFixed(2))}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.flameOrb = {
    rename: `Flame Orb`,
    renameFR: `Orbe Flamme`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_022', this.power().toFixed(2), tagBurn)}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.toxicOrb = {
    rename: `Toxic Orb`,
    renameFR: `Orbe Toxique`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_022', this.power().toFixed(2), tagPoisoned)}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceBand = {
    rename: `Choice Band`,
    renameFR: `Bandeau Choix`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_023', this.power().toFixed(2))}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceSpecs = {
    rename: `Choice Specs`,
    renameFR: `Lunettes Choix`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_024', this.power().toFixed(2))}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.lifeOrb = {
    rename: `Life Orb`,
    renameFR: `Orbe Vie`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_025', this.power().toFixed(2))}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.assaultVest = {
    rename: `Assault Vest`,
    renameFR: `Veste de Combat`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_026', this.power().toFixed(2))}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.clearAmulet = {
    rename: `Clear Amulet`,
    renameFR: `Amulette Purifiante`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_027', Math.floor(this.power()))}`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.ejectPack = {
    rename: `Eject Pack`,
    renameFR: `Sac Fuite`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_028', this.power().toFixed(2))}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.ejectButton = {
    rename: `Eject Button`,
    renameFR: `Bouton Fuite`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_029', this.power().toFixed(2))}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.quickClaw = {
    rename: `Quick Claw`,
    renameFR: `Vive Griffe`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_030', this.power().toFixed(2))}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.loadedDice = {
    rename: `Loaded Dice`,
    renameFR: `Dés Pipés`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_031', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metronome = {
    rename: `Metronome`,
    renameFR: `Métronome`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_032', this.power().toFixed(2))}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.powerHerb = {
    rename: `Power Herb`,
    renameFR: `Herbe Pouvoir`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_033', this.power().toFixed(2))}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.luckyPunch = {
    rename: `Lucky Punch`,
    renameFR: `Poing Chance`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_034', this.power().toFixed(2))}`},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.laggingTail = {
    rename: `Lagging Tail`,
    renameFR: `Ralentiqueue`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_035', this.power().toFixed(2))}`},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.weaknessPolicy = {
    rename: `Weakness Policy`,
    renameFR: `Vulné-Assurance`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_036', this.power().toFixed(2))}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.heavyDutyBoots = {
    rename: `Heavy-Duty Boots`,
    renameFR: `Grosses Bottes`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_037', this.power().toFixed(2))}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.leftovers = {
    rename: `Leftovers`,
    renameFR: `Restes`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_038', this.power().toFixed(2))}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}


item.bugGem = {
    rename: `Bug Gem`,
    renameFR: `Joyau Insecte`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_039', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.darkGem = {
    rename: `Dark Gem`,
    renameFR: `Joyau Ténèbres`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_040', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonGem = {
    rename: `Dragon Gem`,
    renameFR: `Joyau Dragon`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_041', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.electricGem = {
    rename: `Electric Gem`,
    renameFR: `Joyau Électrik`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_042', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyGem = {
    rename: `Fairy Gem`,
    renameFR: `Joyau Fée`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_043', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fightingGem = {
    rename: `Fighting Gem`,
    renameFR: `Joyau Combat`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_044', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fireGem = {
    rename: `Fire Gem`,
    renameFR: `Joyau Feu`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_045', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.flyingGem = {
    rename: `Flying Gem`,
    renameFR: `Joyau Vol`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_046', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.ghostGem = {
    rename: `Ghost Gem`,
    renameFR: `Joyau Spectre`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_047', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.grassGem = {
    rename: `Grass Gem`,
    renameFR: `Joyau Plante`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_048', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.groundGem = {
    rename: `Ground Gem`,
    renameFR: `Joyau Sol`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_049', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.iceGem = {
    rename: `Ice Gem`,
    renameFR: `Joyau Glace`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_050', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.normalGem = {
    rename: `Normal Gem`,
    renameFR: `Joyau Normal`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_051', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonGem = {
    rename: `Poison Gem`,
    renameFR: `Joyau Poison`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_052', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.psychicGem = {
    rename: `Psychic Gem`,
    renameFR: `Joyau Psy`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_053', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.rockGem = {
    rename: `Rock Gem`,
    renameFR: `Joyau Roche`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_054', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.steelGem = {
    rename: `Steel Gem`,
    renameFR: `Joyau Acier`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_055', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.waterGem = {
    rename: `Water Gem`,
    renameFR: `Joyau Eau`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_056', this.power().toFixed(2))}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}


item.luckIncense = {
    rename: `Luck Incense`,
    renameFR: `Encens Veine`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_057', this.power())}`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.pureIncense = {
    rename: `Pure Incense`,
    renameFR: `Encens Pur`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_058', this.power())}`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.luckyEgg = {
    rename: `Lucky Egg`,
    renameFR: `Œuf Chance`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_059', this.power())}`},
    power : function() { return 40+(10*returnItemLevel(this.id))}
}

item.shinyCharm = {
    rename: `Shiny Charm`,
    renameFR: `Charme Chroma`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_060', this.power())}`},
    power : function() { return 0+(10*returnItemLevel(this.id))}
}


item.occaBerry = {
    rename: `Occa Berry`,
    renameFR: `Baie Chocco`,
    subtitle: `(Fire)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_061', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.passhoBerry = {
    rename: `Passho Berry`,
    renameFR: `Baie Pocpoc`,
    subtitle: `(Water)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_062', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.wacanBerry = {
    rename: `Wacan Berry`,
    renameFR: `Baie Parma`,
    subtitle: `(Electric)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_063', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.rindoBerry = {
    rename: `Rindo Berry`,
    renameFR: `Baie Ratam`,
    subtitle: `(Grass)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_064', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.yacheBerry = {
    rename: `Yache Berry`,
    renameFR: `Baie Nanone`,
    subtitle: `(Ice)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_065', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chopleBerry = {
    rename: `Chople Berry`,
    renameFR: `Baie Pomroz`,
    subtitle: `(Fighting)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_066', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kebiaBerry = {
    rename: `Kebia Berry`,
    renameFR: `Baie Kébia`,
    subtitle: `(Poison)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_067', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.shucaBerry = {
    rename: `Shuca Berry`,
    renameFR: `Baie Jouca`,
    subtitle: `(Ground)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_068', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.cobaBerry = {
    rename: `Coba Berry`,
    renameFR: `Baie Cobaba`,
    subtitle: `(Flying)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_069', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.payapaBerry = {
    rename: `Payapa Berry`,
    renameFR: `Baie Yapap`,
    subtitle: `(Psychic)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_070', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.tangaBerry = {
    rename: `Tanga Berry`,
    renameFR: `Baie Panga`,
    subtitle: `(Bug)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_071', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chartiBerry = {
    rename: `Charti Berry`,
    renameFR: `Baie Charti`,
    subtitle: `(Rock)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_072', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kasibBerry = {
    rename: `Kasib Berry`,
    renameFR: `Baie Sédra`,
    subtitle: `(Ghost)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_073', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.habanBerry = {
    rename: `Haban Berry`,
    renameFR: `Baie Fraigo`,
    subtitle: `(Dragon)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_074', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.colburBerry = {
    rename: `Colbur Berry`,
    renameFR: `Baie Lampou`,
    subtitle: `(Dark)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_075', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.babiriBerry = {
    rename: `Babiri Berry`,
    renameFR: `Baie Babiri`,
    subtitle: `(Steel)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_076', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.roseliBerry = {
    rename: `Roseli Berry`,
    renameFR: `Baie Selro`,
    subtitle: `(Fairy)`,
    type: "held",
    sort: "berry",
    info: function() {return `${t_ui('itemInfo_077', this.power())}`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}


item.terrainExtender = {
    rename: `Terrain Extender`,
    renameFR: `Champ’Duit`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_078', tagTrickRoom, tagWeirdRoom, tagCrossRoom, tagLightScreen, tagSafeguard, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.dampRock = {
    rename: `Damp Rock`,
    renameFR: `Roche Humide`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_079', tagRainy, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.heatRock = {
    rename: `Heat Rock`,
    renameFR: `Roche Chaude`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_079', tagSunny, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.icyRock = {
    rename: `Icy Rock`,
    renameFR: `Roche Glace`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_079', tagHail, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.smoothRock = {
    rename: `Smooth Rock`,
    renameFR: `Roche Lisse`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_079', tagSandstorm, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.electricSeed = {
    rename: `Electric Seed`,
    renameFR: `Graine Électrik`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_080', tagElectricTerrain, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.grassySeed = {
    rename: `Grassy Seed`,
    renameFR: `Graine Herbe`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_080', tagGrassyTerrain, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.mistySeed = {
    rename: `Misty Seed`,
    renameFR: `Graine Brume`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_080', tagMistyTerrain, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.foggySeed = {
    rename: `Foggy Seed`,
    renameFR: `Graine Brumeuse`,
    type: "held",
    info: function() {return `${t_ui('itemInfo_079', tagFoggy, this.power())}`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}


item.bottleCap = {
    rename: `Bottle Cap`,
    renameFR: `Capsule d’Argent`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_081')}`},
}

item.goldenBottleCap = {
    rename: `Golden Bottle Cap`,
    renameFR: `Capsule d'Or`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_082')}`},
}


item.timeCandy = {
    rename: `Time Candy`,
    renameFR: `Bonbon Temps`,
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 10*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `${t_ui('itemInfo_083')}`},
}

item.timeCandyXL = {
    rename: `Time Candy Xl`,
    renameFR: `Bonbon Temps XL`,
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `${t_ui('itemInfo_084')}`},
}

item.festivalTicket = {
    rename: `Festival Ticket`,
    renameFR: `Festicket`,
    type: "key",
    usable: true,
    effect: function() {
        seasonalSwitch() 
    },
    info: function() {return `${t_ui('itemInfo_085')}`},
}


item.rareCandy = {
    rename: `Rare Candy`,
    renameFR: `Super Bonbon`,
    type: 'key',
    itemToUse: true,
    info: function() {return `${t_ui('itemInfo_086')}`},
}

item.abilityPatch = {
    rename: `Ability Patch`,
    renameFR: `Patch Talent`,
    type: 'key',
    itemToUse: true,
    info: function() {return `${t_ui('itemInfo_087')}`},
}

item.abilityCapsule = {
    rename: `Ability Capsule`,
    renameFR: `Pilule Talent`,
    type: 'key',
    itemToUse: true,
    info: function() {return `${t_ui('itemInfo_088')}`},
}

item.heartScale = {
    rename: `Heart Scale`,
    renameFR: `Écaille Cœur`,
    type: 'key',
    itemToUse: true,
    info: function() {return `${t_ui('itemInfo_089')}`},
}

item.energyRoot = {
    rename: `Energy Root`,
    renameFR: `Racinénergie`,
    type: "key",
    usable: true,
    effect: function() {  if(saved.geneticOperation > 1) {afkSecondsGenetics += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `${t_ui('itemInfo_090')}`},
}

item.fashionCase = {
    rename: `Fashion Case`,
    renameFR: `Coffret Mode`,
    type: 'key',
    usable: true,
    info: function() {return `${t_ui('itemInfo_091')}`},
    effect: function() {

    let pickedDecor = []

    for (const i in item){
        if (item[i].type !== "decor") continue
        if (item[i].rarity == undefined) continue
        if (item[i].rarity == "rare" && rng(0.1)) pickedDecor.push(i)
        if (item[i].rarity == "common") pickedDecor.push(i)
    }

    pickedDecor = arrayPick(pickedDecor)


        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").style.display = "inline"
        document.getElementById("tooltipTop").innerHTML = `<img src="img/decor/${pickedDecor}.png" style="scale:2">`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >${format(pickedDecor)} Decor got!</div>
        </div>
        `

    item[pickedDecor].got++
    this.got--;
    updateItemBag()
    openTooltip()


    },
}


item.neutralMint = {
    rename: `Neutral Mint`,
    renameFR: `Menthe Neutre`,
    type: 'key',
    itemToUse: true,
    info: function() {return `${t_ui('itemInfo_092')}`},
}


item.autoRefightTicket = {
    rename: `Auto Refight Ticket`,
    renameFR: `Ticket Recombat Auto`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_093')}`},
}


item.yellowApricorn = {
    rename: `Yellow Apricorn`,
    renameFR: `Noigrume Jaune`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_094')}`},
}

item.pinkApricorn = {
    rename: `Pink Apricorn`,
    renameFR: `Noigrume Rose`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_094')}`},
}

item.greenApricorn = {
    rename: `Green Apricorn`,
    renameFR: `Noigrume Vert`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_094')}`},
}

item.whiteApricorn = {
    rename: `White Apricorn`,
    renameFR: `Noigrume Blanc`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_095')}`},
}

item.blackApricorn = {
    rename: `Black Apricorn`,
    renameFR: `Noigrume Noir`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_096')}`},
}


item.megaShard = {
    rename: `Mega Shard`,
    renameFR: `Éclat Méga`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_097')}`},
}

item.megaPiece = {
    rename: `Mega Piece`,
    renameFR: `Fragment Méga`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_097')}`},
}

item.megaChunk = {
    rename: `Mega Chunk`,
    renameFR: `Morceau Méga`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_097')}`},
}

item.megaCluster = {
    rename: `Mega Cluster`,
    renameFR: `Amas Méga`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_097')}`},
}

item.primalEarth = {
    rename: `Primal Earth`,
    renameFR: `Terre Primale`,
    type: "key",
    rotation: 2,
    itemToUse : true,
    info: function() {return `${t_ui('itemInfo_098')}`},
}


item.thunderousRock = {
    rename: `Thunderous Rock`,
    renameFR: `Roche Foudroyante`,
    type: "key",
    rotation: 1,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.articRock = {
    rename: `Artic Rock`,
    renameFR: `Roche Arctique`,
    type: "key",
    rotation: 1,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.ancientOrchid = {
    rename: `Ancient Orchid`,
    renameFR: `Orchidée Ancienne`,
    type: "key",
    rotation: 2,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.futureDisk = {
    rename: `Future Disk`,
    renameFR: `Disque Futur`,
    type: "key",
    rotation: 5,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.ancientKeystone = {
    rename: `Ancient Keystone`,
    renameFR: `Clé Ancienne`,
    type: "key",
    rotation: 3,
    info: function() {return `${t_ui('itemInfo_098')}`},
    
}

item.steelKeystone = {
    rename: `Steel Keystone`,
    renameFR: `Clé Acier`,
    type: "key",
    rotation: 3,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.frozenKeystone = {
    rename: `Frozen Keystone`,
    renameFR: `Clé Gelée`,
    type: "key",
    rotation: 3,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.aetherKeycard = {
    rename: `Aether Keycard`,
    renameFR: `Carte Aether`,
    type: "key",
    rotation: 4,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.wormholeResidue = {
    rename: `Wormhole Residue`,
    renameFR: `Résidu de Trou de Ver`,
    type: "key",
    rotation: 4,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.futureContraption = {
    rename: `Future Contraption`,
    renameFR: `Machinerie Future`,
    type: "key",
    rotation: 5,
    info: function() {return `${t_ui('itemInfo_098')}`},
}


item.redChain = {
    rename: `Red Chain`,
    renameFR: `Chaîne Rouge`,
    type: "key",
    rotation: 6,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.wisdomPetal = {
    rename: `Wisdom Petal`,
    renameFR: `Pétale de Sagesse`,
    type: "key",
    rotation: 6,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.epochFeather = {
    rename: `Epoch Feather`,
    renameFR: `Plume d'Époque`,
    type: "key",
    rotation: 1,
    info: function() {return `${t_ui('itemInfo_098')}`},
}

item.pokeflute = {
    rename: `Pokeflute`,
    renameFR: `Poké Flûte`,
    type: "key",
    rotation: 1,
    info: function() {return `${t_ui('itemInfo_098')}`},
}


item.oldGateau = {
    rename: `Old Gateau`,
    renameFR: `Vieux Gâteau`,
    type: "key",
    event: `halloween`,
    info: function() {return `${t_ui('itemInfo_099', season[saved.currentSeason].end.month, season[saved.currentSeason].end.day)}`},
}


item.hpUp = {
    rename: `HP Up`,
    renameFR: `PV Plus`,
    subtitle: `(Hp)`,
    type: 'key',
    vitamin: true,
    info: function() {return `${t_ui('itemInfo_100')}`},
}

item.protein = {
    rename: `Protein`,
    renameFR: `Protéine`,
    subtitle: `(Attack)`,
    type: 'key',
    vitamin: true,
    info: function() {return `${t_ui('itemInfo_101')}`},
}

item.iron = {
    rename: `Iron`,
    renameFR: `Fer`,
    subtitle: `(Defense)`,
    type: 'key',
    vitamin: true,
    info: function() {return `${t_ui('itemInfo_102')}`},
}

item.calcium = {
    rename: `Calcium`,
    renameFR: `Calcium`,
    subtitle: `(Special Attack)`,
    type: 'key',
    vitamin: true,
    info: function() {return `${t_ui('itemInfo_103')}`},
}

item.zinc = {
    rename: `Zinc`,
    renameFR: `Zinc`,
    subtitle: `(Special Defense)`,
    type: 'key',
    vitamin: true,
    info: function() {return `${t_ui('itemInfo_104')}`},
}

item.carbos = {
    rename: `Carbos`,
    renameFR: `Carbone`,
    subtitle: `(Speed)`,
    type: 'key',
    vitamin: true,
    info: function() {return `${t_ui('itemInfo_105')}`},
}


item.waterStone = {
    rename: `Water Stone`,
    renameFR: `Pierre Eau`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.thunderStone = {
    rename: `Thunder Stone`,
    renameFR: `Pierre Foudre`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.sunStone = {
    rename: `Sun Stone`,
    renameFR: `Pierre Soleil`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}

item.linkStone = {
    rename: `Link Stone`,
    renameFR: `Pierre Lien`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel4)}`},
}

item.ovalStone = {
    rename: `Oval Stone`,
    renameFR: `Pierre Ovale`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.moonStone = {
    rename: `Moon Stone`,
    renameFR: `Pierre Lune`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.leafStone = {
    rename: `Leaf Stone`,
    renameFR: `Pierre Plante`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.iceStone = {
    rename: `Ice Stone`,
    renameFR: `Pierre Glace`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}

item.fireStone = {
    rename: `Fire Stone`,
    renameFR: `Pierre Feu`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.duskStone = {
    rename: `Dusk Stone`,
    renameFR: `Pierre Nuit`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}
item.dawnStone = {
    rename: `Dawn Stone`,
    renameFR: `Pierre Aube`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}

item.shinyStone = {
    rename: `Shiny Stone`,
    renameFR: `Pierre Éclat`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel2)}`},
}

item.oddRock = {
    rename: `Odd Rock`,
    renameFR: `Roche Étrange`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_106', wildAreaLevel4)}`},
}


item.everstone = {
    rename: `neverstone`,
    renameFR: `Pierre Stase`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_107')}`},
}

item.powerAnklet = {
    rename: `Power Anklet`,
    renameFR: `Chaîne Pouvoir`,
    subtitle: `(Speed)`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_108')}`},
}

item.powerBand = {
    rename: `Power Band`,
    renameFR: `Bandeau Pouvoir`,
    subtitle: `(Special Defense)`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_109')}`},
}

item.powerBelt = {
    rename: `Power Belt`,
    renameFR: `Ceinture Pouvoir`,
    subtitle: `(Defense)`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_110')}`},
}

item.powerBracer = {
    rename: `Power Bracer`,
    renameFR: `Poignet Pouvoir`,
    subtitle: `(Attack)`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_111')}`},
}

item.powerLens = {
    rename: `Power Lens`,
    renameFR: `Lentille Pouvoir`,
    subtitle: `(Special Attack)`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_112')}`},
}

item.powerWeight = {
    rename: `Power Weight`,
    renameFR: `Poids Pouvoir`,
    subtitle: `(Hp)`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_113')}`},
}

item.machoBrace = {
    rename: `Macho Brace`,
    renameFR: `Bracelet Macho`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_114')}`},
}

item.lockCapsule = {
    rename: `Lock Capsule`,
    renameFR: `Poké Écrin`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_115')}`},
}

item.destinyKnot = {
    rename: `Destiny Knot`,
    renameFR: `Nœud Destin`,
    type: "key",
    genetics: true,
    info: function() {return `${t_ui('itemInfo_116')}`},
}


item.abomasite = {
    rename: `Abomasite`,
    renameFR: `Blizzarite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbomasnow.id },
}

item.absolite = {
    rename: `Absolite`,
    renameFR: `Absolite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbsol.id },
}

item.aerodactylite = {
    rename: `Aerodactylite`,
    renameFR: `Ptéraïte`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAerodactyl.id },
}

item.aggronite = {
    rename: `Aggronite`,
    renameFR: `Galekingite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAggron.id },
}

item.alakazite = {
    rename: `Alakazite`,
    renameFR: `Alakazamite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAlakazam.id },
}

item.altarianite = {
    rename: `Altarianite`,
    renameFR: `Altarite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAltaria.id },
}

item.ampharosite = {
    rename: `Ampharosite`,
    renameFR: `Pharampite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAmpharos.id },
}

item.audinite = {
    rename: `Audinite`,
    renameFR: `Nanméouïte`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAudino.id },
}

item.banettite = {
    rename: `Banettite`,
    renameFR: `Branettite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBanette.id },
}

item.barbaracite = {
    rename: `Barbaracite`,
    renameFR: `Barbaracite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBarbaracle.id },
}

item.baxcaliburite = {
    rename: `Baxcaliburite`,
    renameFR: `Bekaglaçonite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBaxcalibur.id },
}

item.beedrillite = {
    rename: `Beedrillite`,
    renameFR: `Dardargnite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBeedrill.id },
}

item.blastoisinite = {
    rename: `Blastoisinite`,
    renameFR: `Tortankite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlastoise.id },
}

item.blazikenite = {
    rename: `Blazikenite`,
    renameFR: `Braségalite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlaziken.id },
}

item.cameruptite = {
    rename: `Cameruptite`,
    renameFR: `Caméruptite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCamerupt.id },
}

item.charizarditeX = {
    rename: `Charizardite X`,
    renameFR: `Dracaufite X`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardX.id },
}

item.charizarditeY = {
    rename: `Charizardite Y`,
    renameFR: `Dracaufite Y`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardY.id },
}

item.diancite = {
    rename: `Diancite`,
    renameFR: `Diancite`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDiancie.id },
}

item.dragonitite = {
    rename: `Dragonitite`,
    renameFR: `Dracolitite`,
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDragonite.id },
}

item.falinksite = {
    rename: `Falinksite`,
    renameFR: `Hexadronite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaFalinks.id },
}

item.galladite = {
    rename: `Galladite`,
    renameFR: `Gallamite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGallade.id },
}

item.garchompite = {
    rename: `Garchompite`,
    renameFR: `Carchacrokite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGarchomp.id },
}

item.glalitite = {
    rename: `Glalitite`,
    renameFR: `Oniglalite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGlalie.id },
}

item.gardevoirite = {
    rename: `Gardevoirite`,
    renameFR: `Gardevoirite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGardevoir.id },
}

item.gengarite = {
    rename: `Gengarite`,
    renameFR: `Ectoplasmite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGengar.id },
}

item.gyaradosite = {
    rename: `Gyaradosite`,
    renameFR: `Léviatorite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGyarados.id },
}

item.heracronite = {
    rename: `Heracronite`,
    renameFR: `Scarhinoïte`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHeracross.id },
}

item.houndoominite = {
    rename: `Houndoominite`,
    renameFR: `Démolossite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHoundoom.id },
}

item.hawluchanite = {
    rename: `Hawluchanite`,
    renameFR: `Brutalibrite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHawlucha.id },
}

item.kangaskhanite = {
    rename: `Kangaskhanite`,
    renameFR: `Kangourexite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaKangaskhan.id },
}

item.lopunnite = {
    rename: `Lopunnite`,
    renameFR: `Lockpinite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLopunny.id },
}

item.lucarionite = {
    rename: `Lucarionite`,
    renameFR: `Lucarite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLucario.id },
}

item.manectite = {
    rename: `Manectite`,
    renameFR: `Élecsprintite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaManectric.id },
}

item.mawilite = {
    rename: `Mawilite`,
    renameFR: `Mysdibulite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMawile.id },
}

item.medichamite = {
    rename: `Medichamite`,
    renameFR: `Charminite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMedicham.id },
}

item.metagrossite = {
    rename: `Metagrossite`,
    renameFR: `Métalossite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMetagross.id },
}

item.mewtwoniteX = {
    rename: `Mewtwonite X`,
    renameFR: `Mewtwoïte X`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoX.id },
}

item.mewtwoniteY = {
    rename: `Mewtwonite Y`,
    renameFR: `Mewtwoïte Y`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoY.id },
}

item.pidgeotite = {
    rename: `Pidgeotite`,
    renameFR: `Roucarnagite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPidgeot.id },
}

item.pyroarite = {
    rename: `Pyroarite`,
    renameFR: `Néméliosite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPyroar.id },
}


item.pinsirite = {
    rename: `Pinsirite`,
    renameFR: `Scarabruite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPinsir.id },
}


item.raichutiteX = {
    rename: `Raichutite X`,
    renameFR: `Raichite X`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuX.id },
}

item.raichutiteY = {
    rename: `Raichutite Y`,
    renameFR: `Raichite Y`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuY.id },
}

item.sablenite = {
    rename: `Sablenite`,
    renameFR: `Ténéfixite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSableye.id },
}


item.salamencite = {
    rename: `Salamencite`,
    renameFR: `Drattakite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSalamence.id },
}

item.sceptilite = {
    rename: `Sceptilite`,
    renameFR: `Jungkite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSceptile.id },
}

item.scizorite = {
    rename: `Scizorite`,
    renameFR: `Cizayoxite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaScizor.id },
}

item.sharpedonite = {
    rename: `Sharpedonite`,
    renameFR: `Sharpedite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSharpedo.id },
}

item.slowbronite = {
    rename: `Slowbronite`,
    renameFR: `Flagadossite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSlowbro.id },
}

item.steelixite = {
    rename: `Steelixite`,
    renameFR: `Steelixite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSteelix.id },
}

item.swampertite = {
    rename: `Swampertite`,
    renameFR: `Laggronite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSwampert.id },
}

item.tyranitarite = {
    rename: `Tyranitarite`,
    renameFR: `Tyranocivite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaTyranitar.id },
}

item.venusaurite = {
    rename: `Venusaurite`,
    renameFR: `Florizarrite`,
    
    evo: true,
    info: function() {return `${t_ui('itemInfo_117', format(this.heldBonusPkmn()), this.heldBonusPower().toFixed(2))}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaVenusaur.id },
}


item.magazineSubscription = {
    rename: `Magazine Subscription`,
    renameFR: `Abonnement Magazine`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_118')}`},
}

item.battlePass = {
    rename: `Battle Pass`,
    renameFR: `Pass de Combat`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_119')}`},
}

item.replicatorUpgradeS = {
    rename: `Replicator Upgrade S`,
    renameFR: `Amélioration Réplicateur S`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_120')}`},
}

item.replicatorUpgradeE = {
    rename: `Replicator Upgrade E`,
    renameFR: `Amélioration Réplicateur E`,
    type: "key",
    info: function() {return `${t_ui('itemInfo_121')}`},
}


item.mysteryEgg = {
    rename: `Mystery Egg`,
    renameFR: `Œuf Mystère`,
    info: function() {return `${t_ui('itemInfo_122')}`},
    hidden:true
}

item.tmDummy = {
    rename: `Tm Dummy`,
    renameFR: `CT Factice`,
    hidden:true
}

item.nothing = {
    rename: `Nothing`,
    renameFR: `Rien`,
    hidden:true
}


item.buginiumZ = {
    rename: `Buginium Z`,
    renameFR: `Insectozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_123', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `bug`
}

item.darkiniumZ = {
    rename: `Darkinium Z`,
    renameFR: `Ténébrozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_124', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dark`
}

item.dragoniumZ = {
    rename: `Dragonium Z`,
    renameFR: `Dracozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_125', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dragon`
}

item.electriumZ = {
    rename: `Electrium Z`,
    renameFR: `Voltazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_126', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `electric`
}

item.fairiumZ = {
    rename: `Fairium Z`,
    renameFR: `Nymphézélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_127', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fairy`
}

item.fightiniumZ = {
    rename: `Fightinium Z`,
    renameFR: `Combazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_128', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fighting`
}

item.firiumZ = {
    rename: `Firium Z`,
    renameFR: `Pyrozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_129', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fire`
}

item.flyiniumZ = {
    rename: `Flyinium Z`,
    renameFR: `Aérozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_130', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `flying`
}

item.ghostiumZ = {
    rename: `Ghostium Z`,
    renameFR: `Spectrozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_131', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ghost`
}

item.grassiumZ = {
    rename: `Grassium Z`,
    renameFR: `Florazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_132', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `grass`
}

item.groundiumZ = {
    rename: `Groundium Z`,
    renameFR: `Terrazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_133', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ground`
}

item.iciumZ = {
    rename: `Icium Z`,
    renameFR: `Cryozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_134', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ice`
}

item.normaliumZ = {
    rename: `Normalium Z`,
    renameFR: `Normazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_135', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `normal`
}

item.poisoniumZ = {
    rename: `Poisonium Z`,
    renameFR: `Toxizélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_136', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `poison`
}

item.psychiumZ = {
    rename: `Psychium Z`,
    renameFR: `Psychézélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_137', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `psychic`
}

item.rockiumZ = {
    rename: `Rockium Z`,
    renameFR: `Rocazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_138', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `rock`
}

item.steeliumZ = {
    rename: `Steelium Z`,
    renameFR: `Métallozélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_139', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `steel`
}

item.wateriumZ = {
    rename: `Waterium Z`,
    renameFR: `Aquazélite`,
    type: "held",
    sort: "gem",
    info: function() {return `${t_ui('itemInfo_140', this.power())}`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `water`
}


//normal
item.quickAttackTm = {
    rename: `Quick Attack Tm`,
    renameFR: `CT Vive-Attaque`,
}
item.swiftTm = {
    rename: `Swift Tm`,
    renameFR: `CT Météores`,
}
item.strengthTm = {
    rename: `Strength Tm`,
    renameFR: `CT Force`,
}
//fire
item.emberTm = {
    rename: `Ember Tm`,
    renameFR: `CT Flammèche`,
}
item.incinerateTm = {
    rename: `Incinerate Tm`,
    renameFR: `CT Calcination`,
}
item.flamethrowerTm = {
    rename: `Flamethrower Tm`,
    renameFR: `CT Lance-Flammes`,
}
//electric    
item.nuzzleTm = {
    rename: `Nuzzle Tm`,
    renameFR: `CT Frotte-Frimousse`,
}
item.thunderPunchTm = {
    rename: `Thunder Punch Tm`,
    renameFR: `CT Poing Éclair`,
}
item.thunderboltTm = {
    rename: `Thunderbolt Tm`,
    renameFR: `CT Tonnerre`,
}
//ground
item.mudSlapTm = {
    rename: `Mud Slap Tm`,
    renameFR: `CT Coud’Boue`,
}
item.bulldozeTm = {
    rename: `Bulldoze Tm`,
    renameFR: `CT Piétisol`,
}
item.earthquakeTm = {
    rename: `Earthquake Tm`,
    renameFR: `CT Séisme`,
}
//steel
item.bulletPunchTm = {
    rename: `Bullet Punch Tm`,
    renameFR: `CT Pisto-Poing`,
}
item.metalClawTm = {
    rename: `Metal Claw Tm`,
    renameFR: `CT Griffe Acier`,
}
item.flashCannonTm = {
    rename: `Flash Cannon Tm`,
    renameFR: `CT Luminocanon`,
}
//flying
item.peckTm = {
    rename: `Peck Tm`,
    renameFR: `CT Picpic`,
}
item.acrobaticsTm = {
    rename: `Acrobatics Tm`,
    renameFR: `CT Acrobatie`,
}
item.flyTm = {
    rename: `Fly Tm`,
    renameFR: `CT Vol`,
}
//poison
item.acidTm = {
    rename: `Acid Tm`,
    renameFR: `CT Acide`,
}
item.crossPoisonTm = {
    rename: `Cross Poison Tm`,
    renameFR: `CT Poison Croix`,
}
item.sludgeBombTm = {
    rename: `Sludge Bomb Tm`,
    renameFR: `CT Bombe Beurk`,
}
//ice
item.iceShardTm = {
    rename: `Ice Shard Tm`,
    renameFR: `CT Éclats Glace`,
}
item.avalancheTm = {
    rename: `Avalanche Tm`,
    renameFR: `CT Avalanche`,
}
item.iceBeamTm = {
    rename: `Ice Beam Tm`,
    renameFR: `CT Laser Glace`,
}
//bug
item.twineedleTm = {
    rename: `Twineedle Tm`,
    renameFR: `CT Double Dard`,
}
item.bugBiteTm = {
    rename: `Bug Bite Tm`,
    renameFR: `CT Piqûre`,
}
item.bugBuzzTm = {
    rename: `Bug Buzz Tm`,
    renameFR: `CT Bourdon`,
}
//water
item.waterGunTm = {
    rename: `Water Gun Tm`,
    renameFR: `CT Pistolet à O`,
}
item.waterPulseTm = {
    rename: `Water Pulse Tm`,
    renameFR: `CT Vibraqua`,
}
item.aquaTailTm = {
    rename: `Aqua Tail Tm`,
    renameFR: `CT Hydro-Queue`,
}
//grass
item.leafageTm = {
    rename: `Leafage Tm`,
    renameFR: `CT Feuillage`,
}
item.magicalLeafTm = {
    rename: `Magical Leaf Tm`,
    renameFR: `CT Feuille Magik`,
}
item.leafBladeTm = {
    rename: `Leaf Blade Tm`,
    renameFR: `CT Lame Feuille`,
}
//fighting
item.rockSmashTm = {
    rename: `Rock Smash Tm`,
    renameFR: `CT Éclate-Roc`,
}
item.forcePalmTm = {
    rename: `Force Palm Tm`,
    renameFR: `CT Forte-Paume`,
}
item.auraSphereTm = {
    rename: `Aura Sphere Tm`,
    renameFR: `CT Aurasphère`,
}
//psychic
item.confusionTm = {
    rename: `Confusion Tm`,
    renameFR: `CT Choc Mental`,
}
item.psychoCutTm = {
    rename: `Psycho Cut Tm`,
    renameFR: `CT Coupe Psycho`,
}
item.psychicTm = {
    rename: `Psychic Tm`,
    renameFR: `CT Psyko`,
}
//rock
item.rockThrowTm = {
    rename: `Rock Throw Tm`,
    renameFR: `CT Jet-Pierres`,
}
item.rockSlideTm = {
    rename: `Rock Slide Tm`,
    renameFR: `CT Éboulement`,
}
item.powerGemTm = {
    rename: `Power Gem Tm`,
    renameFR: `CT Rayon Gemme`,
}
//ghost
item.lickTm = {
    rename: `Lick Tm`,
    renameFR: `CT Léchouille`,
}
item.hexTm = {
    rename: `Hex Tm`,
    renameFR: `CT Châtiment`,
}
item.shadowBallTm = {
    rename: `Shadow Ball Tm`,
    renameFR: `CT Ball’Ombre`,
}
//dragon
item.twisterTm = {
    rename: `Twister Tm`,
    renameFR: `CT Ouragan`,
}
item.dragonTailTm = {
    rename: `Dragon Tail Tm`,
    renameFR: `CT Draco-Queue`,
}
item.dragonRushTm = {
    rename: `Dragon Rush Tm`,
    renameFR: `CT Draco-Charge`,
}
item.dragonPulseTm = {
    rename: `Dragon Pulse Tm`,
    renameFR: `CT Draco-Choc`,
}
//fighting
item.pursuitTm = {
    rename: `Pursuit Tm`,
    renameFR: `CT Poursuite`,
}
item.biteTm = {
    rename: `Bite Tm`,
    renameFR: `CT Morsure`,
}
item.darkPulseTm = {
    rename: `Dark Pulse Tm`,
    renameFR: `CT Vibrobscur`,
}
//fairy
item.disarmingVoiceTm = {
    rename: `Disarming Voice Tm`,
    renameFR: `CT Voix Enjôleuse`,
}
item.dazzlingGleamTm = {
    rename: `Dazzling Gleam Tm`,
    renameFR: `CT Éclat Magique`,
}
item.playRoughTm = {
    rename: `Play Rough Tm`,
    renameFR: `CT Câlinerie`,
}

//shop


item.tackleTm = {
    rename: `Tackle Tm`,
    renameFR: `CT Charge`,
}
item.quickAttackTm = {
    rename: `Quick Attack Tm`,
    renameFR: `CT Vive-Attaque`,
}
item.leerTm = {
    rename: `Leer Tm`,
    renameFR: `CT Groz’Yeux`,
}


item.bulkUpTm = {
    rename: `Bulk Up Tm`,
    renameFR: `CT Gonflette`,
}
item.thunderWaveTm = {
    rename: `Thunder Wave Tm`,
    renameFR: `CT Cage Éclair`,
}
item.toxicTm = {
    rename: `Toxic Tm`,
    renameFR: `CT Toxik`,
}
item.willOWispTm = {
    rename: `Will Owisp Tm`,
    renameFR: `CT Feu Follet`,
}

item.calmMindTm = {
    rename: `Calm Mind Tm`,
    renameFR: `CT Plénitude`,
}
item.sunnyDayTm = {
    rename: `Sunny Day Tm`,
    renameFR: `CT Zénith`,
}
item.rainDanceTm = {
    rename: `Rain Dance Tm`,
    renameFR: `CT Danse Pluie`,
}

item.crunchTm = {
    rename: `Crunch Tm`,
    renameFR: `CT Mâchouille`,
}
item.xScissorTm = {
    rename: `X Scissor Tm`,
    renameFR: `CT Plaie Croix`,
}
item.moonblastTm = {
    rename: `Moonblast Tm`,
    renameFR: `CT Pouvoir Lunaire`,
}

item.fireBlastTm = {
    rename: `Fire Blast Tm`,
    renameFR: `CT Déflagration`,
}
item.hydroPumpTm = {
    rename: `Hydro Pump Tm`,
    renameFR: `CT Hydrocanon`,
}
item.thunderTm = {
    rename: `Thunder Tm`,
    renameFR: `CT Fatal-Foudre`,
}
item.hyperBeamTm = {
    rename: `Hyper Beam Tm`,
    renameFR: `CT Ultralaser`,
}

//frontier
item.swaggerTm = {
    rename: `Swagger Tm`,
    renameFR: `CT Vantardise`,
}
item.ironDefenseTm = {
    rename: `Iron Defense Tm`,
    renameFR: `CT Mur de Fer`,
}
item.feintAttackTm = {
    rename: `Feint Attack Tm`,
    renameFR: `CT Feinte`,
}
item.chillingWaterTm = {
    rename: `Chilling Water Tm`,
    renameFR: `CT Écosurf`,}
item.silverWindTm = {
    rename: `Silver Wind Tm`,
    renameFR: `CT Vent Argenté`,
}
item.avalancheTm = {
    rename: `Avalanche Tm`,
    renameFR: `CT Avalanche`,
}
item.knockOffTm = {
    rename: `Knock Off Tm`,
    renameFR: `CT Sabotage`,
}
item.ominousWindTm = {
    rename: `Ominous Wind Tm`,
    renameFR: `CT Vent Mauvais`,
}
item.flameChargeTm = {
    rename: `Flame Charge Tm`,
    renameFR: `CT Nitrocharge`,
}
item.acidSprayTm = {
    rename: `Acid Spray Tm`,
    renameFR: `CT Bombe Acide`,
}

item.hailTm = {
    rename: `Hail Tm`,
    renameFR: `CT Grêle`,
}
item.fogTm = {
    rename: `Fog Tm`,
    renameFR: `CT Brouillard`,}
item.sandstormTm = {
    rename: `Sandstorm Tm`,
    renameFR: `CT Tempête de Sable`,
}
item.electricTerrainTm = {
    rename: `Electric Terrain Tm`,
    renameFR: `CT Champ Électrifié`,
}
item.mistyTerrainTm = {
    rename: `Misty Terrain Tm`,
    renameFR: `CT Champ Brumeux`,
}
item.grassyTerrainTm = {
    rename: `Grassy Terrain Tm`,
    renameFR: `CT Champ Herbu`,
}

item.nastyPlotTm = {
    rename: `Nasty Plot Tm`,
    renameFR: `CT Machination`,
}
item.swordsDanceTm = {
    rename: `Swords Dance Tm`,
    renameFR: `CT Danse Lames`,
}
item.voltSwitchTm = {
    rename: `Volt Switch Tm`,
    renameFR: `CT Change Éclair`,
}
item.uTurnTm = {
    rename: `U Turn Tm`,
    renameFR: `CT Demi-Tour`,
}

item.chargeBeamTm = {
    rename: `Charge Beam Tm`,
    renameFR: `CT Rayon Chargé`,
}
item.dischargeTm = {
    rename: `Discharge Tm`,
    renameFR: `CT Coup d’Jus`,
}
item.scorchingSandsTm = {
    rename: `Scorching Sands Tm`,
    renameFR: `CT Sable Ardent`,
}
item.airShlashTm = {rename:`airSlashTm`,
    rename: `Air Shlash Tm`,
    renameFR: `CT Tranch'Air`,}
item.poisonJabTm = {
    rename: `Poison Jab Tm`,
    renameFR: `CT Direct Toxik`,
}
item.liquidationTm = {
    rename: `Liquidation Tm`,
    renameFR: `CT Aqua-Brèche`,
}
item.energyBallTm = {
    rename: `Energy Ball Tm`,
    renameFR: `CT Éco-Sphère`,
}
item.skyUppercutTm = {
    rename: `Sky Uppercut Tm`,
    renameFR: `CT Stratopercut`,
}
item.dracoMeteorTm = {
    rename: `Draco Meteor Tm`,
    renameFR: `CT Draco-Météore`,
}
item.spiritBreakTm = {
    rename: `Spirit Break Tm`,
    renameFR: `CT Choc Émotionnel`,
}


item.trickRoomTm = {
    rename: `Trick Room Tm`,
    renameFR: `CT Distorsion`,
}
item.crossRoomTm = {
    rename: `Cross Room Tm`,
    renameFR: `CT Salle Croisée`,}
item.weirdRoomTm = {
    rename: `Weird Room Tm`,
    renameFR: `CT Salle Bizarre`,}
item.safeguardTm = {
    rename: `Safeguard Tm`,
    renameFR: `CT Rune Protect`,
}
item.lightScreenTm = {
    rename: `Light Screen Tm`,
    renameFR: `CT Mur Lumière`,
}


//memory

item.hydratationMemory = {
    rename: `hydrationMemory`,
    renameFR: `Mémoire Hydratation`,
}
item.sandVeilMemory = {
    rename: `Sand Veil Memory`,
    renameFR: `Mémoire Voile Sable`,
}
item.snowCloakMemory = {
    rename: `Snow Cloak Memory`,
    renameFR: `Mémoire Cape Neige`,
}
item.marvelScaleMemory = {
    rename: `Marvel Scale Memory`,
    renameFR: `Mémoire Écaille Spéciale`,
}
item.livingShieldMemory = {
    rename: `Living Shield Memory`,
    renameFR: `Mémoire Bouclier Vivant`,
}
item.bigPecksMemory = {
    rename: `Big Pecks Memory`,
    renameFR: `Mémoire Cœur de Coq`,
}
item.hyperCutterMemory = {
    rename: `Hyper Cutter Memory`,
    renameFR: `Mémoire Hyper Cutter`,
}
item.synchronizeMemory = {
    rename: `Synchronize Memory`,
    renameFR: `Mémoire Synchro`,
}
item.iceBodyMemory = {
    rename: `Ice Body Memory`,
    renameFR: `Mémoire Corps Gel`,
}

item.rainDishMemory = {
    rename: `Rain Dish Memory`,
    renameFR: `Mémoire Cuvette Pluie`,
}
item.solarPowerMemory = {
    rename: `Solar Power Memory`,
    renameFR: `Mémoire Force Soleil`,
}
item.sandForceMemory = {
    rename: `Sand Force Memory`,
    renameFR: `Mémoire Force Sable`,
}
item.scrappyMemory = {
    rename: `Scrappy Memory`,
    renameFR: `Mémoire Querelleur`,
}

item.strongJawMemory = {
    rename: `Strong Jaw Memory`,
    renameFR: `Mémoire Prognathe`,
}
item.toughClawsMemory = {
    rename: `Tough Claws Memory`,
    renameFR: `Mémoire Griffe Dure`,
}
item.ironFistMemory = {
    rename: `Iron Fist Memory`,
    renameFR: `Mémoire Poing de Fer`,
}
item.magicGuardMemory = {
    rename: `Magic Guard Memory`,
    renameFR: `Mémoire Garde Magik`,
}

item.pickPocketMemory = {
    rename: `Pick Pocket Memory`,
    renameFR: `Mémoire Pickpocket`,
}


//decor


item.blueBarrette = {
    rename: `Blue Barrette`,
    type: "decor",
    rarity: `common`,
    renameFR: `Barrette Bleue`,
}
item.pinkBarrette = {
    rename: `Pink Barrette`,
    type: "decor",
    rarity: `common`,
    renameFR: `Barrette Rose`,
}
item.greenBarrette = {
    rename: `Green Barrette`,
    type: "decor",
    rarity: `common`,
    renameFR: `Barrette Verte`,
}
item.blueBarrette = {
    rename: `Blue Barrette`,
    type: "decor",
    rarity: `common`,
    renameFR: `Barrette Bleue`,
}

item.blueFlower = {
    rename: `Blue Flower`,
    type: "decor",
    rarity: `common`,
    renameFR: `Fleur Bleue`,
}
item.purpleFlower = {
    rename: `Purple Flower`,
    type: "decor",
    rarity: `common`,
    renameFR: `Fleur Violette`,
}
item.redFlower = {
    rename: `Red Flower`,
    type: "decor",
    rarity: `common`,
    renameFR: `Fleur Rouge`,
}

item.blueBalloon = {
    rename: `Blue Balloon`,
    type: "decor",
    rarity: `common`,
    renameFR: `Ballon Bleu`,
}
item.redBalloon = {
    rename: `Red Balloon`,
    type: "decor",
    rarity: `common`,
    renameFR: `Ballon Rouge`,
}
item.greenBalloon = {
    rename: `Green Balloon`,
    type: "decor",
    rarity: `common`,
    renameFR: `Ballon Vert`,
}

item.professorHat = {
    rename: `Professor Hat`,
    type: "decor",
    rarity: `common`,
    renameFR: `Chapeau de Professeur`,
}
item.academicHat = {
    rename: `Academic Hat`,
    type: "decor",
    rarity: `common`,
    renameFR: `Chapeau Académique`,
}

item.redBall = {
    rename: `Red Ball`,
    type: "decor",
    rarity: `common`,
    renameFR: `Balle Rouge`,
}
item.greenBall = {
    rename: `Green Ball`,
    type: "decor",
    rarity: `common`,
    renameFR: `Balle Verte`,
}
item.blueBall = {
    rename: `Blue Ball`,
    type: "decor",
    rarity: `common`,
    renameFR: `Balle Bleue`,
}

item.redHeaddress = {
    rename: `Red Headdress`,
    type: "decor",
    rarity: `common`,
    renameFR: `Coiffe Rouge`,
}
item.purpleHeaddress = {
    rename: `Purple Headdress`,
    type: "decor",
    rarity: `common`,
    renameFR: `Coiffe Violette`,
}
item.tealHeaddress = {
    rename: `Teal Headdress`,
    type: "decor",
    rarity: `common`,
    renameFR: `Coiffe Sarcelle`,
}

item.blackTie = {
    rename: `Black Tie`,
    type: "decor",
    rarity: `common`,
    renameFR: `Cravate Noire`,
}
item.whiteTie = {
    rename: `White Tie`,
    type: "decor",
    rarity: `common`,
    renameFR: `Cravate Blanche`,
}
item.stripedTie = {
    rename: `Striped Tie`,
    type: "decor",
    rarity: `common`,
    renameFR: `Cravate Rayée`,
}
item.greenTie = { type: "decor", rarity: `common`,
    rename: `Green Tie`,
    renameFR: `Cravate Verte`,} 
item.orangeTie = { type: "decor", rarity: `common`,
    rename: `Orange Tie`,
    renameFR: `Cravate Orange`,} 
item.blueTie = { type: "decor", rarity: `common`,
    rename: `Blue Tie`,
    renameFR: `Cravate Bleue`,} 

item.blackBowtie = { type: "decor", rarity: `common`,
    rename: `Black Bowtie`,
    renameFR: `Nœud Papillon Noir`,} 
item.pinkBowtie = { type: "decor", rarity: `common`,
    rename: `Pink Bowtie`,
    renameFR: `Nœud Papillon Rose`,} 
item.blueBowtie = { type: "decor", rarity: `common`,
    rename: `Blue Bowtie`,
    renameFR: `Nœud Papillon Bleu`,} 
item.yellowBowtie = { type: "decor", rarity: `common`,
    rename: `Yellow Bowtie`,
    renameFR: `Nœud Papillon Jaune`,} 

item.tealHeadband = { type: "decor", rarity: `common`,
    rename: `Teal Headband`,
    renameFR: `Bandeau Sarcelle`,} 
item.greenHeadband = { type: "decor", rarity: `common`,
    rename: `Green Headband`,
    renameFR: `Bandeau Vert`,} 
item.yellowHeadband = { type: "decor", rarity: `common`,
    rename: `Yellow Headband`,
    renameFR: `Bandeau Jaune`,} 

item.blackScarf = { type: "decor", rarity: `common`,
    rename: `Black Scarf`,
    renameFR: `Écharpe Noire`,} 
item.whiteScarf = { type: "decor", rarity: `common`,
    rename: `White Scarf`,
    renameFR: `Écharpe Blanche`,} 
item.redScarf = {
    rename: `Red Scarf`,
    type: "decor",
    rarity: `common`,
    renameFR: `Foulard Rouge`,
}
item.blueScarf = {
    rename: `Blue Scarf`,
    type: "decor",
    rarity: `common`,
    renameFR: `Foulard Bleu`,
}

item.yellowStar = {
    rename: `Yellow Star`,
    type: "decor",
    rarity: `common`,
    renameFR: `Étoile Jaune`,
}
item.tealStar = {
    rename: `Teal Star`,
    type: "decor",
    rarity: `common`,
    renameFR: `Étoile Sarcelle`,
}
item.redStar = {
    rename: `Red Star`,
    type: "decor",
    rarity: `common`,
    renameFR: `Étoile Rouge`,
}

item.blackMoustache = {
    rename: `Black Moustache`,
    type: "decor",
    rarity: `common`,
    renameFR: `Moustache Noire`,
}
item.whiteMoustache = {
    rename: `White Moustache`,
    type: "decor",
    rarity: `common`,
    renameFR: `Moustache Blanche`,
}

item.microphone = {
    rename: `Microphone`,
    type: "decor",
    rarity: `common`,
    renameFR: `Microphone`,
}
item.oldUmbrella = {
    rename: `Old Umbrella`,
    type: "decor",
    rarity: `common`,
    renameFR: `Vieux Parapluie`,
}
item.coloredParasol = {
    rename: `Colored Parasol`,
    type: "decor",
    rarity: `common`,
    renameFR: `Parasol Coloré`,
}
item.pokeballFlag = {
    rename: `Pokeball Flag`,
    type: "decor",
    rarity: `common`,
    renameFR: `Drapeau Poké Ball`,
}
item.pinkMushroom = {
    rename: `Pink Mushroom`,
    type: "decor",
    rarity: `common`,
    renameFR: `Champignon Rose`,
}
item.yellowStarBalloon = {
    rename: `Yellow Star Balloon`,
    type: "decor",
    rarity: `common`,
    renameFR: `Ballon Étoile Jaune`,
}
item.blackSpecs = {
    rename: `Black Specs`,
    type: "decor",
    rarity: `common`,
    renameFR: `Lunettes Noires`,
}
item.googlySpecs = {
    rename: `Googly Specs`,
    type: "decor",
    rarity: `common`,
    renameFR: `Lunettes Excentriques`,
}
item.topHat = {
    rename: `Top Hat`,
    type: "decor",
    rarity: `common`,
    renameFR: `Haut-de-Forme`,
}
item.gentlemanHat = {
    rename: `Gentleman Hat`,
    type: "decor",
    rarity: `common`,
    renameFR: `Chapeau de Gentleman`,
}
item.silverTiara = {
    rename: `Silver Tiara`,
    type: "decor",
    rarity: `common`,
    renameFR: `Tiare d'Argent`,
}


//rare decor
item.frillyApron = { type: "decor", rarity: `rare`,
    rename: `Frilly Apron`,
    renameFR: `Tablier à Volants`,} 
item.chefHat = { type: "decor", rarity: `rare`,
    rename: `Chef Hat`,
    renameFR: `Toque de Chef`,} 
item.fluffyBeard = { type: "decor", rarity: `rare`,
    rename: `Fluffy Beard`,
    renameFR: `Barbe Flouffe`,} 
item.hummingNote = { type: "decor", rarity: `rare`,
    rename: `Humming Note`,
    renameFR: `Note Bourdonnante`,} 
item.prettyDewdrop = { type: "decor", rarity: `rare`,
    rename: `Pretty Dewdrop`,
    renameFR: `Belle Goutte de Rosée`,} 
item.spotlight = { type: "decor", rarity: `rare`,
    rename: `Spotlight`,
    renameFR: `Projecteur`,} 
item.glitterPowder = { type: "decor", rarity: `rare`,
    rename: `Glitter Powder`,
    renameFR: `Poudre Pailletée`,} 
item.confetti = { type: "decor", rarity: `rare`,
    rename: `Confetti`,
    renameFR: `Confettis`,} 
item.comet = { type: "decor", rarity: `rare`,
    rename: `Comet`,
    renameFR: `Comète`,} 
item.gorgeousSpecs = { type: "decor", rarity: `rare`,
    rename: `Gorgeous Specs`,
    renameFR: `Lunettes Superbes`,} 
item.mysticSmoke = { type: "decor", rarity: `rare`,
    rename: `Mystic Smoke`,
    renameFR: `Fumée Mystique`,} 


item.flashHerbaMemory = { rarity: "common",
    rename: `Flash Herba Memory`,
    renameFR: `Mémoire Flash Herbe`,}
item.flashFaeMemory = { rarity: "common",
    rename: `Flash Fae Memory`,
    renameFR: `Mémoire Flash Fée`,}
item.flashPsychaMemory = { rarity: "common",
    rename: `Flash Psycha Memory`,
    renameFR: `Mémoire Flash Psy`,}
item.flashCryoMemory = { rarity: "common",
    rename: `Flash Cryo Memory`,
    renameFR: `Mémoire Flash Glace`,}
item.flashVenumMemory = { rarity: "common",
    rename: `Flash Venum Memory`,
    renameFR: `Mémoire Flash Poison`,}
item.flashUmbraMemory = { rarity: "common",
    rename: `Flash Umbra Memory`,
    renameFR: `Mémoire Flash Ténèbres`,}
item.flashPyroMemory = { rarity: "common",
    rename: `Flash Pyro Memory`,
    renameFR: `Mémoire Flash Feu`,}
item.flashAquaMemory = { rarity: "common",
    rename: `Flash Aqua Memory`,
    renameFR: `Mémoire Flash Eau`,}
item.flashElectroMemory = { rarity: "common",
    rename: `Flash Electro Memory`,
    renameFR: `Mémoire Flash Électrik`,}
item.liberoMemory = { rarity: "common",
    rename: `Libero Memory`,
    renameFR: `Mémoire Libéro`,}
item.recklessMemory = { rarity: "common",
    rename: `Reckless Memory`,
    renameFR: `Mémoire Téméraire`,}
item.filterMemory = { rarity: "common",
    rename: `Filter Memory`,
    renameFR: `Mémoire Filtre`,}
item.justifiedMemory = { rarity: "common",
    rename: `Justified Memory`,
    renameFR: `Mémoire Cœur Noble`,}
item.angerPointMemory = { rarity: "common",
    rename: `Anger Point Memory`,
    renameFR: `Mémoire Colérique`,}
item.sharpnessMemory = { rarity: "common",
    rename: `Sharpness Memory`,
    renameFR: `Mémoire Incisif`,}
item.gutsMemory = { rarity: "common",
    rename: `Guts Memory`,
    renameFR: `Mémoire Cran`,}
item.multiscaleMemory = { rarity: "common",
    rename: `Multiscale Memory`,
    renameFR: `Mémoire Multiécaille`,}
item.noGuardMemory = { rarity: "common",  typings : ["fighting"],
    rename: `No Guard Memory`,
    renameFR: `Mémoire Annule Garde`,}
item.ambidextrousMemory = { rarity: "common",  typings : ["bug"],
    rename: `Ambidextrous Memory`,
    renameFR: `Mémoire Ambidextre`,}
item.adaptabilityMemory = { rarity: "common",  typings : ["normal"],
    rename: `Adaptability Memory`,
    renameFR: `Mémoire Adaptabilité`,}
item.thickFatMemory = { rarity: "common",
    rename: `Thick Fat Memory`,
    renameFR: `Mémoire Isograisse`,}
item.levitateMemory = { rarity: "common",
    rename: `Levitate Memory`,
    renameFR: `Mémoire Lévitation`,}
item.sheerForceMemory = { rarity: "common",
    rename: `Sheer Force Memory`,
    renameFR: `Mémoire Sans Limite`,}
item.strategistMemory = { rarity: "common",
    rename: `Strategist Memory`,
    renameFR: `Mémoire Stratège`,}
item.moxieMemory = { rarity: "common",
    rename: `Moxie Memory`,
    renameFR: `Mémoire Impudence`,}
item.unburdenMemory = { rarity: "common",
    rename: `Unburden Memory`,
    renameFR: `Mémoire Délestage`,}
item.dauntingLookMemory = { rarity: "common",
    rename: `Daunting Look Memory`,
    renameFR: `Mémoire Regard Intimidant`,}
item.intimidateMemory = { rarity: "common",
    rename: `Intimidate Memory`,
    renameFR: `Mémoire Intimidation`,}
item.sandRushMemory = { rarity: "common",
    rename: `Sand Rush Memory`,
    renameFR: `Mémoire Baigne Sable`,}
item.swiftSwimMemory = { rarity: "common",
    rename: `Swift Swim Memory`,
    renameFR: `Mémoire Glissade`,}
item.slushRushMemory = { rarity: "common",
    rename: `Slush Rush Memory`,
    renameFR: `Mémoire Chasse-Neige`,}
item.moltShedMemory = { rarity: "common",
    rename: `Molt Shed Memory`,
    renameFR: `Mémoire Mue Ardente`,}
item.faeRushMemory = { rarity: "common",
    rename: `Fae Rush Memory`,
    renameFR: `Mémoire Ruée Féerique`,}
item.hyperconductorMemory = { rarity: "common",
    rename: `Hyperconductor Memory`,
    renameFR: `Mémoire Hyperconducteur`,}
item.intangibleMemory = { rarity: "common",
    rename: `Intangible Memory`,
    renameFR: `Mémoire Intangible`,}
item.climaTactMemory = { rarity: "common",
    rename: `Clima Tact Memory`,
    renameFR: `Mémoire Tact Climatique`,}
item.spikyPeltMemory = { rarity: "common",
    rename: `Spiky Pelt Memory`,
    renameFR: `Mémoire Peau Piquante`,}
item.blackPeltMemory = { rarity: "common",
    rename: `Black Pelt Memory`,
    renameFR: `Mémoire Peau Noire`,}
item.pixiePeltMemory = { rarity: "common", rename:`fuzzyPeltMemory`,
    rename: `Pixie Pelt Memory`,
    renameFR: `Mémoire Peau Velue`,}
item.fieryPeltMemory = { rarity: "common",
    rename: `Fiery Pelt Memory`,
    renameFR: `Mémoire Peau Feu`,}
item.moistPeltMemory = { rarity: "common",
    rename: `Moist Pelt Memory`,
    renameFR: `Mémoire Peau Eau`,}
item.icyPeltMemory = { rarity: "common",
    rename: `Icy Pelt Memory`,
    renameFR: `Mémoire Peau Glace`,}
item.sandyPeltMemory = { rarity: "common",
    rename: `Sandy Pelt Memory`,
    renameFR: `Mémoire Peau Sable`,}
item.grassyPeltMemory = { rarity: "common",
    rename: `Grassy Pelt Memory`,
    renameFR: `Mémoire Peau Plante`,}


//has
item.stonedMemory = { typings : ["rock"], rarity: "rare",
    rename: `Stoned Memory`,
    renameFR: `Mémoire Pétrifié`,}
item.staminaMemory = { typings : ["fighting"], rarity: "rare",
    rename: `Stamina Memory`,
    renameFR: `Mémoire Endurance`,}
item.gooeyMemory = { typings : ["poison"], rarity: "rare",
    rename: `Gooey Memory`,
    renameFR: `Mémoire Poisseux`,}
item.shieldsDownMemory = { typings : ["steel"], rarity: "rare",
    rename: `Shields Down Memory`,
    renameFR: `Mémoire Bouclier-Carcan`,}
item.costarMemory = { typings : ["fairy"], rarity: "rare",
    rename: `Costar Memory`,
    renameFR: `Mémoire Collab`,}
item.purifyingSaltMemory = { typings : ["rock"], rarity: "rare",
    rename: `Purifying Salt Memory`,
    renameFR: `Mémoire Sel Purificateur`,}
item.scorchMemory = { typings : ["fire"], rarity: "rare",
    rename: `Scorch Memory`,
    renameFR: `Mémoire Carbonisé`,}
item.corrosionMemory = { typings : ["poison"], rarity: "rare",
    rename: `Corrosion Memory`,
    renameFR: `Mémoire Corrosion`,}
item.megaLauncherMemory = { typings : ["electric"], rarity: "rare",
    rename: `Mega Launcher Memory`,
    renameFR: `Mémoire Méga Blaster`,}
item.metalheadMemory = { typings : ["steel"], rarity: "rare",
    rename: `Metalhead Memory`,
    renameFR: `Mémoire Tête de Métal`,}
item.moodyMemory = { typings : ["normal"], rarity: "rare",
    rename: `Moody Memory`,
    renameFR: `Mémoire Lunatique`,}
item.mercilessMemory = { typings : ["dark"], rarity: "rare",
    rename: `Merciless Memory`,
    renameFR: `Mémoire Cruauté`,}
item.colorSporeMemory = { typings : ["grass"], rarity: "rare",
    rename: `Color Spore Memory`,
    renameFR: `Mémoire Spore Colorée`,}
item.sandStreamMemory = { typings : ["ground"], rarity: "rare",
    rename: `Sand Stream Memory`,
    renameFR: `Mémoire Sable Volant`,}
item.snowWarningMemory = { typings : ["ice"], rarity: "rare",
    rename: `Snow Warning Memory`,
    renameFR: `Mémoire Alerte Neige`,}
item.somberFieldMemory = { typings : ["dark"], rarity: "rare",
    rename: `Somber Field Memory`,
    renameFR: `Mémoire Champ Sombre`,}


//white exclusive
item.dancerMemory = { typings : ["fighting"], rarity: "white",
    rename: `Dancer Memory`,
    renameFR: `Mémoire Danseuse`,}
item.cacophonyMemory = { typings : ["normal"], rarity: "white",
    rename: `Cacophony Memory`,
    renameFR: `Mémoire Cacophonie`,}
item.windRiderMemory = { typings : ["flying"], rarity: "white",
    rename: `Wind Rider Memory`,
    renameFR: `Mémoire Aéroporté`,}
item.gorillaTacticsMemory = { typings : ["fighting"], rarity: "white",
    rename: `Gorilla Tactics Memory`,
    renameFR: `Mémoire Entêtement`,}
item.imposterMemory = { typings : ["dark"], rarity: "white",
    rename: `Imposter Memory`,
    renameFR: `Mémoire Imposteur`,}
item.drizzleMemory = { typings : ["water"], rarity: "white",
    rename: `Drizzle Memory`,
    renameFR: `Mémoire Crachin`,}
item.droughtMemory = { typings : ["fire"], rarity: "white",
    rename: `Drought Memory`,
    renameFR: `Mémoire Sécheresse`,}
item.electricSurgeMemory = { typings : ["electric"], rarity: "white",
    rename: `Electric Surge Memory`,
    renameFR: `Mémoire Créa-Élec`,}
item.grassySurgeMemory = { typings : ["grass"], rarity: "white",
    rename: `Grassy Surge Memory`,
    renameFR: `Mémoire Créa-Herbe`,}
item.mistySurgeMemory = { typings : ["psychic"], rarity: "white",
    rename: `Misty Surge Memory`,
    renameFR: `Mémoire Créa-Brume`,}
item.ferrilateMemory = { typings : ["steel"], rarity: "white",
    rename: `Ferrilate Memory`,
    renameFR: `Mémoire Peau Ferraille`,}
item.glaciateMemory = { typings : ["ice"], rarity: "white",
    rename: `Glaciate Memory`,
    renameFR: `Mémoire Peau Gelée`,}
item.terralateMemory = { typings : ["ground"], rarity: "white",
    rename: `Terralate Memory`,
    renameFR: `Mémoire Terralation`,}
item.toxilateMemory = { typings : ["poison"], rarity: "white",
    rename: `Toxilate Memory`,
    renameFR: `Mémoire Peau Toxique`,}
item.hydrolateMemory = { typings : ["water"], rarity: "white",
    rename: `Hydrolate Memory`,
    renameFR: `Mémoire Peau Aquatique`,}
item.pyrolateMemory = { typings : ["fire"], rarity: "white",
    rename: `Pyrolate Memory`,
    renameFR: `Mémoire Peau Ardente`,}
item.chrysilateMemory = { typings : ["bug"], rarity: "white",
    rename: `Chrysilate Memory`,
    renameFR: `Mémoire Peau Insecte`,}
item.galvanizeMemory = { typings : ["electric"], rarity: "white",
    rename: `Galvanize Memory`,
    renameFR: `Mémoire Peau Électrique`,}
item.gloomilateMemory = { typings : ["dark"], rarity: "white",
    rename: `Gloomilate Memory`,
    renameFR: `Mémoire Peau Sombre`,}
item.espilateMemory = { typings : ["psychic"], rarity: "white",
    rename: `Espilate Memory`,
    renameFR: `Mémoire Peau Psychique`,}
item.aerilateMemory = { typings : ["flying"], rarity: "white",
    rename: `Aerilate Memory`,
    renameFR: `Mémoire Peau Céleste`,}
item.pixilateMemory = { typings : ["fairy"], rarity: "white",
    rename: `Pixilate Memory`,
    renameFR: `Mémoire Peau Féérique`,}
item.verdifyMemory = { typings : ["grass"], rarity: "white",
    rename: `Verdify Memory`,
    renameFR: `Mémoire Verdification`,}
item.dragonMawMemory = { typings : ["dragon"], rarity: "white",
    rename: `Dragon Maw Memory`,
    renameFR: `Mémoire Gueule de Dragon`,}
item.iaidoMemory = { typings : ["steel"], rarity: "white",
    rename: `Iaido Memory`,
    renameFR: `Mémoire Iaïdo`,}


/*
item.blackCape = { type: "decor",
    rename: `Black Cape`,
    renameFR: `Cape Noire`,} 
item.crown = { type: "decor",
    rename: `Crown`,
    renameFR: `Couronne`,} 
item.determination = { type: "decor",
    rename: `Determination`,
    renameFR: `Détermination`,} 
item.pinkHeartBalloon = { type: "decor",
    rename: `Pink Heart Balloon`,
    renameFR: `Ballon Cœur Rose`,} 
item.silverTiara = {
    rename: `Silver Tiara`,
    type: "decor",
    renameFR: `Tiare d'Argent`,
}
*/

item.wealthyCoins = { type: "decor",
    rename: `Wealthy Coins`,
    renameFR: `Pièces de Richesse`,} 
item.witchyHat = { type: "decor",
    rename: `Witchy Hat`,
    renameFR: `Chapeau de Sorcière`,} 


for (const i in item){
    item[i].id = i
    item[i].newItem = 0
    item[i].got = 0
}

//tms
for (const i in item){
    if (i.endsWith("Tm")) {
        item[i].move = i.slice(0, -2); 
        item[i].type = "tm";
        
        item[i].info = function () { return `${t_ui('tmInfoDesc', {moveId: move[item[i].move].id, color: returnTypeColor(move[item[i].move].type), move: format(move[item[i].move].id), types: joinWithOr(move[item[i].move].moveset)})}`}        
    }

    if (i.endsWith("Memory")) {
        item[i].ability = i.slice(0, -6); 
        item[i].type = "memory";
        
        item[i].image = "dark"
        

        if (item[i].typings && item[i].typings[0]!="normal") item[i].image = item[i].typings[0]
        else if (item[i].typings== undefined && ability[item[i].ability].type[0]!="all" && ability[item[i].ability].type[0]!="normal") item[i].image = ability[item[i].ability].type[0]

        if (item[i].typings!=undefined) item[i].info = function () { return `${t_ui('memoryInfoDesc', {abilityId: ability[item[i].ability].id, color: returnTypeColor(item[i].image), ability: format(ability[item[i].ability].id), types: joinWithOr(item[i].typings)})}`}        
        else item[i].info = function () { return `${t_ui('memoryInfoDesc', {abilityId: ability[item[i].ability].id, color: returnTypeColor(item[i].image), ability: format(ability[item[i].ability].id), types: joinWithOr(ability[item[i].ability].type)})}`}        
    }

    if (item[i].type == "decor") {
    item[i].itemToUse =  true,
    item[i].info = function () { return `${t_ui('unlockCosmetic')}`}
    }        

}

function joinWithOr(list) {
    if (list.includes("all")) return "all";

    const formatted = list.map(x => format(x));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} ou ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, ou ${formatted[len - 1]}`;
}

function joinWithAnd(list) {
    if (list.includes("all")) return "all";

    const formatted = list.map(x => format(x));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} et ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, et ${formatted[len - 1]}`;
}
