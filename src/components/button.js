/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

import React from 'react';
import { Link } from 'react-router-dom';

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
