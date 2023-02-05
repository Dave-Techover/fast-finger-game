// GLOBAL VARIABLES
let playerScore           = 0,
	playerEasyHighScore   = 0,
	playerNormalHighScore = 0,
	playerHardHighScore   = 0,
	playerExpertHighScore = 0,
	time,
	isPlaying;

// DOM VARAIBLES
const tapBtn            = document.querySelector(".tap-btn"),
	  levels            = document.querySelector(".levels"),	
	  startBtn          = document.querySelector(".start-btn"),
	  restartBtn        = document.querySelector(".restart-btn"),
	  clickCountDisplay = document.querySelector(".click-count"),
	  highScoreDisplay  = document.querySelector(".high-score"),
	  newHighScoreAlert = document.querySelector(".high-score-alert"),
	  timerDisplay      = document.querySelector(".timer-display"),
	  gameContainer     = document.querySelector(".game-container"),
	  startContainer    = document.querySelector(".start-container");

// PICK GAME DIFFICULTY
const gameDifficulty = () => {
		event.preventDefault()
		if(levels.value === "easy"){
			time = 10
			highScoreDisplay.innerHTML = localStorage.getItem("HighScoreEasy");
		}else if(levels.value === "normal"){
			time = 7
			highScoreDisplay.innerHTML = localStorage.getItem("HighScoreNormal");
		}else if(levels.value === "hard"){
			time = 5
			highScoreDisplay.innerHTML = localStorage.getItem("HighScoreHard");
		}else if(levels.value === "expert"){
			time = 3
			highScoreDisplay.innerHTML = localStorage.getItem("HighScoreExpert");
		}
}	

// localStorage.setItem("HighScoreEasy", playerEasyHighScore);
// localStorage.setItem("HighScoreNormal", playerNormalHighScore);
// localStorage.setItem("HighScoreHard", playerHardHighScore);
// localStorage.setItem("HighScoreExpert", playerExpertHighScore);
// console.log(localStorage.getItem('HighScoreEasy'));
// console.log(localStorage.getItem('HighScoreNormal'));
// console.log(localStorage.getItem('HighScoreHard'));
// console.log(localStorage.getItem('HighScoreExpert'));  

// TIMER
const timer = () => {
	if(time > 0){
		time--
	}else if(time === 0){
		isPlaying = false
	}
	timerDisplay.textContent = time
}

// CHECK PLAYING STATUS
const checkStatus = () => {
	if(time === 0){
		isPlaying = false;
		tapBtn.disabled = true;
	}
}

// CHECK FOR NEW HIGH SCORE
const highScoreCheck = () => {
	if(levels.value === "easy"){
		if(playerScore > localStorage.getItem("HighScoreEasy")){
			localStorage.setItem("HighScoreEasy", playerScore);
			playerEasyHighScore = localStorage.getItem("HighScoreEasy");
			highScoreDisplay.innerHTML = playerEasyHighScore
			newHighScoreAlert.classList.remove("hide");
		}
	}
	else if(levels.value === "normal"){
			if(playerScore > localStorage.getItem("HighScoreNormal")){
				localStorage.setItem("HighScoreNormal", playerScore);
				playerNormalHighScore = localStorage.getItem("HighScoreNormal");
				highScoreDisplay.innerHTML = playerNormalHighScore
				newHighScoreAlert.classList.remove("hide");
			}
	}
	else if(levels.value === "hard"){
			if(playerScore > localStorage.getItem("HighScoreHard")){
				localStorage.setItem("HighScoreHard", playerScore);
				playerHardHighScore = localStorage.getItem("HighScoreHard");
				highScoreDisplay.innerHTML = playerHardHighScore
				newHighScoreAlert.classList.remove("hide");
			}
	}
	else if(levels.value === "expert"){
			if(playerScore > localStorage.getItem("HighScoreExpert")){
				localStorage.setItem("HighScoreExpert", playerScore);
				playerExpertHighScore = localStorage.getItem("HighScoreExpert");
				highScoreDisplay.innerHTML = playerExpertHighScore
				newHighScoreAlert.classList.remove("hide");
			}
	}
}

const countDown = () => setInterval(timer, 1000);
const checkS    = () => setInterval(checkStatus, 10);

// START GAME
const startGame = () => {
	gameDifficulty();
	countDown()
	checkS();
	timerDisplay.textContent = time
	gameContainer.classList.remove("hide");
	startContainer.classList.add("hide");
}

startBtn.addEventListener("click", function(){
	startGame();
});

tapBtn.addEventListener("click", function() {
	playerScore += 1
	clickCountDisplay.textContent = playerScore
	console.log(playerScore);
	highScoreCheck();
});

restartBtn.addEventListener("click", function(){
	window.location.reload();
});