'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  deposite(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  approvLoadn() {
    return true;
  }
  requestLoan(val) {
    if (this.approvLoadn(val)) {
      this.deposite(val);
      console.log(`Loan Approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(100);
// acc1.movements.push(-25);

acc1.deposite(250);
acc1.withdraw(100);
acc1.requestLoan(444);

console.log(acc1);
