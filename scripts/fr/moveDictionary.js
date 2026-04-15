

const demeritBp = 150
const t4Base = 120

const ability = {}


//tier 1

ability.hydratation = {  
    rename: `hydration`,
    renameFR: `Hydratation`,
    type: [`water`,`grass`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_preventStatusWeather', {tag: tagRainy})},
}

ability.sandVeil = {  
    rename: `Sand Veil`,
    renameFR: `Voile Sable`,
    type: [`ground`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_preventStatusWeather', {tag: tagSandstorm})},
}

ability.snowCloak = {  
    rename: `Snow Cloak`,
    renameFR: `Rideau Neige`,
    type: [`ice`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_preventStatusWeather', {tag: tagHail})},
}

ability.grabGuard = {
    rename: `Grab Guard`,
    renameFR: `Garde Combat`,
    type: [`fighting`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('fighting')})},
}

ability.waterGuard = {
    rename: `Water Guard`,
    renameFR: `Garde Eau`,
    type: [`water`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('water')})},
}

ability.flameGuard = {
    rename: `Flame Guard`,
    renameFR: `Garde Feu`,
    type: [`fire`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('flame')})},
}

ability.curseGuard = {
    rename: `Curse Guard`,
    renameFR: `Garde Spectre`,
    type: [`fairy`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('ghost')})},
}

ability.poisonGuard = {
    rename: `Poison Guard`,
    renameFR: `Garde Poison`,
    type: [`poison`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('poison')})},
}

ability.iceGuard = {
    rename: `Ice Guard`,
    renameFR: `Garde Glace`,
    type: [`ice`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('ice')})},
}

ability.psychicGuard = {
    rename: `Psychic Guard`,
    renameFR: `Garde Psy`,
    type: [`psychic`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('psychic')})},
}

ability.fairyGuard = {
    rename: `Fairy Guard`,
    renameFR: `Garde Fée`,
    type: [`fairy`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('fairy')})},
}

ability.leafGuard = {
    rename: `Leaf Guard`,
    renameFR: `Feuille Garde`,
    type: [`grass`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('grass')})},
}

ability.plainGuard = {
    rename: `Plain Guard`,
    renameFR: `Garde Normal`,
    type: [`normal`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('normal')})},
}

ability.sinisterGuard = {
    rename: `Sinister Guard`,
    renameFR: `Garde Ténèbres`,
    type: [`dark`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('dark')})},
}

ability.steelGuard = {
    rename: `Steel Guard`,
    renameFR: `Garde Acier`,
    type: [`steel`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('steel')})},
}

ability.dragonGuard = {
    rename: `Dragon Guard`,
    renameFR: `Garde Dragon`,
    type: [`fairy`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('dragon')})},
}

ability.bugGuard = {
    rename: `Bug Guard`,
    renameFR: `Garde Insecte`,
    type: [`bug`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('bug')})},
}

ability.rockGuard = {
    rename: `Rock Guard`,
    renameFR: `Garde Roche`,
    type: [`rock`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('rock')})},
}

ability.groundGuard = {
    rename: `Ground Guard`,
    renameFR: `Garde Sol`,
    type: [`ground`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('ground')})},
}

ability.flyingGuard = {
    rename: `Flying Guard`,
    renameFR: `Garde Vol`,
    type: [`flying`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_halvesDamage', {type: format('flying')})},
}

ability.insomnia = {
    rename: `Insomnia`,
    renameFR: `Insomnia`,
    type: [`all`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_grantsImmunity', {tag: tagSleep})},
}

ability.immunity = {
    rename: `Immunity`,
    renameFR: `Vaccin`,
    type: [`all`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_grantsImmunity', {tag: tagPoisoned})},
}

ability.limber = {
    rename: `Limber`,
    renameFR: `Échauffement`,
    type: [`all`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_grantsImmunity', {tag: tagParalysis})},
}

ability.ownTempo = {
    rename: `Own Tempo`,
    renameFR: `Tempo Perso`,
    type: [`all`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_grantsImmunity', {tag: tagConfused})},
}

ability.magmaArmor = {
    rename: `Magma Armor`,
    renameFR: `Armumagma`,
    type: [`fire`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_grantsImmunity', {tag: tagFreeze})},
}

ability.waterVeil = {
    rename: `Water Veil`,
    renameFR: `Ignifu-Voile`,
    type: [`water`, `ice`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_grantsImmunity', {tag: tagBurn})},
}

ability.marvelScale = {
    rename: `Marvel Scale`,
    renameFR: `Écaille Spéciale`,
    type: [`water`, `dragon`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_increaseStatStatus', {stat: t_ui('statDefense'), percent: 50})},
}

ability.livingShield = {
    rename: `Living Shield`,
    renameFR: `Bouclier Vivant`,
    type: [`bug`,`grass`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_increaseStatStatus', {stat: t_ui('statSpecialDefense'), percent: 50})},
}


ability.overgrow = {
    rename: `Overgrow`,
    renameFR: `Engrais`,
    type: [`grass`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('grass'), percent: 30, hp: 50})},
}

ability.blaze = {
    rename: `Blaze`,
    renameFR: `Brasier`,
    type: [`fire`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('fire'), percent: 30, hp: 50})},
}

ability.swarm = {
    rename: `Swarm`,
    renameFR: `Essaim`,
    type: [`bug`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('bug'), percent: 30, hp: 50})},
}

ability.torrent = {
    rename: `Torrent`,
    renameFR: `Torrent`,
    type: [`water`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('water'), percent: 30, hp: 50})},
}

ability.bastion = {
    rename: `Bastion`,
    renameFR: `Bastion`,
    type: [`steel`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('steel'), percent: 30, hp: 50})},
}

ability.average = {
    rename: `Average`,
    renameFR: `Moyen`,
    type: [`normal`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('normal'), percent: 30, hp: 50})},
}

ability.resolve = {
    rename: `Resolve`,
    renameFR: `Résolution`,
    type: [`fighting`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('fighting'), percent: 30, hp: 50})},
}

ability.mistify = {
    rename: `Mistify`,
    renameFR: `Brumisation`,
    type: [`psychic`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('psychic'), percent: 30, hp: 50})},
}

ability.hexerei = {
    rename: `Hexerei`,
    renameFR: `Sorcellerie`,
    type: [`ghost`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('ghost'), percent: 30, hp: 50})},
}

ability.glimmer = {
    rename: `Glimmer`,
    renameFR: `Lueur`,
    type: [`fairy`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('fairy'), percent: 30, hp: 50})},
}

ability.skyward = {
    rename: `Skyward`,
    renameFR: `Céleste`,
    type: [`flying`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('flying'), percent: 30, hp: 50})},
}

ability.draconic = {
    rename: `Draconic`,
    renameFR: `Draconique`,
    type: [`dragon`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('dragon'), percent: 30, hp: 50})},
}

ability.noxious = {
    rename: `Noxious`,
    renameFR: `Nocif`,
    type: [`poison`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('poison'), percent: 30, hp: 50})},
}

ability.solid = {
    rename: `Solid`,
    renameFR: `Solide`,
    type: [`rock`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('rock'), percent: 30, hp: 50})},
}

ability.rime = {
    rename: `Rime`,
    renameFR: `Givre`,
    type: [`ice`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('ice'), percent: 30, hp: 50})},
}

ability.voltage = {
    rename: `Voltage`,
    renameFR: `Voltage`,
    type: [`electric`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_powerBoostLowHP', {type: format('electric'), percent: 30, hp: 50})},
}

ability.hyperCutter = {
    rename: `Hyper Cutter`,
    renameFR: `Hyper Cutter`,
    type: [`bug`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_preventLowerStat', {stat: t_ui('statAttack')})},
}

ability.bigPecks = {
    rename: `Big Pecks`,
    renameFR: `Cœur de Coq`,
    type: [`flying`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_preventLowerStat', {stat: t_ui('statDefense')})},
}

ability.wonderSkin = {
    rename: `Wonder Skin`,
    renameFR: `Peau Miracle`,
    type: [`all`],
    rarity: 1,
    info: function() {return t_ui('moveInfo_statusMiss50')},
}


//tier 2

ability.synchronize = {
    rename: `Synchronize`,
    renameFR: `Synchro`,
    type: [`psychic`, `all`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_synchronize')},
}

ability.solarPower = {  
    rename: `Solar Power`,
    renameFR: `Force Soleil`,
    type: [`fire`,`grass`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpecialAttack'), tag: tagSunny})},
}

ability.iceBody = {  
    rename: `Ice Body`,
    renameFR: `Corps Gel`,
    type: [`ice`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statDefense'), tag: tagHail})},
}

ability.rainDish = {  
    rename: `Rain Dish`,
    renameFR: `Cuvette`,
    type: [`water`, `grass`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpecialAttack'), tag: tagRainy})},
}

ability.sandForce = {  
    rename: `Sand Force`,
    renameFR: `Force Sable`,
    type: [`ground`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statAttack'), tag: tagSandstorm})},
}

ability.static = {
    rename: `Static`,
    renameFR: `Statik`,
    type: [`electric`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_chanceToInflictWhenAttacked', {percent: 15, tag: tagParalysis})},
}

ability.flameBody = {
    rename: `Flame Body`,
    renameFR: `Corps Ardent`,
    type: [`fire`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_chanceToInflictWhenAttacked', {percent: 15, tag: tagBurn})},
}

ability.poisonPoint = {
    rename: `Poison Point`,
    renameFR: `Point Poison`,
    type: [`poison`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_chanceToInflictWhenAttacked', {percent: 15, tag: tagPoisoned})},
}

ability.strangeCharm = {
    rename: `Strange Charm`,
    renameFR: `Charme Étrange`,
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_chanceToInflictWhenAttacked', {percent: 15, tag: tagConfused})},
}

ability.effectSpore = {
    rename: `Effect Spore`,
    renameFR: `Pose Spore`,
    type: [`grass`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_chanceToInflictWhenAttacked', {percent: 5, tag: tagSleep})},
}

ability.glacialBody = {
    rename: `Glacial Body`,
    renameFR: `Corps Glacial`,
    type: [`ice`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_chanceToInflictWhenAttacked', {percent: 5, tag: tagFreeze})},
}

ability.naturalCure = {
    rename: `Natural Cure`,
    renameFR: `Médic Nature`,
    type: [`all`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_clearStatusSwitch')},
}

ability.technician = {
    rename: `Technician`,
    renameFR: `Technicien`,
    type: [`all`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_tech60')},
}


ability.scrappy = {
    rename: `Scrappy`,
    renameFR: `Querelleur`,
    type: [`fighting` , `normal`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_scrappy')},
}

ability.unaware = {
    rename: `Unaware`,
    renameFR: `Inconscient`,
    type: [`all`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_unaware')},
}

ability.magicGuard = {
    rename: `Magic Guard`,
    renameFR: `Garde Magik`,
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_sheerColdImm')},
}

ability.voltAbsorb = {
    rename: `Volt Absorb`,
    renameFR: `Absorbe-Volt`,
    type: [`electric`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('electric')})},
}

ability.waterAbsorb = {
    rename: `Water Absorb`,
    renameFR: `Absorbe-Eau`,
    type: [`water`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('water')})},
}

ability.flareAbsorb = {
    rename: `Flare Absorb`,
    renameFR: `Absorb Feu`,
    type: [`fire`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('fire')})},
}

ability.curseAbsorb = {
    rename: `Curse Absorb`,
    renameFR: `Absorb Spectre`,
    type: [`dark`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('ghost')})},
}

ability.poisonAbsorb = {
    rename: `Poison Absorb`,
    renameFR: `Absorb Poison`,
    type: [`poison`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('poison')})},
}

ability.frostAbsorb = {
    rename: `Frost Absorb`,
    renameFR: `Absorb Glace`,
    type: [`ice`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('ice')})},
}

ability.psychicAbsorb = {
    rename: `Psychic Absorb`,
    renameFR: `Absorb Psy`,
    type: [`psychic`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('psychic')})},
}

ability.lightAbsorb = {
    rename: `Light Absorb`,
    renameFR: `Absorb Fée`,
    type: [`fairy`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('fairy')})},
}

ability.growthAbsorb = {
    rename: `Growth Absorb`,
    renameFR: `Absorb Plante`,
    type: [`grass`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_nullifiesType', {type: format('grass')})},
}


ability.strongJaw = {
    rename: `Strong Jaw`,
    renameFR: `Prognathe`,
    type: [`dark`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_categoryPower', {category: 'Fang', mult: '2'}).replace('{list}', joinWithAnd(movesAffectedByStrongJaw))},
}

ability.toughClaws = {
    rename: `Tough Claws`,
    renameFR: `Griffe Dure`,
    type: [`dragon`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_categoryPower', {category: 'Claw', mult: '2'}).replace('{list}', joinWithAnd(movesAffectedByToughClaws))},
}

ability.ironFist = {
    rename: `Iron Fist`,
    renameFR: `Poing de Fer`,
    type: [`fighting`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_categoryPower', {category: 'Punch', mult: '1.5'}).replace('{list}', joinWithAnd(movesAffectedByIronFist))},
}


ability.rivalry = {
    rename: `Rivalry`,
    renameFR: `Rivalité`,
    type: [`dragon`, `dark`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_rivalry')},
}

ability.pickPocket = {
    rename: `Pick Pocket`,
    renameFR: `Pickpocket`,
    type: [`dark`, `flying`, `normal`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_luckIncense')},
}


ability.brittleArmor = {
    rename: `Brittle Armor`,
    renameFR: `Armure Fragile`,
    type: [`ice`,`rock`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_increaseStatStatus', {stat: t_ui('statSpecialAttack'), percent: 50})},
}


ability.chlorophyll  = {  
    rename: `Chlorophyll`,
    renameFR: `Chlorophylle`,
    type: [`grass`],
    rarity: 2,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagSunny})},
}


//tier 3

//tier 3 names based on gemini, pisces, o luna, mars, etc


ability.grassyPelt = {  
    rename: `Grassy Pelt`,
    renameFR: `Peau Plante`,
    type: [`grass`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagGrassyTerrain})},
}

ability.sandyPelt = {  
    rename: `Sandy Pelt`,
    renameFR: `Peau Sable`,
    type: [`rock`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagSandstorm})},
}

ability.icyPelt = {  
    rename: `Icy Pelt`,
    renameFR: `Peau Glace`,
    type: [`ice`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagHail})},
}

ability.moistPelt = {  
    rename: `Moist Pelt`,
    renameFR: `Peau Eau`,
    type: [`water`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagRainy})},
}

ability.fieryPelt = {  
    rename: `Fiery Pelt`,
    renameFR: `Peau Feu`,
    type: [`fire`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagSunny})},
}

ability.pixiePelt = {  
    renameFR: `Peau Velue`,
    rename: `fuzzyPelt`,
    type: [`psychic`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagMistyTerrain})},
}

ability.blackPelt = {  
    rename: `Black Pelt`,
    renameFR: `Peau Noire`,
    type: [`ghost`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagFoggy})},
}

ability.spikyPelt = {  
    rename: `Spiky Pelt`,
    renameFR: `Peau Piquante`,
    type: [`electric`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventNegWeather', {tag: tagElectricTerrain})},
}

ability.climaTact  = {  
    rename: `Clima Tact`,
    renameFR: `Tact Climatique`,
    type: [`fairy`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_weatherExtend')},
}

ability.intangible  = {  
    rename: `Intangible`,
    renameFR: `Intangible`,
    type: [`dark`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagFoggy})},
}

