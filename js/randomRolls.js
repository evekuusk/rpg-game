// ***** ------ RANDOM ROLLS & GENERATOR FUNCTIONS ------ ***** //

  // *** ---  RARITY --- *** //
    // used in monster rarity, item rarity

    // variables
    var numRarity = Math.floor(Math.random() * 18) + 1
    var rarity

    function rollRarity() {
      // generate number between 1 - 18
      numRarity = Math.floor(Math.random() * 18) + 1
      console.log(numRarity);

      // test rarity against the number rolled
      if (numRarity <= 9) {
        // Common, roll between 1 - 9 = 50% chance.
        console.log("COMMON, roll between 1 - 9 = 50% chance.")
        rarity = "common"

      } else if (numRarity <= 14) {
        // Uncommon, roll between 10 - 14 = 28% chance.
        console.log("UNCOMMON, roll between 10 - 14 = 28% chance.")
        rarity = "uncommon"

      } else if (numRarity <= 17) {
        // Rare, roll between 15 - 17 = 17% chance.
        console.log("RARE, roll between 15 - 17 = 17% chance.")
        rarity = "rare"

      } else {
        // Legendary, roll 18 = 5% chance.
        console.log("LEGENDARY, roll 18 = 5% chance.")
        rarity = "legendary"
      } // end of conditionals
      return rarity
    } // end of function



    // *** ---  MONSTER CLASS & TYPE --- *** //
      // used in monster class

      // class variables
      var numMonsterClass = Math.floor(Math.random() * 18) + 1
      var monsterClass

      // type variables
      var monsterType
      var monsterTypeList = [
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

      var pestMonsters = monsterTypeList[0]
      var creatureMonsters = monsterTypeList[1]
      var demonMonsters = monsterTypeList[2]
      var elderGodMonsters = monsterTypeList[3]


      // roll a class based on percentage probability
      function rollMonsterClass() {
        // generate number between 1 - 18
        numMonsterClass = Math.floor(Math.random() * 18) + 1
        console.log(numMonsterClass);

        // test class against the number rolled
        if (numMonsterClass <= 9) {
          // Pest, roll between 1 - 9 = 50% chance.
          console.log("PEST, roll between 1 - 9 = 50% chance.")
          monsterClass = "pest"

        } else if (numMonsterClass <= 14) {
          // Creature, roll between 10 - 14 = 28% chance.
          console.log("CREATURE, roll between 10 - 14 = 28% chance.")
          monsterClass = "creature"

        } else if (numMonsterClass <= 17) {
          // Demon, roll between 15 - 17 = 17% chance.
          console.log("DEMON, roll between 15 - 17 = 17% chance.")
          monsterClass = "demon"

        } else {
          // Elder god, roll 18 = 5% chance.
          console.log("ELDER GOD, roll 18 = 5% chance.")
          monsterClass = "elder god"
        } // end of conditionals
        return monsterClass
      } // end of function





      function rollMonsterType() {
        // roll and return monsterClass
        rollMonsterClass();
        var randomType

        if (monsterClass == "pest") {
          // PEST CLASS
          var i = Math.floor(Math.random() * pestMonsters.length)
          monsterType = pestMonsters[i]
        } else if (monsterClass == "creature") {
          // CREATURE CLASS
          var i = Math.floor(Math.random() * creatureMonsters.length)
          monsterType = creatureMonsters[i]
        } else if (monsterClass == "demon") {
          // DEMON CLASS
          var i = Math.floor(Math.random() * demonMonsters.length)
          monsterType = demonMonsters[i]
        } else {
          // ELDER GOD CLASS
          var i = Math.floor(Math.random() * elderGodMonsters.length)
          monsterType = elderGodMonsters[i]
        }
        console.log(monsterType.toUpperCase() + ", randomly selected from array of types within the monster class.")
        return monsterType
      }





    // *** ---  BASE STATS --- *** //
      // used in monster stats, human stats, npc stats, hero stats
    // Rolling base stats
    function rollBaseStats() {
      // Strength: random number 5 - 10
      strengthStatBase = Math.floor(Math.random() * 5) + 5

      // Health: random number 10 - 50
      healthStatBase = Math.floor(Math.random() * 50) + 10

      // Stamina: random number 5 - 10
      staminaStatBase = Math.floor(Math.random() * 10) + 5

      // Magic: random number 1 - 3
      magicStatBase = Math.floor(Math.random() * 3) + 1

      // Resilience: random number 5 - 10
      resilienceStatBase = Math.floor(Math.random() * 10) + 5
    }
