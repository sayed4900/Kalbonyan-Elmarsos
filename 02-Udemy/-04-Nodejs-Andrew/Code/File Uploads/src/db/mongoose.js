const mongoose = require("mongoose");
// const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api"),
  { useNewUrlParser: true, useCreateIndex: true, UseFindAndModify: false };

////

// const me = new User({
//   name: " Sayed  ",
//   age: 21,
//   email: "EMAIL@ABDO",
//   password: " Password21 ",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("ERROR: ", error);
//   });

// const task = new Task({
//   description: "  Eat lunch",
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
