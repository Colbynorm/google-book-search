import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css"

function Nav() {
  return (
    <Navbar>
      <div className="navBar">
        <h1>Google API Book Search</h1>
        <br></br>
        <ul>
          <Link className="link1" to="/">Search</Link>
          <Link className="link2" to="/saved">Saved</Link>
        </ul>
      </div>
    </Navbar>
  );
}

export default Nav;
