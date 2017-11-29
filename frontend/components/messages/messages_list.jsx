import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import MessagesListItem from './messages_list_item';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(
      this.props.match.params.serverId,
      this.props.match.params.channelId
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.url !== newProps.match.url) {
      newProps.fetchMessages(
        newProps.match.params.serverId,
        newProps.match.params.channelId
      );
    }
  }

  render() {
    return(
      <div className="message-list scroller">
        {this.props.messages.map(message => (
          <MessagesListItem message={message}
            channelId={this.props.match.params.channelId}
            key={message.id} />
        ))}
      </div>
    );
  }
}

export default withRouter(MessagesList);
