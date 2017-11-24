import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    return this.props.logout();
  }

  // <img className="icon-small" src={`${this.props.currentUser.img_url}`} />
  render() {
    console.log("props", this.props);
    return (
      <div className="user-status">
        <div className="user-info">
          <span className="username">{this.props.currentUser.username}</span>
          <span className="user-id">#{this.props.currentUser.id}</span>
        </div>
        <button className="button-logout" onClick={this.logout}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          Log Out
        </button>
      </div>
    );
  }
}

export default User;
