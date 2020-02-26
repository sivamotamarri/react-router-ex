import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/lifecycle" style={navStyle}>
          <li>ComponentLifeCycle</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
        <Link to="/functionalStateless" style={navStyle}>
          <li>FunctionalStateless</li>
        </Link>
        <Link to="/pureComponent" style={navStyle}>
          <li>PureComponent</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
