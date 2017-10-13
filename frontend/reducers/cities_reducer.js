import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/cities_actions';
import { RECEIVE_ALL_EVENTS, RECEIVE_NEW_EVENT, RECEIVE_UPDATED_EVENT,
         DELETE_EVENT, ADD_ATTENDEE, REMOVE_ATTENDEE
} from '../actions/events_actions';
import merge from 'lodash/merge';

const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let city;

  switch (action.type) {
    case RECEIVE_CITIES:
      newState = merge({}, state, action.cities)
      return newState;
    case RECEIVE_CITY:
      city = { [action.city.id]: action.city };
      newState = merge({}, state, city);
      return newState;
    case RECEIVE_NEW_EVENT:
      city = { [action.event.city_id]: { events: action.event } };
      newState = merge({}, state, city);
      return newState;
    case RECEIVE_UPDATED_EVENT:
      newState[action.event.id]['events'][action.event.id] = event;
      return newState;
    case DELETE_EVENT:
      delete newState[action.event.id]['events'][action.event.id]
      return newState;
    case ADD_ATTENDEE:
      delete newState[action.event.city_id]['events'][action.event.id]["attendees"][action.userId] = action.user
      return newState;
    case REMOVE_ATTENDEE:
      delete newState[action.event.city_id]['events'][action.event.id]["attendees"][action.userId]
      return newState;
    default:
      return state;
  }
};

export default CitiesReducer;
