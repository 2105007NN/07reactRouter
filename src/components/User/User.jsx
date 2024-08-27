import React from "react";
import { useParams } from "react-router-dom";

function User() {

  //Same name as param name in route definition
  const { userId } = useParams();

  return (
    <h1 className="bg-blue-400 text-black text-center
    text-3xl">User : {userId} </h1>
  );
}

export default User;
