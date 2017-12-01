import React from 'react';

class MembersListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { user } = this.props;

    return(
      <div className="member">
        <div className="icon-small">
          <img src={user.img_url} />
        </div>
        <span className="member-username">{user.username}</span>
      </div>
    );
  }
}

export default MembersListItem;
