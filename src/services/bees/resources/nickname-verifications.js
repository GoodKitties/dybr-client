import { buildApi, get, post, patch, destroy } from 'redux-bees';
import config from '../config';
import { serializeFor } from '../../../util/jsonapi-serealizer';
import { schema as user } from './users';

const endpoints = {
  list: { method: get, path: '/nickname-verifications' },
  show: { method: get, path: '/nickname-verifications/:id' },
  create: { method: post, path: '/nickname-verifications' },
  update: { method: patch, path: '/nickname-verifications/:id' },
  destroy: { method: destroy, path: '/nickname-verifications/:id' },
};

export const schema = {
  user,
  attributes: ['nickname', 'state', 'createdAt', 'updatedAt', 'secretCodeConfirmation'],
};

export const serialize = serializeFor('nickname-verifications', schema);
export const api = buildApi(endpoints, config);

export default api;
