import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { withPersistedState } from '../util/redux-localstorage';

import auth from './auth/reducer';
import bees from './bees/reducer';

const reducer = combineReducers({
  auth,
  bees,
  form,
});

export default withPersistedState(reducer);
