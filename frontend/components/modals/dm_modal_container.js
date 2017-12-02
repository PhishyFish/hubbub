import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUsers } from '../../actions/user_actions';
import {
  createDirectMessage,
  fetchDirectMessages
} from '../../actions/direct_message_actions';
import DMModal from './dm_modal';

const mapStateToProps = state => ({
  users: Object.values(state.entities.users),
  directMessages: Object.values(state.entities.directMessages)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: serverId => dispatch(fetchUsers(serverId)),
  createDirectMessage: (dm, users) => dispatch(createDirectMessage(dm, users)),
  fetchDirectMessages: () => dispatch(fetchDirectMessages())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DMModal)
);
