/** DOM manipluators */
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let currentUserScore = document.getElementById('user-score');
let currentComputerScore = document.getElementById('computer-score');
let updatedUserScore = document.getElementById('user-score');
let updatedComputerScore = document.getElementById('computer-score');


const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';
const options = [ROCK, PAPER, SCISSORS];


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
    } else if (computerChoice === ROCK && userChoice === SCISSORS) {
        result = LOSE_TEXT;
    } else if (computerChoice === PAPER && userChoice === SCISSORS) {
        result = WIN_TEXT;
    } else if (computerChoice === PAPER && userChoice === ROCK) {
        result = LOSE_TEXT;
    } else if (computerChoice === SCISSORS && userChoice === ROCK) {
        result = WIN_TEXT;
    } else if (computerChoice === SCISSORS && userChoice === PAPER) {
        result = LOSE_TEXT;
    }

    resultDisplay.innerHTML = result;
}
/**Function to let user know of won game*/

function incrementUserScore() {
    let updatedUserScore = parseInt(currentUserScore.innerText);
    updatedUserScore++;
    currentUserScore.innerText = updatedUserScore;
    if (updatedUserScore === 5) {
        Swal.fire('Congratulations, you won!');
        resetScore();
        resetChoices();
        document.getElementsByTagName("body")[0].classList.toggle("swal2-height-auto");
    }
}

/** Function to let user know of lost game */
function incrementComputerScore() {
    let updatedComputerScore = parseInt(currentComputerScore.innerText);
    updatedComputerScore++;
    currentComputerScore.innerText = updatedComputerScore;
    if (updatedComputerScore === 5) {
        Swal.fire('Sorry, you lost this one.');
        resetScore();
        resetChoices();
        document.getElementsByTagName("body")[0].classList.toggle("swal2-height-auto");

    }
}

/** Reset score and game */

function resetScore() {
    updatedUserScore.innerText = 0;
    updatedComputerScore.innerText = 0;
    resultDisplay.innerHTML = "";
}

function resetChoices() {
    userChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
}
