import { RECEIVE_CITIES } from '../actions/cities_actions';
import merge from 'lodash/merge';

const CitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITIES:
      let newState = merge({}, state, action.cities);
      return newState;
    default:
      return state;
  }
};

export default CitiesReducer;
