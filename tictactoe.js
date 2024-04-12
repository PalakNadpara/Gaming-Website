// Initialize the game board
const board = ['', '', '', '', '', '', '', '', ''];
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const ticTacToeBoard = document.getElementById('tic-tac-toe-board');
const playerScore = document.getElementById('player-score');
const cpuScore = document.getElementById('cpu-score');
const tieScore = document.getElementById('tie-score');
const PlacingSound = new Audio('placingXorO.mp3');
const ComputerWins = new Audio('FailInGTN.mp3');


const playerSymbol = 'X';
const cpuSymbol = 'O';
let currentPlayer = playerSymbol;
let gameOver = true;
let playerWins = 0;
let cpuWins = 0;
let ties = 0;

window.addEventListener('load', () => {
    resetGame(); 
});
// Event listeners for player's move
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (currentPlayer === playerSymbol && !gameOver && board[index] === '') {
            PlacingSound.play();
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;

            cell.style.fontWeight = 'bold'; 
            cell.textContent = currentPlayer;
            cell.style.color = '#00cc99'; 

            if (checkGameOver()) {
                gameOver = true;
            } else {
                currentPlayer = cpuSymbol;
                if (!gameOver) {
                    setTimeout(() => {
                        makeComputerMove();
                    }, 500);
                }
            }
        }
    });
});

// Reset game
resetButton.addEventListener('click', resetGame);

function resetGame() {
    board.fill('');
    cells.forEach(cell => {
        cell.textContent = '';
        currentPlayer = playerSymbol;
    });
    gameOver = false;
}

// Minimax algorithm for computer's move
function makeComputerMove() {
    if (gameOver) {
        return;
    }

    const bestMove = minimax(board, cpuSymbol);
    PlacingSound.play();
    board[bestMove.index] = cpuSymbol;
    cells[bestMove.index].textContent = cpuSymbol;

    cells[bestMove.index].style.fontWeight = 'bold'; 
    cells[bestMove.index].style.color = 'orange'; 
    cells[bestMove.index].textContent = cpuSymbol;

    if (checkGameOver()) {
        gameOver = true;
    } else {
        currentPlayer = playerSymbol;
    }
}

// Minimax algorithm
function minimax(newBoard, player) {
    const availableMoves = newBoard
        .map((cell, index) => cell === '' ? index : -1)
        .filter(index => index !== -1);

    if (checkWin(newBoard, playerSymbol)) {
        return { score: -1 };
    } else if (checkWin(newBoard, cpuSymbol)) {
        return { score: 1 };
    } else if (availableMoves.length === 0) {
        return { score: 0 };
    }

    const moves = [];
    
    for (let i = 0; i < availableMoves.length; i++) {
        const move = {};
        move.index = availableMoves[i];
        newBoard[availableMoves[i]] = player;

        if (player === cpuSymbol) {
            const result = minimax(newBoard, playerSymbol);
            move.score = result.score;
        } else {
            const result = minimax(newBoard, cpuSymbol);
            move.score = result.score;
        }

        newBoard[availableMoves[i]] = '';
        moves.push(move);
    }

    let bestMove;
    if (player === cpuSymbol) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}

// Check for a win
function checkWin(board, player) {
    const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === player) {
            return true;
        }
    }
    return false;
}

// Check for a tie
function checkTie(board) {
    return board.every(cell => cell !== '');
}

function checkGameOver() {
    if (checkWin(board, playerSymbol)) {
        return true;
    }
    if (checkWin(board, cpuSymbol)) {
        setTimeout(() => {
            ComputerWins.play();
            alert(`CPU (${cpuSymbol}) wins! Click "Reset Game" to play again.`);
            cpuWins++;
            cpuScore.textContent = `CPU (${cpuSymbol}): ${cpuWins}`;
            cpuScore.style.color = 'orange';
        }, 100);
        return true;
    }
    if (checkTie(board)) {
        setTimeout(() => {
            
            ties++;
            tieScore.textContent = `Ties: ${ties}`;
            tieScore.style.color = 'rgb(0,229,255)'
            alert('It\'s a tie! Click "Reset Game" to play again.');
        }, 100);
        return true;
    }
    return false;
}
