//Importing Modual
// import { addToCart, totalPrice as pirce, tq } from './shoppingCart.js';
// console.log(pirce, tq);
// addToCart('Tea', 250);

// console.log('Importing module');
// //import everything
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('coffe', 125);
// console.log(ShoppingCart.totalPrice);

//import deafult
// import add, {
//   addToCart,
//   totalPrice as pirce,
//   totalQuantity,
// } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';

add('eggs', 2);
add('pizza', 0);
add('bread', 3);
// console.log(pirce);
console.log(cart);

//Top level-await
//if the type="modul" in html script tag =>we can use await outside  async function
// console.log("Start");
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('something );

const getLastPost = async () => {
  // console.log('Start');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);
  // console.log('something );
  return { title: data.at(-1).title, text: data[data.length - 1].body };
};
const lastPost = getLastPost();

//is't the best solution
// lastPost.then(last => console.log(last));

//better solution
const lastPost2 = await getLastPost();
console.log(lastPost2);
