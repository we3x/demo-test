import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import { BROADCAST_LIST } from './constants';
import { apiUrl } from '../../constants';


const reset = createAction(BROADCAST_LIST, () => ({
  status: 'initial',
  broadcasts: [],
}));

const begin = createAction(BROADCAST_LIST, () => ({
  status: 'pending',
  broadcasts: [],
}));

const success = createAction(BROADCAST_LIST, broadcasts => ({
  broadcasts,
  status: 'success',
}));

const fail = createAction(BROADCAST_LIST, error => ({
  status: 'error',
  error,
}));

const get = () =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}allBroadcasts/`,
      method: 'GET',
    })
      .then(broadcasts => {
        dispatch(success(broadcasts));
        return broadcasts;
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
  get,
};

export default actions;
