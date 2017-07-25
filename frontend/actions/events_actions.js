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

export const removeEvent = id => dispatch => (
  EventAPIUTil.deleteEvent(id)
    .then(id => dispatch(deleteEvent(id)))
)

export const attendEvent = id => dispatch => (
  EventAPIUTil.attendEvent(id)
    .then(id => dispatch(addAttendee(id)))
)

export const leaveEvent = id => dispatch => (
  EventAPIUTil.leaveEvent(id)
    .then(id => dispatch(removeAttendee(id)))
)

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveNewEvent = event => ({
  type: RECEIVE_NEW_EVENT,
  event
});

export const receiveUpdatedEvent = event => ({
  type: RECEIVE_UPDATED_EVENT,
  event
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  id
});

export const addAttendee = (eventId) => ({
  type: ADD_ATTENDEE,
  eventId
})

export const removeAttendee = (eventId) => ({
  type: REMOVE_ATTENDEE,
  eventId
})
