import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import ChannelsList from './channels_list';
import UserContainer from '../user/user_container';
import DMsListContainer from '../direct_messages/dms_list_container';

class Channels extends React.Component {
  render() {
    return (
      <div className="channels-container flex-column">
        <div className="channels-header">
          <h1>Server Name/DMs</h1>
        </div>
        <div className="channels flex-column">
          <ProtectedRoute path="/channels/@me" component={DMsListContainer} />
        </div>
        <UserContainer />
      </div>
    );
  }
}

export default withRouter(Channels);
