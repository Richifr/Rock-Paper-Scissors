document.addEventListener("DOMContentLoaded", function() {
    
    let humanScore = 0;
    let computerScore = 0;

    
    function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            return 'rock';
        } else if (randomNumber === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    
    function displayResults(message, isFinal = false) {
        console.log("displayResults called with message:", message); 
        document.getElementById("round-result").textContent = message;

        if (isFinal) {
            document.getElementById("final-result").textContent = message;
        }
    }

    
    function updateScores() {
        console.log("Updating scores: Player -", humanScore, "Computer -", computerScore); 
        document.getElementById("player-score").textContent = humanScore;
        document.getElementById("computer-score").textContent = computerScore;
    }

   
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        console.log("Human Choice:", humanChoice, "Computer Choice:", computerChoice); 

        
        if (humanChoice === computerChoice) {
            displayResults(`It's a tie! You both chose ${humanChoice}.`);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            displayResults(`You Win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            displayResults(`You Lose! ${computerChoice} beats ${humanChoice}.`);
        }

        
        updateScores();

       
        checkForWinner();
    }


    function checkForWinner() {
        if (humanScore === 5 || computerScore === 5) {
            let finalMessage = humanScore === 5 ? "🎉 You won the game!" : "💻 You lost the game.";
            displayResults(finalMessage, true);  
        }
    }

    
    document.getElementById("rock").addEventListener("click", function() {
        console.log("Rock button clicked"); 
        playRound("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        console.log("Paper button clicked"); 
        playRound("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
        console.log("Scissors button clicked"); 
        playRound("scissors");
    });
});
