import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import actions from './actions';

import 'react-datepicker/dist/react-datepicker.css';

function mapStateToProps(state) {
  return {
    date: state.calendar.date,
  };
}

const Calendar = React.createClass({
  propTypes: {
    setDate: React.PropTypes.func,
    date: React.PropTypes.object,
  },

  getInitialState: () => ({
    date: moment(),
  }),

  handleChange(date) {
    this.setState({ date });
    this.props.setDate(date);
  },
  render() {
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
      />
    );
  },
});

export default connect(mapStateToProps, actions)(Calendar);
