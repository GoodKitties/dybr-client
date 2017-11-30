import { compose } from 'redux';
import persistState, { mergePersistedState } from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

export function withPersistedState(reducer) {
  return compose(mergePersistedState())(reducer);
}

export function filteredStorage(...savedKeys) {
  const storage = adapter(window.localStorage);
  const keysFilter = filter(...savedKeys);
  return compose(keysFilter)(storage);
}

export function enhancer(name, ...savedKeys) {
  const storage = filteredStorage(...savedKeys);
  return persistState(storage, name);
}
