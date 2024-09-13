let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        computerChoice = "paper";
    }
    else if (randomNumber === 1){
        computerChoice = "rock";
    }
    else {
        computerChoice = "scissor";
    }
    return computerChoice
    console.log(computerChoice)    
}


function getHumanChoice() {
    humanChoice = prompt("Rock, paper or scissor?")
    return humanChoice
    console.log(humanChoice)
}


function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper"){
        message = "You lose. Paper beats rock!!"
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor"){
        message = "You win. Rock beats scissor!!"
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissor"){
        message = "You lose. Scissor beats paper!!"
        computerScore++
    }
    else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        message = "You win. Rock beats scissor!!"
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper"){
        message = "You win. Rock beats scissor!!"
        humanScore++
    }
    else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "rock"){
        message = "You lose. Scissor beats paper!!"
        computerScore++
    }
    else {
        message = "It's a tie"
    }
    console.log(message)
    console.log(`Your score is: ${humanScore}\n Computer score is ${computerScore}`)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
