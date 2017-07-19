import * as EventAPIUTil from '../util/event_util';

export const RECEIVE_NEW_EVENT = "RECEIVE_NEW_EVENT";
export const RECEIVE_UPDATED_EVENT = "RECEIVE_UPDATED_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const ADD_ATTENDEE = "ADD_ATTENDEE";
export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE";

export const createEvent = (event) => (dispatch) => {
  return EventAPIUTil.createEvent(event)
      .then(event => {
        dispatch()

                     })
}


export const addAttendee = ()
