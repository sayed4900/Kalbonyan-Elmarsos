require("../src/db/mongoose.js");

const Task = require("../src/models/task");

// ObjectId("62e3d2f870f9cfacf154ef77")
// Task.findByIdAndDelete("62e4cf4b118e2f6d2a162588").then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};
//ObjectId("62e4cf4efbc04baa5bed5b48")
deleteTaskAndCount("62e4cf4efbc04baa5bed5b48")
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });
