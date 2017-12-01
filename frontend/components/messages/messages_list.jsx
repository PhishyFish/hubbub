import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import MessagesListItem from './messages_list_item';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { serverId, channelId } = this.props.match.params;

    this.props.fetchMessages(serverId, channelId);

    const channel = pusher.subscribe(`${serverId}-${channelId}`);

    channel.bind('create-message', message => {
      this.props.fetchMessages(serverId, channelId);
    });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.url !== newProps.match.url) {
      newProps.fetchMessages(
        newProps.match.params.serverId,
        newProps.match.params.channelId
      );

      pusher.unsubscribe(
        `${this.props.match.params.serverId}-${this.props.match.params.channelId}`
      );
      const channel = pusher.subscribe(
        `${newProps.match.params.serverId}-${newProps.match.params.channelId}`
      );
      channel.bind('create-message', message => {
        this.props.fetchMessages(
          newProps.match.params.serverId,
          newProps.match.params.channelId
        );
      });
    }
  }

  componentWillUpdate() {
    let list = this.refs.list;

    this.shouldScroll =
      list.scrollTop + list.offsetHeight === list.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScroll) {
      this.scrollToBottom();
    }
  }

  componentWillUnmount() {
    let { serverId, channelId } = this.props.match.params;
    pusher.unsubscribe(`${serverId}-${channelId}`);
  }

  scrollToBottom() {
    let list = this.refs.list;
    list.scrollTop = list.scrollHeight;
  }

  render() {
    return(
      <div className="message-list scroller" ref="list">
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
