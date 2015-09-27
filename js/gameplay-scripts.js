// ***** ------ SUMMON FAMILIAR ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //
    // REROLL COUNT
    var rerollCount = 0

  // *** --- HIDDEN AT START -- *** //
  $("#resultsArea").hide();
  $("#summonFamiliarButton").hide();
  $("#summonEnemyFamiliarButton").hide();
  $("#startFightButton").hide();


  // *** --- INITIAL SUMMON BUTTON -- *** //
  $("#summonButton").on("click", function(){
    // summon hero
    summonFamiliar();
    $("#heroFamiliarDescription").text(heroFamiliar.description.toUpperCase());

    $("#heroFamiliarStats").html("<li class='listTitle'>STATS</li><li>STRENGTH: &nbsp;" + strength + "</li><li>" + "HEALTH: &nbsp;" + health + "</li><li>" + "STAMINA: &nbsp;" + stamina + "</li><li>" + "MAGIC: &nbsp;" + magic + "</li><li>" + "SPEED: &nbsp;" + speed + "</li>");

    $("#heroDamageStats").html("<li class='listTitle'>DAMAGE</li><li>" + (heroFamiliar.strength + 1) + " - " + (heroFamiliar.strength + 10) + "</li>");

    if ((heroFamiliar.magic <= -1) || (heroFamiliar.magic == 0)) {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>0</li>");
    } else {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>" + (heroFamiliar.strength + (heroFamiliar.magic * 1)) + " - " + (heroFamiliar.strength + (heroFamiliar.magic * 10)) + "</li");
    }


    // summon enemy
    summonEnemyFamiliar();
    $("#enemyFamiliarDescription").text(enemyFamiliar.description.toUpperCase());

    $("#enemyFamiliarStats").html("<li class='listTitle'>STATS</li><li>STRENGTH: &nbsp;" + strength + "</li><li>" + "HEALTH: &nbsp;" + health + "</li><li>" + "STAMINA: &nbsp;" + stamina + "</li><li>" + "MAGIC: &nbsp;" + magic + "</li><li>" + "SPEED: &nbsp;" + speed + "</li>");

    $("#enemyDamageStats").html("<li class='listTitle'>DAMAGE</li><li>" + (enemyFamiliar.strength + 1) + " - " + (enemyFamiliar.strength + 10) + "</li>");

    if ((enemyFamiliar.magic <= -1) || (enemyFamiliar.magic == 0)) {
      $("#enemyMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>0</li>");
    } else {
    $("#enemyMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>" + (enemyFamiliar.strength + (enemyFamiliar.magic * 1)) + " - " + (enemyFamiliar.strength + (enemyFamiliar.magic * 10)) + "</li");
    }

    $("#resultsArea").show();
    $("#summonButton").hide();
    $("#summonFamiliarButton").show();
    $("#startFightButton").show();

    $("#heroCounter").text("Number of familiar re-rolls used: " + rerollCount + "/3");
  });



  // *** --- REROLL FAMILIAR BUTTON -- *** //
  $("#summonFamiliarButton").on("click", function(){
    summonFamiliar();
    $("#heroFamiliarDescription").text(heroFamiliar.description.toUpperCase());

    $("#heroFamiliarStats").html("<li class='listTitle'>STATS</li><li>STRENGTH: &nbsp;" + strength + "</li><li>" + "HEALTH: &nbsp;" + health + "</li><li>" + "STAMINA: &nbsp;" + stamina + "</li><li>" + "MAGIC: &nbsp;" + magic + "</li><li>" + "SPEED: &nbsp;" + speed + "</li>");

    $("#heroDamageStats").html("<li class='listTitle'>DAMAGE</li><li>" + (heroFamiliar.strength + 1) + " - " + (heroFamiliar.strength + 10) + "</li>");

    if ((heroFamiliar.magic <= -1) || (heroFamiliar.magic == 0)) {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>0</li>");
    } else {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>" + (heroFamiliar.strength + (heroFamiliar.magic * 1)) + " - " + (heroFamiliar.strength + (heroFamiliar.magic * 10)) + "</li");
    }

    rerollCount = rerollCount + 1
    $("#heroCounter").text("Number of familiar re-rolls used: " + rerollCount + "/3");
    $("#resultsArea").show();

    if (rerollCount == 3) {
      $("#summonFamiliarButton").hide();
      $("#heroCounter").hide();
    }
  });
