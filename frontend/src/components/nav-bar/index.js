import React from 'react';
import { isLoggedIn } from '../../utils';
import { Link } from 'react-router';
import { logOut } from '../../utils';
import Calendar from '../calendar/';


const navBar = React.createClass({
  render() {
    let navs;
    if (isLoggedIn()) {
      navs = (
        <div>
        <ul className="nav nav-tabs">
          <li>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-tabs">
                    <li>
                      <Calendar />
                    </li>
                    <li>
                      <Link to="/broadcasts/new/">
                        New Broadcast
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown pull-right">
            <a
              href="#/home/"
              data-toggle="dropdown"
              className="dropdown-toggle"
            >
              {window.localStorage.username}<strong className="caret"></strong>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#/broadcasts/" onClick={logOut}>LogOut</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      );
    }
    if (!isLoggedIn()) {
      const login = '/login/';
      navs = (
        <ul className="nav nav-tabs">
          <li>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-tabs">
                    <li>
                      <Calendar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="pull-right">
            <Link to={login} >
              LogIn
            </Link>
          </li>
        </ul>
      );
    }

    return navs;
  },
});


export default navBar;
