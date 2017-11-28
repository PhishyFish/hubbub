import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchChannels } from '../../actions/channel_actions';
import ChannelsList from './channels_list';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelsList)
);
