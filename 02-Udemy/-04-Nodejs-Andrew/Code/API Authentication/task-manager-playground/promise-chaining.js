require("../src/db/mongoose.js");

const User = require("../src/models/user");

// ObjectId("62e259a83bbd47687c2c3e6e")

// User.findByIdAndUpdate("62e259a83bbd47687c2c3e6e", { age: 1 }).then((user) => {
//   console.log(user);
//   return User.countDocuments({ age: 1 })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

// ObjectId("62e3a610fcccc617b3b029a8")
updateAgeAndCount("62e3a610fcccc617b3b029a8", 5)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
