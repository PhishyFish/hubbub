import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchServers } from '../../actions/server_actions';
import ServersList from './servers_list';

const mapStateToProps = state => ({
  servers: Object.values(state.entities.servers)
});

const mapDispatchToProps = dispatch => ({
  fetchServers: () => dispatch(fetchServers())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServersList)
);
