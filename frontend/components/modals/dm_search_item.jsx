import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class DMSearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      member: []
    };

    this.toggleSelect = this.toggleSelect.bind(this);
    this.toggleMember = this.toggleMember.bind(this);
  }

  toggleSelect(e) {
    e.preventDefault(e);
    if (e.target.classList.contains('selected')) {
      e.target.classList.add('selected');
    } else {
      e.target.classList.remove('selected');
    }

    this.toggleMember(e);
  }

  toggleMember(e) {
    let member = [e.target.value];

    if (e.target.classList.contains('selected')) {
      this.props.addMember(member);
    } else {
      this.props.removeMember(member);
    }
  }

  render() {
    let { user } = this.props;
    return(
      <div className="user-result" onClick={this.toggleSelect} value={user.id}>
        <div className="icon-tiny">
          <img className="icon-tiny" src={user.img_url} />
        </div>
        <span className="username">{user.username}</span>
        <span className="user-id">#{user.id}</span>
      </div>
    );
  }
}

export default withRouter(DMSearchItem);
