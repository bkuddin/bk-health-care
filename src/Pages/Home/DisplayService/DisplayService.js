import React from "react";
import { Card, Col } from "react-bootstrap";

const DisplayService = ({ service }) => {
  const { name, img, brief } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{brief}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayService;
