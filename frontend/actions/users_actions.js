import * as EventAPIUtil from '../util/event_util';
import { removeHosting, removeAttendance } from './session_actions';

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
