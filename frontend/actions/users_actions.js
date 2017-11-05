import * as UserAPIUtil from '../util/users_util';

export const fetchUser = (id) => (dispatch) => {
  return UserAPIUtil.requestUser(id).then(user => {
    dispatch(receiveUser(user))
  });
};
