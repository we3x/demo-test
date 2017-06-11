import { combineReducers } from 'redux';
import login from './components/login/reducers';
import broadcastList from './components/broadcasts/reducers';
import postBroadcast from './components/postBroadcast/reducers';
import calendar from './components/calendar/reducers';
import categorys from './components/home/reducers';

const reducers = {
  login,
  broadcastList,
  postBroadcast,
  calendar,
  categorys,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
