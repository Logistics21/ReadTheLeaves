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

import { selectAllCities } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.updateUserCity = updateUserCity;
  window.updateUser = updateUser;
  window.receiveCurrentUser = receiveCurrentUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
