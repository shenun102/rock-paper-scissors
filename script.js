let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else if (num === 3) {
    return "Scissors";
  }
};

console.log(getComputerChoice());

const getHumanChoice = function () {
  const humanChoice = parseInt(
    prompt(`
    Pick a number 1, 2 or 3
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

console.log(getHumanChoice());
