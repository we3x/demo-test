import { combineReducers } from 'redux';
import login from './components/login/reducers';
import broadcastList from './components/broadcasts/reducers';

const reducers = {
  login,
  broadcastList,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
