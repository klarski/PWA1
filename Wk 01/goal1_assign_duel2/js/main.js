// Kristen Kozinski
// 12/2/13
// The Duel - Part 1

(function(){

var playerOne = ["Santa Claus", 100, 20];
var playerTwo = ["Easter Bunny", 100, 20];

//player name
//var playerOneName = "Santa Claus";
//var playerTwoName = "Easter Bunny";

//player health
//var playerOneHealth = 100;
//var playerTwoHealth = 100;

//player damage
//var playerOneDamage = 20;
//var playerTwoDamage = 20;

var round = 0;

function fight (){
	console.log("fight function");
	alert(playerOne[0] + ":" + playerOne[1] + " *START* " + playerTwo[0] + ":" + playerTwo[1]);
	for(var i = 0; i < 10; i++){

	var minDamage1 = playerOne[2] * .5;
	var minDamage2 = playerTwo[2] * .5;
	var f1 = Math.floor(Math.random() * (playerOne[2] - minDamage1) + minDamage1);
	var f2 = Math.floor(Math.random() * (playerTwo[2] - minDamage2) + minDamage2);

	playerOne[1]-=f1;
	playerTwo[1}-=f2;

	console.log(playerOne[0] + ":" + playerOne[1] + " " + playerTwo[0] + ":" + playerTwo[1]);

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