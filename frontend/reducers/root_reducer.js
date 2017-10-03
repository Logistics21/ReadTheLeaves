import { combineReducers } from 'redux';

import session from './session_reducer';
import cities from './cities_reducer';
import errors from './errors_reducer';
// import user from './users_reducer';

const rootReducer = combineReducers({
  session,
  cities,
  errors,
  // user
});


export default rootReducer;
