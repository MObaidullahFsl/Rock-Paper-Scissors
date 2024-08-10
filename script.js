
let playerBool = false;
let aiBool = false;
let playerChoice;
let aiChoice;
let Stats = document.querySelector(".status");
let HumanScore = document.querySelector(".human-score .no");
let compScore = document.querySelector(".comp-score .no");
let end = false;
let count = 1;
let playerImg = document.querySelector(".image.inverted");
let compImg = document.querySelector(".image.cmp");
let choice = document.querySelectorAll(".button");
const playerButton = document.querySelector("[data-symbol]");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const playAgain =  document.querySelector(".play-again");
const rules =  document.querySelector(".rules");
const reset =  document.querySelector(".reset");

log = console.log;


Stats.textContent = "Choosing...";

playerButton.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");

})

overlay.addEventListener("click", () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
})

function changePic(input,img){
if (input == "R"){
    img.src= "img/rock.png";
}else if(input == "P"){
    img.src= "img/paper.png";
}else{
    img.src= "img/Untitled.png";
}
}
choice.forEach(btn => {
    btn.addEventListener("click", () => {
        
        if (btn.id === "rock" || btn.id === "paper" || btn.id === "scissors") {
            playerBool = true;
            modal.classList.remove("active");
            overlay.classList.remove("active");

            playerChoice = btn.id.charAt(0).toUpperCase();
            changePic(playerChoice,playerImg);
            playGame();
        } else {
            return NaN;
        }
    });
});
playAgain.addEventListener("click", ()=> {
    location.reload();
})

reset.addEventListener("click", ()=>{
    choice = 0;
    HumanScore = 0; 
    compScore = 0; 
        

})

function calcCompChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) { aiBool = true; return ("R") }
    else if (num == 1) { aiBool = true; return ("P") }
    else if (num == 2) { aiBool = true; return ("S") }
    else
        return 0;
}


function playRound() {
    count++; 
    Stats.textContent= "Round - " + count; 

    aiChoice = calcCompChoice();
    changePic(aiChoice,compImg);

    if (playerBool) {



        if (aiChoice == "R") {
            if (playerChoice == "R") {
                log("Tie!")
            } else if (playerChoice == "P") {
                log(`You Win! ${playerChoice} beats ${aiChoice}`);
                HumanScore.textContent++;
                end = true;

            } else {
                log(`aiChoice Wins! ${aiChoice} beats ${playerChoice}`);
                compScore.textContent++;
            }
        } else if (aiChoice == "P") {

            if (playerChoice == "P") {
                log("Tie")
            } else if (playerChoice == "S") {
                log(`You Win! ${playerChoice} beats ${aiChoice} `);
                HumanScore.textContent ++;

            } else {
                log(`aiChoice Wins! ${aiChoice} beats ${playerChoice}`);
                compScore.textContent ++;
            }
        } else {

            if (playerChoice == "S") {
                log("Tie")
            } else if (playerChoice == "R") {
                log(`You Win!  ${playerChoice} beats ${aiChoice} `);
                HumanScore.textContent++;

            } else {
                log(`Computer Wins! ${aiChoice} beats ${playerChoice}`);
                compScore.textContent++;
            }

           
        }


       
        Stats.textContent= "Round - " + count; 

    } else {
        console.log("no player choice made");
    }


}

function playGame() {
    if (count == 5) {
        if (HumanScore.textContent > compScore.textContent) {
            Stats.textContent = "You Win";

        } else if (compScore.textContent > HumanScore.textContent) {
            Stats.textContent = "You Lose";

        } else {
            Stats.textContent = "Tie";
        }
    } else {
        playRound();
    }
}

