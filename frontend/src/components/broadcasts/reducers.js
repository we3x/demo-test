import { BROADCAST_LIST } from './constants';

export default function broadcastList(
  state = { status: 'initial', broadcasts: [] },
  action
) {
  switch (action.type) {
    case BROADCAST_LIST:
      return {
        broadcasts: action.payload.broadcasts,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
