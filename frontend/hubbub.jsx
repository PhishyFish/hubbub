import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { fetchDirectMessage, fetchDirectMessages } from './util/direct_message_api_util';
import { createDirectMessage } from './actions/direct_message_actions';
import { createServer } from './actions/server_actions';
import { createChannel } from './actions/channel_actions';
import { createMessage } from './util/message_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // For testing purposes:
  // window.store = store.configureStore;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchDirectMessage = fetchDirectMessage;
  window.fetchDirectMessages = fetchDirectMessages;
  window.createDirectMessage = createDirectMessage;
  window.createServer = createServer;
  window.createChannel = createChannel;
  window.createMessage = createMessage;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
