import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as beesReducer, middleware as beesMiddleware } from 'redux-bees';
import authReducer from './services/auth/reducer.js';

import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const appReducer = combineReducers({
  auth: authReducer,
  bees: beesReducer,
});

const reducer = compose(mergePersistedState())(appReducer);

const storage = compose(
  filter('bees') // for now let's not cache requests
)(adapter(window.localStorage));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  persistState(storage, 'dybr-storage'),
  applyMiddleware(thunk, beesMiddleware())
);

const store = createStore(appReducer, {}, enhancer);

export default store;
