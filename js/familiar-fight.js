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
        rollCriticalChance();
        enemyFamiliar.health = enemyFamiliar.health - attackDamage

        if (enemyFamiliar.health <= 0) {
          $("#battleButtons").hide();

          $("#battleBox").hide();
          $("#battleEndBox").show();
          $("#victory").show();

        } else {
          console.log("Enemy was hit!  Your familiar did " + attackDamage + " attack damage!");

          $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Enemy was hit!  &nbsp; Your familiar did " + attackDamage + " attack damage!");
        }
      }

    } // end of heroAttack()



    function specialAttack() {
      if (heroFamiliar.class == "pest") {

      } else if (heroFamiliar.class == "creature") {

      } else if ((heroFamiliar.class == "demon") || (heroFamiliar.class == "elder god")) {

      }
    }




    // enemy attacks

    function rollForEnemySpecialAttack() {

    }


    function enemySpecialAttack() {


    } // end of enemySpecialAttack()




    function enemyAttack() {
      enemyAttackDamage = enemyFamiliar.strength + (Math.floor(Math.random() * 10) + 1)

      rollEvade();

      if (evade === true) { // if attack is evaded...
        console.log("Your familiar has evaded the attack!  Health remains at " + heroFamiliar.health + " / " + heroFamiliar.maxhealth + ".");
        evade = false

        $("#heroHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);

        $("#fightEvasionOrAttack").html("Rolled " + evadeChance + " to evade.  Because familiar's speed is " + heroFamiliar.speed + ", acceptable range for evasion is " + (heroFamiliar.speed - 2) + " - " + (heroFamiliar.speed + 2) +"! &nbsp; Your familiar has evaded the attack!");


      } else  if (evade === false) { // if attack hits...
        rollEnemyCriticalChance();
        heroFamiliar.health = heroFamiliar.health - enemyAttackDamage

        if (heroFamiliar.health <= 0) {
          $("#battleButtons").hide();

          $("#battleBox").hide();
          $("#battleEndBox").show();
          $("#defeat").show();

        } else {
          console.log("Your familiar was hit!  Enemy familiar did " + enemyAttackDamage + " attack damage!");

          $("#heroHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);

          $("#fightEvasionOrAttack").html("Your familiar was hit!  &nbsp; Enemy familiar did " + enemyAttackDamage + " attack damage!");
        }
      }

    } // end of enemyAttack()
