import React from 'react';

function main(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

main.propTypes = {
  children: React.PropTypes.node,
};

export default main;
