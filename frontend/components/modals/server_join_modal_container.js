import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchServers, joinServer } from '../../actions/server_actions';
import ServerJoinModal from './server_join_modal';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers()),
  joinServer: server => dispatch(joinServer(server))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServerJoinModal)
);
