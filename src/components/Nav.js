import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Brand bg="dark">
          <Navbar.Brand href="#home">
            <img
              src="named_logo.png"
              width="80"
              height="20"
              className="d-inline-block align-top"
              alt="image"
            />
          </Navbar.Brand>
        </Navbar.Brand>
      </Navbar>
    );
  }
}
export default NavBar;
