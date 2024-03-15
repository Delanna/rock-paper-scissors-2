game();

// GETS BOTH PLAYER CHOICES AND RETURNS IF YOU WIN LOSE OR DRAW
function game(){
  let playerSelection = getPlayerChoice();
  let compSelection = getCompChoice();

  playRound(playerSelection, compSelection);


}

// RETURNS WHETHER YOU WIN LOSE OR DRAW
function playRound(playerSelection, compSelection){
  if (playerSelection === "rock" && compSelection === "scissors" ||
      playerSelection === "paper" && compSelection === "rock" || 
      playerSelection === "scissors" && compSelection === "paper") {
    console.log(`You Win! ${playerSelection} beats ${compSelection}!`);
    return;

  } else if (playerSelection === "rock" && compSelection === "paper" ||
             playerSelection === "paper" && compSelection === "scissors" || 
             playerSelection === "scissors" && compSelection === "rock"){
    console.log(`You Lose! ${compSelection} beats ${playerSelection}!`);
    return;

  } else if (playerSelection === compSelection){
    console.log(`You draw! Both players chose ${playerSelection}!`);
    return;
  }
}

// GENERATES THE COMPUTER'S CHOICE
function getCompChoice(){
  const choices = ["rock", "paper", "scissors"];
  let choice = choices[randomNum()]; 
  return choice;
}

// PROMPTS PLAYER FOR CHOICE AN RETURNS IT IN LOWER CASE
function getPlayerChoice(){
  let playerChoice = prompt("rock, paper or scissors?"); // PROMPTS YOU TO ENTER YOUR CHOICE
  return playerChoice.toLowerCase(); //MAKES PLAYER CHOICE CASE INSENSITIVE BY MAKING ALL LETTERS LOWER CASE
}

// GENERATES A RANDOM NUMBER BETWEEN 0 AND 3 (BUT NEVER 3)
function randomNum(){
  return Math.floor(Math.random()*3); //GENERATES RANDOM NUMBER BETWEEN 0 & 3, MULTIPLIES IT BY 3 THEN ROUNDS IT DOWN
}
