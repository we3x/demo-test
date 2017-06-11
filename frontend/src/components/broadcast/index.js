import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  categorys: state.categorys.categorys,
});
function Broadcast(props) {
  const category = props.categorys.filter(cat => (cat.id === props.category))[0];
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
        {category.name}
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
