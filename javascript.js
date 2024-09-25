
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
}

// Function will prompt the user for a choice
function getHumanChoice() {
    humanChoice = prompt("Rock, paper or scissor?")
    return humanChoice;
}

const container = document.querySelector("#container");
const result = document.createElement("div");
let humanScore = 0;
let computerScore = 0;
let computer = "";
const btn1 = document.querySelector("#buttons")
btn1.addEventListener("click", () => {return computer = getComputerChoice()})
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let message = "";
rock.addEventListener("click",() => 
    {let array = playRound(rock.id, computer);
        computerScore+= array[1];
        humanScore+= array[2];
        if (computerScore === 5 && humanScore < 5) {
            result.textContent = `Game is human ${humanScore} x ${computerScore} computer. Computer wins the game`;
            computerScore = 0;
            humanScore = 0;        
        }
        else if (humanScore === 5 && computerScore < 5) {
            result.textContent = `Game is human ${humanScore} x ${computerScore} computer. Human wins the game`; 
            computerScore = 0;
            humanScore = 0;

        }
        else {
            result.textContent = `${array[0]}. 
            Game is human ${humanScore} x ${computerScore} computer`;
        }
                
        container.appendChild(result);
    })
paper.addEventListener("click",() => 
    {let array = playRound(paper.id, computer);
        computerScore+= array[1];
        humanScore+= array[2];
        if (computerScore === 5 && humanScore < 5) {
            result.textContent = `Game is human ${humanScore} x ${computerScore} computer. Computer wins the game`; 
            computerScore = 0;
            humanScore = 0;        
        }
        else if (humanScore === 5 && computerScore < 5) {
            result.textContent = `Game is human ${humanScore} x ${computerScore} computer. Human wins the game`; 
            computerScore = 0;
            humanScore = 0;

        }
        else {
            result.textContent = `${array[0]}. 
            Game is human ${humanScore} x ${computerScore} computer`;
        }
        
        container.appendChild(result);
    })
scissor.addEventListener("click",() => 
    {let array = playRound(scissor.id, computer);
        computerScore+= array[1];
        humanScore+= array[2];
        if (computerScore === 5 && humanScore < 5) {
            result.textContent = `Game is human ${humanScore} x ${computerScore} computer. Computer wins the game`;   
            computerScore = 0;
            humanScore = 0;      
        }
        else if (humanScore === 5 && computerScore < 5) {
            result.textContent = `Game is human ${humanScore} x ${computerScore} computer. Human wins the game`;
            computerScore = 0;
            humanScore = 0;
        }
        else {
            result.textContent = `${array[0]}. 
            Game is human ${humanScore} x ${computerScore} computer`;
        }
       
        container.appendChild(result);
    })



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
    // const container = document.querySelector("#container");
    // const result = document.createElement("div");
    result.textContent = message;
    container.appendChild(result)
    // computer = "";
    // console.log(message);
    // console.log(computerScore)
    // console.log(`Your score is: ${humanScore}\n Computer score is ${computerScore}`);
    return [message, computerScore, humanScore]
}


// Function playgame that will play 5 rounds of rock, paper scissor and
// function playGame() {
//     let humanScr = 0; // Variable to store overall game score of human
//     let computerScr = 0; // Variable to store overall game score of computer
//     for (let i = 0; i < 5; i++){
//         Variables that stores human and computer choice
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         let result = playRound(humanSelection, computerSelection)
//         humanScr+= result[0]
//         computerScr+= result[1]
//     }
//     let score = `Final score is Human ${humanScr} x ${computerScr} Computer`
//     if (humanScr > computerScr){
//         message = "Congratulations you won!"
//     }
//     else if (humanScr < computerScr){
//         message = "You lost =(."
//     }
//     else {
//         message = "Game was a tie."
//     }
//     console.log(score);
//     console.log(message);

// }

// playGame()



