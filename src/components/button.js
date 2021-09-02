/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => (
  <span className={`btn ${props.btnClass}`} type="button">
    {props.description}
  </span>
);

export default Button;
