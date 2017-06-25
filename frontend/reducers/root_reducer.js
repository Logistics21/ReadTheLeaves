import { combineReducers } from 'redux';

import session from './session_reducer';
import cities from './cities_reducer';

const rootReducer = combineReducers({
  session,
  cities,
});


export default rootReducer;
