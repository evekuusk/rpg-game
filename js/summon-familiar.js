// ***** ------ SUMMON FAMILIAR ------ ***** //

  // *** ---  RARITY --- *** //
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
        "bee", "rat", "snake"
      ],
      creature = [
        "bear", "wolf", "moose"
      ],
      demon = [
        "ghost", "goblin", "succubus"
      ],
      elder = [
        "gryphon", "dragon", "deity"
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

  // *** --- MONSTERS --- *** //

    // *** --- MONSTER OBJECT PROPERTIES LIST
      // Base Stats
      var monsterStatsList = ["strength", "health", "stamina", "magic", "resilience", "rarity"]
      var rarityStat = ["common", "uncommon", "rare", "legendary"]
      var strengthStatBase = Math.floor(Math.random() * 5) + 1 // random number 1 - 5
      var healthStatBase = Math.floor(Math.random() * 50) + 1 // random number 1 - 50
      var staminaStatBase = Math.floor(Math.random() * 10) + 1 // random number 1 - 10
      var magicStatBase = Math.floor(Math.random() * 11) // random number 0 - 10
      var resilienceStatBase = Math.floor(Math.random() * 10) + 1 // random number 1 - 5

      // Working Stats
      var strength
      var health
      var stamina
      var magic
      var resilience

      // Classes & Types
      var monsterClasses = ["pest", "creature", "demon", "elder god"]

      // Familiar
      var heroFamiliar



    // *** --- RANDOM MONSTER GENERATOR SCRIPTS

    function rollStatsForMonster() {

      rollBaseStats(); // will define standard base stats in format ___BaseStat
      rollMonsterType(); // will return generated monsterClass & generated monsterType
      rollRarity(); // will return generated rarity


      if (monsterClass == "pest") {
        strength = strengthStatBase
        health = healthStatBase
        stamina = staminaStatBase - 1
        magic = magicStatBase + 1
        resilience = resilienceStatBase + 1


          // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.

      } // end of if pest

      if (monsterClass == "creature") {
        strength = strengthStatBase + 5
        health = healthStatBase + 25
        stamina = staminaStatBase + 4
        magic = magicStatBase - 1
        resilience = resilienceStatBase + 10


          // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.

      } // end of if creature

      if (monsterClass == "demon") {
        strength = strengthStatBase + 10
        health = healthStatBase + 75
        stamina = staminaStatBase + 4
        magic = magicStatBase + 10
        resilience = resilienceStatBase + 7



          // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.

      } // end of if demon

      if (monsterClass == "elder god") {
        strength = strengthStatBase + 30
        health = healthStatBase + 150
        stamina = staminaStatBase + 20
        magic = magicStatBase + 25
        resilience = resilienceStatBase + 20


          // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.


      } // end of if elder god

      // ADJUST STATS BASED ON RARITY
      if (rarity == "legendary") {
        strength = strength + 15
        health = health + 50
        stamina = stamina + 8
        magic = magic + 10
        resilience = resilience + 5
      } else if (rarity == "rare") {
        strength = strength + 8
        health = health + 25
        stamina = stamina + 5
        magic = magic + 5
        resilience = resilience + 3
      } else if (rarity == "uncommon") {
        strength = strength + 3
        health = health + 15
        stamina = stamina + 2
        magic = magic + 2
        resilience = resilience + 1
      } // common value stays as the stat generated by adjusting for class & type

      console.log("STATS:")
      console.log("STRENGTH: " + strength + ", " + "HEALTH: " + health + ", " + "STAMINA: " + stamina + ", " + "MAGIC: " + magic + ", " + "RESILIENCE: " + resilience + ".");

    }



    // *** --- FINAL FAMILIAR OBJECT
    function familiar() {
        this.name = rarity + " " + monsterType
        this.type = monsterType;
        this.class = monsterClass;
        this.strength = strength;
        this.health = health;
        this.stamina = stamina;
        this.magic = magic;
        this.resilience = resilience;
    }


  // SUMMON FAMILIAR
    function summonFamiliar() {
      rollStatsForMonster();
      var name = rarity + " " + monsterType

      console.log("You have generated a(n) " + rarity.toUpperCase() + " " + monsterType.toUpperCase() + " in the class of " + monsterClass.toUpperCase() + ".");

      var newFamiliar = new familiar(name, monsterType, monsterClass, strength, health, stamina, magic, resilience);
      heroFamiliar = newFamiliar
      return heroFamiliar
    }
