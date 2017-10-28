import { combineReducers } from 'redux';

import session from './session_reducer';
import cities from './cities_reducer';
import city from './city_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  session,
  cities,
  errors,
  city,
});


export default rootReducer;
