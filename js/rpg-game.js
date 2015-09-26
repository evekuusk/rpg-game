// *** RPG GAME
// creates a simple, randomly generated fight scenario with a hero character, an enemy creature with stats, and a weapon for the hero.


$("#rpgGameFunction").hide();





// ...

var enemy = {}
var weapon = {}

var roundsCount = 0
var victoriesCount = 0

$("#fightButton").hide();
$("#fleeButton").hide();
$("#tryAgainButton").hide();
$("#roundsCountBox").hide();

  // *** GENERATE ENEMY
    function generateEnemy() {

      // creates the random number to use as enemy stats
      function randomStat() {
         var num = Math.floor((Math.random() * 10) + 1);
         return num;
      }

      // array of creature types
      var creatureType = ['goblin', 'bear', 'dire wolf', 'bandit', 'sorcerer', 'gryphon', 'pixie', 'zombie', 'demon'];

      // creates the random number that will select first enemy
      var i = Math.floor((Math.random() * creatureType.length));


      // generates a random enemy type by creating a variable that is a number between 0-n (corresponding with the array indexes of creatureType), and then returning that particular array item.
      var enemyType = creatureType[i];

      // enemy object
      enemy = {
        "type": enemyType,
        "health": randomStat(),
        "damage": randomStat(),
      }

      return enemy;

    } // end of generateEnemy()


  // *** GENERATE WEAPON
    function generateWeapon() {

      // creates the random number to use as hero's weapon damage
      function randomDamage() {
         var num = Math.floor((Math.random() * 10) + 1);
         return num;
      }

      var damage = randomDamage()

      // array of weapon types
      var weaponType = ['spoon', 'sword', 'stick', 'crossbow', 'hammer', 'axe']

      // creates the random number that will select first enemy
      var ii = Math.floor((Math.random() * weaponType.length));

      // defines damage as high or low
      function defineDamage() {
        if (damage > 5) {
          return "mighty"
        } else if (damage < 4) {
          return "inferior"
        } else {
          return "average"
        }
      }

      // HERO WEAPON OBJECT
      weapon = {
        "name": weaponType[ii],
        "damage": damage,
        "description": defineDamage()
      }

      return weapon;

    } // generateWeapon()



    // *** FIGHT

      function rpgFight() {
        $("#resultsBox").text("You are fighting a " + enemy.type + " with a " + weapon.name + "!  Your weapon is of " + weapon.description + " strength!  Will you attack or flee?");

        console.log("You are fighting a " + enemy.type + " with a " + weapon.name + "!  Your weapon is of " + weapon.description + " strength!  Will you attack or flee?");
        $("#battleButtons").show(); // #battleButtons is not yet attached to any html element, I plan on including a div that holds both #attackButton and #fleeButton

      } // end of rpgFight()




  // *** GENERATE & FIGHT

  $("#getReadyButton").on("click", function(){
    generateEnemy();
    generateWeapon();
    rpgFight();
    console.log(enemy);
    console.log(weapon);
    $("#fightButton").show();
    $("#fleeButton").show();
    $("#getReadyButton").hide();
    $("#roundsCountBox").text("Counting...");
  })

  function fightCheckVictory() {
    if (enemy.health < weapon.damage) {
      console.log("YOU WIN!")
      $("#resultsBox").text("YOU HAVE SLAIN THE BEAST!")
      $("#tryAgainButton").text("THEIR BLOOD WILL SPILL!  Again?")
      victoriesCount = victoriesCount + 1
    } else {
      $("#resultsBox").text("YOU HAVE BEEN HORRIBLY MURDERED!")
      console.log("YOU LOSE!")
      $("#tryAgainButton").text("RESURRECTION SPELL!  Again?")
    }
  }

  function fleeCheckVictory() {
    if (enemy.health < weapon.damage) {
      $("#resultsBox").text("Coward!  You would have slayed the beast!");

      console.log("Coward!  You would have slayed the beast!")
      $("#tryAgainButton").text("DRINK SOME LIQUID COURAGE! Again?")
    } else {
      $("#resultsBox").text("Good choice, you barely escaped with your skin!")

      console.log("Good choice, you barely escaped with your skin!")
      $("#tryAgainButton").text("TRAINING MONTAGE! Again?")
    }
  }

  $("#fightButton").on("click", function() {
    fightCheckVictory();
    $("#fightButton").hide();
    $("#fleeButton").hide();
    $("#tryAgainButton").show();
  })

  $("#fleeButton").on("click", function() {
    fleeCheckVictory();
    $("#fightButton").hide();
    $("#fleeButton").hide();
    $("#tryAgainButton").show();
  })




  // will be assigned to a 'try again' button meant to refresh the generated enemy, stats, and weapon.
  // possibly make button read 'RESURRECTION SPELL' if you lost the previous round, or 'THEIR BLOOD WILL SPILL!' to continue?
  function tryAgain() {
    generateEnemy();
    generateWeapon();
    $("#tryAgainButton").text("");
    $("#tryAgainButton").hide();
    $("#getReadyButton").show();
    $("#resultsBox").text("NEXT ROUND!");
  }

  $("#tryAgainButton").on("click", function(){
    tryAgain();
    roundsCount = roundsCount + 1
    $("#roundsCountBox").text("You have played " + roundsCount + " round(s)!  You have won " + victoriesCount + " round(s)!");
    $("#roundsCountBox").show();
  })
