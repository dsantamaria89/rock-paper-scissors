/*
The Odin Project
---------------------------------------------------------------

Rock Paper Scissors Game 

User will play Rock Paper Scissors against computer opponent.

----------------------------------------------------------------

*/

//* user and computer choices
let userChoice;
let computerChoice;

//ComputerPlay Function.
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
    case 1:
      return "ROCK";
      break;
    case 2:
      return "PAPER";
      break;
    case 3:
      return "SCISSORS";
  }
}

//userPlay Function
function userPlay() {
  let keepAsking = true;

  while (keepAsking) {
    userChoice = prompt("Enter Rock, Paper or Scissors");
    userChoice = userChoice.toUpperCase();
    if (
      userChoice !== "ROCK" &&
      userChoice !== "PAPER" &&
      userChoice !== "SCISSORS"
    ) {
      keepAsking = true;
      alert("You must enter either rock, paper, or scissors!");
    } else {
      keepAsking = false;
    }
  }
  return userChoice;
}

//playRound Function
function playRound(user, computer) {
  let keepPlaying = true;
  let message;

  while (keepPlaying) {
    if (user === "ROCK" && computer === "SCISSORS") {
      message = "You win!";
      keepPlaying = false;
    } else if (user === "ROCK" && computer === "PAPER") {
      message = "You lose!";
      keepPlaying = false;
    } else if (user === "PAPER" && computer === "SCISSORS") {
      message = "You lose!";
      keepPlaying = false;
    } else if (user === "PAPER" && computer === "ROCK") {
      message = "You win!";
      keepPlaying = false;
    } else if (user === "SCISSORS" && computer === "ROCK") {
      message = "You Lose!";
      keepPlaying = false;
    } else if (user === "SCISSORS" && computer === "PAPER") {
      message = "You Win!";
      keepPlaying = false;
    }
  }

  return message;
}

userChoice = userPlay();
console.log(userChoice);
computerChoice = computerPlay();

let result = playRound(userChoice, computerChoice);

console.log(result);
