function playRound (humanChoice, computerChoice) {
    

    if (humanChoice === computerChoice) {
        console.log(`You tied with the computer you both chose ${humanChoice}`)
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You Win! rock beats ${computerChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`You Win! paper beats ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You Win! scissors beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); 
    }
}

var humanScore = 0;
var computerScore = 0;
var computerSelection = '';
var humanSelection = '';












function playGame () {
    for (let round = 1; round <= 5; round++) {
        console.log(`This is round ${round}`);
    
        humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection}`);
        computerSelection = getComputerChoice();
        console.log(`The computer chose ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`ComputerScore: ${computerScore}`);
        console.log(`humanScore: ${humanScore}`);
    
    
    
    }
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (computerScore > humanScore) {
        console.log("You lose");
    }
}
playGame();
















function playRound (humanChoice, computerChoice) {
    

    if (humanChoice === computerChoice) {
        console.log(`You tied with the computer you both chose ${humanChoice}`)
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You Win! rock beats ${computerChoice}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`You Win! paper beats ${computerChoice}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You Win! scissors beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); 
    }
}

var humanScore = 0;
var computerScore = 0;
var computerSelection = '';
var humanSelection = '';












function playGame () {
    for (let round = 1; round <= 5; round++) {
        console.log(`This is round ${round}`);
    
        humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection}`);
        computerSelection = getComputerChoice();
        console.log(`The computer chose ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`ComputerScore: ${computerScore}`);
        console.log(`humanScore: ${humanScore}`);
    
    
    
    }
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (computerScore > humanScore) {
        console.log("You lose");
    }
}
playGame();