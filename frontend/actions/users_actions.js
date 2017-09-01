import * as UserAPIUtil from '../util/users_util';
import * as EventAPIUtil from '../util/event_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_HOST = 'REMOVE_HOST';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const updateUser = (id, user) => (dispatch) => {
  return UserAPIUtil.updateUser(id, user).then(user => {
    dispatch(receiveUser(user))
  });
};

export const fetchUser = (id) => (dispatch) => {
  return UserAPIUtil.requestUser(id).then(user => {
    dispatch(receiveUser(user))
  });
};
