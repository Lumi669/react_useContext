import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
    // console.log("apple");
  },
});

export default AuthContext;
