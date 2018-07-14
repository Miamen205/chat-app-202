import { combineReducers } from 'redux';
import { loginReducer } from './userAuthReducer';
import { fetchUserReducer } from './fetchUserReducer';
import { fetchCalendar } from './fetchCalendar';
// import { OneRep } from './OneRepReducer';

const rootReducer = combineReducers({
  auth: loginReducer,
  user: fetchUserReducer,
  fetchCalendar
  // OneRep
});

export default rootReducer;
