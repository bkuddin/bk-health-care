import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayHealthNews.css";

const DisplayHealthNews = ({ news }) => {
  const { headline, brief, deImg } = news;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" style={{ width: "100%" }} src={deImg} />
        <Card.Body>
          <Card.Title>{headline}</Card.Title>
          <Card.Text>{brief}</Card.Text>
        </Card.Body>
        <Link>
          <Button>Read More</Button>
        </Link>
      </Card>
    </Col>
  );
};

export default DisplayHealthNews;
