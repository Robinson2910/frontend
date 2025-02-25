'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-09-11T13:15:33.035Z',
    '2023-09-10T09:48:16.867Z',
    '2023-09-12T06:04:23.907Z',
    '2023-09-13T14:18:46.235Z',
    '2023-09-09T16:33:06.386Z',
    '2023-09-01T14:43:26.374Z',
    '2023-09-08T18:49:59.371Z',
    '2023-09-07T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (24 * 60 * 60 * 1000)));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed == 0) return 'Today';
  else if (daysPassed == 1) {
    return 'Yestereday';
  } else if (daysPassed <= 7) return `${daysPassed} days`;
  else {
    // const day = String(date.getDate()).padStart(2, '0');
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const year = date.getFullYear();
    // const displayDate = `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date); //we r not passing any objects objects as we dont need hours and mins so we dont have to be more specific
  }
};
const formatCur = function (acc) {
  return new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  });
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formatter = formatCur(acc);
    const formattedMov = formatter.format(mov);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formatter = formatCur(acc);
  labelBalance.textContent = `${formatter.format(acc.balance)}`;
};

const calcDisplaySummary = function (acc) {
  const formatter = formatCur(acc);
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatter.format(incomes)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatter.format(Math.abs(out).toFixed(2))}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatter.format(interest)}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
const startLogOutTimer = function () {
  //Set time to 5 mins
  let time = 30;

  const tick = function () {
    //in each call ,print the remaining time to UI
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    //if(time==0) stop timer and logout
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    //decrease
    time--;
  };
  //once tick is called outisde to avoid that one second delay
  tick();

  //d(timer has been createed using setInterval() and every one second that callBack fn will be called and it returns a unique id whihc can be used to clear the timer )
  const timer = setInterval(tick, 1000); //=>tick fn will be call every 1s

  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//FAKE ALWAYS LOGIN

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//experimenting api

// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
// };

// const locale = navigator.language;
// console.log(locale);

// labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now); //iso language code table //lingos.net

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    // //intl.DateTimeFormat(locale,options).format(date)

    // //bascialy imagine like it sets the formatter to particular locale and option and using that local we format a given date
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); //iso language code table //lingos.net

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) {
      clearInterval(timer);
    }

    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
    //reset timer

    clearInterval(timer);

    timer = startLogOutTimer(timer);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);

    //reset timer

    clearInterval(timer);

    timer = startLogOutTimer(timer);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//by default all numbers are stored as floating point numbers in js

//base 10 => 0-9

//Binary Base 2=>0 1

//numbers are always stored in binary(64 bits)  in js BTS

//and only 53 bits are responsible are storing the value of numbers

//hence reperesnting fractional numbers in fractional numbers can be difficult
console.dir(Number);
console.log(23 === 23.0);

console.log(0.1 + 0.2); //running joke:it outputs 3.00000000000004

// converting numbers to string

console.log(Number('23'));

console.log(+'23');

//parsing

console.log(Number.parseInt('30px', 10)); //it gets rid of unnecessary symbols which are not number..but remember that it should start with number
//10 is the radix i.e the base number of decimal

//in case of hexadecimal we can pass the radix as 16

//to check if a number is not a number(practiclayy we  dont need this)
console.log(Number.parseFloat('2.5rem'));
//Number is a global object(part of window object) and it contains different methods dont confuse this with Number primitive or constructor
console.log(Number.isNaN('20')); //false

console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //true as infinity is not a number

//isFinite is used to check if values is number or string(practically this is used to check if it is a number or not)
console.log(Number.isFinite(20));

console.log(Number.isFinite('20'));
console.log(Number.isFinite(20 / 0));
console.log(Number.isFinite(+'20'));

//Math fns can do type coercion

console.log(Math.sqrt(25));

console.log(25 ** (1 / 2));

console.log(25 ** (1 / 3));
console.log(Math.max(5, 12, 2, 3, 3, '82'));
console.log(Math.min(5, 12, 2, 3, 3, 82));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(20, 30));

//rounding the numbers

console.log(Math.trunc(23.3)); //retrieves only the integer part

console.log(Math.round(23.3)); //to the nearest integer
console.log(Math.round(23.9)); //to the nearest integer

