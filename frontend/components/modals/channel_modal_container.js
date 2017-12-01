import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createChannel } from '../../actions/channel_actions';
import ChannelModal from './channel_modal';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createChannel: (ch, serverId) => dispatch(createChannel(ch, serverId))
});

export default withRouter(connect(null, mapDispatchToProps)(ChannelModal));
