import { combineReducers } from 'redux';

import { withPersistedState } from '../util/redux-localstorage';

import auth from './auth/reducer';
import bees from './bees/reducer';

const reducer = combineReducers({
  auth,
  bees,
});

export default withPersistedState(reducer);
