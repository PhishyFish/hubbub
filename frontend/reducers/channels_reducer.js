import merge from 'lodash/merge';

import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL
} from '../actions/channel_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      const channel = action.channel;
      return merge({}, state, { [channel.id]: channel });
    default:
      return state;
  }
};
