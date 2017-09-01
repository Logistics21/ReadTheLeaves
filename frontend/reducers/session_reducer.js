import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = _defaultState, action) => {
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
