import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, Redirect } from "react-router-dom";

function Nav() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">React Google Reading App</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#login">Colby Norman</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>
  );
}

export default Nav;
