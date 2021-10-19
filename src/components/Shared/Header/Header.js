import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
import Logo from "../../../images/bk-health-care-logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="nav-bar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className="logo">
            <img src={Logo} alt="" style={{ width: "30%" }} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-style" as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/news">
              Health News
            </Nav.Link>
            {user?.email ? (
              <button className="bk-btn" onClick={logOut}>
                Log Out
              </button>
            ) : (
              <Nav.Link className="nav-style" as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
