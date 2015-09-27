// ***** ------ SUMMON FAMILIAR ------ ***** //

  // *** ---  GLOBAL VARIABLES --- *** //
    // REROLL COUNT
    var rerollCount = 0

  // *** --- HIDDEN AT START -- *** //
  $("#resultsArea").hide();
  $("#summonFamiliarButton").hide();
  $("#summonEnemyFamiliarButton").hide();
  $("#startFightButton").hide();
  $("#attackButton").hide();
  $("#specialAttackButton").hide();
  $("#nextRoundButton").hide();
  $("#battleBox").hide();
  $("#battleEndBox").hide();
  $("#victory").hide();
  $("#defeat").hide();


  // *** --- INITIAL SUMMON BUTTON -- *** //
  $("#summonButton").on("click", function(){
    // summon hero
    summonFamiliar();
    $("#heroFamiliarDescription").text(heroFamiliar.description.toUpperCase());

    $("#heroFamiliarStats").html("<li class='listTitle'>STATS</li><li>STRENGTH: &nbsp;" + strength + "</li><li>" + "HEALTH: &nbsp;" + health + "</li><li>" + "STAMINA: &nbsp;" + stamina + "</li><li>" + "MAGIC: &nbsp;" + magic + "</li><li>" + "SPEED: &nbsp;" + speed + "</li>");

    $("#heroDamageStats").html("<li class='listTitle'>DAMAGE</li><li>" + (heroFamiliar.strength + 1) + " - " + (heroFamiliar.strength + 10) + "</li>");

    if (heroFamiliar.magic <= 0) {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>0</li>");
    } else {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>" + (heroFamiliar.strength * heroFamiliar.magic) + "</li");
    }


    // summon enemy
    summonEnemyFamiliar();
    $("#enemyFamiliarDescription").text(enemyFamiliar.description.toUpperCase());

    $("#enemyFamiliarStats").html("<li class='listTitle'>STATS</li><li>STRENGTH: &nbsp;" + strength + "</li><li>" + "HEALTH: &nbsp;" + health + "</li><li>" + "STAMINA: &nbsp;" + stamina + "</li><li>" + "MAGIC: &nbsp;" + magic + "</li><li>" + "SPEED: &nbsp;" + speed + "</li>");

    $("#enemyDamageStats").html("<li class='listTitle'>DAMAGE</li><li>" + (enemyFamiliar.strength + 1) + " - " + (enemyFamiliar.strength + 10) + "</li>");

    if (enemyFamiliar.magic <= 0) {
      $("#enemyMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>0</li>");
    } else {
    $("#enemyMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>" + (enemyFamiliar.strength * enemyFamiliar.magic) + "</li");
    }

    $("#resultsArea").show();
    $("#summonButton").hide();
    $("#summonFamiliarButton").show();
    $("#startFightButton").show();

    $("#heroCounter").text("Number of re-rolls used: " + rerollCount + "/3");
  });



  // *** --- REROLL FAMILIAR BUTTON -- *** //
  $("#summonFamiliarButton").on("click", function(){
    summonFamiliar();
    $("#heroFamiliarDescription").text(heroFamiliar.description.toUpperCase());

    $("#heroFamiliarStats").html("<li class='listTitle'>STATS</li><li>STRENGTH: &nbsp;" + strength + "</li><li>" + "HEALTH: &nbsp;" + health + "</li><li>" + "STAMINA: &nbsp;" + stamina + "</li><li>" + "MAGIC: &nbsp;" + magic + "</li><li>" + "SPEED: &nbsp;" + speed + "</li>");

    $("#heroDamageStats").html("<li class='listTitle'>DAMAGE</li><li>" + (heroFamiliar.strength + 1) + " - " + (heroFamiliar.strength + 10) + "</li>");

    if (heroFamiliar.magic <= 0) {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>0</li>");
    } else {
      $("#heroMagicDamageStats").html("<li class='listTitle'>MAGIC DAMAGE</li><li>" + (heroFamiliar.strength * heroFamiliar.magic) + "</li");
    }

    rerollCount = rerollCount + 1
    $("#heroCounter").text("Number of re-rolls used: " + rerollCount + "/3");
    $("#resultsArea").show();

    if (rerollCount == 3) {
      $("#summonFamiliarButton").hide();
    }
  });



  // *** --- START FIGHT BUTTON -- *** //

  $("#startFightButton").on("click", function() {
    $("#resultsArea").hide();
    $("#summonFamiliarButton").hide();
    $("#heroCounter").hide();
    $("#startFightButton").hide();

    $("#attackButton").show();
    $("#specialAttackButton").show();
    $("#battleBox").show();

    $("#battleTitle").html("<span class='heroName'>" + heroFamiliar.description.toUpperCase() + "</span>" + " vs " + "<span class='enemyName'>" + enemyFamiliar.description.toUpperCase() + "</span>");

    $("#heroFightName").text(heroFamiliar.description.toUpperCase());
    $("#enemyFightName").text("ENEMY " + enemyFamiliar.description.toUpperCase());

    if (heroFamiliar.speed >= enemyFamiliar.speed) {
      $("#fightUpdate").html("<span class='heroName'>" + heroFamiliar.description.toUpperCase() + "</span>" + " has a higher speed stat than <span class='enemyName'>" + enemyFamiliar.description.toUpperCase() + "</span>!  &nbsp; You have attacked first!");
      heroAttack();
      $("#heroHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + heroFamiliar.health + " / " + heroFamiliar.maxhealth);
    } else {
      $("#fightUpdate").html("Enemy <span class='enemyName'>" + enemyFamiliar.description.toUpperCase() + "</span>" + " has a higher speed stat than <span class='heroName'>" + heroFamiliar.description.toUpperCase() + "</span>! &nbsp; Enemy has attacked first!");
      enemyAttack();
      $("#enemyHealthStat").html("<li class='listTitle'>HEALTH</li><li>" + enemyFamiliar.health + " / " + enemyFamiliar.maxhealth);
    }
  })



    // *** --- ATTACK & SPECIAL ATTACK & NEXT ROUND BUTTONS -- *** //

    $("#attackButton").on("click", function() {
      heroAttack();
      $("#fightUpdate").html("Your familiar has attacked the enemy familiar!");
      $("#attackButton").hide();
      $("#specialAttackButton").hide();
      $("#nextRoundButton").show();
    })

    $("#nextRoundButton").on("click", function() {
      enemyAttack();
      $("#fightUpdate").html("Enemy familiar has attacked your familiar!");
      $("#attackButton").show();
      $("#specialAttackButton").show();
      $("#nextRoundButton").hide();
    })
