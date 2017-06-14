import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const data = {
    categorys: state.categorys.categorys,
  };
  return data;
};

function Broadcast(props) {
  let category = '';
  if (Boolean(props.categorys[0])) {
    category = props.categorys.filter(cat => (cat.id === props.category))[0].name;
  }
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
        {category}
      </td>
    </tr>
  );
}

Broadcast.propTypes = {
  title: React.PropTypes.string,
  startTime: React.PropTypes.string,
  instructor: React.PropTypes.string,
  category: React.PropTypes.number,
  categorys: React.PropTypes.array,
};

export default connect(mapStateToProps)(Broadcast);
