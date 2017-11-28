import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entities from './entities_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  entities
});

export default rootReducer;