ability.hyperconductor  = {  
    rename: `Hyperconductor`,
    renameFR: `Hyperconducteur`,
    type: [`steel`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagElectricTerrain})},
}

ability.faeRush  = {  
    rename: `Fae Rush`,
    renameFR: `Ruée Féerique`,
    type: [`fairy`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagMistyTerrain})},
}

ability.moltShed  = {  
    rename: `Molt Shed`,
    renameFR: `Mue Ardente`,
    type: [`bug`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagGrassyTerrain})},
}

ability.slushRush  = { 
    rename: `Slush Rush`,
    renameFR: `Chasse-Neige`,
    type: [`ice`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagHail})},
}

ability.swiftSwim  = { 
    rename: `Swift Swim`,
    renameFR: `Glissade`,
    type: [`water`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagRainy})},
}

ability.sandRush  = { 
    rename: `Sand Rush`,
    renameFR: `Baigne Sable`,
    type: [`ground`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: t_ui('statSpeed'), tag: tagSandstorm})},
}

ability.intimidate = {
    rename: `Intimidate`,
    renameFR: `Intimidation`,
    type: [`dragon`, `ghost`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_decreaseEnemyStatEnter', {stat: t_ui('statAttack')})},
}

ability.dauntingLook = {
    rename: `Daunting Look`,
    renameFR: `Regard Intimidant`,
    type: [`bug`, `fire`, `fighting`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_decreaseEnemyStatEnter', {stat: t_ui('statSpecialAttack')})},
}

ability.unburden = {
    rename: `Unburden`,
    renameFR: `Délestage`,
    type: [`normal`, `fighting`, `flying`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatNoItem', {stat: t_ui('statSpeed')})},
}

ability.moxie = {
    rename: `Moxie`,
    renameFR: `Impudence`,
    type: [`dark`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatKO', {stat: t_ui('statAttack')})},
}

ability.strategist = {
    rename: `Strategist`,
    renameFR: `Stratège`,
    type: [`psychic`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatKO', {stat: t_ui('statSpecialAttack')})},
}

ability.sheerForce = {
    rename: `Sheer Force`,
    renameFR: `Sans Limite`,
    type: [`ground`, `steel`, `rock`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_sheerForce')},
}

ability.levitate = {
    rename: `Levitate`,
    renameFR: `Lévitation`,
    type: [`electric`, `steel`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_levitate')},
}

ability.thickFat = {
    rename: `Thick Fat`,
    renameFR: `Isograisse`,
    type: [`normal`, `ice`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_halvesTwoTypes', {type1: format('fire'), type2: format('ice')})},
}

ability.adaptability = {
    rename: `Adaptability`,
    renameFR: `Adaptabilité`,
    type: [`all`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_stabBoost')},
}

ability.ambidextrous = {
    rename: `Ambidextrous`,
    renameFR: `Ambidextre`,
    type: [`all`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_crossPower03')},
}

ability.noGuard = {
    rename: `No Guard`,
    renameFR: `Annule Garde`,
    type: [`all`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_alwaysHit')},
}

ability.multiscale = {
    rename: `Multiscale`,
    renameFR: `Multiécaille`,
    type: [`water`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_halveDamageHighHP', {percent: 50})},
}

ability.guts = {
    rename: `Guts`,
    renameFR: `Cran`,
    type: [`normal`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_gutsFull')},
}

ability.skillLink = {
    rename: `Skill Link`,
    renameFR: `Multi-Coups`,
    type: [`bug`,`normal`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_maxMultiHit')},
}

ability.sharpness = {
    rename: `Sharpness`,
    renameFR: `Incisif`,
    type: [`steel`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_categoryPower', {category: 'Sharp', mult: '1.5'}).replace('{list}', joinWithAnd(movesAffectedBySharpness))},
}

ability.angerPoint = {
    rename: `Anger Point`,
    renameFR: `Colérique`,
    type: [`fire`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatSE', {stat: t_ui('statAttack')})},
}

ability.justified = {
    rename: `Justified`,
    renameFR: `Cœur Noble`,
    type: [`fighting`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatSE', {stat: t_ui('statSpecialAttack')})},
}

ability.filter = {
    rename: `Filter`,
    renameFR: `Filtre`,
    type: [`bug`,`ground`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_halveSE')},
}

ability.reckless = {
    rename: `Reckless`,
    renameFR: `Téméraire`,
    type: [`flying`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_slowPower15')},
}

ability.libero = {
    rename: `Libero`,
    renameFR: `Libéro`,
    type: [`fairy`,`psychic`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_fastPower2')},
}

ability.flashElectro = {
    rename: `Flash Electro`,
    renameFR: `Flash Électrik`,
    type: [`electric`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('electric')})},
}

ability.flashAqua = {
    rename: `Flash Aqua`,
    renameFR: `Flash Eau`,
    type: [`water`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('water')})},
}

ability.flashPyro = {
    rename: `Flash Pyro`,
    renameFR: `Flash Feu`,
    type: [`fire`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('fire')})},
}

ability.flashUmbra = {
    rename: `Flash Umbra`,
    renameFR: `Flash Ténèbres`,
    type: [`dark`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('ghost')})},
}

ability.flashVenum = {
    rename: `Flash Venum`,
    renameFR: `Flash Poison`,
    type: [`poison`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('poison')})},
}

ability.flashCryo = {
    rename: `Flash Cryo`,
    renameFR: `Flash Glace`,
    type: [`ice`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('ice')})},
}

ability.flashPsycha = {
    rename: `Flash Psycha`,
    renameFR: `Flash Psy`,
    type: [`psychic`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('psychic')})},
}

ability.flashFae = {
    rename: `Flash Fae`,
    renameFR: `Flash Fée`,
    type: [`fairy`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('fairy')})},
}

ability.flashHerba = {
    rename: `Flash Herba`,
    renameFR: `Flash Herbe`,
    type: [`grass`],
    rarity: 3,
    info: function() {return t_ui('moveInfo_nullifiesTypeSpeed', {type: format('grass')})},
}


//hidden


ability.stoned = {
    rename: `Stoned`,
    renameFR: `Pétrifié`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_longerPositiveStats')},
    nerf: `When slotted as a non-hidden ability: Turns reduced to x2`
}

ability.powerOfAlchemy = {
    rename: `Power of Alchemy`,
    renameFR: `Osmose`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_powerOfAlchemy')},
}

ability.stamina = {
    rename: `Stamina`,
    renameFR: `Endurance`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_decreaseFatigue')},
}

ability.gooey = {
    rename: `Gooey`,
    renameFR: `Poisseux`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_decreaseEnemyStatOnHit', {stat: t_ui('statSpeed'), percent: 50})},
}

ability.flowerVeil = {
    rename: `Flower Veil`,
    renameFR: `Flora-Voile`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventTeamTag', {tag: tagParalysis})},
}

ability.aromaVeil = {
    rename: `Aroma Veil`,
    renameFR: `Aroma-Voile`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventTeamTag', {tag: tagBurn})},
}

ability.sweetVeil = {
    rename: `Sweet Veil`,
    renameFR: `Gluco-Voile`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventTeamTag', {tag: tagConfused})},
}

ability.pastelVeil = {
    rename: `Pastel Veil`,
    renameFR: `Voile Pastel`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_preventTeamTag', {tag: tagPoisoned})},
}

ability.shieldsDown = {
    rename: `Shields Down`,
    renameFR: `Bouclier-Carcan`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_neutralSE')},
}

ability.colorSpore = {
    rename: `Color Spore`,
    renameFR: `Spore Colorée`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_longerStatus')},
    //nerf: `When slotted as a non-hidden ability: Turns reduced to x2`
}

ability.merciless = {
    rename: `Merciless`,
    renameFR: `Cruauté`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_merciless')},
    nerf: `When slotted as a non-hidden ability: Damage reduced to x1.35`
}

ability.costar = {
    rename: `Costar`,
    renameFR: `Collab`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_defiant')},
}

ability.purifyingSalt = {
    rename: `Purifying Salt`,
    renameFR: `Sel Purificateur`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_ghostNerf')},
}


ability.treasureOfRuin = {
    rename: `Treasure Of Ruin`,
    renameFR: `Trésor du Fléau`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_crossPower05')},
}

ability.thousandArms = {
    rename: `Thousand Arms`,
    renameFR: `Mille Bras`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_noGuard')},
}

ability.goodAsGold = {
    rename: `Good as Gold`,
    renameFR: `Corps en Or`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_shinyCharm')},
}

ability.wonderGuard = {
    rename: `Wonder Guard`,
    renameFR: `Garde Mystik`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_filter')},
}

ability.tintedLens = {  
    rename: `Tinted Lens`,
    renameFR: `Lentiteintée`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_tintedLens')},
}

ability.prankster = {
    rename: `Prankster`,
    renameFR: `Farceur`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_twoTypesFaster', {type1: format('ghost'), type2: format('dark'), mult: '1.5'})},
}

ability.galeWings = {
    rename: `Gale Wings`,
    renameFR: `Ailes Bourrasque`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_twoTypesFaster', {type1: format('flying'), type2: format('bug'), mult: '1.5'})},
}

ability.neuroforce = {
    rename: `Neuroforce`,
    renameFR: `Cérébro-Force`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_twoTypesFaster', {type1: format('psychic'), type2: format('fairy'), mult: '1.5'})},
}

ability.speedBoost = {
    rename: `Speed Boost`,
    renameFR: `Turbo`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_increaseStatKO', {stat: t_ui('statSpeed')})},
}

ability.scorch = {
    rename: `Scorch`,
    renameFR: `Carbonisé`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_dotDouble', {tag: tagBurn})},
    nerf: `When slotted as a non-hidden ability: Damage reduced to x1.5`
}

ability.corrosion = {
    rename: `Corrosion`,
    renameFR: `Corrosion`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_dotDouble', {tag: tagPoisoned})},
    nerf: `When slotted as a non-hidden ability: Damage reduced to x1.5`
}

ability.dancer = {
    rename: `Dancer`,
    renameFR: `Danseuse`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_categorySpeed', {category: 'Dance'}).replace('{list}', joinWithAnd(movesAffectedByDancer))},
    nerf: `When slotted as a non-hidden ability: Speed reduced to x1.5`
}

ability.cacophony = {
    rename: `Cacophony`,
    renameFR: `Cacophonie`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_categorySpeed', {category: 'Sound'}).replace('{list}', joinWithAnd(movesAffectedByCacophony))},
    nerf: `When slotted as a non-hidden ability: Speed reduced to x1.5`
}

ability.windRider = {
    rename: `Wind Rider`,
    renameFR: `Aéroporté`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_categorySpeed', {category: 'Wind'}).replace('{list}', joinWithAnd(movesAffectedByWindRider))},
    nerf: `When slotted as a non-hidden ability: Speed reduced to x1.5`
}


ability.iaido = {
    rename: `Iaido`,
    renameFR: `Iaïdo`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_categorySpeed', {category: 'Sharp'}).replace('{list}', joinWithAnd(movesAffectedBySharpness))},
    nerf: `When slotted as a non-hidden ability: Speed reduced to x1.5`
}


ability.megaLauncher = {
    rename: `Mega Launcher`,
    renameFR: `Méga Blaster`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_categoryPower', {category: 'Pulse', mult: '1.5'}).replace('{list}', joinWithAnd(movesAffectedByMegaLauncher))},
}

ability.metalhead = {
    rename: `Metalhead`,
    renameFR: `Tête de Métal`,
    rarity: 3,
    info: function() {return t_ui('moveInfo_categoryPower', {category: 'Head', mult: '1.5'}).replace('{list}', joinWithAnd(movesAffectedByMetalhead))},
}

ability.imposter = {
    rename: `Imposter`,
    renameFR: `Imposteur`,
    info: function() {return t_ui('moveInfo_copyEnemyStats')},
    rarity: 3,
}

ability.toxicBoost = {
    rename: `Toxic Boost`,
    renameFR: `Rage Poison`,
    info: function() {return t_ui('moveInfo_gutsLike', {tag: tagPoisoned})},
    rarity: 3,
}

ability.flareBoost = {
    rename: `Flare Boost`,
    renameFR: `Rage Brûlure`,
    info: function() {return t_ui('moveInfo_gutsLike', {tag: tagBurn})},
    rarity: 3,
}

ability.fullMetalBody = {
    rename: `Full Metal Body`,
    renameFR: `Métallo-Garde`,
    info: function() {return t_ui('moveInfo_preventAllStatDecrease')},
    rarity: 3,
}

ability.supremeOverlord = {
    rename: `Supreme Overlord`,
    renameFR: `Général Suprême`,
    info: function() {return t_ui('moveInfo_defeatistReverse')},
    rarity: 3,
}

ability.gorillaTactics = {
    rename: `Gorilla Tactics`,
    renameFR: `Entêtement`,
    info: function() {return t_ui('moveInfo_gorillaTactics')},
    nerf: `When slotted as a non-hidden ability: Damage reduced to x1.35`,
    rarity: 3,
}

ability.beastBoost = {
    rename: `Beast Boost`,
    renameFR: `Boost Chimère`,
    info: function() {return t_ui('moveInfo_highestStatKO')},
    rarity: 3,
}

ability.quarkDrive = {
    rename: `Quark Drive`,
    renameFR: `Charge Quantique`,
    info: function() {return t_ui('moveInfo_increaseStatTerrain', {stat: 'the highest stat of the user', tag: tagElectricTerrain})},
    rarity: 3,
}

ability.protosynthesis = {
    rename: `Protosynthesis`,
    renameFR: `Paléosynthèse`,
    info: function() {return t_ui('moveInfo_increaseStatWeather', {stat: 'the highest stat of the user', tag: tagSunny})},
    rarity: 3,
}

ability.drizzle = {
    rename: `Drizzle`,
    renameFR: `Crachin`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagRainy})},
    rarity: 3,
}

ability.drought = {
    rename: `Drought`,
    renameFR: `Sécheresse`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagSunny})},
    rarity: 3,
}

ability.sandStream = {
    rename: `Sand Stream`,
    renameFR: `Sable Volant`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagSandstorm})},
    rarity: 3,
}

ability.snowWarning = {
    rename: `Snow Warning`,
    renameFR: `Alerte Neige`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagHail})},
    rarity: 3,
}

ability.somberField = {
    rename: `Somber Field`,
    renameFR: `Champ Sombre`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagFoggy})},
    rarity: 3,
}

ability.electricSurge = {
    rename: `Electric Surge`,
    renameFR: `Créa-Élec`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagElectricTerrain})},
    rarity: 3,
}

ability.grassySurge = {
    rename: `Grassy Surge`,
    renameFR: `Créa-Herbe`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagGrassyTerrain})},
    rarity: 3,
}

ability.mistySurge = {
    rename: `Misty Surge`,
    renameFR: `Créa-Brume`,
    info: function() {return t_ui('moveInfo_changeWeatherEnter', {tag: tagMistyTerrain})},
    rarity: 3,
}

ability.sereneGrace = {
    rename: `Serene Grace`,
    renameFR: `Sérénité`,
    info: function() {return t_ui('moveInfo_doubleSecondary')},
    rarity: 3,
}

ability.hugePower = {
    rename: `Huge Power`,
    renameFR: `Coloforce`,
    info: function() {return t_ui('moveInfo_doublePhysical')},
    rarity: 3,
}

ability.contrary = {
    rename: `Contrary`,
    renameFR: `Contestation`,
    info: function() {return t_ui('moveInfo_invertStats')},
    rarity: 3,
}

