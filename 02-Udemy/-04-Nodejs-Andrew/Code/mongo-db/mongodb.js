//CRUD

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect database.");
    }
    const db = client.db(databaseName);

    //
  }
);

// db.collection("tasks")
//   .find({
//     completed: true,
//   })
//   .toArray((error, tasks) => {
//     if (error) {
//       console.log("No tasks!");
//     }
//     console.log(tasks);
//   });

//CREATE
// db.collection("users").insertOne(
//   {
//     _id: id,
//     name: "Akram",
//     age: 28,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }

//     console.log(result.insertedIds);
//     // console.log(result.ops);
//   }
// );

// db.collection("users").insertMany(
//   [
//     {
//       name: "Jen",
//       age: 25,
//     },
//     {
//       name: "Ahmed",
//       age: 18,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents!");
//     }

//     console.log(result.ops);
//   }
// );
// db.collection("tasks").insertMany(
//   [
//     {
//       description: "result.ops=>undefind",
//       completed: true,
//     },
//     {
//       description: "Clean th house",
//       completed: false,
//     },
//     {
//       description: "Go to play",
//       completed: true,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks");
//     }
//     console.log("Every thing is good.");
//   }
// );

//READ
// db.collection("users").findOne(
//   { _id: new ObjectId("62e104eaa1eb29affa3d856c") },
//   (error, user) => {
//     if (error) {
//       return console.log("Unable to fetch");
//     }

//     console.log(user);
//   }
// );
// db.collection("users")
//   .find({ age: 21 })
//   .toArray((error, users) => {
//     console.log(users);
//   });

// db.collection("users")
//   .find({ age: 21 })
//   .count((error, count) => {
//     console.log(count);
//   });

// db.collection("tasks").findOne(
//   {
//     _id: new ObjectId("62e10122f100eaae7512a2a9"),
//   },
//   (error, task) => {
//     if (error) {
//       console.log("unable to find the task");
//     }
//     console.log(task);
//   }
// );

// db.collection("tasks")
//   .find({
//     completed: true,
//   })
//   .toArray((error, tasks) => {
//     if (error) {
//       console.log("No tasks!");
//     }
//     console.log(tasks);
//   });

//UPDATE
// db.collection("users")
//   .updateOne(
//     {
//       _id: new ObjectId("62e0f7eaa578868eb57dedf5"),
//     },
//     {
//       // $set: {
//       //   name: "Mohamed",
//       //   age: 19,
//       // },
//       $inc: {
//         age: 5,
//       },
//     }
//   )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("users")
//   .updateMany(
//     {
//       name: "sayed",
//     },
//     {
//       $set: {
//         name: "Abdo",
//       },
//     }
//   )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//DELETE
// db.collection("users")
//   .deleteMany({
//     age: 21,
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("users")
//   .deleteOne({
//     age: 28,
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .then((error) => {
//     console.log(error);
//   });
