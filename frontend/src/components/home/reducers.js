import { CATEGORYS } from './constants';

export default function categorys(
  state = { status: 'initial', categorys: [] },
  action
) {
  switch (action.type) {
    case CATEGORYS:
      return {
        categorys: action.payload.categorys,
        status: action.payload.status,
      };
    default:
      return state;
  }
}
