// Kristen Kozinski
// 12/9/13
// The Duel - Part 3

(function(){

console.log("fight");
var playerOne = {name:"Santa Claus", health:100, damage:20};
var playerTwo = {name:"Easter Bunny", health:100, damage:20};

var players = [playerOne, playerTwo]; 
var button = document.querySelector('.buttonblue');


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

	console.log(playerOne.name + ":" + playerOne.health + " " + playerTwo.name + ":" + playerTwo.health);

	var results = winnerCheck();
	console.log(results);

	if(results === "no winner"){
	document.querySelector('#kabal p').innerHTML= playerOne.name + ":" + playerOne.health;
	document.querySelector('#kratos p').innerHTML= playerTwo.name + ":" +  playerTwo.health;
	round++;
	document.getElementById('round_number').innerHTML= "Round #" + round + " is over!";
		
	}else{
		document.querySelector('#kratos p').innerHTML= results;
		document.querySelector('#kabal p').innerHTML = "";
	}


};

function winnerCheck(){
	console.log("winner function");
	var result = "no winner";

	if(playerOne.health < 1 && playerTwo.health < 1){
		result = "You Both Die!" ;
	}else if(playerOne.health < 1){
		result = playerTwo.name + " wins!";
	}else if(playerTwo.health < 1) {
		result = playerOne.name + " wins!";
	};
	return result;
}; 

console.log("program starts");

button.onclick = function(e){
	console.log("I work");
	fight();


	e.preventDefault();
	return false;
}



})();