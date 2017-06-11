import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import { isLoggedIn } from '../../utils';

function mapStateToProps(state) {
  return {
    token: state.login.token,
    status: state.login.status,
    error: state.login.error,
  };
}

const Component = React.createClass({
  propTypes: {
    reset: React.PropTypes.func.isRequired,
    login: React.PropTypes.func.isRequired,
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      email: '',
      password: '',
    };
  },

  componentWillMount() {
    if (isLoggedIn()) {
      this.context.router.push('/broadcasts/');
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'error') {
      this.setState({ status: 'error', message: nextProps.error });
      this.props.reset();
    }
  },

  shouldComponentUpdate() {
    if (isLoggedIn()) {
      this.context.router.push('/broadcasts/');
      return false;
    }
    return true;
  },

  handleChangeUsername(event) {
    this.setState({ email: event.target.value });
  },
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  },
  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  },
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="span12">
              <form className="form-horizontal">
                <div>
                  <legend>Login</legend>
                </div>
                <div className="control-group">
                  <label className="control-label" >Username</label>
                  <div className="controls">
                    <input
                      onChange={this.handleChangeUsername}
                      type="text"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Password</label>
                  <div className="controls">
                    <input
                      onChange={this.handleChangePassword}
                      type="password"
                      className="input-xlarge"
                    />
                  </div>
                </div>
                <div className="control-group">
                  <div className="controls">
                    <button
                      className="btn btn-success"
                      onClick={this.handleSubmit}
                    >Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(Component);
