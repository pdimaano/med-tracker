import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

/** Top navigation bar for site */

function NavBar() {
  return (
    <nav className="Navigation navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Track Your Meds
        </Link>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink to="/sunday">Sunday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/monday">Monday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tuesday">Tuesday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/wednesday">Wednesday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/thursday">Thursday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/friday">Friday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/saturday">Saturday</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add" className="me-0">
              Add Med
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>
  );
}

export default NavBar;