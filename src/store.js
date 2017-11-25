import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import servicesReducer from './services/reducer';
import scenesReducer from './scenes/reducer';
import authReducer from './services/auth/reducer.js';
import { reducer as beesReducer, middleware as beesMiddleware } from 'redux-bees';

const appReducer = combineReducers({
  auth: authReducer,
  //services: servicesReducer,
  //data: scenesReducer,
  bees: beesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, beesMiddleware()));

const store = createStore(appReducer, {}, enhancer);

export default store;
