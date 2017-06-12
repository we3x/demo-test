import { createAction } from 'redux-actions';
import { fetch } from '../../../utils';
import { PATCH_BROADCAST } from '../constants';
import { apiUrl } from '../../../constants';


const reset = createAction(PATCH_BROADCAST, () => ({
  status: 'initial',
}));

const begin = createAction(PATCH_BROADCAST, () => ({
  status: 'pending',
}));

const success = createAction(PATCH_BROADCAST, broadcast => ({
  broadcast,
  status: 'success',
}));

const fail = createAction(PATCH_BROADCAST, error => ({
  status: 'error',
  error,
}));


const patch = (broadcast, id) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}allBroadcasts/${id}`,
      method: 'PATCH',
      body: {
        ...broadcast,
      },
    })
      .then(json => {
        dispatch(success(json));
        return json;
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
  patch,
};


export default actions;
