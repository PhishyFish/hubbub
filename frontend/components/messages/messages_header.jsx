import React from 'react';
import { withRouter } from 'react-router-dom';

class MessagesHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  renderHeader() {
    if (this.props.currentChannel) {
      return(
        <h1>{this.props.currentChannel.name}</h1>
      );
    } else {
      return(
        <h1>Hubbub</h1>
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
