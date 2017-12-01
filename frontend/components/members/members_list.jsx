import React from 'react';
import { withRouter } from 'react-router-dom';

class MembersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUsers(this.props.match.params.serverId);
  }

  render() {
    return (
      <div className="members-container">
        <div className="scroller-wrap">
          <div className="members scroller">
            <h2>Members—{this.props.members.length}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MembersList);
