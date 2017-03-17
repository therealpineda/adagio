import React from 'react';
import { connect } from 'react-redux';
import { jumpQueue, shuffleQueue } from '../../actions/play_queue_actions';

class MiniPlayQueue extends React.Component {
  constructor() {
    super();
    this.shuffleQueue = this.shuffleQueue.bind(this);
  }

  jumpQueue(amount) {
    this.props.jumpQueue(amount);
  }

  shuffleQueue() {
    const songs = this.props.queue;
    this.props.shuffleQueue(songs);
  }

  render() {
    const queued = this.props.queue.map((song, idx) => {
      return (
        <li
          key={idx}
          className="mini-play-queued-song"
          onClick={this.jumpQueue.bind(this, idx)}
        >
          {song.title}
        </li>
      );
    });
    if (queued.length > 0) {
      return (
        <div
          id="mini-play-queue"
          className="custom-scrollbar"
        >
          <div id="mini-play-queue-title">
            <p>Play Queue</p>
            <i
              className="fa fa-random mpq-shuffle"
              aria-hidden="true"
              onClick={this.shuffleQueue}
            ></i>
          </div>
          <ul>
            {queued}
          </ul>
        </div>
      );
    }
    return (
      <div id="mini-play-queue">
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    queue: state.playQueue.slice(1),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jumpQueue: (amount) => { return dispatch(jumpQueue(amount)); },
    shuffleQueue: (songs) => { return dispatch(shuffleQueue(songs)); },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayQueue);
