import React from "react";
import "./card-small.css";

function CardSmall(props) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={props.icon} alt="" />
      </p>
      <p className="card-small-number">{props.pageViews}</p>
      <p classNameName="card-small-percentage">
        <span>
          <img src="htmltoreact/images/icon-up.svg" alt="" />
          {props.growth}%
        </span>
      </p>
    </div>
  );
}

export default CardSmall;
