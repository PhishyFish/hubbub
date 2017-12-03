import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUsers } from '../../actions/user_actions';
import DMsListHeader from './dms_list_header';

const mapDispatchToProps = dispatch => ({
  fetchUsers: serverId => dispatch(fetchUsers(serverId))
});

export default withRouter(
  connect(null, mapDispatchToProps)(DMsListHeader)
);
