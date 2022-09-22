import React, { useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logIn: (token) => {},
  logout: () => {},
});

const calculatReminingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

export const AuthContextProvider = (props) => {
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);

  const userIsLoggedIn = !!token; // if token as string is not empty return true else false

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);

    const reminingTime = calculatReminingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, reminingTime);
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
