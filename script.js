const log = console.log;


function getCompChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) { return ("R") }
    else if (num == 1) { return ("P") }
    else if (num == 2) { return ("S") }
    else
        return 0;
}

function getHumanChoice() {
    let ans = prompt("Enter Your Choice Rock, Paper or Scissors!")
    if (ans == "Rock" || ans == "R" || ans == "r" || ans.toLowerCase()== "rock") {
        return "R";
    }
    else if (ans == "Paper" || ans == "P" || ans == "p" || ans.toLowerCase()=="paper") {
        return "P";
    }
    else if (ans == "Scissors" || ans == "S" || ans == "s" || ans.toLowerCase() == "scissors") {
        return "S"
    }
    else
        return 0;

}

let computerScore = 0;
let HumanScore = 0;

function playRound(computer, human) {
    log("Round Begins!")
    computer=getCompChoice();
    
    human=getHumanChoice();
    if (computer == "R") {
        if (human == "R") {
            log("Tie!")
        } else if (human == "P") {
            log(`You Win! ${human} beats ${computer}`);
            HumanScore++;

        } else{
            log(`Computer Wins! ${computer} beats ${human}`);
        computerScore++;} 
    }else if( computer == "P"){

        if (human == "P") {
            log("Tie")
        } else if (human == "S") {
            log(`You Win! ${human} beats ${computer} `);
            HumanScore++;

        } else{
            log(`Computer Wins! ${computer} beats ${human}`);
        computerScore++;
        }
    }else {

        if (human == "S") {
            log("Tie")
        } else if (human == "R") {
            log(`You Win!  ${human} beats ${computer} `);
            HumanScore++;

        } else{
            log(`Computer Wins! ${computer} beats ${human}`);
        computerScore++;
        }
    }
} 
    function playGame(){
        for (let i = 0; i < 5 ; i++) {
            playRound();
        }
        if (HumanScore>computerScore){
            alert(`You win! ${HumanScore} vs ${computerScore}`)
        }else{
            alert(`You lose ${HumanScore} vs ${computerScore}`)
        }

    }


playGame();
a =true;
while (a) {
    confirm("Do you want to play again?") ? playGame() : a = false;
}
