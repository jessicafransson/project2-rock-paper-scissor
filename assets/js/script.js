/**DOM manipluators */
const buttons = document.getElementsByTagName('button');
const startGame = document.getElementById('play-game');
let r = document.getElementById('rock');
let p = document.getElementById('paper');
let s = document.getElementById('scissors');
const winBox = document.getElementById('win-box');
const loseBox = document.getElementById('lose-box');
const play = document.getElementById('play-again');
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const computerOptions = ['rock', 'paper', 'scissors'];


/** The logic of the game inside here */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}

/** Section for computer to make a random choice */
function generateComputerChoice() {
    let choices = ['rock', 'paper','scissors'];
    let randomNumber = Math.floor(Math.random() * choices.lenght);
    return choices[randomNumber];
}

/** Functions to start the game */
playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `MovesLeft: ${10-moves}`);

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiseNumber];

            })

        /** How to decide winner */
        const winner = (player, computer) => {
            const result = document.querySelector('.result');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            player = player.toLowerCase();
            if (player === computer) {
                result.textContent = 'Tie'
            } else if (player == 'rock') {
                if (computer == 'paper') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                } else {
                    result.textContent = 'Player Won'
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            } else if (player == 'scissors') {
                if (computer == 'rock') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                } else {
                    result.textContent = 'Player Won';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }
            } else if (player == 'paper') {
                if (computer == 'scissors') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                } else {
                    result.textContent = 'Player Won';
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            }
        }

        /** Who wins? */
        winner(this.innerText, computerChoice)

        /** Calling game over after 10 moves */

        if (moves == 10) {
            gameOver(playerOptions, movesLeft);
        }

        /** Functions to display when game over */
        const gameOver = (playerOptions,movesLeft) => {
            const chooseMove = document.querySelector('.result');
            const reloadBtn = document.querySelector('.reload');

            playerOptions.forEach(option => {
                option.style.display = 'none';
            })

            chooseMove.innerText = 'Game over!'
            movesLeft.style.display = 'none';

            if(playerScore > computerScore) {
                result.style.fontSize = '2rem';
                result.innerText = 'You won 🏆';
                result.style.color = '#dca99a'
            }
            else if(playerScore < computerScore) {
                result.style.fontSize = '2rem';
                result.innerText = 'You lost 😞';
                result.style.color = '	#fe2e2e'
            }
            else{
                result.style.fontSize = '2rem';
                result.innerText = 'Its a tie!';
                result.style.color = '#5b3849'
            }
            reloadBtn.innerText = 'Play Again!';
            reloadBtn.style.display = 'flex';
            reloadBtn.addEventListener('click', () => {
                window.location.reload();
            })
        }

        /** Game function */
        game();

        /** Function playGame inside the game */

        playGame();
