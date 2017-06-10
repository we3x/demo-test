import React from 'react';
function navBar() {
  return (
    <ul className="nav nav-tabs">
      <li className="dropdown pull-right">
        <a
          href="#"
          data-toggle="dropdown"
          className="dropdown-toggle"
        >
          Dropdown<strong className="caret"></strong>
        </a>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Another action</a>
          </li>
          <li>
            <a href="#">Something else here</a>
          </li>
          <li className="divider">
          </li>
          <li>
            <a href="#">Separated link</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default navBar;
