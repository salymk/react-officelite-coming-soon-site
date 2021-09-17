import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => (
  <header>
    <Link to="/" aria-label="Takes you to the home page">
      <img src={logo} alt="Logo with Blue circles that has officelite text" />
    </Link>
  </header>
);

export default Header;
