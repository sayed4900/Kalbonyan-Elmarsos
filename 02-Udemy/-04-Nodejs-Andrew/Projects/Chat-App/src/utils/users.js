const users = [];

const addUser = ({ id, username, room }) => {
  //Clean data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required",
    };
  }

  //Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //Validate usernaem
  if (existingUser) {
    return {
      error: "Username is in use",
    };
  }

  //Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};
const getUser = (id) => {
  // const index = users.findIndex((user) => user.id === id);
  // if (index !== -1) {
  //   return users[index];
  // }
  return users.find((user) => user.id === id);
};
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter((user) => user.room === room);
};
addUser({
  id: 22,
  username: "sayed",
  room: "CS",
});
addUser({
  id: 40,
  username: "ahmed",
  room: "cs",
});
addUser({
  id: 40,
  username: "mohamed",
  room: "Center City",
});

// const u = getUser(22);
// console.log(u);

const userList = getUsersInRoom("CsS");

console.log(userList);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
