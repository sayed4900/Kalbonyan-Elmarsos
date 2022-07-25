'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  //public interface
  getMovements() {
    return this._movements;
  }

  deposite(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  _approvLoadn(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approvLoadn(val)) {
      this.deposite(val);
      console.log(`Loan Approved`);
    }
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
console.log(acc1._pin);
