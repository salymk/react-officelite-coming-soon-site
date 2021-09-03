import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/button';

const Signup = () => (
  <>
    <h1> Work smarter. Save time.</h1>
    <Link to="/">
      <Button btnClass="btn--primary" description="Get started" />
    </Link>
  </>
);

export default Signup;
