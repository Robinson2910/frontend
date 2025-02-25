'use strict';
//optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//with optional chaining(tests if value on the left exists)
//if does not exist it will return undefined

console.log(restaurant.openingHours.mon?.open); //only if restaurant.openingHours.mon exists then perform .open
//if not exists then result will be undefined immediately

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day},we open at ${open}`);
}

//methods

//we check if method exists, if it exists we call it
console.log(restaurant.order?.(0, 1) ?? `method does not exist`);
console.log(restaurant.orderRosssito?.(0, 1) ?? `method does not exist`);

//arrays
const users = [{ name: 'jonas', email: 'jonas@gmail.com' }];
console.log(users[0]?.name ?? 'user array empty'); //to check if an array is empty or not we use user[0]?.

//Property NAMES(keys)
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(openingHours)) openStr += `${day},`;
console.log(openStr);

//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

//ENTRIES

const entries = Object.entries(openingHours);
console.log(entries);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1(robin)

for (const [i, j] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${j}`);
}
//2(robin)
let avg = 0;
for (const values of Object.values(game.odds)) {
  avg += values;
}
avg /= Object.values(game.odds).length;
console.log(avg);

//3(robin)
for (const values of Object.keys(game.odds)) {
  if (game[values])
    console.log(` Odd of victory ${game[values]}: ${game.odds[values]}`);
  else {
    console.log(` Odd of draw: ${game.odds[values]}`);
  }
}

const scorers = {};

// Iterate through the array
for (const element of game.scored) {
  // If the element is not a property of the object, add it with a count of 1
  if (!scorers[element]) {
    scorers[element] = 1;
  } else {
    // If the element is already a property of the object, increment its count by 1
    scorers[element]++;
  }
}
console.log(scorers);

//SETS (ES6)

//collection of unique values
//syntax const Set_Name=new Set(iterable)
//Strings and arrays are iterables
const orderSet = new Set([
  'Pasta',
  'PIZZA',
  'PIZZA',
  'Risotto',
  'Pasta',
  'PIZZA',
]);
console.log(orderSet);

// just like arrays sets are also iterables

console.log(new Set('Robin'));

console.log(orderSet.size); //similar to lenght in arrays

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread')); //similar to include method in arrays

orderSet.add('garlic bread'); //to add elements to sets
orderSet.add('garlic bread');
console.log(orderSet);
orderSet.delete('Risotto');
console.log(orderSet);

//Retrieve values(cannot retrieve) if needed use arrays

//looping is possible just like any other  iterable
for (const order of orderSet) console.log(order);

//use case:to remove duplicates of array
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager']).size); //just to get number of unique positions in a restaurant
const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager'];
const staffUnique = new Set(staff);
console.log(staffUnique);

//spread operators can be used on any iterable
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);

//MAPS

// to map keys to values we use maps

//keys can be of any data types where as in objects keys were strings

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugual')); //list not only add elements to map but also returns the map after adding elements

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed:(');

//retrieve values using key
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 23;

console.log(
  rest.get(time > rest.get('open') && time < rest.get('close') ? true : false)
);
console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
// console.log(rest.clear()); //similar to sets
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size); //similar to sets

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2])); //[1,2] is not the same object in the heap hence it returns undefined

// inorder to make it work we need to create an array outside and use the same to get the value
//as arr refer to same object in memory
const arr = [1, 2, 3];
rest.set(arr, 'Test2');
rest.set(document.querySelector('h1'), 'Heading'); //mapping object(DOM) to string
console.log(rest.get(arr));

console.log(rest);

const question = new Map([
  ['question', 'what is the best programming language in the world'],
  [1, 'c'],
  [2, 'JAVA'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again! '],
]);
console.log(question);
console.log(Object.entries(openingHours)); //similar to maps this also returns an array of arrays(2 elements(key and value))

//=>objects can be converted to maps easily

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}

// const answer = Number(prompt(`Your answer`));
const answer = 10;
console.log(question.get(question.get('correct') === answer));

// convert map to array

console.log([...question]);
console.log(question.entries()); //
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2

gameEvents.delete(64);

//3

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

console.log(gameEvents.values());
const time2 = [...gameEvents.keys()].pop();
console.log(time2);
//correct answer
console.log(`An event happened on average,every ${time / gameEvents.size}`);

//4.

for (const [key, value] of gameEvents) {
  const half = key < 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
