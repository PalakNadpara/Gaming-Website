<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>GameZone</title>
</head>
<body>
    <header>
        <nav>
            <ul class="nav-list">
                <li><a href="index.php">Home</a></li>
                <li><a href="login.php">login</a></li>
                <li><a href="aboutus.html">About Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome!</h1>
        <h2>What would you like to play today?</h2>
        <div class="game-list">
            <div class="game-box">
                <a href="rockpaperscissors.html">
                    <img src="game1.png" alt="Game 1">
                    <h3>Rock Paper Scissors</h3>
                    <p>In the game of Rock Paper Scissors, you'll be facing off against the computer. Choose between rock, paper, and scissors as your move, and the computer will do the same. Remember, rock crushes scissors, scissors cuts paper, and paper covers rock. Outsmart the computer with your strategic choices to claim victory!</p>
                </a>
            </div>
            <div class="game-box">
                <a href="snakegame.html">
                    <img src="game2.png" alt="Game 2">
                    <h3>Snake Game</h3>
                    <p>In the Snake Game, you take on the role of a hungry snake on a mission to grow longer and score points. The game is set on a grid-like board, and your goal is simple: eat as much food as you can while avoiding obstacles and the deadly consequences of running into yourself.</p>
                </a>
            </div>
            <div class="game-box">
                <a href="tictactoe.html">
                    <img src="game3.jpg" alt="Game 3">
                    <h3>Tic Tac Toe</h3>
                    <p>It's you versus the computer in the classic game of Tic-Tac-Toe! Take turns marking your symbol, "X," on the 3x3 grid. Your objective is to get three of your symbols in a row—horizontally, vertically, or diagonally—before the computer does. Use your strategic thinking to either win or force the game into a draw against the computer opponent.</p>
                </a>
            </div>
            <div class="game-box">
                <a href="guessthenumber.html">
                    <img src="game4.jpg" alt="Game 4">
                    <h3>Guess the Number</h3>
                    <p>Take on the computer in the exciting Guess the Number game! The computer will think of a secret number within 1 to 100, and your mission is to guess it. After each of your guesses, the computer will give you a hint—whether your guess was too high, too low, or spot-on. Use these clues to narrow down your guesses and uncover the secret number before the computer's number prowess prevails!</p>
                </a>
            </div>
        </div>
    </main>
    <footer>
        <p>&copy; 2023 Game Website. All rights reserved.</p>
    </footer>
</body>
</html>