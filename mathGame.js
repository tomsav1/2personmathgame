var player1 = new function () {
	this.name = "";
	this.livesLeft = 3;
	this.loseALife = function() {
		return this.livesLeft--;
	}
}

function getName() {
	return prompt("What's your name?")
}
debugger;
player1.name = getName();