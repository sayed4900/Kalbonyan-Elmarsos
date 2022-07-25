'use strict';

//1)Public fields
//2)Private fields
//3)Public methods
//4)Private methods
//There is also the static version

class Account {
  //1)Public fields (instances)
  locale = navigator.language;

  //2)Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Public methods

  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposite(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposite(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approvLoadn(val)) {
      this.deposite(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  // this static method is avalible on class only
  static helper() {
    console.log('Helper');
  }

  //4)Private methods
  _approvLoadn(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(100);
// acc1._movements.push(-25);

acc1.deposite(250);
acc1.withdraw(100);
acc1.requestLoan(1000);
acc1._approvLoadn(1000);

console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);

//Chaining
acc1.deposite(300).deposite(600).withdraw(30).requestLoan(500).withdraw(1000);

console.log(acc1.getMovements());
