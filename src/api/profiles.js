import { buildApi, post, get } from 'redux-bees';
import { serializeFor } from 'util/jsonapi-serealizer';
import config from 'services/bees/config';

const endpoints = {
  list: { method: get, path: '/profiles' },
  create: { method: post, path: '/profiles' },
};

export const schema = {
  attributes: ['name'],
};

export const serialize = serializeFor('profiles', schema);
export const api = buildApi(endpoints, config);

export default api;
