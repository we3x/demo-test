import React from 'react';
import { connect } from 'react-redux';
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
    date: React.PropTypes.string,
  },

  getInitialState: () => ({
    date: moment().format('YYYY-MM-DD'),
  }),

  handleSet() {
    this.props.setDate(this.state.date);
  },
  handleChangeTime(event) {
    this.setState({ date: event.target.value });
  },
  render() {
    return (
      <form>
        <label className="col-sm-2 control-label">
          Date and Time
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChangeTime}
          />
          <button onClick={this.handleSet} >
            Set Date
          </button>
        </div>
      </form>
    );
  },
});

export default connect(mapStateToProps, actions)(Calendar);
