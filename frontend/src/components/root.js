import React from 'react';

const Root = React.createClass({
  handleSomething(event) {
    console.log(event);
  },
  render() {
    return (
      <div>
        Hello world!
        <button onClick={this.handleSomething} > Hello </button>
      </div>
    );
  },
});

export default Root;
