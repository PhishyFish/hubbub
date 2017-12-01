import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelHeaderModal extends React.Component {
  constructor(props) {
    super(props);

    this.openChannelModal = this.openChannelModal.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  openChannelModal(e) {
    e.preventDefault();
    document.querySelector('.channel-modal').classList.add('open');
    this.closeDropdown(e);
  }

  closeDropdown(e) {
    e.preventDefault();
    document.querySelector('.channels-header-dropdown').classList.remove('visible');
  }

  render() {
    return (
      <div className="channels-header-dropdown">
        <div className="popout-menu">
          <div
            className="popout-menu-item"
            onClick={this.openChannelModal}
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
            <span className="popout-action">Create Channel</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ChannelHeaderModal;
