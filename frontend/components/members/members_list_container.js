import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUsers } from '../../actions/user_actions';
import MembersList from './members_list';

const mapStateToProps = (state, { match: { params } }) => {
  console.log(params.serverId);
  if (params.serverId === '@me') {
    return({
      channel: state.entities.directMessages[params.channelId]
    });
  } else {
    return({
      channel: state.entities.servers[params.serverId]
    });
  }
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: serverId => dispatch(fetchUsers(serverId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MembersList)
);
