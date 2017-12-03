import * as EventAPIUTil from '../util/event_util';
import { addAttendance, removeAttendance, addHosting, removeHosting } from './session_actions';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const RECEIVE_UPDATED_EVENT = "RECEIVE_UPDATED_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE";


export const createEvent = (event) => (dispatch) => {
  return EventAPIUTil.createEvent(event)
    .then(event => {
      dispatch(receiveNewEvent(event));
      dispatch(addHosting(Object.keys(event)[0], event));
  })
}

export const updateEvent = (event) => (dispatch) => {
  return EventAPIUTil.updateEvent(event)
    .then(event => { dispatch(receiveUpdatedEvent(event)); })
}

export const removeEvent = (event_id) => (dispatch) => {
  return EventAPIUTil.deleteEvent(event_id)
    .then(res => {
      dispatch(deleteEvent(event_id));
      dispatch(removeHosting(event_id));
  })
}

export const attendEvent = (event, currentUser) => (dispatch) => {
  return EventAPIUTil.attendEvent(event.id)
    .then(res => {
      debugger
      dispatch(addAttendance(res.event_id, event));
      dispatch(addAttendee(res.event_id, currentUser));
    })
}

export const leaveEvent = (event_id, user_id) => (dispatch) => {
  return EventAPIUTil.leaveEvent(event_id, user_id)
    .then((res) => {
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
  return {
    type: REMOVE_ATTENDEE,
    event_id,
    user_id
  }
}
