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
  const choices = ["Rock", "Paper", "Scissors"]; // Choice index 0, 1 ,2
  return choices[Math.floor(Math.random() * choices.length)];
};

const playGame = function () {
  // Declare score and final result variables
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  // Function to play a round
  const playRound = function (computerChoice, humanChoice) {
    let log;

    console.log(round);
    round++;

    const human = firstLetterLower(humanChoice);
    const computer = firstLetterLower(computerChoice);

    console.log(`The computer chose (${computerChoice})`);
    console.log(`You chose (${human})`);

    // Outcomes of rock paper scissors
    if (computer === "rock" && human === "paper") {
      humanScore++;
      log = `You win! Paper beats Rock`;
    } else if (computer === "rock" && human === "scissors") {
      computerScore++;
      log = `You lose! Rock beats scissors`;
    } else if (computer === "paper" && human === "rock") {
      computerScore++;
      log = `You lose! Paper beats Rock`;
    } else if (computer === "paper" && human === "scissors") {
      humanScore++;
      log = `You win! Scissors beats Paper`;
    } else if (computer === "scissors" && human === "rock") {
      humanScore++;
      log = `You win! Rock beats Scissors`;
    } else if (computer === "scissors" && human === "paper") {
      computerScore++;
      log = `You lose! Scissors beats Paper`;
    } else {
      log = `Draw!`;
    }
    result.textContent = log;
    score.textContent = `${humanScore} : ${computerScore}`;
    humChoice.textContent = humanChoice;
    comChoice.textContent = computerChoice;

    // Determine the final victor by comparing scores
    if (humanScore === 5) {
      result.textContent = `You, the player win!`;
    } else if (computerScore === 5) {
      result.textContent = `You lost to the Computer!`;
    }
    return;
  };

  // Rock Paper Scissors UI

  btnContainer.addEventListener("click", (e) => {
    if (playAgain.classList.contains("display"))
      playAgain.classList.toggle("display");

    let id = e.target.classList.value;
    // console.log(id);

    if (!e.target.matches("button") || humanScore >= 5 || computerScore >= 5)
      return;

    if (id === "btn-rock") {
      playRound(getComputerChoice(), "Rock");
    } else if (id === "btn-paper") {
      playRound(getComputerChoice(), "Paper");
    } else if (id === "btn-scissors") {
      playRound(getComputerChoice(), "Scissors");
    }
  });
};

playAgain.addEventListener("click", (e) => {
  result.textContent = ``;
  score.textContent = `0 : 0`;
  playGame();
});

playGame();

function firstLetterLower(string) {
  return string[0].toLowerCase() + string.slice(1);
}

function checkWinner() {}

console.log(firstLetterLower("Hello"));
