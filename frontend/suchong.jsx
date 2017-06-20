import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, signin, signout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.signup = signup;
  window.signin = signin;
  window.signout = signout;
  // if (window.currentUser) {
    // const preloadedState = { session: { currentUser: window.currentUser } };
    // store = configureStore(preloadedState);
    // delete window.currentUser;
  // } else {
    store = configureStore();
  // }
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Read The Leaves</h1>, root);
});
