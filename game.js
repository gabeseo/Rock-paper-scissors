// game

function game(playerSelection) {
    var choice = ['Rock', 'Paper', 'Scissor']
    var computerSelection = choice[Math.floor(Math.random() * 3)];

    alert('You picked: ' + playerSelection + '\nComputer picked: ' + computerSelection + '.');

    var result = Winner(playerSelection, computerSelection);

    alert(result);
}


// Winner Selection
function Winner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'; }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Scissor' && computerSelection === 'Rock') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissor')
    ) {
        return 'You lose'; }
    else {
        return 'You win'; }
}

{return result}

function bo5() {
    var playerScore = 0
    var computerScore = 0
    var roundsToWin = 3

    
}