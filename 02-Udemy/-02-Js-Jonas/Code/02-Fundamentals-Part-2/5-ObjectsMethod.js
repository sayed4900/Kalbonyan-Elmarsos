const sayed = {
  firstName: "Sayed",
  lastName: "Abdo",
  birthYear: 2001,

  job: "techer",
  friends: ["A", "B", "C"],
  hasDriveLicense: true,
  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } and he has ${this.hasDriveLicense ? "a" : "no"}  drive license`;
  },
};

console.log(sayed.calcAge());

console.log(sayed.age);
console.log(sayed.age);
console.log(sayed.age);
// console.log(sayed["calcAge"](2001));
console.log(sayed.getSummery());
