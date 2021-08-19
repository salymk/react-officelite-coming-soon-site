import './App.scss';
import Header from './components/header';
import ChartsSVG from './assets/home/illustration-charts.svg';
import bgPatternHeader from './assets/home/bg-pattern-header.svg';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-image">
            <img src={ChartsSVG} alt="Stat charts" />
          </div>
          <div className="hero-content">
            <h1>A simple solution to complex tasks is coming soon</h1>
            <p>
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <button className="btn btn-hero" type="button">
              Get started
            </button>
          </div>
          <img className="bg-hero-pattern" src={bgPatternHeader} alt="" />
        </section>
        <section className="pricing-container">
          <div className="price-card">
            <p className="tier">Basic</p>
            <div className="price">
              <h2>Free</h2>
              <p>Up to 5 user for free</p>
            </div>
            <div className="features">
              <p>Basic document collaboration</p>
              <p>2 gb storage</p>
              <p>Great security and support</p>
            </div>
            <button type="button">Try for Free</button>
          </div>

          <div className="price-card">
            <p className="tier">Pro</p>
            <div className="price">
              <h2>$9.99</h2>
              <p>Per user, billed monthly</p>
            </div>
            <div className="features">
              <p>All essential integration</p>
              <p>50 gb storage</p>
              <p>More control and insights</p>
            </div>
            <button type="button">Try for Free</button>
          </div>

          <div className="price-card">
            <p className="tier">Ultimate</p>
            <div className="price">
              <h2>$19.99</h2>
              <p>Per user, billed monthly</p>
            </div>
            <div className="features">
              <p>Robust work management</p>
              <p>100 gb storage</p>
              <p>VIP support</p>
            </div>
            <button type="button">Try for Free</button>
          </div>
        </section>

        <section className="footer">
          <div className="cta">
            <div className="timer">
              <p>Coming 4 Nov 2020</p>
              <div className="timer-container">
                <div className="day">
                  <h3>47</h3>
                  <p>days</p>
                </div>
                <div className="hour">
                  <h3>07</h3>
                  <p>hours</p>
                </div>
                <div className="minutes">
                  <h3>56</h3>
                  <p>min</p>
                </div>
                <div className="day">
                  <h3>14</h3>
                  <p>secs</p>
                </div>
              </div>
            </div>
            <button type="button">Get started</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
