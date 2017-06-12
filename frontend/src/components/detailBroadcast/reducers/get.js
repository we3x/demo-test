import GET_BROADCAST from '../constants';

export default function getBroadcast(state = { status: 'initial', broadcast: {} }, action) {
  switch (action.type) {
    case GET_BROADCAST: {
      return {
        status: action.payload.status,
        broadcast: action.payload.broadcast,
      };
    }
    default:
      return state;
  }
}
