'use strict';
//_____DOM______
/**DOM - Document Object Model
 * It is basically structured representation of html documents
 * Allows JS to acces HTML elements and styles to manipulate them
 * Example - change text, HTML docs, CSS attributes
 * DOM is automatically created by te browser as soon as it is loaded
 * DOM is actually a part of web APIs and not JS
 * DOM IS NOT A PART OF JS
 */
//selecting the message element (refer html file to find the element)
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Correct number!';
//let number = document.querySelector(`.guess`).value;
//number = 23;
// if (number === 29) {
//   document.querySelector(`.message`).textContent = `Correct Number`;
// }
//The querySelector() method returns  string everytime

const getRandomNumber = function (max) {
  return Math.trunc(Math.random() * max);
};

let myNumber = getRandomNumber(20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing');
  score = 20;
  document.querySelector('.score').textContent = 20;
  myNumber = getRandomNumber(20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

//Handler function
function validateGuess() {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    displayMessage(`No number...⛔`);
  } else if (guess > myNumber) {
    if (score > 1) {
      displayMessage(`Try lower...⬇️`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost😔');
      document.querySelector('.number').textContent = myNumber;
    }
  } else if (guess < myNumber) {
    if (score > 1) {
      displayMessage(`Try higher...⬆️`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You lost😔');
      document.querySelector('.number').textContent = myNumber;
    }
  } else {
    displayMessage(`Correct number🥳`);
    document.querySelector('.number').textContent = guess;
    if (score >= document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
}

//on mouse click
document.querySelector('.check').addEventListener('click', validateGuess());

//on pressing `enter`
document.querySelector('.guess').addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    validateGuess();
  }
});
