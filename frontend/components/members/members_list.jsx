import React from 'react';
import { withRouter } from 'react-router-dom';

class MembersList extends React.Component {
  render() {
    return (
      <div className="members-container">
        <div className="scroller-wrap">
          <div className="members scroller">
            <h2>Members</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MembersList);
