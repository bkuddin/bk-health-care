import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DisplayService from "../DisplayService/DisplayService";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("servicesFake.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-5">
      <h2>Services</h2>
      <p>Find the right services right at your fingertips</p>
      <Row xs={1} md={3} className="g-5 mx-5 ">
        {services.map((service) => (
          <DisplayService key={service.id} service={service}></DisplayService>
        ))}
      </Row>
    </div>
  );
};

export default Services;
