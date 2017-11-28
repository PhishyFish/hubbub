import React from 'react';
import { withRouter, Switch, Link, NavLink } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import Channels from '../channels/channels';
import ServersListContainer from '../servers/servers_list_container';

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
          <div className="messages-container flex-column">
            <div className="messages-header">
              <h1>Message/Channel Name</h1>
            </div>
            <div className="content flex-row">
              <div className="messages flex-column">
                <div className="scroller-wrap">
                  <div className="messages scroller">
                    <div className="message-group">
                      Here are messages!
                    </div>
                  </div>
                </div>
                <form>
                  <div className="message-input">
                    <textarea className="chat" rows="1" placeholder="Message (channel/group/username)">

                    </textarea>
                  </div>
                </form>
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
        </div>
      </div>
    );
  }
}

export default Main;
