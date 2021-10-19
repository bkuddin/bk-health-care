import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-items">
        <Row className="">
          <Col xs lg="4">
            <h3
              style={{
                color: "white",
                fontWeight: "bolder",
                textAlign: "left",
              }}
            >
              BK HEALTH CARE
            </h3>
            <p style={{ textAlign: "left", color: "darkgray" }}>
              BK Health Care was founded in 2021 to offer unbiased and
              trustworthy information about healthcare services, providers, and
              procedures to people.
            </p>
          </Col>
          <Col md="auto">
            <div>
              <h4>For Patients</h4>
              <ul className="footer-list-item">
                <li>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    {" "}
                    Account Sign Up / Log In
                  </Link>
                </li>
                <li>
                  <Link to="/">Quality & Reports</Link>
                </li>
                <li>
                  <Link to="/">Health Content A-Z</Link>
                </li>
                <li>
                  <Link to="/">Hospital Awards & Ratings</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="auto">
            <div>
              <h4>Our Company</h4>
              <ul className="footer-list-item">
                <li>
                  <Link>Contact Us</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Healthgrades FAQ</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs lg="2">
            <div>
              <h4>Social Media</h4>
              <ul className="footer-list-item">
                <li>
                  <Link>Facebook</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Linkedin</Link>
                </li>
                <li>
                  <Link to="/">Pinterest</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Footer;
