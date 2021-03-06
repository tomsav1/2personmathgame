var player1 = new function () {
	this.name = "";
	this.livesLeft = 3;
	this.loseALife = function() {
		return this.livesLeft--;
	}
}

var player2 = new function () {
	this.name = "";
	this.livesLeft = 3;
	this.loseALife = function() {
		return this.livesLeft--;
	}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getName(playerNum) {
	return prompt("What's your name " + playerNum + "?");
}

function genQuestion(opNum) {
    var num1 = getRandomInt(1,20);
    var num2 = getRandomInt(1,20);
    var guess;
    
    switch(opNum) {
        case 1:
            guess = prompt("Your question is: " + num1 + " + " + num2);
            if (Number(guess) == (num1+num2)) {
                return true;
            } else {
                return false;
            }
            break;
        case 2:
            guess = prompt("Your question is: " + num1 + " - " + num2);
            if (Number(guess) == (num1-num2)) {
                return true;
            } else {
                return false;
            }
            break;
        default:
            guess = prompt("Your question is: " + num1 + " * " + num2);
            if (Number(guess) == (num1*num2)) {
                return true;
            } else {
                return false;
            }
            break;
    }      
}   
player1.name = getName("player1");
player2.name = getName("player2");
var playerTurn = 1;

while ((player1.livesLeft > 0) && (player2.livesLeft > 0)) {
	if (playerTurn == 1) {
		playerTurn = 2;
		var evalResponse = genQuestion(getRandomInt(1,3))
		if (evalResponse == true) {
			alert("Right " + player1.name + "! You still have " + player1.livesLeft + " left.");
		} else {
			player1.loseALife();
			alert("Wrong " + player1.name + "! You now have " + player1.livesLeft + " left.");
			if (player1.livesLeft == 0) {
				alert("You lose the game!");
			}
		}
	} else {
		playerTurn = 1;
		var evalResponse = genQuestion(getRandomInt(1,3))
		if (evalResponse == true) {
			alert("Right " + player2.name + "! You still have " + player2.livesLeft + " left.");
		} else {
			player2.loseALife();
			alert("Wrong " + player2.name + "! You now have " + player2.livesLeft + " left.");
			if (player2.livesLeft == 0) {
				alert("You lose the game!");
			}
		}
	}
}