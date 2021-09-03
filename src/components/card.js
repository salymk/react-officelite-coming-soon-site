/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

const Card = (props) => (
  <div className={`card ${props.cardClassName}`}>
    <div className="card__header">
      <p className="card__tier">{props.tier}</p>
      <div className="card__price">
        <h2>{props.price}</h2>
        <p>{props.users}</p>
      </div>
      <Link className="btn--tablet" to="/signup">
        <Button description={props.cta} />
      </Link>
    </div>
    <div className="card__features">
      {props.features?.map((feature) => (
        <p key={feature}>{feature}</p>
      ))}
    </div>
    <Link className="btn--mobile" to="/signup">
      <Button description={props.cta} />
    </Link>
  </div>
);

export default Card;
