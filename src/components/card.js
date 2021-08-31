/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Button from './button';

const Card = (props) => (
  <div className={`card ${props.cardClassName}`}>
    <p className="card__tier">{props.tier}</p>
    <div className="card__price">
      <h2>{props.price}</h2>
      <p>{props.users}</p>
    </div>
    <div className="card__features">
      {props.features?.map((feature) => (
        <p key={feature}>{feature}</p>
      ))}
    </div>
    <Button description={props.cta} />
  </div>
);

export default Card;
