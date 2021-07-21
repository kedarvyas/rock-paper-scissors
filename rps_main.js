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
            res = "Woohoo! Paper beats rock!" + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
        else if (computerSelection === "Scissors") {
            cScore++;
            res = "Unlucky. Scissors beats paper." + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
        else {
            res = "Tie." + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection === "Rock") {
            cScore++;
            res = "Not this time. Rock beats scissors." + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
        else if (computerSelection === "Paper") {
            pScore++;
            res = "Sharp! Scissors beats paper!" + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
        else {
            res = "Tie!" + "<br><br>Player Score: " + pScore + "<br>Computer Score: " + cScore;
        }
    }

    if(pScore == 5 || cScore == 5) {
        if(pScore == 5) {
            res = "Congrats! You beat the computer!" + pScore + "<br>Computer Score: " + cScore;
        }
        else if(cScore == 5) {
            res = "You were beat by the computer! You'll get em next time." + pScore + "<br>Computer Score: " + cScore;
        }
        else {
            res = "Tie game. Try again." + pScore + "<br>Computer Score: " + cScore;
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
