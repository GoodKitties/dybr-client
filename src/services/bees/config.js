import { camelCase } from 'lodash';

import store from '../store';
import { getAccessToken } from '../auth/helpers';

export default {
  baseUrl: process.env.REACT_APP_API_ENDPOINT,
  configureHeaders(headers) {
    const token = getAccessToken(store.getState());

    if (!token) {
      return headers;
    }

    return {
      ...headers,
      Authorization: token,
    };
  },
  afterReject({ status, headers, body }) {
    if (!status) {
      return Promise.reject({ status: 'Failed to fetch' });
    }

    const { errors } = body;

    if (errors) {
      errors.forEach((error) => {
        let { pointer } = error.source || {};
        if (!pointer) return;

        const [none, data, attributes, fieldName] = pointer.split('/');
        pointer = [none, data, attributes, camelCase(fieldName)].join('/');

        error.source = { pointer };
      });
    }

    return Promise.reject({ status, headers, body });
  },
};
