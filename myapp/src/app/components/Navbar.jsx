import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul id="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search a user</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
