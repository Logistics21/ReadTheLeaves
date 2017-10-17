import * as EventAPIUTil from '../util/event_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const RECEIVE_UPDATED_EVENT = "RECEIVE_UPDATED_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE";

export const createEvent = event => dispatch => (
  EventAPIUTil.createEvent(event)
    .then(event => dispatch(receiveNewEvent(event)))
)

export const updateEvent = event => dispatch => (
  EventAPIUTil.updateEvent(event)
    .then(event => dispatch(receiveUpdatedEvent(event)))
)

export const removeEvent = (event_id) => (dispatch) => (
  EventAPIUTil.deleteEvent(event_id)
    .then(event_id => dispatch(deleteEvent(event_id)))
)

export const attendEvent = (event_id) => (dispatch) => {
  debugger
  return EventAPIUTil.attendEvent(event_id)
    .then(event_id, user_id => {
      dispatch(addAttendee(event_id, user_id))
    })
}

export const leaveEvent = (event_id) => (dispatch) => (
  EventAPIUTil.leaveEvent(event_id)
    .then(event_id, user_id => dispatch(removeAttendee(event_id, user_id)))
)

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

export const addAttendee = (event_id, user_id) => {
  debugger
  return {
    type: ADD_ATTENDEE,
    event_id,
    user_id
  }
}

export const removeAttendee = (event_id, user_id) => ({
  type: REMOVE_ATTENDEE,
  event_id,
  user_id
})
