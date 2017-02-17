import React from 'react';
import AudioPlayer from './audio_player_33';
import {connect} from 'react-redux';


class NowPlaying extends React.Component {
  render() {

    return (
      <div id='now-playing' className="comp">
        <h6>Now Playing</h6>
          <div id='audio-player-container'>
            <AudioPlayer />
          </div>
      </div>
    );
  }
}

export default NowPlaying;
