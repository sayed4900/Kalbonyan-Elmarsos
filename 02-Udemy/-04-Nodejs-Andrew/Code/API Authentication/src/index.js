const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();
const port = (process.env.PORT = 3000);

// app.use((req, res, next) => {
//   if (req.method === "GET") res.send("GET requests are disabled");
//   else next();
// });
// app.use((req, res, next) => {
//   res.status(503).send("POST requests are disabled");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//////////////////////////////////////////////////////////////////////

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const myFunction = async () => {
  //prettier-ignore
  const token = jwt.sign({ _id: "abc124" }, "thisisnodecourse",{expiresIn: "7 days"});
  console.log(token);

  // const data = jwt.verify(token, "thisisnodecourse");
  // console.log(data);
};

// myFunction();

// const Task = require("../models/task");
const main = async () => {
  // const task = await Task.findById("62ea64be81b01c9677593724");
  // await task.populate("owner");
  // console.log(task.owner);
  // const user = await User.findById("62ea5ffab8283e0d4bbc1858");
  // await user.populate("tasks");
  // console.log(user.tasks);
};

main();
