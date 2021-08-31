// import './App.scss';
import './scss/main.scss';
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
      <Header />
      <div className="hero__image--mobile">
        <img src={ChartsSVG} alt="Stat charts" />
      </div>
      <img src={bgPatternHeader} alt="" />
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__content">
              <h1>A simple solution to complex tasks is coming soon</h1>
              <p>
                Say goodbye to inefficient juggling of multiple apps, teams, and
                projects. Officelite is the new collaboration platform built
                with an intuitive interface to improve productivity.
              </p>
              <Button
                description="Get started"
                btnClass="btn--primary hero__btn"
              />
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
                cardClassName="card--light"
                tier="Basic"
                price="Free"
                users="Upto 5 users for free"
                features={freeFeatures}
                cta="Try for Free"
              />

              <Card
                cardClassName="card--blue"
                tier="Pro"
                price="$9.99"
                users="Per user, billed monthly"
                features={proFeatures}
                cta="Try for Free"
              />

              <Card
                cardClassName="card--light"
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
              <Countdown />
              <Button
                description="Get started"
                btnClass="btn--primary timer__btn"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
