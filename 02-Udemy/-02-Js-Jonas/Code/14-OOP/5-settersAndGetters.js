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
