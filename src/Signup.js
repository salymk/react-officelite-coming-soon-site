import React from 'react';
import { Link } from 'react-router-dom';
import Button from './components/button';
import Header from './components/header';
import Countdown from './components/countdown';
import Form from './components/form';
import './scss/main.scss';

const Signup = () => (
  <>
    <main className="signup">
      <div className="signup-hero">
        <Header />
        <div className="container flex">
          <div className="signup-hero__content">
            <h1>Work smarter. Save time.</h1>
            <p>
              Easily manage your projects. Get on the list and receive in-app
              perks available only to early subscribers. We are moving into
              final development and getting ready for official launch soon.
            </p>
            <Countdown className="countdown--light" />
          </div>
          <Form />
        </div>
      </div>
      <div className="bg-dark" />
    </main>
  </>
);

export default Signup;
