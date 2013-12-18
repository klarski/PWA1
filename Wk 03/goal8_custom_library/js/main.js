/* 
	Arena Battle!!!
	Author: JavaScript Development Team
	PWA1: Goal 8
*/

/*
	=====================================================
	Javascript pattern: self-executing function
	syntax: (function(){})();
	
	Create a private scope for the application's main code
*/

(function(){

	var gandolf = new wizard({
		name: "Gandolf The Gray",
		power: "fire",
		strength: 20
	});


	var dementor = new wizard({
		name: "Dementor",
		power: "ice",
		strength: 15

	});

	var merlin = new wizard({
		name: "Merlin",
		power: "earth",
		strength: 30

	});
	

	var thunderDome = new Arena ({
		name: 'The ThunderDome',
		location: 'Skyrim'

	})


	thunderDome.register(gandolf);
	thunderDome.register(dementor);
	thunderDome.register(merlin);

	thunderDome.fight();

})();



