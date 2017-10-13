import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_NEW_EVENT,
  RECEIVE_UPDATED_EVENT,
  DELETE_EVENT
} from '../actions/events_actions';
import merge from 'lodash/merge';

const defaultState = {
  events: {}
}

const CityReducer = (state = defaultState, action) => {
  debugger
  Object.freeze(state);
  let newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_NEW_EVENT:
      newState = merge({}, state, {
        [`${action.event.id}`]: { events: action.event } });
      return newState;
    case RECEIVE_UPDATED_EVENT:
      newState[`${action.event.id}`]['events'][action.event.id] = event;
      return newState;
    case DELETE_EVENT:
      delete newState[`${action.event.id}`]['events'][action.event.id]
      return newState;
    default:
      return state;
  }
}

export default CityReducer;
