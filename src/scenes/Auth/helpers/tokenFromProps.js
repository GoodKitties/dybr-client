import queryString from 'query-string';

export default ({ location }) => {
  const { token } = queryString.parse(location.search);

  return token || null;
};
