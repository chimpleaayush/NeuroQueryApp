import {combineReducers} from 'redux';
import AppReducer from '../redux/reducer';

const appReducer = combineReducers({
  AppReducer,
});

const rootReducer = (state, action) => {
  // we can do clean up here for the cases when closing the app or changing the user so as to
  // avoid the problem of cached data being leaked to the other users or
  // previous session pop ups being visible in current sessions
  return appReducer(state, action);
};

export default rootReducer;
