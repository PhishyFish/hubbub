import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createChannel, fetchChannels } from '../../actions/channel_actions';
import ChannelModal from './channel_modal';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  createChannel: (ch, serverId) => dispatch(createChannel(ch, serverId)),
  fetchChannels: serverId => dispatch(fetchChannels(serverId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChannelModal)
);
