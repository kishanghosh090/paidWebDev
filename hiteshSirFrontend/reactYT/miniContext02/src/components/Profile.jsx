import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return (
    <div>
      <p>Username: {user.userName}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}

export default Profile;
