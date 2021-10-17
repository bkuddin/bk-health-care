import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import doctorCover from "../../../images/doctor-cover.png";

const Banner = () => {
  return (
    <Container fluid className="banner-bg">
      <Row>
        <Col>
          <h1 className="my-5 title-text">
            Feel better about <br />{" "}
            <span style={{ color: "#06746C", fontWeight: "bolder" }}>
              finding healthcare
            </span>
          </h1>
        </Col>
        <Col>
          <img style={{ width: "75%" }} src={doctorCover} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;