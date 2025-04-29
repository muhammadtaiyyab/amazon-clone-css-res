// Create a game where you can start without any random game Number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum = 25;

let userNum = prompt("Guess the game number: ");

// console.log(userNum);

while (userNum != gameNum) {
    userNum = prompt("You entered the wrong number. Guess again: ");
}

console.log("Congratulations! You guessed the right number")