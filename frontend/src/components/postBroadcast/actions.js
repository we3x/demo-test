import { createAction } from 'redux-actions';
import { fetch } from '../../utils';
import POST_BROADCAST from './constants';
import { apiUrl } from '../../constants';


const reset = createAction(POST_BROADCAST, () => ({
  status: 'initial',
}));

const begin = createAction(POST_BROADCAST, () => ({
  status: 'pending',
}));

const success = createAction(POST_BROADCAST, broadcast => ({
  broadcast,
  status: 'success',
}));

const fail = createAction(POST_BROADCAST, error => ({
  status: 'error',
  error,
}));


const post = (broadcast) =>
  (dispatch) => {
    dispatch(begin());
    fetch({
      url: `${apiUrl}allBroadcasts/`,
      method: 'POST',
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
  post,
};


export default actions;
