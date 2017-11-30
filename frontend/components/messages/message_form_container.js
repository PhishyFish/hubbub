import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMessage, createMessage } from '../../actions/message_actions';
import { fetchChannels } from '../../actions/channel_actions';
import MessageForm from './message_form';

const mapStateToProps = (state, { match }) => {
  // let serverId = match.params.serverId;
  // let channelId = match.params.channelId;
  //
  // if (serverId === '@me') {
  //   return({
  //     channelName: state.entities.directMessages[channelId].name
  //   });
  // } else {
  //   fetchChannels(serverId);
  //   return({
  //     channelName: state.entities.channels[channelId].name
  //   });
  // }
};

const mapDispatchToProps = dispatch => ({
  fetchMessage: messageId => dispatch(fetchMessage(messageId)),
  createMessage: message => dispatch(createMessage(message)),
});

export default withRouter(
  connect(null, mapDispatchToProps)(MessageForm)
);
