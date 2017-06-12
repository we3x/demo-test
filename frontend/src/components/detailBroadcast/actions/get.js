import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { GET_BROADCAST } from '../constants';
import { apiUrl } from '../../../constants';


const reset = createAction(GET_BROADCAST, () => ({
  status: 'initial',
  broadcast: {},
}));

const begin = createAction(GET_BROADCAST, () => ({
  status: 'pending',
  broadcast: {},
}));

const success = createAction(GET_BROADCAST, broadcast => ({
  broadcast,
  status: 'success',
}));

const fail = createAction(GET_BROADCAST, error => ({
  status: 'error',
  error,
}));

const get = (id) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}allBroadcasts/${id}`,
      method: 'GET',
    })
      .then(broadcast => {
        dispatch(success(broadcast));
        return broadcast;
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
