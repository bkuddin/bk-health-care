import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-uppercase">
            BK HEALTH CARE
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={HashLink} to="/news">
              Health News
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            <Navbar.Text>
              Signed in as:
              <a href="#login">Login</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
