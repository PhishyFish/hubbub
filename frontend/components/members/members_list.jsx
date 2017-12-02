import React from 'react';
import { withRouter } from 'react-router-dom';

import MembersListItem from './members_list_item';

class MembersList extends React.Component {
  constructor(props) {
    super(props);

    this.memberCount = this.memberCount.bind(this);
  }

  componentDidMount() {
    let { serverId } = this.props.match.params;
    this.props.fetchUsers(serverId);
  }

  componentWillReceiveProps(newProps) {
    let { serverId } = this.props.match.params;
    if (this.props.match.url !== newProps.match.url) {
      this.props.fetchUsers(serverId);
    }
  }

  memberCount() {
    if (this.props.channel.members) {
      return(this.props.channel.members.length);
    }
  }

  render() {
    if (this.props.channel && this.props.channel.members) {
      return (
        <div className="members-container">
          <div className="scroller-wrap">
            <div className="members scroller">
              <h2>Members—{this.memberCount()}</h2>
              {this.props.channel.members.map(user => {
                return <MembersListItem user={user} key={user.id}/>;
              })}
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      );
    }

  }
}

export default withRouter(MembersList);
