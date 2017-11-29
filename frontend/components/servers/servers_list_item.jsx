import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const ServersListItem = ({ server, channels }) => {
  let icon;
  if (server.img_url) {
    icon = <img src={server.img} />;
  } else {
    let abbr = server.name.split(" ", 3).map(word => word[0]);
    abbr = abbr.reduce((acc, el) => acc + el);
    icon = <span>{abbr}</span>;
  }

  return (
    <NavLink to={`/channels/${server.id}/${channels[0].id}`}>
      <div className="icon server">
        {icon}
      </div>
    </NavLink>
  );
};

export default withRouter(ServersListItem);
