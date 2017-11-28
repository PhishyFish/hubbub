import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchServer } from '../../actions/server_actions';
import ServerHeader from './server_header';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchServer: serverId => dispatch(fetchServer(serverId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServerHeader)
);
