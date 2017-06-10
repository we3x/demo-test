import React from 'react';
import actions from './actions';

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
  getInitialState: {
    title: '',
    startTime: '',
    category: 0,
  },
  getInitialProps: {
  },
  render() {
    return (
      <div>
        <a
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
                  Modal title
                </h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default connect(mapStateToProps, actions)(PutBroadcast);
