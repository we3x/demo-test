import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

const mapStateToProps = (state) => ({
  status: state.putBroadcast.status,
});

const PutBroadcast = React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    type: React.PropTypes.string,
    title: React.PropTypes.string,
    startTime: React.PropTypes.string,
    category: React.PropTypes.number,
  },
  getInitialState() {
    return {
      startTime: '',
    };
  },
  handleChange() {
  },
  render() {
    return (
      <div>
        Hello World
        {/* <a
            id="modal-1"
            href="#modal-container-1"
            role="button"
            className="btn"
            data-toggle="modal"
            >
            {this.props.type} Broadcast
            </a>

            <div
            className="modal fade"
            id="modal-container-1"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
            >
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">

            <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
            >
            ×
            </button>
            <h4 className="modal-title" id="myModalLabel">
            {this.props.type} Broadcast
            </h4>
            </div>
            <div className="modal-body">
            <form className="form-horizontal" role="form">
            <div className="form-group">
            <label className="col-sm-2 control-label">
            Title
            </label>
            <div className="col-sm-10">
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            />
            </div>
            </div>
            <div className="form-group">
            <label className="col-sm-2 control-label">
            Start Time
            </label>
            <div className="col-sm-10">
            </div>
            </div>
            </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">
            Close
            </button>
            <button type="button" className="btn btn-primary">
            {this.props.type}
            </button>
            </div>
            </div>
            </div>
            </div> */}
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(PutBroadcast);
