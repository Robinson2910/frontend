'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//selecting the dom elements
// Elements

//Labels
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

//containers
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

//btns
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

//inputs
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; //to clear the default styles which were there in page just for styling purposes
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${index + 1} ${type}
          </div>
          
          <div class="movements__value">${movement}€</div>
        </div>`;
    //         Position: Specifies where the HTML should be inserted relative to the target element. It can be one of the following values:

    // 'beforebegin': Inserts HTML before the target element itself.
    // 'afterbegin': Inserts HTML inside the target element, before its first child.
    // 'beforeend': Inserts HTML inside the target element, after its last child.
    // 'afterend': Inserts HTML after the target element itself.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
// console.log(calcDisplayBalance(account1.movements));

//since .map returns a new array we can use join on it
//computing user name

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    //add new property username for each account object
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('')
      .trim();
  });
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
  const out = acc.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement);

  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `${interest}€`;
};
createUsername(accounts);
const updateUI = function (acc) {
  //display movements
  displayMovements(acc?.movements);
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
};

// calcDisplaySummary(account1.movements);

//the addEventlistener fn now calls the fn when btn is clicked
//it also passes the event object as an argument
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault(); //prevents the default behavior of the event
  //find returns undefined if it doesnt matches
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display ui and message

    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
  }
  //clear input fields
  inputLoginPin.value = '';
  inputLoginUsername.value = '';
  inputLoginPin.blur(); //to blur the input pin field so that it looses its focus
  if (currentAccount) updateUI(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`love you`);
  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const receiverAcc = accounts.find(
    acc => inputTransferTo.value === acc.username
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //DATA TRANSFER
    currentAccount.movements.push(-amount);
    receiverAcc?.movements.push(amount);

    //updateUI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= 0.1 * amount;
    })
  )
    //ADD movement
    currentAccount.movements.push(amount);

  //updateUI
  updateUI(currentAccount);
  inputLoanAmount.value = '';
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    Number(inputClosePin.value) === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      (acc, i, arr) => acc.username === currentAccount.username
    );
    console.log(index);

    //delete account
    accounts.splice(index, 1); //to delete an element at particular index

    //HIDE UI

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ' ';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});

// console.log(amount, receiverAcc);

//   if(amount>0 && )

// });

// accounts.forEach(function())
// {

// }ff

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(2); //returns a new array ...it does not mutate the orginal array

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice()); //to create a shallow copy of arr

console.log([...arr]); //shallow copy method2

//SPLICE (it mutates the orginal array)

console.log(arr.splice(2)); //extracted elements are deleted in the orginal array
arr.splice(-1); // prints the last element removes the last element from orginal arrf
console.log(arr);

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //.reverse mutates the array even if it is a const
console.log(arr2);

//.concat (does not mutate the orginal array`

const letters = arr.concat(arr2); //concatenates two arrays

//JOIN

console.log(letters.join('-'));

//ES2022(New at method)

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0)); //similar to arr[0]

//to get last element of array

console.log(arr3[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1)); //easy peasy and it is also essentail for method chaining

//for string also the at method is used

console.log('Robinson'.at(-3));

//For of

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//for each is  a higher order fn which has callback fn

//for each is the fn which calls the call back fn

//high level overview:forEach is the fn which call the call back fn each time
//it calls and passes each element of array and also the index into callback fn one by one

//for each iteration current element is passed as an argument to the call back fn

//third argument can be the entire array

