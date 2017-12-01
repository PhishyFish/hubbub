import React from 'react';
import { withRouter } from 'react-router-dom';

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
    console.error(this.props.channel);
    if (this.props.channel.members) {
      return(this.props.channel.members.length);
    }
  }

  render() {
    if (this.props.channel) {
      return (
        <div className="members-container">
          <div className="scroller-wrap">
            <div className="members scroller">
              <h2>Members—{this.memberCount()}</h2>
            </div>
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }

  }
}

export default withRouter(MembersList);
