
// This function will randomize the computer's choice
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        computerChoice = "paper"
    }
    else if (randomNumber === 1){
        computerChoice = "rock"
    }
    else {
        computerChoice = "scissor"
    }
    return computerChoice;
    console.log(computerChoice);
}

// Function will prompt the user for a choice
function getHumanChoice() {
    humanChoice = prompt("Rock, paper or scissor?")
    return humanChoice;
    console.log(humanChoice);
}


// A round function that takes computer and human choices and gets the winner
function playRound(humanChoice, computerChoice){
    let humanScore = 0;    //Variable to store the human score
    let computerScore = 0;  //Variable to store the computer score

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
     
    console.log(message);
    console.log(`Your score is: ${humanScore}\n Computer score is ${computerScore}`);
    return [humanScore, computerScore]

}



// Function game that will play 5 rounds of rock, paper scissor
function playGame() {
    let humanScr = 0;
    let computerScr = 0;
    for (let i = 0; i < 5; i++){
        // Variables that stores human and computer choice
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection)
        humanScr+= result[0]
        computerScr+= result[1]
    }
    let score = `Final score is Human ${humanScr} x ${computerScr} Computer`
    if (humanScr > computerScr){
        message = "Congratulations you won!"
    }
    else if (humanScr < computerScr){
        message = "You lost =(."
    }
    else {
        message = "Game was a tie."
    }
    console.log(score)
    console.log(message)

}

playGame()

