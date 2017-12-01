import { combineReducers } from 'redux';

import servers from './servers_reducer';
import channels from './channels_reducer';
import messages from './messages_reducer';
import directMessages from './direct_messages_reducer';
import users from './users_reducer';

export default combineReducers({
  servers,
  channels,
  messages,
  directMessages,
  users
});
