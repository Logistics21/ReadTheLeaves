import { RECEIVE_SINGLE_USER } from '../actions/users_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
