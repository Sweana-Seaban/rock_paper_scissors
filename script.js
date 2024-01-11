let computerChoiceInt=0;
let computerChoice;
let userChoiceInt=0;
let userChoice;
let result_array;
let userScore=0;
let computerScore=0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${userScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "Score displayed here!"

const buttons=document.querySelectorAll('.btn');
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
    userChoice=button.id;
    if(userChoice == "rock")
        userChoiceInt=0;
    else if(userChoice == "paper")
        userChoiceInt=1;
    else if(userChoice == "scissors")
        userChoiceInt=2;
    computerChoiceInt=getComputerChoice();
    game();
})
    
    
})

function getComputerChoice(){
    computerChoiceInt=Math.floor(Math.random()*3); //math.random returns a floating point number so math.floor is used
    if(computerChoiceInt == 0)
        computerChoice="Rock";
    else if(computerChoiceInt == 1)
        computerChoice="Paper";
    else if(computerChoiceInt == 2)
        computerChoice="Scissors";

    return computerChoiceInt;
}

/*function getUserChoice(){
    userChoice=String(prompt("Enter your choice:Rock | Paper | Scissor"));
    
    

    if(userChoice == "Rock")
        userChoiceInt=0;
    else if(userChoice == "Paper")
        userChoiceInt=1;
    else 
        userChoiceInt=2;

    return userChoiceInt;
}*/

function playRound(userChoiceInt,computerChoiceInt){
    result_array=[  [0,2,1], 
                    [1,0,2], 
                    [2,1,0] ];
    /*playerSelection=getUserChoice();
    computerSelection=getComputerChoice();*/
    let result=result_array[userChoiceInt][computerChoiceInt];
    
    if(result==0){
        document.getElementById("output").innerHTML=`Tie! Your choice is ${userChoice} and computer's choice is ${computerChoice}`;
        /*document.getElementById("comp-score").innerHTML=`Tie! Your choice is ${userChoice} and computer's choice is ${computerChoice}`;*/
        /*console.log(`Tie! Your choice is ${userChoice} and computer's choice is ${computerChoice}`);*/
    }
        
    else if(result==1){
        userScore++;
        document.getElementById("output").innerHTML=`You won! Your choice is ${userChoice} and computer's choice is ${computerChoice}`;
        /*document.getElementById("comp-score").innerHTML=`You won! Your choice is ${userChoice} and computer's choice is ${computerChoice}`;*/
        /*console.log(`You won! Your choice is ${userChoice} and computer's choice is ${computerChoice}`);*/
        
    }
        
    else if(result==2){
        computerScore++;
        document.getElementById("output").innerHTML=`You lose! Your choice is ${userChoice} and computer's choice is ${computerChoice}`;
        /*document.getElementById("comp-score").innerHTML=`You lose! Your choice is ${userChoice} and computer's choice is ${computerChoice}`;*/
        /*console.log(`You lose! Your choice is ${userChoice} and computer's choice is ${computerChoice}`);*/
        
    }
        
}

function game(){
    
    playRound(userChoiceInt,computerChoiceInt);
    /*document.getElementById("player-score").innerHTML=`${userScore}`;
    document.getElementById("comp-score").innerHTML=`${computerScore}`;*/
    
    /*console.log(`Your score :${userScore}`);
    console.log(`Computer score :${computerScore}`);*/
    player.textContent = `Player Score: ${userScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (userScore == 5){
        output.textContent = "You Won the Game! Congrats";
        userScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5){
        output.textContent = "You Lost the game: Maybe find something else to do?"
        userScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    
}







