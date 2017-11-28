import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// src = other member's icon or group icon
// user count prop?

const DMsListItem = ({ dm }) => (
  <NavLink to={`/channels/@me/${dm.id}`}>
    <div className="channel-item flex-row">
      <div className="channel-icon">
      </div>
      <div className="channel-name">
        {`${dm.name}`}
      </div>
    </div>
  </NavLink>
);

export default withRouter(DMsListItem);
