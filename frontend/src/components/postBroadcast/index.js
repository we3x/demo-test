import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const mapStateToProps = (state) => ({
  status: state.postBroadcast.status,
  categorys: state.categorys.categorys,
});

const PutBroadcast = React.createClass({
  propTypes: {
    status: React.PropTypes.string,
    categorys: React.PropTypes.array,
    post: React.PropTypes.func,
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
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">
              Title
            </label>
            <div className="col-sm-10">
              <input
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
                selected={this.state.startTime}
                onChange={this.handleSetTime}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">
              Category
            </label>
            <div className="col-sm-10">
              <select onChange={this.handleSelect}>
                <option disabled selected="-1" >
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
  path: 'new',
  onEnter: () => { console.log('jebemu majku ja'); },
  indexRoute: {
    component: connect(mapStateToProps, actions)(PutBroadcast),
  },

};

export default routes;
