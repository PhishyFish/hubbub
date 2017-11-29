import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import MessagesListContainer from './messages_list_container';
import MessageForm from './message_form';

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
          <div className="members-container">
            <div className="scroller-wrap">
              <div className="members scroller">
                <h2>Members</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Messages);
