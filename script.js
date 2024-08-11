// Declarations

const btnContainer = document.querySelector(".container-2");
const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorBtn = document.querySelector(".btn-scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const playAgain = document.querySelector(".play-again");
const humChoice = document.querySelector(".h-choice");
const comChoice = document.querySelector(".c-choice");

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

const playGame = function () {
  // Declare score and final result variables
  let humanScore = 0;
  let computerScore = 0;
  let finalScore;
  let round;

  // Function to play a round
  const playRound = function (computerChoice, humanChoice) {
    let log;
    const human = humanChoice.toLowerCase();

    console.log(`The computer chose (${computerChoice})`);
    console.log(`You chose (${human})`);

    // Outcomes of rock paper scissors
    if (computerChoice === "rock" && human === "paper") {
      humanScore++;
      log = `You win! Paper beats Rock`;
    } else if (computerChoice === "rock" && human === "scissors") {
      computerScore++;
      log = `You lose! Rock beats scissors`;
    } else if (computerChoice === "paper" && human === "rock") {
      computerScore++;
      log = `You lose! Paper beats Rock`;
    } else if (computerChoice === "paper" && human === "scissors") {
      humanScore++;
      log = `You win! Scissors beats Paper`;
    } else if (computerChoice === "scissors" && human === "rock") {
      humanScore++;
      log = `You win! Rock beats Scissors`;
    } else if (computerChoice === "scissors" && human === "paper") {
      computerScore++;
      log = `You lose! Scissors beats Paper`;
    } else {
      log = `Draw!`;
    }
    result.textContent = log;
    score.textContent = `${humanScore}:${computerScore}`;
    humChoice.textContent = humanChoice;
    comChoice.textContent = computerChoice;
  };

  // Rock Paper Scissors UI

  btnContainer.addEventListener("click", (e) => {
    if (playAgain.classList.contains("display"))
      playAgain.classList.toggle("display");

    let id = e.target.classList.value;
    console.log(id);

    if (e.target.matches("button"))
      if (humanScore < 5 && computerScore < 5) {
        if (id === "btn-rock") {
          playRound(getComputerChoice(), "Rock");
        } else if (id === "btn-paper") {
          playRound(getComputerChoice(), "Paper");
        } else if (id === "btn-scissors") {
          playRound(getComputerChoice(), "Scissors");
        }
      } else {
        // Determine the final victor by comparing scores
        if (humanScore > computerScore) {
          result.textContent = `You, the player win!`;
        } else if (humanScore < computerScore) {
          result.textContent = `You lost to the Computer!`;
        }
      }
  });
};

playAgain.addEventListener("click", (e) => {
  result.textContent = ``;
  score.textContent = `0 : 0`;
  playGame();
});

playGame();
