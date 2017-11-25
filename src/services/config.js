import store from '../store';
import { Deserializer } from 'jsonapi-serializer';
import { camelCase } from 'lodash';

const deserializer = new Deserializer({ keyForAttribute: 'camelCase' });
export const deserialize = deserializer.deserialize.bind(deserializer);

export default {
  baseUrl: process.env.REACT_APP_API_ENDPOINT,
  configureHeaders(headers) {
    const { auth } = store.getState();
    const { loggedIn, token } = auth || {};

    if (!loggedIn) {
      return headers;
    }

    return {
      ...headers,
      Authorization: token,
    };
  },
  afterReject({ status, headers, body }) {
    /*
        if (status === 401) {
        // ie. redirect to login page
        document.location = '/login';
        }
      */

    const { errors } = body;

    errors.forEach(error => {
      let { pointer } = error.source || {};
      if (!pointer) return;

      const [none, data, attributes, fieldName] = pointer.split('/');
      pointer = [none, data, attributes, camelCase(fieldName)].join('/');

      error.source = { pointer };
    });

    return Promise.reject({ status, headers, body });
  },
};
