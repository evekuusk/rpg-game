// ***** ------ FAMILIAR ACTIONS ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //
    var attackDamage
    var magicAttackDamage

    var enemyAttackDamage
    var enemyMagicAttackDamage

    var evade = false
    var enemyEvade = false

    var heroDamageTaken
    var enemyDamageTaken


  // *** ---  FIGHT --- *** //
    // hero attacks
    function heroAttack() {
      attackDamage = heroFamiliar.strength + (Math.floor(Math.random() * 10) + 1)
      return attackDamage
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
