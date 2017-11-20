import { RECEIVE_SINGLE_USER } from '../actions/users_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      let newState = merge({}, state, action.user);
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
