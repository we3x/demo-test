import React from 'react';
import Login from './login';

const Root = React.createClass({
  handleSomething(event) {
    console.log(event);
  },
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  },
});

export default Root;
