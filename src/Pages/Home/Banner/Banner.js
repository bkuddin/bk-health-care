import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import doctorCover from "../../../images/doctor-cover.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container fluid className="banner-bg">
      <Row>
        <Col md="6">
          <h1 className=" title-text">
            Feel better about <br />
            <span style={{ color: "#06746C", fontWeight: "bolder" }}>
              finding healthcare
            </span>
          </h1>
          <Link to="/services">
            <button className="bk-btn banner-button">FIND A SERVICE</button>
          </Link>
        </Col>
        <Col md="6">
          <img style={{ width: "75%" }} src={doctorCover} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
