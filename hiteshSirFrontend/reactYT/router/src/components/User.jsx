import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userId } = useParams();
  return <div className="text-3xl text-yellow-400">{userId}</div>;
}

export default User;
