import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import CountdownTimer from './components/countdown';
import SignupForm from './components/form';
import './scss/main.scss';

const Signup = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Signup - Officelite coming soon site</title>
      <meta name="Signup - Officelite coming soon site" />
      <meta name="theme-color" content="#fff" />
    </Helmet>
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
            <CountdownTimer className="countdown--light" />
          </div>
          <SignupForm />
        </div>
      </div>
      <div className="bg-dark" />
    </main>
  </>
);

export default Signup;
