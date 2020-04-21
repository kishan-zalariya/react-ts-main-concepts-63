import React, { Component } from "react";
import { render } from "react-dom";

// Stateless Functional Components
// Destructuring Arguments
const Navbar = ({totalCounters}) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar{""}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default Navbar;