// ***** ------ SUMMON FAMILIAR ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //
    // REROLL COUNT
    var heroRerollCount = 0
    var enemyRerollCount = 0

  // *** --- HIDDEN AT START -- *** //
  $("#resultsArea").hide();
  $("#summonFamiliarButton").hide();
  $("#summonEnemyFamiliarButton").hide();
  $("#startFightButton").hide();


  // *** --- INITIAL SUMMON BUTTON -- *** //
  $("#summonButton").on("click", function(){
    // summon hero
    summonFamiliar();
    $("#heroFamiliarDescription").text("You have summoned a new " + description.toUpperCase() + " familiar!");

    $("#heroFamiliarStats").text("STRENGTH: " + strength + ", " + "HEALTH: " + health + ", " + "STAMINA: " + stamina + ", " + "MAGIC: " + magic + ".");

    $("#heroDamageStats").text(heroFamiliar.description.toUpperCase() + " will do damage between " + (heroFamiliar.strength + 1) + " and " + (heroFamiliar.strength + 10) + ".");

    $("#heroMagicDamageStats").text(heroFamiliar.description.toUpperCase() + " will do magic damage between " + ( heroFamiliar.strength + (heroFamiliar.magic * 1)) + " and " + (heroFamiliar.strength + (heroFamiliar.magic * 10 )) + ".");


    // summon enemy
    summonEnemyFamiliar();
    $("#enemyFamiliarDescription").text("Your enemy has summoned a new " + description.toUpperCase() + " familiar!");

    $("#enemyFamiliarStats").text("ENEMY STRENGTH: " + strength + ", " + "ENEMY HEALTH: " + health + ", " + "ENEMY STAMINA: " + stamina + ", " + "ENEMY MAGIC: " + magic + ".");

    $("#enemyDamageStats").text("Enemy " + enemyFamiliar.description.toUpperCase() + " will do damage between " + (enemyFamiliar.strength + 1) + " and " + (enemyFamiliar.strength + 10) + ".");

    $("#enemyMagicDamageStats").text("Enemy " + enemyFamiliar.description.toUpperCase() + " will do magic damage between " + ( enemyFamiliar.strength + (enemyFamiliar.magic * 1)) + " and " + (enemyFamiliar.strength + (enemyFamiliar.magic * 10 )) + ".");

    $("#resultsArea").show();
    $("#summonButton").hide();
    $("#summonFamiliarButton").show();
    $("#summonEnemyFamiliarButton").show();
    $("#startFightButton").show();

    $("#heroCounter").text("Number of familiar re-rolls used: " + heroRerollCount + "/3");
    $("#enemyCounter").text("Number of enemy familiar re-rolls used: " + enemyRerollCount + "/3");
  });



  // *** --- REROLL FAMILIAR BUTTON -- *** //
  $("#summonFamiliarButton").on("click", function(){
    summonFamiliar();
    $("#heroFamiliarDescription").text("You have summoned a new " + description.toUpperCase() + " familiar!");

    $("#heroFamiliarStats").text("STRENGTH: " + strength + ", " + "HEALTH: " + health + ", " + "STAMINA: " + stamina + ", " + "MAGIC: " + magic + ".");

    $("#heroDamageStats").text(heroFamiliar.description.toUpperCase() + " will do damage between " + (heroFamiliar.strength + 1) + " and " + (heroFamiliar.strength + 10) + ".");

    $("#heroMagicDamageStats").text(heroFamiliar.description.toUpperCase() + " will do magic damage between " + ( heroFamiliar.strength + (heroFamiliar.magic * 1)) + " and " + (heroFamiliar.strength + (heroFamiliar.magic * 10 )) + ".");

    heroRerollCount = heroRerollCount + 1
    $("#heroCounter").text("Number of familiar re-rolls used: " + heroRerollCount + "/3");
    $("#resultsArea").show();

    if (heroRerollCount == 3) {
      $("#summonFamiliarButton").hide();
      $("#heroCounter").hide();
    }
  });

  // *** --- REROLL ENEMY FAMILIAR BUTTON -- *** //
  $("#summonEnemyFamiliarButton").on("click", function(){
    summonEnemyFamiliar();
    $("#enemyFamiliarDescription").text("Your enemy has summoned a new " + description.toUpperCase() + " familiar!");

    $("#enemyFamiliarStats").text("ENEMY STRENGTH: " + strength + ", " + "ENEMY HEALTH: " + health + ", " + "ENEMY STAMINA: " + stamina + ", " + "ENEMY MAGIC: " + magic + ".");

    $("#enemyDamageStats").text("Enemy " + enemyFamiliar.description.toUpperCase() + " will do damage between " + (enemyFamiliar.strength + 1) + " and " + (enemyFamiliar.strength + 10) + ".");

    $("#enemyMagicDamageStats").text("Enemy " + enemyFamiliar.description.toUpperCase() + " will do magic damage between " + ( enemyFamiliar.strength + (enemyFamiliar.magic * 1)) + " and " + (enemyFamiliar.strength + (enemyFamiliar.magic * 10 )) + ".");

    enemyRerollCount = enemyRerollCount + 1
    $("#enemyCounter").text("Number of enemy familiar re-rolls used: " + enemyRerollCount + "/3");
    $("#resultsArea").show();

    if (enemyRerollCount == 3) {
      $("#summonEnemyFamiliarButton").hide();
      $("#enemyCounter").hide();
    }
  });
