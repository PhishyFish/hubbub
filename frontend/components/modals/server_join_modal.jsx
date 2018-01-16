import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      serverId: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.openActions = this.openActions.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearServerId = this.clearServerId.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleKeyUp(e));
  }

  closeModal(e) {
    e.preventDefault();
    this.props.fetchServers();
    document.querySelector('.server-join-modal').classList.remove('open');
  }

  openActions(e) {
    e.preventDefault();
    this.props.fetchServers();
    document.querySelector('.server-join-modal').classList.remove('open');
    document.querySelector('.server-modal').classList.add('open');
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  clearServerId() {
    this.setState({ serverId: '' });
  }

  toggleSelect(e) {
    e.preventDefault();

    if (e.currentTarget.classList.contains('selected')) {
      e.currentTarget.classList.remove('selected');
      this.clearServerId();
    } else {
      let otherItems = document.getElementsByClassName('search-result');
      Array.prototype.forEach.call(otherItems, el => {
        if (el.classList.contains('selected')) {
          el.classList.remove('selected');
        }
      });
      e.currentTarget.classList.add('selected');
      this.setState({ serverId: e.currentTarget.value });
    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      this.closeModal(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.serverId !== '') {
      let id = parseInt(this.state.serverId);
      let server = this.props.servers[id];

      this.props.joinServer(id)
      .then(() => this.props.fetchServers())
      .then(() => this.props.history.push(`/channels/${id}`));

      this.setState({ serverId: '' });
      this.closeModal(e);
    }
  }

  render() {
    let serverList;
    let serverResults = this.props.servers.filter(({ name }) => (
      name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    ));
    serverList = this.state.search === '' ? this.props.servers : serverResults;

    return (
      <div className="server-join-modal">
        <form className="server-join-form">
          <header>Join a server</header>
          <p>Select an existing server or search for one by name.</p>
          <div className="server-join-inner">
            <h5>Server Name</h5>
            <input type="text"
              autoFocus="true"
              onChange={this.updateSearch}
              value={this.state.search}
              placeholder="Enter a server name"
            />
          </div>
          <div className="server-results">
            <div className="scroller-wrap">
              <div className="scroller">
                <div className="spacer" style={{ order: -3 }}></div>
                <span className="search">Searching all servers</span>
                  {serverList.map(server => (
                    <button className="search-result"
                      onClick={this.toggleSelect}
                      value={server.id}
                      key={server.id}>
                      <span className="search-server-name">{server.name}</span>
                      <span className="search-server-id">#{server.id}</span>
                    </button>
                  ))}
                <div className="spacer"></div>
              </div>
            </div>
          </div>
          <div className="server-buttons">
            <button
              className="server-submit"
              onClick={this.handleSubmit}>
              Join Server
            </button>
            <button className="server-cancel" onClick={this.openActions}>
              <i className="fa fa-long-arrow-left" aria-hidden="true"></i> Back
            </button>
          </div>
        </form>
        <div className="modal-backdrop" onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default withRouter(ServerModal);
