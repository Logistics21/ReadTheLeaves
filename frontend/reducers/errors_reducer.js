import { merge } from 'lodash';
import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/errors_actions';

const _defaultState = Object.freeze({
  errors: [],
});

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default errorsReducer;
