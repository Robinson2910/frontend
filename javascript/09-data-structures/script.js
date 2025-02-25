'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekday = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

//es6 enhance object literals
//similar to braacket notaion in objects
//we can also give key names ,in [any value]:value
const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);
const restaurant = {
  name1: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  //nested objects
  //es6 enhanced object literals
  openingHours,

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time2 = '8:00',
    adress = 'bharathi nagar',
  }) {
    console.log(starterIndex, mainIndex, time2, adress);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is ur delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//destructuring arrays(important)
const [x, y, z] = arr; //x=arr[0],y=arr[1],z=arr[2]

console.log(x, y, z);
let [main, , secondary] = restaurant.categories; //main=categories[0],secondary=categories[2]
console.log(main, secondary);

//case 1:swapping
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//case 2:swapping(trick)
[main, secondary] = [secondary, main];

console.log(restaurant.order(2, 0));

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);8 9 1
*/
//object destructuring
// restaurant.orderDelivery({
//   time2: '22:30',
//   adress: 'sdsadasda',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   time2: '22:30',

//   mainIndex: 1,
// });
// let { name1, openingHours, categories } = restaurant; //name1=restaurant.name1,openingHours=restaurant.openingHours,restaurant.categories
// console.log(name1, openingHours, categories);
// //renaming actual names
// const {
//   name1: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //mutating variables

// // let a = 111;
// // let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// /****IMPORTANT  */
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c  },
// } = openingHours;

// console.log(o, c);

// const arr = [7, 8, 9];
//spread operators

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, ...arr];
// console.log(badNewArr);
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
//spread operator does not create variable and it is used in place whre values are seperated by commas

// //copy array

// const mainMenu = [...restaurant.mainMenu];

// //join 2 arrays

// const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //iterables :arrays,strings,maps

// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// //spread operators are used when it is passed as arguments to functions or lement to an array

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingrediet 2?`),
//   prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// //spread operators work on objects as well after es8

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppee' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name1 = 'ristorante roma';
// console.log(restaurant.name1);
// console.log(restaurantCopy.name1);

// //SpreAD,because on right side of =

// //Rest pattern and parameters

// //spread operator is used to unpack an array

// //rest operator is used to pack elements into an array
// //rest is used to pack rest of elements into new object or new array
// //used at end of the left hand side

// //1)destructuring
// const arr2 = [1, 2, ...[3, 4]];

// //Rest,because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(typeof pizza, typeof risotto, typeof otherFood);

// //objects
// //remaining elements will be collectted into new object

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
console.log('hellpo');
//2) functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7); //rest operator takes rest of the elements seperated by commas and packs it into a single array or any iterable
// //in this case the rest of elements is the entire parameters which is passed in the function

// const x = [23, 5, 7];
// add(...x); //spread operator unpacks the array into elements seperated by commas

// restaurant.orderPizza('mushroom', 'onion', 'onion', 'onion', 'onion', 'onion');

//short circuiting

//use any datatype,return any datatype,short-circuiting

// console.log(`--------------------OR--------------------------------`);
// //shortcircuit when operator is true
// console.log(3 || 'Jonas'); //if first operator is truthy value it will imeddiatelt return the truthy value

// console.log('' || 'Jonas'); //falsy value || truthy valye => truthy value is returned

// console.log(true || 0); //truthy value || falsy valye => truthy value is returned
// console.log(undefined || null); //null is returned even though it is falsy value
// //since there is no shortcircuiting for both

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`-------------------AND--------------------------------`);

// //works in exact opposite way of OR(shorcircuiting)

// console.log(0 && 'Jonas'); //shortcircuits when first values is falsy hence it is returned

// console.log(7 && 'Jonas'); //there will be no shorcircuiting hence the last value is returned

// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //nullish coaleshing operator

// //0 and '' are truthy values for nullish coaleshing operator
// //null and undefined are consider as falsy values
// //it gets shortcircuited when values is true similar to OR operator
// restaurant.numGuests = 0;

// const guestWrong = restaurant.numGuests || 10;

// const guestcorrect = restaurant.numGuests ?? 10; //=>guestCorrect=restaurant.numGuests if it exists or else it will be equal to 10

// console.log(guestWrong);
// console.log(guestcorrect);

// //logical assignment operator

// const rest1 = {
//   name1: 'capri',
//   numGuests: 2,
// };

// const rest2 = {
//   name1: 'La piazza',
//   owner: 'Giovanni rossi',
// };
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests = rest1.numGuests || 10;
// // //or assignment operator
// // rest1.numGuests ||= 10;

// //logical nullish assignment operator(best to use this as it aslo considers 0 as true)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //And asignmentoperators
// rest2.owner = rest2.owner && '<Anonymous>';//shortcircuits when it is false or when it reaches end of the stmt
// rest2.owner &&= '<Anonymous>';
// console.log(rest1);
// console.log(rest2);

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were score `);
// };
// printGoals('davies', 'muller', 'robin', 'jason');
// printGoals('robin', 'jason');
// printGoals(...game.scored);

// //7

// team1 < team2 && console.log('team1 is more likely to win');
// team1 > team2 && console.log('team2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// //for of loop

// for (const item of menu) {
//   console.log(item);
// }
// for (const item of menu.entries()) {
//   console.log(item);
// }
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// //destructuring
// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }
