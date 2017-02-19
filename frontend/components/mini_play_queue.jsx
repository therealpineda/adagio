import React from 'react';
import {connect} from 'react-redux';
import { jumpQueue } from '../actions/play_queue_actions';

class MiniPlayQueue extends React.Component {
  constructor() {
    super();
  }

  jumpQueue(amount) {
    this.props.jumpQueue(amount);
  }

  render() {
    let queued = this.props.queue.map((song, idx) => {
      return (
        <li
          key={idx}
          className="mini-play-queued-song"
          onClick={this.jumpQueue.bind(this, idx)}>
          {song.title}
        </li>
      );
    });
    if (queued.length > 0 ) {
      return (
        <div id="mini-play-queue">
          <p id="mini-play-queue-title">Play Queue</p>
          <ul>
            {queued}
          </ul>
        </div>
      );
    } else {
      return (
        <div id="mini-play-queue">
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    queue: state.playQueue.slice(1)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jumpQueue: (amount) => { return dispatch(jumpQueue(amount)); }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayQueue);