console.log(Math.ceil(23.3));
console.log(Math.floor(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

//ROUNDING DECIMALS

console.log((2.7).toFixed(3)); //to fixed returns value in string

console.log(+(2.7).toFixed(3)); //converting string to number

//Remainder operator

console.log(5 % 2);

console.log(8);

console.log(6 % 2);
console.log(7 % 2);

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;
console.log(isEven(8));
console.log(isEven(10));
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

const diameter = 287_460_000_000;
console.log(diameter);

console.log(Number('233_300')); //this would not work it will return NaN

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

//we might need numbers bigger than Number.MAX_SAFE_INTEGER

//BigInt

console.log(3244444444444444444444444444444444444444444444444444444n); //to store big numbers accurately we need to add n to the last number

console.log(BigInt(12321321));

//opertions

console.log(100000000000000000n + 100000000000000n);

console.log(100000000000000n * 10000000000n);

// console.log(10000000000n * 100); //cannot mix bigInt and other types

console.log(20n > 15); //this works as js will do type coercion (exception)

console.log(20n == 20);
console.log(20n + ' is really Big');

//Math fns wont work on BigInt

//Divisions

console.log(10n / 3n); //cuts the decimal part and output will be:3n

/*
//Create a date

//1 using constructor
// const now = new Date(); //current date and time
// console.log(now);

console.log(new Date('Sep 12 2023 17:40:55')); //passing a string as argument 

console.log(new Date(account1.movementsDates[0]));

//new Date(year,month,day,hour,mins,seconds)
console.log(new Date(2037, 10, 30,15,23,5));

console.log(new Date(0)); //0 milliseconds after unix time i.e jan 1st 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//THE DATES WE HAVE CREATED ARE OBJECTS HENCE THERE WILL BE METHODS
*/
//new Date(year,month,day,hour,mins,seconds)
const now = new Date();
console.log(now);
const future = new Date(2037, 10, 19, 15, 23);

console.log(future);
console.log(future.getFullYear()); //never use getYear() method always use getFullYear

console.log(future.getMonth()); //zero based month

console.log(future.getDate()); //day of the month

console.log(future.getDay()); //gets the day of the week..0 is sunday

console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime()); //milliseocnds that has passed since jan1 1970(i.e tthe time_stamp)

console.log(new Date(2142237180000));

console.log(Date.now()); //gets the current time stamp

future.setFullYear(2040);

console.log(future);
console.log(+future); //date string converted to timestamp or number

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (24 * 60 * 60 * 1000));

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

//internationalizing numbers

const num = 3884764.23;

const options = {
  style: 'currency', //can have 3 different values :1) unit,percentage,currency
  unit: 'celsius',
  currency: 'EUR',
};
console.log('US :', Intl.NumberFormat('en-Us', options).format(num));

console.log('GERMANY :', Intl.NumberFormat('de-DE', options).format(num));

console.log('SYRIA :', Intl.NumberFormat('ar-SY', options).format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

// two kinds of timers

// 1 set timeout time runs just once after a defined time while setInterva timer keeps runnning basicaly forever until we stop it

// setTimeout can be used to execute some code in the future

// it is hof which receives a callback fn
// setTimeout(() => console.log('Here is ur pizza 🍕'), 3000); //setTimeout calls the callback fn after 3s i.Xe 3000ms

// code execution does not stop at line 553 ,it just registers the callback fn to be called later(i.e after 3s) and it simply continues executing

console.log('Waiting...');
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is ur pizza 🍕 with ${ing1} and ${ing2} `),
  3000,
  ...ingredients
);

//we are not calling the call back fn setTimeout fn calls it and we need to pass arguments to settimeout fn and it will pass argument to callBack fn
//3rd argument of settimeout fn becomes the first argument of call back fn
//4th argument of settimeout fn becomes the second argument of call back fn

//we can clear the timer before it finished based on certain condition
//if we do this the callback fn inside setTimeout wont be called
if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

//SET timeout

// setInterval(function () {
//   const now = new Date();
//   console.log(
//     Intl.DateTimeFormat('en-US', {
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: false,
//     }).format(now)
//   );
// }, 1000);

// //what happens is that the call back fn is executed every 1 seconds continuosuly
// //for displaying advertisements this can be used
