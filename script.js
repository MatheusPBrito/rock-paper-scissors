var playerScoreValue = 0;
var computerScoreValue = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerWeapon = document.querySelector("#playerWeapon");
const computerWeapon = document.querySelector("#computerWeapon");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const display = document.querySelector(".display");

playerWeapon.innerHTML = "<img src=img/interrogation.png height=150 width=150>";
computerWeapon.innerHTML = "<img src=img/interrogation.png height=150 width=150>";
playerScore.innerText = "Player Score: 0";
computerScore.innerText = "Computer Score: 0";

const resultDisplay = document.createElement("h3"); 

function getComputerChoice(){
  return Math.floor(Math.random() * 3 + 1);
}

function playRound(playerSelection, computerSelection){
	if(playerScoreValue < 5 && computerScoreValue < 5){
	switch (computerSelection) {
		case 1:
			switch (playerSelection){
				case "Rock":
				        playerWeapon.innerHTML = "<img src=img/rock.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/scissors.png height=150 width=150>";
                                        playerScoreValue++;
					playerScore.innerText = "Player score: " + playerScoreValue;
					resultDisplay.textContent = "Player Wins";
					break;
				case "Paper":
					playerWeapon.innerHTML = "<img src=img/paper.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/scissors.png height=150 width=150>";
					computerScoreValue++;
					computerScore.innerText = "Computer score: " + computerScoreValue;
					resultDisplay.textContent = "Player Loses";
					break;
				case "Scissors":
					playerWeapon.innerHTML = "<img src=img/scissors.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/scissors.png height=150 width=150>";
					resultDisplay.textContent = "It's a Draw";
					break;
			}
			break;
		case 2:
			switch (playerSelection){
				case "Rock":
					playerWeapon.innerHTML = "<img src=img/rock.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/paper.png height=150 width=150>";
					computerScoreValue++;
					computerScore.innerText = "Computer score: " + computerScoreValue;
					resultDisplay.textContent = "Player Loses";
					break;
				case "Paper":
					playerWeapon.innerHTML = "<img src=img/paper.png height=150 width=150>";
				        computerWeapon.innerHTML = "<img src=img/paper.png height=150 width=150>";	
					resultDisplay.textContent = "It's a Draw";
					break;
				case "Scissors":
					playerWeapon.innerHTML = "<img src=img/scissors.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/paper.png height=150 width=150>";
					playerScoreValue++;
					playerScore.innerText = "Player score: " + playerScoreValue;
					resultDisplay.textContent = "Player Wins";
					break;
			}
			break;
		case 3:
			switch (playerSelection){
				case "Rock":
					playerWeapon.innerHTML = "<img src=img/rock.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/rock.png height=150 width=150>";
					resultDisplay.textContent = "It's a Draw";
					break;
				case "Paper":
					playerWeapon.innerHTML = "<img src=img/paper.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/rock.png height=150 width=150>";
					playerScoreValue++;
					playerScore.innerText = "Player score: " + playerScoreValue;
					resultDisplay.textContent = "Player Wins";
					break;
				case "Scissors":
					playerWeapon.innerHTML = "<img src=img/scissors.png height=150 width=150>";
					computerWeapon.innerHTML = "<img src=img/rock.png height=150 width=150>";
					computerScoreValue++;
					computerScore.innerText = "Computer score: " + computerScoreValue;
					resultDisplay.textContent = "Player Loses";
					break;
			}
			break;
	 }
        } 
	if(playerScoreValue >= 5 || computerScoreValue >= 5){
		if(playerScoreValue > computerScoreValue){
			resultDisplay.textContent = "THE WINNER IS PLAYER";
		}
		else{
			resultDisplay.textContent = "THE WINNER IS COMPUTER";
		}
	}
      resultDisplay.style.textAlign = "center";
      display.appendChild(resultDisplay);
}

rock.addEventListener('click', () => { playRound("Rock", getComputerChoice())});
paper.addEventListener('click',() => { playRound("Paper",getComputerChoice())});
scissors.addEventListener('click',() => { playRound("Scissors", getComputerChoice())});

