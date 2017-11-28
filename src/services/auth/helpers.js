export function isLoggedIn({ auth }) {
  return auth.loggedIn;
}

export function getUserId({ auth }) {
  if (!isLoggedIn({ auth })) return null;
  return auth.userId;
}

export function getAccessToken({ auth }) {
  if (!isLoggedIn({ auth })) return null;
  return auth.jwt;
}
