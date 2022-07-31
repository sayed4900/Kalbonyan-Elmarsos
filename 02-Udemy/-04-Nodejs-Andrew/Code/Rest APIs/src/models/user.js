const mongoose = require("mongoose");
const validator = require("validator");

////
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    reqired: true,
    minlength: 7,
    trim: true,
    validate(value) {
      // if (value.length <= 6) {
      //   throw new Error("Password length must be greater than 6 ");
      // }
      if (value.toLowerCase().includes("password")) {
        throw new Error("The password must't contain password ");
      }
    },
  },
  age: {
    type: Number,
    deafult: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be positive");
      }
    },
  },
});

module.exports = User;
