/*
The Odin Project
---------------------------------------------------------------

Rock Paper Scissors Game 

User will play Rock Paper Scissors against computer opponent.

----------------------------------------------------------------

*/

//* variables
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;
let turns = 5;

//*------Function Definiton/Declarations--------------------

//*ComputerPlay Function.
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

//*userPlay Function
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

  if (user === "ROCK" && computer === "SCISSORS") {
    message = "You win!";
  } else if (user === "ROCK" && computer === "PAPER") {
    message = "You lose!";
  } else if (user === "PAPER" && computer === "SCISSORS") {
    message = "You lose!";
  } else if (user === "PAPER" && computer === "ROCK") {
    message = "You win!";
  } else if (user === "SCISSORS" && computer === "ROCK") {
    message = "You Lose!";
  } else if (user === "SCISSORS" && computer === "PAPER") {
    message = "You Win!";
  } else if (user === computer) {
    message = `Both chose ${user}, no winner`;
  }

  return message;
}

//*game Function
function game() {
  for (let i = 0; i < turns; i++) {
    userChoice = userPlay();
    computerChoice = computerPlay();
    result = playRound(userChoice, computerChoice);

    if (result === "You win!") {
      userScore++;
    } else {
      computerScore++;
    }
  }

  console.log(`ScoreBoard - User:${userScore} Computer:${computerScore}`);

  if (userScore > computerScore) {
    console.log(`You win by a score of ${userScore} to ${computerScore}`);
  } else {
    console.log(
      `You lose. Computer beats you by a score of ${computerScore} to ${userScore}`
    );
  }
}

//*----------------------------------------------------------
//* Game begins
//*----------------------------------------------------------

game();

//*End--------------------------------------------------------
