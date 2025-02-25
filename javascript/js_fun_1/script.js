/*let js = "amazing";
if (js == "amazing") alert("javascript is fun");
console.log(40 + 8 + 23 - 10);

//cosnsole.log() it is used to display the value in the console

// eg of value 'Jonas',23,48
//value is smalles unit of informartion
//values can  be stored in variables

// variable Name conventions

let firstName = "Rovinson";
console.log(firstName);
console.log(firstName);
console.log(firstName);

camel casing is used in javascript(convention)
$ and _ are the spl symbols which can be used to name the variables


// variable should not start with number
// keywords should not be used as variable names
// function cannot be used as variable name
// name also is reserved keyword
// dont start variable name with upperCase
// for constants all letters must be caps(eg:PI)
let jonas_matlida = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.134134;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let country = "India";
let continent = "Asia";
let population = 10;
console.log(country);
console.log(continent);
console.log(population);

// every values is an object or an primitive data type(it is the value which has datatype not the variable)

// number used for decimals and integers

// string

// boolean

// undefined:value taken by a variable that is not yet defined
// eg let children;

// NULL also means empty value

// Symbol(ES2015):Value that is unique and cannot be changed[not useful for now

// BigInt

Javascript has dynamic typing:we do not have to manually define the data type of value stored in a a variable
data types are determined automatically
value has data type not variable

*/

/*


// let,const,var 

console.log(true);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);//boolean
console.log(typeof javaScriptIsFun);
console.log(typeof "jonas");
// console.log(typeof 23); 
javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);



let year;
// both value and typeof value is undefined
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);

//null is not an object but typeof returns object for typeof null
console.log(typeof null);

// let and const were introduced in es6
//var was used prior to es6

//let can be used to declare variables that change their values later

//const can be used to declare variable that remains constant throughout the entire program

const birthyear = 1990;
// birthyear = 1991;

// const job;


// var is oldway of defining variables prior to es6

// let is block scoped

// var is function scoped


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

//2**3 means 2 to powwer of 3=2*2*2;

const firstName = "Jonas";

const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);*/

/************************ */

/*operators */

/***********************/

/*
let x = 10 + 5; //15
x += 10; //25
x *= 4; //100
x++; //101
x--; //100
console.log(x);

//comparison operators

console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*operator precedence checkout the mdn docs */

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// //challenge

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;
// const bmiJohn = massJohn / (heightJohn * heightJohn);
// const bmiMark = massMark / (heightMark * heightMark);
// console.log(bmiMark, bmiJohn);
// const markHigherBmi = bmiMark > bmiJohn;
// console.log(markHigherBmi);

/*************** */
// Strings and template literals
/*****************/

// const firstName = "Robinson";
// const lastName = "Manuvel";
// const birthyear = 1991;
// const year = 2037;
// const job = "teacher";

// any expression(i.e anything that holds a value) can be put inside ${}
// const jonas =
//   "I'm " + firstName + ",a " + (year - birthyear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName},a ${year - birthyear} year old ${job}! `;
// console.log(jonasNew);
// console.log(`Just a regular string...`);

// console.log("String with \nmultiple\nlines");

// its easier with template string

// console.log(`String
// multiple
// lines`);

// control structures(if else)

// const age = 15;
// const isOldEnough = age >= 18;
// if (age >= 18) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   const yearLeft = 18 - age;
//   console.log(`Sarah is too young.Wait another ${yearLeft} years`);
// }
// const birthyear = 1991;
// let century;
// if (birthyear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//Type conversion and cohersion

const inputYear = "1991";

//type conversion

console.log(Number(inputYear) + 18);

//converting String which cannot be converted to number

console.log(Number("Jonas")); //returns value of NaN implies not a number
console.log(typeof NaN); //returns Number
console.log(String(23));

//type coercion
// whenever there is a plus operation between Number and String then js converts number to String
console.log("I am " + 23 + " years old");

// whenever there is a minus operation between Number and String then js converts String to number

// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1; //11
// n = n - 1; //10
// console.log(5 + "2"); //52
// console.log(n);

// console.log(2 + 3 + 4 + "5"); //95

// console.log("10" - "4" - "3" - 2 + "5"); //15

//Truthy and falsy value

//5 falsy values: 0,'',undefined,null,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Robin"));
// console.log(Boolean({})); //empty object returns true

// const money = 0;
// if (money) {
//   console.log(`Don't spend it all ;)`);
// } else {
//   console.log(`You should get a job`);
// }

// let height = 0; //0 is also a falsy value
// if (height || height === 0) {
//   console.log(`Yay height is defined`);
// } else {
//   console.log(`Yay height is not defined`);
// }

//equality operators

// const age = "18";

// if (age === 18) {
//   console.log("you just became an adult");
// } else if (age == 18) {
//   console.log("you are not an adult:(loose)");
// }

//=== strict equality(doesnt do type coercion)
//==   loose equality(does type coercion)

//=== checks both value and datatype
//== checks only the value

//strict equality is preffered
// const favourite = Number(prompt("what's your favourite number"));
// console.log(favourite);

// if (favourite === 23) {
//   console.log(`cool! 23 is an amazing number`);
// } else if (favourite === 7) {
//   console.log(`cool! 7 is an amazing number`);
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite != 23) {
//   console.log(`why not 23`);
// }

//Boolean logic

// !, &&, ||

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }
// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// if (hasDriversLicense && hasGoodVision && isTired) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive`);
// }

// switch stmt

// const day = "sunday";

// switch (day) {
//   case "monday": //day===monnday
//     console.log("plan my course structure");
//     console.log("goto coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
//     break;
// }
// if (day === "monday") {
//   console.log("plan my course structure");
//   console.log("goto coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// }

// 3+4 is an expression as it prouduces a value
//if else is a stmt and switch is also stmt as it doesn't produce a value

//inside a template literal we should put only expression(********)

//conditional operator(ternary)(condition?stm1:stmt2)

// const age = 23;

// const drink =
//   age >= 18
//     ? console.log("I like to drink wine 🍷")
//     : console.log("I like to drink water 💧");

// let drink2;
// if (age >= 18) drink2 = "I like to drink wine 🍷";
// else drink2 = console.log("I like to drink water 💧");
// console.log(drink2);
// console.log(`i like to drink ${age >= 18 ? `wine 🍷` : ` water💧`}`);

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`the tip value is ${tip}`);
