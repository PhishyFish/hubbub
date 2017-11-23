import React from 'react';
import { Route, Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';

const splash = () => (
  <div className="container">
    <header>
      <h1>Hubbub</h1>
      <nav>
        <a href="#" aria-label="Vickie's GitHub">
          <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
        <a href="#" aria-label="Vickie's LinkedIn">
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

const App = () => (
  <div>
    <Route exact path="/" render={splash} />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/register" component={SessionFormContainer} />
  </div>
);

export default App;
