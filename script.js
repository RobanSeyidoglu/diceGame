let randomNumber = Math.floor(Math.random() * 6) + 1;
let oneScoreElement = document.getElementById("score--0");
let twoScoreElement = document.getElementById("score--1");
let oneCurrentElement = document.getElementById("current--0");
let twoCurrentElement = document.getElementById("current--1");
let rollPic = document.getElementsByClassName("dice")[0];
let rollDice = document.querySelector(".btn.btn--roll");
let hold = document.querySelector(".btn.btn--hold");
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let newGame = document.querySelector(".btn--new");
let picNumber = `dice-${randomNumber}.png`;
let oneTotalScore = 0;
let twoTotalScore = 0;
let oneCurrentScore = 0;
let twoCurrentScore = 0;
const winningScore = 100;
rollDice.onclick = function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
  if (randomNumber !== 1 && player1.classList.contains("player--active")) {
    let picNumber = `dice-${randomNumber}.png`;
    rollPic.src = picNumber;
    oneCurrentScore = oneCurrentScore + randomNumber;
    oneCurrentElement.textContent = oneCurrentScore;
  } else if (
    randomNumber === 1 &&
    player1.classList.contains("player--active")
  ) {
    let picNumber = `dice-${randomNumber}.png`;
    rollPic.src = picNumber;
    oneCurrentScore = 0;
    oneCurrentElement.textContent = oneCurrentScore;
    player2.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  } else if (
    randomNumber !== 1 &&
    player2.classList.contains("player--active")
  ) {
    let picNumber = `dice-${randomNumber}.png`;
    rollPic.src = picNumber;
    twoCurrentScore = twoCurrentScore + randomNumber;
    twoCurrentElement.textContent = twoCurrentScore;
  } else if (
    randomNumber === 1 &&
    player2.classList.contains("player--active")
  ) {
    let picNumber = `dice-${randomNumber}.png`;
    rollPic.src = picNumber;
    twoCurrentScore = 0;
    twoCurrentElement.textContent = twoCurrentScore;
    player2.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
};

hold.onclick = function () {
  if (player1.classList.contains("player--active")) {
    oneTotalScore += oneCurrentScore;
    oneScoreElement.textContent = oneTotalScore;
    oneCurrentScore = 0;
    oneCurrentElement.textContent = oneCurrentScore;
    player2.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  } else if (player2.classList.contains("player--active")) {
    twoTotalScore += twoCurrentScore;
    twoScoreElement.textContent = twoTotalScore;
    twoCurrentScore = 0;
    twoCurrentElement.textContent = twoCurrentScore;
    player2.classList.toggle("player--active");
    player1.classList.toggle("player--active");
  }
  if (parseInt(twoScoreElement.textContent) >= winningScore) {
    rollPic.classList.add("hidden");
    player2.classList.add("player--winner");
    player1.classList.remove("player--active");
    player2.classList.remove("player--active");
    randomNumber = "";
  } else if (parseInt(oneScoreElement.textContent) >= winningScore) {
    rollPic.classList.add("hidden");
    player1.classList.add("player--winner");
    player2.classList.remove("player--active");
    player1.classList.remove("player--active");
    randomNumber = "";
  }
};
newGame.onclick = function () {
  rollPic.classList.remove("hidden");
  player2.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--active");
  player1.classList.add("player--active");
  // twoCurrentElement.textContent = '0';
  // oneCurrentElement.textContent = '0';

  oneTotalScore = 0;
  twoTotalScore = 0;
  oneCurrentScore = 0;
  twoCurrentScore = 0;
  oneScoreElement.textContent = oneTotalScore;
  twoScoreElement.textContent = twoTotalScore;
  oneCurrentElement.textContent = oneCurrentScore;
  twoCurrentElement.textContent = twoCurrentScore;
  // oneScoreElement.textContent = oneCurrentElement.textContent;
  // twoScoreElement.textContent = twoCurrentElement.textContent;
  randomNumber = Math.floor(Math.random() * 6) + 1;
};
