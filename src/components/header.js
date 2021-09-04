import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="Blue circles with officelite text" />
    </Link>
  </header>
);

export default Header;
