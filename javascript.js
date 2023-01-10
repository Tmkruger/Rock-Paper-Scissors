let score = 0;

playGame();

function getComputerChoice(compChoice){
    let i = Math.random() * (4-1) + 1;
    if(i < 2 && i >= 1){
        // choose rock
        compChoice = "ROCK";
    } else if(i < 3 && i >= 2){
        //choose paper
        compChoice = "PAPER";
    } else if (i >= 3){
        //choose scissors
        compChoice = "SCISSORS"
    } else{
        console.log("Error not a valid number for randomization");
    }
    return compChoice;
}

function getPlayerChoice(choice){
    choice = prompt("Rock, Paper, or Scissors? :");
    console.log("You chose: " + choice);
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = getPlayerChoice().toUpperCase();
    computerSelection = getComputerChoice();
    if(playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        console.log("Computer chose Scissors: YOU WIN!");
        score++;
    } else if(playerSelection === "ROCK" && computerSelection === "PAPER"){
        console.log("Computer chose Paper: YOU LOSE :(");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        console.log("Computer chose Rock: YOU WIN");
        score++;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
        console.log("Computer chose Scissors: YOU LOSE :(");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
        console.log("Computer chose Paper: YOU WIN");
        score++;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
        console.log("Computer chose Rock: YOU LOSE :(");
    } else if(playerSelection === computerSelection){
        console.log("Tie");
    } else{
        console.log("Error");
    }
}
function playGame(){
    for (let i = 0; i < 5; i++) {
        playRound();
     }
     console.log("You're score is : " + score);
}