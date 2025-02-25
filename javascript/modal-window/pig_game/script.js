'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //faster than query selector
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let scores;
let currentScore;
let activePlayer;
let playing;
//function

const init = function () {
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  //Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active'); //if it is there it will remove
  player1El.classList.toggle('player--active'); //if not there it will add
};
//starting conditions
//   diceEl.classList.add('hidden');
// score0El.textContent = 0;
// score1El.textContent = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2.display dice

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    //3.check for rolled one if yes switch the player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

//holding functionality

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current Score to active player's score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    //scores[1]=scores[1]+currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.check if player score is greater than 100
    if (scores[activePlayer] >= 20) {
      //Finish the game

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document;
      // .querySelector(`.player--${activePlayer}`)
      // .classList.add('player--active');
      playing = false;
    } else {
      //else switch to next player
      switchPlayer();
    }
  }
});

//resetting

btnNew.addEventListener('click', function () {
  init();
});
