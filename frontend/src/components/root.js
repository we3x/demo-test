import React from 'react';
import Login from './login';
import Home from './home';
import { Router, hashHistory } from 'react-router';

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
    <Router history={hashHistory} routes={routes} />
  );
}
export default Root;
