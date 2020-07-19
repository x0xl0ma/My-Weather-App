import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ city }) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
  };
  return (
    <div className="card border-primary mt-5 col-md-4 offset-md-4">
      <div className="card-body">
        <h2>{city.name}</h2>
        <p>{city.sys.country}</p>
        <p>{new Date().toLocaleString("en-US", options)}</p>
        <Link to="/cityinfo" className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};
