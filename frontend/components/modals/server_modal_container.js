import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchServers } from '../../actions/server_actions';
import ServerModal from './server_modal';

const mapDispatchToProps = dispatch => ({
  fetchServers: join => dispatch(fetchServers(join))
});

export default withRouter(
  connect(null, mapDispatchToProps)(ServerModal)
);
