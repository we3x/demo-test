import { createAction } from 'redux-actions';
import CALENDAR from './constants';


const reset = createAction(CALENDAR, () => ({
  status: 'initial',
}));

const change = createAction(CALENDAR, date => ({
  date,
  status: 'changed',
}));

const setDate = (date) =>
  (dispatch) => {
    dispatch(reset());
    dispatch(change(date));
  };


const actions = {
  setDate,
  reset,
};


export default actions;
