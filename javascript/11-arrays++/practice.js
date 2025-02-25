//ARRAY METHODS PRACTICE

//1
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(curr => curr > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(bankDepositSum);

//2.
//accumulator can be named in any name it can be acc or count or even ur name
const numDeposits1000 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((count, curr) => {
    if (curr >= 1000) return ++count;
    else return count;
  }, 0);
console.log(numDeposits1000);
let a = 10;
console.log(a++); //return increments the value of a ,but still it returns the orginal value,in the next step only it will be incremneted

//3. using objects as an accumulator

const { deposits: depo, withdrawals: wth } = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
      // sums[curr > 0 ? `deposits` : `withdrawals`] += curr; //bracket notation
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(depo, wth);

//4

//this is a nice titile ->This Is a Nice Title

const capitalize = word => word.replace(word[0], word[0]?.toUpperCase());
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)));
  console.log(capitalize(titleCase.join(' ')));
};

convertTitleCase('this is a nice title');
convertTitleCase('this is an nice title but very long with an example');
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const tooMuch = function (dog) {
  return dog.curFood >= dog.recommendedFood + 0.1 * dog.recommendedFood;
};
const tooLittle = function (dog) {
  return dog.curFood <= dog.recommendedFood - 0.1 * dog.recommendedFood;
};

const okEating = function (dog) {
  return (
    dog.curFood <= dog.recommendedFood + 0.1 * dog.recommendedFood &&
    dog.curFood >= dog.recommendedFood - 0.1 * dog.recommendedFood
  );
};
dogs.forEach(function (dog) {
  dog.recommendedFood = dog?.weight ** 0.75 * 28;
  if (dog.owners.includes('Sarah')) {
    if (okEating(dog)) console.log('sarahs dog is eating fine');
    else {
      const eating =
        dog.curFood <= dog.recommendedFood + 0.1 * dog.recommendedFood
          ? `more`
          : 'less';
      console.log(`sarahs dog is not eating fine, it is eating ${eating}`);
    }
  }
});
console.log(dogs);

//3

const ownersEatTooMuch = dogs
  .filter(function (dog) {
    return tooMuch(dog);
  })
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(function (dog) {
    return tooLittle(dog);
  })
  .map(dog => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

//4
console.log(
  `${ownersEatTooMuch.join(' and ')} eat too much and ${ownersEatTooLittle.join(
    ' and '
  )} eat too little ! `
);

//5 any =>some

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6
console.log(dogs.some(dog => okEating(dog)));

//7

const ownersEatOk = dogs.filter(okEating);

console.log(ownersEatOk);

//8

const copyDogs = [...dogs];
console.log(copyDogs);
copyDogs.sort(function (a, b) {
  if (a.recommendedFood >= b.recommendedFood) return 1;
  else if (a.recommendedFood < b.recommendedFood) return -1;
});

console.log(copyDogs);
