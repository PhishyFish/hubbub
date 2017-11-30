import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import MessagesListContainer from './messages_list_container';
import MessageFormContainer from './message_form_container';
import MembersList from '../members/members_list';
import MessagesHeaderContainer from './messages_header_container';
import MainHeader from '../main/main_header';

class Messages extends React.Component {
  render() {
    return (
      <div className="messages-container flex-column">
        <div className="messages-header">
          <Switch>
            <Route
              path="/channels/:serverId/:channelId"
              component={MessagesHeaderContainer}
            />
            <Route
              path="/channels"
              component={MainHeader}
            />
          </Switch>
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
              component={MessageFormContainer}
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
