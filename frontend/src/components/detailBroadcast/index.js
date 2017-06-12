import React from 'react';
import actionsGet from './actions/get';
import actionsPatch from './actions/patch';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const mapStateToProps = (state) => ({
  status: state.patchBroadcast.status,
  categorys: state.categorys.categorys,
  broadcast: state.getBroadcast.broadcast,
});

const PutBroadcast = React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    categorys: React.PropTypes.array,
    broadcast: React.PropTypes.object,
    post: React.PropTypes.func,
    get: React.PropTypes.func,
    params: React.PropTypes.object,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      startTime: moment(),
      title: '',
      category: 0,
    };
  },
  componentWillMount() {
    this.props.get(this.props.params.idBroadcast);
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'success') {
      this.context.router.push('/broadcasts/');
    }
  },
  handleSelect(event) {
    this.setState({ category: event.target.value });
  },
  handleSetTime(date) {
    this.setState({ startTime: date });
  },
  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  },
  handlePost() {
    this.props.post({
      startTime: this.state.startTime,
      title: this.state.title,
      category: this.state.category,
    });
  },
  render() {
    console.log(this.props);
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
                defaultValue={this.props.broadcast.title}
                className="form-control"
                type="text"
                onChange={this.handleChangeTitle}
              />

            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">
              Start Time
            </label>
            <div className="col-sm-10">
              <DatePicker
                selected={this.props.broadcast.startTime}
                onChange={this.handleSetTime}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">
              Category
            </label>
            <div className="col-sm-10">
              <select onChange={this.handleSelect} defaultValue="-1">
                <option disabled value="-1" >
                  Chose One
                </option>
                {this.props.categorys.map(category => (
                  <option value={category.id} key={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <button onClick={this.handlePost}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  },
});

const routes = {
  path: ':idBroadcast/',
  indexRoute: {
    component: connect(mapStateToProps, { ...actionsGet, ...actionsPatch })(PutBroadcast),
  },

};

export default routes;
