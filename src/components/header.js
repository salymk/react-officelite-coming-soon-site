import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => (
  <header>
    <Link to="/" aria-label="Home page">
      <img src={logo} alt="officelite" />
    </Link>
  </header>
);

export default Header;
