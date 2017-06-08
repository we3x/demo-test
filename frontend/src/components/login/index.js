import React from 'react';

const Component = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: '',
    };
  },
  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  },
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  },
  handleSubmit(event) {
    console.log(this.state, event);
  },
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="span12">
              <div className="form-horizontal">
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
              </div>
            </div>
          </div>
      </div>
    );
  },
});

export default Component;
