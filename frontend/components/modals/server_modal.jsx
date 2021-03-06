import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerModal extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openJoin = this.openJoin.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  closeModal(e) {
    e.preventDefault();
    document.querySelector('.server-modal').classList.remove('open');
  }

  openCreate(e) {
    e.preventDefault();
    document.querySelector('.server-modal').classList.remove('open');
    document.querySelector('.server-add-modal').classList.add('open');
  }

  openJoin(e) {
    e.preventDefault();
    this.props.fetchServers({ join: "true" });
    document.querySelector('.server-modal').classList.remove('open');
    document.querySelector('.server-join-modal').classList.add('open');
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      this.closeModal(e);
    }
  }

  render() {
    return (
      <div className="server-modal">
        <div className="server-form">
          <header>The more, the merrier</header>
          <div className="actions">
            <div className="action create">
              <h3>Create</h3>
              <p>Make a new server and invite your friends!</p>
              <div className="action-icon">
                <i className="fa fa-users fa-4x" aria-hidden="true"></i>
              </div>
              <button onClick={this.openCreate}>Create a Server</button>
            </div>
            <div className="action join">
              <h3>Join</h3>
              <p>Late to the party? Find an existing server.</p>
              <div className="action-icon">
                <i className="fas fa-user fa-3x" aria-hidden="true"></i>
                <i className="fas fa-long-arrow-alt-right fa-3x" aria-hidden="true"></i>
                <i className="fa fa-users fa-4x" aria-hidden="true"></i>
              </div>
              <button onClick={this.openJoin}>Join a Server</button>
            </div>
          </div>
        </div>
        <div className="modal-backdrop" onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default withRouter(ServerModal);
