import React from 'react';
import Login from './login';
import Home from './home';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from '../store';
import postBroadcast from './postBroadcast';
import main from './main';

const routes = {
  component: main,
  childRoutes: [
    {
      path: 'broadcasts',
      component: Home,
      childRoutes: [
        postBroadcast,
      ],
    },
    {
      path: 'login',
      component: Login,
    },
  ],
};

function Root() {
  return (
    <Provider store={store} >
      <Router history={hashHistory} routes={routes} />
    </Provider>
  );
}
export default Root;
