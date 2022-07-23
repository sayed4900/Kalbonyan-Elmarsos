const name = "Sayed";
const userAge = 21;

const user = {
  name,
  userAge,
  location: "New York",
};
console.log(user);

//object destruturing

const product = {
  label: "Red notebook",
  price: 3,
  salePrice: undefined,
  stock: 201,
  salePrice: undefined,
  rating: 4.5,
};

// const label = product.label;
// const stock = product.stock;

const { label: productLabel, stock, price: p, rating = 3 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(p);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
