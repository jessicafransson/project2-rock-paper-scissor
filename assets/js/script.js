/** The logic of the game inside here */
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
}

/** Functions to the game inside here */
const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];
}

/** Functions to start the game */
playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `Moves Left:  ${10-moves}`);

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiseNumber];

            })

        /** How to decide winner */
        const winner = (player,computer) => {
            const result = document.querySelector('.result');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            player = player.toLowerCase ();
            if(player === computer) {
                result.textContent = 'Tie'
            }
            else if(player == 'rock'){
                if(computer == 'paper') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }else{
                    result.textContent = 'Player Won'
                    playerScore++;
                    playerScoreBoard.textContent = playerScore;
                }
            }

            else if(player == 'scissors') {
                if(computer == 'rock') {
                    result.textContent = 'Computer Won';
                    computerScore++;
                    computerScoreBoard.textContent = computerScore;
                }
            }
            
        }

        /** Who wins? */
        winner(this.innerText, computerChoice)

        /** Calling game over after 10 moves */

        if (moves == 10) {
            gameOver(playerOptions, movesLeft);
        }