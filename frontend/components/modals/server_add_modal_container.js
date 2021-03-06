import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createServer, fetchServers } from '../../actions/server_actions';
import ServerAddModal from './server_add_modal';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  createServer: server => dispatch(createServer(server)),
  fetchServers: () => dispatch(fetchServers())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServerAddModal)
);
