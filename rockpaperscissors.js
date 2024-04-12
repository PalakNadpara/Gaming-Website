// Define variables to keep track of scores
let playerScore = 0;
let computerScore = 0;

// Get references to HTML elements
const playerScoreElement = document.getElementById("Player-score");
const computerScoreElement = document.getElementById("Computer-score");
const resultTextElement = document.getElementById("ResultText");
const perRoundResultElement = document.getElementById("PerRoundResult");
const PlayerWin = new Audio('successInGTN.mp3');
const ComputerWin = new Audio('FailInGTN.mp3');

// Get references to choice buttons
const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorButton = document.getElementById("Scissor");

// Function to generate the computer's choice
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a round of the game
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    const playerChoiceElement = document.querySelector(`#${playerSelection}`);
    
    playerChoiceElement.classList.add("selected");
    setTimeout(() => {
        playerChoiceElement.classList.remove("selected");
    }, 300);

    if (playerSelection === computerSelection) {
        perRoundResultElement.textContent = "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")
    ) {
        PlayerWin.play();
        perRoundResultElement.textContent = "You win!";
        playerScore++;
    } else {
        ComputerWin.play();
        perRoundResultElement.textContent = "Computer wins!";
        computerScore++;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultTextElement.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
}

// Event listeners for the choice buttons
rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorButton.addEventListener("click", () => playRound("Scissor"));
