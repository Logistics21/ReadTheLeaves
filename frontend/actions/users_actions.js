import * as EventAPIUtil from '../util/event_util';
import { requestUser } from '../util/users_util';
import { removeHosting, removeAttendance, addAttendance } from './session_actions';

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const attendEvent = (event, currentUser) => (dispatch) => {
  return EventAPIUtil.attendEvent(event.id)
    .then(res => {
      dispatch(addAttendance(res.event_id, event));
    })
}

export const removeEvent = (event_id) => (dispatch) => {
  return EventAPIUtil.deleteEvent(event_id)
    .then(res => {
      dispatch(removeHosting(event_id));
  })
}

export const leaveEvent = (event_id, user_id) => (dispatch) => {
  return EventAPIUtil.leaveEvent(event_id, user_id)
    .then((res) => {
      dispatch(removeAttendance(res.event_id));
    })
}

export const fetchUser = (user_id) => (dispatch) => {
  return requestUser(user_id)
    .then((user) => {
      dispatch(receiveSingleUser(user));
    })
}

export const receiveSingleUser = (user) => ({
  type: RECEIVE_SINGLE_USER,
  user
});
