let choices = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('input');

function computerPlay() {
    var res = choices[Math.floor(Math.random() * choices.length)];
    return res;
}

let playerSelection;
let computerSelection;
var pScore = 0;
var cScore = 0;
const res;

function playRound(playerSelection, computerSelection) {

    //playerSelection = window.prompt("Please select an option: Rock, Paper, Scissors", '');
    computerSelection = computerPlay();
    res = "";

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection === "Paper") {
            cScore++;
            return "Oops! Paper beats rock!";
        }
        else if (computerSelection === "Scissors") {
            pScore++;
            return "Nice! Rock beats scissors!";
        }
        else {
            return "It's a Tie!";
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection === "Rock") {
            pScore++;
            return "Woohoo! Paper beats rock!";
        }
        else if (computerSelection === "Scissors") {
            cScore++;
            return "Unlucky. Scissors beats paper.";
        }
        else {
            return "Tie.";
        }
    }

    else if (playerSelection == "scissors") {
        if (computerSelection === "Rock") {
            cScore++;
            return "Not this time. Rock beats scissors.";
        }
        else if (computerSelection === "Paper") {
            pScore++;
            return "Sharp! Scissors beats paper!";
        }
        else {
            return "Tie!";
        }
    }

    

    document.getElementById('result').innerHTML = result
    return;

}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        playRound(button.value)
    })
})

function checkWinner() {

}

/*
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