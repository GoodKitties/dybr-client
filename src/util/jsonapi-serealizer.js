import { Serializer, Deserializer } from 'jsonapi-serializer';

const deserializer = new Deserializer({ keyForAttribute: 'camelCase' });
export const deserialize = deserializer.deserialize.bind(deserializer);

export function serializeFor(resourceName, schema) {
  const serializer = new Serializer(resourceName, schema);
  return serializer.serialize.bind(serializer);
}
