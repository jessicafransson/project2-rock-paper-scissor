/** DOM manipluators */
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const resetDisplay = document.getElementById('reset-global');

let userScoreDisplay = document.getElementById('user-score');
let computerScoreDisplay = document.getElementById('computer-score');
let userScore = 0;
let computerScore = 0;

const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
const options = [ROCK, PAPER, SCISSORS];


/** Display the computer and user choices */

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        const userChoice = e.currentTarget.id;
        if (userChoice !== 'confirmBtn') {
            userChoiceDisplay.innerHTML = userChoice;
            const computerChoice = generateComputerChoice();
            getResult(userChoice, computerChoice);
        } else {
            userChoiceDisplay.innerHTML = '';
            computerChoiceDisplay.innerHTML = '';
            resultDisplay.innerHTML = '';
        }

    });
});

/** How to get the computer choice
 * Codeinspiration from Code with Ania Kubów */
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const computerChoice = options[randomNumber - 1];
    computerChoiceDisplay.innerHTML = computerChoice;
    return computerChoice;
}

/** Display win/lose
 *  */

function displayWin(userScore, computerScore) {
    if (userScore >= 5) {
        userScore,
        computerScore = playAgainWinner(userScore, computerScore);
    }
    else if (computerScore >= 5) {
        userScore,
        computerScore = playAgainLoser(userScore, computerScore);
    }

    return userScore, computerScore;

}

/** How to reset the game */
function playAgainWinner(userScore, computerScore) {
    if (!winnerDialog.open) {
        winnerDialog.showModal();
    }
    userScore, computerScore = resetGlobal(userScore, computerScore);
    return userScore, computerScore;
}

function playAgainLoser(userScore, computerScore) {
    if (!loserDialog.open) {
        loserDialog.showModal();
    }
    userScore, computerScore = resetGlobal(userScore, computerScore);
    return userScore, computerScore;
}

function resetGlobal() {
    userScore = 0;
    computerScore = 0;
    return userScore, computerScore;
}

/** How to get the results, code inspiration from Code with Ania Kubów */
function getResult(userChoice, computerChoice) {
    let result = '';
    const WIN_TEXT = 'Win!';
    const LOSE_TEXT = 'Lose!';

    if (computerChoice === userChoice) {
        result = 'Draw!';
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
    userScore, computerScore = displayWin(userScore, computerScore);
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;

}