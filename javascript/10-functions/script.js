'use strict';
//DEFAULT PARAMETERS

const bookings = [];
const creatBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //numPassenger||=1;
  //price=price||199*numPassengers

  //just by using the variable name propert and value will be defined in an object
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// creatBooking('LH123');
// creatBooking('LH123', 2, 800);
// creatBooking('LH123', 3);
// creatBooking('LH123', 5);
// creatBooking('LH123', undefined, 100);
// //to keep the parameter as default value we can pass in undefined but value of paramter willl be default value only

const flight = 'LH234';
const jonas = {
  name: 'Jonas schmedtman',
  passport: 3509,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH99';
  passenger.name = 'MR. ' + passenger.name;
  if (passenger.passport === 3509) {
    alert('Checked In');
  } else {
    alert('Wronf passport');
  }
};
// reference to object jonas is passed as an argument
// so any changes made in that reference will reflect in jonas as well
// but for primitive datatype value wont be changed
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//reference to object jonas is passed as an argument
//so any changes made in that reference will reflect in jonas as well
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};
newPassport(jonas);
checkIn(flight, jonas);

//JS does not have passing by reference

//in case of object we pass the value as refernce to heap i.e not considered as passing by reference where as in c++ we have reference for primitives as well

//hence only pass by value is there

/*******FIRST CLASS VS HIGHER ORDER FNS */

// 1) JAVACRIPT TREATS FNS AS FIRST CLASS CITIZENS

// 2)THS MEANS THAT FNS ARE SIMPLY VALUES

// 3)FUNCTIONS ARE JUST ANOTHER 'TYPE' OF OBJECT

// WHY WE SAY THAT JS PROVIDES FC FNS

// USE CASE OF FC FNS EARLIER EXAMPLES

// WE HAVE ALREADY STORED FNS IN VARIABLES

// ARGUMENTS TO OTHER FNS

// RETURN FUNCTION FROM FUNCTION

// SINCE FNS ARE OBJECT THERE CAN BE METHODS ON IT AS WELL

// SINCE JS PROVIDE FIRST CLASS FUNCTION WE ARE ABLE TO WRITE HIGHER ORDER FNS

// HIGHER ORDER FN IS FN THAT RECEIVES ANOTHER FN AS AN ARGUMENT, THAT RETURNS A NEW FN ,OR BOTH

// THIS IS ONLY POSSIBLE BECAUSE OF FIR

// building higher order fn

const oneWord = function (str) {
  // return str.replace(/ /g, '').toLowerCase();  //old method
  return str.replaceAll(' ', '');
};
const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' '); /*IMPortant */
};

