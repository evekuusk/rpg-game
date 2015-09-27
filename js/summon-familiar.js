// ***** ------ SUMMON FAMILIAR ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //

    // RARITY
    var numRarity = Math.floor(Math.random() * 18) + 1
    var rarity

    // CLASS
    var numMonsterClass = Math.floor(Math.random() * 18) + 1
    var monsterClasses = ["pest", "creature", "demon", "elder god"]
    var monsterClass

    // TYPE
    var monsterType
    var monsterTypeList = [
      pest = [
        "bee", "mouse", "snake"
      ],
      creature = [
        "moose", "wolf", "bear"
      ],
      demon = [
        "ghost", "goblin", "succubus"
      ],
      elder = [
        "gryphon", "dragon", "deity"
      ]
    ]

    // monster types
    var pestMonsters = monsterTypeList[0]
    var creatureMonsters = monsterTypeList[1]
    var demonMonsters = monsterTypeList[2]
    var elderGodMonsters = monsterTypeList[3]


    // STATS
    var strengthStatBase
    var healthStatBase
    var staminaStatBase
    var magicStatBase
    var speedStatBase

    // primary stat variables
    var strength
    var health
    var stamina
    var magic
    var speed

    // start health
    var heroStartHealth
    var enemyStartHealth

    // UNDEAD
    var undead = false

    // FAMILIARS
    var heroFamiliar
    var enemyFamiliar
    var description



  // *** ---  RARITY --- *** //

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

    // roll a class based on percentage probability
    function rollMonsterClass() {
      // generate number between 1 - 18
      numMonsterClass = Math.floor(Math.random() * 18) + 1
      console.log(numMonsterClass);
      // test class against the number rolled
      if (numMonsterClass <= 8) {
        // Pest, roll between 1 - 9 = 50% chance.
        console.log("PEST, roll between 1 - 8 = 44% chance.")
        monsterClass = "pest"
      } else if (numMonsterClass <= 14) {
        // Creature, roll between 10 - 14 = 28% chance.
        console.log("CREATURE, roll between 9 - 14 = 33% chance.")
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


    // roll a random monster type within a specific class
    function rollMonsterType() {
      // roll and return monsterClass
      rollMonsterClass();
      var randomType
      // conditionals...
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
      } // end of conditionals
      console.log(monsterType.toUpperCase() + ", randomly selected from array of types within the monster class.");
      return monsterType
    }



  // *** ---  STATS --- *** //

    // check if undead
    function checkUndead() {
      if (magic <= 0) {
        undead = true;
        health = health + 200
        speed = speed - 8
        if (magic <= -1) {
          magic = 0
        }
      }
    }



    // Roll for base stats
    function rollBaseStats() {
      // Strength: random number 5 - 10
      strengthStatBase = Math.floor(Math.random() * 5) + 5

      // Health: random number 25 - 50
      healthStatBase = Math.floor(Math.random() * 50) + 25

      // Stamina: random number 5 - 10
      staminaStatBase = Math.floor(Math.random() * 10) + 5

      // Magic: random number 0 - 3
      magicStatBase = Math.floor(Math.random() * 4)

      // Speed: random number 10 - 25
      speedStatBase = Math.floor(Math.random() * 25) + 10
    }



    // roll stats for familiar
    function rollStatsForMonster() {

      rollBaseStats(); // will define standard base stats in format ___BaseStat
      rollMonsterType(); // will return generated monsterClass & generated monsterType
      rollRarity(); // will return generated rarity

      if (monsterClass == "pest") {
        strength = strengthStatBase
        health = healthStatBase + 50
        stamina = staminaStatBase - 1
        magic = magicStatBase + Math.round(Math.random())
        speed = speedStatBase + 10
      } // end of IF PEST conditional

      if (monsterClass == "creature") {
        strength = strengthStatBase + 5
        health = healthStatBase + 75
        stamina = staminaStatBase + 4
        magic = magicStatBase + Math.round(Math.random())
        speed = speedStatBase + 5
      } // end of IF CREATURE conditional

      if (monsterClass == "demon") {
        strength = strengthStatBase + 10
        health = healthStatBase + 150
        stamina = staminaStatBase + 4
        magic = magicStatBase + (Math.floor(Math.random() * 3)) + 1
        speed = speedStatBase + 4
      } // end of IF DEMON conditional

      if (monsterClass == "elder god") {
        strength = strengthStatBase + 30
        health = healthStatBase + 300
        stamina = staminaStatBase + 20
        magic = magicStatBase + (Math.floor(Math.random() * 5)) + 1
        speed = speedStatBase + 2
      } // end of IF ELDER GOD conditional

      // ADJUST STATS BASED ON RARITY
      if (rarity == "legendary") {
        // LEGENDARY
        strength = strength + 15
        health = health + 50
        stamina = stamina + 8
        magic = magic + (Math.floor(Math.random() * 2))
        speed = speed - 5

      } else if (rarity == "rare") {
        // RARE
        strength = strength + 8
        health = health + 25
        stamina = stamina + 5
        magic = magic + (Math.floor(Math.random() * 1))
        speed = speed + 2

      } else if (rarity == "uncommon") {
        // UNCOMMON
        strength = strength + 3
        health = health + 15
        stamina = stamina + 2
        magic = magic + (Math.floor(Math.random() * 1))
        speed = speed + 1

      }  else {
        speed = speed + 3
      } // COMMON value mostly stays as the stat generated by adjusting for class & type
    }


    // final function to roll for enemy stats
    function rollStatsForEnemyMonster() {
      rollStatsForMonster();
      // adjust stats
      strength = strength + 3
      health = health + 20
      stamina = stamina + 5
      magic = magic + 3
      speed = speed + 1
    }



  // *** --- SUMMON FAMILIAR -- *** //

    function checkAnimal() {
      if ((monsterClass == "pest") || (monsterClass == "creature")) {
        magic = 0
      }
    }


    // familiar object
    function familiar() {
        this.description = description;
        this.type = monsterType;
        this.class = monsterClass;
        this.strength = strength;
        this.health = health;
        this.maxhealth = health;
        this.stamina = stamina;
        this.magic = magic;
        this.speed = speed;
        this.undead = undead;
    }

    // SUMMON HERO FAMILIAR
    function summonFamiliar() {
      rollStatsForMonster();
      description = rarity + " " + monsterType

      checkUndead();
      if (undead == true) {
        description = "undead " + rarity + " " + monsterType
      }

      checkAnimal();

      var newFamiliar = new familiar();

      heroFamiliar = newFamiliar
      console.log(heroFamiliar);

      undead = false
      return heroFamiliar
    }



    // SUMMON ENEMY FAMILIAR
    function summonEnemyFamiliar() {
      rollStatsForEnemyMonster();

      description = rarity + " " + monsterType

      checkUndead();
      if (undead == true) {
        description = "undead " + rarity + " " + monsterType
      }

      checkAnimal();

      var newEnemyFamiliar = new familiar();

      enemyFamiliar = newEnemyFamiliar
      console.log(enemyFamiliar);

      undead = false
      return enemyFamiliar
    }
