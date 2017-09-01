import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// import {
//   updateUserCity,
//   // updateUser,
//   RECEIVE_CURRENT_USER,
//   receiveCurrentUser
// } from './actions/session_actions';

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

  // window.receiveAllEvents = receiveAllEvents;
  // window.requestCityEvents = requestCityEvents;
  window.updateUser = updateUser;
  window.fetchUser = fetchUser;
  // window.removeEvent = removeEvent;
  // window.leaveEvent = leaveEvent;
  // window.attendEvent = attendEvent;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
