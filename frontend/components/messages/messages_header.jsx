import React from 'react';
import { withRouter } from 'react-router-dom';

class MessagesHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader() {
    if (this.props.currentChannel) {
      let icon;
      if (this.props.match.params.serverId !== '@me') {
        icon = <i className="fa fa-hashtag" aria-hidden="true"></i>;
      }

      return(
        <h1>{icon} {this.props.currentChannel.name}</h1>
      );
    }
  }

  render() {
    return(
      <div className="messages-name">
        {this.renderHeader()}
      </div>
    );
  }
}

export default withRouter(MessagesHeader);
