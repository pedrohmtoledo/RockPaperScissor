
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

    result.textContent = message;
    container.appendChild(result)
   
    return [message, computerScore, humanScore]
}