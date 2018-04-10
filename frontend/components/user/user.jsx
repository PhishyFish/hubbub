import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-status flex-space-between">
        <div className="user-info-box">
          <img className="icon-small" src={this.props.currentUser.img_url} />
          <div className="user-info" >
            <span className="username">{this.props.currentUser.username}</span>
            <span className="user-id">#{this.props.currentUser.id}</span>
          </div>
        </div>
        <button className="button-logout" onClick={this.props.logout}>
          <i className="fas fa-sign-out-alt" aria-hidden="true"></i>
          Log Out
        </button>
      </div>
    );
  }
}

export default User;
