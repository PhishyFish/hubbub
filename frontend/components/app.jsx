import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import SessionFormBackground from './session_form/session_form_background';
import SplashContainer from './splash/splash_container';

const channels = () => (
  <h1>Channels</h1>
);

const App = () => (
  <div>
    <ProtectedRoute path="/channels" component={channels} />
    <AuthRoute path="/login" component={SessionFormBackground} />
    <AuthRoute path="/register" component={SessionFormBackground} />

    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/register" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
