import { buildApi, get, post } from 'redux-bees';
import config from '../config';

const endpoints = {
  login: { method: post, path: '/accounts/login' },
  logout: { method: get, path: '/accounts/logout' },
};

export const api = buildApi(endpoints, config);

export default {
  api,
};