movements.forEach(function (mov, i, a) {
  if (mov > 0) console.log(`Movement ${i + 1}: You deposited ${mov}`);
  else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// forEach starts iterating over the elements of the numbers array.

// For each element, the callback function is called, and the current element is passed as argument,
//  the index is passed as argument, and the original array  is passed as arhument.

//for each iteration each element(value) of array is passed one by one to the fn as argyment
//0:function(200)
//1:function(450)
//2:function(400)
//.
//.

//in for each loop the loop wont break

//other than that its our personal preference to choose btwn
//for of and forEach loop

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// forEach starts iterating over the elements of the numbers array.

// For each element, the callback function is called, and the current element value is passed as argument,
//  the key is passed as argument, and the original map is passed as arhument.

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

//SET

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);

console.log(currenciesUnique);

//for sets key will be equla to value

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}:${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
/*
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = [...dogsJulia].slice(1, -2);
//   console.log(dogsJuliaCorrected);
//   const dogsKateCorrected = [...dogsKate].slice(1, -2);
//   console.log(dogsKateCorrected);
//   const dogs = [...dogsJuliaCorrected, ...dogsKateCorrected];
//   for (const [i, dog] of dogs.entries()) {
//     if (dog >= 3)
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     else console.log(`Dog number${i + 1} is still a puppy 🐶`);
//   }
//
//
   dogs.forEach(function(dog,i,arr)
   {
    if(el>=3)
    {
       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    }
    else
  {
    console.log(`Dog number${i + 1} is still a puppy 🐶`);
  }
   })
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const euroToUSd = 1.1;

//MAP FN(HOF)

//the returned value is stored in the new array in that particular position of old array
const movementsUSD = movements.map(mov => mov * euroToUSd);
// const movementsUSD = movements.map(function(mov)
{
  return mov*euroToUSd;//returned value is stored in new array in the same index i of  the old array
})
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUSd);
}
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i, arr) => {
  if (mov > 0) return `Movement ${i + 1}: You deposited ${mov}`;
  else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

//maps,forEach,reduce,filter are higher order fn which takes call back fn as an argument

console.log(movementsDescription);

const deposits = movements.filter(function (movement, i, arr) {
  return movement > 0;
});
console.log(movements);
console.log(deposits); //only the elements greater than 0 will be added to new array,and returned as an array

const deposits2 = [];
for (const mov of movements) {
  if (mov > 0) {
    deposits2.push(mov);
  }
}
console.log(deposits2);

const withdrawals = movements.filter(function (movement) {
  return movement < 0;
});

console.log(withdrawals);

//REDUCE METHOD
//to boil down or reduce  all the elements in an array to one single element

//unlike other fns in this reduce fn first parameter is an accumulator
//initial value of acc=0
//returned value becomes new value of accumulator
const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}:${acc}`);
  return acc + curr;
}, 0);
console.log(balance);

let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

//MAXIMUM VALUE

//things to keep in mind
//whatever we return becomes the new accumulator value
movements.reduce(function (acc, mov, i) {
  console.log(`Iteration ${i}:${acc}`);
  if (acc > mov) return acc; //acc=acc;in next iteration
  else {
    return mov; //=>acc=mov in the next iteration
  }
}, movements[0]);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: 

GOOD LUCK 😀
*/

/*******ROBIN */
const calcAverageHumanAgeRobin = function (ages) {
  const average = ages
    .map(function (age) {
      if (age <= 2) return 2 * age;
      else return 16 + age * 4;
    })
    .filter(humaAge => humaAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return average;
};

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
console.log(calcAverageHumanAgeRobin([16, 6, 10, 5, 6, 1, 4]));

// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
//large chaining may increase time complexity if arrays are big

//hence we need to use it with care

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg12 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg22 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg12, avg22);

//FIND METHOD

//to retrieve one element of array based on condition

//similar to filter method

//but it will not return a new array which holds the condition(true)

//instead it returns the first element which holds the condition(true)

const firstWithdrawal = movements.find((mov, i, arr) => mov < 0);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');

//SOME AND EVERY METHOD

console.log(movements);
console.log(movements.includes(-130)); //checks if the movements contain -130 and returns true or false

//similar to other higher order fn ...it iterates over the elements of array and curr_el is passed as an argument to the callback fn and if(any of the element hold true for the returned codition true is returned)
//some => any of the elemeent holds true for the returned condition,then return true
//condition
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov >= 3000);
console.log(anyDeposits);

//EVERY METHOD(returns true only if all elements pass the returned conditon)
//similar to other higher order fn ...it iterates over the elements of array and curr_el is passed as an argument to the callback fn and if(every  element hold true for the returned codition true is returned)

console.log(account4.movements.every(mov => mov > 0));

//seperate callBack
const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.filter(deposit));
console.log(movements.every(deposit));

const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];

//flat(converts nested arrays into single dimesional arrays)
console.log(arr4.flat()); //only works with one level of nesting

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat()); //

console.log(arrDeep.flat(2)); //2 level of nesting

//map

// const accountMovements = accounts.map(acc => acc.movements);

// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov);
// console.log(overalBalance);
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => mov + acc);

console.log(overalBalance);

//flat map is a combination of map and flat
//flat map only goes one level deep

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)

  .reduce((acc, mov) => mov + acc);

console.log(overalBalance2);

const owners = ['jonas', 'zach', 'adam', 'Martha'];
console.log(owners.sort()); //mutates the orginal array
console.log(owners);

//numbers //sort method sorts based on strings ,so it will not correctly for numbers
//to fix that we need to pass in compare call back fn with two arguments

console.log(movements);
console.log(movements.sort());

//a and b are two consecutive numbers in an array

//return  < 0 => a will be before b //(keep order)
//        > 0 => b will be there before a //swtch order

//ascending
//takes comparison fn as call back fn
movements.sort((a, b) => {
  if (a > b) return 1; //return 1 implies switching
  if (a < b) return -1; //returning -1 implies keeping in order
});

//descending
movements.sort((a, b) => {
  if (a > b) return -1; //returning -1 implies keeping in order
  if (a < b) return 1; //return 1 implies switching
});

//simplified  ascending

movements.sort((a, b) => a - b);
console.log(movements);

//more ways of creating and filling arrays

console.log([1, 2, 3, 4, 5, 6, 7]);

//creating array using array constructors
console.log(new Array(1, 2, 3, 4, 5, 6, 9));

//but if only one value is passed in the array constructor empty array of the particular value will be created

//example

const x = new Array(7); //new array with 7 empty elements will be created

console.log(x);

//to fill in the empty values we can use the fill fn

x.fill(1);

x.fill(1, 3); //starts filling from that particular index

x.fill(1, 3, 5); //only fills the postion 3 and 4 with value 1

//Array.from

//Array.from
//an object with property length:set to array length is passed as an argument
//map fn is passed as an argument
//=> returns an array according to map fn
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //imagine as if the map fn is called on EMPTY ARRAY

console.log(z);

const diceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(diceRolls);

//Array.from is introduced in js to create arrays from other iterable

//querySelectorAll returns a nodeList ,so it doesnt have methods

//so we need to convert nodelist to an array

// const movementsUI = Array.from(document.querySelectorAll(`.movements__value`));
console.log(movementsUI);
labelBalance.addEventListener('click', function () {
  // const movementsUI = Array.from(document.querySelectorAll('.movements__value'));//returns a new array
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  ); //mapping fn converts the initial array to the array we wanted

  console.log(movementsUI);

  //method 2

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2.map(el => el.textContent.replace('€', '')));
});
