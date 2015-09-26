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


/*

  // 1...COMMON
  // 2...COMMON
  // 3...COMMON
  // 4...COMMON
  // 5...COMMON
  // 6...COMMON
  // 7...COMMON
  // 8...COMMON
  // 9...COMMON
    // Common = 50% chance.

  // 10...UNCOMMON
  // 11...UNCOMMON
  // 12...UNCOMMON
  // 13...UNCOMMON
  // 14...UNCOMMON
    // Uncommon = 28% chance.

  // 15...RARE
  // 16...RARE
  // 17...RARE
    // Rare = 17% chance.

  // 18...LEGENDARY
    // Legendary = 5% chance.




*/
  var num = Math.floor(Math.random() * 9)
  function rollMonsterRarity() {

    num = Math.floor(Math.random() * 9)

      if ((num==0) || (num==1)) {
      //show hidden div or document.write (50% probability)
      } else if (num==2) {
      //show hidden div or document.write (25% probability)
      } else {
      //show hidden div or document.write (25% probability)
    }

  }




  // Function to roll final stats for monster using generated class, type, and rarity as arguments
  function rollStatsForMonster(monsterClass, monsterType, monsterRarity) {
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
