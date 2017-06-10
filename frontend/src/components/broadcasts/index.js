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
    type: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      broadcasts: [],
    };
  },

  componentWillMount() {
    this.props.get(this.props.type);
  },
  render() {
    return (
      <div>
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
                    key={broadcast.title}
                  />
                )
              )
            }
          </tbody>
        </table>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(BroadcastList);
