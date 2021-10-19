import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeDetails.css";
import Cover2 from "../../../images/doctor-cover-2.png";
import Cover3 from "../../../images/cover-3.png";
import { Link } from "react-router-dom";

const HomeDetails = () => {
  return (
    <div>
      <Container fluid className=" cover-3-bg">
        <Row className="cover-3">
          <Col md={8}>
            <img src={Cover3} alt="" style={{ width: "100%" }} />
          </Col>
          <Col md={4}>
            <h3 className="cover-title">
              BK Health Care has been in business since 2021.
            </h3>
            <p>
              Dedicated to meeting the increasing requirements of our patients,
              Watsonia Road Medical Centre launched in 2021. Both clinics'
              physicians have always strived to offer excellent care with
              professionalism and compassion. The medical team at both clinics
              has a broad variety of specialties, experience, and abilities,
              ensuring that all your healthcare requirements are met. Everyone
              on staff believes in the comprehensive treatment of mental,
              physical, and emotional wellness.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mx-5">
          <Col sm={12}>
            <h2 style={{ color: "#06746c", fontSize: "3rem" }}>
              A comprehensive approach to healthcare
            </h2>
          </Col>
        </Row>
        <Row className="mx-5 mt-5">
          <Col sm>
            <h3 style={{ color: "#73C178" }}>
              We think that prevention is preferable to treatment.
            </h3>
            <p>
              To keep a healthy smile, our dentists suggest biannual dental
              exams to identify and treat small problems early before they
              develop into more serious and expensive problems.
            </p>
            <Link to="/news">
              <button className="bk-btn">Read More</button>
            </Link>
          </Col>
          <Col sm>
            <img src={Cover2} alt="" style={{ width: "100%" }} />
          </Col>
          <Col sm>
            <h3 style={{ color: "#73C178" }}>
              When you meet our staff at BK Health Care,
            </h3>
            <p>
              you can be certain that you will get the finest care possible. We
              will listen to your problems, explain what options are best for
              you, and will not skimp on diagnosing and caring for your oral
              health.
            </p>
            <Link to="/services">
              <button className="bk-btn">Check More</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeDetails;
