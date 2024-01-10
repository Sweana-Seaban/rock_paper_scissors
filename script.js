let computerChoiceInt;
let computerChoice;
let userChoiceInt;
let userChoice;
let result_array=[];
let userScore=0;
let computerScore=0;



function getComputerChoice(){
    computerChoiceInt=Math.floor(Math.random()*3); //math.random returns a floating point number so math.floor is used
    if(computerChoiceInt == 0)
        computerChoice="rock";
    else if(computerChoice == 1)
        computerChoice="paper";
    else
        computerChoice="scissors";

    return computerChoiceInt;
}

function getUserChoice(){
    userChoice=String(prompt("Enter your choice:Rock | Paper | Scissor"));
    
    /*if(userChoice.compareToIgnoreCase("rock"))
        userChoiceInt=0;
    else if(userChoice.equalsIgnorecase("paper"))
        userChoiceInt=1;
    else
        userChoiceInt=2;*/

    if(userChoice == "Rock")
        userChoiceInt=0;
    else if(userChoice == "Paper")
        userChoiceInt=1;
    else 
        userChoiceInt=2;

    return userChoiceInt;
}

function playRound(playerSelection,computerSelection){
    result_array=[ [0,2,1], [1,0,2], [2,1,0] ];
    playerSelection=getUserChoice();
    computerSelection=getComputerChoice();
    let result=result_array[playerSelection][computerSelection];
    console.log(result);
    if(result==0){
        return console.log(`Tie! Your choice is ${userChoice} and computer's choice is ${computerChoice}`);
    }
        
    else if(result==1){
        userScore++;
        return console.log(`You won! Your choice is ${userChoice} and computer's choice is ${computerChoice}`);
        
    }
        
    else if(result==2){
        computerScore++;
        return console.log(`You lose! Your choice is ${userChoice} and computer's choice is ${computerChoice}`);
        
    }
        
}

function game(){
    for(i=0;i<5;i++){
        playRound();

    }
    console.log(`Your score :${userScore}`);
    console.log(`Computer score :${computerScore}`);
    if(userScore==5){
        console.log("You won!!");
        console.log(`Computer Score:${computerScore} User Score:${userScore}`)
        userScore=0;
        computerScore=0;
    }

    else if(computerScore==5){
        console.log("You lose!!");
        console.log(`Computer Score:${computerScore} User Score:${userScore}`)
        userScore=0;
        computerScore=0;
    }
    
}

game();


