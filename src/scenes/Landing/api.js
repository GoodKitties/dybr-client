import { buildApi, get, post, patch, destroy } from 'redux-bees';
import { Serializer } from 'jsonapi-serializer';
import config, { deserialize as _deserialize } from 'services/config';

const endpoints = {
  getProfiles: { method: get, path: '/profiles' },
};

const schema = {
  attributes: ['name'],
};
const serializer = new Serializer('profiles', schema);

export const serialize = serializer.serialize.bind(serializer);

export const api = buildApi(endpoints, config);
export const deserialize = _deserialize;

export default {
  api,
  deserialize,
  serialize,
};
