// ***** ------ FAMILIAR ACTIONS ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //
    var attackDamage
    var magicAttackDamage

    var enemyAttackDamage
    var enemyMagicAttackDamage


    var defend
    var magicDefend

    var specialAttack

    var flee

    var heroStartHealth
    var enemyStartHealth

    var heroDamageTaken
    var enemyDamageTaken


  // *** ---  FIGHT --- *** //
    // hero attacks
    function heroAttack() {
      console.log(heroFamiliar.description.toUpperCase() + " will do damage between " + (heroFamiliar.strength + 1) + " and " + (heroFamiliar.strength + 10) + ".");
      attackDamage = heroFamiliar.strength + (Math.floor(Math.random() * 10) + 1) // adds 1 - 10 to familiar's existing strength stat
      return attackDamage
    }

    function heroMagicAttack() {
      console.log(heroFamiliar.description.toUpperCase() + " will do magic damage between " + ( heroFamiliar.strength + (heroFamiliar.magic * 1)) + " and " + (heroFamiliar.strength + (heroFamiliar.magic * 10 )) + ".");
      magicAttackDamage = heroFamiliar.strength + (heroFamiliar.magic * (Math.floor(Math.random() * 10) + 1)) // adds magic stat multiplied by a random number between 1 - 10 to familiar's existing strength stat
      return magicAttackDamage
    }

    // enemy attacks
    function enemyAttack() {
      console.log("Enemy " + enemyFamiliar.description.toUpperCase() + " will do damage between " + (enemyFamiliar.strength + 1) + " and " + (enemyFamiliar.strength + 10) + ".");
      enemyAttackDamage = enemyFamiliar.strength + (Math.floor(Math.random() * 10) + 1) // adds 1 - 10 to enemy familiar's existing strength stat
      return enemyAttackDamage
    }

    function enemyMagicAttack() {
      console.log("Enemy " + enemyFamiliar.description.toUpperCase() + " will do magic damage between " + ( enemyFamiliar.strength + (enemyFamiliar.magic * 1)) + " and " + (enemyFamiliar.strength + (enemyFamiliar.magic * 10 )) + ".");
      enemyMagicAttackDamage = enemyFamiliar.strength + (heroFamiliar.magic * (Math.floor(Math.random() * 10) + 1)) // adds magic stat multiplied by a random number between 1 - 10 to enemy familiar's existing strength stat
      return enemyMagicAttackDamage
    }
