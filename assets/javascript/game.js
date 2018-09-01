$(document).ready(function () {

	
	var wrestlers = [
			andreTheGiant = {
			name: "Andre the Giant",
			img:"assets/images/andre-the-giant1.png" ,
			healthPoints: 180,
			attackPower: 10,
			counterAttackPower: 4,
		},

		hulkHogan = {
			name: "Hulk Hogan",
			img:"assets/images/hulk-hogan1png.png",
			healthPoints: 150,
			attackPower: 12,
			counterAttackPower: 6,
		},

		machoMan = {
			name: "Macho Man",
			img:"assets/images/macho-man1.png",
			healthPoints: 120,
			attackPower: 8,
			counterAttackPower: 5,
		},

		ultimateWarrior = {
			name: "Ultimate Warrior",
			img:"assets/images/ultimate-warrior1.png",
			healthPoints: 100,
			attackPower: 15,
			counterAttackPower: 9,

		}]; // end of var wrestlersArr


		var wrestler = null;

		// reset enemies array
		var defenders = [];

		// reset enemy selected
		var defender = null;
	//Wrestler Object
	var characterSelection = [andreTheGiant, hulkHogan, machoMan, ultimateWarrior];
	
	$("#character").empty();
	$("#defenderArea").empty();
	$("#defender").empty();
	$("#status").empty();

	//display wrestlers in section
/*	$.each(wrestlerArr, function(index, wrestlers) {
		// create a div for each character to display character selection at start of the game
		
		var newCharacterDiv = $("<span>").addClass("character panel panel-success").attr("id",wrestlers.id);
		$("<span>").addClass("panel-body").append("<img src='" + wrestlers.img + "'>").appendTo(newCharacterDiv);
		$("#wrestlers").append(newCharacterDiv);
		
	}); */

	$.each(characterSelection, function(index, wrestlers) {
		// create a div for each character to display character selection at start of the game
		
		
		$("#wrestler").append("<img src='" + wrestlers.img + "'>");
	
	});











/*	$(function wrestlerSelect() {
	
		$("#Andre-the-Giant").on("click", function () {
			console.log("Hulk Hogan is selected")
			$("#Andre-the-Giant").appendTo("#player-fight-area");
			$("#player-name").html(andreTheGiant.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(andreTheGiant.healthPoints);

		});


		$("#Hulk-Hogan").on("click", function () {
			console.log("Hulk Hogan is selected")
			$("#Hulk-Hogan").appendTo("#player-fight-area");
			$("#player-name").html(hulkHogan.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(hulkHogan.healthPoints);

		});

		$("#Macho-Man").on("click", function () {
			console.log("Macho-Man is selected")
			$("#Macho-Man").appendTo("#player-fight-area");
			$("#player-name").html(machoMan.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(machoMan.healthPoints);

		});


		$("#Ultimate-Warrior").on("click", function () {
			console.log("Ultimate Warrior is selected")
			$("#Ultimate-Warrior").appendTo("#player-fight-area");
			$("#player-name").html(ultimateWarrior.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(ultimateWarrior.healthPoints);

		});

		///End of beginning function
	});

*/


		/*$("#Hulk-Hogan").on("click", function () {
			console.log("Hulk Hogan is selected")
			$("#Hulk-Hogan").appendTo("#opponent-fight-area");
			$("#player-name").html(hulkHogan.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(hulkHogan.healthPoints);

		});

		$("#Macho-Man").on("click", function () {
			console.log("Macho-Man is selected")
			$("#Macho-Man").appendTo("#opponent-fight-area");
			$("#player-name").html(machoMan.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(machoMan.healthPoints);

		});


		$("#Ultimate-Warrior").on("click", function () {
			console.log("Ultimate Warrior is selected")
			$("#Ultimate-Warrior").appendTo("#player-fight-area");
			$("#player-name").html(ultimateWarrior.name);
			$("#player-hp").html("Power Level");
			$("#player-total-hp").html(ultimateWarrior.healthPoints);

		}); */

		///End of beginning function


















	
});

