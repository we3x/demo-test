import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = applyMiddleware(thunk);

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();
export default store;
