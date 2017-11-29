import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import MessagesListContainer from './messages_list_container';
import MessageForm from './message_form';
import MembersList from '../members/members_list';

class Messages extends React.Component {
  render() {
    return (
      <div className="messages-container flex-column">
        <div className="messages-header">
          <h1>Message/Channel Name</h1>
        </div>
        <div className="content flex-row">
          <div className="messages flex-column">
            <div className="scroller-wrap">
              <Route
                path="/channels/:serverId/:channelId"
                component={MessagesListContainer}
              />
            </div>
            <Route
              path="/channels/:serverId/:channelId"
              component={MessageForm}
            />
          </div>
          <Route 
            path="/channels/:serverId/:channelId"
            component={MembersList}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Messages);
