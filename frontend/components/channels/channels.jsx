import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

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
          <div className="scroller-wrap">
            <div className="channel-list flex-column scroller">
              <header>Direct Messages</header>
              <NavLink to="/channels/serverId/channelId">
                <div className="channel-item flex-row">
                  <div className="channel-icon">
                    <i className="fa fa-hashtag" aria-hidden="true"></i>
                  </div>
                  <div className="channel-name">
                    theoddone
                  </div>
                </div>
              </NavLink>
              <NavLink to="/channels/serverId/channelId2">
                <div className="channel-item flex-row">
                  <div className="channel-icon">
                    <i className="fa fa-hashtag" aria-hidden="true"></i>
                  </div>
                  <div className="channel-name">
                    general
                  </div>
                </div>
              </NavLink>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  general
                </div>
              </div>
              <div className="channel-item flex-row">
                <div className="channel-icon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </div>
                <div className="channel-name">
                  thelastone
                </div>
              </div>
            </div>
          </div>
        </div>
        <UserContainer />
      </div>
    );
  }
}

export default withRouter(Channels);
