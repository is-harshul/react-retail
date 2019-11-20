import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul id="navbar">
        <li>
          <Link to="/">NEW ORDER</Link>
        </li>
        <li>
          <Link to="/search">SEARCH CUSTOMERS</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
