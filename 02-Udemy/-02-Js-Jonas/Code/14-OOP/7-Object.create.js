'use strict';

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2022 - this.birthYear;
  }
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const walter = new PersonCl('Walter white', 1991);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get lastest() {
    return this.movements.slice(-1).pop();
  },
  set lastest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.lastest);
account.lastest = 55;
console.log(account.lastest);
///////
const jessica = new PersonCl('Jessica Davis', 1999);
console.log(jessica.age);
//////////////
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};
const jonas = new Person('Jonas', 1980);

Person.hey = function () {
  console.log('Hey there');
  // console.log(this);
};

Person.hey();
PersonCl.hey();
// jonas.hey();
////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = '2000';
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1980);
sarah.calcAge();
