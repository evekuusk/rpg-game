// *** --- MONSTERS --- *** //

  // *** --- MONSTER OBJECT PROPERTIES LIST
    // Stats
    var monsterStatsList = ["strength", "health", "stamina", "magic", "resilience", "rarity"]
    var rarityStat = ["common", "uncommon", "rare", "legendary"]
    var strengthStatBase = Math.floor(Math.random() * 5) + 1 // random number 1 - 5
    var healthStatBase = Math.floor(Math.random() * 50) + 1 // random number 1 - 50
    var staminaStatBase = Math.floor(Math.random() * 10) + 1 // random number 1 - 10
    var magicStatBase = Math.floor(Math.random() * 11) // random number 0 - 10
    var resilienceStatBase = Math.floor(Math.random() * 10) + 1 // random number 1 - 5

    // Temperaments
    var monsterTemperaments = ["peaceful", "defensive", "aggressive", "hostile"]

    // Classes & Types
    var monsterClasses = ["pest", "creature", "demon", "elder god"]





  // *** --- RANDOM MONSTER GENERATOR SCRIPTS
  var strength
  var health
  var stamina
  var magic
  var resilience

  // Function to roll final stats for monster using generated class, type, and rarity as arguments
  function rollStatsForMonster() {
    var strengthStatClass
    var healthStatClass
    var staminaStatClass
    var magicStatClass
    var resilienceStatClass


    rollBaseStats(); // will define standard base stats in format ___BaseStat

    rollMonsterType(); // will return generated monsterClass & generated monsterType
    rollRarity(); // will return generated rarity


    if (monsterClass == "pest") {
      strengthStatClass = strengthStatBase
      healthStatClass = healthStatBase
      staminaStatClass = staminaStatBase - 1
      magicStatClass = magicStatBase + 1
      resilienceStatClass = resilienceStatBase + 1

        // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.

    }

    if (monsterClass == "creature") {
      strengthStatClass = strengthStatBase + 5
      healthStatClass = healthStatBase + 25
      staminaStatClass = staminaStatBase + 4
      magicStatClass = magicStatBase - 1
      resilienceStatClass = resilienceStatBase + 10


        // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.

    }

    if (monsterClass == "demon") {
      strengthStatClass = strengthStatBase + 10
      healthStatClass = healthStatBase + 50
      staminaStatClass = staminaStatBase + 4
      magicStatClass = magicStatBase + 10
      resilienceStatClass = resilienceStatBase + 10



        // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.

    }

    if (monsterClass == "elder god") {
      strengthStatClass = strengthStatBase + 25
      healthStatClass = healthStatBase + 100
      staminaStatClass = staminaStatBase + 20
      magicStatClass = magicStatBase + 25
      resilienceStatClass = resilienceStatBase + 20


        // add more internal conditionals testing if the index of pestMonsters selected is in the lower, middle, or upper third...this will be to affect final random stats.


    }

    // update stats
    strength = strengthStatClass
    health = healthStatClass
    stamina = staminaStatClass
    magic = magicStatClass
    resilience = resilienceStatClass

    console.log("STATS:")
    console.log("STRENGTH: " + strength + ", " + "HEALTH: " + health + ", " + "STAMINA: " + stamina + ", " + "MAGIC: " + magic + ", " + "RESILIENCE: " + resilience + ".");

  }





  // *** --- MONSTER OBJECT
  function monster() {
      this.type = monsterType;
      this.class = monsterClass;
      this.strength = strength;
      this.health = health;
      this.stamina = stamina;
      this.magic = magic;
      this.resilience = resilience;
  }

  function newRandomMonster() {
    rollStatsForMonster();
    // "roll temperament"
    // "generate name"

    console.log("You have generated a(n) " + rarity.toUpperCase() + " " + monsterType.toUpperCase() + " in the class of " + monsterClass.toUpperCase() + ".");

    var newMonster = new monster(monsterType, monsterClass, strength, health, stamina, magic, resilience);
    return newMonster

  }
