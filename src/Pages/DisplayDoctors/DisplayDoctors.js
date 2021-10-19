import React from "react";
import { Card, Col } from "react-bootstrap";
import "./DisplayDoctors.css";

const DisplayDoctors = ({ doctor }) => {
  const { name, qualifications, specialty, designation, Department, img } =
    doctor;
  return (
    <div>
      <Col className="my-5">
        <Card className="card-item">
          <Card.Img variant="top" src={img} style={{ width: "80%" }} />
          <Card.Body>
            <Card.Title style={{ color: "#06746c", fontWeight: "bolder" }}>
              {name}
            </Card.Title>
            <Card.Text className="card-text">
              <p>
                <span className="card-text-title">Qualifications</span> :{" "}
                {qualifications}
              </p>
              <p>
                <span className="card-text-title">Specialty</span> : {specialty}
              </p>
              <p>
                <span className="card-text-title">Designation</span> :{" "}
                {designation}
              </p>
              <p>
                <span className="card-text-title">Department</span> :{" "}
                {Department}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayDoctors;
