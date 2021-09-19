/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './button';

const Card = (props) => (
  <div className={`card ${props.className}`}>
    <div className="card__header">
      <h2 className="card__tier">{props.tier}</h2>
      <div className="card__price">
        <h3>{props.price}</h3>
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

Card.propTypes = {
  className: PropTypes.string,
  tier: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  users: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
};
