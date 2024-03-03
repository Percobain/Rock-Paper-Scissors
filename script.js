document.addEventListener('DOMContentLoaded', () => {
let computerWon = 0;
let playerWon = 0;
let gameOver = false;
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
var playerName = prompt("What's your name?");


let playRound = playerChoice => {
    if (gameOver == true) {
        return;
    } else {

        let computerChoice = Math.floor(Math.random() * 3);

        switch (computerChoice) {
            case 0:
                computerChoice = 'rock';
                break;
            case 1:
                computerChoice = 'paper';
                break;
            case 2:
                computerChoice = 'scissors';
                break;
        }

        if (playerChoice === "rock" && computerChoice === "paper" ||
            playerChoice === "paper" && computerChoice === "scissors" || 
            playerChoice === "scissors" && computerChoice === "rock") {
                
                h2.textContent = `You lose ${playerName}!  ${computerChoice} beats ${playerChoice}`;
                computerWon++;
                p.textContent = `Computer: ${computerWon} & ${playerName}: ${playerWon}`;

            }
        else if (playerChoice === "rock" && computerChoice === "scissors" ||
                playerChoice === "paper" && computerChoice === "rock" ||
                playerChoice === "scissors" && computerChoice === "paper") {
                    
                    h2.textContent = `You win ${playerName}! ${playerChoice} beats ${computerChoice}`;
                    playerWon++;
                    p.textContent = `Computer: ${computerWon} & ${playerName}: ${playerWon}`;

                }
        else {
            h2.textContent = `It's a tie!`;
        }

        if (computerWon === 5 || playerWon === 5) {
            gameOver = true;
        }

        if (computerWon === 5) {
            h2.textContent = `You lost the game ${playerName}😔!`;
            gameOver = true;
        }

        if (playerWon === 5) {
            h2.textContent = `You won the game ✨${playerName}✨!`;
            gameOver = true;
        }
    }
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));

});

