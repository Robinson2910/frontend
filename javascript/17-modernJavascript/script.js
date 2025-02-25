//Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js'; //code in the imported module is executed first

// addToCart('bread', 5);
// console.log(price, tq);
console.log(`importing module`); //then this code
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
console.log(ShoppingCart.tq);
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js'; //live connection of exports

add('pizza', 2);
add('bread', 2);
add('apples', 2);

console.log(cart);

//await can be used outside of async function in module

//now await blocks the entire execution of module
// console.log('start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// const data = await res.json();

// console.log(data);

// console.log('something');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await res.json();

  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// //not clean
lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart shipping cost is ${shippingCost}`
    );
  };

  const orderSrock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 4);
ShoppingCart2.totalQuantity = 10;

console.log(Object.isExtensible(ShoppingCart2));

// how does addToCart has access to cart variable and is able to manipulate it even after function has been returned? it is because of closure

// closures allow a function to have access to all variables that were present at it birthplace or at its parent scope even afer parent fn had completed executing
console.dir(ShoppingCart2);

// console.log(ShoppingCart2.shippingCost);//undefined

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log(stateClone);

console.log(stateDeepClone);
//devdependencies are basically the tool we need to build application not a dependency we include in our code
