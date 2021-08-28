/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Card = (props) => (
  <div className={`card ${props.cardClassName}`}>
    <p className="card__tier">{props.tier}</p>
    <div className="card__price">
      <h2>{props.price}</h2>
      <p>{props.users}</p>
    </div>
    <div className="card__features">
      {props.features?.map((feature) => (
        <p>{feature}</p>
      ))}
    </div>
    <button className="btn" type="button">
      {props.cta}
    </button>
  </div>
);

export default Card;
