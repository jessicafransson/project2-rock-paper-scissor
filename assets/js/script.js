/**DOM manipluators */
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissor',
        beats: 'paper'
    }
]

/**Specify how to select the different buttons*/

selectionButtons.forEach(selectionButtons => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataSet.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selectionName)
    })
})

/** Random selection form computer to game */
function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

function makeSelection(selection) {
    const computerSelection = randomSelection()
    console.log(computerSelection)
}

/** Deciding winner */

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

/**  */