import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import MessagesListItem from './messages_list_item';

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { serverId, channelId } = this.props.match.params;
    this.channel = pusher.subscribe(`${serverId}-${channelId}`);
  }

  componentDidMount() {
    let { serverId, channelId } = this.props.match.params;
    this.props.fetchMessages(serverId, channelId);

    this.channel.bind('new-message', message => {
      this.props.fetchMessages(serverId, channelId);
    }, this);
  }

  componentWillReceiveProps(newProps) {
    let { match } = this.props;
    let { serverId, channelId } = newProps.match.params;

    if (match.url !== newProps.match.url) {
      newProps.fetchMessages(serverId, channelId);

      pusher.unsubscribe(`${match.params.serverId}-${match.params.channelId}`);
      this.channel = pusher.subscribe(`${serverId}-${channelId}`);
      this.channel.bind('new-message', message => {
        this.props.fetchMessages(serverId, channelId);
      }, this);
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
