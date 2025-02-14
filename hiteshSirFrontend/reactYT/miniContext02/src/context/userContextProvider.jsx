import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ user: "user" }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
