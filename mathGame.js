var player1 = new function () {
	this.name = "";
	this.livesLeft = 3;
	this.loseALife = function() {
		return this.livesLeft--;
	}
}

function getName() {
	return prompt("What's your name?");
}

//player1.name = getName();

var num1 = 3;
var num2 = 5;

while (player1.livesLeft > 0) {
	var guess = prompt("What is " + num1 + " + " + num2 + "?");
	if (Number(guess) == (num1+num2)) {
		alert('right, lives left are: ' + player1.livesLeft);
	} else {
		player1.loseALife();
		alert('wrong, lives left are: ' + player1.livesLeft);
		if (player1.livesLeft == 0) {
			alert('game over. you lose');
		}
	}
}