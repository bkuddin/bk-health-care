import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import DisplayHealthNews from "../DisplayHealthNews/DisplayHealthNews";

const HealthNews = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("newsFakeFinal.json")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <div>
      <Row xs={1} md={2} className="g-4 mx-5 my-5">
        {newses.map((news) => (
          <DisplayHealthNews key={news.key} news={news}></DisplayHealthNews>
        ))}
      </Row>
    </div>
  );
};

export default HealthNews;
