// *** --- MONSTERS --- *** //

  // *** --- MONSTER OBJECT PROPERTIES LIST
    // Stats
    var monsterStats = ["strength", "health", "stamina", "magic", "resilience", "rarity"]
    var rarityStat = ["common", "uncommon", "rare", "legendary"]
    var strengthStatBase = Math.floor(Math.random() * 5) + 1 // random number 1 - 5
    var healthStatBase = Math.floor(Math.random() * 50) + 1 // random number 1 - 50
    var staminaStatBase = Math.floor(Math.random() * 10) + 1 // random number 1 - 10
    var magicStatBase = Math.floor(Math.random() * 11) // random number 0 - 10
    var resilienceStatBase = Math.floor(Math.random() * 10) + 1 // random number 1 - 5

    // Temperaments
    var monsterTemperaments = ["peaceful", "defensive", "aggressive", "hostile"]

    // Classes & Types
    var monsterClass = ["pest", "creature", "demon", "elder"]
    var monsterType = [
      pest = [
        "bee", "rat"
      ],
      creature = [
        "bear", "wolf"
      ],
      demon = [
        "ghost", "goblin"
      ],
      elder = [
        "gryphon", "dragon"
      ]
    ]
    var pestMonsters = monsterType[0]
    var creatureMonsters = monsterType[1]
    var demonMonsters = monsterType[2]
    var elderMonsters = monsterType[3]




  // *** --- RANDOM MONSTER GENERATOR SCRIPTS

  function reRollRandomStats() {
    strengthStatBase = Math.floor(Math.random() * 5) + 5 // random number 5 - 10
    healthStatBase = Math.floor(Math.random() * 50) + 10 // random number 10 - 50
    staminaStatBase = Math.floor(Math.random() * 10) + 5 // random number 5 - 10
    magicStatBase = Math.floor(Math.random() * 3) + 1 // random number 1 - 3
    resilienceStatBase = Math.floor(Math.random() * 10) + 5 // random number 5 - 10
    //
    // console.log("Base Strength: " + strengthStatBase + ", " + "Base Health: " + healthStatBase + ", " + "Base Stamina: " + staminaStatBase + ", " + "Base Magic: " + magicStatBase + ", " + "Base Resilience: " + resilienceStatBase + ".");
  }


  function rollStatsForMonster(monsterClass) {
    reRollRandomStats();




    if (monsterClass == "pest") {
      strengthStatClass = strengthStatBase
      healthStatClass = healthStatBase
      staminaStatClass = staminaStatBase - 1
      magicStatClass = magicStatBase + 1
      resilienceStatClass = resilienceStatBase + 1
    }

    if (monsterClass == "creature") {
      strengthStatClass = strengthStatBase + 5
      healthStatClass = healthStatBase + 25
      staminaStatClass = staminaStatBase + 4
      magicStatClass = magicStatBase - 1
      resilienceStatClass = resilienceStatBase + 10
    }


    // update stats
    var strength = strengthStatClass
    var health = healthStatClass
    var stamina = staminaStatClass
    var magic = magicStatClass
    var resilience = resilienceStatClass

    console.log("Strength: " + strength + ", " + "Health: " + health + ", " + "Stamina: " + stamina + ", " + "Magic: " + magic + ", " + "Resilience: " + resilience + ".");

  }





  // *** --- MONSTER OBJECT

  var monster = {
    "type": 0,
    "class": 0,
    "temperament": 0,

    // stats
    "strength": 0,
    "health": 0,
    "stamina": 0,
    "magic": 0,
    "resilience": 0,
    "rarity": 0

  }
