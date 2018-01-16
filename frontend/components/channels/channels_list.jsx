import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import ChannelsListItem from './channels_list_item';

class ChannelsList extends React.Component {
  constructor(props) {
    super(props);
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
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.serverId !== newProps.match.params.serverId) {
      newProps.fetchChannels(newProps.match.params.serverId)
        .then(() => this.props.history.push(
          `${this.props.match.url}/${this.props.channels[0].id}`
        ));
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
