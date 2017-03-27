import React from 'react';
import { connect } from 'react-redux';
import SongsIndex from './my_music/songs_index';

const PlayQueue = ({ currentTrack, queued }) =>  {
  let track = 'Go find music!';
  if (currentTrack[0]) {
    track = (
      <div>
        <div className='pq-subheader'>
          <h3>Current Track</h3>
        </div>
        <div id="playlist-songs-index">
          <SongsIndex songs={currentTrack} />
        </div>
      </div>
    );
  }

  let queue = '';
  if (queued.length > 0) {
    queue = (
      <div>
        <div className="pq-subheader">
          <h3>Queued Tracks</h3>
        </div>
        <div id="playlist-songs-index">
          <SongsIndex songs={queued} />
        </div>
      </div>
    );
  }

  return (
    <div className="queue custom-scrollbar">
      <div className="pq-header">
        <h2>Play Queue</h2>
      </div>
      { track }
      { queue }
    </div>
  );
}

const mapStateToProps = (state) => {
  const queue = state.playQueue;
  const currentTrack = queue.length > 0 ? [queue[0]] : [];
  return {
    currentTrack,
    queued: queue.slice(1),
  }
};

export default connect(mapStateToProps)(PlayQueue);
