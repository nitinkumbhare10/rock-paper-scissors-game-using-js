let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin == true) {
    user_score++;
    userScore.innerText = user_score;
    msg.innerText = `You win!  Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
  } else {
    comp_score++;
    compScore.innerText = comp_score;
    msg.innerText = `You Lose!  Your ${userChoice} lose to ${compChoice}`;
    msg.style.backgroundColor = "red";
    
  }
};

const drawGame = () => {
  msg.innerText = "Game is draw!";
  msg.style.backgroundColor = "black";
};

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genComputerChoice();
  console.log("computer choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else if(userChoice == "scissors"){
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
