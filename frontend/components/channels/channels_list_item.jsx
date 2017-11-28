import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const ChannelsListItem = ({ channel }) => (
  <NavLink to={`/channels/@me/${channel.id}`}>
    <div className="channel-item flex-row">
      <div className="channel-icon">
        <i class="fa fa-hashtag" aria-hidden="true"></i>
      </div>
      <div className="channel-name">
        {`${channel.name}`}
      </div>
    </div>
  </NavLink>
);

export default withRouter(ChannelsListItem);
