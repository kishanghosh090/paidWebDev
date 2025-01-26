import React from "react";
import UserContext from "./UserContaxt";

const UserContaxtProvider = ({ children }) => {
  const [User, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ User, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContaxtProvider;
