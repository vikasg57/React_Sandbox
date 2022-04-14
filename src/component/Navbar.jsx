import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "20px"
      }}
    >
      <Link to={"/todo"}>TODO</Link>
      <Link to={"/form"}>FORM</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/count"}>Calculator </Link>
    </div>
  );
};
