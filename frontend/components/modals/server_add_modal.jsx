import React from 'react';

class ServerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.openActions = this.openActions.bind(this);
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
    document.querySelector('.server-add-modal').classList.remove('open');
  }

  openActions(e) {
    e.preventDefault();
    document.querySelector('.server-add-modal').classList.remove('open');
    document.querySelector('.server-modal').classList.add('open');
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

    this.props.createServer({ name: this.state.name })
      .then(() => this.props.fetchServers())
      .then(() => this.props.history.push(
        `/channels/${this.props.servers[this.props.servers.length - 1].id}/${this.props.servers[this.props.servers.length - 1].channels[0].id}`
    ));

    this.setState({ name: '' });
    this.closeModal(e);
  }

  render() {
    return (
      <div className="server-add-modal">
        <form className="server-add-form">
          <header>Create your server</header>
          <p>By creating a server, you will have access to instant messaging
            with anyone who joins your server.</p>
          <div className="server-add-inner">
            <h5>Server Name</h5>
            <input type="text"
              autoFocus="true"
              onChange={this.updateName}
              value={this.state.name}
              placeholder="Enter a server name"
            />
          </div>
          <div className="server-buttons">
            <button
              className="server-submit"
              onClick={this.handleSubmit}>
              Create Server
            </button>
            <button className="server-cancel" onClick={this.openActions}>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
              Back
            </button>
          </div>
        </form>
        <div className="modal-backdrop" onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default ServerModal;
