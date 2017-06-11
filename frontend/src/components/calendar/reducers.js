import CALENDAR from './constants';

export default function calendar(state = { status: 'initial' }, action) {
  switch (action.type) {
    case CALENDAR: {
      return {
        status: action.payload.status,
        date: action.payload.date,
      };
    }
    default:
      return state;
  }
}
