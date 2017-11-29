import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import ServersListItem from './servers_list_item';

class ServersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  render() {
    return(
      <div className="servers-container flex-column">
        <div className="scroller-wrap">
          <section className="servers scroller">
            <NavLink to="/channels/@me">
              <div className="icon friends">
                <i className="fa fa-users fa-lg"></i>
              </div>
            </NavLink>

            <hr />

            {this.props.servers.map(server => (
              <ServersListItem server={server} key={server.id} />
            ))}

            <Link to="/channels/@me">
              <button className="icon add-server">
                <span>+</span>
              </button>
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ServersList);