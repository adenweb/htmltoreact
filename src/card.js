import React from "react";
import "./card.css";

function Card(props) {
  const cardClass = `card ${props.name}`;
  return (
    <article className={cardClass}>
      <p className="card-title">
        <img src={props.icon} alt="" />
        {props.username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number"> {props.followers}</span>
        <span className="card-followers-title"> {props.totalFollowers}</span>
      </p>
      <p className="card-today">
        <img src="htmltoreact/images/icon-up.svg" alt="" />
        12 Today
      </p>
    </article>
  );
}

export default Card;
