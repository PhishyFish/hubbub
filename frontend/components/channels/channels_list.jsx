import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import ChannelsListItem from './channels_list_item';

class ChannelsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels(this.props.match.params.serverId);
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
