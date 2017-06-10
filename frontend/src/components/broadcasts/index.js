import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import Broadcast from '../broadcast';


const mapStateToProps = state => {
  const data = {
    broadcasts: state.broadcastList.broadcasts,
  };
  return data;
};

const BroadcastList = React.createClass({
  propTypes: {
    broadcasts: React.PropTypes.array,
    get: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      broadcasts: [],
    };
  },

  componentWillMount() {
    this.props.get();
  },
  render() {
    return (
      <div>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Date
                    </th>
                    <th>
                      Instructor
                    </th>
                    <th>
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.broadcasts.map(broadcast => (
                        <Broadcast
                          title={broadcast.title}
                          startTime={broadcast.startTime}
                          instructor={broadcast.instructor}
                          category={broadcast.category}
                          key={`all_${broadcast.title}`}
                        />
                      )
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="tab-pane" id="panel2">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Date
                    </th>
                    <th>
                      Instructor
                    </th>
                    <th>
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.broadcasts.map(broadcast => {
                      if (!broadcast.premium) {
                        return (
                          <Broadcast
                            title={broadcast.title}
                            startTime={broadcast.startTime}
                            instructor={broadcast.instructor}
                            category={broadcast.category}
                            key={`normal_${broadcast.title}`}
                          />
                        );
                      }
                      return null;
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className="tab-pane" id="panel3">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Date
                    </th>
                    <th>
                      Instructor
                    </th>
                    <th>
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.broadcasts.map(broadcast => {
                      if (broadcast.premium) {
                        return (
                          <Broadcast
                            title={broadcast.title}
                            startTime={broadcast.startTime}
                            instructor={broadcast.instructor}
                            category={broadcast.category}
                            key={`premium_${broadcast.title}`}
                          />
                        );
                      }
                      return null;
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(BroadcastList);
