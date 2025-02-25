'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName},You are ${age},born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1991 && birthYear <= 1996) {
//       var millenial = true;
//       //creating new variable with same name as outer scope's variable
//       const firstName = 'Robin';
//       const str = `oh, and you're a millenial ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       const output = 'new output';
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3)); //function are also block scoped in strict mode
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //it does get its own this keyword,so the arrow fn simply uses lexical this keyword
//   //which means it uses the this keyword of its parent scope(this keyword of global scope is window)
// };

// calcAgeArrow(1980);
// const jonas = {
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge; //method borrowing
// matilda.calcAge(); //this keyword points to the object calling the method

// const f = jonas.calcAge;
// f();
var firstName = 'Matilda'; //it adds propert named firstName to the global object window

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet(); //since arrow doesn't have this function it will call this keyword of parent scope i.e the global scope
//i.e the window object...but this.firstName there is no firstname in window object hence undefined is printed