ability.protean = {
    rename: `Protean`,
    renameFR: `Protéen`,
    info: function() {return t_ui('moveInfo_adaptType')},
    rarity: 3,
}

ability.simple = {
    rename: `Simple`,
    renameFR: `Simple`,
    info: function() {return t_ui('moveInfo_boostStatStages')},
    rarity: 3,
}

ability.parentalBond = {
    rename: `Parental Bond`,
    renameFR: `Amour Filial`,
    info: function() {return t_ui('moveInfo_parentalBond')},
    rarity: 3,
}

ability.moody = {
    rename: `Moody`,
    renameFR: `Lunatique`,
    info: function() {return t_ui('moveInfo_randomTwoStats')},
    rarity: 3,
}

ability.darkAura = {
    rename: `Dark Aura`,
    renameFR: `Aura Ténébreuse`,
    info: function() {return t_ui('moveInfo_darkAura')},
    rarity: 3,
}


ability.soulAsterism = {
    rename: `Soul Asterism`,
    renameFR: `Constellation d'Âme`,
    info: function() {return t_ui('moveInfo_ghostAura')},
    rarity: 3,
}


ability.normalize = {
    rename: `Normalize`,
    renameFR: `Normalise`,
    info: function() {return t_ui('moveInfo_allMovesNormal')},
    rarity: 3,
}


ability.ferrilate = {
    rename: `Ferrilate`,
    renameFR: `Peau Ferraille`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('steel')})},
    rarity: 3,
}

ability.glaciate = {
    rename: `refrigerate`,
    renameFR: `Peau Gelée`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('ice')})},
    rarity: 3,
}

ability.terralate = {
    rename: `Terralate`,
    renameFR: `Terralation`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('ground')})},
    rarity: 3,
}

ability.toxilate = {
    rename: `Toxilate`,
    renameFR: `Peau Toxique`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('poison')})},
    rarity: 3,
}

ability.hydrolate = {
    rename: `Hydrolate`,
    renameFR: `Peau Aquatique`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('water')})},
    rarity: 3,
}

ability.pyrolate = {
    rename: `Pyrolate`,
    renameFR: `Peau Ardente`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('fire')})},
    rarity: 3,
}

ability.chrysilate = {
    rename: `Chrysilate`,
    renameFR: `Peau Insecte`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('bug')})},
    rarity: 3,
}

ability.galvanize = {
    rename: `Galvanize`,
    renameFR: `Peau Électrique`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('electric')})},
    rarity: 3,
}

ability.gloomilate = {
    rename: `Gloomilate`,
    renameFR: `Peau Sombre`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('dark')})},
    rarity: 3,
}

ability.espilate = {
    rename: `Espilate`,
    renameFR: `Peau Psychique`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('psychic')})},
    rarity: 3,
}

ability.aerilate = {
    rename: `Aerilate`,
    renameFR: `Peau Céleste`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('flying')})},
    rarity: 3,
}

ability.pixilate = {
    rename: `Pixilate`,
    renameFR: `Peau Féérique`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('fairy')})},
    rarity: 3,
}

ability.verdify = {
    rename: `Verdify`,
    renameFR: `Verdification`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('grass')})},
    rarity: 3,
}

ability.dragonMaw = {
    rename: `Dragon's Maw`,
    renameFR: `Dent de Dragon`,
    info: function() {return t_ui('moveInfo_ateType', {type: format('dragon')})},
    rarity: 3,
}


for (const i in ability){
    ability[i].id = i
}


const berryMemoryRare = [ ability.flashHerba.id, ability.flashFae.id, ability.flashPsycha.id, ability.flashCryo.id, ability.flashVenum.id, ability.flashUmbra.id,
    ability.flashPyro.id, ability.flashAqua.id, ability.flashElectro.id, ability.libero.id, ability.reckless.id, ability.filter.id, ability.justified.id,
    ability.angerPoint.id, ability.sharpness.id, ability.skillLink.id, ability.guts.id, ability.multiscale.id, ability.noGuard.id, ability.ambidextrous.id,
    ability.adaptability.id, ability.thickFat.id, ability.levitate.id, ability.sheerForce.id, ability.strategist.id, ability.moxie.id, ability.unburden.id,
    ability.dauntingLook.id, ability.intimidate.id, ability.sandRush.id, ability.swiftSwim.id, ability.slushRush.id, ability.moltShed.id, ability.faeRush.id,
    ability.hyperconductor.id, ability.intangible.id, ability.climaTact.id, ability.spikyPelt.id, ability.blackPelt.id, ability.pixiePelt.id, ability.fieryPelt.id,
    ability.moistPelt.id, ability.icyPelt.id, ability.sandyPelt.id, ability.grassyPelt.id,
 ]

 //todo
 //nerf non HA HA's
 //buff protean make it receive crosspower
 

 const apricornMemoryHA1 = [ 
    ability.stamina.id, ability.gooey.id, ability.shieldsDown.id, ability.costar.id,
    ability.purifyingSalt.id, ability.scorch.id, ability.corrosion.id, ability.megaLauncher.id,
    ability.metalhead.id, ability.moody.id, ability.merciless.id, ability.colorSpore.id, ability.sandStream.id,
    ability.snowWarning.id, ability.somberField.id, ability.stoned.id,
 ]


 //ability.quarkDrive.id, ability.protosynthesis.id,


 const apricornMemoryHA2 = [  
    ability.dancer.id, ability.cacophony.id, ability.windRider.id, ability.gorillaTactics.id,
    ability.imposter.id,
    ability.drizzle.id, ability.drought.id, ability.electricSurge.id,
    ability.grassySurge.id, ability.mistySurge.id, ability.ferrilate.id, ability.glaciate.id,
    ability.terralate.id, ability.toxilate.id, ability.hydrolate.id, ability.pyrolate.id, ability.chrysilate.id,
    ability.galvanize.id, ability.gloomilate.id, ability.espilate.id, ability.aerilate.id, ability.pixilate.id,
    ability.verdify.id, ability.dragonMaw.id, ability.iaido.id,
 ]

 /*const apricornMemoryHA2 = [   ability.treasureOfRuin.id, ability.dancer.id, ability.cacophony.id, 
    ability.imposter.id, ability.quarkDrive.id, ability.protosynthesis.id, ability.drizzle.id, ability.drought.id,  ability.electricSurge.id, ability.grassySurge.id, ability.mistySurge.id, 
    ability.ferrilate.id, ability.glaciate.id, ability.terralate.id, ability.toxilate.id,
    ability.hydrolate.id, ability.pyrolate.id, ability.chrysilate.id, ability.galvanize.id, ability.gloomilate.id, ability.espilate.id, ability.aerilate.id, ability.pixilate.id,
    ability.verdify.id, ability.dragonMaw.id,
 ]*/

 const apricornMemoryHA3 = [   ability.tintedLens.id, ability.prankster.id, ability.galeWings.id, ability.speedBoost.id,
    ability.toxicBoost.id, ability.flareBoost.id, ability.fullMetalBody.id, ability.supremeOverlord.id, ability.beastBoost.id, ability.sereneGrace.id,
    ability.contrary.id, ability.simple.id, ability.normalize.id, 
 ]

 const apricornMemoryHA4 = [  ability.hugePower.id, ability.powerOfAlchemy.id, ability.wonderGuard.id, ability.protean.id, ability.parentalBond.id,
 ]


const move = {}

const defaultPlayerMoveTimer = 2000


//tier 1 - 20-40 uncompromised dmg
//tier 2 - 50-70 uncompromised dmg
//tier 3 - 80-100 uncompromised dmg

//signatures need to be learnt through cloning inheriting!


//normal


