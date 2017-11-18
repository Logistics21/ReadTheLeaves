import {
  ADD_ATTENDANCE,
  REMOVE_ATTENDANCE, ADD_HOSTING,
  DELETE_HOSTING, RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';


const _defaultState = {
  hosted_events: {},
  attending_events: {}
};

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_ATTENDANCE:
      const addedState = merge({}, state);
      addedState['attending_events'][action.event_id] = action.event;
      return addedState;
    case REMOVE_ATTENDANCE:
        const removedState = merge({}, state);
        delete removedState['attending_events'][action.event_id];
        return removedState;
    case ADD_HOSTING:
      const newHostedState = merge({}, state);
      newHostedState['hosted_events'][action.event_id] = action.event;
      return newHostedState;
    case DELETE_HOSTING:
      const removedHostedState = merge({}, state);
      delete removedHostedState['hosted_events'][action.event_id];
      return removedHostedState;
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
