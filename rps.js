//function that allows computer to generate rps
let rpsOption = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;
/* attempt to validate input from user.
if(playerSelection!='rock'||'paper'||'scissor')
{
    let invalidInput=true;
}
else{
    invalidInput=false;
}
while(invalidInput=true)
{
    playerSelection=prompt("Invalid option entered, please enter rock, paper or scissor").toLowerCase();
    console.log(playerSelection);
    if(playerSelection== 'rock'||'paper'||'scissor')
        {
        invalidInput=false;
        console.log("i got here");
        break;
        }
        
}*/
function playRound(playerSelection, computerSelect) {
    if (playerSelection == 'rock') {
        switch (computerSelect) {
            case 'rock':
                console.log("It's a tie");
                break;
            case 'scissor':
                console.log("Rock beats scissor, you win!");
                playerScore++;
                break;
            case 'paper':
                console.log("Paper beats rock, you lose!");
                computerScore++;
                break;
        }
    }
    else if (playerSelection == 'paper') {
        switch (computerSelect) {
            case 'rock':
                console.log("Paper beats rock, you win!");
                playerScore += 1;
                break;
            case 'scissor':
                console.log("Scissor beats paper, you lose!");
                computerScore += 1;
                break;
            case 'paper':
                console.log("It's a tie");
                break;
        }
    }
    else if (playerSelection == 'scissor') {
        switch (computerSelect) {

            case 'rock':
                console.log("Rock beats scissor, you lose!");
                computerScore += 1;
                break;
            case 'scissor':
                console.log("It's a tie");
                break;
            case 'paper':
                console.log("Scissor beats paper, you win!");
                playerScore += 1;
                break;
        }
    }

}

for (i = 0; i < 5; i++) {

    playerSelection = prompt("Please select rock,paper or scissor").toLowerCase();
    randomInt = Math.floor(Math.random() * 3);
    computerSelect = rpsOption[randomInt];
    playRound(playerSelection, computerSelect);
    console.log("Player score is " + playerScore + " Computer score is " + computerScore)
   

}
if (playerScore >computerScore) {
    console.log("Player wins! Player has "+playerScore +" Computer has "+computerScore);
}
else{
    console.log("Computer wins");
}