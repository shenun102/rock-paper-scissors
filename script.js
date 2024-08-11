// Declarations

const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorBtn = document.querySelector(".btn-scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const playAgain = document.querySelector(".play-again");

// Rock Paper Scissors Functionality
// Function to generate computer choice
const getComputerChoice = function () {
  const num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else if (num === 3) {
    return "scissors";
  }
};

// Function to prompt user choice
// Unneeded after adding UI elements
// const getHumanChoice = function () {
//   const humanChoice = parseInt(
//     prompt(`
//     1: Rock
//     2: Paper
//     3: Scissors`)
//   );
//   if (humanChoice === 1) {
//     return "Rock";
//   } else if (humanChoice === 2) {
//     return "Paper";
//   } else if (humanChoice === 3) {
//     return "Scissors";
//   }
// };

const playGame = function () {
  // Declare score and final result variables
  let humanScore = 0;
  let computerScore = 0;
  let finalScore;
  let round;

  // Function to play a round
  const playRound = function (computerChoice, humanChoice) {
    const human = humanChoice.toLowerCase();
    console.log(`The computer chose (${computerChoice})`);
    console.log(`You chose (${human})`);

    // Outcomes of rock paper scissors
    if (computerChoice === "rock" && human === "paper") {
      humanScore++;
      result.textContent = `You won! The score is:`;
      score.textContent = `${humanScore}:${computerScore}`;
      // console.log(`You won! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "rock" && human === "scissors") {
      computerScore++;
      result.textContent = `You lost! The score is:`;
      score.textContent = `${humanScore}:${computerScore}`;
      // console.log(`You lost! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "paper" && human === "rock") {
      computerScore++;
      result.textContent = `You lost! The score is:`;
      score.textContent = `${humanScore}:${computerScore}`;
      // console.log(`You lost! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "paper" && human === "scissors") {
      humanScore++;
      result.textContent = `You won! The score is:`;
      score.textContent = `${humanScore}:${computerScore}`;
      // console.log(`You won! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "scissors" && human === "rock") {
      humanScore++;
      result.textContent = `You won! The score is:`;
      score.textContent = `${humanScore}:${computerScore}`;
      // console.log(`You won! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "scissors" && human === "paper") {
      computerScore++;
      result.textContent = `You lost! The score is`;
      score.textContent = `${humanScore}:${computerScore}`;
      // console.log(`You lost! The score is ${humanScore}:${computerScore}`);
    } else {
      result.textContent = `Its a draw! The score is:`;
      console.log(`Draw!`);
    }
  };

  // Rock Paper Scissors UI

  rockBtn.addEventListener("click", (e) => {
    if (playAgain.classList.contains("display"))
      playAgain.classList.toggle("display");
    console.log("Rock");
    if (humanScore < 5 && computerScore < 5) {
      playRound(getComputerChoice(), "Rock");
    } else {
      // Determine the final victor by comparing scores
      if (humanScore > computerScore) {
        result.textContent = `You, the player win!`;
        // } else if (humanScore < computerScore) {
        //   finalScore = `You lost to the Computer!`;
      } else result.textContent = `You lost to the Computer!`;
    }
  });

  paperBtn.addEventListener("click", (e) => {
    if (playAgain.classList.contains("display"))
      playAgain.classList.toggle("display");
    console.log("Rock");
    if (humanScore < 5 && computerScore < 5) {
      playRound(getComputerChoice(), "Paper");
    } else {
      // Determine the final victor by comparing scores
      if (humanScore > computerScore) {
        result.textContent = `You, the player win!`;
        // } else if (humanScore < computerScore) {
        //   finalScore = `You lost to the Computer!`;
      } else result.textContent = `You lost to the Computer!`;
    }
  });

  scissorBtn.addEventListener("click", (e) => {
    if (playAgain.classList.contains("display"))
      playAgain.classList.toggle("display");
    console.log("Rock");
    if (humanScore < 5 && computerScore < 5) {
      playRound(getComputerChoice(), "Scissors");
    } else {
      // Determine the final victor by comparing scores
      if (humanScore > computerScore) {
        result.textContent = `You, the player win!`;
        // } else if (humanScore < computerScore) {
        //   finalScore = `You lost to the Computer!`;
      } else result.textContent = `You lost to the Computer!`;
    }
  });
};

playAgain.addEventListener("click", (e) => {
  result.textContent = ``;
  score.textContent = `0 : 0`;
  playGame();
});

playGame();
