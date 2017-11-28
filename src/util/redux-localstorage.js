import { compose } from 'redux';
import persistState, { mergePersistedState } from 'src/util/redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

export function withPersistedState(reducer) {
  return compose(mergePersistedState())(reducer);
}

export function filteredStorage(...ignoredKeys) {
  const storage = adapter(window.localStorage);
  const keysFilter = filter(...ignoredKeys);
  return compose(keysFilter)(storage);
}

export function enhancer(name, ...ignoredKeys) {
  const storage = filteredStorage(...ignoredKeys);
  return persistState(storage, name);
}
