import React from "react";

// Styles
import "./Card.scss";

const Card = ({ children }) => {
  return (
    <div className="ui raised cards Card">
      <div className="card">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Card;
