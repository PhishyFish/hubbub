import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createMessage } from '../../actions/message_actions';
import { fetchChannels } from '../../actions/channel_actions';
import MessageForm from './message_form';

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

const mapDispatchToProps = dispatch => ({
  createMessage: (msg, chId, srvId) => dispatch(createMessage(msg, chId, srvId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MessageForm)
);
