import {
  RECEIVE_CURRENT_USER, ADD_ATTENDANCE,
  REMOVE_ATTENDANCE, ADD_HOSTING,
  DELETE_HOSTING, RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case ADD_ATTENDANCE:
      const addedState = merge({}, state);
      action.event.attendees.push(addedState.currentUser.id);
      addedState['currentUser']['attending_events'][action.event_id] = action.event;
      return addedState;
    case REMOVE_ATTENDANCE:
        const removedState = merge({}, state);
        delete removedState['currentUser']['attending_events'][action.event_id];
        return removedState;
    case ADD_HOSTING:
      const newHostedState = merge({}, state);
      const event = action.event[action.event_id];
      newHostedState['currentUser']['hosted_events'][action.event_id] = event;
      return newHostedState;
    case DELETE_HOSTING:
      const removedHostedState = merge({}, state);
      delete removedHostedState['currentUser']['hosted_events'][action.event_id];
      return removedHostedState;
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
