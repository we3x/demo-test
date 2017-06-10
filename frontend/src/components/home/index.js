import React from 'react';
import Broadcast from '../broadcasts';
import FBroadcast from '../filterBroadcast';

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
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
            <div className="tabbable" id="tabs-697840">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#panel1" data-toggle="tab">All</a>
                </li>
                <li>
                  <a href="#panel2" data-toggle="tab">Normal</a>
                </li>
                <li>
                  <a href="#panel3" data-toggle="tab">Premium</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="panel1">
                  <Broadcast type="all" />
                </div>
                <div className="tab-pane" id="panel2">
                  <FBroadcast type="normal" />
                </div>
                <div className="tab-pane" id="panel3">
                  {/* <FBroadcast type="premium" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