move.quickAttack = {
    rename: `Quick Attack`,
    renameFR: `Vive-Attaque`,
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.tackle = {
    rename: `Tackle`,
    renameFR: `Charge`,
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40
}

move.doubleSlap = {  
    rename: `Double Slap`,
    renameFR: `Torgnoles`,
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.cut = {
    rename: `Cut`,
    renameFR: `Coupe`,
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 50,
    affectedBy: [ability.sharpness.id]
}

move.leer = {
    rename: `Leer`,
    renameFR: `Groz’Yeux`,
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
    restricted: true,
}

move.growl = { 
    rename: `Growl`,
    renameFR: `Rugissement`,
    moveset: [`normal`, `all`, `dark`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
    affectedBy: [ability.cacophony.id]
}

move.swagger = {
    rename: `Swagger`,
    renameFR: `Vantardise`,
    moveset: [`all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_inflictAndBoostEnemyAtk', {tag: tagConfused})},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'atkup2') },
}

move.doubleHit = {  
    rename: `Double Hit`,
    renameFR: `Coup Double`,
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 35,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
}

move.playNice = {
    rename: `Play Nice`,
    renameFR: `Camaraderie`,
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.swift = {
    rename: `Swift`,
    renameFR: `Météores`,
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 60,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.dizzyPunch = {
    rename: `Dizzy Punch`,
    renameFR: `Uppercut`,
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
    affectedBy: [ability.ironFist.id]
}

move.stomp = {
    rename: `Stomp`,
    renameFR: `Écrasement`,
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 65
}

move.screech = {
    rename: `Screech`,
    renameFR: `Grincement`,
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'defdown2') },
    affectedBy: [ability.cacophony.id],
    restricted: true,
}

move.smellingSalts = {  
    rename: `Smelling Salts`,
    renameFR: `Stimulant`,
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return t_ui('moveInfo_powerDoubleCond', {condition: format('paralyzed')})},
    powerMod : function() { if (wildBuffs.paralysis>0) { return 2} else return 1 },
}

move.facade = {  
    rename: `Facade`,
    renameFR: `Façade`,
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return t_ui('moveInfo_powerDoubleUserCond', {condition: 'Paralyzed, Burned or Poisoned'})},
    powerMod : function() { if (team[exploreActiveMember].buffs?.burn > 0 || team[exploreActiveMember].buffs?.poisoned > 0 || team[exploreActiveMember].buffs?.paralysis > 0) { return 2} else return 1 },
}

move.slash = {
    rename: `Slash`,
    renameFR: `Tranche`,
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 90,
    affectedBy: [ability.sharpness.id]
}

move.extremeSpeed = {
    rename: `Extreme Speed`,
    renameFR: `Vitesse Extrême`,
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 75,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.strength = {
    rename: `Strength`,
    renameFR: `Force`,
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 100
}

move.hyperVoice = {
    rename: `Hyper Voice`,
    renameFR: `Mégaphone`,
    moveset: [`normal`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 90,
    affectedBy: [ability.cacophony.id]
}

move.bodyPress = { 
    rename: `Body Press`,
    renameFR: `Big Splash`,
    moveset: [`normal`, `fighting`, `rock`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 90,
    info: function() {return t_ui('moveInfo_powerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.hyperBeam = {
    rename: `Hyper Beam`,
    renameFR: `Ultralaser`,
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})} ,
}

move.gigaImpact = {  
    rename: `Giga Impact`,
    renameFR: `Giga Impact`,
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})} ,
}

move.swordsDance = {  
    rename: `Swords Dance`,
    renameFR: `Danse Lames`,
    moveset: [`steel`,"all"],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statAttack'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self");},
    affectedBy: [ability.dancer.id],
    restricted: true,
}


//fire
move.ember = {
    rename: `Ember`,
    renameFR: `Flammèche`,
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 40,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.fireSpin = {  
    rename: `Fire Spin`,
    renameFR: `Danse Flammes`,
    moveset: [`fire`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.flameCharge = {
    rename: `Flame Charge`,
    renameFR: `Nitrocharge`,
    moveset: [`fire`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 50,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 50, stat: t_ui('statSpeed'), value: 50})},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'speup1','self') },
}

move.incinerate = {
    rename: `Incinerate`,
    renameFR: `Calcination`,
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 2,
    type: "fire",
    power: 60
}

move.fireFang = {
    rename: `Fire Fang`,
    renameFR: `Crocs Feu`,
    moveset: [`fire`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.strongJaw.id]
}

move.firePunch = {
    rename: `Fire Punch`,
    renameFR: `Poing Feu`,
    moveset: [`fire`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 75,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.ironFist.id]
}


move.sunnyDay = { 
    rename: `Sunny Day`,
    renameFR: `Zénith`,
    moveset: [`fire`,`ground`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagSunny})} ,
    hitEffect: function(target) { changeWeather("sunny") },
}

move.flamethrower = {
    rename: `Flamethrower`,
    renameFR: `Lance-Flammes`,
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.heatWave = {
    rename: `Heat Wave`,
    renameFR: `Canicule`,
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 50, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'burn') },
    affectedBy: [ability.windRider.id]
}

move.fireBlast = {
    rename: `Fire Blast`,
    renameFR: `Déflagration`,
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})},
    affectedBy: [ability.megaLauncher.id]
}

move.flareBlitz = {
    rename: `Flare Blitz`,
    renameFR: `Boutefeu`,
    moveset: [`fire`],
    split: "physical",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}


move.overheat = {  
    rename: `Overheat`,
    renameFR: `Surchauffe`,
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//electric
move.nuzzle = {
    rename: `Nuzzle`,
    renameFR: `Frotte-Frimousse`,
    moveset: [`electric`, `fairy`],
    split: "physical",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.magneticFlux = {
    rename: `Magnetic Flux`,
    renameFR: `Magné-Contrôle`,
    moveset: [`electric`, `steel`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpecialDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self") },
}

move.thunderShock = {
    rename: `Thunder Shock`,
    renameFR: `Éclair`,
    moveset: [`electric`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.thunderWave = {
    rename: `Thunder Wave`,
    renameFR: `Cage Éclair`,
    moveset: [`electric`, `psychic`, `ghost`, `fairy`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagParalysis})},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.chargeBeam = {
    rename: `Charge Beam`,
    renameFR: `Rayon Chargé`,
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 50, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkup1',"self") },
}

move.electroWeb = {
    rename: `Electro Web`,
    renameFR: `Toile Élek`,
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 55,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.thunderFang = {
    rename: `Thunder Fang`,
    renameFR: `Crocs Éclair`,
    moveset: [`electric`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
    affectedBy: [ability.strongJaw.id]
}

move.thunderPunch = {
    rename: `Thunder Punch`,
    renameFR: `Poing Éclair`,
    moveset: [`electric`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 75,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
    affectedBy: [ability.ironFist.id]
}

move.thunderbolt = {
    rename: `Thunderbolt`,
    renameFR: `Tonnerre`,
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.discharge = {
    rename: `Discharge`,
    renameFR: `Coup d’Jus`,
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.electricTerrain = { 
    rename: `Electric Terrain`,
    renameFR: `Champ Électrifié`,
    moveset: [`electric`,`steel`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagElectricTerrain})} ,
    hitEffect: function(target) { changeWeather("electricTerrain") },
}

move.thunder = {
    rename: `Thunder`,
    renameFR: `Fatal-Foudre`,
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 110,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.voltSwitch = {
    rename: `Volt Switch`,
    renameFR: `Change Éclair`,
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 70,
    info: function() {return t_ui('moveInfo_switchNext')},
    hitEffect: function(target) { if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.wildCharge = {  
    rename: `Wild Charge`,
    renameFR: `Éclair Fou`,
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "electric",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.supercellSlam = {  //new
    rename: `Supercell Slam`,
    renameFR: `Volt Assaut`,
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "electric",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//ground
move.mudSlap = {
    rename: `Mud-Slap`,
    renameFR: `Coud’Boue`,
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 1,
    type: "ground",
    power: 20
}

move.magnitude = {  
    rename: `Magnitude`,
    renameFR: `Ampleur`,
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 1,
    type: "ground",
    power: 10,
    info: function() {return t_ui('moveInfo_randomPower')},
    powerMod : function() { return random(1,8) },
}

move.mudShot = {
    rename: `Mud Shot`,
    renameFR: `Tir de Boue`,
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 55,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.bulldoze = {
    rename: `Bulldoze`,
    renameFR: `Piétisol`,
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ground",
    power: 60,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}


move.sandstorm = { 
    rename: `Sandstorm`,
    renameFR: `Tempête de Sable`,
    moveset: [`rock`,`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagSandstorm})} ,
    hitEffect: function(target) { changeWeather("sandstorm") },
    affectedBy: [ability.windRider.id]
}

move.scorchingSands = {
    rename: `Scorching Sands`,
    renameFR: `Sable Ardent`,
    moveset: [`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.rototiller = {
    rename: `Rototiller`,
    renameFR: `Fertilisation`,
    moveset: [`ground`, `grass`],
    split: "special",
    rarity: 3,
    type: "ground",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Attack and Special Attack', percent: 100})},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self"); moveBuff(target,'satkup2',"self") },
    restricted: true,
}

move.earthquake = {
    rename: `Earthquake`,
    renameFR: `Séisme`,
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 100
}

move.dig = {
    rename: `Dig`,
    renameFR: `Tunnel`,
    moveset: [`ground`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 80,
    info: function() {return t_ui('moveInfo_powerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.earthPower = {
    rename: `Earth Power`,
    renameFR: `Telluriforce`,
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "ground",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.stompingTantrum = {  //new
    rename: `Stomping Tantrum`,
    renameFR: `Trépignement`,
    moveset: [`ground`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//steel
move.bulletPunch = {
    rename: `Bullet Punch`,
    renameFR: `Pisto-Poing`,
    moveset: [`steel`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})},
    affectedBy: [ability.ironFist.id]
}

move.metalClaw = {
    rename: `Metal Claw`,
    renameFR: `Griffe Acier`,
    moveset: [`steel`, `flying`, `dragon`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 50,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 30, stat: t_ui('statAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'atkup1',"self") },
    affectedBy: [ability.toughClaws.id]
}

move.magnetBomb = {
    rename: `Magnet Bomb`,
    renameFR: `Bombe Aimant`,
    moveset: [`steel`, `electric`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 60
}

move.mirrorShot = { //edit
    rename: `Mirror Shot`,
    renameFR: `Miroi-Tir`,
    moveset: [`steel`],
    split: "special",
    rarity: 2,
    type: "steel",
    power: 70
}

move.steelWing = {
    rename: `Steel Wing`,
    renameFR: `Ailes d’Acier`,
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 50, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defup1',"self") },
}

move.ironHead = {
    rename: `Iron Head`,
    renameFR: `Tête de Fer`,
    moveset: [`steel`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 80,
    affectedBy: [ability.metalhead.id]
}

move.sharkJaws = {  
    rename: `Shark Jaws`,
    renameFR: `Mâchoires de Requin`,
    moveset: [`water`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
    affectedBy: [ability.strongJaw.id]
}

move.ironSlug = {  
    rename: `Iron Slug`,
    renameFR: `Balle de Fer`,
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.flashCannon = {
    rename: `Flash Cannon`,
    renameFR: `Luminocanon`,
    moveset: [`steel`, `electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 80,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}


move.ironTail = {
    rename: `Iron Tail`,
    renameFR: `Queue de Fer`,
    moveset: [`steel`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 90,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slowAndPowerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.smartStrike = {  
    rename: `Smart Strike`,
    renameFR: `Estocorne`,
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 90,
    affectedBy: [ability.sharpness.id]
}

move.metalSound = {
    rename: `Metal Sound`,
    renameFR: `Strido-Son`,
    moveset: [`steel`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpecialDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
    affectedBy: [ability.cacophony.id],
    restricted: true,
}

move.ironDefense = {
    rename: `Iron Defense`,
    renameFR: `Mur de Fer`,
    moveset: [`steel`, `fighting`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'defup2',"self");},
}


//flying
move.peck = {
    rename: `Peck`,
    renameFR: `Picpic`,
    moveset: [`flying`],
    split: "physical",
    rarity: 1,
    type: "flying",
    power: 35
}

move.gust = {
    rename: `Gust`,
    renameFR: `Tornade`,
    moveset: [`flying`],
    split: "special",
    rarity: 1,
    type: "flying",
    power: 40,
    affectedBy: [ability.windRider.id]
}

move.skyDrop = {
    rename: `Sky Drop`,
    renameFR: `Chute Libre`,
    moveset: [`flying`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 50,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.dualWingbeat = {  
    rename: `Dual Wingbeat`,
    renameFR: `Double Volée`,
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 30,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
}

move.acrobatics = {  
    rename: `Acrobatics`,
    renameFR: `Acrobatie`,
    moveset: [`flying`, `bug`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 65,
    info: function() {return t_ui('moveInfo_powerDoubleNoItem')},
    powerMod : function() { if (team[exploreActiveMember].item === undefined ) { return 2} else return 1 },
}

move.airShlash = {
    rename: `airSlash`,
    renameFR: `Tranch'Air`,
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 75,
    affectedBy: [ability.sharpness.id],
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'sdefdown1') },
}

move.drillPeck = {
    rename: `Drill Peck`,
    renameFR: `Bec Vrille`,
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 80
}

move.tailwind = {
    rename: `Tailwind`,
    renameFR: `Vent Arrière`,
    moveset: [`flying`],
    split: "special",
    rarity: 2,
    type: "flying",
    power: 0,
    info: function() {return t_ui('moveInfo_tailwindSlow')},
    timer: defaultPlayerMoveTimer*1.5,
    hitEffect: function(target) { moveBuff(target,'speup1',"team"); },
    affectedBy: [ability.windRider.id]
}

move.fly = {
    rename: `Fly`,
    renameFR: `Vol`,
    moveset: [`flying` ,`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 90
}

move.featherDance = {
    rename: `Feather Dance`,
    renameFR: `Danse Plumes`,
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
    affectedBy: [ability.dancer.id]
}

move.bounce = {
    rename: `Bounce`,
    renameFR: `Rebond`,
    moveset: [`flying`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 75,
    info: function() {return t_ui('moveInfo_powerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.hurricane = {
    rename: `Hurricane`,
    renameFR: `Vent Violent`,
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 100,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
    affectedBy: [ability.windRider.id]
}

move.razorTalons = {  
    rename: `Razor Talons`,
    renameFR: `Griffes Rasoir`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 40,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
    affectedBy: [ability.toughClaws.id]
}


//poison
move.acid = {
    rename: `Acid`,
    renameFR: `Acide`,
    moveset: [`poison`, `grass`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 40,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.poisonSting = {
    rename: `Poison Sting`,
    renameFR: `Dard-Venin`,
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "poison",
    power: 15,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.smog = {
    rename: `Smog`,
    renameFR: `Purédpois`,
    moveset: [`poison`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 30,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.poisonPowder = {
    rename: `Poison Powder`,
    renameFR: `Poudre Toxik`,
    moveset: [`grass`,],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagPoisoned})},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.toxic = {
    rename: `Toxic`,
    renameFR: `Toxik`,
    moveset: [`poison`, `all`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagPoisoned})},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.poisonFang = {
    rename: `Poison Fang`,
    renameFR: `Crochet Venin`,
    moveset: [`poison`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.strongJaw.id]
}

move.sludge = {
    rename: `Sludge`,
    renameFR: `Détritus`,
    moveset: [`poison`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.crossPoison = {
    rename: `Cross Poison`,
    renameFR: `Poison Croix`,
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.poisonClaw = {  
    rename: `Poison Claw`,
    renameFR: `Griffe Poison`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 75,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.toughClaws.id]
}

move.poisonJab = {
    rename: `Poison Jab`,
    renameFR: `Direct Toxik`,
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.ironFist.id]
}

move.sludgeBomb = {
    rename: `Sludge Bomb`,
    renameFR: `Bombe Beurk`,
    moveset: [`poison`, `ground`, `grass`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.sludgeWave = {
    rename: `Sludge Wave`,
    renameFR: `Cradovague`,
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 95,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.coil = {
    rename: `Coil`,
    renameFR: `Enroulement`,
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Attack and Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
    restricted: true,
}

move.acidArmor = {
    rename: `Acid Armor`,
    renameFR: `Acidarmure`,
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'defup2',"self") },
}

move.acidSpray = {
    rename: `Acid Spray`,
    renameFR: `Bombe Acide`,
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 50,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}


move.noxiousTorque = {  //new
    rename: `Noxious Torque`,
    renameFR: `Moteur Nocif`,
    moveset: [`poison`],
    split: "physical",
    rarity: 3,
    type: "poison",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//ice
move.iceShard = {
    rename: `Ice Shard`,
    renameFR: `Éclats Glace`,
    moveset: [`ice`],
    split: "physical",
    rarity: 1,
    type: "ice",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})},
    affectedBy: [ability.sharpness.id]
}

move.powderSnow = {
    rename: `Powder Snow`,
    renameFR: `Poudreuse`,
    moveset: [`ice`],
    split: "special",
    rarity: 1,
    type: "ice",
    power: 40,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagFreeze})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.icicleSpear = {  
    rename: `Icicle Spear`,
    renameFR: `Stalactite`,
    moveset: [`ice`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}


move.hail = { 
    rename: `Hail`,
    renameFR: `Grêle`,
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagHail})} ,
    hitEffect: function(target) { changeWeather("hail") },
}

move.icyWind = {
    rename: `Icy Wind`,
    renameFR: `Vent Glace`,
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 55,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
    affectedBy: [ability.windRider.id]
}

move.avalanche = {
    rename: `Avalanche`,
    renameFR: `Avalanche`,
    moveset: [`ice`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 60,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.frostBreath = {
    rename: `Frost Breath`,
    renameFR: `Souffle Glacé`,
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkdown1') },
}

move.auroraBeam = {
    rename: `Aurora Beam`,
    renameFR: `Onde Boréale`,
    moveset: [`ice`, `water`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'atkdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.iceFang = { 
    rename: `Ice Fang`,
    renameFR: `Crocs Givre`,
    moveset: [`ice`, `dark`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagFreeze})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
    affectedBy: [ability.strongJaw.id]
}

move.icePunch = { 
    rename: `Ice Punch`,
    renameFR: `Poing Glace`,
    moveset: [`ice`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 75,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagFreeze})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
    affectedBy: [ability.ironFist.id]
}

move.iceBeam = {
    rename: `Ice Beam`,
    renameFR: `Laser Glace`,
    moveset: [`ice`, `water`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagFreeze})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.blizzard = {
    rename: `Blizzard`,
    renameFR: `Blizzard`,
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 100,
    affectedBy: [ability.windRider.id]
}

move.icicleCrash = {
    rename: `Icicle Crash`,
    renameFR: `Chute Glace`,
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "ice",
    power: 85
}


move.safeguard = {
    rename: `Safeguard`,
    renameFR: `Rune Protect`,
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagSafeguard})} ,
    hitEffect: function(target) { changeWeather("safeguard") },
    notUsableByEnemy: true,
}

move.freezyFrost = {  //new
    rename: `Freezy Frost`,
    renameFR: `Évo-Congélo`,
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//bug

move.twineedle = {
    rename: `Twineedle`,
    renameFR: `Double Dard`,
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 25,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
}

move.furyCutter = { 
    rename: `Fury Cutter`,
    renameFR: `Taillade`,
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 20,
    info: function() {return t_ui('moveInfo_stack1_2x5')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
    affectedBy: [ability.sharpness.id]
}

move.infestation = {  
    rename: `Infestation`,
    renameFR: `Harcèlement`,
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.pinMissile = {  
    rename: `Pin Missile`,
    renameFR: `Dard-Nuée`,
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.stickyWeb = {
    rename: `Sticky Web`,
    renameFR: `Toile Gluante`,
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.pounce = {
    rename: `Pounce`,
    renameFR: `Bond`,
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.struggleBug = {
    rename: `Struggle Bug`,
    renameFR: `Survinsecte`,
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return t_ui('moveInfo_decreaseSpaAndPowerRiseDef')},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.bugBite = {
    rename: `Bug Bite`,
    renameFR: `Piqûre`,
    moveset: [`bug`, `dark`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 60,
    affectedBy: [ability.strongJaw.id]
}

move.bugBuzz = {
    rename: `Bug Buzz`,
    renameFR: `Bourdon`,
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.cacophony.id]
}

move.signalBeam = {
    rename: `Signal Beam`,
    renameFR: `Rayon Signal`,
    moveset: [`bug`, `electric`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
}

move.silverWind = {
    rename: `Silver Wind`,
    renameFR: `Vent Argenté`,
    moveset: [`bug`, `flying`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 55,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.windRider.id]
}

move.xScissor = {
    rename: `X-Scissor`,
    renameFR: `Plaie Croix`,
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 80,
    affectedBy: [ability.sharpness.id]
}

move.firstImpression = {  
    rename: `First Impression`,
    renameFR: `Escarmouche`,
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.stringShot = {
    rename: `String Shot`,
    renameFR: `Sécrétion`,
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 75})},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.uTurn = {
    rename: `U-turn`,
    renameFR: `Demi-Tour`,
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 70,
    info: function() {return t_ui('moveInfo_switchNext')},
    hitEffect: function(target) { if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.weirdRoom = {
    rename: `Weird Room`,
    renameFR: `Salle Bizarre`,
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagWeirdRoom})} ,
    hitEffect: function(target) { changeWeather("weirdRoom") },
}

move.savageStinger = {  //new
    rename: `Savage Stinger`,
    renameFR: `Dard Sauvage`,
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.quiverDance = {
    rename: `Quiver Dance`,
    renameFR: `Papillodanse`,
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return t_ui('moveInfo_increaseStatSpeedSlow', {stat: t_ui('statSpecialAttack'), percent: 50, mult: '1.4'})},
    hitEffect: function(target) { moveBuff(target,'speup1',"self"); moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}


//water
move.waterGun = {
    rename: `Water Gun`,
    renameFR: `Pistolet à O`,
    moveset: [`water`],
    split: "special",
    rarity: 1,
    type: "water",
    power: 40
}

move.aquaJet = {
    rename: `Aqua Jet`,
    renameFR: `Aqua-Jet`,
    moveset: [`water`],
    split: "physical",
    rarity: 1,
    type: "water",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.whirlpool = {  
    rename: `Whirlpool`,
    renameFR: `Siphon`,
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.waterPulse = {
    rename: `Water Pulse`,
    renameFR: `Vibraqua`,
    moveset: [`water`, `psychic`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
    affectedBy: [ability.megaLauncher.id]
}

move.chillingWater = {
    rename: `Chilling Water`,
    renameFR: `Écosurf`,
    moveset: [`water`, `ice`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 50,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}


move.bubbleBeam = {
    rename: `Bubble Beam`,
    renameFR: `Bulles d’O`,
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statSpeed'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
}

move.foamShot = { 
    rename: `Foam Shot`,
    renameFR: `Tir d'Écume`,
    moveset: [`ice`],
    split: "physical",
    rarity: 2,
    type: "water",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.rainDance = { 
    rename: `Rain Dance`,
    renameFR: `Danse Pluie`,
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagRainy})} ,
    hitEffect: function(target) { changeWeather("rainy") },
    affectedBy: [ability.dancer.id]
}

move.waterfall = {
    rename: `Waterfall`,
    renameFR: `Cascade`,
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80
}

move.scald = {
    rename: `Scald`,
    renameFR: `Ébullition`,
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 75,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.liquidation = {
    rename: `Liquidation`,
    renameFR: `Aqua-Brèche`,
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 30, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defup1',"self") },
}

move.aquaTail = {
    rename: `Aqua Tail`,
    renameFR: `Hydro-Queue`,
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 90
}

move.surf = {
    rename: `Surf`,
    renameFR: `Surf`,
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 90
}

move.muddyWater = {  
    rename: `Muddy Water`,
    renameFR: `Ocroupi`,
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 100,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statSpeed'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
}

move.hydroPump = {
    rename: `Hydro Pump`,
    renameFR: `Hydrocanon`,
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}


move.waveCrash = {  //new
    rename: `Wave Crash`,
    renameFR: `Aquatacle`,
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//grass
move.leafage = {
    rename: `Leafage`,
    renameFR: `Feuillage`,
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 40
}

move.vineWhip = {
    rename: `Vine Whip`,
    renameFR: `Fouet Lianes`,
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 45
}

move.magicalLeaf = {
    rename: `Magical Leaf`,
    renameFR: `Feuille Magik`,
    moveset: [`grass`, `psychic`, `fairy`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 50,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkdown1') },
}

move.bulletSeed = {  
    rename: `Bullet Seed`,
    renameFR: `Balle Graine`,
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.razorLeaf = {
    rename: `Razor Leaf`,
    renameFR: `Tranch’Herbe`,
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 65,
    affectedBy: [ability.sharpness.id],
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.stunSpore = {
    rename: `Stun Spore`,
    renameFR: `Para-Spore`,
    moveset: [`grass`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagParalysis})},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}


move.ragePowder = {
    rename: `Rage Powder`,
    renameFR: `Poudre Fureur`,
    moveset: [`grass`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_inflictAndBoostEnemySpa', {tag: tagConfused})},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'satkup2') },
}

move.leafBlade = {
    rename: `Leaf Blade`,
    renameFR: `Lame Feuille`,
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 80,
    affectedBy: [ability.sharpness.id]
}

move.energyBall = {
    rename: `Energy Ball`,
    renameFR: `Éco-Sphère`,
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.solarBeam = {
    rename: `Solar Beam`,
    renameFR: `Lance-Soleil`,
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.solarBlade = { 
    rename: `Solar Blade`,
    renameFR: `Lame Solaire`,
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 125,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})},
}

move.seedBomb = {
    rename: `Seed Bomb`,
    renameFR: `Canon Graine`,
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'atkdown1') },
}

move.cottonSpore = {
    rename: `Cotton Spore`,
    renameFR: `Spore Coton`,
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 75})},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.spore = {
    rename: `Spore`,
    renameFR: `Spore`,
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 50, tag: tagSleep})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sleep') },
}

move.grassyTerrain = { 
    rename: `Grassy Terrain`,
    renameFR: `Champ Herbu`,
    moveset: [`grass`,`bug`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagGrassyTerrain})} ,
    hitEffect: function(target) { changeWeather("grassyTerrain") },
}

