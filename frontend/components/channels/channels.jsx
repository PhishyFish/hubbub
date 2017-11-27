import React from 'react';
import { withRouter } from 'react-router-dom';

import ChannelsList from './channels_list';
import UserContainer from '../user/user_container';

class Channels extends React.Component {
  render() {
    return (
      <div className="channels-container flex-column">
        <div className="channels-header">
          <h1>Server Name/DMs</h1>
        </div>
        <div className="channels flex-column">
          <div className="channel">
            <header>Direct Messages</header>
          </div>
        </div>
        <UserContainer />
      </div>
    );
  }
}

export default withRouter(Channels);
