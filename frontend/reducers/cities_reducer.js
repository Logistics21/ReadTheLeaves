import { RECEIVE_CITIES, RECEIVE_CITY } from '../actions/cities_actions';
import { merge } from 'lodash';

const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITIES:
      let newState = merge({}, state, action.cities)
      return newState;
    case RECEIVE_CITY:
      const city = { [action.city.id]: action.city };
      let updatedState = merge({}, state, city);
      return updatedState;
    default:
      return state;
  }
};

export default CitiesReducer;
