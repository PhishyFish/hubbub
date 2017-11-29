import React from 'react';
import { withRouter, Switch, Link, NavLink } from 'react-router-dom';

import Channels from '../channels/channels';
import ServersListContainer from '../servers/servers_list_container';
import Messages from '../messages/messages';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <ServersListContainer />
        <div className="main-content">
          <Channels />
          <Messages />
        </div>
      </div>
    );
  }
}

export default Main;
