import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/cities_actions';
import { merge } from 'lodash';

// const _defaultState = {
//
// }

const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITIES:
      return merge({}, state, action.cities);
      case RECEIVE_CITY:
      const city = { [action.city.id]: action.city };
      return merge({}, state, city);
    default:
      return state;
  }
};

export default CitiesReducer;
