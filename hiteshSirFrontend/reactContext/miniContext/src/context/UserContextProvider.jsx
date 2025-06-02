import UserContext from "./UserContext";
import React from "react";

const UserContextProvider = ({ children }) => {
  const [user, SetUser] = React.useState(null);

  return (
    <>
      <UserContext.Provider value={{ user, SetUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
