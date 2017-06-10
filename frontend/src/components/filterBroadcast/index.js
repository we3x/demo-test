import React from 'react';
import Broadcast from '../broadcast';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const data = {
    broadcasts: state.broadcastList.broadcasts,
  };
  return data;
};


function filterBroadcast(props) {
  let filtered = [];
  if (props.type === 'premium') {
    filtered = props.broadcasts.map(broadcast => {
      if (broadcast.premium === true) {
        return broadcast;
      }
      return null;
    });
  }
  if (props.type !== 'premium') {
    filtered = props.broadcasts.map(broadcast => {
      if (broadcast.premium === false) {
        return broadcast;
      }
      return null;
    });
  }
  console.log(filtered);
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
            {filtered.map(broadcast => (
              <Broadcast
                title={broadcast.title}
                startTime={broadcast.startTime}
                instructor={broadcast.instructor}
                category={broadcast.category}
                key={() => {const date = new Date(); return (broadcast.title + date.now()); }}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
}

filterBroadcast.propTypes = {
  broadcasts: React.PropTypes.array,
  type: React.PropTypes.string,
};

export default connect(mapStateToProps)(filterBroadcast);
