import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  console.log("props from AuthContextProvider = ", props);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    console.log("email and password is: ", email, password);
    localStorage.setItem("isLoggedIn", "1");

    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogIn: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

/**
 * 
 1. first create Context object, here is AuthContext and export it 
 2. create AuthContextProvider function component, and add props.children as its child , and export it
 3. inside AuthContextProvider function use useState to manage states to be managed and also create functions to be passed/managed, for step 4
 4. add state and function into the value attribute of AuthContextProvider to be passed to its children components 
 5. if there is useEffect, also write inside AuthContextProvider function 
 6. inside index.js wrap App component with AuthContextProvider component, 
 7. now the ctx can be used directly in all the children components of AuthContextProvider including App.js, just import the exported Context object by auth-context.js and useContext hook in the destination file, then the destination file can retrieve the Context by const ctx = useContext(AuthContext). If earlier has used props chain, now can delete all the props from each component. See how Navigation.js retrieve onLogout, earlier onLogout is passed from App.js to MainHeader.js to Navigation.js, now no need this chain, Navigation.js can use ctx directly sent by auth-context.js.

 * 
 */
