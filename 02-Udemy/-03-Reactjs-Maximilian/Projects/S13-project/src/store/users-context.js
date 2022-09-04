import React from "react";

const UsersContext = React.createContext({
  users: [
    { id: "u1", name: "Sayed" },
    { id: "u2", name: "Abdo" },
  ],
});

export default UsersContext;
