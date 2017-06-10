import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import LOGIN from './constants';
import { apiUrl } from '../../constants';


const reset = createAction(LOGIN, () => ({
  status: 'initial',
}));

const begin = createAction(LOGIN, () => ({
  status: 'pending',
}));

const success = createAction(LOGIN, json => {
  // eslint-disable-next-line no-undef
  window.localStorage.liveeduToken = json.token;
  return {
    token: json.token,
    status: 'success',
  };
});

const fail = createAction(LOGIN, error => ({
  error: error.message,
  status: 'error',
}));

function getMe() {
  fetch({
    url: `${apiUrl}me/`,
    contentType: 'application/json',
    method: 'GET',
  })
    .then(username => {
      // eslint-disable-next-line no-undef
      console.log(username);
      window.localStorage.username = username[0].username;
      return username;
    })
    .catch(error => {
      console.log(error);
    });
}


const login = (username, password) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}auth/`,
      body: {
        username,
        password,
      },
      contentType: 'application/json',
      method: 'POST',
    })
      .then(token => {
        dispatch(success(token));
        getMe();
        return token;
      })
      .catch(error => {
        dispatch(fail(error));
      });
  };


const actions = {
  reset,
  begin,
  success,
  fail,
  login,
};

export default actions;
