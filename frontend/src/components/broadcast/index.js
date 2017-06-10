import React from 'react';

function Broadcast(props) {
  return (
    <tr>
      <td>
        1
      </td>
      <td>
        {props.title}
      </td>
      <td>
        {props.startTime}
      </td>
      <td>
        {props.instructor}
      </td>
      <td>
        {props.category}
      </td>
    </tr>
  );
}

Broadcast.propTypes = {
  title: React.PropTypes.string,
  startTime: React.PropTypes.string,
  instructor: React.PropTypes.string,
  category: React.PropTypes.number,
};

export default Broadcast;
