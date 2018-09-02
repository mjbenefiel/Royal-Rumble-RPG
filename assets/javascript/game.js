$(document).ready(function () {


	var wrestler = null;
	var defenders = [];
	var defender = null;

	function startGame() {

		var andreTheGiant = {
			id: 0,
			name: "Andre the Giant",
			healthPoints: 115,
			baseAttack: 15,
			attackPower: 15,
			counterAttackPower: 16,
			img: "assets/images/andre-the-giant1.png"
		}

		var hulkHogan = {
			id: 1,
			name: "Hulk Hogan",
			healthPoints: 100,
			baseAttack: 15,
			attackPower: 15,
			counterAttackPower: 16,
			img: "assets/images/hulk-hogan1png.png"
		}

		var machoMan = {
			id: 2,
			name: "Macho Man",
			healthPoints: 100,
			baseAttack: 15,
			attackPower: 15,
			counterAttackPower: 16,
			img: "assets/images/macho-man1.png"
		}

		var ultimateWarrior = {
			id: 3,
			name: "Ultimate Warrior",
			healthPoints: 100,
			baseAttack: 15,
			attackPower: 15,
			counterAttackPower: 16,
			img: "assets/images/ultimate-warrior1.png"
		}


		// reset character selected
		wrestler = null;

		// reset enemies array
		defenders = [];

		// reset enemy selected
		defender = null;

		// reset character selections
		var wrestlerSelection = [andreTheGiant, hulkHogan, machoMan, ultimateWarrior];


		var bellSound = new Audio('./assets/audio/bell.mp3');


		function displayJR() {
			$("#announcer-area").html('<img src="./assets/images/Jim_Ross.png" alt="someimage" />').css({
				"top": "-10px"
			});

		};

		function hideJR() {
			$("#announcer-area").html('<img src="./assets/images/Jim_Ross.png" alt="someimage" />').css({
				"display": "none"
			});
		};

		function displayAnnouncement() {
			$("#announcement-area").append("Hello,folks. This is Good Ol' JR. And we're coming to you live from the KU Edwards Campus Arena in Overland Park, Kansas.</p> <p> We're fixin' for a good ol' fashioned slobberknocker tonight where all hell is about to break loose during our first ever Royal Rumble RPG event.</p>Go ahead and click a character to get this human demolition derby started!");
		}

		function hideAnnouncement() {
			$("#announcement-area").remove();
		}


		// clears divs
		$("#character").empty();
		$("#defenderArea").empty();
		$("#defender").empty();
		$("#status").empty();
		$("#attack").hide();

		// displays announcer
		displayJR();
		displayAnnouncement();


		$.each(wrestlerSelection, function (index, wrestler) {
			// div created so wrestler displays in correct area with "success" panel
			var newCharacterDiv = $("<div>").addClass("character panel panel-success").attr("id", wrestler.id);

			$("<div>").addClass("panel-heading").html(wrestler.name).appendTo(newCharacterDiv);
			$("<div>").addClass("panel-body").append("<img src='" + wrestler.img + "'>").appendTo(newCharacterDiv);
			$("<div>").addClass("panel-footer").append("<span class='hp'>" + wrestler.healthPoints + "</span>").appendTo(newCharacterDiv);

			// append new div to character selection
			$("#characterSelection").append(newCharacterDiv);
		});

		$(".character").on("click", function () {
			//hide announcer on click
			hideJR();
			hideAnnouncement();
			// when character has been selected
			if (wrestler === null) {
				$("#wrestling-ring").css({
					"margin-top": "auto"
				})
				//message below logo changes
				$("#select-text").empty().html("Let's get ready to rumble!");

				//get id of wrestler selected
				var wrestlerId = parseInt($(this).attr("id"));

				wrestler = wrestlerSelection[wrestlerId];

				// loop through wrestler array
				$.each(wrestlerSelection, function (index, wrestler) {
					// add unselected wrestlers to enemies array
					if (wrestler.id !== wrestlerId) {
						defenders.push(wrestler);
						//change enemy panel to yellow and move to defender area
						$("#" + wrestler.id).removeClass("character panel-success").addClass("defender panel-warning").appendTo("#defenderArea");
					} else {
						//essentially, selected wrestler is moved to player fight area
						$("#" + wrestler.id).appendTo("#player-fight-area");


					}
				});

				// add click event after defender class has been added. Bell sound rings.
				$('.defender').click(e => bellSound.play());
				$(".defender").on("click", function () {
					$("#attack").show();
					if (defender === null) {
						var defenderId = parseInt($(this).attr("id"));
						console.log(this);
						defender = wrestlerSelection[defenderId];
						//panel changes to red
						$("#" + defenderId).removeClass("character panel-warning").addClass("defender panel-danger").appendTo("#opponent-fight-area")


					}
				});
			}
		});

		$("#restart").hide();
	}

	startGame();

	// shake defender animation when hit
	function shakeDefender() {

		$("#" + defender.id).removeClass("animated shake");
		setTimeout(
			function () {
				$("#" + defender.id).addClass("animated shake");
			},
			25
		);
	}


	var slapSound = new Audio('./assets/audio/slap.mp3');
	//attack audio clicks when you hit attack button.
	$('#attack').click(e => slapSound.play());
	$("#attack").on("click", function () {
		shakeDefender($(this));


		// when wrestler has been selected; wrestler has not been defeated and there are still defenders left
		if (wrestler !== null && wrestler.healthPoints > 0 && defenders.length > 0) {
			// created variable to store game status messages
			var status = "";

			// when defender has been selected
			if (defender !== null) {
				// decrease defender HP by character attack power
				defender.healthPoints -= wrestler.attackPower;
				status += " Good God almighty! You attacked " + defender.name + " for " + wrestler.attackPower + " HP.<br>";


				// update defender HP
				$("#" + defender.id + " .hp").html(defender.healthPoints);

				// decrease character HP by defender counter attack power
				wrestler.healthPoints -= defender.counterAttackPower;
				status += defender.name + " attacked you back for " + defender.counterAttackPower + " HP. Look at the carnage!<br>";


				// update wrestler HP
				$("#" + wrestler.id + " .hp").html(wrestler.healthPoints);

				// increase wrestler attack power by base attack power
				wrestler.attackPower += wrestler.baseAttack;


				// when player is defeated
				if (wrestler.healthPoints <= 0) {
					status = "As God as my witness, " + defender.name + " just broke you in half. Game over!";
					//display reset button
					$("#restart").show();
				} else if (defender.healthPoints <= 0) { // when defender is defeated
					status = "You just whipped " + defender.name + " like a government mule. You can choose to fight another jabroni.";

					// clear defender selection

					$("#opponent-fight-area").empty();

					defender = null;


					// remove defeated defender from defender array

					defenders.splice(defenders.indexOf(defender), 1);

				}

				// player wins
				if (defenders.length === 0) {
					status = "I can't believe it, but you won. You must be tougher than a two-dollar steak!";
					$("#restart").show();
				}
			} else {
				status = "No jabroni selected.";
			}

			$("#status").html(status);
		}
	})
	var jimRoss = new Audio('./assets/audio/jimross.mp3');
	$('#restart').click(e => jimRoss.play());
	$("#restart").on("click", function () {
		$("#player-fight-area").empty();
		$("#opponent-fight-area").empty();
		$("#wrestling-ring").css({
			"margin-top": "250px"
		})
		$("#select-text").empty().html("Choose Your Wrestler");
		startGame();

	})

});