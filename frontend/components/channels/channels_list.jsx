import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import ChannelsListItem from './channels_list_item';

class ChannelsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let { serverId } = this.props.match.params;
    this.channel = pusher.subscribe(`${serverId}-channels`);
  }

  componentDidMount() {
    let { match, history } = this.props;

    if (match.exact) {
      this.props.fetchChannels(match.params.serverId)
      .then(() => history.push(
        `${match.url}/${this.props.channels[0].id}`
      ));
    } else {
      this.props.fetchChannels(match.params.serverId);
    }

    this.channel.bind('new-channel', channel => {
      this.props.fetchChannels(match.params.serverId);
    }, this);
  }

  componentWillReceiveProps(newProps) {
    let { serverId } = this.props.match.params;
    let newServerId = newProps.match.params.serverId;

    if (this.props.match.params.serverId !== newServerId) {
      newProps.fetchChannels(newServerId)
        .then(() => this.props.history.push(
          `${this.props.match.url}/${this.props.channels[0].id}`
        ));

      pusher.unsubscribe(`${serverId}-channels`);
      this.channel = pusher.subscribe(`${newServerId}-channels`);
      this.channel.bind('new-channel', channel => {
        this.props.fetchChannels(newServerId);
      }, this);
    }
  }

  render() {
    return(
      <div className="scroller-wrap">
        <div className="channel-list flex-column scroller">
          {this.props.channels.map(channel => (
            <ChannelsListItem channel={channel}
              serverId={this.props.match.params.serverId}
              key={channel.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(ChannelsList);
