import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-items">
        <Row>
          <Col md="4">
            <h3 className="footer-title">BK HEALTH CARE</h3>
            <p className="footer-title">
              BK Health Care was founded in 2021 to offer unbiased and
              trustworthy information about healthcare services, providers, and
              procedures to people.
            </p>
          </Col>
          <Col md="3">
            <div>
              <ul className="footer-list-item">
                <h4>For Patients</h4>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/login">
                    {" "}
                    Sign Up / Log In
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
          <Col md="3">
            <div>
              <ul className="footer-list-item">
                <h4>Our Company</h4>
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
          <Col md="2">
            <div>
              <ul className="footer-list-item">
                <h4>Social Media</h4>
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
