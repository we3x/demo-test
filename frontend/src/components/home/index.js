import React from 'react';
import Broadcast from '../broadcasts';
import NavBar from '../nav-bar';

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <NavBar />
            <Broadcast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
