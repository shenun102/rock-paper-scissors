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
const getHumanChoice = function () {
  const humanChoice = parseInt(
    prompt(`
    1: Rock
    2: Paper
    3: Scissors`)
  );
  if (humanChoice === 1) {
    return "Rock";
  } else if (humanChoice === 2) {
    return "Paper";
  } else if (humanChoice === 3) {
    return "Scissors";
  }
};

// Function to initiate game
const playGame = function () {
  // Declare score and final result variables
  let humanScore = 0;
  let computerScore = 0;
  let finalScore;

  // Function to play a round
  const playRound = function (computerChoice, humanChoice) {
    const human = humanChoice.toLowerCase();
    console.log(`The computer chose (${computerChoice})`);
    console.log(`You chose (${human})`);

    // Outcomes of rock paper scissors
    if (computerChoice === "rock" && human === "paper") {
      humanScore++;
      console.log(`You won! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "rock" && human === "scissors") {
      computerScore++;
      console.log(`You lost! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "paper" && human === "rock") {
      computerScore++;
      console.log(`You lost! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "paper" && human === "scissors") {
      humanScore++;
      console.log(`You won! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "scissors" && human === "rock") {
      humanScore++;
      console.log(`You won! The score is ${humanScore}:${computerScore}`);
    } else if (computerChoice === "scissors" && human === "paper") {
      computerScore++;
      console.log(`You lost! The score is ${humanScore}:${computerScore}`);
    } else {
      console.log(`Draw!`);
    }

    // Determine the final victor by comparing scores
    if (humanScore > computerScore) {
      finalScore = `You, the player win!`;
    } else if (humanScore < computerScore) {
      finalScore = `You lost to the Computer!`;
    } else {
      finalScore = `It's a draw!`;
    }
  };

  // Play 5 rounds
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());
  playRound(getComputerChoice(), getHumanChoice());

  // Final victor announcement
  console.log(
    `The final score is ${humanScore}:${computerScore}, ${finalScore}`
  );
};

playGame();
