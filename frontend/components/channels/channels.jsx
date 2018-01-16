import React from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';

import ChannelsList from './channels_list';
import UserContainer from '../user/user_container';
import DMsListContainer from '../direct_messages/dms_list_container';
import ChannelsListContainer from '../channels/channels_list_container';
import ServerHeaderContainer from '../servers/server_header_container';
import DMsHeaderContainer from '../direct_messages/dms_header_container';
import ChannelHeaderModal from '../modals/channel_header_modal';

class Channels extends React.Component {
  render() {
    return (
      <div className="channels-container flex-column">
        <Switch>
          <Route path="/channels/@me" component={DMsHeaderContainer} />
          <Route path="/channels/:serverId" component={ServerHeaderContainer} />
        </Switch>
        <ChannelHeaderModal />

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
