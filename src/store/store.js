import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './rootReducer';
// import rootSaga from './sagas';

const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

const composeEnhancers = compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middleware)),
);

export {store};
