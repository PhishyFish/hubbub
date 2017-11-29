import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchServer } from '../../actions/server_actions';
import ServerHeader from './server_header';

const mapStateToProps = (state, { match }) => {
  const serverId = parseInt(match.params.serverId);
  const server = state.entities.servers[serverId] || {};

  return {
    serverId,
    server
  };
};

const mapDispatchToProps = dispatch => ({
  fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServerHeader)
);
