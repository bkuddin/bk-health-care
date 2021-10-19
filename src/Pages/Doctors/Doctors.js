import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DisplayDoctors from "../DisplayDoctors/DisplayDoctors";

import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("doctorsFake.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <div className="doctors-title">
        <h2>
          <span
            style={{
              textTransform: "uppercase",
              color: "#06746c",
              fontWeight: "bolder",
            }}
          >
            Find the right doctor
          </span>{" "}
          <br />
          <span
            style={{
              backgroundColor: "#06746c",
              color: "white",
            }}
          >
            right at your fingertips
          </span>
        </h2>
      </div>
      <Row xs={1} md={3} className="g-4 mx-5">
        {doctors.map((doctor) => (
          <DisplayDoctors key={doctor.id} doctor={doctor}></DisplayDoctors>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
