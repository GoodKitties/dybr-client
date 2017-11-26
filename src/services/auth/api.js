import { buildApi, get, post } from 'redux-bees';
import { Serializer } from 'jsonapi-serializer';
import config, { deserialize as _deserialize } from '../config';

const endpoints = {
  login: { method: post, path: '/accounts/login' },
  logout: { method: get, path: '/accounts/logout' },
};

const schema = {
  attributes: ['email', 'password', 'passwordConfirmation', 'termsOfService', 'authToken'],
};
const serializer = new Serializer('users', schema);

export const serialize = serializer.serialize.bind(serializer);
export const api = buildApi(endpoints, config);
export const deserialize = _deserialize;

export default {
  api,
  deserialize,
  serialize,
};
