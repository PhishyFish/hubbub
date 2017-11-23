import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';

const splash = () => (
  <div className="flex-column-center">
    <header className="flex-space-between">
      <h1>Hubbub</h1>
      <nav className="flex-space-between">
        <a href="https://www.github.com/phishyfish" aria-label="Vickie's GitHub">
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/vickie-chen" aria-label="Vickie's LinkedIn">
          <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        </a>
      </nav>
    </header>

    <h1>Join the commotion.</h1>
    <p>Real-time live chat. No frills. No hassle.</p>
    <div className="session-buttons">
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/register">
        <button className="button-green">Register</button>
      </Link>
    </div>
  </div>
);

const channels = () => (
  <h1>Channels</h1>
);

const App = () => (
  <div>
    <ProtectedRoute path="/channels" component={channels} />
    <Switch>
      <AuthRoute exact path="/" component={splash} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/register" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
