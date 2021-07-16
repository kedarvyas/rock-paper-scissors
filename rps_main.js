let pScore = 0;
let cScore = 0;
let res;
let choices = ['Rock', 'Paper', 'Scissors']
const buttons = document.querySelectorAll('input')

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]; 
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
/*
function playRound(playerSelection) {
    let computerSelection = computerPlay()
    res = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        pScore += 1
        res = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + pScore + "<br>Computer score: " + cScore)

        if (pScore == 5) {
            res += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        res = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + pScore + "<br>Computer score: " + cScore)
    }
    else {
        cScore += 1
        res = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + pScore + "<br>Computer score: " + cScore)

        if (cScore == 5) {
            res += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = res
    return
}
*/
function playRound(playerSelection) {

    //playerSelection = window.prompt("Please select an option: Rock, Paper, Scissors", '');
    computerSelection = computerPlay();
    res = "";

    //playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection === "Paper") {
            cScore++;
            res = "Oops! Paper beats rock!" + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
        else if (computerSelection === "Scissors") {
            pScore++;
            res = "Nice! Rock beats scissors!" + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
        else {
            res = "It's a Tie!" + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection === "Rock") {
            pScore++;
            res = "Woohoo! Paper beats rock!";
        }
        else if (computerSelection === "Scissors") {
            cScore++;
            res = "Unlucky. Scissors beats paper.";
        }
        else {
            res = "Tie.";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection === "Rock") {
            cScore++;
            res = "Not this time. Rock beats scissors.";
        }
        else if (computerSelection === "Paper") {
            pScore++;
            res = "Sharp! Scissors beats paper!";
        }
        else {
            res = "Tie!";
        }
    }

    if(pScore == 5 || cScore == 5) {
        if(pScore == 5) {
            res = "Congrats! You beat the computer!";
        }
        else if(cScore == 5) {
            res = "You were beat by the computer! You'll get em next time.";
        }
        else {
            res = "Tie game. Try again.";
        }
    }

    document.getElementById('result').innerHTML = res
    return

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
/*

let choices = ['Rock', 'Paper', 'Scissors'];
let res;

const buttons = document.querySelectorAll('input');

function computerPlay() {
    var res = choices[Math.floor(Math.random() * choices.length)];
    return res;
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection, computerSelection) {

    //playerSelection = window.prompt("Please select an option: Rock, Paper, Scissors", '');
    computerSelection = computerPlay();
    res = "";

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection === "Paper") {
            cScore++;
            res = "Oops! Paper beats rock!";
        }
        else if (computerSelection === "Scissors") {
            pScore++;
            res = "Nice! Rock beats scissors!";
        }
        else {
            res = "It's a Tie!";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection === "Rock") {
            pScore++;
            res = "Woohoo! Paper beats rock!";
        }
        else if (computerSelection === "Scissors") {
            cScore++;
            res = "Unlucky. Scissors beats paper.";
        }
        else {
            res = "Tie.";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection === "Rock") {
            cScore++;
            res = "Not this time. Rock beats scissors.";
        }
        else if (computerSelection === "Paper") {
            pScore++;
            res = "Sharp! Scissors beats paper!";
        }
        else {
            res = "Tie!";
        }
    }

    if(pScore == 5 || cScore == 5) {
        if(pScore == 5) {
            res = "Congrats! You beat the computer!";
        }
        else if(cScore == 5) {
            res = "You were beat by the computer! You'll get em next time.";
        }
        else {
            res = "Tie game. Try again.";
        }
    }

    document.getElementById('result').innerHTML = result
    return

}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})



        function game() {
            var i;
            for (i = 0; i < 5; i++) {
                console.log(playRound(playerSelection, computerSelection));
            }

            if (pScore > cScore) {
                console.log("Congrats! You beat the computer!");
            }
            else if (pScore < cScore) {
                console.log("You were beat by the computer! You'll get em next time.");
            }
            else {
                console.log("Tie game.");
            }

        }
*/