import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import LOGIN from './constants';
import { apiUrl } from '../../constants';
import categoryActions from '../home/actions';

const reset = createAction(LOGIN, () => ({
  status: 'initial',
}));

const begin = createAction(LOGIN, () => ({
  status: 'pending',
}));

const success = createAction(LOGIN, json => ({
  token: json.token,
  status: 'success',
}));

const fail = createAction(LOGIN, error => ({
  error: error.message,
  status: 'error',
}));

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
        window.localStorage.liveeduToken = token.token;
        fetch({
          url: `${apiUrl}me/`,
          contentType: 'application/json',
          method: 'GET',
        })
          .then((name) => {
            window.localStorage.username = name[0].username;
            dispatch(categoryActions.getCategorys());
            return name[0].username;
          }).then(() => (
              dispatch(success(token))
          ))
          .catch(error => {
            console.log(error);
          });
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
