import merge from 'lodash/merge';

import {
  RECEIVE_DIRECT_MESSAGES,
  RECEIVE_DIRECT_MESSAGE
} from '../actions/direct_message_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.directMessages;
    case RECEIVE_DIRECT_MESSAGE:
      const directMessage = action.directMessage;
      return merge({}, state, { [directMessage.id]: directMessage });
    default:
      return state;
  }
};