//higher order fns
//this fn operates at higher level of abstraction leaving these lower level details to lower level fns
const transformer = function (str, fn) {
  console.log(`orginal string: ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`transfromed by:${fn.name}`); //fn has a property called name
};
// In JavaScript, a callback function (often referred to simply as a "callback") is a function that is passed as an argument to another function
// and is intended to be executed at a later time
// , typically after some asynchronous operation or task has been completed. Callback functions are a fundamental concept in JavaScript and are used extensively in event handling,
//  asynchronous programming, and many other scenarios
transformer('JavaScript is the best!', UpperFirstWord); //in this case UpperFirstWord is considered as callback fn which can be used later by that fn
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time

const high5 = function () {
  console.log(`🙌`);
};
// document.body.addEventListener('click', high5); //here addEvnetlistenr is similar to transformed fn
//high5 is a callBack fn

['Jonas', 'robin', 'jason'].forEach(high5);

//abstraction means we hide the details of some code implementation
//we dont really care about those details
//this allows us to think about problems at an abstract level

//higher order fns create abstraction

/*************FUNCTIONS RETURNING FNS **********************/

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedttmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// console.log(book(20, 'SArahw williams'));
//Does not book a ticket in lufthansa because book is just a function outside lufthansa its not a method of lufthansa
//hence it will return undefined values since this does not point to anywhere

// book(23, 'sarah williams');

//fn is just an object hence it has fn

//CALL METHOD

book.call(eurowings, 23, 'williams'); //call function helps the book to have this keyword point to eurowings and then call the book fn
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); //call function helps the book to have this keyword point to swiss and also pass arguments
console.log(swiss);

//Apply method(similar to call method but we need to pass in array instead of parameters of the fnf)

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

//call methods is preffered over apply method
flightData[0] = 584;
flightData[1] = 'Robinson';
book.call(swiss, ...flightData);

// BIND METHOD

// IT also allows us to manually set the this keyword for any function call

// the difference is that bind does not immediately call the function

// instead it returns a new fn where the this keyword is bound(i.e it is set to a different objec)

const bookEW = book.bind(eurowings); //in this case the bind function returns a new fn with this key set to eurowings
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven williams');
bookLH(23, 'Steven williams');

bookLX(23, 'Steven williams');

const bookEW23 = book.bind(eurowings, 23); //in the book fn the first argument is flightNum which is set to 23(this is not default this is constant setting it cannot be changed)
//now in the bookEW23 fn there will be one paramaeter the first argument of book is omiited as it is already set to 23
//so the only parameter in bookEW23 is just the name

//specifying parts of the parameter before hand just like we specified 23 in the above fn is actually a common pattern called partial application

//partial application means that part of the arguments of the orginal function are already applied which means alreadySet
//ex:bookEW23

bookEW23('SAM');

bookEW23('JASON');

//with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //we need to set the this keyword to lufthansa
//since this keyword of the handler function points to element on which handler is attached
//in this case this keyword by default will be set to .buy

//summary

//call method call the function with this keyword set to a specific object
//bind method returns a new fn with this keyword set to a specific object

//partial application(preset parameters)

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

//certain taxes have fixed tax percentage hence we can preset the rate
const addVAT = addTax.bind(null, 0.23); //in this case we dont need this keyword as it doesnt point to any object
//hence we point this keyword to null
//addVAT=value=>value+value*0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = rate => value => value + value * rate; //challenge question

const addTaxRate1 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const choice = Number(
      prompt(` What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++`)
    );
    if ((choice && choice <= 3 && choice >= 0) || choice === 0) {
      this.answers[choice]++;
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

//[5,2,3]

//[1,5,3,9,6,1]

//IMMEDIATELY INVOKED FUNCTIONS EXPRESSION

//FN THAT IS EXEUCTED INLY ONCE

//AFTER IT IS CALLED ONCE IT DISAPPEARS

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//IIFE
(function () {
  console.log('this will never run again');
  const isPrivate = 23;
})();

// all data defined inside a scope is private
// we also say that this datA IS ENCAPSULATED

// FOR EG  isPrivate IS ENCAPSULATED INSIDE THIS FN SCOPE WHICH IS CREATED
// DATA ENCAPSULATION AND DATA PRIVACY IS EXTREMELY IMPORTANT

// console.log(isPrivate);

//AFTER ES6
//JUST A BLOCK INSIDE PARENTHESIS CREATES A NEW SCOPE

{
  const isPrivate = 23;
}
// console.log(isPrivate);  eg this is not accesible in the global scope

//in case of executing the fn just once then the iife is the way to go

//CLOSURE FN

///////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
// secure booking has already finished execution .ie it is take out of the call stack
// but still the inner function i.e the booker fn has access to variables of the secureBooking fn
// what makes this possible is a closure

// this booker fn is fn that exists in a global scope

// the environment(secureBooking) in which th fn was created is no longer active ...it is gone..
// some how booker fn conitnues to have access to variable passengerCount at the time the fn was created

// so we can say that closure makes a fn remember all the variables that existed at the fn's birth place

// beauty of closure:any function always has access to the variable environment of the execution context in which fn was created

//Closure:Variable environment attached to the function ,exactly as it was at the time and place the function was created

// now in the case of booker,this fn was created ,it was born in the execution context of secure booking which was popped of the stack previously

// so therefore booken fn will get access to variable environment of the secureBOOking

// and this is how fn will be able to read and manipulate the passenger count variable

// this connection is what we call as closure

// closure will have variable and also the arguments *****

booker();
booker();
booker();

console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); //f will have a closure of a
console.dir(f);

// Re-assigning f function
h();
f(); //f will have a closure of b
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; //closure has priority over the scope chain
boardPassengers(180, 3);

//setTimeout fn syntax for fn call: setTimeout (callback fn,wait_time)

//the call back fn will be execute after wait_time milliseconds

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    const number = Math.trunc(Math.random() * 9);
    header.style.color = `#${number}${9}${number}`;
    console.log(`#${number}${9}${number}`);
  });
})();

//here the call bank fn has access to header through closurex
