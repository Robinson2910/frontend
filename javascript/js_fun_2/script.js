"use strict"; //acrivates strict mode which makes easier for developers to avoid accidental errors
// strict mode forbids us to do certain things
// makes visble the errors in console
// eg
// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) {
// //   hasDriverLicense = true;
// // }
// // if (hasDriversLicense) console.log("i can drive");

/**************** */
//FUnction
/**************** */
// funcion is a piece of code which we can use again and again

//Syntax  function function_name(parameter1,parameter2)
//function declaration
// function logger() {
//   console.log(`My name is Robinson`);
// }

// logger(); //calling/running/function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(5, 5);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   return 2037 - birthYear; //return the age
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// //function expression
// //basicaly what we do here is
// //we write the function in same way as before
// //but we dont give it a name
// //instead we equate it to a variable
// //and using that variable name function can be called
// // syntax: const fn_name=function(parameter1,pa2)
// // {
// //   return ;
// // }
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// //it is considered as expression as expression produces values this function also produces value
// let age2 = calcAge2(1991);

// console.log(age1, age2);
// console.log(age1, age2);

// //arrow functions(spl type of function expression)
// //syntax const fn_name=(parameter1,parameter2)=>
// // { .....
// //   return value
// // }
// const calcAge3 = (birthYear) => 2037 - birthYear;
// let age3 = calcAge3(1991);
// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstname) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstname} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1991, "Bob"));
// //arrow fn do no get this keywords

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${cutFruitPieces(
//     apples
//   )} pieces of apples and ${cutFruitPieces(oranges)} pieces of oranges`;
//   return juice;
// }

// console.log(fruitProcessor(4, 3));

// after return the function will  immediately exit

// note:all fns work in the sameway
// receive input data
// transform data
// output data
// parameter are placeholder..they hold the data which we pass as arguments

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); //michael
// console.log(friends[2]); //peter
// // friends.length returns the length of the array
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";

// console.log(friends);

// only primitive variables are immutable if declared as constant

// array is not primitibe hence it can be mutated even if it is declared as const

// but we cannot replace the entire array

// eg:friends=['rovin','jasd','sadasdas']

// const firstname = "Jonas";
// const jonas = [firstname, "Schemdtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

//array can consist of any data type including variables,arrays,expression

//exercise
// function calcAge(birthyear) {
//   return 2037 - birthyear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// console.log(age1, age2, age3);

// const age = [age1, age2, age3];
// console.log(age);

//in built methods of arrays

//1 push- adds element to the end of the array and also returns the length of new array

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");

// console.log(friends);
// console.log(newLength);

// //2 unshift-adds element to the start of the array and also returns the length of new array

// friends.unshift("John");
// console.log(friends);

//remove elements from the end and returns the removed element

// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

//shift removes the first element(similar to left shift)
// friends.shift();
// console.log(friends);

//to get position of certain element in array

// console.log(friends.indexOf("Steven"));

// //includes return if that element is in the array or not uses check equality for the check
// console.log(friends.includes("Steven"));

// if (friends.includes("Steven")) {
//   console.log(`you have a friend called Steven`);
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
//Introduction to objects
//key value pairs
// instead of [] bracs in arrays we use { } in objects
// object literal syntax

// const jonas = {
//   firstname: "robinson",
//   lastname: "manuvel",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "Steven"],
// };
//dot notation to retrieve the value of property of object
console.log(jonas.lastname);
// console.log(jonas[`lastname`]);

// const nameKey = "name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

//when we have to compute the property name..only bracket notation can be used

const interestedIn = prompt(
  "What do you want to know about jonas?Choose between firstName,lastName,age,job,and friends"
);
if (jonas[interestedIn]) {
  //if value exists print it
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstname,lastname,age,job,and friends"
  );
}
//adding new properties to objects
jonas.location = "portugual";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// console.log(
//   `Jonas has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`
// );

//any function that is attached to an object is called method

// const jonas = {
//   firstname: "robinson",
//   lastname: "manuvel",
//   birthYear: 1991,
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "Steven"],
//   calcage: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcage(1991));

// using this keyword

const jonas = {
  firstname: "robinson",
  lastname: "manuvel",
  birthYear: 1991,
  hasDriversLicence: false,
  job: "teacher",
  friends: ["michael", "peter", "Steven"],
  // calcage: function () {
  //   console.log(this); //this points to the adress of currently calling object
  //   return 2037 - this.birthYear;
  // },

  calcage: function () {
    this.age = 2037 - this.birthYear; //adding new property to currently calling object
    return this.age;
  },
  getsummary: function () {
    this.summary = `Jonas is ${this.calcage()} old teacher,and he ${
      this.hasDriversLicence
        ? `has a driver's license`
        : `Does not have a driver's license`
    }`;
    return this.summary;
  },
};

console.log(jonas.calcage());
console.log(jonas.getsummary());

// GK: arrays are objects thats y they have methods
//jonas.push('sadsdsad'); the array name jonas is object
//and it has method like push,shift,unshift and so on

// console.log(`lifiting weights repitition 1`);
// console.log(`lifiting weights repitition 2`);
// console.log(`lifiting weights repitition 3`);
// console.log(`lifiting weights repitition 4`);
// console.log(`lifiting weights repitition 5`);

//for loops keeps running while condtion is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifiting weights repitition ${rep} 🏋️`);
}
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = []; //syntax to create empty arrays
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);

  //filing types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonas[i]);
}

console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages[i] = 2037 - years[i];
}
console.log(ages);

//continue and break
//coninue wiil exit the current iteration and go to next
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") {
    continue;
  }
  console.log(jonasArray[i]);
}

//break will completely terminate the loop
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") {
    break;
  }
  console.log(jonasArray[i]);
}

console.log("---printing in reverse---");
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repition ${rep}`);
  }
}

// //it will run while condition is true
// let rep = 1; //initialization
// //when we dont have in hand how many times loops will run
// //while loop comes in handy
// while (rep <= 10) {
//   console.log(`lifiting weights repitition ${rep} 🏋️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`hurray you've rolled 6`);
  }
}

/*Summary
array methods learnt

1)push and unshift
2)shift and pop
3)indexOf
4)lastIndexOf
5)includes

// 1 push- adds element to the end of the array and also returns the length of new array

// 2 unshift-adds element to the start of the array and also returns the length of new array

// 3 pop -remove elements from the end and returns the removed element

// shift removes the first element(similar to left shift)

// indexOf-//to get position of certain element in array

// includes return if that element is in the array or not uses check equality for the check

object two ways to retieve

dot and bracket notation


for loops 

while loop

continue 

break

*/
