'use strict';
//query selector selects the element and then we can retrieve the text content of it
//same selector which we use in css is used for selection
// console.log(displayMessage())

//Dom and DOm manipulation

// Document object model:
// Structured representation of html document allows javascript to access html elements and styles to manipualte them
//change text,html attributes,even css styles
// dom is automatically created by browser as soon as page loads

// in this tree each html element is an object

// document is a  special type of object in dom

// document is a global object provided by the browser's DOM API, not a part of the JavaScript language itself.

// it acts as entry point to dom

// it has a spl function called querySelector by which we can select any elements in the html document

// so basicaly dom is represntation of html document

// document.querySelector('.message').textContent = '🎉Correct number!';
// document.querySelector('.number').textContent = '12';
// document.querySelector('.score').textContent = '220';
// document.querySelector('.guess').value = '220';

//
// step 1:select the element where the event is going to occur
// step2:now we can call addeventListen method on that element
// step3:we neeed to pass in the type of the event in this case its a simple click
// step4:as reaction to the click event we should tell the event listener what it should do using a function(event handler)
// function can be passed as paramter
// that function will be called as soon as the event occurs(callback)

let secretNumber = Math.trunc(Math.random() * 20) + 1; //random values changes whenever browser gets loaded
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage('⛔ No number!');
  }
  //when player win
  else if (guess === secretNumber) {
    displayMessage(`🎉Correct Number`);
    //selecting dom element and manipulating it
    console.log(typeof document.querySelector('.number')); //every dom element iss an object
    //each object has its own properties and using that we can manipulate the dom
    document.querySelector(`.number`).textContent = secretNumber;
    //manipulating styles in css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.score').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high` : '📉 Too Low');

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the game☹️');

      document.querySelector('.score').textContent = 0;
    }
  }
});

//again btn functionality

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// The DOM (Document Object Model) is not inherently part of the JavaScript language itself but is rather part of the Web APIs provided by browsers.

// ### Understanding the DOM:
// - **DOM Definition**: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects. Each node in this tree is an object representing a part of the document, such as an element, attribute, or piece of text.

// - **Web APIs**: The DOM is part of the larger set of Web APIs, which are interfaces provided by web browsers. These APIs allow developers to interact with the browser and manipulate the document, handle events, interact with the network, and more.

// ### JavaScript's Role:
// - **JavaScript and the DOM**: JavaScript is the scripting language commonly used to interact with the DOM. When you write JavaScript code to manipulate a webpage (e.g., changing the content of an element, responding to user input, etc.), you are using the DOM API provided by the browser.

// - **Example**: When you use `document.getElementById('myElement')`, `document` is a global object provided by the browser's DOM API, not a part of the JavaScript language itself.

// ### Summary:
// - **JavaScript**: The programming language used to write scripts.
// - **DOM**: A Web API that represents the document structure as a tree of objects.
// - **Web APIs**: A set of interfaces, including the DOM, provided by the browser to interact with the webpage.

// In essence, the DOM is the bridge between your JavaScript code and the content of your web pages, enabling you to dynamically update and interact with the page as users interact with it.
