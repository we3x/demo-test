import CALENDAR from './constants';
import moment from 'moment';

export default function calendar(
  state = {
    status: 'initial',
    date: moment().format('YYYY-MM-DD'),
  },
  action
) {
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
