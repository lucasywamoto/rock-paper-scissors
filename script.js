const btn = document.querySelectorAll('.btn');
const div = document.querySelector('#result');
const playerCount = document.querySelector('#player-score .count');
const roundCount = document.querySelector('#round .count');
const computerCount = document.querySelector('#computer-score .count');
let playerScore = 0;
let computerScore = 0;
let round = 0;

btn.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.id;
      computerSelection = getComputerChoice();
      result = playRound(playerSelection, computerSelection);
      div.textContent = result;

      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }

      round++;
      playerCount.textContent = playerScore;
      roundCount.textContent = round;
      computerCount.textContent = computerScore;

      if (playerScore == 5) {
        div.textContent = "You win the game!";
        reset();
      } else if (computerScore == 5) {
        div.textContent = "You lose the game!";
        reset();
      }
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "You lose! Paper beats Rock";
      } else {
        return "You win! Rock beats Scissors";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
      } else {
        return "You win! Paper beats Rock";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
      } else {
        return "You win! Scissors beats Paper";
      }
    } else {
      return "Invalid input! Please enter rock, paper, or scissors.";
    }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
}
  