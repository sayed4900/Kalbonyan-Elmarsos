const sayed = {
  firstName: 'Sayed',
  year: 1990,
  calcAge: function () {
    // console.log(this.year);
    console.log(2022 - this.year);
    // The first solution
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // console.log(this.year >= 1981 && this.year <= 1991); this make error

    //The second solution (arrow function)

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    // it will work here because it is use this from parent scope this mean arrow function inherit this keyword form it is parent
    isMillenial();
  },
  greet: () => console.log(`Hi ${this.firstName}`),
};
sayed.greet(); // Hi undefined (arrow funtion does not have its own this keyword)
sayed.calcAge();

//argunment keyword

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 5);
addExp(2, 5, 5, 8, 10);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 2, 3, 4);

//Argument keyword exists  only in regular functions (function expresion or function declartion but not in arrow function)
