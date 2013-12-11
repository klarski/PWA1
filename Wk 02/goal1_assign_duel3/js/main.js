// Kristen Kozinski
// 12/9/13
// The Duel - Part 3

(function(){

console.log("fight");
var playerOne = {name:"Santa Claus", health:100, damage:20};
var playerTwo = {name:"Easter Bunny", health:100, damage:20};

var players = [playerOne, playerTwo]; 



var round = 0;

function fight (){
	console.log("fight function");
	//alert(playerOne[0] + ":" + playerOne[1] + " *START* " + playerTwo[0] + ":" + playerTwo[1]);

	var minDamage1 = playerOne.damage * .5;
	var minDamage2 = playerTwo.damage * .5;
	var f1 = Math.floor(Math.random() * (playerOne.damage - minDamage1) + minDamage1);
	var f2 = Math.floor(Math.random() * (playerTwo.damage - minDamage2) + minDamage2);

	playerOne.health-=f1;
	playerTwo.health-=f2;

	console.log(playerOne[0] + ":" + playerOne[1] + " " + playerTwo[0] + ":" + playerTwo[1]);

	var results = winnerCheck();
	console.log(results);

	if(results === "no winner"){
		round++;
		//alert(playerOne[0] + ":" + playerOne[1] + " *ROUND " + round + " OVER* " + playerTwo[0] + ":" + playerTwo[1]);
	}else{
		alert(results);
		break;
	}


};

function winnerCheck(){
	console.log("winner function");
	var result = "no winner";

	if(playerOne[1] < 1 && playerTwo[1] < 1){
		result = "You Both Die!" ;
	}else if(playerOne[1] < 1){
		result = playerTwo[0] + "wins!";
	}else if(playerTwo[1] < 1) {
		result = playerOne[0] + "wins!";
	};
	return result;
}; 

console.log("program starts");
fight();

})();