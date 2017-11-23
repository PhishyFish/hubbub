import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';

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
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
