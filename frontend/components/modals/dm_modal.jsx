import React from 'react';
import { withRouter } from 'react-router-dom';

import DMSearchItem from './dm_search_item';

class DMModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: props.users,
      members: [],
      names: []
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers(this.props.match.params.serverId);
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => this.handleKeyUp(e));
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  addMember(member, name) {
    this.setState({
      members: this.state.members.concat(member),
      names: this.state.names.concat(name)
    });
  }

  removeMember(member, name) {
    let newMembers = this.state.members;
    let newNames = this.state.names;
    let idx = newMembers.indexOf(member[0]);
    let nameIdx = newNames.indexOf(name[0]);
    newMembers.splice(idx, 1);
    newNames.splice(nameIdx, 1);
    this.setState({
      members: newMembers,
      names: newNames
    });
  }

  closeModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.remove('open');
  }

  handleSubmit(e) {
    let { history, fetchDirectMessages } = this.props;
    e.preventDefault();
    this.props.createDirectMessage(
      { name: this.state.names.join(", ") },
      this.state.members
    ).then(() => fetchDirectMessages()
      .then(() => history.push(
        `/channels/@me/${this.props.directMessages[this.props.directMessages.length - 1].id}`
      )));

    this.setState({ search: '', members: [], names: [] });
    [].forEach.call(document.getElementsByClassName('user-result'), (el) => {
      if (el.classList.contains('selected')) {
        el.classList.remove('selected');
      }
    });
    this.closeModal(e);
  }

  handleKeyUp(e) {
    if (e.key === 'Escape') {
      this.closeModal(e);
    }
  }

  render() {
    let userResults = this.props.users.filter(({ username }) => (
      username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    ));

    return(
      <div className="modal">
        <form className="modal-form">
          <input type="text"
            className="user-search"
            onChange={this.updateSearch}
            value={this.state.search}
            placeholder="Who would you like to talk to?"
          />
          <div className="user-results">
            <div className="scroller-wrap">
              <div className="scroller">
                <div className="spacer" style={{ order: -3 }}></div>
                <span className="search">Searching all users</span>
                {userResults.map(user => {
                  let searchItem;
                  if (this.state.members.includes(user.id.toString())) {
                    searchItem =
                      <DMSearchItem user={user}
                        selected="true"
                        key={user.id}
                        addMember={this.addMember}
                        removeMember={this.removeMember}
                      />;
                  } else {
                    searchItem =
                      <DMSearchItem user={user}
                        selected="false"
                        key={user.id}
                        addMember={this.addMember}
                        removeMember={this.removeMember}
                      />;
                  }
                  return searchItem;
                })}
                <div className="spacer"></div>
              </div>
            </div>
          </div>
          <div className="modal-buttons">
            <button className="modal-close"
              onClick={this.closeModal}>
              Cancel
            </button>
            <button className="modal-submit"
              onClick={this.handleSubmit}>
              Create Direct Message
            </button>
          </div>
        </form>
        <div className="modal-backdrop" onClick={this.closeModal}></div>
      </div>
    );
  }
}

export default withRouter(DMModal);
