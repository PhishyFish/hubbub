import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.updateName = this.updateName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleKeyUp(e));
  }

  closeModal(e) {
    e.preventDefault();
    document.querySelector('.channel-modal').classList.remove('open');
  }

  updateName(e) {
    this.setState({ name: e.target.value });
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      this.closeModal(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createChannel(
      { name: this.state.name },
      this.props.match.params.serverId
    );

    this.closeModal(e);
  }

  render() {
    return(
      <div className="channel-modal">
        <form className="channel-form">
          <h4>Create Text Channel</h4>
          <h5>Channel Name</h5>
          <input type="text"
            name="create-channel"
            className="channel-input"
            onChange={this.updateName}
            value={this.state.name}
          />
          <p className="channel-form-desc">
            Anyone in this server will have access to read or connect to this channel
          </p>
          <div className="channel-buttons">
            <button
              className="channel-submit"
              onClick={this.handleSubmit}>
              Create Channel
            </button>
            <button className="channel-cancel" onClick={this.closeModal}>
              Cancel
            </button>
          </div>
        </form>
        <div className="channel-modal-backdrop" onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default withRouter(ChannelModal);
