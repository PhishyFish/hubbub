import { connect } from 'react-redux';

import MessagesHeader from './messages_header';

const mapStateToProps = ({ entities }, { match: { params } }) => {
  let serverId = params.serverId;
  let channelId = params.channelId;

  if (serverId === '@me') {
    return({
      currentChannel: entities.directMessages[channelId]
    });
  } else {
    return({
      currentChannel: entities.channels[channelId]
    });
  }
};

export default connect(mapStateToProps, null)(MessagesHeader);
