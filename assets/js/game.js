var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
   // fight function statements
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
  
}
// ask players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  console.log(promptFight);

//if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "Fight") {
  //remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked "  + ". "  + " now has " + enemyHealth + " health remaining."
  );
  
  //check enemy's health
  if (enemyHealth <=0) {
    window.alert( + " has died!"); 
  }
  else {
    window.alert( + " still has " + enemyHealth + " health left.");
  }

  // remove player's health by subtracting the amount set in the enemyAttack variable
  playerHealth = playerHealth - enemyAttack;
  console.log(
 + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  //confirm player wants to skip
  var confirmSkip = window.confirm("Are you sure you want to quit?");
  //if yes (true), leave fight
  if(confirmSkip) {
    window.alertt(playerName + " has decided to skip this fight. Goodbye!");
    //subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
    //if no (false), ask questiona gain by running fight() again
    else {
      fight();
    }
    //if player did not choose 1 or 2 in prompt
  }else {
    window.alert("You need to make a valid option. Try again!");
  }

//run fight function to start game
//fight();