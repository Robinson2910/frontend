'use strict';
//String cannot be mutated
//we can create a new string and then modify the other string
const airline = `Tap Air Portugual`;
const plane = `A320`;
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); //to get firt position of r ,index starts from 0 for string also
console.log(airline.lastIndexOf('r')); //to get last position of r ,index starts from 0 for string also
console.log(airline.indexOf('Portugual')); //to get  position of word,it return only the starting Index

console.log(airline.slice(4)); //similar to substring in java

console.log(airline.slice(4, 7)); //it returns the string from 4 to 6,exludes 7

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2)); //-2 implies the second element from the last becomes the starting point and then till the end

console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats

  const s =
    seat.slice(-1) == 'B' || seat.slice(-1) == 'E'
      ? 'You got the Middle Seat'
      : 'You got Lucky';
  console.log(s);
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat(`3E`);

//why strings have method shouldn't method only be available on objects?
//but String is primitive right

//wll,here is it how it works

//whenever we call a method on the String Javascript will automatically behind the scenes convert that string primitive to an object
//with the same content

//and on that object methods are called

//this is called as boxing

//after calling the method and when it has completed execution

//it gets converted back to object

console.log(new String('jonas'));

console.log(airline.toLowerCase());

console.log(airline.toUpperCase());

//Fix capitalization in name

const passenger = 'jOnAs'; // it should look like this Jonas

const passengerLower = passenger.toLowerCase();

const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Comparing emails

const email = 'hello@jonas.io';

const loginEmail = 'Hello@Jonas.IO \n';

const normalizedEmail = loginEmail.toLowerCase().trim(); //since .toLowerCase() return String we can directlly call trim method on it
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
console.log(normalizedEmail);

//from es6 we have trimStart() and trimEnd()

//replacing

const priceGB = '288,97P'; //P=> pound

const priceUS = priceGB.replace('P', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23.Boarding door 23!';

console.log(announcement.replace(/door/g, 'gate'));

console.log(announcement.replaceAll('door', 'gate'));

//MEthod which returns BOOleans for string
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('BOEING'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('PARt of the new air bus family');
}

//Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board');
  else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop some food and a pocket knife');

checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);

console.log('a+very+nice+string'.split('+')); //it returns an array
console.log('Robinson Manuvel'.split(' ')); //it returns an array

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName);
//Join is opposite of split
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const passenger2 = 'Jessica ann smith davis';

//method 1
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

//method2
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName(passenger2);

//padding string(adding characters to string if it is under a certain limit of characters)

const message = 'Go to gate 23!';

console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log(message.padStart(20, '+').padEnd(30, '+'));

//in credit card except few numbers rest of the number is masked(real world applicaiton)

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  console.log(last.padStart(str.length, '*')); //last.padStart(str.length,*);
};
maskCreditCard(43333333245);
maskCreditCard(433333333333509);

//repeat method

const message2 = `Bad weather.....All Departures Delayed...`;

console.log(message2.repeat(5));
const planeInLine = function (n) {
  console.log(`There are ${n} plane in line ${'✈️'.repeat(n)}`);
};
planeInLine(5);
planeInLine(3);

//for more String method check in MDN

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    if (second) {
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`);
    }
  }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} ${time.replace(':', 'h')}`;
  console.log(output.padStart(45, ' '));
}
