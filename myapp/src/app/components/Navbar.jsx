import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <ul id="navbar">
        <li>
          <Link to="/">New Order</Link>
        </li>
        <li>
          <Link to="/search">Search customers</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
