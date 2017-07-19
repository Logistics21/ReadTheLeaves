import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {
  updateUserCity,
  updateUser,
  RECEIVE_CURRENT_USER,
  receiveCurrentUser
} from './actions/session_actions';

// import { selectAllCities } from './reducers/selectors';
// import { attendEvent } from './util/attend_util';
import * as Event from './util/event_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.requestCityEvents = Event.requestCityEvents;
  window.createEvent = Event.createEvent;
  window.updateEvent = Event.updateEvent;
  window.deleteEvent = Event.deleteEvent;
  window.leaveEvent = Event.leaveEvent;
  window.attendEvent = Event.attendEvent;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
