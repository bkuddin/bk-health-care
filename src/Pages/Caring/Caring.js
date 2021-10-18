import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Caring.css";

const Caring = () => {
  const { Id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/servicesFake.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const caringDetails = data.filter((td) => td.id == Id);
  console.log(caringDetails);

  return (
    <div className="mx-5 my-5">
      <h1 className="my-5">{caringDetails[0]?.name}</h1>
      <img src={caringDetails[0]?.img} alt="" style={{ width: "50%" }} />
      <p className="my-5 details">{caringDetails[0]?.details}</p>

      <Link style={{ textDecoration: "none" }} to="/home#services">
        <button className="bk-btn ">Go Back</button>
      </Link>
    </div>
  );
};

export default Caring;
