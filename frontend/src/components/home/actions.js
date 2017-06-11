import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { CATEGORYS } from './constants';
import { apiUrl } from '../../constants';


const reset = createAction(CATEGORYS, () => ({
  status: 'initial',
  categorys: [],
}));

const begin = createAction(CATEGORYS, () => ({
  status: 'pending',
  categorys: [],
}));

const success = createAction(CATEGORYS, categorys => ({
  categorys,
  status: 'success',
}));

const fail = createAction(CATEGORYS, error => ({
  status: 'error',
  error,
}));

const get = () =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}categorys/`,
      method: 'GET',
    })
      .then(categorys => {
        dispatch(success(categorys));
        return categorys;
      })
      .catch(error => {
        dispatch(fail(error.message));
      });
  };

const actions = {
  reset,
  begin,
  success,
  fail,
  getCategorys: get,
};

export default actions;
