function getComputerChoice(){
  return Math.floor(Math.random() * 3 + 1);
}

function playRound(playerSelection, computerSelection){

	switch (computerSelection) {
		case 1:
			switch (playerSelection){
				case "Rock":
					return "You win!";
					break;
				case "Paper":
					return "You lose!";
					break;
				case "Scissors":
					return "Is a tie";
					break;
				default:
					return "ERROR!";
					break;
			}
			break;
		case 2:
			switch (playerSelection){
				case "Rock":
					return "You lose!";
					break;
				case "Paper":
					return "Is a Tie";
					break;
				case "Scissors":
					return "You win!";
					break;
				default:
					return "ERROR!";
					break;
			}
			break;
		case 3:
			switch (playerSelection){
				case "Rock":
					return "Is a Tie";
					break;
				case "Paper":
					return "You lose!";
					break;
				case "Scissors":
					return "You win!";
					break;
				default:
					return "ERROR!";
					break;
			}
			break;
		default:
			return "Wut?";
			break;
	}

}

function game(){

	for(i = 0; i < 5; i++){
	 const computerSelect = getComputerChoice();
	 let playerSelect = prompt("CHOSSE YOUR WEAPON","Rock");
	 console.log(playRound(playerSelect,computerSelect));
	}
}

game();
