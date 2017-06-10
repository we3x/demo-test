import isomorphicFetch from 'isomorphic-fetch';

export function getAuthToken() {
  // eslint-disable-next-line no-undef
  return window.localStorage.liveeduToken;
}


export function isLoggedIn() {
  return Boolean(getAuthToken());
}
export function logOut() {
  // eslint-disable-next-line no-undef
  window.localStorage.removeItem('liveeduToken');
}
export function fetch(args) {
  const {
    url,
    body,
    method,
  } = args;
  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `JWT ${getAuthToken()}`,
    },
  };
  if (!isLoggedIn()) {
    delete newargs.headers.Authorization;
  }
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    newargs.headers['Content-Type'] = 'application/json';
  }
  return isomorphicFetch(url, newargs)
    .then(response => {
      const json = response.json();
      if (response.status === 401) {
        logOut();
      }
      if (response.status >= 400) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
      return json;
    });
}
