import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchChannels } from '../../actions/channel_actions';
import Channels from './channels';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: serverId => dispatch(fetchChannels(serverId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Channels)
);