move.leafStorm = {  
    rename: `Leaf Storm`,
    renameFR: `Tempête Verte`,
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
    affectedBy: [ability.windRider.id]
}


//fighting
move.rockSmash = {
    rename: `Rock Smash`,
    renameFR: `Éclate-Roc`,
    moveset: [`fighting`,`steel`,`rock`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    affectedBy: [ability.metalhead.id]
}

move.vacuumWave = {
    rename: `Vacuum Wave`,
    renameFR: `Onde Vide`,
    moveset: [`fighting`],
    split: "special",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.machPunk = {
    rename: `Mach Punch`,
    renameFR: `Mach Punch`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})},
    affectedBy: [ability.ironFist.id]
}

move.armThrust = {  
    rename: `Arm Thrust`,
    renameFR: `Cogne`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.powerupPunch = {
    rename: `Powerup Punch`,
    renameFR: `Poing Boost`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 50,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 50, stat: t_ui('statAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'atkup1','self') },
    affectedBy: [ability.ironFist.id]
}


move.stormThrow = {
    rename: `Storm Throw`,
    renameFR: `Yama Arashi`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return t_ui('moveInfo_powerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.lowSweep = {
    rename: `Low Sweep`,
    renameFR: `Balayette`,
    moveset: [`fighting`, `normal`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.forcePalm = {
    rename: `Force Palm`,
    renameFR: `Forte-Paume`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 75,
    affectedBy: [ability.ironFist.id]
}

move.brickBreak = {
    rename: `Brick Break`,
    renameFR: `Casse-Brique`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.skyUppercut = {
    rename: `Sky Uppercut`,
    renameFR: `Stratopercut`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 85,
    info: function() {return t_ui('moveInfo_powerDoubleType', {type: format('flying')})},
    powerMod : function() { if (pkmn[saved.currentPkmn].type.includes("flying")) { return 2} else return 1 },
}

move.hammerArm = {
    rename: `Hammer Arm`,
    renameFR: `Marto-Poing`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.auraSphere = {
    rename: `Aura Sphere`,
    renameFR: `Aurasphère`,
    moveset: [`fighting`,`ghost`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 80,
    affectedBy: [ability.megaLauncher.id]
}

move.bulkUp = {
    rename: `Bulk Up`,
    renameFR: `Gonflette`,
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Attack and Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
    restricted: true,
}

move.crossChop = {
    rename: `Cross Chop`,
    renameFR: `Coup Croix`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 90
}

move.closeCombat = {  
    rename: `Close Combat`,
    renameFR: `Close Combat`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 120,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: 'Defense and Special Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'sdefdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.superpower = {  
    rename: `Superpower`,
    renameFR: `Surpuissance`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 150,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: 'Defense and Attack', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.focusBlast = {
    rename: `Focus Blast`,
    renameFR: `Exploforce`,
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 100*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})},
    affectedBy: [ability.megaLauncher.id]
}


move.crossRoom = {
    rename: `Cross Room`,
    renameFR: `Salle Croisée`,
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagCrossRoom})} ,
    hitEffect: function(target) { changeWeather("crossRoom") },
}


//psychic
move.confusion = {
    rename: `Confusion`,
    renameFR: `Choc Mental`,
    moveset: [`psychic`,`ghost`],
    split: "special",
    rarity: 1,
    type: "psychic",
    power: 35,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.psybeam = {
    rename: `Psybeam`,
    renameFR: `Rafale Psy`,
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
}

move.futureSight = {
    rename: `Future Sight`,
    renameFR: `Prescience`,
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 120,
    timer: defaultPlayerMoveTimer*2,
    info: function() {return t_ui('moveInfo_slower', {mult: '2'})} ,
}

move.psychoCut = {
    rename: `Psycho Cut`,
    renameFR: `Coupe Psycho`,
    moveset: [`psychic`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 75,
    affectedBy: [ability.sharpness.id]
}

move.psychicFangs = {  
    rename: `Psychic Fangs`,
    renameFR: `Psycho-Croc`,
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 75,
    affectedBy: [ability.strongJaw.id]
}

move.zenHeadbut = {  
    rename: `zenHeadbutt`,
    renameFR: `Psykoud'Boul`,
    moveset: [`fighting`, `psychic`],
    split: "physical",
    rarity: 3,
    type: "psychic",
    power: 90,
    affectedBy: [ability.metalhead.id]
}

move.twinBeam = {  
    rename: `Twin Beam`,
    renameFR: `Double Rayon`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 40,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
}

move.psychic = {
    rename: `Psychic`,
    renameFR: `Psyko`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 90,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.extrasensory = {  
    rename: `Extrasensory`,
    renameFR: `Extrasenseur`,
    moveset: [`ghost`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 100
}

move.amnesia = {
    rename: `Amnesia`,
    renameFR: `Amnésie`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpecialDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'sdefup2',"self")},
}

move.barrier = {
    rename: `Barrier`,
    renameFR: `Bouclier`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'defup2',"self")},
}

move.agility = {   
    rename: `Agility`,
    renameFR: `Hâte`,
    moveset: [`flying`, `bug`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpeed'), percent: 75})},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
    affectedBy: [ability.dancer.id],
    restricted: true,
}

move.calmMind = {
    rename: `Calm Mind`,
    renameFR: `Plénitude`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Special Defense and Special Attack', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self"); moveBuff(target,'satkup1',"self") },
    restricted: true,
}


move.psychoBoost = {  //new
    rename: `Psycho Boost`,
    renameFR: `Psycho-Boost`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


/*
move.reflect = {
    rename: `Reflect`,
    renameFR: `Protection`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagReflect})} ,
    hitEffect: function(target) { changeWeather("reflect") },
}*/


//rock
move.rockThrow = {
    rename: `Rock Throw`,
    renameFR: `Jet-Pierres`,
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 50
}

move.accelerock = {
    rename: `Accelerock`,
    renameFR: `Vif Roc`,
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.rockBlast = {  
    rename: `Rock Blast`,
    renameFR: `Boule Roc`,
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
    affectedBy: [ability.megaLauncher.id]
}

move.rollout = { 
    rename: `Rollout`,
    renameFR: `Roulade`,
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 55,
    info: function() {return t_ui('moveInfo_stack1_2x5')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
}

move.ancientPower = {
    rename: `Ancient Power`,
    renameFR: `Pouvoir Antique`,
    moveset: [`rock`, "psychic"],
    split: "special",
    rarity: 2,
    type: "rock",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceIncreaseAllStats', {percent: 10, value: 50})},
    hitEffect: function(target) { if (rng(0.10)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
}

move.smackDown = {
    rename: `Smack Down`,
    renameFR: `Anti-Air`,
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 50,
    info: function() {return t_ui('moveInfo_powerDoubleType', {type: format('flying')})},
    powerMod : function() { if (pkmn[saved.currentPkmn].type.includes("flying")) { return 2} else return 1 },
}

move.gemstoneCrush = { 
    rename: `Gemstone Crush`,
    renameFR: `Broyage de Gemmes`,
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "rock",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.rockTomb = {
    rename: `Rock Tomb`,
    renameFR: `Tomberoche`,
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 60,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}


move.rockSlide = {
    rename: `Rock Slide`,
    renameFR: `Éboulement`,
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 75,
    info: function() {return t_ui('moveInfo_powerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.powerGem = {
    rename: `Power Gem`,
    renameFR: `Rayon Gemme`,
    moveset: [`rock`, `fairy`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 85
}

move.stoneEdge = {
    rename: `Stone Edge`,
    renameFR: `Lame de Roc`,
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 100
}

move.meteorBeam = {  
    rename: `Meteor Beam`,
    renameFR: `Laser Météore`,
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.rockPolish = {
    rename: `Rock Polish`,
    renameFR: `Poliroche`,
    moveset: [`rock`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpeed'), percent: 75})},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
    restricted: true,
}

move.wrathOfTheLand = {  //new
    rename: `Wrath Of The Land`,
    renameFR: `Colère de la Terre`,
    moveset: [`rock`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//ghost
move.lick = {
    rename: `Lick`,
    renameFR: `Léchouille`,
    moveset: [`ghost`, `normal`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 30,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.shadowSneak = {
    rename: `Shadow Sneak`,
    renameFR: `Ombre Portée`,
    moveset: [`ghost`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.confuseRay = {
    rename: `Confuse Ray`,
    renameFR: `Onde Folie`,
    moveset: [`ghost`, `psychic`, `all`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagConfused})},
    hitEffect: function(target) { moveBuff(target,'confused') },
}


move.willOWisp = {  
    rename: `Will Owisp`,
    renameFR: `Feu Follet`,
    moveset: [`fire`, `ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagBurn})},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.fog = { 
    rename: `Fog`,
    renameFR: `Brouillard`,
    moveset: [`dark`,`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagFoggy})} ,
    hitEffect: function(target) { changeWeather("foggy") },
}

move.ominousWind = {
    rename: `Ominous Wind`,
    renameFR: `Vent Mauvais`,
    moveset: [`ghost`, "flying"],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceIncreaseAllStats', {percent: 10, value: 50})},
    hitEffect: function(target) { if (rng(0.10)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
    affectedBy: [ability.windRider.id]
}

move.hex = {  
    rename: `Hex`,
    renameFR: `Châtiment`,
    moveset: [`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 65,
    info: function() {return t_ui('moveInfo_powerDoubleStatus')},
    powerMod : function() { if (wildBuffs.paralysis>0 || wildBuffs.burn>0 || wildBuffs.freeze>0  || wildBuffs.confused>0  || wildBuffs.poisoned>0  ) { return 2} else return 1 },
}

move.shadowClaw = {  
    rename: `Shadow Claw`,
    renameFR: `Griffe Ombre`,
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 60,
    affectedBy: [ability.toughClaws.id]
}

move.shadowPunch = {
    rename: `Shadow Punch`,
    renameFR: `Poing Ombre`,
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 75,
    affectedBy: [ability.ironFist.id]
}

move.shadowBall = {
    rename: `Shadow Ball`,
    renameFR: `Ball’Ombre`,
    moveset: [`ghost`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ghost",
    power: 80,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.phantomForce = {  
    rename: `Phantom Force`,
    renameFR: `Hantise`,
    moveset: [`ghost`],
    split: "physical",
    rarity: 3,
    type: "ghost",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

//dragon
move.twister = {
    rename: `Twister`,
    renameFR: `Ouragan`,
    moveset: [`dragon`, `flying`],
    split: "special",
    rarity: 1,
    type: "dragon",
    power: 40
}

move.dragonTail = {
    rename: `Dragon Tail`,
    renameFR: `Draco-Queue`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 30, stat: t_ui('statAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'atkup1',"self") },
}

move.dualChop = {  
    rename: `Dual Chop`,
    renameFR: `Double Baffe`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 40,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
}

move.dragonBreath = {
    rename: `Dragon Breath`,
    renameFR: `Draco-Souffle`,
    moveset: [`dragon`],
    split: "special",
    rarity: 2,
    type: "dragon",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.dragonClaw = {
    rename: `Dragon Claw`,
    renameFR: `Draco-Griffe`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 65,
    affectedBy: [ability.toughClaws.id]
}

move.scaleShot = { 
    rename: `Scale Shot`,
    renameFR: `Rafale Écailles`,
    moveset: [`water`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.dragonPulse = {
    rename: `Dragon Pulse`,
    renameFR: `Draco-Choc`,
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 85,
    affectedBy: [ability.megaLauncher.id]
}


move.dragonRush = {
    rename: `Dragon Rush`,
    renameFR: `Draco-Charge`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 90,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slowAndPowerRiseDef')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.outrage = {  
    rename: `Outrage`,
    renameFR: `Colère`,
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_inflictSelf', {tag: tagConfused})},
    hitEffect: function(target) { moveBuff(target,'confused',"self") },
    unaffectedBy: [ability.sheerForce.id],
}

move.dracoMeteor = {  
    rename: `Draco Meteor`,
    renameFR: `Draco-Météore`,
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonDance = {
    rename: `Dragon Dance`,
    renameFR: `Danse Draco`,
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return t_ui('moveInfo_increaseStatSpeedSlow', {stat: t_ui('statAttack'), percent: 50, mult: '1.4'})},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}


//dark
move.pursuit = {
    rename: `Pursuit`,
    renameFR: `Poursuite`,
    moveset: [`dark`],
    split: "physical",
    rarity: 1,
    type: "dark",
    power: 40
}

move.snarl = {
    rename: `Snarl`,
    renameFR: `Aboiement`,
    moveset: [`dark`],
    split: "special",
    rarity: 2,
    type: "dark",
    power: 55,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
    affectedBy: [ability.cacophony.id]
}

move.bite = {
    rename: `Bite`,
    renameFR: `Morsure`,
    moveset: [`dark`, `bug`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 60,
    affectedBy: [ability.strongJaw.id]
}

move.feintAttack = {
    rename: `Feint Attack`,
    renameFR: `Feinte`,
    moveset: [`dark`, `normal`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 40,
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})},
}

move.knockOff = {
    rename: `Knock Off`,
    renameFR: `Sabotage`,
    moveset: [`dark`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 65,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}


move.crunch = {
    rename: `Crunch`,
    renameFR: `Mâchouille`,
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 70,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
    affectedBy: [ability.strongJaw.id]
}

move.darkPulse = {
    rename: `Dark Pulse`,
    renameFR: `Vibrobscur`,
    moveset: [`dark`, `psychic`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 80,
    affectedBy: [ability.megaLauncher.id]
}


move.honeClaws = {
    rename: `Hone Claws`,
    renameFR: `Aiguisage`,
    moveset: [`dark`, `steel`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return t_ui('moveInfo_increaseStatSpeedSlow', {stat: t_ui('statAttack'), percent: 50, mult: '1.4'})},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    restricted: true,
}


move.nightDaze = {  
    rename: `Night Daze`,
    renameFR: `Explonuit`,
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 85,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpeed'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'spedown1') }
}

move.nightSlash = {
    rename: `Night Slash`,
    renameFR: `Tranche-Nuit`,
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 85,
    affectedBy: [ability.sharpness.id]
}

move.fakeTears = {
    rename: `Fake Tears`,
    renameFR: `Croco Larme`,
    moveset: [`dark`, `fairy`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpecialDefense'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
    restricted: true,
}

move.nastyPlot = {
    rename: `Nasty Plot`,
    renameFR: `Machination`,
    moveset: [`dark`,"all"],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpecialAttack'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self");},
    restricted: true,
}

move.memento = {
    rename: `Memento`,
    renameFR: `Souvenir`,
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t_ui('moveInfo_memento')},
    hitEffect: function(target) { if (target=="wild") {
        moveBuff(target,'satkdown2');
        moveBuff(target,'atkdown2');
        pkmn[ team[exploreActiveMember].pkmn.id ].playerHp = 0;
        updateTeamPkmn()
    } },
    unaffectedBy: [ability.sheerForce.id],
}

move.trickRoom = {
    rename: `Trick Room`,
    renameFR: `Distorsion`,
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagTrickRoom})} ,
    hitEffect: function(target) { changeWeather("trickRoom") },
}

move.embargo = { //new
    rename: `Embargo`,
    renameFR: `Embargo`,
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return t_ui('moveInfo_embargo')},
    hitEffect: function(target) { moveBuff(target,'embargo') },
    notUsableByEnemy: true,
}


move.brutalSwing = {  //new
    rename: `Brutal Swing`,
    renameFR: `Centrifugifle`,
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}


//fairy

move.disarmingVoice = {
    rename: `Disarming Voice`,
    renameFR: `Voix Enjôleuse`,
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 40,
    affectedBy: [ability.cacophony.id],
    timer: defaultPlayerMoveTimer/1.2,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.2'})} ,
}

move.drainingKiss = {  
    rename: `Draining Kiss`,
    renameFR: `Vampibaiser`,
    moveset: [`fairy`],
    split: "physical",
    rarity: 2,
    type: "fairy",
    power: 50,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defdown1') }
}

move.fairyWind = {
    rename: `Fairy Wind`,
    renameFR: `Vent Féérique`,
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 60,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 30, stat: t_ui('statSpeed'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
    affectedBy: [ability.windRider.id]
}

move.echoedVoice = { 
    rename: `Echoed Voice`,
    renameFR: `Écho`,
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 50,
    info: function() {return t_ui('moveInfo_stack1_2x5')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
    affectedBy: [ability.cacophony.id]
}

move.alluringVoice = {
    rename: `Alluring Voice`,
    renameFR: `Voix Envoûtante`,
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 65,
    affectedBy: [ability.cacophony.id]
}

move.mirrorShrapnel = {  
    rename: `Mirror Shrapnel`,
    renameFR: `Éclats de Miroir`,
    moveset: [`steel`],
    split: "physical",
    rarity: 2,
    type: "fairy",
    power: 20,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.spiritBreak = {  
    rename: `Spirit Break`,
    renameFR: `Choc Émotionnel`,
    moveset: [`fairy`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 75,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'atkdown1') },
}


move.dazzlingGleam = {
    rename: `Dazzling Gleam`,
    renameFR: `Éclat Magique`,
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 85
}

move.playRough = {
    rename: `Play Rough`,
    renameFR: `Câlinerie`,
    moveset: [`fairy`, `dark`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 90
}

move.auroraPunch = {  
    rename: `Aurora Punch`,
    renameFR: `Poing Aurore`,
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 80,
    affectedBy: [ability.ironFist.id]
}

move.moonblast = {
    rename: `Moonblast`,
    renameFR: `Pouvoir Lunaire`,
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 95,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 10, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'satkdown1') },
    affectedBy: [ability.megaLauncher.id]
}


move.babydollEyes = {
    rename: `Babydoll Eyes`,
    renameFR: `Regard Touchant`,
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.charm = {
    rename: `Charm`,
    renameFR: `Charme`,
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
}

move.sweetKiss = {
    rename: `Sweet Kiss`,
    renameFR: `Doux Baiser`,
    moveset: [`fairy`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagConfused})},
    hitEffect: function(target) { moveBuff(target,'confused') },
}

move.mistyTerrain = { 
    rename: `Misty Terrain`,
    renameFR: `Champ Brumeux`,
    moveset: [`fairy`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagMistyTerrain})} ,
    hitEffect: function(target) { changeWeather("mistyTerrain") },
}


move.lightScreen = {
    rename: `Light Screen`,
    renameFR: `Mur Lumière`,
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagLightScreen})} ,
    hitEffect: function(target) { changeWeather("lightScreen") },
    notUsableByEnemy: true,
}

move.magicalTorque = {  //new
    rename: `Magical Torque`,
    renameFR: `Moteur Magique`,
    moveset: [`fairy`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: demeritBp,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

//unique skills

//tier 4 - learnt by normal pokemon = 120 uncompromised dmg
//tier 5 - learnt by legendary pokemon = 140 uncompromised dmg


move.acupressure = {
    rename: `Acupressure`,
    renameFR: `Acupression`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_raiseTwoRandom')},
    hitEffect: function(target) { 
        const picked = arrayPick(["atkup2","satkup2","defup2","sdefup2","speup2",],2)
        moveBuff(target,picked[0],"self");
        moveBuff(target,picked[1],"self");
    },
}

move.batonPass = {
    rename: `Baton Pass`,
    renameFR: `Relais`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_batonPass')},
    hitEffect: function(target) { 
    for (const member in team){
        for (const i in team[exploreActiveMember].buffs){
            if (team[exploreActiveMember].buffs[i]>0) {
                moveBuff("wild",i,"team")
            }
        } 
    }
    for (const i in team[exploreActiveMember].buffs){
        if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] = 0;
    }
    updateTeamBuffs();

            pkmn[ team[exploreActiveMember].pkmn.id ].playerHp = 0;
        updateTeamPkmn()

},
}

move.bellyDrum = {
    rename: `Belly Drum`,
    renameFR: `Cognobidon`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Attack by 150% but decreases Defense and Special Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1',"self"); moveBuff(target,'sdefdown1',"self"); moveBuff(target,'atkup1',"self"); moveBuff(target,'atkup2',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}

move.boomburst = {
    rename: `Boomburst`,
    renameFR: `Bang Sonique`,
    split: "special",
    type: "normal",
    power: t4Base+15,
    affectedBy: [ability.cacophony.id]
}

move.eggBomb = {
    rename: `Egg Bomb`,
    renameFR: `Bombe Œuf`,
    split: "special",
    type: "normal",
    power: t4Base+30,
}

move.cometPunch = {
    rename: `Comet Punch`,
    renameFR: `Poing Comète`,
    split: "physical",
    type: "flying",
    power: t4Base/3,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
    affectedBy: [ability.ironFist.id]
}

move.payDay = {
    rename: `Pay Day`,
    renameFR: `Jackpot`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_happyHourItems')},
    hitEffect: function(target) { 
        saved.hasPayDayBeenUsed = true
    },
}

move.teatime = {
    rename: `Teatime`,
    renameFR: `Thérémonie`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_happyHourPkmn')},
    hitEffect: function(target) { 
        saved.hasTeatimeBeenUsed = true
    },
}

move.metronome = {
    rename: `Metronome`,
    renameFR: `Métronome`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_metronome')},
}

move.mimic = {
    rename: `Mimic`,
    renameFR: `Copie`,
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_mirrorMove1')},
}

move.meFirst = {
    rename: `Me First`,
    renameFR: `Moi d’Abord`,
    split: "special",
    type: "normal",
    power: 0,
    timer: defaultPlayerMoveTimer/3,
    info: function() {return t_ui('moveInfo_mirrorMove2')} ,
}

move.burnUp = {
    rename: `Burn Up`,
    renameFR: `Flamme Ultime`,
    split: "special",
    type: "fire",
    power: t4Base-60,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagBurn})},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.magmaStorm = {
    rename: `Magma Storm`,
    renameFR: `Vortex Magma`,
    split: "special",
    type: "fire",
    power: t4Base-60,
    info: function() {return t_ui('moveInfo_changeWeather', {tag: tagSunny})},
    hitEffect: function(target) { changeWeather("sunny"); },
    affectedBy: [ability.windRider.id]
}

move.inferno = {
    rename: `Inferno`,
    renameFR: `Feu d’Enfer`,
    split: "special",
    type: "fire",
    power: t4Base+60,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: 'Defense and Special Defense', percent: 100})},
    hitEffect: function(target) { moveBuff(target,'defdown2',"self"); moveBuff(target,'sdefdown2',"self"); },
    unaffectedBy: [ability.sheerForce.id],
}

move.aquaStep = {
    rename: `Aqua Step`,
    renameFR: `Danse Aquatique`,
    split: "physical",
    type: "water",
    power: t4Base-60,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
    affectedBy: [ability.dancer.id]
}

move.hydroCannon = {
    rename: `Hydro Cannon`,
    renameFR: `Hydroblast`,
    split: "special",
    type: "water",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})},
    affectedBy: [ability.megaLauncher.id]
}

move.gigatonHammer = {
    rename: `Gigaton Hammer`,
    renameFR: `Marteau Mastoc`,
    split: "physical",
    type: "steel",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})}
}

move.razorShell = {
    rename: `Razor Shell`,
    renameFR: `Coqui-Lame`,
    split: "physical",
    type: "water",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defdown1') },
    affectedBy: [ability.sharpness.id]
}

move.tripleDive = {  
    rename: `Triple Dive`,
    renameFR: `Triple Plongée`,
    split: "physical",
    type: "water",
    power: (t4Base+30)/3,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 3})},
    multihit: [3,3],
}

move.electroBall = {
    rename: `Electro Ball`,
    renameFR: `Boule Élek`,
    split: "special",
    type: "electric",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer/2,
    info: function() {return t_ui('moveInfo_faster', {mult: '2'})} ,
}

move.charge = {
    rename: `Charge`,
    renameFR: `Chargeur`,
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Special Attack by 100%, Defense by 50% and Special Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup1',"self"), moveBuff(target,'defup1',"self") },
    restricted:true
}

move.ionise = {
    rename: `Ionise`,
    renameFR: `Ionisation`,
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Special Attack by 100% and Special Defense', percent: 100})},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup2',"self") },
    restricted:true
}

move.appleAcid = {
    rename: `Apple Acid`,
    renameFR: `Acide Malique`,
    split: "special",
    type: "grass",
    power: t4Base-50,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.chloroblast = {
    rename: `Chloroblast`,
    renameFR: `Chloroblast`,
    split: "special",
    type: "grass",
    power: t4Base+20,
    affectedBy: [ability.megaLauncher.id]
}

move.frenzyPlant = {
    rename: `Frenzy Plant`,
    renameFR: `Végé-Attaque`,
    split: "special",
    type: "grass",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})} ,
}

move.trailblaze = {
    rename: `Trailblaze`,
    renameFR: `Désherbaffe`,
    split: "physical",
    type: "grass",
    power: t4Base-30,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
}

move.auraWheel = { 
    rename: `Aura Wheel`,
    renameFR: `Roue Libre`,
    split: "physical",
    type: "electric",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
}

move.freezeDry = {
    rename: `Freeze-Dry`,
    renameFR: `Lyophilisation`,
    split: "special",
    type: "ice",
    power: t4Base,
    info: function() {return t_ui('moveInfo_superEffWater')} ,
}

move.snowscape = { 
    rename: `Snowscape`,
    renameFR: `Chute de Neige`,
    split: "special",
    type: "ice",
    power: 0,
    info: function() {return t_ui('moveInfo_weatherAndSpa', {tag: tagHail})} ,
    hitEffect: function(target) { changeWeather("hail"); moveBuff(target,'satkup1',"self") },
}

move.venoshock = {  
    rename: `Venoshock`,
    renameFR: `Choc Venin`,
    split: "special",
    type: "poison",
    power: (t4Base+20)/2,
    info: function() {return t_ui('moveInfo_powerDoubleCond', {condition: '${tagPoisoned}'})},
    powerMod : function() { if (wildBuffs.poisoned>0 ) { return 2} else return 1 },
}

move.toxicThread = {
    rename: `Toxic Thread`,
    renameFR: `Fil Toxique`,
    split: "special",
    type: "poison",
    power: 0,
    info: function() {return t_ui('moveInfo_inflictAndDecreaseEnemy', {tag: tagPoisoned, stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'poisoned'); moveBuff(target,'spedown1') },
}

move.highHorsepower = {
    rename: `High Horsepower`,
    renameFR: `Cavalerie Lourde`,
    split: "physical",
    type: "ground",
    power: t4Base,
}

move.blazeKick = {
    rename: `Blaze Kick`,
    renameFR: `Pied Brûleur`,
    split: "physical",
    type: "fire",
    power: t4Base,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.pyroBall = {
    rename: `Pyro Ball`,
    renameFR: `Ballon Brûlant`,
    split: "physical",
    type: "fire",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer/2,
    info: function() {return t_ui('moveInfo_faster', {mult: '2'})} ,
    affectedBy: [ability.megaLauncher.id]

}

move.braveBird = {
    rename: `Brave Bird`,
    renameFR: `Rapace`,
    split: "physical",
    type: "flying",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.spectralThief = {
    rename: `Spectral Thief`,
    renameFR: `Clepto-Mânes`,
    split: "physical",
    type: "ghost",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_stealEnemyStats')},
    hitEffect: function(target) { 

    for (const buff in wildBuffs){
    if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(buff)) continue
    if (wildBuffs[buff]) moveBuff("wild",buff,"self");
    wildBuffs[buff] = 0
    }


     },

}

move.snipeShot = {
    rename: `Snipe Shot`,
    renameFR: `Tir de Précision`,
    split: "special",
    type: "water",
    power: t4Base+20,
}

move.moongeistBeam = {
    rename: `Moongeist Beam`,
    renameFR: `Rayon Spectral`,
    split: "special",
    type: "ghost",
    power: t4Base,
    info: function() {return t_ui('moveInfo_bypassDef')},
    defenseBypass : true,
}

move.sunsteelStrike = {
    rename: `Sunsteel Strike`,
    renameFR: `Choc Météore`,
    split: "physical",
    type: "steel",
    power: t4Base,
    info: function() {return t_ui('moveInfo_bypassDef')},
    defenseBypass : true,
}

move.rockWrecker = {
    rename: `Rock Wrecker`,
    renameFR: `Roc-Boulet`,
    split: "physical",
    type: "rock",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.aeroblast = {
    rename: `Aeroblast`,
    renameFR: `Aéroblast`,
    split: "special",
    type: "flying",
    power: t4Base,
    affectedBy: [ability.windRider.id]
}

move.sacredFire = {
    rename: `Sacred Fire`,
    renameFR: `Feu Sacré`,
    split: "physical",
    type: "fire",
    power: t4Base,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.crabhammer = {
    rename: `Crabhammer`,
    renameFR: `Pince-Masse`,
    split: "physical",
    type: "water",
    power: (t4Base+10)*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
    affectedBy: [ability.toughClaws.id]
}

move.iceHammer = {
    rename: `Ice Hammer`,
    renameFR: `Marteau de Glace`,
    split: "physical",
    type: "ice",
    power: demeritBp+30,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonDarts = {  
    rename: `Dragon Darts`,
    renameFR: `Draco-Flèches`,
    split: "physical",
    type: "dragon",
    power: 50,
    info: function() {return t_ui('moveInfo_hitsCount', {count: 2})},
    multihit: [2,2],
    affectedBy: [ability.megaLauncher.id]
}

move.hiJumpKick = {
    rename: `Hi Jump Kick`,
    renameFR: `Pied Voltige`,
    split: "physical",
    type: "fighting",
    power: t4Base+20,
}

move.falseSurrender = { 
    rename: `False Surrender`,
    renameFR: `Fourbette`,
    split: "physical",
    type: "dark",
    power: t4Base,
}

move.headCharge = {
    rename: `Head Charge`,
    renameFR: `Peignée`,
    split: "physical",
    type: "normal",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.megahorn = {
    rename: `Megahorn`,
    renameFR: `Mégacorne`,
    split: "physical",
    type: "bug",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.needleArm = {
    rename: `Needle Arm`,
    renameFR: `Poing Dard`,
    split: "physical",
    type: "grass",
    power: demeritBp+60,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'atkdown2',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.anchorShot = { 
    rename: `Anchor Shot`,
    renameFR: `Ancrage`,
    split: "physical",
    type: "steel",
    power: t4Base,
}

move.darkestLariat = { 
    rename: `Darkest Lariat`,
    renameFR: `Dark Lariat`,
    split: "physical",
    type: "dark",
    power: t4Base,
}

move.dragonEnergy = {
    rename: `Dragon Energy`,
    renameFR: `Draco-Énergie`,
    split: "special",
    type: "dragon",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})} ,
}

move.thunderCage = {
    rename: `Thunder Cage`,
    renameFR: `Voltageôle`,
    split: "special",
    type: "electric",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer/2,
    info: function() {return t_ui('moveInfo_faster', {mult: '2'})} ,
}


move.ruination = {
    rename: `Ruination`,
    renameFR: `Cataclysme`,
    split: "physical",
    type: "dark",
    power: t4Base,
    info: function() {return t_ui('moveInfo_psyshockLike')},
    castEffect: function(target) {
    if (pkmn[ team[exploreActiveMember].pkmn.id ].bst.atk>pkmn[ team[exploreActiveMember].pkmn.id ].bst.satk){
        this.split = "physical"
    } else this.split = "special"
    },
}

move.mindBlown = {
    rename: `Mind Blown`,
    renameFR: `Caboche-Kaboum`,
    split: "special",
    type: "fire",
    power: t4Base,
}

move.sparklingAria = {
    rename: `Sparkling Aria`,
    renameFR: `Aria de l’Écume`,
    split: "special",
    type: "water",
    power: t4Base,
    info: function() {return t_ui('moveInfo_healTeamTag', {tag: tagBurn})},
    hitEffect: function(target) { 
        for (const slot in team) {
            team[slot].buffs.burn = 0
        }
     },
    affectedBy: [ability.cacophony.id]
}

move.floralHealing = {
    rename: `Floral Healing`,
    renameFR: `Soin Floral`,
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_healTeamAll')},
    hitEffect: function(target) { 
        for (const slot in team) {
            team[slot].buffs.burn = 0
            team[slot].buffs.freeze = 0
            team[slot].buffs.paralysis = 0
            team[slot].buffs.poisoned = 0
            team[slot].buffs.sleep = 0
            team[slot].buffs.confused = 0
        }
     },
}

move.revelationDance = {
    rename: `Revelation Dance`,
    renameFR: `Danse Éveil`,
    split: "special",
    type: "normal",
    power: 100,
    info: function() {return t_ui('moveInfo_typeByUser')},
    castEffect: function(target) {
        this.type = pkmn[ team[exploreActiveMember].pkmn.id ].type[0]
        
    },
    affectedBy: [ability.dancer.id]
}

move.weatherBall = { //añade forecast ability guarro
    rename: `Weather Ball`,
    renameFR: `Ball’Météo`,
    split: "special",
    type: "normal",
    power: (t4Base+30)/2,
    info: function() {return t_ui('moveInfo_weatherBall')},
    castEffect: function(target) {
        this.power = (t4Base+30)/2,
        this.type = "normal"
        if (saved.weatherTimer>0){
            this.power = ((t4Base+30)/2)*2
            if (saved.weather=="sunny") this.type = "fire"
            if (saved.weather=="rainy") this.type = "water"
            if (saved.weather=="sandstorm") this.type = "ground"
            if (saved.weather=="hail") this.type = "ice"
            if (saved.weather=="foggy") this.type = "ghost"
            if (saved.weather=="electricTerrain") this.type = "electric"
            if (saved.weather=="mistyTerrain") this.type = "psychic"
            if (saved.weather=="grassyTerrain") this.type = "grass"
        }
    },
}


move.poisonTail = {
    rename: `Poison Tail`,
    renameFR: `Queue-Poison`,
    split: "physical",
    type: "poison",
    power: t4Base+20,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 20, tag: tagPoisoned})},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'poisoned') },
}


move.heatCrash = {
    rename: `Heat Crash`,
    renameFR: `Tacle Feu`,
    split: "physical",
    type: "fire",
    power: demeritBp+30,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.chatter = {
    rename: `Chatter`,
    renameFR: `Babil`,
    split: "special",
    type: "flying",
    power: t4Base+30,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 20, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'confused') },
    affectedBy: [ability.cacophony.id]
}

move.voltTackle = {
    rename: `Volt Tackle`,
    renameFR: `Électacle`,
    split: "physical",
    type: "electric",
    power: t4Base,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.zingZap = {
    rename: `Zing Zap`,
    renameFR: `Électrikipik`,
    split: "physical",
    type: "electric",
    power: t4Base+20,
    affectedBy: [ability.strongJaw.id]
}

move.lovelyKiss = {
    rename: `Lovely Kiss`,
    renameFR: `Grobisou`,
    split: "physical",
    type: "fairy",
    power: t4Base+30,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagConfused})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.crushGrip = {
    rename: `Crush Grip`,
    renameFR: `Presse`,
    split: "physical",
    type: "normal",
    power: t4Base+20
}

move.lightOfRuin = {
    rename: `Light of Ruin`,
    renameFR: `Lumière du Néant`,
    split: "special",
    type: "fairy",
    power: 300,
    timer: defaultPlayerMoveTimer*2,
    info: function() {return t_ui('moveInfo_slower', {mult: '2'})} ,
}

move.spacialRend = {
    rename: `Spacial Rend`,
    renameFR: `Spatio-Rift`,
    split: "special",
    type: "dragon",
    power: t4Base,
    affectedBy: [ability.sharpness.id]
}

move.fishiousRend = { 
    rename: `Fishious Rend`,
    renameFR: `Branchicrok`,
    split: "physical",
    type: "water",
    power: 100,
    affectedBy: [ability.strongJaw.id]
}

move.armorCannon = { 
    rename: `Armor Cannon`,
    renameFR: `Canon Blindé`,
    split: "special",
    type: "fire",
    power: t4Base-10,
    affectedBy: [ability.megaLauncher.id]
}

move.bitterBlade = { 
    rename: `Bitter Blade`,
    renameFR: `Lame en Peine`,
    split: "physical",
    type: "fire",
    power: t4Base-10,
    affectedBy: [ability.sharpness.id]
}

move.brutalClaw = { 
    rename: `Brutal Claw`,
    renameFR: `Griffe Brutale`,
    split: "physical",
    type: "fire",
    power: t4Base-40,
    affectedBy: [ability.toughClaws.id]
}

move.noRetreat = { 
    rename: `No Retreat`,
    renameFR: `Ultime Bastion`,
    split: "special",
    type: "fighting",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseAllStats', {percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self"); },
    restricted: true,
}

move.storedPower = { 
    rename: `Stored Power`,
    renameFR: `Force Ajoutée`,
    split: "special",
    type: "psychic",
    power: 60,
    info: function() {return t_ui('moveInfo_powerPerStatUp')},
    castEffect: function(target) {
        let power = 60
        if (team[exploreActiveMember].buffs?.satkup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.satkup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.atkup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.atkup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.speup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.speup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.defup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.defup2 > 0) power += 30
        if (team[exploreActiveMember].buffs?.sdefup1 > 0) power += 30
        if (team[exploreActiveMember].buffs?.sdefup2 > 0) power += 30
        this.power = power
    },
}

move.chillyReception = { 
    rename: `Chilly Reception`,
    renameFR: `Neigeux de Mots`,
    split: "special",
    type: "ice",
    power: 0,
    info: function() {return t_ui('moveInfo_weatherAndSwitch', {tag: tagHail})} ,
    hitEffect: function(target) { changeWeather("hail"); if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.camouflage = { 
    rename: `Camouflage`,
    renameFR: `Camouflage`,
    split: "special",
    type: "bug",
    power: 0,
    info: function() {return t_ui('moveInfo_weatherTypeSpeed')},
    hitEffect: function(target) {
        moveBuff(target,'speup2',"self");
        if (saved.weatherTimer>0){
            if (saved.weather=="sunny") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["fire"]
            if (saved.weather=="rainy") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["water"]
            if (saved.weather=="sandstorm") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["ground"]
            if (saved.weather=="hail") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["ice"]
            if (saved.weather=="foggy") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["ghost"]
            if (saved.weather=="electricTerrain") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["electric"]
            if (saved.weather=="mistyTerrain") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["psychic"]
            if (saved.weather=="grassyTerrain") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["grass"]
            if (saved.weather=="trickRoom") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["dark"]
            if (saved.weather=="weirdRoom") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["bug"]
            if (saved.weather=="crossRoom") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["fighting"]
            if (saved.weather=="safeguard") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["normal"]
            if (saved.weather=="lightScreen") pkmn[ team[exploreActiveMember].pkmn.id ].type = ["fairy"]
        }
     },
     restricted: true,
}


move.tailGlow = { 
    rename: `Tail Glow`,
    renameFR: `Lumi-Queue`,
    split: "special",
    type: "bug",
    power: 0,
    info: function() {return t_ui('moveInfo_spa150slow')},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self"); moveBuff(target,'satkup2',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
    timer: defaultPlayerMoveTimer*1.5,
}

move.luminaCrash = { 
    rename: `Lumina Crash`,
    renameFR: `Lumino-Impact`,
    split: "special",
    type: "psychic",
    power: t4Base,
    info: function() {return t_ui('moveInfo_powerRiseSpeed')},
    powerMod : function() { if (team[exploreActiveMember].buffs?.speup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.speup1 > 0) {return 1.2} else return 1 },
}


move.flyingPress = { 
    rename: `Flying Press`,
    renameFR: `Flying Press`,
    split: "physical",
    type: "fighting",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.mountainGale = { 
    rename: `Mountain Gale`,
    renameFR: `Bise Glaciaire`,
    split: "physical",
    type: "ice",
    power: demeritBp+50,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.jetPunch = { 
    rename: `Jet Punch`,
    renameFR: `Poing Sonique`,
    split: "physical",
    type: "water",
    power: t4Base/1.5,
    timer: defaultPlayerMoveTimer/1.5,
    info: function() {return t_ui('moveInfo_faster', {mult: '1.5'})},
    unaffectedBy: [ability.ironFist.id],
}


move.roarOfTime = {
    rename: `Roar of Time`,
    renameFR: `Hurle-Temps`,
    split: "special",
    type: "dragon",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})},
    affectedBy: [ability.cacophony.id]
}

move.doomDesire = {
    rename: `Doom Desire`,
    renameFR: `Vœu Destructeur`,
    split: "special",
    type: "steel",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})} ,
}

move.beakBlast = {
    rename: `Beak Blast`,
    renameFR: `Bec-Canon`,
    split: "physical",
    type: "normal",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.5'})} ,
}

move.shadowForce = { 
    rename: `Shadow Force`,
    renameFR: `Revenant`,
    split: "physical",
    type: "ghost",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_noTypeImmunity')},
}

move.blueFlare = {
    rename: `Blue Flare`,
    renameFR: `Flamme Bleue`,
    split: "special",
    type: "fire",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.boltStrike = {
    rename: `Bolt Strike`,
    renameFR: `Charge Foudre`,
    split: "special",
    type: "electric",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 30, tag: tagParalysis})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.glaciate = {
    rename: `Glaciate`,
    renameFR: `Ère Glaciaire`,
    split: "special",
    type: "ice",
    power: t4Base-30,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 20, tag: tagFreeze})},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'freeze') },
}

move.howl = {
    rename: `Howl`,
    renameFR: `Grondement`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStatTeam', {stat: t_ui('statAttack')})},
    hitEffect: function(target) { moveBuff(target,'atkup2',"team")},
    affectedBy: [ability.cacophony.id],
    restricted : true,
}

move.lunarDance = {
    rename: `Lunar Dance`,
    renameFR: `Danse Lune`,
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStatTeam', {stat: t_ui('statSpecialAttack')})},
    hitEffect: function(target) { moveBuff(target,'satkup2',"team")},
    affectedBy: [ability.dancer.id],
    restricted : true,
}

move.aromaticMist = {
    rename: `Aromatic Mist`,
    renameFR: `Brume Capiteuse`,
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStatTeam', {stat: t_ui('statSpecialDefense')})},
    hitEffect: function(target) { moveBuff(target,'sdefup2',"team")},
}

move.fairyLock = { 
    rename: `Fairy Lock`,
    renameFR: `Verrou Enchanté`,
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('fairy')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("fairy")) return; pkmn[saved.currentPkmn].temporalType = [`fairy`] },
}

move.electrify = {
    rename: `Electrify`,
    renameFR: `Électrisation`,
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('electric')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("electric")) return; pkmn[saved.currentPkmn].temporalType = [`electric`] },
}

move.forestCurse = {
    rename: `Forest Curse`,
    renameFR: `Maléfice Sylvain`,
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('grass')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("grass")) return; pkmn[saved.currentPkmn].temporalType = [`grass`] },
}

move.trickOrTreat = {
    rename: `Trick-or-Treat`,
    renameFR: `Halloween`,
    split: "special",
    type: "ghost",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('ghost')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("ghost")) return; pkmn[saved.currentPkmn].temporalType = [`ghost`] },
}

move.soak = {
    rename: `Soak`,
    renameFR: `Détrempage`,
    split: "special",
    type: "water",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('water')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("water")) return; pkmn[saved.currentPkmn].temporalType = [`water`] },
}

move.magicPowder = {
    rename: `Magic Powder`,
    renameFR: `Poudre Magique`,
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('psychic')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("psychic")) return; pkmn[saved.currentPkmn].temporalType = [`psychic`] },
}

move.mudSport = {
    rename: `Mud Sport`,
    renameFR: `Lance-Boue`,
    split: "special",
    type: "ground",
    power: 0,
    info: function() {return t_ui('moveInfo_tempType', {type: format('ground')})},
    hitEffect: function(target) { if (pkmn[saved.currentPkmn].type.includes("ground")) return; pkmn[saved.currentPkmn].temporalType = [`ground`] },
}

move.boneRush = {
    rename: `Bone Rush`,
    renameFR: `Charge Os`,
    split: "physical",
    type: "ground",
    power: t4Base/3,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.clamp = {
    rename: `Clamp`,
    renameFR: `Claquoir`,
    split: "physical",
    type: "water",
    power: t4Base/3,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.waterShuriken = {
    rename: `Water Shuriken`,
    renameFR: `Sheauriken`,
    split: "special",
    type: "water",
    power: t4Base/3,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.barbBarrage = {
    rename: `Barb Barrage`,
    renameFR: `Multitoxik`,
    split: "physical",
    type: "poison",
    power: 40,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.barrage = {
    rename: `Barrage`,
    renameFR: `Pilonnage`,
    split: "special",
    type: "grass",
    power: (t4Base+30)/3,
    info: function() {return t_ui('moveInfo_hitsTimes', {min: 2, max: 5})},
    multihit: [2,5],
}

move.mysticalPower = {
    rename: `Mystical Power`,
    renameFR: `Force Mystique`,
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 50, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'satkup1','self') },
}

move.psyshieldBash = {
    rename: `Psyshield Bash`,
    renameFR: `Sprint Bouclier`,
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defup1',"self") },
    affectedBy: [ability.metalhead.id]
}

move.sketch = {
    rename: `Sketch`,
    renameFR: `Gribouille`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_sleepTalk')},
}


move.prismaticLaser = {
    rename: `Prismatic Laser`,
    renameFR: `Laser Prisme`,
    split: "special",
    type: "psychic",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})} ,
}

move.lusterPurge = {
    rename: `Luster Purge`,
    renameFR: `Lumi-Éclat`,
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statSpecialDefense'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}

move.mistBall = {
    rename: `Mist Ball`,
    renameFR: `Ball’Brume`,
    split: "special",
    type: "psychic",
    power: t4Base-10,
    info: function() {return t_ui('moveInfo_chanceDecreaseEnemyStat', {percent: 50, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkdown1') },
}

move.dynamicPunch = {
    rename: `Dynamic Punch`,
    renameFR: `Dynamo-Poing`,
    split: "physical",
    type: "fighting",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagConfused})},
    hitEffect: function(target) { moveBuff(target,'confused') },
    affectedBy: [ability.ironFist.id]
}

move.thunderousKick = {
    rename: `Thunderous Kick`,
    renameFR: `Coup Fulgurant`,
    split: "physical",
    type: "fighting",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.fieryWrath = {
    rename: `Fiery Wrath`,
    renameFR: `Fureur Ardente`,
    split: "special",
    type: "dark",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpecialDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'sdefdown1') },
}

move.freezingGlare = {
    rename: `Freezing Glare`,
    renameFR: `Regard Glaçant`,
    split: "special",
    type: "psychic",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.meteorAssault = { 
    rename: `Meteor Assault`,
    renameFR: `Joute Astrale`,
    split: "physical",
    type: "fighting",
    power: (t4Base+20)*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return t_ui('moveInfo_slower', {mult: '1.2'})},
}

move.cottonGuard = {
    rename: `Cotton Guard`,
    renameFR: `Cotogarde`,
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Defense by 100% and Special Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defup2',"self"); moveBuff(target,'sdefup1',"self")},
}


move.kingsShield = {
    rename: `King’s Shield`,
    renameFR: `Bouclier Royal`,
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Special Defense by 100% and Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defup1',"self"); moveBuff(target,'sdefup2',"self")},
}

move.drumBeating = {
    rename: `Drum Beating`,
    renameFR: `Tambour Battant`,
    split: "physical",
    type: "grass",
    power: t4Base-30,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
    affectedBy: [ability.dancer.id]
}

move.tropKick = {
    rename: `Trop Kick`,
    renameFR: `Botte Sucrette`,
    split: "physical",
    type: "grass",
    power: t4Base,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.fireLash = {
    rename: `noxiousLash`,
    renameFR: `Fouet de Feu`,
    split: "special",
    type: "fire",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagPoisoned})},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.clangingScales = {
    rename: `Clanging Scales`,
    renameFR: `Vibrécaille`,
    split: "special",
    type: "dragon",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
    affectedBy: [ability.cacophony.id]
}

move.shiftGear = {
    rename: `Shift Gear`,
    renameFR: `Chgt Vitesse`,
    split: "special",
    type: "steel", 
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Attack by 50% and Speed', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    restricted: true,
}

move.kinesis = {
    rename: `Kinesis`,
    renameFR: `Télékinésie`,
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: 'Special Attack by 100% and Special Defense', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup1',"self") },
    restricted: true,
}

move.gearUp = { 
    rename: `Gear Up`,
    renameFR: `Engrenage`,
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return t_ui('moveInfo_increaseTwoStatsTeam', {stat1: t_ui('statAttack'), stat2: t_ui('statSpeed'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team"); moveBuff(target,'speup1',"team");},
    restricted: true,
}

move.relicSong = {
    rename: `Relic Song`,
    renameFR: `Chant Antique`,
    split: "special",
    type: "normal",
    power: t4Base-30,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 20, tag: tagSleep})},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'sleep') },
    affectedBy: [ability.cacophony.id]
}

move.zapCannon = {
    rename: `Zap Cannon`,
    renameFR: `Élecanon`,
    split: "special",
    type: "electric",
    power: t4Base-50,
    info: function() {return t_ui('moveInfo_inflicts', {tag: tagParalysis})},
    hitEffect: function(target) { moveBuff(target,'paralysis'); },
    affectedBy: [ability.megaLauncher.id]
}

move.triAttack = {
    rename: `Tri Attack`,
    renameFR: `Triplattaque`,
    split: "special",
    type: "normal",
    power: t4Base+10,
    info: function() {return t_ui('moveInfo_chanceTripleInflict', {tag1: tagBurn, tag2: tagParalysis, tag3: tagFreeze})},
    hitEffect: function(target) { if (rng(0.10)){ if (rng(0.33)) {moveBuff(target,'burn')} else if (rng(0.50)) { moveBuff(target,'paralysis')} else moveBuff(target,'freeze') }},
}

move.judgment = { 
    rename: `Judgment`,
    renameFR: `Jugement`,
    split: "special",
    type: "normal",
    power: t4Base+50
}

move.rageFist = { 
    rename: `Rage Fist`,
    renameFR: `Poing de Colère`,
    split: "physical",
    type: "ghost",
    power: t4Base/2,
    info: function() {return t_ui('moveInfo_stack1_2x5')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;    },
    affectedBy: [ability.ironFist.id]
}

move.iceBall = {
    rename: `Ice Ball`,
    renameFR: `Ball’Glace`,
    split: "physical",
    type: "ice",
    power: (t4Base+30)/3,
    info: function() {return t_ui('moveInfo_stack1_2x5')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++; },
}

move.tripleAxel = { 
    rename: `Triple Axel`,
    renameFR: `Triple Axel`,
    split: "physical",
    type: "ice",
    power: t4Base/2,
    info: function() {return t_ui('moveInfo_stack1_3x3')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.3,this.buildup) },
    hitEffect: function(target) { if (this.buildup<3) this.buildup++;   },
    affectedBy: [ability.sharpness.id]

}

move.attackOrder = { 
    rename: `Attack Order`,
    renameFR: `Appel Attaque`,
    split: "physical",
    type: "bug",
    power: (t4Base+30)/3,
    info: function() {return t_ui('moveInfo_stack1_15x10')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.15,this.buildup) },
    hitEffect: function(target) { if (this.buildup<10) this.buildup++;  },
}

move.populationBomb = { 
    rename: `Population Bomb`,
    renameFR: `Prolifération`,
    split: "physical",
    type: "normal",
    power: (t4Base+30)/3,
    info: function() {return t_ui('moveInfo_stack1_15x10')},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.15,this.buildup) },
    hitEffect: function(target) { if (this.buildup<10) this.buildup++;  },
}

move.nobleRoar = {
    rename: `Noble Roar`,
    renameFR: `Râle Mâle`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: 'Attack by 100% and Special Attack', percent: 100})},
    hitEffect: function(target) { moveBuff(target,'atkdown2'); moveBuff(target,'satkdown2') },
}

move.hyperDrill = { 
    rename: `Hyper Drill`,
    renameFR: `Hyperceuse`,
    split: "physical",
    type: "normal",
    power: t4Base+80
}


//aqui me queo


move.fieryDance = {
    rename: `Fiery Dance`,
    renameFR: `Danse du Feu`,
    split: "special",
    type: "fire",
    power: t4Base-20,
    info: function() {return t_ui('moveInfo_chanceIncreaseStat', {percent: 30, stat: t_ui('statSpecialAttack'), value: 50})},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.dancer.id]
}

move.torchSong = {
    rename: `Torch Song`,
    renameFR: `Chant Flamboyant`,
    split: "special",
    type: "fire",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_increaseStat', {stat: t_ui('statSpecialAttack'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.cacophony.id]
}

move.seedFlare = {
    rename: `Seed Flare`,
    renameFR: `Fulmigraine`,
    split: "special",
    type: "grass",
    power: t4Base-40,
    info: function() {return t_ui('moveInfo_decreaseEnemyStat', {stat: t_ui('statSpecialDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'sdefdown1') },
}


move.vCreate = { 
    rename: `V-create`,
    renameFR: `Coup Victoire`,
    split: "physical",
    type: "fire",
    power: demeritBp+120,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: 'Defense, Special Defense and Speed', percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); moveBuff(target,'spedown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonAscent = { 
    rename: `Dragon Ascent`,
    renameFR: `Draco-Ascension`,
    split: "physical",
    type: "flying",
    power: demeritBp+60,
    info: function() {return t_ui('moveInfo_shellSmash')},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.mysticalFire = {
    rename: `Mystical Fire`,
    renameFR: `Feu Ensorcelé`,
    split: "special",
    type: "fire",
    power: demeritBp+60,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statSpecialAttack'), percent: 100})},
    hitEffect: function(target) { moveBuff(target,'satkdown2',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.headlongRush = {
    rename: `Headlong Rush`,
    renameFR: `Assaut Frontal`,
    split: "physical",
    type: "ground",
    power: demeritBp+30,
    info: function() {return t_ui('moveInfo_decreaseStat', {stat: t_ui('statDefense'), percent: 50})},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`) },
    unaffectedBy: [ability.sheerForce.id],
    affectedBy: [ability.metalhead.id]
}

move.sandsearStorm = {
    rename: `Sandsear Storm`,
    renameFR: `Typhon Pyrosable`,
    split: "special",
    type: "ground",
    power: t4Base,
    info: function() {return t_ui('moveInfo_chanceToInflict', {percent: 10, tag: tagBurn})},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.windRider.id]
}

move.splash = {
    rename: `Splash`,
    renameFR: `Trempette`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_ellipsis')} ,
}

move.conversion = {
    rename: `Conversion`,
    renameFR: `Conversion`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_firstMoveTypeSpeed')},
    hitEffect: function(target) { moveBuff(target,'speup2',"self"); pkmn[ team[exploreActiveMember].pkmn.id ].type = [ move[ pkmn[ team[exploreActiveMember].pkmn.id] .moves.slot1  ].type  ] },
    restricted: true,
}

move.flameBurst = {
    rename: `Flame Burst`,
    renameFR: `Rebondifeu`,
    split: "special",
    type: "fire",
    power: t4Base+30,
    info: function() {return t_ui('moveInfo_inflictTeam', {tag: tagBurn})},
    hitEffect: function(target) { moveBuff(target,'burn',"team") },
}

move.morningSun = { 
    rename: `Morning Sun`,
    renameFR: `Aurore`,
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return t_ui('moveInfo_weatherAndSpa', {tag: tagSunny})} ,
    hitEffect: function(target) { changeWeather("sunny"); moveBuff(target,'satkup1',"self") },
}


const movesAffectedByToughClaws = []
const movesAffectedByIronFist = []
const movesAffectedBySharpness = []
const movesAffectedByStrongJaw = []
const movesAffectedByMegaLauncher = []
const movesAffectedByDancer = []
const movesAffectedByWindRider = []
const movesAffectedByCacophony = []
const movesAffectedByMetalhead = []

for (const i in move){


    //sheer force
    if (move[i].power>0 && move[i].hitEffect && !move[i].unaffectedBy?.includes(ability.sheerForce.id) && move[i].buildup==undefined) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.sheerForce.id)} else move[i].affectedBy = [ability.sheerForce.id] }
    //serene grace/pbond
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('rng(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.sereneGrace.id)} else move[i].affectedBy = [ability.sereneGrace.id] }
    //if (move[i].hitEffect && move[i].hitEffect?.toString().includes('rng(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.parentalBond.id)} else move[i].affectedBy = [ability.parentalBond.id] }
    //technician
    if (move[i].power>0 && move[i].power<=60) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.technician.id)} else move[i].affectedBy = [ability.technician.id] }
    //skill link
    if (move[i].multihit && move[i].multihit[1]>move[i].multihit[0]) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.skillLink.id)} else move[i].affectedBy = [ability.skillLink.id] }
    //reckless/libero
    if (move[i].power>0 && move[i].timer>defaultPlayerMoveTimer) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.reckless.id)} else move[i].affectedBy = [ability.reckless.id] }
    if (move[i].power>0 && move[i].timer<defaultPlayerMoveTimer) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.libero.id)} else move[i].affectedBy = [ability.libero.id] }
    //climaTact
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('changeWeather(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.climaTact.id)} else move[i].affectedBy = [ability.climaTact.id] }
    
        
    if (move[i].affectedBy?.includes(ability.toughClaws.id)) movesAffectedByToughClaws.push(i)
    if (move[i].affectedBy?.includes(ability.ironFist.id)) movesAffectedByIronFist.push(i)
    if (move[i].affectedBy?.includes(ability.sharpness.id)) movesAffectedBySharpness.push(i)
    if (move[i].affectedBy?.includes(ability.strongJaw.id)) movesAffectedByStrongJaw.push(i)
    if (move[i].affectedBy?.includes(ability.megaLauncher.id)) movesAffectedByMegaLauncher.push(i)
    if (move[i].affectedBy?.includes(ability.dancer.id)) movesAffectedByDancer.push(i)
    if (move[i].affectedBy?.includes(ability.windRider.id)) movesAffectedByWindRider.push(i)
    if (move[i].affectedBy?.includes(ability.cacophony.id)) movesAffectedByCacophony.push(i)
    if (move[i].affectedBy?.includes(ability.metalhead.id)) movesAffectedByMetalhead.push(i)


    if (move[i].affectedBy?.includes(ability.sharpness.id)) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.iaido.id); } else move[i].affectedBy = [ability.iaido.id] }


    move[i].id = i
    if (move[i].timer == undefined) move[i].timer = defaultPlayerMoveTimer
}
