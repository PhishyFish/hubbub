import merge from 'lodash/merge';

import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER
} from '../actions/server_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      const server = action.server;
      return merge({}, state, { [server.id]: server });
    default:
      return state;
  }
};
