import React from 'react';
import { withRouter } from 'react-router-dom';

import DMSearchItem from './dm_search_item';

class DMModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      users: props.users,
      members: []
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers(this.props.match.params.serverId);
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  addMember(member) {
    this.setState({ members: this.state.members.concat(member) });
  }

  removeMember(member) {
    let newMembers = this.state.members;
    let idx = newMembers.indexOf(member[0]);
    this.setState({ members: newMembers.splice(idx, 1) });
  }

  closeModal(e) {
    e.preventDefault();
    document.querySelector('.modal').classList.remove('open');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDirectMessage(this.state.members);
    this.setState({ search: '' });
    this.closeModal(e);
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
                <span className="search">Searching all users</span>
                {userResults.map(user => (
                  <DMSearchItem user={user}
                    key={user.id}
                    addMember={this.addMember}
                    removeMember={this.removeMember}
                  />
                ))}
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
        <div className="modal-backdrop"></div>
      </div>
    );
  }
}

export default withRouter(DMModal);
