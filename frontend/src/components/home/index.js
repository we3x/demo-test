import React from 'react';
import Broadcast from '../broadcasts';
import NavBar from '../nav-bar';
import actions from './actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  categorys: state.categorys.categorys,
});

const Home = React.createClass({
  propTypes: {
    categorys: React.PropTypes.array,
    getCategorys: React.PropTypes.func,
    children: React.PropTypes.node,

  },
  componentWillMount() {
    this.props.getCategorys();
  },
  render() {
    const child = Boolean(!this.props.children) ?
                  (
                   <div>
                    <NavBar />
                    <Broadcast />
                   </div>
                  ) : (
                    this.props.children
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
  },
});

export default connect(mapStateToProps, actions)(Home);
