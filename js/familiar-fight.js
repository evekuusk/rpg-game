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

    // var criticalHit = false
    // var enemyCriticalHit = false
    var criticalChance



  // *** ---  CRITICAL CHANCE --- *** //
    function rollCriticalChance() {
      criticalChance = Math.floor(Math.random() * 99) + 1 // sets criticalChance to a random number between 1 - 99
      if (heroFamiliar.stamina >= criticalChance) {
        console.log("Critical hit!");
        $("#fightCriticalHit").html("Rolled " + criticalChance + " for critical hit.  This is lower than " + heroFamiliar.description.toUpperCase() + " stamina stat of " + heroFamiliar.stamina + "!  &nbsp; Critical hit landed and stamina stat lowered by 3!");
        heroFamiliar.stamina = heroFamiliar.stamina - 3
        // criticalHit = true

        console.log("Base attack damage was " + attackDamage + ", but critical damage was " + (Math.floor(attackDamage * 1.5)) + ".");
        attackDamage = Math.floor(attackDamage * 1.5);
      } else {
        $("#fightCriticalHit").html("Rolled " + criticalChance + " for critical hit.  No luck this time!");
      }

      if (heroFamiliar.stamina <= -1) {
        heroFamiliar.stamina = 0
        $("#fightCriticalHit").html("Stamina stat is 0 -- your familiar is too exhausted to land critical hits.");
      }
    }


    function rollEnemyCriticalChance() {
      criticalChance = Math.floor(Math.random() * 99) + 1 // sets criticalChance to a random number between 1 - 99
      if (enemyFamiliar.stamina >= criticalChance) {
        console.log("Enemy critical hit!");
        $("#fightCriticalHit").html("Enemy rolled " + criticalChance + " for critical hit.  This is lower than " + enemyFamiliar.description.toUpperCase() + " stamina stat of " + enemyFamiliar.stamina + "!  &nbsp; Critical hit landed and enemy stamina stat lowered by 3!");
        enemyFamiliar.stamina = heroFamiliar.stamina - 3
        // criticalHit = true

        console.log("Base attack damage was " + enemyAttackDamage + ", but critical damage was " + (Math.floor(enemyAttackDamage * 1.5)) + ".");
        enemyAttackDamage = Math.floor(enemyAttackDamage * 1.5);
      } else {
        $("#fightCriticalHit").html("Enemy rolled " + criticalChance + " for critical hit.  That was close!");
      }

      if (enemyFamiliar.stamina <= -1) {
        enemyFamiliar.stamina = 0
        $("#fightCriticalHit").html("Enemy stamina stat is 0 -- enemy familiar is exhausted to land critical hits.");
      }
    }





  // *** ---  EVADE --- *** //
    function rollEvade() {
      evadeChance = Math.floor(Math.random() * 100) // sets evadeChance to a random number between 0 - 99
      if ((evadeChance == heroFamiliar.speed) || (evadeChance == heroFamiliar.speed + 1) || (evadeChance == heroFamiliar.speed + 2) || (evadeChance == heroFamiliar.speed - 1) || (evadeChance == heroFamiliar.speed - 2)) {
        evade = true
        console.log("Rolled " + evadeChance + " for evasion.  Because speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"!  Successfully evaded the attack!");
      } else {
        console.log("Rolled a " + evadeChance + " for evasion.  Because speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"!  Your familiar has been hit!");
      }
    }

    function rollEnemyEvade() {
      evadeChance = Math.floor(Math.random() * 100) // sets evadeChance to a random number between 0 - 99
      if ((evadeChance == enemyFamiliar.speed) || (evadeChance == enemyFamiliar.speed + 1) || (evadeChance == enemyFamiliar.speed + 2) || (evadeChance == enemyFamiliar.speed - 1) || (evadeChance == enemyFamiliar.speed - 2)) {
        enemyEvade = true
        console.log("Rolled " + evadeChance + " for enemy evasion.  Because enemy speed is " + enemyFamiliar.speed + ", acceptable range for evasion is " + (enemyFamiliar.speed - 2) + " - " + (enemyFamiliar.speed + 2) +"!  Enemy successfully evaded the attack!");
      } else {
        console.log("Rolled a " + evadeChance + " for enemy evasion.  Because enemy speed is " + enemyFamiliar.speed + ", acceptable range for evasion is " + (enemyFamiliar.speed - 2) + " - " + (enemyFamiliar.speed + 2) +"!  Enemy has been hit!");
      }
    }


  // *** ---  FIGHT --- *** //

  // // check if either are already dead (will be called twice in )
  // function checkIfDead() {
  //
  // }
  //
  // function checkIfEnemyDead() {
  //
  // }


    // hero attacks
    function heroAttack() {
      attackDamage = heroFamiliar.strength + (Math.floor(Math.random() * 10) + 1);

      rollEnemyEvade();

      if (enemyEvade === true) { // if attack is evaded...
        console.log("Enemy evaded the attack!  Enemy health remains at " + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth + ".");
        enemyEvade = false

        $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Rolled " + evadeChance + " to evade.  Because enemy speed is " + enemyFamiliar.speed + ", acceptable range for evasion is " + (enemyFamiliar.speed - 2) + " - " + (enemyFamiliar.speed + 2) +"! &nbsp; Enemy evaded the attack!");


      } else  if (enemyEvade === false) { // if attack hits...
        enemyFamiliar.health = enemyFamiliar.health - attackDamage
        rollCriticalChance();

        if (enemyFamiliar.health <= 0) {
          console.log("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!  YOU WIN!  Enemy familiar is dead!");

          $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Rolled " + evadeChance + " to evade.  Because enemy speed is " + enemyFamiliar.speed + ", acceptable range for evasion is " + (enemyFamiliar.speed - 2) + " - " + (enemyFamiliar.speed + 2) +"! &nbsp; Enemy was hit!  Your familiar did " + attackDamage + " attack damage!  &nbsp; YOU WIN!  &nbsp; Enemy familiar is dead!");
        } else {
          console.log("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!");

          $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Enemy was hit!  &nbsp; Your familiar did " + attackDamage + " attack damage!");
        }
      }

      if (enemyFamiliar.health <= 0) {
        enemyFamiliar.health = 0
        console.log("Enemy health is " + enemyFamiliar.health + "/" + enemyFamiliar.maxhealth + ". ENEMY IS DEAD, STOP BEATING THEIR CORPSE!  YOU MONSTER!");

        $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Enemy is dead, you win!");
      }
    } end of heroAttack()





    // enemy attacks
    function enemyAttack() {
      enemyAttackDamage = enemyFamiliar.strength + (Math.floor(Math.random() * 10) + 1)

      rollEvade();

      if (evade === true) { // if attack is evaded...
        console.log("Your familiar has evaded the attack!  Health remains at " + heroFamiliar.health + " / " + heroFamiliar.maxhealth + ".");
        evade = false

        $("#heroHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Rolled " + evadeChance + " to evade.  Because familiar's speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"! &nbsp; Your familiar has evaded the attack!");


      } else  if (evade === false) { // if attack hits...
        heroFamiliar.health = heroFamiliar.health - enemyAttackDamage
        rollEnemyCriticalChance();

        if (heroFamiliar.health <= 0) {
          console.log("Your familiar was hit!  Enemy familiar did " + attackDamage + " attack damage!  YOU LOSE!  Your familiar is dead!");

          $("#heroHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Rolled " + evadeChance + " to evade.  Because speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"! &nbsp; Your familiar was hit!  Enemy familiar did " + enemyAttackDamage + " attack damage!  &nbsp; YOU LOSE!  &nbsp; Your familiar is dead!");
        } else {
          console.log("Your familiar was hit!  Enemy familiar did " + enemyAttackDamage + " attack damage!");

          $("#heroHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Your familiar was hit!  &nbsp; Enemy familiar did " + enemyAttackDamage + " attack damage!");
        }
      }

      if (heroFamiliar.health <= 0) {
        heroFamiliar.health = 0
        console.log("Your familiar's health is " + heroFamiliar.health + " / " + heroFamiliar.maxhealth + ". YOU ARE DEAD!");

        $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Your familiar is dead, you lose!");
      }

    } // end of enemyAttack()
