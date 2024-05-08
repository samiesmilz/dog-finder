import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = ({ dogs }) => {
  const links = dogs.map((dog) => (
    <Link to={`/dogs/${dog.src}`}>
      <button className="Nav-button">{dog.name}</button>
    </Link>
  ));
  return (
    <nav className="Nav">
      <Link to="/"></Link>
      <Link to="/dogs">
        <button className="Nav-button">Dogs</button>
      </Link>
      {links}
    </nav>
  );
};
export default Nav;
