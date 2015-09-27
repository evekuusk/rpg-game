// ***** ------ FAMILIAR ACTIONS ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //
    var attackDamage
    var magicAttackDamage

    var enemyAttackDamage
    var enemyMagicAttackDamage

    var specialAttack
    var enemySpecialAttack

    var evade = false
    var enemyEvade = false
    var evadeChance

    var heroDamageTaken
    var enemyDamageTaken


  // *** ---  EVADE --- *** //

    function rollEvade() {
      evadeChance = Math.floor(Math.random() * 100) // sets evadeChance to a random number between 0 - 99
      if ((evadeChance == heroFamiliar.speed) || (evadeChance == heroFamiliar.speed + 1) || (evadeChance == heroFamiliar.speed + 2) || (evadeChance == heroFamiliar.speed - 1) || (evadeChance == heroFamiliar.speed - 2)) {
        evade = true
        console.log("Rolled " + evadeChance + ".  Because speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"!  Successfully evaded the attack!");
      } else {
        console.log("Rolled a " + evadeChance + ".  Because speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"!  Your familiar has been hit!");
      }
    }

    function rollEnemyEvade() {
      evadeChance = Math.floor(Math.random() * 100) // sets evadeChance to a random number between 0 - 99
      if ((evadeChance == enemyFamiliar.speed) || (evadeChance == enemyFamiliar.speed + 1) || (evadeChance == enemyFamiliar.speed + 2) || (evadeChance == enemyFamiliar.speed - 1) || (evadeChance == enemyFamiliar.speed - 2)) {
        enemyEvade = true
        console.log("Rolled " + evadeChance + ".  Because enemy speed is " + enemyFamiliar.speed + ", acceptable range for evasion is " + (enemyFamiliar.speed - 2) + " - " + (enemyFamiliar.speed + 2) +"!  Enemy successfully evaded the attack!");
      } else {
        console.log("Rolled a " + evadeChance + ".  Because enemy speed is " + enemyFamiliar.speed + ", acceptable range for evasion is " + (enemyFamiliar.speed - 2) + " - " + (enemyFamiliar.speed + 2) +"!  Enemy has been hit!");
      }
    }


  // *** ---  FIGHT --- *** //
    // hero attacks
    function heroAttack() {
      attackDamage = heroFamiliar.strength + (Math.floor(Math.random() * 10) + 1)

      rollEnemyEvade();

      if (enemyEvade === true) {
        console.log("Enemy evaded the attack!  Enemy health remains at " + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth + ".");
        enemyEvade = false

        $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Enemy evaded the attack!");


      } else  if (enemyEvade === false) {
        enemyFamiliar.health = enemyFamiliar.health - attackDamage
        if (enemyFamiliar.health <= 0) {
          console.log("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!  YOU WIN!  Enemy familiar is dead!");

          $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!  YOU WIN!  Enemy familiar is dead!");
        } else {
          console.log("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!");

          $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!");
        }
      }

      if (enemyFamiliar.health <= 0) {
        enemyFamiliar.health = 0
        console.log("Enemy health is " + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth + ". ENEMY IS DEAD, STOP BEATING THEIR CORPSE!  YOU MONSTER!");

        $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Enemy is dead, you win!");
      }
    }



    function heroMagicAttack() {
      magicAttackDamage = heroFamiliar.strength * heroFamiliar.magic
      return magicAttackDamage
    }

    // enemy attacks
    function enemyAttack() {
      enemyAttackDamage = enemyFamiliar.strength + (Math.floor(Math.random() * 10) + 1)
      return enemyAttackDamage
    }

    function enemyMagicAttack() {
      enemyMagicAttackDamage = enemyFamiliar.strength * heroFamiliar.magic
      return enemyMagicAttackDamage
    }
