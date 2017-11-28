import { reducer as bees } from 'redux-bees';
import { combineReducers } from 'redux';

import { withPersistedState } from '../../util/redux-localstorage';

import auth from './auth';

const reducer = combineReducers({
  auth,
  bees,
});

export default withPersistedState(reducer);
