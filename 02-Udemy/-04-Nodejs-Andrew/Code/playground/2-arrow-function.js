// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   x * x;
// };
// const square = (x) => x * x;

// console.log(square(9));

const event = {
  name: "Birthday Party",
  guestList: ["Sayed", "Mohamed", "ahmed"],
  printGuestList() {
    console.log("Guest list for" + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + "is attending " + this.name);
    });
  },
};

event.printGuestList();
console.log("-------------------------");
