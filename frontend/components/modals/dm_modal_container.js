import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUsers } from '../../actions/user_actions';
import { createDirectMessage } from '../../actions/direct_message_actions';
import DMModal from './dm_modal';

const mapStateToProps = state => ({
  users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: serverId => dispatch(fetchUsers(serverId)),
  createDirectMessage: (dm, members) => dispatch(createDirectMessage(dm, members))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DMModal)
);
