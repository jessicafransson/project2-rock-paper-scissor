/** DOM manipluators */
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userScoreDisplay = document.getElementById('user-score');
let computerScoreDisplay = document.getElementById('computer-score');
let userScore = 0;
let computerScore = 0;

const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
const options = [ROCK, PAPER, SCISSORS];

/** const for popup win/lose */
const favDialog = document.getElementById('favDialog');
const confirmBtn = favDialog.querySelector('#confirmBtn');


/** Display the computer and user choices */

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        const userChoice = e.currentTarget.id;
        userChoiceDisplay.innerHTML = userChoice;
        const computerChoice = generateComputerChoice();
        getResult(userChoice, computerChoice);
    });
});

/** How to get the computer choice
 * Code from Code with Ania Kubów */
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const computerChoice = options[randomNumber - 1];
    computerChoiceDisplay.innerHTML = computerChoice;
    return computerChoice;
}

/** How to get the results, code inspiration from Code with Ania Kubów */
function getResult(userChoice, computerChoice) {
    let result = '';
    const WIN_TEXT = 'You won!';
    const LOSE_TEXT = 'You lost!';

    if (computerChoice === userChoice) {
        result = 'Its a draw!';
    } else if (computerChoice === ROCK && userChoice === PAPER) {
        result = WIN_TEXT;
        userScore++;
    } else if (computerChoice === ROCK && userChoice === SCISSORS) {
        result = LOSE_TEXT;
        computerScore++;
    } else if (computerChoice === PAPER && userChoice === SCISSORS) {
        result = WIN_TEXT;
        userScore++;
    } else if (computerChoice === PAPER && userChoice === ROCK) {
        result = LOSE_TEXT;
        computerScore++;
    } else if (computerChoice === SCISSORS && userChoice === ROCK) {
        result = WIN_TEXT;
        userScore++;
    } else if (computerChoice === SCISSORS && userChoice === PAPER) {
        result = LOSE_TEXT;
        computerScore++;
    }

    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    displayWin(userScore, computerScore);

}

/** decide winner/loser  */

function displayWin(userScore, computerScore) {
    if (userScore > 1) {
        favDialog.showModal();
    }
}

/** Display end of game, user winner or computer winner 
 *  function displayWin(userScore, computerScore) {
    if (userScore > 1) {
        alert("Awesome, you won! Press Ok to play again."); {
        if response = y 
        Log "Let's go!"
        reset();
        restartGame();
    }
    } else if (computerScore > 1) {
        alert("Too bad, you lost this one! Press Ok to play again."); {
        userScore = 0;
        computerScore = 0;
    }
}
}
*/



/** Function to reset game 
 * function playagain() {
    var response = prompt("Play again? (y) or (n)");
    if (response == 'y')
    {
        alert("Let's go!")
    }
    else if (response == 'n')
    {
        alert("Okay, see you next time!")
    }
    reset();
    startGame();
    return;
}
*/
