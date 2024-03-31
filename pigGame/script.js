"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
score0El.textContent = 0;
score1El.textContent = 0;
const diceEl = document.querySelector(".dice");
const rollEl = document.querySelector(".btn--roll");
const holdEl = document.querySelector(".btn--hold");
const resetEl = document.querySelector(".btn--new");
let current0 = document.querySelector("#current--0");
let current1 = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;
const switchPlayer = function () {
  document.querySelector("#current--" + activePlayer).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
diceEl.classList.add("hidden");
rollEl.addEventListener("click", function () {
  if (playing === true) {
    const rolling_num = Math.trunc(Math.random() * 6) + 1;
    console.log(rolling_num);
    diceEl.classList.remove("hidden");
    diceEl.src = "dice-" + rolling_num + ".png";
    if (rolling_num != 1) {
      currentScore += rolling_num;
      document.querySelector("#current--" + activePlayer).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdEl.addEventListener("click", function () {
  if (playing === true) {
    scores[activePlayer] = currentScore + scores[activePlayer];
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];
    document.querySelector("#current--" + activePlayer).textContent = 0;
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      diceEl.classList.add("hidden");
      party.confetti();
    } else {
      switchPlayer();
    }
  }
});
resetEl.addEventListener("click", function () {
  current0.textContent = 0;
  current1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores = [0, 0];
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
});
