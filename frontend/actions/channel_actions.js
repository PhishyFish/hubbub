import * as ChannelUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const fetchChannels = () => dispatch => (
  ChannelUtil.fetchChannels().then(channels => (
    dispatch(receiveChannels(channels))
  ))
);

export const fetchChannel = id => dispatch => (
  ChannelUtil.fetchChannel(id).then(channel => (
    dispatch(receiveChannel(channel))
  ))
);

export const createChannel = channel => dispatch => (
  ChannelUtil.createChannel(channel).then(channel => (
    dispatch(receiveChannel(channel))
  ))
);

export const updateChannel = channel => dispatch => (
  ChannelUtil.updateChannel(channel).then(channel => (
    dispatch(receiveChannel(channel))
  ))
);
