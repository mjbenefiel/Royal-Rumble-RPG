$(document).ready(function () {

	var wrestler = null;
	var defenders = [];
	var defender = null;

	function startGame() {
		var andreTheGiant = {
			id: 0,
			name: "Andre the Giant",
			healthPoints: 120,
			baseAttack:10,
			attackPower: 10,
			counterAttackPower: 8,
			img:"assets/images/andre-the-giant1.png"
		}

		var hulkHogan = {
			id: 1,
			name: "Hulk Hogan",
			healthPoints: 100,
			baseAttack: 8,
			attackPower: 8,
			counterAttackPower: 5,
			img:"assets/images/hulk-hogan1png.png"
		}

		var machoMan = {
			id: 2,
			name: "Macho Man",
			healthPoints: 150,
			baseAttack:9,
			attackPower: 9,
			counterAttackPower: 10,
			img:"assets/images/macho-man1.png"
		}

		var ultimateWarrior = {
			id: 3,
			name: "Ultimate Warrior",
			healthPoints: 100,
			baseAttack: 12,
			attackPower: 12,
			counterAttackPower: 12,
			img:"assets/images/ultimate-warrior1.png"
		}
		// reset character selected
		wrestler = null;

		// reset enemies array
		defenders = [];

		// reset enemy selected
		defender = null;

		// reset character selections
		var wrestlerSelection = [andreTheGiant, hulkHogan, machoMan, ultimateWarrior];

		// clears all character divs
		$("#character").empty();
		$("#defenderArea").empty();
		$("#defender").empty();
		$("#status").empty();

		$.each(wrestlerSelection, function(index, wrestler) {
			// create a div for each character to display character selection at start of the game
			var newCharacterDiv = $("<div>").addClass("character panel panel-success").attr("id",wrestler.id);

			$("<div>").addClass("panel-heading").html(wrestler.name).appendTo(newCharacterDiv);
			$("<div>").addClass("panel-body").append("<img src='" + wrestler.img + "'>").appendTo(newCharacterDiv);
			$("<div>").addClass("panel-footer").append("<span class='hp'>" + wrestler.healthPoints + "</span>").appendTo(newCharacterDiv);

			// append new div to character selection
			$("#characterSelection").append(newCharacterDiv);
		});

		$(".character").on("click", function() {
			// when character has been selected
			if(wrestler === null) {
				console.log("picked character");
				//get id of character selected
				var wrestlerId = parseInt($(this).attr("id"));

				wrestler = wrestlerSelection[wrestlerId];

				// loop through character array
				$.each(wrestlerSelection, function(index, wrestler) {
					// add unselected characters to enemies array
					if(wrestler.id !== wrestlerId) {
						defenders.push(wrestler);
						$("#"+wrestler.id).removeClass("character panel-success").addClass("defender panel-danger").appendTo("#defenderArea");
					} else {
						$("#"+wrestler.id).appendTo("#player-fight-area");
						
						
					}
				});

				// add click event after defender class has been added
				$(".defender").on("click", function() {
					if(defender === null) {
						var defenderId = parseInt($(this).attr("id"));
						console.log(this);
						defender = wrestlerSelection[defenderId];
						$("#"+defenderId).appendTo("#opponent-fight-area") 
						
						

					}
				});
			}
		});

		$("#restart").hide();
	}

	startGame();

	

	$("#attack").on("click", function() {
		// when character has been selected, character has not been defeated and there are still defenders left
		if(wrestler !== null && wrestler.healthPoints > 0 && defenders.length > 0) {
			// created variable to store game status messages
			var status = "";

			// when defender has been selected
			if(defender !== null) {
				// decrease defender HP by character attack power
				defender.healthPoints -= wrestler.attackPower;
				status += "You attacked " + defender.name + " for " + wrestler.attackPower + " damage.<br>";

				console.log("Defender: ",defender.name,defender.healthPoints);

				// update defender HP
				$("#"+defender.id + " .hp").html(defender.healthPoints);

				// decrease character HP by defender counter attack power
				character.healthPoints -= defender.counterAttackPower;
				status += defender.name + " attacked you back for " + defender.counterAttackPower + " damage.<br>";

				console.log("Character: ",wrestler.name,wrestler.healthPoints);

				// update character HP
				$("#"+wrestler.id + " .hp").html(wrestler.healthPoints);

				// increase character attack power by base attack power
				wrestler.attackPower += wrestler.baseAttack;

				// when character is defeated
				if(wrestler.healthPoints <= 0) {
					status = "You've been defeated... GAME OVER!!!!";
					$("#restart").show();
				} else if(defender.healthPoints <= 0) {	// when defender is defeated
					status = "You have defeated " + defender.name + ", you can choose to fight another enemy.";

					// clear defender selection
					$("#defender").empty();
					defender = null;

					// remove defeated defender from defender array
					defenders.splice(defenders.indexOf(defender),1);
				}

				// when no defenders left
				if(defenders.length === 0) {
					status = "You win!";
					$("#restart").show();
				}
			} else {
				status = "No enemy here.";
			}

			$("#status").html(status);
		}
	})

	$("#restart").on("click", function() {
		startGame();
	})
	
});