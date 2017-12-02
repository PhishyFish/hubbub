import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

import ServersListItem from './servers_list_item';

class ServersList extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  openModal(e) {
    e.preventDefault();
    document.querySelector('.server-modal').classList.add('open');
  }

  closeModal(e) {
    e.preventDefault();
    document.querySelector('.server-modal').classList.remove('open');
  }

  handleKeyUp(e) {
    if (e.key === 'Escape') {
      this.closeModal(e);
    }
  }

  render() {
    return(
      <div className="servers-container flex-column">
        <div className="scroller-wrap">
          <section className="servers scroller">
            <NavLink to="/channels/@me" className="tooltip-icon">
              <div className="icon friends">
                <i className="fa fa-users fa-lg"></i>
              </div>
              <div className="tooltips">
                <span className="tooltip">Direct Messages</span>
              </div>
            </NavLink>

            <hr />

            {this.props.servers.map(server => (
              <ServersListItem
                server={server}
                channels={server.channels}
                key={server.id} />
            ))}

            <button className="icon add-server" onClick={this.openModal}>
              <span>+</span>
            </button>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ServersList);
