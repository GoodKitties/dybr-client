import { applyMiddleware, compose, createStore } from 'redux';
import { middleware as beesMiddleware } from 'redux-bees';
import ReduxThunk from 'redux-thunk';

import { enhancer as persistState } from '../util/redux-localstorage';

import reducer from './reducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  persistState('dybr', 'bees'),
  applyMiddleware(
    ReduxThunk,
    beesMiddleware(),
  ),
);

export default createStore(reducer, {}, enhancer);
