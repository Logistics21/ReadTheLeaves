import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {
//   createEvent,
//   updateEvent,
//   removeEvent,
//   leaveEvent,
//   attendEvent,
  receiveAllEvents
} from './actions/events_actions';

import {
//   createEvent,
//   updateEvent,
//   removeEvent,
//   leaveEvent,
  fetchUser,
  updateUser
} from './actions/users_actions';

import {
  createEvent,
  updateEvent,
  removeEvent,
  leaveEvent,
  attendEvent,
  // requestCityEvents
} from './util/event_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.updateUser = updateUser;
  window.fetchUser = fetchUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
