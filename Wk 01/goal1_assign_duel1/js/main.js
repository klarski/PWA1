// Kristen Kozinski
// 12/2/13
// The Duel - Part 1

(function(){

//player name
var playerOneName = "Santa Claus";
var playerTwoName = "Easter Bunny";

//player health
var playerOneHealth = 100;
var playerTwoHealth = 100;

//player damage
var playerOneDamage = 20;
var playerTwoDamage = 20;

var round = 0;

function fight (){
	console.log("fight function");
	alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":" + playerTwoHealth);
	for(var i = 0; i < 10; i++){

	var minDamage1 = playerOneDamage * .5;
	var minDamage2 = playerTwoDamage * .5;
	var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
	var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);

	playerOneHealth-=f1;
	playerTwoHealth-=f2;

	console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

	var results = winnerCheck();
	console.log(results);

	if(results === "no winner"){
		round++;
		alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
	}else{
		alert(results);
		break;
	}

	};

};

function winnerCheck(){
	console.log("winner function");
	var result = "no winner";

	if(playerOneHealth < 1 && playerTwoHealth < 1){
		result = "You Both Die!" ;
	}else if(playerOneHealth < 1){
		result = playerTwoName + "wins!";
	}else if(playerTwoHealth < 1) {
		result = playerOneName + "wins!";
	};
	return result;
}; 

console.log("program starts");
fight();

})();