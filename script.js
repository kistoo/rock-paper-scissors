//Create function for computer choice
function getComputerChoice(){
    //Select a random option between Rock, paper, scissors
    //Return that value
}
//Create function for player choice
function getPlayerChoice(){
    //Ask the user for a choice between rock paper scissors
    //Return that value
}
//Create function for the match which asks for 2 choices
function playRound(playerSelection, computerSelection){
    //If the choices are the same tell the user it's a draw
    //Evaluate everyelse choices where are not the same and tell the user if won or lost
}
//Create function game
function game(){
    let wins = 0;
    let loses = 0;
    let winner = "";
    //Play 5 rounds of rock paper scissors
    for (let i = 0; i < 5; i++) {
       computerSelection = getComputerChoice();
       playerSelection = getPlayerChoice();
       winner = playRound(playerSelection, computerSelection);
       //Count the number of wins and loses
       if (winner.includes("Win")){
        wins++;
       }
       else{
        loses++;
       }
    }
    if (wins>loses) {
        console.log("You won with "+wins+" wins and "+loses+" loses");
    }
    else {
        console.log("You lost with "+wins+" wins and "+loses+" loses");
    }
}
//Create variables for the ia and player choices
let playerSelection = "";
let computerSelection = "";
//Play rock paper scissors
game();