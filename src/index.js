import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LazyApp = React.lazy(() => import('./App'));
const LazySignup = React.lazy(() => import('./Signup'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback="Loading...">
        <Switch>
          <Route exact path="/" component={LazyApp} />
          <Route path="/signup" component={LazySignup} />
        </Switch>
      </React.Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
