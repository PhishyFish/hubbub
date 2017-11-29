import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMessages } from '../../actions/message_actions';
import MessagesList from './messages_list';

const mapStateToProps = state => ({
  messages: Object.values(state.entities.messages)
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (serverId, channelId) => dispatch(fetchMessages(serverId, channelId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MessagesList)
);
