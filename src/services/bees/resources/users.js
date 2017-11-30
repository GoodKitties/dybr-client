import { buildApi, post } from 'redux-bees';
import { serializeFor } from 'util/jsonapi-serealizer';
import config from '../config';

const endpoints = {
  create: { method: post, path: '/users' },
};

export const schema = {
  attributes: ['email', 'password', 'passwordConfirmation', 'termsOfService', 'authToken'],
};

export const serialize = serializeFor('users', schema);
export const api = buildApi(endpoints, config);

export default api;
