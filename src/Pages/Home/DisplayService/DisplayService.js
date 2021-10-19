import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayService.css";

const DisplayService = ({ service }) => {
  const { id, name, brief, icon } = service;
  return (
    <div>
      <Col className="card-bg">
        <Card className="cards">
          <Card.Img variant="top" src={icon} style={{ width: "50%" }} />
          <Card.Body>
            <Card.Title className="card-items">{name}</Card.Title>
            <Card.Text className="card-items">{brief}</Card.Text>
          </Card.Body>
          <Link style={{ textDecoration: "none" }} to={`/caring/${id}`}>
            <button className="bk-btn">Read {name}</button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayService;
