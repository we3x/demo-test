import React from 'react';
import Broadcast from '../broadcasts';
import NavBar from '../nav-bar';

const Home = (props) => {
  const child = Boolean(!props.children) ?
                (
                  <div>
                  <NavBar />
                  <Broadcast />
                  </div>
                ) : (
                  props.children
                );
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {child}
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  categorys: React.PropTypes.array,
  children: React.PropTypes.node,
};

export default Home;
