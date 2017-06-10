import React from 'react';
import Login from './login';
import Home from './home';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from '../store';

const routes = [
  {
    component: Home,
    path: '/home/',
  },
  {
    path: '/login/',
    component: Login,
  },
];


function Root() {
  return (
    <Provider store={store} >
      <Router history={hashHistory} routes={routes} />
    </Provider>
  );
}
export default Root;
