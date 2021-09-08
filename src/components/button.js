/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <span className={`btn ${props.className}`} type="button">
    {props.description}
  </span>
);

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
};
