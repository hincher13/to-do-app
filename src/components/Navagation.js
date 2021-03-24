import React from "react";
import { Nav, Navbar, NavItem, NavLink, Button } from "reactstrap";

function Navigation(props) {
  return (
    <React.Fragment>
      <Navbar light sticky="top" expand="md">
        <div className="container">
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/Download">
                <i className="fa fa-download fa-lg" /> Download
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contactus">
                <i className="fa fa-address-card fa-lg" /> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <span className="navbar-text ml-auto">
            <Button>
              <i className="fa fa-sign-in fa-lg" /> Login
            </Button>
          </span>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default Navigation;