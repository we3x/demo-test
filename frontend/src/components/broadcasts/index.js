import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import Broadcast from '../broadcast';
import moment from 'moment';


const mapStateToProps = state => {
  const data = {
    broadcasts: state.broadcastList.broadcasts,
    date: state.calendar.date,
    dateStatus: state.calendar.status,
  };
  return data;
};

const BroadcastList = React.createClass({
  propTypes: {
    broadcasts: React.PropTypes.array,
    get: React.PropTypes.func,
    date: React.PropTypes.object,
    children: React.PropTypes.node,
    dateStatus: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      broadcasts: [],
    };
  },

  componentWillMount() {
    this.props.get();
  },
  shouldComponentUpdate(nextProps) {
    if (nextProps.dateStatus === 'changed') {
      return false;
    }
    return true;
  },
  isEqualDate(sdate1, sdate2) {
    const date1 = moment(sdate1);
    const date2 = moment(sdate2);
    return Boolean(
      date1.getDate === date2.getDate &&
      date1.getFullYear === date2.getFullYear &&
      date1.getMonth === date2.getMonth
    );
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
                    this.props.broadcasts.map(broadcast => {
                      if (this.isEqualDate(broadcast.startTime, this.props.date)) {
                        return (
                          <Broadcast
                            title={broadcast.title}
                            startTime={broadcast.startTime}
                            instructor={broadcast.instructor}
                            category={broadcast.category}
                            key={`all_${broadcast.title}`}
                          />
                        );
                      }
                      return null;
                    }
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
                        if (this.isEqualDate(broadcast.startTime, this.props.date)) {
                          return (
                            <Broadcast
                              title={broadcast.title}
                              startTime={broadcast.startTime}
                              instructor={broadcast.instructor}
                              category={broadcast.category}
                              key={`all_${broadcast.title}`}
                            />
                          );
                        }
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
                        if (this.isEqualDate(broadcast.startTime, this.props.date)) {
                          return (
                            <Broadcast
                              title={broadcast.title}
                              startTime={broadcast.startTime}
                              instructor={broadcast.instructor}
                              category={broadcast.category}
                              key={`all_${broadcast.title}`}
                            />
                          );
                        }
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
