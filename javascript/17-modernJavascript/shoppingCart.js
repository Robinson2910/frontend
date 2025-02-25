//exporting module
console.log('exporting module');

//variables declared inside of module is scoped inside of a module
//top level variables are private

const shippingCost = 10;
export const cart = [];

//Blocking code(note only blocks this module but also other module which is importing it)

// console.log('start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// console.log('finish fetching');

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
}
