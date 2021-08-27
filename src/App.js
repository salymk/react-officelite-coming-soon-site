// import './App.scss';
import './scss/main.scss';
import Header from './components/header';
import ChartsSVG from './assets/home/illustration-charts.svg';
import bgPatternHeader from './assets/home/bg-pattern-header.svg';
import Countdown from './components/countdown';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <img className="hero__bg-pattern" src={bgPatternHeader} alt="" />

          <div className="container">
            <div className="hero__image">
              <img src={ChartsSVG} alt="Stat charts" />
            </div>
            <div className="hero__content">
              <h1>A simple solution to complex tasks is coming soon</h1>
              <p>
                Say goodbye to inefficient juggling of multiple apps, teams, and
                projects. Officelite is the new collaboration platform built
                with an intuitive interface to improve productivity.
              </p>
              <button className="btn" type="button">
                Get started
              </button>
            </div>
            {/* <img className="hero__bg-pattern" src={bgPatternHeader} alt="" /> */}
          </div>
        </section>

        <section className="price">
          <div className="container">
            <div className="card">
              <p className="card__tier">Basic</p>
              <div className="card__price">
                <h2>Free</h2>
                <p>Up to npm user for free</p>
              </div>
              <div className="card__features">
                <p>Basic document collaboration</p>
                <p>2 gb storage</p>
                <p>Great security and support</p>
              </div>
              <button className="btn" type="button">
                Try for Free
              </button>
            </div>

            <div className="card">
              <p className="card__tier">Pro</p>
              <div className="card__price">
                <h2>$9.99</h2>
                <p>Per user, billed monthly</p>
              </div>
              <div className="card__features">
                <p>All essential integration</p>
                <p>50 gb storage</p>
                <p>More control and insights</p>
              </div>
              <button className="btn" type="button">
                Try for Free
              </button>
            </div>

            <div className="card">
              <p className="card__tier">Ultimate</p>
              <div className="card__price">
                <h2>$19.99</h2>
                <p>Per user, billed monthly</p>
              </div>
              <div className="card__features">
                <p>Robust work management</p>
                <p>100 gb storage</p>
                <p>VIP support</p>
              </div>
              <button className="btn" type="button">
                Try for Free
              </button>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="timer">
              <Countdown />
              <button type="button">Get started</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
