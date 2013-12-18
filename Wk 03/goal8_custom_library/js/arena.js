// Arena Class

var Arena = function(options){
	this.name =options.name;
	this.location = options. location;

};

Arena.prototype = {

	fighters: [],

	register: function(fighter){
		this.fighters.push(fighter);
		console.log(fighter.name + " has joined the " + this.name + "!!!");
	};

	fight: function(){

		var f1 = Math.floor(Math.random()*this.fighters.lenght);
		var f2 = Math.floor(Math.random()*this.fighters.lenght);

		while(f1 === f2){
		
		var f2 = Math.floor(Math.random()*this.fighters.lenght);

		};

		var fighter1 = this.fighters[f1];
		var fighter2 = this.fighters[f2];

		var loser = fighter1.stength > fighter2.strenght

	};


};


