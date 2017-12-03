import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import SessionFormBackground from './session_form/session_form_background';
import SplashContainer from './splash/splash_container';
import MainContainer from './main/main_container';
import ServerModal from './modals/server_modal';
import ServerAddModalContainer from './modals/server_add_modal_container';
import ServerJoinModalContainer from './modals/server_join_modal_container';
import DMModalContainer from './modals/dm_modal_container';
import ChannelModalContainer from './modals/channel_modal_container';

const App = () => (
  <div className="app-container">
    <AuthRoute path="/login" component={SessionFormBackground} />
    <AuthRoute path="/register" component={SessionFormBackground} />

    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/register" component={SessionFormContainer} />
      <ProtectedRoute path="/channels" component={MainContainer} />
    </Switch>

    <ProtectedRoute path="/channels/" component={ServerModal} />
    <ProtectedRoute path="/channels/" component={ServerAddModalContainer} />
    <ProtectedRoute path="/channels/" component={ServerJoinModalContainer} />
    <ProtectedRoute path="/channels/:serverId" component={DMModalContainer} />
    <ProtectedRoute path="/channels/:serverId" component={ChannelModalContainer} />
  </div>
);

export default App;
