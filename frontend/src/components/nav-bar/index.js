import React from 'react';
import { isLoggedIn } from '../../utils';
import { Link } from 'react-router';
import { logOut } from '../../utils';

function navBar() {
  let navs;
  if (isLoggedIn()) {
    navs = (
      <ul className="nav nav-tabs">
				<li>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <a
                  id="modal-1"
                  href="#modal-container-1"
                  role="button"
                  className="btn"
                  data-toggle="modal"
                >
                  New Broadcast
                </a>

                <div
                  className="modal fade"
                  id="modal-container-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">

                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          ×
                        </button>
                        <h4 className="modal-title" id="myModalLabel">
                          Modal title
                        </h4>
                      </div>
                      <div className="modal-body">
                        ...
                      </div>
                      <div className="modal-footer">

                        <button type="button" className="btn btn-default" data-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>

                  </div>

                </div>

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
              <a href="#/home/" onClick={logOut}>LogOut</a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
  if (!isLoggedIn()) {
    const login = '/login/';
    navs = (
      <ul className="nav nav-tabs">
        <li className="pull-right">
          <Link to={login} >
            LogIn
          </Link>
        </li>
      </ul>
    );
  }

  return navs;
}


export default navBar;
