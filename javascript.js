getComputerChoice();


function getComputerChoice(){
let i = Math.random() * (4-1) + 1;
    if(i >= 1 && i<2){
        console.log("Rock");
    } else if(i >= 2 && i< 3){
        console.log("Paper");
    } else if (i >= 3){
        console.log("Scissors");
    } else{
        console.log("Error so im going with Rock");
    }
}

