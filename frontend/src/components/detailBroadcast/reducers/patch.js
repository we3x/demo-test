import PATCH_BROADCAST from '../constants';

export default function patchBroadcast(state = { status: 'initial' }, action) {
  switch (action.type) {
    case PATCH_BROADCAST: {
      return {
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
}
