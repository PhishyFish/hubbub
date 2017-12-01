import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.serverId);
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleKeyUp(e));
  }

  toggleDropdown(e) {
    e.preventDefault();
    let header = document.querySelector('.channels-header-dropdown');

    if (header.classList.contains('visible')) {
      header.classList.remove('visible');

    } else {
      header.classList.add('visible');
    }
  }

  closeDropdown(e) {
    e.preventDefault();
    document.querySelector('.channels-header-dropdown').classList.remove('visible');
  }

  handleKeyUp(e) {
    if (e.key === 'Escape') {
      this.closeDropdown(e);
    }
  }

  render() {
    return (
      <div className="channels-header server" onClick={this.toggleDropdown}>
        <div className="channels-header-content">
          <h1>{this.props.server.name}</h1>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default withRouter(ServerHeader);
