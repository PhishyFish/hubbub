import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUsers } from '../../actions/user_actions';
import MembersList from './members_list';

const mapStateToProps = (state, ownProps) => ({
  members: state.entities.directMessages[ownProps.match.params.channelId].members
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: serverId => dispatch(fetchUsers(serverId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MembersList)
);
