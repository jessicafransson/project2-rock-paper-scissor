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

/** Deciding winner */

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(computerSelection)
}