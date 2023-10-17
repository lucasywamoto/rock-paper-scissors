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
   
function game() {

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Enter rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
        playerScore++;
        } else if (result.includes("lose")) {
        computerScore++;
        } else {
            --i;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

game();
  