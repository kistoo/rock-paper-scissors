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
function getPlayerChoice(choice){
    choice = choice.toLowerCase();
    return choice;
}

//Create function to remove event listener after 5 rounds

//Create function for the match which asks for 2 choices
function playRound(playerChoice, game){
    let playerSelection=getPlayerChoice(playerChoice);
    let computerSelection=getComputerChoice();
    let announcements=document.getElementById("rounds");
    let message=document.createElement('p');
    //If the choices are the same tell the user it's a draw
    if (playerSelection===computerSelection){
        message.textContent = ("It's a tie, you both have chosen "+playerSelection);
    }
    else{
        if(playerSelection==="rock"){
            if(computerSelection==="scissors"){
                message.textContent = ("You win: "+playerSelection+" beats "+computerSelection);
                game[1]++;
            }
            else if(computerSelection==="paper"){
                message.textContent = ("You lose: "+computerSelection+" beats "+playerSelection);
                game[2]++;
            }
        }
        else if(playerSelection==="scissors"){
            if(computerSelection==="paper"){
                message.textContent = ("You win: "+playerSelection+" beats "+computerSelection);
                game[1]++;
            }
            else if(computerSelection==="rock"){
                message.textContent = ("You lose: "+computerSelection+" beats "+playerSelection);
                game[2]++;
            }
        }
        else if(playerSelection==="paper"){
            if(computerSelection==="rock"){
                message.textContent = ("You win: "+playerSelection+" beats "+computerSelection);
                game[1]++;
            }
            else if(computerSelection==="scissors"){
                message.textContent = ("You lose: "+computerSelection+" beats "+playerSelection);
                game[2]++;
            }
        }
    }
    if (game[0]<5){
        announcements.append(message);
        displayScore(game);  
        
    }
    if (game[0]===5){
        message.setAttribute("style","font-weight:700; font-size:40px");
        if (game[1]===game[2]){
            message.textContent = "IT'S A TIE";
        }
        if (game[1]<game[2]){
            message.textContent = "YOU LOSE";
        }
        if (game[1]>game[2]){
            message.textContent = "YOU WIN";
        }
        announcements.append(message);
    }
    game[0]++;
    return game;
}

//Create  function to display score
function displayScore(game){
    let playerScore = document.getElementById("wins");
    playerScore.textContent=game[1];
    let iaScore = document.getElementById("loses");
    iaScore.textContent=game[2];
}

let game = [0,0,0];//rounds,wins,loses
displayScore(game);
const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",()=>
        game = playRound(button.textContent,game));
    });

