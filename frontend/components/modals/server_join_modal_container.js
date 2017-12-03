import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createServer, fetchServers } from '../../actions/server_actions';
import ServerJoinModal from './server_join_modal';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  fetchServers: users => dispatch(fetchServers(users))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServerJoinModal)
);
