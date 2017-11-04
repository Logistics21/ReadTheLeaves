import * as EventAPIUTil from '../util/event_util';
import { addAttendance, removeAttendance, addHosting, removeHosting } from './session_actions';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const RECEIVE_UPDATED_EVENT = "RECEIVE_UPDATED_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE";


export const createEvent = (event) => dispatch => (
  EventAPIUTil.createEvent(event)
    .then(event => {
      debugger
      dispatch(receiveNewEvent(event));
      dispatch(addHosting({ id }, event));
    })
)

export const updateEvent = event => dispatch => (
  EventAPIUTil.updateEvent(event)
    .then(event => dispatch(receiveUpdatedEvent(event)))
)

export const removeEvent = (event_id) => (dispatch) => {
  debugger
  return EventAPIUTil.deleteEvent(event_id)
    .then(res => {
      dispatch(deleteEvent(event_id));
      dispatch(removeHosting(event_id));
  })
}

export const attendEvent = (event, currentUser) => (dispatch) => {
  debugger
  return EventAPIUTil.attendEvent(event.id)
    .then(event => {
      debugger
      dispatch(addAttendance(event.event_id, event));
      dispatch(addAttendee(event.event_id, currentUser));
    })
}

export const leaveEvent = (event_id, user_id) => (dispatch) => {
  debugger
  return EventAPIUTil.leaveEvent(event_id, user_id)
    .then((res) => {
      debugger
      dispatch(removeAttendance(res.event_id));
      dispatch(removeAttendee(res.event_id, res.user_id))
    })
}

export const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveNewEvent = (event) => ({
  type: RECEIVE_NEW_EVENT,
  event
});

export const receiveUpdatedEvent = (event) => ({
  type: RECEIVE_UPDATED_EVENT,
  event
});

export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id
});

export const addAttendee = (event_id, user) => {
  return {
    type: ADD_ATTENDEE,
    event_id,
    user
  }
}

export const removeAttendee = (event_id, user_id) => {
  debugger
  return {
    type: REMOVE_ATTENDEE,
    event_id,
    user_id
  }
}
