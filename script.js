//Create function for computer choice
function getComputerChoice(){
    //Select a random option between Rock, paper, scissors
    let random = Math.ceil(Math.random()*3);
    let choice = "";
    switch(random){
        case 1:
            choice="rock";
            break;
        case 2:
            choice="paper";
            break;
        case 3:
            choice="scissors";
            break;
    }
    //Return that value
    return choice;
}
//Create function for player choice
function getPlayerChoice(){
    let choice = "";
    let loop = true;
    while (loop){
        //Ask the user for a choice between rock paper scissors
        choice = prompt("Rock, paper, scissors, shoot!")
        choice = choice.toLowerCase();
        //evaluate if the choice is legit
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            loop = false;
        }
    }
    //Return that value
    return choice;
}
//Create function for the match which asks for 2 choices
function playRound(playerSelection, computerSelection){
    //If the choices are the same tell the user it's a draw
    if (playerSelection===computerSelection){
        return ("It's a tie, you both have chosen "+playerSelection);
    }
    else{
        if(playerSelection==="rock"){
            if(computerSelection==="scissors"){
                return ("You win: "+playerSelection+" beats "+computerSelection);
            }
            else if(computerSelection==="paper"){
                return ("You lose: "+computerSelection+" beats "+playerSelection);
            }
        }
        else if(playerSelection==="scissors"){
            if(computerSelection==="paper"){
                return ("You win: "+playerSelection+" beats "+computerSelection);
            }
            else if(computerSelection==="rock"){
                return ("You lose: "+computerSelection+" beats "+playerSelection);
            }
        }
        else if(playerSelection==="paper"){
            if(computerSelection==="rock"){
                return ("You win: "+playerSelection+" beats "+computerSelection);
            }
            else if(computerSelection==="scissors"){
                return ("You lose: "+computerSelection+" beats "+playerSelection);
            }
        }
    }
    //Evaluate everyelse choices where are not the same and tell the user if won or lost
}
//Create function game
function game(){
    let wins = 0;
    let loses = 0;
    let ties = 0;
    let winner = "";
    //Play 5 rounds of rock paper scissors
    for (let i = 0; i < 5; i++) {
       computerSelection = getComputerChoice();
       playerSelection = getPlayerChoice();
       winner = playRound(playerSelection, computerSelection);
       console.log(winner);
       //Count the number of wins and loses
       if (winner.includes("win")){
        wins++;
       } 
       else if (winner.includes("lose")){
        loses++;
       }
       else if (winner.includes("tie")){
        ties++;
       }
    }
    if (wins>loses) {
        console.log("You won with "+wins+" wins, "+loses+" loses and "+ties+" ties");
    }
    else if (wins<loses) {
        console.log("You lost with "+wins+" wins, "+loses+" loses and "+ties+" ties");
    }
    else if (wins===loses) {
        console.log("You tied with "+wins+" wins, "+loses+" loses and "+ties+" ties");
    }
}
//Create variables for the ia and player choices
let playerSelection = "";
let computerSelection = "";
//Play rock paper scissors
game();
