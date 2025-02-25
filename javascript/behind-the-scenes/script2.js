'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));//funcitons are also block scoped
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;//IT GETS ADDED AS A PROPERT TO WINDOW OBJECT
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980); //this will point window object

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;//adding new propety as a function
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';
//for regular function call this keyword=undefined if it is not a arrow fn
//two solns are provided for it

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     //function inside a fn
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2(arrow fn inside a func expression
//     const isMillenial = () => {
//       console.log(this);//since arrow fn doesnt have this keyword it points to this keyword of above scope i.e calcage fn
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();//regular function call
//   },

//   greet: () => {
//     console.log(this);//arrow fn doesn't have a this keyword..it takes the this keyword of the above scope in some cases it can be the window object(global) or it can be this keyword of the above function also

//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
jonas.calcAge();

// arguments keyword
//functions get access to argument keyword
//argument keyword is presnt only in regular function not in arrow fns
/this can be useful if we have passed more arguments than the parameters

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

//never use arrow fn as method
//function expression or decalaration is preferrable


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;//so basically both jessica and marriedJessicca will point to the same object
//so changes to any of these will reflect in both
marriedJessica.lastName = 'Davis';//changing in heap is always possible(TMI)
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {}; //changing in stack is not possible as it is const

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);//merge two objects and return new object
//but this is just a shallow copy
//if there is object withing object ,the object which is inside will point to memory adress
//which is pointed by jessica copy also
//so any change to array in jessica copy will refelect on jessica2 and vice versa
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/

const robin = {
  firstName: 'Robinson',
  lastName: 'Manuvel',
  age: 20,
  family: ['Alice', 'Bob'],
};

const robinCopy = Object.assign({}, robin);
robin.family.push('mom');
robin.lastName = 'jason';
console.log(robinCopy);
console.log(robin);
