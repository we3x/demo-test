import POST_BROADCAST from './constants';

export default function postBroadcast(state = { status: 'initial' }, action) {
  switch (action.type) {
    case POST_BROADCAST: {
      return {
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
}
