import { RECEIVE_SINGLE_USER } from '../actions/users_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      const user = action.user;
      return user;
    default:
      return state;
  }
};

export default UserReducer;
