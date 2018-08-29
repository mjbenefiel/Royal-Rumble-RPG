$(document).ready(function(){

var wrestlersArr = [

andreTheGiant = {
	name: "Andre the Giant",
	healthPoints: 180,
	attackPower: 10,
	counterAttackPower: 4,
},

hulkHogan = {
	name: "Hulk Hogan",
	healthPoints: 150,
	attackPower: 12,
	counterAttackPower: 6,
},

machoMan = {
	name: "Macho Man",
	healthPoints: 120,
	attackPower: 8,
	counterAttackPower: 5,
},

ultimateWarrior = {
	name: "Ultimate Warrior",
	healthPoints: 100,
	attackPower: 15,
	counterAttackPower: 9,

}]; // end of var wrestlersArr


///NEED GAME RESET



$(function wrestlerSelect(){
	$("#Andre-the-Giant").on("click", function() {
	  console.log("Andre is selected")
	 
	$("#Andre-the-Giant").appendTo("#player-fight-area");
	$("#player-name").html(andreTheGiant.name);
	$("#player-hp").html("Power Level");
	$("#player-total-hp").html(andreTheGiant.healthPoints);
	  
		});	
	




////End of beginning function
});
});	

