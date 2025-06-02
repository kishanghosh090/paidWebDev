import React, { use, useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  return (
    user && (
      <div>
        <h1>Profile</h1>
        <p>Username: {user?.username}</p>
        <p>Password: {user?.password}</p>
      </div>
    )
  );
}

export default Profile;
