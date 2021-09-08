import './scss/main.scss';
import { Link } from 'react-router-dom';
import Header from './components/header';
import ChartsSVG from './assets/home/illustration-charts.svg';
import bgPatternHeader from './assets/home/bg-pattern-header.svg';
import Countdown from './components/countdown';
import Card from './components/card';
import Button from './components/button';

const freeFeatures = [
  'Basic document collaboration',
  '2 gb storage',
  'Great security and support',
];

const proFeatures = [
  'All essential integrations',
  '50 gb storage',
  'More control and insights',
];

const ultimateFeatures = [
  'Robust work management',
  '100 gb storage',
  'VIP support',
];

function App() {
  return (
    <>
      <img className="bg-pattern-header" src={bgPatternHeader} alt="" />
      <Header />
      <div className="hero__image--mobile">
        <Link to="/">
          <img src={ChartsSVG} alt="Stat charts" />
        </Link>
      </div>
      <main>
        <section className="hero">
          <div className="container split">
            <div className="hero__content">
              <h1>A simple solution to complex tasks is coming soon</h1>
              <p>
                Say goodbye to inefficient juggling of multiple apps, teams, and
                projects. Officelite is the new collaboration platform built
                with an intuitive interface to improve productivity.
              </p>
              <Link to="/signup">
                <Button
                  description="Get started"
                  className="btn--primary hero__btn"
                />
              </Link>
            </div>
            <div className="hero__image">
              <img src={ChartsSVG} alt="Stat charts" />
            </div>
          </div>
        </section>

        <section className="price">
          <div className="container">
            <div className="cards">
              <Card
                className="card--light"
                tier="Basic"
                price="Free"
                users="Upto 5 users for free"
                features={freeFeatures}
                cta="Try for Free"
              />

              <Card
                className="card--blue"
                tier="Pro"
                price="$9.99"
                users="Per user, billed monthly"
                features={proFeatures}
                cta="Try for Free"
              />

              <Card
                className="card--light"
                tier="Ultimate"
                price="$19.99"
                users="Per user, billed monthly"
                features={ultimateFeatures}
                cta="Try for Free"
              />
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="timer">
              <Countdown className="countdown--dark" />
              <Link to="/signup">
                <Button
                  description="Get started"
                  className="btn--primary timer__btn"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
