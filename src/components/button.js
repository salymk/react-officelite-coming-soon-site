/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Button = (props) => (
  <button className={`btn ${props.btnClass}`} type="button">
    {props.description}
  </button>
);

export default Button;
