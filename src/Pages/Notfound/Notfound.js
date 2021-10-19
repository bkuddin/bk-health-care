import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFounImg from "../../images/404.png";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container className="not-found my-5">
        <Row style={{ alignItems: "center" }}>
          <Col md="5">
            <h3
              style={{
                fontSize: "10rem",
                fontWeight: "bolder",
                color: "#06746c",
              }}
            >
              404
            </h3>
            <p>
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                This page got lost in conversation.
              </span>{" "}
              Not to worry. You can head over to our homepage, read the Drift
              Blog, or check out some content our customers can’t get enough of.
            </p>
            <Link to="/home">
              <Button className="bk-btn">Go Back</Button>
            </Link>
          </Col>
          <Col md="7">
            <img style={{ width: "90%" }} src={NotFounImg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Notfound;
