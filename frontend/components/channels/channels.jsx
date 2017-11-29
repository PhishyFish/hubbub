import React from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';

import ChannelsList from './channels_list';
import UserContainer from '../user/user_container';
import DMsListContainer from '../direct_messages/dms_list_container';
import ChannelsListContainer from '../channels/channels_list_container';
import ServerHeaderContainer from '../servers/server_header_container';
import DMsListHeader from '../direct_messages/dms_list_header';

class Channels extends React.Component {
  render() {
    return (
      <div className="channels-container flex-column">
        <div className="channels-header">
          <Switch>
            <Route path="/channels/@me" component={DMsListHeader} />
            <Route path="/channels/:serverId" component={ServerHeaderContainer} />
          </Switch>
        </div>

        <div className="channels flex-column">
          <Switch>
            <Route path="/channels/@me" component={DMsListContainer} />
            <Route
              path="/channels/:serverId"
              component={ChannelsListContainer}
            />
          </Switch>
        </div>

        <UserContainer />
      </div>
    );
  }
}

export default withRouter(Channels);
