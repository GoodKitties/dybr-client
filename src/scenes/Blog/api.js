import { buildApi, get, post, patch, destroy } from 'redux-bees';
import config, { deserialize as _deserialize } from './config';
import _serialize from './serialize';

const endpoints = {
  getEntries: { method: get, path: '/entries' },
  getEntry: { method: get, path: '/entries/:id' },
  createEntry: { method: post, path: '/entries' },
  updateEntry: { method: patch, path: '/entries/:id' },
  destroyEntry: { method: destroy, path: '/entries/:id' },
  getComments: { method: get, path: '/entries/:entryId/comments' },
  createComment: { method: post, path: '/entries/:entryId/comments' },
};

export const api = buildApi(endpoints, config);
export const deserialize = _deserialize;
export const serialize = _serialize;

export default {
  api,
  deserialize,
  serialize,
};
