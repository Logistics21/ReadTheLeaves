import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
